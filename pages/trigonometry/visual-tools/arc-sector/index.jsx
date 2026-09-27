import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ArcSectorExplorer from '@/app/components/trigonometry/ArcSectorExplorer'
import arcSectorDiagrams from '@/app/components/trigonometry/arcSectorDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import { processContent } from '@/app/utils/contentProcessor'
import '@/pages/pages.css'

/* Visual tool page, steps 1-7 (visual-tool-page-creation-instructions v2).
   How-to instructions are a live mesh with the usage sections: each ends in
   an anchor link to its section. Line 1 adds one section per preset state,
   each with a framed unit rendered from the tool's own scene. The tool's
   explanation note is page-fed (explanations prop) and carries the anchors.
   IntroSection and KeyTermsCard stay commented (step 4, rulings 2-3). */

export async function getStaticProps() {

  const keyWords = [
    'arc length formula',
    'sector area formula',
    'what is a radian',
    's = r theta',
    'area of a sector',
    'radian measure visual',
    'arc length calculator circle',
    'one radian arc equals radius',
    'sector as fraction of circle',
    'unit circle radius 1',
    'radians vs degrees arc length',
    'interactive arc and sector tool',
    'central angle arc sector',
    'half r squared theta',
    'arc sector explorer',
  ]

  const instructions = [
    'Drag the **handle** on the circle, or move the **Angle θ** slider, to set the central angle. It snaps to the special angles, and the readout gives θ in radians and in degrees side by side. [Learn more about setting the angle](!#setting-the-angle)',
    'Move the **Radius r** slider between $0.5$ and $3$. The arc and the sector grow with it while the angle stays exactly where it was. The slider catches at $r = 1$. [Learn more about setting the radius](!#setting-the-radius)',
    'Press **One radian** to lay radius-length arcs around the circle. Six fit, with a little left over, and the first is marked arc = r. [Learn more about the one-radian marks](!#the-one-radian-marks)',
    'Press **Sector as fraction** to tint the whole disc and show the sector as the fraction $\\frac{\\theta}{2\\pi}$ of it. The area formula switches to its fraction form. [Learn more about the sector as a fraction](!#the-sector-as-a-fraction)',
    'Press **r = 1** to shrink the circle to the unit circle. Axes, the right triangle and the point $(\\cos\\theta, \\sin\\theta)$ appear, and the arc length becomes equal to θ. [Learn more about the r = 1 button](!#the-r-1-button)',
    'The column of formulas beside the circle recomputes as you work: θ in both units, $s = r\\theta$ and the area with the current numbers substituted. [Learn more about the formula column](!#the-formula-column)',
    'The **Examples** row loads four ready states: one radian, arc length, sector area and radius 1. [Learn more about the examples](!#the-examples-row)',
    'The legend under the circle fixes the colours: **indigo** for the radius, **dark amber** for the arc, **light amber** for the sector, **grey** for the circle. [Learn more about the colours](!#the-legend-and-colours)',
    'The **Explanations** panel on the right works through arc length, sector area, the effect of r and the radius-1 case with the current numbers. [Learn more about the explanations panel](!#the-explanations-panel)',
  ]

  /* Note for the tool's own panel, rendered under its live text through
     renderText. Ends in the Line 1 anchors to the four frozen states. */
  const explanations = 'See each idea frozen: [one radian](!#one-radian) · [arc length](!#arc-length) · [sector area](!#sector-area) · [radius 1](!#radius-1)'

  const diagrams = arcSectorDiagrams()

  const stateUnits = {
    oneRadian: demoUnitFrame({
      svg: diagrams.oneRadian,
      caption: 'θ = 1 rad on a circle of radius 2',
      text: 'The arc is exactly as long as the radius, so the angle is one radian. The ticks numbered 1 to 6 are more radius-length arcs laid around the circle: six fit, and a full turn is 2&pi; &asymp; 6.28 of them.',
    }),
    arcLength: demoUnitFrame({
      svg: diagrams.arcLength,
      caption: 'θ = 3&pi;/5, r = 2',
      text: 'The arc length is read straight off the angle: s = r&theta; = 2 &times; 3&pi;/5 &asymp; 3.77. No conversion factor appears, because the angle is measured in radians.',
    }),
    sectorArea: demoUnitFrame({
      svg: diagrams.sectorArea,
      caption: 'θ = 2&pi;/5, r = 2, sector shown as a fraction',
      text: 'The whole disc is tinted and the sector is the slice &theta;/2&pi; = 1/5 of it. One fifth of &pi;r&sup2; = 4&pi; is about 2.51, the same number &frac12;r&sup2;&theta; gives.',
    }),
    radiusOne: demoUnitFrame({
      svg: diagrams.radiusOne,
      caption: 'θ = 2&pi;/9 on the unit circle',
      text: 'With r = 1 the hypotenuse is 1, so sin &theta; = y/1 = y and cos &theta; = x/1 = x: the point on the circle is (cos &theta;, sin &theta;). The arc length equals the angle itself.',
    }),
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, before: ``, after: ``, link: '' },

    obj1: {
      title: `Setting the Angle`,
      content: `The central angle $\\theta$ can be set two ways. Drag the **handle** — the white circle with an indigo ring where the second radius meets the circle — around the circle, or move the **Angle θ** slider under the graph. Both run from $0$ to a full turn, $2\\pi$.

The angle snaps as it passes the special angles: every multiple of $\\frac{\\pi}{6}$ and every odd multiple of $\\frac{\\pi}{4}$. When the one-radian marks are on, it also snaps at whole numbers of radians, $1$ to $6$. Snapping is what makes exact readings possible — $\\frac{3\\pi}{5}$ is not a snap point, but $\\frac{2\\pi}{3}$ and $1$ are.

The readout under the slider shows the angle twice, as $\\theta = \\frac{2\\pi}{3} \\approx 2.094$ rad $= 120°$. Radians come first because every formula in the tool uses them; the degree value is there so the two units can be compared at a glance.

As the angle grows, three things grow with it: the dark amber arc along the circle, the light amber sector inside it, and the small angle marker at the centre, labelled θ.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Setting the Radius`,
      content: `The **Radius r** slider runs from $0.5$ to $3$ in steps of $0.05$ and redraws the circle at that size. It catches at $r = 1$ when dragged close to it, since the unit circle is the case with its own [button](!#the-r-1-button).

Watch what does and does not move. The arc and the sector scale with the circle: the arc length grows in proportion to $r$, and the sector area in proportion to $r^2$. The formula column updates both numbers as you drag.

The angle does not move at all. The readout keeps showing the same θ, and the angle marker at the centre keeps the same opening. That is the first thing this slider is for: an angle in radians is a ratio of two lengths on the same circle, so scaling the circle scales both and leaves the ratio alone. The theory is taken further in [why the angle does not depend on r](!#why-the-angle-does-not-depend-on-r).

A practical reading: doubling $r$ at a fixed angle doubles the arc and quadruples the sector.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The One-Radian Marks`,
      content: `The **One radian** button lays radius-length arcs around the circle and numbers them. Each tick marks the end of one more arc of length $r$, and the first is drawn as a dashed arc labelled **arc = r**, with matching tick marks on it and on the two radii to show that all three lengths are equal.

Six ticks fit around the circle, numbered $1$ to $6$, and a small gap is left over before the full turn. That gap is the whole content of the statement that a full turn is $2\\pi \\approx 6.28$ radians: six radius-lengths and a little more than a quarter of another.

While the marks are on, a faint dashed radius stays at exactly $1$ radian, so the current angle can be compared with it. The angle also snaps at whole radians, $1$ to $6$, which makes it easy to land exactly on one of the marks.

Set θ to $1$ and the badge in the explanation panel confirms it: arc $= r$. Change the radius afterwards and the marks move outward with the circle, while $1$ radian stays $1$ radian.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Sector as a Fraction`,
      content: `The **Sector as fraction** button changes how the sector is presented. The whole disc is tinted pale indigo, the sector is drawn at a stronger amber, and both radii take the arc's colour so the slice reads as one shape cut from the disc.

The formula column switches with it. Instead of the compact $A = \\frac{1}{2}r^2\\theta$, it shows the reasoning behind it:

$$A = \\frac{\\theta}{2\\pi} \\cdot \\pi r^2$$

with the fraction $\\frac{\\theta}{2\\pi}$, the disc area $\\pi r^2$ and their product filled in, and a line stating what fraction of the disc the slice is. The explanation panel adds the same fraction as a percentage.

This view is the one to use when the area formula feels arbitrary. A sector is a share of the disc in exactly the proportion its angle is a share of the full turn; multiplying out $\\frac{\\theta}{2\\pi} \\cdot \\pi r^2$ cancels the $\\pi$ and leaves $\\frac{1}{2}r^2\\theta$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The r = 1 Button`,
      content: `The **r = 1** button sets the radius to exactly $1$ and turns the drawing into the unit circle. Several things appear that only make sense at that radius.

The coordinate axes are drawn through the centre. A right triangle is shaded under the radius, with its horizontal leg in blue labelled $x$, its vertical leg in amber labelled $y$, and a right-angle mark at the foot. The point on the circle is labelled with its coordinates, which are $(\\cos\\theta, \\sin\\theta)$.

The formula column changes too. The arc length becomes $s = r\\theta = \\theta$ — on the unit circle an angle in radians is literally the length of its arc — and two further lines appear:

$$\\sin\\theta = \\frac{y}{r} = y \\qquad \\cos\\theta = \\frac{x}{r} = x$$

The general ratios have a denominator; at radius $1$ it disappears. That is the reason the unit circle is used to define the trigonometric functions for every angle, and it is the argument made on the [unit circle](!/trigonometry/unit-circle#1) lesson.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Formula Column`,
      content: `To the right of the circle, inside the graph, a column of formulas recomputes on every change. It is the part of the tool to watch while dragging.

From the top, it shows the angle in both units; then $s = r\\theta$ with the current radius and angle substituted and the resulting length; then the sector area, either as $\\frac{1}{2}r^2\\theta$ or, with the fraction view on, as $\\frac{\\theta}{2\\pi} \\cdot \\pi r^2$. With the one-radian marks on, it adds the equivalence arc $= r \\Leftrightarrow \\theta = 1$ rad and the size of a full turn. At $r = 1$ it adds the two ratios without their denominators.

The formulas are in the ink colour and the substituted numbers in amber, the colour of the arc and sector they measure. Every number shown is live — nothing in the column is a caption.

Because the column sits inside the drawing, it travels with it: the frozen figures further down this page carry their formula columns too, so each one states its own numbers.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Examples Row`,
      content: `The **Examples** row loads four complete states — angle, radius and both toggles — one per idea:

- **one radian** — θ $= 1$ on a circle of radius $2$, with the one-radian marks on.
- **arc length** — θ $= \\frac{3\\pi}{5}$, $r = 2$, the plain arc-length view.
- **sector area** — θ $= \\frac{2\\pi}{5}$, $r = 2$, with the sector shown as a fraction of the disc.
- **radius 1** — θ $= \\frac{2\\pi}{9}$ on the unit circle, with the triangle and coordinates.

These are the same four states frozen further down this page, so each example button and each frozen figure show the same picture. Loading one locks nothing: the handle, both sliders and all three toggles keep working, so an example is a starting point for your own changes rather than a mode.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Legend and Colours`,
      content: `The legend under the circle names four colours, and they keep their meaning in every state:

- **Indigo** is the radius — both radii, the handle, the one-radian reference radius, and the coordinates at $r = 1$.
- **Dark amber** is the arc — the curved length $s$, the angle marker, the one-radian ticks, and every substituted number in the formula column.
- **Light amber** is the sector — pale in the normal view, stronger when shown as a fraction.
- **Grey** is the circle itself.

Two exceptions follow the meaning rather than the rule. In the fraction view both radii switch to the arc's amber, so the slice reads as one shape. On the unit circle the triangle's legs use blue for $x$ and amber for $y$, matching the convention of the [unit circle](!/visual-tools/unit-circle) visualizer.

The same palette is used in the figures on the [degrees and radians](!/trigonometry/degrees-radians) lesson, so a figure there and a state of this tool read as one picture.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Explanations Panel`,
      content: `The panel on the right of the tool works through the ideas in a fixed order, recomputing each with the current numbers.

**Arc length** states $s = r\\theta$ with the substitution, explains that it is the definition of the radian turned around, and shows the degree version with its conversion factor $\\frac{\\pi}{180}$ restored. **One radian** appears only while the marks are on, with a badge when θ is exactly $1$. **Sector area** gives $\\frac{1}{2}r^2\\theta$ and how it comes from the fraction of the disc, plus the percentage in the fraction view. **Changing r** states that θ does not depend on the radius while the arc grows like $r$ and the area like $r^2$. **Radius 1** writes out the unit-circle point and the ratios without denominators — or, at any other radius, invites you to set $r = 1$.

At the bottom, a note links to the four frozen states on this page, so any idea in the panel can be looked at as a fixed figure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `What a Radian Is`,
      content: `A **radian** is defined by a length, not by dividing the circle into parts. An angle measures $1$ radian when the arc it cuts off is exactly as long as the radius. In general the radian measure of a central angle is the arc length divided by the radius:

$$\\theta = \\frac{s}{r}$$

Degrees work differently: $360$ is a convention inherited from Babylonian astronomy, and nothing in the geometry of a circle picks it out. Radians come out of the circle itself, which is why the formulas of calculus and physics take their simplest form in them.

A full turn in radians is the circumference divided by the radius, $\\frac{2\\pi r}{r} = 2\\pi$. That is where the six-and-a-bit one-radian arcs of the [marks view](!#the-one-radian-marks) come from, and why $180° = \\pi$ is the conversion between the two units. The [radian measurement](!/trigonometry/degrees-radians#2) section of the lesson develops the same definition with the conversion rules.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Why s = rθ Needs Radians`,
      content: `Turning the definition $\\theta = \\frac{s}{r}$ around gives the arc-length formula directly:

$$s = r\\theta$$

No constant appears, because none was put in: the radian was defined to make this true. The same is true of the sector area. A sector is the fraction $\\frac{\\theta}{2\\pi}$ of a disc of area $\\pi r^2$, and

$$\\frac{\\theta}{2\\pi} \\cdot \\pi r^2 = \\frac{1}{2}r^2\\theta$$

Measure the angle in degrees and the constant comes back. The arc becomes $s = r \\cdot \\theta° \\cdot \\frac{\\pi}{180}$ and the area $\\frac{\\theta°}{360} \\cdot \\pi r^2$. The explanation panel prints the degree form of the arc length as a reminder that the clean formula belongs to radians only.

This is the practical reason radians dominate beyond elementary geometry: every formula that involves a length along a circle, an angular speed or a derivative of $\\sin$ carries a stray $\\frac{\\pi}{180}$ in degrees. The [arc length](!/trigonometry/degrees-radians#4) and [sector area](!/trigonometry/degrees-radians#5) sections of the lesson work through examples in both units.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Why the Angle Does Not Depend on r`,
      content: `Drag the radius slider and the angle readout does not change. That is not a feature of the tool but of the definition. $\\theta = \\frac{s}{r}$ is a ratio of two lengths measured on the same circle; scaling the circle by any factor $k$ multiplies both the arc and the radius by $k$, and the ratio stays the same.

So radians are a pure number with no unit of length: an angle of $1.2$ rad is $1.2$ rad on a coin and on a planet's orbit. The things that do depend on the size of the circle depend on it in a fixed way. The arc length $s = r\\theta$ grows in proportion to $r$. The sector area $\\frac{1}{2}r^2\\theta$ grows in proportion to $r^2$, like every area under scaling.

The [radius slider](!#setting-the-radius) makes the two growth rates visible side by side: from $r = 1$ to $r = 2$ the arc doubles and the sector quadruples, while the angle marker at the centre keeps the same opening throughout. The unit circle, $r = 1$, is the one size at which the arc and the angle are the same number.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `Related Concepts and Tools`,
      content: `This tool is about measuring angles by length, so its neighbours are the tools and lessons that use those angles.

The [Angle Explorer](!/trigonometry/visual-tools/angle-explorer) switches an angle between degrees and radians and places it in standard position, quadrants and all — the natural first stop before measuring arcs. The [Unit Circle Visualizer](!/visual-tools/unit-circle) continues from the radius-1 case here, reading off the sine and cosine of every special angle. The [Inverse Trigonometric Functions](!/trigonometry/visual-tools/inverse-functions) explorer runs the relationship backwards, returning an angle in radians from a value.

For the theory in prose, the [degrees and radians](!/trigonometry/degrees-radians) lesson covers degree and radian measure, conversion, arc length and sector area in full, and the [unit circle](!/trigonometry/unit-circle) lesson builds the trigonometric functions from the radius-1 circle this tool ends on.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `One Radian`,
      content: `The first example sets θ to exactly $1$ on a circle of radius $2$ and turns on the one-radian marks. It is the frozen form of [the one-radian marks](!#the-one-radian-marks).`,
      after: `The dashed arc labelled arc = r carries the same tick marks as the two radii, so the three are visibly the same length, and the angle marker reads θ $= 1$. Around the circle, the ticks numbered $1$ to $6$ each mark one more radius-length of arc, and the gap after the sixth is the remaining $0.28$ of a full turn of $2\\pi$. The definition of the radian, argued in [what a radian is](!#what-a-radian-is), is this picture.`,
      before: ``,
      link: '',
    },

    obj15: {
      title: `Arc Length`,
      content: `The second example sets θ $= \\frac{3\\pi}{5}$ on a circle of radius $2$, with no toggles on — the plain view of [arc length](!#setting-the-angle).`,
      after: `The formula column reads $s = r\\theta = 2 \\times 1.885 \\approx 3.77$, and the dark amber arc is that long in the units of the drawing. No factor of $\\frac{\\pi}{180}$ appears anywhere, because the angle is in radians; the reason is set out in [why s = rθ needs radians](!#why-s-r-needs-radians). The sector below the arc is shaded lightly, a reminder that the same angle also fixes an area.`,
      before: ``,
      link: '',
    },

    obj16: {
      title: `Sector Area`,
      content: `The third example sets θ $= \\frac{2\\pi}{5}$ on a circle of radius $2$ and shows the [sector as a fraction](!#the-sector-as-a-fraction) of the disc.`,
      after: `The angle is one fifth of a full turn, so the sector is one fifth of the disc. The formula column shows exactly that: $\\frac{\\theta}{2\\pi} = 0.2$, times the disc area $\\pi r^2 = 4\\pi \\approx 12.566$, gives $A \\approx 2.513$ — the same value $\\frac{1}{2}r^2\\theta = \\frac{1}{2} \\cdot 4 \\cdot \\frac{2\\pi}{5}$ produces. The explanation panel adds that the slice is $20\\%$ of the disc.`,
      before: ``,
      link: '',
    },

    obj17: {
      title: `Radius 1`,
      content: `The last example sets θ $= \\frac{2\\pi}{9}$ — $40°$ — on the unit circle, the state the [r = 1 button](!#the-r-1-button) produces.`,
      after: `The right triangle under the radius has hypotenuse $1$, so its legs are $\\cos\\theta$ and $\\sin\\theta$ themselves, and the point on the circle is labelled with those two numbers. The formula column shows $\\sin\\theta = \\frac{y}{r} = y$ and $\\cos\\theta = \\frac{x}{r} = x$: the denominator is gone. It also shows $s = \\theta$, the arc length and the angle being one number, as described in [why the angle does not depend on r](!#why-the-angle-does-not-depend-on-r).`,
      before: ``,
      link: '',
    },
  }

  const introContent = { id: 'intro', title: '', content: `` }

  const faqQuestions = {
    obj0: {
      question: 'What is one radian?',
      answer: 'One radian is the central angle whose arc is exactly as long as the radius of the circle. In general the radian measure of an angle is the arc length divided by the radius, so a full turn is the circumference over the radius, 2 pi, which is about 6.28 radians.',
      sectionId: 'what-a-radian-is',
    },
    obj1: {
      question: 'Why does the arc length formula s = r theta only work in radians?',
      answer: 'Because the radian is defined as arc length divided by radius, so s = r theta is that definition rearranged and contains no constant. If the angle is measured in degrees, the conversion factor pi/180 has to be put back: s = r times theta in degrees times pi/180.',
      sectionId: 'why-s-r-needs-radians',
    },
    obj2: {
      question: 'How is the sector area formula derived?',
      answer: 'A sector is the fraction theta/(2 pi) of the whole disc, whose area is pi r squared. Multiplying gives (theta/(2 pi)) times pi r squared, which simplifies to one half r squared theta, with theta in radians.',
      sectionId: 'the-sector-as-a-fraction',
    },
    obj3: {
      question: 'Does the size of an angle in radians depend on the radius?',
      answer: 'No. An angle in radians is the ratio of arc length to radius, and scaling the circle multiplies both by the same factor, so the ratio is unchanged. The arc length grows in proportion to the radius and the sector area in proportion to its square, but the angle stays the same.',
      sectionId: 'why-the-angle-does-not-depend-on-r',
    },
    obj4: {
      question: 'Why is the unit circle used for sine and cosine?',
      answer: 'On a circle of radius 1 the ratios sin theta = y/r and cos theta = x/r lose their denominator, so sine and cosine are simply the y and x coordinates of the point on the circle. The arc length also equals the angle, so the angle in radians is a length along the circle.',
      sectionId: 'the-r-1-button',
    },
  }

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Arc and Sector Explorer',
      url: 'https://www.learnmathclass.com/trigonometry/visual-tools/arc-sector',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      description: 'Interactive explorer for radian measure: drag the angle and radius on one circle and watch arc length s = r theta and sector area one half r squared theta respond, with one-radian marks and the unit circle.',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@type': 'Organization', name: 'Learn Math Class' },
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Trigonometry', item: 'https://www.learnmathclass.com/trigonometry' },
        { '@type': 'ListItem', position: 3, name: 'Visual Tools', item: 'https://www.learnmathclass.com/trigonometry/visual-tools' },
        { '@type': 'ListItem', position: 4, name: 'Arc and Sector Explorer', item: 'https://www.learnmathclass.com/trigonometry/visual-tools/arc-sector' },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(faqQuestions).map((key) => ({
        '@type': 'Question',
        name: faqQuestions[key].question,
        acceptedAnswer: { '@type': 'Answer', text: faqQuestions[key].answer },
      })),
    },
  }

  return {
    props: {
      relatedTools: getRelatedTools('arc-sector'),
      instructions,
      explanations,
      stateUnits,
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: 'Arc Length and Sector Area Explorer | Learn Math Class',
        description: 'Drag the angle and radius on one circle and watch arc length s = rθ and sector area ½r²θ respond. One-radian marks, sector fractions and the unit circle.',
        hubDescription: 'An interactive explorer for radian measure. Drag the central angle and the radius on one circle and watch the arc length s = r theta and the sector area one half r squared theta recompute live. Lay radius-length arcs around the circle to see what one radian is, show the sector as a fraction of the disc, and shrink to radius 1 to reach the unit circle.',
        category: 'Angles',
        subCategory: 'Radian Measure',
        keywords: keyWords.join(', '),
        url: '/trigonometry/visual-tools/arc-sector',
        name: 'Arc and Sector Explorer',
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="44" r="24" fill="#B5D4F4" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.2"/><path d="M 34 44 L 58 44 A 24 24 0 0 0 46.97 23.8 Z" fill="#FAC775" fill-opacity="0.45"/><line x1="34" y1="44" x2="58" y2="44" stroke="#85B7EB" stroke-width="1.9"/><line x1="34" y1="44" x2="46.97" y2="23.8" stroke="#85B7EB" stroke-width="1.9"/><path d="M 58 44 A 24 24 0 0 0 46.97 23.8" fill="none" stroke="#FAC775" stroke-width="2.4"/><path d="M 43 44 A 9 9 0 0 0 38.86 36.43" fill="none" stroke="#FAC775" stroke-width="1.2"/><circle cx="34" cy="44" r="1.8" fill="#E6F1FB"/><circle cx="46.97" cy="23.8" r="2.4" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="61" y="30" font-family="Georgia,serif" font-size="8" fill="#FAC775" font-style="italic">s</text><text x="46" y="52" font-family="Georgia,serif" font-size="8" fill="#85B7EB" font-style="italic">r</text><text x="44" y="40" font-family="Georgia,serif" font-size="6.5" fill="#FAC775" font-style="italic">θ</text><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle">s = r θ</text></svg>`,
      },
    },
  }
}

export default function ArcSectorToolPage({
  relatedTools,
  instructions,
  explanations,
  stateUnits,
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
}) {

  const plain = (id, obj) => ({ id, title: obj.title, link: obj.link, content: [obj.content] })
  const framed = (id, obj, unitKey) => ({
    id,
    title: obj.title,
    link: obj.link,
    content: [
      obj.content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      obj.after,
    ],
  })

  const genericSections = [
    plain('setting-the-angle', sectionsContent.obj1),
    plain('setting-the-radius', sectionsContent.obj2),
    plain('the-one-radian-marks', sectionsContent.obj3),
    plain('the-sector-as-a-fraction', sectionsContent.obj4),
    plain('the-r-1-button', sectionsContent.obj5),
    plain('the-formula-column', sectionsContent.obj6),
    plain('the-examples-row', sectionsContent.obj7),
    plain('the-legend-and-colours', sectionsContent.obj8),
    plain('the-explanations-panel', sectionsContent.obj9),
    plain('what-a-radian-is', sectionsContent.obj10),
    plain('why-s-r-needs-radians', sectionsContent.obj11),
    plain('why-the-angle-does-not-depend-on-r', sectionsContent.obj12),
    framed('one-radian', sectionsContent.obj14, 'oneRadian'),
    framed('arc-length', sectionsContent.obj15, 'arcLength'),
    framed('sector-area', sectionsContent.obj16, 'sectorArea'),
    framed('radius-1', sectionsContent.obj17, 'radiusOne'),
    plain('related-concepts-and-tools', sectionsContent.obj13),
  ].filter((s) => s.title)

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

      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>
        Arc Length and Sector Area
      </h1>
      <br />

      <div style={{ width: '80%', margin: 'auto' }}>
        <ExplanationDetails
          title='How to use'
          instructions={instructions}
          accent='#1e40af'
        />
      </div>
      <br />

      <div style={{ width: '90%', margin: 'auto', zoom: 0.9 }}>
        <ArcSectorExplorer
          explanations={explanations}
          renderText={processContent}
        />
      </div>

      <br />
      <br />

      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br />
      <br />

      {/* IntroSection and KeyTermsCard stay commented on a tool page
          (visual-tool-page-creation-instructions v2, step 4, rulings 2 and 3).

      <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      */}

      <RelatedTools tools={relatedTools} />

      <Sections sections={genericSections} />

      <br />
      <br />
      <br />
    </>
  )
}
