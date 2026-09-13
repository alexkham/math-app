import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import ProjectionWrapper from '../../../../app/components/linear-algebra copy/matrix/ProjectionWrapper'
import projectionDiagrams from '../../../../app/components/linear-algebra copy/matrix/projectionDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'vector projection',
    'projection of a vector onto another vector',
    'scalar projection',
    'orthogonal projection',
    'projection formula',
    'proj u onto v',
    'vector projection calculator',
    'vector projection visualizer',
    'how to project a vector',
    'orthogonal decomposition',
    'perpendicular component',
    'vector component along another vector',
    'dot product projection',
    'linear algebra visualizer',
    'interactive vector tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Vector projection** — the part of $\\mathbf{u}$ that points along $\\mathbf{v}$: $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u} = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\,\\mathbf{v}$.

**Scalar projection** — the signed length of that part: $\\operatorname{comp}_{\\mathbf{v}} \\mathbf{u} = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|}$.

**Projection coefficient** — the scalar $c = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2}$ that multiplies $\\mathbf{v}$; it counts how many copies of $\\mathbf{v}$ reach the foot of the perpendicular.

**Remainder** — $\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$, the part of $\\mathbf{u}$ perpendicular to $\\mathbf{v}$; also called the orthogonal component or rejection.

**Orthogonal decomposition** — the split $\\mathbf{u} = \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u} + (\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u})$ into a piece along $\\mathbf{v}$ and a piece at right angles to it.

**Foot of the perpendicular** — the point on the line through $\\mathbf{v}$ closest to the tip of $\\mathbf{u}$; the projection is the vector from the origin to that point.

**Same-length requirement** — $\\mathbf{u}$ and $\\mathbf{v}$ must have the same number of components, and $\\mathbf{v}$ must be non-zero.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the shared length of $\\mathbf{u}$ and $\\mathbf{v}$, pick a scenario, then watch the projection build phase by phase.

• Use the **Scenario** pills to choose **Projection only**, which stops at $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$, or **Projection and remainder**, which continues to the perpendicular part and the full decomposition of $\\mathbf{u}$
• Use the **Dimensions** stepper to set the length of $\\mathbf{u}$ and $\\mathbf{v}$ (1 to 5 components)
• Hover the **?** icon for a reminder of what the projection is and why the remainder is perpendicular to $\\mathbf{v}$
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• Everything is symbolic — the coefficient is shown as $c$ once it has been defined, so the later phases stay readable`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Six Phases`,
      content: `The visualizer breaks the projection into six phases, each a single idea.

• **Phase 1 — pair**: $u_i$ is paired with $v_i$, one component per scene, and the running sum $u_1 v_1 + u_2 v_2 + \\cdots$ grows in the caption
• **Phase 2 — dot product**: the $\\mathbf{u} \\cdot \\mathbf{v}$ slot fills
• **Phase 3 — squared length**: $\\|\\mathbf{v}\\|^2 = \\mathbf{v} \\cdot \\mathbf{v}$ fills its slot, in one scene
• **Phase 4 — coefficient**: $c = (\\mathbf{u} \\cdot \\mathbf{v}) / \\|\\mathbf{v}\\|^2$ fills
• **Phase 5 — scale**: each component of $\\mathbf{v}$ is multiplied by $c$, one per scene, filling $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$
• **Phase 6 — remainder**: each component of the projection is subtracted from $\\mathbf{u}$, one per scene, filling $\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$; this phase runs only in the decomposition scenario

The layout changes between phases because the inputs change: the dot product and squared length become inputs to the coefficient, the coefficient becomes an input to the scaling, and the projection becomes an input to the remainder.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In phase 1, the active pair $u_i$, $v_i$ is highlighted with the paired styles, the $\\mathbf{u} \\cdot \\mathbf{v}$ slot shows a dashed pending outline, and two arrows flow from the pair into the slot
• In phases 2 and 3, every contributing component is highlighted and the destination slot turns accent
• In phase 4, the $\\mathbf{u} \\cdot \\mathbf{v}$ slot is primary, the $\\|\\mathbf{v}\\|^2$ slot secondary, and $c$ accent, with arrows from both into $c$
• In phases 5 and 6, the two sources of each component are primary and secondary and the destination is accent, with arrows from both
• Filled components show their symbolic content — $c \\cdot v_i$ in the projection, $u_i - c \\cdot v_i$ in the remainder — at a font size that scales with the vector length
• The step log on the right keeps a record of every completed step across all phases`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing Vector Length`,
      content: `The dimension stepper controls the length shared by $\\mathbf{u}$ and $\\mathbf{v}$.

• Length $2$ is the picture most people carry: a shadow dropped from the tip of $\\mathbf{u}$ onto the line through $\\mathbf{v}$
• Length $3$ is the same construction in space, and the one used for the frozen pictures below
• Longer vectors show that nothing in the formula depends on the dimension: one dot product, one squared length, one division, then one multiplication per component
• Length $1$ is degenerate but instructive: every vector lies along $\\mathbf{v}$, so the projection is all of $\\mathbf{u}$ and the remainder is zero`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Projection Is`,
      content: `The projection of $\\mathbf{u}$ onto a non-zero vector $\\mathbf{v}$ is

$$\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\mathbf{v} \\cdot \\mathbf{v}}\\,\\mathbf{v} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\,\\mathbf{v}$$

It is the scalar multiple of $\\mathbf{v}$ closest to $\\mathbf{u}$. Its signed length is the scalar projection,

$$\\operatorname{comp}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|} = \\|\\mathbf{u}\\| \\cos\\theta$$

where $\\theta$ is the angle between the vectors. The projection and the scalar projection are related by $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u} = (\\operatorname{comp}_{\\mathbf{v}} \\mathbf{u})\\,\\hat{\\mathbf{v}}$, a signed length times the unit vector along $\\mathbf{v}$.

What is left after removing the projection,

$$\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$$

is perpendicular to $\\mathbf{v}$: dotting it with $\\mathbf{v}$ gives $\\mathbf{u} \\cdot \\mathbf{v} - c\\,(\\mathbf{v} \\cdot \\mathbf{v}) = \\mathbf{u} \\cdot \\mathbf{v} - \\mathbf{u} \\cdot \\mathbf{v} = 0$. So every vector splits uniquely into a part along $\\mathbf{v}$ and a part orthogonal to it.

For projections onto subspaces, projection matrices and least squares, see the [projections theory page](!/linear-algebra/orthogonality/projections).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The projection inherits its properties from the dot product.

• **Along $\\mathbf{v}$**: $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$ is always a scalar multiple of $\\mathbf{v}$
• **Perpendicular remainder**: $(\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}) \\cdot \\mathbf{v} = 0$
• **Linearity in $\\mathbf{u}$**: $\\operatorname{proj}_{\\mathbf{v}}(\\mathbf{u}_1 + \\mathbf{u}_2) = \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}_1 + \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}_2$ and $\\operatorname{proj}_{\\mathbf{v}}(k\\mathbf{u}) = k \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$
• **Independence of the length of $\\mathbf{v}$**: $\\operatorname{proj}_{k\\mathbf{v}} \\mathbf{u} = \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$ for any $k \\neq 0$ — only the line through $\\mathbf{v}$ matters
• **Idempotence**: projecting twice changes nothing, $\\operatorname{proj}_{\\mathbf{v}}(\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}) = \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$
• **Perpendicular input**: if $\\mathbf{u} \\perp \\mathbf{v}$ then $\\mathbf{u} \\cdot \\mathbf{v} = 0$ and the projection is the zero vector
• **Parallel input**: if $\\mathbf{u} = k\\mathbf{v}$ then the projection is $\\mathbf{u}$ itself and the remainder is zero
• **Unit $\\mathbf{v}$**: if $\\|\\mathbf{v}\\| = 1$ the coefficient is simply $\\mathbf{u} \\cdot \\mathbf{v}$
• **Closest point**: among all multiples of $\\mathbf{v}$, the projection minimizes $\\|\\mathbf{u} - t\\mathbf{v}\\|$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Projection is the basic tool for splitting a vector into the part that matters and the part that does not.

• **Components of forces and velocities**: the part of a force along a ramp, or of a velocity along a direction of travel, is a projection
• **Distance from a point to a line**: the length of the remainder $\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$
• **Gram-Schmidt**: each new vector is made orthogonal to the previous ones by subtracting its projections onto them
• **Least squares**: fitting a line or a model is projecting the data vector onto the column space of the design matrix
• **Coordinates in an orthogonal basis**: the coefficient $c$ is exactly the coordinate of $\\mathbf{u}$ along $\\mathbf{v}$ when the basis is orthogonal
• **Signal processing and statistics**: Fourier coefficients and regression coefficients are projection coefficients`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take

$$\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}, \\quad \\mathbf{v} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$$

Dot product: $\\mathbf{u} \\cdot \\mathbf{v} = 1 + 2 + 3 = 6$.

Squared length: $\\|\\mathbf{v}\\|^2 = 1 + 1 + 1 = 3$.

Coefficient: $c = 6 / 3 = 2$.

Scale:

$$\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u} = 2\\,\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}$$

Remainder:

$$\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u} = \\begin{pmatrix} 1 - 2 \\\\ 2 - 2 \\\\ 3 - 2 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}$$

Check: $(-1, 0, 1) \\cdot (1, 1, 1) = -1 + 0 + 1 = 0$, so the remainder is perpendicular to $\\mathbf{v}$. The scalar projection is $6 / \\sqrt{3} = 2\\sqrt{3}$, which is indeed the length of $(2, 2, 2)$.

A planar example: $\\mathbf{u} = (3, 1)$, $\\mathbf{v} = (2, 2)$ gives $\\mathbf{u} \\cdot \\mathbf{v} = 8$, $\\|\\mathbf{v}\\|^2 = 8$, $c = 1$, projection $(2, 2)$ and remainder $(1, -1)$. Set the visualizer to length $3$ or $2$ and step through to see the same six phases symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Dividing by $\\|\\mathbf{v}\\|$ instead of $\\|\\mathbf{v}\\|^2$** — that gives the scalar projection, a number, not the vector projection; the vector formula needs the square so that the length of $\\mathbf{v}$ cancels
• **Projecting onto the wrong vector** — $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$ lies along $\\mathbf{v}$; $\\operatorname{proj}_{\\mathbf{u}} \\mathbf{v}$ lies along $\\mathbf{u}$, and they are different vectors with different lengths
• **Expecting the projection to be shorter than $\\mathbf{u}$ in every component** — it is shorter overall, $\\|\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}\\| \\leq \\|\\mathbf{u}\\|$, but individual components can be larger
• **Forgetting the sign** — when the angle between $\\mathbf{u}$ and $\\mathbf{v}$ exceeds $90°$, $c$ is negative and the projection points against $\\mathbf{v}$
• **Projecting onto the zero vector** — undefined, since $\\|\\mathbf{v}\\|^2 = 0$; there is no line to project onto
• **Confusing the projection with the remainder** — the projection is the part along $\\mathbf{v}$; the remainder is the part perpendicular to it, and the two add back to $\\mathbf{u}$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Dot product](!/linear-algebra/visual-tools/vectors-inner-product) — supplies both the numerator $\\mathbf{u} \\cdot \\mathbf{v}$ and the denominator $\\mathbf{v} \\cdot \\mathbf{v}$ of the coefficient.

[Magnitude and unit vector](!/linear-algebra/visual-tools/vector-magnitude) — $\\|\\mathbf{v}\\|^2$ is the squared magnitude; with a unit $\\hat{\\mathbf{v}}$ the projection is $(\\mathbf{u} \\cdot \\hat{\\mathbf{v}})\\,\\hat{\\mathbf{v}}$.

[Scalar multiplication](!/linear-algebra/visual-tools/vector-scalar-multiplication) — phase 5 is scalar multiplication of $\\mathbf{v}$ by $c$.

[Vector subtraction](!/linear-algebra/visual-tools/vector-addition) — phase 6 is $\\mathbf{u}$ minus the projection.

**Orthogonality** — the remainder is orthogonal to $\\mathbf{v}$ by construction.

[Gram-Schmidt process](!/linear-algebra/visual-tools/gram-schmidt) — repeated subtraction of projections to build an orthogonal basis.

[Projection matrix](!/linear-algebra/visual-tools/projection-2d) — $P = \\dfrac{\\mathbf{v}\\mathbf{v}^T}{\\mathbf{v}^T\\mathbf{v}}$ applies the same projection to any vector by matrix multiplication.

[Least squares](!/linear-algebra/visual-tools/least-squares) — projection onto a subspace rather than a single line.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: Two Vectors and a Dot Product to Come`,
      content: `The player opens with $\\mathbf{u}$ and $\\mathbf{v}$ as rows of components and an empty slot for $\\mathbf{u} \\cdot \\mathbf{v}$. At the default length both have three components.

Nothing is computed yet. What the scene fixes is the plan: the projection is built from two dot products and one division, and only then does any vector get scaled.`,
      before: ``,
      after: `The precondition is the same as for the dot product, because the dot product is where the computation starts: $\\mathbf{u}$ and $\\mathbf{v}$ must have the same number of components. There is one more, specific to projection: $\\mathbf{v}$ must be non-zero, since its squared length is about to be a divisor.

It helps to hold the geometric picture from the start. The projection is the shadow of $\\mathbf{u}$ on the line through $\\mathbf{v}$, and everything the tool does is the arithmetic that locates that shadow.`,
      link: '',
    },
    obj12: {
      title: `Phase 1: Pairing Components Toward the Dot Product`,
      content: `The first sweep pairs $u_i$ with $v_i$, one position at a time, and the running sum $u_1 v_1 + u_2 v_2 + \\cdots$ grows in the caption until the $\\mathbf{u} \\cdot \\mathbf{v}$ slot can be filled.

The frozen picture below is the second pair at length $3$: $u_2$ and $v_2$ highlighted together, the slot still pending.`,
      before: ``,
      after: `This is the inner product tool's sweep reused as a subroutine. The dot product measures how much $\\mathbf{u}$ leans along $\\mathbf{v}$, which is exactly the information a projection needs: the more the two vectors align, the longer the shadow.

Phase 3 runs the same sweep with $\\mathbf{v}$ against itself, producing $\\|\\mathbf{v}\\|^2$. The tool compresses it into one scene because every product is a square and the pattern is already familiar.`,
      link: '',
    },
    obj13: {
      title: `Phase 4: The Coefficient`,
      content: `With both dot products in hand, the coefficient is a single division: $c = (\\mathbf{u} \\cdot \\mathbf{v}) / \\|\\mathbf{v}\\|^2$.

The frozen picture below shows the two slots dividing into $c$. From here on the tool writes $c$ rather than the fraction, so the remaining phases stay readable.`,
      before: ``,
      after: `The division by $\\|\\mathbf{v}\\|^2$ rather than $\\|\\mathbf{v}\\|$ is the step most often done wrong, and the reason for it is worth seeing. The dot product $\\mathbf{u} \\cdot \\mathbf{v}$ grows with the length of $\\mathbf{v}$, and so does the vector $\\mathbf{v}$ that $c$ is about to multiply. Two factors of $\\|\\mathbf{v}\\|$ come in, so two must be divided out, or the projection would change when $\\mathbf{v}$ is merely rescaled.

Dividing by $\\|\\mathbf{v}\\|$ once gives a different, also useful number: the scalar projection, the signed length of the shadow. If $\\mathbf{v}$ is a unit vector the two coincide and $c$ is just $\\mathbf{u} \\cdot \\mathbf{v}$.`,
      link: '',
    },
    obj14: {
      title: `Phase 5: Scaling v by the Coefficient`,
      content: `The next sweep multiplies every component of $\\mathbf{v}$ by $c$, one slot at a time, filling $\\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$.

The frozen picture below is the second step: one component of the projection already reading $c \\cdot v_1$, one being computed, one still a placeholder.`,
      before: ``,
      after: `This phase is scalar multiplication, and it is why the projection lies along $\\mathbf{v}$: every component is scaled by the same $c$, so the result is a multiple of $\\mathbf{v}$ and cannot leave the line through it. If $c$ is positive the projection points with $\\mathbf{v}$; if negative, against it; if zero, $\\mathbf{u}$ was already perpendicular to $\\mathbf{v}$ and the shadow is a point.

Among all multiples of $\\mathbf{v}$, this one is closest to $\\mathbf{u}$. That is the sense in which the projection is the best approximation of $\\mathbf{u}$ by something along $\\mathbf{v}$.`,
      link: '',
    },
    obj15: {
      title: `Phase 6: The Perpendicular Remainder`,
      content: `In the decomposition scenario the last sweep subtracts the projection from $\\mathbf{u}$, one component at a time, filling $\\mathbf{u} - \\operatorname{proj}_{\\mathbf{v}} \\mathbf{u}$.

The frozen picture below is the second step: one component of the remainder already reading $u_1 - c \\cdot v_1$, one being computed, one still a placeholder.`,
      before: ``,
      after: `The remainder is perpendicular to $\\mathbf{v}$, and the reason is one line of algebra: dotting it with $\\mathbf{v}$ gives $\\mathbf{u} \\cdot \\mathbf{v} - c\\,\\|\\mathbf{v}\\|^2$, and $c$ was chosen precisely so that $c\\,\\|\\mathbf{v}\\|^2 = \\mathbf{u} \\cdot \\mathbf{v}$. The two terms cancel.

Read across the phases and the orthogonal decomposition assembles itself: $\\mathbf{u}$ is the projection plus the remainder, one piece along $\\mathbf{v}$ and one at right angles to it. That split, repeated against several vectors in turn, is the Gram-Schmidt process, and the length of the remainder is the distance from the tip of $\\mathbf{u}$ to the line through $\\mathbf{v}$.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from ProjectionWrapper's own buildScenes (exported additively) and
     rendered through frozenMatrixSvgFixed. Arrows are not reproduced in the
     stills; the cell highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: projectionDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'u and v as three-component rows with an empty slot for u&middot;v. The projection is built ' +
      'from two dot products and one division before any vector is scaled.'),
    pair: unit('pair', 'Phase 1, mid-sweep',
      'u<sub>2</sub> and v<sub>2</sub> highlighted as a pair, the u&middot;v slot still pending. The ' +
      'inner product sweep, reused: how much u leans along v is the first thing a projection needs.'),
    coeff: unit('coeff', 'Phase 4, the coefficient',
      'u&middot;v divided by &#8214;v&#8214;&#178; into c. Two factors of the length of v come in, so ' +
      'two are divided out - dividing by &#8214;v&#8214; once would give the scalar projection instead.'),
    scale: unit('scale', 'Phase 5, mid-sweep',
      'Components of v being multiplied by c, one at a time, into the projection. One common ' +
      'factor, so the result is a multiple of v and lies along it.'),
    remainder: unit('remainder', 'Phase 6, mid-sweep',
      'Components of the projection being subtracted from u, one at a time, into the remainder. ' +
      'What is left is perpendicular to v, and the two pieces add back to u.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     ProjectionWrapper accepts an explanations prop keyed by phase:
     intro, pair, dot, normsq, coeff, scale, remainder, done. Captions
     render with dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-projection-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Two dot products, one division, then a scaling - the shadow of u on the line through v.', 'the-opening-scene', 'Learn more about the opening scene'),
    pair: note('The inner product sweep reused: how much u leans along v.', 'phase-1-pairing', 'Learn more about phase 1'),
    dot: note('u&middot;v is the numerator of the coefficient.', 'phase-1-pairing', 'Learn more about the dot product step'),
    normsq: note('&#8214;v&#8214;&#178; is the denominator - the length of v must cancel out.', 'phase-4-the-coefficient', 'Learn more about the coefficient'),
    coeff: note('Divide by the squared length, not the length; dividing once gives the scalar projection.', 'phase-4-the-coefficient', 'Learn more about phase 4'),
    scale: note('One common factor c, so the projection is a multiple of v and lies along it.', 'phase-5-scaling', 'Learn more about phase 5'),
    remainder: note('The leftover is perpendicular to v: c was chosen so the dot product cancels.', 'phase-6-the-remainder', 'Learn more about phase 6'),
    done: note('u = projection + remainder - one piece along v, one at right angles to it.', 'phase-6-the-remainder', 'Learn more about the decomposition'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the projection of a vector onto another vector?",
      answer: "The projection of u onto v is the part of u that points along v. It is computed as ((u · v) / ‖v‖²) v: take the dot product of u and v, divide by the squared length of v, and multiply v by that coefficient. Geometrically it is the shadow of u on the line through v, the point on that line closest to the tip of u."
    },
    obj2: {
      question: "What is the difference between the vector projection and the scalar projection?",
      answer: "The vector projection is a vector along v, equal to ((u · v) / ‖v‖²) v. The scalar projection is a number, (u · v) / ‖v‖, equal to the signed length of the vector projection. The two are related by the unit vector in the direction of v: the vector projection is the scalar projection times that unit vector. Dividing by ‖v‖ once gives the scalar; dividing by ‖v‖² and multiplying by v gives the vector."
    },
    obj3: {
      question: "Why is u minus its projection perpendicular to v?",
      answer: "Dot the remainder with v: (u − c v) · v = u · v − c (v · v). The coefficient c was defined as (u · v) / (v · v), so c (v · v) equals u · v and the two terms cancel to zero. A zero dot product means the remainder is perpendicular to v. This is what makes the projection and remainder an orthogonal decomposition of u."
    },
    obj4: {
      question: "Why divide by the squared length of v and not the length?",
      answer: "The dot product u · v scales with the length of v, and the vector v that the coefficient multiplies also scales with the length of v. Two factors of ‖v‖ enter, so two must be divided out; otherwise the projection would change when v is merely made longer or shorter, even though the line through v is the same. If v is a unit vector, ‖v‖² = 1 and the coefficient is simply u · v."
    },
    obj5: {
      question: "Can a projection be longer than the original vector?",
      answer: "No. The projection of u onto v has length |u · v| / ‖v‖, which is at most ‖u‖ by the Cauchy–Schwarz inequality, with equality only when u is parallel to v. Individual components of the projection can exceed the matching components of u, but the overall length cannot."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Vector Projection Visualizer",
      "description": "Step-by-step visualizer for the projection of one vector onto another. Watch proj_v u build in six phases: dot product, squared length, coefficient, scaling, and the perpendicular remainder.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-projection",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six-phase animation: pair, dot product, squared length, coefficient, scale, remainder",
        "Two scenarios: projection only, or projection followed by the perpendicular remainder",
        "Adjustable shared length of u and v from 1 component up to 5",
        "Running dot product sum in the caption during the pairing sweep",
        "Animated curved arrows from each source into its destination",
        "Symbolic coefficient c preserved through the scaling and remainder phases",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the projection and why the remainder is perpendicular"
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
      "keywords": "vector projection, projection of a vector onto another vector, scalar projection, orthogonal projection, projection formula, proj u onto v, vector projection calculator, vector projection visualizer, how to project a vector, orthogonal decomposition, perpendicular component, vector component along another vector, dot product projection, linear algebra visualizer, interactive vector tool"
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
          "name": "Vector Projection",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-projection"
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
      relatedTools: getRelatedTools('linear-algebra-vector-projection'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Vector Projection Visualizer | proj of u onto v Step by Step",
        description: "Visualize the projection of one vector onto another step by step. Dot product, squared length, coefficient, scaling, and the perpendicular remainder — for lengths up to 5.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/vector-projection",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="60" x2="70" y2="60" stroke="#97C459" stroke-width="2.6"/><path d="M 74 60 L 66 56 L 66 64 Z" fill="#97C459"/><line x1="12" y1="60" x2="48" y2="24" stroke="#85B7EB" stroke-width="2.8"/><path d="M 51 21 L 42 23 L 47 30 Z" fill="#85B7EB"/><line x1="48" y1="24" x2="48" y2="60" stroke="#B5D4F4" stroke-width="1.2" stroke-dasharray="2.5,2"/><path d="M 42 60 L 42 54 L 48 54" fill="none" stroke="#B5D4F4" stroke-width="1"/><line x1="12" y1="60" x2="44" y2="60" stroke="#FAC775" stroke-width="3.4"/><path d="M 48 60 L 40 56 L 40 64 Z" fill="#FAC775"/><circle cx="12" cy="60" r="2" fill="#E6F1FB"/><text x="22" y="36" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">u</text><text x="66" y="71" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">v</text><text x="30" y="71" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">proj</text></svg>`,
        name: "Vector Projection Visualizer",
        hubDescription: "Watch the projection of u onto v build in six phases — pair the components into a dot product, form the squared length of v, divide to get the coefficient, scale v by it, and subtract to expose the perpendicular remainder. Choose projection only or the full orthogonal decomposition, set the shared length from 1 to 5, and see why the divisor is the squared length and why the remainder is at right angles to v.",
        category: 'Vectors',
        subCategory: 'Products'
      }
    }
  }
}

export default function ProjectionVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-six-phases'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'phase-1-pairing', 'pair'),
    stateRow('obj13', 'phase-4-the-coefficient', 'coeff'),
    stateRow('obj14', 'phase-5-scaling', 'scale'),
    stateRow('obj15', 'phase-6-the-remainder', 'remainder'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-vector-length'),
    plain('obj5', 'what-the-projection-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Vector Projection</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <ProjectionWrapper
   mode='both'
   defaultScenario='decomposition'
   defaultN={3}
   explanations={explanations}
   />
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
