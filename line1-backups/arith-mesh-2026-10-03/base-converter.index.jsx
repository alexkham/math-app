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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import baseConverterDiagrams from '@/app/components/base-visualizer/baseConverterDiagrams'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


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

**Repeated division** — the standard way to convert from decimal to base $b$: divide by $b$, record the remainder, repeat with the quotient until it reaches $0$, then read the [remainders](!/arithmetic/modulo#1) from last to first.

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

Two facts follow. A number needs about $\\log_b N$ digits in base $b$, so small bases give long strings and large bases short ones. And the largest $k$-digit number in base $b$ is $b^k - 1$, all digits at their maximum, just as $999 = 10^3 - 1$. The familiar case, [decimal](!#decimal-base-10), is treated first below with the tool frozen on $100$.`,
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

Set the visualizer to base $2$, then base $16$, for the same number and check the grouping by eye. The tool computes both by repeated division, but the results line up as the grouping rule predicts. Each of the three has a dedicated section with the tool frozen on $100$: [binary](!#binary-base-2), [octal](!#octal-base-8) and [hexadecimal](!#hexadecimal-base-16).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Bases Beyond Sixteen`,
      content: `Nothing in the rule stops at $16$. Base $b$ needs $b$ digit symbols, and the convention is to continue past $9$ with the letters of the alphabet: $A = 10$, $B = 11$, up to $Z = 35$. Base $36$ therefore uses every digit and every letter, which is the largest base with a standard set of symbols and the upper limit of the visualizer.

Large bases give short strings. In base $36$, $144$ is $40_{36}$, since $4 \\cdot 36 + 0 = 144$. Short strings of letters and digits are useful wherever a number has to be typed or read by a person: shortened links, licence keys, and identifiers are often base-$36$ or base-$62$ encodings of large integers.

Small bases have their uses too. Base $3$ appears in balanced ternary and in some logic circuits; base $12$ has a long history in measurement because $12$ divides evenly by $2$, $3$, $4$ and $6$; base $60$, inherited from Babylon, still runs our minutes and seconds.

The point of allowing any base from $2$ to $36$ is that the visualizer never suggests decimal is special. The same steps produce the same number in every base. The largest case has its own section, [Base 36](!#base-36-every-digit-and-every-letter), with the tool frozen on $100 = 2S_{36}$.`,
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

**Base conversion table** — the reference table on this site for quick lookup, alongside the numeric base converter for larger inputs.

[Modular Arithmetic Wheel](!/arithmetic/visual-tools/modular-wheel) — the remainder of each division step is where the running quotient lands on a wheel with $b$ slots.

[Euclidean Algorithm Visualizer](!/arithmetic/visual-tools/euclidean-algorithm) — the same division-with-remainder rows, applied to two numbers instead of one number and a base.

[Divisibility Table](!/arithmetic/visual-tools/divisibility-table) — the divisibility rules are facts about digits in base $10$; other bases have other rules.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Decimal: Base 10`,
      content: `Base $10$ is the identity conversion: the digits the tool prints are the digits you typed. The visualizer still regroups the cubes, and that is the point. $100$ becomes one group of $10^2 = 100$ cubes, zero groups of $10$, and zero single cubes, which is exactly what the string $100$ says.`,
      before: ``,
      after: `**Reading the rows.** The result structure lists the powers of $10$ from the largest that fits downward: $10^2$ with $\\times 1$, $10^1$ with $\\times 0$, $10^0$ with $\\times 0$. Each digit is a count of groups, and the zeros are as informative as the one: they hold the places open.

Decimal feels like the way numbers *are* only because it is the base everyone learns first. Enter $100$ with base $10$, then change the base to $2$ or $16$ and watch the same one hundred cubes regroup; nothing about the quantity changes, only the group sizes. The general rule is in [What a Base Is](!#what-a-base-is), and the reverse direction, digits back to a count, in [Expansion](!#expansion).

Because base $10$ uses ten digit symbols, $0$ to $9$, a single decimal digit can hold at most nine groups of any size; the tenth group is what forces a carry into the next place. The [binary](!#binary-base-2) picture makes the same rule visible with only two symbols.`,
      link: '',
    },

    obj12: {
      title: `Binary: Base 2`,
      content: `In base $2$ each digit is a bit, $0$ or $1$, so every row of the result structure holds either one group or none. $100$ needs seven bits: $100 = 64 + 32 + 4$, and the visualizer shows exactly those three groups, at $2^6$, $2^5$ and $2^2$, with empty rows at $2^4$, $2^3$, $2^1$ and $2^0$.`,
      before: ``,
      after: `**Why so many rows.** A base $b$ needs about $\\log_b N$ digits, and $\\log_2 100 \\approx 6.6$, so seven. Binary is the longest notation the tool offers; the same $100$ takes three digits in [octal](!#octal-base-8) and two in [hexadecimal](!#hexadecimal-base-16).

**By repeated division.** $100 \\to 50$ r $0$, $50 \\to 25$ r $0$, $25 \\to 12$ r $1$, $12 \\to 6$ r $0$, $6 \\to 3$ r $0$, $3 \\to 1$ r $1$, $1 \\to 0$ r $1$; read upward, $1100100_2$. The method is explained in [Repeated Division](!#repeated-division). Each remainder is the bit for one row of the picture.

Binary is the native notation of digital hardware, where a bit is a switch that is on or off. The grouping that turns it into the two shorthand bases is described in [Binary, Octal and Hexadecimal](!#binary-octal-and-hexadecimal).`,
      link: '',
    },

    obj13: {
      title: `Octal: Base 8`,
      content: `In base $8$ the digits run $0$ to $7$ and the place values are $1, 8, 64, 512, \\ldots$. $100 = 1 \\cdot 64 + 4 \\cdot 8 + 4$, so the visualizer shows one $8^2$ group, four $8^1$ groups and four single cubes: $144_8$.`,
      before: ``,
      after: `**Three bits per digit.** Because $8 = 2^3$, each octal digit is exactly three binary digits. Split the [binary](!#binary-base-2) string $1100100_2$ into threes from the right, $1\\ 100\\ 100$, and read $1$, $4$, $4$; no arithmetic needed. The four groups of $8$ in the picture are the $100$ in the middle of the bit string.

**By repeated division.** $100 \\to 12$ r $4$, $12 \\to 1$ r $4$, $1 \\to 0$ r $1$: the remainders $4, 4, 1$ read upward give $144_8$, as in the [worked example](!#worked-example).

Octal was the programmer's shorthand before bytes settled at eight bits; it survives in file permissions and a few older systems. [Hexadecimal](!#hexadecimal-base-16), four bits per digit, took over because it divides a byte evenly.`,
      link: '',
    },

    obj14: {
      title: `Hexadecimal: Base 16`,
      content: `Base $16$ uses sixteen digit symbols, $0$ to $9$ and then $A$ to $F$ for ten to fifteen. $100 = 6 \\cdot 16 + 4$, so the visualizer shows six $16^1$ groups and four single cubes: $64_{16}$. Both digits happen to be below ten; try $45$ to see a letter, $2D_{16}$.`,
      before: ``,
      after: `**Four bits per digit.** $16 = 2^4$, so one hexadecimal digit is four bits. Grouping $1100100_2$ into fours from the right, $110\\ 0100$, reads $6$ and $4$ directly. A byte is eight bits and therefore exactly two hex digits, from $00$ to $FF$, which is why memory addresses, colour codes and hashes are written in hex.

**By repeated division.** $100 \\to 6$ r $4$, $6 \\to 0$ r $6$: two steps, the shortest of the four conversions in the [worked example](!#worked-example).

Compare the picture with [octal](!#octal-base-8): the same hundred cubes, but the larger base makes bigger groups and fewer rows. The largest base the tool accepts, [base 36](!#base-36-every-digit-and-every-letter), pushes this to the limit.`,
      link: '',
    },

    obj15: {
      title: `Base 36: Every Digit and Every Letter`,
      content: `Base $36$ is the largest base the visualizer accepts, because it is the largest with a standard set of symbols: the ten digits and the twenty-six letters, $A = 10$ up to $Z = 35$. $100 = 2 \\cdot 36 + 28$, and $28$ is written $S$, so the result is $2S_{36}$.`,
      before: ``,
      after: `**Reading the picture.** The $36^1$ row holds two groups of $36$ cubes and the $36^0$ row holds twenty-eight single cubes. A row can hold up to thirty-five groups before it must carry, which is why the second digit needs a letter: there are not enough numerals for a base this large.

**By repeated division.** $100 \\to 2$ r $28$, $2 \\to 0$ r $2$; the remainders $28$ and $2$ become the digits $S$ and $2$. Large bases give short strings, which is why identifiers and short links are often base-$36$ encodings of large integers; see [Bases Beyond Sixteen](!#bases-beyond-sixteen).

Any base between $17$ and $36$ behaves the same way, with letters appearing as soon as a digit exceeds $9$. Type $100$ with base $20$ or $25$ to see $50_{20}$ and $40_{25}$, both letter-free, then base $30$ for $3A_{30}$.`,
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

  // Line 1 (2026-09-23): framed units freezing the tool on 100 in each base; see baseConverterDiagrams.js.
  const stateUnits = {
    b10: demoUnitFrame({ svg: baseConverterDiagrams.bases[10], caption: '100 in base 10, frozen',
      text: 'All one hundred cubes sit in a single 10&#178; group and the 10&#185; and 10&#8304; rows are empty: the digits 1, 0, 0 read straight off the picture.' }),
    b2: demoUnitFrame({ svg: baseConverterDiagrams.bases[2], caption: '100 in base 2, frozen',
      text: 'Seven rows, one per power of two from 64 down to 1: the 64, 32 and 4 rows hold one group each, the others none, giving 1100100.' }),
    b8: demoUnitFrame({ svg: baseConverterDiagrams.bases[8], caption: '100 in base 8, frozen',
      text: 'Three rows: one group of 64, four groups of 8 and four single cubes, so the digits are 1, 4, 4.' }),
    b16: demoUnitFrame({ svg: baseConverterDiagrams.bases[16], caption: '100 in base 16, frozen',
      text: 'Two rows: six groups of 16 and four single cubes, so 100 is 64 in hexadecimal, with no letter digit needed this time.' }),
    b36: demoUnitFrame({ svg: baseConverterDiagrams.bases[36], caption: '100 in base 36, frozen',
      text: 'Two rows: two groups of 36 and twenty-eight single cubes; the count 28 has no numeral of its own, so the tool writes the letter S.' }),
  };

  // Line 1: explanations panel entries keyed by tool state (empty, b2, b8, b10, b16, other, error).
  const explanations = {
    empty: `Type a whole number up to 144 and a base from 2 to 36. The grid on the left holds the number as cubes; the right side regroups the same cubes by powers of the base, one row per digit. [What a base is](!#what-a-base-is) · [Repeated division](!#repeated-division)`,
    b2: `Base 2: every row holds one group or none, so each digit is a bit. The number of rows is the number of bits, the longest notation the tool offers. [Learn more about binary](!#binary-base-2) · [Binary, octal and hexadecimal](!#binary-octal-and-hexadecimal)`,
    b8: `Base 8: digits 0 to 7, place values 1, 8, 64. Each octal digit is three bits, so the picture is the binary one with rows merged in threes. [Learn more about octal](!#octal-base-8) · [Binary, octal and hexadecimal](!#binary-octal-and-hexadecimal)`,
    b10: `Base 10: the digits you typed, regrouped into hundreds, tens and units. Change the base to see the same cubes regroup. [Learn more about decimal](!#decimal-base-10) · [What a base is](!#what-a-base-is)`,
    b16: `Base 16: digits 0 to 9 then A to F, four bits per digit, two digits per byte. Rows above nine groups show a letter. [Learn more about hexadecimal](!#hexadecimal-base-16) · [Binary, octal and hexadecimal](!#binary-octal-and-hexadecimal)`,
    other: `A base past 16 uses letters for digits above 9, up to Z = 35 in base 36; the fewer the rows, the larger the base. [Learn more about base 36 and other bases](!#base-36-every-digit-and-every-letter) · [Bases beyond sixteen](!#bases-beyond-sixteen)`,
    error: `The number must be at most 144 and the base between 2 and 36; the grid has 144 cells and the alphabet runs out at base 36. [Common mistakes](!#common-mistakes)`,
  };

  return {
    props: {
      relatedTools: getRelatedTools('base-converter'),
      sectionsContent,
      faqQuestions,
      stateUnits,
      explanations,
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


export default function BaseConverter({ relatedTools, seoData, sectionsContent, faqQuestions, schemas, navigationGroup, stateUnits, explanations }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })
  // Line 1: a per-state section is [opening prose, framed unit, deeper treatment]
  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={'u-' + unitKey} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'what-a-base-is'),
    stateRow('obj11', 'decimal-base-10', 'b10'),
    plain('obj3', 'repeated-division'),
    plain('obj4', 'expansion'),
    plain('obj5', 'binary-octal-and-hexadecimal'),
    stateRow('obj12', 'binary-base-2', 'b2'),
    stateRow('obj13', 'octal-base-8', 'b8'),
    stateRow('obj14', 'hexadecimal-base-16', 'b16'),
    plain('obj6', 'bases-beyond-sixteen'),
    stateRow('obj15', 'base-36-every-digit-and-every-letter', 'b36'),
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
        <BaseVisualizer2 explanations={explanations} />
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
      <RelatedTools tools={relatedTools}/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
