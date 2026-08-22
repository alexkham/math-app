import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NegativeAngleExplorer from '../../../../app/components/trigonometry/identities/negative-angle/NegativeAngleExplorer'
import negativeAngleDiagrams from '../../../../app/components/trigonometry/identities/negative-angle/negativeAngleDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'negative angle identities',
    'negative angle formulas',
    'sin negative theta identity',
    'cos negative theta identity',
    'tan negative theta identity',
    'csc sec cot negative angle',
    'even odd trig functions',
    'odd function sine',
    'even function cosine',
    'negative angle proof',
    'reflection unit circle',
    'trigonometric parity',
    'interactive negative angle',
    'derive negative angle identities',
    'trig identity calculator'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Negative angle identity** — a formula relating a trig function evaluated at $-\\theta$ to the same function at $\\theta$.
• **Even function** — satisfies $f(-x) = f(x)$. Its graph is symmetric about the y-axis. $\\cos$ and $\\sec$ are even.
• **Odd function** — satisfies $f(-x) = -f(x)$. Its graph is symmetric about the origin. $\\sin$, $\\tan$, $\\csc$, $\\cot$ are odd.
• **Reflection across the x-axis** — the geometric operation taking the terminal point $P = (\\cos\\theta, \\sin\\theta)$ to $P' = (\\cos\\theta, -\\sin\\theta)$, which is the terminal point of $-\\theta$.
• **Parity** — whether a function is even or odd, summarized in the **Parity** column of the formula table.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Switching Between Functions`,
      content:`Six tabs at the top let you select which negative-angle identity to study: $\\sin(-\\theta)$, $\\cos(-\\theta)$, $\\tan(-\\theta)$, $\\csc(-\\theta)$, $\\sec(-\\theta)$, $\\cot(-\\theta)$.

How selection changes the view:
• $\\sin$ and $\\cos$ open the **geometric proof** scene showing the reflection $P \\to P'$ on the unit circle.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the **derived identity card** with the algebraic chain.
• The active tab is highlighted in deep blue.
• The URL updates with $?negFn=...$ so links you share preserve the selected function.

Clicking any row of the **formula table** at the bottom also jumps to that function.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Adjusting the Angle θ`,
      content:`Each view exposes a slider for the angle $\\theta$ in degrees, between $15°$ and $75°$.

What changes as you slide:
• On geometric scenes, $P$ moves along the upper unit circle and $P'$ follows below as its mirror image.
• The coordinate readouts at $P$ and $P'$ update in real time.
• The verification cards at the bottom recompute both $\\sin\\theta$ and $\\sin(-\\theta)$ (or $\\cos\\theta$ and $\\cos(-\\theta)$) at the new $\\theta$.

Sweep the slider to see that $\\sin(-\\theta)$ and $-\\sin\\theta$ track together (odd behavior), while $\\cos(-\\theta)$ and $\\cos\\theta$ stay identical (even behavior).`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Playing Through a Geometric Proof`,
      content:`When $\\sin$ or $\\cos$ is active, an animated proof unfolds in three steps. A toolbar gives you control:

• **Reset** — return to step 0 with a blank scene.
• **Prev** / **Next** — step one stage at a time.
• **Play** / **Pause** — advance automatically.
• **Speed selector** — $0.5\\times$, $1\\times$, $1.5\\times$, $2\\times$.

The three steps are: (1) [place $P$ at angle θ](!#sine-proof-step-1-place-p), (2) [reflect across the x-axis](!#sine-proof-step-2-mirror-p) to produce $P'$ at angle $-\\theta$, (3) [read off the identity](!#sine-proof-step-3-read-off-sin) from the coordinates of $P'$.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Geometric Scene`,
      content:`The SVG shows the unit circle with two terminal points:

• **P** at angle $\\theta$ above the x-axis, with coordinates $(\\cos\\theta, \\sin\\theta)$.
• **P&apos;** at angle $-\\theta$ below the x-axis, with coordinates $(\\cos\\theta, -\\sin\\theta)$.

Reflection across the x-axis is the key operation:
• Preserves the **x-coordinate** — so [cosine comes out even](!#cosine-proof-step-3-read-off-cos), $\\cos(-\\theta) = \\cos\\theta$.
• Flips the sign of the **y-coordinate** — so [sine comes out odd](!#sine-proof-step-3-read-off-sin), $\\sin(-\\theta) = -\\sin\\theta$.

A comparison overlay highlights the shared horizontal foot and the equal-magnitude, opposite-sign vertical legs.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Working with Derived Identities`,
      content:`Selecting $\\tan(-\\theta)$, $\\csc(-\\theta)$, $\\sec(-\\theta)$, or $\\cot(-\\theta)$ opens a different card layout. Instead of a unit-circle picture, it shows the **algebraic derivation** as a chain of equations.

Layout of the derived card:
• A short intro explains which earlier identity the current one rests on.
• **Jump buttons** link directly to [the geometric proofs](!#geometric-proofs-sin-and-cos) of $\\sin(-\\theta)$ or $\\cos(-\\theta)$.
• A multi-line derivation block shows each manipulation with a brief side note.
• Verification cards confirm both sides match numerically.

Two derived identities preserve sign ($\\sec$, like $\\cos$, is even); four flip sign ($\\tan$, $\\csc$, $\\cot$, like $\\sin$, are odd).`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Formula Table`,
      content:`A reference table beneath every scene lists all six negative-angle identities at once:

• **Function** column — the trig function with $-\\theta$ argument.
• **Identity** column — the right-hand side.
• **Parity** column — labels each as **even** or **odd**.
• **Value** column — the numeric value at the current $\\theta$.
• **Source** column — labels each as [geometric](!#geometric-proofs-sin-and-cos) ($\\sin$, $\\cos$) or **via X** for the [derived forms](!#derived-identities-tan-csc-sec-cot).

Click any row to make that function active. The current row gets a deep-blue left border and tinted background.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Verifying Identities Numerically`,
      content:`Every scene includes two metric cards that compute the function at $+\\theta$ and at $-\\theta$ for the active row.

Example for $\\sin$:
• Left card shows $\\sin\\theta$.
• Right card shows $\\sin(-\\theta)$.

For odd functions, the two values are equal in magnitude and opposite in sign. For even functions, they are identical. Sweeping the slider while watching the cards is a fast empirical check across all $\\theta$, and the formula table mirrors this across all six functions at once.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Geometric Proofs: sin(-θ) and cos(-θ)`,
      content:`The two foundational identities come from reflecting the terminal point across the x-axis.

**sin(-θ) = -sin θ** — reflection flips the y-coordinate:
$$P = (\\cos\\theta, \\sin\\theta) \\;\\to\\; P' = (\\cos\\theta, -\\sin\\theta)$$
Since the y-coordinate of $P'$ is $\\sin(-\\theta)$ by definition, $\\sin(-\\theta) = -\\sin\\theta$. Sine is **odd**.

**cos(-θ) = cos θ** — reflection preserves the x-coordinate. The x-coordinate of $P'$ equals the x-coordinate of $P$, which is $\\cos\\theta$. Therefore $\\cos(-\\theta) = \\cos\\theta$. Cosine is **even**.

Each is treated stage by stage below: [the sine form](!#the-sine-negative-angle-identity) and [the cosine form](!#the-cosine-negative-angle-identity).

For full coverage with proofs in all quadrants, see the **negative angle identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan, csc, sec, cot`,
      content:`The four remaining identities follow from the two geometric ones:

[tan(-θ) = -tan θ](!#the-tangent-negative-angle-identity) (odd) — $\\tan = \\sin/\\cos$:
$$\\tan(-\\theta) = \\frac{\\sin(-\\theta)}{\\cos(-\\theta)} = \\frac{-\\sin\\theta}{\\cos\\theta} = -\\tan\\theta$$

[csc(-θ) = -csc θ](!#the-cosecant-negative-angle-identity) (odd) — reciprocal of an odd function is odd: $\\csc(-\\theta) = 1/\\sin(-\\theta) = -1/\\sin\\theta = -\\csc\\theta$.

[sec(-θ) = sec θ](!#the-secant-negative-angle-identity) (even) — reciprocal of an even function is even: $\\sec(-\\theta) = 1/\\cos(-\\theta) = 1/\\cos\\theta = \\sec\\theta$.

[cot(-θ) = -cot θ](!#the-cotangent-negative-angle-identity) (odd) — reciprocal of tangent: $\\cot(-\\theta) = 1/\\tan(-\\theta) = -1/\\tan\\theta = -\\cot\\theta$.

For full derivations, see the **trigonometric identities page** and the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Negative Angle Identities Matter`,
      content:`These identities reveal the symmetry structure of trigonometric functions:

• **Graph symmetry** — the parity rules predict whether each graph is symmetric about the y-axis (even) or about the origin (odd) without plotting points.
• **Simplification** — replace any $f(-\\theta)$ with $\\pm f(\\theta)$ instantly, halving the cases to consider.
• **Fourier series** — even functions expand into cosines only, odd functions into sines only.
• **Integration** — odd integrands over symmetric intervals like $[-a, a]$ integrate to zero.
• **Solving equations** — paired solutions $\\theta$ and $-\\theta$ are predictable from parity.

All five uses come down to one of two facts, each proved in a single picture: [sine flips sign](!#sine-proof-step-3-read-off-sin), [cosine does not](!#cosine-proof-step-3-read-off-cos).

For applications and examples, see the **trigonometric identities applications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Pythagorean Identities** — companion identities relating $\\sin^2$ and $\\cos^2$.
• **Double Angle Identities** — formulas for $\\sin(2\\theta)$, $\\cos(2\\theta)$ that combine with parity rules.
• **Half Angle Identities** — formulas for $\\sin(\\alpha/2)$ and friends.
• **Sum and Difference Identities** — additive companions; combine with parity for full flexibility.
• **Unit Circle** — geometric setup for the reflection used in this tool.
• **Trigonometric Functions Graphs** — see the parity visually in each function's graph.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`The Sine Negative-Angle Identity`,
      content:`The identity $\\sin(-\\theta) = -\\sin\\theta$ is proved by reflecting the terminal point across the x-axis and reading its new y-coordinate.`,
      before:``,
      after:`Its three stages: [place the point](!#sine-proof-step-1-place-p), [mirror it](!#sine-proof-step-2-mirror-p), and [read off the y-coordinate](!#sine-proof-step-3-read-off-sin).

Sine is the odd function of the pair, and three of the four [derived identities](!#derived-identities-tan-csc-sec-cot) inherit their sign flip from it: [cosecant](!#the-cosecant-negative-angle-identity) directly, [tangent](!#the-tangent-negative-angle-identity) through the quotient, and [cotangent](!#the-cotangent-negative-angle-identity) through tangent.`,
      link:'',
    },
    obj13:{
      title:`The Cosine Negative-Angle Identity`,
      content:`The identity $\\cos(-\\theta) = \\cos\\theta$ comes from the same reflection, read along the other axis: mirroring across the x-axis cannot change an x-coordinate.`,
      before:``,
      after:`Its three stages: [place the point](!#cosine-proof-step-1-place-p), [mirror it](!#cosine-proof-step-2-mirror-p), and [read off the x-coordinate](!#cosine-proof-step-3-read-off-cos).

Under the cosine tab the tool hides the vertical legs entirely and draws a faint connector between $P$ and $P'$ instead — the picture is arguing that the two points sit on one vertical line, which is exactly what "same x-coordinate" means. Cosine is the even function of the pair, and [secant](!#the-secant-negative-angle-identity) is the only derived identity that inherits that evenness.`,
      link:'',
    },
    obj14:{
      title:`The Tangent Negative-Angle Identity`,
      content:`Tangent is a quotient of one odd function and one even function, so exactly one sign flips and the quotient comes out odd.`,
      before:``,
      after:`$$\\tan(-\\theta) = \\frac{\\sin(-\\theta)}{\\cos(-\\theta)} = \\frac{-\\sin\\theta}{\\cos\\theta} = -\\tan\\theta$$

This is the general rule in miniature: odd divided by even is odd. Both ingredients are proved geometrically — [the sine identity](!#the-sine-negative-angle-identity) supplies the minus sign, [the cosine identity](!#the-cosine-negative-angle-identity) supplies the unchanged denominator — and the card's jump buttons lead to each. [Cotangent](!#the-cotangent-negative-angle-identity) then inherits the flip from tangent.`,
      link:'',
    },
    obj15:{
      title:`The Cosecant Negative-Angle Identity`,
      content:`Cosecant is the reciprocal of sine, and a reciprocal keeps the parity of what it inverts.`,
      before:``,
      after:`$$\\csc(-\\theta) = \\frac{1}{\\sin(-\\theta)} = \\frac{1}{-\\sin\\theta} = -\\csc\\theta$$

The minus sign moves out of the denominator untouched, so cosecant is odd for the same reason [sine](!#the-sine-negative-angle-identity) is. Note what the identity does not fix: cosecant is undefined wherever $\\sin\\theta = 0$, and negating the angle does not rescue it — if one side is undefined, so is the other. The slider's $15°$–$75°$ range stays clear of those angles.`,
      link:'',
    },
    obj16:{
      title:`The Secant Negative-Angle Identity`,
      content:`Secant is the reciprocal of cosine, so it is the one derived identity with no sign change at all.`,
      before:``,
      after:`$$\\sec(-\\theta) = \\frac{1}{\\cos(-\\theta)} = \\frac{1}{\\cos\\theta} = \\sec\\theta$$

Nothing flips because nothing flipped in [the cosine identity](!#the-cosine-negative-angle-identity) it rests on. Secant and cosine are the two even functions in the table; the other four are odd. Sweeping the slider is the quickest way to see it — the two verification cards for secant never separate, while the cards for every odd function stay opposite in sign.`,
      link:'',
    },
    obj17:{
      title:`The Cotangent Negative-Angle Identity`,
      content:`Cotangent is the reciprocal of tangent, so it flips sign for the same reason tangent does — one step further removed from the geometry.`,
      before:``,
      after:`$$\\cot(-\\theta) = \\frac{1}{\\tan(-\\theta)} = \\frac{1}{-\\tan\\theta} = -\\cot\\theta$$

Cotangent sits two derivations from the picture: it depends on [tangent](!#the-tangent-negative-angle-identity), which depends on [sine](!#the-sine-negative-angle-identity) and [cosine](!#the-cosine-negative-angle-identity). It can also be read straight off the definition $\\cot\\theta = \\cos\\theta / \\sin\\theta$ — even over odd, which is odd — and the two routes agree, as they must.`,
      link:'',
    },
    obj18:{
      title:`Sine Proof, Step 1: Place P at Angle θ`,
      content:`[The sine proof](!#the-sine-negative-angle-identity) opens with a single point: $P$ on the unit circle at angle $\\theta$ above the x-axis, with the vertical leg from the axis up to $P$ drawn in amber.`,
      before:``,
      after:`That leg has signed length $\\sin\\theta$, and because the circle has radius $1$ the length *is* the y-coordinate of $P$ — no scaling in between. The red arc at the origin marks the angle $\\theta$ measured counter-clockwise, the positive direction.

Under this tab the tool runs in its sine-only mode, hiding the horizontal $\\cos\\theta$ leg so that nothing competes with the quantity being tracked. The [cosine proof](!#cosine-proof-step-1-place-p) hides the opposite one.`,
      link:'',
    },
    obj19:{
      title:`Sine Proof, Step 2: Mirror P Across the x-Axis`,
      content:`Reflecting $P$ across the x-axis produces $P'$, sitting directly below at angle $-\\theta$ — the same rotation measured clockwise.`,
      before:``,
      after:`The reflection is what carries the whole argument, and it does two things at once: it leaves the x-coordinate exactly where it was, and it flips the sign of the y-coordinate. The second amber leg has the same length as the first but points the other way, so its signed length is $-\\sin\\theta$.

Nothing has been proved yet — so far this is only a construction. The claim arrives when the picture is read as a statement about the angle $-\\theta$, which is [the next step](!#sine-proof-step-3-read-off-sin).`,
      link:'',
    },
    obj20:{
      title:`Sine Proof, Step 3: Read Off sin(-θ)`,
      content:`$P'$ is the terminal point of the angle $-\\theta$ on the unit circle, so by the definition of sine its y-coordinate *is* $\\sin(-\\theta)$.`,
      before:``,
      after:`$$\\sin(-\\theta) = -\\sin\\theta$$

The proof is a matter of naming the same number twice. The picture gives that y-coordinate as $-\\sin\\theta$; the definition gives it as $\\sin(-\\theta)$; therefore the two are equal. At the tool's opening angle of $40°$ both verification cards read $-0.643$.

That single sign flip is the definition of an odd function, and it propagates through [tangent](!#the-tangent-negative-angle-identity), [cosecant](!#the-cosecant-negative-angle-identity) and [cotangent](!#the-cotangent-negative-angle-identity).`,
      link:'',
    },
    obj21:{
      title:`Cosine Proof, Step 1: Place P at Angle θ`,
      content:`[The cosine proof](!#the-cosine-negative-angle-identity) begins from the same point $P$ at angle $\\theta$, but with the indigo horizontal leg drawn instead of the vertical one.`,
      before:``,
      after:`That leg runs from the origin to the foot of $P$ on the x-axis, and its length is $\\cos\\theta$ — again equal to the coordinate itself, because the radius is $1$.

The tool switches to its cosine-only mode here, hiding the vertical legs and the right-angle markers that [the sine proof](!#sine-proof-step-1-place-p) relies on. Same circle, same point, different quantity in view.`,
      link:'',
    },
    obj22:{
      title:`Cosine Proof, Step 2: Mirror P Across the x-Axis`,
      content:`The same reflection places $P'$ at angle $-\\theta$, and a faint vertical connector is drawn between $P$ and $P'$.`,
      before:``,
      after:`That connector is the argument. Two points joined by a vertical segment have the same x-coordinate by definition, and the horizontal indigo leg — drawn once — serves both of them. The reflection moved the point without moving its foot.

Compare with [the sine version of this step](!#sine-proof-step-2-mirror-p): the same construction supports both proofs, and the tool draws whichever consequence the active tab is about.`,
      link:'',
    },
    obj23:{
      title:`Cosine Proof, Step 3: Read Off cos(-θ)`,
      content:`$P'$ is the terminal point of $-\\theta$, so its x-coordinate *is* $\\cos(-\\theta)$ — and that x-coordinate is the one $P$ already had.`,
      before:``,
      after:`$$\\cos(-\\theta) = \\cos\\theta$$

No sign appears anywhere, which is the whole content of the result: cosine is even. At $40°$ both verification cards read $0.766$, and they stay locked together for every angle the slider reaches.

Only [secant](!#the-secant-negative-angle-identity) inherits this evenness; the remaining three derived identities take their sign flip from [sine](!#the-sine-negative-angle-identity) instead.`,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which negative angle identities does the explorer cover?",
      answer: "All six standard identities: sin(-theta) = -sin theta, cos(-theta) = cos theta, tan(-theta) = -tan theta, csc(-theta) = -csc theta, sec(-theta) = sec theta, and cot(-theta) = -cot theta. Each has its own tab with either a geometric proof or an algebraic derivation."
    },
    obj2: {
      question: "Which trig functions are even and which are odd?",
      answer: "Cosine and secant are even, meaning f(-theta) equals f(theta). Sine, tangent, cosecant, and cotangent are odd, meaning f(-theta) equals minus f(theta). The Parity column of the formula table labels each one."
    },
    obj3: {
      question: "How is sin(-theta) = -sin theta proved geometrically?",
      answer: "Place the terminal point P of angle theta on the unit circle, then reflect across the x-axis to obtain P prime, which is the terminal point of -theta. The reflection flips the y-coordinate but preserves the x-coordinate, so sin(-theta) equals -sin theta and cos(-theta) equals cos theta."
    },
    obj4: {
      question: "Why is secant even but cosecant odd?",
      answer: "A reciprocal preserves parity. Cosine is even, so secant equal to 1 over cosine is also even. Sine is odd, so cosecant equal to 1 over sine is odd. The same logic makes tangent odd and cotangent odd."
    },
    obj5: {
      question: "Can I verify an identity at a specific angle?",
      answer: "Yes. Move the theta slider to the angle you want, then read the two metric cards near the bottom. They show the function value at plus theta and at minus theta. For odd functions the signs differ, for even functions they match. The formula table does the same for all six functions at once."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Negative Angle Identities Explorer",
      "description": "Explore and verify all six negative-angle (even/odd) trigonometric identities with animated geometric proofs, algebraic derivations, and live numeric checks.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/negative-angle-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six tabs covering sin, cos, tan, csc, sec, and cot negative-angle identities",
        "Animated reflection proofs for sin(-theta) and cos(-theta) on the unit circle",
        "Algebraic derivation cards for tan, csc, sec, and cot with jump-to-source buttons",
        "Theta slider from 15 to 75 degrees with live updates",
        "Play, pause, step, reset, and speed controls for the animation",
        "Live verification cards comparing values at plus and minus theta",
        "Formula table summarizing identities, parity, values, and proof sources",
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
          "name": "Negative Angle Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/negative-angle-identities"
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
    sinOverview: demoUnitFrame({ svg: negativeAngleDiagrams.sin.overview, caption: 'The complete sine proof, frozen',
      text: 'P and its mirror image P′, with the two amber legs of equal length pointing opposite ways — the whole content of sin(−θ) = −sin θ.' }),
    cosOverview: demoUnitFrame({ svg: negativeAngleDiagrams.cos.overview, caption: 'The complete cosine proof, frozen',
      text: 'One indigo leg serving both points: mirroring across the x-axis cannot move a foot that sits on the x-axis.' }),
    tan: demoUnitFrame({ svg: negativeAngleDiagrams.tan, caption: 'tan(−θ), derived',
      text: 'Odd over even: the numerator flips, the denominator does not, so the quotient flips.' }),
    csc: demoUnitFrame({ svg: negativeAngleDiagrams.csc, caption: 'csc(−θ), derived',
      text: 'The minus sign travels straight out of the denominator — a reciprocal keeps its parity.' }),
    sec: demoUnitFrame({ svg: negativeAngleDiagrams.sec, caption: 'sec(−θ), derived',
      text: 'The one derived card with no sign anywhere in it, because cosine had none to give.' }),
    cot: demoUnitFrame({ svg: negativeAngleDiagrams.cot, caption: 'cot(−θ), derived',
      text: 'Two steps from the picture: cotangent inverts tangent, which already inherited the flip from sine.' }),
    sinStep1: demoUnitFrame({ svg: negativeAngleDiagrams.sin.steps[0], caption: 'Step 1: place P at angle θ',
      text: 'One point, one amber leg. On a unit circle that leg’s signed length is the y-coordinate itself.' }),
    sinStep2: demoUnitFrame({ svg: negativeAngleDiagrams.sin.steps[1], caption: 'Step 2: mirror across the x-axis',
      text: 'P′ appears directly below, same distance from the axis, opposite side — equal magnitude, flipped sign.' }),
    sinStep3: demoUnitFrame({ svg: negativeAngleDiagrams.sin.steps[2], caption: 'Step 3: read off sin(−θ)',
      text: 'The label y = sin(−θ) names the coordinate the picture already gave as −sin θ.' }),
    cosStep1: demoUnitFrame({ svg: negativeAngleDiagrams.cos.steps[0], caption: 'Step 1: place P at angle θ',
      text: 'Same point, indigo leg instead: the horizontal distance from the y-axis, equal to cos θ.' }),
    cosStep2: demoUnitFrame({ svg: negativeAngleDiagrams.cos.steps[1], caption: 'Step 2: mirror across the x-axis',
      text: 'The faint connector is the argument — a vertical segment means one shared x-coordinate.' }),
    cosStep3: demoUnitFrame({ svg: negativeAngleDiagrams.cos.steps[2], caption: 'Step 3: read off cos(−θ)',
      text: 'x = cos(−θ) labels the same foot that was already labelled cos θ. No sign appears.' }),
  };

  const explanations = {
    sin: { steps: [
      `P sits on the unit circle at angle θ above the x-axis. P = (cos θ, sin θ). The vertical leg has signed length sin θ (positive, P above the x-axis). [Learn more about placing P](!#sine-proof-step-1-place-p) · [The sine identity](!#the-sine-negative-angle-identity)`,
      `P′ lies directly below P, at angle −θ. Reflection across the x-axis preserves the x-coordinate (so the horizontal leg cos θ is shared) and flips the sign of the y-coordinate. [Learn more about the reflection](!#sine-proof-step-2-mirror-p) · [The sine identity](!#the-sine-negative-angle-identity)`,
      `P′ is the terminal point of the angle −θ on the unit circle, so its y-coordinate IS sin(−θ). From the picture, P′ = (cos θ, −sin θ). Therefore sin(−θ) = −sin θ. [Learn more about reading it off](!#sine-proof-step-3-read-off-sin) · [The sine identity](!#the-sine-negative-angle-identity)`,
    ] },
    cos: { steps: [
      `P sits on the unit circle at angle θ above the x-axis. Its x-coordinate is cos θ — the horizontal distance from the y-axis to P, drawn as the blue segment along the x-axis. [Learn more about placing P](!#cosine-proof-step-1-place-p) · [The cosine identity](!#the-cosine-negative-angle-identity)`,
      `P′ lies at angle −θ, directly below P. Reflection across the x-axis leaves the x-coordinate unchanged — P and P′ share the same horizontal foot on the x-axis, so they share the same cos θ. [Learn more about the reflection](!#cosine-proof-step-2-mirror-p) · [The cosine identity](!#the-cosine-negative-angle-identity)`,
      `P′ is the terminal point of the angle −θ, so its x-coordinate IS cos(−θ). But the x-coordinate of P′ equals the x-coordinate of P, which is cos θ. Therefore cos(−θ) = cos θ. [Learn more about reading it off](!#cosine-proof-step-3-read-off-cos) · [The cosine identity](!#the-cosine-negative-angle-identity)`,
    ] },
    tan: { content: `Tangent is sine over cosine. Substitute the negative-angle identities for sin and cos and simplify — odd over even is odd. [Learn more about the tangent form](!#the-tangent-negative-angle-identity) · [All derived identities](!#derived-identities-tan-csc-sec-cot)` },
    csc: { content: `Cosecant is the reciprocal of sine, and a reciprocal keeps the parity of what it inverts. [Learn more about the cosecant form](!#the-cosecant-negative-angle-identity) · [All derived identities](!#derived-identities-tan-csc-sec-cot)` },
    sec: { content: `Secant is the reciprocal of cosine. Since cosine is unchanged by negating the angle, so is secant. [Learn more about the secant form](!#the-secant-negative-angle-identity) · [All derived identities](!#derived-identities-tan-csc-sec-cot)` },
    cot: { content: `Cotangent is the reciprocal of tangent, so it flips sign for the same reason tangent does. [Learn more about the cotangent form](!#the-cotangent-negative-angle-identity) · [All derived identities](!#derived-identities-tan-csc-sec-cot)` },
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
        title: "Negative Angle Identities: Even & Odd Trig | Learn Math Class",
        description: "Explore all six negative-angle trig identities. Animated reflection proofs for sin and cos, algebraic derivations for tan, csc, sec, cot. Live numeric verification.",
        hubDescription: "Negative-Angle identities explorer covering all six trigonometric functions. Animated reflection proofs derive sin(-θ) = -sin θ and cos(-θ) = cos θ from a point and its mirror image across the x-axis on the unit circle, while algebraic derivation cards handle tan, csc, sec, and cot. A live formula table and verification cards label each function's parity (even or odd) and confirm every identity numerically.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/negative-angle-identities",
        name: "Negative Angle Identities Explorer"
      },

       }
    }
   }

export default function NegativeAngleIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {


  const genericSections=[
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
        id:'geometric-proofs-sin-and-cos',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'derived-identities-tan-csc-sec-cot',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'why-negative-angle-identities-matter',
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
        id:'the-sine-negative-angle-identity',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'u-sinOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['sinOverview'] }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-cosine-negative-angle-identity',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key={'u-cosOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['cosOverview'] }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'the-tangent-negative-angle-identity',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'u-tan'} dangerouslySetInnerHTML={{ __html: stateUnits['tan'] }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'the-cosecant-negative-angle-identity',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key={'u-csc'} dangerouslySetInnerHTML={{ __html: stateUnits['csc'] }} />,
          sectionsContent.obj15.after,
        ]
    },
    {
        id:'the-secant-negative-angle-identity',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key={'u-sec'} dangerouslySetInnerHTML={{ __html: stateUnits['sec'] }} />,
          sectionsContent.obj16.after,
        ]
    },
    {
        id:'the-cotangent-negative-angle-identity',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
          <div key={'u-cot'} dangerouslySetInnerHTML={{ __html: stateUnits['cot'] }} />,
          sectionsContent.obj17.after,
        ]
    },
    {
        id:'sine-proof-step-1-place-p',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
          <div key={'u-sinStep1'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep1'] }} />,
          sectionsContent.obj18.after,
        ]
    },
    {
        id:'sine-proof-step-2-mirror-p',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
          <div key={'u-sinStep2'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep2'] }} />,
          sectionsContent.obj19.after,
        ]
    },
    {
        id:'sine-proof-step-3-read-off-sin',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
          <div key={'u-sinStep3'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep3'] }} />,
          sectionsContent.obj20.after,
        ]
    },
    {
        id:'cosine-proof-step-1-place-p',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
          <div key={'u-cosStep1'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep1'] }} />,
          sectionsContent.obj21.after,
        ]
    },
    {
        id:'cosine-proof-step-2-mirror-p',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
          <div key={'u-cosStep2'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep2'] }} />,
          sectionsContent.obj22.after,
        ]
    },
    {
        id:'cosine-proof-step-3-read-off-cos',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
          <div key={'u-cosStep3'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep3'] }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'20px'}}>Negative Angle Trigonometric Identities</h1>
   <br/>
   <NegativeAngleExplorer explanations={explanations}/>
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
   {/* <ScrollUpButton/> */}
   </>
  )
}