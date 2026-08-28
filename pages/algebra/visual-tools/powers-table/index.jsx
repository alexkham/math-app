
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import PowerTable from '../../../../app/components/visualizations/algebra/powers/PowersTable'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import powersTableDiagrams from '../../../../app/components/visualizations/algebra/powers/powersTableDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'powers table',
    'interactive powers table',
    'exponents calculator',
    'exponents reference table',
    'integer powers calculator',
    'base and exponent tool',
    'powers of 2 table',
    'powers of 10 table',
    'exponential growth visualizer',
    'last digit patterns powers',
    'powers chart',
    'algebra powers tool',
    'visualize exponents',
    'exponentiation reference',
    'large number powers calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `What is a Power?`,
      content: `A power is a shorthand for repeated multiplication. The expression $b^n$ means multiplying the **base** $b$ by itself $n$ times — so $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$. The number $b$ is the base, and $n$ is the exponent (or power).

Powers compress long products into compact notation. Instead of writing $10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10$, you write $10^6$. The notation scales effortlessly: $10^{100}$ would take a page to write out as a product but fits in three characters as a power.

This tool builds a table of powers for any **base** from 2 to 10, letting you see the exact value, the multiplication that produces it, and how the values grow row by row. The default state — base 2, max power 10 — shows the classic doubling sequence that underlies binary numbers.

For full theory of exponents, exponent rules, and properties, see **exponents and powers**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Setting Base and Max Power`,
      content: `Two inputs control the table: **Base** (the number being multiplied) and **Max Power** (the highest exponent shown). The base accepts integers from 2 to 10. Max Power accepts integers from 0 upward, with caps that depend on the base.

Type a value in either input. The table regenerates instantly, showing every row from $b^0$ up to $b^{\\text{max}}$. The default state — base 2, max power 10 — produces the doubling sequence 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

The **Reset All** button restores defaults. Invalid input (out of range, non-numeric, or empty) shows an inline error and outlines the input in red until corrected. The error message tells you exactly what went wrong: minimum base is 2, maximum base is 10, minimum power is 0, and the maximum power depends on which base is currently selected.

If you change the base from a small value to a larger one and your current max power exceeds the new cap, the tool automatically adjusts max power down to the new limit so the table stays valid.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Three Columns`,
      content: `Each row of the table represents one power and breaks it into three pieces.

The **Power** column shows the notation $b^n$. The base appears full size with the exponent as a superscript — exactly how you would write it on paper. The exponent counts down the rows from $b^0$ at the top to $b^{\\text{max}}$ at the bottom.

The **Expression** column spells out the multiplication: $b \\times b \\times b \\times \\dots$. For exponents up to 10, every factor is shown explicitly. For exponents above 10, the expression abbreviates to $b \\times b \\times \\dots \\times b\\ (n\\ \\text{times})$ so the row stays readable. The first row, with exponent 0, simply shows the value 1, since there is no multiplication to spell out.

The **Value** column gives the exact numerical result. Values use thousand separators for readability, and large numbers are computed with arbitrary-precision integer arithmetic — there are no rounding errors even at $b^{16}$.

Below the table, the pattern note reminds you of the row-to-row relationship: each row equals the previous row multiplied by the base.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Exploring Different Bases`,
      content: `Each base produces a distinctively shaped sequence. Switching bases is the fastest way to build intuition for how exponential growth depends on the base, not just the exponent.

[Base 2](!#the-default-table-powers-of-two) doubles each row: 1, 2, 4, 8, 16, .... Powers of 2 underlie binary representation, file sizes (kilobyte, megabyte, gigabyte), and combinatorics — the number of subsets of an $n$-element set is exactly $2^n$. Small bases also unlock a longer table — see [pushing to maximum powers](!#pushing-to-maximum-powers).

[Base 10](!#powers-of-ten-and-place-value) produces place value: 1, 10, 100, 1{,}000, .... Each row adds a zero. The decimal number system is built directly on this progression, which is why scientific notation uses powers of 10.

**Base 3** through **base 9** fill in the gaps. [Base 5](!#base-five-at-the-cap-boundary) is the first base the depth cap applies to, and [base 7](!#spotting-last-digit-patterns) has the most interesting last-digit cycle. Powers of 3 grow faster than powers of 2 but slower than 10. Powers of 9 reach into the billions by exponent 10: $9^{10} = 3{,}486{,}784{,}401$. Switch the base back and forth to compare growth rates side by side at the same maximum exponent.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Zero Power Rule`,
      content: `The first row of every table — regardless of base — shows $b^0 = 1$. This is not a quirk; it is a rule that keeps exponent arithmetic consistent.

The exponent law $b^m \\div b^n = b^{m-n}$ requires $b^0 = 1$ for any nonzero base. Setting $m = n$ gives $b^0$ on one side, while the same expression also equals any nonzero $b^n / b^n = 1$. Both must agree, forcing $b^0 = 1$.

The Expression column displays this row simply as the value **1** — there is no multiplication to spell out, since the rule says zero copies of the base produce the multiplicative identity. Every base from 2 to 10 obeys this rule, which is why every powers table opens the same way.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Pushing to Maximum Powers`,
      content: `For small bases (2 through 4), the table allows exponents up to 16. For larger bases (5 through 10), the maximum exponent is capped at 10. The cap exists because high powers of large bases produce numbers with too many digits to display readably in a table cell.

Hover over the **?** icon next to the Max Power input to see the rule spelled out. The tooltip explains the cap and reminds you that bases 2 through 4 give you the longer range.

At the maximum, base 2 reaches $2^{16} = 65{,}536$ — the value 64K, familiar from old computers and 16-bit integer ranges. Base 3 reaches $3^{16} = 43{,}046{,}721$. Base 4 reaches $4^{16} = 4{,}294{,}967{,}296$ — the same as $2^{32}$, the size of the 32-bit unsigned integer space. Even with the cap, bases 5 through 10 comfortably handle numbers in the billions and tens of billions.`,
      before: ``,
      after: `The frozen table above shows the deepest view the tool offers: base 2 pushed to all seventeen rows, from $2^0 = 1$ to $2^{16} = 65{,}536$. Two rendering rules become visible only here. The Expression column switches to its abbreviated form past exponent 10 — $2 \\times 2 \\times \\dots \\times 2\\ (16\\ \\text{times})$ — because seventeen explicit factors would overflow the cell. And the values stay exact to the last digit, courtesy of the arbitrary-precision arithmetic underneath.

Sixteen doublings is also a good place to **feel** the exponential law: halfway down the table, at $2^8$, the value is only $256$ — under half a percent of the final value. Exponential sequences spend most of their journey looking small; the last few rows do most of the growing. Compare [the default ten-row table](!#the-default-table-powers-of-two) to see how different the same base looks when cut six rows shorter.`,
      link: '',
    },

    obj7: {
      title: `Spotting Last-Digit Patterns`,
      content: `Powers cycle through predictable last digits. The Value column makes the cycles visible at a glance — scan the rightmost digit of each row and the cycle reveals itself.

**Base 5**: every power except $5^0$ ends in 5. The pattern is constant: 1, 5, 25, 125, 625, 3{,}125, .... This makes mental arithmetic with powers of 5 unusually easy.

**Base 7**: last digits cycle through 7, 9, 3, 1 with period 4. So $7^1$ ends in 7, $7^2 = 49$ ends in 9, $7^3 = 343$ ends in 3, $7^4 = 2{,}401$ ends in 1, then $7^5$ ends in 7 again. The cycle repeats forever.

**Base 4** alternates between last digits 4 and 6. **Base 9** alternates between 9 and 1. **Base 6** stays at 6 once you pass $6^0$.

Every base from 2 to 9 has a finite last-digit cycle. Only base 10 breaks the pattern — every power $10^n$ for $n \\geq 1$ ends in 0. Switching bases and watching the rightmost column is one of the fastest ways to feel the structure of modular arithmetic.`,
      before: ``,
      after: `The frozen frame above fixes base 7 — the base with the richest cycle — so the pattern can be traced down a real Value column: 1, 7, 49, 343, 2,401, 16,807, ... with last digits running 7, 9, 3, 1 and returning to 7 at $7^5$. Period four, twice around and a half in ten rows.

The cycle exists because the last digit of a product depends only on the last digits of its factors — multiplication survives reduction mod 10. Each row's final digit is therefore determined by the previous row's final digit alone, and since there are only ten possible digits, the sequence must eventually revisit one and loop forever. That little argument — finitely many states force a cycle — is the pigeonhole principle doing number theory, and the table is its laboratory.`,
      link: '',
    },

    obj8: {
      title: `Why Powers Grow So Fast`,
      content: `Exponential growth is genuinely different from multiplication or repeated addition. Each row of the table multiplies — not adds — by the base. Compare $2^{10} = 1{,}024$ to $9^{10} = 3{,}486{,}784{,}401$: the same exponent, but the larger base produces a number more than three million times bigger.

The pattern note at the bottom of the table summarizes it: each row is **×base** the row above. After 10 rows, base 2 has multiplied by $2^{10} = 1{,}024$ — roughly a thousandfold. Base 10 has multiplied by $10^{10}$ — ten billion. Base 9 sits between them, but much closer to base 10 than to base 2.

This is why exponential growth shows up in population dynamics, compound interest, viral spread, and computer science complexity. A linear process gains a fixed amount per step; an exponential process multiplies by a fixed factor per step, and the gap between the two opens up rapidly.

For the formal definition and behavior of exponential functions, see **exponential function**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Related Concepts and Tools`,
      content: `**Exponents and Powers** — Theory of exponents, including negative powers, fractional exponents, and the laws of exponents.

**Exponential Function** — How $b^x$ behaves as a continuous function of $x$, including the special role of base $e$.

**Logarithms** — The inverse operation of exponentiation: if $b^n = v$, then $\\log_b v = n$. Use logarithms to find the exponent given the base and the value.

**Algebraic Identities Visualizers** — Geometric proofs of squared identities like $(a+b)^2$ and $(a-b)^2$, showing where powers of 2 appear in algebra.

**Algebra Visual Tools** — Index of all interactive tools for algebra topics including identity proofs and the powers table itself.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 per-state sections ----

    obj10: {
      title: `The Default Table: Powers of Two`,
      content: `The tool's opening state: base 2, max power 10 — eleven rows running 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1,024. The doubling sequence, exact and fully spelled out.`,
      before: ``,
      after: `Base 2 is the default for a reason: it is the smallest possible base, so its table grows the slowest and stays the most readable — and it happens to be the most consequential sequence in modern life. The rows are the file sizes, the memory ranges, and the subset counts: $2^{10} = 1{,}024$ is the "kilo" of kilobyte, and a set of ten elements has exactly $1{,}024$ subsets.

The Expression column earns its keep here more than anywhere: watching $2 \\times 2 \\times 2 \\times 2$ grow one factor per row makes the definition of exponentiation **visible** rather than notational. Every claim in the theory sections below — the zero-power rule, the ×base row law — can be checked against these eleven rows by eye. When the doubling stops feeling surprising, push deeper: [the sixteen-row table](!#pushing-to-maximum-powers) is one input away.`,
      link: '',
    },

    obj11: {
      title: `Powers of Ten and Place Value`,
      content: `Base 10, max power 10: the table where the Value column writes itself — 1, 10, 100, 1,000, and so on to $10^{10} = 10{,}000{,}000{,}000$, one zero added per row.`,
      before: ``,
      after: `This is the table you already know by heart, which is exactly what makes it worth freezing: the decimal number system **is** this table. Writing "4,507" means $4 \\cdot 10^3 + 5 \\cdot 10^2 + 0 \\cdot 10^1 + 7 \\cdot 10^0$ — place value is powers of ten wearing digit clothing, and the thousand separators in the Value column mark off the rows of this very table.

Ten is also the largest base the tool accepts, which makes this the fastest-growing table on offer: ten billion by row ten. Scientific notation exists precisely to ride this ladder — $3 \\times 10^8$ names a rung rather than spelling out zeros. Compare [the default base-2 table](!#the-default-table-powers-of-two) at the same ten rows: $1{,}024$ versus $10{,}000{,}000{,}000$, the whole answer to "does the base matter?"`,
      link: '',
    },

    obj12: {
      title: `Base Five at the Cap Boundary`,
      content: `Base 5, max power 10: the first base the depth cap applies to — the Max Power input tops out at 10 here, where base 4 would allow 16. The table climbs to $5^{10} = 9{,}765{,}625$.`,
      before: ``,
      after: `The boundary itself is the state's first lesson: the cap rule (bases 2–4 go to power 16, bases 5–10 stop at 10) is about display honesty, not mathematical limits. $5^{16}$ has twelve digits; the tool prefers a shorter table it can render cleanly to a longer one it cannot. Try entering 16 with base 5 loaded and the input politely refuses — the frozen frame shows the deepest base-5 view that exists.

The second lesson is in the Value column's right edge: every row past $5^0$ ends in the digit 5 — the simplest of all the last-digit patterns, a cycle of length one. Multiplying a number ending in 5 by 5 always yields a number ending in 5, so the pattern locks in forever. The richer cycles this previews are the subject of [spotting last-digit patterns](!#spotting-last-digit-patterns).`,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a power in math?",
      answer: "A power is a number written as a base raised to an exponent, like 2^4. The base is the number being multiplied, and the exponent tells you how many times to multiply it by itself. So 2^4 means 2 times 2 times 2 times 2, which equals 16. Powers are a compact way to write repeated multiplication."
    },
    obj2: {
      question: "How do you read the powers table?",
      answer: "Each row shows one power broken into three columns. The Power column shows the notation in superscript form. The Expression column spells out the multiplication factor by factor. The Value column gives the exact result with thousand separators. Every row equals the previous row multiplied by the base."
    },
    obj3: {
      question: "Why does any base to the power of 0 equal 1?",
      answer: "The rule b^0 = 1 keeps exponent arithmetic consistent for any nonzero base. The exponent law says b^m divided by b^n equals b^(m-n). Setting m equal to n gives b^0 on one side and 1 on the other, so the two must match. The first row of every powers table reflects this rule, regardless of which base is selected."
    },
    obj4: {
      question: "Why are higher powers capped for bigger bases?",
      answer: "Bases 2 through 4 allow powers up to 16, but bases 5 through 10 are capped at power 10. The cap is purely about display: powers of 9 or 10 at exponent 16 would have 16 to 17 digits, too long to fit cleanly in a table cell. Values are still computed exactly with arbitrary-precision integers, but the visible range is restricted."
    },
    obj5: {
      question: "What patterns can you find in the powers table?",
      answer: "The most striking patterns are last-digit cycles. Powers of 5 always end in 5. Powers of 7 cycle through 7, 9, 3, 1 and repeat every four steps. Powers of 4 alternate between 4 and 6. Each base from 2 to 9 has a finite cycle in its last digit, while powers of 10 always end in 0 once the exponent is at least 1."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Powers Table - Interactive Exponents Reference",
      "description": "Interactive powers table for bases 2 through 10 and exponents up to 16. Compare exponential growth, spot last-digit patterns, and reference exact values.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive table of powers for any integer base from 2 to 10",
        "Adjustable maximum exponent up to 16 for bases 2 through 4",
        "Exact values computed with arbitrary-precision integer arithmetic",
        "Three-column layout showing power notation, expanded expression, and numerical value",
        "Expression column spelled out factor by factor for exponents up to 10",
        "Built-in tooltip explaining the maximum-power cap rule",
        "Inline input validation with error messages and Reset All button",
        "Thousand-separator formatting for readable large-number values"
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
      "educationalLevel": "Middle School, High School, College",
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Powers Table",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/powers-table"
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

  // Frozen-state framed units (Line 1): five (base, maxPower) configurations.
  const d = powersTableDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    'b2-default': u('b2-default', 'Base 2, max power 10, frozen',
      'The opening doubling sequence, 1 to 1,024 in eleven rows &#8212; every factor of every expression spelled out.'),
    'b2-deep': u('b2-deep', 'Base 2, max power 16, frozen',
      'Seventeen rows to 65,536: the abbreviated expression past exponent 10, and half a percent of the value reached by the halfway row.'),
    'b5-cap': u('b5-cap', 'Base 5, max power 10, frozen',
      'The first capped base at its deepest: 9,765,625 at row ten, and a Value column ending in 5 all the way down.'),
    'b7': u('b7', 'Base 7, max power 10, frozen',
      'The last-digit laboratory: 7, 9, 3, 1 cycling down the rightmost digits, twice around and a half in ten rows.'),
    'b10': u('b10', 'Base 10, max power 10, frozen',
      'Place value as a table: one zero per row, ten billion by the bottom &#8212; the ladder scientific notation climbs.'),
  };

  // Per-state panel explanations (Line 1). Rendered below the tool's pattern
  // note through processContent — $math$ and same-page !# anchors work.
  const explanations = {
    'b2-default': `The smallest base and the most consequential sequence: kilobytes, subset counts, and eleven rows readable at a glance. [Learn more about the default table](!#the-default-table-powers-of-two) · [All bases](!#exploring-different-bases)`,
    'b2-deep': `Sixteen doublings, exact to the last digit — and half the journey spent under $256$: exponentials grow late. [Learn more about the maximum-power table](!#pushing-to-maximum-powers) · [All bases](!#exploring-different-bases)`,
    'b5-cap': `The first base the depth cap touches — and the simplest last-digit pattern: every row ends in 5, forever. [Learn more about base five at the cap](!#base-five-at-the-cap-boundary) · [All bases](!#exploring-different-bases)`,
    'b7': `Scan the rightmost digits: 7, 9, 3, 1, and repeat — a period-four cycle forced by the pigeonhole principle. [Learn more about last-digit patterns](!#spotting-last-digit-patterns) · [All bases](!#exploring-different-bases)`,
    'b10': `Place value is this table wearing digit clothing: each row adds a zero, and "4,507" is four rows of it summed. [Learn more about powers of ten](!#powers-of-ten-and-place-value) · [All bases](!#exploring-different-bases)`,
  };

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      stateUnits,
      explanations,
      seoData: {
        title: "Powers Table: Interactive Exponents Tool | Learn Math Class",
        description: "Interactive powers table for bases 2 through 10 and exponents up to 16. Compare exponential growth, spot last-digit patterns, and reference exact values.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/powers-table",
        name: "Powers Table - Interactive Exponents Reference",
                svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="64" height="64" fill="#E6F1FB" stroke="#0C447C" stroke-width="1.2"/><rect x="8" y="8" width="64" height="14" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><rect x="8" y="22" width="14" height="50" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><rect x="54" y="40" width="18" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.4"/><line x1="36" y1="22" x2="36" y2="72" stroke="#185FA5" stroke-width="0.6" opacity="0.6"/><line x1="54" y1="22" x2="54" y2="72" stroke="#185FA5" stroke-width="0.6" opacity="0.6"/><line x1="22" y1="40" x2="72" y2="40" stroke="#185FA5" stroke-width="0.6" opacity="0.6"/><line x1="22" y1="54" x2="72" y2="54" stroke="#185FA5" stroke-width="0.6" opacity="0.6"/><text x="29" y="18" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">¹</text><text x="45" y="18" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">²</text><text x="63" y="18" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">³</text><text x="15" y="35" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">2</text><text x="15" y="50" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">3</text><text x="15" y="65" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">5</text><text x="29" y="35" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">2</text><text x="45" y="35" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">4</text><text x="63" y="35" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">8</text><text x="29" y="50" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">3</text><text x="45" y="50" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">9</text><text x="63" y="50" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle" font-weight="bold">27</text><text x="29" y="65" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">5</text><text x="45" y="65" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">25</text><text x="63" y="65" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">125</text></svg>`,


      },
    }
  }
}

export default function PowersTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / per-state section carrying its frozen unit
  // as [content, unit, after]. (Replaces the former numeric-id auto-map.)
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
  })
  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ]
  })

  const genericSections = [
    plain('obj1', 'what-is-a-power'),
    plain('obj2', 'setting-base-and-max-power'),
    plain('obj3', 'reading-the-three-columns'),

    plain('obj4', 'exploring-different-bases'),
    stateRow('obj10', 'the-default-table-powers-of-two', 'b2-default'),
    stateRow('obj11', 'powers-of-ten-and-place-value', 'b10'),
    stateRow('obj12', 'base-five-at-the-cap-boundary', 'b5-cap'),

    plain('obj5', 'the-zero-power-rule'),
    stateRow('obj6', 'pushing-to-maximum-powers', 'b2-deep'),
    stateRow('obj7', 'spotting-last-digit-patterns', 'b7'),
    plain('obj8', 'why-powers-grow-so-fast'),
    plain('obj9', 'related-concepts-and-tools'),
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="website" />
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Table of Powers</h1>
   <br/>
   <PowerTable explanations={explanations}/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}