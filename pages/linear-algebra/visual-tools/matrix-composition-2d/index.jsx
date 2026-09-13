import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import MatrixComposition from '../../../../app/components/linear-algebra copy/r2-visualizers/matrix-composition/MatrixComposition'
import { SCENARIOS as MC_SCENARIOS } from '../../../../app/components/linear-algebra copy/r2-visualizers/matrix-composition/MatrixComposition'
import matrixCompositionDiagrams, { groupOf, statsFor } from '../../../../app/components/linear-algebra copy/r2-visualizers/matrix-composition/matrixCompositionDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'matrix composition',
    'composition of linear transformations',
    'matrix multiplication geometry',
    'why matrix multiplication is not commutative',
    'AB vs BA',
    'composition visualizer',
    'matrix composition 2d',
    'product of transformations',
    'apply two matrices in order',
    'non commutative matrices',
    'two reflections rotation',
    'matrix inverse composition identity',
    'interactive linear algebra',
    'linear transformation pipeline',
    'linear algebra visualizer'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Composition** &mdash; applying one transformation after another. Applying $B$ and then $A$ sends $\\mathbf{v}$ to $A(B\\mathbf{v})$.

**Matrix product** &mdash; the single matrix $AB$ with $(AB)\\mathbf{v} = A(B\\mathbf{v})$ for every $\\mathbf{v}$. [Matrix multiplication](!/linear-algebra/matrix/operations#5) is defined so that this works.

**Order of application** &mdash; in $AB\\mathbf{v}$ the matrix nearest $\\mathbf{v}$ acts first: $B$, then $A$. Products read right to left.

**Non-commutativity** &mdash; $AB \\neq BA$ in general; the two orders are different transformations with different matrices.

**Commuting pair** &mdash; matrices with $AB = BA$, such as two rotations, two diagonal matrices, or anything paired with a multiple of the identity.

**Trail** &mdash; the two-segment path $\\mathbf{v}_0 \\to B\\mathbf{v} \\to AB\\mathbf{v}$ that a [vector](!/linear-algebra/vectors#1) follows through the pipeline.

**Stages** &mdash; the same pipeline shown as three canvases: the input, the intermediate, and the final state.

**Determinant of a product** &mdash; $\\det(AB) = \\det A \\cdot \\det B$, the same in either order even when the matrices differ.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started`,
      content: `The tool shows a vector $\\mathbf{v}$ travelling through two matrices. In **Trail** view a single canvas draws the path $\\mathbf{v}_0 \\to B\\mathbf{v} \\to AB\\mathbf{v}$ in two colours, teal for the first matrix and purple for the second, with the alternative order $BA$ drawn dashed for comparison. In **Stages** view the same pipeline is laid out as three canvases with chevrons between them.

Try this sequence to build intuition:

&bull; Start on the **Shear &times; rotate** preset and press **play**. In the first half of the animation the grid shears and $\\mathbf{v}$ slides to $B\\mathbf{v}$; in the second half the sheared plane rotates and $\\mathbf{v}$ arrives at $AB\\mathbf{v}$.
&bull; Flip the **AB / BA** toggle in the top bar. The same two matrices, applied in the other order, land $\\mathbf{v}$ somewhere else, and the dashed path shows where the first order went.
&bull; Switch to **Two rotations** and flip the toggle again. Now both orders land in the same place: rotations commute.
&bull; Drag $\\mathbf{v}$ in either view. The trail and both endpoints follow it.

The point: matrix multiplication is composition of transformations, and composition depends on order.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Trail and Stages Views`,
      content: `The top bar switches between two layouts of the same state.

&bull; **Trail** &mdash; one canvas. The grid and unit square carry the partially applied product as the animation runs, and the vector's path is drawn as a breadcrumb trail with ghost markers at $\\mathbf{v}_0$, the intermediate point, and the final point. The other order's path is drawn dashed behind it
&bull; **Stages** &mdash; three canvases in a row: the input plane with $\\mathbf{v}$, the plane after the first matrix with its unit square tinted in that matrix's colour, and the plane after both with the final square in indigo. Chevrons between them name the matrix applied at each step

Switching views changes nothing about the matrices, the vector, the mode or the animation position. Trail is better for seeing where a vector goes; Stages is better for seeing what happens to the whole plane at each step.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `The Two-Phase Animation`,
      content: `The animation parameter $t$ runs from $0$ to $1$ in two halves.

&bull; For $t$ from $0$ to $0.5$, the first matrix is blended in from the identity: the grid morphs from square to its image under $B$ (in $AB$ mode), and $\\mathbf{v}$ slides in a straight line from $\\mathbf{v}_0$ to $B\\mathbf{v}$
&bull; For $t$ from $0.5$ to $1$, the second matrix is blended in on top of the completed first: the grid morphs from $B$ to $AB$, and $\\mathbf{v}$ slides from $B\\mathbf{v}$ to $AB\\mathbf{v}$
&bull; The progress bar is split at the midpoint and coloured to match; the transport buttons step, scrub and reset

Because each phase blends one matrix linearly, the vector's path within a phase is a straight segment, which is why the trail is a two-segment polyline with a bend at the intermediate point. Selecting a preset or flipping the order restarts the animation from $t = 0$ and plays it.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `The Matrices Card and the Live Card`,
      content: `The matrices card shows $A$ and $B$ as editable $2 \\times 2$ grids, with the product for the current order computed beside them. Editing an entry clears the preset and rebuilds everything.

The live card compares the two orders directly:

&bull; $AB$ and $BA$ as matrices, side by side
&bull; $AB\\mathbf{v}$ and $BA\\mathbf{v}$ for the current $\\mathbf{v}$
&bull; A verdict, **commute** or **do not commute**, from whether the two products agree
&bull; $\\det(AB)$, which always equals $\\det A \\cdot \\det B$ and is therefore the same for both orders

The determinant line is the reminder that some things about a product do not depend on order: area scaling and orientation are multiplicative, even though the shapes themselves differ.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `Display Layer Toggles`,
      content: `Six chips switch the overlays on and off.

&bull; **grid** &mdash; the morphing background grid
&bull; **unit sq** &mdash; the unit square under the current partial product, tinted by stage
&bull; **ghosts** &mdash; the markers at $\\mathbf{v}_0$, the intermediate point and the endpoint, which fill in as the animation passes them
&bull; **AB path** &mdash; the primary trail in the current order's colours
&bull; **BA path** &mdash; the dashed alternative trail and its ghosts
&bull; **labels** &mdash; the names on every marker

Turning off the grid and unit square leaves only the two trails, which is the clearest way to compare where the two orders send a single vector.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Preset Scenarios`,
      content: `The sidebar offers nine pairs in three groups.

&bull; **Commutative** &mdash; two rotations, two diagonal scales, and a uniform scale with a rotation; in each case $AB = BA$ and the dashed path lands exactly on the solid one
&bull; **Non-commutative** &mdash; shear with rotation, two perpendicular shears, projection with rotation, and reflection with rotation; the two orders diverge, sometimes drastically
&bull; **Reveals** &mdash; two reflections that compose to a rotation, and a shear with its inverse that composes to the identity

The four sections that follow freeze one representative of each situation, with the numbers the tool computes for the default vector. The explanation card in the tool links back to the matching section for whichever preset is active.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `What Composition Is`,
      content: `If $B$ sends $\\mathbf{v}$ to $B\\mathbf{v}$ and $A$ then sends that to $A(B\\mathbf{v})$, the overall effect is a single [linear transformation](!/linear-algebra/transformations#1), and its matrix is the product $AB$:

$$A(B\\mathbf{v}) = (AB)\\,\\mathbf{v} \\quad \\text{for every } \\mathbf{v}$$

This is not a coincidence about matrices; it is the reason matrix multiplication is defined the way it is. The column $j$ of $AB$ is $A$ applied to column $j$ of $B$, which is where the row-times-column rule comes from: the entry $(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ is exactly what falls out of applying $A$ to the image of the $j$-th [basis](!/linear-algebra/vector-spaces#2) vector under $B$.

Two consequences follow immediately. Products read right to left, since the matrix nearest the vector acts first. And products need not commute, because doing two things in different orders need not give the same result: shearing a picture and then rotating it is not the same as rotating and then shearing.

For the arithmetic of the product itself, see the [matrix multiplication visualizer](!/visual-tools/matrix-multiplication); for transformations as matrices in general, see the [matrix representation theory page](!/linear-algebra/transformations/matrix-representation).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `When Matrices Commute`,
      content: `Most pairs of matrices do not commute, but several important families do.

&bull; **Rotations of the plane** &mdash; composing rotations adds their angles, and addition is commutative: $R(\\alpha)R(\\beta) = R(\\alpha + \\beta) = R(\\beta)R(\\alpha)$
&bull; **Diagonal matrices** &mdash; they scale the axes independently, so the order of two independent scalings does not matter
&bull; **Multiples of the identity** &mdash; $kI$ commutes with every matrix, since $kI \\cdot M = kM = M \\cdot kI$
&bull; **Powers of one matrix** &mdash; $M^a$ and $M^b$ always commute
&bull; **Simultaneously diagonalizable matrices** &mdash; matrices that share a full set of [eigenvectors](!/linear-algebra/eigen#2) commute, and this is the general criterion

The test in the tool is direct: compute $AB$ and $BA$ and compare. When they agree, the dashed alternative path lands on the solid one and the live card says so. Note that $\\det(AB) = \\det(BA)$ always, so the determinant cannot tell the two orders apart; only the matrices themselves can.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Key Properties`,
      content: `Composition obeys a few rules that hold regardless of order.

&bull; **Associativity**: $(AB)C = A(BC)$; three transformations in sequence compose the same way however the pairs are grouped
&bull; **Identity**: $AI = IA = A$; the [identity matrix](!/linear-algebra/matrix/types#2) is the do-nothing transformation
&bull; **Inverse**: $AA^{-1} = A^{-1}A = I$; a transformation followed by its undoing is the identity, in either order
&bull; **Determinant**: $\\det(AB) = \\det A \\cdot \\det B$
&bull; **Inverse of a product**: $(AB)^{-1} = B^{-1}A^{-1}$; to undo $B$-then-$A$, undo $A$ first, then $B$
&bull; **Transpose of a product**: $(AB)^T = B^T A^T$
&bull; **Rank**: $\\operatorname{rank}(AB) \\leq \\min(\\operatorname{rank} A, \\operatorname{rank} B)$; composing with a [rank](!/linear-algebra/matrix/rank#1)-$1$ projection can never restore a lost [dimension](!/linear-algebra/vector-spaces/dimension#1)
&bull; **Not commutative**: $AB \\neq BA$ in general, and $AB = BA$ is a special property of the pair`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Matrix multiplication](!/visual-tools/matrix-multiplication) &mdash; the arithmetic whose meaning this tool shows.

[Linear transformations](!/linear-algebra/visual-tools/linear-transformation-2d) &mdash; each of $A$, $B$ and $AB$ as a morph of the plane.

[Inverse](!/linear-algebra/visual-tools/matrix-inverse) &mdash; the matrix that composes with $A$ to give the identity; the shear-and-inverse preset.

[Reflection](!/linear-algebra/visual-tools/reflection-2d) &mdash; two reflections compose to a rotation; the two-reflections preset.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) &mdash; multiplicative under composition, and the same for both orders.

[Rank](!/linear-algebra/visual-tools/matrix-rank) &mdash; can only fall under composition; the projection presets.

[Eigenvectors](!/linear-algebra/visual-tools/eigen-vectors-2d) &mdash; commuting matrices share eigenvectors.

[Change of basis](!/linear-algebra/visual-tools/change-basis-2d) &mdash; $P^{-1}AP$ is a composition of three matrices, read right to left.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `A Commuting Pair: Two Rotations`,
      content: `On the two-rotations preset $A$ rotates by $60°$ and $B$ by $30°$. Applying $B$ then $A$ rotates by $90°$ in total; applying $A$ then $B$ also rotates by $90°$. The two orders agree.

The frozen picture below is the end of the $AB$ run: the solid trail bends at $B\\mathbf{v}$ and ends at $AB\\mathbf{v}$, and the dashed $BA$ trail, though it bends at a different intermediate point $A\\mathbf{v}$, ends at exactly the same place.`,
      before: ``,
      after: `The intermediate points differ, $B\\mathbf{v}$ is $\\mathbf{v}$ turned by $30°$ while $A\\mathbf{v}$ is $\\mathbf{v}$ turned by $60°$, but the destinations coincide because $30° + 60° = 60° + 30°$. Rotations of the plane form a commutative group.

Commuting is a property of the pair, not of either matrix alone. Each of these rotations fails to commute with a shear, as the non-commutative presets show.`,
      link: '',
    },
    obj12: {
      title: `A Non-Commuting Pair: Shear and Rotation`,
      content: `On the default preset $B$ shears horizontally by $0.5$ and $A$ rotates by $45°$. Shearing first and then rotating lands $\\mathbf{v}$ in one place; rotating first and then shearing lands it somewhere else.

The frozen picture below is the end of the $AB$ run: the solid trail goes $\\mathbf{v}_0 \\to B\\mathbf{v} \\to AB\\mathbf{v}$, the dashed trail goes $\\mathbf{v}_0 \\to A\\mathbf{v} \\to BA\\mathbf{v}$, and the two endpoints are visibly apart.`,
      before: ``,
      after: `A shear stretches the plane along one direction while a rotation turns every direction, and the two deform the plane in ways that do not slide past each other. The matrices $AB$ and $BA$ have different entries, not just different pictures.

What they share is the determinant: both are $1$, since the shear and the rotation each preserve area. The unit square ends up as a parallelogram of area $1$ in both orders, but a differently oriented one.`,
      link: '',
    },
    obj13: {
      title: `A Reveal: Two Reflections Make a Rotation`,
      content: `On the two-reflections preset $B$ reflects across the x-axis and $A$ reflects across $y = x$. Neither is a rotation, but their composition is: $AB$ is the rotation by $90°$.

The frozen picture below shows $\\mathbf{v}$ arriving at $AB\\mathbf{v}$, which is $\\mathbf{v}_0$ turned a quarter turn counterclockwise, and the unit square rotated but not flipped.`,
      before: ``,
      after: `Each reflection reverses orientation, with determinant $-1$, and two reversals cancel: $\\det(AB) = (-1)(-1) = +1$. The composition preserves lengths, angles and orientation, which is the definition of a rotation, and its angle is twice the $45°$ between the two mirrors.

The other order is the rotation by $-90°$. So this pair does not commute either, but the two results are as closely related as non-commuting products can be: inverses of each other.`,
      link: '',
    },
    obj14: {
      title: `A Reveal: A Shear and Its Inverse`,
      content: `On the shear-and-inverse preset $B$ shears by $0.6$ and $A$ shears by $-0.6$. Applying one after the other undoes the first: $AB = I$, and $\\mathbf{v}$ returns to $\\mathbf{v}_0$.

The frozen picture below shows the trail leaving $\\mathbf{v}_0$ for $B\\mathbf{v}$ and coming straight back, with the final unit square sitting exactly on the original.`,
      before: ``,
      after: `This is what an inverse matrix means as a transformation: the map that composes with the original to give the identity. It works in both orders here, $AB = BA = I$, which is always true of a matrix and its inverse.

The animation makes the undoing visible. The first half shears the plane; the second half shears it back, and at $t = 1$ the grid is square again. Nothing has been lost, because a shear has determinant $1$ and is invertible. Contrast the projection presets, where the first half flattens the plane and no second matrix can ever restore it.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from the tool's own Trail-view composition in AB mode at t = 1:
     MatrixComposition's exported SVGRender for the morphed grid, the final
     unit square, the solid AB trail, the dashed BA trail and the ghost
     markers. See matrixCompositionDiagrams.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: matrixCompositionDiagrams[key], caption, text })
  const f = (x) => Math.round(x * 100) / 100
  const pt = (p) => `(${f(p[0])}, ${f(p[1])})`

  const stateUnits = {
    commute: unit('commute', 'Two rotations, end of the AB run',
      `The solid trail bends at Bv = ${pt(statsFor.twoRotations.Bv)} and ends at ABv = ${pt(statsFor.twoRotations.ABv)}; the dashed BA trail ` +
      `bends elsewhere, at Av = ${pt(statsFor.twoRotations.Av)}, but ends at the same point. 30&deg; + 60&deg; = 60&deg; + 30&deg;.`),
    noncommute: unit('noncommute', 'Shear then rotate, end of the AB run',
      `Shear first, then rotate: ABv = ${pt(statsFor.shearRotate.ABv)}. Rotate first, then shear: BAv = ${pt(statsFor.shearRotate.BAv)}. ` +
      'Two different destinations from the same two matrices; both products have determinant 1.'),
    revealRotation: unit('revealRotation', 'Two reflections, end of the AB run',
      `v<sub>0</sub> = ${pt([1.5, 1])} has arrived at ABv = ${pt(statsFor.twoReflections.ABv)}, a quarter turn counterclockwise, and the unit square ` +
      'is rotated but not flipped: two orientation reversals cancel into a rotation by 90&deg;.'),
    revealInverse: unit('revealInverse', 'Shear and its inverse, end of the AB run',
      `The trail leaves v<sub>0</sub> for Bv = ${pt(statsFor.shearInverse.Bv)} and comes straight back: ABv = ${pt(statsFor.shearInverse.ABv)}. ` +
      'AB = I, and the final unit square sits exactly on the original.'),
  }


  /* ---- per-scenario panel notes (Line 1) ----
     The tool's ExplanationCard accepts an override with a byPreset map and
     REPLACES the entry, so each override spreads the tool's own SCENARIOS
     entry and appends the anchor to `body`. All nine scenarios are covered.
     The card renders with dangerouslySetInnerHTML, so the anchors are raw HTML. */
  const SECTION_FOR = (key) => {
    if (key === 'twoReflections') return ['two-reflections-make-a-rotation', 'the two-reflections reveal']
    if (key === 'shearInverse') return ['a-shear-and-its-inverse', 'the inverse reveal']
    const g = groupOf[key]
    if (g === 'commute') return ['a-commuting-pair', 'commuting pairs']
    return ['a-non-commuting-pair', 'non-commuting pairs']
  }

  const explanationOverride = {
    byPreset: Object.fromEntries(
      Object.entries(MC_SCENARIOS).map(([key, sc]) => {
        const [slug, label] = SECTION_FOR(key)
        // Only the fields ExplanationCard reads. A blanket spread would carry
        // this tool's `A` and `B`, which are FUNCTIONS (() => rotMatrix(60)),
        // and getStaticProps cannot serialize a function.
        return [key, {
          label: sc.label,
          tag: sc.tag,
          title: sc.title,
          exTag: sc.exTag,
          insight: sc.insight,
          body: `${sc.body || ''}<br/><a href="#${slug}" style="color:#1d4ed8;font-weight:600">Learn more about ${label}</a>` +
            ` &middot; <a href="#when-matrices-commute" style="color:#1d4ed8;font-weight:600">when matrices commute</a>`,
        }]
      })
    ),
  }


  const faqQuestions = {
    obj1: {
      question: "What does it mean to compose two matrices?",
      answer: "Composing two matrices means applying one transformation after another. If B sends v to Bv and A then sends that to A(Bv), the combined effect is a single linear transformation whose matrix is the product AB. Matrix multiplication is defined precisely so that (AB)v equals A(Bv) for every vector v."
    },
    obj2: {
      question: "Why is matrix multiplication not commutative?",
      answer: "Because doing two things in different orders need not give the same result. Shearing the plane and then rotating it produces a different picture from rotating and then shearing, so the matrices AB and BA are different. Some special pairs do commute, such as two rotations or two diagonal matrices, but in general the order matters."
    },
    obj3: {
      question: "In the product ABv, which matrix is applied first?",
      answer: "The matrix nearest the vector, B. Products are read right to left: ABv means first apply B to v, then apply A to the result. The tool's AB mode animates B in the first half and A in the second half, and the BA mode reverses that."
    },
    obj4: {
      question: "Which pairs of matrices commute?",
      answer: "Rotations of the plane always commute with each other, because composing rotations adds their angles. Diagonal matrices commute because they scale the axes independently. Any multiple of the identity commutes with every matrix, and powers of a single matrix commute with each other. In general, two matrices commute exactly when they can be diagonalized by the same basis of eigenvectors."
    },
    obj5: {
      question: "Why do two reflections compose to a rotation?",
      answer: "Each reflection preserves lengths but reverses orientation, with determinant −1. Two reversals cancel, so the composition preserves lengths and orientation, which makes it a rotation. Its angle is twice the angle between the two mirror lines, and swapping the order of the reflections gives the rotation in the opposite direction."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Composition 2D Visualizer",
      "description": "Interactive visualizer for the composition of two matrices in the plane. Watch a vector travel through B and then A along a two-segment trail, compare AB with BA, and see why matrix multiplication is not commutative.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-composition-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two-phase animation applying the first matrix and then the second to the grid, the unit square and a draggable vector",
        "Trail view with the AB path solid and the BA path dashed for direct comparison",
        "Stages view with three canvases showing the input, intermediate and final planes",
        "AB / BA toggle that reruns the animation in the other order",
        "Editable 2×2 matrices and a live card comparing AB with BA",
        "Nine presets in three groups: commutative, non-commutative and reveals",
        "Display layer toggles"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2026-09-12",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "matrix composition, composition of linear transformations, matrix multiplication geometry, why matrix multiplication is not commutative, AB vs BA, composition visualizer, matrix composition 2d, product of transformations, apply two matrices in order, non commutative matrices, two reflections rotation, matrix inverse composition identity, interactive linear algebra, linear transformation pipeline, linear algebra visualizer"
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
          "name": "Matrix Composition 2D",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-composition-2d"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-composition-2d'),
      sectionsContent,
      stateUnits,
      explanationOverride,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Composition 2D Visualizer | AB versus BA",
        description: "Watch a vector travel through two matrices in the plane, first B then A, and compare the result with the other order. See why matrix multiplication is composition and why it is not commutative.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-composition-2d",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="58" r="3" fill="#FAC775"/><line x1="16" y1="58" x2="40" y2="50" stroke="#97C459" stroke-width="2.6"/><circle cx="40" cy="50" r="3" fill="#97C459"/><line x1="40" y1="50" x2="56" y2="24" stroke="#85B7EB" stroke-width="2.6"/><circle cx="56" cy="24" r="3.5" fill="#85B7EB"/><line x1="16" y1="58" x2="26" y2="34" stroke="#85B7EB" stroke-width="1.4" stroke-dasharray="3,2" opacity="0.7"/><line x1="26" y1="34" x2="66" y2="40" stroke="#97C459" stroke-width="1.4" stroke-dasharray="3,2" opacity="0.7"/><circle cx="66" cy="40" r="3" fill="none" stroke="#97C459" stroke-width="1.2" stroke-dasharray="1.5,1.5"/><text x="14" y="70" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">v</text><text x="62" y="18" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">ABv</text><text x="72" y="50" font-family="Georgia,serif" font-size="6.5" fill="#B5D4F4" text-anchor="middle" font-style="italic">BAv</text></svg>`,
        name: "Matrix Composition 2D Visualizer",
        hubDescription: "Watch a vector travel through two matrices in the plane along a two-segment trail, first B then A, while the grid and unit square morph in two phases. Flip the order and see the dashed alternative path land somewhere else, or on the same point when the pair commutes. Nine presets cover commuting pairs, non-commuting pairs, two reflections composing to a rotation, and a shear cancelled by its inverse, in a single-canvas trail view or a three-canvas stages view.",
        category: "Linear Algebra",
        subCategory: "Linear Transformations"
      }
    }
  }
}

export default function MatrixComposition2DPage({seoData, sectionsContent, stateUnits, explanationOverride, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'trail-and-stages-views'),
    plain('obj3', 'the-two-phase-animation'),
    plain('obj6', 'preset-scenarios'),
    stateRow('obj11', 'a-commuting-pair', 'commute'),
    stateRow('obj12', 'a-non-commuting-pair', 'noncommute'),
    stateRow('obj13', 'two-reflections-make-a-rotation', 'revealRotation'),
    stateRow('obj14', 'a-shear-and-its-inverse', 'revealInverse'),
    plain('obj4', 'the-matrices-card-and-the-live-card'),
    plain('obj5', 'display-layer-toggles'),
    plain('obj7', 'what-composition-is'),
    plain('obj8', 'when-matrices-commute'),
    plain('obj9', 'key-properties'),
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
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Matrix Composition</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <MatrixComposition explanationOverride={explanationOverride}/>
   </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"
         secondaryNavTitle="More in this Section"
   />
   <br/>
   <br/>
   <br/>
   <br/>
   <RelatedTools tools={relatedTools}/>
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}
