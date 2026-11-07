import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import ProofPlayerWrapper from '@/app/components/geometry/proof-player/ProofPlayerWrapper'
import ProofPlayerMockup from '@/app/components/geometry/proof-player/ProofPlayerMockup'
import HowToUseSection from '@/app/components/how-to-use/HowToUseSection'
import proofDiagrams, { proofStill } from '@/app/components/geometry/proof-player/proofDiagrams'
import PROOFS from '@/app/components/geometry/proof-player/proofs'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'triangle-angle-sum' } },
    { params: { view: 'exterior-angle' } },
    { params: { view: 'exterior-angle-sum' } },
    { params: { view: 'isosceles-base-angles' } },
    { params: { view: 'triangle-inequality' } },
    { params: { view: 'larger-side-larger-angle' } },
    { params: { view: 'perpendicular-shortest' } },
    { params: { view: 'thales-theorem' } },
    { params: { view: 'vertical-angles' } },
    { params: { view: 'parallel-lines' } },
    { params: { view: 'polygon-angle-sum' } },
    { params: { view: 'inscribed-angle' } },
    { params: { view: 'pythagorean-theorem' } },
    { params: { view: 'cyclic-quadrilateral' } },
    { params: { view: 'tangent-radius' } },
    { params: { view: 'two-tangents' } },
    { params: { view: 'chord-bisector' } },
    { params: { view: 'parallelogram-sides' } },
    { params: { view: 'parallelogram-diagonals' } },
    { params: { view: 'rhombus-diagonals' } },
    { params: { view: 'rectangle-diagonals' } },
    { params: { view: 'midsegment' } },
    { params: { view: 'varignon' } },
    { params: { view: 'trapezoid-midsegment' } },
    { params: { view: 'centroid' } },
    { params: { view: 'angle-bisector' } },
    { params: { view: 'circumcentre' } },
    { params: { view: 'incentre' } },
    { params: { view: 'orthocentre' } },
    { params: { view: 'euler-line' } },
    { params: { view: 'nine-point-circle' } },
    { params: { view: 'intersecting-chords' } },
    { params: { view: 'sss-congruence' } },
    { params: { view: 'asa-congruence' } },
    { params: { view: 'aas-congruence' } },
    { params: { view: 'kite-diagonals' } },
    { params: { view: 'hl-congruence' } },
    { params: { view: 'secant-tangent' } },
    { params: { view: 'two-secants' } },
    { params: { view: 'ceva-theorem' } },
    { params: { view: 'menelaus-theorem' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'triangle-angle-sum': {
      proofKey: 'angleSum',
      title: 'Triangle Angle Sum Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the angles of a triangle add up to 180° step by step, then drag the vertices to see it hold for every triangle.',
      h1Title: 'Triangle Angle Sum Theorem',
      url: '/geometry/visual-tools/triangle-angle-sum',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="20" x2="72" y2="20" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><polygon points="14,58 66,58 40,20" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><path d="M 22 58 A 8 8 0 0 0 18.5 51.4 L 14 58 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 58 58 A 8 8 0 0 1 61.5 51.4 L 66 58 Z" fill="#85B7EB" fill-opacity="0.9" stroke="#0C447C" stroke-width="0.8"/><path d="M 35.5 26.6 A 8 8 0 0 0 44.5 26.6 L 40 20 Z" fill="#E6F1FB" fill-opacity="0.9" stroke="#185FA5" stroke-width="0.8"/><path d="M 32 20 A 8 8 0 0 0 35.5 26.6 L 40 20 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 44.5 26.6 A 8 8 0 0 0 48 20 L 40 20 Z" fill="#85B7EB" fill-opacity="0.9" stroke="#0C447C" stroke-width="0.8"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#945; + &#946; + &#947; = 180&#176;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Triangle Angle Sum Proof',
      keywords: [
        'triangle angle sum',
        'triangle angle sum theorem',
        'angles of a triangle add up to 180',
        'triangle angle sum proof',
        'why do angles in a triangle add up to 180',
        'euclid I.32',
        'alternate angles proof',
        'parallel line proof triangle',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the triangle to see that nothing in the argument depends on its shape. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A triangle has three vertices, three sides and three interior angles, one at each vertex between the two sides that meet there. For every triangle $ABC$, with interior angles $\\alpha$ at $A$, $\\beta$ at $B$ and $\\gamma$ at $C$:

$$\\alpha + \\beta + \\gamma = 180°$$

This is the triangle angle sum theorem, Proposition 32 of Book I of Euclid's Elements. The word "every" is the point. Measuring the angles of one triangle, in [degrees](!/trigonometry/degrees-radians#1) or in any other unit, tells you about that triangle only; the theorem claims the sum for all triangles at once, acute, right and obtuse, large and small. That is why the proof below never measures anything. It argues from two facts that hold for every figure: a parallel line can be drawn through a point, and angles along a straight line fill it exactly.

The opening scene shows the three angles marked with arcs and the readout under the canvas. The readout is a check for the reader, not a step of the proof: drag any vertex and it keeps reporting $180.0°$, but the proof does not use that number anywhere.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Parallel Line',
          content: `The first step adds something that is not part of the triangle: through $C$ draw the line $DE$ parallel to the opposite side $AB$. A line added to a figure to make an argument possible is called a construction, or an auxiliary line. The theorem says nothing about $DE$; it is scaffolding, and the result stands whether or not the line is drawn.

Two different facts are used here, and it pays to keep them apart. That a parallel to $AB$ through $C$ exists can be shown without any special assumption. That there is only one such parallel is the parallel postulate, Euclid's fifth, and it is the one assumption in this proof that cannot be proved from the others. The next step, equal alternate angles, depends on that uniqueness.

In geometries where the postulate fails, the theorem fails with it. On a sphere, where straight lines are great circles and no two of them are parallel, the angles of a triangle add up to more than $180°$; in hyperbolic geometry they add up to less. The angle sum being exactly $180°$ is a property of the flat plane, not of triangles in general.

In the player, $D$ and $E$ are drawn hollow: they are not free points but are constructed from $A$, $B$ and $C$, and they follow when a vertex is dragged.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Alternate Angles',
          content: `A line that crosses two other lines is a transversal. When the two lines are parallel, a transversal makes equal angles with both of them, and the pair on opposite sides of the transversal, one at each crossing, are called [alternate interior angles](!/trigonometry/right-triangle#9). Alternate angles are equal exactly when the two lines are parallel; that is the fact the whole proof turns on.

Here the side $AC$ is a transversal of the parallel lines $DE$ and $AB$. At $A$ it makes the angle $\\alpha$ with $AB$; at $C$ it makes the angle $\\angle ACD$ with $DE$. These two are alternate angles, so

$$\\angle ACD = \\alpha$$

The player highlights the transversal and the two equal arcs together: the original $\\alpha$ at $A$, and its copy at $C$, drawn in the same colour. Nothing has been measured; the equality comes from the parallel lines alone.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'The Second Pair',
          content: `The same argument runs a second time with the other side. $BC$ is also a transversal of $DE$ and $AB$: at $B$ it makes the angle $\\beta$ with $AB$, at $C$ it makes $\\angle BCE$ with $DE$, and these are alternate angles too, so

$$\\angle BCE = \\beta$$

After the two steps all three angles of the triangle meet at the single vertex $C$: the copy of $\\alpha$ on the side of $D$, the original $\\gamma$ in the middle, and the copy of $\\beta$ on the side of $E$. The picture shows why the construction was chosen: the parallel through $C$ is exactly the line that lets the two far angles be carried over to $C$ without changing them.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Why It Holds',
          content: `At $C$ the three angles $\\alpha$, $\\gamma$ and $\\beta$ now sit side by side, each sharing a side with the next, and together they reach from the ray $CD$ round to the ray $CE$. Since $D$, $C$ and $E$ lie on one straight line, that is a straight angle, and a straight angle measures $180°$: two angles that fill a straight line are [supplementary](!/trigonometry/degrees-radians#8), and three that fill it add up to the same $180°$. Therefore

$$\\alpha + \\gamma + \\beta = 180°$$

which is the statement, with the terms in the order they appear along $DE$. The end-of-proof mark ∎ in the log closes the argument.

Read the justification tags in the log from top to bottom and the proof has used exactly four facts: what was given, the parallel postulate, the equality of alternate angles (twice), and the size of a straight angle. None of them depends on the shape of $ABC$, which is why the result holds for every triangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Dragging is not proving: checking a thousand triangles would not establish the theorem for the thousand-and-first. What dragging shows is something else, that no step of the argument used the particular triangle on the screen. Move $C$ far to one side and the triangle becomes obtuse; the parallel through $C$ moves with it, the two alternate pairs stay equal, the three angles at $C$ still fill the straight line, and the readout still ends in $180.0°$.

Some positions are refused. If a drag would put the three vertices on one line, or nearly so, the figure stops being a triangle: the angles at the ends collapse to $0°$ and the middle one opens to $180°$. The theorem says nothing about that case, so the player rejects the move and keeps the last valid triangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Consequences',
          content: `Much of elementary geometry rests on this one sum. Four results follow from it almost at once:

• **Equilateral triangles.** Three equal angles that add up to $180°$ are $60°$ each.
• **At most one right or obtuse angle.** Two angles of $90°$ or more would already use up the whole sum, leaving nothing for the third.
• **Right triangles.** When one angle is $90°$, the other two add up to $90°$: the acute angles of a right triangle are complementary, which is where the cofunction identities of trigonometry come from.
• **The exterior angle theorem.** Extend one side of the triangle past a vertex; the angle between the extension and the other side is an exterior angle. It and the interior angle at that vertex fill a straight line, so the exterior angle equals the sum of the two remote interior angles.

The same construction proves the sum for any polygon: cut it into triangles from one vertex, and an $n$-sided polygon gives $n - 2$ triangles, so its interior angles add up to $(n - 2) \\cdot 180°$.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why do the angles of a triangle add up to 180 degrees?',
          answer: 'Draw the line through one vertex parallel to the opposite side. The other two angles reappear at that vertex as alternate angles, and together with the third angle they fill a straight line, which measures 180 degrees.'
        },
        obj2: {
          question: 'Does the triangle angle sum depend on the shape of the triangle?',
          answer: 'No. The proof uses only the parallel line and alternate angles, never a measurement, so it holds for acute, right and obtuse triangles alike.'
        },
        obj3: {
          question: 'Is the angle sum of a triangle always 180 degrees?',
          answer: 'In Euclidean (flat) geometry, yes. The proof relies on the parallel postulate; on a sphere the angle sum exceeds 180 degrees, and in hyperbolic geometry it is less.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Triangle Angle Sum Proof Visualizer",
          "description": "Step-by-step interactive proof that the angles of a triangle sum to 180 degrees, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/triangle-angle-sum",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Triangle Angle Sum", "item": "https://www.learnmathclass.com/geometry/visual-tools/triangle-angle-sum" }
          ]
        }
      }
    },
    'exterior-angle': {
      proofKey: 'exteriorAngle',
      title: 'Exterior Angle Theorem Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that an exterior angle of a triangle equals the sum of the two remote interior angles, step by step, then drag the vertices to see it hold for every triangle.',
      h1Title: 'Exterior Angle Theorem',
      url: '/geometry/visual-tools/exterior-angle',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,56 46,56 32,22" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="46" y1="56" x2="72" y2="56" stroke="#B5D4F4" stroke-width="1.4" stroke-dasharray="3 2"/><path d="M 18 56 A 8 8 0 0 0 14.6 48.8 L 10 56 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 28.7 30 A 8 8 0 0 0 35.3 30 L 32 22 Z" fill="#E6F1FB" fill-opacity="0.9" stroke="#185FA5" stroke-width="0.8"/><path d="M 56 56 A 10 10 0 0 0 41.9 46.1 L 46 56 Z" fill="#9FE1CB" fill-opacity="0.9" stroke="#0F6E56" stroke-width="0.8"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#948; = &#945; + &#947;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Exterior Angle Theorem Proof',
      keywords: [
        'exterior angle theorem',
        'exterior angle of a triangle',
        'remote interior angles',
        'exterior angle equals sum of opposite interior angles',
        'exterior angle theorem proof',
        'triangle exterior angle',
        'euclid I.32',
        'linear pair',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the triangle to see that the exterior angle keeps matching the two far interior angles whatever the shape. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take any triangle $ABC$ and extend the side $AB$ beyond $B$ to a point $D$. The angle $\\angle CBD$, between the extension $BD$ and the side $BC$, lies outside the triangle; it is called an exterior angle of the triangle at $B$. The two interior angles that do not sit at $B$, namely $\\alpha$ at $A$ and $\\gamma$ at $C$, are the remote (or opposite) interior angles for that exterior angle. The theorem says

$$\\delta = \\alpha + \\gamma$$

Every vertex has two exterior angles, one on each extended side, and the two are equal because they are vertical angles. So the theorem holds at all three vertices, for either extension.

As with the angle sum, the claim is about every triangle. The readout under the canvas reports the three angles in [degrees](!/trigonometry/degrees-radians#1) and checks the equation live, but the proof never measures: it uses the straight line through $A$, $B$ and $D$, and the angle sum proved on the previous page.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Extension',
          content: `The only construction is the extension itself: the side $AB$ is produced beyond $B$ to a point $D$. In Euclid's language a segment can always be "produced" as far as needed; it is the second postulate. The point $D$ is drawn hollow in the player because it is not a free point: it lies on the line $AB$ at a fixed distance past $B$, and it moves whenever $A$ or $B$ moves.

Once the extension is drawn, the exterior angle appears: $\\delta = \\angle CBD$, marked in green between the ray $BD$ and the side $BC$. Notice that $\\delta$ and the interior angle $\\beta$ share the side $BC$ and lie on opposite sides of it, one inside the triangle and one outside. That shared side is what the next step uses.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Linear Pair',
          content: `$A$, $B$ and $D$ lie on one straight line, so the rays $BA$ and $BD$ point in opposite directions and the angle between them is a straight angle, $180°$. The side $BC$ splits that straight angle into two parts: the interior angle $\\beta = \\angle ABC$ and the exterior angle $\\delta = \\angle CBD$. Two angles that together fill a straight line are called a linear pair; they are [supplementary](!/trigonometry/degrees-radians#8), so

$$\\beta + \\delta = 180°$$

This is the first of the two equations the proof needs. It uses nothing about triangles at all, only that $ABD$ is a straight line, which is how $D$ was constructed.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Angle Sum',
          content: `The second equation is the [triangle angle sum theorem](!/geometry/visual-tools/triangle-angle-sum): the three interior angles of every triangle add up to $180°$,

$$\\alpha + \\beta + \\gamma = 180°$$

Here it is used as a finished result, not proved again. That is how proofs are built up: a theorem established once becomes a single step in the proofs that follow, and the justification tag in the log simply names it. Everything that the angle sum depends on, in particular the parallel postulate, is therefore inherited by this theorem too.

The player highlights the three interior angles at this step without changing the figure: the equation is a fact about the triangle as it stands.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Why It Holds',
          content: `Both sums are $180°$, so they are equal to each other:

$$\\beta + \\delta = \\alpha + \\beta + \\gamma$$

The interior angle $\\beta$ appears on both sides. Taking it away from both leaves

$$\\delta = \\alpha + \\gamma$$

which is the statement. The end-of-proof mark ∎ in the log closes the argument. Read the justification tags from top to bottom and the proof has used four facts: what was given, that a side can be extended, that angles along a straight line add up to $180°$, and the triangle angle sum. None of them depends on the shape of $ABC$.

A smaller result comes with it for free: since $\\alpha$ and $\\gamma$ are both positive, $\\delta$ is larger than each of them on its own. An exterior angle of a triangle is greater than either remote interior angle. Euclid proves that weaker statement first (Proposition 16), before the parallel postulate is used, and it is what makes the triangle inequality and much of the rest of Book I work.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag $C$ to the left, past $A$, and the triangle becomes obtuse at $A$: $\\alpha$ grows past $90°$ and the exterior angle $\\delta$ at $B$ grows with it, since it has to make room for $\\alpha + \\gamma$. Drag $C$ to the right, over $B$, and $\\beta$ opens up while $\\delta$ shrinks; the two always add up to $180°$. Whatever the shape, the readout keeps $\\delta = \\alpha + \\gamma$.

As in the other proofs, a drag that would flatten the triangle onto one line is refused: with $A$, $B$ and $C$ collinear there is no triangle and no exterior angle to speak of, so the player keeps the last valid figure.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **Exterior angle greater than either remote interior angle.** Immediate from $\\delta = \\alpha + \\gamma$ with both parts positive; this is the version Euclid proves without the parallel postulate.
• **Sum of the exterior angles.** Take one exterior angle at each vertex. Each one is $180°$ minus the interior angle there, so the three add up to $3 \\cdot 180° - 180° = 360°$. The same holds for every polygon: one exterior angle per vertex always totals $360°$.
• **Finding a missing angle.** If an exterior angle and one remote interior angle are known, the other interior angle is their difference; no need to pass through the angle sum.
• **Why a triangle has at most one obtuse angle, seen from outside.** If $\\alpha$ were obtuse, the exterior angle at $B$ would be larger than $\\alpha$ and so larger than $90°$, leaving $\\beta$ acute; the same at $C$.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is an exterior angle of a triangle?',
          answer: 'Extend one side of the triangle past a vertex. The angle between that extension and the other side at the vertex is an exterior angle. Each vertex has two, one for each side that can be extended, and the two are equal.'
        },
        obj2: {
          question: 'What does the exterior angle theorem say?',
          answer: 'An exterior angle of a triangle equals the sum of the two interior angles that are not at that vertex, the remote interior angles. It follows from the angle sum of a triangle and the fact that an exterior angle and the interior angle next to it add up to 180 degrees.'
        },
        obj3: {
          question: 'Is an exterior angle always bigger than the interior angles?',
          answer: 'It is bigger than each of the two remote interior angles, because it equals their sum. It can be smaller than the interior angle at its own vertex: the two of them add up to 180 degrees, so whichever is obtuse, the other is acute.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Exterior Angle Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that an exterior angle of a triangle equals the sum of the two remote interior angles, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/exterior-angle",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Exterior Angle Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/exterior-angle" }
          ]
        }
      }
    },
    'exterior-angle-sum': {
      proofKey: 'exteriorAngleSum',
      title: 'Sum of Exterior Angles of a Triangle Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the three exterior angles of a triangle add up to 360°, step by step, then drag the vertices to see it hold for every triangle.',
      h1Title: 'Sum of the Exterior Angles',
      url: '/geometry/visual-tools/exterior-angle-sum',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="18,54 54,54 40,22" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="54" y1="54" x2="70" y2="54" stroke="#B5D4F4" stroke-width="1.3" stroke-dasharray="3 2"/><line x1="40" y1="22" x2="34" y2="8" stroke="#B5D4F4" stroke-width="1.3" stroke-dasharray="3 2"/><line x1="18" y1="54" x2="8" y2="68" stroke="#B5D4F4" stroke-width="1.3" stroke-dasharray="3 2"/><path d="M 62 54 A 8 8 0 0 0 50.6 46.2 L 54 54 Z" fill="#9FE1CB" fill-opacity="0.9" stroke="#0F6E56" stroke-width="0.8"/><path d="M 36.9 14.8 A 8 8 0 0 0 46.9 26.8 L 40 22 Z" fill="#9FE1CB" fill-opacity="0.9" stroke="#0F6E56" stroke-width="0.8"/><path d="M 13.4 60.5 A 8 8 0 0 0 26 54 L 18 54 Z" fill="#9FE1CB" fill-opacity="0.9" stroke="#0F6E56" stroke-width="0.8"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#945;&#8242; + &#946;&#8242; + &#947;&#8242; = 360&#176;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Sum of Exterior Angles Proof',
      keywords: [
        'sum of exterior angles of a triangle',
        'exterior angles add up to 360',
        'exterior angle sum theorem',
        'exterior angles of a triangle proof',
        'exterior angles 360 degrees',
        'linear pair',
        'triangle exterior angles',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the triangle to see that the three exterior angles keep adding up to a full turn whatever the shape. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Walk round a triangle $ABC$ and extend each side past the vertex you reach: $AB$ past $B$, $BC$ past $C$, $CA$ past $A$. At each vertex this makes one exterior angle, between the extension and the next side: $\\beta'$ at $B$, $\\gamma'$ at $C$, $\\alpha'$ at $A$. Taken this way, one per vertex and all the same way round, the three exterior angles satisfy

$$\\alpha' + \\beta' + \\gamma' = 360°$$

That is a full turn, measured in [degrees](!/trigonometry/degrees-radians#1). It is what you feel when you walk the boundary of a triangular field and come back facing the way you started: at each corner you turn through the exterior angle, and three turns bring you round once.

The statement is about every triangle. The readout under the canvas adds the three exterior angles live while you drag; the proof itself uses only straight angles and the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum).`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Three Extensions',
          content: `The construction is three extensions at once, each the same way round: the side $AB$ is produced beyond $B$ to $D$, $BC$ beyond $C$ to $E$, and $CA$ beyond $A$ to $F$. The points $D$, $E$ and $F$ are drawn hollow: each lies on the line of its side at a fixed distance past the vertex, and they move when the vertices move.

The direction matters. Each vertex has two exterior angles, one on either extended side, and they are equal (vertical angles), so picking one per vertex is enough; but the proof takes them consistently, all clockwise or all counter-clockwise, which is the "walk round the boundary" picture of the statement. The [exterior angle theorem](!/geometry/visual-tools/exterior-angle) deals with one of these angles on its own; here all three are used together.

In the player the three exterior angles are drawn in the same green: $\\beta' = \\angle CBD$, $\\gamma' = \\angle ACE$ and $\\alpha' = \\angle BAF$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Three Linear Pairs',
          content: `At $B$ the points $A$, $B$, $D$ lie on one line, so the interior angle $\\beta$ and the exterior angle $\\beta'$ fill a straight angle; they are a linear pair and therefore [supplementary](!/trigonometry/degrees-radians#8). The same holds at $C$ with $B$, $C$, $E$ and at $A$ with $C$, $A$, $F$:

$$\\alpha + \\alpha' = 180°, \\qquad \\beta + \\beta' = 180°, \\qquad \\gamma + \\gamma' = 180°$$

Adding the three equations gives all six angles at once:

$$(\\alpha + \\beta + \\gamma) + (\\alpha' + \\beta' + \\gamma') = 540°$$

The player highlights all six arcs at this step. Nothing about triangles has been used yet, only that each extension is a straight line through its vertex.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Angle Sum',
          content: `The interior angles are known from the [triangle angle sum theorem](!/geometry/visual-tools/triangle-angle-sum):

$$\\alpha + \\beta + \\gamma = 180°$$

As in the exterior angle theorem, a result proved once is used here as a single step, and the justification tag in the log names it. The three interior arcs are highlighted on their own at this step.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Why It Holds',
          content: `Put the two sums together. All six angles make $540°$, and the three interior ones make $180°$ of that, so what remains for the three exterior angles is

$$\\alpha' + \\beta' + \\gamma' = 540° - 180° = 360°$$

which is the statement. The end-of-proof mark ∎ in the log closes the argument. The proof used four facts: what was given, that a side can be extended, that the angles along a straight line add up to $180°$ at each of the three vertices, and the triangle angle sum. None of them depends on the shape of $ABC$.

There is a second way to see it without the angle sum: each exterior angle is the turn you make at that corner when walking round the figure, and one trip round the boundary is one full turn. That picture is what makes the result carry over to every polygon, as the Consequences section shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag $C$ far to the right, past $B$, and the triangle becomes obtuse at $B$: the interior angle $\\beta$ grows, its exterior angle $\\beta'$ shrinks to make room, and the other two exterior angles grow by exactly as much. Push a vertex outward and its own exterior angle widens while the two others narrow. The readout keeps the total at $360.0°$ throughout.

A drag that would put the three vertices on one line is refused, as in the other proofs: with no triangle there are no interior angles for the exterior ones to be paired with, so the player keeps the last valid figure.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **Every polygon.** The same proof works for a convex polygon with $n$ sides: $n$ linear pairs give $n \\cdot 180°$, the interior angles take $(n - 2) \\cdot 180°$ of that, and the exterior angles are left with $360°$, whatever $n$ is. The walk round the boundary says the same: one trip, one full turn.
• **Regular polygons.** When all exterior angles are equal, each one is $360° / n$: $120°$ for an equilateral triangle, $90°$ for a square, $60°$ for a regular hexagon. From it, each interior angle is $180° - 360° / n$.
• **Which regular polygons tile.** Copies of a regular polygon fit round a point exactly when the interior angle divides $360°$: $60°$, $90°$ and $120°$ do, so triangles, squares and hexagons tile the plane and no other regular polygon does.
• **The angle sum, backwards.** Knowing the exterior sum is $360°$ gives the interior sum $n \\cdot 180° - 360° = (n - 2) \\cdot 180°$ at once; for $n = 3$ that is the $180°$ of the triangle.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why do the exterior angles of a triangle add up to 360 degrees?',
          answer: 'At each vertex the interior and the exterior angle fill a straight line, 180 degrees, so the six angles together make 540 degrees. The three interior angles make 180 degrees of that, which leaves 360 degrees for the three exterior angles.'
        },
        obj2: {
          question: 'Does it matter which exterior angle is taken at each vertex?',
          answer: 'Each vertex has two exterior angles, on either extended side, and they are equal, so the sum is the same either way. The proof takes one per vertex, all the same way round, which matches walking once round the boundary.'
        },
        obj3: {
          question: 'Is the sum of exterior angles 360 degrees for every polygon?',
          answer: 'Yes, for every convex polygon, one exterior angle per vertex: n linear pairs give n times 180 degrees, the interior angles take (n minus 2) times 180 degrees, and 360 degrees remain. For a regular polygon each exterior angle is therefore 360 divided by n degrees.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Sum of Exterior Angles Proof Visualizer",
          "description": "Step-by-step interactive proof that the three exterior angles of a triangle add up to 360 degrees, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/exterior-angle-sum",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Sum of the Exterior Angles", "item": "https://www.learnmathclass.com/geometry/visual-tools/exterior-angle-sum" }
          ]
        }
      }
    },
    'isosceles-base-angles': {
      proofKey: 'isosceles',
      title: 'Isosceles Triangle Base Angles Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the base angles of an isosceles triangle are equal, step by step with congruent triangles, then drag the figure to see it hold for every isosceles triangle.',
      h1Title: 'Isosceles Triangle Base Angles',
      url: '/geometry/visual-tools/isosceles-base-angles',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="12,58 40,16 40,58" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><polygon points="40,16 68,58 40,58" fill="#CECBF6" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="40" y1="16" x2="40" y2="58" stroke="#B5D4F4" stroke-width="1.2" stroke-dasharray="3 2"/><line x1="23" y1="39.5" x2="29" y2="34.5" stroke="#FAC775" stroke-width="1.6" stroke-linecap="round"/><line x1="51" y1="34.5" x2="57" y2="39.5" stroke="#FAC775" stroke-width="1.6" stroke-linecap="round"/><path d="M 20 58 A 8 8 0 0 0 16.5 51.3 L 12 58 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 60 58 A 8 8 0 0 1 63.5 51.3 L 68 58 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">CA = CB &#8658; &#945; = &#946;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Isosceles Base Angles Proof',
      keywords: [
        'isosceles triangle base angles',
        'base angles theorem',
        'isosceles triangle theorem proof',
        'pons asinorum',
        'euclid I.5',
        'base angles of an isosceles triangle are equal',
        'SSS congruence proof',
        'CPCTC',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the figure to see that the two base angles stay equal whatever the shape of the isosceles triangle. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A triangle is isosceles when two of its sides are equal. The equal sides are the legs, the third side is the base, the vertex where the legs meet is the apex, and the two angles at the ends of the base are the base angles. In triangle $ABC$ with $CA = CB$, the base is $AB$, the apex is $C$ and the base angles are $\\alpha$ at $A$ and $\\beta$ at $B$. The theorem, Proposition 5 of Book I of Euclid's Elements, says

$$CA = CB \\;\\Rightarrow\\; \\alpha = \\beta$$

In the player the equal legs carry one tick mark each. The readout under the canvas shows the two base angles in [degrees](!/trigonometry/degrees-radians#1) and the two leg lengths side by side; drag any point and the legs stay equal, because $C$ is kept on the axis of the base, and so do the angles.

The medieval name for this result is the pons asinorum, the bridge of asses: in Euclid it is the first proposition that takes some thought, and it was where weak students were said to fall off.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Midpoint Line',
          content: `The construction adds one point and one segment. $M$ is the midpoint of the base $AB$, so $AM = MB$, and the segment $CM$ joins the apex to it. In the player $M$ is drawn hollow, because it is built from $A$ and $B$ and follows them, and the two half-bases carry two tick marks each to show they are equal.

The segment $CM$ cuts the triangle into two smaller triangles, $ACM$ on the left and $BCM$ on the right. The whole proof is about these two pieces: if they are copies of one another, every part of one matches a part of the other, and in particular the angle at $A$ matches the angle at $B$.

Any line through the apex that splits the base symmetrically would do; the midpoint is simply the easiest to construct. Euclid's own proof (I.5) avoids the midpoint and works with points on the extended legs instead, because the midpoint construction comes later in his order.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Three Equal Sides',
          content: `Compare the two small triangles side by side:

• $CA = CB$: the legs, equal because the triangle is isosceles (given).
• $AM = BM$: the half-bases, equal because $M$ is the midpoint (construction).
• $CM = CM$: the segment both triangles contain, equal to itself.

Three pairs of equal sides is the side-side-side condition, SSS: two triangles whose three sides match in pairs are congruent, that is, one is an exact copy of the other, possibly flipped over. So

$$\\triangle ACM \\cong \\triangle BCM$$

The player shades the two triangles in different colours at this step. The correspondence is $A \\leftrightarrow B$, $C \\leftrightarrow C$, $M \\leftrightarrow M$: the left triangle is the mirror image of the right one in the line $CM$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Why It Holds',
          content: `Congruent triangles have equal corresponding parts: every side of one equals the matching side of the other, and every angle equals the matching angle. The tag in the log, CPCTC, is the usual abbreviation for that sentence, "corresponding parts of congruent triangles are congruent".

Under the correspondence $A \\leftrightarrow B$, the angle $\\angle CAM$ at $A$ matches the angle $\\angle CBM$ at $B$. The first is $\\alpha$, the second is $\\beta$, so

$$\\alpha = \\beta$$

which is the statement. The end-of-proof mark ∎ in the log closes the argument. The proof used four facts: the given equal legs, the existence of a midpoint, the SSS congruence condition, and that congruent triangles have equal corresponding angles. None of them depends on how tall or how wide the triangle is.

The same congruence gives two more facts for free: $\\angle ACM = \\angle BCM$, so $CM$ bisects the apex angle, and $\\angle AMC = \\angle BMC$ with the two filling a straight line, so each is $90°$ and $CM$ is perpendicular to the base. In an isosceles triangle the median from the apex, the angle bisector and the altitude are one and the same line.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Dragging the Figure',
          content: `The apex $C$ can only move along the axis of the base, the perpendicular through $M$: that is what keeps the triangle isosceles while you drag. Pull $C$ down and the triangle flattens, both base angles shrink together; pull it up and they grow together, towards $90°$ but never reaching it. Drag $A$ or $B$ and the base changes length; $C$ moves to stay above the new midpoint, and the legs stay equal.

Whatever you do, the readout shows the two leg lengths equal and the two base angles equal. A drag that would flatten the triangle onto the base is refused, as in the other proofs.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Consequences',
          content: `• **Equilateral triangles.** All three sides equal means the triangle is isosceles in three ways, so all three angles are equal; with the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum) each one is $60°$.
• **The converse.** If two angles of a triangle are equal, the sides opposite them are equal (Euclid I.6). Together with the theorem: a triangle has two equal sides exactly when it has two equal angles.
• **The axis of symmetry.** The line $CM$ is at once the median, the angle bisector, the altitude and the perpendicular bisector of the base; an isosceles triangle is symmetric in it.
• **Circles.** Two radii to points of a circle form an isosceles triangle, so the angles they make with the chord are equal. Most angle facts about chords, tangents and inscribed angles start from this.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the isosceles triangle theorem say?',
          answer: 'If two sides of a triangle are equal, the angles opposite those sides are equal. In the usual picture the equal sides are the legs and the equal angles are the two base angles.'
        },
        obj2: {
          question: 'Why is it called the pons asinorum?',
          answer: 'Pons asinorum is Latin for bridge of asses. The name comes from medieval universities: this proposition, the fifth of Euclid, was the first that needed some thought, and students who could not get past it were said to be unable to cross the bridge.'
        },
        obj3: {
          question: 'Is the converse true: equal angles give equal sides?',
          answer: 'Yes. If two angles of a triangle are equal, the sides opposite them are equal; that is Euclid I.6, proved right after the base angles theorem. So a triangle is isosceles exactly when it has two equal angles.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Isosceles Base Angles Proof Visualizer",
          "description": "Step-by-step interactive proof that the base angles of an isosceles triangle are equal, by SSS congruence, with a draggable figure.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/isosceles-base-angles",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Isosceles Triangle Base Angles", "item": "https://www.learnmathclass.com/geometry/visual-tools/isosceles-base-angles" }
          ]
        }
      }
    },
    'triangle-inequality': {
      proofKey: 'triangleInequality',
      title: 'Triangle Inequality Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch Euclid\'s proof that any two sides of a triangle are together longer than the third, step by step, then drag the vertices to see it hold for every triangle.',
      h1Title: 'The Triangle Inequality',
      url: '/geometry/visual-tools/triangle-inequality',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,36 66,22 58,58" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="40" y1="36" x2="16" y2="49" stroke="#B5D4F4" stroke-width="1.4" stroke-dasharray="3 2"/><line x1="16" y1="49" x2="58" y2="58" stroke="#B5D4F4" stroke-width="1.1"/><line x1="26" y1="39" x2="30" y2="46" stroke="#FAC775" stroke-width="1.6" stroke-linecap="round"/><line x1="46" y1="45" x2="52" y2="49" stroke="#FAC775" stroke-width="1.6" stroke-linecap="round"/><circle cx="16" cy="49" r="2.6" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">BA + AC &gt; BC</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Triangle Inequality Proof',
      keywords: [
        'triangle inequality',
        'triangle inequality theorem',
        'triangle inequality proof',
        'sum of two sides greater than third side',
        'euclid I.20',
        'larger angle opposite longer side',
        'can three lengths form a triangle',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the triangle to see that two sides together always beat the third, whatever the shape. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `In any triangle, any two sides are together longer than the third. For triangle $ABC$, taking the sides at $A$:

$$BA + AC > BC$$

and the same with the letters moved round: $AB + BC > AC$ and $BC + CA > AB$. This is the triangle inequality, Proposition 20 of Book I of Euclid's Elements. It is the formal version of "the straight path is the shortest": going from $B$ to $C$ by way of $A$ is longer than going straight.

The readout under the canvas shows the three lengths and checks the inequality live while you drag; it is a check, not a step of the proof. The proof itself needs two earlier results: the base angles of an [isosceles triangle](!/geometry/visual-tools/isosceles-base-angles) are equal, and in any triangle the longer side lies opposite the larger angle. The story goes that the Epicureans mocked this proposition as something even a donkey knows, since a donkey heading for hay walks straight to it; Euclid proves it anyway, because "obvious" is not a justification.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Construction',
          content: `The trick is to lay the two sides $BA$ and $AC$ end to end on one straight line, so that their sum becomes a single segment that can be compared with $BC$. Extend $BA$ beyond $A$ and cut off $AD$ equal to $AC$; then $BD = BA + AD = BA + AC$. The segment $CD$ is drawn to close the figure.

Two things were used: a segment can be produced (Euclid's second postulate), and a given length can be cut off on a line (Proposition 3). In the player $D$ is hollow because it is constructed, not free: it sits on the line $BA$ at the distance $AC$ from $A$, and it moves whenever $A$, $B$ or $C$ moves. The one-tick marks on $AD$ and $AC$ show the two equal segments.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'An Isosceles Triangle',
          content: `Since $AD = AC$, the triangle $ACD$ is isosceles with apex $A$ and base $CD$. By the [isosceles base angles theorem](!/geometry/visual-tools/isosceles-base-angles), its base angles are equal:

$$\\angle ADC = \\angle ACD$$

Both are marked $\\delta$ in the player and drawn in the same colour. Notice that $\\angle ADC$ is also an angle of the larger triangle $BCD$, at the vertex $D$: since $B$, $A$ and $D$ lie on one line, $\\angle BDC$ is the same angle as $\\angle ADC$. That is what will let the comparison pass from the small triangle to the large one.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Larger Angle',
          content: `At $C$ the angle $\\angle BCD = \\varepsilon$ is made of two parts: $\\angle BCA$ and $\\angle ACD = \\delta$, because the segment $CA$ runs inside it. A whole is greater than any of its parts, so

$$\\varepsilon > \\delta$$

Now put this beside the previous step. The angle at $D$ in triangle $BCD$ is $\\delta$, and the angle at $C$ is $\\varepsilon$, so in triangle $BCD$ the angle at $C$ is larger than the angle at $D$. The player highlights the large angle at $C$ together with the angle at $D$; the small $\\delta$ at $C$ is dimmed to show it is the part being compared.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Longer Side',
          content: `In every triangle the longer side lies opposite the larger angle, and the shorter side opposite the smaller angle (Euclid I.19, the converse of I.18). In triangle $BCD$:

• the angle at $C$ is $\\varepsilon$, and the side opposite it is $BD$;
• the angle at $D$ is $\\delta$, and the side opposite it is $BC$.

Since $\\varepsilon > \\delta$,

$$BD > BC$$

This is the step that turns a statement about angles back into a statement about lengths. The player highlights the two sides being compared: $BD$, which runs from $B$ through $A$ to $D$, and $BC$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Only the bookkeeping remains. $BD$ is the segment $BA$ followed by $AD$, so $BD = BA + AD$; and $AD$ was cut off equal to $AC$, so $BD = BA + AC$. Putting that into $BD > BC$:

$$BA + AC > BC$$

which is the statement. The end-of-proof mark ∎ in the log closes the argument. Six tags, read from top to bottom, name everything the proof depends on: the given triangle, a construction, the isosceles base angles, "the whole is greater than the part", the longer side opposite the larger angle, and the equal lengths from the construction. Nothing depends on the shape of $ABC$, and the two other inequalities follow by renaming the vertices.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $A$ towards the side $BC$ and the triangle flattens: $BA + AC$ shrinks towards $BC$, the point $D$ slides along the line $BA$ to keep $AD = AC$, and the readout shows the gap closing but never reaching zero. Pull $A$ away and the gap opens again. Drag $B$ or $C$ and the whole construction, $D$, the ticks and the three marked angles, follows.

A drag that would put $A$ on the segment $BC$ is refused: with the three points on one line there is no triangle, and that is exactly the case where $BA + AC$ would equal $BC$. The strict inequality holds for triangles; equality is the degenerate case the theorem leaves out.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Which lengths make a triangle.** Three lengths are the sides of a triangle exactly when each is shorter than the other two together; it is enough to check the longest. Sides $3$, $4$, $5$ work; sides $2$, $3$, $6$ do not, since $2 + 3 < 6$.
• **The difference of two sides.** Rearranging $BA + AC > BC$ gives $BC - AC < BA$: any side is longer than the difference of the other two.
• **Polygons and paths.** Applied corner by corner, a straight segment is shorter than any broken line joining its ends, so the perimeter of a polygon drawn inside another convex polygon is shorter than the outer perimeter.
• **Beyond geometry.** The same inequality, $d(x, z) \\le d(x, y) + d(y, z)$, is one of the three conditions that every notion of distance must satisfy, from the ordinary plane to abstract metric spaces.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the triangle inequality say?',
          answer: 'In any triangle, the sum of any two sides is greater than the third side. Equivalently, the straight segment between two points is shorter than any path through a third point off the line.'
        },
        obj2: {
          question: 'How do I check whether three lengths can form a triangle?',
          answer: 'Add the two shorter lengths; if the sum is greater than the longest one, the three lengths form a triangle, otherwise they do not. If the sum equals the longest length the three points lie on a line.'
        },
        obj3: {
          question: 'Why does Euclid prove something so obvious?',
          answer: 'Because in a deductive system every statement must follow from the postulates and the earlier propositions, however obvious it looks. The proof shows exactly which facts the inequality rests on: the isosceles base angles and the fact that the longer side lies opposite the larger angle.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Triangle Inequality Proof Visualizer",
          "description": "Step-by-step interactive proof that any two sides of a triangle are together longer than the third, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/triangle-inequality",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Triangle Inequality", "item": "https://www.learnmathclass.com/geometry/visual-tools/triangle-inequality" }
          ]
        }
      }
    },
    'larger-side-larger-angle': {
      proofKey: 'largerAngle',
      title: 'Larger Side Opposite Larger Angle Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the larger side of a triangle lies opposite the larger angle, step by step, then drag the vertices to see it hold for every triangle.',
      h1Title: 'Larger Side, Larger Angle',
      url: '/geometry/visual-tools/larger-side-larger-angle',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,58 32,20 70,58" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="32" y1="20" x2="46" y2="58" stroke="#B5D4F4" stroke-width="1.1" stroke-dasharray="3 2"/><path d="M 36.5 27.8 A 9 9 0 0 1 40.6 28.2 L 32 20 Z" fill="#85B7EB" fill-opacity="0.9" stroke="#0C447C" stroke-width="0.8"/><path d="M 36.5 27.8 A 9 9 0 0 0 26.6 25.1 L 32 20 Z" fill="#85B7EB" fill-opacity="0.9" stroke="#0C447C" stroke-width="0.8"/><path d="M 61 58 A 9 9 0 0 0 63.2 51.6 L 70 58 Z" fill="#E6F1FB" fill-opacity="0.9" stroke="#185FA5" stroke-width="0.8"/><circle cx="46" cy="58" r="2.4" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AC &gt; AB &#8658; &#946; &gt; &#947;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Larger Side, Larger Angle Proof',
      keywords: [
        'larger side opposite larger angle',
        'longer side opposite larger angle proof',
        'greater side subtends greater angle',
        'euclid I.18',
        'triangle side angle relationship',
        'angle opposite longest side',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the triangle to see that the larger angle always faces the larger side. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `In a triangle, each side faces the angle at the opposite vertex: $AB$ faces the angle at $C$, $AC$ faces the angle at $B$. The theorem, Proposition 18 of Book I of Euclid's Elements, says that the larger of two sides faces the larger of the two opposite angles. In triangle $ABC$ with $AC > AB$, writing $\\beta$ for the angle at $B$ and $\\gamma$ for the angle at $C$,

$$AC > AB \\;\\Rightarrow\\; \\beta > \\gamma$$

The converse is also true, that the larger angle faces the larger side (Proposition 19), and together they say that the sides and the angles of a triangle are in the same order: the longest side is opposite the largest angle and the shortest opposite the smallest. The [triangle inequality](!/geometry/visual-tools/triangle-inequality) proof uses that converse as one of its steps.

The readout under the canvas shows the two sides and the two angles in [degrees](!/trigonometry/degrees-radians#1); the player keeps $AC$ longer than $AB$, since that is what the theorem is about.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Cut-Off Point',
          content: `The proof compares the two sides by moving the shorter one onto the longer one. Because $AC$ is longer than $AB$, a point $D$ can be marked on $AC$ with $AD = AB$; the one-tick marks show the two equal segments. Joining $B$ to $D$ splits the triangle into two: $ABD$ near $A$, and $BDC$ near $C$.

In the player $D$ is hollow, because it is constructed: it sits on $AC$ at the distance $AB$ from $A$ and moves whenever a vertex moves. If a drag made $AB$ the longer side, $D$ would fall beyond $C$ and the construction would stop making sense, so such drags are refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'An Isosceles Triangle',
          content: `Since $AB = AD$, the triangle $ABD$ is isosceles with apex $A$ and base $BD$. By the [isosceles base angles theorem](!/geometry/visual-tools/isosceles-base-angles) its base angles are equal:

$$\\angle ABD = \\angle ADB = \\delta$$

Both are marked $\\delta$ in the player, in the same colour. The angle $\\angle ABD$ sits inside the angle $\\beta$ at $B$; the angle $\\angle ADB$ sits at $D$ on the side $AC$. The next two steps compare each of them with one of the angles in the statement.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Exterior Angle',
          content: `Look at the smaller triangle $BDC$. Its side $DC$ is part of the line $AC$, so at the vertex $D$ the angle $\\angle ADB$ lies outside the triangle $BDC$, between the extension $DA$ of the side $CD$ and the side $DB$: it is an exterior angle of triangle $BDC$. By the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) it equals the sum of the two remote interior angles, $\\angle DBC$ and $\\angle DCB = \\gamma$, and so it is larger than either of them:

$$\\delta = \\angle ADB > \\gamma$$

The player highlights the angle at $D$ together with $\\gamma$ at $C$ and the two sides of triangle $BDC$ that meet them.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Whole Angle',
          content: `At $B$ the segment $BD$ runs inside the angle $ABC$, so it splits $\\beta$ into two parts, $\\angle ABD = \\delta$ and $\\angle DBC$. A whole is greater than any of its parts, so

$$\\beta > \\delta$$

This is the same move as in the triangle inequality proof, applied at $B$ instead of $C$. The player highlights the whole angle $\\beta$ and the part $\\delta$ inside it.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The two comparisons chain together through $\\delta$:

$$\\beta > \\delta \\quad\\text{and}\\quad \\delta > \\gamma \\quad\\Rightarrow\\quad \\beta > \\gamma$$

which is the statement. The end-of-proof mark ∎ in the log closes the argument. The tags name what was used: the given inequality of sides, the cut-off construction, the isosceles base angles, the exterior angle theorem, "the whole is greater than the part", and the chaining of two inequalities. Two of those are theorems with their own pages, used here as single steps.

The converse (Proposition 19) is proved by contradiction from this one: if $\\beta > \\gamma$ but $AC$ were not longer than $AB$, then either $AC = AB$, which would make $\\beta = \\gamma$ by the isosceles theorem, or $AC < AB$, which would make $\\beta < \\gamma$ by the present theorem; both contradict $\\beta > \\gamma$.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $B$ towards $A$: the side $AB$ shortens, $D$ slides back along $AC$ to keep $AD = AB$, and the angle $\\beta$ at $B$ opens wide while $\\gamma$ shrinks; the gap between them grows. Drag $B$ away from $A$ so that $AB$ approaches $AC$ in length: $D$ moves out towards $C$ and the two angles close in on each other, meeting only when the sides would be equal.

A drag that would make $AB$ as long as $AC$ or longer is refused, as is one that flattens the triangle: the theorem has nothing to say about those cases, and the construction of $D$ needs $AC$ to be the longer side.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Sides and angles in the same order.** With the converse, the longest side of a triangle faces the largest angle and the shortest faces the smallest; the middle side faces the middle angle.
• **The hypotenuse is the longest side.** In a right triangle the right angle is the largest angle, since the other two add up to $90°$, so the side opposite it, the hypotenuse, is the longest.
• **The perpendicular is the shortest distance.** From a point to a line, the perpendicular segment makes a right angle with the line and so faces the largest angle in any triangle it forms with another segment to the line; it is therefore the shortest.
• **The triangle inequality.** Euclid proves $BA + AC > BC$ from this result and its converse; see the [triangle inequality](!/geometry/visual-tools/triangle-inequality) page.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Which angle of a triangle is the largest?',
          answer: 'The angle opposite the longest side. The sides and the angles of a triangle come in the same order: the longest side faces the largest angle, the shortest side faces the smallest angle.'
        },
        obj2: {
          question: 'Is the converse true: does the larger angle face the longer side?',
          answer: 'Yes, that is Euclid I.19, proved by contradiction from this theorem: if the side opposite the larger angle were equal or shorter, the isosceles theorem or this theorem would make the angle equal or smaller, which is impossible.'
        },
        obj3: {
          question: 'Why is the hypotenuse the longest side of a right triangle?',
          answer: 'The two acute angles add up to 90 degrees, so each is smaller than the right angle. The right angle is the largest angle, and by this theorem the side opposite it, the hypotenuse, is the longest.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Larger Side, Larger Angle Proof Visualizer",
          "description": "Step-by-step interactive proof that the larger side of a triangle lies opposite the larger angle, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/larger-side-larger-angle",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Larger Side, Larger Angle", "item": "https://www.learnmathclass.com/geometry/visual-tools/larger-side-larger-angle" }
          ]
        }
      }
    },
    'perpendicular-shortest': {
      proofKey: 'perpendicularShortest',
      title: 'Perpendicular Is the Shortest Distance Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the perpendicular from a point to a line is shorter than any other segment to the line, step by step, then drag the figure to see it hold every time.',
      h1Title: 'The Perpendicular Is the Shortest Distance',
      url: '/geometry/visual-tools/perpendicular-shortest',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="58" x2="74" y2="58" stroke="#B5D4F4" stroke-width="1.4"/><polygon points="30,18 30,58 60,58" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.2" stroke-linejoin="round"/><line x1="30" y1="18" x2="30" y2="58" stroke="#FAC775" stroke-width="2"/><line x1="30" y1="18" x2="60" y2="58" stroke="#E6F1FB" stroke-width="1.4"/><path d="M 30 50 L 38 50 L 38 58" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><circle cx="30" cy="18" r="3" fill="#042C53"/><circle cx="60" cy="58" r="3" fill="#042C53"/><circle cx="30" cy="58" r="2.4" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PF &lt; PQ</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Perpendicular Is Shortest Proof',
      keywords: [
        'perpendicular is the shortest distance',
        'distance from a point to a line',
        'perpendicular distance proof',
        'shortest segment from point to line',
        'hypotenuse longest side',
        'right triangle largest angle',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the point, the line or the second point along it to see that the perpendicular stays the shortest. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take a point $P$ not on a line $\\ell$. Of all the segments from $P$ to points of $\\ell$, one is special: the perpendicular, which meets $\\ell$ at a right angle at the point $F$, the foot of the perpendicular. The theorem says that this segment is shorter than every other one. For any point $Q$ of $\\ell$ other than $F$,

$$PF < PQ$$

That is why the length $PF$ is called the distance from the point to the line: it is the least of all the distances from $P$ to points of $\\ell$. The same fact is behind every "drop a perpendicular" in geometry, from the height of a triangle to the distance between parallel lines.

The player shows the line through $A$ and $B$, the point $P$, the foot $F$ with its right-angle mark, and a second point $Q$ that can be slid along the line. The readout under the canvas compares $PF$ with $PQ$ in the same units and shows the angle at $F$ in [degrees](!/trigonometry/degrees-radians#1), but the proof uses no numbers: it rests on the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum) and on the fact that the longer side faces the larger angle.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Right Triangle',
          content: `$P$, $F$ and $Q$ are three points not on one line ($P$ is off $\\ell$, and $F$, $Q$ are two different points of $\\ell$), so they form a triangle. Its side $FQ$ lies along $\\ell$, and $PF$ is perpendicular to $\\ell$, so the angle of the triangle at $F$ is a right angle, $90°$. The right-angle mark at $F$ shows it; the player shades the triangle at this step and marks its two other angles, $\\varphi$ at $P$ and $\\theta$ at $Q$.

Everything that follows is about this one triangle. The line $\\ell$ itself only matters through the right angle it gives at $F$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Two Acute Angles',
          content: `The three angles of the triangle add up to $180°$, by the [triangle angle sum theorem](!/geometry/visual-tools/triangle-angle-sum). The right angle at $F$ uses $90°$ of that, so the other two share the rest:

$$\\varphi + \\theta = 90°$$

Both are positive, so each is less than $90°$: the two angles at $P$ and $Q$ are acute. A triangle can have only one right angle, and in a right triangle the other two angles are always complementary; this is the fact at work here.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Largest Angle',
          content: `Put the three angles side by side: $90°$ at $F$, $\\varphi$ at $P$, $\\theta$ at $Q$, with $\\varphi < 90°$ and $\\theta < 90°$. The right angle is larger than each of the other two:

$$90° > \\varphi \\quad\\text{and}\\quad 90° > \\theta$$

So the angle at $F$ is the largest angle of triangle $PFQ$. The player highlights the right-angle mark alone at this step. Nothing depends on where $Q$ sits on the line or how far $P$ is from it; the right angle is the largest whatever the shape.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Longest Side',
          content: `In any triangle the larger angle faces the longer side (Euclid I.19, the converse of the [larger side, larger angle](!/geometry/visual-tools/larger-side-larger-angle) theorem). In triangle $PFQ$:

• the right angle at $F$ faces the side $PQ$;
• the acute angle $\\theta$ at $Q$ faces the side $PF$.

The angle at $F$ is larger than the angle at $Q$, so

$$PQ > PF$$

In words: the hypotenuse of a right triangle is its longest side. The player highlights the two sides being compared, with the right angle and the angle at $Q$ that decide between them.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `$Q$ was any point of the line other than $F$, and nothing in the argument used where it was, so the inequality $PF < PQ$ holds for every such $Q$. The perpendicular is shorter than every other segment from $P$ to $\\ell$; it is the shortest, and its length is the distance from $P$ to the line. The end-of-proof mark ∎ in the log closes the argument.

Read the tags from top to bottom: the given right angle, the definition of the triangle, the angle sum, a comparison of angles, the longer side opposite the larger angle, and the remark that $Q$ was arbitrary. Two of them are theorems with their own pages.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $Q$ along the line towards $F$: $PQ$ shrinks towards $PF$ and the angle $\\theta$ at $Q$ grows towards $90°$, but $Q$ never reaches $F$, so $PQ$ never gets as short as $PF$. Slide it away and $PQ$ grows while $\\theta$ shrinks. Drag $P$ up or down and the foot $F$ moves with it along the line, keeping the right angle; drag $A$ or $B$ to tilt the line, and $F$ and $Q$ follow.

A drag that would put $Q$ onto $F$, or $P$ onto the line, is refused: then $PFQ$ would not be a triangle and there would be nothing to compare.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The distance from a point to a line** is defined as the length of the perpendicular, precisely because it is the shortest; every other segment from the point to the line is longer.
• **The hypotenuse is the longest side** of a right triangle; the argument here is exactly that, with $PQ$ as the hypotenuse.
• **Heights of a triangle.** The height from a vertex is the perpendicular to the opposite side, the shortest route to that side, which is why it, and not a slanted segment, enters the area formula $\\tfrac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$.
• **Parallel lines are everywhere the same distance apart.** The perpendiculars from points of one line to the other are all equal, which is what "distance between parallel lines" means.
• **Tangent and radius.** The radius to the point where a line touches a circle is the shortest segment from the centre to the line, so it is perpendicular to the tangent.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the distance from a point to a line?',
          answer: 'The length of the perpendicular segment from the point to the line. It is the shortest of all the segments from the point to points of the line, which is why it is taken as the distance.'
        },
        obj2: {
          question: 'Why is the perpendicular shorter than any other segment to the line?',
          answer: 'The perpendicular, the other segment and the piece of the line between their feet form a right triangle. The right angle is its largest angle, so the side opposite it, the slanted segment, is its longest side; the perpendicular is shorter.'
        },
        obj3: {
          question: 'Is the hypotenuse always the longest side of a right triangle?',
          answer: 'Yes. The two acute angles add up to 90 degrees, so the right angle is the largest angle, and the side opposite it, the hypotenuse, is the longest side.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Perpendicular Is Shortest Proof Visualizer",
          "description": "Step-by-step interactive proof that the perpendicular from a point to a line is shorter than any other segment from the point to the line, with a draggable figure.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/perpendicular-shortest",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Perpendicular Is the Shortest Distance", "item": "https://www.learnmathclass.com/geometry/visual-tools/perpendicular-shortest" }
          ]
        }
      }
    },
    'thales-theorem': {
      proofKey: 'thales',
      title: 'Thales\' Theorem Proof | Angle in a Semicircle, Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the angle in a semicircle is a right angle, step by step with two isosceles triangles, then slide the point round the circle to see it hold every time.',
      h1Title: 'Thales\' Theorem',
      url: '/geometry/visual-tools/thales-theorem',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="42" r="26" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><polygon points="14,42 66,42 50,19" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="40" y1="42" x2="50" y2="19" stroke="#B5D4F4" stroke-width="1.1" stroke-dasharray="3 2"/><path d="M 44.6 26.8 L 38 22 L 42.6 15.4" fill="none" stroke="#FAC775" stroke-width="1.4"/><circle cx="40" cy="42" r="2.2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="50" cy="19" r="3" fill="#042C53"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#8736;ACB = 90&#176;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Thales\' Theorem Proof',
      keywords: [
        'thales theorem',
        'thales theorem proof',
        'angle in a semicircle',
        'angle in a semicircle is a right angle',
        'inscribed angle diameter',
        'euclid III.31',
        'circle theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the point round the circle or change the circle itself to see that the angle in the semicircle stays a right angle. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take a circle with centre $O$ and a diameter $AB$, a chord through the centre. Pick any other point $C$ of the circle and join it to both ends of the diameter. Thales' theorem says that the angle at $C$ is a right angle:

$$\\angle ACB = 90°$$

The diameter cuts the circle into two semicircles, and $C$ lies on one of them, which is why the result is also called "the angle in a semicircle". It is the oldest theorem with a name attached to it: tradition credits Thales of Miletus, around 600 BC, and the story has him sacrificing an ox to celebrate. Euclid proves it as the first part of Proposition 31 of Book III.

The readout under the canvas shows the two half-angles at $C$ in [degrees](!/trigonometry/degrees-radians#1) and their sum, live while you drag. The proof uses two earlier results, the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) and the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum), and one fact about circles: all radii are equal.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Radius to C',
          content: `The construction is a single segment: the radius $OC$, from the centre to the point on the circle. It matters because of what a circle is, the set of points at one fixed distance from the centre. So $OA$, $OB$ and $OC$ are all radii and all equal; the player marks each with one tick.

The segment $OC$ splits the big triangle $ABC$ into two smaller ones, $OAC$ on the side of $A$ and $OBC$ on the side of $B$, and each of them has two radii for sides. That is the whole idea of the proof: two isosceles triangles sharing the side $OC$. In the player $O$ can be dragged (the whole circle moves), $A$ can be dragged (the radius changes and $B$ follows, since it is the other end of the diameter), and $C$ slides round the circle.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The First Isosceles Triangle',
          content: `In triangle $OAC$ the sides $OA$ and $OC$ are radii, so they are equal, and the triangle is isosceles with apex $O$ and base $AC$. By the [isosceles base angles theorem](!/geometry/visual-tools/isosceles-base-angles) its base angles are equal:

$$\\angle OAC = \\angle OCA = \\alpha$$

The angle at $A$ is the angle of the big triangle at $A$; the angle $\\angle OCA$ is the part of the angle at $C$ that lies on the side of $A$. The player marks both with the same colour.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Second Isosceles Triangle',
          content: `The same argument on the other side. In triangle $OBC$ the sides $OB$ and $OC$ are radii, equal, so the triangle is isosceles with apex $O$ and base $BC$, and

$$\\angle OBC = \\angle OCB = \\beta$$

Now the angle of the big triangle at $B$ is $\\beta$, and the part of the angle at $C$ on the side of $B$ is $\\beta$ too. The two parts at $C$ sit side by side along $OC$, so the whole angle at $C$ is

$$\\angle ACB = \\alpha + \\beta$$

the sum of the angles at the two ends of the diameter. That is the key fact, and it holds for every position of $C$ on the circle.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Angle Sum',
          content: `Now forget the circle and look at the triangle $ABC$ alone. Its three angles are $\\alpha$ at $A$, $\\beta$ at $B$ and $\\alpha + \\beta$ at $C$. By the [triangle angle sum theorem](!/geometry/visual-tools/triangle-angle-sum) they add up to $180°$:

$$\\alpha + (\\alpha + \\beta) + \\beta = 180°$$

Every angle of the triangle has been written in terms of the two numbers $\\alpha$ and $\\beta$; the equation has no other unknowns. The player highlights all four marked angles at this step.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Collect the terms: $2\\alpha + 2\\beta = 180°$, that is $2(\\alpha + \\beta) = 180°$, so

$$\\alpha + \\beta = 90°$$

But $\\alpha + \\beta$ is exactly the angle at $C$. So $\\angle ACB = 90°$, which is the statement. The end-of-proof mark ∎ in the log closes the argument. The tags name what was used: the given diameter, the radius $OC$ with the equal radii, the isosceles base angles twice, the triangle angle sum, and a halving. Nothing depends on where $C$ sits on the circle, which is why sliding it does not change the right angle.

The argument also shows something the statement does not say: the two halves of the right angle at $C$ are the angles at $A$ and $B$. Move $C$ towards $A$ and $\\alpha$ shrinks while $\\beta$ grows, always to the same total of $90°$.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $C$ round the circle: the triangle changes shape completely, from tall and narrow near the top of the circle to flat near the ends of the diameter, and the readout keeps $\\angle ACB$ at $90.0°$ throughout; only the split into $\\alpha$ and $\\beta$ changes. Drag $A$ to grow or shrink the circle, or $O$ to move it; $B$ stays at the opposite end of the diameter and $C$ stays on the circle.

A drag that would put $C$ onto $A$ or $B$ is refused, as is shrinking the circle to almost nothing: with $C$ at an end of the diameter there is no triangle and no angle to measure.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Right angle with a compass.** To draw a right angle at a point $C$ of a circle, join it to the ends of any diameter; conversely, a right triangle fits exactly into a semicircle with its hypotenuse as the diameter.
• **The converse.** If $\\angle ACB = 90°$, then $C$ lies on the circle with diameter $AB$: the midpoint of the hypotenuse of a right triangle is the same distance from all three vertices, so it is the circumcentre.
• **The inscribed angle theorem.** Thales' theorem is the special case of a general fact: an angle on the circle is half the angle at the centre on the same arc. Here the arc is a semicircle, the central angle is $180°$, and half of it is $90°$.
• **Tangent from a point.** To draw the tangents from an outside point $P$ to a circle, draw the circle on diameter $OP$; it meets the given circle at the points of tangency, because the angle at each of them is a right angle.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does Thales\' theorem say?',
          answer: 'If A and B are the ends of a diameter of a circle and C is any other point of the circle, the angle ACB is a right angle. In words: the angle in a semicircle is 90 degrees.'
        },
        obj2: {
          question: 'Why is the angle in a semicircle a right angle?',
          answer: 'The radius to C splits the triangle into two isosceles triangles, so the angle at C equals the sum of the angles at A and B. The three angles of the triangle add up to 180 degrees, so twice that sum is 180 degrees and the angle at C is 90 degrees.'
        },
        obj3: {
          question: 'Is the converse of Thales\' theorem true?',
          answer: 'Yes. If the angle at C in triangle ABC is a right angle, then C lies on the circle with diameter AB; the midpoint of the hypotenuse is equally distant from A, B and C.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Thales' Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the angle in a semicircle is a right angle, with a point that slides round the circle.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/thales-theorem",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Thales' Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/thales-theorem" }
          ]
        }
      }
    },
    'vertical-angles': {
      proofKey: 'verticalAngles',
      title: 'Vertical Angles Are Equal Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the opposite angles made by two crossing lines are equal, step by step with two linear pairs, then turn the lines to see it hold every time.',
      h1Title: 'Vertical Angles Are Equal',
      url: '/geometry/visual-tools/vertical-angles',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="58" x2="72" y2="22" stroke="#E6F1FB" stroke-width="1.4"/><line x1="10" y1="18" x2="70" y2="62" stroke="#E6F1FB" stroke-width="1.4"/><path d="M 28.6 46.4 A 13 13 0 0 1 28.9 32.7 L 40 40 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 51.4 33.6 A 13 13 0 0 1 51.1 47.3 L 40 40 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><circle cx="40" cy="40" r="2.6" fill="#042C53"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#945; = &#945;&#8242;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Lines and Angles',
      name: 'Vertical Angles Proof',
      keywords: [
        'vertical angles',
        'vertical angles are equal',
        'vertically opposite angles',
        'vertical angles theorem proof',
        'opposite angles crossing lines',
        'linear pair',
        'euclid I.15',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then turn the lines to see that the opposite angles stay equal whatever the crossing looks like. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `When two straight lines cross, they make four angles at the crossing point. Angles that lie opposite each other, sharing the vertex but no side, are called vertical angles (or vertically opposite angles). In the figure the lines $AB$ and $CD$ cross at $O$; $\\angle AOC$ and $\\angle BOD$ are one pair of vertical angles, $\\angle COB$ and $\\angle DOA$ the other. The theorem, Proposition 15 of Book I of Euclid's Elements, says that vertical angles are equal:

$$\\angle AOC = \\angle BOD \\qquad\\text{and}\\qquad \\angle COB = \\angle DOA$$

The word "vertical" here has nothing to do with up and down; it comes from vertex, the shared corner. Nothing is assumed about the lines except that they cross: the angles need not be right angles, and the lines need not be special in any way.

The readout under the canvas shows all four angles in [degrees](!/trigonometry/degrees-radians#1), paired, live while you drag. The proof uses one fact only, that the angles along a straight line add up to $180°$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The First Linear Pair',
          content: `Look at the angle $\\alpha = \\angle AOC$ and its neighbour $\\beta = \\angle COB$. They share the side $OC$, and their other sides $OA$ and $OB$ point in opposite directions along the line $AB$. So together they fill the straight angle $AOB$, which measures $180°$: two angles that fill a straight line are called a linear pair, and they are [supplementary](!/trigonometry/degrees-radians#8):

$$\\alpha + \\beta = 180°$$

This uses nothing about the second line except that $OC$ is a ray from $O$. The player highlights the two angles and the line $AB$ they sit on.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Second Linear Pair',
          content: `Now take the same neighbour $\\beta = \\angle COB$ together with the angle on its other side, $\\alpha' = \\angle BOD$. These two share the side $OB$, and their other sides $OC$ and $OD$ point in opposite directions along the line $CD$. So they fill the straight angle $COD$:

$$\\beta + \\alpha' = 180°$$

The point of the proof is that the same angle $\\beta$ appears in both linear pairs, once with $\\alpha$ and once with $\\alpha'$. The player highlights $\\beta$, $\\alpha'$ and the line $CD$ at this step.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Why It Holds',
          content: `Both sums are $180°$, so they are equal to each other:

$$\\alpha + \\beta = \\beta + \\alpha'$$

The angle $\\beta$ appears on both sides; take it away from both and what remains is

$$\\alpha = \\alpha'$$

which is the statement for the first pair. The end-of-proof mark ∎ in the log closes the argument. In Euclid's words, the two vertical angles are both "equal to two right angles less the angle $COB$", so they are equal to each other. Only two facts were used: that a straight angle measures $180°$, twice, and that equals taken from equals leave equals.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Other Pair',
          content: `The second pair of vertical angles, $\\beta = \\angle COB$ and $\\beta' = \\angle DOA$, needs no new idea. Each of them makes a linear pair with the same angle $\\alpha$: $\\beta + \\alpha = 180°$ along the line $AB$, and $\\alpha + \\beta' = 180°$ along the line $CD$. Taking $\\alpha$ away from both gives

$$\\beta = \\beta'$$

So the four angles at a crossing come in two equal pairs, $\\alpha, \\alpha'$ and $\\beta, \\beta'$, with $\\alpha + \\beta = 180°$. Knowing one of the four angles gives all four. The player shows the second pair at this last step.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag $A$ to turn the line $AB$ about $O$, or $C$ to turn $CD$; $B$ and $D$ follow at the far ends of their lines. The four angles change together, two growing while the other two shrink, and the readout keeps $\\alpha = \\alpha'$ and $\\beta = \\beta'$ throughout. Turn one line until it is perpendicular to the other and all four angles become $90°$. Drag $O$ to move the crossing.

A drag that would lay the two lines on top of each other is refused: with the lines coinciding there is no crossing and no angles to speak of.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **One angle gives all four.** At any crossing, the angle $\\alpha$ determines its vertical angle $\\alpha$ and the two others $180° - \\alpha$.
• **Perpendicular lines.** If one of the four angles is a right angle, all four are: a line perpendicular to another makes four right angles at the crossing.
• **Parallel lines.** When a third line crosses two others, the vertical angles at each crossing turn the equality of alternate angles into the equality of corresponding angles and back; the facts about parallel lines used in the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum) rest on this.
• **Exterior angles.** Each vertex of a triangle has two exterior angles, one on each extended side, and they are vertical angles, so they are equal; that is why the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) can speak of "the" exterior angle at a vertex.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What are vertical angles?',
          answer: 'When two straight lines cross, the two angles that lie opposite each other at the crossing, sharing the vertex but no side, are vertical angles. Every crossing has two such pairs.'
        },
        obj2: {
          question: 'Why are vertical angles equal?',
          answer: 'Each vertical angle together with the same neighbouring angle fills a straight line, 180 degrees. Two quantities that each make 180 degrees with the same third quantity are equal to each other.'
        },
        obj3: {
          question: 'Do vertical angles have to be acute?',
          answer: 'No. One pair of vertical angles is acute and the other pair obtuse, unless the lines are perpendicular, in which case all four angles are right angles. The two angles of a pair are always equal, whatever their size.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Vertical Angles Proof Visualizer",
          "description": "Step-by-step interactive proof that the opposite angles made by two crossing lines are equal, with lines that can be turned.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/vertical-angles",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Vertical Angles Are Equal", "item": "https://www.learnmathclass.com/geometry/visual-tools/vertical-angles" }
          ]
        }
      }
    },
    'parallel-lines': {
      proofKey: 'parallelLines',
      title: 'Parallel Lines and a Transversal Proof | Corresponding, Alternate and Co-interior Angles',
      description: 'Watch the proof that a transversal makes equal corresponding angles, equal alternate angles and supplementary co-interior angles with two parallel lines, then tilt the transversal to see it hold every time.',
      h1Title: 'Parallel Lines and a Transversal',
      url: '/geometry/visual-tools/parallel-lines',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="26" x2="74" y2="26" stroke="#E6F1FB" stroke-width="1.4"/><line x1="6" y1="54" x2="74" y2="54" stroke="#E6F1FB" stroke-width="1.4"/><line x1="26" y1="8" x2="54" y2="72" stroke="#B5D4F4" stroke-width="1.4"/><path d="M 43 26 A 9 9 0 0 0 37.5 17.7 L 34 26 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 55 54 A 9 9 0 0 0 49.5 45.7 L 46 54 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 25 26 A 9 9 0 0 0 30.5 34.3 L 34 26 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#945; = &#945;&#8242;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Lines and Angles',
      name: 'Parallel Lines and a Transversal Proof',
      keywords: [
        'parallel lines transversal',
        'corresponding angles are equal',
        'alternate angles are equal',
        'alternate interior angles',
        'co-interior angles supplementary',
        'consecutive interior angles',
        'parallel postulate',
        'euclid I.29',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then tilt the transversal or move the lines to see that the three relations between the angles hold whatever the crossing looks like. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two lines in the plane are parallel when they never meet, however far they are extended. A third line that crosses both is a transversal. At the two crossings, $P$ on the first line and $Q$ on the second, the transversal makes eight angles, and the theorem says how they are related when the lines are parallel:

• **Corresponding angles**, in the same position at the two crossings (both upper right, say), are equal: $\\alpha = \\alpha'$.
• **Alternate angles**, between the parallels on opposite sides of the transversal, are equal: $\\angle APQ = \\alpha'$. These are the [alternate interior angles](!/trigonometry/right-triangle#9) that the proof of the triangle angle sum relies on.
• **Co-interior angles**, between the parallels on the same side of the transversal, are [supplementary](!/trigonometry/degrees-radians#8): $\\beta + \\alpha' = 180°$.

This is Proposition 29 of Book I of Euclid's Elements, the first proposition in which he uses his fifth postulate, the parallel postulate. The three relations are really one fact seen three ways, and the proof shows how the other two follow from the first.

The readout under the canvas shows $\\alpha$, $\\alpha'$ and $\\beta$ in [degrees](!/trigonometry/degrees-radians#1), live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Corresponding Angles',
          content: `The angles $\\alpha$ at $P$ and $\\alpha'$ at $Q$ sit in the same position at their crossings: above the line, to the right of the transversal. Such a pair is called corresponding angles. The first step of the proof is that for parallel lines they are equal:

$$\\alpha = \\alpha'$$

Where does this come from? It cannot be proved from the other postulates of plane geometry; it is the parallel postulate itself, or rather one of its equivalent forms. Euclid's own wording speaks of co-interior angles: if they add up to less than two right angles, the lines meet on that side. School courses usually take the corresponding-angles form as the axiom, and that is what the player does here, tagging the step "Parallel postulate". On a sphere, where no lines are parallel in Euclid's sense, the statement fails; in the flat plane it is the one assumption everything about parallels rests on.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Alternate Angles',
          content: `Now look at the angle at $P$ below the line and to the left of the transversal, $\\angle APQ$. It lies opposite $\\alpha$ across the crossing point $P$: the two are [vertical angles](!/geometry/visual-tools/vertical-angles), so they are equal, and therefore

$$\\angle APQ = \\alpha = \\alpha'$$

The angles $\\angle APQ$ and $\\alpha'$ both lie between the two parallels, one on each side of the transversal: that is what makes them alternate angles. The letter Z drawn through $A$, $P$, $Q$, $D$ shows the pair at its two corners, which is why they are sometimes called Z-angles. The player marks $\\angle APQ$ with the same colour and label as $\\alpha$, since it is equal to it.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Co-interior Angles',
          content: `The last relation uses the straight line at $P$. The angles $\\beta = \\angle QPB$ and $\\angle APQ$ share the side $PQ$ and together fill the straight angle $APB$, so they are a linear pair and add up to $180°$. Since $\\angle APQ = \\alpha'$,

$$\\beta + \\alpha' = 180°$$

The angles $\\beta$ and $\\alpha'$ both lie between the parallels, on the same side of the transversal: co-interior angles (also called consecutive or same-side interior angles). They are supplementary. The letter C through $B$, $P$, $Q$, $D$ marks the pair, which is why they are sometimes called C-angles.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Why It Holds',
          content: `Put the three steps together. The parallel postulate gives one equality, $\\alpha = \\alpha'$; vertical angles carry it to the alternate pair; a linear pair turns it into the supplementary co-interior pair. The end-of-proof mark ∎ in the log closes the argument. The tags name the three facts used: the parallel postulate, vertical angles, and the straight angle. The first is an axiom; the other two have their own proofs.

The same three relations hold for the other angles at the crossings, by the same reasoning with the roles of left and right, or above and below, exchanged: every one of the eight angles at $P$ and $Q$ is either $\\alpha'$ or $180° - \\alpha'$. Knowing one angle at a transversal gives all eight.

The converses are true as well (Euclid I.27 and I.28): if a transversal makes equal alternate angles, or equal corresponding angles, or supplementary co-interior angles, with two lines, then the lines are parallel. That is how parallel lines are recognised and constructed in practice.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag $E$ or $F$ to tilt the transversal: $\\alpha$ changes, and $\\alpha'$ changes with it, staying equal, while $\\beta$ moves the opposite way so that $\\beta + \\alpha'$ stays $180°$. Tilt the transversal until it is perpendicular to the lines and all eight angles become right angles. Drag $A$ or $B$ to turn the first line; the second turns with it, since it is kept parallel. Drag $C$ to slide the second line up or down.

A drag that would take the transversal off either line, or make it almost parallel to them, is refused: the crossings $P$ and $Q$ must exist and lie on the drawn segments.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **The triangle angle sum.** The proof of the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum) draws a parallel through one vertex and uses the equal alternate angles twice; this page is the justification behind its "Alternate angles" tag.
• **Parallelograms.** Each pair of opposite sides is a pair of parallels cut by the other sides, so opposite angles of a parallelogram are equal and adjacent angles are supplementary.
• **Recognising parallels.** By the converses, a pair of equal corresponding angles, or equal alternate angles, is enough to know two lines are parallel; this is how a set square draws parallel lines.
• **Distances.** Alternate angles and the congruence of triangles show that two parallels are everywhere the same distance apart.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What are corresponding, alternate and co-interior angles?',
          answer: 'When a transversal crosses two lines, corresponding angles sit in the same position at the two crossings, alternate angles lie between the lines on opposite sides of the transversal, and co-interior angles lie between the lines on the same side of the transversal.'
        },
        obj2: {
          question: 'Which of the three relations is the parallel postulate?',
          answer: 'Any one of them can serve as the axiom; the other two then follow by vertical angles and the straight angle. Euclid states his fifth postulate in terms of co-interior angles; school courses usually take equal corresponding angles as the axiom, as this page does.'
        },
        obj3: {
          question: 'Do the relations work the other way round?',
          answer: 'Yes. If a transversal makes equal corresponding angles, or equal alternate angles, or supplementary co-interior angles with two lines, the lines are parallel. These converses are Euclid I.27 and I.28, and they do not need the parallel postulate.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Parallel Lines and a Transversal Proof Visualizer",
          "description": "Step-by-step interactive proof of the corresponding, alternate and co-interior angle relations for parallel lines cut by a transversal, with a transversal that can be tilted.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/parallel-lines",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Parallel Lines and a Transversal", "item": "https://www.learnmathclass.com/geometry/visual-tools/parallel-lines" }
          ]
        }
      }
    },
    'polygon-angle-sum': {
      proofKey: 'polygonAngleSum',
      title: 'Polygon Angle Sum Proof | (n − 2) · 180°, Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the interior angles of a polygon add up to (n − 2) · 180°, on a pentagon cut into triangles, then drag the vertices to see the sum stay at 540°.',
      h1Title: 'Polygon Angle Sum',
      url: '/geometry/visual-tools/polygon-angle-sum',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,10 68,30 58,64 22,64 12,30" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><line x1="40" y1="10" x2="58" y2="64" stroke="#B5D4F4" stroke-width="1.1" stroke-dasharray="3 2"/><line x1="40" y1="10" x2="22" y2="64" stroke="#B5D4F4" stroke-width="1.1" stroke-dasharray="3 2"/><path d="M 44.5 23.5 A 9 9 0 0 1 37.2 18.3 L 40 10 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 37.2 18.3 A 9 9 0 0 1 32.6 15.3 L 40 10 Z" fill="#9FE1CB" fill-opacity="0.9" stroke="#0F6E56" stroke-width="0.8"/><path d="M 47.4 15.3 A 9 9 0 0 1 44.5 23.5 L 40 10 Z" fill="#CECBF6" fill-opacity="0.9" stroke="#534AB7" stroke-width="0.8"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">(n &#8722; 2) &#183; 180&#176;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Polygon',
      name: 'Polygon Angle Sum Proof',
      keywords: [
        'polygon angle sum',
        'sum of interior angles of a polygon',
        '(n-2) 180',
        'interior angle sum formula',
        'pentagon angle sum 540',
        'polygon interior angles proof',
        'triangulation of a polygon',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices of the pentagon to see that its five angles keep adding up to $540°$ whatever its shape. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A polygon with $n$ sides has $n$ vertices and $n$ interior angles. The theorem gives their sum:

$$\\text{sum of the interior angles} = (n - 2) \\cdot 180°$$

For a triangle, $n = 3$, this is the $180°$ of the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum); for a quadrilateral $360°$; for the pentagon in the player $3 \\cdot 180° = 540°$; for a hexagon $720°$, and so on, $180°$ more for each extra side. The polygon is taken convex here: every interior angle less than $180°$, so that the diagonals from one vertex lie inside it. The formula holds for non-convex polygons too, but the cutting then needs more care.

The readout under the canvas adds the five angles in [degrees](!/trigonometry/degrees-radians#1) live while you drag; the proof itself only uses the triangle angle sum and the way angles fit together at a vertex.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Diagonals',
          content: `The construction is to draw every diagonal from one vertex. From $A$ there are two, $AC$ and $AD$ (the segments to $B$ and $E$ are sides, not diagonals), and they cut the pentagon into three triangles: $ABC$, $ACD$ and $ADE$, shaded in three colours in the player. Because the pentagon is convex, both diagonals lie inside it and the three triangles fill it exactly, with no gaps and no overlaps.

Count in general: a vertex of an $n$-gon is joined by sides to its two neighbours and by diagonals to the other $n - 3$ vertices, and $n - 3$ diagonals cut the polygon into $n - 2$ triangles. That number, $n - 2$, is where the formula comes from. For the pentagon, $n - 2 = 3$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Three Triangles',
          content: `Each of the three triangles has an angle sum of $180°$, by the [triangle angle sum theorem](!/geometry/visual-tools/triangle-angle-sum). So all nine triangle angles together make

$$3 \\cdot 180° = 540°$$

This counts the angles of the triangles, not yet the angles of the pentagon; the next step shows they are the same. For an $n$-gon the $n - 2$ triangles give $(n - 2) \\cdot 180°$ in the same way.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Angles Fit Together',
          content: `Look at each vertex of the pentagon and ask which triangle angles sit there:

• at $A$, three triangle angles sit side by side along the two diagonals and make up the whole of $\\alpha$;
• at $C$ and at $D$, where one diagonal ends, two triangle angles make up $\\gamma$ and $\\delta$;
• at $B$ and at $E$, a single triangle angle is the whole of $\\beta$ and $\\varepsilon$.

Every triangle angle is used exactly once, and every pentagon angle is completely covered: the nine triangle angles are the five pentagon angles cut into pieces. Adding the pieces vertex by vertex, or triangle by triangle, gives the same total. The player highlights the five pentagon angles with the diagonals running through $\\alpha$, $\\gamma$ and $\\delta$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Why It Holds',
          content: `The two counts are of the same angles, so

$$\\alpha + \\beta + \\gamma + \\delta + \\varepsilon = 3 \\cdot 180° = 540°$$

which is the statement for the pentagon. The end-of-proof mark ∎ in the log closes the argument. The tags name what was used: the convex polygon, the diagonals from one vertex, the triangle angle sum, and the fitting of angles at each vertex; the last step only replaces $5$ by $n$. The general formula $(n - 2) \\cdot 180°$ follows because the same cut always gives $n - 2$ triangles.

There is a second route through the [exterior angles](!/geometry/visual-tools/exterior-angle-sum): one exterior angle at each vertex always adds up to $360°$, and each interior angle is $180°$ minus its exterior angle, so the interior sum is $n \\cdot 180° - 360° = (n - 2) \\cdot 180°$. The two proofs are the same fact seen from inside and from outside.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag any vertex: the three triangles change shape, their angles change, and the five pentagon angles change with them, but the readout keeps the total at $540.0°$. Pull $B$ outward and $\\beta$ shrinks while its neighbours grow; push a vertex inward and its angle opens up.

A drag that would make the pentagon non-convex, with an interior angle of $180°$ or more, or would flatten one of the three triangles, is refused: the proof's cutting into triangles from one vertex needs a convex figure, and the player keeps the last valid one.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **Regular polygons.** When all $n$ angles are equal, each is $\\frac{(n - 2) \\cdot 180°}{n}$: $60°$ for the equilateral triangle, $90°$ for the square, $108°$ for the regular pentagon, $120°$ for the regular hexagon.
• **Quadrilaterals.** $n = 4$ gives $360°$: the angles of every quadrilateral, convex or not, add up to a full turn.
• **Which regular polygons tile the plane.** Copies of a regular polygon fit round a point exactly when $\\frac{(n - 2) \\cdot 180°}{n}$ divides $360°$, which happens only for $n = 3, 4, 6$.
• **Number of diagonals.** The same count, $n - 3$ diagonals from each vertex, gives $\\frac{n(n - 3)}{2}$ diagonals in all: $5$ for a pentagon, $9$ for a hexagon.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the sum of the interior angles of a polygon?',
          answer: 'For a polygon with n sides the interior angles add up to (n minus 2) times 180 degrees: 180 for a triangle, 360 for a quadrilateral, 540 for a pentagon, 720 for a hexagon.'
        },
        obj2: {
          question: 'Why (n minus 2)?',
          answer: 'The diagonals from one vertex cut the polygon into n minus 2 triangles, and each triangle contributes 180 degrees. The triangles\' angles fit together to make exactly the polygon\'s angles.'
        },
        obj3: {
          question: 'Does the formula work for non-convex polygons?',
          answer: 'Yes, the sum is still (n minus 2) times 180 degrees, counting the reflex angles as larger than 180 degrees. The proof on this page cuts from one vertex, which only works for convex polygons; a non-convex one can be cut into triangles in a different way.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Polygon Angle Sum Proof Visualizer",
          "description": "Step-by-step interactive proof that the interior angles of a polygon add up to (n − 2) · 180°, on a draggable pentagon cut into triangles.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/polygon-angle-sum",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Polygon Angle Sum", "item": "https://www.learnmathclass.com/geometry/visual-tools/polygon-angle-sum" }
          ]
        }
      }
    },
    'inscribed-angle': {
      proofKey: 'inscribedAngle',
      title: 'Inscribed Angle Theorem Proof | Angle at the Centre Is Twice the Angle at the Circle',
      description: 'Watch the proof that the angle at the centre of a circle is twice the inscribed angle on the same arc, step by step with two isosceles triangles and the exterior angle theorem, then slide the points round the circle.',
      h1Title: 'The Inscribed Angle Theorem',
      url: '/geometry/visual-tools/inscribed-angle',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="26" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><line x1="32" y1="15.3" x2="18" y2="58" stroke="#E6F1FB" stroke-width="1.3"/><line x1="32" y1="15.3" x2="62" y2="58" stroke="#E6F1FB" stroke-width="1.3"/><line x1="40" y1="40" x2="18" y2="58" stroke="#B5D4F4" stroke-width="1.1"/><line x1="40" y1="40" x2="62" y2="58" stroke="#B5D4F4" stroke-width="1.1"/><path d="M 29.3 23.5 A 8.6 8.6 0 0 1 37 22.7 L 32 15.3 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 33.1 45.6 A 9 9 0 0 1 46.9 45.6 L 40 40 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><circle cx="40" cy="40" r="2.2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#8736;AOB = 2&#8736;ACB</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Inscribed Angle Theorem Proof',
      keywords: [
        'inscribed angle theorem',
        'central angle theorem',
        'angle at the centre twice angle at circumference',
        'inscribed angle proof',
        'angle subtended by an arc',
        'euclid III.20',
        'circle theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the points round the circle to see that the angle at the centre stays exactly twice the angle at the circle. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take three points $A$, $B$, $C$ on a circle with centre $O$. The angle $\\angle ACB$, with its vertex on the circle, is an inscribed angle; the angle $\\angle AOB$, with its vertex at the centre, is a central angle. Both stand on the same arc $AB$, the one that does not contain $C$. The theorem, Proposition 20 of Book III of Euclid's Elements, says

$$\\angle AOB = 2 \\cdot \\angle ACB$$

the angle at the centre is twice the angle at the circle. Two things follow at once and are worth saying now: the inscribed angle does not depend on where $C$ is on its arc, since $\\angle AOB$ does not move; and when $AB$ is a diameter the central angle is $180°$, so the inscribed angle is $90°$, which is [Thales' theorem](!/geometry/visual-tools/thales-theorem).

The proof on this page covers the case where the centre lies inside the inscribed angle, the one the player keeps you in. The other cases, centre on a side or outside the angle, use the same two ideas with a subtraction instead of an addition; see Why It Holds. The readout under the canvas shows both angles in [degrees](!/trigonometry/degrees-radians#1), live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Diameter',
          content: `The construction is the diameter through $C$: join $C$ to the centre $O$ and extend the line to the point $D$ on the far side of the circle. In the player $D$ is hollow, because it is built from $C$ and $O$ and follows them.

The diameter does two things at once. It splits the inscribed angle at $C$ into two parts, $\\alpha = \\angle ACD$ on the side of $A$ and $\\beta = \\angle DCB$ on the side of $B$; and it splits the central angle at $O$ into $\\angle AOD$ and $\\angle DOB$. The proof will show that each part at $O$ is twice the matching part at $C$. It also brings in the radii $OA$, $OB$ and $OC$, all equal because they are radii (one tick each), which is what makes the two triangles $OAC$ and $OBC$ isosceles.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'An Isosceles Triangle',
          content: `In triangle $OAC$ the sides $OA$ and $OC$ are radii, so they are equal and the triangle is isosceles with apex $O$. By the [isosceles base angles theorem](!/geometry/visual-tools/isosceles-base-angles) its base angles are equal:

$$\\angle OAC = \\angle OCA = \\alpha$$

The angle at $C$ here is the part $\\alpha$ of the inscribed angle on the side of $A$; the angle at $A$ is new and is marked in the same colour. This is the same opening move as in Thales' theorem, where the two isosceles triangles on the radii did all the work.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Exterior Angle',
          content: `Since $C$, $O$ and $D$ lie on one line, the angle $\\angle AOD$ at $O$ lies outside triangle $OAC$, between the side $OA$ and the extension $OD$ of the side $CO$: it is an exterior angle of that triangle. By the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) it equals the sum of the two remote interior angles, which are $\\alpha$ at $A$ and $\\alpha$ at $C$:

$$\\angle AOD = \\alpha + \\alpha = 2\\alpha$$

This is the whole mechanism of the proof: the isosceles triangle doubles the angle $\\alpha$ by producing a second copy of it at $A$, and the exterior angle collects both copies at the centre. The player highlights the three angles involved.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Other Side',
          content: `The same two steps on the side of $B$. Triangle $OBC$ has $OB = OC$, so it is isosceles and $\\angle OBC = \\angle OCB = \\beta$; and $\\angle DOB$ is an exterior angle of triangle $OBC$ at $O$, so

$$\\angle DOB = \\beta + \\beta = 2\\beta$$

Both parts of the central angle are now known: $\\angle AOD = 2\\alpha$ and $\\angle DOB = 2\\beta$, each twice the part of the inscribed angle on its own side of the diameter.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Add the two parts at $O$ and the two parts at $C$:

$$\\angle AOB = \\angle AOD + \\angle DOB = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2 \\cdot \\angle ACB$$

which is the statement. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given circle, the diameter through $C$ with its equal radii, the isosceles base angles, the exterior angle theorem, the same two once more, and an addition.

The other two cases need one change. If $O$ lies on a side of the inscribed angle, say on $CB$, then $\\beta = 0$ and the first half of the proof is already the whole proof: $\\angle AOB = 2\\alpha$. If $O$ lies outside the inscribed angle, both $A$ and $B$ are on the same side of the diameter $CD$; the two exterior angles are still $2\\alpha$ and $2\\beta$, but now the central angle is their difference, $2\\beta - 2\\alpha = 2(\\beta - \\alpha)$, and the inscribed angle is $\\beta - \\alpha$. Twice, in every case.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $C$ along its arc: $\\alpha$ and $\\beta$ trade places, the diameter swings round, and the readout keeps $\\angle AOB$ at exactly twice $\\angle ACB$; and since $\\angle AOB$ does not change while $C$ moves on its arc, neither does $\\angle ACB$. Slide $B$ to change the arc, or drag $A$ to change the radius and $O$ to move the circle.

The player keeps the figure in the case the proof covers: a drag that would carry $C$ past the diameter through $A$ or $B$, putting the centre outside the inscribed angle, is refused, as is a drag that would flatten one of the triangles. The angle sum $\\alpha + \\beta$ at $C$ is always less than $90°$ in this case, since $2(\\alpha + \\beta)$ must fit inside a straight angle at $O$.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Thales' theorem.** When $AB$ is a diameter the central angle is $180°$, so every inscribed angle on it is $90°$; see its [own page](!/geometry/visual-tools/thales-theorem).
• **Angles in the same segment.** All inscribed angles standing on the same arc are equal, since each is half of the same central angle. This is Euclid III.21 and the key to most circle problems.
• **Cyclic quadrilaterals.** For a quadrilateral inscribed in a circle, two opposite angles stand on arcs that together make the whole circle, so their central angles add up to $360°$ and the inscribed angles add up to $180°$.
• **Tangent and chord.** The angle between a tangent and a chord equals the inscribed angle on the other side of the chord, the limiting case as $C$ slides into the point of tangency.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the inscribed angle theorem say?',
          answer: 'An angle with its vertex on a circle is half the angle with its vertex at the centre that stands on the same arc. Equivalently, the angle at the centre is twice the angle at the circumference.'
        },
        obj2: {
          question: 'Why are all inscribed angles on the same arc equal?',
          answer: 'Each of them is half of the same central angle, and the central angle does not depend on where the vertex sits on the circle. So every inscribed angle on a given arc has the same size.'
        },
        obj3: {
          question: 'Does the proof cover every position of the centre?',
          answer: 'The proof shown covers the centre lying inside the inscribed angle. When the centre lies on a side, one half of the proof is enough; when it lies outside, the same two exterior angles are subtracted instead of added. The result is the same in all three cases.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Inscribed Angle Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the angle at the centre of a circle is twice the inscribed angle on the same arc, with points that slide round the circle.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/inscribed-angle",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Inscribed Angle Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/inscribed-angle" }
          ]
        }
      }
    },
    'pythagorean-theorem': {
      proofKey: 'pythagoras',
      title: 'Pythagorean Theorem Proof | a² + b² = c² Step by Step',
      description: 'Watch a proof of the Pythagorean theorem step by step: four copies of the right triangle in a square of side a + b leave a square of side c, and counting the area two ways gives a² + b² = c². Then drag the triangle and watch the numbers.',
      h1Title: 'The Pythagorean Theorem',
      url: '/geometry/visual-tools/pythagorean-theorem',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="56" height="56" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><polygon points="34,12 68,34 46,68 12,46" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.3"/><polygon points="12,12 34,12 12,46" fill="#FAC775" fill-opacity="0.8" stroke="#854F0B" stroke-width="0.8"/><polygon points="34,12 68,12 68,34" fill="#FAC775" fill-opacity="0.8" stroke="#854F0B" stroke-width="0.8"/><polygon points="68,34 68,68 46,68" fill="#FAC775" fill-opacity="0.8" stroke="#854F0B" stroke-width="0.8"/><polygon points="46,68 12,68 12,46" fill="#FAC775" fill-opacity="0.8" stroke="#854F0B" stroke-width="0.8"/><text x="40" y="43" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle" font-style="italic">c&#178;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Pythagorean Theorem Proof',
      keywords: [
        'pythagorean theorem proof',
        'pythagoras theorem',
        'a squared plus b squared equals c squared',
        'right triangle hypotenuse',
        'rearrangement proof',
        'pythagorean theorem interactive',
        'euclid I.47',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the point that splits the side into $a$ and $b$ and watch the squares of the sides keep their sum. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `In a right triangle, with legs $a$ and $b$ and [hypotenuse](!/trigonometry/right-triangle#1) $c$ opposite the right angle,

$$a^2 + b^2 = c^2$$

the square on the hypotenuse equals the two squares on the legs together. This is Proposition 47 of Book I of Euclid's Elements, the last substantial result of the book, and the best known theorem in mathematics. The player shows the right angle at $P$, the legs $PX = a$ and $PW = b$, the hypotenuse $WX = c$, and the two acute angles $\\alpha$ and $\\beta$.

There are hundreds of proofs. Euclid's own, with the squares drawn on the three sides and a line from the right angle cutting the big square into two rectangles, is the longest page of Book I. The proof on this page is the rearrangement in a square of side $a + b$, found in the ancient Chinese Zhoubi Suanjing and in Bhaskara's work; it is shorter and uses only two facts from the earlier pages, side-angle-side congruence and the [angle sum of a triangle](!/geometry/visual-tools/triangle-angle-sum). The readout under the canvas shows $a^2 + b^2$ and $c^2$ side by side, in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'A Square of Side a Plus b',
          content: `The construction is a square of side $a + b$ with the triangle in one corner. Extend the leg $PX = a$ by $b$ to $Q$, extend the leg $PW = b$ by $a$ to $S$, and complete the square $PQRS$. Its side is $a + b$ both ways, and its four corners are right angles.

Now go round the square and cut each side the same way: at $a$ from one corner and $b$ from the next, always turning in the same direction. On $PQ$ the cut is $X$ itself; on $QR$ it is $Y$, with $QY = a$; on $RS$ it is $Z$, with $RZ = a$; and on $SP$ it is $W$, with $SW = a$, so that $WP = b$, which is where the given triangle's leg already was. In the player these four points are hollow, since they follow $X$: slide $X$ and all four move together.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Four Copies of the Triangle',
          content: `In each corner of the big square there is now a triangle: $WPX$, $XQY$, $YRZ$, $ZSW$. Each has a leg $a$, a leg $b$ and the right angle of the square between them. Two triangles with two sides and the included angle equal are congruent (side-angle-side), so all four are copies of the given triangle.

Everything else about them follows. Each hypotenuse, $XY$, $YZ$, $ZW$ and $WX$, has length $c$. Each has area $\\frac{1}{2}ab$, half the rectangle on its legs. And each has the same two acute angles, $\\alpha$ opposite the leg $b$ and $\\beta$ opposite the leg $a$; this last fact is what the next step needs.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Inner Square',
          content: `The piece left in the middle, $XYZW$, has four sides of length $c$. It remains to see that its angles are right angles. Look at $X$. The side $PQ$ is a straight line through it, so the three angles at $X$ add up to $180°$: the angle $\\alpha$ of triangle $WPX$, the angle of $XYZW$, and the angle $\\beta$ of triangle $XQY$.

In a right triangle the two acute angles add up to $90°$, because all three angles add up to $180°$ by the [angle sum theorem](!/geometry/visual-tools/triangle-angle-sum) and one of them is the right angle. So the angle of $XYZW$ at $X$ is $180° - \\alpha - \\beta = 90°$. The same argument at $Y$, $Z$ and $W$ shows that every angle of $XYZW$ is right. Four equal sides and four right angles: $XYZW$ is a square, and its area is $c^2$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Counting the Area Twice',
          content: `The big square can be measured in two ways. Its side is $a + b$, so its area is $(a + b)^2$. It is also made of exactly five pieces that do not overlap: the inner square, area $c^2$, and the four triangles, area $\\frac{1}{2}ab$ each. So

$$(a + b)^2 = c^2 + 4 \\cdot \\tfrac{1}{2}ab = c^2 + 2ab$$

This is the whole proof in one line; what remains is to read off $a^2 + b^2$ from it.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Expand the left side: $(a + b)^2 = a^2 + 2ab + b^2$. Then

$$a^2 + 2ab + b^2 = c^2 + 2ab$$

and taking $2ab$ from both sides leaves $a^2 + b^2 = c^2$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given right triangle, a construction, side-angle-side congruence, the angle sum, area counted two ways, and a line of algebra.

The $2ab$ that cancels is the four triangles. That is the idea of every rearrangement proof: the triangles are the same on both sides of the equation, so only the squares matter. Euclid's proof avoids the algebra by cutting the square on $c$ into two rectangles and showing each rectangle equal to one of the squares on the legs; the result is the same.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $X$ along the bottom side: $a$ grows as $b$ shrinks, the four triangles change shape together, the inner square turns, and the readout keeps $a^2 + b^2$ equal to $c^2$. When $X$ is in the middle, $a = b$, the triangles are isosceles right triangles and the inner square is the big square turned through $45°$, with half its area.

Drag $P$ or $Q$ to move or turn the whole square; the lengths change but the equation does not. A drag that would push a corner of the square out of the frame, or make the square too small to read, is refused, as is one that would take $X$ too close to a corner.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Distances.** The distance between two points with coordinates $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$: the theorem applied to a right triangle with horizontal and vertical legs.
• **Trigonometry.** Dividing $a^2 + b^2 = c^2$ by $c^2$ gives $\\sin^2\\theta + \\cos^2\\theta = 1$, the [Pythagorean identity](!/trigonometry/identities#pythagorean).
• **Any triangle.** For a triangle that is not right-angled the [Law of Cosines](!/trigonometry/sines-cosines-law#5), $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$, adds a correction term that vanishes when $\\gamma = 90°$.
• **The converse.** If $a^2 + b^2 = c^2$ then the angle opposite $c$ is right (Euclid I.48). This is how a $3$-$4$-$5$ rope makes a right angle.
• **Irrational lengths.** The diagonal of a unit square is $\\sqrt{2}$, which is not a fraction; the theorem is where irrational numbers first appeared.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the Pythagorean theorem say?',
          answer: 'In a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs: a² + b² = c². The hypotenuse is the side opposite the right angle.'
        },
        obj2: {
          question: 'Why is the middle piece a square?',
          answer: 'Its four sides are the four hypotenuses, all of length c. At each corner the straight side of the big square is split into the two acute angles of the triangle and the angle of the middle piece; since the acute angles add up to 90°, so does the remaining angle.'
        },
        obj3: {
          question: 'Is this Euclid\'s proof?',
          answer: 'No. Euclid\'s proof (Elements I.47) draws the squares on the three sides and cuts the largest into two rectangles. The proof shown here is the rearrangement in a square of side a + b, which is older and shorter but needs a line of algebra.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Pythagorean Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof of the Pythagorean theorem by rearrangement in a square of side a + b, with a draggable right triangle.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/pythagorean-theorem",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Pythagorean Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/pythagorean-theorem" }
          ]
        }
      }
    },
    'cyclic-quadrilateral': {
      proofKey: 'cyclicQuadrilateral',
      title: 'Cyclic Quadrilateral Proof | Opposite Angles Add Up to 180°',
      description: 'Watch the proof that opposite angles of a quadrilateral inscribed in a circle add up to 180°, step by step with four isosceles triangles and the angle sum, then slide the vertices round the circle.',
      h1Title: 'Opposite Angles of a Cyclic Quadrilateral',
      url: '/geometry/visual-tools/cyclic-quadrilateral',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="26" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><polygon points="22.7,20.4 62.1,27.8 58.4,57.8 17.4,52.4" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.3"/><path d="M 22.7 20.4 L 31.5 22.1 A 9 9 0 0 1 24.2 28.9 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 58.4 57.8 L 49.6 56.6 A 9 9 0 0 1 57.3 48.9 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><circle cx="40" cy="40" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#8736;A + &#8736;C = 180&#176;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Cyclic Quadrilateral Proof',
      keywords: [
        'cyclic quadrilateral',
        'opposite angles supplementary',
        'inscribed quadrilateral theorem',
        'quadrilateral in a circle',
        'circle theorems',
        'euclid III.22',
        'cyclic quadrilateral proof',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the vertices round the circle and watch each pair of opposite angles keep its sum of $180°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A quadrilateral whose four vertices lie on one circle is called cyclic, and the circle is its circumcircle. Not every quadrilateral is cyclic: a rectangle is, a general parallelogram is not. The theorem, Proposition 22 of Book III of Euclid's Elements, says that in a cyclic quadrilateral $ABCD$ the opposite angles are supplementary:

$$\\angle A + \\angle C = 180°, \\qquad \\angle B + \\angle D = 180°$$

The proof on this page joins the centre to the four vertices and uses two earlier results, the [isosceles base angles theorem](!/geometry/visual-tools/isosceles-base-angles) and the [angle sum of a polygon](!/geometry/visual-tools/polygon-angle-sum). It covers the case where the centre lies inside the quadrilateral, the one the player keeps you in; a second proof, through the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle), covers every case at once and is sketched under Why It Holds. The readout under the canvas shows both sums in [degrees](!/trigonometry/degrees-radians#1), live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Four Radii',
          content: `The construction is to join the centre $O$ to each vertex. The four segments $OA$, $OB$, $OC$, $OD$ are radii of the same circle, so they are all equal; the player marks each with one tick. They cut the quadrilateral into four triangles, $OAB$, $OBC$, $OCD$, $ODA$, which fit together round $O$ like slices.

Each of these triangles has two sides that are radii, so each is isosceles with its apex at $O$. That is the whole point of the construction: it turns a statement about four angles into a statement about four isosceles triangles, whose base angles are easy to track.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Four Isosceles Triangles',
          content: `In the isosceles triangle $OAB$ the base angles, at $A$ and at $B$, are equal; call them $\\alpha$. In $OBC$ the base angles at $B$ and $C$ are equal; call them $\\beta$. In $OCD$ they are $\\gamma$, at $C$ and $D$; in $ODA$ they are $\\delta$, at $D$ and $A$. The player draws each pair in its own colour.

Eight marked angles, four letters: every letter sits at two vertices, the two ends of one side of the quadrilateral. Nothing has been assumed about the sizes of $\\alpha$, $\\beta$, $\\gamma$, $\\delta$; they change as you drag, and the argument never needs them.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Angles of the Quadrilateral',
          content: `The radius through each vertex splits the angle of the quadrilateral there into two of the marked angles. At $A$, the radius $OA$ lies between $AB$ and $AD$, so

$$\\angle A = \\delta + \\alpha, \\quad \\angle B = \\alpha + \\beta, \\quad \\angle C = \\beta + \\gamma, \\quad \\angle D = \\gamma + \\delta$$

This is where the case matters. The radius lies between the two sides at every vertex exactly when the centre is inside the quadrilateral; if $O$ were outside, one of these sums would be a difference instead. Notice the pattern: each letter appears in two neighbouring angles, and opposite angles share no letter.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Angle Sum',
          content: `A quadrilateral can be cut into two triangles by a diagonal, so its angles add up to $2 \\cdot 180° = 360°$; this is the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum) with $n = 4$. Adding the four expressions from the previous step,

$$\\angle A + \\angle B + \\angle C + \\angle D = 2(\\alpha + \\beta + \\gamma + \\delta) = 360°$$

so $\\alpha + \\beta + \\gamma + \\delta = 180°$. The four base angles, one from each isosceles triangle, together make a straight angle.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Now collect opposite angles: $\\angle A + \\angle C = (\\delta + \\alpha) + (\\beta + \\gamma)$, which is all four letters once, so it equals $180°$. In the same way $\\angle B + \\angle D = (\\alpha + \\beta) + (\\gamma + \\delta) = 180°$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given circle, the construction with equal radii, the isosceles theorem, an addition, the polygon angle sum, and an addition once more.

The other proof, which needs no case split, uses the inscribed angle theorem. The angle at $A$ stands on the arc $BCD$ and the angle at $C$ stands on the arc $DAB$; each is half the central angle on its arc, and the two central angles together make the full turn, $360°$. So $\\angle A + \\angle C = \\tfrac{1}{2} \\cdot 360° = 180°$. One of the two central angles may be larger than a straight angle, which the player does not draw; that is why this page shows the radii proof instead.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide any of $B$, $C$, $D$ round the circle: the four isosceles triangles change shape, the eight marked angles change size, and the readout keeps both sums at $180°$. Slide $C$ towards $B$ and watch $\\beta$ shrink while $\\gamma$ grows; the angle at $C$ changes, and the angle at $A$ changes by the same amount the other way. Drag $A$ to change the radius, $O$ to move the circle.

The player keeps the figure in the case the proof covers: a drag that would carry a vertex past its neighbour, or push the centre outside the quadrilateral, is refused. In that refused case the theorem is still true, as the second proof shows, but one of the four sums in The Angles of the Quadrilateral would become a difference.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The converse.** If a quadrilateral has a pair of opposite angles adding up to $180°$, it is cyclic: a circle passes through all four vertices. This is the usual way to prove that four points lie on a circle.
• **The exterior angle.** Extend a side of a cyclic quadrilateral; the exterior angle at that vertex equals the interior angle at the opposite vertex, since both are supplementary to the same angle.
• **Rectangles and isosceles trapezoids** are cyclic; a parallelogram is cyclic only if it is a rectangle, and a rhombus only if it is a square.
• **Ptolemy's theorem.** In a cyclic quadrilateral the product of the diagonals equals the sum of the products of opposite sides, $AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$.
• **Thales again.** A rectangle inscribed in a circle has its diagonals as diameters, so each of its right angles stands on a diameter, as [Thales' theorem](!/geometry/visual-tools/thales-theorem) says.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is a cyclic quadrilateral?',
          answer: 'A quadrilateral whose four vertices all lie on one circle. Its opposite angles add up to 180°, and conversely a quadrilateral with a pair of supplementary opposite angles is cyclic.'
        },
        obj2: {
          question: 'Why do opposite angles add up to 180°?',
          answer: 'Joining the centre to the vertices gives four isosceles triangles with base angles α, β, γ, δ. Each angle of the quadrilateral is a sum of two of these, all four angles together make 360°, so α + β + γ + δ = 180°, and each pair of opposite angles contains all four letters once.'
        },
        obj3: {
          question: 'Does the proof work when the centre is outside the quadrilateral?',
          answer: 'The radii proof shown needs the centre inside, so that each radius lies between the two sides at its vertex. When the centre is outside, the inscribed angle theorem gives the result directly: the two opposite angles are halves of two central angles that add up to a full turn.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Cyclic Quadrilateral Proof Visualizer",
          "description": "Step-by-step interactive proof that opposite angles of a quadrilateral inscribed in a circle add up to 180°, with vertices that slide round the circle.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/cyclic-quadrilateral",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Opposite Angles of a Cyclic Quadrilateral", "item": "https://www.learnmathclass.com/geometry/visual-tools/cyclic-quadrilateral" }
          ]
        }
      }
    },
    'tangent-radius': {
      proofKey: 'tangentRadius',
      title: 'Tangent Perpendicular to Radius Proof | Circle Tangent Theorem Step by Step',
      description: 'Watch the proof that a tangent to a circle is perpendicular to the radius at the point of contact, step by step by contradiction with two congruent right triangles, then tilt the supposed line and watch the second crossing point.',
      h1Title: 'The Tangent Is Perpendicular to the Radius',
      url: '/geometry/visual-tools/tangent-radius',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="46" r="24" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><line x1="8" y1="22" x2="72" y2="22" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="46" x2="40" y2="22" stroke="#B5D4F4" stroke-width="1.2"/><line x1="14" y1="12" x2="70" y2="36" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><path d="M 40 29 L 47 29 L 47 22" fill="none" stroke="#FAC775" stroke-width="1.3"/><circle cx="40" cy="22" r="2.2" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><circle cx="40" cy="46" r="1.8" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">OT &#8869; &#8467;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Tangent Perpendicular to Radius Proof',
      keywords: [
        'tangent perpendicular to radius',
        'tangent radius theorem',
        'circle tangent proof',
        'tangent line theorem',
        'point of tangency',
        'euclid III.18',
        'proof by contradiction',
        'circle theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag $G$ to tilt the supposed line and watch its second crossing point slide into $T$ only when the angle reaches $90°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A line is a tangent to a circle if it meets the circle at exactly one point, the point of contact. The theorem, Proposition 18 of Book III of Euclid's Elements, says that at the point of contact the tangent is perpendicular to the radius:

$$OT \\perp \\ell$$

where $O$ is the centre, $T$ the point of contact and $\\ell$ the tangent. It is the fact behind every tangent construction and every "angle between tangent and radius is $90°$" step in circle problems.

The proof is by contradiction: it shows that any line through $T$ making an angle other than $90°$ with $OT$ meets the circle a second time, so it cannot be the tangent. The player draws such a line, $\\ell'$, through $T$ and a draggable point $G$, beside the real tangent $\\ell$, and finds the second crossing. The readout under the canvas shows the angle $\\varphi$ between $OT$ and $\\ell'$ in [degrees](!/trigonometry/degrees-radians#1), and whether $\\ell'$ meets the circle once or twice.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Suppose It Were Not',
          content: `Suppose a line could touch the circle at $T$ while making an angle $\\varphi \\neq 90°$ with the radius $OT$. The dashed line $\\ell'$ through $T$ and $G$ is a line of that kind; the player marks $\\varphi$ at $T$. The claim to be refuted is that $\\ell'$ meets the circle only at $T$.

This is the shape of every proof by contradiction: assume the opposite of what is to be shown, follow it to something impossible, and conclude that the assumption was false. Here the impossible thing will be a second point of $\\ell'$ on the circle. Nothing is assumed about the size of $\\varphi$ except that it is not a right angle, which is why you can drag $G$ anywhere off the line $OT$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Perpendicular and the Mirror Point',
          content: `Drop the perpendicular from $O$ to $\\ell'$ and call its foot $F$. Since $\\varphi \\neq 90°$, the perpendicular from $O$ is not $OT$ itself, so $F$ is a different point of $\\ell'$ from $T$. In the player $F$ is hollow: it is built from $O$, $T$ and $G$ and follows them.

Now mirror $T$ across $F$: on $\\ell'$, on the far side of $F$, mark $T'$ with $FT' = FT$ (one tick each). This is the construction of the proof, and it is the same move as in the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) proof, where a point was reflected across the foot of the perpendicular; the reflection produces a second triangle that is a copy of the first.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Two Congruent Triangles',
          content: `Look at the triangles $OFT$ and $OFT'$. They share the side $OF$; $FT = FT'$ by construction; and the angles at $F$, between those two sides, are both right angles, because $OF$ is perpendicular to $\\ell'$. Two sides and the included angle are equal, so the triangles are congruent by side-angle-side.

Congruent triangles have equal third sides: $OT' = OT$. The player fills the two triangles in two colours and draws $OT'$. Everything so far has been honest geometry; the contradiction comes from what $OT' = OT$ means.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'A Second Common Point',
          content: `$OT$ is a radius, so $OT' = OT = r$ says that $T'$ is at distance $r$ from the centre, that is, $T'$ lies on the circle (two ticks each). But $T'$ also lies on $\\ell'$, and $T' \\neq T$ because $F$ lies strictly between them. So $\\ell'$ meets the circle at two different points, $T$ and $T'$: it cuts the circle like a chord's line, it does not touch it.

That contradicts the supposition that $\\ell'$ is a tangent. The only assumption made was $\\varphi \\neq 90°$, so that assumption is false.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Every line through $T$ other than the perpendicular to $OT$ meets the circle a second time; the tangent $\\ell$ meets it only at $T$; so the tangent is the perpendicular, $OT \\perp \\ell$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given tangent, a supposition, a construction, side-angle-side congruence, the contradiction, and the conclusion.

A second proof uses the [perpendicular is shortest](!/geometry/visual-tools/perpendicular-shortest) page instead of congruence: if $F \\neq T$ then $OF < OT = r$, so $F$ is inside the circle, and a line through an interior point must leave the circle on both sides, crossing it twice. Both proofs turn on the same picture: the foot of the perpendicular from the centre is the one point of the line closest to $O$, and a tangent has exactly one point at distance $r$.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $G$ and watch $\\varphi$, $F$ and $T'$ change together. The farther $\\varphi$ is from $90°$, the farther $T'$ sits from $T$ along $\\ell'$. Bring $G$ towards the tangent $\\ell$: $\\varphi$ grows towards $90°$, $F$ slides towards $T$, and $T'$ closes in on $T$ from the other side; at exactly $90°$ the three points coincide, the readout reports one common point, and $\\ell'$ has become the tangent. That is the theorem seen the other way round.

Drag $T$ to move the point of contact (and with it the radius), or $O$ to move the circle. A drag that puts $G$ on the line $OT$, or too close to $T$, is refused, since then $\\ell'$ would not be defined.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The converse.** The line through $T$ perpendicular to $OT$ is the tangent at $T$ (Euclid III.16): it is how a tangent is drawn with ruler and compass.
• **Distance to a tangent.** The distance from the centre to any tangent is exactly $r$; a line at distance less than $r$ cuts the circle, at distance more than $r$ misses it.
• **Two tangents from a point.** From a point outside the circle the two tangent segments are equal, since the two right triangles they make with the centre share the hypotenuse and have equal legs $r$.
• **Tangent and chord.** The angle between a tangent and a chord through the point of contact equals the [inscribed angle](!/geometry/visual-tools/inscribed-angle) on the other side of the chord.
• **Thales' circle again.** The tangents from a point $P$ touch the circle at the two points where the circle on diameter $OP$ cuts it, because the angle at each point of contact is right, as [Thales' theorem](!/geometry/visual-tools/thales-theorem) requires.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why is a tangent perpendicular to the radius?',
          answer: 'Any line through the point of contact that is not perpendicular to the radius meets the circle a second time: mirroring the point of contact across the foot of the perpendicular from the centre gives another point at distance r. A tangent has only one point on the circle, so it must be the perpendicular.'
        },
        obj2: {
          question: 'What is a proof by contradiction?',
          answer: 'You assume the opposite of what you want to prove and show that it leads to something impossible. Here the assumption is that the angle between tangent and radius is not 90°, and the impossible consequence is a tangent with two points on the circle.'
        },
        obj3: {
          question: 'Is the perpendicular through the point of contact always the tangent?',
          answer: 'Yes, that is the converse (Euclid III.16): every other point of that line is farther than r from the centre, so the line meets the circle only at the point of contact.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Tangent Perpendicular to Radius Proof Visualizer",
          "description": "Step-by-step interactive proof by contradiction that a tangent to a circle is perpendicular to the radius at the point of contact, with a draggable supposed line.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/tangent-radius",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Tangent Is Perpendicular to the Radius", "item": "https://www.learnmathclass.com/geometry/visual-tools/tangent-radius" }
          ]
        }
      }
    },
    'two-tangents': {
      proofKey: 'twoTangents',
      title: 'Two Tangents from a Point Are Equal | Circle Tangent Proof Step by Step',
      description: 'Watch the proof that the two tangent segments from an outside point to a circle are equal, step by step with the tangent-radius theorem and Pythagoras in two right triangles, then drag the point and watch the tangents swing.',
      h1Title: 'Two Tangents from a Point Are Equal',
      url: '/geometry/visual-tools/two-tangents',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="40" r="18" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><polygon points="30,40 39,24.4 72,40" fill="#FAC775" fill-opacity="0.35" stroke="none"/><polygon points="30,40 39,55.6 72,40" fill="#85B7EB" fill-opacity="0.35" stroke="none"/><line x1="72" y1="40" x2="39" y2="24.4" stroke="#E6F1FB" stroke-width="1.4"/><line x1="72" y1="40" x2="39" y2="55.6" stroke="#E6F1FB" stroke-width="1.4"/><line x1="30" y1="40" x2="39" y2="24.4" stroke="#B5D4F4" stroke-width="1.1"/><line x1="30" y1="40" x2="39" y2="55.6" stroke="#B5D4F4" stroke-width="1.1"/><line x1="30" y1="40" x2="72" y2="40" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><circle cx="72" cy="40" r="2.2" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><circle cx="30" cy="40" r="1.8" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PA = PB</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Two Tangents from a Point Proof',
      keywords: [
        'two tangents from a point',
        'tangent segments equal',
        'equal tangents theorem',
        'tangents from an external point',
        'circle tangent proof',
        'circle theorems',
        'tangent length',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the outside point and watch the two tangents swing round the circle while the readout keeps them equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `From a point $P$ outside a circle there are exactly two tangents to the circle, touching it at two points $A$ and $B$. The theorem says that the two tangent segments, from $P$ to the points of contact, are equal:

$$PA = PB$$

It is the fact behind "tangent lengths" in every problem about a circle inscribed in a triangle or a quadrilateral, and it is used so often that it is rarely proved. The proof here is short and leans on two earlier pages: the [tangent is perpendicular to the radius](!/geometry/visual-tools/tangent-radius), and the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem).

In the player the points of contact $A$ and $B$ are hollow: they are computed from $P$ and the circle, so they swing round as $P$ moves. The readout under the canvas shows $PA$ and $PB$ in the frame's own units, with $OP$ and the radius $r$ beside them, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Joining the Centre',
          content: `The construction joins the centre $O$ to the three points in sight: to the points of contact, giving the radii $OA$ and $OB$, and to $P$, giving the segment $OP$. The two radii are equal, $OA = OB = r$, and the player marks them with one tick each.

The three new segments cut the figure into two triangles, $OAP$ and $OBP$. They share the side $OP$, and each has a radius for its second side. The proof will show that the third sides, $PA$ and $PB$, are forced to be equal too.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Two Right Angles',
          content: `A tangent is perpendicular to the radius drawn to its point of contact. That was the [previous page's theorem](!/geometry/visual-tools/tangent-radius), and it applies twice here: $OA \\perp PA$, so the angle at $A$ is right, and $OB \\perp PB$, so the angle at $B$ is right.

The two triangles are therefore right triangles, each with its right angle at the point of contact and with $OP$ as the [hypotenuse](!/trigonometry/right-triangle#1). Both triangles have the same hypotenuse, since $OP$ is one segment; and both have a leg equal to $r$. Two right triangles with equal hypotenuses and one pair of equal legs are congruent, and that is in fact the shortest way to finish, but the Pythagorean theorem does the same job with numbers, and this page uses it.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Pythagoras Twice',
          content: `In the right triangle $OAP$ the hypotenuse is $OP$, so the Pythagorean theorem gives $OP^2 = OA^2 + PA^2$, that is

$$PA^2 = OP^2 - OA^2$$

In the right triangle $OBP$ the hypotenuse is again $OP$, so in the same way

$$PB^2 = OP^2 - OB^2$$

The player fills the two triangles in two colours. The two formulas have the same shape; what remains is to see that their right-hand sides are the same number.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Same Numbers',
          content: `$OA$ and $OB$ are both radii, so $OA = OB = r$ and $OA^2 = OB^2 = r^2$. And $OP$ is literally the same segment in both formulas. So

$$PA^2 = OP^2 - r^2 = PB^2$$

The squares of the two tangent lengths are equal. Notice what the formula says on its own: the square of the tangent length depends only on how far $P$ is from the centre, $OP^2 - r^2$, a quantity called the power of the point $P$ with respect to the circle.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `From $PA^2 = PB^2$ to $PA = PB$ is one step: lengths are positive, and two positive numbers with equal squares are equal. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given tangents, a construction, the tangent-radius theorem, the Pythagorean theorem, equal radii, and the positive square root.

The congruence route gives a little more. Since the right triangles $OAP$ and $OBP$ are congruent, their angles at $P$ are equal, so $OP$ bisects the angle between the two tangents; and their angles at $O$ are equal, so $OP$ also bisects the angle $AOB$ at the centre. Both facts follow from $PA = PB$ as well, by the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem applied to the triangle $PAB$ and the symmetry of the figure about $OP$.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $P$ round the circle: the points of contact $A$ and $B$ slide along the circle, the two tangents swing with them, and the readout keeps $PA$ and $PB$ equal to the last digit. Pull $P$ away from the circle and the tangents grow long and nearly parallel; bring it close and they shorten, with $A$ and $B$ closing in on the point of the circle nearest to $P$. Drag $O$ to move the circle instead.

A drag that would bring $P$ onto or inside the circle is refused, since then there are no tangents from $P$; so is one that would carry $P$ or $O$ out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Tangent lengths.** For a circle inscribed in a triangle, the two tangent segments from each vertex are equal, which gives the lengths $s - a$, $s - b$, $s - c$ from the vertices to the points of contact, with $s$ the half perimeter.
• **Tangential quadrilaterals.** A quadrilateral with an inscribed circle has $AB + CD = BC + DA$, because each side is a sum of two tangent lengths and each tangent length is counted once on each side of the equation.
• **The angle bisector.** The line from an outside point to the centre bisects the angle between the two tangents, and is the perpendicular bisector of the chord of contact $AB$.
• **Power of a point.** $PA^2 = OP^2 - r^2$ does not depend on which tangent is used; the same number equals $PX \\cdot PY$ for any line through $P$ cutting the circle at $X$ and $Y$.
• **Drawing the tangents.** The points of contact are where the circle on diameter $OP$ meets the given circle, since the angle at each point of contact is right, as [Thales' theorem](!/geometry/visual-tools/thales-theorem) requires.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why are the two tangents from a point equal?',
          answer: 'Joining the centre gives two right triangles with the same hypotenuse OP and a radius as one leg each. By the Pythagorean theorem both tangent lengths equal the square root of OP² − r², so they are equal.'
        },
        obj2: {
          question: 'How many tangents pass through a point?',
          answer: 'Two if the point is outside the circle, one if it is on the circle, none if it is inside. The player refuses to move P onto or into the circle for that reason.'
        },
        obj3: {
          question: 'What is the length of a tangent from a point?',
          answer: 'The square root of OP² − r², where OP is the distance from the point to the centre and r the radius. The quantity OP² − r² is the power of the point with respect to the circle.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Two Tangents from a Point Proof Visualizer",
          "description": "Step-by-step interactive proof that the two tangent segments from an outside point to a circle are equal, with a draggable outside point.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/two-tangents",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Two Tangents from a Point Are Equal", "item": "https://www.learnmathclass.com/geometry/visual-tools/two-tangents" }
          ]
        }
      }
    },
    'chord-bisector': {
      proofKey: 'chordBisector',
      title: 'Perpendicular from the Centre Bisects a Chord | Circle Chord Proof Step by Step',
      description: 'Watch the proof that the perpendicular from the centre of a circle to a chord cuts the chord in half, step by step with two right triangles and Pythagoras, then slide the chord round the circle.',
      h1Title: 'The Perpendicular from the Centre Bisects a Chord',
      url: '/geometry/visual-tools/chord-bisector',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="42" r="26" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><polygon points="40,42 40,24 18,24" fill="#FAC775" fill-opacity="0.35" stroke="none"/><polygon points="40,42 40,24 62,24" fill="#85B7EB" fill-opacity="0.35" stroke="none"/><line x1="18" y1="24" x2="62" y2="24" stroke="#E6F1FB" stroke-width="1.5"/><line x1="40" y1="42" x2="40" y2="24" stroke="#B5D4F4" stroke-width="1.2"/><line x1="40" y1="42" x2="18" y2="24" stroke="#B5D4F4" stroke-width="1"/><line x1="40" y1="42" x2="62" y2="24" stroke="#B5D4F4" stroke-width="1"/><path d="M 40 29 L 45 29 L 45 24" fill="none" stroke="#FAC775" stroke-width="1.2"/><circle cx="40" cy="24" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="40" cy="42" r="1.8" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AM = MB</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Perpendicular Bisects the Chord Proof',
      keywords: [
        'perpendicular from centre bisects chord',
        'chord bisector theorem',
        'perpendicular bisector of a chord',
        'circle chord proof',
        'euclid III.3',
        'chord midpoint',
        'circle theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the ends of the chord round the circle and watch the foot of the perpendicular stay at the midpoint. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A chord is a segment joining two points of a circle. Drop the perpendicular from the centre $O$ onto a chord $AB$ and call its foot $M$. The theorem, Proposition 3 of Book III of Euclid's Elements, says that the perpendicular bisects the chord:

$$AM = MB$$

The converse holds too: the line from the centre to the midpoint of a chord is perpendicular to it. Together they say that the perpendicular bisector of any chord passes through the centre, which is how the centre of a circle is found.

The proof on this page is the same argument as on the [two tangents](!/geometry/visual-tools/two-tangents) page in a new setting: two right triangles with equal hypotenuses and a common leg, and the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) applied in each. In the player $M$ is hollow, since it is computed from $O$, $A$ and $B$; the readout under the canvas shows $AM$ and $MB$ in the frame's own units, with $OM$ beside them, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Joining the Centre',
          content: `The construction joins the centre to the two ends of the chord. $OA$ and $OB$ are radii, so they are equal, $OA = OB = r$; the player marks them with one tick each. The figure is now the isosceles triangle $OAB$ with the perpendicular $OM$ dropped from its apex onto its base.

The perpendicular cuts the isosceles triangle into two triangles, $OMA$ and $OMB$, which share the side $OM$. The proof shows that they are mirror images of each other, and in particular that their bases $AM$ and $MB$ are equal.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Two Right Triangles',
          content: `$OM$ is perpendicular to $AB$, so both angles at $M$ are right angles. The triangles $OMA$ and $OMB$ are therefore right triangles: $OMA$ has its right angle at $M$, legs $OM$ and $AM$, and [hypotenuse](!/trigonometry/right-triangle#1) $OA$; $OMB$ has its right angle at $M$, legs $OM$ and $MB$, and hypotenuse $OB$. The player fills them in two colours.

The two triangles have equal hypotenuses, both radii, and share the leg $OM$. Two right triangles with equal hypotenuses and one pair of equal legs are congruent, and that is the shortest way to finish; the next step gets the same result with the Pythagorean theorem, which keeps every step on a page of its own.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Pythagoras Twice',
          content: `In the right triangle $OMA$ the Pythagorean theorem gives $OA^2 = OM^2 + AM^2$, so

$$AM^2 = OA^2 - OM^2$$

In the right triangle $OMB$ it gives $OB^2 = OM^2 + MB^2$, so

$$MB^2 = OB^2 - OM^2$$

Two formulas of the same shape, one for each half of the chord. What remains is to compare their right-hand sides.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Same Numbers',
          content: `$OA$ and $OB$ are both radii, so $OA^2 = OB^2 = r^2$; and $OM$ is the same segment in both formulas. So

$$AM^2 = r^2 - OM^2 = MB^2$$

The squares of the two halves are equal. The formula also gives the length of the chord outright: each half is $\\sqrt{r^2 - d^2}$, where $d = OM$ is the distance from the centre to the chord, so the chord has length $2\\sqrt{r^2 - d^2}$. The nearer a chord is to the centre, the longer it is, and a chord through the centre, a diameter, is the longest of all.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `From $AM^2 = MB^2$ to $AM = MB$ is one step: lengths are positive, and two positive numbers with equal squares are equal. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given chord, a construction, the right angles, the Pythagorean theorem, equal radii, and the positive square root.

Seen differently, the theorem is a fact about isosceles triangles: $OAB$ is isosceles with apex $O$, and the perpendicular from the apex to the base is the axis of symmetry of the triangle, so it hits the base at its midpoint. The [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) page builds its triangle from exactly this picture, with the apex on the perpendicular bisector of the base. The converse of this page's theorem, that the line from $O$ to the midpoint is perpendicular, follows from the same symmetry: triangles $OMA$ and $OMB$ then have three pairs of equal sides, so the angles at $M$ are equal, and two equal angles on a straight line are right angles.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $A$ or $B$ round the circle: the chord tilts and changes length, the foot $M$ moves with it, and the readout keeps $AM = MB$ to the last digit. Bring $A$ and $B$ close together and the chord is short and far from the centre, with $OM$ nearly a radius; pull them apart and the chord grows, $OM$ shrinks, and as the chord approaches a diameter $M$ approaches $O$. Drag $O$ to move the circle.

A drag that would take the chord through the centre, or shrink it to a point, is refused: with $M = O$ the two triangles collapse into the two halves of a diameter, and the theorem is still true but there is nothing left to draw.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Finding the centre.** The perpendicular bisector of every chord passes through the centre, so the centre is where the perpendicular bisectors of two chords meet (Euclid III.1). The same construction draws the circle through three given points.
• **Equal chords.** Chords at the same distance from the centre are equal, and equal chords are equally distant from the centre, since each half is $\\sqrt{r^2 - d^2}$ (Euclid III.14).
• **Chord length.** A chord at distance $d$ from the centre has length $2\\sqrt{r^2 - d^2}$; the distance $d$ is the length of the perpendicular, which is the shortest segment from the centre to the chord's line, as the [perpendicular is shortest](!/geometry/visual-tools/perpendicular-shortest) page shows.
• **The chord of contact.** For two tangents from an outside point $P$, the line $OP$ is perpendicular to the chord $AB$ joining the points of contact and bisects it, by this theorem applied to the chord $AB$.
• **Arcs.** The perpendicular from the centre also bisects the arc cut off by the chord, since it is the axis of symmetry of the whole figure.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why does the perpendicular from the centre bisect a chord?',
          answer: 'Joining the centre to the ends of the chord gives two right triangles with equal hypotenuses, the radii, and a common leg, the perpendicular. By the Pythagorean theorem both halves of the chord equal the square root of r² − OM², so they are equal.'
        },
        obj2: {
          question: 'Does the perpendicular bisector of a chord pass through the centre?',
          answer: 'Yes. The perpendicular from the centre bisects the chord, so the centre lies on the perpendicular bisector. That is how the centre of a circle is found: draw two chords and intersect their perpendicular bisectors.'
        },
        obj3: {
          question: 'How long is a chord at distance d from the centre?',
          answer: '2√(r² − d²). Each half of the chord is a leg of a right triangle with hypotenuse r and other leg d.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Perpendicular Bisects the Chord Proof Visualizer",
          "description": "Step-by-step interactive proof that the perpendicular from the centre of a circle to a chord bisects the chord, with chord ends that slide round the circle.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/chord-bisector",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Perpendicular from the Centre Bisects a Chord", "item": "https://www.learnmathclass.com/geometry/visual-tools/chord-bisector" }
          ]
        }
      }
    },
    'parallelogram-sides': {
      proofKey: 'parallelogramSides',
      title: 'Parallelogram Opposite Sides Are Equal | Proof Step by Step',
      description: 'Watch the proof that opposite sides of a parallelogram are equal, step by step: a diagonal, two pairs of alternate angles, and two congruent triangles. Then drag the vertices and watch the sides stay equal.',
      h1Title: 'Opposite Sides of a Parallelogram Are Equal',
      url: '/geometry/visual-tools/parallelogram-sides',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,58 50,58 70,22 30,22" fill="#FAC775" fill-opacity="0.35" stroke="none"/><polygon points="10,58 70,22 30,22" fill="#85B7EB" fill-opacity="0.35" stroke="none"/><polygon points="10,58 50,58 70,22 30,22" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="10" y1="58" x2="70" y2="22" stroke="#B5D4F4" stroke-width="1.1" stroke-dasharray="3 2"/><path d="M 27 58 L 32 55 L 27 52" fill="none" stroke="#B5D4F4" stroke-width="1"/><path d="M 47 22 L 52 25 L 47 28" fill="none" stroke="#B5D4F4" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AB = CD, AD = BC</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Parallelogram Opposite Sides Proof',
      keywords: [
        'parallelogram opposite sides equal',
        'parallelogram properties proof',
        'parallelogram opposite angles equal',
        'diagonal of a parallelogram',
        'euclid I.34',
        'ASA congruence',
        'alternate angles',
        'quadrilateral theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the fourth one follow so that the figure stays a parallelogram and the opposite sides stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A parallelogram is a quadrilateral whose opposite sides are parallel: in $ABCD$, $AB \\parallel DC$ and $AD \\parallel BC$. That is the whole definition; nothing is said about lengths or angles. The theorem, Proposition 34 of Book I of Euclid's Elements, says that the lengths and angles follow:

$$AB = CD, \\quad AD = BC, \\quad \\angle A = \\angle C, \\quad \\angle B = \\angle D$$

opposite sides are equal and opposite angles are equal. Euclid also adds that a diagonal bisects the area, which is the same picture.

The proof is the first on this section's quadrilateral pages and sets the pattern for the others: draw a diagonal, find two congruent triangles, read off the equal parts. The congruence comes from the [parallel lines](!/geometry/visual-tools/parallel-lines) page, since a diagonal is a transversal of both pairs of parallel sides. In the player $C$ is hollow: it is computed as the fourth vertex that makes $ABCD$ a parallelogram, so dragging any of $A$, $B$, $D$ moves it too. The readout under the canvas shows the four side lengths in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Diagonal',
          content: `The construction is one segment: the diagonal $BD$. It cuts the parallelogram into two triangles, $ABD$ in one colour and $CDB$ in the other, which share the side $BD$. The proof will show that these two triangles are congruent; everything else is reading off corresponding parts.

The diagonal does a second job. It crosses the parallel sides $AB$ and $DC$, and it also crosses the parallel sides $AD$ and $BC$: it is a transversal of both pairs of parallels at once. That gives two pairs of alternate angles, one at each end of the diagonal, which is exactly what a congruence by angles needs.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Alternate Angles Once',
          content: `Take the first pair of parallels, $AB \\parallel DC$, with the transversal $BD$. The angle $\\angle ABD$ at $B$ and the angle $\\angle CDB$ at $D$ lie on opposite sides of the transversal and between the two parallels: they are alternate angles. By the [parallel lines theorem](!/geometry/visual-tools/parallel-lines), alternate angles on parallel lines are equal:

$$\\angle ABD = \\angle CDB = \\alpha$$

The player draws both in the same colour. One is an angle of triangle $ABD$ at $B$; the other is an angle of triangle $CDB$ at $D$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Alternate Angles Twice',
          content: `Now the second pair of parallels, $AD \\parallel BC$, with the same transversal $BD$. The angles $\\angle ADB$ at $D$ and $\\angle CBD$ at $B$ are alternate angles on this pair, so they are equal as well:

$$\\angle ADB = \\angle CBD = \\beta$$

At each end of the diagonal there are now two marked angles, $\\alpha$ and $\\beta$, and together they make up the angle of the parallelogram there: $\\angle B = \\alpha + \\beta$ and $\\angle D = \\beta + \\alpha$. That already shows that the angles at $B$ and at $D$ are equal.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Two Congruent Triangles',
          content: `Compare the two triangles along their common side. In triangle $ABD$ the side $BD$ lies between the angle $\\alpha$ at $B$ and the angle $\\beta$ at $D$. In triangle $CDB$ the same side $BD$ lies between the angle $\\alpha$ at $D$ and the angle $\\beta$ at $B$. Two angles and the side between them are equal, so the triangles are congruent by angle-side-angle, with the vertices matched $A \\leftrightarrow C$, $B \\leftrightarrow D$, $D \\leftrightarrow B$.

Why angle-side-angle is enough: once two angles of a triangle are fixed, the third is fixed by the [angle sum](!/geometry/visual-tools/triangle-angle-sum), and a triangle with a given side and the two angles at its ends can be drawn in only one way. The matching of vertices matters, because it tells which side corresponds to which.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Corresponding parts of congruent triangles are equal. With $A \\leftrightarrow C$, $B \\leftrightarrow D$, $D \\leftrightarrow B$, the side $AB$ corresponds to $CD$ and the side $AD$ corresponds to $CB$, so $AB = CD$ and $AD = BC$: opposite sides are equal. The angle at $A$ corresponds to the angle at $C$, so $\\angle A = \\angle C$; and $\\angle B = \\angle D = \\alpha + \\beta$ was seen already: opposite angles are equal. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given parallels, a construction, alternate angles twice, angle-side-angle congruence, and corresponding parts.

The same two triangles give Euclid's last clause, that the diagonal halves the parallelogram: congruent triangles have equal areas. The other diagonal, $AC$, does the same with triangles $ABC$ and $CDA$, which is what the next quadrilateral page, on the diagonals bisecting each other, starts from.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $D$ sideways: the parallelogram shears, the angles $\\alpha$ and $\\beta$ change, the diagonal tilts, and the readout keeps $AB = CD$ and $AD = BC$ to the last digit. Drag $D$ straight up or down and the figure gets taller or flatter. Drag $A$ or $B$ to change the base; $C$ follows in every case, since it is built as $D$ plus the vector from $A$ to $B$.

Make $D$ sit straight above $A$ and the parallelogram becomes a rectangle, with $\\alpha + \\beta = 90°$ at every vertex. A drag that would flatten the figure, putting $D$ on the line $AB$, is refused, as is one that would carry a vertex out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Opposite angles.** $\\angle A = \\angle C$ and $\\angle B = \\angle D$, from the same congruence; and neighbouring angles add up to $180°$, since all four add up to $360°$ by the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum).
• **The converse.** A quadrilateral with both pairs of opposite sides equal is a parallelogram: the diagonal gives two triangles congruent by side-side-side, and the equal alternate angles make the sides parallel.
• **Area.** A diagonal halves a parallelogram, so its area is twice a triangle's: base times height.
• **Special cases.** A rectangle, a rhombus and a square are parallelograms, so each has equal opposite sides; a rhombus is the case where all four sides are equal. A parallelogram inscribed in a circle must be a rectangle, by the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) theorem, since its equal opposite angles must add up to $180°$.
• **Vectors.** $C = D + (B - A)$ is the parallelogram rule for adding vectors: the sum of $\\vec{AB}$ and $\\vec{AD}$ is the diagonal $\\vec{AC}$.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why are opposite sides of a parallelogram equal?',
          answer: 'A diagonal cuts the parallelogram into two triangles that are congruent by angle-side-angle: the diagonal is a transversal of both pairs of parallel sides, so it makes two pairs of equal alternate angles, and it is a side of both triangles. Corresponding sides of the two triangles are the opposite sides of the parallelogram.'
        },
        obj2: {
          question: 'Are opposite angles of a parallelogram equal too?',
          answer: 'Yes. The same congruence matches the angle at A with the angle at C, and the angles at B and D are each made of the same two alternate angles α and β.'
        },
        obj3: {
          question: 'Is every quadrilateral with equal opposite sides a parallelogram?',
          answer: 'Yes, that is the converse: the diagonal gives two triangles congruent by side-side-side, their equal angles are alternate angles on the diagonal, and equal alternate angles mean the sides are parallel.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Parallelogram Opposite Sides Proof Visualizer",
          "description": "Step-by-step interactive proof that opposite sides and opposite angles of a parallelogram are equal, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/parallelogram-sides",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Opposite Sides of a Parallelogram Are Equal", "item": "https://www.learnmathclass.com/geometry/visual-tools/parallelogram-sides" }
          ]
        }
      }
    },
    'parallelogram-diagonals': {
      proofKey: 'parallelogramDiagonals',
      title: 'Diagonals of a Parallelogram Bisect Each Other | Proof Step by Step',
      description: 'Watch the proof that the diagonals of a parallelogram cut each other in half, step by step: equal opposite sides, two pairs of alternate angles, two congruent triangles. Then drag the vertices and watch the crossing point stay at both midpoints.',
      h1Title: 'The Diagonals of a Parallelogram Bisect Each Other',
      url: '/geometry/visual-tools/parallelogram-diagonals',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,58 50,58 70,22 30,22" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="10,58 50,58 40,40" fill="#FAC775" fill-opacity="0.45" stroke="none"/><polygon points="70,22 30,22 40,40" fill="#85B7EB" fill-opacity="0.45" stroke="none"/><line x1="10" y1="58" x2="70" y2="22" stroke="#B5D4F4" stroke-width="1.1"/><line x1="50" y1="58" x2="30" y2="22" stroke="#B5D4F4" stroke-width="1.1"/><circle cx="40" cy="40" r="2.2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AM = MC, BM = MD</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Parallelogram Diagonals Proof',
      keywords: [
        'diagonals of a parallelogram bisect each other',
        'parallelogram diagonals proof',
        'parallelogram properties',
        'diagonals midpoint',
        'ASA congruence',
        'alternate angles',
        'quadrilateral theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the crossing point of the diagonals stay at the midpoint of both. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `The two diagonals of a parallelogram $ABCD$ are $AC$ and $BD$. They cross at a point $M$ inside the figure, and the theorem says that $M$ is the midpoint of both:

$$AM = MC, \\qquad BM = MD$$

the diagonals bisect each other. It is the second basic property of a parallelogram, after the equal [opposite sides](!/geometry/visual-tools/parallelogram-sides), and the two are proved the same way, with a pair of congruent triangles made by alternate angles on a diagonal.

In the player $C$ and $M$ are hollow: $C$ is computed as the fourth vertex that makes $ABCD$ a parallelogram, and $M$ as the crossing point of the diagonals, so both follow when $A$, $B$ or $D$ is dragged. The readout under the canvas shows the four half-diagonals in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Opposite Sides Equal',
          content: `The diagonals cut the parallelogram into four triangles. The proof uses the two that sit on the parallel sides $AB$ and $DC$: triangle $ABM$ at the bottom and triangle $CDM$ at the top, filled in two colours. They touch only at $M$, and they look like reflections of each other through that point; the proof shows that they are congruent.

The first fact needed is a side: $AB = CD$, because opposite sides of a parallelogram are equal, which is the [previous page's theorem](!/geometry/visual-tools/parallelogram-sides). Those two sides are the bases of the two triangles, and the congruence will be built on them.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Alternate Angles Once',
          content: `The diagonal $AC$ crosses the parallel sides $AB$ and $DC$: it is a transversal of them. The angle $\\angle BAC$ at $A$ and the angle $\\angle DCA$ at $C$ lie on opposite sides of the transversal, between the parallels, so they are alternate angles, and by the [parallel lines theorem](!/geometry/visual-tools/parallel-lines) they are equal:

$$\\angle BAC = \\angle DCA = \\alpha$$

In the triangles, $\\alpha$ is the angle of $ABM$ at $A$ and the angle of $CDM$ at $C$; both sit at one end of the base.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Alternate Angles Twice',
          content: `The other diagonal, $BD$, is a transversal of the same two parallels $AB$ and $DC$. The angles $\\angle ABD$ at $B$ and $\\angle CDB$ at $D$ are alternate angles on it, so they are equal as well:

$$\\angle ABD = \\angle CDB = \\beta$$

Now $\\beta$ is the angle of triangle $ABM$ at $B$ and the angle of triangle $CDM$ at $D$, at the other end of each base. Only the one pair of parallels, $AB \\parallel DC$, has been used; the second pair, $AD \\parallel BC$, was needed on the previous page to get $AB = CD$, and it enters this proof only through that.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Two Congruent Triangles',
          content: `Put the three facts together. In triangle $ABM$ the base $AB$ lies between the angle $\\alpha$ at $A$ and the angle $\\beta$ at $B$. In triangle $CDM$ the base $CD$ lies between the angle $\\alpha$ at $C$ and the angle $\\beta$ at $D$. The bases are equal and so are the angles at their ends, so the triangles are congruent by angle-side-angle, with the vertices matched $A \\leftrightarrow C$, $B \\leftrightarrow D$, $M \\leftrightarrow M$.

As on the previous page, angle-side-angle works because two angles fix the third by the [angle sum](!/geometry/visual-tools/triangle-angle-sum), and a triangle with a given side and the two angles at its ends is determined. The matching of vertices is what makes the next step mechanical.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Corresponding sides of congruent triangles are equal. With $A \\leftrightarrow C$ and $M \\leftrightarrow M$, the side $AM$ corresponds to $CM$, so $AM = MC$; with $B \\leftrightarrow D$, the side $BM$ corresponds to $DM$, so $BM = MD$. The point $M$ is the midpoint of $AC$ and the midpoint of $BD$ at once. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given parallelogram, equal opposite sides, alternate angles twice, angle-side-angle congruence, and corresponding parts.

A slightly different route uses only one pair of alternate angles together with the [vertical angles](!/geometry/visual-tools/vertical-angles) at $M$: $\\angle AMB = \\angle CMD$, since they are opposite angles at the crossing, and with $\\alpha$ and $AB = CD$ that is angle-angle-side. The picture is the same; the choice is only which equal angles to point at.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $D$ sideways: the parallelogram shears, the diagonals change length and tilt, $M$ slides with them, and the readout keeps $AM = MC$ and $BM = MD$ to the last digit. Drag $D$ up or down to change the height, or $A$ and $B$ to change the base; $C$ and $M$ follow in every case.

Notice that the two diagonals are usually of different lengths, and that they usually cross at an angle other than $90°$. Both of those are properties of special parallelograms, equal diagonals of a rectangle and perpendicular diagonals of a rhombus, and both have their own pages; bisecting each other is what every parallelogram does. A drag that would flatten the figure, or carry a vertex out of the frame, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The converse.** If the diagonals of a quadrilateral bisect each other, it is a parallelogram: the triangles $ABM$ and $CDM$ are then congruent by side-angle-side, using the vertical angles at $M$, and the equal alternate angles make $AB \\parallel DC$.
• **A centre of symmetry.** Reflecting the parallelogram through $M$ sends $A$ to $C$ and $B$ to $D$, so the figure maps onto itself; $M$ is its centre.
• **Rectangles and rhombi.** A rectangle's diagonals are also equal, and a rhombus's are also perpendicular; a square has both. Each is the parallelogram property plus one more.
• **Vectors and coordinates.** The midpoint of $AC$ is $\\tfrac{1}{2}(A + C)$ and the midpoint of $BD$ is $\\tfrac{1}{2}(B + D)$; the theorem says these are the same point, which is the coordinate form of $A + C = B + D$, the parallelogram rule.
• **Locating the centre.** The centre of a parallelogram-shaped region, its balance point, is where the diagonals cross.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why do the diagonals of a parallelogram bisect each other?',
          answer: 'The two triangles on the parallel sides AB and DC are congruent by angle-side-angle: AB = CD, and each diagonal is a transversal of the parallels, giving equal alternate angles at the ends of those sides. Corresponding sides of the triangles are the halves of the diagonals.'
        },
        obj2: {
          question: 'Are the diagonals of a parallelogram equal?',
          answer: 'Not in general. They are equal only in a rectangle, and perpendicular only in a rhombus. Every parallelogram\'s diagonals bisect each other, which is this page\'s theorem.'
        },
        obj3: {
          question: 'If the diagonals of a quadrilateral bisect each other, is it a parallelogram?',
          answer: 'Yes, that is the converse. The triangles at the crossing point are congruent by side-angle-side with the vertical angles there, and their equal angles are alternate angles that make the sides parallel.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Parallelogram Diagonals Proof Visualizer",
          "description": "Step-by-step interactive proof that the diagonals of a parallelogram bisect each other, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/parallelogram-diagonals",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Diagonals of a Parallelogram Bisect Each Other", "item": "https://www.learnmathclass.com/geometry/visual-tools/parallelogram-diagonals" }
          ]
        }
      }
    },
    'rhombus-diagonals': {
      proofKey: 'rhombusDiagonals',
      title: 'Diagonals of a Rhombus Are Perpendicular | Proof Step by Step',
      description: 'Watch the proof that the diagonals of a rhombus meet at right angles, step by step: the diagonals bisect each other, two triangles congruent by SSS, equal angles in a linear pair. Then open and close the rhombus and watch the angle stay 90°.',
      h1Title: 'The Diagonals of a Rhombus Are Perpendicular',
      url: '/geometry/visual-tools/rhombus-diagonals',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,40 40,20 72,40 40,60" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="8,40 40,60 40,40" fill="#FAC775" fill-opacity="0.45" stroke="none"/><polygon points="8,40 40,20 40,40" fill="#85B7EB" fill-opacity="0.45" stroke="none"/><line x1="8" y1="40" x2="72" y2="40" stroke="#B5D4F4" stroke-width="1.1"/><line x1="40" y1="20" x2="40" y2="60" stroke="#B5D4F4" stroke-width="1.1"/><path d="M 34 40 L 34 34 L 40 34" fill="none" stroke="#FAC775" stroke-width="1.3"/><circle cx="40" cy="40" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AC &#8869; BD</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Rhombus Diagonals Proof',
      keywords: [
        'diagonals of a rhombus are perpendicular',
        'rhombus diagonals proof',
        'rhombus properties',
        'rhombus diagonals bisect angles',
        'SSS congruence',
        'linear pair',
        'quadrilateral theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then open and close the rhombus and watch its diagonals keep crossing at right angles. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A rhombus is a quadrilateral with four equal sides. Its two diagonals $AC$ and $BD$ cross at a point $M$, and the theorem says they cross at right angles:

$$AC \\perp BD$$

A second fact comes out of the same proof: each diagonal bisects the two angles of the rhombus at its ends, so $AM$ splits the angle at $A$ in half, and the four small triangles around $M$ are all congruent right triangles.

The proof builds on the two parallelogram pages. A rhombus is a parallelogram, so its diagonals bisect each other; that gives three equal pairs of sides in two triangles, and the rest is a straight angle cut into two equal parts. In the player $D$ slides on a circle about $A$ through $B$, which is what keeps $AD = AB$; $C$ and $M$ are computed. The readout under the canvas shows the two angles at $M$ in [degrees](!/trigonometry/degrees-radians#1), live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'A Rhombus Is a Parallelogram',
          content: `A rhombus has four equal sides, so in particular its opposite sides are equal, and a quadrilateral with both pairs of opposite sides equal is a parallelogram; that is the converse stated on the [opposite sides](!/geometry/visual-tools/parallelogram-sides) page. So everything true of parallelograms is true of the rhombus, and the fact needed here is that the [diagonals bisect each other](!/geometry/visual-tools/parallelogram-diagonals):

$$BM = MD$$

The player marks the two halves of $BD$ with two ticks each. Only this half of the parallelogram theorem is used; $AM = MC$ is true as well but plays no part.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Three Equal Sides',
          content: `Look at the two triangles on either side of the half-diagonal $AM$: triangle $ABM$ and triangle $ADM$, filled in two colours. Compare their sides. $AB = AD$, because they are sides of the rhombus. $BM = MD$, from the previous step. And $AM$ is a side of both. Three pairs of equal sides, so the triangles are congruent by side-side-side, with $A \\leftrightarrow A$, $B \\leftrightarrow D$, $M \\leftrightarrow M$.

Side-side-side is the congruence rule used on the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) page; it says a triangle is determined by its three sides. The picture here is in fact that page's picture: $ABD$ is isosceles with apex $A$, and $AM$ joins the apex to the midpoint of the base.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Equal Angles at M',
          content: `Corresponding parts of congruent triangles are equal, and with $M \\leftrightarrow M$ the angle of triangle $ABM$ at $M$ corresponds to the angle of triangle $ADM$ at $M$. So the two angles that $AM$ makes with the diagonal $BD$, one on the side of $B$ and one on the side of $D$, are equal; the player calls both $\\varphi$.

The same congruence matches the angle at $A$ in one triangle with the angle at $A$ in the other, so $AM$ bisects the angle $\\angle BAD$. That is the second fact promised in The Statement, and it comes for free.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'A Linear Pair',
          content: `The two equal angles $\\varphi$ sit on opposite sides of $AM$ along one straight line, the diagonal $BD$: $B$, $M$ and $D$ are collinear. Two angles that fill a straight angle in this way are a linear pair, and they are supplementary: they add up to $180°$, as on the [vertical angles](!/geometry/visual-tools/vertical-angles) page, where the same fact started the proof. So

$$\\varphi + \\varphi = 180°$$

Nothing about the rhombus is used in this step; it is true of any two angles on a straight line that share a ray.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `$2\\varphi = 180°$ gives $\\varphi = 90°$: the angle between the diagonals is a right angle, so $AC \\perp BD$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given rhombus, the parallelogram diagonals theorem, side-side-side congruence, corresponding parts, a linear pair, and a line of arithmetic.

The argument is the one that proves the axis of an isosceles triangle is perpendicular to its base: in triangle $ABD$, with $AB = AD$, the segment from the apex $A$ to the midpoint $M$ of the base is perpendicular to the base and bisects the apex angle. A rhombus is two such triangles back to back, $ABD$ and $CBD$, and the diagonal $AC$ is the axis of both.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $D$ round $A$: the rhombus opens or closes like a hinge, its diagonals change length in opposite directions, one growing as the other shrinks, and the readout keeps both angles at $M$ at $90°$. When the diagonals become equal the rhombus is a square. Drag $A$ or $B$ to move the whole figure or change the side.

$D$ cannot leave its circle, since that would make $AD \\neq AB$ and the figure would no longer be a rhombus. A drag that would flatten the rhombus, with $D$ on the line $AB$, or carry a vertex out of the frame, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The angle bisectors.** Each diagonal of a rhombus bisects the angles at its two ends; the diagonals are the axes of symmetry of the figure.
• **Area.** The diagonals cut the rhombus into four congruent right triangles, so its area is half the product of the diagonals, $\\tfrac{1}{2} d_1 d_2$.
• **Side and diagonals.** Each right triangle has legs $\\tfrac{1}{2}d_1$ and $\\tfrac{1}{2}d_2$ and the side of the rhombus as hypotenuse, so by the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) $s^2 = \\tfrac{1}{4}(d_1^2 + d_2^2)$.
• **The converse.** A parallelogram whose diagonals are perpendicular is a rhombus: the four right triangles round $M$ are congruent by side-angle-side, so the four sides are equal.
• **Kites.** In a kite, with two pairs of equal adjacent sides, one diagonal is still the perpendicular bisector of the other; the rhombus is the kite in which both diagonals have this property, and the square is the rhombus in which the diagonals are also equal.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why are the diagonals of a rhombus perpendicular?',
          answer: 'The diagonals bisect each other, so the two triangles on either side of a half-diagonal have three pairs of equal sides and are congruent. Their angles at the crossing point are equal and form a straight angle, so each is 90°.'
        },
        obj2: {
          question: 'Do the diagonals of a rhombus bisect its angles?',
          answer: 'Yes. The same congruence that gives the right angle matches the two half-angles at each vertex, so each diagonal bisects the angles at its ends.'
        },
        obj3: {
          question: 'Are the diagonals of a rhombus equal?',
          answer: 'Only when the rhombus is a square. In general one diagonal is longer than the other; they are always perpendicular and always bisect each other.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Rhombus Diagonals Proof Visualizer",
          "description": "Step-by-step interactive proof that the diagonals of a rhombus are perpendicular and bisect its angles, with a rhombus that opens and closes.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/rhombus-diagonals",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Diagonals of a Rhombus Are Perpendicular", "item": "https://www.learnmathclass.com/geometry/visual-tools/rhombus-diagonals" }
          ]
        }
      }
    },
    'rectangle-diagonals': {
      proofKey: 'rectangleDiagonals',
      title: 'Diagonals of a Rectangle Are Equal | Proof Step by Step',
      description: 'Watch the proof that the two diagonals of a rectangle have the same length, step by step: a rectangle is a parallelogram, opposite sides are equal, and two right triangles on the same base are congruent by SAS. Then change the height and watch the diagonals stay equal.',
      h1Title: 'The Diagonals of a Rectangle Are Equal',
      url: '/geometry/visual-tools/rectangle-diagonals',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="22" width="60" height="38" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="10,60 70,60 10,22" fill="#FAC775" fill-opacity="0.4" stroke="none"/><polygon points="10,60 70,60 70,22" fill="#85B7EB" fill-opacity="0.4" stroke="none"/><line x1="10" y1="60" x2="70" y2="22" stroke="#B5D4F4" stroke-width="1.1"/><line x1="70" y1="60" x2="10" y2="22" stroke="#B5D4F4" stroke-width="1.1"/><path d="M 10 54 L 16 54 L 16 60" fill="none" stroke="#FAC775" stroke-width="1.1"/><path d="M 70 54 L 64 54 L 64 60" fill="none" stroke="#FAC775" stroke-width="1.1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AC = BD</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Rectangle Diagonals Proof',
      keywords: [
        'diagonals of a rectangle are equal',
        'rectangle diagonals proof',
        'rectangle properties',
        'rectangle is a parallelogram',
        'SAS congruence',
        'co-interior angles',
        'quadrilateral theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then change the height and the base of the rectangle and watch its two diagonals stay the same length. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A rectangle is a quadrilateral with four right angles. Its diagonals $AC$ and $BD$ are, in general, not perpendicular and not the axes of any symmetry, but they are equal:

$$AC = BD$$

This is the property that singles out rectangles among parallelograms, just as perpendicular diagonals single out rhombi; a square has both. The proof is three short steps: a rectangle is a parallelogram, so its opposite sides are equal; the two diagonals cut off two right triangles on the same base; and those triangles are congruent by side-angle-side.

In the player $D$ slides up and down on the perpendicular to $AB$ at $A$, which is what keeps the angle at $A$ right, and $C$ is computed from it, so the figure is always a rectangle. The readout under the canvas shows both diagonals in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'A Rectangle Is a Parallelogram',
          content: `Nothing in the definition of a rectangle says that its opposite sides are parallel, so that has to be shown. Take the side $AD$ as a transversal of the lines $AB$ and $DC$. The angles at $A$ and at $D$ lie on the same side of the transversal, between the two lines: they are co-interior angles, and they add up to $90° + 90° = 180°$. Co-interior angles that are supplementary mean the lines are parallel, by the converse of the [parallel lines theorem](!/geometry/visual-tools/parallel-lines), so $AB \\parallel DC$. The same argument with $AB$ as the transversal gives $AD \\parallel BC$.

Both pairs of opposite sides are parallel: a rectangle is a parallelogram, and the player marks the two pairs with one and two chevrons. Everything proved about parallelograms now applies to it.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Opposite Sides Equal',
          content: `Opposite sides of a parallelogram are equal; that is the [first parallelogram page's theorem](!/geometry/visual-tools/parallelogram-sides). Applied to the rectangle it gives

$$AD = BC$$

the two sides that stand on the base $AB$ at its ends, marked with one tick each. It also gives $AB = DC$, which is not needed here. From now on the proof uses only the base $AB$, the two equal sides on it, and the right angles at $A$ and $B$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Two Triangles on the Base',
          content: `Each diagonal cuts the rectangle into two triangles; the proof takes one triangle from each cut, the two that stand on the base $AB$. The diagonal $BD$ cuts off the triangle $DAB$, with its right angle at $A$; the diagonal $AC$ cuts off the triangle $CBA$, with its right angle at $B$. The player fills them in two colours; they overlap on the middle of the rectangle, which is why the colours mix there.

The two triangles are mirror images of each other in the perpendicular bisector of $AB$. The proof does not use the mirror, but it is a good way to see in advance why the diagonals, which are the hypotenuses of these triangles, must be equal.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Side Angle Side',
          content: `Compare the two triangles along the base. In triangle $DAB$ the sides $AD$ and $AB$ meet at $A$ in a right angle. In triangle $CBA$ the sides $BC$ and $BA$ meet at $B$ in a right angle. Now $AD = BC$, $AB = BA$ is the same segment, and the included angles are both $90°$. Two sides and the angle between them are equal, so the triangles are congruent by side-angle-side, with the vertices matched $D \\leftrightarrow C$, $A \\leftrightarrow B$, $B \\leftrightarrow A$.

The matching swaps $A$ and $B$, which is the mirror of the previous section written out: the triangle $DAB$ read from $D$ is the triangle $CBA$ read from $C$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Corresponding sides of congruent triangles are equal. With $D \\leftrightarrow C$ and $B \\leftrightarrow A$, the side $DB$ corresponds to $CA$, so $BD = AC$: the diagonals are equal. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given right angles, co-interior angles, equal opposite sides, a construction, side-angle-side congruence, and corresponding parts.

The same proof, run backwards, gives the converse: in a parallelogram with equal diagonals the triangles $DAB$ and $CBA$ are congruent by side-side-side, so the angles at $A$ and $B$ are equal, and since they are co-interior angles on $AB$ between the parallels $AD$ and $BC$ they add up to $180°$; so each is $90°$ and the parallelogram is a rectangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $D$ up or down: the rectangle gets taller or flatter, both diagonals change length together, and the readout keeps $AC = BD$ to the last digit. When the height equals the base the rectangle is a square and the diagonals are also perpendicular. Drag $A$ or $B$ to change the base or to turn the whole rectangle; $D$ keeps its distance from $A$ along the perpendicular, and $C$ follows.

$D$ cannot leave the perpendicular at $A$, since that would spoil the right angle. A drag that would make the rectangle too flat or too tall for the frame, or shrink the base to nothing, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The converse.** A parallelogram with equal diagonals is a rectangle, as shown under Why It Holds. Builders use it: a frame with equal diagonals is square at the corners.
• **A rectangle is cyclic.** The diagonals also bisect each other, so their common midpoint is at the same distance from all four vertices: it is the centre of a circle through them, with each diagonal a diameter. This is the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) theorem seen from the other side, and the right angles are those of [Thales' theorem](!/geometry/visual-tools/thales-theorem).
• **The median to the hypotenuse.** Half a rectangle is a right triangle, and half a diagonal is the median from the right angle to the hypotenuse; so that median is half the [hypotenuse](!/trigonometry/right-triangle#1).
• **Length of the diagonal.** By the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem), a rectangle with sides $a$ and $b$ has diagonals of length $\\sqrt{a^2 + b^2}$.
• **Squares.** A square is a rectangle and a rhombus at once, so its diagonals are equal, perpendicular, and [bisect each other](!/geometry/visual-tools/parallelogram-diagonals).`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why are the diagonals of a rectangle equal?',
          answer: 'The two right triangles on the base, one cut off by each diagonal, have the base in common, equal sides standing on it, and right angles between those sides, so they are congruent by side-angle-side; their hypotenuses are the two diagonals.'
        },
        obj2: {
          question: 'Is every parallelogram with equal diagonals a rectangle?',
          answer: 'Yes. The two triangles on the base are then congruent by side-side-side, so the angles at the ends of the base are equal, and as co-interior angles between parallel sides they add up to 180°, so each is 90°.'
        },
        obj3: {
          question: 'Are the diagonals of a rectangle perpendicular?',
          answer: 'Only when the rectangle is a square. In every rectangle they are equal and bisect each other; perpendicular diagonals belong to the rhombus.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Rectangle Diagonals Proof Visualizer",
          "description": "Step-by-step interactive proof that the diagonals of a rectangle are equal, with a rectangle whose height and base can be changed.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/rectangle-diagonals",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Diagonals of a Rectangle Are Equal", "item": "https://www.learnmathclass.com/geometry/visual-tools/rectangle-diagonals" }
          ]
        }
      }
    },
    'midsegment': {
      proofKey: 'midsegment',
      title: 'Midsegment Theorem Proof | Midpoints of Two Sides of a Triangle Step by Step',
      description: 'Watch the proof that the segment joining the midpoints of two sides of a triangle is parallel to the third side and half as long, step by step with an extension, vertical angles and two congruences. Then drag the vertices.',
      h1Title: 'The Midsegment Theorem',
      url: '/geometry/visual-tools/midsegment',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="34,14 10,62 58,62" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="34,14 22,38 46,38" fill="#FAC775" fill-opacity="0.45" stroke="none"/><line x1="22" y1="38" x2="70" y2="38" stroke="#B5D4F4" stroke-width="1.3"/><line x1="58" y1="62" x2="70" y2="38" stroke="#B5D4F4" stroke-width="1.1" stroke-dasharray="3 2"/><path d="M 32 62 L 36 59 L 32 56" fill="none" stroke="#B5D4F4" stroke-width="1"/><path d="M 32 38 L 36 35 L 32 32" fill="none" stroke="#B5D4F4" stroke-width="1"/><circle cx="22" cy="38" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="46" cy="38" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">DE = &#189; BC</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Midsegment Theorem Proof',
      keywords: [
        'midsegment theorem',
        'midpoint theorem triangle',
        'midline theorem',
        'segment joining midpoints parallel to third side',
        'half the third side',
        'triangle midsegment proof',
        'medial triangle',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the segment between the midpoints stay parallel to the third side and half its length. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take the midpoints $D$ and $E$ of two sides $AB$ and $AC$ of a triangle. The segment $DE$ joining them is called a midsegment (or midline) of the triangle, and the theorem says two things about it:

$$DE \\parallel BC, \\qquad DE = \\tfrac{1}{2} BC$$

it is parallel to the third side and half as long. The theorem is usually met together with similar triangles, where it is one line: triangle $ADE$ is a half-size copy of triangle $ABC$. The proof on this page needs no similarity. It uses only congruent triangles and parallel lines, the tools of the earlier pages, and it is a little longer for that: two congruences instead of one scaling.

In the player $D$, $E$ and the construction point $F$ are hollow, computed from the vertices. The readout under the canvas shows $DE$ and $BC$ in the frame's own units, with half of $BC$ beside them, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Extension',
          content: `The construction doubles the midsegment. Draw $DE$ on past $E$ to the point $F$ with $EF = DE$, so that $E$ is the midpoint of $DF$ as well as of $AC$; and join $C$ to $F$. The player marks $DE$ and $EF$ with three ticks each.

The point $E$ is now the midpoint of two segments at once, $AC$ and $DF$, which cross there. That is the whole idea: two segments bisecting each other are the diagonals of a parallelogram, as the [parallelogram diagonals](!/geometry/visual-tools/parallelogram-diagonals) page shows in one direction and this proof shows in the other, so $ADCF$ is a parallelogram and $CF$ is a copy of $AD$, moved across. The next three steps say this with congruent triangles.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Vertical Angles and SAS',
          content: `Look at the two triangles $ADE$ and $CFE$ that meet at $E$. $AE = EC$, because $E$ is the midpoint of $AC$. $DE = EF$, by construction. And the angles at $E$, between $EA$ and $ED$ in one triangle and between $EC$ and $EF$ in the other, are [vertical angles](!/geometry/visual-tools/vertical-angles), so they are equal; the player calls both $\\varepsilon$.

Two sides and the included angle: the triangles are congruent by side-angle-side, with the vertices matched $A \\leftrightarrow C$, $D \\leftrightarrow F$, $E \\leftrightarrow E$. The second triangle is the first one turned through half a turn about $E$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'A Parallel Appears',
          content: `Corresponding angles of congruent triangles are equal, so $\\angle DAE = \\angle FCE$; the player marks both $\\alpha$. Now look at where these angles sit: one at $A$ between $AB$ and $AC$, the other at $C$ between $CF$ and $CA$. They are alternate angles on the transversal $AC$ of the two lines $AB$ and $CF$. Equal alternate angles mean parallel lines, by the converse of the [parallel lines theorem](!/geometry/visual-tools/parallel-lines):

$$CF \\parallel AB$$

The player marks $BA$ and $CF$ with two chevrons each, pointing the same way.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Three Equal Segments',
          content: `Corresponding sides of the congruent triangles are equal too: $CF = AD$. And $AD = DB$, because $D$ is the midpoint of $AB$. So

$$CF = AD = DB$$

and the player marks $CF$ with one tick, like the two halves of $AB$. Put the last two steps together: the quadrilateral $DBCF$ has the pair of opposite sides $DB$ and $CF$ equal and parallel. That is enough to make it a parallelogram, and the next two steps prove it, in the same way the [opposite sides](!/geometry/visual-tools/parallelogram-sides) page proved its theorem: with a diagonal and a congruence.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'The Second Transversal',
          content: `Join $D$ to $C$. The segment $DC$ is a diagonal of $DBCF$, and it is a transversal of the parallel lines $DB$ and $CF$. The angle $\\angle BDC$ at $D$ and the angle $\\angle FCD$ at $C$ lie on opposite sides of the transversal, between the parallels, so they are alternate angles and are equal; the player marks both $\\gamma$.

This is the parallel lines theorem used in its forward direction, from parallel lines to equal angles, after the previous step used it backwards, from equal angles to parallel lines.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'The Second Congruence',
          content: `Now compare the triangles $DBC$ and $CFD$, on either side of the diagonal. $DB = CF$ from Three Equal Segments; $DC$ is a side of both; and the angles between those sides, $\\gamma$ at $D$ and $\\gamma$ at $C$, are equal. Side-angle-side again: the triangles are congruent, with $D \\leftrightarrow C$, $B \\leftrightarrow F$, $C \\leftrightarrow D$.

Two things follow. The side $BC$ corresponds to $FD$, so $BC = DF$. And the angle $\\angle BCD$ corresponds to $\\angle FDC$, so they are equal; the player marks both $\\delta$. The argument is exactly the one on the [opposite sides](!/geometry/visual-tools/parallelogram-sides) page, run with one pair of parallels known and the other to be found.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Why It Holds',
          content: `The two equal angles $\\delta$ are alternate angles on the transversal $DC$ of the lines $DF$ and $BC$, so $DF \\parallel BC$; and $DE$ is part of $DF$, so $DE \\parallel BC$. For the length, $BC = DF = DE + EF = 2 \\cdot DE$, so $DE = \\tfrac{1}{2} BC$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given midpoints, a construction, side-angle-side with vertical angles, alternate angles, corresponding parts, alternate angles again, side-angle-side again, and corresponding parts.

Stripped of its two congruences the proof says: $ADCF$ is a parallelogram because its diagonals bisect each other, so $CF$ equals and is parallel to $AD$, hence to $DB$; then $DBCF$ is a parallelogram because one pair of its opposite sides is equal and parallel, so $DF$ equals and is parallel to $BC$. The congruences are what those two "because"s cost when written out.`,
          before: '',
          after: '',
          link: ''
        },
        obj9: {
          title: 'Dragging the Figure',
          content: `Drag any vertex: the midpoints slide along their sides, the midsegment turns to stay parallel to $BC$, the construction point $F$ follows, and the readout keeps $DE$ at exactly half of $BC$. Drag $A$ sideways and watch the parallelogram $DBCF$ shear; drag $B$ or $C$ and watch $DE$ grow and shrink with the base.

A drag that would flatten the triangle, or carry a vertex or the point $F$ out of the frame, is refused. The theorem itself has no such limits; they are the frame's.`,
          before: '',
          after: '',
          link: ''
        },
        obj10: {
          title: 'Consequences',
          content: `• **The medial triangle.** The three midsegments of a triangle cut it into four congruent triangles, each a half-size copy of the original, so the medial triangle has a quarter of the area and its sides are parallel to the original's.
• **Varignon's theorem.** Joining the midpoints of the sides of any quadrilateral gives a parallelogram: each pair of opposite sides of the new figure is a midsegment of a triangle on one diagonal, so both are parallel to that diagonal and half its length.
• **Trapezoids.** The segment joining the midpoints of the legs of a trapezoid is parallel to the bases and equal to half their sum; it comes from this theorem applied along a diagonal.
• **The converse.** A line through the midpoint of one side of a triangle, parallel to a second side, bisects the third side.
• **Angles.** Since $DE \\parallel BC$, the angles of triangle $ADE$ at $D$ and $E$ equal the angles of $ABC$ at $B$ and $C$ (corresponding angles), and its [angle sum](!/geometry/visual-tools/triangle-angle-sum) is the same $180°$; this is the beginning of the similarity of the two triangles.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the midsegment theorem say?',
          answer: 'The segment joining the midpoints of two sides of a triangle is parallel to the third side and half as long.'
        },
        obj2: {
          question: 'Can the midsegment theorem be proved without similar triangles?',
          answer: 'Yes. Extend the midsegment to double its length and join the end to the third vertex; two side-angle-side congruences, with vertical angles and alternate angles, show that the doubled segment and the third side are the opposite sides of a parallelogram.'
        },
        obj3: {
          question: 'What is the medial triangle?',
          answer: 'The triangle formed by the three midsegments. Its sides are parallel to the sides of the original triangle and half as long, and it cuts the original into four congruent triangles.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Midsegment Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/midsegment",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Midsegment Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/midsegment" }
          ]
        }
      }
    },
    'varignon': {
      proofKey: 'varignon',
      title: "Varignon's Theorem Proof | The Midpoint Parallelogram Step by Step",
      description: 'Watch the proof that the midpoints of the sides of any quadrilateral form a parallelogram, step by step with the two diagonals and the midsegment theorem four times. Then drag the vertices into any shape and watch the inner parallelogram hold.',
      h1Title: "Varignon's Theorem: The Midpoint Parallelogram",
      url: '/geometry/visual-tools/varignon',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,52 42,64 70,30 26,12" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="26,58 56,47 48,21 18,32" fill="#85B7EB" fill-opacity="0.4" stroke="#B5D4F4" stroke-width="1.2"/><line x1="10" y1="52" x2="70" y2="30" stroke="#FAC775" stroke-width="1" stroke-dasharray="3 2"/><circle cx="26" cy="58" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="56" cy="47" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="48" cy="21" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="18" cy="32" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PQRS</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: "Varignon's Theorem Proof",
      keywords: [
        'varignon theorem',
        'midpoint parallelogram',
        'varignon parallelogram',
        'midpoints of a quadrilateral',
        'midsegment theorem',
        'quadrilateral theorems',
        'varignon proof',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the four vertices into any shape you like and watch the inner figure stay a parallelogram. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take any quadrilateral $ABCD$, not a parallelogram, not a trapezoid, nothing special, and mark the midpoints $P$, $Q$, $R$, $S$ of its four sides. Join them in order. The theorem, published by Pierre Varignon in 1731, says that the figure $PQRS$ is always a parallelogram, and more precisely that

$$PQ \\parallel SR \\parallel AC, \\quad QR \\parallel PS \\parallel BD, \\quad PQ = SR = \\tfrac{1}{2} AC, \\quad QR = PS = \\tfrac{1}{2} BD$$

its sides are parallel to the diagonals of $ABCD$ and half as long. The surprise is that the outer figure can be as lopsided as you like while the inner one keeps its symmetry.

The proof is the [midsegment theorem](!/geometry/visual-tools/midsegment) applied four times, once in each of the four triangles that the two diagonals cut off. In the player the midpoints are hollow, computed from the vertices; all four vertices can be dragged. The readout under the canvas shows the four sides of $PQRS$ in pairs, in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The First Diagonal',
          content: `The construction draws the diagonal $AC$, dashed in the player. It cuts $ABCD$ into two triangles, $ABC$ below it and $ADC$ above it, and it is the third side of each: in triangle $ABC$ the midpoints $P$ and $Q$ sit on the other two sides, and in triangle $ADC$ the midpoints $S$ and $R$ do.

That is the whole plan: each side of $PQRS$ is a midsegment of one of these triangles, and the midsegment theorem says what a midsegment does. The diagonal $AC$ takes care of two opposite sides of $PQRS$; the other diagonal, $BD$, will take care of the other two.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The First Midsegment',
          content: `In triangle $ABC$, $P$ is the midpoint of $AB$ and $Q$ the midpoint of $BC$, so $PQ$ joins the midpoints of two sides: it is a midsegment, and the [midsegment theorem](!/geometry/visual-tools/midsegment) gives

$$PQ \\parallel AC, \\qquad PQ = \\tfrac{1}{2} AC$$

The player fills the triangle and marks $PQ$ and $AC$ with one chevron each, pointing the same way. Nothing about the shape of $ABCD$ was used; only that $P$ and $Q$ are midpoints.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Second Midsegment',
          content: `In triangle $ADC$, on the other side of the diagonal, $S$ is the midpoint of $DA$ and $R$ the midpoint of $CD$, so $SR$ is a midsegment of that triangle, and the same theorem gives

$$SR \\parallel AC, \\qquad SR = \\tfrac{1}{2} AC$$

Now $PQ$ and $SR$ are both parallel to $AC$, and two lines parallel to the same line are parallel to each other, so $PQ \\parallel SR$; and both are half of $AC$, so $PQ = SR$. One pair of opposite sides of $PQRS$ is settled: equal and parallel.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Second Diagonal',
          content: `The other diagonal, $BD$, does the same for the other pair of sides. It cuts $ABCD$ into the triangles $BCD$ and $BAD$. In triangle $BCD$, $Q$ and $R$ are the midpoints of $BC$ and $CD$, so $QR$ is a midsegment and $QR \\parallel BD$, $QR = \\tfrac{1}{2} BD$. In triangle $BAD$, $P$ and $S$ are the midpoints of $BA$ and $AD$, so $PS$ is a midsegment and $PS \\parallel BD$, $PS = \\tfrac{1}{2} BD$.

So $QR \\parallel PS$ and $QR = PS$: the second pair of opposite sides is equal and parallel too. The player marks the three parallel segments with two chevrons each.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `A parallelogram is a quadrilateral whose opposite sides are parallel. $PQRS$ has $PQ \\parallel SR$ and $QR \\parallel PS$, so it is a parallelogram by definition; the [opposite sides](!/geometry/visual-tools/parallelogram-sides) page then says its opposite sides are equal, which the midsegment theorem had already given directly. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given midpoints, a construction, and the midsegment theorem three times over.

The proof never asked whether $ABCD$ was convex, or even whether its sides cross. The midsegment theorem holds in any triangle, and the two diagonals always cut off four triangles, so the result is the same for a dart-shaped quadrilateral and for a crossed one. It even holds for four points that do not lie in one plane, since each step happens inside a single triangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag any of $A$, $B$, $C$, $D$: the outer quadrilateral takes any shape, the four midpoints slide along their sides, and the readout keeps $PQ = SR$ and $QR = PS$ to the last digit. Pull $C$ in and out and watch $PQ$ and $SR$ turn together, always parallel to the diagonal $AC$.

Make the diagonals equal and $PQRS$ becomes a rhombus; make them perpendicular and it becomes a rectangle; both at once and it is a square. A drag that would make $ABCD$ concave, or carry a vertex out of the frame, is refused; that is a limit of the drawing, not of the theorem.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Half the area.** The Varignon parallelogram has exactly half the area of the quadrilateral, since each corner triangle cut off, such as $APS$, is a quarter of the triangle on that diagonal.
• **Perimeter.** Its perimeter is $AC + BD$, the sum of the diagonals, since each side is half a diagonal.
• **Special cases.** If the diagonals of $ABCD$ are perpendicular, $PQRS$ is a [rectangle](!/geometry/visual-tools/rectangle-diagonals); if they are equal, a [rhombus](!/geometry/visual-tools/rhombus-diagonals); a kite therefore has a rectangle inside it and an isosceles trapezoid a rhombus.
• **The bimedians.** The diagonals of $PQRS$ join the midpoints of opposite sides of $ABCD$; they are called the bimedians, and since the [diagonals of a parallelogram bisect each other](!/geometry/visual-tools/parallelogram-diagonals), the two bimedians of any quadrilateral bisect each other, at the centroid of the four vertices.
• **Repeating.** Taking the midpoint parallelogram of the midpoint parallelogram gives a figure similar to $ABCD$, shrunk by half and turned through a half-turn.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: "What does Varignon's theorem say?",
          answer: 'The midpoints of the four sides of any quadrilateral are the vertices of a parallelogram, whose sides are parallel to the diagonals of the quadrilateral and half as long.'
        },
        obj2: {
          question: 'Why is the midpoint figure a parallelogram?',
          answer: 'Each diagonal cuts the quadrilateral into two triangles, and two opposite sides of the midpoint figure are midsegments of those triangles, so both are parallel to that diagonal. With the other diagonal the other pair is parallel too.'
        },
        obj3: {
          question: 'Does it work for a non-convex quadrilateral?',
          answer: 'Yes. The proof only uses the midsegment theorem inside the four triangles cut off by the diagonals, which exist for any four points, convex or not, even in space.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Varignon's Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the midpoints of the sides of any quadrilateral form a parallelogram, with all four vertices draggable.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/varignon",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Varignon's Theorem: The Midpoint Parallelogram", "item": "https://www.learnmathclass.com/geometry/visual-tools/varignon" }
          ]
        }
      }
    },
    'trapezoid-midsegment': {
      proofKey: 'trapezoidMidsegment',
      title: 'Trapezoid Midsegment Theorem Proof | Half the Sum of the Bases Step by Step',
      description: 'Watch the proof that the segment joining the midpoints of the legs of a trapezoid is parallel to the bases and equal to half their sum, step by step through the midpoint of a diagonal. Then drag the trapezoid into any shape.',
      h1Title: 'The Midsegment of a Trapezoid',
      url: '/geometry/visual-tools/trapezoid-midsegment',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,60 72,60 58,20 26,20" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="8,60 58,20 26,20" fill="#FAC775" fill-opacity="0.4" stroke="none"/><polygon points="8,60 72,60 58,20" fill="#85B7EB" fill-opacity="0.4" stroke="none"/><line x1="8" y1="60" x2="58" y2="20" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><line x1="17" y1="40" x2="65" y2="40" stroke="#E6F1FB" stroke-width="1.5"/><circle cx="17" cy="40" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="65" cy="40" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="33" cy="40" r="1.8" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">MN = &#189;(AB + DC)</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Trapezoid Midsegment Proof',
      keywords: [
        'trapezoid midsegment theorem',
        'median of a trapezoid',
        'midsegment of a trapezoid',
        'half the sum of the bases',
        'trapezium midline',
        'trapezoid properties',
        'quadrilateral theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then reshape the trapezoid and watch the segment between the midpoints of its legs stay parallel to the bases, always half their sum. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A trapezoid is a quadrilateral with one pair of parallel sides, the bases; the other two sides are the legs. In $ABCD$ the bases are $AB$ and $DC$, the legs $AD$ and $BC$, and $M$, $N$ are the midpoints of the legs. The segment $MN$ is the midsegment (or median) of the trapezoid, and the theorem says

$$MN \\parallel AB, \\qquad MN = \\tfrac{1}{2}(AB + DC)$$

it is parallel to the bases and equal to their average. The [midsegment theorem for triangles](!/geometry/visual-tools/midsegment) is the case $DC = 0$, when the top base shrinks to a point; this page's proof reduces the trapezoid to two triangles and uses that theorem in each.

In the player $C$ slides along the line through $D$ parallel to $AB$, which is what keeps the figure a trapezoid; $A$, $B$ and $D$ move freely, and the midpoints are computed. The readout under the canvas shows $MN$ and half the sum of the bases, in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Diagonal and Its Midpoint',
          content: `The construction is the diagonal $AC$, dashed in the player, together with its midpoint $K$, marked with three ticks on each half. The diagonal cuts the trapezoid into two triangles: $ACD$, which has the top base $DC$ as a side, and $ABC$, which has the bottom base $AB$ as a side.

The point $K$ is the hinge of the proof. It is a midpoint in both triangles at once, so it pairs with $M$ in the first and with $N$ in the second, and each pair is a midsegment of its triangle. Everything else is the midsegment theorem and one fact about parallel lines.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The First Midsegment',
          content: `In triangle $ACD$, $M$ is the midpoint of $AD$ and $K$ the midpoint of $AC$, so $MK$ joins the midpoints of two sides. By the [midsegment theorem](!/geometry/visual-tools/midsegment),

$$MK \\parallel DC, \\qquad MK = \\tfrac{1}{2} DC$$

The player fills the triangle and draws $MK$ in the same colour. It is the part of the eventual midsegment that belongs to the top base.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Second Midsegment',
          content: `In triangle $ABC$, $K$ is the midpoint of $AC$ and $N$ the midpoint of $BC$, so $KN$ is a midsegment of that triangle, and the same theorem gives

$$KN \\parallel AB, \\qquad KN = \\tfrac{1}{2} AB$$

This is the part that belongs to the bottom base. So far $MK$ and $KN$ are two separate segments meeting at $K$; nothing yet says that they make a straight line, which is what the next step is about.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'One Line Through K',
          content: `The bases are parallel, $DC \\parallel AB$, so $MK$, which is parallel to $DC$, is also parallel to $AB$. Now both $MK$ and $KN$ are lines through $K$ parallel to $AB$. Through a point not on a line there is exactly one line parallel to it; that is the parallel postulate, the fact behind the whole [parallel lines](!/geometry/visual-tools/parallel-lines) page. So $MK$ and $KN$ are pieces of one and the same line.

In other words $M$, $K$ and $N$ are collinear, with $K$ between $M$ and $N$, and the line through them is parallel to $AB$. That settles the first half of the theorem: $MN \\parallel AB$, and $MN$ passes through the midpoint of the diagonal.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Since $K$ lies between $M$ and $N$, the length $MN$ is the sum of the two pieces:

$$MN = MK + KN = \\tfrac{1}{2} DC + \\tfrac{1}{2} AB = \\tfrac{1}{2}(AB + DC)$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given trapezoid, a construction, the midsegment theorem twice, the uniqueness of the parallel through a point, and an addition.

The same diagonal shows a second fact. The other diagonal $BD$ has a midpoint too, and by the same argument it lies on $MN$ as well; the segment between the two diagonal midpoints has length $\\tfrac{1}{2}(AB - DC)$, half the difference of the bases, and it is the part of $MN$ that lies between the two diagonals.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $C$ along the top: the top base grows or shrinks, $N$ and $K$ move with it, and the readout keeps $MN$ at exactly half the sum of the bases. Push $C$ all the way towards $D$ and the trapezoid nearly becomes a triangle, with $MN$ nearly half of $AB$, which is the triangle midsegment theorem appearing as a limit. Drag $D$ to change the height or shear the figure, $A$ or $B$ to change the bottom base.

$C$ cannot leave the line through $D$ parallel to $AB$, since then the figure would not be a trapezoid. A drag that would flatten the trapezoid, shrink the top base to nothing, or carry a vertex out of the frame, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Area.** The area of a trapezoid is its height times the midsegment, $h \\cdot \\tfrac{1}{2}(AB + DC)$: cut along $MN$ and turn the top piece over to make a parallelogram with base $MN$ and the same height, whose area is base times height by the [parallelogram](!/geometry/visual-tools/parallelogram-sides) pages.
• **The triangle as a limit.** With $DC = 0$ the trapezoid is a triangle and the theorem becomes the triangle midsegment theorem.
• **The diagonal midpoints.** Both diagonal midpoints lie on $MN$, and the segment between them is half the difference of the bases.
• **Varignon again.** In an isosceles trapezoid the diagonals are equal, so by [Varignon's theorem](!/geometry/visual-tools/varignon) the midpoints of its four sides form a rhombus; two of those midpoints are $M$ and $N$.
• **Dividing a segment.** Equally spaced parallel lines cut every transversal into equal parts; the midsegment is the case of three lines, and it is how a segment is divided into equal parts with a ruler and set square.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the midsegment of a trapezoid?',
          answer: 'The segment joining the midpoints of the two legs. It is parallel to the bases and its length is the average of the two bases, half their sum.'
        },
        obj2: {
          question: 'Why is the trapezoid midsegment half the sum of the bases?',
          answer: 'The midpoint K of a diagonal splits the midsegment into two triangle midsegments, one half of each base; they lie on one line because both are parallel to the bases through the same point.'
        },
        obj3: {
          question: 'How is this related to the triangle midsegment theorem?',
          answer: 'The triangle theorem is used twice in the proof, and it is also the special case in which the top base has length zero, so the trapezoid becomes a triangle.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Trapezoid Midsegment Proof Visualizer",
          "description": "Step-by-step interactive proof that the midsegment of a trapezoid is parallel to the bases and equal to half their sum, with a draggable trapezoid.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/trapezoid-midsegment",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Midsegment of a Trapezoid", "item": "https://www.learnmathclass.com/geometry/visual-tools/trapezoid-midsegment" }
          ]
        }
      }
    },
    'centroid': {
      proofKey: 'centroid',
      title: 'Medians and the Centroid Proof | The Three Medians Meet at One Point Step by Step',
      description: 'Watch the proof that the three medians of a triangle meet at one point, the centroid, which cuts each median in the ratio 2 : 1, step by step with two midsegments and a parallelogram. Then drag the vertices.',
      h1Title: 'The Medians Meet at the Centroid',
      url: '/geometry/visual-tools/centroid',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,12 10,64 70,64" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="12" x2="40" y2="64" stroke="#B5D4F4" stroke-width="1.1"/><line x1="10" y1="64" x2="55" y2="38" stroke="#B5D4F4" stroke-width="1.1"/><line x1="70" y1="64" x2="25" y2="38" stroke="#B5D4F4" stroke-width="1.1"/><polygon points="40,29 32,42 40,64 48,42" fill="#85B7EB" fill-opacity="0.4" stroke="none"/><circle cx="40" cy="46.7" r="2.6" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AG : GD = 2 : 1</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Medians and the Centroid Proof',
      keywords: [
        'centroid of a triangle',
        'medians concurrent',
        'median theorem',
        'centroid divides median 2 to 1',
        'three medians meet at one point',
        'centroid proof',
        'centre of mass of a triangle',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the three medians keep meeting at one point, two thirds of the way down each of them. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A median of a triangle joins a vertex to the midpoint of the opposite side. Every triangle has three, and the theorem says two things about them: they all pass through one point $G$, the centroid, and that point cuts each median in the same ratio,

$$AG : GD = BG : GE = CG : GF = 2 : 1$$

two thirds of the median lie on the vertex side of $G$, one third on the side of the midpoint. Three lines meeting at one point is never an accident; the proof has to explain why the third median cannot miss the point where the first two cross.

The proof here follows the plan of the earlier pages: two [midsegments](!/geometry/visual-tools/midsegment) that are both parallel to $AB$ and half of it make a parallelogram, and the diagonals of that parallelogram are pieces of the medians. In the player the midpoints $D$, $E$, $F$, the crossing point $G$ and the construction points $P$, $Q$ are hollow, computed from the vertices. The readout under the canvas shows the two ratios $AG : GD$ and $BG : GE$, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Two New Midpoints',
          content: `Start with two of the medians, $AD$ and $BE$, and their crossing point $G$. The construction marks the midpoint $P$ of $AG$ and the midpoint $Q$ of $BG$, each with the same tick as the rest of its median: one tick on the pieces of $AD$, two on the pieces of $BE$.

The idea is to look at the small triangle $GAB$, which has the same base $AB$ as the big triangle and its apex at $G$. The midpoints $P$ and $Q$ belong to this small triangle in the way $D$ and $E$ belong to the big one, so each triangle gives a midsegment parallel to $AB$. Comparing the two midsegments is what pins $G$ down.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The First Midsegment',
          content: `In triangle $ABC$, $D$ and $E$ are the midpoints of $BC$ and $CA$, so $DE$ is a midsegment, and the [midsegment theorem](!/geometry/visual-tools/midsegment) gives

$$DE \\parallel AB, \\qquad DE = \\tfrac{1}{2} AB$$

The player fills the big triangle and marks $DE$ and $AB$ with one chevron each. Notice where $D$ and $E$ sit: at the far ends of the two medians, below $G$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Second Midsegment',
          content: `In the small triangle $GAB$, $P$ and $Q$ are the midpoints of $GA$ and $GB$, so $PQ$ is a midsegment of that triangle, and the same theorem gives

$$PQ \\parallel AB, \\qquad PQ = \\tfrac{1}{2} AB$$

Now $DE$ and $PQ$ are both parallel to $AB$ and both equal to half of it. So they are parallel to each other and equal in length, and they sit on opposite sides of $G$: $P$ and $Q$ on the vertex side of the medians, $D$ and $E$ on the far side.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'A Parallelogram at G',
          content: `A quadrilateral with one pair of opposite sides equal and parallel is a parallelogram; the [midsegment page](!/geometry/visual-tools/midsegment) proved this on the way to its own theorem, with a diagonal and a congruence, and the [opposite sides](!/geometry/visual-tools/parallelogram-sides) page gives the converse direction. So $PQDE$ is a parallelogram, shown filled in the player.

Its diagonals are $PD$ and $QE$. But $P$, $G$, $D$ all lie on the median $AD$, so the diagonal $PD$ is a piece of that median, and likewise $QE$ is a piece of the median $BE$; the diagonals cross at $G$. The [diagonals of a parallelogram bisect each other](!/geometry/visual-tools/parallelogram-diagonals), so

$$PG = GD, \\qquad QG = GE$$`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Two Thirds of the Way',
          content: `Put the pieces of the median $AD$ side by side. $AP = PG$ because $P$ is the midpoint of $AG$, and $PG = GD$ from the parallelogram. So the three pieces $AP$, $PG$, $GD$ are equal, the median is cut into thirds, and

$$AG = AP + PG = 2 \\cdot GD$$

The same on the median $BE$: $BQ = QG = GE$, so $BG = 2 \\cdot GE$. The crossing point of any two medians is two thirds of the way down each of them, from the vertex. The player lights the six equal pieces.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Why It Holds',
          content: `Nothing in the argument depended on which two medians were chosen. Take the medians $AD$ and $CF$ instead: they meet at a point which, by the same proof, is two thirds of the way from $A$ to $D$. But there is only one such point on $AD$, and it is $G$. So $CF$ passes through $G$ as well: the three medians are concurrent, and $G$ divides each of them in the ratio $2 : 1$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given medians, a construction, the midsegment theorem twice, the parallelogram and its diagonals, an addition, and the same argument once more.

The point $G$ is called the centroid. It is the triangle's balance point: a cardboard triangle rests level on a pin placed there, because each median splits the triangle into two halves of equal area, and the three medians together split it into six small triangles of equal area.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Dragging the Figure',
          content: `Drag any vertex: the midpoints slide, the medians swing, and the readout keeps both ratios at exactly $2 : 1$. Pull $A$ far to one side and the triangle leans over; the centroid leans with it but never leaves the inside of the triangle, because it is always two thirds of the way along a median that lies inside.

Watch the parallelogram $PQDE$ as you drag: it changes shape but stays a parallelogram, with $G$ at the crossing of its diagonals. A drag that would flatten the triangle, or carry a vertex out of the frame, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj9: {
          title: 'Consequences',
          content: `• **Coordinates.** The centroid is the average of the three vertices, $G = \\tfrac{1}{3}(A + B + C)$, which is the $2 : 1$ ratio written with vectors: $G = D + \\tfrac{1}{3}(A - D)$ and $D = \\tfrac{1}{2}(B + C)$.
• **Centre of mass.** Three equal weights at the vertices, or a uniform triangular plate, balance at the centroid; the plate's balance point is the same as the three weights' because each median divides the area in half.
• **Six equal triangles.** The three medians cut the triangle into six triangles of equal area, each one sixth of the whole.
• **The medial triangle.** The triangle $DEF$ of the midpoints has the same centroid as $ABC$, and so does the midpoint parallelogram of [Varignon's theorem](!/geometry/visual-tools/varignon) for any quadrilateral, at the crossing of its diagonals.
• **The Euler line.** The centroid lies on the line through the circumcentre and the orthocentre, twice as far from the orthocentre as from the circumcentre.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the centroid of a triangle?',
          answer: 'The point where the three medians meet. It cuts each median in the ratio 2 : 1, with the longer part towards the vertex, and it is the balance point of the triangle.'
        },
        obj2: {
          question: 'Why do the three medians meet at one point?',
          answer: 'Any two medians meet at the point two thirds of the way down each of them; that is shown with two midsegments and a parallelogram. The third median also meets the first at its two-thirds point, which is the same point.'
        },
        obj3: {
          question: 'Is the centroid always inside the triangle?',
          answer: 'Yes. Every median lies inside the triangle, and the centroid is a point of each median, two thirds of the way from the vertex.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Medians and the Centroid Proof Visualizer",
          "description": "Step-by-step interactive proof that the three medians of a triangle meet at the centroid, which divides each in the ratio 2 : 1, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/centroid",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Medians Meet at the Centroid", "item": "https://www.learnmathclass.com/geometry/visual-tools/centroid" }
          ]
        }
      }
    },
    'angle-bisector': {
      proofKey: 'angleBisector',
      title: 'Angle Bisector Theorem Proof | BD : DC = AB : AC Step by Step',
      description: 'Watch the proof that the bisector of an angle of a triangle divides the opposite side in the ratio of the adjacent sides, step by step with two perpendiculars and areas counted two ways. Then drag the vertices.',
      h1Title: 'The Angle Bisector Theorem',
      url: '/geometry/visual-tools/angle-bisector',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="36,12 8,64 72,64" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="36,12 8,64 37,64" fill="#FAC775" fill-opacity="0.4" stroke="none"/><polygon points="36,12 37,64 72,64" fill="#85B7EB" fill-opacity="0.4" stroke="none"/><line x1="36" y1="12" x2="37" y2="64" stroke="#B5D4F4" stroke-width="1.2"/><path d="M 30 23 A 12 12 0 0 1 36 24" fill="none" stroke="#FAC775" stroke-width="1"/><path d="M 36 24 A 12 12 0 0 1 42 23" fill="none" stroke="#FAC775" stroke-width="1"/><circle cx="37" cy="64" r="2" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">BD : DC = AB : AC</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Angle Bisector Theorem Proof',
      keywords: [
        'angle bisector theorem',
        'triangle angle bisector theorem',
        'bisector divides opposite side',
        'ratio of adjacent sides',
        'euclid VI.3',
        'angle bisector proof',
        'area proof',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the foot of the bisector slide along the opposite side so that the two ratios in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `In triangle $ABC$, let the bisector of the angle at $A$ meet the opposite side at $D$. The theorem, Proposition 3 of Book VI of Euclid's Elements, says that $D$ divides $BC$ in the same ratio as the two sides that form the angle:

$$\\frac{BD}{DC} = \\frac{AB}{AC}$$

The longer side gets the longer piece. If $AB = AC$ the bisector is also the median and the altitude, as the isosceles pages show; the theorem says what happens when the two sides differ.

Euclid's proof uses similar triangles. The proof on this page uses areas instead: the two triangles that the bisector cuts off have the same height when measured one way and equal heights when measured another way, and comparing the two measurements gives the ratio. In the player $D$ and the feet of the perpendiculars are hollow, computed from the vertices. The readout under the canvas shows the two ratios $BD / DC$ and $AB / AC$, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Perpendiculars from D',
          content: `The construction drops two perpendiculars from $D$: one to the side $AB$, meeting it at $E$, and one to the side $AC$, meeting it at $F$. The lengths $DE$ and $DF$ are the distances from $D$ to the two sides of the angle, since the [perpendicular is the shortest](!/geometry/visual-tools/perpendicular-shortest) segment from a point to a line.

They will be used as heights. Seen from the base $AB$, the triangle $ABD$ has height $DE$; seen from the base $AC$, the triangle $ACD$ has height $DF$. The first thing to show is that these two heights are equal.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Two Congruent Right Triangles',
          content: `Look at the two small right triangles $ADE$ and $ADF$, one on each side of the bisector. They share the hypotenuse $AD$. Their angles at $A$ are both $\\alpha$, because $AD$ bisects the angle. Their angles at $E$ and $F$ are both right angles. So two angles agree, and by the [angle sum](!/geometry/visual-tools/triangle-angle-sum) the third angles agree too; with the common side $AD$ that makes the triangles congruent (angle-angle-side).

Corresponding sides are equal, so

$$DE = DF$$

marked with one tick each. This is a theorem in its own right: every point on the bisector of an angle is at the same distance from the two sides of the angle, and it is why the three bisectors of a triangle meet at one point, the centre of the inscribed circle.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Areas by the Sides',
          content: `The bisector cuts the triangle into $ABD$ and $ACD$, filled in two colours. Measure their areas with the sides of the angle as bases. For $ABD$, base $AB$ and height $DE$; for $ACD$, base $AC$ and height $DF$:

$$[ABD] = \\tfrac{1}{2} \\, AB \\cdot DE, \\qquad [ACD] = \\tfrac{1}{2} \\, AC \\cdot DF$$

Since $DE = DF$, the heights cancel in the ratio:

$$\\frac{[ABD]}{[ACD]} = \\frac{AB}{AC}$$`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Areas by the Bases',
          content: `Now measure the same two areas the other way, with $BD$ and $DC$ as bases. Both triangles have their apex at $A$ and their bases on the one line $BC$, so they share the same height: the perpendicular $AH$ from $A$ to $BC$, dashed in the player. Then

$$[ABD] = \\tfrac{1}{2} \\, BD \\cdot AH, \\qquad [ACD] = \\tfrac{1}{2} \\, DC \\cdot AH$$

and this time $AH$ cancels:

$$\\frac{[ABD]}{[ACD]} = \\frac{BD}{DC}$$

Nothing about the bisector was used in this step; it is true for any point $D$ on $BC$ that the two triangles split the area in the ratio of the two pieces of the base.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The ratio of the two areas is one number, and it has been written in two ways: as $AB : AC$ using the sides of the angle, and as $BD : DC$ using the pieces of the opposite side. So

$$\\frac{BD}{DC} = \\frac{AB}{AC}$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given bisector, a construction, angle-angle-side congruence, the area formula twice, and the equality of the two expressions.

The proof shows where each half of the theorem comes from. The step with the bases, $[ABD] : [ACD] = BD : DC$, holds for every point of $BC$; the step with the sides, $[ABD] : [ACD] = AB : AC$, holds exactly when $D$ is equidistant from the two sides, that is, when $D$ is on the bisector. So the bisector is the one line through $A$ for which the two ratios agree, which is also the converse of the theorem.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $A$ sideways: as it moves towards $C$ the side $AC$ shortens, $AB$ lengthens, and $D$ slides towards $C$ to keep $BD / DC$ equal to $AB / AC$; the readout shows both ratios changing together. Put $A$ straight above the midpoint of $BC$ and the two ratios are both $1$, the isosceles case. Drag $B$ or $C$ to change the base.

The perpendiculars from $D$ must land on the sides themselves, not on their extensions, for the picture of the two right triangles to make sense, so a drag that makes the angle at $B$ or at $C$ obtuse is refused; the theorem itself holds for every triangle. A drag that flattens the triangle or carries a vertex out of the frame is refused too.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The pieces of the side.** With $a = BC$, $b = AC$, $c = AB$, the bisector from $A$ cuts $BC$ into $BD = \\dfrac{ac}{b + c}$ and $DC = \\dfrac{ab}{b + c}$.
• **The incentre.** Every point of a bisector is equidistant from the two sides, so the three bisectors of a triangle meet at one point equidistant from all three sides: the centre of the inscribed circle, and the three sides are its tangents, as on the [two tangents](!/geometry/visual-tools/two-tangents) page.
• **The external bisector.** The bisector of the exterior angle at $A$ meets the line $BC$ outside the segment, at a point $D'$ with $BD' : D'C = AB : AC$ as well; $D$ and $D'$ divide $BC$ internally and externally in the same ratio.
• **With trigonometry.** The [Law of Sines](!/trigonometry/sines-cosines-law#2) in the two triangles gives $BD / \\sin\\alpha = AB / \\sin\\angle ADB$ and $DC / \\sin\\alpha = AC / \\sin\\angle ADC$, and the two angles at $D$ are supplementary, so their sines are equal: the theorem in one line.
• **Isosceles triangles.** When $AB = AC$ the ratio is $1$ and $D$ is the midpoint: the bisector, the median and the altitude from the apex are the same line, as on the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) page.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the angle bisector theorem say?',
          answer: 'The bisector of an angle of a triangle divides the opposite side into two pieces whose ratio equals the ratio of the two sides forming the angle: BD : DC = AB : AC.'
        },
        obj2: {
          question: 'Why does the angle bisector divide the opposite side in that ratio?',
          answer: 'The two triangles cut off by the bisector have equal heights onto the two sides of the angle, so their areas are in the ratio of those sides; they also share the height from the vertex, so their areas are in the ratio of the two pieces of the base. The two ratios are the same number.'
        },
        obj3: {
          question: 'Is the converse true?',
          answer: 'Yes. If a line through A divides BC in the ratio AB : AC, the point D is equidistant from AB and AC, so the line is the bisector. The bisector is the only line through A with this property.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Angle Bisector Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the bisector of an angle of a triangle divides the opposite side in the ratio of the adjacent sides, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/angle-bisector",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Angle Bisector Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/angle-bisector" }
          ]
        }
      }
    },
    'circumcentre': {
      proofKey: 'circumcentre',
      title: 'Circumcentre Proof | The Perpendicular Bisectors Meet at One Point Step by Step',
      description: 'Watch the proof that the three perpendicular bisectors of a triangle meet at one point, equidistant from the vertices, and that the circle about it passes through all three, step by step. Then drag the vertices.',
      h1Title: 'The Perpendicular Bisectors Meet at the Circumcentre',
      url: '/geometry/visual-tools/circumcentre',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="42" r="27" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><polygon points="40,15 17,56 66,52" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="28.5" y1="35.5" x2="52" y2="48" stroke="#FAC775" stroke-width="1" stroke-dasharray="3 2"/><line x1="41.5" y1="54" x2="39" y2="26" stroke="#FAC775" stroke-width="1" stroke-dasharray="3 2"/><circle cx="40" cy="42" r="2.4" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">OA = OB = OC</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Circumcentre Proof',
      keywords: [
        'circumcentre of a triangle',
        'circumcenter',
        'perpendicular bisectors concurrent',
        'circumscribed circle',
        'circumcircle proof',
        'equidistant from the vertices',
        'triangle centres',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the three perpendicular bisectors keep meeting at one point, with the circle about it still passing through all three corners. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `The perpendicular bisector of a segment is the line through its midpoint at right angles to it. A triangle has three sides, so three perpendicular bisectors, and the theorem says they all pass through one point $O$, which is at the same distance from the three vertices:

$$OA = OB = OC$$

The circle with centre $O$ and radius $OA$ therefore passes through all three vertices; it is the circumscribed circle, or circumcircle, and $O$ is the circumcentre. This is the fact behind drawing a circle through three given points, and it is how the centre of a circle is found from any three points on it, as on the [chord bisector](!/geometry/visual-tools/chord-bisector) page.

The proof has the shape of every concurrence proof on these pages: take two of the three lines, find their crossing point, show it has a property, and show that the property forces the third line through it. In the player the midpoints and $O$ are hollow, computed from the vertices. The readout under the canvas shows the three distances from $O$ to the vertices, in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The First Bisector',
          content: `Take the perpendicular bisector of $AB$ and the perpendicular bisector of $BC$. They are not parallel, since $AB$ and $BC$ are not, so they cross at a point; call it $O$. Join $O$ to $A$ and to $B$.

At the midpoint $P$ of $AB$ there are now two right triangles, $OPA$ and $OPB$. They share the side $OP$, they have $PA = PB$ because $P$ is the midpoint, and the angles between those sides are both right angles because the line is perpendicular to $AB$. Two sides and the included angle: the triangles are congruent by side-angle-side, and

$$OA = OB$$

Every point on the perpendicular bisector of $AB$ is equidistant from $A$ and $B$; this step proves that general fact for the point $O$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Second Bisector',
          content: `The same argument at the midpoint $Q$ of $BC$. Join $O$ to $C$. The right triangles $OQB$ and $OQC$ share $OQ$, have $QB = QC$, and have right angles at $Q$, so they are congruent by side-angle-side and

$$OB = OC$$

$O$ lies on the perpendicular bisector of $BC$, so it is equidistant from $B$ and $C$. The player fills the second pair of triangles in two more colours.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Three Equal Distances',
          content: `$OA = OB$ from the first bisector and $OB = OC$ from the second, so

$$OA = OB = OC$$

all three marked with three ticks. The point $O$ is at one distance from all three vertices. That is already half the theorem: the two bisectors meet at a point equidistant from $A$, $B$ and $C$. What remains is to show that the third perpendicular bisector cannot miss this point.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Third Bisector',
          content: `Since $OA = OC$, the triangle $OAC$ is isosceles with apex $O$. Let $R$ be the midpoint of $AC$ and draw the median $OR$. The triangles $ORA$ and $ORC$ have $OA = OC$, $RA = RC$ and the common side $OR$, so they are congruent by side-side-side, and their angles at $R$ are equal. Those two angles make up the straight angle along $AC$, so each is $90°$: $OR \\perp AC$. This is the argument of the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) page, where the same isosceles median appeared.

So $OR$ is a line through the midpoint of $AC$ perpendicular to $AC$: it is the perpendicular bisector of $AC$, and it passes through $O$. All three perpendicular bisectors meet at $O$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `A circle is the set of all points at a fixed distance from its centre. Since $OA = OB = OC$, the circle with centre $O$ and radius $OA$ passes through $A$, $B$ and $C$: the circumcircle, drawn at the last step. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given bisectors, side-angle-side twice, equality to the same thing, the isosceles median, and the definition of a circle.

The proof also shows that the circumcircle is the only circle through the three vertices. Any centre of such a circle is equidistant from $A$ and $B$, so it lies on the perpendicular bisector of $AB$; likewise on that of $BC$; and two lines meet in at most one point. Three points that are not in a line determine exactly one circle.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag a vertex and watch the circumcentre move. For a triangle with all angles acute, $O$ is inside. Pull $A$ down until the angle at $A$ is a right angle and $O$ lands on the midpoint of $BC$: the hypotenuse is a diameter, which is [Thales' theorem](!/geometry/visual-tools/thales-theorem) read backwards. Pull $A$ down further, making the angle obtuse, and $O$ moves outside the triangle, beyond $BC$. The readout keeps the three distances equal throughout.

A drag that would flatten the triangle, or carry a vertex or the circumcentre out of the frame, is refused; a very flat triangle sends $O$ far away, which is the geometry of the theorem, not a limit of it.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **One circle through three points.** Three points not in a line lie on exactly one circle, with centre at the crossing of two perpendicular bisectors.
• **Where the centre is.** Inside an acute triangle, at the midpoint of the hypotenuse of a right triangle, outside an obtuse triangle.
• **The circumradius.** The [Law of Sines](!/trigonometry/sines-cosines-law#2) gives $a / \\sin A = 2R$, where $R = OA$ is the circumradius; the circumcentre is also where the [inscribed angle](!/geometry/visual-tools/inscribed-angle) theorem's central angles live, with $\\angle BOC = 2\\angle A$.
• **Equidistant from the vertices, not the sides.** The incentre, where the angle bisectors meet, is equidistant from the sides instead; the two centres coincide only in an equilateral triangle.
• **The Euler line.** The circumcentre, the [centroid](!/geometry/visual-tools/centroid) and the orthocentre lie on one line, with the centroid a third of the way from the circumcentre to the orthocentre.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the circumcentre of a triangle?',
          answer: 'The point where the three perpendicular bisectors of the sides meet. It is equidistant from the three vertices, so it is the centre of the circle through them, the circumcircle.'
        },
        obj2: {
          question: 'Why do the three perpendicular bisectors meet at one point?',
          answer: 'The crossing point of two of them is equidistant from all three vertices, by two side-angle-side congruences. A point equidistant from A and C lies on the perpendicular bisector of AC, so the third bisector passes through the same point.'
        },
        obj3: {
          question: 'Is the circumcentre always inside the triangle?',
          answer: 'No. It is inside for an acute triangle, on the hypotenuse for a right triangle, and outside for an obtuse triangle.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Circumcentre Proof Visualizer",
          "description": "Step-by-step interactive proof that the perpendicular bisectors of a triangle meet at one point equidistant from the vertices, the centre of the circumcircle, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/circumcentre",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Perpendicular Bisectors Meet at the Circumcentre", "item": "https://www.learnmathclass.com/geometry/visual-tools/circumcentre" }
          ]
        }
      }
    },
    'incentre': {
      proofKey: 'incentre',
      title: 'Incentre Proof | The Angle Bisectors Meet at One Point Step by Step',
      description: 'Watch the proof that the three angle bisectors of a triangle meet at one point, equidistant from the sides, and that the circle about it touches all three sides, step by step. Then drag the vertices.',
      h1Title: 'The Angle Bisectors Meet at the Incentre',
      url: '/geometry/visual-tools/incentre',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,12 10,64 70,64" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><circle cx="40" cy="47.5" r="16.5" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><line x1="40" y1="12" x2="40" y2="47.5" stroke="#FAC775" stroke-width="1" stroke-dasharray="3 2"/><line x1="10" y1="64" x2="40" y2="47.5" stroke="#FAC775" stroke-width="1" stroke-dasharray="3 2"/><line x1="70" y1="64" x2="40" y2="47.5" stroke="#FAC775" stroke-width="1" stroke-dasharray="3 2"/><circle cx="40" cy="47.5" r="2.4" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">ID = IE = IF</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Incentre Proof',
      keywords: [
        'incentre of a triangle',
        'incenter',
        'angle bisectors concurrent',
        'inscribed circle',
        'incircle proof',
        'equidistant from the sides',
        'triangle centres',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the three angle bisectors keep meeting at one point, with the circle about it still touching all three sides. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Each angle of a triangle has a bisector, the line that cuts it into two equal halves. The theorem says that the three bisectors pass through one point $I$, which is at the same distance from the three sides:

$$ID = IE = IF$$

where $D$, $E$, $F$ are the feet of the perpendiculars from $I$ to the sides. The circle with centre $I$ and radius $ID$ therefore touches all three sides; it is the inscribed circle, or incircle, and $I$ is the incentre. It is the twin of the [circumcentre](!/geometry/visual-tools/circumcentre) theorem, with "equidistant from the sides" in place of "equidistant from the vertices".

The key fact, that a point on a bisector is equidistant from the two sides of the angle, was already proved on the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page; here it is used twice and then turned round. In the player $I$ and the three feet are hollow, computed from the vertices. The readout under the canvas shows the three distances, in the frame's own units, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Feet of the Perpendiculars',
          content: `Take the bisectors of the angles at $A$ and at $B$. They meet at a point inside the triangle; call it $I$. The construction drops the three perpendiculars from $I$ to the sides: to $BC$ with foot $D$, to $CA$ with foot $E$, and to $AB$ with foot $F$. The lengths $ID$, $IE$, $IF$ are the distances from $I$ to the three sides, since the [perpendicular is the shortest](!/geometry/visual-tools/perpendicular-shortest) segment from a point to a line.

The whole proof is about these three lengths: two of them are equal because $I$ is on one bisector, two because it is on the other, and the three equalities together put $I$ on the third bisector.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The First Bisector',
          content: `$I$ lies on the bisector of the angle at $A$. The right triangles $AIE$ and $AIF$ share the hypotenuse $AI$, have equal angles $\\alpha$ at $A$, and have right angles at $E$ and $F$; by the [angle sum](!/geometry/visual-tools/triangle-angle-sum) their third angles agree too, and with the common side that makes them congruent (angle-angle-side). So

$$IE = IF$$

the distances from $I$ to the two sides of the angle at $A$ are equal. The player fills the two triangles and marks the equal legs with one tick each.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Second Bisector',
          content: `$I$ also lies on the bisector of the angle at $B$. The same argument with the right triangles $BIF$ and $BID$, which share the hypotenuse $BI$ and have equal angles $\\beta$ at $B$, gives

$$IF = ID$$

Together with the first step, $ID = IE = IF$: the crossing point of two bisectors is equidistant from all three sides. That is the first half of the theorem.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Third Bisector',
          content: `Now join $C$ to $I$ and look at the right triangles $CID$ and $CIE$. They share the hypotenuse $CI$ and have equal legs $ID = IE$. By the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) their remaining legs are equal too, $CD^2 = CI^2 - ID^2 = CI^2 - IE^2 = CE^2$, so the triangles agree in all three sides and are congruent by side-side-side. Their angles at $C$ are therefore equal:

$$\\angle ICD = \\angle ICE = \\gamma$$

which says that $CI$ bisects the angle at $C$. So the bisector of the third angle passes through $I$: all three bisectors are concurrent. This is the converse of the first two steps, a point equidistant from the two sides of an angle lies on its bisector, and it is proved by the same pair of right triangles read the other way.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The circle with centre $I$ and radius $ID = IE = IF$ passes through the three feet $D$, $E$, $F$. At each foot the side is perpendicular to the radius, and a line perpendicular to a radius at its end is a [tangent](!/geometry/visual-tools/tangent-radius); so each side touches the circle at one point, and the circle lies inside the triangle. It is the inscribed circle, drawn at the last step. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given bisectors, a construction, angle-angle-side twice, Pythagoras with side-side-side, and the tangent-radius theorem.

As with the circumcircle, the proof shows uniqueness too: the centre of any circle touching all three sides is equidistant from them, so it lies on all three bisectors, and two of those already meet in a single point.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag any vertex: the bisectors swing, the feet slide along the sides, the incircle grows and shrinks, and the readout keeps the three distances equal. Unlike the circumcentre, the incentre never leaves the inside of the triangle, because each bisector runs from its vertex into the interior. Make the triangle long and thin and the incircle becomes tiny; make it equilateral and the incentre coincides with the circumcentre and the centroid.

A drag that would flatten the triangle, or carry a vertex out of the frame, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The inradius.** The incircle's radius is $r = \\dfrac{\\text{Area}}{s}$, with $s$ the half perimeter: the segments from $I$ cut the triangle into three triangles of heights $r$ on the bases $a$, $b$, $c$. Heron's formula for the area is on the [sines and cosines law](!/trigonometry/sines-cosines-law#9) page.
• **Tangent lengths.** The sides are tangents from the vertices, so by the [two tangents](!/geometry/visual-tools/two-tangents) page the pieces from each vertex to the points of contact are equal: $s - a$, $s - b$, $s - c$.
• **Excircles.** The bisector of one angle together with the bisectors of the two exterior angles at the other vertices meet at an excentre, the centre of a circle touching one side and the extensions of the other two; there are three.
• **Always inside.** The incentre lies inside every triangle; the circumcentre does not.
• **The angle at the incentre.** $\\angle BIC = 90° + \\tfrac{1}{2}\\angle A$, from the angle sum in triangle $BIC$ with half-angles $\\beta$ and $\\gamma$.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the incentre of a triangle?',
          answer: 'The point where the three angle bisectors meet. It is equidistant from the three sides, so it is the centre of the circle touching all three, the incircle.'
        },
        obj2: {
          question: 'Why do the three angle bisectors meet at one point?',
          answer: 'The crossing point of two bisectors is equidistant from all three sides, by two angle-angle-side congruences. A point equidistant from the two sides of an angle lies on its bisector, so the third bisector passes through the same point.'
        },
        obj3: {
          question: 'What is the radius of the inscribed circle?',
          answer: 'The area of the triangle divided by half its perimeter, r = Area / s. Joining the incentre to the vertices cuts the triangle into three triangles whose heights are all r.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Incentre Proof Visualizer",
          "description": "Step-by-step interactive proof that the angle bisectors of a triangle meet at one point equidistant from the sides, the centre of the inscribed circle, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/incentre",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Angle Bisectors Meet at the Incentre", "item": "https://www.learnmathclass.com/geometry/visual-tools/incentre" }
          ]
        }
      }
    },
    'orthocentre': {
      proofKey: 'orthocentre',
      title: 'Orthocentre Proof | The Three Altitudes Meet at One Point Step by Step',
      description: 'Watch the proof that the three altitudes of a triangle meet at one point, the orthocentre, step by step: a larger triangle built from parallels turns the altitudes into perpendicular bisectors. Then drag the vertices.',
      h1Title: 'The Altitudes Meet at the Orthocentre',
      url: '/geometry/visual-tools/orthocentre',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,14 14,62 66,62" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="14" x2="40" y2="62" stroke="#FAC775" stroke-width="1.1"/><line x1="14" y1="62" x2="53" y2="38" stroke="#FAC775" stroke-width="1.1"/><line x1="66" y1="62" x2="27" y2="38" stroke="#FAC775" stroke-width="1.1"/><line x1="4" y1="14" x2="76" y2="14" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="3 2"/><circle cx="40" cy="46" r="2.4" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AD, BE, CF through H</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Orthocentre Proof',
      keywords: [
        'orthocentre of a triangle',
        'orthocenter',
        'altitudes concurrent',
        'three altitudes meet at one point',
        'orthocentre proof',
        'anticomplementary triangle',
        'triangle centres',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the three altitudes keep meeting at one point inside the triangle. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `An altitude of a triangle is the perpendicular from a vertex to the line of the opposite side. There are three, and the theorem says they pass through one point $H$, the orthocentre. Unlike the [centroid](!/geometry/visual-tools/centroid), the [circumcentre](!/geometry/visual-tools/circumcentre) and the [incentre](!/geometry/visual-tools/incentre), the orthocentre has no distance property of its own that makes the third line obviously pass through it; the proof on this page, due to Gauss, gets it by borrowing the circumcentre's.

The idea is to draw a second, larger triangle around the first, in such a way that the altitudes of the small triangle become the perpendicular bisectors of the large one. Perpendicular bisectors are known to be concurrent, and that does it. In the player the feet of the altitudes, the crossing point $H$ and the corners of the large triangle are hollow, computed from $A$, $B$, $C$. The readout under the canvas shows the angle between $CH$ and $AB$, which stays at $90°$ while you drag: that is the third altitude passing through $H$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Three Parallels',
          content: `The construction draws, through each vertex, the line parallel to the opposite side: through $A$ parallel to $BC$, through $B$ parallel to $CA$, through $C$ parallel to $AB$. The player marks each pair of parallels with the same chevrons, one, two or three. The three lines cross in pairs at three points, named $A'$ (opposite $A$), $B'$ and $C'$, and they form a triangle $A'B'C'$ that contains $ABC$.

The large triangle is similar to the small one and twice its size, with its sides parallel to the small one's; it is sometimes called the anticomplementary triangle. The next step shows the one property of it that the proof needs.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Midpoints',
          content: `Look at the quadrilateral $ABA'C$. Its sides $AB$ and $CA'$ are parallel by construction, and so are $AC$ and $BA'$, so it is a parallelogram and its [opposite sides are equal](!/geometry/visual-tools/parallelogram-sides): $BA' = AC$. The quadrilateral $AC'BC$ is a parallelogram for the same reason, so $C'B = AC$. Therefore $C'B = BA'$, and $B$ is the midpoint of the side $C'A'$ of the large triangle.

The same argument at the other two vertices shows that $A$ is the midpoint of $B'C'$ and $C$ the midpoint of $A'B'$. The player marks the six half-sides with one, two and three ticks. So the small triangle $ABC$ is the triangle of midpoints of the large one, which is the [midsegment theorem](!/geometry/visual-tools/midsegment) picture seen from the outside.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Altitudes as Perpendicular Bisectors',
          content: `Take the altitude $BE$. It is perpendicular to $CA$. The side $C'A'$ of the large triangle is parallel to $CA$, and a line perpendicular to one of two [parallel lines](!/geometry/visual-tools/parallel-lines) is perpendicular to the other, so $BE \\perp C'A'$. And $BE$ passes through $B$, which is the midpoint of $C'A'$. A line through the midpoint of a segment, perpendicular to it, is its perpendicular bisector:

$$\\text{the line } BE \\text{ is the perpendicular bisector of } C'A'$$

In the same way the altitude $AD$, perpendicular to $BC$ and through the midpoint $A$ of $B'C'$, is the perpendicular bisector of $B'C'$. The player marks the right angles at $A$ and $B$ between the altitude and the side of the large triangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Circumcentre of the Big Triangle',
          content: `The [perpendicular bisectors of a triangle meet at one point](!/geometry/visual-tools/circumcentre), its circumcentre. Apply that to the large triangle $A'B'C'$. Two of its perpendicular bisectors are the lines $AD$ and $BE$, and they meet at $H$. So $H$ is the circumcentre of $A'B'C'$, and the third perpendicular bisector, that of the side $A'B'$, passes through $H$ as well.

Nothing new was proved here; the work was done on the circumcentre page. What this page adds is the observation that the altitudes of one triangle are the perpendicular bisectors of another.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The perpendicular bisector of $A'B'$ is the line through its midpoint, which is $C$, perpendicular to $A'B'$. Since $A'B' \\parallel AB$, that is the line through $C$ perpendicular to $AB$: the third altitude $CF$. It passes through $H$, so all three altitudes of $ABC$ meet at $H$, the orthocentre. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given altitudes, a construction, parallelogram sides, perpendicularity carried across parallels, the circumcentre theorem, and the identification of the third line.

The proof gives a little more than concurrence: the orthocentre of a triangle is the circumcentre of its anticomplementary triangle. Turned round, the circumcentre of any triangle is the orthocentre of its medial triangle, the triangle of its midpoints.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag a vertex and watch all three altitudes swing while still meeting at $H$; the readout keeps the angle between $CH$ and $AB$ at $90°$. Pull $A$ towards one side and $H$ moves towards the opposite side; for an equilateral triangle $H$ coincides with the centroid, the circumcentre and the incentre. The large triangle moves with the small one, always twice its size.

The player keeps the triangle acute, so that the feet of the altitudes lie on the sides and $H$ stays inside; for a right triangle $H$ is the vertex of the right angle, and for an obtuse triangle it lies outside, with two of the altitudes meeting the extensions of the sides. The theorem holds in all three cases. A drag that would carry a corner of the large triangle out of the frame is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Where it is.** Inside an acute triangle, at the right-angle vertex of a right triangle, outside an obtuse triangle.
• **The Euler line.** The orthocentre, the [centroid](!/geometry/visual-tools/centroid) and the circumcentre lie on one line, with the centroid between them at a third of the way from the circumcentre; this follows from the proof above, since the large triangle is a half-turn-and-double of the small one about the centroid.
• **An orthocentric system.** Each of the four points $A$, $B$, $C$, $H$ is the orthocentre of the triangle formed by the other three.
• **The orthic triangle.** The feet $D$, $E$, $F$ form a triangle whose angle bisectors are the altitudes of $ABC$, so $H$ is its incentre; and $A$, $F$, $H$, $E$ lie on a circle, since the angles at $F$ and $E$ are right, as in [Thales' theorem](!/geometry/visual-tools/thales-theorem) and the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) page.
• **Reflections.** The reflection of $H$ in any side lies on the circumcircle of $ABC$.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the orthocentre of a triangle?',
          answer: 'The point where the three altitudes meet. It is inside an acute triangle, at the right angle of a right triangle, and outside an obtuse one.'
        },
        obj2: {
          question: 'Why do the three altitudes meet at one point?',
          answer: 'Drawing through each vertex the parallel to the opposite side gives a larger triangle whose side midpoints are the original vertices. The altitudes of the original triangle are then the perpendicular bisectors of the larger one, and perpendicular bisectors are concurrent.'
        },
        obj3: {
          question: 'How is the orthocentre related to the circumcentre?',
          answer: 'The orthocentre of a triangle is the circumcentre of the larger triangle formed by the parallels through its vertices; equivalently, the circumcentre of any triangle is the orthocentre of its medial triangle. Both lie on the Euler line with the centroid.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Orthocentre Proof Visualizer",
          "description": "Step-by-step interactive proof that the three altitudes of a triangle meet at one point, the orthocentre, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/orthocentre",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Altitudes Meet at the Orthocentre", "item": "https://www.learnmathclass.com/geometry/visual-tools/orthocentre" }
          ]
        }
      }
    },
    'euler-line': {
      proofKey: 'eulerLine',
      title: 'Euler Line Proof | Circumcentre, Centroid and Orthocentre on One Line Step by Step',
      description: 'Watch the proof that the circumcentre, centroid and orthocentre of a triangle lie on one line, with the centroid a third of the way from the circumcentre, step by step through a parallelogram and a second triangle. Then drag the vertices.',
      h1Title: 'The Euler Line',
      url: '/geometry/visual-tools/euler-line',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="52,14 14,56 68,56" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="26" y1="46" x2="60" y2="31" stroke="#FAC775" stroke-width="1.2" stroke-dasharray="3 2"/><circle cx="33" cy="43" r="2.3" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><circle cx="45" cy="38" r="2.3" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><circle cx="51" cy="35" r="2.3" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">HG = 2 GO</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Euler Line Proof',
      keywords: [
        'euler line',
        'euler line proof',
        'circumcentre centroid orthocentre collinear',
        'HG = 2 GO',
        'triangle centres on one line',
        'euler line theorem',
        'triangle centres',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the three centres slide along one line, always in the same order and the same proportion. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A triangle has a [circumcentre](!/geometry/visual-tools/circumcentre) $O$, where the perpendicular bisectors meet; a [centroid](!/geometry/visual-tools/centroid) $G$, where the medians meet; and an [orthocentre](!/geometry/visual-tools/orthocentre) $H$, where the altitudes meet. In an equilateral triangle the three coincide; in any other triangle they are three different points, and Euler showed in 1765 that they always lie on one line, with the centroid between the other two and twice as close to the circumcentre:

$$H, G, O \\text{ collinear}, \\qquad HG = 2 \\cdot GO$$

The line is the Euler line. The incentre is not on it, except in the equilateral case.

The proof builds a second triangle, $AHA'$, whose centroid turns out to be $G$ and whose medians are the segments $AD$ and $HO$; the centroid page then does the rest. In the player all three centres are hollow, computed from the vertices, as are the points of the construction. The readout under the canvas shows the ratio $HG / GO$ and the angle $HGO$, which stay at $2$ and $180°$ while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Antipode of A',
          content: `The construction starts with the circumcircle, centre $O$ through $A$, $B$, $C$. Draw the diameter from $A$ through $O$ and call its other end $A'$, the point of the circle opposite $A$; by construction $O$ is the midpoint of $AA'$. Join $A'$ to $B$ and to $C$.

Also draw the two altitudes from $B$ and from $C$; they pass through $H$, which is what the orthocentre is. These two altitudes and the two new segments $A'B$, $A'C$ will turn out to make a parallelogram, and that parallelogram is the key to the proof.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Parallelogram',
          content: `$AA'$ is a diameter, so by [Thales' theorem](!/geometry/visual-tools/thales-theorem) the angles at $B$ and at $C$ in the semicircle are right angles: $A'B \\perp AB$ and $A'C \\perp AC$. The altitude from $C$ is also perpendicular to $AB$, and two lines perpendicular to the same line are parallel, so $A'B \\parallel CH$. In the same way the altitude from $B$ is perpendicular to $AC$, so $A'C \\parallel BH$.

The quadrilateral $BHCA'$ has both pairs of opposite sides parallel, so it is a [parallelogram](!/geometry/visual-tools/parallelogram-sides). The player fills it and marks the two pairs of parallels with chevrons. It is a strange-looking parallelogram, with $H$ inside the triangle and $A'$ outside, but the sides are parallel in pairs and that is all a parallelogram needs.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Midpoint D',
          content: `The [diagonals of a parallelogram bisect each other](!/geometry/visual-tools/parallelogram-diagonals). The diagonals of $BHCA'$ are $BC$ and $HA'$, so they cross at the midpoint of $BC$, which is $D$, and $D$ is also the midpoint of $HA'$:

$$HD = DA'$$

The player draws $HA'$ and marks its two halves. This is the fact the whole proof turns on: the midpoint of the side $BC$ of the original triangle is the midpoint of the segment from the orthocentre to the antipode of $A$. (It also shows, by the [midsegment theorem](!/geometry/visual-tools/midsegment) in triangle $AHA'$, that $OD = \\tfrac{1}{2} AH$; that is a consequence, not a step.)`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Medians of AHA′',
          content: `Now look at the triangle $AHA'$, filled in the player. $D$ is the midpoint of its side $HA'$, so $AD$ is a median of this triangle. $O$ is the midpoint of its side $AA'$, so $HO$ is a median of this triangle too.

The [medians of a triangle meet at its centroid](!/geometry/visual-tools/centroid), which lies two thirds of the way from each vertex along its median. So the two medians $AD$ and $HO$ of triangle $AHA'$ meet at a point two thirds of the way from $A$ along $AD$, and two thirds of the way from $H$ along $HO$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The segment $AD$ joins the vertex $A$ of the original triangle to the midpoint of the opposite side, so it is a median of $ABC$ as well, and the point two thirds of the way from $A$ along it is the centroid $G$ of $ABC$. That is the same point found in the previous step. So $G$ is the centroid of $AHA'$ too, and it lies on the median $HO$ of that triangle, two thirds of the way from $H$:

$$G \\in HO, \\qquad HG = \\tfrac{2}{3} HO, \\qquad GO = \\tfrac{1}{3} HO, \\qquad HG = 2 \\cdot GO$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the three given centres, a construction, Thales with parallels, the parallelogram's diagonals, the medians of the second triangle, and the identification of the two centroids.

The argument is a chain of earlier pages: Thales, the parallelogram pages, the centroid. Each was proved on its own; here they are only assembled.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag a vertex and watch the three centres move: $H$ fastest, $O$ slowest, $G$ in between, and always on one line with $G$ a third of the way from $O$ to $H$. The readout keeps the ratio at $2$ and the angle at $180°$. Make the triangle nearly isosceles and the three points crowd together on the axis of symmetry; make it equilateral and they coincide, which is why the player refuses triangles with $H$ and $O$ too close to tell apart.

The player also keeps the triangle acute, so that $H$ stays inside and the picture of the parallelogram is readable, and it keeps the circumcircle within the frame. The theorem itself holds for every triangle; for an obtuse one $H$ and $O$ are both outside, on opposite sides, with $G$ still between them.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **AH = 2 OD.** In triangle $AHA'$, $OD$ is a midsegment, so $OD \\parallel AH$ and $AH = 2 \\cdot OD$: the distance from a vertex to the orthocentre is twice the distance from the circumcentre to the opposite side.
• **The nine-point circle.** The midpoint of $HO$ is the centre of a circle through the three midpoints of the sides, the three feet of the altitudes and the three midpoints of $AH$, $BH$, $CH$; its radius is half the circumradius, and its centre is also on the Euler line.
• **Special triangles.** In a right triangle $H$ is the right-angle vertex and $O$ the midpoint of the hypotenuse, so the Euler line is the median to the hypotenuse. In an isosceles triangle it is the axis of symmetry. In an equilateral triangle the three centres coincide and there is no line.
• **With vectors.** Taking $O$ as origin, $G = \\tfrac{1}{3}(A + B + C)$ and $H = A + B + C$, so $H = 3G$: the three points are on one line through the origin, with $OH = 3 \\cdot OG$.
• **The incentre.** It lies on the Euler line only for isosceles triangles, where everything lies on the axis.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the Euler line?',
          answer: 'The line through the circumcentre, the centroid and the orthocentre of a triangle. The centroid lies between the other two, a third of the way from the circumcentre to the orthocentre.'
        },
        obj2: {
          question: 'Why are the circumcentre, centroid and orthocentre collinear?',
          answer: 'The segment from the orthocentre to the point opposite A on the circumcircle is bisected by the midpoint of BC, so the median AD and the segment HO are both medians of the triangle AHA′. They meet at its centroid, which is also the centroid G of ABC; so G lies on HO.'
        },
        obj3: {
          question: 'Is the incentre on the Euler line?',
          answer: 'Only in an isosceles triangle, where the line is the axis of symmetry and every centre lies on it. In a general triangle the incentre is off the line.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Euler Line Proof Visualizer",
          "description": "Step-by-step interactive proof that the circumcentre, centroid and orthocentre of a triangle lie on one line with HG = 2 GO, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/euler-line",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Euler Line", "item": "https://www.learnmathclass.com/geometry/visual-tools/euler-line" }
          ]
        }
      }
    },
    'nine-point-circle': {
      proofKey: 'ninePointCircle',
      title: 'Nine-Point Circle Proof | Midpoints and Feet of the Altitudes on One Circle Step by Step',
      description: 'Watch the proof that the midpoints of the sides, the feet of the altitudes and the midpoints from the vertices to the orthocentre all lie on one circle, centred halfway between the circumcentre and the orthocentre, step by step. Then drag the vertices.',
      h1Title: 'The Nine-Point Circle',
      url: '/geometry/visual-tools/nine-point-circle',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="44,12 10,64 70,64" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4"/><circle cx="40.5" cy="46" r="16.5" fill="none" stroke="#FAC775" stroke-width="1.3"/><circle cx="27" cy="38" r="1.8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><circle cx="57" cy="38" r="1.8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><circle cx="40" cy="64" r="1.8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><circle cx="44" cy="64" r="1.8" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><circle cx="24.5" cy="42" r="1.8" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><circle cx="55" cy="41" r="1.8" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">radius R / 2</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Nine-Point Circle Proof',
      keywords: [
        'nine-point circle',
        'nine point circle proof',
        'feuerbach circle',
        'euler circle',
        'midpoints and feet of altitudes on a circle',
        'nine-point centre',
        'triangle centres',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch nine computed points stay on one circle, with its centre sliding along the Euler line. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Every triangle has three natural sets of three points: the midpoints $D$, $E$, $F$ of its sides; the feet $H_a$, $H_b$, $H_c$ of its altitudes; and the midpoints $P$, $Q$, $R$ of the segments from the vertices to the [orthocentre](!/geometry/visual-tools/orthocentre) $H$. The theorem says that all nine lie on one circle, the nine-point circle, and more:

$$\\text{centre } N = \\text{midpoint of } OH, \\qquad \\text{radius } = \\tfrac{1}{2} R$$

where $O$ is the circumcentre and $R$ the circumradius. It was found early in the nineteenth century and is the last of the classical results about the centres of a triangle on these pages.

The proof is built from midsegments: they make two rectangles with a common diagonal, and a rectangle's four corners lie on the circle whose diameter is its diagonal. The feet join by the converse of Thales' theorem, and the centre and radius come from two parallelograms. In the player every point but $A$, $B$, $C$ is hollow, computed from the vertices. The readout under the canvas shows the smallest and largest distance from $N$ to the nine points, which agree while you drag, and half the circumradius beside them.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The First Rectangle',
          content: `Take the four points $E$, $F$, $Q$, $R$. $EF$ joins the midpoints of $CA$ and $AB$, so it is a [midsegment](!/geometry/visual-tools/midsegment) of triangle $ABC$: parallel to $BC$ and half of it. $QR$ joins the midpoints of $HB$ and $HC$, so it is a midsegment of triangle $HBC$: also parallel to $BC$ and half of it. So $EF$ and $QR$ are equal and parallel.

$FQ$ joins the midpoints of $AB$ and $HB$, a midsegment of triangle $ABH$, parallel to $AH$; and $ER$ is a midsegment of triangle $ACH$, also parallel to $AH$. Now $AH$ is the altitude from $A$, perpendicular to $BC$. So the sides of $EFQR$ are parallel in pairs to two perpendicular lines: it is a rectangle, filled in the player with its right angle marked at $F$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Circle Through Four',
          content: `The [diagonals of a rectangle are equal](!/geometry/visual-tools/rectangle-diagonals) and bisect each other. So the diagonals $EQ$ and $FR$ cross at a point $N$ that is at the same distance from all four corners:

$$NE = NF = NQ = NR$$

The circle with centre $N$ and radius $NE$ passes through $E$, $F$, $Q$ and $R$, and $EQ$ is one of its diameters. The player draws the circle at this step; what follows is to show that the other five points lie on it as well.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Second Rectangle',
          content: `Now the four points $D$, $E$, $P$, $Q$. $DE$ is a midsegment of triangle $CAB$, parallel to $AB$; $PQ$ is a midsegment of triangle $HAB$, also parallel to $AB$. $DQ$ is a midsegment of triangle $BCH$, parallel to $CH$; $EP$ is a midsegment of triangle $ACH$, also parallel to $CH$. And $CH$ is the altitude from $C$, perpendicular to $AB$. So $DEPQ$ is a rectangle too.

Its diagonals are $EQ$ and $DP$. But $EQ$ is the same segment as before, the diameter of the circle just drawn; the diagonals of this rectangle bisect each other at the midpoint of $EQ$, which is $N$, and $ND = NP = NE$. So $D$ and $P$ lie on the same circle, and $DP$ is another diameter of it. Six points so far.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Feet of the Altitudes',
          content: `The foot $H_a$ lies on the side $BC$, which also contains $D$, and on the altitude $AH$, which also contains $P$. The altitude is perpendicular to the side, so

$$\\angle D H_a P = 90°$$

A point that sees a segment at a right angle lies on the circle with that segment as diameter; this is the converse of [Thales' theorem](!/geometry/visual-tools/thales-theorem), and it follows from the median to the hypotenuse being half the hypotenuse, as the rectangle page noted. $DP$ is a diameter of the circle, so $H_a$ lies on it.

The same argument puts $H_b$ on the circle, since it sees the diameter $EQ$ at a right angle ($E$ on $CA$, $Q$ on the altitude $BH$), and $H_c$, which sees the diameter $FR$ at a right angle. That makes nine points on one circle, and the theorem's first claim is proved.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'The Centre',
          content: `Where is $N$? Bring in the [circumcentre](!/geometry/visual-tools/circumcentre) $O$. The segment $OD$ is perpendicular to $BC$, because $O$ lies on the perpendicular bisector of $BC$; so is the altitude $AH$. Two lines perpendicular to $BC$ are parallel, so $OD \\parallel AH$, and in particular $OD \\parallel PH$. The [Euler line](!/geometry/visual-tools/euler-line) page showed $AH = 2 \\cdot OD$, so $OD = \\tfrac{1}{2} AH = PH$.

$ODHP$ now has a pair of opposite sides equal and parallel, so it is a [parallelogram](!/geometry/visual-tools/parallelogram-sides), and its [diagonals bisect each other](!/geometry/visual-tools/parallelogram-diagonals). Its diagonals are $DP$ and $OH$. The midpoint of $DP$ is $N$, so $N$ is also the midpoint of $OH$: the nine-point centre is halfway between the circumcentre and the orthocentre, on the Euler line.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Why It Holds',
          content: `The same facts give the radius. $OD = AP$, since both equal $\\tfrac{1}{2} AH$, and $OD \\parallel AP$. So $OAPD$ is a parallelogram and its opposite sides are equal: $DP = OA$. But $DP$ is a diameter of the nine-point circle and $OA$ is the circumradius $R$, so the nine-point circle has diameter $R$, that is, radius $\\tfrac{1}{2} R$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given points, midsegments twice, rectangle diagonals, the converse of Thales, and the two parallelograms.

Everything was assembled from earlier pages: the midsegment theorem, the rectangle and parallelogram pages, Thales, the Euler line. The nine-point circle is where those results meet.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Dragging the Figure',
          content: `Drag a vertex and watch the nine points move while the circle through them simply changes size and position; the readout keeps the smallest and largest distance from $N$ equal, and equal to half the circumradius. Watch $N$ too: it stays halfway between $O$ and $H$, so as the triangle leans the whole Euler line swings and $N$ swings with it.

The player keeps the triangle acute, so that the feet of the altitudes lie on the sides and the two rectangles are readable, and it keeps $O$ and $H$ apart; the theorem holds for every triangle. Make the triangle nearly equilateral and the nine points pair up, each midpoint of a side approaching the foot of an altitude.`,
          before: '',
          after: '',
          link: ''
        },
        obj9: {
          title: 'Consequences',
          content: `• **Three circumcircles in one.** The nine-point circle is the circumcircle of the medial triangle $DEF$, of the orthic triangle $H_aH_bH_c$, and of the triangle $PQR$.
• **The centroid.** The [centroid](!/geometry/visual-tools/centroid) $G$ lies on the Euler line a third of the way from $O$ to $H$, and $N$ halfway; shrinking the circumcircle by half about $G$, with a half turn, gives the nine-point circle.
• **Feuerbach's theorem.** The nine-point circle touches the inscribed circle and the three excircles; the point of contact with the [incircle](!/geometry/visual-tools/incentre) is the Feuerbach point.
• **An orthocentric system.** The four triangles formed by $A$, $B$, $C$, $H$ taken three at a time share the same nine-point circle, since the four points are each the orthocentre of the other three.
• **Right triangles.** In a right triangle two of the feet coincide with the right-angle vertex, and the circle still passes through the remaining points, its centre at the midpoint of the median to the hypotenuse.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the nine-point circle?',
          answer: 'The circle through the three midpoints of the sides, the three feet of the altitudes and the three midpoints between the vertices and the orthocentre. Its centre is halfway between the circumcentre and the orthocentre and its radius is half the circumradius.'
        },
        obj2: {
          question: 'Why do the nine points lie on one circle?',
          answer: 'Midsegments make two rectangles, EFQR and DEPQ, with the common diagonal EQ, so their six corners lie on the circle with diameter EQ. Each foot of an altitude sees a diameter of that circle at a right angle, so the feet lie on it too.'
        },
        obj3: {
          question: 'Where is the centre of the nine-point circle?',
          answer: 'At the midpoint of the segment from the circumcentre O to the orthocentre H, on the Euler line; ODHP is a parallelogram whose diagonals OH and DP bisect each other.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Nine-Point Circle Proof Visualizer",
          "description": "Step-by-step interactive proof that nine special points of a triangle lie on one circle centred at the midpoint of OH with radius half the circumradius, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/nine-point-circle",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Nine-Point Circle", "item": "https://www.learnmathclass.com/geometry/visual-tools/nine-point-circle" }
          ]
        }
      }
    },
    'intersecting-chords': {
      proofKey: 'powerOfPoint',
      title: 'Intersecting Chords Theorem Proof | Power of a Point Step by Step',
      description: 'Watch the proof that two chords crossing inside a circle are cut into pieces with equal products, PA · PB = PC · PD, step by step with the perpendicular from the centre and Pythagoras, no similar triangles. Then slide the chords.',
      h1Title: 'Intersecting Chords and the Power of a Point',
      url: '/geometry/visual-tools/intersecting-chords',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="27" fill="none" stroke="#B5D4F4" stroke-width="1.3"/><line x1="16" y1="28" x2="64" y2="54" stroke="#E6F1FB" stroke-width="1.4"/><line x1="52" y1="15" x2="30" y2="65" stroke="#E6F1FB" stroke-width="1.4"/><circle cx="41.5" cy="41.8" r="2.4" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><circle cx="40" cy="40" r="1.6" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PA·PB = PC·PD</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Intersecting Chords Proof',
      keywords: [
        'intersecting chords theorem',
        'power of a point',
        'chord chord theorem',
        'PA PB = PC PD',
        'euclid III.35',
        'circle theorems',
        'intersecting chords proof',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the ends of the two chords round the circle and watch the two products in the readout stay equal to each other and to a number that depends only on the crossing point. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two chords $AB$ and $CD$ of a circle cross at a point $P$ inside it. Each chord is cut by $P$ into two pieces, and the theorem, Proposition 35 of Book III of Euclid's Elements, says that the products of the pieces are equal:

$$PA \\cdot PB = PC \\cdot PD$$

The usual modern proof uses similar triangles: the inscribed angles on the same arcs make $PAC$ and $PDB$ similar. The proof on this page is Euclid's own, which uses no similarity at all; it shows that each product equals $R^2 - OP^2$, where $R$ is the radius and $O$ the centre, a quantity that depends on $P$ and the circle but not on the chord. That quantity is the power of the point $P$.

In the player the four chord ends slide round the circle and $P$, the crossing point, is computed, as are the feet of the perpendiculars from the centre. The readout under the canvas shows the two products and $R^2 - OP^2$, in the frame's own units squared, live while you drag.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Perpendicular from the Centre',
          content: `Drop the perpendicular from the centre $O$ to the chord $AB$, meeting it at $M$. The [perpendicular from the centre bisects the chord](!/geometry/visual-tools/chord-bisector), so $M$ is the midpoint of $AB$:

$$AM = MB$$

marked with one tick each. Join $O$ to $A$ and to $P$. The point $M$ is the reference from which both $A$ and $P$ will be measured; the whole proof is about the two distances $AM$ and $MP$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Difference of Squares',
          content: `$P$ lies on the chord, on one side of the midpoint $M$; say between $M$ and $B$. Then the piece $PA$ is the half-chord plus $MP$, and the piece $PB$ is the half-chord minus $MP$:

$$PA = AM + MP, \\qquad PB = MB - MP = AM - MP$$

Their product is a difference of squares:

$$PA \\cdot PB = (AM + MP)(AM - MP) = AM^2 - MP^2$$

If $P$ is on the other side of $M$ the roles of $A$ and $B$ swap and the result is the same. So the product of the two pieces of any chord through $P$ is the square of its half-length minus the square of the distance from its midpoint to $P$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Pythagoras Twice',
          content: `The triangles $OMA$ and $OMP$ both have a right angle at $M$, filled in two colours. The [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) in each gives

$$AM^2 = OA^2 - OM^2, \\qquad MP^2 = OP^2 - OM^2$$

Subtract, and $OM^2$ cancels:

$$AM^2 - MP^2 = OA^2 - OP^2 = R^2 - OP^2$$

since $OA$ is a radius. So $PA \\cdot PB = R^2 - OP^2$. Nothing on the right-hand side refers to the chord: it is the same number for every chord through $P$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Other Chord',
          content: `Now do the same for $CD$. The foot $N$ of the perpendicular from $O$ is the midpoint of $CD$ (two ticks), $P$ lies on one side of it, so

$$PC \\cdot PD = CN^2 - NP^2$$

and Pythagoras in the right triangles $ONC$ and $ONP$ gives $CN^2 - NP^2 = OC^2 - OP^2 = R^2 - OP^2$. The player fills these two triangles in the two remaining colours.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Both products have been shown equal to the same number, $R^2 - OP^2$, so

$$PA \\cdot PB = PC \\cdot PD = R^2 - OP^2$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given chords, the chord bisector theorem, a difference of squares, the Pythagorean theorem, the same argument on the other chord, and equality to the same thing.

The number $R^2 - OP^2$ is the power of $P$ with respect to the circle. The proof gives more than the theorem asks: not just that the two products are equal, but what they equal. For $P$ at the centre every chord is a diameter cut in half and the power is $R^2$; as $P$ moves out to the circle the power falls to $0$. The similar-triangles proof, which uses the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) to match the angles of $PAC$ and $PDB$, proves the equality but not the value.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide any chord end round the circle: the chord swings, $P$ moves along the other chord, both products change, and they change together, always matching $R^2 - OP^2$ in the readout. Move $P$ towards the centre by making the chords cross near $O$ and the products grow towards $R^2$; move it out towards the circle and they shrink towards $0$. Drag $O$ to move the whole circle.

The player keeps the chords crossing properly inside the circle, with $P$ away from the centre and from the two midpoints so that the right triangles stay visible; a drag that would separate the chords, or bring $P$ too close to $O$, $M$ or $N$, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Outside the circle.** For a point $P$ outside the circle and two lines through it cutting the circle at $A$, $B$ and $C$, $D$, the same argument with $P$ beyond the midpoint gives $PA \\cdot PB = PC \\cdot PD = OP^2 - R^2$: the power is positive outside, zero on the circle, negative inside when signed.
• **The tangent.** When a line through an outside point touches the circle, the two points coincide and the product becomes the square of the tangent length: $PT^2 = OP^2 - R^2$, which the [two tangents](!/geometry/visual-tools/two-tangents) page found with Pythagoras directly.
• **The converse.** If two segments $AB$ and $CD$ cross at $P$ with $PA \\cdot PB = PC \\cdot PD$, the four points lie on a circle; this is a standard test for [cyclic quadrilaterals](!/geometry/visual-tools/cyclic-quadrilateral).
• **A diameter through P.** Taking the chord through $P$ and $O$ gives the pieces $R - OP$ and $R + OP$, whose product is $R^2 - OP^2$ at once.
• **The radical axis.** The points with equal power with respect to two circles form a line perpendicular to the line of centres; for two crossing circles it is the line through their common points.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What does the intersecting chords theorem say?',
          answer: 'When two chords of a circle cross at a point P, the products of the two pieces of each chord are equal: PA · PB = PC · PD.'
        },
        obj2: {
          question: 'What is the power of a point?',
          answer: 'For a point P and a circle with centre O and radius R, the number R² − OP² (or OP² − R² for an outside point). Every chord through P is cut into pieces whose product is this number.'
        },
        obj3: {
          question: 'Can the intersecting chords theorem be proved without similar triangles?',
          answer: "Yes, this is Euclid's proof: with M the midpoint of a chord, the product of the pieces is AM² − MP², and Pythagoras turns that into R² − OP², which is the same for every chord through P."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Intersecting Chords Proof Visualizer",
          "description": "Step-by-step interactive proof that two chords crossing inside a circle are cut into pieces with equal products, the power of a point, with chord ends that slide round the circle.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/intersecting-chords",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Intersecting Chords and the Power of a Point", "item": "https://www.learnmathclass.com/geometry/visual-tools/intersecting-chords" }
          ]
        }
      }
    },
    'sss-congruence': {
      proofKey: 'sssCongruence',
      title: 'SSS Congruence Proof | Three Equal Sides Make Congruent Triangles Step by Step',
      description: 'Watch the proof that two triangles with three pairs of equal sides are congruent, derived from the side-angle-side criterion with two isosceles triangles, step by step. Then drag the vertices.',
      h1Title: 'The SSS Congruence Criterion',
      url: '/geometry/visual-tools/sss-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,40 70,40 34,12" fill="#FAC775" fill-opacity="0.45" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="10,40 70,40 34,68" fill="#85B7EB" fill-opacity="0.45" stroke="#E6F1FB" stroke-width="1.4"/><line x1="34" y1="12" x2="34" y2="68" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">SSS from SAS</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'SSS Congruence Proof',
      keywords: [
        'SSS congruence',
        'side side side',
        'congruent triangles proof',
        'triangle congruence criteria',
        'SSS from SAS',
        'euclid I.8',
        'congruence theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices of the upper triangle and watch its copy below the base keep the same angle at its apex. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two triangles are congruent when one can be laid exactly on the other: all three sides and all three angles agree. The congruence criteria say that less is enough. Side-angle-side, used on many of these pages, says two sides and the angle between them determine a triangle; this page proves the side-side-side criterion from it:

$$AB = A'B', \\; BC = B'C', \\; CA = C'A' \\implies ABC \\cong A'B'C'$$

three pairs of equal sides force the angles to agree too. It is Proposition 8 of Book I of Euclid's Elements. Euclid proved it by laying one triangle on the other; the proof here, found by Philo of Byzantium, draws the second triangle on the far side of a common side and uses the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem twice instead.

In the player the lower triangle is the copy: its apex $D$ is placed so that $AD = AC$ and $BD = BC$, and it follows when $A$, $B$ or $C$ is dragged. The readout under the canvas shows the apex angles at $C$ and at $D$, which the proof shows to be equal.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Placing the Second Triangle',
          content: `Take the common side first. The second triangle has a side $A'B'$ equal to $AB$; move it so that this side lies on $AB$ with $A'$ at $A$ and $B'$ at $B$, and so that its third vertex falls on the other side of the line $AB$ from $C$. Call that vertex $D$. Then $AD = A'C' = AC$ and $BD = B'C' = BC$, marked in the player with one tick and two ticks.

The two triangles now sit base to base on $AB$, one above and one below, filled in two colours. Nothing has been assumed about their angles. The claim to prove is that the angle at $D$ equals the angle at $C$; once it does, side-angle-side applies and the triangles are congruent.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Joining C and D',
          content: `The construction is one segment, $CD$. It crosses the common side $AB$ and splits each triangle into two. More usefully, it creates two new triangles that straddle $AB$: the triangle $ACD$, whose sides $AC$ and $AD$ are equal, and the triangle $BCD$, whose sides $BC$ and $BD$ are equal. Both are isosceles, with their apexes at $A$ and at $B$ and their common base $CD$.

Everything the proof needs is now in the picture: the angles at $C$ and $D$ have each been cut into two pieces by $CD$, and the pieces belong to isosceles triangles.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The First Isosceles Triangle',
          content: `In triangle $ACD$, $AC = AD$, so by the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem the angles at the ends of the base $CD$ are equal:

$$\\angle ACD = \\angle ADC = \\alpha$$

The player marks both with the same colour. $\\angle ACD$ is the piece of the angle at $C$ on the side of $A$; $\\angle ADC$ is the piece of the angle at $D$ on the side of $A$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Second Isosceles Triangle',
          content: `In triangle $BCD$, $BC = BD$, so the same theorem gives

$$\\angle BCD = \\angle BDC = \\beta$$

These are the other two pieces: the piece of the angle at $C$ on the side of $B$, and the piece of the angle at $D$ on the side of $B$. Two isosceles triangles, two pairs of equal base angles, and the four pieces are accounted for.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Adding the Angles',
          content: `The segment $CD$ passes through the inside of the angle at $C$ and the inside of the angle at $D$, so each whole angle is the sum of its two pieces:

$$\\angle ACB = \\alpha + \\beta, \\qquad \\angle ADB = \\alpha + \\beta$$

So $\\angle ACB = \\angle ADB$: the apex angles of the two triangles are equal. This is the step the whole proof was for. (When $CD$ falls outside one of the angles, which happens if the angle at $A$ or $B$ is obtuse, the whole angle is a difference $\\beta - \\alpha$ instead of a sum, and the argument is the same; the player keeps to the case drawn.)`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Why It Holds',
          content: `Now compare the two triangles with side-angle-side. $AC = AD$, $CB = DB$, and the angles between those sides, at $C$ and at $D$, have just been shown equal. So $ABC \\cong ABD$. And $ABD$ is the second triangle moved into place, so $ABC \\cong A'B'C'$: three equal sides make congruent triangles. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given sides, a construction, the isosceles theorem twice, an addition, and side-angle-side.

The proof reduces one criterion to another. Side-angle-side itself is not proved on these pages; Euclid proves it by superposition, laying one triangle on the other, and most modern treatments take it as an axiom. Everything else, including this page, is built on it.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Dragging the Figure',
          content: `Drag $C$: the upper triangle changes shape and the lower one changes with it, since $D$ is always placed with $AD = AC$ and $BD = BC$; the readout keeps the two apex angles equal. Drag $A$ or $B$ to change the common side. Watch the pieces $\\alpha$ and $\\beta$ trade sizes as $C$ moves from side to side while the sums stay equal.

The player keeps the angles at $A$ and $B$ acute, so that $CD$ crosses $AB$ between $A$ and $B$ and runs inside both apex angles; a drag that would make one of those angles obtuse, or carry a vertex out of the frame, is refused. The theorem holds in the obtuse case too, with a difference of angles in place of a sum.`,
          before: '',
          after: '',
          link: ''
        },
        obj9: {
          title: 'Consequences',
          content: `• **Rigidity.** A triangle with given sides has only one shape, which is why triangles brace frames, bridges and roofs: three bars pinned together cannot flex, while four can.
• **Three sides, one triangle.** The construction of a triangle from three given lengths, with two compass arcs, gives the same triangle whoever draws it, provided the lengths satisfy the [triangle inequality](!/geometry/visual-tools/triangle-inequality).
• **Used on these pages.** Side-side-side carried the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) page and the third bisector on the [circumcentre](!/geometry/visual-tools/circumcentre) page.
• **ASA and AAS.** Angle-side-angle also follows from side-angle-side, by contradiction: if the sides next to the equal angles differed, cutting the longer one down to the shorter would give, by SAS, a second triangle with the same angle at the far vertex, which is impossible. Angle-angle-side then follows from the [angle sum](!/geometry/visual-tools/triangle-angle-sum).
• **Right triangles.** Hypotenuse and one leg determine a right triangle, since the Pythagorean theorem gives the other leg and SSS finishes.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the SSS congruence criterion?',
          answer: 'If the three sides of one triangle equal the three sides of another, the triangles are congruent: their angles agree as well, and one can be laid exactly on the other.'
        },
        obj2: {
          question: 'How is SSS proved from SAS?',
          answer: 'Place the second triangle on the far side of a common side. The two apexes with the common side make two isosceles triangles, whose base angles add up to equal apex angles; then two sides and the included angle agree, and SAS applies.'
        },
        obj3: {
          question: 'Is SAS itself proved?',
          answer: 'Not on these pages. Euclid proves side-angle-side by laying one triangle on the other; modern treatments usually take it as an axiom, and every other congruence criterion is derived from it.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SSS Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two triangles with three pairs of equal sides are congruent, derived from SAS with two isosceles triangles, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/sss-congruence",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The SSS Congruence Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/sss-congruence" }
          ]
        }
      }
    },
    'asa-congruence': {
      proofKey: 'asaCongruence',
      title: 'ASA Congruence Proof | Two Angles and the Side Between Them Step by Step',
      description: 'Watch the proof that two triangles with two equal angles and the equal side between them are congruent, derived from the side-angle-side criterion by contradiction, step by step. Then slide the cut-off point and drag the vertices.',
      h1Title: 'The ASA Congruence Criterion',
      url: '/geometry/visual-tools/asa-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 70,62 34,14" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="10,62 70,62 22,38" fill="#FAC775" fill-opacity="0.5" stroke="#E6F1FB" stroke-width="1"/><path d="M 22 62 A 12 12 0 0 0 16 53" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M 58 62 A 12 12 0 0 1 62 51" fill="none" stroke="#B5D4F4" stroke-width="1.6"/><circle cx="22" cy="38" r="2.4" fill="#FAC775"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">ASA from SAS</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'ASA Congruence Proof',
      keywords: [
        'ASA congruence',
        'angle side angle',
        'congruent triangles proof',
        'triangle congruence criteria',
        'ASA from SAS',
        'euclid I.26',
        'proof by contradiction',
        'congruence theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the point $E$ along the side $AC$ and watch the angle $ABE$ fall short of the angle $ABC$ for every position. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two triangles are congruent when one can be laid exactly on the other. The congruence criteria say which three measurements are enough to force that. Side-angle-side is the one taken as given on these pages; the [SSS congruence](!/geometry/visual-tools/sss-congruence) page derived side-side-side from it. This page derives angle-side-angle:

$$\\angle A = \\angle A', \\; AB = A'B', \\; \\angle B = \\angle B' \\implies ABC \\cong A'B'C'$$

two angles and the side between them determine a triangle. It is the first half of Proposition 26 of Book I of Euclid's Elements, and the proof is Euclid's: suppose the triangles were not congruent, and find a part equal to its whole.

The player shows the first triangle $ABC$ with its angle $\\alpha$ at $A$, its angle $\\beta$ at $B$ and the side $AB$ between them marked with one tick. The second triangle is not drawn; everything known about it is carried by the point $E$, which is placed on $AC$ so that $AE$ equals the second triangle's side $A'C'$. The readout under the canvas shows the angles $ABC$ and $ABE$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Suppose the Sides Differ',
          content: `The whole proof comes down to one length. If $AC = A'C'$ then the two triangles agree in $AB = A'B'$, $AC = A'C'$ and the angle $\\alpha$ between those sides, and side-angle-side makes them congruent at once. So it is enough to show $AC = A'C'$.

The proof is by contradiction, the same shape of argument as on the [tangent perpendicular to radius](!/geometry/visual-tools/tangent-radius) page. Suppose the two sides are not equal. Then one of them is longer; the two triangles play the same role, so there is no loss in supposing $AC$ is the longer. The shorter length $A'C'$ then fits inside $AC$: measure it off from $A$ along $AC$ and call the end $E$. The player marks $AE$ with two ticks, draws $E$ as a draggable point strictly between $A$ and $C$, and joins $B$ to $E$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Two Sides and the Angle Between',
          content: `Compare the new triangle $ABE$ with the second triangle $A'B'C'$:

$$AB = A'B', \\qquad AE = A'C', \\qquad \\angle BAE = \\angle B'A'C' = \\alpha$$

The first is given, the second is how $E$ was chosen, and the third holds because $E$ lies on $AC$, so the angle $BAE$ is the angle $BAC$ itself. Two sides and the included angle agree, so by side-angle-side $ABE \\cong A'B'C'$. Congruent triangles have equal corresponding angles, and the angle at $B$ in $ABE$ corresponds to the angle at $B'$:

$$\\angle ABE = \\angle A'B'C' = \\beta$$

The player shades the triangle $ABE$ and marks its angle at $B$ as $\\beta'$: the angle that the supposition says equals $\\beta$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'A Part of the Angle',
          content: `Now look at the picture instead of the supposition. $E$ lies on the segment $AC$ strictly between $A$ and $C$, so the ray from $B$ through $E$ runs inside the angle $ABC$, between the rays $BA$ and $BC$. The angle $ABE$ is therefore a part of the angle $ABC$, and a part is less than the whole:

$$\\angle ABE < \\angle ABC = \\beta$$

The readout makes the same comparison in degrees for the figure on screen, and the inequality holds wherever $E$ is slid along $AC$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Contradiction',
          content: `The two previous sections say opposite things about the same angle. From the supposition, $\\angle ABE = \\beta$. From the picture, $\\angle ABE < \\beta$. An angle cannot both equal $\\beta$ and be smaller than $\\beta$, so the supposition was false: $AC$ is not longer than $A'C'$.

The supposition also covered the other case. If $A'C'$ were the longer side, the same construction in the second triangle, cutting $A'E' = AC$ off $A'C'$, gives $A'B'E' \\cong ABC$ by side-angle-side and the same impossible equality of a part with its whole. So neither side is longer than the other, and $AC = A'C'$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `With $AC = A'C'$ established, the two triangles agree in $AB = A'B'$, $AC = A'C'$ and the angle $\\alpha$ between those sides, and side-angle-side gives $ABC \\cong A'B'C'$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given data, a supposition, side-angle-side, a part being less than its whole, the contradiction, and side-angle-side again.

The shape of the argument is worth noticing. Nothing is measured and nothing is constructed in the given triangles; the only construction, the point $E$, lives inside the supposition, and the proof shows that it cannot exist. Side-angle-side is used twice, once to turn the supposition into an equality of angles and once, after the supposition has collapsed, to finish.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $E$ along $AC$: the shaded triangle $ABE$ grows and shrinks, and the readout shows the angle $ABE$ staying below the angle $ABC$ the whole way, approaching it only as $E$ approaches $C$. Drag $A$, $B$ or $C$ to reshape the triangle; $E$ keeps its place as a fraction of the way along $AC$.

The player keeps $E$ strictly between $A$ and $C$, away from both ends, so that the part is always a visible part; a drag that would carry a vertex out of the frame or flatten the triangle is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Used on these pages.** Angle-side-angle carried the [parallelogram opposite sides](!/geometry/visual-tools/parallelogram-sides) page, where a diagonal and two pairs of alternate angles make two congruent triangles, and the [parallelogram diagonals](!/geometry/visual-tools/parallelogram-diagonals) page.
• **AAS.** Two angles and a side not between them also determine a triangle: by the [angle sum](!/geometry/visual-tools/triangle-angle-sum) the third angle is determined too, and then the given side is between two known angles. This is the second half of Euclid's Proposition 26.
• **The converse of the isosceles theorem.** If two angles of a triangle are equal, the sides opposite them are equal: the triangle is congruent to itself read backwards, by angle-side-angle on the base.
• **Surveying.** A length that cannot be reached, across a river or up a cliff, is fixed by one measured base and two sighted angles, because angle-side-angle leaves the triangle no freedom.
• **Three criteria.** Side-angle-side, side-side-side and angle-side-angle are the three criteria of Euclid's first book; together with angle-angle-side they cover every way three independent measurements can fix a triangle, apart from the right-triangle case of hypotenuse and leg.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the ASA congruence criterion?',
          answer: 'If two angles of one triangle and the side between them equal two angles of another triangle and the side between them, the triangles are congruent: the remaining sides and angle agree as well.'
        },
        obj2: {
          question: 'How is ASA proved from SAS?',
          answer: 'By contradiction. If the sides next to the equal angles differed, cutting the shorter length off the longer side would give, by SAS, a smaller triangle with the same angle at the far vertex; but that angle is only a part of the original one. So the sides are equal and SAS finishes.'
        },
        obj3: {
          question: 'What is the difference between ASA and AAS?',
          answer: 'In ASA the given side lies between the two given angles; in AAS it does not. AAS follows from ASA, because the angle sum fixes the third angle, after which the given side is between two known angles.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "ASA Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two triangles with two equal angles and the equal included side are congruent, derived from SAS by contradiction, with a draggable cut-off point and vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/asa-congruence",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The ASA Congruence Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/asa-congruence" }
          ]
        }
      }
    },
    'aas-congruence': {
      proofKey: 'aasCongruence',
      title: 'AAS Congruence Proof | Two Angles and a Side Not Between Them Step by Step',
      description: 'Watch the proof that two triangles with two equal angles and an equal side not between them are congruent: the angle sum fixes the third angle and angle-side-angle finishes, step by step. Then drag the vertices.',
      h1Title: 'The AAS Congruence Criterion',
      url: '/geometry/visual-tools/aas-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 70,62 48,14" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><path d="M 24 62 A 14 14 0 0 0 18 51" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M 58 62 A 12 12 0 0 1 64 49" fill="none" stroke="#B5D4F4" stroke-width="1.6"/><path d="M 43 25 A 12 12 0 0 0 54 27" fill="none" stroke="#FAC775" stroke-width="1.6" stroke-dasharray="3 2"/><line x1="56" y1="40" x2="62" y2="37" stroke="#E6F1FB" stroke-width="1.6"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AAS from ASA</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'AAS Congruence Proof',
      keywords: [
        'AAS congruence',
        'angle angle side',
        'congruent triangles proof',
        'triangle congruence criteria',
        'AAS from ASA',
        'euclid I.26',
        'angle sum',
        'congruence theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the readout keep the third angle equal to 180° minus the other two. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two angles and a side determine a triangle whether or not the side lies between the angles. When it does, that is the [ASA congruence](!/geometry/visual-tools/asa-congruence) criterion, proved from side-angle-side on its own page. When it does not, the criterion is called angle-angle-side:

$$\\angle A = \\angle A', \\; \\angle B = \\angle B', \\; BC = B'C' \\implies ABC \\cong A'B'C'$$

Here the side $BC$ touches the angle at $B$ but not the angle at $A$. It is the second half of Proposition 26 of Book I of Euclid's Elements, and the proof is the shortest on these pages: the angle sum turns it into angle-side-angle.

The player shows the triangle $ABC$ with its angle $\\alpha$ at $A$, its angle $\\beta$ at $B$ and the side $BC$ marked with one tick; the second triangle is not drawn, since the argument never leaves the first. The readout under the canvas shows the angle at $C$ and the value $180°$ minus the two given angles.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Angle Sum',
          content: `Call the third angle of the first triangle, at $C$, $\\gamma$. By the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum) theorem the three angles of any triangle add up to a straight angle:

$$\\alpha + \\beta + \\gamma = 180°$$

so $\\gamma = 180° - \\alpha - \\beta$. The second triangle has the same two angles $\\alpha$ and $\\beta$, so its third angle, at $C'$, is also $180° - \\alpha - \\beta$. The player marks $\\gamma$ at $C$ and lights the three angles together.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Third Angle',
          content: `Both third angles are the same number, so they are equal:

$$\\angle C = \\angle C' = 180° - \\alpha - \\beta = \\gamma$$

The triangles now agree in all three angles. That alone is not enough for congruence, since two triangles of the same shape can differ in size; the one given side is what pins the size down, and it is used next.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Side Between Two Angles',
          content: `Look at the given side again. $BC$ has the angle $\\beta$ at its end $B$ and the angle $\\gamma$ at its end $C$; $B'C'$ has the same angle $\\beta$ at $B'$ and, by the previous step, the same angle $\\gamma$ at $C'$. So the given side does lie between two equal angles after all, just not the two that were given:

$$\\angle B = \\angle B', \\qquad BC = B'C', \\qquad \\angle C = \\angle C'$$

This is exactly the angle-side-angle pattern, and the [ASA congruence](!/geometry/visual-tools/asa-congruence) criterion gives $ABC \\cong A'B'C'$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Why It Holds',
          content: `The proof has two moves. The angle sum converts the two given angles into the third, so that every angle is known in both triangles; then the given side, whichever it is, lies between two known angles, and angle-side-angle applies. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given data, the angle sum, equal remainders, and angle-side-angle.

The same two moves work when the given side is $CA$ instead of $BC$, or when the two given angles are at $B$ and $C$ and the side is $AB$ or $CA$: with all three angles known, any side lies between two of them. That is why angle-angle-side needs no case distinction. What it does need is that the side be the one opposite the same angle in both triangles; a side opposite $\\alpha$ in one triangle and opposite $\\beta$ in the other proves nothing.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag $A$, $B$ or $C$: the triangle changes shape, the three marked angles change with it, and the readout shows the angle at $C$ staying equal to $180°$ minus the angles at $A$ and $B$ for every shape. Turn on **Measures** to see all three angles in degrees and add them up.

A drag that would flatten the triangle or carry a vertex out of the frame is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **Used on these pages.** Angle-angle-side carried the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page, where two right triangles share the bisected angle, and the [incentre](!/geometry/visual-tools/incentre) page, where it makes the distances from the incentre to the sides equal.
• **Four criteria.** With side-angle-side taken as given, these pages have now derived side-side-side, angle-side-angle and angle-angle-side from it. Any two angles and any side, or any two sides and the included angle, or all three sides, determine a triangle.
• **Why not three angles.** Three equal angles give only the same shape, not the same size; that is similarity, not congruence. Angle-angle-side needs its one side for exactly this reason.
• **Why not SSA.** Two sides and an angle not between them do not determine a triangle in general: with $AB$, $BC$ and the angle at $A$ given, the vertex $C$ can fall at either of two points on a ray from $A$, giving two different triangles. The exception is a right or obtuse given angle, and the special case of hypotenuse and leg in a right triangle.
• **Right triangles.** A right triangle with one acute angle and any one side is determined, since the right angle is the second angle and angle-angle-side or angle-side-angle applies.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the AAS congruence criterion?',
          answer: 'If two angles of one triangle and a side not between them equal two angles of another triangle and the corresponding side, the triangles are congruent.'
        },
        obj2: {
          question: 'How is AAS proved from ASA?',
          answer: 'The angle sum of a triangle is 180°, so two equal angles force the third angles to be equal too. Then the given side lies between two equal angles, and ASA applies.'
        },
        obj3: {
          question: 'Why is SSA not a congruence criterion?',
          answer: 'Two sides and a non-included angle can fit two different triangles: the third vertex can fall at either of two points on a ray from the given angle. Only when the given angle is right or obtuse, or in the hypotenuse-leg case, is the triangle determined.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "AAS Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two triangles with two equal angles and an equal side not between them are congruent, via the angle sum and ASA, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/aas-congruence",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The AAS Congruence Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/aas-congruence" }
          ]
        }
      }
    },
    'kite-diagonals': {
      proofKey: 'kiteDiagonals',
      title: 'Kite Diagonals Proof | Perpendicular Diagonals, One Bisecting the Other, Step by Step',
      description: 'Watch the proof that the diagonals of a kite are perpendicular and that the axis bisects the other diagonal, from SSS, SAS and a linear pair, step by step. Then drag the vertices.',
      h1Title: 'The Diagonals of a Kite',
      url: '/geometry/visual-tools/kite-diagonals',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,8 16,30 40,70 64,30" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="8" x2="40" y2="70" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><line x1="16" y1="30" x2="64" y2="30" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><path d="M 40 36 L 46 36 L 46 30" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Kite</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Kite Diagonals Proof',
      keywords: [
        'kite diagonals',
        'kite diagonals perpendicular',
        'kite properties proof',
        'axis of symmetry of a kite',
        'quadrilateral diagonals',
        'SSS SAS congruence',
        'linear pair',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the diagonals stay at right angles and the crossing stay at the midpoint of the short diagonal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A kite is a quadrilateral with two pairs of equal adjacent sides: $AB = AD$ and $CB = CD$, the equal sides meeting at the two ends $A$ and $C$ of its axis. The theorem says what its diagonals do:

$$AC \\perp BD \\qquad \\text{and} \\qquad BM = MD$$

where $M$ is the crossing of the diagonals: the diagonals are perpendicular, and the axis cuts the other diagonal in half. The axis also bisects the angles at $A$ and at $C$. A [rhombus](!/geometry/visual-tools/rhombus-diagonals) is a kite with all four sides equal, and its perpendicular diagonals are the special case.

In the player $A$, $B$ and $C$ are free; $D$ is placed as the mirror image of $B$ in the line $AC$, which is exactly what makes $AD = AB$ and $CD = CB$. The readout under the canvas shows the angle at $M$ and the two halves of $BD$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Axis and Two Triangles',
          content: `Draw the axis $AC$. It splits the kite into the triangles $ABC$ and $ADC$, which share the side $AC$ and have the kite's equal sides as their other sides:

$$AB = AD, \\qquad CB = CD, \\qquad AC = AC$$

Three pairs of equal sides, so by the [SSS congruence](!/geometry/visual-tools/sss-congruence) criterion $ABC \\cong ADC$. The player shades the two triangles in different colours.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Axis Bisects the Angle',
          content: `Congruent triangles have equal corresponding angles. In $ABC$ and $ADC$ the angle at $A$ corresponds to the angle at $A$, so

$$\\angle BAC = \\angle DAC = \\alpha$$

the axis bisects the angle of the kite at $A$. The same argument at the other end gives $\\angle BCA = \\angle DCA$. The proof only needs the equal angles at $A$, which it uses next as the included angles of two smaller triangles.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Two Smaller Triangles',
          content: `Draw the other diagonal $BD$ and call its crossing with the axis $M$. The axis now splits the upper part of the kite into the triangles $ABM$ and $ADM$:

$$AB = AD, \\qquad \\angle BAM = \\angle DAM = \\alpha, \\qquad AM = AM$$

Two sides and the included angle agree, so $ABM \\cong ADM$ by side-angle-side. Nothing new was assumed: the equal sides are the kite's, the equal angles came from the previous step, and $AM$ is shared.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Linear Pair',
          content: `Corresponding parts of $ABM$ and $ADM$ give two things at once. The sides opposite $\\alpha$ are equal, $BM = MD$ (three ticks), so $M$ is the midpoint of $BD$: the axis bisects the other diagonal. And the angles at $M$ are equal, $\\angle AMB = \\angle AMD = \\varphi$.

Those two angles sit side by side along the straight line $BD$, a linear pair, so they add up to a straight angle, as on the [vertical angles](!/geometry/visual-tools/vertical-angles) page:

$$\\varphi + \\varphi = 180° \\implies \\varphi = 90°$$

The diagonals are perpendicular.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The proof uses the kite's definition twice: once through side-side-side, to show that the axis bisects the angle at $A$, and once through side-angle-side, to show that the two halves of the kite on either side of the axis match. Equal angles along a straight line then have to be right angles. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given sides, SSS, corresponding parts, SAS, and a linear pair.

Another way to say it: $A$ and $C$ are both the same distance from $B$ as from $D$, so each lies on the perpendicular bisector of $BD$, and the axis is that perpendicular bisector. The proof above is that fact spelled out with triangles.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $B$: it swings about the axis and $D$ mirrors it, so the kite changes shape while $AB = AD$ and $CB = CD$ stay true; the readout keeps the angle at $M$ at $90°$ and the two halves of $BD$ equal. Drag $A$ or $C$ to lengthen or tilt the axis.

The player keeps the kite convex: the foot of $B$ on the axis must fall strictly between $A$ and $C$. A drag that would push it past an end, making a dart (a concave kite) in which the diagonals still cross at right angles but outside the figure, is refused, as is one that carries a vertex out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Area of a kite.** The diagonals are perpendicular, so the kite is four right triangles with legs along the diagonals, and its area is half the product of the diagonals: $\\tfrac12 \\, AC \\cdot BD$. The same formula holds for a rhombus and a square.
• **The perpendicular bisector.** The axis of a kite is the perpendicular bisector of the other diagonal; every point of it is equidistant from $B$ and $D$. This is the fact behind the [circumcentre](!/geometry/visual-tools/circumcentre), where three such bisectors meet.
• **Kites on these pages.** A circle's centre with the two points of contact of the [two tangents](!/geometry/visual-tools/two-tangents) from an outside point make a kite with two right angles; the centre, the ends of a chord and the foot of the [perpendicular from the centre](!/geometry/visual-tools/chord-bisector) make the same picture in halves.
• **Tangential quadrilateral.** Every convex kite has an inscribed circle touching all four sides, since the axis bisects the angles at $A$ and $C$ and their bisectors meet the other two angle bisectors at one point.
• **Not every quadrilateral with perpendicular diagonals is a kite.** Perpendicular diagonals alone give the area formula but not equal sides; a kite needs one diagonal to bisect the other as well.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is a kite in geometry?',
          answer: 'A quadrilateral with two pairs of equal adjacent sides, the equal sides meeting at the two ends of its axis. A rhombus is a kite with all four sides equal.'
        },
        obj2: {
          question: 'Why are the diagonals of a kite perpendicular?',
          answer: 'The axis splits the kite into two congruent triangles (SSS), so it bisects the angle at its end. The two smaller triangles on either side of the axis are then congruent by SAS, so the two angles at the crossing are equal; they form a linear pair, so each is 90°.'
        },
        obj3: {
          question: 'Does each diagonal of a kite bisect the other?',
          answer: 'Only the axis, the diagonal through the vertices where the equal sides meet, bisects the other one. The other diagonal bisects the axis only when the kite is a rhombus.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Kite Diagonals Proof Visualizer",
          "description": "Step-by-step interactive proof that the diagonals of a kite are perpendicular and that the axis bisects the other diagonal, from SSS, SAS and a linear pair, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/kite-diagonals",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Diagonals of a Kite", "item": "https://www.learnmathclass.com/geometry/visual-tools/kite-diagonals" }
          ]
        }
      }
    },
    'hl-congruence': {
      proofKey: 'hlCongruence',
      title: 'Hypotenuse-Leg Congruence Proof | Right Triangles Step by Step',
      description: 'Watch the proof that two right triangles with equal hypotenuses and one pair of equal legs are congruent: laid leg to leg they make an isosceles triangle, and angle-angle-side finishes, step by step. Then drag the figure.',
      h1Title: 'The Hypotenuse-Leg Criterion',
      url: '/geometry/visual-tools/hl-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 40,62 40,16" fill="#FAC775" fill-opacity="0.45" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="70,62 40,62 40,16" fill="#85B7EB" fill-opacity="0.45" stroke="#E6F1FB" stroke-width="1.4"/><path d="M 34 62 L 34 56 L 40 56" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><path d="M 46 62 L 46 56 L 40 56" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="4" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">HL</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'HL Congruence Proof',
      keywords: [
        'hypotenuse leg congruence',
        'HL congruence',
        'right triangle congruence',
        'RHS congruence',
        'congruent triangles proof',
        'triangle congruence criteria',
        'hypotenuse leg theorem',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide $A$ along the line and drag $B$ or $C$, and watch the copy keep the same angle at its far vertex and the same other leg. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two sides and an angle not between them do not determine a triangle in general; the [AAS congruence](!/geometry/visual-tools/aas-congruence) page explains why. Right triangles are the exception. If the angle is the right angle, the two sides are the hypotenuse and one leg, and they are enough:

$$\\angle C = \\angle C' = 90°, \\; AB = A'B', \\; BC = B'C' \\implies ABC \\cong A'B'C'$$

This is the hypotenuse-leg criterion, also written HL or, in some countries, RHS (right angle, hypotenuse, side). The proof here lays the second triangle against the first along the equal legs, so that the two hypotenuses become the equal sides of one [isosceles triangle](!/geometry/visual-tools/isosceles-base-angles).

In the player the right angle is at $C$, $BC$ is the common leg, $AB$ and $A'B$ are the hypotenuses, and $A'$ is placed as the mirror image of $A$ through $C$. The readout under the canvas shows the angles at $A$ and $A'$ and the two other legs $CA$ and $CA'$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Leg to Leg',
          content: `Take the equal legs first. The second triangle has a leg $B'C'$ equal to $BC$; move it so that this leg lies on $BC$, with $C'$ at $C$ and $B'$ at $B$, and so that its far vertex falls on the other side of the line $BC$ from $A$. Call that vertex $A'$. Then $A'BC$ is right-angled at $C$ and $A'B = A'B' = AB$, marked in the player with one tick on each hypotenuse and two ticks on the common leg.

The two triangles now sit leg to leg, one on each side of $BC$, filled in two colours. The claim to prove is that they are congruent, and in particular that $CA' = CA$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Straight Line',
          content: `At $C$ there are two right angles, $\\angle BCA$ on one side of $BC$ and $\\angle BCA'$ on the other. Together they make

$$\\angle BCA + \\angle BCA' = 90° + 90° = 180°$$

a straight angle, so $CA$ and $CA'$ are opposite rays and $A$, $C$, $A'$ lie on one line. The player draws it dashed. This is the same fact about a straight angle that the [vertical angles](!/geometry/visual-tools/vertical-angles) page uses, read the other way round.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Isosceles Triangle',
          content: `Now look at the large triangle $ABA'$ made by the two hypotenuses and the line through $C$. Its sides $AB$ and $A'B$ are the two hypotenuses, which are equal, so $ABA'$ is isosceles with apex $B$, and by the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem its base angles are equal:

$$\\angle BAA' = \\angle BA'A = \\alpha$$

Because $C$ lies on the base $AA'$, these two angles are exactly the angles of the two right triangles at their far vertices: $\\angle BAC = \\alpha$ and $\\angle BA'C = \\alpha$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Angle-Angle-Side',
          content: `Compare the two right triangles once more:

$$\\angle A = \\angle A' = \\alpha, \\qquad \\angle C = \\angle C' = 90°, \\qquad BC = BC$$

Two angles agree, and the side $BC$, which is opposite $\\alpha$ in both triangles, is common. That is the [AAS congruence](!/geometry/visual-tools/aas-congruence) pattern, so $ABC \\cong A'BC$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Since $A'BC$ is the second given triangle moved into place, the two given triangles are congruent: in right triangles the hypotenuse and one leg determine everything else, including the other leg, $CA = CA'$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given data, a straight angle, the isosceles theorem, and angle-angle-side.

There is a second proof, by computation. The [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) gives the other leg from the hypotenuse and the known leg, $CA^2 = AB^2 - BC^2$, and the same in the second triangle, so $CA = C'A'$; then all three sides agree and [SSS congruence](!/geometry/visual-tools/sss-congruence) finishes. The proof shown here is older and uses no lengths at all.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $A$ along the line through $C$: the first triangle gets a longer or shorter leg $CA$, and the copy follows with $CA' = CA$, since $A'$ is always the mirror of $A$ through $C$; the readout keeps the angles at $A$ and $A'$ equal. Drag $B$ to change the common leg and the hypotenuses, or $C$ to move the right angle; $A$ stays on the perpendicular to $BC$ at $C$.

A drag that would flatten either triangle, shorten the common leg too far, or carry a vertex out of the frame is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Used on these pages.** Hypotenuse-leg is the usual way to show the [two tangents](!/geometry/visual-tools/two-tangents) from a point are equal (the radii are legs, the segment to the centre a common hypotenuse) and that the perpendicular from the centre [bisects a chord](!/geometry/visual-tools/chord-bisector) (two radii as hypotenuses, the perpendicular a common leg). Those pages used Pythagoras instead; either route works. It also gives the equal tangent lengths on the [incentre](!/geometry/visual-tools/incentre) page.
• **The SSA exception.** Two sides and a non-included angle fail in general because the third vertex can fall at two places. When the angle is right, one of the two places disappears, and the triangle is determined.
• **Five criteria.** Side-angle-side, side-side-side, angle-side-angle, angle-angle-side and hypotenuse-leg: every congruence criterion used in school geometry now has a page here, all derived from side-angle-side.
• **Perpendicular bisector, again.** A point equidistant from two points lies on their perpendicular bisector: drop the perpendicular to the segment, and hypotenuse-leg makes the two halves equal.
• **Reflections.** The proof places $A'$ as the mirror image of $A$ in $C$ along the line; the theorem says that any right triangle with the same hypotenuse and leg is that mirror image, up to moving it rigidly.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the hypotenuse-leg congruence criterion?',
          answer: 'Two right triangles are congruent if their hypotenuses are equal and one pair of legs is equal. It is also called HL, or RHS (right angle, hypotenuse, side).'
        },
        obj2: {
          question: 'How is hypotenuse-leg proved?',
          answer: 'Lay the two triangles leg to leg on opposite sides of the equal leg. The two right angles make a straight line, the equal hypotenuses make an isosceles triangle with equal base angles, and then angle-angle-side applies. Alternatively, Pythagoras gives the other leg and SSS finishes.'
        },
        obj3: {
          question: 'Why does SSA work for right triangles but not in general?',
          answer: 'With two sides and a non-included angle the third vertex can usually fall at either of two points. When the given angle is a right angle, the two points coincide in a single reflection, so the triangle is determined.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Hypotenuse-Leg Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two right triangles with equal hypotenuses and one pair of equal legs are congruent, via an isosceles triangle and AAS, with a draggable figure.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/hl-congruence",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Hypotenuse-Leg Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/hl-congruence" }
          ]
        }
      }
    },
    'secant-tangent': {
      proofKey: 'secantTangent',
      title: 'Secant-Tangent Theorem Proof | PT² = PA · PB Step by Step',
      description: 'Watch the proof that from a point outside a circle the square of the tangent equals the product of the secant segments, by the difference of squares and Pythagoras, step by step. Then drag the point and the secant.',
      h1Title: 'The Secant-Tangent Theorem',
      url: '/geometry/visual-tools/secant-tangent',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="46" r="22" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="26" x2="70" y2="58" stroke="#FAC775" stroke-width="1.6"/><line x1="8" y1="26" x2="41" y2="25" stroke="#B5D4F4" stroke-width="1.6"/><circle cx="8" cy="26" r="2.4" fill="#E6F1FB"/><circle cx="41" cy="25" r="2.2" fill="#B5D4F4"/><circle cx="31" cy="38" r="2.2" fill="#FAC775"/><circle cx="68" cy="57" r="2.2" fill="#FAC775"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PT² = PA·PB</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Secant-Tangent Theorem Proof',
      keywords: [
        'secant tangent theorem',
        'tangent secant theorem',
        'power of a point',
        'tangent squared equals product',
        'euclid III.36',
        'circle theorems',
        'secant segments',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the near end of the secant round the circle, or move the outside point, and watch the square of the tangent stay equal to the product of the two secant segments. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take a point $P$ outside a circle. From $P$ draw a tangent, touching the circle at $T$, and a secant, cutting the circle at $A$ (the nearer point) and $B$ (the farther). The theorem says

$$PT^2 = PA \\cdot PB$$

the square of the tangent segment equals the product of the whole secant and its outside part. It is Proposition 36 of Book III of Euclid's Elements, and it is the outside version of the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem: in both, the product depends only on $P$ and the circle, a number called the power of $P$.

The proof is Euclid's and uses no similar triangles, only the perpendicular from the centre, a difference of squares and Pythagoras. In the player $O$ and $P$ are free and $A$ slides round the near side of the circle; $B$ is the second point where the line $PA$ meets the circle, and $T$ the point of contact of the tangent from $P$. The readout under the canvas shows $PT^2$ and $PA \\cdot PB$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Midpoint of the Chord',
          content: `The secant cuts off the chord $AB$. Drop the perpendicular from the centre $O$ to this chord and call its foot $M$. The perpendicular from the centre to a chord [bisects the chord](!/geometry/visual-tools/chord-bisector), so

$$AM = MB$$

marked in the player with one tick each. The point $M$ is the hinge of the proof: it turns the two secant segments $PA$ and $PB$ into a sum and a difference of the same two lengths.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Difference of Squares',
          content: `The four points lie on one line in the order $P$, $A$, $M$, $B$, with $A$ between $P$ and $M$. So

$$PA = PM - AM, \\qquad PB = PM + MB = PM + AM$$

and the product of the two secant segments is a product of a difference and a sum:

$$PA \\cdot PB = (PM - AM)(PM + AM) = PM^2 - AM^2$$

Only squares of lengths remain, and squares of lengths are what Pythagoras delivers.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Two Right Triangles',
          content: `Both $PM$ and $AM$ are legs of right triangles with the right angle at $M$ and the other leg $OM$: the triangles $OMP$ and $OMA$, shaded in the player. By the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem),

$$PM^2 = OP^2 - OM^2, \\qquad AM^2 = OA^2 - OM^2$$

Subtracting, $OM^2$ cancels:

$$PA \\cdot PB = PM^2 - AM^2 = OP^2 - OA^2 = OP^2 - R^2$$

where $R = OA$ is the radius. The right-hand side knows nothing about the secant: only where $P$ is and how big the circle is. So every secant from $P$ gives the same product.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Tangent',
          content: `Now the tangent. The [tangent is perpendicular to the radius](!/geometry/visual-tools/tangent-radius) at the point of contact, so the triangle $OTP$ is right-angled at $T$, and by Pythagoras once more

$$PT^2 = OP^2 - OT^2 = OP^2 - R^2$$

the same number as before. The tangent is the secant's limiting case, in which $A$ and $B$ have come together at $T$ and $PA \\cdot PB$ has become $PT \\cdot PT$; the proof treats it separately only because the chord $AB$ has shrunk to a point and has no midpoint construction.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Both sides equal $OP^2 - R^2$, so $PT^2 = PA \\cdot PB$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the perpendicular bisecting the chord, a difference of squares, Pythagoras (twice), and tangent perpendicular to radius with Pythagoras again.

The number $OP^2 - R^2$ is the power of $P$ with respect to the circle. For $P$ outside it is positive and equals the square of the tangent; for $P$ inside it is negative and its absolute value is the product of the two parts of any chord through $P$, as on the intersecting chords page; for $P$ on the circle it is zero. One quantity, three theorems.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $A$ round the near side of the circle: the secant turns about $P$, $B$ and $M$ follow, the two segments $PA$ and $PB$ change, and the readout keeps their product equal to $PT^2$, which does not change at all. Drag $P$ to change the power itself, or $O$ to move the circle; the tangent and its point of contact are recomputed.

The player keeps $P$ outside the circle, keeps $A$ the nearer of the two secant points, and refuses a drag that would make the chord shorter than a few units or carry a point out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Two secants.** Two secants from $P$ cutting the circle at $A$, $B$ and at $C$, $D$ satisfy $PA \\cdot PB = PC \\cdot PD$, since both products equal $OP^2 - R^2$. Together with the intersecting chords theorem this is the full power-of-a-point theorem.
• **Two tangents.** Both tangents from $P$ have $PT^2 = OP^2 - R^2$, so the [two tangents](!/geometry/visual-tools/two-tangents) from a point are equal; that page proves it directly, and the [hypotenuse-leg](!/geometry/visual-tools/hl-congruence) criterion gives a third route.
• **Constructing the tangent length.** Given $PA$ and $PB$, the tangent is their geometric mean, $PT = \\sqrt{PA \\cdot PB}$, which is why the tangent-secant figure appears in the classical construction of a mean proportional.
• **The converse.** If a point $T$ on a circle and a secant $PAB$ satisfy $PT^2 = PA \\cdot PB$, then $PT$ is tangent (Euclid III.37); the proof compares with the true tangent from $P$ and uses this theorem.
• **Radical axis.** The points with equal power with respect to two circles form a line, the radical axis; for two intersecting circles it is the line through their common points.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the secant-tangent theorem?',
          answer: 'From a point P outside a circle, if a tangent touches the circle at T and a secant cuts it at A and B, then PT² = PA · PB: the square of the tangent equals the product of the whole secant and its outside part.'
        },
        obj2: {
          question: 'How is the secant-tangent theorem proved without similar triangles?',
          answer: 'Drop the perpendicular from the centre to the chord AB; its foot M is the midpoint. Then PA · PB = (PM − AM)(PM + AM) = PM² − AM², and Pythagoras in the right triangles OMP and OMA turns this into OP² − R². The tangent gives PT² = OP² − R² by Pythagoras in OTP.'
        },
        obj3: {
          question: 'What is the power of a point?',
          answer: 'The number OP² − R², where O is the centre and R the radius. Outside the circle it equals the square of the tangent and the product of the two secant segments from P; inside, its absolute value is the product of the two parts of any chord through P.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Secant-Tangent Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the square of the tangent from an outside point equals the product of the secant segments, via the difference of squares and Pythagoras, with a draggable figure.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/secant-tangent",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Secant-Tangent Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/secant-tangent" }
          ]
        }
      }
    },
    'two-secants': {
      proofKey: 'twoSecants',
      title: 'Two Secants Theorem Proof | PA · PB = PC · PD Step by Step',
      description: 'Watch the proof that two secants from a point outside a circle cut off equal products, by the difference of squares and Pythagoras, step by step. Then drag the secants and the point.',
      h1Title: 'Two Secants from a Point',
      url: '/geometry/visual-tools/two-secants',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="44" r="22" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="30" x2="70" y2="36" stroke="#FAC775" stroke-width="1.6"/><line x1="8" y1="30" x2="60" y2="64" stroke="#B5D4F4" stroke-width="1.6"/><circle cx="8" cy="30" r="2.4" fill="#E6F1FB"/><circle cx="29" cy="32" r="2.2" fill="#FAC775"/><circle cx="70" cy="36" r="2.2" fill="#FAC775"/><circle cx="33" cy="46" r="2.2" fill="#B5D4F4"/><circle cx="60" cy="64" r="2.2" fill="#B5D4F4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PA·PB = PC·PD</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Two Secants Theorem Proof',
      keywords: [
        'two secants theorem',
        'secant secant theorem',
        'power of a point',
        'secant segments product',
        'intersecting secants',
        'circle theorems',
        'euclid III.36',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the near end of either secant round the circle, or move the outside point, and watch the two products stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take a point $P$ outside a circle and draw two secants from it, one cutting the circle at $A$ and $B$, the other at $C$ and $D$, with $A$ and $C$ the nearer points. Then

$$PA \\cdot PB = PC \\cdot PD$$

the product of the whole secant and its outside part is the same for every secant from $P$. This completes the power-of-a-point family on these pages: the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem is the same statement for a point inside the circle, and the [secant-tangent](!/geometry/visual-tools/secant-tangent) theorem is the case where one secant has shrunk to a tangent. In Euclid it is the outside half of Proposition 36 of Book III.

The proof is the secant-tangent argument done twice. In the player $O$ and $P$ are free, $A$ and $C$ slide round the near side of the circle, and $B$, $D$ are where the lines $PA$, $PC$ meet the circle again. The readout under the canvas shows the two products.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Two Midpoints',
          content: `Each secant cuts off a chord, $AB$ and $CD$. Drop the perpendicular from the centre $O$ to each chord and call the feet $M$ and $N$. The perpendicular from the centre [bisects the chord](!/geometry/visual-tools/chord-bisector), so

$$AM = MB, \\qquad CN = ND$$

marked with one tick each on the first chord and two ticks each on the second. The feet $M$ and $N$ are where the two secants will be compared: each of them turns its secant's two segments into a sum and a difference of the same two lengths.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Differences of Squares',
          content: `On the first secant the points lie in the order $P$, $A$, $M$, $B$, so $PA = PM - AM$ and $PB = PM + MB = PM + AM$, and

$$PA \\cdot PB = (PM - AM)(PM + AM) = PM^2 - AM^2$$

On the second secant, with $P$, $C$, $N$, $D$ in order, the same algebra gives

$$PC \\cdot PD = (PN - CN)(PN + CN) = PN^2 - CN^2$$

Two products have become two differences of squares, and squares of lengths are what Pythagoras provides.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The First Secant',
          content: `$PM$ and $AM$ are legs of the right triangles $OMP$ and $OMA$, both right-angled at $M$ with the common leg $OM$; the player shades them. By the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem),

$$PM^2 = OP^2 - OM^2, \\qquad AM^2 = OA^2 - OM^2$$

Subtracting, $OM^2$ cancels and only the distance to the centre and the radius remain:

$$PA \\cdot PB = PM^2 - AM^2 = OP^2 - OA^2 = OP^2 - R^2$$`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Second Secant',
          content: `Nothing in the previous step used anything special about the first secant. Repeat it on the second: $ONP$ and $ONC$ are right-angled at $N$ with the common leg $ON$, so $PN^2 = OP^2 - ON^2$ and $CN^2 = OC^2 - ON^2$, and

$$PC \\cdot PD = PN^2 - CN^2 = OP^2 - OC^2 = OP^2 - R^2$$

The foot moved from $M$ to $N$ and the radius from $OA$ to $OC$, but the result is the same expression, because every radius is $R$ and $OP$ is the same segment.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Both products equal $OP^2 - R^2$, so $PA \\cdot PB = PC \\cdot PD$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the perpendicular bisecting the chord, a difference of squares, and Pythagoras twice on each secant.

The number $OP^2 - R^2$ is the power of $P$ with respect to the circle. It is positive outside the circle, where it is the square of the tangent and the product of any secant's segments; negative inside, where its absolute value is the product of the two parts of any chord through $P$; and zero on the circle. Three theorems, one quantity, one proof pattern: midpoint, difference of squares, Pythagoras.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $A$ or $C$ round the near side of the circle: its secant turns about $P$, the far end and the midpoint follow, the two segments change, and the readout keeps the product equal to the other secant's product. Drag $P$ to change the power itself, or $O$ to move the circle.

The player keeps $P$ outside the circle, keeps $A$ and $C$ the nearer ends of their secants, keeps the two secants apart, and refuses a drag that would make a chord shorter than a few units or carry a point out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Tangents as a limit.** Let $C$ and $D$ come together: the second secant becomes a tangent $PT$ and the product becomes $PT^2$, which is the secant-tangent theorem; let both become tangents and the [two tangents](!/geometry/visual-tools/two-tangents) from $P$ are equal.
• **Four concyclic points.** The converse holds: if two lines through $P$ meet at $A$, $B$ and $C$, $D$ with $PA \\cdot PB = PC \\cdot PD$ and $P$ outside both segments, then $A$, $B$, $C$, $D$ lie on one circle. This is the usual test for a [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) by lengths rather than angles.
• **Similar triangles.** Joining $A$ to $D$ and $C$ to $B$ makes the triangles $PAD$ and $PCB$ similar, with the common angle at $P$ and equal inscribed angles at $B$ and $D$; the equal products are the proportion $PA : PC = PD : PB$ read crosswise. These pages avoid similarity, which is why the proof above goes through Pythagoras instead.
• **Radical axis.** For two circles, the points with equal power with respect to both lie on a line; a point on it sends equal tangents to both circles.
• **Measuring an unreachable circle.** The power of $P$ can be found from any one secant, and then every other secant from $P$ is pinned down: given the outside part, the whole follows.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the two secants theorem?',
          answer: 'If two secants from a point P outside a circle cut it at A, B and at C, D, then PA · PB = PC · PD: the product of the whole secant and its outside part is the same for every secant from P.'
        },
        obj2: {
          question: 'How is the two secants theorem proved?',
          answer: 'Drop the perpendicular from the centre to each chord; its foot is the midpoint. Then each product is a difference of squares, PM² − AM², and Pythagoras in the right triangles OMP and OMA turns it into OP² − R². Both secants give this same number.'
        },
        obj3: {
          question: 'How is this related to the intersecting chords theorem?',
          answer: 'They are the same fact for a point outside and a point inside the circle: the product of the two segments on any line through P equals the absolute value of OP² − R², the power of P.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Two Secants Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that two secants from an outside point cut off equal products, via the difference of squares and Pythagoras, with draggable secants.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/two-secants",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Two Secants from a Point", "item": "https://www.learnmathclass.com/geometry/visual-tools/two-secants" }
          ]
        }
      }
    },
    'ceva-theorem': {
      proofKey: 'ceva',
      title: "Ceva's Theorem Proof | Three Concurrent Cevians Step by Step",
      description: "Watch the proof of Ceva's theorem: when three cevians of a triangle pass through one point, the product of the three ratios they cut on the sides is 1, by comparing areas, step by step. Then drag the point and the vertices.",
      h1Title: "Ceva's Theorem",
      url: '/geometry/visual-tools/ceva-theorem',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,66 72,66 46,12" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="66" x2="58" y2="37" stroke="#FAC775" stroke-width="1.4"/><line x1="72" y1="66" x2="27" y2="40" stroke="#FAC775" stroke-width="1.4"/><line x1="46" y1="12" x2="38" y2="66" stroke="#FAC775" stroke-width="1.4"/><circle cx="41" cy="48" r="2.6" fill="#E6F1FB"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Ceva</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: "Ceva's Theorem Proof",
      keywords: [
        "ceva's theorem",
        'ceva theorem proof',
        'concurrent cevians',
        'cevians of a triangle',
        'ratio of areas',
        'triangle centres',
        'concurrency',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the point $P$ anywhere inside the triangle, or a vertex, and watch the three ratios change while their product stays at 1. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A cevian is a segment from a vertex of a triangle to a point on the opposite side. Ceva's theorem says when three of them pass through one point: if $AD$, $BE$ and $CF$ are cevians of triangle $ABC$ meeting at a point $P$ inside it, then

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1$$

Each fraction is the ratio in which a cevian cuts the side it lands on, taken going round the triangle in one direction. The converse holds too: if the product is 1, the three cevians are concurrent. That converse is how the theorem is mostly used; the [medians](!/geometry/visual-tools/centroid), for instance, cut each side in the ratio $1 : 1$, so the product is $1$ and they meet at a point.

The proof here is by areas, and uses nothing but the formula half base times height. In the player $P$ is free inside the triangle; $D$, $E$, $F$ are where the lines through $P$ meet the sides. The readout under the canvas shows the three ratios and their product.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Same Height, Same Ratio',
          content: `The cevian $AD$ splits the triangle into $ABD$ and $ADC$. These two triangles have their bases $BD$ and $DC$ on the same line and the same apex $A$, so they have the same height, and their areas (written with square brackets) are in the ratio of their bases:

$$\\frac{[ABD]}{[ADC]} = \\frac{BD}{DC}$$

This is the same fact that drives the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page: a ratio of lengths on a line becomes a ratio of areas of triangles standing on them.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Same with Apex P',
          content: `The point $P$ lies on $AD$, so the same two bases $BD$ and $DC$ carry a second pair of triangles with apex $P$: $PBD$ and $PDC$, shaded in the player. They too have equal heights, so

$$\\frac{[PBD]}{[PDC]} = \\frac{BD}{DC}$$

Two different pairs of areas, the same ratio.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Subtracting the Areas',
          content: `If two fractions are equal, $a/b = c/d$, then so is the fraction of their differences, $(a - c)/(b - d) = a/b$. Apply this to the two pairs of areas. Because $P$ is on $AD$, the small triangle $PBD$ sits inside $ABD$ and leaves $ABP$; likewise $PDC$ inside $ADC$ leaves $ACP$:

$$\\frac{BD}{DC} = \\frac{[ABD] - [PBD]}{[ADC] - [PDC]} = \\frac{[ABP]}{[ACP]}$$

So the cevian from $A$ cuts the opposite side in the ratio of the two areas on either side of it at $P$. The segments $BD$ and $DC$ have disappeared; only the triangles around $P$ remain.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Other Two Cevians',
          content: `Nothing in the previous three steps was special to the vertex $A$. Running the same argument from $B$ along the cevian $BE$, and from $C$ along $CF$, gives

$$\\frac{CE}{EA} = \\frac{[BCP]}{[BAP]}, \\qquad \\frac{AF}{FB} = \\frac{[CAP]}{[CBP]}$$

In each case the ratio on the side is the ratio of the two triangles around $P$ that touch that side's ends. The player now shows all three triangles $ABP$, $BCP$, $CAP$ that tile the big triangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Multiply the three results:

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = \\frac{[ABP]}{[ACP]} \\cdot \\frac{[BCP]}{[BAP]} \\cdot \\frac{[CAP]}{[CBP]} = 1$$

Each of the three areas appears exactly once in a numerator and once in a denominator, so the whole product cancels to $1$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, same-height triangles twice, a subtraction of equal ratios, the same argument twice more, and a multiplication.

The converse follows by a short contradiction: if the product is $1$ but the third cevian missed the point where the first two meet, the cevian that does pass through that point would cut the side in the same ratio, forcing it to land at the same point.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $P$ anywhere inside the triangle: the three cevians swing, the three feet $D$, $E$, $F$ slide along the sides, the three ratios in the readout change, and their product stays at $1.00$. Drag $A$, $B$ or $C$ to reshape the triangle. Pull $P$ towards a side and watch one ratio grow large while another shrinks to compensate.

The player keeps $P$ strictly inside the triangle, so that all three feet lie on the sides themselves; Ceva's theorem also holds for $P$ outside, with one or two feet on the extensions of the sides, but then signed ratios are needed, and the player keeps to the inside case. A drag that would carry a vertex out of the frame or flatten the triangle is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The triangle centres at once.** By the converse, the medians are concurrent (each ratio is 1), the angle bisectors are concurrent at the [incentre](!/geometry/visual-tools/incentre) (the angle bisector theorem makes the product $\\tfrac{c}{b} \\cdot \\tfrac{a}{c} \\cdot \\tfrac{b}{a} = 1$), and the altitudes are concurrent at the [orthocentre](!/geometry/visual-tools/orthocentre) (the feet cut the sides in ratios of cosines that cancel). Each of those pages proves its concurrency directly; Ceva proves all three with one calculation.
• **Barycentric coordinates.** The areas $[BCP]$, $[CAP]$, $[ABP]$, divided by the whole, are the barycentric coordinates of $P$; the proof shows that each cevian ratio is a quotient of two of them.
• **Menelaus.** The companion theorem of Menelaus says the same product is $-1$ (with signed lengths) when $D$, $E$, $F$ lie on one line instead of three concurrent lines; it has a similar area proof.
• **Gergonne and Nagel points.** The cevians to the points where the incircle touches the sides are concurrent (the [two tangents](!/geometry/visual-tools/two-tangents) from each vertex are equal, so the product is 1); so are the cevians to the points of contact of the excircles.
• **Trigonometric form.** Replacing each ratio by the ratio of sines of the angles the cevian makes at its vertex gives the trigonometric Ceva, often easier to apply.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: "What does Ceva's theorem say?",
          answer: 'If three cevians AD, BE, CF of a triangle pass through one point, then (BD/DC)(CE/EA)(AF/FB) = 1; and conversely, if the product is 1, the three cevians are concurrent.'
        },
        obj2: {
          question: "How is Ceva's theorem proved with areas?",
          answer: 'Triangles on the bases BD and DC with the same apex have areas in the ratio BD/DC, first with apex A and then with apex P. Subtracting the small pair from the large pair gives BD/DC = [ABP]/[ACP]. The other two ratios are similar quotients of the three triangles around P, and the product cancels to 1.'
        },
        obj3: {
          question: 'What is a cevian?',
          answer: 'A segment from a vertex of a triangle to a point on the opposite side (or its extension). Medians, angle bisectors and altitudes are all cevians.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Ceva's Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof of Ceva's theorem by comparing areas of triangles with equal heights, with a draggable concurrency point and vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/ceva-theorem",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Ceva's Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/ceva-theorem" }
          ]
        }
      }
    },
    'menelaus-theorem': {
      proofKey: 'menelaus',
      title: "Menelaus' Theorem Proof | A Line Across a Triangle Step by Step",
      description: "Watch the proof of Menelaus' theorem: when a line crosses the three sides of a triangle (one of them extended), the product of the three ratios it cuts on them is 1, by comparing areas, step by step. Then drag the line and the vertices.",
      h1Title: "Menelaus' Theorem",
      url: '/geometry/visual-tools/menelaus-theorem',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,66 56,66 42,14" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="56" y1="66" x2="72" y2="66" stroke="#E6F1FB" stroke-width="1.4" stroke-dasharray="3 2"/><line x1="26" y1="30" x2="74" y2="70" stroke="#FAC775" stroke-width="1.6"/><circle cx="31" cy="34" r="2.4" fill="#E6F1FB"/><circle cx="49" cy="49" r="2.4" fill="#E6F1FB"/><circle cx="70" cy="66" r="2.4" fill="#E6F1FB"/><text x="22" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Menelaus</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: "Menelaus' Theorem Proof",
      keywords: [
        "menelaus' theorem",
        'menelaus theorem proof',
        'transversal of a triangle',
        'collinear points',
        'ratio of areas',
        'collinearity',
        "ceva's theorem",
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag $D$ along the side $BC$ or $F$ along the extension of $AB$ to swing the line, or drag a vertex, and watch the three ratios change while their product stays at 1. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A line that is not parallel to any side of a triangle and misses its vertices crosses all three side lines. If it enters the triangle it crosses two sides between their ends and the third one on its extension; such a line is called a transversal. Menelaus' theorem says: if a line meets the sides $BC$, $CA$ of triangle $ABC$ at $D$, $E$ and the line $AB$ at $F$, then

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1$$

The three fractions are the same ones as in [Ceva's theorem](!/geometry/visual-tools/ceva-theorem), taken going round the triangle in one direction; there the three points come from three concurrent lines, here they lie on one line. With signed lengths the product is $-1$ for Menelaus and $+1$ for Ceva, which is how the two are told apart; the player uses plain lengths. The converse holds too: if the product is 1 and exactly one (or all three) of the points lies on an extension, the three points are collinear.

The proof here is by areas, like the one for Ceva. In the player $D$ slides along $BC$ and $F$ along the extension of $AB$ beyond $B$; $E$ is where the line through them meets $CA$. The readout under the canvas shows the three ratios and their product.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Cutting the Side BC',
          content: `The triangles $FBD$ and $FDC$ have their bases $BD$ and $DC$ on the same line and the same apex $F$, so they have the same height, and their areas (written with square brackets) are in the ratio of their bases:

$$\\frac{[FBD]}{[FDC]} = \\frac{BD}{DC}$$

This is the one fact the whole proof uses, the same one that drives the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) and [Ceva](!/geometry/visual-tools/ceva-theorem): a ratio of lengths along a line is a ratio of areas of triangles standing on them with a common apex.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Cutting the Side CA',
          content: `The same apex $F$ serves for the second side. The bases $CE$ and $EA$ lie on the line $CA$, so the triangles $FCE$ and $FEA$ have the same height from $F$, and

$$\\frac{[FCE]}{[FEA]} = \\frac{CE}{EA}$$`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Cutting the Line AB',
          content: `The third pair of segments, $AF$ and $FB$, lies on the line $AB$, and $F$ is one of their ends, so $F$ cannot be the apex this time. The point $E$ is: it lies on the transversal and not on $AB$. The triangles $EAF$ and $EFB$ have the same height from $E$, so

$$\\frac{[EAF]}{[EFB]} = \\frac{AF}{FB}$$

Since $F$ lies beyond $B$, the segment $FB$ is the short piece and $AF$ the long one; the ratio is larger than 1 in the opening figure.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Pairing the Areas',
          content: `Multiply the three results:

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = \\frac{[FBD]}{[FDC]} \\cdot \\frac{[FCE]}{[FEA]} \\cdot \\frac{[EAF]}{[EFB]}$$

The area $[FEA]$ is the same as $[EAF]$, so it cancels. Four areas are left, and they pair up along the transversal itself. The triangles $FBD$ and $FBE$ stand on the bases $FD$ and $FE$, which lie on the transversal, with the common apex $B$; the triangles $FCE$ and $FCD$ stand on $FE$ and $FD$ with the common apex $C$. Same height again:

$$\\frac{[FBD]}{[FBE]} = \\frac{FD}{FE}, \\qquad \\frac{[FCE]}{[FCD]} = \\frac{FE}{FD}$$

The player highlights the four triangles; $FBE$ is the one shaded at the previous step as $EFB$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Putting the two pairs together,

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = \\frac{[FBD]}{[FBE]} \\cdot \\frac{[FCE]}{[FCD]} = \\frac{FD}{FE} \\cdot \\frac{FE}{FD} = 1$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, then same-height triangles five times (three along the sides, two along the transversal), and a multiplication. Nothing else is needed: no similar triangles, no parallels, no measurement.

The usual textbook proof instead draws the perpendiculars from $A$, $B$, $C$ to the transversal and uses three pairs of similar right triangles; the area proof avoids similarity, which is why it fits this section, where similarity has no page yet.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $D$ along $BC$ or $F$ along the extension of $AB$: the transversal swings, $E$ slides along $CA$, the three ratios in the readout change, and their product stays at $1.00$. Drag $A$, $B$ or $C$ to reshape the triangle; $D$ and $F$ keep their positions along their lines and $E$ is recomputed. Pull $F$ far out and watch $AF/FB$ sink towards 1 while $CE/EA$ shrinks to make up for it.

The player keeps $F$ beyond $B$ and $D$ on the side $BC$ itself, which forces $E$ onto the side $CA$ itself: a line through one side and one extension always crosses the second side. The theorem also holds when all three points lie on extensions (the line misses the triangle), with the same proof; the player keeps to the case where the line enters the triangle. A drag that would carry $F$ or a vertex out of the frame, or bring two of the points too close, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **A test for collinearity.** The converse is the theorem's main use: to show that three points on the side lines of a triangle lie on one line, compute the three ratios and check that the product is 1 with an odd number of the points on extensions. Many classical collinearities (the Simson line, the Pascal line, the line through the three external centres of similitude of three circles) are proved this way.
• **The dual of Ceva.** [Ceva's theorem](!/geometry/visual-tools/ceva-theorem) uses the same three ratios for three concurrent cevians; Menelaus uses them for three collinear points. The two proofs by areas share their first step and differ afterwards: Ceva subtracts areas around $P$, Menelaus pairs them along the transversal.
• **Transversal of a cevian.** Applying Menelaus to the triangle cut off by a cevian gives the ratio in which a second cevian divides the first; for two [medians](!/geometry/visual-tools/centroid) this gives the $2 : 1$ ratio at the centroid in one line.
• **Signed form.** With directed lengths along each side the product is $-1$, which records that an odd number of the points lie on extensions; the player, working with plain lengths, shows the value 1.
• **Trigonometric form.** Replacing each ratio by a ratio of sines of the angles at the opposite vertex gives a trigonometric Menelaus, parallel to the trigonometric Ceva.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: "What does Menelaus' theorem say?",
          answer: 'If a line meets the sides BC, CA of a triangle ABC at D, E and the line AB at F, then (BD/DC)(CE/EA)(AF/FB) = 1 (with signed lengths, −1); and conversely, if the product is 1 and an odd number of the points lie on extensions, the three points are collinear.'
        },
        obj2: {
          question: "How is Menelaus' theorem proved with areas?",
          answer: 'Each ratio on a side equals a ratio of areas of two triangles with the same apex: BD/DC = [FBD]/[FDC], CE/EA = [FCE]/[FEA], AF/FB = [EAF]/[EFB]. After [FEA] cancels, the four remaining areas pair up along the transversal, [FBD]/[FBE] = FD/FE and [FCE]/[FCD] = FE/FD, and the product is 1.'
        },
        obj3: {
          question: "How do Menelaus' and Ceva's theorems differ?",
          answer: 'Both use the same three ratios on the sides of a triangle. In Ceva the three points come from three cevians through one point and the signed product is +1; in Menelaus the three points lie on one line and the signed product is −1.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Menelaus' Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof of Menelaus' theorem by comparing areas of triangles with equal heights, with a draggable transversal and vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/menelaus-theorem",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Menelaus' Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/menelaus-theorem" }
          ]
        }
      }
    },
  };

  const config = viewConfig[view];

  /* ---- frozen-state demonstration units (Line 1) ----
     proofDiagrams renders the live ProofCanvas to static SVG, one still per
     proof phase (the last scene of that phase), keyed `<proofKey>-<phase>`. */
  const unit = (svg, caption, text) => demoUnitFrame({ svg, caption, text })
  const D = proofDiagrams

  // Six states of the visualizer: the four proof phases, the first alternate
  // pair on its own (scene 2), and a dragged, obtuse triangle at the last step.
  const draggedAngleSum = { ...PROOFS.angleSum.model, points: { ...PROOFS.angleSum.model.points, C: { x: 470, y: 120 } } }
  const draggedExterior = { ...PROOFS.exteriorAngle.model, points: { ...PROOFS.exteriorAngle.model.points, C: { x: 60, y: 150 } } }
  const draggedExteriorSum = { ...PROOFS.exteriorAngleSum.model, points: { ...PROOFS.exteriorAngleSum.model.points, C: { x: 470, y: 140 } } }
  // apex pulled down (h 240 → 110) and the base widened: still isosceles
  const draggedIsosceles = { ...PROOFS.isosceles.model, points: { A: { x: 95, y: 350 }, B: { x: 465, y: 350 } }, params: { h: 110 } }
  // A pulled towards BC: the gap BA + AC − BC closes
  const draggedInequality = { ...PROOFS.triangleInequality.model, points: { ...PROOFS.triangleInequality.model.points, A: { x: 330, y: 250 } } }
  // B pulled towards A: AB shorter, D slides back, β opens and γ shrinks
  const draggedLarger = { ...PROOFS.largerAngle.model, points: { ...PROOFS.largerAngle.model.points, B: { x: 150, y: 140 } } }
  // Q slid close to F and the line tilted: PQ is only a little longer than PF
  const draggedPerp = { ...PROOFS.perpendicularShortest.model, points: { A: { x: 60, y: 300 }, B: { x: 500, y: 350 }, P: { x: 250, y: 120 } }, params: { t: 0.56 } }
  // C slid to the lower arc near B, and a smaller circle
  const draggedThales = { ...PROOFS.thales.model, points: { O: { x: 280, y: 230 }, A: { x: 160, y: 230 } }, params: { th: 2.4 } }
  // the line CD turned until it is nearly perpendicular to AB
  const draggedVertical = { ...PROOFS.verticalAngles.model, points: { O: { x: 280, y: 210 }, A: { x: 90, y: 290 }, C: { x: 215, y: 60 } } }
  // the transversal tilted the other way
  const draggedParallel = { ...PROOFS.parallelLines.model, points: { ...PROOFS.parallelLines.model.points, E: { x: 380, y: 70 }, F: { x: 220, y: 390 } } }
  // B pulled outward and D pushed down: still convex
  const draggedPolygon = { ...PROOFS.polygonAngleSum.model, points: { ...PROOFS.polygonAngleSum.model.points, B: { x: 470, y: 150 }, D: { x: 170, y: 372 } } }
  // C slid along its arc towards B, B moved lower: α grows, β shrinks
  const draggedInscribed = { ...PROOFS.inscribedAngle.model, params: { tb: 0.9, tc: -1.2 } }
  // X slid right: a longer than b, the inner square turned the other way
  const draggedPythagoras = { ...PROOFS.pythagoras.model, params: { t: 0.68 } }
  // C slid towards B and D slid down: β small, γ large
  const draggedCyclic = { ...PROOFS.cyclicQuadrilateral.model, params: { tb: -0.75, tc: 0.0, td: 2.0 } }
  // G pulled up towards the tangent: φ near 90°, T′ close to T
  const draggedTangent = { ...PROOFS.tangentRadius.model, points: { ...PROOFS.tangentRadius.model.points, G: { x: 430, y: 128 } } }
  // P pulled up and closer: the tangents swing round, shorter and wider apart
  const draggedTwoTangents = { ...PROOFS.twoTangents.model, points: { ...PROOFS.twoTangents.model.points, P: { x: 420, y: 120 } } }
  // B slid down the right side: the chord tilts and lengthens, M moves towards O
  const draggedChord = { ...PROOFS.chordBisector.model, params: { ta: -2.4, tb: 0.3 } }
  // D pushed to the right: a sheared, flatter parallelogram
  const draggedParallelogram = { ...PROOFS.parallelogramSides.model, points: { ...PROOFS.parallelogramSides.model.points, D: { x: 240, y: 180 } } }
  // D pushed to the right: a sheared parallelogram, the diagonals of very different lengths
  const draggedDiagonals = { ...PROOFS.parallelogramDiagonals.model, points: { ...PROOFS.parallelogramDiagonals.model.points, D: { x: 240, y: 180 } } }
  // D swung down round A towards B: a flatter rhombus, the diagonal BD shorter, AC longer
  const draggedRhombus = { ...PROOFS.rhombusDiagonals.model, params: { td: -0.4 } }
  // D pulled down: a flatter rectangle, the diagonals shorter and still equal
  const draggedRectangle = { ...PROOFS.rectangleDiagonals.model, params: { t: 0.38 } }
  // A pulled to the right: a leaning triangle, the parallelogram DBCF sheared
  const draggedMidsegment = { ...PROOFS.midsegment.model, points: { ...PROOFS.midsegment.model.points, A: { x: 250, y: 105 } } }
  // C pulled up and in: a very different outer shape, the same inner parallelogram
  const draggedVarignon = { ...PROOFS.varignon.model, points: { ...PROOFS.varignon.model.points, C: { x: 400, y: 110 } } }
  // C slid towards D: a short top base, the midsegment nearly half of AB
  const draggedTrapezoid = { ...PROOFS.trapezoidMidsegment.model, params: { tc: 0.3 } }
  // A pulled to the right: a leaning triangle, the centroid leaning with it
  const draggedCentroid = { ...PROOFS.centroid.model, points: { ...PROOFS.centroid.model.points, A: { x: 340, y: 100 } } }
  // A pulled towards C: AC shorter than AB, D slid towards C
  const draggedBisector = { ...PROOFS.angleBisector.model, points: { ...PROOFS.angleBisector.model.points, A: { x: 330, y: 95 } } }
  // A pulled down and right: a wider angle at A, the circumcentre lower and nearer BC
  const draggedCircumcentre = { ...PROOFS.circumcentre.model, points: { ...PROOFS.circumcentre.model.points, A: { x: 330, y: 130 } } }
  // A pulled to the right: a leaning triangle, the incircle smaller and shifted
  const draggedIncentre = { ...PROOFS.incentre.model, points: { ...PROOFS.incentre.model.points, A: { x: 350, y: 90 } } }
  // A pulled to the right: the altitudes lean, H moves towards the left side
  const draggedOrthocentre = { ...PROOFS.orthocentre.model, points: { ...PROOFS.orthocentre.model.points, A: { x: 290, y: 165 } } }
  // A pulled further right: a more lopsided triangle, the three centres spread out along the line
  const draggedEuler = { ...PROOFS.eulerLine.model, points: { ...PROOFS.eulerLine.model.points, A: { x: 375, y: 125 } } }
  // A pulled to the right: a leaning triangle, the nine points redistributed on a shifted circle
  const draggedNine = { ...PROOFS.ninePointCircle.model, points: { ...PROOFS.ninePointCircle.model.points, A: { x: 340, y: 100 } } }
  // B slid down the circle: the chord AB steeper, P nearer the centre, both products larger
  const draggedChords = { ...PROOFS.powerOfPoint.model, params: { ta: -2.6, tb: 1.0, tc: -0.9, td: 2.2 } }
  // C pulled to the right: α and β have traded sizes, the two apex angles still equal
  const draggedSSS = { ...PROOFS.sssCongruence.model, points: { ...PROOFS.sssCongruence.model.points, C: { x: 320, y: 100 } } }
  // E slid towards C and C pulled right: a larger part of a different whole
  const draggedASA = { ...PROOFS.asaCongruence.model, points: { ...PROOFS.asaCongruence.model.points, C: { x: 310, y: 110 } }, params: { t: 0.72 } }
  // C pulled left and down: a wider angle at C, the readout still matching
  const draggedAAS = { ...PROOFS.aasCongruence.model, points: { ...PROOFS.aasCongruence.model.points, C: { x: 200, y: 150 } } }
  // B swung down and out: a wider, lower kite, the right angle at M unchanged
  const draggedKite = { ...PROOFS.kiteDiagonals.model, points: { ...PROOFS.kiteDiagonals.model.points, B: { x: 120, y: 260 } } }
  // A slid towards C and B raised: shorter legs, a steeper hypotenuse, the angles at A and A′ still equal
  const draggedHL = { ...PROOFS.hlCongruence.model, points: { ...PROOFS.hlCongruence.model.points, B: { x: 270, y: 85 }, C: { x: 270, y: 300 } }, params: { t: 0.45 } }
  // P moved below and the secant turned: different PA and PB, the same product and the same PT²
  const draggedSecant = { ...PROOFS.secantTangent.model, points: { ...PROOFS.secantTangent.model.points, P: { x: 95, y: 300 } }, params: { r: 120, ta: 2.6 } }
  // P moved below and both secants turned: four different segments, the two products still equal
  const draggedTwoSecants = { ...PROOFS.twoSecants.model, points: { ...PROOFS.twoSecants.model.points, P: { x: 95, y: 300 } }, params: { ta: 2.4, tc: -2.95 } }
  // P pulled towards B: BD/DC small, AF/FB large, the product still 1
  const draggedCeva = { ...PROOFS.ceva.model, points: { ...PROOFS.ceva.model.points, P: { x: 340, y: 270 } } }
  // F pulled further out along AB: AF/FB nearer 1, CE/EA smaller, the product still 1
  const draggedMenelaus = { ...PROOFS.menelaus.model, params: { ...PROOFS.menelaus.model.params, u: 1.6 } }

  const unitsByView = {
    'triangle-angle-sum': {
      given: unit(D['angleSum-given'], 'Opening scene, frozen',
        'Any triangle with its three interior angles marked α, β, γ.'),
      construct: unit(D['angleSum-construct'], 'Parallel line, frozen',
        'Line DE through C, parallel to AB; D and E are constructed points.'),
      'alternate-first': unit(proofStill('angleSum', 2), 'First alternate pair, frozen',
        'AC crosses both parallels: the angle at A reappears at C as ∠ACD.'),
      alternate: unit(D['angleSum-alternate'], 'Both alternate pairs, frozen',
        'The angles at A and B reappear at C, one on each side of γ.'),
      conclude: unit(D['angleSum-conclude'], 'Straight angle, frozen',
        'α, γ and β fill the straight angle DCE: 180°.'),
      dragged: unit(proofStill('angleSum', 4, { model: draggedAngleSum }), 'After dragging C, frozen',
        'An obtuse triangle at the last step: the construction and both alternate pairs follow, and the sum is still 180°.'),
    },
    'exterior-angle': {
      given: unit(D['exteriorAngle-given'], 'Opening scene, frozen',
        'Any triangle with its three interior angles marked α, β, γ.'),
      construct: unit(D['exteriorAngle-construct'], 'The extension, frozen',
        'AB produced past B to D; the exterior angle δ = ∠CBD between BD and BC.'),
      linear: unit(D['exteriorAngle-linear'], 'The linear pair, frozen',
        'β and δ share the side BC and fill the straight angle ABD: β + δ = 180°.'),
      sum: unit(D['exteriorAngle-sum'], 'The angle sum, frozen',
        'The three interior angles highlighted: α + β + γ = 180°.'),
      conclude: unit(D['exteriorAngle-conclude'], 'The conclusion, frozen',
        'δ highlighted with α and γ: the exterior angle equals their sum.'),
      dragged: unit(proofStill('exteriorAngle', 4, { model: draggedExterior }), 'After dragging C, frozen',
        'C moved past A: the triangle is obtuse at A, and δ has grown to match α + γ.'),
    },
    'exterior-angle-sum': {
      given: unit(D['exteriorAngleSum-given'], 'Opening scene, frozen',
        'Any triangle with its three interior angles marked α, β, γ.'),
      construct: unit(D['exteriorAngleSum-construct'], 'The three extensions, frozen',
        'AB past B, BC past C, CA past A, the same way round; the exterior angles β′, γ′, α′ in green.'),
      linear: unit(D['exteriorAngleSum-linear'], 'Three linear pairs, frozen',
        'All six angles highlighted: each interior–exterior pair fills a straight angle, 3 × 180° in all.'),
      sum: unit(D['exteriorAngleSum-sum'], 'The angle sum, frozen',
        'The three interior angles alone: α + β + γ = 180°.'),
      conclude: unit(D['exteriorAngleSum-conclude'], 'The conclusion, frozen',
        'The three exterior angles alone: 540° − 180° = 360°.'),
      dragged: unit(proofStill('exteriorAngleSum', 4, { model: draggedExteriorSum }), 'After dragging C, frozen',
        'C moved past B: β′ has shrunk and the other two exterior angles have grown; the three still make 360°.'),
    },
    'isosceles-base-angles': {
      given: unit(D['isosceles-given'], 'Opening scene, frozen',
        'An isosceles triangle: the equal legs CA and CB carry one tick each; the base angles α and β.'),
      construct: unit(D['isosceles-construct'], 'The midpoint line, frozen',
        'M, the midpoint of AB, joined to the apex C; the two half-bases carry two ticks each.'),
      congruence: unit(D['isosceles-congruence'], 'Two congruent triangles, frozen',
        'ACM and BCM shaded: three pairs of equal sides, so congruent by SSS.'),
      conclude: unit(D['isosceles-conclude'], 'The conclusion, frozen',
        'The base angles highlighted: corresponding angles of congruent triangles, α = β.'),
      dragged: unit(proofStill('isosceles', 3, { model: draggedIsosceles }), 'After dragging, frozen',
        'Apex pulled down and the base widened: the legs are still equal and so are the base angles.'),
    },
    'triangle-inequality': {
      given: unit(D['triangleInequality-given'], 'Opening scene, frozen',
        'Any triangle ABC; the claim is BA + AC > BC.'),
      construct: unit(D['triangleInequality-construct'], 'The construction, frozen',
        'BA produced past A to D with AD = AC (one tick each); CD joined.'),
      isosceles: unit(D['triangleInequality-isosceles'], 'The isosceles triangle, frozen',
        'ACD has AD = AC, so its base angles at D and C are equal, both δ.'),
      compare: unit(D['triangleInequality-compare'], 'The larger angle, frozen',
        'The angle BCD = ε contains δ as a part, so ε > δ.'),
      side: unit(D['triangleInequality-side'], 'The longer side, frozen',
        'In triangle BCD the larger angle at C is opposite BD, the smaller at D opposite BC: BD > BC.'),
      conclude: unit(D['triangleInequality-conclude'], 'The conclusion, frozen',
        'BD = BA + AD = BA + AC, so BA + AC > BC.'),
      dragged: unit(proofStill('triangleInequality', 5, { model: draggedInequality }), 'After dragging A, frozen',
        'A pulled towards BC: D slides to keep AD = AC and the gap between BA + AC and BC closes without reaching zero.'),
    },
    'larger-side-larger-angle': {
      given: unit(D['largerAngle-given'], 'Opening scene, frozen',
        'Triangle ABC with AC longer than AB; the angles β at B and γ at C are the ones compared.'),
      construct: unit(D['largerAngle-construct'], 'The cut-off point, frozen',
        'D on AC with AD = AB (one tick each); BD joined.'),
      isosceles: unit(D['largerAngle-isosceles'], 'The isosceles triangle, frozen',
        'ABD has AB = AD, so its base angles at B and D are equal, both δ.'),
      exterior: unit(D['largerAngle-exterior'], 'The exterior angle, frozen',
        'At D the angle δ is an exterior angle of triangle BDC, so δ > γ.'),
      part: unit(D['largerAngle-part'], 'The whole angle, frozen',
        'δ is a part of the whole angle β at B, so β > δ.'),
      conclude: unit(D['largerAngle-conclude'], 'The conclusion, frozen',
        'β > δ > γ: the larger angle faces the larger side.'),
      dragged: unit(proofStill('largerAngle', 5, { model: draggedLarger }), 'After dragging B, frozen',
        'B pulled towards A: AB is shorter, D has slid back, β has opened and γ has shrunk.'),
    },
    'perpendicular-shortest': {
      given: unit(D['perpendicularShortest-given'], 'Opening scene, frozen',
        'The line through A and B, the point P, the foot F of the perpendicular with its right-angle mark, and a second point Q on the line.'),
      triangle: unit(D['perpendicularShortest-triangle'], 'The right triangle, frozen',
        'PFQ shaded: a triangle with a right angle at F and the angles φ at P and θ at Q.'),
      acute: unit(D['perpendicularShortest-acute'], 'Two acute angles, frozen',
        'φ and θ highlighted: they share the 90° left by the right angle, so each is acute.'),
      largest: unit(D['perpendicularShortest-largest'], 'The largest angle, frozen',
        'The right angle at F on its own: larger than φ and than θ.'),
      side: unit(D['perpendicularShortest-side'], 'The longest side, frozen',
        'PQ and PF highlighted with the angles that face them: the larger angle faces the longer side.'),
      conclude: unit(D['perpendicularShortest-conclude'], 'The conclusion, frozen',
        'PF highlighted: shorter than PQ for every Q, the distance from P to the line.'),
      dragged: unit(proofStill('perpendicularShortest', 5, { model: draggedPerp }), 'After dragging, frozen',
        'The line tilted and Q slid close to F: PQ is only a little longer than PF, but still longer.'),
    },
    'thales-theorem': {
      given: unit(D['thales-given'], 'Opening scene, frozen',
        'The circle with centre O, the diameter AB and a point C on the circle, joined to A and B.'),
      construct: unit(D['thales-construct'], 'The radius OC, frozen',
        'OC drawn; OA, OB and OC are radii, equal, one tick each.'),
      isoA: unit(D['thales-isoA'], 'The first isosceles triangle, frozen',
        'OAC with OA = OC: the base angles at A and at C are both α.'),
      isoB: unit(D['thales-isoB'], 'The second isosceles triangle, frozen',
        'OBC with OB = OC: the base angles at B and at C are both β.'),
      sum: unit(D['thales-sum'], 'The angle sum, frozen',
        'All four marked angles: α at A, β at B, α + β at C, together 180°.'),
      conclude: unit(D['thales-conclude'], 'The conclusion, frozen',
        'The angle at C highlighted: α + β = 90°, a right angle.'),
      dragged: unit(proofStill('thales', 5, { model: draggedThales }), 'After dragging, frozen',
        'A smaller circle, with C slid to the lower arc near B: α and β have changed, the angle at C is still 90°.'),
    },
    'vertical-angles': {
      given: unit(D['verticalAngles-given'], 'Opening scene, frozen',
        'Two lines crossing at O; the vertical angles α = ∠AOC and α′ = ∠BOD marked.'),
      pair1: unit(D['verticalAngles-pair1'], 'The first linear pair, frozen',
        'α and its neighbour β fill the straight angle AOB: α + β = 180°.'),
      pair2: unit(D['verticalAngles-pair2'], 'The second linear pair, frozen',
        'The same β with α′ fills the straight angle COD: β + α′ = 180°.'),
      conclude: unit(D['verticalAngles-conclude'], 'The conclusion, frozen',
        'α and α′ highlighted: equal, because each makes 180° with the same β.'),
      other: unit(D['verticalAngles-other'], 'The other pair, frozen',
        'β and β′, the second pair of vertical angles, equal by the same argument.'),
      dragged: unit(proofStill('verticalAngles', 4, { model: draggedVertical }), 'After dragging C, frozen',
        'CD turned until it is almost perpendicular to AB: all four angles near 90°, the pairs still equal.'),
    },
    'parallel-lines': {
      given: unit(D['parallelLines-given'], 'Opening scene, frozen',
        'Two parallel lines (arrow marks) and the transversal EF, crossing them at P and Q.'),
      corresponding: unit(D['parallelLines-corresponding'], 'Corresponding angles, frozen',
        'α at P and α′ at Q, in the same position at the two crossings: equal by the parallel postulate.'),
      alternate: unit(D['parallelLines-alternate'], 'Alternate angles, frozen',
        'The vertical angle of α at P, below the line on the left, equals α′: alternate angles.'),
      cointerior: unit(D['parallelLines-cointerior'], 'Co-interior angles, frozen',
        'β at P and α′ at Q, between the parallels on the same side: β + α′ = 180°.'),
      conclude: unit(D['parallelLines-conclude'], 'The three relations, frozen',
        'All four marked angles: corresponding equal, alternate equal, co-interior supplementary.'),
      dragged: unit(proofStill('parallelLines', 4, { model: draggedParallel }), 'After dragging E and F, frozen',
        'The transversal tilted the other way: α and α′ have changed together, β the other way; the relations hold.'),
    },
    'polygon-angle-sum': {
      given: unit(D['polygonAngleSum-given'], 'Opening scene, frozen',
        'A convex pentagon with its five interior angles α, β, γ, δ, ε.'),
      construct: unit(D['polygonAngleSum-construct'], 'The diagonals, frozen',
        'AC and AD from the vertex A: three triangles ABC, ACD, ADE in three colours.'),
      sum: unit(D['polygonAngleSum-sum'], 'Three triangles, frozen',
        'Each triangle has 180°: 3 × 180° = 540° for all nine triangle angles.'),
      fit: unit(D['polygonAngleSum-fit'], 'The angles fit together, frozen',
        'The five pentagon angles highlighted with the diagonals through α, γ, δ: the triangle angles regrouped.'),
      conclude: unit(D['polygonAngleSum-conclude'], 'The conclusion, frozen',
        'α + β + γ + δ + ε = 540° = (5 − 2) · 180°.'),
      dragged: unit(proofStill('polygonAngleSum', 4, { model: draggedPolygon }), 'After dragging B and D, frozen',
        'A lopsided but still convex pentagon: the angles have changed, the sum is still 540°.'),
    },
    'inscribed-angle': {
      given: unit(D['inscribedAngle-given'], 'Opening scene, frozen',
        'A, B, C on the circle; the inscribed angle at C and the central angle at O, each shown in two parts.'),
      construct: unit(D['inscribedAngle-construct'], 'The diameter, frozen',
        'CD through O; the radii OA, OB, OC marked equal.'),
      isoA: unit(D['inscribedAngle-isoA'], 'The isosceles triangle, frozen',
        'OAC with OA = OC: the base angles at A and at C are both α.'),
      extA: unit(D['inscribedAngle-extA'], 'The exterior angle, frozen',
        '∠AOD is an exterior angle of triangle OAC: α + α = 2α.'),
      sideB: unit(D['inscribedAngle-sideB'], 'The other side, frozen',
        'The same on the side of B: ∠OBC = β and ∠DOB = 2β.'),
      conclude: unit(D['inscribedAngle-conclude'], 'The conclusion, frozen',
        'The two parts at O and the two parts at C: ∠AOB = 2α + 2β = 2∠ACB.'),
      dragged: unit(proofStill('inscribedAngle', 5, { model: draggedInscribed }), 'After dragging, frozen',
        'C slid along its arc and B moved: α and β have changed, the angle at the centre is still twice the angle at the circle.'),
    },
    'pythagorean-theorem': {
      given: unit(D['pythagoras-given'], 'Opening scene, frozen',
        'The right triangle WPX: legs a and b, hypotenuse c, acute angles α and β.'),
      construct: unit(D['pythagoras-construct'], 'The square of side a + b, frozen',
        'PQRS with each side cut at a from one corner and b from the next: X, Y, Z, W.'),
      four: unit(D['pythagoras-four'], 'Four copies, frozen',
        'A triangle with legs a, b and a right angle in every corner: all four congruent by SAS.'),
      square: unit(D['pythagoras-square'], 'The inner square, frozen',
        'XYZW: four sides c, and at X the angle between α and β is 180° − 90° = 90°.'),
      areas: unit(D['pythagoras-areas'], 'Area two ways, frozen',
        '(a + b)² for the big square; c² + four halves of ab for its pieces.'),
      conclude: unit(D['pythagoras-conclude'], 'The conclusion, frozen',
        'a² + 2ab + b² = c² + 2ab, so a² + b² = c².'),
      dragged: unit(proofStill('pythagoras', 5, { model: draggedPythagoras }), 'After dragging X, frozen',
        'a longer than b now: the triangles are thinner, the inner square has turned, the equation still holds.'),
    },
    'cyclic-quadrilateral': {
      given: unit(D['cyclicQuadrilateral-given'], 'Opening scene, frozen',
        'ABCD with its four vertices on the circle; the centre O inside.'),
      construct: unit(D['cyclicQuadrilateral-construct'], 'The four radii, frozen',
        'OA, OB, OC, OD, all equal: four isosceles triangles round O.'),
      iso: unit(D['cyclicQuadrilateral-iso'], 'The base angles, frozen',
        'α at A and B, β at B and C, γ at C and D, δ at D and A.'),
      angles: unit(D['cyclicQuadrilateral-angles'], 'The angles of ABCD, frozen',
        'Each angle of the quadrilateral is two of the letters; the angles at A and at C are lit.'),
      sum: unit(D['cyclicQuadrilateral-sum'], 'The angle sum, frozen',
        'All eight marks together: 2(α + β + γ + δ) = 360°.'),
      conclude: unit(D['cyclicQuadrilateral-conclude'], 'The conclusion, frozen',
        '∠A + ∠C = δ + α + β + γ = 180°.'),
      dragged: unit(proofStill('cyclicQuadrilateral', 5, { model: draggedCyclic }), 'After dragging C and D, frozen',
        'C slid towards B: β is small and γ large, the sums are still 180°.'),
    },
    'tangent-radius': {
      given: unit(D['tangentRadius-given'], 'Opening scene, frozen',
        'The circle, the tangent ℓ at T, and the radius OT; no right-angle mark yet, that is what is to be proved.'),
      suppose: unit(D['tangentRadius-suppose'], 'The supposition, frozen',
        'The dashed line ℓ′ through T and G, making an angle φ ≠ 90° with OT.'),
      construct: unit(D['tangentRadius-construct'], 'The construction, frozen',
        'The perpendicular OF to ℓ′ and the mirror point T′ with FT′ = FT.'),
      sas: unit(D['tangentRadius-sas'], 'The congruent triangles, frozen',
        'OFT and OFT′: a common side, equal legs, right angles between; so OT′ = OT.'),
      contra: unit(D['tangentRadius-contra'], 'The contradiction, frozen',
        'OT′ = r puts T′ on the circle: ℓ′ meets the circle twice.'),
      conclude: unit(D['tangentRadius-conclude'], 'The conclusion, frozen',
        'The right-angle mark at T: the tangent is the perpendicular to OT.'),
      dragged: unit(proofStill('tangentRadius', 4, { model: draggedTangent }), 'After dragging G, frozen',
        'G pulled up towards the tangent: φ close to 90°, F and T′ crowding in on T.'),
    },
    'two-tangents': {
      given: unit(D['twoTangents-given'], 'Opening scene, frozen',
        'P outside the circle, the two tangents touching at A and B.'),
      construct: unit(D['twoTangents-construct'], 'The construction, frozen',
        'OA, OB, OP joined; the radii marked equal.'),
      right: unit(D['twoTangents-right'], 'The right angles, frozen',
        'Tangent ⟂ radius at A and at B: two right triangles on the hypotenuse OP.'),
      pyth: unit(D['twoTangents-pyth'], 'Pythagoras twice, frozen',
        'PA² = OP² − OA² in the orange triangle, PB² = OP² − OB² in the blue one.'),
      equal: unit(D['twoTangents-equal'], 'The same numbers, frozen',
        'OA = OB = r and OP shared: both differences are OP² − r².'),
      conclude: unit(D['twoTangents-conclude'], 'The conclusion, frozen',
        'PA = PB, two ticks each.'),
      dragged: unit(proofStill('twoTangents', 5, { model: draggedTwoTangents }), 'After dragging P, frozen',
        'P pulled up and closer: the tangents have swung round and shortened, still equal.'),
    },
    'chord-bisector': {
      given: unit(D['chordBisector-given'], 'Opening scene, frozen',
        'The chord AB and the perpendicular OM from the centre, with its foot M.'),
      construct: unit(D['chordBisector-construct'], 'The construction, frozen',
        'OA and OB joined, marked equal: the isosceles triangle OAB cut by OM.'),
      right: unit(D['chordBisector-right'], 'The right triangles, frozen',
        'OMA and OMB, right-angled at M, on the common leg OM.'),
      pyth: unit(D['chordBisector-pyth'], 'Pythagoras twice, frozen',
        'AM² = OA² − OM² in the orange triangle, MB² = OB² − OM² in the blue one.'),
      equal: unit(D['chordBisector-equal'], 'The same numbers, frozen',
        'OA = OB = r and OM shared: both differences are r² − OM².'),
      conclude: unit(D['chordBisector-conclude'], 'The conclusion, frozen',
        'AM = MB, two ticks each.'),
      dragged: unit(proofStill('chordBisector', 5, { model: draggedChord }), 'After dragging B, frozen',
        'B slid down the circle: the chord is tilted and longer, M nearer the centre, still the midpoint.'),
    },
    'parallelogram-sides': {
      given: unit(D['parallelogramSides-given'], 'Opening scene, frozen',
        'ABCD with its two pairs of parallel sides marked by chevrons; C hollow, built from A, B, D.'),
      construct: unit(D['parallelogramSides-construct'], 'The diagonal, frozen',
        'BD cuts the parallelogram into the triangles ABD and CDB.'),
      alt1: unit(D['parallelogramSides-alt1'], 'Alternate angles once, frozen',
        'On the parallels AB, DC: ∠ABD = ∠CDB = α.'),
      alt2: unit(D['parallelogramSides-alt2'], 'Alternate angles twice, frozen',
        'On the parallels AD, BC: ∠ADB = ∠CBD = β.'),
      asa: unit(D['parallelogramSides-asa'], 'The congruent triangles, frozen',
        'BD between α and β in both triangles: congruent by ASA.'),
      conclude: unit(D['parallelogramSides-conclude'], 'The conclusion, frozen',
        'AB = CD and AD = BC, the four sides lit.'),
      dragged: unit(proofStill('parallelogramSides', 5, { model: draggedParallelogram }), 'After dragging D, frozen',
        'D pushed right: a sheared, flatter parallelogram; the readout still pairs the sides.'),
    },
    'parallelogram-diagonals': {
      given: unit(D['parallelogramDiagonals-given'], 'Opening scene, frozen',
        'ABCD with its diagonals AC and BD crossing at the hollow point M.'),
      sides: unit(D['parallelogramDiagonals-sides'], 'Opposite sides equal, frozen',
        'AB = CD lit; the two triangles ABM and CDM on those sides.'),
      alt1: unit(D['parallelogramDiagonals-alt1'], 'Alternate angles once, frozen',
        'On the transversal AC: ∠BAC = ∠DCA = α.'),
      alt2: unit(D['parallelogramDiagonals-alt2'], 'Alternate angles twice, frozen',
        'On the transversal BD: ∠ABD = ∠CDB = β.'),
      asa: unit(D['parallelogramDiagonals-asa'], 'The congruent triangles, frozen',
        'Equal bases between α and β: congruent by ASA.'),
      conclude: unit(D['parallelogramDiagonals-conclude'], 'The conclusion, frozen',
        'AM = MC (one tick each) and BM = MD (two ticks each).'),
      dragged: unit(proofStill('parallelogramDiagonals', 5, { model: draggedDiagonals }), 'After dragging D, frozen',
        'D pushed right: the diagonals are now very different in length, and M still halves both.'),
    },
    'rhombus-diagonals': {
      given: unit(D['rhombusDiagonals-given'], 'Opening scene, frozen',
        'ABCD with four equal sides (one tick each) and its diagonals crossing at the hollow point M.'),
      para: unit(D['rhombusDiagonals-para'], 'The diagonals bisect each other, frozen',
        'BM = MD, two ticks each: the parallelogram theorem applied to the rhombus.'),
      sss: unit(D['rhombusDiagonals-sss'], 'The congruent triangles, frozen',
        'ABM and ADM: AB = AD, BM = MD, AM shared.'),
      angles: unit(D['rhombusDiagonals-angles'], 'Equal angles at M, frozen',
        'The two angles φ on either side of AM.'),
      linear: unit(D['rhombusDiagonals-linear'], 'The linear pair, frozen',
        'B, M, D on one line: the two angles fill a straight angle.'),
      conclude: unit(D['rhombusDiagonals-conclude'], 'The conclusion, frozen',
        'The right-angle mark at M: AC ⟂ BD.'),
      dragged: unit(proofStill('rhombusDiagonals', 5, { model: draggedRhombus }), 'After dragging D, frozen',
        'D swung down round A: a flatter rhombus, BD short and AC long, still perpendicular.'),
    },
    'rectangle-diagonals': {
      given: unit(D['rectangleDiagonals-given'], 'Opening scene, frozen',
        'ABCD with four right-angle marks and its two diagonals.'),
      para: unit(D['rectangleDiagonals-para'], 'A parallelogram, frozen',
        'Co-interior angles of 90° + 90°: both pairs of opposite sides are parallel (chevrons).'),
      sides: unit(D['rectangleDiagonals-sides'], 'Opposite sides equal, frozen',
        'AD = BC, one tick each.'),
      tri: unit(D['rectangleDiagonals-tri'], 'The two triangles, frozen',
        'DAB with its right angle at A, CBA with its right angle at B, both on the base AB.'),
      sas: unit(D['rectangleDiagonals-sas'], 'Side angle side, frozen',
        'AD = BC, AB shared, right angles between: congruent.'),
      conclude: unit(D['rectangleDiagonals-conclude'], 'The conclusion, frozen',
        'AC = BD, two ticks each.'),
      dragged: unit(proofStill('rectangleDiagonals', 5, { model: draggedRectangle }), 'After dragging D, frozen',
        'D pulled down: a flatter rectangle, both diagonals shorter and still equal.'),
    },
    'midsegment': {
      given: unit(D['midsegment-given'], 'Opening scene, frozen',
        'Triangle ABC with the midpoints D of AB and E of AC, and the midsegment DE.'),
      construct: unit(D['midsegment-construct'], 'The extension, frozen',
        'DE doubled to F (three ticks each), and CF joined.'),
      sas1: unit(D['midsegment-sas1'], 'The first congruence, frozen',
        'ADE and CFE: AE = EC, DE = EF, vertical angles ε at E.'),
      alt: unit(D['midsegment-alt'], 'A parallel appears, frozen',
        'α at A and at C are alternate angles on AC: CF ∥ AB (two chevrons each).'),
      equal: unit(D['midsegment-equal'], 'Three equal segments, frozen',
        'CF = AD = DB, one tick each.'),
      join: unit(D['midsegment-join'], 'The second transversal, frozen',
        'DC joined; γ at D and at C are alternate angles on it.'),
      sas2: unit(D['midsegment-sas2'], 'The second congruence, frozen',
        'DBC and CFD: DB = CF, DC shared, γ between; so BC = FD and the angles δ are equal.'),
      conclude: unit(D['midsegment-conclude'], 'The conclusion, frozen',
        'DF ∥ BC (one chevron each) and BC = 2 DE.'),
      dragged: unit(proofStill('midsegment', 7, { model: draggedMidsegment }), 'After dragging A, frozen',
        'A pulled right: the triangle leans and the parallelogram DBCF shears; DE is still half of BC and parallel to it.'),
    },
    'varignon': {
      given: unit(D['varignon-given'], 'Opening scene, frozen',
        'ABCD with the midpoints P, Q, R, S of its sides joined into PQRS.'),
      diag1: unit(D['varignon-diag1'], 'The first diagonal, frozen',
        'AC dashed: two triangles, ABC and ADC.'),
      mid1: unit(D['varignon-mid1'], 'The first midsegment, frozen',
        'PQ in triangle ABC: parallel to AC, one chevron each.'),
      mid2: unit(D['varignon-mid2'], 'The second midsegment, frozen',
        'SR in triangle ADC: also parallel to AC, so PQ ∥ SR.'),
      diag2: unit(D['varignon-diag2'], 'The second diagonal, frozen',
        'BD dashed; QR and PS are midsegments parallel to it, two chevrons each.'),
      conclude: unit(D['varignon-conclude'], 'The conclusion, frozen',
        'Both pairs of opposite sides parallel: PQRS is a parallelogram.'),
      dragged: unit(proofStill('varignon', 5, { model: draggedVarignon }), 'After dragging C, frozen',
        'C pulled up and in: the outer shape is very different, the inner figure still a parallelogram.'),
    },
    'trapezoid-midsegment': {
      given: unit(D['trapezoidMidsegment-given'], 'Opening scene, frozen',
        'The trapezoid with AB ∥ DC, the midpoints M and N of the legs, and the midsegment MN.'),
      construct: unit(D['trapezoidMidsegment-construct'], 'The diagonal and its midpoint, frozen',
        'AC dashed, K its midpoint with three ticks each side.'),
      mid1: unit(D['trapezoidMidsegment-mid1'], 'The first midsegment, frozen',
        'MK in triangle ACD: parallel to DC and half of it.'),
      mid2: unit(D['trapezoidMidsegment-mid2'], 'The second midsegment, frozen',
        'KN in triangle ABC: parallel to AB and half of it.'),
      collinear: unit(D['trapezoidMidsegment-collinear'], 'One line through K, frozen',
        'MK and KN both parallel to the bases through K: one line.'),
      conclude: unit(D['trapezoidMidsegment-conclude'], 'The conclusion, frozen',
        'MN = MK + KN = half the sum of the bases, with its chevron.'),
      dragged: unit(proofStill('trapezoidMidsegment', 5, { model: draggedTrapezoid }), 'After dragging C, frozen',
        'C slid towards D: a short top base, MN not much more than half of AB, still the average.'),
    },
    'centroid': {
      given: unit(D['centroid-given'], 'Opening scene, frozen',
        'The medians AD and BE meeting at the hollow point G.'),
      construct: unit(D['centroid-construct'], 'Two new midpoints, frozen',
        'P halfway along AG and Q halfway along BG, with the ticks of their medians.'),
      mid1: unit(D['centroid-mid1'], 'The first midsegment, frozen',
        'DE in the big triangle: parallel to AB, half of it.'),
      mid2: unit(D['centroid-mid2'], 'The second midsegment, frozen',
        'PQ in the small triangle GAB: also parallel to AB and half of it.'),
      para: unit(D['centroid-para'], 'The parallelogram at G, frozen',
        'PQDE filled; its diagonals PD and QE lie along the medians and bisect each other at G.'),
      ratio: unit(D['centroid-ratio'], 'Two thirds of the way, frozen',
        'AP = PG = GD and BQ = QG = GE: each median cut into thirds.'),
      conclude: unit(D['centroid-conclude'], 'The conclusion, frozen',
        'The third median CF drawn: it passes through G too.'),
      dragged: unit(proofStill('centroid', 6, { model: draggedCentroid }), 'After dragging A, frozen',
        'A pulled right: the triangle leans, the medians swing, and G is still two thirds of the way down each.'),
    },
    'angle-bisector': {
      given: unit(D['angleBisector-given'], 'Opening scene, frozen',
        'The bisector AD with its two equal angles α, meeting BC at the hollow point D.'),
      heights: unit(D['angleBisector-heights'], 'The perpendiculars, frozen',
        'DE to AB and DF to AC, with their right-angle marks.'),
      congruent: unit(D['angleBisector-congruent'], 'The congruent right triangles, frozen',
        'ADE and ADF on the common hypotenuse AD: DE = DF, one tick each.'),
      areas1: unit(D['angleBisector-areas1'], 'Areas by the sides, frozen',
        'ABD on the base AB with height DE, ACD on the base AC with height DF.'),
      areas2: unit(D['angleBisector-areas2'], 'Areas by the bases, frozen',
        'The same two triangles on the bases BD and DC, sharing the height AH.'),
      conclude: unit(D['angleBisector-conclude'], 'The conclusion, frozen',
        'The two ways of writing the ratio of the areas agree: BD : DC = AB : AC.'),
      dragged: unit(proofStill('angleBisector', 5, { model: draggedBisector }), 'After dragging A, frozen',
        'A pulled towards C: AC is now the shorter side and D has slid towards C in the same proportion.'),
    },
    'circumcentre': {
      given: unit(D['circumcentre-given'], 'Opening scene, frozen',
        'The perpendicular bisectors of AB and BC, dashed, meeting at the hollow point O.'),
      sas1: unit(D['circumcentre-sas1'], 'The first bisector, frozen',
        'OPA and OPB: OP shared, PA = PB, right angles at P; so OA = OB.'),
      sas2: unit(D['circumcentre-sas2'], 'The second bisector, frozen',
        'OQB and OQC in the same way: OB = OC.'),
      equal: unit(D['circumcentre-equal'], 'Three equal distances, frozen',
        'OA = OB = OC, three ticks each.'),
      third: unit(D['circumcentre-third'], 'The third bisector, frozen',
        'The isosceles median OR, perpendicular to AC: the third bisector passes through O.'),
      conclude: unit(D['circumcentre-conclude'], 'The conclusion, frozen',
        'The circumcircle about O through A, B and C.'),
      dragged: unit(proofStill('circumcentre', 5, { model: draggedCircumcentre }), 'After dragging A, frozen',
        'A pulled down and right: the angle at A is wider and O sits lower, nearer the base, still equidistant from the vertices.'),
    },
    'incentre': {
      given: unit(D['incentre-given'], 'Opening scene, frozen',
        'The bisectors at A and B, with their pairs of equal angles, meeting at the hollow point I.'),
      feet: unit(D['incentre-feet'], 'The feet, frozen',
        'The perpendiculars ID, IE, IF from I to the three sides.'),
      aas1: unit(D['incentre-aas1'], 'The first bisector, frozen',
        'AIE and AIF on the hypotenuse AI with equal angles α: IE = IF.'),
      aas2: unit(D['incentre-aas2'], 'The second bisector, frozen',
        'BIF and BID on the hypotenuse BI with equal angles β: IF = ID.'),
      third: unit(D['incentre-third'], 'The third bisector, frozen',
        'CID and CIE with equal legs on the hypotenuse CI: the angles γ at C are equal, so CI bisects C.'),
      conclude: unit(D['incentre-conclude'], 'The conclusion, frozen',
        'The incircle about I, touching the three sides at D, E, F.'),
      dragged: unit(proofStill('incentre', 5, { model: draggedIncentre }), 'After dragging A, frozen',
        'A pulled right: a leaning triangle with a smaller incircle, still touching all three sides.'),
    },
    'orthocentre': {
      given: unit(D['orthocentre-given'], 'Opening scene, frozen',
        'The altitudes AD and BE meeting at the hollow point H.'),
      construct: unit(D['orthocentre-construct'], 'Three parallels, frozen',
        'Through each vertex the parallel to the opposite side: the large triangle A′B′C′, dashed.'),
      mid: unit(D['orthocentre-mid'], 'The midpoints, frozen',
        'A, B, C are the midpoints of the sides of A′B′C′: one, two and three ticks.'),
      perp: unit(D['orthocentre-perp'], 'Altitudes as perpendicular bisectors, frozen',
        'Right angles at A and B between each altitude and the side of the large triangle.'),
      concur: unit(D['orthocentre-concur'], 'The circumcentre of the big triangle, frozen',
        'AD and BE are two perpendicular bisectors of A′B′C′; they meet at H.'),
      conclude: unit(D['orthocentre-conclude'], 'The conclusion, frozen',
        'The third altitude CF drawn: it passes through H.'),
      dragged: unit(proofStill('orthocentre', 5, { model: draggedOrthocentre }), 'After dragging A, frozen',
        'A pulled right: the altitudes lean and H has moved, still on all three of them.'),
    },
    'euler-line': {
      given: unit(D['eulerLine-given'], 'Opening scene, frozen',
        'The triangle with its three centres O, G, H, all hollow.'),
      construct: unit(D['eulerLine-construct'], 'The antipode of A, frozen',
        'The circumcircle, the diameter AA′, the segments A′B and A′C, and the altitudes from B and C.'),
      para: unit(D['eulerLine-para'], 'The parallelogram, frozen',
        'Right angles at B and C in the semicircle: A′B ∥ CH and A′C ∥ BH, so BHCA′ is a parallelogram.'),
      mid: unit(D['eulerLine-mid'], 'The midpoint D, frozen',
        'The diagonals BC and HA′ bisect each other at D.'),
      medians: unit(D['eulerLine-medians'], 'The medians of AHA′, frozen',
        'AD and HO are medians of the filled triangle AHA′; O is the midpoint of AA′.'),
      conclude: unit(D['eulerLine-conclude'], 'The conclusion, frozen',
        'The dashed Euler line through H, G and O.'),
      dragged: unit(proofStill('eulerLine', 5, { model: draggedEuler }), 'After dragging A, frozen',
        'A pulled further right: the centres spread out along the line, G still a third of the way from O to H.'),
    },
    'nine-point-circle': {
      given: unit(D['ninePointCircle-given'], 'Opening scene, frozen',
        'The nine hollow points: the midpoints of the sides, the feet of the altitudes, and the midpoints of AH, BH, CH.'),
      rect1: unit(D['ninePointCircle-rect1'], 'The first rectangle, frozen',
        'EFQR: two sides parallel to BC, two to the altitude AH.'),
      circle1: unit(D['ninePointCircle-circle1'], 'A circle through four, frozen',
        'The circle with diameter EQ, centred at N, through E, F, Q, R.'),
      rect2: unit(D['ninePointCircle-rect2'], 'The second rectangle, frozen',
        'DEPQ, with the same diagonal EQ: D and P join the circle.'),
      feet: unit(D['ninePointCircle-feet'], 'The feet of the altitudes, frozen',
        'Right angles at the feet, each facing a diameter: nine points on the circle.'),
      centre: unit(D['ninePointCircle-centre'], 'The centre, frozen',
        'ODHP is a parallelogram: N is the midpoint of OH, two ticks each side.'),
      conclude: unit(D['ninePointCircle-conclude'], 'The conclusion, frozen',
        'DP = OA = R, three ticks each: the radius is R / 2.'),
      dragged: unit(proofStill('ninePointCircle', 6, { model: draggedNine }), 'After dragging A, frozen',
        'A pulled right: the nine points have moved and the circle with them, N still halfway along OH.'),
    },
    'intersecting-chords': {
      given: unit(D['powerOfPoint-given'], 'Opening scene, frozen',
        'Two chords AB and CD crossing at the hollow point P.'),
      construct: unit(D['powerOfPoint-construct'], 'The perpendicular from the centre, frozen',
        'OM ⟂ AB with M the midpoint of the chord; OA and OP joined.'),
      difference: unit(D['powerOfPoint-difference'], 'A difference of squares, frozen',
        'PA = AM + MP and PB = AM − MP along the lit chord.'),
      pyth: unit(D['powerOfPoint-pyth'], 'Pythagoras twice, frozen',
        'The right triangles OMA and OMP: AM² − MP² = OA² − OP².'),
      same: unit(D['powerOfPoint-same'], 'The other chord, frozen',
        'The same construction on CD: N, ON, and the triangles ONC and ONP.'),
      conclude: unit(D['powerOfPoint-conclude'], 'The conclusion, frozen',
        'Both products equal R² − OP², the power of P.'),
      dragged: unit(proofStill('powerOfPoint', 5, { model: draggedChords }), 'After dragging B, frozen',
        'B slid down the circle: AB is steeper and P nearer the centre; the two products are larger and still equal.'),
    },
    'sss-congruence': {
      given: unit(D['sssCongruence-given'], 'Opening scene, frozen',
        'ABC above and its copy ABD below the common side: AC = AD, BC = BD.'),
      join: unit(D['sssCongruence-join'], 'Joining C and D, frozen',
        'The segment CD across AB: two isosceles triangles ACD and BCD.'),
      iso1: unit(D['sssCongruence-iso1'], 'The first isosceles triangle, frozen',
        'In ACD the base angles at C and D are both α.'),
      iso2: unit(D['sssCongruence-iso2'], 'The second isosceles triangle, frozen',
        'In BCD the base angles at C and D are both β.'),
      add: unit(D['sssCongruence-add'], 'Adding the angles, frozen',
        'α + β at C and α + β at D: the apex angles are equal.'),
      conclude: unit(D['sssCongruence-conclude'], 'The conclusion, frozen',
        'Two sides and the included angle agree: ABC ≅ ABD by SAS.'),
      dragged: unit(proofStill('sssCongruence', 5, { model: draggedSSS }), 'After dragging C, frozen',
        'C pulled right: α and β have traded sizes in both triangles, and the apex angles are still equal.'),
    },
    'asa-congruence': {
      given: unit(D['asaCongruence-given'], 'Opening scene, frozen',
        'Triangle ABC with the angle α at A, the angle β at B and the side AB between them.'),
      suppose: unit(D['asaCongruence-suppose'], 'Supposing the sides differ, frozen',
        'E on AC with AE = A′C′ (two ticks), and the segment BE.'),
      sas: unit(D['asaCongruence-sas'], 'Two sides and the angle between, frozen',
        'ABE shaded: congruent to A′B′C′ by SAS, so its angle at B, marked β′, would equal β.'),
      inside: unit(D['asaCongruence-inside'], 'A part of the angle, frozen',
        'BE runs inside the angle ABC: β′ is only a part of β.'),
      contra: unit(D['asaCongruence-contra'], 'The contradiction, frozen',
        'β′ cannot both equal β and be smaller: the supposition fails, AC = A′C′.'),
      conclude: unit(D['asaCongruence-conclude'], 'The conclusion, frozen',
        'AB, AC and the angle α between them agree: ABC ≅ A′B′C′ by SAS.'),
      dragged: unit(proofStill('asaCongruence', 5, { model: draggedASA }), 'After dragging E and C, frozen',
        'E slid towards C and C pulled right: a larger part of a different whole, still short of it.'),
    },
    'aas-congruence': {
      given: unit(D['aasCongruence-given'], 'Opening scene, frozen',
        'Triangle ABC with the angle α at A, the angle β at B and the side BC, which does not lie between them.'),
      sum: unit(D['aasCongruence-sum'], 'The angle sum, frozen',
        'The third angle γ at C: α + β + γ = 180°, in both triangles.'),
      third: unit(D['aasCongruence-third'], 'The third angle, frozen',
        'γ = 180° − α − β in both triangles, so the angles at C and C′ are equal.'),
      asa: unit(D['aasCongruence-asa'], 'The side between two angles, frozen',
        'BC has β at one end and γ at the other: the ASA pattern.'),
      conclude: unit(D['aasCongruence-conclude'], 'The conclusion, frozen',
        'ABC ≅ A′B′C′ by ASA.'),
      dragged: unit(proofStill('aasCongruence', 4, { model: draggedAAS }), 'After dragging C, frozen',
        'C pulled left and down: a wider angle at C, and the readout still shows it equal to 180° minus the other two.'),
    },
    'kite-diagonals': {
      given: unit(D['kiteDiagonals-given'], 'Opening scene, frozen',
        'The kite ABCD: AB = AD (one tick), CB = CD (two ticks).'),
      sss: unit(D['kiteDiagonals-sss'], 'The axis and two triangles, frozen',
        'The axis AC splits the kite into ABC and ADC, congruent by SSS.'),
      bisect: unit(D['kiteDiagonals-bisect'], 'The axis bisects the angle, frozen',
        'Corresponding angles: ∠BAC = ∠DAC = α.'),
      sas: unit(D['kiteDiagonals-sas'], 'Two smaller triangles, frozen',
        'The diagonal BD and its crossing M; ABM ≅ ADM by SAS.'),
      linear: unit(D['kiteDiagonals-linear'], 'The linear pair, frozen',
        'BM = MD (three ticks) and the equal angles φ at M along BD: φ = 90°.'),
      conclude: unit(D['kiteDiagonals-conclude'], 'The conclusion, frozen',
        'AC ⟂ BD, and M is the midpoint of BD.'),
      dragged: unit(proofStill('kiteDiagonals', 5, { model: draggedKite }), 'After dragging B, frozen',
        'B swung down and out, D mirroring it: a wider kite, the right angle at M unchanged.'),
    },
    'hl-congruence': {
      given: unit(D['hlCongruence-given'], 'Opening scene, frozen',
        'ABC and its copy A′BC leg to leg: right angles at C, AB = A′B, BC in common.'),
      line: unit(D['hlCongruence-line'], 'A straight line, frozen',
        'Two right angles at C make a straight angle: A, C, A′ are collinear.'),
      iso: unit(D['hlCongruence-iso'], 'The isosceles triangle, frozen',
        'ABA′ has two equal hypotenuses as sides, so the base angles at A and A′ are both α.'),
      aas: unit(D['hlCongruence-aas'], 'Angle-angle-side, frozen',
        'α, the right angle and the common leg BC: ABC ≅ A′BC by AAS.'),
      conclude: unit(D['hlCongruence-conclude'], 'The conclusion, frozen',
        'Hypotenuse and leg determine a right triangle; in particular CA = CA′.'),
      dragged: unit(proofStill('hlCongruence', 4, { model: draggedHL }), 'After dragging A and B, frozen',
        'A slid towards C and B raised: shorter legs, steeper hypotenuses, the angles at A and A′ still equal.'),
    },
    'secant-tangent': {
      given: unit(D['secantTangent-given'], 'Opening scene, frozen',
        'The circle about O, the outside point P, the tangent PT and the secant through A and B.'),
      foot: unit(D['secantTangent-foot'], 'The midpoint of the chord, frozen',
        'OM perpendicular to the chord: M is the midpoint, AM = MB.'),
      squares: unit(D['secantTangent-squares'], 'A difference of squares, frozen',
        'PA = PM − AM and PB = PM + AM, so PA · PB = PM² − AM².'),
      pyth: unit(D['secantTangent-pyth'], 'Two right triangles, frozen',
        'OMP and OMA shaded: PM² − AM² = OP² − OA² = OP² − R².'),
      tangent: unit(D['secantTangent-tangent'], 'The tangent, frozen',
        'OT ⟂ PT, so PT² = OP² − OT² = OP² − R².'),
      conclude: unit(D['secantTangent-conclude'], 'The conclusion, frozen',
        'Both equal the power of P: PT² = PA · PB.'),
      dragged: unit(proofStill('secantTangent', 5, { model: draggedSecant }), 'After dragging P and A, frozen',
        'P moved below and the secant turned: different PA and PB, the same product, the same PT².'),
    },
    'two-secants': {
      given: unit(D['twoSecants-given'], 'Opening scene, frozen',
        'The circle about O, the outside point P, and the two secants through A, B and C, D.'),
      foot: unit(D['twoSecants-foot'], 'The two midpoints, frozen',
        'OM and ON perpendicular to the chords: AM = MB, CN = ND.'),
      squares: unit(D['twoSecants-squares'], 'Differences of squares, frozen',
        'PA · PB = PM² − AM² and PC · PD = PN² − CN².'),
      pyth: unit(D['twoSecants-pyth'], 'The first secant, frozen',
        'OMP and OMA shaded: PM² − AM² = OP² − R².'),
      same: unit(D['twoSecants-same'], 'The second secant, frozen',
        'ONP and ONC shaded: PN² − CN² = OP² − R² as well.'),
      conclude: unit(D['twoSecants-conclude'], 'The conclusion, frozen',
        'Both products are the power of P: PA · PB = PC · PD.'),
      dragged: unit(proofStill('twoSecants', 5, { model: draggedTwoSecants }), 'After dragging P, A and C, frozen',
        'P moved below and both secants turned: four different segments, the two products still equal.'),
    },
    'ceva-theorem': {
      given: unit(D['ceva-given'], 'Opening scene, frozen',
        'The three cevians AD, BE, CF through P.'),
      base: unit(D['ceva-base'], 'Same height, same ratio, frozen',
        'ABD and ADC stand on BD and DC with the apex A: [ABD]/[ADC] = BD/DC.'),
      apex: unit(D['ceva-apex'], 'The same with apex P, frozen',
        'PBD and PDC shaded: [PBD]/[PDC] = BD/DC too.'),
      cancel: unit(D['ceva-cancel'], 'Subtracting the areas, frozen',
        'ABP and ACP shaded: BD/DC = [ABP]/[ACP].'),
      others: unit(D['ceva-others'], 'The other two cevians, frozen',
        'The three triangles around P: CE/EA = [BCP]/[BAP], AF/FB = [CAP]/[CBP].'),
      conclude: unit(D['ceva-conclude'], 'The conclusion, frozen',
        'Each area once above and once below: the product is 1.'),
      dragged: unit(proofStill('ceva', 5, { model: draggedCeva }), 'After dragging P, frozen',
        'P pulled towards B: BD/DC small, AF/FB large, the product still 1.'),
    },
    'menelaus-theorem': {
      given: unit(D['menelaus-given'], 'Opening scene, frozen',
        'The transversal through D, E and F; F beyond B on the extension of AB.'),
      cutbc: unit(D['menelaus-cutbc'], 'Cutting the side BC, frozen',
        'FBD and FDC shaded: [FBD]/[FDC] = BD/DC.'),
      cutca: unit(D['menelaus-cutca'], 'Cutting the side CA, frozen',
        'FCE and FEA shaded: [FCE]/[FEA] = CE/EA.'),
      cutab: unit(D['menelaus-cutab'], 'Cutting the line AB, frozen',
        'EAF and EFB with the apex E: [EAF]/[EFB] = AF/FB.'),
      pair: unit(D['menelaus-pair'], 'Pairing the areas, frozen',
        'The four areas left, paired along the transversal: FD/FE and FE/FD.'),
      conclude: unit(D['menelaus-conclude'], 'The conclusion, frozen',
        'The product is (FD/FE)(FE/FD) = 1.'),
      dragged: unit(proofStill('menelaus', 5, { model: draggedMenelaus }), 'After dragging F, frozen',
        'F pulled further out: AF/FB nearer 1, CE/EA smaller, the product still 1.'),
    },
  }

  // [sectionsKey, anchorId, unitKey?] — unitKey = key in unitsByView
  const orderByView = {
    'triangle-angle-sum': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-parallel-line', 'construct'],
      ['obj3', 'alternate-angles', 'alternate-first'],
      ['obj6', 'the-second-pair', 'alternate'],
      ['obj4', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj5', 'consequences'],
    ],
    'exterior-angle': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-extension', 'construct'],
      ['obj3', 'the-linear-pair', 'linear'],
      ['obj4', 'the-angle-sum', 'sum'],
      ['obj5', 'why-it-holds', 'conclude'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
    'exterior-angle-sum': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-three-extensions', 'construct'],
      ['obj3', 'three-linear-pairs', 'linear'],
      ['obj4', 'the-angle-sum', 'sum'],
      ['obj5', 'why-it-holds', 'conclude'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
    'isosceles-base-angles': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-midpoint-line', 'construct'],
      ['obj3', 'three-equal-sides', 'congruence'],
      ['obj4', 'why-it-holds', 'conclude'],
      ['obj5', 'dragging-the-figure', 'dragged'],
      ['obj6', 'consequences'],
    ],
    'triangle-inequality': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-construction', 'construct'],
      ['obj3', 'an-isosceles-triangle', 'isosceles'],
      ['obj4', 'the-larger-angle', 'compare'],
      ['obj5', 'the-longer-side', 'side'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'larger-side-larger-angle': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-cut-off-point', 'construct'],
      ['obj3', 'an-isosceles-triangle', 'isosceles'],
      ['obj4', 'the-exterior-angle', 'exterior'],
      ['obj5', 'the-whole-angle', 'part'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'perpendicular-shortest': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-right-triangle', 'triangle'],
      ['obj3', 'two-acute-angles', 'acute'],
      ['obj4', 'the-largest-angle', 'largest'],
      ['obj5', 'the-longest-side', 'side'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'thales-theorem': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-radius-to-c', 'construct'],
      ['obj3', 'the-first-isosceles-triangle', 'isoA'],
      ['obj4', 'the-second-isosceles-triangle', 'isoB'],
      ['obj5', 'the-angle-sum', 'sum'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'vertical-angles': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-first-linear-pair', 'pair1'],
      ['obj3', 'the-second-linear-pair', 'pair2'],
      ['obj4', 'why-it-holds', 'conclude'],
      ['obj5', 'the-other-pair', 'other'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
    'parallel-lines': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'corresponding-angles', 'corresponding'],
      ['obj3', 'alternate-angles', 'alternate'],
      ['obj4', 'co-interior-angles', 'cointerior'],
      ['obj5', 'why-it-holds', 'conclude'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
    'polygon-angle-sum': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-diagonals', 'construct'],
      ['obj3', 'three-triangles', 'sum'],
      ['obj4', 'the-angles-fit-together', 'fit'],
      ['obj5', 'why-it-holds', 'conclude'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
    'inscribed-angle': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-diameter', 'construct'],
      ['obj3', 'an-isosceles-triangle', 'isoA'],
      ['obj4', 'the-exterior-angle', 'extA'],
      ['obj5', 'the-other-side', 'sideB'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'pythagorean-theorem': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'a-square-of-side-a-plus-b', 'construct'],
      ['obj3', 'four-copies-of-the-triangle', 'four'],
      ['obj4', 'the-inner-square', 'square'],
      ['obj5', 'counting-the-area-twice', 'areas'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'cyclic-quadrilateral': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-four-radii', 'construct'],
      ['obj3', 'four-isosceles-triangles', 'iso'],
      ['obj4', 'the-angles-of-the-quadrilateral', 'angles'],
      ['obj5', 'the-angle-sum', 'sum'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'tangent-radius': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'suppose-it-were-not', 'suppose'],
      ['obj3', 'the-perpendicular-and-the-mirror-point', 'construct'],
      ['obj4', 'two-congruent-triangles', 'sas'],
      ['obj5', 'a-second-common-point', 'contra'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'two-tangents': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'joining-the-centre', 'construct'],
      ['obj3', 'two-right-angles', 'right'],
      ['obj4', 'pythagoras-twice', 'pyth'],
      ['obj5', 'the-same-numbers', 'equal'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'chord-bisector': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'joining-the-centre', 'construct'],
      ['obj3', 'two-right-triangles', 'right'],
      ['obj4', 'pythagoras-twice', 'pyth'],
      ['obj5', 'the-same-numbers', 'equal'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'parallelogram-sides': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-diagonal', 'construct'],
      ['obj3', 'alternate-angles-once', 'alt1'],
      ['obj4', 'alternate-angles-twice', 'alt2'],
      ['obj5', 'two-congruent-triangles', 'asa'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'parallelogram-diagonals': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'opposite-sides-equal', 'sides'],
      ['obj3', 'alternate-angles-once', 'alt1'],
      ['obj4', 'alternate-angles-twice', 'alt2'],
      ['obj5', 'two-congruent-triangles', 'asa'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'rhombus-diagonals': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'a-rhombus-is-a-parallelogram', 'para'],
      ['obj3', 'three-equal-sides', 'sss'],
      ['obj4', 'equal-angles-at-m', 'angles'],
      ['obj5', 'a-linear-pair', 'linear'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'rectangle-diagonals': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'a-rectangle-is-a-parallelogram', 'para'],
      ['obj3', 'opposite-sides-equal', 'sides'],
      ['obj4', 'two-triangles-on-the-base', 'tri'],
      ['obj5', 'side-angle-side', 'sas'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'midsegment': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-extension', 'construct'],
      ['obj3', 'vertical-angles-and-sas', 'sas1'],
      ['obj4', 'a-parallel-appears', 'alt'],
      ['obj5', 'three-equal-segments', 'equal'],
      ['obj6', 'the-second-transversal', 'join'],
      ['obj7', 'the-second-congruence', 'sas2'],
      ['obj8', 'why-it-holds', 'conclude'],
      ['obj9', 'dragging-the-figure', 'dragged'],
      ['obj10', 'consequences'],
    ],
    'varignon': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-first-diagonal', 'diag1'],
      ['obj3', 'the-first-midsegment', 'mid1'],
      ['obj4', 'the-second-midsegment', 'mid2'],
      ['obj5', 'the-second-diagonal', 'diag2'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'trapezoid-midsegment': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-diagonal-and-its-midpoint', 'construct'],
      ['obj3', 'the-first-midsegment', 'mid1'],
      ['obj4', 'the-second-midsegment', 'mid2'],
      ['obj5', 'one-line-through-k', 'collinear'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'centroid': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'two-new-midpoints', 'construct'],
      ['obj3', 'the-first-midsegment', 'mid1'],
      ['obj4', 'the-second-midsegment', 'mid2'],
      ['obj5', 'a-parallelogram-at-g', 'para'],
      ['obj6', 'two-thirds-of-the-way', 'ratio'],
      ['obj7', 'why-it-holds', 'conclude'],
      ['obj8', 'dragging-the-figure', 'dragged'],
      ['obj9', 'consequences'],
    ],
    'angle-bisector': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'perpendiculars-from-d', 'heights'],
      ['obj3', 'two-congruent-right-triangles', 'congruent'],
      ['obj4', 'the-areas-by-the-sides', 'areas1'],
      ['obj5', 'the-areas-by-the-bases', 'areas2'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'circumcentre': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-first-bisector', 'sas1'],
      ['obj3', 'the-second-bisector', 'sas2'],
      ['obj4', 'three-equal-distances', 'equal'],
      ['obj5', 'the-third-bisector', 'third'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'incentre': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-feet-of-the-perpendiculars', 'feet'],
      ['obj3', 'the-first-bisector', 'aas1'],
      ['obj4', 'the-second-bisector', 'aas2'],
      ['obj5', 'the-third-bisector', 'third'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'orthocentre': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'three-parallels', 'construct'],
      ['obj3', 'the-midpoints', 'mid'],
      ['obj4', 'altitudes-as-perpendicular-bisectors', 'perp'],
      ['obj5', 'the-circumcentre-of-the-big-triangle', 'concur'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'euler-line': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-antipode-of-a', 'construct'],
      ['obj3', 'a-parallelogram', 'para'],
      ['obj4', 'the-midpoint-d', 'mid'],
      ['obj5', 'the-medians-of-aha', 'medians'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'nine-point-circle': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-first-rectangle', 'rect1'],
      ['obj3', 'a-circle-through-four', 'circle1'],
      ['obj4', 'the-second-rectangle', 'rect2'],
      ['obj5', 'the-feet-of-the-altitudes', 'feet'],
      ['obj6', 'the-centre', 'centre'],
      ['obj7', 'why-it-holds', 'conclude'],
      ['obj8', 'dragging-the-figure', 'dragged'],
      ['obj9', 'consequences'],
    ],
    'intersecting-chords': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-perpendicular-from-the-centre', 'construct'],
      ['obj3', 'a-difference-of-squares', 'difference'],
      ['obj4', 'pythagoras-twice', 'pyth'],
      ['obj5', 'the-other-chord', 'same'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'sss-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement'],
      ['obj2', 'placing-the-second-triangle', 'given'],
      ['obj3', 'joining-c-and-d', 'join'],
      ['obj4', 'the-first-isosceles-triangle', 'iso1'],
      ['obj5', 'the-second-isosceles-triangle', 'iso2'],
      ['obj6', 'adding-the-angles', 'add'],
      ['obj7', 'why-it-holds', 'conclude'],
      ['obj8', 'dragging-the-figure', 'dragged'],
      ['obj9', 'consequences'],
    ],
    'asa-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'suppose-the-sides-differ', 'suppose'],
      ['obj3', 'two-sides-and-the-angle-between', 'sas'],
      ['obj4', 'a-part-of-the-angle', 'inside'],
      ['obj5', 'the-contradiction', 'contra'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'aas-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-angle-sum', 'sum'],
      ['obj3', 'the-third-angle', 'third'],
      ['obj4', 'the-side-between-two-angles', 'asa'],
      ['obj5', 'why-it-holds', 'conclude'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
    'kite-diagonals': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-axis-and-two-triangles', 'sss'],
      ['obj3', 'the-axis-bisects-the-angle', 'bisect'],
      ['obj4', 'two-smaller-triangles', 'sas'],
      ['obj5', 'the-linear-pair', 'linear'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'hl-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement'],
      ['obj2', 'leg-to-leg', 'given'],
      ['obj3', 'a-straight-line', 'line'],
      ['obj4', 'the-isosceles-triangle', 'iso'],
      ['obj5', 'angle-angle-side', 'aas'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'secant-tangent': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-midpoint-of-the-chord', 'foot'],
      ['obj3', 'a-difference-of-squares', 'squares'],
      ['obj4', 'two-right-triangles', 'pyth'],
      ['obj5', 'the-tangent', 'tangent'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'two-secants': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-two-midpoints', 'foot'],
      ['obj3', 'differences-of-squares', 'squares'],
      ['obj4', 'the-first-secant', 'pyth'],
      ['obj5', 'the-second-secant', 'same'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'ceva-theorem': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'same-height-same-ratio', 'base'],
      ['obj3', 'the-same-with-apex-p', 'apex'],
      ['obj4', 'subtracting-the-areas', 'cancel'],
      ['obj5', 'the-other-two-cevians', 'others'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
    'menelaus-theorem': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'cutting-the-side-bc', 'cutbc'],
      ['obj3', 'cutting-the-side-ca', 'cutca'],
      ['obj4', 'cutting-the-line-ab', 'cutab'],
      ['obj5', 'pairing-the-areas', 'pair'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
  }

  /* ---- per-phase scene notes (Line 1) ----
     Keyed by view, then by proof phase. The player renders scene text as raw
     HTML (not processContent), so links are plain <a href="#slug"> anchors,
     appended to the formula of every scene with that phase. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569;font-family:Arial,sans-serif">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a></div>`

  const EXPLANATIONS = {
    'triangle-angle-sum': {
      given: note('The claim is about every triangle, not this one.', 'the-statement', 'Learn more about the statement'),
      construct: note('The parallel postulate makes DE the only parallel to AB through C.', 'the-parallel-line', 'Learn more about the construction'),
      alternate: note('This is where the parallel postulate is used: alternate angles are equal only because DE is the parallel to AB.', 'alternate-angles', 'Learn more about alternate angles'),
      conclude: note('Drag a vertex: the readout stays at 180°.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'exterior-angle': {
      given: note('Every vertex has an exterior angle; the proof uses the one at B.', 'the-statement', 'Learn more about the statement'),
      construct: note('D is constructed on the line AB, so A, B, D are collinear.', 'the-extension', 'Learn more about the extension'),
      linear: note('β and δ are a linear pair: supplementary because ABD is a straight line.', 'the-linear-pair', 'Learn more about the linear pair'),
      sum: note('A finished theorem used as one step; see its own proof.', 'the-angle-sum', 'Learn more about the angle sum'),
      conclude: note('Drag a vertex: δ keeps equalling α + γ.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'exterior-angle-sum': {
      given: note('One exterior angle per vertex, all the same way round.', 'the-statement', 'Learn more about the statement'),
      construct: note('D, E, F are constructed on the lines of the sides and follow the vertices.', 'the-three-extensions', 'Learn more about the extensions'),
      linear: note('Three linear pairs, 180° each: 540° for all six angles.', 'three-linear-pairs', 'Learn more about the linear pairs'),
      sum: note('A finished theorem used as one step; see its own proof.', 'the-angle-sum', 'Learn more about the angle sum'),
      conclude: note('Drag a vertex: the three exterior angles keep adding up to 360°.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'isosceles-base-angles': {
      given: note('C stays on the axis of the base, so the legs stay equal while you drag.', 'the-statement', 'Learn more about the statement'),
      construct: note('M is built from A and B; the two half-bases are equal by construction.', 'the-midpoint-line', 'Learn more about the construction'),
      congruence: note('SSS: three pairs of equal sides make the two halves congruent.', 'three-equal-sides', 'Learn more about the congruence'),
      conclude: note('Drag the figure: α and β stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'triangle-inequality': {
      given: note('The straight path is shortest: the proof makes that precise.', 'the-statement', 'Learn more about the statement'),
      construct: note('D is cut off so that AD = AC; it follows the vertices.', 'the-construction', 'Learn more about the construction'),
      isosceles: note('A result proved on its own page, used here as one step.', 'an-isosceles-triangle', 'Learn more about the isosceles step'),
      compare: note('The whole angle at C is greater than its part δ.', 'the-larger-angle', 'Learn more about the comparison'),
      side: note('Euclid I.19: the longer side faces the larger angle.', 'the-longer-side', 'Learn more about the longer side'),
      conclude: note('Drag a vertex: the sum of two sides stays ahead of the third.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'larger-side-larger-angle': {
      given: note('Each side faces the angle at the opposite vertex.', 'the-statement', 'Learn more about the statement'),
      construct: note('D exists only because AC is the longer side.', 'the-cut-off-point', 'Learn more about the construction'),
      isosceles: note('A result proved on its own page, used here as one step.', 'an-isosceles-triangle', 'Learn more about the isosceles step'),
      exterior: note('The exterior angle theorem, applied to the small triangle BDC.', 'the-exterior-angle', 'Learn more about the exterior angle'),
      part: note('The whole angle at B is greater than its part δ.', 'the-whole-angle', 'Learn more about the whole angle'),
      conclude: note('Drag a vertex: the larger angle keeps facing the larger side.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'perpendicular-shortest': {
      given: note('F is the foot of the perpendicular; Q slides along the line.', 'the-statement', 'Learn more about the statement'),
      triangle: note('The line matters only through the right angle it gives at F.', 'the-right-triangle', 'Learn more about the triangle'),
      acute: note('The angle sum, used as one step: see its own proof.', 'two-acute-angles', 'Learn more about the acute angles'),
      largest: note('A right angle beats any acute angle.', 'the-largest-angle', 'Learn more about the largest angle'),
      side: note('Euclid I.19: the larger angle faces the longer side.', 'the-longest-side', 'Learn more about the longest side'),
      conclude: note('Slide Q anywhere: PF stays the shortest.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'thales-theorem': {
      given: note('C can be any point of the circle other than A and B.', 'the-statement', 'Learn more about the statement'),
      construct: note('All radii of a circle are equal: that is what a circle is.', 'the-radius-to-c', 'Learn more about the radius'),
      isoA: note('The isosceles theorem, used as one step; see its own proof.', 'the-first-isosceles-triangle', 'Learn more about the first triangle'),
      isoB: note('The same theorem again, on the other side of OC.', 'the-second-isosceles-triangle', 'Learn more about the second triangle'),
      sum: note('The angle sum, used as one step; see its own proof.', 'the-angle-sum', 'Learn more about the angle sum'),
      conclude: note('Slide C round the circle: the angle stays 90°.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'vertical-angles': {
      given: note('Vertical: from vertex, the shared corner; nothing to do with up and down.', 'the-statement', 'Learn more about the statement'),
      pair1: note('A linear pair: two angles that fill a straight line.', 'the-first-linear-pair', 'Learn more about the first pair'),
      pair2: note('The same β, now paired with α′ along the other line.', 'the-second-linear-pair', 'Learn more about the second pair'),
      conclude: note('Drag A or C: the opposite angles stay equal.', 'why-it-holds', 'Learn more about why it holds'),
      other: note('Each of β, β′ makes 180° with the same α.', 'the-other-pair', 'Learn more about the other pair'),
    },
    'parallel-lines': {
      given: note('The arrow marks say the two lines are parallel.', 'the-statement', 'Learn more about the statement'),
      corresponding: note('An axiom, not a theorem: one form of the parallel postulate.', 'corresponding-angles', 'Learn more about corresponding angles'),
      alternate: note('Vertical angles carry α across the crossing; see their own proof.', 'alternate-angles', 'Learn more about alternate angles'),
      cointerior: note('A linear pair at P turns the equality into a sum of 180°.', 'co-interior-angles', 'Learn more about co-interior angles'),
      conclude: note('Tilt the transversal: all three relations keep holding.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'polygon-angle-sum': {
      given: note('Convex: every angle below 180°, so the diagonals stay inside.', 'the-statement', 'Learn more about the statement'),
      construct: note('n − 3 diagonals from one vertex, n − 2 triangles.', 'the-diagonals', 'Learn more about the diagonals'),
      sum: note('The triangle angle sum, used three times; see its own proof.', 'three-triangles', 'Learn more about the three triangles'),
      fit: note('Every triangle angle used once, every pentagon angle covered.', 'the-angles-fit-together', 'Learn more about how the angles fit'),
      conclude: note('Drag a vertex: the sum stays 540°.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'inscribed-angle': {
      given: note('Both angles stand on the arc AB that does not contain C.', 'the-statement', 'Learn more about the statement'),
      construct: note('D is built from C and O; the diameter splits both angles.', 'the-diameter', 'Learn more about the diameter'),
      isoA: note('The isosceles theorem, used as one step; see its own proof.', 'an-isosceles-triangle', 'Learn more about the isosceles triangle'),
      extA: note('The exterior angle theorem, used as one step; see its own proof.', 'the-exterior-angle', 'Learn more about the exterior angle'),
      sideB: note('Same two steps, other side of the diameter.', 'the-other-side', 'Learn more about the other side'),
      conclude: note('Slide C along its arc: the inscribed angle does not change.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'pythagorean-theorem': {
      given: note('The readout shows a² + b² and c² in the frame\'s units.', 'the-statement', 'Learn more about the statement'),
      construct: note('Y, Z, W are built from X; slide X and all four move.', 'a-square-of-side-a-plus-b', 'Learn more about the square'),
      four: note('Two sides and the angle between them: that is all SAS needs.', 'four-copies-of-the-triangle', 'Learn more about the four copies'),
      square: note('α + β = 90° comes from the angle sum; see its own proof.', 'the-inner-square', 'Learn more about the inner square'),
      areas: note('Five pieces, no overlap, no gap.', 'counting-the-area-twice', 'Learn more about counting the area'),
      conclude: note('Drag X: the triangles change, the equation does not.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'cyclic-quadrilateral': {
      given: note('The readout shows both sums of opposite angles.', 'the-statement', 'Learn more about the statement'),
      construct: note('Four radii, four isosceles triangles.', 'the-four-radii', 'Learn more about the four radii'),
      iso: note('The isosceles theorem, used four times; see its own proof.', 'four-isosceles-triangles', 'Learn more about the four triangles'),
      angles: note('This step needs the centre inside: each radius lies between two sides.', 'the-angles-of-the-quadrilateral', 'Learn more about the angles of ABCD'),
      sum: note('The polygon angle sum with n = 4; see its own proof.', 'the-angle-sum', 'Learn more about the angle sum'),
      conclude: note('Slide a vertex: the sums stay 180°.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'tangent-radius': {
      given: note('No right-angle mark yet: that is what is to be proved.', 'the-statement', 'Learn more about the statement'),
      suppose: note('A proof by contradiction starts by assuming the opposite.', 'suppose-it-were-not', 'Learn more about the supposition'),
      construct: note('F is built from O, T and G; T′ mirrors T across F.', 'the-perpendicular-and-the-mirror-point', 'Learn more about the construction'),
      sas: note('Common side, equal legs, right angles between: SAS.', 'two-congruent-triangles', 'Learn more about the two triangles'),
      contra: note('Drag G towards the tangent: T′ slides into T.', 'a-second-common-point', 'Learn more about the second point'),
      conclude: note('The readout shows φ and whether ℓ′ meets the circle once or twice.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'two-tangents': {
      given: note('A and B are built from P and the circle; drag P and they follow.', 'the-statement', 'Learn more about the statement'),
      construct: note('Two triangles sharing OP, each with a radius for a side.', 'joining-the-centre', 'Learn more about the construction'),
      right: note('The tangent-radius theorem, used twice; see its own proof.', 'two-right-angles', 'Learn more about the right angles'),
      pyth: note('The Pythagorean theorem, used twice; see its own proof.', 'pythagoras-twice', 'Learn more about Pythagoras twice'),
      equal: note('OP² − r² is the power of the point P.', 'the-same-numbers', 'Learn more about the same numbers'),
      conclude: note('Drag P: the tangents swing, the readout keeps them equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'chord-bisector': {
      given: note('M is built from O, A and B; slide A or B and it follows.', 'the-statement', 'Learn more about the statement'),
      construct: note('An isosceles triangle cut by the perpendicular from its apex.', 'joining-the-centre', 'Learn more about the construction'),
      right: note('Equal hypotenuses, a common leg.', 'two-right-triangles', 'Learn more about the right triangles'),
      pyth: note('The Pythagorean theorem, used twice; see its own proof.', 'pythagoras-twice', 'Learn more about Pythagoras twice'),
      equal: note('Each half of the chord is √(r² − OM²).', 'the-same-numbers', 'Learn more about the same numbers'),
      conclude: note('Drag A or B: M stays at the midpoint.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'parallelogram-sides': {
      given: note('C is built from A, B and D; drag any of them and C follows.', 'the-statement', 'Learn more about the statement'),
      construct: note('One diagonal, two triangles, and a transversal of both pairs of parallels.', 'the-diagonal', 'Learn more about the diagonal'),
      alt1: note('Alternate angles on parallel lines are equal; see its own proof.', 'alternate-angles-once', 'Learn more about the first pair'),
      alt2: note('The same rule on the other pair of parallels.', 'alternate-angles-twice', 'Learn more about the second pair'),
      asa: note('Two angles and the side between them.', 'two-congruent-triangles', 'Learn more about the congruent triangles'),
      conclude: note('Drag D: the figure shears, the readout keeps the sides paired.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'parallelogram-diagonals': {
      given: note('C and M are built from A, B and D; drag any of them and both follow.', 'the-statement', 'Learn more about the statement'),
      sides: note('The previous page\'s theorem, used as one step.', 'opposite-sides-equal', 'Learn more about the equal sides'),
      alt1: note('Alternate angles on parallel lines are equal; see its own proof.', 'alternate-angles-once', 'Learn more about the first pair'),
      alt2: note('The other diagonal is a transversal of the same parallels.', 'alternate-angles-twice', 'Learn more about the second pair'),
      asa: note('Equal bases between two pairs of equal angles.', 'two-congruent-triangles', 'Learn more about the congruent triangles'),
      conclude: note('Drag D: the diagonals change, M stays at both midpoints.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'rhombus-diagonals': {
      given: note('D slides on a circle about A, which keeps all four sides equal.', 'the-statement', 'Learn more about the statement'),
      para: note('Equal opposite sides make a parallelogram; its diagonals bisect each other.', 'a-rhombus-is-a-parallelogram', 'Learn more about the parallelogram step'),
      sss: note('Three sides determine a triangle; see the isosceles page.', 'three-equal-sides', 'Learn more about the three sides'),
      angles: note('The same matching makes AM bisect the angle at A.', 'equal-angles-at-m', 'Learn more about the angles at M'),
      linear: note('Two angles on a straight line sharing a ray add up to 180°.', 'a-linear-pair', 'Learn more about the linear pair'),
      conclude: note('Drag D: the rhombus opens or closes, the angle at M stays 90°.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'rectangle-diagonals': {
      given: note('D slides on the perpendicular at A, which keeps the angles right.', 'the-statement', 'Learn more about the statement'),
      para: note('Co-interior angles adding to 180° mean parallel lines; see the parallel lines page.', 'a-rectangle-is-a-parallelogram', 'Learn more about the parallelogram step'),
      sides: note('The first parallelogram page\'s theorem, used as one step.', 'opposite-sides-equal', 'Learn more about the equal sides'),
      tri: note('One triangle from each diagonal, both on the base AB.', 'two-triangles-on-the-base', 'Learn more about the two triangles'),
      sas: note('Two sides and the right angle between them.', 'side-angle-side', 'Learn more about side angle side'),
      conclude: note('Drag D: the height changes, the diagonals stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'midsegment': {
      given: note('D, E are computed midpoints; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      construct: note('E is now the midpoint of DF as well as of AC.', 'the-extension', 'Learn more about the extension'),
      sas1: note('Vertical angles are equal; see their own proof.', 'vertical-angles-and-sas', 'Learn more about the first congruence'),
      alt: note('Equal alternate angles mean parallel lines; see the parallel lines page.', 'a-parallel-appears', 'Learn more about the parallel'),
      equal: note('DBCF now has one pair of opposite sides equal and parallel.', 'three-equal-segments', 'Learn more about the three segments'),
      join: note('Parallel lines give equal alternate angles; the same theorem, forwards.', 'the-second-transversal', 'Learn more about the second transversal'),
      sas2: note('The argument of the parallelogram sides page, run once more.', 'the-second-congruence', 'Learn more about the second congruence'),
      conclude: note('Drag a vertex: DE stays parallel to BC and half as long.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'varignon': {
      given: note('The midpoints are computed; drag any vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      diag1: note('Each diagonal is the third side of two triangles.', 'the-first-diagonal', 'Learn more about the first diagonal'),
      mid1: note('The midsegment theorem, used as one step; see its own proof.', 'the-first-midsegment', 'Learn more about the first midsegment'),
      mid2: note('Two lines parallel to AC are parallel to each other.', 'the-second-midsegment', 'Learn more about the second midsegment'),
      diag2: note('The same two steps on the other diagonal.', 'the-second-diagonal', 'Learn more about the second diagonal'),
      conclude: note('Drag any vertex: the inner figure stays a parallelogram.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'trapezoid-midsegment': {
      given: note('C stays on the line through D parallel to AB; M and N are computed.', 'the-statement', 'Learn more about the statement'),
      construct: note('K is a midpoint in both triangles at once.', 'the-diagonal-and-its-midpoint', 'Learn more about the diagonal'),
      mid1: note('The triangle midsegment theorem; see its own proof.', 'the-first-midsegment', 'Learn more about the first midsegment'),
      mid2: note('The same theorem in the other triangle.', 'the-second-midsegment', 'Learn more about the second midsegment'),
      collinear: note('Only one parallel through a point: the parallel postulate.', 'one-line-through-k', 'Learn more about the line through K'),
      conclude: note('Slide C along the top: MN stays the average of the bases.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'centroid': {
      given: note('D, E and G are computed; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      construct: note('P and Q belong to the small triangle GAB.', 'two-new-midpoints', 'Learn more about the two midpoints'),
      mid1: note('The midsegment theorem in the big triangle; see its own proof.', 'the-first-midsegment', 'Learn more about the first midsegment'),
      mid2: note('The same theorem in the small triangle GAB.', 'the-second-midsegment', 'Learn more about the second midsegment'),
      para: note('Equal and parallel sides make a parallelogram; its diagonals bisect each other.', 'a-parallelogram-at-g', 'Learn more about the parallelogram'),
      ratio: note('Three equal pieces on each median.', 'two-thirds-of-the-way', 'Learn more about the ratio'),
      conclude: note('Drag a vertex: the three medians keep meeting at G.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'angle-bisector': {
      given: note('D is computed from the vertices; the readout shows both ratios.', 'the-statement', 'Learn more about the statement'),
      heights: note('The perpendicular is the distance from D to each side.', 'perpendiculars-from-d', 'Learn more about the perpendiculars'),
      congruent: note('Two angles and the common hypotenuse; the third angle follows from the angle sum.', 'two-congruent-right-triangles', 'Learn more about the two right triangles'),
      areas1: note('Equal heights cancel in the ratio of the areas.', 'the-areas-by-the-sides', 'Learn more about the areas by the sides'),
      areas2: note('The shared height AH cancels in the same ratio.', 'the-areas-by-the-bases', 'Learn more about the areas by the bases'),
      conclude: note('Drag A sideways: D slides to keep the two ratios equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'circumcentre': {
      given: note('The midpoints and O are computed; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      sas1: note('A point on a perpendicular bisector is equidistant from the ends.', 'the-first-bisector', 'Learn more about the first bisector'),
      sas2: note('The same two triangles at the other midpoint.', 'the-second-bisector', 'Learn more about the second bisector'),
      equal: note('Two equalities with OB in common.', 'three-equal-distances', 'Learn more about the three distances'),
      third: note('The median of an isosceles triangle is perpendicular to the base; see the rhombus page.', 'the-third-bisector', 'Learn more about the third bisector'),
      conclude: note('Drag A down: O moves to the hypotenuse, then outside.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'incentre': {
      given: note('I and the feet are computed; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      feet: note('The perpendicular is the distance from I to each side.', 'the-feet-of-the-perpendiculars', 'Learn more about the feet'),
      aas1: note('The angle bisector theorem page proved this step; see it there.', 'the-first-bisector', 'Learn more about the first bisector'),
      aas2: note('The same two triangles along the other bisector.', 'the-second-bisector', 'Learn more about the second bisector'),
      third: note('Equal legs on a common hypotenuse: the converse of the first two steps.', 'the-third-bisector', 'Learn more about the third bisector'),
      conclude: note('Drag a vertex: the incircle changes size, still touching all three sides.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'orthocentre': {
      given: note('The feet and H are computed; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      construct: note('The large triangle is twice the small one, with parallel sides.', 'three-parallels', 'Learn more about the three parallels'),
      mid: note('Two parallelograms at each vertex give the two equal halves.', 'the-midpoints', 'Learn more about the midpoints'),
      perp: note('Perpendicular to CA means perpendicular to the parallel C′A′.', 'altitudes-as-perpendicular-bisectors', 'Learn more about the perpendicular bisectors'),
      concur: note('The circumcentre page did the work; see it there.', 'the-circumcentre-of-the-big-triangle', 'Learn more about the circumcentre step'),
      conclude: note('Drag a vertex: the three altitudes keep meeting at H.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'euler-line': {
      given: note('O, G and H are computed as on their own pages; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      construct: note('O is the midpoint of the diameter AA′.', 'the-antipode-of-a', 'Learn more about the antipode'),
      para: note('Thales gives the right angles; perpendiculars to the same line are parallel.', 'a-parallelogram', 'Learn more about the parallelogram'),
      mid: note('The diagonals of a parallelogram bisect each other; see its own proof.', 'the-midpoint-d', 'Learn more about the midpoint D'),
      medians: note('The medians meet at the centroid, two thirds of the way; see the centroid page.', 'the-medians-of-aha', 'Learn more about the medians'),
      conclude: note('Drag a vertex: the three centres stay on one line, G a third of the way from O.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'nine-point-circle': {
      given: note('All nine points are computed from A, B, C; drag a vertex and they follow.', 'the-statement', 'Learn more about the statement'),
      rect1: note('Four midsegments, two parallel to BC and two to the altitude AH.', 'the-first-rectangle', 'Learn more about the first rectangle'),
      circle1: note('Equal diagonals that bisect each other; see the rectangle page.', 'a-circle-through-four', 'Learn more about the circle'),
      rect2: note('Same construction with the altitude CH; same diagonal EQ.', 'the-second-rectangle', 'Learn more about the second rectangle'),
      feet: note('A right angle on a diameter: the converse of Thales.', 'the-feet-of-the-altitudes', 'Learn more about the feet'),
      centre: note('OD = ½ AH comes from the Euler line page.', 'the-centre', 'Learn more about the centre'),
      conclude: note('Drag a vertex: the circle moves with the points, radius always R / 2.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'intersecting-chords': {
      given: note('P is computed from the four chord ends; the readout shows both products.', 'the-statement', 'Learn more about the statement'),
      construct: note('The chord bisector theorem, used as one step; see its own proof.', 'the-perpendicular-from-the-centre', 'Learn more about the perpendicular'),
      difference: note('(x + y)(x − y) = x² − y², with x = AM and y = MP.', 'a-difference-of-squares', 'Learn more about the difference of squares'),
      pyth: note('OM² cancels; what is left depends only on P.', 'pythagoras-twice', 'Learn more about Pythagoras twice'),
      same: note('The same three steps on the second chord.', 'the-other-chord', 'Learn more about the other chord'),
      conclude: note('Slide a chord end: both products change together.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'sss-congruence': {
      given: note('D is placed with AD = AC and BD = BC; drag C and it follows.', 'placing-the-second-triangle', 'Learn more about placing the triangle'),
      join: note('One segment, two isosceles triangles.', 'joining-c-and-d', 'Learn more about joining C and D'),
      iso1: note('The isosceles theorem; see its own proof.', 'the-first-isosceles-triangle', 'Learn more about the first triangle'),
      iso2: note('The same theorem on the other side.', 'the-second-isosceles-triangle', 'Learn more about the second triangle'),
      add: note('Two pieces at C, the same two pieces at D.', 'adding-the-angles', 'Learn more about adding the angles'),
      conclude: note('Drag C: the two apex angles stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'asa-congruence': {
      given: note('The second triangle is not drawn; E carries its side A′C′.', 'the-statement', 'Learn more about the statement'),
      suppose: note('Enough to show AC = A′C′; suppose not.', 'suppose-the-sides-differ', 'Learn more about the supposition'),
      sas: note('AB = A′B′, AE = A′C′ and the angle α between them.', 'two-sides-and-the-angle-between', 'Learn more about the SAS step'),
      inside: note('Slide E: the part never reaches the whole.', 'a-part-of-the-angle', 'Learn more about the part and the whole'),
      contra: note('Equal and smaller at once: impossible.', 'the-contradiction', 'Learn more about the contradiction'),
      conclude: note('SAS once more, now with AC = A′C′.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'aas-congruence': {
      given: note('The side touches one given angle but not the other.', 'the-statement', 'Learn more about the statement'),
      sum: note('The angle sum; see its own proof.', 'the-angle-sum', 'Learn more about the angle sum'),
      third: note('Same two angles, same remainder.', 'the-third-angle', 'Learn more about the third angle'),
      asa: note('Now the side is between two known angles.', 'the-side-between-two-angles', 'Learn more about the ASA pattern'),
      conclude: note('Drag a vertex: the readout keeps the third angle in step.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'kite-diagonals': {
      given: note('D is the mirror of B in the axis; drag B and it follows.', 'the-statement', 'Learn more about the statement'),
      sss: note('Three equal sides; see the SSS page.', 'the-axis-and-two-triangles', 'Learn more about the two triangles'),
      bisect: note('The axis is a line of symmetry.', 'the-axis-bisects-the-angle', 'Learn more about the bisected angle'),
      sas: note('Two sides and the angle between them.', 'two-smaller-triangles', 'Learn more about the smaller triangles'),
      linear: note('Equal angles along a straight line are right angles.', 'the-linear-pair', 'Learn more about the linear pair'),
      conclude: note('Drag B: the right angle at M stays.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'hl-congruence': {
      given: note('A′ is the mirror of A through C; slide A and it follows.', 'leg-to-leg', 'Learn more about placing the triangles'),
      line: note('Two right angles make a straight angle.', 'a-straight-line', 'Learn more about the straight line'),
      iso: note('Equal hypotenuses, equal base angles; see the isosceles page.', 'the-isosceles-triangle', 'Learn more about the isosceles triangle'),
      aas: note('Two angles and the common leg; see the AAS page.', 'angle-angle-side', 'Learn more about the AAS step'),
      conclude: note('Drag B or C: the angles at A and A′ stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'secant-tangent': {
      given: note('B is where the line PA meets the circle again; drag A and it follows.', 'the-statement', 'Learn more about the statement'),
      foot: note('The chord-bisector theorem; see its own page.', 'the-midpoint-of-the-chord', 'Learn more about the midpoint'),
      squares: note('Sum times difference.', 'a-difference-of-squares', 'Learn more about the difference of squares'),
      pyth: note('OM² cancels; only OP and the radius remain.', 'two-right-triangles', 'Learn more about the two right triangles'),
      tangent: note('The tangent is the secant with A = B = T.', 'the-tangent', 'Learn more about the tangent'),
      conclude: note('Drag A: PA and PB change, PT² does not.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'two-secants': {
      given: note('B and D are where the lines PA and PC meet the circle again.', 'the-statement', 'Learn more about the statement'),
      foot: note('The chord-bisector theorem, twice.', 'the-two-midpoints', 'Learn more about the midpoints'),
      squares: note('Sum times difference, on each secant.', 'differences-of-squares', 'Learn more about the differences of squares'),
      pyth: note('OM² cancels; only OP and the radius remain.', 'the-first-secant', 'Learn more about the first secant'),
      same: note('The same two triangles on the other secant.', 'the-second-secant', 'Learn more about the second secant'),
      conclude: note('Drag A or C: the two products stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'ceva-theorem': {
      given: note('Drag P: the three feet slide along the sides.', 'the-statement', 'Learn more about the statement'),
      base: note('Same height, so areas go as the bases.', 'same-height-same-ratio', 'Learn more about same-height triangles'),
      apex: note('The same two bases, seen from P.', 'the-same-with-apex-p', 'Learn more about the apex P'),
      cancel: note('Equal ratios survive subtraction.', 'subtracting-the-areas', 'Learn more about subtracting the areas'),
      others: note('Three triangles around P, three ratios.', 'the-other-two-cevians', 'Learn more about the other cevians'),
      conclude: note('Drag P: the product in the readout stays 1.', 'why-it-holds', 'Learn more about why it holds'),
    },
    'menelaus-theorem': {
      given: note('Drag D or F: the line swings, E follows.', 'the-statement', 'Learn more about the statement'),
      cutbc: note('Same height from F, so areas go as the bases.', 'cutting-the-side-bc', 'Learn more about cutting BC'),
      cutca: note('The same apex F, the second side.', 'cutting-the-side-ca', 'Learn more about cutting CA'),
      cutab: note('F is an end here, so the apex is E.', 'cutting-the-line-ab', 'Learn more about cutting AB'),
      pair: note('What is left pairs up along the transversal.', 'pairing-the-areas', 'Learn more about pairing the areas'),
      conclude: note('Drag the line: the product in the readout stays 1.', 'why-it-holds', 'Learn more about why it holds'),
    },
  }

  const stateUnits = unitsByView[view] || {}
  const sectionOrder = orderByView[view] || []
  const explanations = EXPLANATIONS[view] || null

  const sectionsContent = config.sectionsContent;
  const faqQuestions = config.faqQuestions;
  const schemas = {
    ...config.schemas,
    webApplication: { ...config.schemas.webApplication, keywords: config.keywords.join(", ") },
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
  };

  // How-to instructions and animated demos (ToolDemoPlayer v3), keyed by view.
  // No demo scripts exist yet; a view's demos go in DEMOS keyed by section
  // anchor, and render at the top of that section.
  const INSTRUCTIONS = {
    'triangle-angle-sum': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$ at any step; the readout under the canvas keeps $\\alpha + \\beta + \\gamma = 180°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'exterior-angle': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$ at any step; $D$ follows on the line $AB$, and the readout under the canvas keeps $\\delta = \\alpha + \\gamma$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'exterior-angle-sum': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$ at any step; the extensions follow, and the readout under the canvas keeps the three exterior angles at $360°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'isosceles-base-angles': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $C$ up or down its axis, or drag $A$ or $B$ to change the base; the readout under the canvas keeps the legs equal and $\\alpha = \\beta$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'triangle-inequality': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$ at any step; $D$ slides to keep $AD = AC$, and the readout under the canvas compares $BA + AC$ with $BC$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'larger-side-larger-angle': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$ at any step, keeping $AC$ longer than $AB$; $D$ slides to keep $AD = AB$, and the readout under the canvas compares the two sides and the two angles. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'perpendicular-shortest': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $P$, slide $Q$ along the line, or drag $A$ or $B$ to tilt the line; the foot $F$ follows, and the readout under the canvas compares $PF$ with $PQ$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'thales-theorem': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $C$ round the circle, drag $A$ to change the radius or $O$ to move the circle; $B$ stays opposite $A$, and the readout under the canvas keeps the angle at $C$ at $90°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'vertical-angles': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original lines. [Learn more about the controls](!#getting-started)',
      'Drag $A$ or $C$ to turn a line about $O$, or $O$ to move the crossing; $B$ and $D$ follow, and the readout under the canvas keeps the two pairs of opposite angles equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'parallel-lines': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original lines. [Learn more about the controls](!#getting-started)',
      'Drag $E$ or $F$ to tilt the transversal, $A$ or $B$ to turn the lines (they stay parallel), $C$ to move the second line; the readout under the canvas keeps $\\alpha = \\alpha\'$ and $\\beta + \\alpha\' = 180°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'polygon-angle-sum': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original pentagon. [Learn more about the controls](!#getting-started)',
      'Drag any vertex at any step, keeping the pentagon convex; the diagonals, the three triangles and the readout follow, and the five angles keep adding up to $540°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'inscribed-angle': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $B$ or $C$ round the circle, drag $A$ to change the radius or $O$ to move the circle; the readout under the canvas keeps the angle at $O$ at twice the angle at $C$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'pythagorean-theorem': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $X$ along the bottom side to change $a$ and $b$, or drag $P$ or $Q$ to move or turn the square; the readout under the canvas keeps $a^2 + b^2$ equal to $c^2$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'cyclic-quadrilateral': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $B$, $C$ or $D$ round the circle, drag $A$ to change the radius or $O$ to move the circle; the readout under the canvas keeps both sums of opposite angles at $180°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'tangent-radius': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $G$ to tilt the supposed line $\\ell\'$, $T$ to move the point of contact, $O$ to move the circle; the readout under the canvas gives the angle $\\varphi$ and whether $\\ell\'$ meets the circle once or twice. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes the angle $\\varphi$ beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'two-tangents': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $P$ to move the outside point or $O$ to move the circle; the points of contact follow, and the readout under the canvas keeps $PA$ and $PB$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'chord-bisector': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $A$ or $B$ round the circle, or drag $O$ to move the circle; the foot $M$ follows, and the readout under the canvas keeps $AM$ and $MB$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'parallelogram-sides': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $D$; the fourth vertex $C$ follows so the figure stays a parallelogram, and the readout under the canvas keeps the opposite sides equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'parallelogram-diagonals': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $D$; the fourth vertex $C$ and the crossing point $M$ follow, and the readout under the canvas keeps $M$ at the midpoint of both diagonals. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'rhombus-diagonals': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $D$ round $A$ to open or close the rhombus, or $A$ and $B$ to move it; $C$ and $M$ follow, and the readout under the canvas keeps both angles at $M$ at $90°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'rectangle-diagonals': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $D$ up or down for the height, or $A$ and $B$ for the base; $C$ follows, and the readout under the canvas keeps the two diagonals equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'midsegment': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the midpoints and the construction point $F$ follow, and the readout under the canvas keeps $DE$ at half of $BC$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'varignon': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag any of $A$, $B$, $C$, $D$ into any convex shape; the midpoints follow, and the readout under the canvas keeps the opposite sides of $PQRS$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'trapezoid-midsegment': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $C$ along the top base, or drag $A$, $B$ or $D$; the midpoints follow, and the readout under the canvas keeps $MN$ at half the sum of the bases. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'centroid': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the midpoints, $G$, $P$ and $Q$ follow, and the readout under the canvas keeps both ratios at $2 : 1$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'angle-bisector': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the foot $D$ and the perpendiculars follow, and the readout under the canvas keeps $BD / DC$ equal to $AB / AC$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes the two angles $\\alpha$ beside their arcs. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'circumcentre': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the midpoints, the bisectors and $O$ follow, and the readout under the canvas keeps the three distances from $O$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'incentre': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the bisectors, $I$ and the feet follow, and the readout under the canvas keeps the three distances from $I$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked half-angle beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'orthocentre': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the altitudes, $H$ and the large triangle follow, and the readout under the canvas keeps the angle between $CH$ and $AB$ at $90°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'euler-line': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the three centres and the construction follow, and the readout under the canvas keeps $HG / GO$ at $2$ and the angle $HGO$ at $180°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'nine-point-circle': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the nine points, the circle, $O$ and $H$ follow, and the readout under the canvas keeps the distances from $N$ equal and at half the circumradius. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'intersecting-chords': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $A$, $B$, $C$ or $D$ round the circle, or drag $O$ to move it; $P$ and the feet follow, and the readout under the canvas keeps $PA \\cdot PB$, $PC \\cdot PD$ and $R^2 - OP^2$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'sss-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the copy $D$ follows, and the readout under the canvas keeps the apex angles at $C$ and $D$ equal. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'asa-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $E$ along $AC$, or drag $A$, $B$ or $C$; the readout under the canvas compares the angle $ABE$ with the angle $ABC$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'aas-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the readout under the canvas compares the angle at $C$ with $180°$ minus the angles at $A$ and $B$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'kite-diagonals': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; $D$ mirrors $B$ in the axis, and the readout under the canvas keeps the angle at $M$ and the two halves of $BD$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'hl-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $A$ along the line, or drag $B$ or $C$; the copy $A\'$ follows, and the readout under the canvas keeps the angles at $A$ and $A\'$ and the legs $CA$ and $CA\'$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'secant-tangent': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$ round the near side of the circle, $P$ outside it, or $O$; the readout under the canvas keeps $PT^2$ beside $PA \\cdot PB$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'two-secants': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$ or $C$ round the near side of the circle, $P$ outside it, or $O$; the readout under the canvas keeps $PA \\cdot PB$ beside $PC \\cdot PD$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'ceva-theorem': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $P$ anywhere inside the triangle, or $A$, $B$ or $C$; the readout under the canvas shows the three ratios and their product. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
    'menelaus-theorem': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $D$ along $BC$ or $F$ along the extension of $AB$, or $A$, $B$ or $C$; the readout under the canvas shows the three ratios and their product. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
  }

  // Animated demo (ToolDemoPlayer drives the real player), shown at the top
  // of the getting-started section, before the static pictures.
  const DEMOS = {
    'triangle-angle-sum': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'STEP THROUGH\nNext → draws DE through C, parallel to AB.\nThe log adds step 2, tagged Parallel postulate.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ALTERNATE ANGLES\nTwo more steps copy α and β up to C.\nEach step names the rule it uses.' },
          { click: { button: 'Next' } },
          { wait: 1500 },
          { click: { button: 'Next' } },
          { wait: 1500 },
          { say: 'THE CONCLUSION\nα, γ and β fill the straight angle DCE.\nThat is 180°, for this triangle and every other.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A VERTEX\nDrag C: the parallel and the angles follow.\nThe readout stays at 180.0°.' },
          { drag: '[data-handle="C"]', dx: 70, dy: 40, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original triangle.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'exterior-angle': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'EXTEND THE SIDE\nNext → produces AB past B to D.\nThe green angle δ between BD and BC is the exterior angle.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE LINEAR PAIR\nβ and δ fill the straight angle ABD.\nTag: Straight angle. β + δ = 180°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE ANGLE SUM\nα + β + γ = 180°, the theorem proved before.\nUsed here as a single step.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nBoth sums are 180°; take β away.\nδ = α + γ.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A VERTEX\nDrag C: δ grows and shrinks with α + γ.\nThe readout keeps the equation.' },
          { drag: '[data-handle="C"]', dx: -80, dy: 30, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original triangle.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'exterior-angle-sum': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'EXTEND THE SIDES\nNext → produces each side past the next vertex.\nThree green exterior angles, one per corner.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THREE LINEAR PAIRS\nAt each vertex interior + exterior = 180°.\nAll six angles: 540°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE ANGLE SUM\nα + β + γ = 180°, the theorem proved before.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\n540° − 180° = 360° for the exterior angles.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A VERTEX\nDrag C: one exterior angle shrinks, the others grow.\nThe readout stays at 360.0°.' },
          { drag: '[data-handle="C"]', dx: 90, dy: 20, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original triangle.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'isosceles-base-angles': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE MIDPOINT LINE\nNext → marks M, the midpoint of AB, and joins it to C.\nTwo ticks on each half-base: AM = MB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THREE EQUAL SIDES\nCA = CB, AM = BM, CM shared.\nTag: SSS. The two halves are congruent.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nCorresponding angles of congruent triangles.\nα = β.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG THE APEX\nC slides on the axis of the base.\nThe legs stay equal; so do α and β.' },
          { drag: '[data-handle="C"]', dx: 0, dy: 60, ms: 1400 },
          { wait: 1200 },
          { say: 'DRAG A BASE POINT\nMove A: C follows to stay above the new midpoint.' },
          { drag: '[data-handle="A"]', dx: -40, dy: 0, ms: 1200 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original triangle.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'triangle-inequality': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE CONSTRUCTION\nNext → extends BA past A and cuts off AD = AC.\nOne tick on each equal segment.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ISOSCELES\nACD has two equal sides, so its base angles are equal.\nTag: Isosceles base angles.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE LARGER ANGLE\nThe angle BCD contains δ, so it is larger than δ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE LONGER SIDE\nIn triangle BCD the larger angle faces BD.\nSo BD > BC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nBD = BA + AC, so BA + AC > BC.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A VERTEX\nPull A towards BC: the gap closes but never reaches zero.' },
          { drag: '[data-handle="A"]', dx: 60, dy: 40, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original triangle.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'larger-side-larger-angle': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE CUT-OFF POINT\nNext → marks D on AC with AD = AB.\nOne tick on each equal segment; BD joined.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ISOSCELES\nABD has two equal sides: its base angles are both δ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE EXTERIOR ANGLE\nδ at D is an exterior angle of triangle BDC.\nSo δ > γ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE WHOLE ANGLE\nδ is a part of β at B.\nSo β > δ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nβ > δ > γ: the larger angle faces the larger side.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A VERTEX\nPull B towards A: AB shortens, β opens, γ shrinks.' },
          { drag: '[data-handle="B"]', dx: -50, dy: 20, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original triangle.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'perpendicular-shortest': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE RIGHT TRIANGLE\nNext → shades triangle PFQ.\nRight angle at F, acute angles φ and θ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'TWO ACUTE ANGLES\nφ + θ = 90°, by the angle sum.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE LARGEST ANGLE\nThe right angle beats φ and θ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE LONGEST SIDE\nPQ faces the right angle, PF faces θ.\nSo PQ > PF.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nQ was any point: PF is the shortest.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE Q\nMove Q towards F: PQ shrinks, but stays longer than PF.' },
          { drag: '[data-handle="Q"]', dx: -70, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'thales-theorem': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE RADIUS OC\nNext → joins the centre to C.\nOA, OB, OC are radii: one tick each.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'FIRST ISOSCELES TRIANGLE\nOA = OC, so the angles at A and at C are both α.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SECOND ISOSCELES TRIANGLE\nOB = OC, so the angles at B and at C are both β.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE ANGLE SUM\nα + (α + β) + β = 180°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nα + β = 90°: the angle at C is a right angle.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE C\nMove C round the circle: α and β change, their sum stays 90°.' },
          { drag: '[data-handle="C"]', dx: -90, dy: -10, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'vertical-angles': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE FIRST LINEAR PAIR\nNext → marks β, the neighbour of α.\nα + β fill the straight line AB: 180°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SECOND LINEAR PAIR\nThe same β with α′ fills the line CD: 180° again.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nEqual sums, take β away: α = α′.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE OTHER PAIR\nβ and β′ are equal the same way.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'TURN A LINE\nDrag C: all four angles change, the pairs stay equal.' },
          { drag: '[data-handle="C"]', dx: 60, dy: -30, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original lines.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'parallel-lines': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'CORRESPONDING ANGLES\nNext → marks α at P and α′ at Q.\nSame position at both crossings: equal, by the parallel postulate.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ALTERNATE ANGLES\nThe vertical angle of α at P equals α′.\nZ-angles, equal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CO-INTERIOR ANGLES\nβ at P and α′ fill a straight line: 180°.\nC-angles, supplementary.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THREE RELATIONS\nAll from one postulate.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'TILT THE TRANSVERSAL\nDrag E: α and α′ move together, β the other way.' },
          { drag: '[data-handle="E"]', dx: 70, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original lines.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'polygon-angle-sum': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE DIAGONALS\nNext → draws AC and AD from the vertex A.\nThree triangles, three colours.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THREE TRIANGLES\n180° each: 540° for all their angles.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE ANGLES FIT TOGETHER\nThree at A, two at C and D, one at B and E:\nthe pentagon\u2019s angles, cut into pieces.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nα + β + γ + δ + ε = 540° = (n − 2) · 180°.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A VERTEX\nPull B outward: β shrinks, its neighbours grow, the sum stays 540°.' },
          { drag: '[data-handle="B"]', dx: 45, dy: -20, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original pentagon.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'inscribed-angle': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE DIAMETER\nNext → draws CD through the centre.\nThree equal radii, one tick each.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ISOSCELES\nOA = OC: the angle at A is α too.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE EXTERIOR ANGLE\n∠AOD collects both copies of α: 2α.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE OTHER SIDE\nThe same two steps give ∠DOB = 2β.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\n2α + 2β = 2(α + β): twice the angle at the circle.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE C\nMove C along its arc: α and β trade places, the angle at O stays twice.' },
          { drag: '[data-handle="C"]', dx: 60, dy: 10, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'pythagorean-theorem': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE SQUARE\nNext → builds the square of side a + b\nand cuts each side at a and b.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'FOUR COPIES\nA triangle with legs a, b and a right angle in every corner.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE INNER SQUARE\nFour sides c, and α + β = 90° makes the corners right.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AREA TWO WAYS\n(a + b)² = c² + four triangles.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nThe 2ab cancels: a² + b² = c².' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE X\nMove X along the bottom side: a grows, b shrinks, the readout keeps a² + b² = c².' },
          { drag: '[data-handle="X"]', dx: 70, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'cyclic-quadrilateral': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE RADII\nNext → joins O to the four vertices.\nFour equal radii, one tick each.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ISOSCELES\nFour isosceles triangles: base angles α, β, γ, δ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE ANGLES OF ABCD\nEach angle is two letters; opposite angles share none.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE ANGLE SUM\n2(α + β + γ + δ) = 360°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\n∠A + ∠C = α + β + γ + δ = 180°.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE C\nMove C round the circle: β and γ change, the sums stay 180°.' },
          { drag: '[data-handle="C"]', dx: -30, dy: 40, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'tangent-radius': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SUPPOSE NOT\nNext → draws a line ℓ′ through T at an angle φ ≠ 90°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONSTRUCTION\nThe perpendicular OF, and T′ mirroring T across F.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\nTwo congruent right triangles: OT′ = OT.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CONTRADICTION\nT′ is on the circle: ℓ′ meets it twice.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nThe tangent must be the perpendicular: OT ⟂ ℓ.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG G\nPull G towards the tangent: φ nears 90° and T′ slides into T.' },
          { drag: '[data-handle="G"]', dx: 10, dy: -35, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'two-tangents': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'JOIN THE CENTRE\nNext → draws OA, OB and OP.\nTwo equal radii, one tick each.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'RIGHT ANGLES\nTangent ⟂ radius at A and at B.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PYTHAGORAS TWICE\nPA² = OP² − OA², PB² = OP² − OB².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SAME NUMBERS\nOA = OB = r, OP shared: PA² = PB².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nPA = PB, two ticks each.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG P\nMove P: the tangents swing, the readout keeps PA = PB.' },
          { drag: '[data-handle="P"]', dx: -40, dy: -60, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'chord-bisector': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'JOIN THE CENTRE\nNext → draws OA and OB.\nTwo equal radii, one tick each.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'RIGHT TRIANGLES\nOMA and OMB, right-angled at M, sharing OM.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PYTHAGORAS TWICE\nAM² = OA² − OM², MB² = OB² − OM².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SAME NUMBERS\nOA = OB = r, OM shared: AM² = MB².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nAM = MB, two ticks each.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE B\nMove B down the circle: the chord tilts, M stays its midpoint.' },
          { drag: '[data-handle="B"]', dx: 20, dy: 60, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'parallelogram-sides': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE DIAGONAL\nNext → draws BD: two triangles,\nand a transversal of both pairs of parallels.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ALTERNATE ANGLES\nOn AB ∥ DC: α at B equals α at D.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AND AGAIN\nOn AD ∥ BC: β at D equals β at B.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ASA\nBD between α and β in both triangles: congruent.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nAB = CD, AD = BC.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG D\nPush D sideways: the figure shears, the sides stay paired.' },
          { drag: '[data-handle="D"]', dx: 28, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'parallelogram-diagonals': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'OPPOSITE SIDES\nNext → lights AB = CD\nand the two triangles on them.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ALTERNATE ANGLES\nOn the transversal AC: α at A equals α at C.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AND AGAIN\nOn the transversal BD: β at B equals β at D.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ASA\nEqual bases between α and β: congruent.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nAM = MC, BM = MD: M halves both diagonals.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG D\nPush D sideways: the diagonals change, M stays at both midpoints.' },
          { drag: '[data-handle="D"]', dx: 28, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'rhombus-diagonals': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'A PARALLELOGRAM\nNext → marks BM = MD:\nthe diagonals bisect each other.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SSS\nAB = AD, BM = MD, AM shared: congruent.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'EQUAL ANGLES\nThe two angles at M on either side of AM are equal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A LINEAR PAIR\nTogether they fill the straight angle along BD.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\n2φ = 180°, so φ = 90°: AC ⟂ BD.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG D\nSwing D round A: the rhombus flattens, the angle at M stays 90°.' },
          { drag: '[data-handle="D"]', dx: 8, dy: 24, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'rectangle-diagonals': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'A PARALLELOGRAM\nNext → marks the parallel sides:\nco-interior angles of 90° + 90°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'OPPOSITE SIDES\nAD = BC, one tick each.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'TWO TRIANGLES\nDAB and CBA, both on the base AB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\nAD = BC, AB shared, right angles between: congruent.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nDB = CA: the diagonals are equal.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG D\nPull D down: a flatter rectangle, the diagonals stay equal.' },
          { drag: '[data-handle="D"]', dx: 0, dy: 22, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'midsegment': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE EXTENSION\nNext → doubles DE to F and joins CF.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS WITH VERTICAL ANGLES\nADE and CFE are congruent.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A PARALLEL\nα at A and C are alternate angles: CF ∥ AB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THREE EQUAL SEGMENTS\nCF = AD = DB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE DIAGONAL DC\nAlternate angles γ on the parallels DB, CF.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS AGAIN\nDBC and CFD: BC = FD, and the angles δ are equal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nDF ∥ BC and BC = 2 DE.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nPull A sideways: DBCF shears, DE stays half of BC.' },
          { drag: '[data-handle="A"]', dx: 26, dy: 6, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'varignon': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE FIRST DIAGONAL\nNext → draws AC: two triangles, ABC and ADC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A MIDSEGMENT\nPQ in triangle ABC is parallel to AC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ANOTHER\nSR in triangle ADC is parallel to AC too: PQ ∥ SR.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SECOND DIAGONAL\nQR and PS are both parallel to BD.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nBoth pairs parallel: PQRS is a parallelogram.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG C\nPull C in: the outer shape changes, the inner one stays a parallelogram.' },
          { drag: '[data-handle="C"]', dx: -20, dy: -20, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'trapezoid-midsegment': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE DIAGONAL\nNext → draws AC and marks its midpoint K.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A MIDSEGMENT\nMK in triangle ACD: parallel to DC, half of it.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ANOTHER\nKN in triangle ABC: parallel to AB, half of it.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ONE LINE\nBoth parallel to the bases through K: M, K, N are collinear.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nMN = MK + KN = half the sum of the bases.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE C\nShorten the top base: MN stays the average.' },
          { drag: '[data-handle="C"]', dx: -30, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'centroid': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'TWO MIDPOINTS\nNext → marks P on AG and Q on BG.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A MIDSEGMENT\nDE in the big triangle: parallel to AB, half of it.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ANOTHER\nPQ in the small triangle GAB: the same.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A PARALLELOGRAM\nPQDE; its diagonals lie on the medians and bisect each other at G.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'TWO THIRDS\nAP = PG = GD: AG is twice GD.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE THIRD MEDIAN\nCF meets AD at the same two-thirds point: G.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nLean the triangle: the medians still meet at G, still 2 : 1.' },
          { drag: '[data-handle="A"]', dx: 28, dy: 8, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'angle-bisector': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'PERPENDICULARS\nNext → drops DE onto AB and DF onto AC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CONGRUENT\nADE and ADF share AD and the angle α: DE = DF.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AREAS BY THE SIDES\n½·AB·DE and ½·AC·DF: the ratio AB : AC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AREAS BY THE BASES\nThe same height AH: the ratio BD : DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nOne ratio, two names: BD : DC = AB : AC.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nPull A towards C: D slides to keep the ratios equal.' },
          { drag: '[data-handle="A"]', dx: 26, dy: 4, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'circumcentre': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE FIRST BISECTOR\nNext → joins O to A and B: OA = OB by SAS.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SECOND\nAt the midpoint Q: OB = OC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THREE EQUAL DISTANCES\nOA = OB = OC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE THIRD BISECTOR\nOAC is isosceles: its median OR is perpendicular to AC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CIRCUMCIRCLE\nThe circle about O through A passes through B and C.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nPull A down: O slides towards the base.' },
          { drag: '[data-handle="A"]', dx: 10, dy: 24, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'incentre': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE FEET\nNext → drops the perpendiculars from I to the three sides.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE FIRST BISECTOR\nAIE and AIF are congruent: IE = IF.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SECOND\nBIF and BID: IF = ID.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE THIRD BISECTOR\nEqual legs on the hypotenuse CI: CI bisects the angle at C.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE INCIRCLE\nThe circle about I touches all three sides.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nLean the triangle: the incircle follows.' },
          { drag: '[data-handle="A"]', dx: 28, dy: 6, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'orthocentre': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THREE PARALLELS\nNext → draws the parallel to each side through the opposite vertex.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE MIDPOINTS\nParallelograms make A, B, C the midpoints of the big sides.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PERPENDICULAR BISECTORS\nEach altitude is perpendicular to a big side at its midpoint.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CIRCUMCENTRE\nPerpendicular bisectors meet at one point: H.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE THIRD ALTITUDE\nCF is the third perpendicular bisector: through H.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nLean the triangle: the altitudes still meet at H.' },
          { drag: '[data-handle="A"]', dx: 20, dy: 8, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'euler-line': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE ANTIPODE\nNext → draws the circumcircle and the diameter from A to A′.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A PARALLELOGRAM\nRight angles in the semicircle: BHCA′ has parallel opposite sides.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE MIDPOINT D\nIts diagonals BC and HA′ bisect each other at D.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'TWO MEDIANS\nAD and HO are medians of triangle AHA′.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE EULER LINE\nTheir centroid is G: so G lies on HO, with HG = 2 GO.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nLean the triangle: the three centres slide along one line.' },
          { drag: '[data-handle="A"]', dx: 16, dy: 6, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'nine-point-circle': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE FIRST RECTANGLE\nNext → fills EFQR: midsegments parallel to BC and to AH.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A CIRCLE\nIts diagonal EQ is a diameter: E, F, Q, R on the circle.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SECOND RECTANGLE\nDEPQ shares the diagonal EQ: D and P join the circle.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE FEET\nEach foot sees a diameter at a right angle: nine points.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CENTRE\nODHP is a parallelogram: N is the midpoint of OH.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE RADIUS\nDP = OA = R, so the radius is R / 2.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nLean the triangle: the circle follows the nine points.' },
          { drag: '[data-handle="A"]', dx: 16, dy: 6, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'intersecting-chords': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE PERPENDICULAR\nNext → drops OM onto AB: M is the midpoint.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A DIFFERENCE OF SQUARES\nPA·PB = (AM + MP)(AM − MP) = AM² − MP².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PYTHAGORAS TWICE\nAM² − MP² = OA² − OP² = R² − OP².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE OTHER CHORD\nThe same three steps give PC·PD = R² − OP².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE CONCLUSION\nBoth products equal the power of P.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE B\nMove B down the circle: both products change together.' },
          { drag: '[data-handle="B"]', dx: -10, dy: 26, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'sss-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'JOIN C AND D\nNext → draws CD: two isosceles triangles across AB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE FIRST\nIn ACD the base angles at C and D are both α.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE SECOND\nIn BCD they are both β.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ADDING\nα + β at C, α + β at D: the apex angles are equal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\nTwo sides and the included angle: the triangles are congruent.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG C\nPull C sideways: the copy follows, the apex angles stay equal.' },
          { drag: '[data-handle="C"]', dx: 28, dy: 4, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'asa-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SUPPOSE\nNext → supposes AC longer and cuts AE = A′C′ off it.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\nABE ≅ A′B′C′, so its angle at B would equal β.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A PART\nBut BE runs inside the angle ABC: the part is less than the whole.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CONTRADICTION\nEqual and smaller at once: the sides cannot differ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS AGAIN\nWith AC = A′C′ the triangles are congruent.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE E\nPull E towards C: the part grows, and never reaches the whole.' },
          { drag: '[data-handle="E"]', dx: 16, dy: -26, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'aas-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'ANGLE SUM\nNext → marks the third angle γ: α + β + γ = 180°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THIRD ANGLE\nThe same in both triangles, so the angles at C and C′ are equal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ASA\nBC now lies between two equal angles, β and γ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CONGRUENT\nAngle-side-angle finishes the proof.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG C\nPull C to the left: the angles change, the readout stays in step.' },
          { drag: '[data-handle="C"]', dx: -30, dy: 10, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'kite-diagonals': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE AXIS\nNext → draws AC: two triangles with three equal sides.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'BISECTED\nThe angles at A are equal: the axis bisects the angle.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\nBD and its crossing M; ABM ≅ ADM.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'LINEAR PAIR\nBM = MD, and the equal angles at M are right angles.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\nThe diagonals are perpendicular, and AC bisects BD.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG B\nSwing B outward: D mirrors it, the right angle stays.' },
          { drag: '[data-handle="B"]', dx: -16, dy: 22, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'hl-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'A STRAIGHT LINE\nNext → : two right angles at C put A, C, A′ on one line.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ISOSCELES\nAB = A′B, so the angles at A and A′ are both α.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AAS\nα, the right angle and the common leg BC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\nHypotenuse and leg determine the right triangle.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE A\nPull A towards C: the copy follows, the angles stay equal.' },
          { drag: '[data-handle="A"]', dx: 16, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'secant-tangent': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE MIDPOINT\nNext → drops OM to the chord: M is the midpoint of AB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SQUARES\nPA · PB = (PM − AM)(PM + AM) = PM² − AM².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PYTHAGORAS\nIn OMP and OMA: PM² − AM² = OP² − R².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE TANGENT\nOT ⟂ PT, so PT² = OP² − R² too.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\nPT² = PA · PB: the power of P.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nTurn the secant: PA and PB change, the product does not.' },
          { drag: '[data-handle="A"]', dx: -14, dy: 12, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'two-secants': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE MIDPOINTS\nNext → drops OM and ON: M and N bisect the chords.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SQUARES\nEach product is a difference of squares.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'FIRST SECANT\nPythagoras in OMP and OMA: OP² − R².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SECOND SECANT\nThe same in ONP and ONC: OP² − R² again.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\nPA · PB = PC · PD: the power of P.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\nTurn the first secant: its product does not change.' },
          { drag: '[data-handle="A"]', dx: -14, dy: 12, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'ceva-theorem': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SAME HEIGHT\nNext → : ABD and ADC share the apex A, so [ABD]/[ADC] = BD/DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'APEX P\nThe same bases seen from P: [PBD]/[PDC] = BD/DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SUBTRACT\nWhat is left is ABP and ACP: BD/DC = [ABP]/[ACP].' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE OTHERS\nThe same from B and from C: three triangles around P.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'MULTIPLY\nEach area once above and once below: the product is 1.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG P\nPull P towards B: the ratios change, the product does not.' },
          { drag: '[data-handle="P"]', dx: 30, dy: 12, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
    'menelaus-theorem': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SIDE BC\nNext → : FBD and FDC share the apex F, so [FBD]/[FDC] = BD/DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SIDE CA\nThe same apex F: [FCE]/[FEA] = CE/EA.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'LINE AB\nNow the apex is E: [EAF]/[EFB] = AF/FB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PAIR UP\n[FEA] cancels; the rest pair up along the transversal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'MULTIPLY\n(FD/FE)(FE/FD) = 1.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG F\nPull F further out: the ratios change, the product does not.' },
          { drag: '[data-handle="F"]', dx: 22, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
  }

  // Long-form how-to-use (HowToUseSection), rendered as the body of the
  // first section. Keyed by view. `overview.callouts[].pos` are pixel
  // offsets inside the mockup frame; the Mockup component itself is
  // attached at render time (ProofPlayerMockup with this view's proofKey).
  const HOW_TO_USE = {
    'triangle-angle-sum': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        // Two standard states, one picture each: the opening scene with the
        // controls, and the finished proof. Pin offsets are measured on the
        // mockup frame (two equal columns; the canvas is 230px high and
        // centred in its column, so x positions inside it are written as
        // 25% of the frame width ± px).
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Solid points', desc: 'drag A, B or C at any step; the hollow points D and E are constructed and follow', pos: { top: '260px', left: 'calc(25% - 130px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the three angles and their sum, live while you drag; the sum stays at 180°', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The construction', desc: 'line DE through C, parallel to AB; D and E are hollow because they are built from A, B and C', pos: { top: '114px', left: 'calc(25% - 152px)' } },
            { n: 2, label: 'Alternate angles', desc: 'α and β copied to C, one on each side of γ; the three fill the straight angle DCE', pos: { top: '140px', left: 'calc(25% - 48px)' } },
            { n: 3, label: 'Justification tags', desc: 'Given, Parallel postulate, Alternate angles, Straight angle: the rule behind each step; the log is scrolled to the latest step', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 4, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
            { n: 5, label: 'Step counter', desc: 'Step 5 / 5: the proof is complete', pos: { top: '334px', left: 'calc(25% + 172px)' } },
          ] },
        ]
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves the vertex; every angle, the parallel line and the readout follow'],
          ['$D$, $E$', 'hollow dot', 'cannot be dragged: they sit on the parallel through $C$ and move with it'],
          ['a vertex onto the opposite side', '—', 'refused: the figure would stop being a triangle, so the move is ignored'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $E$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three angles and their sum. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Parallel postulate**, **Alternate angles**, **Straight angle**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only the parallel line and alternate angles, which is why the sum stays $180°$ for every triangle you drag.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put the three vertices on one line, or nearly so, is ignored. The theorem says nothing about that case.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the triangle to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'exterior-angle': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Solid points', desc: 'drag A, B or C at any step; the hollow point D is constructed on the line AB and follows', pos: { top: '262px', left: 'calc(25% - 188px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: δ against α + γ, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The extension', desc: 'AB produced past B to the hollow point D; A, B, D on one line', pos: { top: '262px', left: 'calc(25% + 150px)' } },
            { n: 2, label: 'The exterior angle', desc: 'δ = ∠CBD, between the extension and the side BC, highlighted with α and γ', pos: { top: '236px', left: 'calc(25% + 68px)' } },
            { n: 3, label: 'Justification tags', desc: 'Given, Construction, Straight angle, Triangle angle sum, Equal sums: the rule behind each step; the log is scrolled to the latest step', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 4, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
            { n: 5, label: 'Step counter', desc: 'Step 5 / 5: the proof is complete', pos: { top: '334px', left: 'calc(25% + 172px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves the vertex; the extension, the exterior angle and the readout follow'],
          ['$D$', 'hollow dot', 'cannot be dragged: it sits on the line $AB$ beyond $B$ and moves with $A$ and $B$'],
          ['a vertex onto the opposite side', '—', 'refused: the figure would stop being a triangle, so the move is ignored'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the exterior angle $\\delta$ and the sum $\\alpha + \\gamma$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Straight angle**, **Triangle angle sum**, **Equal sums**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the straight line $ABD$ and the angle sum of the triangle, which is why $\\delta = \\alpha + \\gamma$ holds for every triangle you drag.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put the three vertices on one line, or nearly so, is ignored. The theorem says nothing about that case.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the triangle to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'exterior-angle-sum': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Solid points', desc: 'drag A, B or C at any step; the hollow points D, E, F are constructed on the sides\' lines and follow', pos: { top: '230px', left: 'calc(25% - 120px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the three exterior angles and their sum, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The extensions', desc: 'each side produced past the next vertex to the hollow points D, E, F, all the same way round', pos: { top: '240px', left: 'calc(25% + 112px)' } },
            { n: 2, label: 'The exterior angles', desc: 'α′, β′, γ′ in green, highlighted at the last step: together a full turn', pos: { top: '128px', left: 'calc(25% + 14px)' } },
            { n: 3, label: 'Justification tags', desc: 'Given, Construction, Straight angle, Triangle angle sum, Subtraction: the rule behind each step; the log is scrolled to the latest step', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 4, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
            { n: 5, label: 'Step counter', desc: 'Step 5 / 5: the proof is complete', pos: { top: '334px', left: 'calc(25% + 172px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves the vertex; the three extensions, the exterior angles and the readout follow'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: each sits on the line of a side, past a vertex, and moves with it'],
          ['a vertex onto the opposite side', '—', 'refused: the figure would stop being a triangle, so the move is ignored'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$ to $F$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three exterior angles and their sum. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Straight angle**, **Triangle angle sum**, **Subtraction**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses three straight lines and the angle sum of the triangle, which is why the exterior angles add up to $360°$ for every triangle you drag.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put the three vertices on one line, or nearly so, is ignored. The theorem says nothing about that case.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the triangle to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'isosceles-base-angles': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Base points', desc: 'drag A or B to change the base; the apex C slides on the axis of the base, up or down, and stays above the midpoint', pos: { top: '272px', left: 'calc(25% - 125px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the two base angles and the two leg lengths, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 4 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 4 of 4', mockupProps: { step: 3 }, callouts: [
            { n: 1, label: 'The midpoint line', desc: 'M, hollow, is the midpoint of AB; CM splits the triangle in two', pos: { top: '292px', left: 'calc(25% - 32px)' } },
            { n: 2, label: 'Tick marks', desc: 'one tick on each leg, two on each half-base: the equal pairs of sides', pos: { top: '168px', left: 'calc(25% - 92px)' } },
            { n: 3, label: 'The two halves', desc: 'ACM and BCM shaded in two colours: congruent by SSS, mirror images in CM', pos: { top: '216px', left: 'calc(25% + 46px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, SSS, CPCTC: the rule behind each step', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging, and it stays isosceles.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$', 'solid dot', 'moves an end of the base; $C$ moves to stay above the new midpoint, so the legs stay equal'],
          ['$C$', 'solid dot', 'slides along the axis of the base only: up for a tall triangle, down for a flat one'],
          ['$M$', 'hollow dot', 'cannot be dragged: it is the midpoint of $AB$ and follows'],
          ['$C$ down onto the base', '—', 'refused: the figure would stop being a triangle, so the move is ignored'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $M$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two base angles and the two leg lengths. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **SSS**, **CPCTC**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'The triangle stays isosceles', content: 'The apex is constrained to the axis of the base, so no drag can make the legs unequal. The readout shows the two leg lengths to prove it.' },
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only the midpoint and the SSS congruence, which is why $\\alpha = \\beta$ holds for every isosceles triangle you make.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would flatten the triangle onto its base is ignored. The theorem says nothing about that case.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'triangle-inequality': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Solid points', desc: 'drag A, B or C at any step; the hollow point D is cut off on the line BA at the distance AC and follows', pos: { top: '170px', left: 'calc(25% - 28px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: BA + AC against BC, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The cut-off point', desc: 'D, hollow, on BA produced, with AD = AC; BD is BA and AC laid end to end', pos: { top: '222px', left: 'calc(25% - 158px)' } },
            { n: 2, label: 'Tick marks', desc: 'one tick on AD and one on AC: the two equal segments of the construction', pos: { top: '196px', left: 'calc(25% - 92px)' } },
            { n: 3, label: 'The angles at C and D', desc: 'δ at D and at C from the isosceles triangle, ε at C containing δ: the larger angle faces the longer side', pos: { top: '250px', left: 'calc(25% + 108px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Isosceles base angles, Whole greater than part, Larger angle longer side, Equal lengths', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves the vertex; $D$, the segment $CD$, the ticks, the marked angles and the readout follow'],
          ['$D$', 'hollow dot', 'cannot be dragged: it lies on the line $BA$ beyond $A$, at the distance $AC$ from $A$'],
          ['$A$ onto the side $BC$', '—', 'refused: the figure would stop being a triangle, which is exactly the case of equality'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $BA$, $AC$, their sum and $BC$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Isosceles base angles**, **Whole greater than part**, **Larger angle, longer side**, **Equal lengths**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument compares angles and sides by the earlier theorems, never by their sizes, which is why it holds for every triangle you drag.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put $A$ on the line $BC$ is ignored. That is the case $BA + AC = BC$, which the theorem leaves out.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the triangle to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'larger-side-larger-angle': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Solid points', desc: 'drag A, B or C at any step, keeping AC the longer side; the hollow point D is cut off on AC at the distance AB and follows', pos: { top: '264px', left: 'calc(25% - 150px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the two sides and the two angles, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The cut-off point', desc: 'D, hollow, on AC with AD = AB; the ticks mark the two equal segments', pos: { top: '288px', left: 'calc(25% + 60px)' } },
            { n: 2, label: 'The angle at B', desc: 'the whole angle β, with its part δ inside it: β > δ', pos: { top: '104px', left: 'calc(25% - 46px)' } },
            { n: 3, label: 'The angle at C', desc: 'γ, the angle opposite the shorter side; the exterior angle δ at D beats it', pos: { top: '250px', left: 'calc(25% + 150px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Isosceles base angles, Exterior angle theorem, Whole greater than part, Chain of inequalities', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging, with AC kept longer than AB.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves the vertex; $D$, the segment $BD$, the ticks, the marked angles and the readout follow'],
          ['$D$', 'hollow dot', 'cannot be dragged: it lies on $AC$ at the distance $AB$ from $A$'],
          ['$B$ so far from $A$ that $AB$ reaches $AC$', '—', 'refused: the theorem assumes $AC$ is the longer side, and $D$ would fall beyond $C$'],
          ['a vertex onto the opposite side', '—', 'refused: the figure would stop being a triangle'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two sides $AC$ and $AB$ and the two angles $\\beta$ and $\\gamma$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Isosceles base angles**, **Exterior angle theorem**, **Whole greater than part**, **Chain of inequalities**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument compares angles through the isosceles and exterior angle theorems, never through their sizes, which is why it holds for every triangle you drag.' },
        { title: 'AC stays the longer side', content: 'A drag that would make $AB$ as long as $AC$ or longer is refused, because the construction of $D$ and the theorem itself assume $AC > AB$. Drags that flatten the triangle are refused too.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the triangle to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'perpendicular-shortest': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'P moves freely, Q slides along the line, A and B tilt the line; the hollow foot F follows', pos: { top: '84px', left: 'calc(25% - 40px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PF against PQ, and the angle at F, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The right angle', desc: 'the mark at F: PF is perpendicular to the line, the largest angle of triangle PFQ', pos: { top: '262px', left: 'calc(25% - 46px)' } },
            { n: 2, label: 'The perpendicular PF', desc: 'highlighted at the last step: the shortest segment from P to the line', pos: { top: '160px', left: 'calc(25% - 60px)' } },
            { n: 3, label: 'The slanted segment PQ', desc: 'faces the right angle, so it is the longest side of the triangle', pos: { top: '170px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Definition, Triangle angle sum, Compare angles, Larger angle longer side, Any Q', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the figure is shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$P$', 'solid dot', 'moves freely; the foot $F$ moves along the line to stay under it at a right angle'],
          ['$Q$', 'solid dot', 'slides along the line only, on either side of $F$'],
          ['$A$, $B$', 'solid dot', 'tilt and move the line; $F$ and $Q$ follow'],
          ['$F$', 'hollow dot', 'cannot be dragged: it is the foot of the perpendicular from $P$'],
          ['$Q$ onto $F$, or $P$ onto the line', '—', 'refused: $PFQ$ would stop being a triangle'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $P$, $F$, $Q$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $PF$, $PQ$ and the angle at $F$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Definition**, **Triangle angle sum**, **Compare angles**, **Larger angle, longer side**, **Any Q**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the angle sum and the side–angle order in a triangle, never the sizes, which is why it holds wherever you put $P$ and $Q$.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put $Q$ onto $F$ or $P$ onto the line is ignored: there would be no triangle. Shrinking the line $AB$ to almost nothing is refused too.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'thales-theorem': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'C slides round the circle, A sets the radius, O moves the circle; the hollow point B stays opposite A', pos: { top: '96px', left: 'calc(25% + 30px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: α, β and the angle at C, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The centre and the radii', desc: 'O with OA, OB, OC marked equal: the three ticks', pos: { top: '206px', left: 'calc(25% + 24px)' } },
            { n: 2, label: 'The angle at C', desc: 'α + β, highlighted at the last step: the right angle in the semicircle', pos: { top: '100px', left: 'calc(25% + 56px)' } },
            { n: 3, label: 'The angles at A and B', desc: 'α and β, the same two angles that make up the angle at C', pos: { top: '204px', left: 'calc(25% - 108px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Isosceles base angles (twice), Triangle angle sum, Halving', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the circle and the point on it are shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$C$', 'solid dot', 'slides round the circle; the triangle, the marked angles and the readout follow'],
          ['$A$', 'solid dot', 'sets the radius: the circle grows or shrinks about $O$, and $B$ moves to stay opposite'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['$B$', 'hollow dot', 'cannot be dragged: it is the other end of the diameter through $A$'],
          ['$C$ onto $A$ or $B$', '—', 'refused: there would be no triangle'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $A$, $B$, $C$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $\\alpha$, $\\beta$ and the angle at $C$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Isosceles base angles**, **Triangle angle sum**, **Halving**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses equal radii, the isosceles theorem and the angle sum, never the sizes, which is why the angle at $C$ is $90°$ wherever $C$ sits.' },
        { title: 'C stays on the circle', content: 'The drag of $C$ is projected onto the circle, so $C$ cannot leave it; $B$ is always the point opposite $A$.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put $C$ onto $A$ or $B$, or shrink the circle to almost nothing, is ignored.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'vertical-angles': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A and C turn their lines about O, O moves the crossing; the hollow points B and D are the far ends of the lines and follow', pos: { top: '248px', left: 'calc(25% - 156px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the four angles in their two pairs, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original lines', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The crossing O', desc: 'the shared vertex of the four angles', pos: { top: '208px', left: 'calc(25% + 18px)' } },
            { n: 2, label: 'The first pair α, α′', desc: 'opposite each other across O, equal', pos: { top: '160px', left: 'calc(25% - 54px)' } },
            { n: 3, label: 'The second pair β, β′', desc: 'highlighted at the last step, equal by the same argument', pos: { top: '232px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Straight angle (twice), Equal sums, Same argument', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the two lines are turned by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $C$', 'solid dot', 'turns that line about $O$; the four angles and the readout follow'],
          ['$O$', 'solid dot', 'moves the crossing, with both lines'],
          ['$B$, $D$', 'hollow dot', 'cannot be dragged: they are the far ends of the lines through $O$'],
          ['$C$ onto the line $AB$', '—', 'refused: the two lines would coincide and there would be no crossing'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original lines' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $O$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the four angles, paired. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Straight angle**, **Equal sums**, **Same argument**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only the straight angle along each line, which is why the pairs are equal at every crossing you make.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would lay one line on top of the other is ignored: there would be no crossing.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the lines to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'parallel-lines': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'E and F tilt the transversal, A and B turn the lines, C slides the second line; the hollow points D, P, Q are constructed and follow', pos: { top: '84px', left: 'calc(25% - 48px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: α, α′ and β + α′, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original lines', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The parallel lines', desc: 'AB and CD, with one arrow mark in the middle of each: the lines are parallel, the one assumption of the theorem', pos: { top: '236px', left: 'calc(25% - 150px)' } },
            { n: 2, label: 'The angles at P', desc: 'α above right, its vertical angle below left, and β below right', pos: { top: '136px', left: 'calc(25% + 12px)' } },
            { n: 3, label: 'The angle at Q', desc: 'α′: corresponding to α, alternate to its vertical angle, co-interior with β', pos: { top: '232px', left: 'calc(25% + 48px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Parallel postulate, Vertical angles, Straight angle, Summary', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the lines and the transversal are moved by dragging, and the two lines stay parallel.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$E$, $F$', 'solid dot', 'tilts the transversal; $P$, $Q$ and all the angles follow'],
          ['$A$, $B$', 'solid dot', 'turns or moves the first line; the second line turns with it to stay parallel'],
          ['$C$', 'solid dot', 'slides the second line'],
          ['$D$, $P$, $Q$', 'hollow dot', 'cannot be dragged: $D$ keeps the second line parallel, $P$ and $Q$ are the crossings'],
          ['the transversal off a line, or almost parallel to it', '—', 'refused: both crossings must exist'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original lines' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $\\alpha$, $\\alpha\'$ and the sum $\\beta + \\alpha\'$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Parallel postulate**, **Vertical angles**, **Straight angle**, **Summary**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'One axiom, two theorems', content: 'The corresponding-angles step is the parallel postulate, taken as an axiom; the other two steps use the vertical angles theorem and the straight angle, both proved elsewhere on this site.' },
        { title: 'The lines stay parallel', content: 'The second line is built to keep the direction of the first, so no drag can make them cross; the figure always satisfies the assumption of the theorem.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would take the transversal off either line, or make it almost parallel to them, is ignored: the crossings $P$ and $Q$ must exist.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'polygon-angle-sum': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'The vertices', desc: 'all five can be dragged, as long as the pentagon stays convex', pos: { top: '96px', left: 'calc(25% - 10px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the sum of the five angles, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original pentagon', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The diagonals', desc: 'AC and AD from the vertex A, inside the convex pentagon', pos: { top: '190px', left: 'calc(25% - 34px)' } },
            { n: 2, label: 'The three triangles', desc: 'ABC, ACD, ADE in three colours: 180° each', pos: { top: '222px', left: 'calc(25% + 2px)' } },
            { n: 3, label: 'The angle at A', desc: 'three triangle angles side by side make α; two make γ and δ, one makes β and ε', pos: { top: '92px', left: 'calc(25% + 18px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Triangle angle sum, Angles fit together, Generalise', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the pentagon is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$ to $E$', 'solid dot', 'moves the vertex; the diagonals, the three triangles, the angle marks and the readout follow'],
          ['a vertex that would make the pentagon non-convex', '—', 'refused: the cutting from one vertex needs a convex figure'],
          ['a vertex onto a diagonal', '—', 'refused: one of the three triangles would be flattened'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original pentagon' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the vertex names $A$ to $E$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the sum of the five interior angles. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Triangle angle sum**, **Angles fit together**, **Generalise**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument counts triangles and regroups their angles, never measures them, which is why the sum is $540°$ for every convex pentagon you make.' },
        { title: 'The pentagon stays convex', content: 'A drag that would push an interior angle to $180°$ or beyond is refused, as is one that flattens any of the three triangles of the cut.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the pentagon to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'inscribed-angle': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'B and C slide round the circle, A sets the radius, O moves the circle; the hollow point D is the far end of the diameter through C', pos: { top: '78px', left: 'calc(25% - 66px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle at O against twice the angle at C, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The central angle', desc: 'at O, in two parts 2α and 2β on either side of the diameter', pos: { top: '210px', left: 'calc(25% + 50px)' } },
            { n: 2, label: 'The inscribed angle', desc: 'at C, in two parts α and β; each part at O is twice the matching part at C', pos: { top: '122px', left: 'calc(25% + 10px)' } },
            { n: 3, label: 'The diameter CD', desc: 'through the centre to the hollow point D; the line that splits both angles', pos: { top: '296px', left: 'calc(25% + 62px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Isosceles base angles, Exterior angle theorem, Same argument, Adding the parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the circle and the three points on it are shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$B$, $C$', 'solid dot', 'slides round the circle; the diameter, the angle marks and the readout follow'],
          ['$A$', 'solid dot', 'sets the radius: the circle grows or shrinks about $O$, with $B$ and $C$ staying at their places on it'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['$D$', 'hollow dot', 'cannot be dragged: it is the far end of the diameter through $C$'],
          ['$C$ past the diameter through $A$ or $B$', '—', 'refused: the centre would leave the inscribed angle, the case this proof does not cover'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the central angle and the inscribed angle. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Isosceles base angles**, **Exterior angle theorem**, **Same argument**, **Adding the parts**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses equal radii, the isosceles theorem and the exterior angle theorem, never the sizes, which is why the ratio is exactly two wherever the points sit.' },
        { title: 'One case at a time', content: 'The player keeps the centre inside the inscribed angle, the case the proof covers; drags that would move it onto a side or outside are refused. The other cases are explained in Why It Holds.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'pythagorean-theorem': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'X slides along the bottom side and sets a and b; P and Q move or turn the square; the hollow points follow', pos: { top: '300px', left: 'calc(25% - 5px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: a² + b² and c² in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The inner square', desc: 'XYZW, four sides c and four right angles: area c²', pos: { top: '208px', left: 'calc(25% + 8px)' } },
            { n: 2, label: 'The four triangles', desc: 'one in each corner, legs a and b, all congruent to the given one: area ab/2 each', pos: { top: '269px', left: 'calc(25% - 75px)' } },
            { n: 3, label: 'The big square', desc: 'PQRS, side a + b: its area (a + b)² is counted twice', pos: { top: '98px', left: 'calc(25% + 125px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, SAS congruence, Angle sum, Area two ways, Algebra', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by sliding one point, and the square can be moved.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$X$', 'solid dot', 'slides along the bottom side: $a$ grows as $b$ shrinks; the four triangles and the inner square follow'],
          ['$P$, $Q$', 'solid dot', 'move or turn the whole square; the proportions and the equation are unchanged'],
          ['$R$, $S$, $Y$, $Z$, $W$', 'hollow dot', 'cannot be dragged: $R$ and $S$ complete the square, $Y$, $Z$, $W$ repeat the cut $X$ makes'],
          ['$X$ near a corner', '—', 'refused: $a$ or $b$ would become too small to see'],
          ['a corner out of the frame', '—', 'refused: the square must stay inside the canvas'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $P$, $Q$, $R$, $S$, $X$, $Y$, $Z$, $W$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $a^2 + b^2$ and $c^2$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **SAS congruence**, **Angle sum**, **Area two ways**, **Algebra**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses congruence, the angle sum and areas counted two ways, never the numbers, which is why the equation holds for every shape of the triangle.' },
        { title: 'The square stays in the frame', content: 'A drag of P or Q that would carry a corner of the square out of the canvas, or make the square too small, is refused; so is a drag of X too close to a corner.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'cyclic-quadrilateral': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'B, C and D slide round the circle, A sets the radius, O moves the circle', pos: { top: '94px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the two sums of opposite angles, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The angles at A and C', desc: 'lit at the last step: δ + α and β + γ, all four letters once', pos: { top: '86px', left: 'calc(25% - 67px)' } },
            { n: 2, label: 'The four radii', desc: 'equal, one tick each; the apex of every isosceles triangle is O', pos: { top: '168px', left: 'calc(25% + 31px)' } },
            { n: 3, label: 'The other pair', desc: 'α + β at B and γ + δ at D, the same four letters again', pos: { top: '112px', left: 'calc(25% + 108px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Isosceles base angles, Adding the parts, Polygon angle sum, Adding the parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the circle and the four vertices on it are shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$B$, $C$, $D$', 'solid dot', 'slides round the circle; the radii, the angle marks and the readout follow'],
          ['$A$', 'solid dot', 'sets the radius: the circle grows or shrinks about $O$, with the other vertices staying at their places on it'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['a vertex past its neighbour', '—', 'refused: the quadrilateral would cross itself'],
          ['the centre outside $ABCD$', '—', 'refused: the case this proof does not cover'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $\\angle A + \\angle C$ and $\\angle B + \\angle D$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Isosceles base angles**, **Adding the parts**, **Polygon angle sum**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses equal radii, the isosceles theorem and the angle sum, never the sizes, which is why both sums are exactly 180° wherever the vertices sit.' },
        { title: 'One case at a time', content: 'The player keeps the centre inside the quadrilateral, the case the proof covers; drags that would move it outside, or make the quadrilateral cross itself, are refused. The general case is covered by the second proof in Why It Holds.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'tangent-radius': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes the angle φ beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'T moves the point of contact, O the circle; G, which tilts the supposed line, appears at step 2', pos: { top: '80px', left: 'calc(25% + 14px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle φ, and whether the supposed line meets the circle once or twice', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The right angle at T', desc: 'the mark that appears at the last step: the tangent ℓ is perpendicular to OT', pos: { top: '84px', left: 'calc(25% - 46px)' } },
            { n: 2, label: 'The supposed line ℓ′', desc: 'dashed, through T and G, with the second crossing T′ on the circle', pos: { top: '170px', left: 'calc(25% + 108px)' } },
            { n: 3, label: 'The two right triangles', desc: 'OFT and OFT′, congruent by SAS, so OT′ = OT = r', pos: { top: '150px', left: 'calc(25% + 35px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Supposition, Construction, SAS congruence, Contradiction, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the circle, the point of contact and the tilt of the supposed line are shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$G$', 'solid dot', 'tilts the supposed line $\\ell\'$ about $T$: the angle $\\varphi$, the foot $F$ and the mirror point $T\'$ follow'],
          ['$T$', 'solid dot', 'moves the point of contact round the centre and sets the radius; the tangent turns with it'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['$F$, $T\'$', 'hollow dot', 'cannot be dragged: $F$ is the foot of the perpendicular from $O$, $T\'$ the mirror of $T$ across it'],
          ['$G$ on the line $OT$, or on top of $T$', '—', 'refused: the supposed line would not be defined'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $T$, $G$, $F$, $T\'$' },
          { control: '**Measures**', description: 'write the angle $\\varphi$ in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle $\\varphi$ between $OT$ and the supposed line, and says whether that line meets the circle once or twice. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Supposition**, **Construction**, **SAS congruence**, **Contradiction**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the perpendicular, a reflection and congruence, never the size of φ, which is why it refutes every tilt at once.' },
        { title: 'The tangent is drawn from the start', content: 'The solid line ℓ is the real tangent, perpendicular to OT by construction; the proof is about the dashed line ℓ′. At 90° the two coincide, and the readout reports one common point.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'two-tangents': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'P moves the outside point, O the circle; the hollow points of contact A and B follow', pos: { top: '176px', left: 'calc(25% + 150px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PA and PB in the frame\'s units, with OP and r, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The two tangents', desc: 'PA and PB, two ticks each at the last step', pos: { top: '150px', left: 'calc(25% + 60px)' } },
            { n: 2, label: 'The two right triangles', desc: 'OAP and OBP, sharing the hypotenuse OP, each with a radius for a leg', pos: { top: '230px', left: 'calc(25% + 20px)' } },
            { n: 3, label: 'The right angles', desc: 'at the points of contact, by the tangent-radius theorem', pos: { top: '150px', left: 'calc(25% - 40px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Tangent ⟂ radius, Pythagorean theorem, Equal radii, Positive roots', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the outside point and the circle are moved by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$P$', 'solid dot', 'moves the outside point: the two tangents swing round the circle and change length together'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['$A$, $B$', 'hollow dot', 'cannot be dragged: they are the points of contact, computed from $P$ and the circle'],
          ['$P$ onto or into the circle', '—', 'refused: there would be no tangents from $P$'],
          ['$P$ or $O$ out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $P$, $A$, $B$' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $PA$ and $PB$, with $OP$ and $r$ for comparison. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Tangent ⟂ radius**, **Pythagorean theorem**, **Equal radii**, **Positive roots**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the tangent-radius theorem, Pythagoras and the equal radii, never the numbers, which is why PA = PB wherever P sits.' },
        { title: 'The points of contact are computed', content: 'A and B are found from P and the circle by the player; they are not dragged. They are always the two points where the circle on diameter OP meets the given circle.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'chord-bisector': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A and B slide round the circle, O moves the circle; the hollow foot M follows', pos: { top: '118px', left: 'calc(25% + 88px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: AM and MB in the frame\'s units, with OM, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The two halves', desc: 'AM and MB, two ticks each at the last step', pos: { top: '130px', left: 'calc(25% - 37px)' } },
            { n: 2, label: 'The two right triangles', desc: 'OMA and OMB, equal hypotenuses OA and OB, common leg OM', pos: { top: '150px', left: 'calc(25% + 30px)' } },
            { n: 3, label: 'The right angle at M', desc: 'the perpendicular from the centre, whose foot is the midpoint', pos: { top: '112px', left: 'calc(25% + 23px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Right triangles, Pythagorean theorem, Equal radii, Positive roots', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the chord and the circle are shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$', 'solid dot', 'slides round the circle: the chord tilts and changes length, the foot $M$ and the readout follow'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['$M$', 'hollow dot', 'cannot be dragged: it is the foot of the perpendicular from $O$ to the chord'],
          ['the chord through the centre, or shrunk to a point', '—', 'refused: the two triangles would collapse'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $A$, $B$, $M$' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $AM$ and $MB$, with $OM$ for comparison. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Right triangles**, **Pythagorean theorem**, **Equal radii**, **Positive roots**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the right angles, Pythagoras and the equal radii, never the numbers, which is why M is the midpoint for every chord.' },
        { title: 'The foot is computed', content: 'M is the foot of the perpendicular from O, found by the player from O, A and B; it is not dragged and cannot leave the chord.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'parallelogram-sides': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and D move freely; the hollow fourth vertex C follows to keep the figure a parallelogram', pos: { top: '100px', left: 'calc(25% - 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the four side lengths in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The diagonal BD', desc: 'the common side of the two triangles, and a transversal of both pairs of parallels', pos: { top: '190px', left: 'calc(25% + 10px)' } },
            { n: 2, label: 'Alternate angles', desc: 'α at B and D on the parallels AB, DC; β at D and B on the parallels AD, BC', pos: { top: '250px', left: 'calc(25% + 63px)' } },
            { n: 3, label: 'The chevrons', desc: 'one for the pair AB ∥ DC, two for the pair AD ∥ BC', pos: { top: '186px', left: 'calc(25% + 128px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Alternate angles, Alternate angles, ASA congruence, Corresponding parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; three vertices are dragged and the fourth follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$D$', 'solid dot', 'shears or stretches the parallelogram: sideways changes the angles, up or down the height'],
          ['$A$, $B$', 'solid dot', 'move the ends of the base; the whole figure follows'],
          ['$C$', 'hollow dot', 'cannot be dragged: it is $D$ plus the vector from $A$ to $B$, the vertex that makes $ABCD$ a parallelogram'],
          ['$D$ onto the line $AB$', '—', 'refused: the parallelogram would be flat'],
          ['a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the four side lengths, opposite sides side by side. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Alternate angles**, **ASA congruence**, **Corresponding parts**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the parallels, alternate angles and congruence, never the numbers, which is why the sides stay paired for every shape.' },
        { title: 'The fourth vertex is computed', content: 'C is found by the player as D plus the vector from A to B; that is what keeps both pairs of sides parallel while you drag.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'parallelogram-diagonals': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and D move freely; the hollow C keeps the figure a parallelogram and the hollow M is where the diagonals cross', pos: { top: '100px', left: 'calc(25% - 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the four half-diagonals in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The crossing point M', desc: 'the midpoint of both diagonals: one tick on each half of AC, two on each half of BD', pos: { top: '186px', left: 'calc(25% + 10px)' } },
            { n: 2, label: 'The two triangles', desc: 'ABM below and CDM above, congruent by ASA on the equal bases AB and CD', pos: { top: '262px', left: 'calc(25% - 10px)' } },
            { n: 3, label: 'Alternate angles', desc: 'α at A and C on the diagonal AC, β at B and D on the diagonal BD', pos: { top: '250px', left: 'calc(25% + 63px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Opposite sides, Alternate angles, Alternate angles, ASA congruence, Corresponding parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; three vertices are dragged and the rest follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$D$', 'solid dot', 'shears or stretches the parallelogram: the diagonals change length and tilt, $M$ slides with them'],
          ['$A$, $B$', 'solid dot', 'move the ends of the base; the whole figure follows'],
          ['$C$', 'hollow dot', 'cannot be dragged: it is $D$ plus the vector from $A$ to $B$, the vertex that makes $ABCD$ a parallelogram'],
          ['$M$', 'hollow dot', 'cannot be dragged: it is the crossing point of the diagonals'],
          ['$D$ onto the line $AB$, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $M$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two halves of each diagonal side by side. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Opposite sides**, **Alternate angles**, **ASA congruence**, **Corresponding parts**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the parallels, equal opposite sides and congruence, never the numbers, which is why M halves both diagonals for every shape.' },
        { title: 'Two points are computed', content: 'C is D plus the vector from A to B, and M is where the lines AC and BD cross; neither is dragged.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'rhombus-diagonals': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'D swings round A on a circle through B, which keeps the four sides equal; A and B move the figure; the hollow C and M follow', pos: { top: '100px', left: 'calc(25% - 40px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the two angles at M, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The right angle at M', desc: 'the mark that appears at the last step: the diagonals are perpendicular', pos: { top: '160px', left: 'calc(25% + 20px)' } },
            { n: 2, label: 'The two triangles', desc: 'ABM and ADM, congruent by SSS; their angles at M are the linear pair', pos: { top: '240px', left: 'calc(25% - 60px)' } },
            { n: 3, label: 'The half-diagonals', desc: 'BM = MD, two ticks each, from the parallelogram theorem', pos: { top: '140px', left: 'calc(25% + 21px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Parallelogram diagonals, SSS congruence, Corresponding parts, Linear pair, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the rhombus is opened, closed and moved by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$D$', 'solid dot', 'swings round $A$ on the circle through $B$: the rhombus opens or closes, one diagonal grows as the other shrinks'],
          ['$A$, $B$', 'solid dot', 'move the figure or change the side; $D$ keeps its angle at $A$'],
          ['$C$', 'hollow dot', 'cannot be dragged: it is $D$ plus the vector from $A$ to $B$'],
          ['$M$', 'hollow dot', 'cannot be dragged: it is the crossing point of the diagonals'],
          ['$D$ onto the line $AB$, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $M$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two angles at $M$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Parallelogram diagonals**, **SSS congruence**, **Corresponding parts**, **Linear pair**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the parallelogram theorem, congruence and a straight angle, never the numbers, which is why the angle at M is exactly 90° for every rhombus.' },
        { title: 'The sides stay equal', content: 'D is kept on the circle about A through B, so AD = AB whatever you do; C is then placed so that the other two sides match. The player never shows a figure that is not a rhombus.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'rectangle-diagonals': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'D slides up and down the perpendicular at A, which keeps the angles right; A and B move the base; the hollow C follows', pos: { top: '100px', left: 'calc(25% - 110px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the two diagonals in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The equal diagonals', desc: 'AC and BD, two ticks each at the last step', pos: { top: '150px', left: 'calc(25% + 40px)' } },
            { n: 2, label: 'The two triangles', desc: 'DAB and CBA on the base AB, overlapping in the middle; congruent by SAS', pos: { top: '250px', left: 'calc(25% - 10px)' } },
            { n: 3, label: 'The right angles', desc: 'at A and at B, the included angles of the two triangles', pos: { top: '248px', left: 'calc(25% - 122px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Co-interior angles, Opposite sides, Construction, SAS congruence, Corresponding parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the height and the base are set by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$D$', 'solid dot', 'slides along the perpendicular to $AB$ at $A$: the rectangle gets taller or flatter'],
          ['$A$, $B$', 'solid dot', 'move the ends of the base, or turn the whole rectangle; $D$ keeps its height'],
          ['$C$', 'hollow dot', 'cannot be dragged: it is $D$ plus the vector from $A$ to $B$'],
          ['$D$ too close to $A$, or beyond the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two diagonals. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Co-interior angles**, **Opposite sides**, **Construction**, **SAS congruence**, **Corresponding parts**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the right angles, the parallelogram theorem and congruence, never the numbers, which is why the diagonals are equal for every rectangle.' },
        { title: 'The angles stay right', content: 'D is kept on the perpendicular to AB at A, and C is placed as D plus the vector from A to B; the player never shows a figure that is not a rectangle.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'midsegment': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow midpoints D, E and the construction point F follow', pos: { top: '84px', left: 'calc(25% - 12px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: DE and BC in the frame\'s units, with half of BC, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 8 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 8 of 8', mockupProps: { step: 7 }, callouts: [
            { n: 1, label: 'The midsegment DE', desc: 'parallel to BC (one chevron each) and half as long', pos: { top: '160px', left: 'calc(25% - 77px)' } },
            { n: 2, label: 'The extension to F', desc: 'DE doubled; CF = DB and CF ∥ DB make DBCF a parallelogram', pos: { top: '150px', left: 'calc(25% + 150px)' } },
            { n: 3, label: 'The two congruences', desc: 'ADE with CFE at the top, DBC with CFD across the diagonal DC', pos: { top: '255px', left: 'calc(25% + 3px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, SAS congruence, Alternate angles, Corresponding parts, Alternate angles, SAS congruence, Corresponding parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex of the triangle; the midpoints, the extension and the readout follow'],
          ['$D$, $E$', 'hollow dot', 'cannot be dragged: the midpoints of $AB$ and $AC$'],
          ['$F$', 'hollow dot', 'cannot be dragged: $DE$ extended past $E$ by its own length'],
          ['a flat triangle, or a point out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $E$, $F$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $DE$, $BC$ and half of $BC$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **SAS congruence**, **Alternate angles**, **Corresponding parts**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses midpoints, congruence and parallel lines, never the numbers, which is why DE is exactly half of BC for every triangle.' },
        { title: 'Eight steps', content: 'This proof is longer than most on these pages because it avoids similar triangles; the two congruences are the price of using only what the earlier pages proved.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'varignon': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'all four vertices A, B, C, D move freely; the hollow midpoints P, Q, R, S follow', pos: { top: '84px', left: 'calc(25% - 16px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the four sides of PQRS in opposite pairs, in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The inner parallelogram', desc: 'PQRS, lit at the last step; its sides are half the diagonals of ABCD', pos: { top: '190px', left: 'calc(25% - 10px)' } },
            { n: 2, label: 'The diagonals', desc: 'AC and BD, dashed; each is parallel to one pair of sides of PQRS', pos: { top: '152px', left: 'calc(25% + 103px)' } },
            { n: 3, label: 'The chevrons', desc: 'one for everything parallel to AC, two for everything parallel to BD', pos: { top: '270px', left: 'calc(25% + 40px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Midsegment theorem (three times), Definition', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the quadrilateral is shaped by dragging its four vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$, $D$', 'solid dot', 'moves a vertex of the outer quadrilateral; the midpoints, the inner parallelogram and the readout follow'],
          ['$P$, $Q$, $R$, $S$', 'hollow dot', 'cannot be dragged: the midpoints of the four sides'],
          ['a concave shape, or a vertex out of the frame', '—', 'refused (the theorem still holds there; the drawing does not)'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$ to $D$ and $P$ to $S$' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the four sides of $PQRS$, opposite sides side by side. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Midsegment theorem**, **Definition**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument is the midsegment theorem four times, never the numbers, which is why the inner figure is a parallelogram for every shape of the outer one.' },
        { title: 'Convex only in the drawing', content: 'The player refuses concave shapes so that the two triangles on each diagonal stay readable; the theorem itself holds for any four points.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'trapezoid-midsegment': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'C slides along the top base, A, B and D move freely; the hollow midpoints M, N and later K follow', pos: { top: '84px', left: 'calc(25% + 76px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: MN and half the sum of the bases, in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The midsegment MN', desc: 'through the midpoint K of the diagonal, parallel to the bases, half their sum', pos: { top: '172px', left: 'calc(25% - 100px)' } },
            { n: 2, label: 'The two triangles', desc: 'ACD above the diagonal with MK, ABC below it with KN', pos: { top: '246px', left: 'calc(25% + 40px)' } },
            { n: 3, label: 'The diagonal AC', desc: 'dashed, with its midpoint K marked by three ticks on each half', pos: { top: '160px', left: 'calc(25% + 13px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Midsegment theorem (twice), One parallel through a point, Adding the parts', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the trapezoid is reshaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$C$', 'solid dot', 'slides along the line through $D$ parallel to $AB$: the top base grows or shrinks'],
          ['$D$', 'solid dot', 'moves the top base up, down or sideways; $C$ keeps its distance from $D$'],
          ['$A$, $B$', 'solid dot', 'move the ends of the bottom base'],
          ['$M$, $N$, $K$', 'hollow dot', 'cannot be dragged: the midpoints of the legs and of the diagonal'],
          ['a flat figure, a vanishing top base, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $M$, $N$, $K$' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $MN$ and half the sum of the bases. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Midsegment theorem**, **One parallel through a point**, **Adding the parts**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument is the midsegment theorem twice and the parallel postulate, never the numbers, which is why MN is exactly the average of the bases for every trapezoid.' },
        { title: 'The bases stay parallel', content: 'C is kept on the line through D parallel to AB, so the figure is always a trapezoid; push C towards D and it approaches a triangle, where the theorem becomes the triangle midsegment theorem.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'centroid': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow midpoints D, E, the crossing point G and later P, Q, F follow', pos: { top: '76px', left: 'calc(25% + 10px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the ratios AG : GD and BG : GE, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 7 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 7 of 7', mockupProps: { step: 6 }, callouts: [
            { n: 1, label: 'The centroid G', desc: 'where all three medians meet, two thirds of the way down each', pos: { top: '196px', left: 'calc(25% + 14px)' } },
            { n: 2, label: 'The parallelogram PQDE', desc: 'its diagonals PD and QE lie along two medians and bisect each other at G', pos: { top: '225px', left: 'calc(25% - 1px)' } },
            { n: 3, label: 'The third median CF', desc: 'added at the last step; it passes through G as the argument predicts', pos: { top: '236px', left: 'calc(25% + 70px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Midsegment theorem (twice), Parallelogram diagonals, Adding the parts, Same argument', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the midpoints, the medians, $G$ and the construction points follow'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: the midpoints of the sides'],
          ['$G$, $P$, $Q$', 'hollow dot', 'cannot be dragged: the crossing of two medians and the midpoints of $AG$, $BG$'],
          ['a flat triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two ratios in which $G$ cuts the medians $AD$ and $BE$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Midsegment theorem**, **Parallelogram diagonals**, **Adding the parts**, **Same argument**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses midsegments and a parallelogram, never the numbers, which is why the ratio is exactly 2 : 1 for every triangle.' },
        { title: 'Ticks mean thirds', content: 'The ticks on AD and BE mark the three equal pieces of each median; they are not the usual midpoint marks, which this page leaves off to keep the figure readable.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'angle-bisector': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes the two angles α beside their arcs', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow foot D of the bisector, and later E, F, H, follow', pos: { top: '76px', left: 'calc(25% + 16px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the ratios BD / DC and AB / AC, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The two triangles', desc: 'ABD and ACD, cut off by the bisector; their areas are compared two ways', pos: { top: '230px', left: 'calc(25% - 70px)' } },
            { n: 2, label: 'The equal heights', desc: 'DE = DF, the distances from D to the two sides of the angle', pos: { top: '250px', left: 'calc(25% + 43px)' } },
            { n: 3, label: 'The shared height AH', desc: 'dashed, from A to BC: the height of both triangles on the bases BD and DC', pos: { top: '196px', left: 'calc(25% - 40px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, AAS congruence, Area = ½ base · height (twice), Same ratio', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the bisector, its foot $D$, the perpendiculars and the readout follow'],
          ['$D$', 'hollow dot', 'cannot be dragged: where the bisector of the angle at $A$ meets $BC$'],
          ['$E$, $F$, $H$', 'hollow dot', 'cannot be dragged: the feet of the perpendiculars from $D$ to $AB$ and $AC$, and from $A$ to $BC$'],
          ['an obtuse angle at $B$ or $C$', '—', 'refused: a perpendicular from $D$ would miss the side and land on its extension'],
          ['a flat triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'write the two angles $\\alpha$ in degrees beside their arcs' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two ratios $BD / DC$ and $AB / AC$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **AAS congruence**, **Area = ½ base · height**, **Same ratio**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses congruence and the area formula, never the numbers, which is why the two ratios agree for every triangle.' },
        { title: 'Acute angles at the base', content: 'The player keeps the angles at B and C acute so that the perpendiculars from D land on the sides; the theorem itself has no such restriction.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'circumcentre': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow midpoints P, Q, later R, and the crossing point O follow', pos: { top: '74px', left: 'calc(25% + 16px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the distances OA, OB, OC in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The circumcentre O', desc: 'where the three perpendicular bisectors meet, equidistant from A, B, C', pos: { top: '228px', left: 'calc(25% + 20px)' } },
            { n: 2, label: 'The circumcircle', desc: 'centre O, radius OA; it passes through all three vertices', pos: { top: '84px', left: 'calc(25% + 90px)' } },
            { n: 3, label: 'The third bisector OR', desc: 'the median of the isosceles triangle OAC, perpendicular to AC', pos: { top: '210px', left: 'calc(25% + 28px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, SAS congruence (twice), Equal to the same, Isosceles median, Definition of a circle', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the midpoints, the bisectors, $O$ and the circle follow'],
          ['$P$, $Q$, $R$', 'hollow dot', 'cannot be dragged: the midpoints of the sides'],
          ['$O$', 'hollow dot', 'cannot be dragged: where the perpendicular bisectors cross'],
          ['a flat triangle, or a vertex or $O$ out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three distances from $O$ to the vertices. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **SAS congruence**, **Equal to the same**, **Isosceles median**, **Definition of a circle**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses congruence and the definition of a circle, never the numbers, which is why the three distances agree for every triangle.' },
        { title: 'O can leave the triangle', content: 'For an obtuse triangle the circumcentre lies outside; the player allows that as long as O stays in the frame, and refuses flatter triangles that would send it off the canvas.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'incentre': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked half-angle beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow crossing point I and, later, the feet D, E, F follow', pos: { top: '74px', left: 'calc(25% + 16px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the distances ID, IE, IF in the frame\'s units, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The incentre I', desc: 'where the three angle bisectors meet, equidistant from the three sides', pos: { top: '186px', left: 'calc(25% + 14px)' } },
            { n: 2, label: 'The incircle', desc: 'centre I, radius ID; it touches each side at the foot of a perpendicular', pos: { top: '250px', left: 'calc(25% - 50px)' } },
            { n: 3, label: 'The third bisector CI', desc: 'through I by the converse: equal distances to CB and CA put I on the bisector at C', pos: { top: '222px', left: 'calc(25% + 53px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, AAS congruence (twice), Pythagoras + SSS, Tangent ⟂ radius', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the bisectors, $I$, the feet and the circle follow'],
          ['$I$', 'hollow dot', 'cannot be dragged: where the angle bisectors cross'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: the feet of the perpendiculars from $I$ to the sides'],
          ['a flat triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'write each marked half-angle in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three distances from $I$ to the sides. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **AAS congruence**, **Pythagoras + SSS**, **Tangent ⟂ radius**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses congruence and the tangent-radius theorem, never the numbers, which is why the three distances agree for every triangle.' },
        { title: 'I stays inside', content: 'The incentre lies inside every triangle, so the figure never needs the extra room the circumcentre page keeps for its centre.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'orthocentre': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow feet D, E, F, the crossing point H and the corners of the large triangle follow', pos: { top: '100px', left: 'calc(25% + 16px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle between CH and AB, which stays at 90° while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The orthocentre H', desc: 'where the three altitudes meet; the circumcentre of the large triangle', pos: { top: '160px', left: 'calc(25% + 11px)' } },
            { n: 2, label: 'The large triangle', desc: 'A′B′C′, dashed, with A, B, C as the midpoints of its sides', pos: { top: '90px', left: 'calc(25% - 90px)' } },
            { n: 3, label: 'The third altitude CF', desc: 'added at the last step: the perpendicular bisector of A′B′, through H', pos: { top: '188px', left: 'calc(25% + 38px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Parallelogram sides, Perpendicular to parallels, Circumcentre, Same line', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the altitudes, $H$ and the large triangle follow'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: the feet of the altitudes'],
          ['$H$', 'hollow dot', 'cannot be dragged: where the altitudes cross'],
          ["$A'$, $B'$, $C'$", 'hollow dot', 'cannot be dragged: the corners of the large triangle, each the sum of two vertices minus the third'],
          ['an obtuse angle, or a corner of the large triangle out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle between $CH$ and $AB$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Parallelogram sides**, **Perpendicular to parallels**, **Circumcentre**, **Same line**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses parallelograms and the circumcentre theorem, never the numbers, which is why the three altitudes meet for every triangle.' },
        { title: 'Acute triangles only in the drawing', content: 'The player keeps all three angles acute so that the feet lie on the sides and H stays inside; the theorem holds for right and obtuse triangles too, with H at the right-angle vertex or outside.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'euler-line': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow centres O, G, H and every construction point follow', pos: { top: '80px', left: 'calc(25% + 30px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the ratio HG / GO and the angle HGO, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The Euler line', desc: 'dashed, through H, G and O, with G a third of the way from O to H', pos: { top: '205px', left: 'calc(25% + 38px)' } },
            { n: 2, label: 'The parallelogram BHCA′', desc: 'two sides are altitudes, two are chords to the antipode A′', pos: { top: '250px', left: 'calc(25% - 30px)' } },
            { n: 3, label: 'The triangle AHA′', desc: 'with its medians AD and HO meeting at G', pos: { top: '222px', left: 'calc(25% - 2px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Thales + parallels, Parallelogram diagonals, Medians and centroid, Same point', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the three centres, the circle and the construction follow'],
          ['$O$, $G$, $H$', 'hollow dot', 'cannot be dragged: the circumcentre, centroid and orthocentre, computed from the vertices'],
          ["$A'$, $D$ and the feet", 'hollow dot', 'cannot be dragged: the antipode of $A$, the midpoint of $BC$, and the feet of the altitudes'],
          ['an obtuse or nearly equilateral triangle, or the circle out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the ratio $HG / GO$ and the angle $HGO$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Thales + parallels**, **Parallelogram diagonals**, **Medians and centroid**, **Same point**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument assembles Thales, the parallelogram pages and the centroid page, never the numbers, which is why the ratio is exactly 2 for every triangle.' },
        { title: 'Three centres, one model', content: 'The player computes O from two perpendicular bisectors, G from two medians and H from two altitudes, exactly as their own pages do, and then runs this proof on the result.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'nine-point-circle': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the nine hollow points, N, O and H all follow', pos: { top: '76px', left: 'calc(25% + 30px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the smallest and largest distance from N to the nine points, and half the circumradius', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 7 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 7 of 7', mockupProps: { step: 6 }, callouts: [
            { n: 1, label: 'The nine-point circle', desc: 'through the three midpoints, the three feet and the three midpoints towards H', pos: { top: '155px', left: 'calc(25% + 54px)' } },
            { n: 2, label: 'The centre N', desc: 'the midpoint of OH, where the diagonals of the two rectangles cross', pos: { top: '215px', left: 'calc(25% - 12px)' } },
            { n: 3, label: 'The two rectangles', desc: 'EFQR and DEPQ, sharing the diagonal EQ', pos: { top: '220px', left: 'calc(25% - 22px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Midsegments, Rectangle diagonals, Midsegments, Converse of Thales, Parallelogram diagonals, Parallelogram sides', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves a vertex; the nine points, the circle, $N$, $O$ and $H$ follow'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: the midpoints of the sides'],
          ['$H_a$, $H_b$, $H_c$', 'hollow dot', 'cannot be dragged: the feet of the altitudes'],
          ['$P$, $Q$, $R$', 'hollow dot', 'cannot be dragged: the midpoints of $AH$, $BH$, $CH$'],
          ['$N$, $O$, $H$', 'hollow dot', 'cannot be dragged: the nine-point centre, the circumcentre and the orthocentre'],
          ['an obtuse triangle, or a centre out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the range of the nine distances from $N$ and half the circumradius. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Midsegments**, **Rectangle diagonals**, **Converse of Thales**, **Parallelogram diagonals**, **Parallelogram sides**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument assembles midsegments, rectangles, Thales and parallelograms, never the numbers, which is why the nine distances agree for every triangle.' },
        { title: 'Many hollow points', content: 'This page computes more derived points than any other: nine on the circle plus N, O and H. All of them come from the three vertices.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'intersecting-chords': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B, C, D slide round the circle and O moves it; the hollow crossing point P and the feet follow', pos: { top: '80px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PA·PB, PC·PD and R² − OP², live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The crossing point P', desc: 'the two products PA·PB and PC·PD both equal R² − OP², its power', pos: { top: '200px', left: 'calc(25% + 41px)' } },
            { n: 2, label: 'The right triangles on AB', desc: 'OMA and OMP, with M the midpoint of the chord', pos: { top: '175px', left: 'calc(25% - 32px)' } },
            { n: 3, label: 'The right triangles on CD', desc: 'ONC and ONP, with N the midpoint of the other chord', pos: { top: '162px', left: 'calc(25% + 41px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Perpendicular bisects the chord, Difference of squares, Pythagorean theorem, Same argument, Equal to the same', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the chords are moved by sliding their ends.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$, $D$', 'solid dot', 'slides round the circle: its chord swings, $P$ moves, the products change together'],
          ['$O$', 'solid dot', 'moves the whole circle'],
          ['$P$', 'hollow dot', 'cannot be dragged: where the two chords cross'],
          ['$M$, $N$', 'hollow dot', 'cannot be dragged: the feet of the perpendiculars from $O$, the midpoints of the chords'],
          ['chords that no longer cross, or $P$ too near $O$, $M$ or $N$', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names' },
          { control: '**Measures**', description: 'no angle is marked with an arc on this page, so the box changes nothing' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two products and $R^2 - OP^2$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Perpendicular bisects the chord**, **Difference of squares**, **Pythagorean theorem**, **Same argument**, **Equal to the same**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the chord bisector theorem, a line of algebra and Pythagoras, never the numbers, which is why the products agree for every pair of chords.' },
        { title: 'Inside the circle only', content: 'The player keeps the crossing point inside the circle; the outside case, with secants and tangents, is described under Consequences and has the same proof with P beyond the midpoint.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'sss-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow apex D of the copy is placed with AD = AC and BD = BC', pos: { top: '80px', left: 'calc(25% - 14px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the apex angles at C and at D, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The two triangles', desc: 'ABC above and ABD below the common side, both lit at the last step', pos: { top: '150px', left: 'calc(25% - 70px)' } },
            { n: 2, label: 'The angles at C', desc: 'α and β, the two pieces made by CD; their sum is the apex angle', pos: { top: '96px', left: 'calc(25% + 10px)' } },
            { n: 3, label: 'The angles at D', desc: 'the same α and β, from the two isosceles triangles', pos: { top: '280px', left: 'calc(25% + 10px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Construction, Isosceles base angles (twice), Adding the parts, SAS congruence', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the upper triangle is shaped by dragging and the copy follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$C$', 'solid dot', 'reshapes the upper triangle; $D$ moves so that $AD = AC$ and $BD = BC$ stay true'],
          ['$A$, $B$', 'solid dot', 'move the ends of the common side; both triangles follow'],
          ['$D$', 'hollow dot', 'cannot be dragged: the apex of the copy, fixed by the three side lengths'],
          ['an obtuse angle at $A$ or $B$, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the two apex angles. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Construction**, **Isosceles base angles**, **Adding the parts**, **SAS congruence**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the isosceles theorem and SAS, never the numbers, which is why the apex angles agree for every shape.' },
        { title: 'The copy is a reflection', content: 'Placing the second triangle with AD = AC and BD = BC on the far side of AB puts D at the mirror image of C in the line AB; that is what the theorem proves, and what the player draws from the start.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'asa-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; from step 2 the point E slides along AC', pos: { top: '76px', left: 'calc(25% - 14px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle ABC and, from step 2, the angle ABE, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The point E', desc: 'on AC with AE = A′C′ (two ticks); slide it along the side', pos: { top: '150px', left: 'calc(25% - 110px)' } },
            { n: 2, label: 'The triangle ABE', desc: 'shaded: congruent to the second triangle by SAS under the supposition', pos: { top: '220px', left: 'calc(25% - 40px)' } },
            { n: 3, label: 'The angles at B', desc: 'β, the given angle, and β′, the angle ABE: a part of it', pos: { top: '236px', left: 'calc(25% + 120px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Supposition, SAS congruence, A part of the whole, Contradiction, SAS congruence', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging and the point E slides along one side.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$E$', 'solid dot on $AC$', 'slides along $AC$ between $A$ and $C$; the shaded triangle $ABE$ and its angle at $B$ follow'],
          ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $E$ keeps its place as a fraction of the way along $AC$'],
          ['$E$ at or beyond $A$ or $C$, a flattened triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $E$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle $ABC$ and the angle $ABE$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Supposition**, **SAS congruence**, **A part of the whole**, **Contradiction**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses SAS and the fact that a part is less than its whole, never the numbers.' },
        { title: 'The second triangle is not drawn', content: 'Everything the proof needs from A′B′C′ is its angles, equal to those of ABC, and its side A′C′, carried by the point E. Drawing it would add nothing the argument uses.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state, including the position of E. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'aas-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C all move freely', pos: { top: '76px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle at C beside 180° minus the angles at A and B, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The given side', desc: 'BC, one tick: it touches the angle at B but not the angle at A', pos: { top: '170px', left: 'calc(25% + 100px)' } },
            { n: 2, label: 'The given angles', desc: 'α at A and β at B, the two angles the second triangle shares', pos: { top: '250px', left: 'calc(25% - 130px)' } },
            { n: 3, label: 'The third angle', desc: 'γ at C, found from the angle sum; it puts BC between two known angles', pos: { top: '112px', left: 'calc(25% - 10px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Triangle angle sum, Equal remainders, ASA congruence', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'reshapes the triangle; all three marked angles and the readout follow'],
          ['a flattened triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle at $C$ and the value $180°$ minus the angles at $A$ and $B$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Triangle angle sum**, **Equal remainders**, **ASA congruence**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the angle sum and ASA, never the numbers, which is why the third angle stays in step for every shape.' },
        { title: 'The second triangle is not drawn', content: 'Everything the proof needs from A′B′C′ is its two angles, equal to those of ABC, and its side B′C′ = BC. The argument runs entirely in the first triangle.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'kite-diagonals': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow vertex D is the mirror image of B in the axis AC', pos: { top: '150px', left: 'calc(25% - 150px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle at M and the two halves of BD, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The axis', desc: 'AC, joining the two vertices where the equal sides meet; it bisects the angles at A and C', pos: { top: '220px', left: 'calc(25% + 10px)' } },
            { n: 2, label: 'The crossing M', desc: 'the midpoint of BD, with the right-angle mark; the two angles φ are the linear pair', pos: { top: '150px', left: 'calc(25% + 40px)' } },
            { n: 3, label: 'The two halves', desc: 'BM and MD, three ticks each: corresponding sides of ABM and ADM', pos: { top: '150px', left: 'calc(25% - 130px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, SSS congruence, Corresponding parts, SAS congruence, Linear pair, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the kite is shaped by dragging three of its vertices and the fourth follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$B$', 'solid dot', 'swings about the axis; $D$ mirrors it, so $AB = AD$ and $CB = CD$ stay true'],
          ['$A$, $C$', 'solid dot', 'move the ends of the axis; $D$ is recomputed as the mirror of $B$'],
          ['$D$, $M$', 'hollow dot', 'cannot be dragged: the mirror of $B$, and the crossing of the diagonals'],
          ['a dart (foot of $B$ past an end of the axis), or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $M$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle at $M$ and the lengths $BM$ and $MD$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **SSS congruence**, **Corresponding parts**, **SAS congruence**, **Linear pair**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses two congruences and a linear pair, never the numbers, which is why the angle at M is 90° for every shape.' },
        { title: 'D is a reflection', content: 'Placing D as the mirror image of B in the axis is the same as requiring AD = AB and CD = CB; that is what the player draws from the start, and what the theorem then shows the diagonals to do.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'hl-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'B and C move freely, A slides along the perpendicular at C; the hollow vertex A′ is the mirror of A through C', pos: { top: '100px', left: 'calc(25% - 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angles at A and A′ and the legs CA and CA′, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The common leg', desc: 'BC, two ticks: the equal legs laid on each other, with a right angle on each side at C', pos: { top: '150px', left: 'calc(25% + 24px)' } },
            { n: 2, label: 'The hypotenuses', desc: 'AB and A′B, one tick each: the equal sides of the isosceles triangle ABA′', pos: { top: '160px', left: 'calc(25% - 90px)' } },
            { n: 3, label: 'The base angles', desc: 'α at A and at A′: equal, and the angles AAS needs', pos: { top: '236px', left: 'calc(25% + 120px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Straight angle, Isosceles base angles, AAS congruence, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the first triangle is shaped by dragging and the copy follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$', 'solid dot', 'slides along the perpendicular to $BC$ at $C$, changing the leg $CA$; $A\'$ mirrors it'],
          ['$B$, $C$', 'solid dot', 'move the common leg; the perpendicular at $C$ turns with it and $A$, $A\'$ follow'],
          ['$A\'$', 'hollow dot', 'cannot be dragged: the mirror image of $A$ through $C$'],
          ['a flattened triangle, a very short common leg, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $A\'$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angles at $A$ and $A\'$ and the legs $CA$ and $CA\'$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Straight angle**, **Isosceles base angles**, **AAS congruence**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses a straight angle, the isosceles theorem and AAS, never the numbers, which is why the angles at A and A′ agree for every shape.' },
        { title: 'The copy is a reflection', content: 'Placing the second triangle leg to leg with its far vertex across BC puts A′ at the mirror image of A through C; that is what the theorem proves, and what the player draws from the start.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'secant-tangent': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A slides round the near side of the circle, P and O move freely; the hollow points T and B are computed', pos: { top: '70px', left: 'calc(25% - 180px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PT² beside PA · PB, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The tangent triangle', desc: 'OTP, right-angled at T: PT² = OP² − R²', pos: { top: '150px', left: 'calc(25% + 0px)' } },
            { n: 2, label: 'The two right triangles', desc: 'OMP and OMA on the chord: PM² − AM² = OP² − R²', pos: { top: '150px', left: 'calc(25% - 50px)' } },
            { n: 3, label: 'The midpoint M', desc: 'the foot of the perpendicular from O, with AM = MB (one tick each)', pos: { top: '160px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Perpendicular bisects the chord, Difference of squares, Pythagorean theorem, Tangent ⟂ radius + Pythagoras, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the secant is turned by dragging and the rest follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$', 'solid dot on the circle', 'slides round the near side; the secant $PAB$ turns about $P$, and $B$, $M$ follow'],
          ['$P$', 'solid dot', 'moves the outside point; the tangent and the secant are recomputed, and the power $OP^2 - R^2$ changes'],
          ['$O$', 'solid dot', 'moves the circle (its radius is fixed)'],
          ['$T$, $B$, $M$', 'hollow dot', 'cannot be dragged: the point of contact, the far end of the secant, the midpoint of the chord'],
          ['$P$ inside the circle, $A$ farther from $P$ than $B$, a chord shorter than a few units, or a point out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $P$, $T$, $A$, $B$, $M$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc (this proof marks only right angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $PT^2$ and $PA \\cdot PB$ in the same units. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Perpendicular bisects the chord**, **Difference of squares**, **Pythagorean theorem**, **Tangent ⟂ radius + Pythagoras**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the chord-bisector theorem, an algebraic identity and Pythagoras, never the numbers, which is why the two values agree for every position of A and P.' },
        { title: 'B is a reflection', content: 'The far end of the secant is drawn as the mirror image of A in the perpendicular from O; that is what the chord-bisector theorem says it is, and it keeps the secant through P for every drag.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'two-secants': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A and C slide round the near side of the circle, P and O move freely; the hollow points B and D are computed', pos: { top: '84px', left: 'calc(25% - 180px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PA · PB beside PC · PD, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The first secant', desc: 'OMP and OMA on the chord AB: PM² − AM² = OP² − R²', pos: { top: '150px', left: 'calc(25% - 20px)' } },
            { n: 2, label: 'The second secant', desc: 'ONP and ONC on the chord CD: PN² − CN² = OP² − R²', pos: { top: '175px', left: 'calc(25% - 50px)' } },
            { n: 3, label: 'The midpoints', desc: 'M and N, feet of the perpendiculars from O, with one and two ticks for the equal halves', pos: { top: '160px', left: 'calc(25% + 80px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Perpendicular bisects the chord, Difference of squares, Pythagorean theorem (twice), Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the secants are turned by dragging and the rest follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $C$', 'solid dot on the circle', 'slides round the near side; its secant turns about $P$, and the far end and midpoint follow'],
          ['$P$', 'solid dot', 'moves the outside point; both secants are recomputed, and the power $OP^2 - R^2$ changes'],
          ['$O$', 'solid dot', 'moves the circle (its radius is fixed)'],
          ['$B$, $D$, $M$, $N$', 'hollow dot', 'cannot be dragged: the far ends of the secants and the midpoints of the chords'],
          ['$P$ inside the circle, a near end farther than its far end, the two secants too close, a short chord, or a point out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $P$, $A$, $B$, $C$, $D$, $M$, $N$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc (this proof marks only right angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $PA \\cdot PB$ and $PC \\cdot PD$ in the same units. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Perpendicular bisects the chord**, **Difference of squares**, **Pythagorean theorem**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the chord-bisector theorem, an algebraic identity and Pythagoras, never the numbers, which is why the two products agree for every position of the secants.' },
        { title: 'B and D are reflections', content: 'The far end of each secant is drawn as the mirror image of the near end in the perpendicular from O; that is what the chord-bisector theorem says it is, and it keeps both secants through P for every drag.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'ceva-theorem': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'P moves anywhere inside the triangle, A, B and C move freely; the hollow feet D, E, F follow', pos: { top: '120px', left: 'calc(25% - 10px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the three ratios BD/DC, CE/EA, AF/FB and their product, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The triangles around P', desc: 'ABP, BCP and CAP: each cevian ratio is a quotient of two of their areas', pos: { top: '236px', left: 'calc(25% - 110px)' } },
            { n: 2, label: 'The small triangles', desc: 'PBD and PDC, the first pair with apex P; subtracted from ABD and ADC', pos: { top: '236px', left: 'calc(25% + 60px)' } },
            { n: 3, label: 'The three feet', desc: 'D, E, F, where the cevians through P land on the sides', pos: { top: '140px', left: 'calc(25% + 110px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Same height (twice), Subtracting, Same argument, Multiplying', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the point and the triangle are shaped by dragging and the feet follow.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$P$', 'solid dot', 'moves anywhere inside the triangle; the three cevians and their feet $D$, $E$, $F$ follow'],
          ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $P$ stays where it is, the feet are recomputed'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: where the lines through $P$ meet the sides'],
          ['$P$ on or outside a side, a flattened triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $P$, $D$, $E$, $F$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc (this proof marks no angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three ratios and their product. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Same height**, **Subtracting**, **Same argument**, **Multiplying**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only that triangles of equal height have areas in the ratio of their bases, never the numbers, which is why the product is 1 for every position of P.' },
        { title: 'The feet are computed', content: 'D, E and F are where the lines from the vertices through P meet the opposite sides; that is what makes the three cevians concurrent by construction, which is the hypothesis of the theorem.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
    'menelaus-theorem': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'D slides along BC, F along the extension of AB; A, B and C move freely; the hollow point E follows', pos: { top: '150px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the three ratios BD/DC, CE/EA, AF/FB and their product, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The transversal', desc: 'the dashed line through D, E and F; FD and FE are the bases of the last two pairs', pos: { top: '110px', left: 'calc(25% + 40px)' } },
            { n: 2, label: 'The shaded triangles', desc: 'FBD and FDC on BC, FCE and FEA on CA, EFB on AB: every ratio is a quotient of two of their areas', pos: { top: '236px', left: 'calc(25% - 110px)' } },
            { n: 3, label: 'F beyond B', desc: 'the third point, on the extension of AB; AF is the long piece, FB the short one', pos: { top: '270px', left: 'calc(25% + 138px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Same height (five times), Multiplying', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the line and the triangle are shaped by dragging and the third point follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$D$', 'solid dot', 'slides along the side $BC$; the transversal swings about $F$ and $E$ follows'],
          ['$F$', 'solid dot', 'slides along the extension of $AB$ beyond $B$; the transversal swings about $D$ and $E$ follows'],
          ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $D$ and $F$ keep their places along their lines, $E$ is recomputed'],
          ['$E$', 'hollow dot', 'cannot be dragged: where the line $DF$ meets $CA$'],
          ['$F$ or a vertex out of the frame, two points too close, a flattened triangle', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $E$, $F$' },
          { control: '**Measures**', description: 'write each marked angle\'s size in degrees beside its arc (this proof marks no angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three ratios and their product. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Same height**, **Multiplying**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only that triangles of equal height have areas in the ratio of their bases, never the numbers, which is why the product is 1 for every position of the line.' },
        { title: 'The third point is computed', content: 'E is where the line through D and F meets CA; that is what makes the three points collinear by construction, which is the hypothesis of the theorem.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
  }

  const instructions = INSTRUCTIONS[view];
  const demos = DEMOS[view] || null;
  const howToUse = HOW_TO_USE[view] || null;

  return {
    props: {
      instructions,
      demos,
      howToUse,
      explanations,
      relatedTools: getRelatedTools(`geometry-proofs-${params.view}`),
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: config.title,
        description: config.description,
        keywords: config.keywords.join(", "),
        url: config.url,
        name: config.name
      },
      stateUnits,
      sectionOrder,
      proofKey: config.proofKey,
      h1Title: config.h1Title
    }
  };
}

export default function GeometryProofPage({ relatedTools, seoData, sectionsContent, stateUnits, sectionOrder, proofKey, h1Title, faqQuestions, schemas, instructions, explanations, demos, howToUse }) {

  const tool = () => (
    <ProofPlayerWrapper proofKeys={[proofKey]} explanations={{ [proofKey]: explanations }} />
  )

  const demo = (id) => (
    <ToolDemoPlayer
      key={`demo-${id}`}
      script={demos[id].script}
      title={demos[id].title}
      label={`Demo: ${demos[id].title}`}
      scale={0.6}
      renderText={processContent}
    >
      {tool()}
    </ToolDemoPlayer>
  )

  const genericSections = (sectionOrder || []).map(([obj, id, unitKey]) => {
    const src = sectionsContent[obj]
    if (!src || !src.title) return null
    const body = [ src.content ]
    if (unitKey && stateUnits[unitKey]) {
      body.push(<div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />)
      if (src.after) body.push(src.after)
    }
    if (demos && demos[id]) body.unshift(demo(id))
    if (id === 'getting-started' && howToUse) {
      body.push(
        <HowToUseSection
          key="how-to-use"
          data={{ ...howToUse, overview: { ...howToUse.overview, Mockup: ProofPlayerMockup, mockupProps: { proofKey } } }}
        />
      )
    }
    return { id, title: src.title, link: src.link || '', content: body }
  }).filter(Boolean);

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
        {h1Title}
      </h1>
      {/* Tight stack: the canvas and its controls must be on screen when the page opens. */}
      <div style={{width:'80%', margin:'auto'}}>
        <ExplanationDetails title='How to use' instructions={instructions} accent='#1e40af' />
      </div>
      <div style={{width:'80%',margin:'10px auto 0'}}>
        {tool()}
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <br/>
      {relatedTools && relatedTools.length > 0 && <RelatedTools tools={relatedTools}/>}
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
