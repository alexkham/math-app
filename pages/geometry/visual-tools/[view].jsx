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
    }
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
