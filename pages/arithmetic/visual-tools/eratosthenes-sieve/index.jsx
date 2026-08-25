


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import EratosthenesSieve from '../../../../app/components/visualizations/arithmetic/EratosthenesSieve'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import eratosthenesSieveDiagrams from '@/app/components/visualizations/arithmetic/eratosthenesSieveDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'sieve of eratosthenes',
    'sieve of eratosthenes visualization',
    'prime number sieve',
    'find primes interactive',
    'eratosthenes algorithm',
    'prime sieve animation',
    'sieve of eratosthenes tool',
    'prime number finder',
    'crossing out composites',
    'prime sieve step by step',
    'interactive prime finder',
    'sieve algorithm visual',
    'primes up to 100',
    'eratosthenes prime generator',
    'learn sieve of eratosthenes'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is the Sieve of Eratosthenes?",
      answer: "The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a given limit. It works by repeatedly crossing out multiples of each prime, starting with 2. Numbers that remain uncrossed are prime."
    },
    obj2: {
      question: "How do I use this Sieve of Eratosthenes tool?",
      answer: "Press Start to run the algorithm automatically, or use Step to advance one action at a time. The grid shows numbers 1-100, with primes highlighted in color and composites crossed out. Adjust speed with the slider and press Reset to start over."
    },
    obj3: {
      question: "Why does the sieve start crossing multiples at p²?",
      answer: "When processing prime p, all multiples smaller than p² have already been crossed out by smaller primes. For example, when crossing multiples of 5, the numbers 10, 15, and 20 were already crossed by 2 or 3. So we start at 5² = 25."
    },
    obj4: {
      question: "How many primes are there up to 100?",
      answer: "There are 25 prime numbers between 1 and 100. The Sieve of Eratosthenes finds them by crossing out 74 composite numbers (plus 1, which is neither prime nor composite), leaving 25 primes: 2, 3, 5, 7, 11, 13, and so on up to 97."
    },
    obj5: {
      question: "Why is the Sieve of Eratosthenes efficient?",
      answer: "The sieve is efficient because it avoids division entirely. Instead of testing each number for divisibility, it simply marks multiples. For finding primes up to n, it runs in O(n log log n) time, making it much faster than trial division for large ranges."
    }
  }

  const sectionsContent = {

    obj1: {
      title: `How to Use the Sieve Visualization`,
      content: `This interactive tool demonstrates the Sieve of Eratosthenes algorithm on numbers from 1 to 100. Press the **Start** button to run the animation automatically, watching as primes emerge and [composites get crossed out](!#what-is-the-sieve-of-eratosthenes).

Use the **Step** button to advance one action at a time for closer study. Each step either identifies a new prime or crosses out one of its multiples. The **Reset** button clears the grid and returns to the initial state.

The **Speed** slider controls how fast the animation runs. Slide left for slower, more detailed observation; slide right for faster execution. Even at maximum speed, each crossing is visible so you can follow the pattern.`,
      before: ``,
      after: `The frozen frame above is the tool at rest: one hundred cells, none yet judged. Only 1 is grayed out from the start—it is neither prime nor composite, so the algorithm never touches it. Everything else is, for the moment, a candidate.

That neutrality is the honest starting point of the sieve: it assumes nothing and eliminates rather than tests. What each color will come to mean once the run begins is covered under the [grid display](!#understanding-the-grid-display).`,
      link: '',
    },

    obj2: {
      title: `Understanding the Grid Display`,
      content: `The main grid shows numbers 1 through 100 arranged in 10 rows of 10. Number 1 appears gray because it is neither prime nor composite — by definition, [primes must have exactly two distinct divisors](!#prime-numbers-and-their-properties).

As the algorithm runs, primes light up in solid colors: **blue** for 2, **green** for 3, **purple** for 5, and **orange** for 7. These are the only primes whose multiples need crossing within 100, since the next prime (11) has 11² = 121 > 100.

Composite numbers show tinted backgrounds indicating which prime(s) crossed them out. Numbers divisible by multiple small primes display [striped patterns](!#the-second-pass-multiples-of-3) combining those colors. This color coding reveals divisibility relationships at a glance.`,
      before: ``,
      after: `The finished grid above is the whole story in one frame: 25 solid primes, 74 tinted composites, and gray 1. Read any composite's tint as a partial factorization—66 wears the stripes of 2 and 3, 70 of 2, 5, and 7. Only factors up to 7 are recorded; 94 = 2 × 47 shows pure blue because 47 lies beyond the sieve's palette.

The finished frame also displays the thinning documented under [patterns in prime distribution](!#patterns-in-prime-distribution): solid cells crowd the early rows and scatter toward the bottom.`,
      link: '',
    },

    obj3: {
      title: `Reading the Status Bar`,
      content: `The status bar between the controls and grid displays the current action. Before starting, it shows "Press Start to begin the sieve." During execution, it narrates each step.

When a prime is found, the status reads "Found prime X — crossing out multiples." When crossing a specific multiple, it shows "Crossing out Y (X × Z)" where Y is the composite being marked and Z is the multiplier.

Upon completion, the status announces "Complete! Found all primes up to 100." The legend on the right side of the status bar shows the [color key for divisibility](!#understanding-the-grid-display) by 2, 3, 5, and 7.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Using the Step-by-Step Panel`,
      content: `The right panel provides detailed explanations organized by divisor. Each prime that processes multiples gets its own card showing which numbers it crossed out.

The card header shows the divisor (÷2, ÷3, etc.) and explains the starting point: "Cross out multiples of p [starting from p²](!#why-start-at-p-squared) = ..." This explains why the sieve skips smaller multiples — they were already handled by smaller primes.

Below the header, crossed numbers appear as colored badges. The count at the bottom tracks how many composites this divisor eliminated. Active cards highlight while that prime's multiples are being processed.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Tracking Statistics`,
      content: `Three statistics cards at the top of the right panel show running totals. **Primes** counts how many prime numbers have been confirmed. **Composites** counts how many numbers have been crossed out. **Current** displays the prime currently being processed.

Watch these numbers change as the algorithm progresses. By completion, you'll see 25 primes and 74 composites (plus 1, which is neither). The Current indicator shows "—" when the sieve finishes.

These real-time statistics help you understand the density of primes. Notice that most crossings happen early ([multiples of 2 eliminate half the grid](!#the-first-pass-multiples-of-2)), while later primes find fewer uncrossed multiples.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `What is the Sieve of Eratosthenes?`,
      content: `The **Sieve of Eratosthenes** is an ancient algorithm attributed to the Greek mathematician Eratosthenes of Cyrene (c. 276–194 BCE). It finds all prime numbers up to any given limit through systematic elimination of composites.

The algorithm works by iterating through numbers starting at 2. For each unmarked number p, it marks p as prime, then crosses out all multiples of p (starting from p²). The process continues until reaching √n, since any composite larger than √n must have a factor smaller than √n.

Unlike trial division, which tests each candidate individually, the sieve processes numbers in bulk. This makes it remarkably efficient — finding primes up to one million takes mere milliseconds on modern computers.

On this page the run unfolds in four sweeps: the [first pass for 2](!#the-first-pass-multiples-of-2), the [second pass for 3](!#the-second-pass-multiples-of-3), the sweep for 5 that famously [starts at 25](!#why-start-at-p-squared), and the [final pass for 7](!#the-last-pass-multiples-of-7) — after which the [finished grid](!#understanding-the-grid-display) shows all 25 primes. It all begins from the [idle grid](!#how-to-use-the-sieve-visualization) with a press of Start.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Why Start at p²?`,
      content: `A key optimization in the sieve is starting each prime's elimination at p² rather than 2p. This works because every multiple of p smaller than p² has already been eliminated by a smaller prime.

Consider p = 5. The multiples 10, 15, and 20 equal 2×5, 3×5, and 4×5 respectively. Since 2 < 5 and 3 < 5 and 4 = 2×2, these were crossed out when processing 2 or 3. The first "new" multiple is 5×5 = 25.

This optimization explains why only primes up to √n need processing. For n = 100, we check primes up to 10, meaning 2, 3, 5, and 7. The next prime, 11, has 11² = 121 > 100, so all remaining unmarked numbers are already confirmed prime.`,
      before: ``,
      after: `The frozen frame above catches the sieve just after 5's sweep, and the p² rule is visible in the counts: of the sixteen multiples of 5 in range, only six — 25, 35, 55, 65, 85, 95 — are newly crossed in purple. The other ten already carried blue or green from earlier passes; 5 merely adds its stripe to their pattern.

Notice what the six newcomers have in common: each is 5 times a number whose smallest prime factor is 5 or more (25 = 5×5, 35 = 5×7, 55 = 5×11 …). That is the p² principle stated backwards—a multiple of 5 escapes the earlier sweeps only if its other factor has no small primes in it. The [final pass for 7](!#the-last-pass-multiples-of-7) pushes the same logic to its endpoint.`,
      link: '',
    },

    obj8: {
      title: `Prime Numbers and Their Properties`,
      content: `A **prime number** is a natural number greater than 1 that has no positive divisors other than 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29.

The number 2 is special — it's the only even prime. Every other even number is divisible by 2 and therefore composite. This is why the sieve eliminates half the grid in [its first pass](!#the-first-pass-multiples-of-2).

The **Fundamental Theorem of Arithmetic** states that every integer greater than 1 can be uniquely expressed as a product of primes. This makes primes the "building blocks" of all numbers, giving them central importance in number theory and applications like cryptography.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Algorithm Complexity and Efficiency`,
      content: `The Sieve of Eratosthenes has time complexity $O(n \\log \\log n)$, where n is the upper limit. This is nearly linear and much faster than testing each number individually with trial division, which takes $O(n \\sqrt{n})$.

The efficiency comes from avoiding division entirely. Instead of asking "is this number prime?", the sieve marks multiples using simple addition. Each composite gets marked first by its [smallest prime factor](!#related-concepts), minimizing redundant work.

Space complexity is $O(n)$ for storing the array of marks. Optimizations exist: storing only odd numbers halves memory usage, and segmented sieves process ranges in chunks to handle very large limits.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Patterns in Prime Distribution`,
      content: `Watch the grid as primes emerge and notice patterns. Primes become less frequent as numbers grow — there are 10 primes between 1-25 but only 6 between 76-100. This reflects the **Prime Number Theorem**: primes near n have density approximately $1 / \\ln(n)$.

Observe that after 2, all primes are odd. After 3, all primes [avoid multiples of both 2 and 3](!#the-second-pass-multiples-of-3), appearing only at positions 6k±1. These patterns inspire more advanced sieves that skip known non-primes.

Twin primes — pairs differing by 2 like (11,13) and (17,19) — appear scattered through the grid. The **Twin Prime Conjecture** suggests infinitely many exist, though this remains unproven.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts`,
      content: `The Sieve of Eratosthenes connects to many topics in number theory and computer science:

**Prime Factorization**: Every composite crossed by the sieve has a smallest prime factor. Collecting these factors decomposes any number into primes.

**Divisibility**: The sieve visually demonstrates divisibility — colored stripes show which small primes divide each composite.

**GCD and LCM**: Finding greatest common divisors and least common multiples relies on prime factorizations that the sieve helps identify.

**Cryptography**: Large primes are essential for RSA encryption. While the basic sieve handles small ranges, related algorithms generate the massive primes used in security.

**Computational Number Theory**: Modern variants like the Sieve of Atkin and segmented sieves extend these ideas to find primes among billions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `The First Pass: Multiples of 2`,
      content: `The sieve's opening move is its largest. The first unmarked number is 2, so 2 is prime — and its multiples fall in a single sweep: 4, 6, 8, and every even number up to 100. Forty-nine composites are eliminated at once, half the grid.

Because the grid is 10 columns wide and 2 divides 10, the crossed cells line up in five clean vertical stripes — the even columns. No later pass will look this orderly.

The status bar narrates each crossing as "Crossing out Y (2 × Z)", and the ÷2 card in the step-by-step panel collects all forty-nine. When the sweep ends, the first survivor is 3 — the next prime, already guaranteed.`,
      before: ``,
      after: `The sweep starts at 4, which is just the [p² rule](!#why-start-at-p-squared) in its degenerate case: below 2² there are no composite multiples to cross. From here on, every remaining candidate is odd.

Half the work of the entire sieve happens in this one pass — a preview of the efficiency argument made under [algorithm complexity](!#algorithm-complexity-and-efficiency): each prime p crosses about n/p numbers, so small primes do almost everything and later primes arrive to find their work mostly done.`,
      link: '',
    },

    obj13: {
      title: `The Second Pass: Multiples of 3`,
      content: `After 2's sweep, the smallest survivor is 3 — prime by survival. Its multiples fall from 9 onward: 9, 12, 15, 18, and so on in steps of three.

This is the pass where the grid's most distinctive feature first appears: stripes. Every second multiple of 3 is even and already blue, so numbers like 12, 18, and 24 now carry both colors in a striped pattern — a visible record that two primes divide them. The genuinely new crossings are the odd multiples: 9, 15, 21, 27, and their kin, sixteen numbers in all.

In the 10-column layout the multiples of 3 run diagonally, since three steps move one column left and never repeat a column within a row cycle.`,
      before: ``,
      after: `After this pass, the survivors thin dramatically: any number still unmarked is divisible by neither 2 nor 3, which forces it into the residues $6k ± 1$ — the pattern noted under [prime distribution](!#patterns-in-prime-distribution). Two passes have already confined all future primes to a third of the number line.

The stripes are worth a second look: they are the beginning of a [prime factorization](!#related-concepts) drawn in color. A cell's pattern lists the small primes that divide it, in the order the sieve found them.`,
      link: '',
    },

    obj14: {
      title: `The Last Pass: Multiples of 7`,
      content: `By the time 7 is declared prime, the grid is nearly settled. Its sweep starts at 7² = 49 and touches 49, 56, 63, 70, 77, 84, 91, and 98 — but only three of them are new: **49**, **77**, and **91**. The other five already carried colors from 2, 3, or 5.

The number 91 deserves its moment. It looks prime — odd, digit sum 10, ends in 1 — yet 91 = 7 × 13, and this sweep is the only one that catches it. It is the classic trap for anyone testing primality by instinct.

After 7, the next unmarked number is 11, and 11² = 121 lies beyond the grid. The sieve then does something satisfying: it promotes every remaining unmarked number to prime simultaneously — twenty-one numbers confirmed in a single step.`,
      before: ``,
      after: `The mass promotion is the √n stopping rule in action: a composite number must have a factor no larger than its square root, so any composite up to 100 would have been caught by 2, 3, 5, or 7. Survival past four sweeps is a proof of primality, not an absence of evidence.

Fittingly, the last pass is also the smallest — three new crossings against the first pass's forty-nine. The sieve's work shrinks geometrically, which is what the $O(n \\log \\log n)$ bound under [algorithm complexity](!#algorithm-complexity-and-efficiency) measures precisely.`,
      link: '',
    }

  }

  const seoData = {
    title: "Sieve of Eratosthenes - Interactive Prime Finder | Learn Math Class",
    description: "Interactive Sieve of Eratosthenes visualization. Watch primes emerge as composites get crossed out with step-by-step explanations and color-coded divisibility.",
    keywords: keyWords.join(", "),
    url: "/arithmetic/visual-tools/eratosthenes-sieve",
    name: "Sieve of Eratosthenes Visualization",
    category: "Primes, GCD & Modular Arithmetic"
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Sieve of Eratosthenes Visualization",
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Animated sieve algorithm on numbers 1-100",
        "Start/Pause/Step/Reset controls",
        "Adjustable animation speed",
        "Color-coded primes and divisibility",
        "Step-by-step explanation panel",
        "Real-time prime and composite counts",
        "Crossed numbers tracked by divisor"
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
      "educationalLevel": "Elementary School, Middle School, High School",
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
          "name": "Sieve of Eratosthenes",
          "item": `https://www.learnmathclass.com${seoData.url}`
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

  // Frozen-state framed units (Line 1): the algorithm's six stages.
  const d = eratosthenesSieveDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    idle: u('idle', 'Initial grid, frozen',
      'One hundred neutral cells; only 1 is grayed out from the start — neither prime nor composite, it takes no part in the sieve.'),
    sieve2: u('sieve2', 'After the ÷2 sweep, frozen',
      'Blue 2 and forty-nine blue-tinted multiples in five even columns: one pass, half the grid settled. The first survivor, 3, is next.'),
    sieve3: u('sieve3', 'After the ÷3 sweep, frozen',
      'Green 3 and its multiples from 9 up. Numbers divisible by both 2 and 3 — 12, 18, 24 and their kin — now wear both colors striped.'),
    sieve5: u('sieve5', 'After the ÷5 sweep, frozen',
      'Purple 5 crosses only six new numbers — 25, 35, 55, 65, 85, 95. Everything smaller was already gone before the sweep began.'),
    sieve7: u('sieve7', 'After the ÷7 sweep, frozen',
      'Orange 7 catches just three newcomers: 49, 77, and 91. With 11² beyond the grid, every survivor is now provably prime.'),
    done: u('done', 'Sieve complete, frozen',
      'The verdict: 25 solid primes and 74 tinted composites. Each tint records the small primes that divide that cell.'),
  };

  // Per-state panel explanations (Line 1). Rendered at the bottom of the tool's
  // Step-by-Step panel through processContent — same-page !# anchors work.
  const explanations = {
    idle: `The grid is uncommitted: every number from 2 to 100 is still a candidate. The algorithm will decide by elimination, never by division. [Learn more about the controls](!#how-to-use-the-sieve-visualization) · [The algorithm](!#what-is-the-sieve-of-eratosthenes)`,
    sieve2: `The first pass is the biggest: 2 is prime, and its multiples — half the grid — are crossed in one sweep, starting from 4. [Learn more about the first pass](!#the-first-pass-multiples-of-2) · [The algorithm](!#what-is-the-sieve-of-eratosthenes)`,
    sieve3: `3 survived the first pass, so it is prime; its multiples fall from 9 onward, and numbers hit twice — like 12 — show both colors striped. [Learn more about the second pass](!#the-second-pass-multiples-of-3) · [The algorithm](!#what-is-the-sieve-of-eratosthenes)`,
    sieve5: `5 is prime, and its sweep starts at 25 — every smaller multiple of 5 was already crossed by 2 or 3. [Learn more about starting at p²](!#why-start-at-p-squared) · [The algorithm](!#what-is-the-sieve-of-eratosthenes)`,
    sieve7: `7 is the last prime that matters here: its sweep starts at 49, catches 77 and 91, and after it the sieve is effectively finished. [Learn more about the last pass](!#the-last-pass-multiples-of-7) · [The algorithm](!#what-is-the-sieve-of-eratosthenes)`,
    done: `Four sweeps settled all hundred numbers: 25 primes stand in solid color, 74 composites carry the tints of the primes that crossed them. [Learn more about the finished grid](!#understanding-the-grid-display) · [The algorithm](!#what-is-the-sieve-of-eratosthenes)`,
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData,
      stateUnits,
      explanations
    }
  }
}

export default function SievePage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  stateUnits,
  explanations
}) {

  // Helper rows: plain section / per-state section carrying its frozen unit
  // as [content, unit, after]. (Slug ids replace the former numeric ids.)
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
    stateRow('obj1', 'how-to-use-the-sieve-visualization', 'idle'),
    stateRow('obj2', 'understanding-the-grid-display', 'done'),
    plain('obj3', 'reading-the-status-bar'),
    plain('obj4', 'using-the-step-by-step-panel'),
    plain('obj5', 'tracking-statistics'),
    plain('obj6', 'what-is-the-sieve-of-eratosthenes'),
    stateRow('obj12', 'the-first-pass-multiples-of-2', 'sieve2'),
    stateRow('obj13', 'the-second-pass-multiples-of-3', 'sieve3'),
    stateRow('obj7', 'why-start-at-p-squared', 'sieve5'),
    stateRow('obj14', 'the-last-pass-multiples-of-7', 'sieve7'),
    plain('obj8', 'prime-numbers-and-their-properties'),
    plain('obj9', 'algorithm-complexity-and-efficiency'),
    plain('obj10', 'patterns-in-prime-distribution'),
    plain('obj11', 'related-concepts'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Sieve of Eratosthenes</h1>
      <br/>
      <EratosthenesSieve explanations={explanations}/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
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