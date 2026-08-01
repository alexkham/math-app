

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import SiblingsNavStandalone  from '../../../../app/components/SiblingsNavStandalone'
import HalfAngleExplorer from '../../../../app/components/trigonometry/identities/half-angle/HalfAngleExplorer'
import halfDiagrams from '../../../../app/components/trigonometry/identities/half-angle/halfAngleDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'half angle identities',
    'half angle formulas',
    'sin alpha over 2 identity',
    'cos alpha over 2 identity',
    'tan alpha over 2 identity',
    'csc half angle',
    'sec half angle',
    'cot half angle',
    'half angle proof',
    'half angle calculator',
    'trigonometric identities visualizer',
    'interactive half angle',
    'derive half angle formulas',
    'bisected isosceles triangle proof',
    'half angle geometric proof'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Half-angle identity** — a formula expressing a trig function of $\\alpha/2$ in terms of trig functions of $\\alpha$.
• **Geometric proof** — a derivation that uses a drawing (an isosceles triangle, two radii, a perpendicular bisector) rather than algebra.
• **Bisector** — a line that splits an angle into two equal halves. Here, $OM$ bisects the apex $\\alpha$ into two angles of $\\alpha/2$.
• **Reciprocal identity** — a function written as $1/\\text{(another)}$. $\\csc = 1/\\sin$, $\\sec = 1/\\cos$, $\\cot = 1/\\tan$.
• **Derived identity** — one obtained by combining or rearranging others. $\\tan(\\alpha/2)$, $\\csc(\\alpha/2)$, $\\sec(\\alpha/2)$, and $\\cot(\\alpha/2)$ all follow from the formulas for $\\sin(\\alpha/2)$ and $\\cos(\\alpha/2)$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Switching Between Functions`,
      content:`Six tabs at the top let you pick which half-angle identity to study: $\\sin(\\alpha/2)$, $\\cos(\\alpha/2)$, $\\tan(\\alpha/2)$, $\\csc(\\alpha/2)$, $\\sec(\\alpha/2)$, $\\cot(\\alpha/2)$.

How selection changes the view:
• $\\sin$ and $\\cos$ open the [geometric proof](!#geometric-proofs-sin2-and-cos2) scene with a step-by-step animation.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the [derived identity card](!#derived-identities-tan2-csc2-sec2-cot2) with the algebraic chain.
• The active tab is highlighted in deep blue.
• The URL updates with $?halfFn=...$, so links you copy preserve the selected function.

Clicking any row of the **formula table** at the bottom also jumps to that function.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Adjusting the Angle α`,
      content:`Each view exposes a slider for the **base angle $\\alpha$** in degrees, between $20°$ and $160°$. The half angle is then $\\alpha/2$, ranging from $10°$ to $80°$.

What changes as you slide:
• On geometric scenes, the SVG triangle resizes and the apex $\\alpha$ updates immediately.
• The number readout shows the current value of $\\alpha$.
• The verification cards recompute both sides of the identity at the new $\\alpha/2$.

Sweep through several values to confirm each identity is not a coincidence at one angle but a true equality.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Playing Through a Geometric Proof`,
      content:`When $\\sin$ or $\\cos$ is active, an animated proof unfolds in [six steps](!#sine-half-step-1-setup). A toolbar gives you control:

• **Reset** — return to step 0 with a blank scene.
• **Prev** / **Next** — step through one stage at a time.
• **Play** / **Pause** — advance automatically.
• **Speed selector** — $0.5\\times$, $1\\times$, $1.5\\times$, $2\\times$.

Each step adds one geometric element (radii, triangle fill, bisector, half-angles, leg labels, final metrics). The right-hand panel logs each step with its name and reasoning.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Geometric Scene`,
      content:`The SVG shows the unit circle with two radii $OA$ and $OB$ of length $1$ meeting at the center $O$ with angle $\\alpha$ between them.

Elements that appear across the steps:
• **Red arc** at $O$ — the apex angle $\\alpha$.
• **Indigo chord** $AB$ — the base of the isosceles triangle.
• **Blue segment** $OM$ — the [perpendicular bisector](!#sine-half-step-3-bisect), equal to $\\cos(\\alpha/2)$.
• **Half-angles** at $O$ — each labeled $\\alpha/2$ once the bisector is drawn.
• **Half-chord labels** — $\\sin(\\alpha/2)$ on segments $MA$ and $MB$.

A small right-angle mark appears at $M$ when the perpendicular bisector becomes visible.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Working with Derived Identities`,
      content:`Selecting $\\tan(\\alpha/2)$, $\\csc(\\alpha/2)$, $\\sec(\\alpha/2)$, or $\\cot(\\alpha/2)$ opens a different card layout. Instead of a triangle, it shows the **algebraic derivation** as a chain of equations.

Layout of the derived card:
• A short intro explains which earlier identity the current one rests on.
• **Jump buttons** link directly to the [geometric proofs](!#geometric-proofs-sin2-and-cos2) of the source identities.
• A multi-line derivation block shows each manipulation with a brief side note.
• Verification cards confirm both sides match numerically.

This split keeps the geometric ideas isolated to two functions and treats the other four as algebraic consequences.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Formula Table`,
      content:`A reference table beneath every scene lists all six identities at once:

• **Function** column — the name of the trig function with $\\alpha/2$ argument.
• **Identity** column — the right-hand side of the formula.
• **Value** column — the numeric value at the current $\\alpha/2$.
• **Source** column — labels each identity as **geometric** ($\\sin$, $\\cos$) or **via X** for derived ones.

Click any row to make that function active. The current row gets a deep-blue left border and tinted background.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Verifying Identities Numerically`,
      content:`Every scene includes two metric cards that compute both sides of the active identity at the current $\\alpha$.

Example for $\\sin(\\alpha/2)$:
• Left card shows $\\sin(\\alpha/2)$.
• Right card shows $\\sqrt{(1 - \\cos\\alpha)/2}$.

The two numbers always match (within rounding to three decimals). Sweeping the slider while watching the cards is a fast empirical check that the identity holds for every $\\alpha$, not just the one in the picture. The formula table mirrors this across all six functions simultaneously.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Geometric Proofs: sin(α/2) and cos(α/2)`,
      content:`The two foundational identities are proved by drawing an isosceles triangle with two unit radii.

[sin(α/2)](!#the-sine-half-angle-identity) — apply the law of cosines and equate with the squared chord:
$$|AB|^2 = 2 - 2\\cos\\alpha = (2\\sin(\\alpha/2))^2$$
Solving gives $\\sin(\\alpha/2) = \\sqrt{(1 - \\cos\\alpha)/2}$.

[cos(α/2)](!#the-cosine-half-angle-identity) — from Pythagoras in the half-triangle, $\\cos^2(\\alpha/2) = 1 - \\sin^2(\\alpha/2)$. Substituting the sin half-angle identity:
$$\\cos(\\alpha/2) = \\sqrt{(1 + \\cos\\alpha)/2}$$

For full coverage and equivalent forms (including sign choices by quadrant), see the **half angle identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan(α/2), csc(α/2), sec(α/2), cot(α/2)`,
      content:`The four remaining identities follow directly from the first two:

[tan(α/2)](!#the-tangent-half-angle-identity) — from $\\tan = \\sin/\\cos$ applied to the half angle:
$$\\tan(\\alpha/2) = \\sqrt{\\frac{1 - \\cos\\alpha}{1 + \\cos\\alpha}}$$

[csc(α/2)](!#the-cosecant-half-angle-identity) — reciprocal of $\\sin(\\alpha/2)$:
$$\\csc(\\alpha/2) = \\sqrt{\\frac{2}{1 - \\cos\\alpha}}$$

[sec(α/2)](!#the-secant-half-angle-identity) — reciprocal of $\\cos(\\alpha/2)$:
$$\\sec(\\alpha/2) = \\sqrt{\\frac{2}{1 + \\cos\\alpha}}$$

[cot(α/2)](!#the-cotangent-half-angle-identity) — reciprocal of $\\tan(\\alpha/2)$:
$$\\cot(\\alpha/2) = \\sqrt{\\frac{1 + \\cos\\alpha}{1 - \\cos\\alpha}}$$

For step-by-step derivations and alternative forms, see the **trigonometric identities page** and the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Half-Angle Identities Matter`,
      content:`Half-angle identities are essential whenever a problem asks for a trig function at an angle that is not on the unit circle but is half of one that is.

• **Exact-value computation** — find $\\sin 15°$, $\\cos 22.5°$, $\\tan 75°$ from $\\sin 30°$, $\\cos 45°$, $\\cos 150°$.
• **Integration** — the Weierstrass substitution $t = \\tan(\\alpha/2)$ converts rational trig integrals into rational functions of $t$.
• **Equation solving** — reduce equations mixing $\\sin\\alpha$ and $\\sin(\\alpha/2)$ to single-argument form.
• **Geometry** — apothems, chord lengths, and inscribed-polygon side lengths all use half-angle formulas.

For applications and worked examples, see the **trigonometric identities applications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Double Angle Identities** — companion formulas for $\\sin(2\\theta)$, $\\cos(2\\theta)$, and beyond.
• **Pythagorean Identities** — $\\sin^2\\theta + \\cos^2\\theta = 1$ and its companions, used in the cos half-angle proof.
• **Sum and Difference Identities** — base relations from which double- and half-angle identities are derived.
• **Unit Circle** — geometric setup for every identity in this tool.
• **Trigonometric Functions Graphs** — see how $\\sin$, $\\cos$, $\\tan$ and their reciprocals evolve as the angle varies.
• **Triangle Explorer** — interactive triangles with built-in law of sines and law of cosines.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`The Sine Half-Angle Identity`,
      content:`The identity $\\sin(\\alpha/2) = \\sqrt{(1 - \\cos\\alpha)/2}$ is proved geometrically by measuring the chord of an isosceles triangle two ways — the same figure as the double-angle proofs, read in the other direction.

${halfDiagrams.sin.overview}

The proof's six stages: [setup](!#sine-half-step-1-setup), [law of cosines](!#sine-half-step-2-law-of-cosines-on-triangle-oab), [bisect](!#sine-half-step-3-bisect), [read off the half-chord](!#sine-half-step-4-read-off-the-half-chord), [square the chord](!#sine-half-step-5-square-the-chord), and [equate and solve](!#sine-half-step-6-equate-and-solve).

Within the tool's range ($\\alpha$ from $20°$ to $160°$) the half angle stays acute, so the positive square root is always the right choice. This identity feeds [cosecant's](!#the-cosecant-half-angle-identity) formula directly and supplies half of [tangent's](!#the-tangent-half-angle-identity).`,
      before:``,
      after:``,
      link:'',
    },
    obj13:{
      title:`The Cosine Half-Angle Identity`,
      content:`The identity $\\cos(\\alpha/2) = \\sqrt{(1 + \\cos\\alpha)/2}$ needs no second measurement: it rests on the [sine half-angle identity](!#the-sine-half-angle-identity) plus one application of Pythagoras inside the right triangle the bisector creates.

${halfDiagrams.cos.overview}

Its six stages: [setup](!#cosine-half-step-1-setup), [bisect](!#cosine-half-step-2-bisect), [identify the legs](!#cosine-half-step-3-identify-the-legs), [apply Pythagoras](!#cosine-half-step-4-apply-pythagoras), [substitute the sin half-angle](!#cosine-half-step-5-substitute-the-sin-half-angle), and [take the root](!#cosine-half-step-6-take-the-root).

The sign flip between the two formulas — $1 - \\cos\\alpha$ for sine, $1 + \\cos\\alpha$ for cosine — comes straight from that Pythagorean complement. [Secant's](!#the-secant-half-angle-identity) identity inverts this one.`,
      before:``,
      after:``,
      link:'',
    },
    obj14:{
      title:`The Tangent Half-Angle Identity`,
      content:`Tangent of the half angle divides the two geometric results:

${halfDiagrams.tan}

$$\\tan(\\alpha/2) = \\frac{\\sin(\\alpha/2)}{\\cos(\\alpha/2)} = \\sqrt{\\frac{1 - \\cos\\alpha}{1 + \\cos\\alpha}}$$

Combining the two square roots into one is legitimate because both radicands are positive in the tool's range. Equivalent forms $\\sin\\alpha/(1 + \\cos\\alpha)$ and $(1 - \\cos\\alpha)/\\sin\\alpha$ avoid the root entirely — that last form is the heart of the Weierstrass substitution. Sources: [sine](!#the-sine-half-angle-identity) and [cosine](!#the-cosine-half-angle-identity); its own reciprocal gives [cotangent](!#the-cotangent-half-angle-identity).`,
      before:``,
      after:``,
      link:'',
    },
    obj15:{
      title:`The Cosecant Half-Angle Identity`,
      content:`Cosecant inverts the sine result:

${halfDiagrams.csc}

$$\\csc(\\alpha/2) = \\frac{1}{\\sin(\\alpha/2)} = \\sqrt{\\frac{2}{1 - \\cos\\alpha}}$$

Inverting under the root flips the fraction — the $2$ moves to the numerator. The formula diverges as $\\alpha \\to 0$, where the half angle's sine vanishes; inside the tool's $20°$–$160°$ range both verification cards stay finite and equal. Source: [the sine half-angle identity](!#the-sine-half-angle-identity).`,
      before:``,
      after:``,
      link:'',
    },
    obj16:{
      title:`The Secant Half-Angle Identity`,
      content:`Secant inverts the cosine result:

${halfDiagrams.sec}

$$\\sec(\\alpha/2) = \\frac{1}{\\cos(\\alpha/2)} = \\sqrt{\\frac{2}{1 + \\cos\\alpha}}$$

Like its partner [cosecant](!#the-cosecant-half-angle-identity), it satisfies $|\\sec(\\alpha/2)| \\ge 1$ wherever defined. It would diverge only as $\\alpha \\to 360°$, far outside the slider's range. Source: [the cosine half-angle identity](!#the-cosine-half-angle-identity).`,
      before:``,
      after:``,
      link:'',
    },
    obj17:{
      title:`The Cotangent Half-Angle Identity`,
      content:`Cotangent flips the tangent result upside down:

${halfDiagrams.cot}

$$\\cot(\\alpha/2) = \\frac{1}{\\tan(\\alpha/2)} = \\sqrt{\\frac{1 + \\cos\\alpha}{1 - \\cos\\alpha}}$$

The inversion swaps numerator and denominator under the root. Because [tangent](!#the-tangent-half-angle-identity) was itself derived, cotangent stands two steps from the geometry, resting ultimately on [sine](!#the-sine-half-angle-identity) and [cosine](!#the-cosine-half-angle-identity).`,
      before:``,
      after:``,
      link:'',
    },
    obj18:{
      title:`Sine Half-Angle, Step 1: Setup`,
      content:`The [sine half-angle proof](!#the-sine-half-angle-identity) opens with two unit radii $OA$ and $OB$ meeting at the center with apex angle $\\alpha$ — and a goal: express $\\sin(\\alpha/2)$ using only $\\alpha$.

${halfDiagrams.sin.steps[0]}

The half angle does not exist in the figure yet; it will appear the moment the apex is bisected.`,
      before:``,
      after:``,
      link:'',
    },
    obj19:{
      title:`Sine Half-Angle, Step 2: Law of Cosines on Triangle OAB`,
      content:`Measure the chord first: the law of cosines with two unit sides and included angle $\\alpha$ gives

${halfDiagrams.sin.steps[1]}

$$|AB|^2 = 1 + 1 - 2\\cos\\alpha = 2 - 2\\cos\\alpha$$

One expression for the squared chord, in terms of the full angle only.`,
      before:``,
      after:``,
      link:'',
    },
    obj20:{
      title:`Sine Half-Angle, Step 3: Bisect`,
      content:`Drop $OM$ perpendicular to $AB$: it splits the apex into two halves of $\\alpha/2$ and lands on the chord's midpoint $M$.

${halfDiagrams.sin.steps[2]}

This is where the half angle enters the picture — as a genuine geometric angle, not an algebraic trick.`,
      before:``,
      after:``,
      link:'',
    },
    obj21:{
      title:`Sine Half-Angle, Step 4: Read Off the Half-Chord`,
      content:`Right triangle $OMA$ has hypotenuse $1$ and angle $\\alpha/2$ at $O$, so its opposite leg is exactly the half-chord:

${halfDiagrams.sin.steps[3]}

$$MA = \\sin(\\alpha/2) \\qquad AB = 2\\sin(\\alpha/2)$$

A second expression for the chord — this one in terms of the half angle.`,
      before:``,
      after:``,
      link:'',
    },
    obj22:{
      title:`Sine Half-Angle, Step 5: Square the Chord`,
      content:`Square the half-chord expression to match the law-of-cosines form:

${halfDiagrams.sin.steps[4]}

$$|AB|^2 = (2\\sin(\\alpha/2))^2 = 4\\sin^2(\\alpha/2)$$

Both measurements of $|AB|^2$ are now on the table.`,
      before:``,
      after:``,
      link:'',
    },
    obj23:{
      title:`Sine Half-Angle, Step 6: Equate and Solve`,
      content:`Set the two chord measurements equal and solve for the half-angle sine:

${halfDiagrams.sin.steps[5]}

$$2 - 2\\cos\\alpha = 4\\sin^2(\\alpha/2) \\;\\Longrightarrow\\; \\sin(\\alpha/2) = \\sqrt{\\frac{1 - \\cos\\alpha}{2}}$$

The verification cards keep both sides numerically equal across the whole slider range.`,
      before:``,
      after:``,
      link:'',
    },
    obj24:{
      title:`Cosine Half-Angle, Step 1: Setup`,
      content:`The [cosine half-angle proof](!#the-cosine-half-angle-identity) starts from the same figure: unit radii $OA$ and $OB$ with apex $\\alpha$, aiming for $\\cos(\\alpha/2)$ in terms of $\\alpha$.

${halfDiagrams.cos.steps[0]}

Unlike sine's proof, this one will finish without ever measuring the chord by law of cosines.`,
      before:``,
      after:``,
      link:'',
    },
    obj25:{
      title:`Cosine Half-Angle, Step 2: Bisect`,
      content:`Drop the perpendicular bisector $OM$ immediately: two half-angles of $\\alpha/2$ at the center, and a right angle at $M$.

${halfDiagrams.cos.steps[1]}

Right triangle $OMA$ is the whole stage for the rest of this proof.`,
      before:``,
      after:``,
      link:'',
    },
    obj26:{
      title:`Cosine Half-Angle, Step 3: Identify the Legs`,
      content:`In right triangle $OMA$, the hypotenuse is $1$ and the angle at $O$ is $\\alpha/2$, so both legs are the basic ratios:

${halfDiagrams.cos.steps[2]}

$$MA = \\sin(\\alpha/2) \\qquad OM = \\cos(\\alpha/2)$$

The bisector segment $OM$ is the quantity the proof is after.`,
      before:``,
      after:``,
      link:'',
    },
    obj27:{
      title:`Cosine Half-Angle, Step 4: Apply Pythagoras`,
      content:`The legs of a right triangle with unit hypotenuse obey the Pythagorean identity:

${halfDiagrams.cos.steps[3]}

$$\\sin^2(\\alpha/2) + \\cos^2(\\alpha/2) = 1 \\;\\Longrightarrow\\; \\cos^2(\\alpha/2) = 1 - \\sin^2(\\alpha/2)$$

Cosine is now expressed through the half-angle sine, which step 5 already knows how to replace.`,
      before:``,
      after:``,
      link:'',
    },
    obj28:{
      title:`Cosine Half-Angle, Step 5: Substitute the Sin Half-Angle`,
      content:`Insert the result of the [sine proof](!#sine-half-step-6-equate-and-solve), $\\sin^2(\\alpha/2) = (1 - \\cos\\alpha)/2$:

${halfDiagrams.cos.steps[4]}

$$\\cos^2(\\alpha/2) = 1 - \\frac{1 - \\cos\\alpha}{2} = \\frac{1 + \\cos\\alpha}{2}$$

The sign inside flips from minus to plus — the fingerprint of the Pythagorean complement.`,
      before:``,
      after:``,
      link:'',
    },
    obj29:{
      title:`Cosine Half-Angle, Step 6: Take the Root`,
      content:`Take the positive square root (the half angle is acute throughout the tool's range):

${halfDiagrams.cos.steps[5]}

$$\\cos(\\alpha/2) = \\sqrt{\\frac{1 + \\cos\\alpha}{2}}$$

Both verification cards agree at every slider position — the numerical seal on the proof.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which half-angle identities does the explorer cover?",
      answer: "All six standard identities: sin(alpha/2), cos(alpha/2), tan(alpha/2), csc(alpha/2), sec(alpha/2), and cot(alpha/2). Each has its own tab and its own derivation view, either geometric or algebraic."
    },
    obj2: {
      question: "Why do only sin and cos get geometric proofs?",
      answer: "Sine and cosine are the foundational half-angle identities. Tangent is sin over cos, and cosecant, secant, and cotangent are reciprocals of sin, cos, and tan. The tool limits geometric proofs to sin and cos and treats the other four as algebraic consequences."
    },
    obj3: {
      question: "How is sin(alpha/2) proved geometrically?",
      answer: "Draw an isosceles triangle with two unit radii meeting at angle alpha. The chord length squared is 2 minus 2 cos alpha by the law of cosines, and also equals 4 sin squared (alpha/2) from the bisected half-chord. Equating gives sin(alpha/2) equal to the square root of (1 minus cos alpha) over 2."
    },
    obj4: {
      question: "Can I verify an identity at a specific angle?",
      answer: "Yes. Move the alpha slider to the angle you want, then read the two metric cards near the bottom. They show the values of both sides of the identity, computed independently. The formula table at the bottom does the same for all six functions at once."
    },
    obj5: {
      question: "What does the source column of the formula table mean?",
      answer: "It tells you how each identity was obtained. Sine is labeled geometric. Cosine is via sin (proved using the sin half-angle and Pythagoras). Tangent is via sin and cos. Cosecant, secant, and cotangent are via their reciprocal partners."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Half Angle Identities Explorer",
      "description": "Explore and verify all six half-angle identities (sin, cos, tan, csc, sec, cot) with animated geometric proofs, algebraic derivations, and live numeric checks.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/half-angle-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six tabs covering sin, cos, tan, csc, sec, and cot half-angle identities",
        "Animated step-by-step geometric proofs for sin(alpha/2) and cos(alpha/2)",
        "Algebraic derivation cards for tan, csc, sec, and cot with jump-to-source buttons",
        "Alpha slider from 20 to 160 degrees with live updates",
        "Play, pause, step, reset, and speed controls for the animation",
        "Live verification cards comparing both sides of each identity",
        "Formula table summarizing all six identities, values, and proof sources",
        "URL query parameter sync so links preserve the active function"
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
          "name": "Half Angle Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/half-angle-identities"
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




  const explanations = {
    sin: { steps: [
      `Two radii OA and OB of length 1, meeting at center O with angle α between them. We want to express sin(α/2) in terms of α. [Full treatment](!#sine-half-step-1-setup) · [The sine half-angle identity](!#the-sine-half-angle-identity)`,
      `|AB|² = 1 + 1 − 2·1·1·cos α = 2 − 2cos α. [Full treatment](!#sine-half-step-2-law-of-cosines-on-triangle-oab) · [The sine half-angle identity](!#the-sine-half-angle-identity)`,
      `Drop OM perpendicular to AB. It splits the apex α into two halves of α/2, and M is the midpoint of chord AB. [Full treatment](!#sine-half-step-3-bisect) · [The sine half-angle identity](!#the-sine-half-angle-identity)`,
      `In right triangle OMA: hypotenuse OA = 1, angle at O is α/2. So MA = sin(α/2), and the full chord AB = 2 sin(α/2). [Full treatment](!#sine-half-step-4-read-off-the-half-chord) · [The sine half-angle identity](!#the-sine-half-angle-identity)`,
      `|AB|² = (2 sin(α/2))² = 4 sin²(α/2). [Full treatment](!#sine-half-step-5-square-the-chord) · [The sine half-angle identity](!#the-sine-half-angle-identity)`,
      `2 − 2cos α = 4 sin²(α/2)  ⟹  sin²(α/2) = (1 − cos α) / 2  ⟹  sin(α/2) = √((1 − cos α) / 2). [Full treatment](!#sine-half-step-6-equate-and-solve) · [The sine half-angle identity](!#the-sine-half-angle-identity)`,
    ] },
    cos: { steps: [
      `Two radii OA and OB of length 1, meeting at center O with angle α. We want cos(α/2) in terms of α. [Full treatment](!#cosine-half-step-1-setup) · [The cosine half-angle identity](!#the-cosine-half-angle-identity)`,
      `Drop OM perpendicular to AB. It splits α into α/2 + α/2 and creates right triangle OMA with the right angle at M. [Full treatment](!#cosine-half-step-2-bisect) · [The cosine half-angle identity](!#the-cosine-half-angle-identity)`,
      `In right triangle OMA: hypotenuse OA = 1, angle at O is α/2. So MA = sin(α/2) and OM = cos(α/2). [Full treatment](!#cosine-half-step-3-identify-the-legs) · [The cosine half-angle identity](!#the-cosine-half-angle-identity)`,
      `In OMA: sin²(α/2) + cos²(α/2) = 1, so cos²(α/2) = 1 − sin²(α/2). [Full treatment](!#cosine-half-step-4-apply-pythagoras) · [The cosine half-angle identity](!#the-cosine-half-angle-identity)`,
      `From the sin(α/2) identity: sin²(α/2) = (1 − cos α)/2. Substitute: cos²(α/2) = 1 − (1 − cos α)/2 = (1 + cos α)/2. [Full treatment](!#cosine-half-step-5-substitute-the-sin-half-angle) · [The cosine half-angle identity](!#the-cosine-half-angle-identity)`,
      `cos(α/2) = √((1 + cos α) / 2). [Full treatment](!#cosine-half-step-6-take-the-root) · [The cosine half-angle identity](!#the-cosine-half-angle-identity)`,
    ] },
    tan: { content: `Tangent is sine over cosine. Apply this to the half angle and substitute the two geometric identities. [Full treatment](!#the-tangent-half-angle-identity)` },
    csc: { content: `Cosecant is the reciprocal of sine. [Full treatment](!#the-cosecant-half-angle-identity)` },
    sec: { content: `Secant is the reciprocal of cosine. [Full treatment](!#the-secant-half-angle-identity)` },
    cot: { content: `Cotangent is the reciprocal of tangent — equivalently cos/sin of the half angle. [Full treatment](!#the-cotangent-half-angle-identity)` },
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
          seoData: {
        title: "Half Angle Identities: Interactive Proofs | Learn Math Class",
        description: "Explore all six half-angle identities: sin, cos, tan, csc, sec, cot. Animated geometric proofs, algebraic derivations, and live numeric verification.",
        hubDescription: "Half-Angle identities explorer covering all six trigonometric functions. Animated geometric proofs derive sin(α/2) and cos(α/2) from a bisected isosceles triangle, while algebraic derivation cards handle tan(α/2), csc(α/2), sec(α/2), and cot(α/2) with one-click jumps back to their source proofs. A live formula table and verification cards confirm each identity numerically as you sweep α from 20° to 160°.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/half-angle-identities",
        name: "Half Angle Identities Explorer"
      },

       }
    }
   }

export default function HalfAngleIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations}) {


  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'switching-between-functions',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'adjusting-the-angle',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'playing-through-a-geometric-proof',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'reading-the-geometric-scene',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'working-with-derived-identities',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'reading-the-formula-table',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'verifying-identities-numerically',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'geometric-proofs-sin2-and-cos2',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'derived-identities-tan2-csc2-sec2-cot2',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'why-half-angle-identities-matter',
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
        id:'the-sine-half-angle-identity',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'the-cosine-half-angle-identity',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'the-tangent-half-angle-identity',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'the-cosecant-half-angle-identity',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'the-secant-half-angle-identity',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    {
        id:'the-cotangent-half-angle-identity',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
        ]
    },
    {
        id:'sine-half-step-1-setup',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
        ]
    },
    {
        id:'sine-half-step-2-law-of-cosines-on-triangle-oab',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
        ]
    },
    {
        id:'sine-half-step-3-bisect',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
        ]
    },
    {
        id:'sine-half-step-4-read-off-the-half-chord',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
        ]
    },
    {
        id:'sine-half-step-5-square-the-chord',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
        ]
    },
    {
        id:'sine-half-step-6-equate-and-solve',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
        ]
    },
    {
        id:'cosine-half-step-1-setup',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
        ]
    },
    {
        id:'cosine-half-step-2-bisect',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
        ]
    },
    {
        id:'cosine-half-step-3-identify-the-legs',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
        ]
    },
    {
        id:'cosine-half-step-4-apply-pythagoras',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
        ]
    },
    {
        id:'cosine-half-step-5-substitute-the-sin-half-angle',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
        ]
    },
    {
        id:'cosine-half-step-6-take-the-root',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
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
   <h1 className='title' style={{marginTop:'20px',marginBottom:'0px'}}>Half Angle Trigonometric Identities</h1>
   <br/>
      <div style={{ display: 'grid', gridTemplateColumns: '100px minmax(0, 1fr)', gap: 8,alignItems: 'start' }}>
         <SiblingsNavStandalone
         // bg="#fafaf7"
         // color="#2c5d99"
         // activeColor="#143a66"
         // activeBg="#dde9f7"

         bg="#ffffff"
         color="#64748b"
         activeColor="#4F46E5"
         activeBg="#eef2ff"
         />
          <HalfAngleExplorer explanations={explanations}/>
       </div>


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