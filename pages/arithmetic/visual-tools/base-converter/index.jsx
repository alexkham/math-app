// Moved 2026-09-13 from pages/visual-tools/base-converter (top-level route)
// and brought up to the tool-page template the same day: full Head block,
// three JSON-LD schemas, content sections, FAQ, and a seoData block with hub
// metadata for the arithmetic landing's auto-discovery.
// The old URL /visual-tools/base-converter is permanently redirected here in
// next.config.js. Search Console (90 days to 2026-09-12): 10 clicks, 132
// impressions. A second base converter lives at /converters/base-converter
// (21 clicks) - consolidating the two is a separate decision. The visualizer
// component is unchanged.

import Head from 'next/head'
import BaseVisualizer2 from '@/app/components/base-visualizer/BaseVisualizer2'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


export async function getStaticProps() {

  const keyWords = [
    'base converter',
    'base conversion visualizer',
    'number base conversion',
    'convert decimal to binary',
    'decimal to binary step by step',
    'decimal to hexadecimal',
    'decimal to octal',
    'binary to decimal',
    'place value',
    'positional notation',
    'repeated division method',
    'base 2 to base 36',
    'number systems',
    'interactive arithmetic tool',
    'free base converter'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Base** (or radix) — the number of distinct digits a number system uses, and the factor by which each place is worth more than the one to its right. Decimal is base $10$, binary base $2$, octal base $8$, hexadecimal base $16$.

**Digit** — one symbol of the system. Base $b$ uses the digits $0$ to $b - 1$; above $9$ the letters $A$ to $Z$ stand in, so base $16$ runs $0$ to $F$ and base $36$ uses all ten digits and all twenty-six letters.

**Place value** — the weight of a position: $b^0, b^1, b^2, \\ldots$ reading from the right. The digit in a place contributes digit times weight.

**Positional notation** — writing a number as a string of digits whose meaning depends on position, $d_k \\cdots d_1 d_0 = \\sum_i d_i\\, b^i$.

**Repeated division** — the standard way to convert from decimal to base $b$: divide by $b$, record the remainder, repeat with the quotient until it reaches $0$, then read the remainders from last to first.

**Expansion** — the reverse direction: multiply each digit by its place value and add, which converts any base back to decimal.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Type a number, choose a base, and the tool shows how the number is rebuilt digit by digit in that base.

• **Number** takes a whole number from $0$ to $144$, entered as an ordinary decimal
• **Base** takes any base from $2$ to $36$; binary, octal and hexadecimal are the usual choices, but any value in the range works, and the letters $A$ to $Z$ appear as digits above $9$
• The visualization lays out the conversion step by step, so each digit of the result can be traced back to the operation that produced it
• **Reset** clears both fields and the display

The limit of $144$ is deliberate: it is $12^2$, large enough for every base in the range to show at least two digits and small enough for every step to fit on screen. Try the same number in bases $2$, $8$ and $16$ in a row; the binary and hexadecimal results line up in groups of four bits, which the [grouping](!#binary-octal-and-hexadecimal) section explains.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `What a Base Is`,
      content: `Every positional number system works the same way. A base $b$ has $b$ digits, $0$ through $b - 1$, and each place is worth $b$ times the place to its right. The string $d_k d_{k-1} \\cdots d_1 d_0$ stands for

$$d_k\\, b^k + d_{k-1}\\, b^{k-1} + \\cdots + d_1\\, b + d_0$$

In decimal, $b = 10$, and $472$ means $4 \\cdot 100 + 7 \\cdot 10 + 2$. In binary, $b = 2$, and $101$ means $1 \\cdot 4 + 0 \\cdot 2 + 1 = 5$. The digits are different, the rule is not.

Decimal is a convention, not a property of numbers. The quantity five is the same whether it is written $5$, $101_2$, $12_3$ or $5_{16}$; only the notation changes. That is the whole idea the visualizer is built to show: a base conversion changes how a number is written, never what it is.

Two facts follow. A number needs about $\\log_b N$ digits in base $b$, so small bases give long strings and large bases short ones. And the largest $k$-digit number in base $b$ is $b^k - 1$, all digits at their maximum, just as $999 = 10^3 - 1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Converting from Decimal: Repeated Division`,
      content: `To write a decimal number $N$ in base $b$, divide by $b$ and keep the remainder, then divide the quotient by $b$ and keep that remainder, and continue until the quotient is $0$. The remainders, read from the last one obtained to the first, are the digits.

For $N = 45$ in base $2$:

• $45 \\div 2 = 22$ remainder $1$
• $22 \\div 2 = 11$ remainder $0$
• $11 \\div 2 = 5$ remainder $1$
• $5 \\div 2 = 2$ remainder $1$
• $2 \\div 2 = 1$ remainder $0$
• $1 \\div 2 = 0$ remainder $1$

Reading upward, $45 = 101101_2$.

The method works because each division strips off the lowest place. The first remainder is the units digit, since $N = b \\cdot q + r$ leaves $r$ in the $b^0$ place and pushes everything else one place up. The visualizer shows exactly this sequence, which is why the digits appear in reverse order of the steps.

The same steps in base $16$ finish sooner: $45 \\div 16 = 2$ remainder $13$, then $2 \\div 16 = 0$ remainder $2$, so $45 = 2D_{16}$, with $D$ standing for thirteen.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Converting to Decimal: Expansion`,
      content: `The reverse direction needs no division. Multiply each digit by its place value and add.

$$101101_2 = 1 \\cdot 32 + 0 \\cdot 16 + 1 \\cdot 8 + 1 \\cdot 4 + 0 \\cdot 2 + 1 \\cdot 1 = 45$$

$$2D_{16} = 2 \\cdot 16 + 13 \\cdot 1 = 45$$

A faster hand method, Horner's scheme, works left to right: start with the leading digit, and for each further digit multiply the running total by the base and add the digit. For $101101_2$: $1$, then $2 \\cdot 1 + 0 = 2$, then $2 \\cdot 2 + 1 = 5$, then $11$, then $22$, then $45$. It uses one multiplication per digit and never needs the powers of the base written out.

Conversion between two non-decimal bases is done in two hops through decimal: expand the source, then divide into the target. The one shortcut is between bases that are powers of the same number, treated in the [grouping](!#binary-octal-and-hexadecimal) section.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Binary, Octal and Hexadecimal`,
      content: `Three bases dominate computing, and they are related by grouping.

**Binary**, base $2$, is the native language of digital hardware: each digit is one bit, on or off. It is also the longest notation; $144$ takes eight bits, $10010000_2$.

**Octal**, base $8$, and **hexadecimal**, base $16$, are shorthand for binary. Because $8 = 2^3$ and $16 = 2^4$, one octal digit is exactly three bits and one hexadecimal digit is exactly four, so conversion between them and binary needs no arithmetic, only grouping. Split $10010000_2$ into fours from the right, $1001\\ 0000$, and read each group: $9$ and $0$, so $90_{16}$. Split into threes, $10\\ 010\\ 000$, and read $2$, $2$, $0$: $220_8$.

Hexadecimal won because a byte is eight bits and therefore exactly two hex digits, from $00$ to $FF$. Memory addresses, colour codes and hash values are written in hex for that reason.

Set the visualizer to base $2$, then base $16$, for the same number and check the grouping by eye. The tool computes both by repeated division, but the results line up as the grouping rule predicts.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Bases Beyond Sixteen`,
      content: `Nothing in the rule stops at $16$. Base $b$ needs $b$ digit symbols, and the convention is to continue past $9$ with the letters of the alphabet: $A = 10$, $B = 11$, up to $Z = 35$. Base $36$ therefore uses every digit and every letter, which is the largest base with a standard set of symbols and the upper limit of the visualizer.

Large bases give short strings. In base $36$, $144$ is $40_{36}$, since $4 \\cdot 36 + 0 = 144$. Short strings of letters and digits are useful wherever a number has to be typed or read by a person: shortened links, licence keys, and identifiers are often base-$36$ or base-$62$ encodings of large integers.

Small bases have their uses too. Base $3$ appears in balanced ternary and in some logic circuits; base $12$ has a long history in measurement because $12$ divides evenly by $2$, $3$, $4$ and $6$; base $60$, inherited from Babylon, still runs our minutes and seconds.

The point of allowing any base from $2$ to $36$ is that the visualizer never suggests decimal is special. The same steps produce the same number in every base.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Worked Example`,
      content: `Convert $100$ to four bases by repeated division.

**Base 2.** $100 \\to 50$ r $0$, $50 \\to 25$ r $0$, $25 \\to 12$ r $1$, $12 \\to 6$ r $0$, $6 \\to 3$ r $0$, $3 \\to 1$ r $1$, $1 \\to 0$ r $1$. Reading the remainders upward: $100 = 1100100_2$.

**Base 8.** $100 \\to 12$ r $4$, $12 \\to 1$ r $4$, $1 \\to 0$ r $1$. So $100 = 144_8$.

**Base 16.** $100 \\to 6$ r $4$, $6 \\to 0$ r $6$. So $100 = 64_{16}$.

**Base 36.** $100 \\to 2$ r $28$, $2 \\to 0$ r $2$. The digit for $28$ is $S$, so $100 = 2S_{36}$.

Check by expansion: $1 \\cdot 64 + 1 \\cdot 32 + 0 + 0 + 1 \\cdot 4 + 0 + 0 = 100$; $1 \\cdot 64 + 4 \\cdot 8 + 4 = 100$; $6 \\cdot 16 + 4 = 100$; $2 \\cdot 36 + 28 = 100$.

Notice the grouping between binary and the two power-of-two bases: $1\\ 100\\ 100$ in threes reads $1$, $4$, $4$, and $110\\ 0100$ in fours reads $6$, $4$. Enter $100$ in the visualizer with each base to watch the same remainders appear.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Common Mistakes`,
      content: `Base conversion is mechanical, and the errors are mechanical too.

• **Reading the remainders in the order they were produced** — the first remainder is the units digit, so the digits must be read from the last remainder to the first
• **Stopping before the quotient reaches zero** — the last division, with quotient $0$, produces the leading digit; skipping it drops the most significant digit
• **Using a digit that is too large for the base** — base $b$ has digits $0$ to $b - 1$ only; there is no digit $2$ in binary and no digit $8$ in octal
• **Forgetting that letters are digits** — in hexadecimal $A$ to $F$ are the numbers ten to fifteen, not text, and $1A_{16}$ is $26$
• **Grouping bits from the left** — grouping into threes or fours must start from the right, the units end, padding with zeros on the left if needed
• **Treating the conversion as changing the number** — $45$, $101101_2$ and $2D_{16}$ are one quantity written three ways; arithmetic on any of them gives the same answers`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Where Base Conversion Appears`,
      content: `**Computing** — every number in a processor is binary, and programmers read it as hexadecimal; converting between the two is daily work in debugging, networking and graphics, where colours are three hex bytes.

**Data encoding** — identifiers, short links and keys are large integers written in base $36$ or base $64$ so that they are short enough to type.

**Digital electronics** — octal and binary describe the states of switches and the addresses of memory cells.

**Number theory** — divisibility rules are facts about base $10$; the rule for $9$, that a number is divisible by $9$ when its digit sum is, works because $10 \\equiv 1 \\pmod 9$, and a different base has different rules.

**Measurement and time** — base $60$ for angles and time, base $12$ for dozens and inches, base $20$ in the French word for eighty; the history of counting is a history of bases.

**Teaching place value** — conversion is the cleanest way to see what the decimal system actually does, since the mechanism is easier to notice in an unfamiliar base than in the one everyone has used since childhood.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Place value** — the principle every base shares: a digit's contribution is its value times the power of the base at its position.

**Powers and exponents** — the place values are the powers $b^0, b^1, b^2, \\ldots$ of the base.

**Division with remainder** — the operation repeated division is built from, $N = b q + r$ with $0 \\le r < b$.

**Modular arithmetic** — the remainder on division by $b$ is $N \\bmod b$, the units digit in base $b$.

**Divisibility rules** — facts about digits in a particular base, derived from the base's remainders modulo the divisor.

**Logarithms** — the number of digits of $N$ in base $b$ is about $\\log_b N$.

**Binary arithmetic** — addition and multiplication carried out directly in base $2$, the next step after conversion.

**Base conversion table** — the reference table on this site for quick lookup, alongside the numeric base converter for larger inputs.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a number base?",
      answer: "A base is the number of distinct digits a positional number system uses, and the factor by which each place is worth more than the one to its right. Decimal is base 10, binary is base 2, hexadecimal is base 16. A string of digits in base b stands for the sum of each digit times the corresponding power of b."
    },
    obj2: {
      question: "How do you convert a decimal number to another base?",
      answer: "Divide the number by the base and record the remainder, then divide the quotient by the base and record that remainder, and continue until the quotient is zero. The remainders read from last to first are the digits of the number in the new base. The first remainder is the units digit, which is why the order is reversed."
    },
    obj3: {
      question: "How do you convert from another base back to decimal?",
      answer: "Multiply each digit by its place value, the power of the base at that position counting from zero on the right, and add the products. For example 101101 in base 2 is 32 + 8 + 4 + 1 = 45. Horner's scheme does the same left to right with one multiplication per digit."
    },
    obj4: {
      question: "Why is hexadecimal used in computing?",
      answer: "Because 16 is 2 to the power 4, one hexadecimal digit is exactly four binary bits, so conversion between the two is a matter of grouping rather than arithmetic. A byte of eight bits is exactly two hexadecimal digits, from 00 to FF, which makes hexadecimal the natural shorthand for memory addresses, colour codes and binary data."
    },
    obj5: {
      question: "What are the digits above 9 in bases larger than 10?",
      answer: "The letters of the alphabet are used in order: A stands for ten, B for eleven, and so on up to Z for thirty-five. Base 16 therefore uses 0 to 9 and A to F, and base 36, the largest base with a standard digit set, uses all ten digits and all twenty-six letters."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Base Conversion Visualizer",
      "description": "Interactive visualizer for converting whole numbers from decimal into any base from 2 to 36, showing the repeated-division steps and the resulting digits one at a time.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools/base-converter",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Any target base from 2 to 36, with letters as digits above 9",
        "Whole numbers from 0 to 144",
        "Repeated-division steps shown one at a time",
        "Digits of the result traced back to the step that produced them",
        "Reset control for a fresh conversion",
        "Links to the numeric base converter and the base conversion table"
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
      "educationalLevel": "Middle School, High School",
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
          "name": "Arithmetic",
          "item": "https://www.learnmathclass.com/arithmetic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Base Converter",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools/base-converter"
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

  const navigationGroup = [
    {
      title: 'Related Pages',
      items: [
        { title: 'Base Converter', link: '/converters/base-converter' },
        { title: 'Base Convertion Table', link: '/tables/base-conversion' }
      ]
    }
  ]

  return {
    props: {
      sectionsContent,
      faqQuestions,
      schemas,
      navigationGroup,
      seoData: {
        title: "Base Conversion Visualizer | Decimal to Any Base, Step by Step",
        description: "Visualize number base conversion step by step. Enter a number and any base from 2 to 36 and watch the repeated-division digits appear: binary, octal, hexadecimal and beyond.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools/base-converter",
        name: "Base Conversion Visualizer",
        hubDescription: "Enter a whole number and a target base from 2 to 36 and watch the conversion happen step by step: each division by the base, each remainder, and the digit it becomes, read off in the right order. Binary, octal and hexadecimal are the usual choices, but every base in the range works, with the letters A to Z standing in for digits above 9, and the same steps produce the same number in every base, which is the place-value idea the tool is built to show.",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="22" width="60" height="16" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><text x="40" y="34" font-family="Georgia,serif" font-size="10" fill="#185FA5" text-anchor="middle" font-weight="600">42</text><path d="M 40 40 L 40 48" stroke="#FAC775" stroke-width="1.6"/><path d="M 40 50 L 36.5 45.5 L 43.5 45.5 Z" fill="#FAC775"/><rect x="8" y="52" width="14" height="16" rx="2" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="24" y="52" width="14" height="16" rx="2" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="40" y="52" width="14" height="16" rx="2" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="56" y="52" width="14" height="16" rx="2" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><text x="15" y="64" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">1</text><text x="31" y="64" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">0</text><text x="47" y="64" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">1</text><text x="63" y="64" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">0</text><text x="40" y="15" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">base 10 &#8594; base 2</text></svg>`
      }
    },
  };
}


export default function BaseConverter({ seoData, sectionsContent, faqQuestions, schemas, navigationGroup }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'what-a-base-is'),
    plain('obj3', 'repeated-division'),
    plain('obj4', 'expansion'),
    plain('obj5', 'binary-octal-and-hexadecimal'),
    plain('obj6', 'bases-beyond-sixteen'),
    plain('obj7', 'worked-example'),
    plain('obj8', 'common-mistakes'),
    plain('obj9', 'where-base-conversion-appears'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Base Conversion Visualizer</h1>
      <br/>
      <VerticalButtonGroup
        items={navigationGroup}
        width="250px"
        theme='lightBlue'
        isSticky={true}
        verticalOffset='260px'
      />
      <br/>
      <div style={{marginTop:'-100px'}}>
        <BaseVisualizer2 />
      </div>
      <br/>
      <br/>
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
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
