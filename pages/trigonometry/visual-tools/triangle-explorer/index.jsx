
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TriangleExplorer from '../../../../app/components/trigonometry/triangle/TriangleExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import triangleDiagrams from '../../../../app/components/trigonometry/triangle/triangleDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'



export async function getStaticProps(){

  const keyWords = [
    'triangle explorer',
    'interactive triangle visualizer',
    'triangle types calculator',
    'equilateral isosceles scalene',
    'acute obtuse right triangle',
    '45-45-90 triangle',
    '30-60-90 triangle',
    'pythagorean theorem visualizer',
    '3-4-5 triangle',
    '5-12-13 triangle',
    'law of sines visualizer',
    'law of cosines tool',
    'triangle angles calculator',
    'SOH CAH TOA tool',
    'drag triangle vertices'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Vertex** — a corner of the triangle. Labeled $A$, $B$, $C$.
• **Side** — segment between two vertices. Side $a$ lies opposite vertex $A$, side $b$ opposite $B$, and side $c$ opposite $C$.
• **Interior angle** — the angle at a vertex, between the two sides meeting there. The three interior angles always sum to $180°$.
• **Hypotenuse** — in a right triangle, the side opposite the $90°$ angle and the longest side.
• **Pythagorean triple** — three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$, like $3$-$4$-$5$ or $5$-$12$-$13$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Choosing a Scenario`,
      content:`The blue **top bar** groups twelve scenarios into four categories. Click any name to load that triangle:

• **Classification** — [equilateral](!#the-equilateral-scenario), [isosceles](!#the-isosceles-scenario), [acute](!#the-acute-scenario), [obtuse](!#the-obtuse-scenario), [right scalene](!#the-right-scalene-scenario).
• **Special** — [45-45-90](!#the-45-45-90-scenario), [30-60-90](!#the-30-60-90-scenario), [3-4-5](!#the-3-4-5-scenario), [5-12-13](!#the-5-12-13-scenario).
• **Trig laws** — [law of sines](!#the-law-of-sines-scenario), [law of cosines](!#the-law-of-cosines-scenario).
• **Explore** — [free drag mode](!#the-free-drag-scenario).

The active scenario stays highlighted. The diagram, intro text, and explanation panel on the right all refresh together. Click **↻ reset** to return the current scenario to its starting shape.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Dragging Vertices`,
      content:`Many scenarios start static for clarity. Tick the **draggable** checkbox in the top bar to make all three vertices grabbable.

How dragging works:
• Hover a vertex — a circular halo confirms it is grabbable.
• Click and drag with mouse or touch.
• The triangle reshapes in real time, with sides, angles, and stats updating immediately.

[The free-drag scenario](!#the-free-drag-scenario) starts with dragging enabled. [Law of sines](!#the-law-of-sines-scenario) and [law of cosines](!#the-law-of-cosines-scenario) also start draggable, so you can confirm the laws hold for arbitrary shapes.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Locking Angles`,
      content:`The **Lock angles** controls let you fix one or two interior angles before dragging.

Per-angle controls:
• Click the **lock** button — the angle freezes at its current value.
• A number input appears with the locked value in degrees.
• A range slider lets you change the locked value continuously.

You can lock up to two angles at once. With two locked, the third is computed automatically as $180° - \\angle_1 - \\angle_2$. Locked angles show a dashed circle and a small lock icon at the vertex on the diagram.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Adjusting the Zoom`,
      content:`The **Zoom** controls in the second toolbar let you scale the diagram without changing the triangle:

• **−** decreases zoom by $10\\%$ down to $30\\%$.
• **+** increases zoom by $10\\%$ up to $500\\%$.
• **fit** snaps back to $100\\%$ when zoomed away.

Zooming affects only display size — the underlying coordinates, side lengths, and angle measures are unchanged. The grid in the background gives a stable visual reference at any zoom level.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Diagram`,
      content:`Each part of the SVG is color-coded so the same color always means the same thing.

Color mapping:
• **Red** — vertex $A$, side $a$, angle at $A$.
• **Amber** — vertex $B$, side $b$, angle at $B$.
• **Blue** — vertex $C$, side $c$, angle at $C$.

Visual cues:
• Curved arcs at each vertex show the interior angle, with the value in degrees.
• A small square mark replaces the arc when the angle is exactly $90°$.
• Side labels $a$, $b$, $c$ sit on the outside of each segment.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Stats Bar`,
      content:`Below the diagram, a single line summarizes everything numeric:

• **∠A**, **∠B**, **∠C** — interior angles in degrees, color-matched to vertices.
• **a**, **b**, **c** — side lengths in user units.
• **P** — perimeter, the sum of the three sides.
• **Area** — calculated from the vertex coordinates.

Drag any vertex (or change a locked angle) and watch the entire row update. This is the fastest way to verify properties like "the side opposite the largest angle is always the longest."`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Reading the Explanation Panel`,
      content:`The right-hand panel changes contents per scenario, but the structure is consistent:

• **Header** — name of the active scenario.
• **Intro** — one-sentence summary of what is special about it.
• **Explanation blocks** — formula boxes and reasoning for the relevant theorems.

Examples by scenario:
• [Equilateral](!#the-equilateral-scenario) — classification + angle sum.
• [3-4-5](!#the-3-4-5-scenario) — Pythagorean triple verification + trig ratios.
• [Law of sines](!#the-law-of-sines-scenario) — the three ratios $a / \\sin A$, $b / \\sin B$, $c / \\sin C$ printed live.
• [Law of cosines](!#the-law-of-cosines-scenario) — both sides of $c^2 = a^2 + b^2 - 2ab\\cos C$ shown numerically.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Triangle Classifications`,
      content:`Triangles are classified two independent ways:

**By angles:**
• **Acute** — all three angles below $90°$.
• **Right** — one angle exactly $90°$.
• **Obtuse** — one angle above $90°$.

**By sides:**
• **Equilateral** — all three sides equal.
• **Isosceles** — exactly two sides equal.
• **Scalene** — all three sides different.

A triangle has one label from each list (e.g. [right scalene](!#the-right-scalene-scenario), or the [acute](!#the-acute-scenario) and [isosceles](!#the-isosceles-scenario) pair). The explorer devotes a scenario to each: [equilateral](!#the-equilateral-scenario) and [obtuse](!#the-obtuse-scenario) complete the set.

For deeper coverage with proofs, see the **triangle classifications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Pythagorean Theorem and Triples`,
      content:`In any right triangle with legs $a$, $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2$$

A **Pythagorean triple** is a set of three positive integers satisfying this relation. The smallest examples:

• **3-4-5**: $9 + 16 = 25$.
• **5-12-13**: $25 + 144 = 169$.
• **8-15-17**: $64 + 225 = 289$.

The explorer demonstrates the first two as dedicated scenarios, [3-4-5](!#the-3-4-5-scenario) and [5-12-13](!#the-5-12-13-scenario), with [right scalene](!#the-right-scalene-scenario) as the contrasting case where no triple exists. For full theory and proofs, see the **Pythagorean theorem page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Law of Sines and Law of Cosines`,
      content:`Two laws extend trigonometric reasoning beyond right triangles:

**Law of sines** — for any triangle:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Use it when you know two angles and one side, or two sides and a non-included angle. [The law-of-sines scenario](!#the-law-of-sines-scenario) prints all three ratios live while you drag.

**Law of cosines** — generalizes Pythagoras:

$$c^2 = a^2 + b^2 - 2ab\\cos C$$

Use it when you know two sides and the included angle, or all three sides. When $C = 90°$ the cosine term vanishes and the formula reduces to Pythagoras — [the law-of-cosines scenario](!#the-law-of-cosines-scenario) lets you drag through that moment and watch the term disappear. For full coverage, see the **law of sines page** and the **law of cosines page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Trigonometric Functions** — $\\sin$, $\\cos$, $\\tan$ and their reciprocals.
• **Angle Explorer** — visualize any angle, its quadrant, and its reference angle.
• **Special Right Triangles** — exact ratios for $45$-$45$-$90$ and $30$-$60$-$90$.
• **SOH CAH TOA** — mnemonic for trig ratios in right triangles.
• **Triangle Solver** — compute missing sides and angles given partial information.
• **Trigonometric Identities** — Pythagorean, sum, and double-angle formulas built on these triangles.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`Scenario: Equilateral`,
      content:`The most symmetric triangle the explorer can show: three equal sides, three equal angles, and no way to tell one vertex from another.`,
      before:``,
      after:`All three angles read $60°$, because the angle sum $180°$ divides evenly three ways. That is the only value they can take — equilateral triangles are all the same shape, differing only in scale.

The scenario loads undraggable, since dragging any vertex would immediately destroy the property being illustrated. To deform it freely, switch to [the free-drag scenario](!#the-free-drag-scenario), which starts from a symmetric shape you are allowed to break.

Every equilateral triangle is also isosceles — [the isosceles scenario](!#the-isosceles-scenario) shows the weaker condition, where only two sides match. Both sit under the side-based half of [the classification scheme](!#triangle-classifications).`,
      link:'',
    },
    obj13:{
      title:`Scenario: Isosceles`,
      content:`Two sides equal, and with them the two angles opposite those sides — the base angles.`,
      before:``,
      after:`This frame is built with base angles of $70°$, which forces an apex of $40°$. The relationship runs both ways: equal sides imply equal base angles, and equal base angles imply equal sides.

The symmetry is what makes isosceles triangles useful in proofs. Dropping a perpendicular from the apex splits the figure into two congruent right triangles — the move behind several of the identity tools elsewhere in this section.

Compare with [the equilateral scenario](!#the-equilateral-scenario), where the condition is strengthened to all three sides, and with [the acute scenario](!#the-acute-scenario), where all three differ.`,
      link:'',
    },
    obj14:{
      title:`Scenario: Acute`,
      content:`All three angles below $90°$, and all three sides of different lengths — a scalene triangle that is also acute.`,
      before:``,
      after:`The scenario exists to separate two classifications people often conflate. "Acute" describes the angles; "scalene" describes the sides. This triangle is both, and neither label implies the other.

Read the three arcs in the frame: each is drawn as a curve rather than the square mark that would signal a right angle. Compare with [the obtuse scenario](!#the-obtuse-scenario), where one arc opens past a straight edge, and with [the right scalene scenario](!#the-right-scalene-scenario), where one arc becomes a square.

The full scheme, and why each triangle carries one label from each list, is in [triangle classifications](!#triangle-classifications).`,
      link:'',
    },
    obj15:{
      title:`Scenario: Obtuse`,
      content:`One angle exceeds $90°$, which forces the other two to be small — their sum is whatever is left of $180°$.`,
      before:``,
      after:`A triangle can have at most one obtuse angle, since two would already exceed the total by themselves. The side opposite the obtuse angle is always the longest of the three, visible here as the side spanning the widest opening.

That "largest angle faces the longest side" rule is not specific to obtuse triangles — it holds everywhere, and [the stats bar](!#reading-the-stats-bar) is the quickest way to confirm it while dragging.

The relationship is made exact by [the law of cosines](!#the-law-of-cosines-scenario): when the angle passes $90°$, its cosine goes negative and the $-2ab\\cos C$ term starts adding to the opposite side rather than subtracting.`,
      link:'',
    },
    obj16:{
      title:`Scenario: Right Scalene`,
      content:`A right triangle whose three sides all differ — a right angle without any of the convenient ratios.`,
      before:``,
      after:`The right angle is marked with a square instead of an arc, the explorer's signal that the angle is within $3°$ of $90°$. The legs measure $260$ and $160$ in raw coordinates, so the hypotenuse is $\\sqrt{260^2 + 160^2} \\approx 305.3$ — an irrational length, and the reason this scenario is not a triple.

It is the counterexample the special scenarios need. [3-4-5](!#the-3-4-5-scenario) and [5-12-13](!#the-5-12-13-scenario) are right triangles with whole-number sides; [45-45-90](!#the-45-45-90-scenario) and [30-60-90](!#the-30-60-90-scenario) have exact ratios. Most right triangles, this one included, have neither.

Pythagoras still applies, of course — see [the theorem and its triples](!#pythagorean-theorem-and-triples).`,
      link:'',
    },
    obj17:{
      title:`Scenario: 45-45-90`,
      content:`The isosceles right triangle: two equal legs, two $45°$ angles, and a hypotenuse of exactly leg $\\times \\sqrt{2}$.`,
      before:``,
      after:`$$1 : 1 : \\sqrt{2}$$

The ratio follows from Pythagoras in one line — with equal legs $x$, the hypotenuse is $\\sqrt{x^2 + x^2} = x\\sqrt{2}$. It is also half a square cut along its diagonal, which is the fastest way to remember it.

Being isosceles and right at once, this triangle belongs to two categories that [the classification scheme](!#triangle-classifications) treats separately. Its partner in the Special group is [30-60-90](!#the-30-60-90-scenario), the other exact-ratio right triangle.`,
      link:'',
    },
    obj18:{
      title:`Scenario: 30-60-90`,
      content:`Half of an equilateral triangle, cut down its axis of symmetry — which is exactly where its ratios come from.`,
      before:``,
      after:`$$1 : \\sqrt{3} : 2$$

Slice [an equilateral triangle](!#the-equilateral-scenario) in half and the $60°$ angle survives, the cut halves one $60°$ into $30°$, and the perpendicular creates the $90°$. The short leg is half the original side, hence the $1 : 2$ relation with the hypotenuse; the long leg follows from Pythagoras.

These are the ratios behind the exact values of $\\sin 30°$, $\\cos 30°$ and their companions — every exact trig value in the first quadrant comes from this triangle or from [45-45-90](!#the-45-45-90-scenario).`,
      link:'',
    },
    obj19:{
      title:`Scenario: 3-4-5`,
      content:`The smallest Pythagorean triple: three whole numbers that produce an exact right angle with no irrational lengths anywhere.`,
      before:``,
      after:`$$3^2 + 4^2 = 9 + 16 = 25 = 5^2$$

The frame is drawn at $50$ times that scale — legs of $200$ and $150$ coordinate units, hypotenuse $250$ — because a triple stays a triple under scaling. Any multiple of $3$-$4$-$5$ is another right triangle, which is why this one turns up in construction and surveying.

Its counterpart in the tool is [5-12-13](!#the-5-12-13-scenario), the next-smallest triple. Both are exact; [right scalene](!#the-right-scalene-scenario) shows the ordinary case where the hypotenuse is irrational. The general statement is in [Pythagorean theorem and triples](!#pythagorean-theorem-and-triples).`,
      link:'',
    },
    obj20:{
      title:`Scenario: 5-12-13`,
      content:`The second-smallest Pythagorean triple, and a much thinner triangle than the first.`,
      before:``,
      after:`$$5^2 + 12^2 = 25 + 144 = 169 = 13^2$$

Here the frame is drawn at $20$ times scale: legs of $100$ and $240$, hypotenuse $260$. The shape is noticeably more elongated than [3-4-5](!#the-3-4-5-scenario) — the two legs differ by more than a factor of two, which pushes one acute angle down near $23°$.

Triples are rarer than they look. Of all right triangles, only a vanishingly small family has three integer sides; the rest look like [right scalene](!#the-right-scalene-scenario).`,
      link:'',
    },
    obj21:{
      title:`Scenario: Law of Sines`,
      content:`A draggable triangle carrying three ratios that stay equal no matter how you reshape it.`,
      before:``,
      after:`$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

The scenario starts draggable on purpose. The panel prints all three ratios live, so dragging a vertex is a running experiment: the individual sides and angles change constantly while the three quotients stay locked together.

The common value is not arbitrary — it equals the diameter of the triangle's circumscribed circle. Use the law when you know two angles and a side, or two sides and a non-included angle.

Its companion is [the law of cosines](!#the-law-of-cosines-scenario), which handles the cases this one cannot. Both are stated in full under [law of sines and law of cosines](!#law-of-sines-and-law-of-cosines).`,
      link:'',
    },
    obj22:{
      title:`Scenario: Law of Cosines`,
      content:`The generalization of Pythagoras to triangles with no right angle, again draggable so both sides of the equation can be watched at once.`,
      before:``,
      after:`$$c^2 = a^2 + b^2 - 2ab\\cos C$$

The correction term $-2ab\\cos C$ is the whole story. At $C = 90°$ the cosine is zero, the term vanishes, and the formula collapses into [Pythagoras](!#pythagorean-theorem-and-triples). Below $90°$ the cosine is positive and the term shortens $c$; above $90°$ it goes negative and lengthens $c$ — which is why [obtuse triangles](!#the-obtuse-scenario) have such a long side opposite the wide angle.

Drag the vertices and watch the two computed sides of the equation stay equal. Use the law when you know two sides and the included angle, or all three sides and want an angle. [The law of sines](!#the-law-of-sines-scenario) covers the complementary cases.`,
      link:'',
    },
    obj23:{
      title:`Scenario: Free Drag`,
      content:`No constraint at all: three vertices you can move anywhere, with every measurement recomputed as you go.`,
      before:``,
      after:`The panel here runs every explanation block at once — classification, angle sum, trig ratios and Pythagoras — so the labels update live as the shape crosses between categories. Drag a vertex until one angle passes $90°$ and watch the classification flip from acute to right to obtuse.

This is also where [angle locking](!#locking-angles) earns its keep. Fix one or two angles and the drag becomes constrained: the triangle can still change size and orientation, but not the angles you pinned.

It is the scenario to reach for after the fixed ones, once the question stops being "what does an isosceles triangle look like" and becomes "what stays true for every triangle".`,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "What scenarios does the triangle explorer include?",
      answer: "Twelve scenarios across four categories: classification (equilateral, isosceles, acute, obtuse, right scalene), special right triangles (45-45-90, 30-60-90, 3-4-5, 5-12-13), trigonometric laws (law of sines, law of cosines), and a free-drag explore mode."
    },
    obj2: {
      question: "Can I reshape the triangle by dragging?",
      answer: "Yes. Tick the draggable checkbox in the top toolbar to enable vertex dragging for any scenario. The free-drag, law of sines, and law of cosines scenarios start draggable by default. The diagram, stats, and explanations all update in real time."
    },
    obj3: {
      question: "How do angle locks work?",
      answer: "Click the lock button next to an angle to freeze it at its current value. A number input and slider then let you set an exact degree measure. You can lock up to two angles; the third is computed automatically as 180 minus the sum of the other two."
    },
    obj4: {
      question: "What is the difference between law of sines and law of cosines?",
      answer: "Law of sines relates each side to the sine of its opposite angle and works best when you know two angles and a side. Law of cosines relates one side to the other two and the angle between them, useful when you know two sides and their included angle, or all three sides."
    },
    obj5: {
      question: "What do the colors in the diagram mean?",
      answer: "Red marks vertex A, side a (opposite A), and angle A. Amber marks vertex B, side b, and angle B. Blue marks vertex C, side c, and angle C. The same color scheme is used in the stats bar and the explanation formulas."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Triangle Explorer",
      "description": "Explore triangle types, special right triangles, the Pythagorean theorem, law of sines and law of cosines with a draggable, lockable, color-coded triangle.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/triangle-explorer",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Twelve preloaded scenarios across classification, special right, trig laws, and free drag",
        "Drag-and-drop vertex editing with live angle and side updates",
        "Two simultaneous angle locks with degree input and slider",
        "Zoom controls from 30 percent to 500 percent",
        "Color-coded vertices, sides, and angle arcs (A red, B amber, C blue)",
        "Live stats bar with angles, sides, perimeter, and area",
        "Context-aware explanations including Pythagoras, SOH CAH TOA, law of sines, and law of cosines",
        "Right-angle indicator and Pythagorean triple verification"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Triangle Explorer",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/triangle-explorer"
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


  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // scene + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    equilateral: demoUnitFrame({ svg: triangleDiagrams.equilateral, caption: 'Equilateral, frozen',
      text: 'Three equal sides force three equal angles — 60° each, the only split of 180° into three equal parts.' }),
    isosceles: demoUnitFrame({ svg: triangleDiagrams.isosceles, caption: 'Isosceles, frozen',
      text: 'Base angles of 70° opposite the two equal sides, leaving 40° at the apex.' }),
    acute: demoUnitFrame({ svg: triangleDiagrams.acute, caption: 'Acute scalene, frozen',
      text: 'Three arcs, none of them a square: every angle is under 90°, and all three sides differ.' }),
    obtuse: demoUnitFrame({ svg: triangleDiagrams.obtuse, caption: 'Obtuse, frozen',
      text: 'One wide opening, and the longest side sitting directly opposite it.' }),
    rightScalene: demoUnitFrame({ svg: triangleDiagrams['right-scalene'], caption: 'Right scalene, frozen',
      text: 'The square mark replaces an arc at the right angle. Legs 260 and 160 give an irrational hypotenuse.' }),
    right45: demoUnitFrame({ svg: triangleDiagrams['right-45'], caption: '45-45-90, frozen',
      text: 'Equal legs, so the two acute angles split the remaining 90° evenly.' }),
    right3060: demoUnitFrame({ svg: triangleDiagrams['right-30-60'], caption: '30-60-90, frozen',
      text: 'The short leg faces the 30° angle and measures exactly half the hypotenuse.' }),
    triple345: demoUnitFrame({ svg: triangleDiagrams['345'], caption: '3-4-5, frozen',
      text: 'Drawn at 50× scale: legs of 200 and 150, hypotenuse 250 — the triple, enlarged.' }),
    triple51213: demoUnitFrame({ svg: triangleDiagrams['5-12-13'], caption: '5-12-13, frozen',
      text: 'At 20× scale. The legs differ by more than a factor of two, so the shape is visibly thin.' }),
    lawOfSines: demoUnitFrame({ svg: triangleDiagrams['law-of-sines'], caption: 'Law of sines, frozen at its opening shape',
      text: 'A deliberately irregular triangle: the three ratios stay equal even here, and stay equal as you drag.' }),
    lawOfCosines: demoUnitFrame({ svg: triangleDiagrams['law-of-cosines'], caption: 'Law of cosines, frozen at its opening shape',
      text: 'No right angle anywhere, which is precisely when the −2ab·cos C correction term does work.' }),
    free: demoUnitFrame({ svg: triangleDiagrams.free, caption: 'Free drag, frozen at its starting shape',
      text: 'A symmetric opening position with nothing pinned — every vertex is grabbable from the first click.' }),
  };

  const explanations = {
    equilateral: `All three sides and angles are equal — the most symmetric triangle, and the only shape where every angle must read 60°. [Learn more about this scenario](!#the-equilateral-scenario) · [Triangle classifications](!#triangle-classifications)`,
    isosceles: `Two sides equal, two angles equal. The base angles, opposite the equal sides, are congruent. [Learn more about this scenario](!#the-isosceles-scenario) · [Triangle classifications](!#triangle-classifications)`,
    acute: `All three angles are less than 90°, and all three sides differ — acute and scalene at once. [Learn more about this scenario](!#the-acute-scenario) · [Triangle classifications](!#triangle-classifications)`,
    obtuse: `One angle exceeds 90°, and the side opposite it is the longest of the three. [Learn more about this scenario](!#the-obtuse-scenario) · [Triangle classifications](!#triangle-classifications)`,
    'right-scalene': `A right triangle with three different side lengths — no special ratio, and an irrational hypotenuse. [Learn more about this scenario](!#the-right-scalene-scenario) · [Pythagorean theorem and triples](!#pythagorean-theorem-and-triples)`,
    'right-45': `Isosceles right triangle. Both legs equal, hypotenuse is leg × √2. [Learn more about this scenario](!#the-45-45-90-scenario) · [Pythagorean theorem and triples](!#pythagorean-theorem-and-triples)`,
    'right-30-60': `Half of an equilateral triangle, so the sides come out in ratio 1 : √3 : 2. [Learn more about this scenario](!#the-30-60-90-scenario) · [Pythagorean theorem and triples](!#pythagorean-theorem-and-triples)`,
    '345': `The smallest Pythagorean triple: sides 3, 4, 5 produce an exact right angle. [Learn more about this scenario](!#the-3-4-5-scenario) · [Pythagorean theorem and triples](!#pythagorean-theorem-and-triples)`,
    '5-12-13': `The second-smallest triple: 5² + 12² = 25 + 144 = 169 = 13². [Learn more about this scenario](!#the-5-12-13-scenario) · [Pythagorean theorem and triples](!#pythagorean-theorem-and-triples)`,
    'law-of-sines': `Drag any vertex and watch the three ratios a/sin A, b/sin B, c/sin C stay equal. [Learn more about this scenario](!#the-law-of-sines-scenario) · [Law of sines and law of cosines](!#law-of-sines-and-law-of-cosines)`,
    'law-of-cosines': `Drag the vertices. The relation c² = a² + b² − 2ab·cos C holds for any triangle, right or not. [Learn more about this scenario](!#the-law-of-cosines-scenario) · [Law of sines and law of cosines](!#law-of-sines-and-law-of-cosines)`,
    free: `Drag any vertex to reshape the triangle; lock angles below to constrain the shape while dragging. [Learn more about this scenario](!#the-free-drag-scenario) · [Locking angles](!#locking-angles)`,
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
         stateUnits,
          seoData: {
        title: "Triangle Explorer: Interactive Visualizer | Learn Math Class",
        description: "Explore triangle types, Pythagoras, law of sines, and law of cosines with a draggable, lockable, color-coded triangle and live angle and side stats.",
        hubDescription: "An interactive triangle visualizer with twelve preloaded scenarios covering classifications (equilateral, isosceles, acute, obtuse, right scalene), special right triangles (45-45-90, 30-60-90, 3-4-5, 5-12-13), and the laws of sines and cosines. Drag vertices, lock up to two angles, zoom freely, and read live stats and context-aware explanations including Pythagoras, SOH CAH TOA, and the trigonometric laws.",
        category: "Triangle",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/triangle-explorer",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M 14 62 L 66 62 L 46 16 Z" fill="#B5D4F4" fill-opacity="0.3" stroke="#185FA5" stroke-width="1.8" stroke-linejoin="round"/><path d="M 22 62 A 8 8 0 0 0 18.57 55.43" fill="none" stroke="#FAC775" stroke-width="1.4"/><path d="M 62.81 54.66 A 8 8 0 0 0 58 62" fill="none" stroke="#97C459" stroke-width="1.4"/><circle cx="14" cy="62" r="2.4" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="66" cy="62" r="2.4" fill="#97C459" stroke="#27500A" stroke-width="1"/><circle cx="46" cy="16" r="2.4" fill="#ED93B1" stroke="#72243E" stroke-width="1"/><text x="40" y="72" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">c</text><text x="61" y="38" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">a</text><text x="25" y="38" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">b</text></svg>`,
        name: "Interactive Triangle Explorer"
      },

       }
    }
   }

export default function TriangleExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {


  const genericSections=[
    {
        id:'key-terms',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'choosing-a-scenario',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'dragging-vertices',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'locking-angles',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'adjusting-the-zoom',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'reading-the-diagram',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'reading-the-stats-bar',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'reading-the-explanation-panel',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'triangle-classifications',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'pythagorean-theorem-and-triples',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'law-of-sines-and-law-of-cosines',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'related-concepts-and-tools',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'the-equilateral-scenario',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'u-equilateral'} dangerouslySetInnerHTML={{ __html: stateUnits['equilateral'] }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-isosceles-scenario',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key={'u-isosceles'} dangerouslySetInnerHTML={{ __html: stateUnits['isosceles'] }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'the-acute-scenario',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'u-acute'} dangerouslySetInnerHTML={{ __html: stateUnits['acute'] }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'the-obtuse-scenario',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key={'u-obtuse'} dangerouslySetInnerHTML={{ __html: stateUnits['obtuse'] }} />,
          sectionsContent.obj15.after,
        ]
    },
    {
        id:'the-right-scalene-scenario',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key={'u-rightScalene'} dangerouslySetInnerHTML={{ __html: stateUnits['rightScalene'] }} />,
          sectionsContent.obj16.after,
        ]
    },
    {
        id:'the-45-45-90-scenario',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
          <div key={'u-right45'} dangerouslySetInnerHTML={{ __html: stateUnits['right45'] }} />,
          sectionsContent.obj17.after,
        ]
    },
    {
        id:'the-30-60-90-scenario',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
          <div key={'u-right3060'} dangerouslySetInnerHTML={{ __html: stateUnits['right3060'] }} />,
          sectionsContent.obj18.after,
        ]
    },
    {
        id:'the-3-4-5-scenario',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
          <div key={'u-triple345'} dangerouslySetInnerHTML={{ __html: stateUnits['triple345'] }} />,
          sectionsContent.obj19.after,
        ]
    },
    {
        id:'the-5-12-13-scenario',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
          <div key={'u-triple51213'} dangerouslySetInnerHTML={{ __html: stateUnits['triple51213'] }} />,
          sectionsContent.obj20.after,
        ]
    },
    {
        id:'the-law-of-sines-scenario',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
          <div key={'u-lawOfSines'} dangerouslySetInnerHTML={{ __html: stateUnits['lawOfSines'] }} />,
          sectionsContent.obj21.after,
        ]
    },
    {
        id:'the-law-of-cosines-scenario',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
          <div key={'u-lawOfCosines'} dangerouslySetInnerHTML={{ __html: stateUnits['lawOfCosines'] }} />,
          sectionsContent.obj22.after,
        ]
    },
    {
        id:'the-free-drag-scenario',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
          <div key={'u-free'} dangerouslySetInnerHTML={{ __html: stateUnits['free'] }} />,
          sectionsContent.obj23.after,
        ]
    },

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
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.webApplication)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.faq)
    }}
  />
</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           // topOffset='65px'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Triangle</h1>
   <br/>
   <SiblingsNav
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
   
   >
   <TriangleExplorer explanations={explanations}/>
   </SiblingsNav>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

   />
   <br/>
   <br/>
   <br/>
    {/* <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}