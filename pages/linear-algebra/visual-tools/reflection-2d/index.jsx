import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import Reflection from '../../../../app/components/linear-algebra copy/r2-visualizers/reflection/Reflection'
import { SCENARIOS as RF_SCENARIOS } from '../../../../app/components/linear-algebra copy/r2-visualizers/reflection/Reflection'
import reflectionDiagrams, { groupOf, statsFor } from '../../../../app/components/linear-algebra copy/r2-visualizers/reflection/reflectionDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'reflection matrix',
    'reflection across a line',
    'reflection matrix 2x2',
    'reflection visualizer',
    'reflection 2d',
    'linear transformation reflection',
    'householder reflection',
    'reflection determinant -1',
    'orientation reversing',
    'involution matrix',
    'reflection eigenvalues',
    'interactive linear algebra',
    'reflection across y = x',
    'mirror line through origin',
    'linear algebra visualizer'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Reflection across a line** &mdash; the linear map sending each [vector](!/linear-algebra/definitions#vector) $\\mathbf{v}$ to its mirror image on the other side of the line, the same distance away.

**Reflection matrix** &mdash; for the mirror at angle $\\theta$, $R = \\begin{pmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{pmatrix}$, equivalently $R = 2P - I$ with $P$ the projection onto the same line.

**Mirror** &mdash; the line of fixed points; every vector on it is its own reflection.

**Involution** &mdash; $R^2 = I$; reflecting twice returns every vector to where it started, so $R^{-1} = R$.

**Orientation reversing** &mdash; $\\det R = -1$; the unit square comes back the same shape but flipped over.

**Eigenvalues $\\pm 1$** &mdash; $+1$ along the mirror, $-1$ along the perpendicular; the two eigendirections are perpendicular.

**Midpoint property** &mdash; the midpoint of $\\mathbf{v}$ and $R\\mathbf{v}$ is the projection $P\\mathbf{v}$, the foot of the perpendicular on the mirror.

**Isometry** &mdash; $\\|R\\mathbf{v}\\| = \\|\\mathbf{v}\\|$; reflections preserve lengths and angles.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started`,
      content: `The canvas shows a mirror line through the origin in blue, a draggable [vector](!/linear-algebra/vectors#1) $\\mathbf{v}$ in orange, its reflection $R\\mathbf{v}$ in cyan, a dashed perpendicular joining the two with a right-angle mark where it crosses the mirror, and a purple dot at the midpoint, labelled $P\\mathbf{v}$.

Try this sequence to build intuition:

&bull; Start on the **y = x** preset. Drag $\\mathbf{v}$ and watch $R\\mathbf{v}$ move as its mirror image: the same distance from the line, on the other side, with the joining segment always perpendicular to the mirror.
&bull; Drag $\\mathbf{v}$ onto the mirror. $R\\mathbf{v}$ lands on top of it: points on the mirror are fixed.
&bull; Press **play** in the animation panel. The grid and unit square morph from the identity to $R$; halfway through, at $t = 0.5$, the picture is the projection onto the mirror, and at $t = 1$ the square has flipped over.
&bull; Move the **$\\theta$ slider** in the matrix card and watch the four entries of $R$ change while $\\det R$ stays $-1$ and $\\operatorname{tr} R$ stays $0$.

The point: a reflection is a rigid motion of the plane that cannot be achieved by turning, and $\\det R = -1$ is the algebraic fingerprint of that.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Dragging the Vector`,
      content: `The tip of $\\mathbf{v}$ is the only handle on the canvas.

&bull; **Drag $\\mathbf{v}$** &mdash; $R\\mathbf{v}$ follows as the mirror image, the perpendicular and midpoint redraw, and the readouts under the canvas update
&bull; **Cross the mirror** &mdash; $\\mathbf{v}$ and $R\\mathbf{v}$ swap sides; on the line itself they coincide and the perpendicular vanishes
&bull; **Cross the perpendicular through the origin** &mdash; when $\\mathbf{v}$ is perpendicular to the mirror, $R\\mathbf{v} = -\\mathbf{v}$, the eigenvalue $-1$ made visible

The mirror is not dragged. It is set by the presets or the $\\theta$ slider in the matrix card, because a line through the origin is one number, its angle.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `The Morph Animation`,
      content: `The animation panel blends the identity into the reflection: $M(t) = (1 - t)I + tR$ for $t$ from $0$ to $1$, applied to the grid and the unit square.

&bull; At $t = 0$ the grid is the ordinary grid and the unit square is a square, filled blue for positive [determinant](!/linear-algebra/determinants#1)
&bull; At $t = 0.5$ the map is $\\tfrac{1}{2}(I + R) = P$, the projection onto the mirror: the grid and square are flattened onto the line, and the fill turns grey for determinant $0$
&bull; At $t = 1$ the grid has passed through the mirror and come out on the other side, and the unit square is filled purple for negative determinant: the same shape, flipped over

$\\mathbf{v}$ and $R\\mathbf{v}$ are drawn independently of $t$, so the mirror-image geometry stays readable while the background morphs. Selecting a preset replays the morph automatically. The passage through a flattened plane is not incidental: a reflection cannot be reached from the identity by any continuous family of invertible maps, because the determinant would have to cross from $+1$ to $-1$ through $0$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `The Matrix Card and the Angle Slider`,
      content: `The matrix card shows the four entries of $R$ for the current mirror and a slider for the angle $\\theta$ in degrees.

&bull; The entries are $\\cos 2\\theta$, $\\sin 2\\theta$, $\\sin 2\\theta$ and $-\\cos 2\\theta$; the matrix is symmetric and its diagonal entries are negatives of each other, so the [trace](!/linear-algebra/matrix/trace#1) is always $0$
&bull; The doubled angle is the reason the x-axis ($\\theta = 0°$) gives $\\operatorname{diag}(1, -1)$ while the diagonal ($\\theta = 45°$) gives the coordinate swap $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$
&bull; The slider runs from $0°$ to $180°$, because a line has no orientation: $\\theta$ and $\\theta + 180°$ are the same mirror and the same matrix

Moving the slider clears the current preset. Every $R$ it produces has $\\det R = -1$; the family is one-dimensional, parametrized by the angle of the mirror.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `The Live Card`,
      content: `The live card reports the numbers behind the picture.

&bull; $\\|\\mathbf{v}\\|$ and $\\|R\\mathbf{v}\\|$ &mdash; always equal, since a reflection preserves lengths
&bull; $\\|\\mathbf{v} - R\\mathbf{v}\\|$ &mdash; the length of the perpendicular joining the two, twice the distance from $\\mathbf{v}$ to the mirror
&bull; **angle** &mdash; between $\\mathbf{v}$ and the mirror; $R\\mathbf{v}$ makes the same angle on the other side
&bull; $\\det R$ and $\\operatorname{tr} R$ &mdash; always $-1$ and $0$, the invariants of a reflection
&bull; **involution** &mdash; a check that $R(R\\mathbf{v}) = \\mathbf{v}$, which holds by construction and is worth seeing stated

The midpoint of $\\mathbf{v}$ and $R\\mathbf{v}$ is $P\\mathbf{v}$, the projection onto the mirror, which is the picture behind the identity $R = 2P - I$: go to the foot of the perpendicular and continue the same distance again.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Preset Scenarios`,
      content: `The sidebar offers seven mirrors in three groups.

&bull; **Coordinate axes** &mdash; the x-axis and the y-axis; $R$ is diagonal and simply negates one coordinate
&bull; **Diagonals** &mdash; $y = x$ and $y = -x$; $R$ swaps the coordinates, with or without a sign change
&bull; **Custom angle** &mdash; $30°$, $60°$ and $120°$; off-diagonal entries appear, and the $120°$ mirror is the same line as $-60°$

The three sections that follow take one representative from each group and freeze it, and a fourth freezes the morph halfway, where it passes through the projection. The explanation card in the tool links back to the matching section for whichever preset is active.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `What Reflection Is`,
      content: `The reflection of $\\mathbf{v}$ across the line through the origin with unit direction $\\mathbf{u}$ is built from the projection: the projection $P\\mathbf{v} = (\\mathbf{v} \\cdot \\mathbf{u})\\,\\mathbf{u}$ is the foot of the perpendicular, and the reflection continues the same distance beyond it,

$$R\\mathbf{v} = 2P\\mathbf{v} - \\mathbf{v} = 2(\\mathbf{v} \\cdot \\mathbf{u})\\,\\mathbf{u} - \\mathbf{v}$$

As a matrix, $R = 2\\mathbf{u}\\mathbf{u}^T - I$, and with $\\mathbf{u} = (\\cos\\theta, \\sin\\theta)$ the double-angle formulas give

$$R = \\begin{pmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{pmatrix}$$

Every property on the live card follows from $R = 2P - I$. Squaring: $R^2 = 4P^2 - 4P + I = 4P - 4P + I = I$, using $P^2 = P$, so a reflection is an involution. The trace is $2 \\operatorname{tr} P - 2 = 0$. The eigenvalues are $2 \\cdot 1 - 1 = 1$ along the mirror and $2 \\cdot 0 - 1 = -1$ along the perpendicular, so the determinant is $-1$. And $R$ is symmetric because $P$ is.

Reflections are the building blocks of all rigid motions fixing the origin: every rotation is a product of two reflections, and every orthogonal $2 \\times 2$ matrix is either a rotation or a reflection. For the general theory of reflections, rotations and the other geometric transformations, see the [geometric transformations theory page](!/linear-algebra/transformations/geometric).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Composing Reflections`,
      content: `Two reflections in a row make a rotation, and the angle of the rotation is twice the angle between the mirrors.

&bull; Reflect across the x-axis, then the y-axis: $(x, y) \\mapsto (x, -y) \\mapsto (-x, -y)$, a rotation by $180°$, and the mirrors are $90°$ apart
&bull; Reflect across $y = x$, then $y = -x$: a rotation by $180°$ as well, again from perpendicular mirrors
&bull; Reflect across the $30°$ line, then the $60°$ line: a rotation by $60°$, twice the $30°$ between the mirrors

The order matters: swapping the two reflections reverses the rotation. And the composition has determinant $(-1)(-1) = +1$, which is why two orientation-reversing maps combine into an orientation-preserving one. The presets are chosen so that the pairs above can be tried by switching between them and reading off $R\\mathbf{v}$ for the same $\\mathbf{v}$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Key Properties`,
      content: `Every reflection across a line through the origin shares the same algebra, whatever the angle.

&bull; **Involution**: $R^2 = I$, so $R^{-1} = R$
&bull; **Symmetric and orthogonal**: $R^T = R$ and $R^T R = I$
&bull; **Determinant $-1$**: orientation reversing
&bull; **Trace $0$**: the eigenvalues $+1$ and $-1$ add to zero
&bull; **Eigenvectors**: the mirror direction with eigenvalue $1$, the perpendicular with eigenvalue $-1$
&bull; **Isometry**: lengths, angles and areas are preserved; only orientation is flipped
&bull; **Relation to projection**: $R = 2P - I$, and $P = \\tfrac{1}{2}(I + R)$
&bull; **Products**: two reflections give a rotation by twice the angle between the mirrors; a rotation times a reflection is a reflection`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Projection onto a line](!/linear-algebra/visual-tools/projection-2d) &mdash; the map $R$ is built from; the midpoint of $\\mathbf{v}$ and $R\\mathbf{v}$ is $P\\mathbf{v}$.

[Linear transformations](!/linear-algebra/visual-tools/linear-transformation-2d) &mdash; reflection as one transformation among rotations, projections and shears, with a matrix and a morph.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) &mdash; the sign of $\\det R$ records the orientation flip; the morph shows it passing through $0$.

[Eigenvectors](!/linear-algebra/visual-tools/eigen-vectors-2d) &mdash; the mirror and its perpendicular, with eigenvalues $\\pm 1$.

**Rotations** &mdash; products of two reflections.

[Orthogonal matrices](!/linear-algebra/visual-tools/orthogonal-matrices) &mdash; the family that reflections and rotations together make up.

**Householder reflections** &mdash; the higher-dimensional version $I - 2\\mathbf{u}\\mathbf{u}^T$, the workhorse of QR factorization.

[Change of basis](!/linear-algebra/visual-tools/change-basis-2d) &mdash; an orientation-reversing basis, such as one with a flipped axis, is a reflection of the standard one.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Reflection across a Coordinate Axis`,
      content: `On the x-axis preset the mirror is the x-axis and $R = \\operatorname{diag}(1, -1)$: the map negates the second coordinate, $(x, y) \\mapsto (x, -y)$.

At the default $\\mathbf{v} = (1.5, 2)$ the reflection is $(1.5, -2)$, straight below $\\mathbf{v}$, and the midpoint $(1.5, 0)$ sits on the axis.`,
      before: ``,
      after: `This is reflection with the trigonometry switched off: $\\cos 0° = 1$ and $\\sin 0° = 0$, so the matrix is diagonal, and the two axes are the eigendirections with eigenvalues $1$ and $-1$ in plain view.

The y-axis preset negates the first coordinate instead, $\\operatorname{diag}(-1, 1)$. Applying both in turn negates both coordinates, which is the $180°$ rotation, the simplest instance of two reflections composing to a rotation.`,
      link: '',
    },
    obj12: {
      title: `Reflection across a Diagonal`,
      content: `On the $y = x$ preset the mirror is the diagonal and $R = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: the map swaps the coordinates, $(x, y) \\mapsto (y, x)$.

At the default $\\mathbf{v} = (1.5, 2)$ the reflection is $(2, 1.5)$, and the midpoint $(1.75, 1.75)$ lies on the diagonal.`,
      before: ``,
      after: `The swap is the coordinate form of mirror symmetry across $y = x$, familiar from inverse functions, whose graphs are reflections of each other across this line.

The $y = -x$ preset swaps and negates, $(x, y) \\mapsto (-y, -x)$. Composing the two diagonal reflections gives a $180°$ rotation, because the two mirrors are perpendicular; composing $y = x$ with the x-axis gives a $90°$ rotation, because those mirrors are $45°$ apart.`,
      link: '',
    },
    obj13: {
      title: `Reflection across a Custom Angle`,
      content: `On the $30°$ preset the entries of $R$ are $\\cos 60°$, $\\sin 60°$, $\\sin 60°$, $-\\cos 60°$, that is $\\tfrac{1}{2}$, $\\tfrac{\\sqrt{3}}{2}$, $\\tfrac{\\sqrt{3}}{2}$, $-\\tfrac{1}{2}$. The doubled angle in the formula is what turns a $30°$ mirror into $60°$ entries.

At the default $\\mathbf{v}$ the reflection lands on the far side of the $30°$ line at the same distance, with the perpendicular crossing the mirror at the midpoint.`,
      before: ``,
      after: `Whatever the angle, the trace is $0$ and the determinant is $-1$; only how the entries share the rotation-like pattern changes. The $\\theta$ slider makes this a continuous experiment.

The $120°$ preset is instructive for a different reason: it is the same mirror as $-60°$, so $R(120°) = R(-60°)$, and the slider's range of $0°$ to $180°$ already covers every reflection across a line through the origin. The $60°$ and $30°$ presets together compose to a $60°$ rotation.`,
      link: '',
    },
    obj14: {
      title: `Halfway through the Morph: The Projection`,
      content: `The frozen picture below stops the $y = x$ morph at $t = 0.5$, where $M = \\tfrac{1}{2}(I + R) = P$. The grid and unit square are flattened onto the mirror, the fill is grey for determinant $0$, and $\\mathbf{v}$ and $R\\mathbf{v}$ are still drawn at full strength with their purple midpoint.

That midpoint is the projection $P\\mathbf{v}$, and it is exactly where the flattened grid would carry $\\mathbf{v}$.`,
      before: ``,
      after: `The identity $R = 2P - I$ is the whole content of this picture. Reflection is projection continued past the mirror by the same distance, so the average of the identity and the reflection is the projection, and a straight-line morph from $I$ to $R$ must pass through $P$ at its midpoint.

It also explains why the determinant changes sign along the way. The determinant of $M(t)$ runs continuously from $+1$ to $-1$, so somewhere it is $0$, and that somewhere is the projection: the one moment when the plane is flat and the map is not invertible. No path of invertible maps connects a reflection to the identity.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from the tool's own canvas composition: Reflection's exported
     SVGRender for the morphed grid, the mirror, the unit square, the
     perpendicular with its right angle, the midpoint and the two arrows.
     Three stills at t = 1, one at t = 0.5. See reflectionDiagrams.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: reflectionDiagrams[key], caption, text })
  const f = (x) => Math.round(x * 100) / 100
  const rv = (k) => `(${f(statsFor[k].Rv[0])}, ${f(statsFor[k].Rv[1])})`
  const pvOf = (k) => `(${f(statsFor[k].Pv[0])}, ${f(statsFor[k].Pv[1])})`

  const stateUnits = {
    axes: unit('axes', 'x-axis reflection, frozen',
      `v = (1.5, 2) flipped to Rv = ${rv('xAxis')}, straight below it, with the midpoint ${pvOf('xAxis')} on the axis. ` +
      'R = diag(1, &minus;1); the unit square has turned over and is filled purple for det = &minus;1.'),
    diagonals: unit('diagonals', 'y = x reflection, frozen',
      `The coordinates swap: Rv = ${rv('diag')}, with the midpoint ${pvOf('diag')} on the diagonal. The perpendicular ` +
      'joining v and Rv crosses the mirror at a right angle.'),
    custom: unit('custom', '30&deg; reflection, frozen',
      `Rv = ${rv('deg30')} on the far side of the 30&deg; mirror at the same distance. The matrix entries are ` +
      'cos 60&deg; and sin 60&deg; - the doubled angle - and det R is still &minus;1.'),
    halfway: unit('halfway', 'Morph at t = 0.5, frozen',
      'The y = x morph stopped halfway: M = (I + R)/2 = P, the grid and square flattened onto the mirror, ' +
      'det = 0, and the purple midpoint of v and Rv sitting exactly where P sends v.'),
  }


  /* ---- per-scenario panel notes (Line 1) ----
     The tool's ExplanationCard accepts an override with a byPreset map and
     REPLACES the entry, so each override spreads the tool's own SCENARIOS
     entry and appends the anchor to `body`. All seven scenarios are covered.
     The card renders with dangerouslySetInnerHTML, so the anchors are raw HTML. */
  const SECTION_FOR_GROUP = {
    axes: ['reflection-across-a-coordinate-axis', 'axis reflections'],
    diagonals: ['reflection-across-a-diagonal', 'diagonal reflections'],
    custom: ['reflection-across-a-custom-angle', 'custom-angle reflections'],
  }

  const explanationOverride = {
    byPreset: Object.fromEntries(
      Object.entries(RF_SCENARIOS).map(([key, sc]) => {
        const [slug, label] = SECTION_FOR_GROUP[groupOf[key]]
        return [key, {
          ...sc,
          body: `${sc.body || ''}<br/><a href="#${slug}" style="color:#1d4ed8;font-weight:600">Learn more about ${label}</a>` +
            ` &middot; <a href="#halfway-through-the-morph" style="color:#1d4ed8;font-weight:600">the morph through P</a>`,
        }]
      })
    ),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the reflection matrix across a line?",
      answer: "For the line through the origin at angle θ, the reflection matrix is R with entries cos 2θ, sin 2θ in the first row and sin 2θ, −cos 2θ in the second. Equivalently R = 2P − I, where P is the projection matrix onto the same line: go to the foot of the perpendicular and continue the same distance. The doubled angle is why a 45° mirror produces the coordinate swap."
    },
    obj2: {
      question: "Why does a reflection have determinant −1?",
      answer: "A reflection preserves lengths and areas but flips orientation: a shape traced counterclockwise comes back traced clockwise. The determinant records signed area, so it is −1. Equivalently, the eigenvalues are +1 along the mirror and −1 along the perpendicular, and their product is −1."
    },
    obj3: {
      question: "What happens when you reflect twice?",
      answer: "Reflecting twice across the same line returns every vector to its original position, so R² = I and a reflection is its own inverse. Reflecting across two different lines through the origin gives a rotation by twice the angle between the lines, in the direction from the first mirror to the second."
    },
    obj4: {
      question: "How is reflection related to projection?",
      answer: "The projection Pv is the foot of the perpendicular from v to the mirror, and the reflection Rv lies the same distance beyond it, so Pv is the midpoint of v and Rv. In matrix form R = 2P − I and P = (I + R)/2. A morph from the identity to the reflection passes through the projection at its halfway point, which is where the determinant crosses zero."
    },
    obj5: {
      question: "What are the eigenvectors of a reflection?",
      answer: "Vectors along the mirror are fixed, so the mirror direction is an eigenvector with eigenvalue 1. Vectors perpendicular to the mirror are reversed, so the perpendicular direction is an eigenvector with eigenvalue −1. The two eigendirections are perpendicular, which is a general property of symmetric matrices."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Reflection 2D Visualizer",
      "description": "Interactive visualizer for reflection across a line in the plane. Drag a vector, see its mirror image and the perpendicular between them, morph the grid from the identity through the projection to the reflection, and read the matrix live.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/reflection-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable vector with its reflection drawn as the mirror image across the line",
        "Perpendicular between v and Rv with a right-angle mark and the projection at the midpoint",
        "Morph animation from the identity through the projection to the reflection, with the unit square flipping colour at the orientation change",
        "Reflection matrix card with an angle slider from 0° to 180°",
        "Live card with lengths, separation, angle, determinant, trace and an involution check",
        "Seven presets: coordinate axes, diagonals and custom angles",
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
      "keywords": "reflection matrix, reflection across a line, reflection matrix 2x2, reflection visualizer, reflection 2d, linear transformation reflection, householder reflection, reflection determinant -1, orientation reversing, involution matrix, reflection eigenvalues, interactive linear algebra, reflection across y = x, mirror line through origin, linear algebra visualizer"
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
          "name": "Reflection 2D",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/reflection-2d"
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
      relatedTools: getRelatedTools('linear-algebra-reflection-2d'),
      sectionsContent,
      stateUnits,
      explanationOverride,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Reflection 2D Visualizer | Reflect a Vector across a Line",
        description: "Drag a vector and see its reflection across a line through the origin, the perpendicular between them, and the reflection matrix. Morph the plane from the identity through the projection to the reflection.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/reflection-2d",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="66" x2="72" y2="14" stroke="#85B7EB" stroke-width="2" stroke-dasharray="4,2.5"/><line x1="26" y1="52" x2="60" y2="46" stroke="#FAC775" stroke-width="2.8"/><path d="M 64 45.5 L 56 43 L 56.5 49.5 Z" fill="#FAC775"/><line x1="26" y1="52" x2="32" y2="18" stroke="#97C459" stroke-width="2.8"/><path d="M 32.5 14 L 27.5 22 L 36 23 Z" fill="#97C459"/><line x1="60" y1="46" x2="32" y2="18" stroke="#E6F1FB" stroke-width="1" stroke-dasharray="2,2"/><circle cx="46" cy="32" r="2.2" fill="#B5D4F4"/><circle cx="26" cy="52" r="2" fill="#E6F1FB"/><text x="66" y="56" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">v</text><text x="22" y="16" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">Rv</text><text x="40" y="74" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">R&#178; = I</text></svg>`,
        name: "Reflection 2D Visualizer",
        hubDescription: "Drag a vector in the plane and watch its mirror image across a line through the origin, joined by a perpendicular whose midpoint is the projection onto the mirror. Morph the grid from the identity to the reflection and see it pass through the projection halfway, with the unit square flattening and then flipping colour as the determinant crosses from +1 to −1. Read the 2×2 matrix and its invariants live, and set the mirror by preset or angle slider.",
        category: "Linear Algebra",
        subCategory: "Linear Transformations"
      }
    }
  }
}

export default function Reflection2DPage({seoData, sectionsContent, stateUnits, explanationOverride, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'dragging-the-vector'),
    plain('obj3', 'the-morph-animation'),
    plain('obj6', 'preset-scenarios'),
    stateRow('obj11', 'reflection-across-a-coordinate-axis', 'axes'),
    stateRow('obj12', 'reflection-across-a-diagonal', 'diagonals'),
    stateRow('obj13', 'reflection-across-a-custom-angle', 'custom'),
    stateRow('obj14', 'halfway-through-the-morph', 'halfway'),
    plain('obj4', 'the-matrix-card-and-the-angle-slider'),
    plain('obj5', 'the-live-card'),
    plain('obj7', 'what-reflection-is'),
    plain('obj8', 'composing-reflections'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Reflection across a Line</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <Reflection explanationOverride={explanationOverride}/>
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
