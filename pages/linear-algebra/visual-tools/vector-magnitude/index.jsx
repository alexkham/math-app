import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import MagnitudeWrapper from '../../../../app/components/linear-algebra copy/matrix/MagnitudeWrapper'
import magnitudeDiagrams from '../../../../app/components/linear-algebra copy/matrix/magnitudeDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'vector magnitude',
    'magnitude of a vector',
    'vector norm',
    'euclidean norm',
    'length of a vector',
    'unit vector',
    'normalize a vector',
    'vector normalization',
    'how to find the magnitude of a vector',
    'how to normalize a vector',
    'magnitude calculator',
    'unit vector calculator',
    'vector magnitude visualizer',
    'linear algebra visualizer',
    'interactive vector tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Magnitude** — the length of a vector, written $\\|\\mathbf{v}\\|$ (sometimes $|\\mathbf{v}|$), computed as $\\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$.

**Euclidean norm** — the formal name for the magnitude; also called the $\\ell^2$ norm or $2$-norm.

**Squared norm** — $\\|\\mathbf{v}\\|^2 = v_1^2 + \\cdots + v_n^2 = \\mathbf{v} \\cdot \\mathbf{v}$, the sum of squares before the root is taken.

**Unit vector** — a vector of magnitude exactly $1$.

**Normalization** — dividing a non-zero vector by its magnitude to produce the unit vector in the same direction: $\\hat{\\mathbf{v}} = \\mathbf{v} / \\|\\mathbf{v}\\|$.

**Direction** — what normalization preserves; two [vectors](!/linear-algebra/vectors#1) have the same direction when one is a positive multiple of the other.

**Zero vector** — the only vector with magnitude $0$, and the only one that cannot be normalized.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the length of $\\mathbf{v}$, pick a scenario, then watch the magnitude and the unit vector build one component at a time.

• Use the **Scenario** pills to choose **Magnitude only**, which stops at $\\|\\mathbf{v}\\|$, or **Magnitude, then unit vector**, which continues to $\\hat{\\mathbf{v}}$
• Use the **Dimensions** stepper to set the length of $\\mathbf{v}$ (1 to 6 components)
• Hover the **?** icon for a reminder of what the magnitude is and why normalization keeps the direction
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• The components are shown symbolically — the visualizer focuses on the structure of the computation, not on specific numbers`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Three Phases`,
      content: `The visualizer separates the computation into three phases.

• **Phase 1 — square**: each component $v_i$ is squared, one component per scene, and the square is written into a row beside $\\mathbf{v}$
• **Phase 2 — sum and root**: all the squares are added and the square root of the total fills the $\\|\\mathbf{v}\\|$ slot, in a single scene
• **Phase 3 — normalize**: each component $v_i$ is divided by $\\|\\mathbf{v}\\|$, one component per scene, filling the unit vector $\\hat{\\mathbf{v}}$; this phase runs only in the unit vector scenario

The layout changes between phases 2 and 3. The first two phases read $\\mathbf{v} \\to$ squares $\\to \\|\\mathbf{v}\\|$; the third reads $\\mathbf{v} \\div \\|\\mathbf{v}\\| = \\hat{\\mathbf{v}}$, because the magnitude has become an input.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In phase 1, the active component of $\\mathbf{v}$ is highlighted primary and its square, in the row beside it, accent; one arrow connects them
• In phase 2, every square is highlighted secondary and the $\\|\\mathbf{v}\\|$ slot accent, with an arrow from each square into the slot
• In phase 3, the active component of $\\mathbf{v}$ is primary, the $\\|\\mathbf{v}\\|$ slot secondary, and the destination component of $\\hat{\\mathbf{v}}$ accent; arrows flow from both sources into the destination
• The $\\|\\mathbf{v}\\|$ slot shows the full expression $\\sqrt{v_1^2 + v_2^2 + v_3^2}$ up to three components and an elided form beyond that
• The step log on the right keeps a record of every completed step across all phases`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing Vector Length`,
      content: `The dimension stepper controls the length of $\\mathbf{v}$, and the squares row and unit vector follow automatically.

• Length $2$ is the [Pythagorean theorem](!/linear-algebra/orthogonality/inner-product#10) itself: $\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2}$ is the hypotenuse of a right triangle with legs $v_1$ and $v_2$
• Length $3$ is the same theorem applied twice, giving the diagonal of a box with sides $v_1, v_2, v_3$
• Longer vectors show that the rule does not change: one square per component, one sum, one root, and one division per component to normalize
• Length $1$ is a useful edge case: $\\|\\mathbf{v}\\| = \\sqrt{v_1^2} = |v_1|$, the absolute value, which is why the magnitude generalizes absolute value`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Magnitude Is`,
      content: `The magnitude of a vector $\\mathbf{v} \\in \\mathbb{R}^n$ is

$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2} = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$$

It is the length of the arrow from the origin to the point $(v_1, \\ldots, v_n)$, measured with the Pythagorean theorem. The magnitude is always non-negative, and it is zero only for the zero vector.

Normalizing $\\mathbf{v}$ means dividing it by its own magnitude:

$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}, \\qquad \\hat{v}_i = \\frac{v_i}{\\|\\mathbf{v}\\|}$$

Every component is divided by the same positive number, so the direction is unchanged and the new length is $\\|\\mathbf{v}\\| / \\|\\mathbf{v}\\| = 1$. Any non-zero vector therefore splits into a length and a direction: $\\mathbf{v} = \\|\\mathbf{v}\\| \\, \\hat{\\mathbf{v}}$.

For the full treatment, including other norms and the triangle inequality, see the [vector magnitude theory page](!/linear-algebra/vectors/magnitude).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The magnitude satisfies the three axioms every norm must satisfy, plus a few identities specific to the Euclidean norm.

• **Non-negativity**: $\\|\\mathbf{v}\\| \\geq 0$, with equality only for $\\mathbf{v} = \\mathbf{0}$
• **Scaling**: $\\|k\\mathbf{v}\\| = |k| \\, \\|\\mathbf{v}\\|$ — the absolute value matters, since $-\\mathbf{v}$ has the same length as $\\mathbf{v}$
• **Triangle inequality**: $\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$
• **Dot product link**: $\\|\\mathbf{v}\\|^2 = \\mathbf{v} \\cdot \\mathbf{v}$
• **Unit vectors**: $\\|\\hat{\\mathbf{v}}\\| = 1$ for every non-zero $\\mathbf{v}$, and $\\hat{\\mathbf{v}}$ is the unique unit vector in the direction of $\\mathbf{v}$
• **Decomposition**: $\\mathbf{v} = \\|\\mathbf{v}\\| \\, \\hat{\\mathbf{v}}$, a length times a direction
• **Distance**: $\\|\\mathbf{u} - \\mathbf{v}\\|$ is the distance between the points $\\mathbf{u}$ and $\\mathbf{v}$

The squaring in phase 1 is what makes the sign of each component irrelevant: $(-3)^2 = 3^2$, so a vector and its negative have the same magnitude.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Magnitude and normalization appear wherever a vector's size and its direction need to be handled separately.

• **Distance and geometry**: lengths of segments, distances between points, and radii are all magnitudes of difference vectors
• **Angles**: $\\cos\\theta = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\|}$ needs both magnitudes; with unit vectors the cosine is just the dot product
• **Direction fields**: normals, tangents, and view directions in graphics and physics are normalized so that only the direction carries information
• **Orthonormal bases**: Gram-Schmidt normalizes each vector after making it orthogonal to the previous ones
• **Machine learning**: feature vectors are normalized so that comparisons depend on direction rather than scale, and cosine similarity is a dot product of unit vectors
• **Numerical stability**: iterative algorithms such as power iteration renormalize at each step to keep the numbers from overflowing`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take

$$\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}$$

Square each component: $1^2 = 1$, $2^2 = 4$, $2^2 = 4$.

Sum and root:

$$\\|\\mathbf{v}\\| = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$

Normalize by dividing each component by $3$:

$$\\hat{\\mathbf{v}} = \\frac{1}{3}\\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 1/3 \\\\ 2/3 \\\\ 2/3 \\end{pmatrix}$$

Check: $\\|\\hat{\\mathbf{v}}\\| = \\sqrt{1/9 + 4/9 + 4/9} = \\sqrt{9/9} = 1$.

A two-component example is the classic $3$-$4$-$5$ triangle: for $\\mathbf{v} = (3, 4)$, $\\|\\mathbf{v}\\| = \\sqrt{9 + 16} = 5$ and $\\hat{\\mathbf{v}} = (0.6, 0.8)$. Set the visualizer to length $3$ or $2$ and step through to see the same computation symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Forgetting the square root** — $v_1^2 + \\cdots + v_n^2$ is the squared magnitude $\\|\\mathbf{v}\\|^2$, not the magnitude
• **Adding components instead of squares** — $|v_1| + |v_2| + \\cdots$ is a different norm (the $\\ell^1$ norm), not the Euclidean length
• **Dropping the absolute value when scaling** — $\\|k\\mathbf{v}\\| = |k| \\, \\|\\mathbf{v}\\|$, so $\\|-2\\mathbf{v}\\| = 2\\|\\mathbf{v}\\|$, never $-2\\|\\mathbf{v}\\|$
• **Normalizing by the squared norm** — dividing by $\\|\\mathbf{v}\\|^2$ instead of $\\|\\mathbf{v}\\|$ gives a vector of length $1/\\|\\mathbf{v}\\|$, not $1$
• **Normalizing the zero vector** — its magnitude is $0$, and division by zero is undefined; the zero vector has no direction
• **Expecting the components of a unit vector to be at most 1 in some other sense** — each $|\\hat{v}_i| \\leq 1$ does hold, but a unit vector's components can be any values whose squares sum to $1$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Dot product](!/linear-algebra/visual-tools/vectors-inner-product) — $\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$; the magnitude is the square root of a vector's dot product with itself.

[Scalar multiplication](!/linear-algebra/visual-tools/vector-scalar-multiplication) — normalization is scalar multiplication by $1/\\|\\mathbf{v}\\|$.

**Distance** — $\\|\\mathbf{u} - \\mathbf{v}\\|$, the magnitude of a difference vector.

**Angle between vectors** — defined through the dot product divided by the two magnitudes.

**Orthonormal basis** — a basis of mutually perpendicular unit vectors; normalization is the last step in building one.

**Other norms** — the $\\ell^1$ norm (sum of absolute values), the $\\ell^\\infty$ norm (largest absolute value), and the general $\\ell^p$ family.

**Pythagorean theorem** — the magnitude formula is the theorem in $n$ dimensions.

**Inner product space** — the abstract setting in which every inner product defines a norm by $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.

[Vector projection](!/linear-algebra/visual-tools/vector-projection) — its coefficient divides by $\\|\\mathbf{v}\\|^2$, the squared magnitude of the vector being projected onto, so every projection is a magnitude calculation in disguise.

[Gram-Schmidt](!/linear-algebra/visual-tools/gram-schmidt) — normalization is the final step of the process, applied to each orthogonalized vector in turn to turn an orthogonal set into an orthonormal one.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: One Vector, One Number`,
      content: `The player opens with $\\mathbf{v}$ as a row of components, an empty row of squares beside it, and an empty slot for $\\|\\mathbf{v}\\|$. At the default length $\\mathbf{v}$ has three components.

Nothing is computed yet. What the scene establishes is the shape of the answer: one vector in, **one non-negative number** out.`,
      before: ``,
      after: `That collapse from many components to a single number is what makes the magnitude a measurement rather than another vector. The squares row is scaffolding: it holds the intermediate values so that the two operations, squaring and summing, stay visibly separate.

There is no precondition on $\\mathbf{v}$ beyond having real components. Any length works, and any vector has a magnitude — including the zero vector, whose magnitude is $0$.`,
      link: '',
    },
    obj12: {
      title: `Phase 1: Squaring Each Component`,
      content: `The first sweep multiplies every component of $\\mathbf{v}$ by itself, one slot at a time, and writes the square into the row beside it.

The frozen picture below is the second step at length $3$: one square already written, one being computed, one still a placeholder.`,
      before: ``,
      after: `Squaring is where the sign disappears. A component of $-3$ contributes $9$, exactly as $+3$ would, so the magnitude cannot tell $\\mathbf{v}$ from $-\\mathbf{v}$. That is correct behaviour for a length: an arrow and its reverse are the same size.

Each square depends on one component only, so the steps of this phase are independent and could run in any order. The left-to-right sweep is a presentational choice.`,
      link: '',
    },
    obj13: {
      title: `Phase 2: Summing and Taking the Root`,
      content: `The second phase is a single scene. Every square is counted, their sum is formed, and the square root of the total fills the $\\|\\mathbf{v}\\|$ slot.

The frozen picture below shows the completed sum: all three squares highlighted and the slot reading $\\sqrt{v_1^2 + v_2^2 + v_3^2}$.`,
      before: ``,
      after: `The sum of squares is the squared magnitude, $\\|\\mathbf{v}\\|^2 = \\mathbf{v} \\cdot \\mathbf{v}$, and it is often the more convenient quantity: comparing two lengths needs no square root, since $\\|\\mathbf{u}\\| < \\|\\mathbf{v}\\|$ exactly when $\\|\\mathbf{u}\\|^2 < \\|\\mathbf{v}\\|^2$.

The root is what returns a length in the same units as the components. Geometrically the whole phase is the Pythagorean theorem: at length $2$ the slot is a hypotenuse, at length $3$ the diagonal of a box, and at higher lengths the same rule applied once per extra component.`,
      link: '',
    },
    obj14: {
      title: `Phase 3: Normalizing to a Unit Vector`,
      content: `In the unit vector scenario the layout changes: $\\|\\mathbf{v}\\|$ moves from output to input, and the third sweep divides every component of $\\mathbf{v}$ by it, one slot at a time, filling $\\hat{\\mathbf{v}}$.

The frozen picture below is the second step: one component of $\\hat{\\mathbf{v}}$ already written as $v_1 / \\|\\mathbf{v}\\|$, one being computed, one still a placeholder.`,
      before: ``,
      after: `Every component is divided by the **same** number, which is the reason the direction survives. Scaling all components by a common positive factor slides the arrow along its own line; it cannot turn it. The new length is $\\|\\mathbf{v}\\| / \\|\\mathbf{v}\\| = 1$.

The completed picture reads $\\mathbf{v} = \\|\\mathbf{v}\\| \\, \\hat{\\mathbf{v}}$: a length times a direction. That split is what unit vectors are for. In the dot product formula for an angle, in surface normals, in cosine similarity, the direction is the information and the length is noise, and normalization strips the noise away.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from MagnitudeWrapper's own buildScenes (exported additively) and
     rendered through frozenMatrixSvg. Arrows are not reproduced in the
     stills; the cell highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: magnitudeDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'v as a three-component row, an empty row of squares beside it, and an empty slot for ' +
      '&#8214;v&#8214;. One vector in, one number out - the shape of the answer comes first.'),
    square: unit('square', 'Phase 1, mid-sweep',
      'Components of v being squared one at a time into the row beside them. The sign of each ' +
      'component vanishes here: a negative entry contributes the same square as a positive one.'),
    root: unit('root', 'Phase 2, the sum and root',
      'Every square counted and the slot filled with &#8730;(v<sub>1</sub>&#178; + v<sub>2</sub>&#178; + ' +
      'v<sub>3</sub>&#178;). This is the Pythagorean theorem in three dimensions.'),
    normalize: unit('normalize', 'Phase 3, mid-sweep',
      'The layout has turned around: &#8214;v&#8214; is now an input, and each component of v is ' +
      'being divided by it to fill the unit vector. One common divisor, so the direction is untouched.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     MagnitudeWrapper accepts an explanations prop keyed by phase:
     intro, square, root, normalize, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-magnitude-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('One vector in, one non-negative number out.', 'the-opening-scene', 'Learn more about the opening scene'),
    square: note('Squaring erases the sign - a vector and its negative have the same length.', 'phase-1-squaring', 'Learn more about phase 1'),
    root: note('The sum of squares is the squared magnitude; the root returns a length in the units of the components.', 'phase-2-sum-and-root', 'Learn more about phase 2'),
    normalize: note('One common divisor for every component, so the direction survives and the length becomes 1.', 'phase-3-normalizing', 'Learn more about phase 3'),
    done: note('v = &#8214;v&#8214; &middot; v&#770; - a length times a direction.', 'phase-3-normalizing', 'Learn more about the final phase'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the magnitude of a vector?",
      answer: "The magnitude of a vector is its length: the square root of the sum of the squares of its components. For a vector with components v1, v2, ..., vn, the magnitude is the square root of v1² + v2² + ... + vn². It is the Pythagorean theorem extended to any number of components, and it is always a non-negative number."
    },
    obj2: {
      question: "How do you normalize a vector?",
      answer: "Divide every component of the vector by its magnitude. The result is the unit vector in the same direction, with length exactly 1. For example, the vector (3, 4) has magnitude 5, so its unit vector is (3/5, 4/5) = (0.6, 0.8). Only the zero vector cannot be normalized, because its magnitude is zero."
    },
    obj3: {
      question: "Why does normalizing a vector keep its direction?",
      answer: "Every component is divided by the same positive number, the magnitude. Scaling all components by one common positive factor moves the arrow along its own line without turning it, so the direction is unchanged. Only the length changes, and it becomes the magnitude divided by itself, which is 1."
    },
    obj4: {
      question: "What is the difference between the magnitude and the squared magnitude?",
      answer: "The squared magnitude is the sum of the squares of the components, before the square root is taken; it equals the dot product of the vector with itself. The magnitude is the square root of that sum. The squared form is often more convenient for comparing lengths, because it avoids the root, but it is measured in squared units."
    },
    obj5: {
      question: "Can the magnitude of a vector be negative?",
      answer: "No. Each squared component is non-negative, so their sum is non-negative and its square root is non-negative. The magnitude is zero only for the zero vector. Scaling a vector by a negative number k gives a vector of magnitude |k| times the original, never a negative length."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Vector Magnitude and Unit Vector Visualizer",
      "description": "Step-by-step visualizer for the magnitude of a vector and its normalization. Watch the norm build in three phases: square each component, sum and take the root, then divide to get the unit vector.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-magnitude",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three-phase animation: square each component, sum and root, then normalize",
        "Two scenarios: magnitude only, or magnitude followed by the unit vector",
        "Adjustable vector length from 1 component up to 6",
        "Animated curved arrows from each source into its destination",
        "Symbolic components preserved through every step",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the magnitude and why normalization keeps the direction"
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
      "keywords": "vector magnitude, magnitude of a vector, vector norm, euclidean norm, length of a vector, unit vector, normalize a vector, vector normalization, how to find the magnitude of a vector, how to normalize a vector, magnitude calculator, unit vector calculator, vector magnitude visualizer, linear algebra visualizer, interactive vector tool"
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
          "name": "Vector Magnitude",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-magnitude"
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
      relatedTools: getRelatedTools('linear-algebra-vector-magnitude'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Vector Magnitude and Unit Vector Visualizer | ‖v‖ Step by Step",
        description: "Visualize the magnitude of a vector and its unit vector step by step. Square each component, sum and take the root, then divide to normalize — for lengths up to 6.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/vector-magnitude",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="16" y1="62" x2="60" y2="62" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2.5,2"/><line x1="60" y1="62" x2="60" y2="26" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2.5,2"/><path d="M 60 56 L 54 56 L 54 62" fill="none" stroke="#B5D4F4" stroke-width="0.9"/><line x1="16" y1="62" x2="58" y2="28" stroke="#85B7EB" stroke-width="2.8"/><path d="M 62 25 L 53 27 L 58 34 Z" fill="#85B7EB"/><line x1="16" y1="62" x2="33" y2="48" stroke="#FAC775" stroke-width="3.2"/><path d="M 36 46 L 28 47 L 32 53 Z" fill="#FAC775"/><circle cx="16" cy="62" r="2" fill="#E6F1FB"/><text x="34" y="40" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#8214;v&#8214;</text><text x="24" y="47" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">v&#770;</text><text x="40" y="72" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#8730;(v&#8321;&#178; + v&#8322;&#178;)</text></svg>`,
        name: "Vector Magnitude and Unit Vector Visualizer",
        hubDescription: "Watch the magnitude of a vector build in three phases — square each component, sum the squares and take the root, then divide every component by that one number to get the unit vector. Choose magnitude only or magnitude followed by normalization, set the length from 1 to 6 components, and see why the direction survives normalization while the length becomes exactly 1.",
        category: 'Vectors',
        subCategory: 'Properties'
      }
    }
  }
}

export default function MagnitudeVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-three-phases'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'phase-1-squaring', 'square'),
    stateRow('obj13', 'phase-2-sum-and-root', 'root'),
    stateRow('obj14', 'phase-3-normalizing', 'normalize'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-vector-length'),
    plain('obj5', 'what-the-magnitude-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Magnitude and Unit Vector</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <MagnitudeWrapper
   mode='both'
   defaultScenario='unit'
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
