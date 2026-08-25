




import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import EuclideanVisualizer from '../../../../app/components/arithmetic/visualizers/EuclideanVisualizer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import euclideanVisualizerDiagrams from '@/app/components/arithmetic/visualizers/euclideanVisualizerDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'euclidean algorithm',
    'euclidean algorithm visualizer',
    'greatest common divisor',
    'gcd calculator',
    'gcd visualizer',
    'euclidean algorithm steps',
    'find gcd of two numbers',
    'division algorithm gcd',
    'interactive gcd',
    'gcd by repeated division',
    'euclidean algorithm example',
    'visualize gcd',
    'learn euclidean algorithm',
    'gcd remainder method',
    'gcd step by step',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and a friendly banner appears at the top once you have two numbers entered. By default it launches with $a = 252$ and $b = 105$ — a classic textbook example where the greatest common divisor is $21$.

The visualizer has four main parts arranged top to bottom:

• **Input controls** — two number fields for $a$ and $b$, plus a Random pair button and [five preset pairs](!#entering-numbers-and-using-presets)
• **Result banner** — large purple number showing the [GCD](!#what-is-the-greatest-common-divisor), with a plain-language sentence explaining what it means
• **Division chain** — a vertical stack of equations of the form $a = b \\cdot q + r$, each step shrinking the pair, with amber remainder pills and [dashed arrows](!#following-the-substitution-arrows) connecting each remainder to the next divisor
• **Steps list and legend** — a side panel listing every division as plain text, plus a color legend

A collapsible "How the Euclidean algorithm works" panel sits at the bottom for the underlying mathematical idea.`,
      before: ``,
      after: `The frozen frame above is the tool exactly as it opens: $252 = 105 \\cdot 2 + 42$, then $105 = 42 \\cdot 2 + 21$, then $42 = 21 \\cdot 2 + 0$. Three rows, three identical quotients of 2, and the purple box closing on 21.

The launch example is well chosen: big enough that listing divisors would be tedious (252 has eighteen of them), small enough that each division is mental arithmetic. When you want other behaviors — instant finishes, coprime grinds, worst cases — the presets supply them one click away.`,
      link: '',
    },

    obj2: {
      title: `Entering Numbers and Using Presets`,
      content: `Type any two positive whole numbers into the $a$ and $b$ fields. The visualizer recomputes the entire chain instantly on every keystroke. If $a < b$, the algorithm internally swaps them — the larger of the two is always the first dividend.

For exploration without typing, three quick options live next to the input fields:

• **Random pair** — generates two random integers between 12 and 480 and runs the algorithm on them. Useful for sampling the variety of chain lengths that arise from different inputs.
• **Five preset pairs** — curated examples spanning easy and interesting cases: the [launch pair](!#getting-started-with-the-visualizer) $(252, 105)$ giving GCD $21$, the [quick finish](!#short-chains) $(462, 198)$ giving $66$, the [textbook example](!#the-textbook-example-1071-and-462) $(1071, 462)$ giving $21$, the [swap-then-finish case](!#special-cases-and-corner-behavior) $(56, 84)$ ending at $28$, and the [coprime pair](!#coprime-pairs) $(35, 54)$ with GCD $1$.

The presets are deliberately chosen to demonstrate the algorithm's qualitative behaviors: coprime cases that grind through many steps, quick finishes that end in two rows, and mid-sized examples that produce a satisfyingly visual chain of about 3–5 rows. Two more states are worth typing by hand: a [Fibonacci pair](!#fibonacci-worst-case) like $89$ and $144$ for the algorithm's worst case, and [equal numbers](!#why-the-algorithm-works) for its shortest run.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading a Division Row`,
      content: `Each row of the chain shows one application of the [division algorithm](!#related-concepts-and-tools):

$$\\text{dividend} = \\text{divisor} \\cdot \\text{quotient} + \\text{remainder}$$

Read left to right: the **dividend** is the larger of the current pair, the **divisor** is the smaller, the **quotient** is how many whole times the divisor fits into the dividend, and the **remainder** is what is left over.

The remainder is highlighted in an **amber pill** to draw the eye — it is the key piece that becomes the divisor of the *next* row. The final divisor, when the remainder finally hits zero, is shown in a **purple box** with a "gcd = N" [callout](!#the-result-banner-and-gcd-callout) below it. The terminating zero remainder appears as a dashed gray pill with an italic "stop" label, indicating that the algorithm has finished.

Every numerical field is rendered in monospace so the rows align vertically. The visual chain reads top to bottom as a step-by-step computation that the eye can follow without effort.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Following the Substitution Arrows`,
      content: `Between every pair of consecutive rows, a **dashed amber Bezier arrow** sweeps from the remainder pill of one row down to the divisor position of the next. This is the visual representation of the core algorithmic substitution:

$$\\text{new pair} = (\\text{old divisor}, \\text{old remainder})$$

The arrow makes the substitution concrete. You can literally see the number that was a remainder in row $i$ become the divisor in row $i + 1$, repeating until a remainder of zero finally appears. The whole algorithm is captured by that single recurring move.

The arrows are deliberately subtle by default — drawn in the same amber as the remainder pills — so they read as decoration when you scan but become useful when you study a particular step. [Hovering a remainder](!#hovering-remainders-and-steps) darkens its arrow and turns it purple, making the connection unmistakable.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Hovering Remainders and Steps`,
      content: `Two coordinated hover interactions help you trace the algorithm:

• **Hover an amber remainder pill** — its arrow lights up in purple, and the divisor on the next row gets a purple ring around it. Both endpoints of the substitution glow together, letting you confirm [which remainder becomes which divisor](!#following-the-substitution-arrows).
• **Hover an entry in the side Steps list** — the same row in the diagram lights up. Useful when you want to inspect a specific step from the textual summary without scrolling.

Both hover targets connect the textual representation (numbered list of equations on the right) to the graphical chain (the diagram in the center). Wherever your attention lands, the corresponding parts in the other view highlight automatically.

The hover state is also exposed as a native browser tooltip on the SVG elements, so screen readers and accessibility tools can convey the substitution relationship in plain text.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Result Banner and GCD Callout`,
      content: `Above the diagram, a purple banner shows the result in three forms simultaneously:

• A large **standalone number** — the GCD itself, in big bold purple
• A **monospace equation** — $\\gcd(a, b) = N$ in the canonical mathematical form
• A **plain-language sentence** — "The largest number that divides both $a$ and $b$ evenly is $N$ (found in $k$ steps)"

The triple presentation is deliberate. The standalone number is for someone who just wants the answer. The equation is for someone copying the result into a homework problem. The sentence is for a beginner first encountering the concept and needing to know what "[greatest common divisor](!#what-is-the-greatest-common-divisor)" actually means.

Below the diagram, the final divisor — the GCD — appears in a purple-bordered box with a callout line and the label "gcd = N" beneath it. This visual punctuation marks the chain's endpoint and connects the diagram back to the banner.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is the Greatest Common Divisor?`,
      content: `The **greatest common divisor** (GCD) of two integers is the largest integer that divides both of them with no remainder. Equivalently, it is the largest member of their common set of divisors.

For small numbers, you could find the GCD by listing every divisor of each number and picking the biggest one they share. For example:

• Divisors of $12$: $1, 2, 3, 4, 6, 12$
• Divisors of $18$: $1, 2, 3, 6, 9, 18$
• Common divisors: $1, 2, 3, 6$
• Greatest common divisor: $\\gcd(12, 18) = 6$

This naive approach works but becomes slow for large numbers. The Euclidean algorithm — the method visualized here — finds the GCD without ever listing divisors. For $\\gcd(252, 105)$ it takes only [three division steps](!#getting-started-with-the-visualizer), regardless of how many divisors $252$ and $105$ actually have.

The GCD is foundational for simplifying fractions, modular arithmetic, and number theory. Two numbers with GCD equal to $1$ are called [coprime](!#coprime-pairs) — they share no common factors and are in some sense "as different as possible" multiplicatively.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why the Algorithm Works`,
      content: `The Euclidean algorithm rests on a single mathematical fact, older than algebra itself:

$$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$

In words: the greatest common divisor of two numbers stays the same if you replace the larger number with its remainder after division by the smaller. This is the **invariant** that the algorithm preserves at every step.

The argument is short. Any common divisor of $a$ and $b$ also divides $a - q \\cdot b = r$, so it is a common divisor of $b$ and $r$ as well. Going the other way, any common divisor of $b$ and $r$ divides $b \\cdot q + r = a$, so it is a common divisor of $a$ and $b$. The two pairs have *exactly the same* set of common divisors, hence the same greatest common divisor.

The algorithm terminates because every step strictly decreases the smaller of the two numbers. A strictly decreasing sequence of non-negative integers must eventually reach zero. When it does, the partner — the last nonzero remainder — is the GCD, because $\\gcd(d, 0) = d$.`,
      before: ``,
      after: `The frozen frame above is the base case made visible: with equal inputs the very first division reads $36 = 36 \\cdot 1 + 0$, the remainder is zero on arrival, and $\\gcd(36, 36) = 36$ ends the story in one row — the shortest chain the tool can draw.

Termination and correctness meet in that final line. Every chain, however long, is marching toward some pair $(d, 0)$; the [special cases](!#special-cases-and-corner-behavior) differ only in how many substitutions the journey takes.`,
      link: '',
    },

    obj9: {
      title: `Special Cases and Corner Behavior`,
      content: `A few input patterns produce notably short or long chains:

• **A swap, then a quick finish** — try the preset $(56, 84)$. Since $56 < 84$ the pair is swapped first; the division gives $84 = 56 \\cdot 1 + 28$, and $28$ divides $56$, so $56 = 28 \\cdot 2 + 0$ stops the algorithm at GCD $28$ after just two steps. (When the smaller number actually divides the larger — try $(28, 84)$ — the chain ends in a single row.)

• [Coprime numbers](!#coprime-pairs) — try the preset $(35, 54)$. The GCD is $1$, and the chain works through several reductions before finally hitting a remainder of $1$ and then $0$. Coprime pairs tend to produce the *longest* chains relative to the size of the numbers.

• [Consecutive Fibonacci numbers](!#fibonacci-worst-case) — try entering, e.g., $89$ and $144$. These pairs produce the absolute worst-case behavior of the algorithm and the longest chains for their magnitude. The reason is built into the recursive definition of Fibonacci numbers themselves.

• **Equal numbers** — entering the same number twice gives a one-step chain ending immediately at the GCD, which is that number — the base case $\\gcd(d, 0) = d$ in action, as explained under [why the algorithm works](!#why-the-algorithm-works).

Running the algorithm on a few of these intentionally extreme cases gives a feel for how the input size relates to the chain length — and why the Euclidean algorithm is considered remarkably efficient even on enormous inputs.`,
      before: ``,
      after: `The frozen frame above shows the $(56, 84)$ case: a swap, one substantial division, one clean finish. Between such quick runs and the ten-row Fibonacci grind lies the algorithm's whole spectrum of behavior, and the Random pair button samples it — most random pairs land in the middle, at three to five rows.

The swap itself is worth a note: the algorithm never needs to be told which number is larger. If $a < b$, the first division simply produces quotient $0$ and remainder $a$, which performs the swap automatically — the tool just does it up front to keep the chain tidy.`,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Greatest Common Divisor** — the mathematical concept the visualizer computes; the theoretical companion page to this tool.

**Least Common Multiple (LCM)** — the dual concept, related to the GCD by $\\text{lcm}(a, b) = a \\cdot b / \\gcd(a, b)$.

**Division Algorithm** — the basic theorem that for any positive integers $a$ and $b$, there exist unique $q$ and $r$ with $0 \\leq r < b$ such that $a = b \\cdot q + r$. [Every row of the visualizer](!#reading-a-division-row) is one application of this.

**Coprime Integers** — pairs with GCD equal to $1$; foundational for modular arithmetic and number theory.

**Prime Factorization** — an alternative route to the GCD via factoring both numbers and multiplying their shared prime powers. Slower for large numbers than the Euclidean algorithm but more transparent for small ones.

**Bezout's Identity** — the extended Euclidean algorithm finds integers $x$ and $y$ such that $ax + by = \\gcd(a, b)$. A natural follow-up tool to this one.

**Modular Arithmetic** — the GCD underlies which numbers are invertible modulo $n$ and is the foundation of many cryptographic schemes.

**Fibonacci Numbers** — the [worst-case inputs](!#fibonacci-worst-case) for the Euclidean algorithm, related to it through deep recursive structure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Short Chains: When a Remainder Divides Its Divisor`,
      content: `Try the preset $(462, 198)$. The first division gives $462 = 198 \\cdot 2 + 66$, and then something decisive happens: $66$ divides $198$ exactly, so the second row reads $198 = 66 \\cdot 3 + 0$ and the algorithm stops at GCD $66$.

Every chain ends this way — the question is only how soon. The algorithm terminates precisely when a remainder divides the number it is about to be paired with. In short chains that happens on the first try; in long ones the pair has to shrink many times first.

A useful way to watch the tool: after each row, ask "does this remainder divide the number above it?" The moment the answer is yes, the next row is the last.`,
      before: ``,
      after: `The two-row pattern has a clean characterization: the chain for $(a, b)$ has exactly two rows when the first remainder $a \\bmod b$ divides $b$ without being zero. The preset $(56, 84)$ under [special cases](!#special-cases-and-corner-behavior) is the same story with a swap in front.

At the other extreme sit pairs whose remainders keep refusing to divide — the [coprime pairs](!#coprime-pairs) that grind down to 1, and the [Fibonacci pairs](!#fibonacci-worst-case) that do so as slowly as arithmetic allows.`,
      link: '',
    },
    obj12: {
      title: `The Textbook Example: 1071 and 462`,
      content: `The pair $(1071, 462)$ is the classic worked example of the Euclidean algorithm — it has appeared in textbooks for over a century. The chain runs:

$$1071 = 462 \\cdot 2 + 147$$

$$462 = 147 \\cdot 3 + 21$$

$$147 = 21 \\cdot 7 + 0$$

Three rows, GCD $21$. The example earns its fame by exercising the algorithm's range: quotients of $2$, $3$, and then $7$, remainders that fall fast ($147$, $21$, $0$), and four-digit input dispatched in three lines of arithmetic.

Notice the coincidence with the launch pair: $\\gcd(252, 105) = 21$ as well. Different pairs, same answer — infinitely many pairs share any given GCD.`,
      before: ``,
      after: `The chain also demonstrates how little the algorithm cares about size. Listing the divisors of $1071 = 3^2 \\cdot 7 \\cdot 17$ by hand would be real work; three divisions need none of it. That contrast — divisions instead of factorizations — is the practical content of [why the algorithm works](!#why-the-algorithm-works).

For input this size the chain is still short. To see the algorithm genuinely struggle, hand it a [Fibonacci pair](!#fibonacci-worst-case) and watch every quotient collapse to 1.`,
      link: '',
    },
    obj13: {
      title: `Coprime Pairs: When the GCD Is 1`,
      content: `Try the preset $(35, 54)$. After the automatic swap, the chain runs through five divisions with remainders $19$, $16$, $3$, $1$, and finally $0$: the GCD is $1$.

Two integers with GCD $1$ are called **coprime** (or relatively prime). They need not be prime themselves — $35 = 5 \\cdot 7$ and $54 = 2 \\cdot 3^3$ are both composite — they simply share no prime factor.

Coprime pairs make the algorithm work hardest for its answer: with no common factor to find, the chain must grind all the way down to $1$ before a remainder of $0$ can appear. Relative to their size, coprime pairs produce the longest chains.`,
      before: ``,
      after: `Coprimality is the property that matters most in practice: a fraction $a/b$ is fully reduced exactly when $a$ and $b$ are coprime, and a number is invertible modulo $n$ exactly when it is coprime to $n$ — the fact underlying the [modular arithmetic](!#related-concepts-and-tools) applications of the GCD.

Coprime pairs are also abundant: two random integers are coprime with probability $6/\\pi^2 \\approx 61\\%$, a celebrated result that connects the GCD to $\\pi$. The extreme members of the family are the [Fibonacci neighbors](!#fibonacci-worst-case), which are always coprime and always slowest.`,
      link: '',
    },
    obj14: {
      title: `The Worst Case: Fibonacci Pairs`,
      content: `Enter $89$ and $144$ — two consecutive **Fibonacci numbers**. The chain takes ten rows, and every quotient except the final one is $1$: each division removes as little as possible, so the pair shrinks at the slowest rate the algorithm allows.

The reason is the Fibonacci recurrence itself. Since $F_{n+1} = F_n + F_{n-1}$ with $F_{n-1} < F_n$, dividing $F_{n+1}$ by $F_n$ always gives quotient $1$ and remainder $F_{n-1}$ — so the algorithm walks the Fibonacci sequence backwards, one term per row, all the way down to $\\gcd = 1$.

This is not just a curiosity but the exact worst case: a theorem of Gabriel Lamé (1844) states that if the algorithm takes $n$ steps, the smaller input is at least the Fibonacci number $F_{n+1}$. No inputs of a given size can be slower than Fibonacci neighbors.`,
      before: ``,
      after: `Lamé's bound is why the algorithm is fast: the step count grows only logarithmically — roughly five steps per digit of the smaller number, even in the worst case. His 1844 argument is often called the first complexity analysis of an algorithm, a century before computers existed to run one.

Fibonacci neighbors are also always coprime — the backwards walk always ends at $1$ — making them the extreme members of the [coprime pairs](!#coprime-pairs) family.`,
      link: '',
    },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Euclidean Algorithm Visualizer do?",
      answer: "It computes the greatest common divisor of any two positive integers and displays every step of the calculation. Each row of the visual chain is one division equation of the form dividend equals divisor times quotient plus remainder. Amber pills mark the remainders, dashed arrows show each remainder becoming the next divisor, and the final divisor is boxed in purple as the GCD."
    },
    obj2: {
      question: "What is the greatest common divisor?",
      answer: "The greatest common divisor of two integers is the largest integer that divides both of them with no remainder. For example, the GCD of 12 and 18 is 6, because 6 divides both numbers and no larger integer does. The GCD is foundational for simplifying fractions, modular arithmetic, and number theory."
    },
    obj3: {
      question: "Why does the Euclidean algorithm work?",
      answer: "The algorithm relies on the fact that the GCD of two numbers equals the GCD of the smaller one and the remainder after dividing the larger by the smaller. Replacing the pair this way preserves the set of common divisors and therefore the greatest one. Each step also strictly decreases the smaller number, so the process eventually reaches zero, at which point the partner number is the answer."
    },
    obj4: {
      question: "What do the dashed arrows in the diagram represent?",
      answer: "Each dashed arrow shows the core substitution of the algorithm. The remainder on one row becomes the divisor on the next row. Following the arrows top to bottom is following the algorithm's recursion visually. Hovering any remainder pill darkens its arrow and highlights its destination divisor with a purple ring."
    },
    obj5: {
      question: "Which inputs produce the longest chains?",
      answer: "Consecutive Fibonacci numbers produce the worst-case behavior of the Euclidean algorithm — the longest chains relative to the size of the numbers involved. Coprime pairs (GCD equal to 1) also tend to produce longer chains than non-coprime pairs of similar size, since the algorithm has to grind all the way down to a remainder of 1 before terminating."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Euclidean Algorithm Visualizer",
      "description": "Interactive visualizer for the Euclidean algorithm. Compute the greatest common divisor of any two positive integers and watch every division step.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools/euclidean-algorithm",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two number inputs with instant recomputation on every keystroke",
        "Random pair button and five curated preset pairs covering easy, hard, and coprime cases",
        "Vertical chain of division equations with amber remainder pills and dashed substitution arrows",
        "Result banner displaying the GCD as a number, an equation, and a plain-language sentence",
        "Hover coordination between remainder pills and numbered steps list",
        "Native tooltips on every diagram element for accessibility",
        "Collapsible explainer covering the invariant that proves the algorithm correct"
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
          "name": "Euclidean Algorithm",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools/euclidean-algorithm"
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


  // Frozen-state framed units (Line 1): the five presets plus the two typed specials.
  const d = euclideanVisualizerDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    classic: u('classic', '252 and 105, frozen',
      'The launch chain: remainders 42, then 21, then 0 — three quotients of 2 in a row, and the purple box closes on 21.'),
    quickFinish: u('quickFinish', '462 and 198, frozen',
      'Remainder 66 drops down, divides 198 exactly, and the chain stops at two rows: gcd = 66.'),
    textbook: u('textbook', '1071 and 462, frozen',
      'The century-old textbook chain: three rows ending in a quotient of 7, and the same answer as the launch pair — 21.'),
    shortCase: u('shortCase', '84 and 56, frozen',
      'The inputs arrive as (56, 84) and are swapped; remainder 28 then divides 56 exactly, ending the chain at gcd = 28.'),
    coprime: u('coprime', '54 and 35, frozen',
      'Five divisions, remainders 19, 16, 3, 1, 0: nothing divides both 54 and 35 except 1 — a coprime pair.'),
    fibonacci: u('fibonacci', '144 and 89, frozen',
      'Ten rows for two three-digit numbers: with every quotient 1 until the last, Fibonacci neighbors shrink as slowly as the algorithm allows.'),
    equal: u('equal', '36 and 36, frozen',
      'One row: 36 = 36 · 1 + 0. The remainder is zero on arrival, and gcd(36, 36) = 36 — the shortest chain the tool can draw.'),
  };

  // Per-state panel explanations (Line 1). Rendered under the Steps list
  // through processContent — same-page !# anchors work.
  const explanations = {
    classic: `The launch example: three divisions take (252, 105) down to 21 — the remainders shrink 42, 21, 0, and the last divisor standing is the GCD. [Learn more about the default example](!#getting-started-with-the-visualizer) · [All presets](!#entering-numbers-and-using-presets)`,
    quickFinish: `Two rows and done: the first remainder 66 divides 198 exactly, so the very next division ends the chain. [Learn more about short chains](!#short-chains) · [All presets](!#entering-numbers-and-using-presets)`,
    textbook: `The classic textbook pair: (1071, 462) reduces in three rows — including a quotient of 7 — to the same GCD as the launch example, 21. [Learn more about this example](!#the-textbook-example-1071-and-462) · [All presets](!#entering-numbers-and-using-presets)`,
    shortCase: `After the swap, 84 = 56 · 1 + 28, and 28 divides 56 — a two-step finish at GCD 28. [Learn more about special cases](!#special-cases-and-corner-behavior) · [All presets](!#entering-numbers-and-using-presets)`,
    coprime: `Five rows grind (54, 35) all the way down to 1: these numbers are coprime, sharing no factor at all. [Learn more about coprime pairs](!#coprime-pairs) · [All presets](!#entering-numbers-and-using-presets)`,
    fibonacci: `Consecutive Fibonacci numbers are the algorithm's worst case: every quotient before the last is 1, so (144, 89) takes ten rows to reach gcd 1. [Learn more about the worst case](!#fibonacci-worst-case) · [All presets](!#entering-numbers-and-using-presets)`,
    equal: `Equal inputs end immediately: a = a · 1 + 0, and since gcd(d, 0) = d, the answer is the number itself. [Learn more about why this works](!#why-the-algorithm-works) · [All presets](!#entering-numbers-and-using-presets)`,
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      stateUnits,
      explanations,
      seoData: {
        title: "Euclidean Algorithm Visualizer | Find the GCD Step by Step",
        description: "Visualize the Euclidean algorithm for any two numbers. Watch each division step reduce the pair until the greatest common divisor emerges as the last divisor.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools/euclidean-algorithm",
        name: "Euclidean Algorithm Visualizer",
        hubDescription: "Enter two positive integers and watch the Euclidean algorithm compute their greatest common divisor as a vertical chain of division equations. Amber remainder pills, dashed substitution arrows, and a purple GCD callout make every step of the algorithm's recursion visible. Random pair button and five curated presets cover coprime, divisor, and mid-complexity cases.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function EuclideanAlgorithmPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

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
    stateRow('obj1', 'getting-started-with-the-visualizer', 'classic'),
    plain('obj2', 'entering-numbers-and-using-presets'),
    plain('obj3', 'reading-a-division-row'),
    plain('obj4', 'following-the-substitution-arrows'),
    plain('obj5', 'hovering-remainders-and-steps'),
    plain('obj6', 'the-result-banner-and-gcd-callout'),
    plain('obj7', 'what-is-the-greatest-common-divisor'),
    stateRow('obj8', 'why-the-algorithm-works', 'equal'),
    stateRow('obj11', 'short-chains', 'quickFinish'),
    stateRow('obj12', 'the-textbook-example-1071-and-462', 'textbook'),
    stateRow('obj13', 'coprime-pairs', 'coprime'),
    stateRow('obj14', 'fibonacci-worst-case', 'fibonacci'),
    stateRow('obj9', 'special-cases-and-corner-behavior', 'shortCase'),
    plain('obj10', 'related-concepts-and-tools'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Euclidean Algorithm</h1>
      <br/>
      <EuclideanVisualizer explanations={explanations}/>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
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