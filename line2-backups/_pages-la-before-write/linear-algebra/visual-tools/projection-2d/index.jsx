import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import Projection from '../../../../app/components/linear-algebra copy/r2-visualizers/projection/Projection'
import { SCENARIOS as PR_SCENARIOS } from '../../../../app/components/linear-algebra copy/r2-visualizers/projection/Projection'
import projectionDiagrams, { groupOf, statsFor } from '../../../../app/components/linear-algebra copy/r2-visualizers/projection/projectionDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'orthogonal projection',
    'projection matrix',
    'projection onto a line',
    'projection matrix 2x2',
    'projection visualizer',
    'projection 2d',
    'linear transformation projection',
    'idempotent matrix',
    'kernel of a projection',
    'image of a projection',
    'rank one projection',
    'interactive linear algebra',
    'projection onto a line formula',
    'drop a perpendicular',
    'linear algebra visualizer'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Orthogonal projection onto a line** &mdash; the linear map sending each vector $\\mathbf{v}$ to the point on the line closest to it, the foot of the perpendicular dropped from $\\mathbf{v}$.

**Projection matrix** &mdash; for the line at angle $\\theta$ with unit direction $\\mathbf{u} = (\\cos\\theta, \\sin\\theta)$, $P = \\mathbf{u}\\mathbf{u}^T = \\begin{pmatrix} \\cos^2\\theta & \\cos\\theta\\sin\\theta \\\\ \\cos\\theta\\sin\\theta & \\sin^2\\theta \\end{pmatrix}$.

**Image** &mdash; the set of all outputs $P\\mathbf{v}$; for a projection onto a line it is the line itself.

**Kernel** &mdash; the set of vectors sent to $\\mathbf{0}$; here the line perpendicular to the projection line.

**Idempotent** &mdash; $P^2 = P$; projecting a second time changes nothing.

**Symmetric** &mdash; $P^T = P$, the mark of an orthogonal (as opposed to oblique) projection.

**Rank $1$** &mdash; the image is one-dimensional; $\\det P = 0$ and $\\operatorname{tr} P = 1$ for every line.

**Residual** &mdash; $\\mathbf{v} - P\\mathbf{v}$, the perpendicular part, which lies in the kernel.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started`,
      content: `The canvas shows a projection line through the origin in blue with its image label, the perpendicular kernel line dashed in red, a draggable vector $\\mathbf{v}$ in orange, and its projection $P\\mathbf{v}$ in green with a dashed dropline and a right-angle mark at the foot.

Try this sequence to build intuition:

&bull; Start on the **y = x** preset. Drag $\\mathbf{v}$ around and watch $P\\mathbf{v}$ slide along the diagonal, always at the foot of the perpendicular from $\\mathbf{v}$.
&bull; Drag $\\mathbf{v}$ onto the red kernel line. $P\\mathbf{v}$ collapses to the origin: everything perpendicular to the line projects to nothing.
&bull; Press **play** in the animation panel. The grid and unit square morph from the identity to $P$, flattening the whole plane onto the line, which is what a rank-$1$ map does to space.
&bull; Move the **$\\theta$ slider** in the matrix card and watch the four entries of $P$ change while $\\det P$ stays $0$ and $\\operatorname{tr} P$ stays $1$.

The point: a projection is a linear transformation like any other, with a matrix, an image and a kernel, but one that throws away a dimension and then leaves what remains alone.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Dragging the Vector`,
      content: `The tip of $\\mathbf{v}$ is the only handle on the canvas.

&bull; **Drag $\\mathbf{v}$** &mdash; $P\\mathbf{v}$ follows as the foot of the perpendicular, the dropline and right-angle mark redraw, and the readouts under the canvas update
&bull; **Cross the line** &mdash; $\\mathbf{v}$ and $P\\mathbf{v}$ coincide when $\\mathbf{v}$ lies on the line; the dropline vanishes because there is nothing to drop
&bull; **Cross the kernel** &mdash; $P\\mathbf{v}$ becomes the origin and is drawn as a dashed ring there

The projection line itself is not dragged. It is set by the presets or by the $\\theta$ slider in the matrix card, because a line through the origin is one number, its angle, and a slider states that more honestly than a handle would.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `The Morph Animation`,
      content: `The animation panel blends the identity into the projection: $M(t) = (1 - t)I + tP$ for $t$ from $0$ to $1$, applied to the grid and the unit square.

&bull; At $t = 0$ the grid is the ordinary square grid and the unit square is a square
&bull; As $t$ grows the grid shears toward the line and the square thins into a parallelogram
&bull; At $t = 1$ every grid line lies on the projection line and the unit square has collapsed to a segment of it: the plane has been flattened

$\\mathbf{v}$ and $P\\mathbf{v}$ are drawn independently of $t$, so the geometry of the perpendicular stays readable while the background morphs. Selecting a preset replays the morph automatically; the transport buttons step, scrub and reset it. The collapse at $t = 1$ is the visual meaning of $\\det P = 0$: a projection has no inverse, because a flattened plane cannot be unflattened.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `The Matrix Card and the Angle Slider`,
      content: `The matrix card shows the four entries of $P$ for the current line and a slider for the angle $\\theta$ in degrees.

&bull; The entries are $\\cos^2\\theta$, $\\cos\\theta\\sin\\theta$ (twice), and $\\sin^2\\theta$; the two diagonal entries always add to $1$ and the matrix is always symmetric
&bull; At $0°$ and $90°$ the off-diagonal entries vanish and $P$ is $\\operatorname{diag}(1, 0)$ or $\\operatorname{diag}(0, 1)$
&bull; At $45°$ every entry is $\\tfrac{1}{2}$
&bull; The slider runs from $0°$ to $180°$, not $360°$, because a line has no orientation: $\\theta$ and $\\theta + 180°$ are the same line and the same matrix

Moving the slider clears the current preset. Every $P$ it produces is a rank-$1$ orthogonal projection; the family is one-dimensional, parametrized by the angle.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `The Live Card`,
      content: `The live card reports the numbers behind the picture.

&bull; $\\|\\mathbf{v}\\|$ and $\\|P\\mathbf{v}\\|$ &mdash; the lengths of the vector and its projection; the second never exceeds the first
&bull; $\\|\\mathbf{v} - P\\mathbf{v}\\|$ &mdash; the residual, the distance from $\\mathbf{v}$ to the line
&bull; **angle** &mdash; between $\\mathbf{v}$ and the line, so that $\\|P\\mathbf{v}\\| = \\|\\mathbf{v}\\| \\cos(\\text{angle})$
&bull; $\\det P$ and $\\operatorname{tr} P$ &mdash; always $0$ and $1$, the invariants of a rank-$1$ projection
&bull; **idempotence** &mdash; a check that $P(P\\mathbf{v}) = P\\mathbf{v}$, which holds by construction and is worth seeing stated

Pythagoras ties the first three together: $\\|\\mathbf{v}\\|^2 = \\|P\\mathbf{v}\\|^2 + \\|\\mathbf{v} - P\\mathbf{v}\\|^2$, because the projection and the residual are perpendicular.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Preset Scenarios`,
      content: `The sidebar offers seven lines in three groups.

&bull; **Coordinate axes** &mdash; the x-axis and the y-axis; $P$ is diagonal and simply zeroes one coordinate
&bull; **Diagonals** &mdash; $y = x$ and $y = -x$; every entry of $P$ is $\\pm\\tfrac{1}{2}$, and the two projections add to the identity
&bull; **Custom angle** &mdash; $30°$, $60°$ and $120°$; off-diagonal entries appear, and the $120°$ line is the same line as $-60°$

The three sections that follow take one representative from each group and freeze it, and a fourth freezes the special case of a vector lying on the kernel. The explanation card in the tool links back to the matching section for whichever preset is active.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `What Orthogonal Projection Is`,
      content: `The orthogonal projection of $\\mathbf{v}$ onto the line through the origin with unit direction $\\mathbf{u}$ is

$$P\\mathbf{v} = (\\mathbf{v} \\cdot \\mathbf{u})\\,\\mathbf{u}$$

the multiple of $\\mathbf{u}$ closest to $\\mathbf{v}$. The remainder $\\mathbf{v} - P\\mathbf{v}$ is perpendicular to the line, which is why the construction is called dropping a perpendicular and why the canvas draws a right angle at the foot.

Because the formula is linear in $\\mathbf{v}$, projection is a linear transformation, and every linear transformation of the plane has a $2 \\times 2$ matrix. Writing $\\mathbf{u} = (\\cos\\theta, \\sin\\theta)$ and expanding $(\\mathbf{v} \\cdot \\mathbf{u})\\,\\mathbf{u} = \\mathbf{u}(\\mathbf{u}^T\\mathbf{v}) = (\\mathbf{u}\\mathbf{u}^T)\\,\\mathbf{v}$ gives

$$P = \\mathbf{u}\\mathbf{u}^T = \\begin{pmatrix} \\cos^2\\theta & \\cos\\theta\\sin\\theta \\\\ \\cos\\theta\\sin\\theta & \\sin^2\\theta \\end{pmatrix}$$

an outer product of a unit vector with itself. That form explains every property on the live card: rank $1$ because it is an outer product, symmetric because $\\mathbf{u}\\mathbf{u}^T$ is, idempotent because $\\mathbf{u}\\mathbf{u}^T\\mathbf{u}\\mathbf{u}^T = \\mathbf{u}(\\mathbf{u}^T\\mathbf{u})\\mathbf{u}^T = \\mathbf{u}\\mathbf{u}^T$, and trace $1$ because $\\operatorname{tr}(\\mathbf{u}\\mathbf{u}^T) = \\mathbf{u} \\cdot \\mathbf{u} = 1$.

For the component-by-component computation of a single projection, see the [vector projection visualizer](!/linear-algebra/visual-tools/vector-projection); for projections onto subspaces of any dimension and the general projection matrix, see the [projections theory page](!/linear-algebra/orthogonality/projections).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Kernel and Image`,
      content: `A projection is the cleanest example of a linear map with a non-trivial kernel.

&bull; **Image** &mdash; the line itself. Every output lies on it, and every point of it is an output (it is its own projection), so $\\operatorname{im} P$ is exactly the line and $\\operatorname{rank} P = 1$
&bull; **Kernel** &mdash; the perpendicular line. A vector perpendicular to $\\mathbf{u}$ has $\\mathbf{v} \\cdot \\mathbf{u} = 0$ and projects to the origin, and nothing else does
&bull; **Rank-nullity** &mdash; $1 + 1 = 2$, the dimension of the plane
&bull; **Orthogonal complement** &mdash; kernel and image are perpendicular to each other, which is the defining feature of an orthogonal projection; an oblique projection has a kernel that is not perpendicular to its image, and a non-symmetric matrix

The morph animation shows the kernel at work: as $t$ reaches $1$, every grid line parallel to the kernel is squeezed to a single point on the image line. For the general theory, see the [image and kernel theory page](!/linear-algebra/transformations/image-kernel).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Key Properties`,
      content: `Every orthogonal projection onto a line shares the same algebra, whatever the angle.

&bull; **Idempotent**: $P^2 = P$
&bull; **Symmetric**: $P^T = P$
&bull; **Rank $1$**: $\\det P = 0$, $\\operatorname{tr} P = 1$
&bull; **Eigenvalues**: $1$ along the line and $0$ along the kernel; the two lines are the eigendirections
&bull; **Complement**: $I - P$ is the projection onto the perpendicular line, and $P + (I - P) = I$
&bull; **Shrinking**: $\\|P\\mathbf{v}\\| \\leq \\|\\mathbf{v}\\|$, with equality only for $\\mathbf{v}$ on the line
&bull; **Closest point**: $P\\mathbf{v}$ minimizes $\\|\\mathbf{v} - \\mathbf{w}\\|$ over all $\\mathbf{w}$ on the line
&bull; **Not invertible**: a flattened plane cannot be restored; $P$ has no inverse`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Vector projection](!/linear-algebra/visual-tools/vector-projection) &mdash; the same operation computed component by component, with the scalar and vector forms.

[Outer product](!/linear-algebra/visual-tools/vector-outer-product) &mdash; $P = \\mathbf{u}\\mathbf{u}^T$ is an outer product, which is why it has rank $1$.

[Linear transformations](!/linear-algebra/visual-tools/linear-transformation-2d) &mdash; projection as one transformation among rotations, reflections and shears, with a matrix and a morph.

[Image and kernel](!/linear-algebra/visual-tools/kernel-image-2d) &mdash; the two subspaces a projection makes visible.

[Reflection](!/linear-algebra/visual-tools/reflection-2d) &mdash; $2P - I$ reflects across the same line; projection and reflection share the eigendirections.

[Eigenvectors](!/linear-algebra/visual-tools/eigen-vectors-2d) &mdash; the line and its perpendicular are the eigenvectors of $P$, with eigenvalues $1$ and $0$.

[Least squares](!/linear-algebra/visual-tools/least-squares) &mdash; projection onto a column space, the higher-dimensional version of dropping a perpendicular.

[Gram-Schmidt](!/linear-algebra/visual-tools/gram-schmidt) &mdash; repeated subtraction of projections to build an orthogonal basis.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Projection onto a Coordinate Axis`,
      content: `On the x-axis preset the line is the x-axis, the kernel is the y-axis, and $P = \\operatorname{diag}(1, 0)$: the map simply zeroes the second coordinate, $(x, y) \\mapsto (x, 0)$.

At the default $\\mathbf{v} = (1.5, 1.5)$ the projection is $(1.5, 0)$, straight below $\\mathbf{v}$, and the residual is the vertical segment of length $1.5$.`,
      before: ``,
      after: `This is projection with all the trigonometry switched off. Both axes are eigendirections, with eigenvalue $1$ along the x-axis and $0$ along the y-axis, and the matrix is diagonal because the coordinate system already lines up with the image and kernel.

The y-axis preset is the transpose situation, $\\operatorname{diag}(0, 1)$. Together the two axis projections add to the identity, the simplest instance of $P + (I - P) = I$.`,
      link: '',
    },
    obj12: {
      title: `Projection onto a Diagonal`,
      content: `On the $y = x$ preset every entry of $P$ is $\\tfrac{1}{2}$, and the map sends $(x, y)$ to $\\left(\\tfrac{x + y}{2}, \\tfrac{x + y}{2}\\right)$: it averages the two coordinates and uses the average for both.

At the default $\\mathbf{v} = (1.5, 1.5)$ the vector already lies on the line, so $P\\mathbf{v} = \\mathbf{v}$ and there is no dropline to draw. Drag $\\mathbf{v}$ off the diagonal to see the perpendicular appear.`,
      before: ``,
      after: `The kernel is the anti-diagonal $y = -x$, perpendicular to the image as it must be for an orthogonal projection. A vector with $x = -y$ has average $0$ and projects to the origin.

The $y = -x$ preset is the complementary projection, with entries $\\tfrac{1}{2}$ on the diagonal and $-\\tfrac{1}{2}$ off it, and the two diagonal projections add to the identity. Any vector is the sum of its two diagonal shadows.`,
      link: '',
    },
    obj13: {
      title: `Projection onto a Custom Angle`,
      content: `On the $30°$ preset the unit direction is $(\\cos 30°, \\sin 30°)$ and $P$ has entries $\\tfrac{3}{4}$, $\\tfrac{\\sqrt{3}}{4}$, $\\tfrac{\\sqrt{3}}{4}$, $\\tfrac{1}{4}$. The off-diagonal entries are what mixing the coordinates looks like when the line is not an axis.

At the default $\\mathbf{v}$ the projection lands on the $30°$ line at the foot of the perpendicular, and the residual runs along the $120°$ direction of the kernel.`,
      before: ``,
      after: `Whatever the angle, the diagonal entries add to $1$ and the determinant is $0$; only how the single unit of trace is shared between the two coordinates changes. The $\\theta$ slider makes this a continuous experiment.

The $120°$ preset is instructive for a different reason: it is the same line as $-60°$, so $P(120°) = P(-60°)$, and the slider's range of $0°$ to $180°$ already covers every projection onto a line through the origin.`,
      link: '',
    },
    obj14: {
      title: `A Vector on the Kernel`,
      content: `The frozen picture below places $\\mathbf{v} = (1.5, -1.5)$ on the kernel of the $y = x$ projection. It is perpendicular to the line, its dot product with the direction $(1, 1)$ is zero, and $P\\mathbf{v}$ is the origin, drawn as a dashed ring.

The residual is all of $\\mathbf{v}$: nothing of it survives the projection.`,
      before: ``,
      after: `This is the kernel made concrete. Every vector on the red line is sent to $\\mathbf{0}$, and the morph animation shows why: as the plane flattens onto the image line, the whole kernel line is squeezed into a single point.

It is also the reason a projection has no inverse. Two different vectors on the kernel, or any vector and that vector plus a kernel vector, have the same projection, so the output does not determine the input. Every linear map with a non-trivial kernel fails to be invertible for exactly this reason.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from the tool's own canvas composition at t = 1: Projection's
     exported SVGRender for the flattened grid, the line and kernel, the
     collapsed unit square, the dropline and the two arrows. See
     projectionDiagrams.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: projectionDiagrams[key], caption, text })
  const f = (x) => Math.round(x * 100) / 100
  const pv = (k) => `(${f(statsFor[k].Pv[0])}, ${f(statsFor[k].Pv[1])})`

  const stateUnits = {
    axes: unit('axes', 'x-axis projection, frozen',
      `v = (1.5, 1.5) dropped straight down onto the x-axis: Pv = ${pv('xAxis')}. P = diag(1, 0) zeroes the ` +
      'second coordinate; the grid and unit square have collapsed onto the axis.'),
    diagonals: unit('diagonals', 'y = x projection, frozen',
      `v already lies on the diagonal, so Pv = ${pv('diag')} = v and there is no perpendicular to drop. ` +
      'Every entry of P is 1/2; the kernel is the anti-diagonal.'),
    custom: unit('custom', '30&deg; projection, frozen',
      `Pv = ${pv('deg30')} at the foot of the perpendicular on the 30&deg; line, with the residual running ` +
      'along the 120&deg; kernel. Off-diagonal entries appear, but det P = 0 and tr P = 1 as always.'),
    kernel: unit('kernel', 'v on the kernel, frozen',
      'v = (1.5, &minus;1.5) is perpendicular to the y = x line, so Pv is the origin, drawn as a dashed ring. ' +
      'The whole vector is residual - the kernel made concrete.'),
  }


  /* ---- per-scenario panel notes (Line 1) ----
     The tool's ExplanationCard accepts an override with a byPreset map and
     REPLACES the entry, so each override spreads the tool's own SCENARIOS
     entry and appends the anchor to `body`. All seven scenarios are covered.
     The card renders with dangerouslySetInnerHTML, so the anchors are raw HTML. */
  const SECTION_FOR_GROUP = {
    axes: ['projection-onto-a-coordinate-axis', 'axis projections'],
    diagonals: ['projection-onto-a-diagonal', 'diagonal projections'],
    custom: ['projection-onto-a-custom-angle', 'custom-angle projections'],
  }

  const explanationOverride = {
    byPreset: Object.fromEntries(
      Object.entries(PR_SCENARIOS).map(([key, sc]) => {
        const [slug, label] = SECTION_FOR_GROUP[groupOf[key]]
        return [key, {
          ...sc,
          body: `${sc.body || ''}<br/><a href="#${slug}" style="color:#1d4ed8;font-weight:600">Learn more about ${label}</a>` +
            ` &middot; <a href="#kernel-and-image" style="color:#1d4ed8;font-weight:600">kernel and image</a>`,
        }]
      })
    ),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the projection matrix onto a line?",
      answer: "For the line through the origin with unit direction u = (cos θ, sin θ), the projection matrix is P = u uᵀ, with entries cos²θ, cosθ sinθ, cosθ sinθ and sin²θ. Multiplying any vector by P gives the foot of the perpendicular dropped from that vector onto the line. The matrix is symmetric, idempotent, has rank 1, determinant 0 and trace 1."
    },
    obj2: {
      question: "Why is a projection matrix idempotent?",
      answer: "Projecting a vector lands it on the line, and a vector already on the line is its own closest point on the line, so projecting again changes nothing. In symbols, P² = P. With P = u uᵀ this is the computation u uᵀ u uᵀ = u (uᵀu) uᵀ = u uᵀ, because uᵀu = 1 for a unit vector."
    },
    obj3: {
      question: "What are the kernel and image of a projection?",
      answer: "The image is the line being projected onto: every output lies on it and every point of it is an output. The kernel is the perpendicular line through the origin: vectors perpendicular to the projection line have zero component along it and project to the origin. For an orthogonal projection the kernel and image are perpendicular, and their dimensions add to 2."
    },
    obj4: {
      question: "Why does a projection have no inverse?",
      answer: "A projection flattens the plane onto a line, so different inputs can have the same output; every vector on the kernel projects to the origin, for example. An output therefore does not determine its input, and no matrix can undo the map. Algebraically the determinant is 0, which is the test for a matrix having no inverse."
    },
    obj5: {
      question: "What is the difference between an orthogonal and an oblique projection?",
      answer: "Both send the plane onto a line and both are idempotent, but an orthogonal projection moves each vector perpendicularly to the line, so its kernel is perpendicular to its image and its matrix is symmetric. An oblique projection moves vectors along some other fixed direction, its kernel is that direction, and its matrix is not symmetric. This tool shows orthogonal projections only."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Projection 2D Visualizer",
      "description": "Interactive visualizer for orthogonal projection onto a line in the plane. Drag a vector, see the foot of the perpendicular, morph the grid from the identity to the projection matrix, and read the matrix, kernel and image live.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/projection-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable vector with its projection drawn at the foot of the perpendicular",
        "Projection line and perpendicular kernel line with labels",
        "Morph animation from the identity to the projection matrix, flattening the grid and unit square",
        "Projection matrix card with an angle slider from 0° to 180°",
        "Live card with lengths, residual, angle, determinant, trace and an idempotence check",
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
      "keywords": "orthogonal projection, projection matrix, projection onto a line, projection matrix 2x2, projection visualizer, projection 2d, linear transformation projection, idempotent matrix, kernel of a projection, image of a projection, rank one projection, interactive linear algebra, projection onto a line formula, drop a perpendicular, linear algebra visualizer"
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
          "name": "Projection 2D",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/projection-2d"
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
      relatedTools: getRelatedTools('linear-algebra-projection-2d'),
      sectionsContent,
      stateUnits,
      explanationOverride,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Projection 2D Visualizer | Orthogonal Projection onto a Line",
        description: "Drag a vector and see its orthogonal projection onto a line, the perpendicular dropline, the kernel and image, and the projection matrix. Morph the plane from the identity to the projection.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/projection-2d",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="66" x2="72" y2="18" stroke="#85B7EB" stroke-width="2" stroke-dasharray="4,2.5"/><line x1="52" y1="12" x2="22" y2="52" stroke="#EF9F27" stroke-width="1" stroke-dasharray="2,2" opacity="0.6"/><line x1="24" y1="54" x2="58" y2="44" stroke="#FAC775" stroke-width="2.8"/><path d="M 62 43 L 54 41.5 L 55 47.5 Z" fill="#FAC775"/><line x1="24" y1="54" x2="48" y2="36" stroke="#97C459" stroke-width="2.8"/><path d="M 51 33.5 L 43.5 35.5 L 47 41 Z" fill="#97C459"/><line x1="58" y1="44" x2="48" y2="36" stroke="#E6F1FB" stroke-width="1" stroke-dasharray="2,2"/><path d="M 46.5 38.5 L 50 41.5 L 53 38" fill="none" stroke="#E6F1FB" stroke-width="0.9"/><circle cx="24" cy="54" r="2" fill="#E6F1FB"/><text x="62" y="54" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">v</text><text x="42" y="28" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">Pv</text><text x="40" y="74" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">P&#178; = P</text></svg>`,
        name: "Projection 2D Visualizer",
        hubDescription: "Drag a vector in the plane and watch its orthogonal projection slide along a line as the foot of the perpendicular, with the kernel line, the dropline and a right-angle mark drawn in. Morph the grid from the identity to the projection matrix to see the plane flatten onto the line, read the 2×2 matrix and its invariants live, and set the line by preset or by an angle slider. Seven presets cover the coordinate axes, the diagonals and custom angles.",
        category: "Linear Algebra",
        subCategory: "Linear Transformations"
      }
    }
  }
}

export default function Projection2DPage({seoData, sectionsContent, stateUnits, explanationOverride, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj11', 'projection-onto-a-coordinate-axis', 'axes'),
    stateRow('obj12', 'projection-onto-a-diagonal', 'diagonals'),
    stateRow('obj13', 'projection-onto-a-custom-angle', 'custom'),
    stateRow('obj14', 'a-vector-on-the-kernel', 'kernel'),
    plain('obj4', 'the-matrix-card-and-the-angle-slider'),
    plain('obj5', 'the-live-card'),
    plain('obj7', 'what-orthogonal-projection-is'),
    plain('obj8', 'kernel-and-image'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Projection onto a Line</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <Projection explanationOverride={explanationOverride}/>
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
