import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import PrimeNumberChecker from '@/app/components/calculators/algebra/PrimeNumberChecker';
import '../../../../pages/pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/arithmetic/calculators/prime-calculator" in calculators-mesh-registry.json (same folder): 6 instructions, 2 explanation texts with anchors, 10 sections (4 usage with demos), lesson links to divisibility, factors, prime-numbers, modulo, gcd.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup=[
  {title:'Arithmetic Calculators',
    items:[
      {title:'Factoring Calculator',link:'/algebra/calculators/factoring'},
      {title:'GCF Calculator',link:'/arithmetic/calculators/gcf-calculator'},
      {title:'LCM Calculator',link:'/arithmetic/calculators/lcm-calculator'},
      {title:'Divisibility Calculator',link:'/arithmetic/calculators/divisibility-calculator'},
    ]
  },
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fraction Calculator',link:'/calculators/fraction-calculator'},
    ]
  }
]

const detailInstructions = [
  `Pick a mode with the two buttons under **Check Mode**: **Quick Check** or **Show Factors**; switching clears the result. [Learn more about the modes](!#getting-started-with-the-prime-number-checker)`,
  `Type a positive whole number in the box. [Learn more about the input](!#using-quick-check-mode)`,
  `Click **Check**. Green means prime, orange means composite. [Learn more about the result](!#reading-results-and-factor-lists)`,
  `In Show Factors mode a composite number lists all its factors and their count; a prime shows $1$ and itself in either mode. [Learn more about factor lists](!#using-show-factors-mode)`,
  `A red message appears for a blank box, a decimal, zero or a negative number. [Learn more about messages](!#reading-results-and-factor-lists)`,
  `Click **Reset** to clear the box and the result. [Learn more about Reset](!#getting-started-with-the-prime-number-checker)`,
];

const explanations = {
  check: {
    text: "A prime number has exactly two factors: 1 and itself. This checker tests if your number can be divided by any number other than 1 and itself. Numbers less than 2 are not considered prime. [Learn more about the test](!#how-the-prime-test-works)"
  },
  detailed: {
    text: "Detailed mode shows all factors when a number is composite (not prime). This helps you understand why a number isn't prime and see what divides into it evenly. [Learn more about primes and composites](!#understanding-prime-numbers)"
  }
};

const demos = {
  'getting-started-with-the-prime-number-checker': {
    title: 'A prime, then a composite with its factors',
    script: [
      { say: 'TYPE 17 and CLICK Check\n17 is a PRIME number, in green; factors 1, 17.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '17' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'PICK Show Factors\nThe result clears; the number stays.', at: 'tr' },
      { set: 'input[value="detailed"]', value: true },
      { wait: 2000 },
      { say: 'TYPE 12 and CLICK Check\nNOT prime, in orange; factors 1, 2, 3, 4, 6, 12.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '12' },
      { click: { button: 'Check' } },
      { wait: 2800 },
      { say: 'CLICK Reset\nBox and result cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'using-quick-check-mode': {
    title: 'Three quick checks',
    script: [
      { say: 'TYPE 49 and CLICK Check\n49 = 7 × 7, so NOT prime.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '49' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'TYPE 97 and CLICK Check\nNo divisor up to 9: PRIME.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '97' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'TYPE 1000003 and CLICK Check\nOnly odd numbers up to 1000 are tried: PRIME.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '1000003' },
      { click: { button: 'Check' } },
      { wait: 2800 },
    ],
  },
  'using-show-factors-mode': {
    title: 'Factor lists for 24, 13 and 36',
    script: [
      { say: 'PICK Show Factors', at: 'tr' },
      { set: 'input[value="detailed"]', value: true },
      { wait: 1600 },
      { say: 'TYPE 24 and CLICK Check\n1, 2, 3, 4, 6, 8, 12, 24: 8 factors found.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '24' },
      { click: { button: 'Check' } },
      { wait: 2800 },
      { say: 'TYPE 13 and CLICK Check\nPRIME: factors 1, 13 only.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '13' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'TYPE 36 and CLICK Check\n9 factors: a perfect square has an odd count.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '36' },
      { click: { button: 'Check' } },
      { wait: 2800 },
    ],
  },
  'reading-results-and-factor-lists': {
    title: 'Orange, a factor count, red, green',
    script: [
      { say: 'TYPE 12 and CLICK Check\nQuick Check: orange NOT prime, no list.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '12' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'PICK Show Factors, TYPE 25, CLICK Check\n1, 5, 25: 3 factors found.', at: 'tr' },
      { set: 'input[value="detailed"]', value: true },
      { set: 'input[placeholder="Enter a positive integer"]', value: '25' },
      { click: { button: 'Check' } },
      { wait: 2800 },
      { say: 'TYPE -7 and CLICK Check\nRed: Error: Enter a positive integer.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '-7' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'TYPE 31 and CLICK Check\nGreen PRIME; factors 1, 31.', at: 'tr' },
      { set: 'input[placeholder="Enter a positive integer"]', value: '31' },
      { click: { button: 'Check' } },
      { wait: 2600 },
    ],
  },
};

const keyWords = [
  'prime number checker',
  'prime calculator',
  'is prime calculator',
  'prime number tester',
  'check if prime',
  'prime or composite',
  'primality test',
  'prime number detector',
  'find prime numbers',
  'prime verification',
  'composite number checker',
  'free prime checker',
  'online prime test',
  'prime number tool',
  'verify prime number'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Prime Number Checker`,
    content: `The prime number checker determines whether a number is prime (has exactly two factors: $1$ and itself) or composite (has more than two factors). Choose your mode: **Quick Check** (fast yes/no answer) or **Show Factors** (displays all factors for composite numbers).

Enter any positive integer in the input field. Try small numbers first: $7$ is prime, $8$ is composite. The checker works instantly for numbers up to millions. Type $17$ and click Check to verify it's prime.

For **Quick Check** mode, you get a simple result: "$17$ is a PRIME number" in green, or "$18$ is NOT a prime number (composite)" in orange. A prime also shows its two factors, $1$ and itself, in either mode. This mode is fastest when you just need a yes/no answer.

Switch to **Show Factors** mode to see why a number is composite; switching modes clears the result but keeps the number. Try $12$: the checker shows it's composite and lists all factors: $1, 2, 3, 4, 6, 12$. This helps understand the number's structure. Use **Reset** to test another number. What makes a number prime is explained in [understanding prime numbers](!#understanding-prime-numbers).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Quick Check Mode`,
    content: `Select **Quick Check** for the fastest primality test. This mode applies efficient algorithms to determine if your number has exactly two factors. The result is binary: prime or composite.

The checker tests divisibility up to the square root of your number. For $49$, it only needs to test up to $7$ because $\\sqrt{49} = 7$. Finding that $7$ divides $49$ immediately confirms it's composite.

Try testing known primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$. The result shows green "PRIME" for each. Now try $4, 6, 8, 9, 10$—all show orange "NOT prime (composite)" because they have factors beyond $1$ and themselves.

Quick Check is perfect for **verifying calculations**, **cryptography work** (finding large primes), or **number theory problems**. It handles large numbers efficiently—try $97$ or $101$ to confirm they're prime, or $1000003$, for which only the odd numbers up to $1000$ are tried. The square-root shortcut is explained in [how the prime test works](!#how-the-prime-test-works).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using Show Factors Mode`,
    content: `Switch to **Show Factors** mode to see all factors when a number is composite. This educational mode helps you understand why a number isn't prime and reveals its factorization structure.

For prime numbers, the factors list shows only $1$ and the number itself. Try $13$: factors are $1, 13$—exactly two factors, confirming primality. For composite numbers, you see the complete factor list.

Enter $24$ in Show Factors mode: the checker displays "$24$ is NOT a prime number (composite)" and lists factors: $1, 2, 3, 4, 6, 8, 12, 24$. Eight factors total means it's highly composite (very factorable).

The factor count tells you about the number's properties. **Perfect squares** like $16$ have an odd number of factors ($1, 2, 4, 8, 16$ = five factors) because the square root pairs with itself. Try $36$: nine factors. Why factors come in pairs is explained in [how the prime test works](!#how-the-prime-test-works).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Understanding Prime Numbers`,
    content: `A **prime number** is a positive integer greater than $1$ that has exactly two factors: $1$ and itself. The number $7$ is prime because only $1 × 7 = 7$—no other factor pairs exist. You cannot build $7$ from smaller whole numbers.

The first prime numbers are: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...$. Notice $2$ is the only even prime—all other even numbers are divisible by $2$, giving them at least three factors.

**Composite numbers** have more than two factors. The number $12$ is composite with factors $1, 2, 3, 4, 6, 12$. Every composite number can be broken into prime factors: $12 = 2 × 2 × 3 = 2^2 × 3$.

The number $1$ is special—it's neither prime nor composite. By definition, primes need exactly two factors, but $1$ has only one factor (itself). Zero and negative numbers are not considered in standard prime number theory.

The definition and the first primes are in [prime numbers](!/arithmetic/divisibility#7) and [definition](!/algebra/sequences/prime-numbers#1); factors themselves are defined in [factors (divisors)](!/arithmetic/divisibility/factors#1), and the breaking of a composite into primes in [prime factorization](!/arithmetic/divisibility#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `How the Prime Test Works`,
    content: `The checker uses **trial division**: testing if any number from $2$ to $\\sqrt{n}$ divides $n$ evenly. If a divisor is found, $n$ is composite. If none exists, $n$ is prime.

Why only test up to $\\sqrt{n}$? If $n = a × b$ and $a > \\sqrt{n}$, then $b < \\sqrt{n}$. So checking up to $\\sqrt{n}$ catches all factor pairs. For $100$: test up to $10$, finding $2, 4, 5$ divide evenly—composite.

The algorithm starts with $2$, then tests odd numbers $3, 5, 7, 9...$ up to $\\sqrt{n}$. Even numbers greater than $2$ are skipped after checking $2$ because they're automatically composite. This optimization speeds up the test.

For very large numbers, more sophisticated tests exist (Miller-Rabin, AKS primality test), but trial division works perfectly for numbers up to millions that this calculator handles. The efficiency is $O(\\sqrt{n})$ complexity.

In **Show Factors** mode the factor list is built separately, by trying every number from $1$ to $n$. The pairing argument is in [factor pairs](!/arithmetic/divisibility/factors#3), the method in [finding all factors](!/arithmetic/divisibility/factors#2) and [primality testing](!/algebra/sequences/prime-numbers#4), and the sieve alternative in [the sieve of Eratosthenes](!/algebra/sequences/prime-numbers#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Results and Factor Lists`,
    content: `Results appear color-coded for clarity. Green text "PRIME" indicates exactly two factors. Orange text "NOT prime (composite)" indicates three or more factors. Red error messages show invalid input: "Error: Enter a positive integer" appears for a blank box, a decimal, $0$ or a negative number such as $-7$.

The factors list (in Show Factors mode) is always ordered from smallest to largest: $1, 2, 3...$ up to the number itself. The count shows how many factors exist. For $12$: "6 factors found (composite number)".

Prime numbers always show exactly two factors: $1$ and the number. Try $31$: factors shown are $1, 31$. The factor count for primes is always $2$. Any other count proves the number is composite.

Perfect squares have a special factor pattern. The middle factor equals $\\sqrt{n}$ and pairs with itself. For $25$: factors are $1, 5, 25$, "3 factors found". The factor $5$ appears once because $5 × 5 = 25$. This creates an odd factor count. The definitions behind the colours are in [understanding prime numbers](!#understanding-prime-numbers).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Prime Numbers in Mathematics`,
    content: `Prime numbers are the **building blocks** of all integers. Every number greater than $1$ is either prime or can be uniquely factored into primes. This is the **Fundamental Theorem of Arithmetic**: $60 = 2^2 × 3 × 5$.

**Twin primes** are prime pairs differing by $2$: $(3,5), (5,7), (11,13), (17,19), (29,31)$. An unsolved problem asks if infinitely many twin primes exist. The largest known twin primes have hundreds of thousands of digits.

**Mersenne primes** have the form $2^p - 1$ where $p$ is prime. Examples: $3 = 2^2-1$, $7 = 2^3-1$, $31 = 2^5-1$. These are used to find record-breaking large primes. The largest known prime ($2^{82,589,933} - 1$) is a Mersenne prime with 24+ million digits.

Primes have no simple formula—they appear irregularly among integers. The **Prime Number Theorem** describes their density: roughly $\\frac{n}{\\ln(n)}$ primes exist below $n$. But predicting specific primes remains difficult.

Unique factorization is stated in [prime factorization](!/algebra/sequences/prime-numbers#5), the proof that primes never run out in [infinitude of primes](!/algebra/sequences/prime-numbers#2), the density result in [the prime number theorem](!/algebra/sequences/prime-numbers#6) and twin and Mersenne primes in [types of primes](!/algebra/sequences/prime-numbers#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Applications of Prime Numbers`,
    content: `**Cryptography**: RSA encryption uses very large prime numbers (hundreds of digits). The security relies on difficulty of factoring products of two huge primes. Your online banking uses this prime-based encryption.

**Hash tables**: Prime-sized tables reduce collisions in computer science data structures. Hash functions work better with prime moduli because primes minimize common factors with data patterns.

**Random number generation**: Linear congruential generators use prime numbers as moduli to create pseudorandom sequences. The randomness quality depends on choosing appropriate primes.

**Cicada emergence**: Some cicada species emerge every $13$ or $17$ years—both prime numbers. This evolutionary strategy minimizes overlap with predators operating on different cycles, avoiding common multiples.

**Music and harmony**: The frequency ratios in musical harmony often involve small primes ($2:3$ for perfect fifth, $3:4$ for perfect fourth). Prime relationships create pleasing consonance because they minimize interference patterns.

The remainder arithmetic behind RSA and hashing is introduced in [congruence](!/arithmetic/modulo#5) and [why modulo matters](!/arithmetic/modulo#8); numbers sharing no factor are [coprime numbers](!/arithmetic/divisibility/gcd#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Special Cases and Edge Numbers`,
    content: `**The number 1**: Not prime (only one factor) and not composite (definition requires at least two prime factors). Historically sometimes called prime, but modern mathematics excludes it for cleaner theorems. The checker has only two answers, so for $1$ it prints "NOT a prime number (composite)"; read that as "not prime".

**The number 2**: The only even prime and the smallest prime. All other even numbers are divisible by $2$, making them composite. This makes $2$ unique in prime theory.

**The number 0**: Not considered in prime number theory. Zero is divisible by every number (since $n × 0 = 0$ for all $n$), which doesn't fit the prime definition.

**Negative numbers**: Standard prime theory uses only positive integers. While mathematically you could extend concepts to negatives, the conventional definition restricts primes to numbers greater than $1$.

**Large numbers**: As numbers grow, primes become rarer (though infinite in quantity). Between $1-100$: $25$ primes. Between $1,000,000-1,000,100$: only $6$ primes. The gaps between consecutive primes grow larger.

Zero's divisibility by every number follows from [basic properties](!/arithmetic/divisibility#3); why $2$ is the only even prime and why $1$ is excluded is discussed in [prime numbers](!/arithmetic/divisibility#7); the thinning of primes in [the prime number theorem](!/algebra/sequences/prime-numbers#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Concepts`,
    content: `[Factoring Calculator](!/algebra/calculators/factoring) - Find all factors or prime factors of any number. Shows the complete prime factorization that proves a number is composite. Essential for understanding number structure.

[GCF Calculator](!/arithmetic/calculators/gcf-calculator) - Greatest common factor of two+ numbers. Prime numbers have GCF = $1$ with any number not divisible by them. Useful for understanding coprimality.

[Divisibility Calculator](!/arithmetic/calculators/divisibility-calculator) - Test if numbers divide evenly. Prime numbers are only divisible by $1$ and themselves. Divisibility testing is the core of primality checking.

[LCM Calculator](!/arithmetic/calculators/lcm-calculator) - Least common multiple. For two primes $p$ and $q$, LCM$(p,q) = p × q$ because they share no factors. Shows the unique relationship between coprime numbers.

[Modulo Calculator](!/calculators/modulo-calculator) - Find remainders. Related to prime testing through Fermat's Little Theorem: if $p$ is prime and $a$ not divisible by $p$, then $a^{p-1} \\equiv 1 \\pmod{p}$.

The lessons behind this checker are [prime numbers](!/algebra/sequences/prime-numbers#1), [divisibility](!/arithmetic/divisibility#0) and [factors and multiples](!/arithmetic/divisibility/factors#0); the sieve can be watched in the [sieve of Eratosthenes](!/arithmetic/visual-tools/eratosthenes-sieve) visual tool.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is a prime number and how does this checker work?",
    answer: "A prime number is a positive integer greater than 1 with exactly two factors: 1 and itself. This checker tests primality using trial division—testing divisibility by all numbers up to the square root. Two modes available: Quick Check (fast yes/no answer) and Show Factors (displays all factors for composite numbers)."
  },
  obj2: {
    question: "Why is 1 not considered a prime number?",
    answer: "By definition, prime numbers must have exactly two factors: 1 and the number itself. The number 1 has only one factor (itself), so it doesn't meet the definition. Historically 1 was sometimes called prime, but modern mathematics excludes it because it makes theorems like unique prime factorization cleaner and more elegant."
  },
  obj3: {
    question: "What's the difference between Quick Check and Show Factors modes?",
    answer: "Quick Check gives a fast yes/no answer about primality—perfect when you just need to verify if a number is prime. Show Factors mode reveals all factors when a number is composite, helping you understand why it's not prime and see its factorization structure. Both modes correctly identify primes, but Show Factors provides educational detail."
  },
  obj4: {
    question: "How can I tell if a large number is prime?",
    answer: "Use the checker to test any number—it works efficiently for numbers up to millions. The algorithm only needs to test divisors up to the square root, making it fast. For example, to test if 1000003 is prime, the checker only tests up to 1000 (√1000003 ≈ 1000), not all million numbers below it."
  },
  obj5: {
    question: "What are prime numbers used for in real life?",
    answer: "Prime numbers are essential for RSA encryption (online banking security), hash tables in computer science, random number generation, and even appear in nature (cicada emergence cycles of 13/17 years). Their mathematical properties—especially the difficulty of factoring large prime products—make them crucial for modern cryptography and data security."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Prime Number Checker - Test if Number is Prime",
    "description": "Free prime number checker instantly tests if numbers are prime or composite. Quick check mode or detailed factors display. Perfect for learning prime numbers.",
    "url": "https://www.learnmathclass.com/arithmetic/calculators/prime-checker",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Instant primality testing for any positive integer",
      "Quick Check mode for fast yes/no answers",
      "Show Factors mode displays all factors",
      "Efficient algorithm tests up to square root",
      "Works for numbers up to millions",
      "Color-coded results (green=prime, orange=composite)",
      "Educational factor analysis for composite numbers"
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
        "name": "Arithmetic Calculators",
        "item": "https://www.learnmathclass.com/arithmetic/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Prime Number Checker",
        "item": "https://www.learnmathclass.com/arithmetic/calculators/prime-checker"
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
};

return {
  props: {
    sectionsContent,
    navigationGroup,
    faqQuestions,
    schemas,
    detailInstructions,
    explanations,
    demos,
    seoData: {
      title: "Prime Number Checker | Test if Number is Prime Online",
      description: "Free prime number checker tests if numbers are prime or composite instantly. Quick check mode or detailed factor display. Perfect for students and mathematicians.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/calculators/prime-calculator",
      name: "Prime Number Checker - Primality Test Tool"
    },
  },
  revalidate: 86400
};
}

export default function PrimeNumberCheckerPage({seoData, sectionsContent, navigationGroup, faqQuestions, schemas, detailInstructions, explanations, demos}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.6}
    minHeight={304}
    renderText={processContent}
  >
    <PrimeNumberChecker explanations={explanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-prime-number-checker',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-prime-number-checker'), sectionsContent.obj1.content],
  },
  {
    id: 'using-quick-check-mode',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('using-quick-check-mode'), sectionsContent.obj2.content],
  },
  {
    id: 'using-show-factors-mode',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('using-show-factors-mode'), sectionsContent.obj3.content],
  },
  {
    id: 'reading-results-and-factor-lists',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('reading-results-and-factor-lists'), sectionsContent.obj6.content],
  },
  {
    id: 'understanding-prime-numbers',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [sectionsContent.obj4.content],
  },
  {
    id: 'how-the-prime-test-works',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [sectionsContent.obj5.content],
  },
  {
    id: 'prime-numbers-in-mathematics',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'special-cases-and-edge-numbers',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'applications-of-prime-numbers',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'related-calculators-and-concepts',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
  },
];

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

    <style jsx>{`
      @media (max-width: 1024px) {
        .layout-container > div:first-child,
        .layout-container > div:first-child *,
        :global([class*="vertical"]),
        :global([class*="vertical"]) * {
          position: static !important;
        }
      }
      
      .layout-container {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 20px;
        width: 100%;
      }
      
      @media (max-width: 1024px) {
        .layout-container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar
      side='right'
      sidebarWidth='45px'
      panelWidth='300px'
      iconColor='white'
      panelBackgroundColor='#f2f2f2'
    />
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Prime Number Checker</h1>
    <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Prime Number Checker'
      />
    </div>
    
    <div className="layout-container"> 
      <div style={{marginTop:'30px',marginLeft:'5px'}}>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="250px"       
          theme='lightBlue'
          isSticky={true}
          verticalOffset='150px'
        />
      </div>

      <div>
        <div style={{width:'100%', maxWidth:'900px',marginLeft:'100px'}}>
          <PrimeNumberChecker explanations={explanations} />
          <br/>
        </div>
      </div>
    </div>
    
    <br/>
    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
  </>
);
}