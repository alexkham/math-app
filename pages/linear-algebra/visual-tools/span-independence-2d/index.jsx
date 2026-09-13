import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import SpanIndependence from '../../../../app/components/linear-algebra copy/r2-visualizers/span-independence/SpanIndependence'
import { SCENARIOS as SP_SCENARIOS } from '../../../../app/components/linear-algebra copy/r2-visualizers/span-independence/SpanIndependence'
import spanIndependenceDiagrams, { groupOf, statsFor } from '../../../../app/components/linear-algebra copy/r2-visualizers/span-independence/spanIndependenceDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'span of vectors',
    'linear independence',
    'linearly independent vectors',
    'linearly dependent vectors',
    'span visualizer',
    'linear independence visualizer',
    'span of two vectors',
    'span 2d',
    'determinant test independence',
    'parallelogram area vectors',
    'rank of two vectors',
    'interactive linear algebra',
    'basis of R2',
    'linear combination geometry',
    'vector space visualization'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Linear combination** &mdash; any vector of the form $c\\,\\mathbf{a} + d\\,\\mathbf{b}$ for [scalars](!/linear-algebra/vectors#1) $c, d$.

**Span** &mdash; the set of all [linear combinations](!/linear-algebra/vectors/linear-combinations#1) of a collection of [vectors](!/linear-algebra/vectors#1). For two vectors in the plane it is either the whole plane, a line through the origin, or just the origin.

**Linearly independent** &mdash; neither vector is a scalar multiple of the other; equivalently, the only way to write $c\\,\\mathbf{a} + d\\,\\mathbf{b} = \\mathbf{0}$ is $c = d = 0$.

**Linearly dependent** &mdash; one vector is a multiple of the other (or one of them is zero), so the pair carries only one direction.

**Determinant** &mdash; $\\det[\\mathbf{a}\\;\\mathbf{b}] = a_1 b_2 - a_2 b_1$; its absolute value is the area of the parallelogram spanned by $\\mathbf{a}$ and $\\mathbf{b}$, and it is zero exactly when the pair is dependent.

**Rank** &mdash; the number of independent directions in the pair: $2$ if the span is the plane, $1$ if it is a line, $0$ if both vectors are zero.

**Basis of $\\mathbb{R}^2$** &mdash; any two independent vectors; every vector in the plane is then a unique combination of them.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started`,
      content: `The canvas shows two draggable vectors, $\\mathbf{a}$ in orange and $\\mathbf{b}$ in cyan, the parallelogram they span, and a lattice of dots at the combinations $c\\,\\mathbf{a} + d\\,\\mathbf{b}$ for small integer $c$ and $d$. A label in the corner reports whether the span is the plane, a line, or just the origin.

Try this sequence to build intuition:

&bull; Start on the **Orthogonal** preset. The parallelogram is filled, the lattice covers the plane, and the label reads span $= \\mathbb{R}^2$.
&bull; Drag the tip of $\\mathbf{b}$ toward the line through $\\mathbf{a}$. The parallelogram thins, its area in the live card shrinks, and the moment $\\mathbf{b}$ lands on that line the fill vanishes, a dashed red span line appears, and the label switches to span $=$ line.
&bull; Press **play** in the animation panel. $\\mathbf{b}$ orbits the origin at fixed length while the determinant [traces](!/linear-algebra/matrix/trace#1) a sine wave below; watch it cross zero exactly when $\\mathbf{b}$ is parallel or anti-parallel to $\\mathbf{a}$.

The point: independence is not about the vectors being perpendicular or long. It is about whether they point in genuinely different directions.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Dragging the Vectors`,
      content: `Both tips are handles.

&bull; **Drag $\\mathbf{a}$** &mdash; the orange vector. The parallelogram and the lattice follow it, and the angle arc between the two vectors updates.
&bull; **Drag $\\mathbf{b}$** &mdash; the cyan vector. Same effect from the other side.
&bull; **Type coordinates** &mdash; the vectors editor on the right accepts exact values, which is the way to hit an exact dependency such as $\\mathbf{b} = 2\\mathbf{a}$.

Dragging either vector clears the current preset and resets the sweep animation. Nothing else changes: the grid stays fixed, and only the pair and everything built from it move.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `The Sweep Animation`,
      content: `The animation panel rotates $\\mathbf{b}$ a full turn around the origin while $\\mathbf{a}$ stays anchored, keeping the length of $\\mathbf{b}$ fixed.

&bull; The **progress bar** marks every angle at which the determinant is zero, and the header reports the next one coming
&bull; The **sparkline** below draws $\\det = \\|\\mathbf{a}\\| \\, \\|\\mathbf{b}\\| \\sin\\varphi$ as $\\varphi$ runs from $0$ to $360°$, with positive lobes in indigo and negative lobes in red
&bull; The **trail** on the canvas leaves faded copies of past parallelograms and a dotted circle showing the orbit of $\\mathbf{b}$
&bull; Step forward and back in $30°$ increments, scrub with the slider, or reset to clear the trail

The sweep makes one fact hard to miss: in a full turn the pair is dependent at exactly two angles, when $\\mathbf{b}$ is parallel to $\\mathbf{a}$ and when it is anti-parallel. Everywhere else the parallelogram has area and the span is the plane.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `The Live Card`,
      content: `The card on the right reports the numbers behind the picture.

&bull; $\\|\\mathbf{a}\\|$ and $\\|\\mathbf{b}\\|$ &mdash; the two lengths
&bull; **angle** &mdash; the angle between the vectors, between $0°$ and $180°$
&bull; $\\det[\\mathbf{a}\\;\\mathbf{b}]$ &mdash; the signed area, $a_1 b_2 - a_2 b_1$
&bull; **area** &mdash; its absolute value, the area of the parallelogram
&bull; **rank** &mdash; $2$, $1$ or $0$

A status strip underneath reads INDEPENDENT, DEPENDENT or DEGENERATE with the matching span statement. The determinant is the single number that decides it: non-zero means rank $2$ and the whole plane; zero means the parallelogram has collapsed.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `Display Layer Toggles`,
      content: `Six chips switch the overlays on and off.

&bull; **grid** &mdash; the fixed background grid
&bull; **parallelogram** &mdash; the region $\\{c\\,\\mathbf{a} + d\\,\\mathbf{b} : 0 \\leq c, d \\leq 1\\}$, filled indigo when the determinant is positive, purple when negative, grey when zero
&bull; **lattice** &mdash; the combinations $c\\,\\mathbf{a} + d\\,\\mathbf{b}$ for $c, d$ from $-2$ to $2$; a sample of the span
&bull; **trail** &mdash; the sweep animation's history
&bull; **span line** &mdash; the dashed red line through the origin, drawn only when the pair is dependent
&bull; **labels** &mdash; the vector names and the corner span label

Turning off everything except the lattice is a good way to see the span as a set of points: a plane-filling grid when independent, a single row of dots when dependent.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Preset Scenarios`,
      content: `The sidebar offers nine presets in three groups.

&bull; **Independent** &mdash; orthogonal ($90°$), oblique ($60°$), near-aligned ($15°$), and the standard basis $\\mathbf{e}_1, \\mathbf{e}_2$
&bull; **Dependent** &mdash; $\\mathbf{b} = 2\\mathbf{a}$, $\\mathbf{b} = -1.5\\mathbf{a}$, and a pair on the same line with $\\det = 0$
&bull; **Edge cases** &mdash; $\\mathbf{a} = \\mathbf{0}$ and $\\mathbf{b} = \\mathbf{0}$

The four sections that follow take one representative from each situation and freeze it, so the picture and the numbers can be read together. The explanation card in the tool links back to the matching section for whichever preset is active.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `What Span Is`,
      content: `The span of $\\mathbf{a}$ and $\\mathbf{b}$ is the set of every vector that can be built from them by scaling and adding:

$$\\operatorname{span}\\{\\mathbf{a}, \\mathbf{b}\\} = \\{\\, c\\,\\mathbf{a} + d\\,\\mathbf{b} : c, d \\in \\mathbb{R} \\,\\}$$

In the plane there are only three possibilities. If the two vectors point in different directions, the combinations reach every point and the span is all of $\\mathbb{R}^2$. If one is a multiple of the other, every combination stays on the line they share, and the span is that line. If both are zero, the span is the origin alone.

The lattice layer is a finite sample of the span, the combinations with $c$ and $d$ between $-2$ and $2$. When the vectors are independent the dots fill out a slanted grid that would cover the plane if extended; when they are dependent the dots line up.

For span in general [dimension](!/linear-algebra/vector-spaces/dimension#1) and its role in defining [subspaces](!/linear-algebra/vector-spaces/subspaces#1), see the [span theory page](!/linear-algebra/vector-spaces/span).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `What Linear Independence Is`,
      content: `Two vectors are linearly independent when neither is a scalar multiple of the other. The formal definition says the same thing through the zero vector: $\\mathbf{a}$ and $\\mathbf{b}$ are independent when

$$c\\,\\mathbf{a} + d\\,\\mathbf{b} = \\mathbf{0} \\quad \\text{forces} \\quad c = d = 0$$

If some other choice of $c, d$ gives zero, say $c \\neq 0$, then $\\mathbf{a} = -(d/c)\\,\\mathbf{b}$ and the vectors are multiples of each other. That is dependence.

Geometrically, independence means the pair carries two directions, so the parallelogram has area and the span is the plane. Dependence means one direction, a flat parallelogram, and a span that is only a line. Any set containing the zero vector is dependent, since $1 \\cdot \\mathbf{0} + 0 \\cdot \\mathbf{b} = \\mathbf{0}$ is a non-trivial combination.

Two independent vectors in $\\mathbb{R}^2$ are automatically a basis: every vector in the plane is a unique combination of them. For independence of larger sets and the connection to rank, see the [linear independence theory page](!/linear-algebra/vector-spaces/linear-independence).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `The Determinant Test`,
      content: `For two vectors in the plane there is a one-number test:

$$\\det[\\mathbf{a}\\;\\mathbf{b}] = a_1 b_2 - a_2 b_1$$

Its absolute value is the area of the parallelogram with sides $\\mathbf{a}$ and $\\mathbf{b}$, and that area is also $\\|\\mathbf{a}\\| \\, \\|\\mathbf{b}\\| \\sin\\varphi$ with $\\varphi$ the angle between them. So

&bull; $\\det \\neq 0$ &mdash; positive area, $\\varphi$ strictly between $0°$ and $180°$, independent, rank $2$
&bull; $\\det = 0$ &mdash; zero area, $\\varphi = 0°$ or $180°$ (or a zero vector), dependent, rank at most $1$

The sign carries orientation: positive when $\\mathbf{b}$ sits counterclockwise from $\\mathbf{a}$, negative when clockwise. The sweep animation's sparkline is this formula plotted against $\\varphi$, and its zero crossings are the two dependent angles in every full turn.

The test is exact in arithmetic but delicate in floating point. The near-aligned preset has a determinant that is small but not zero; a rounding error of the same size would flip the verdict, which is why numerical software uses tolerances rather than testing for exact zero.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Linear combination](!/linear-algebra/visual-tools/matrix-linear-combination) &mdash; the operation whose outputs make up the span.

**Basis** &mdash; an independent set that spans; two independent vectors in $\\mathbb{R}^2$ are a basis of the plane.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) &mdash; the area test for independence of two vectors, and its generalization to $n$ vectors in $\\mathbb{R}^n$.

[Rank](!/linear-algebra/visual-tools/matrix-rank) &mdash; the number of independent directions, computed for larger sets by row reduction.

[Change of basis](!/linear-algebra/visual-tools/change-basis-2d) &mdash; what an independent pair lets you do: give every vector coordinates.

**Subspace** &mdash; the span of any set of vectors is a subspace; a line or plane through the origin.

[Cross product](!/linear-algebra/visual-tools/vector-cross-product) &mdash; in $\\mathbb{R}^3$ the analogous area test: $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0}$ exactly when the pair is dependent.

**Dimension** &mdash; the size of a basis; the rank of the pair is the dimension of its span.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Independent Pairs`,
      content: `The orthogonal preset is the clean case: $\\mathbf{a} = (2, 1)$ and $\\mathbf{b} = (-1, 2)$ meet at $90°$, the parallelogram is a square of area $5$, and the lattice fills the plane.

The determinant is $2 \\cdot 2 - 1 \\cdot (-1) = 5$, positive, so $\\mathbf{b}$ sits counterclockwise from $\\mathbf{a}$ and the rank is $2$.`,
      before: ``,
      after: `Every point in the plane is a unique combination $c\\,\\mathbf{a} + d\\,\\mathbf{b}$ of this pair, which is what makes it a basis. The oblique and standard-basis presets are the same situation with a different angle and different lengths; the only thing that matters for independence is that the angle is not $0°$ or $180°$.

Perpendicularity is a bonus, not a requirement. An orthogonal basis makes coordinates easy to compute, because each coefficient is a projection, but a $60°$ pair spans the plane exactly as well.`,
      link: '',
    },
    obj12: {
      title: `Near-Dependence`,
      content: `The near-aligned preset puts $\\mathbf{b}$ only $15°$ from $\\mathbf{a}$, both of length $2$. The parallelogram is a thin sliver, but it has area: $\\det = 4 \\sin 15° \\approx 1.04$, not zero.

The pair is independent, the span is still the whole plane, and the rank is still $2$.`,
      before: ``,
      after: `Mathematically nothing has changed from the orthogonal case. Practically, everything has. Reaching a point far from the line through $\\mathbf{a}$ now requires huge coefficients of opposite sign, and a small error in either vector could close the angle to zero and collapse the rank.

This is why numerical linear algebra treats near-dependence as a warning. The condition of a basis, not just its independence, decides whether coordinates computed in it can be trusted, and the area of the parallelogram relative to the lengths of its sides is the plane's simplest measure of that.`,
      link: '',
    },
    obj13: {
      title: `Dependent Pairs`,
      content: `In the $\\mathbf{b} = 2\\mathbf{a}$ preset, $\\mathbf{a} = (1.5, 1)$ and $\\mathbf{b} = (3, 2)$. The two arrows lie on one line, the parallelogram has collapsed to a segment, and a dashed red span line runs through the origin in their shared direction.

The determinant is $1.5 \\cdot 2 - 1 \\cdot 3 = 0$, the area is $0$, and the rank is $1$.`,
      before: ``,
      after: `Every combination $c\\,\\mathbf{a} + d\\,\\mathbf{b}$ equals $(c + 2d)\\,\\mathbf{a}$, a multiple of $\\mathbf{a}$, so the span is the line and nothing off it can be reached. The lattice dots all fall on that line.

The anti-parallel preset, $\\mathbf{b} = -1.5\\mathbf{a}$, and the same-line preset make the same point with a negative scalar and with a fractional one. Dependence is about direction, not about sign or length: any non-zero scalar multiple, in either direction, collapses the span to a line.`,
      link: '',
    },
    obj14: {
      title: `Edge Cases`,
      content: `In the $\\mathbf{a} = \\mathbf{0}$ preset the orange vector has vanished into the origin and only $\\mathbf{b} = (1.5, 1)$ remains. The span is the line through $\\mathbf{b}$, the determinant is $0$, and the rank is $1$.

Formally the pair is dependent, even though $\\mathbf{b}$ by itself is a perfectly good vector.`,
      before: ``,
      after: `The zero vector can never contribute a direction, and any set containing it is dependent by the definition: $1 \\cdot \\mathbf{0} + 0 \\cdot \\mathbf{b} = \\mathbf{0}$ is a combination with a non-zero coefficient that produces zero. The span is whatever the other vector spans.

Drag $\\mathbf{b}$ to the origin as well and the rank drops to $0$: the span is the single point $\\{\\mathbf{0}\\}$, and the corner label says so. That is the only case in which two vectors span nothing at all.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from the tool's own canvas composition: SpanIndependence's exported
     SVGRender for the grid, span shade or line, lattice, parallelogram, angle
     arc and arrows. See spanIndependenceDiagrams.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: spanIndependenceDiagrams[key], caption, text })
  const f = (x) => Math.round(x * 100) / 100

  const stateUnits = {
    independent: unit('independent', 'Orthogonal pair, frozen',
      `a = (2, 1) and b = (&minus;1, 2) at 90&deg;. The parallelogram is a filled square of area ${f(statsFor.orthogonal.area)}, ` +
      'the lattice covers the plane, and the label reads span = &#8477;&sup2;. Rank 2.'),
    nearDependent: unit('nearDependent', 'Near-aligned pair, frozen',
      `Only 15&deg; apart. The parallelogram is a sliver of area ${f(statsFor.nearAligned15.area)} - small, but not zero. ` +
      'Still independent, still the whole plane, and one rounding error from collapse.'),
    dependent: unit('dependent', 'b = 2a, frozen',
      'Both arrows on one line, the parallelogram flattened to a segment, and the dashed red span line ' +
      'through the origin. Determinant 0, area 0, rank 1: every combination stays on that line.'),
    edge: unit('edge', 'a = 0, frozen',
      'The orange vector has vanished into the origin. The span is the line through b alone, and the pair ' +
      'is formally dependent - the zero vector can never supply a direction.'),
  }


  /* ---- per-scenario panel notes (Line 1) ----
     The tool's ExplanationCard accepts an override with a byPreset map and
     REPLACES the entry, so each override spreads the tool's own SCENARIOS
     entry and appends the anchor to `body`. All nine scenarios are covered;
     each points at the section for its situation. The card renders with
     dangerouslySetInnerHTML, so the anchors are raw HTML. */
  const SECTION_FOR = (key) => {
    if (key === 'nearAligned15') return ['near-dependence', 'near-dependence']
    const g = groupOf[key]
    if (g === 'independent') return ['independent-pairs', 'independent pairs']
    if (g === 'dependent') return ['dependent-pairs', 'dependent pairs']
    return ['edge-cases', 'the edge cases']
  }

  const explanationOverride = {
    byPreset: Object.fromEntries(
      Object.entries(SP_SCENARIOS).map(([key, sc]) => {
        const [slug, label] = SECTION_FOR(key)
        return [key, {
          ...sc,
          body: `${sc.body || ''}<br/><a href="#${slug}" style="color:#1d4ed8;font-weight:600">Learn more about ${label}</a>` +
            ` &middot; <a href="#the-determinant-test" style="color:#1d4ed8;font-weight:600">the determinant test</a>`,
        }]
      })
    ),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the span of two vectors?",
      answer: "The span of two vectors is the set of every vector that can be formed by scaling each of them and adding the results, that is, every linear combination c·a + d·b. In the plane the span is the whole plane when the vectors point in different directions, a line through the origin when one is a multiple of the other, and the origin alone when both are zero."
    },
    obj2: {
      question: "How can you tell if two vectors are linearly independent?",
      answer: "Two vectors are linearly independent when neither is a scalar multiple of the other. For vectors in the plane there is a one-number test: compute the determinant a₁b₂ − a₂b₁. If it is non-zero the vectors are independent and span the plane; if it is zero they are dependent and span at most a line. The determinant's absolute value is the area of the parallelogram the vectors form, so the test asks whether that parallelogram has any area."
    },
    obj3: {
      question: "Why does the parallelogram collapse when the vectors are dependent?",
      answer: "The parallelogram has sides a and b, and its area is the length of a times the length of b times the sine of the angle between them. When one vector is a multiple of the other, the angle is 0° or 180°, the sine is zero, and the area is zero, so the parallelogram flattens to a segment. Geometrically both sides lie along the same line and there is no second direction to give the shape any width."
    },
    obj4: {
      question: "Is a set containing the zero vector linearly dependent?",
      answer: "Yes, always. Linear independence requires that the only combination giving the zero vector uses all-zero coefficients. With a zero vector in the set, multiplying it by 1 and everything else by 0 gives the zero vector with a non-zero coefficient, so the set is dependent. Geometrically, the zero vector has no direction and cannot help span anything."
    },
    obj5: {
      question: "Do independent vectors have to be perpendicular?",
      answer: "No. Independence only requires that the vectors point in different directions, so the angle between them can be anything other than 0° or 180°. A pair at 60° or even at 15° is independent and spans the plane. Perpendicular pairs are convenient because coordinates in them are easy to compute, but they are a special case, not the definition."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Span and Linear Independence 2D Visualizer",
      "description": "Interactive visualizer for the span and linear independence of two vectors in the plane. Drag the vectors, watch the parallelogram fill or collapse, sweep one vector around the origin, and read the determinant test live.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/span-independence-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two draggable vectors with a parallelogram that fills when independent and collapses when dependent",
        "Lattice of linear combinations showing the span as a set of points",
        "Dashed span line when the pair is dependent",
        "Sweep animation rotating one vector a full turn with the determinant traced as a sine wave",
        "Live card with lengths, angle, determinant, area and rank",
        "Nine presets in three groups: independent, dependent, edge cases",
        "Exact coordinate entry and display layer toggles"
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
      "keywords": "span of vectors, linear independence, linearly independent vectors, linearly dependent vectors, span visualizer, linear independence visualizer, span of two vectors, span 2d, determinant test independence, parallelogram area vectors, rank of two vectors, interactive linear algebra, basis of R2, linear combination geometry, vector space visualization"
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
          "name": "Span and Independence 2D",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/span-independence-2d"
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
      relatedTools: getRelatedTools('linear-algebra-span-independence-2d'),
      sectionsContent,
      stateUnits,
      explanationOverride,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Span and Linear Independence 2D Visualizer | Learn Math Class",
        description: "Drag two vectors in the plane and watch their span fill the plane or collapse to a line. Parallelogram area, lattice of combinations, sweep animation and the live determinant test for linear independence.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/span-independence-2d",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="20,58 52,50 62,26 30,34" fill="#85B7EB" fill-opacity="0.35" stroke="#B5D4F4" stroke-width="0.8"/><circle cx="36" cy="46" r="1.3" fill="#B5D4F4"/><circle cx="46" cy="38" r="1.3" fill="#B5D4F4"/><circle cx="41" cy="42" r="1.3" fill="#B5D4F4"/><line x1="20" y1="58" x2="50" y2="50.5" stroke="#FAC775" stroke-width="2.8"/><path d="M 54 49.5 L 46 47.5 L 47.5 53.5 Z" fill="#FAC775"/><line x1="20" y1="58" x2="29" y2="36" stroke="#97C459" stroke-width="2.8"/><path d="M 30.5 32.5 L 25 37.5 L 31 39.5 Z" fill="#97C459"/><circle cx="20" cy="58" r="2" fill="#E6F1FB"/><text x="58" y="60" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">a</text><text x="22" y="30" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">b</text><text x="40" y="72" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">span = &#8477;&#178;</text></svg>`,
        name: "Span and Linear Independence 2D Visualizer",
        hubDescription: "Drag two vectors in the plane and see their span directly: a filled parallelogram and a plane-covering lattice when they are independent, a collapsed segment and a single dashed line when one is a multiple of the other. Sweep one vector a full turn to watch the determinant trace a sine wave and cross zero at exactly the two dependent angles. Nine presets cover orthogonal, oblique, near-aligned, parallel, anti-parallel and zero-vector pairs, and a live card reports lengths, angle, determinant, area and rank.",
        category: "Linear Algebra",
        subCategory: "Vector Spaces"
      }
    }
  }
}

export default function SpanIndependence2DPage({seoData, sectionsContent, stateUnits, explanationOverride, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'dragging-the-vectors'),
    plain('obj3', 'the-sweep-animation'),
    plain('obj6', 'preset-scenarios'),
    stateRow('obj11', 'independent-pairs', 'independent'),
    stateRow('obj12', 'near-dependence', 'nearDependent'),
    stateRow('obj13', 'dependent-pairs', 'dependent'),
    stateRow('obj14', 'edge-cases', 'edge'),
    plain('obj4', 'the-live-card'),
    plain('obj5', 'display-layer-toggles'),
    plain('obj7', 'what-span-is'),
    plain('obj8', 'what-linear-independence-is'),
    plain('obj9', 'the-determinant-test'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Span and Linear Independence</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <SpanIndependence explanationOverride={explanationOverride}/>
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
