import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import DivisibilityCalculator from '@/app/components/calculators/algebra/DivisibilityCalculator';
import '../../../../pages/pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/arithmetic/calculators/divisibility-calculator" in calculators-mesh-registry.json (same folder): 6 instructions, 2 explanation texts with anchors, 10 sections (4 usage with demos), 11 lesson links.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup=[
  {title:'Arithmetic Calculators',
    items:[
      {title:'Factoring Calculator',link:'/algebra/calculators/factoring'},
      {title:'GCF Calculator',link:'/arithmetic/calculators/gcf-calculator'},
      {title:'LCM Calculator',link:'/arithmetic/calculators/lcm-calculator'},
      {title:'Prime Number Checker',link:'/arithmetic/calculators/prime-calculator'},
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
  `Pick the mode with the two buttons under **Check Mode**: **Single Divisor** tests one divisor, **Common Divisors** tests 2, 3, 4, 5, 6, 8, 9, 10 and 12 at once. [Learn more about the modes](!#getting-started-with-the-divisibility-calculator)`,
  `Type the number to test in **Number to Check**. [Learn more about the number](!#using-single-divisor-mode)`,
  `In Single Divisor mode, type the divisor in **Divide By**; it must be a non-zero whole number. [Learn more about the divisor](!#using-single-divisor-mode)`,
  `Click **Check**. Single Divisor answers Yes with the quotient or No with the remainder; Common Divisors shows a grid of green and red boxes. [Learn more about the results](!#reading-results-and-interpreting-output)`,
  `The panel on the right explains the selected mode, and its link opens the section below that explains it in full. [Learn more about common divisors](!#using-common-divisors-mode)`,
  `Click **Reset** to clear the boxes, the result and the grid. A red message appears for an empty box, a decimal, or a zero divisor. [Learn more about messages](!#reading-results-and-interpreting-output)`,
];

const explanations = {
  single: {
    text: "Check if one number divides evenly into another. If the remainder is 0, the number is divisible. For example, 12 ÷ 3 = 4 with remainder 0, so 12 is divisible by 3. [Learn more about divisibility](!#understanding-divisibility)"
  },
  common: {
    text: "Test divisibility by common numbers (2, 3, 4, 5, 6, 8, 9, 10, 12) all at once. Useful for quick factorability checks and understanding number properties. [Learn more about the divisibility rules](!#divisibility-rules-and-patterns)"
  }
};

const demos = {
  'getting-started-with-the-divisibility-calculator': {
    title: 'One check in each mode, then Reset',
    script: [
      { say: 'TYPE 24 and 6', at: 'tr' },
      { set: 'input[placeholder="Enter a number"]', value: '24' },
      { set: 'input[placeholder="Enter divisor"]', value: '6' },
      { wait: 1800 },
      { say: 'CLICK Check\nYes, 24 is divisible by 6. Result: 4.', at: 'tr' },
      { click: { button: 'Check' } },
      { wait: 2400 },
      { say: 'PICK Common Divisors\nThe divisor box disappears; the panel changes.', at: 'tr' },
      { set: 'input[value="common"]', value: true },
      { wait: 2000 },
      { say: 'CLICK Check\nA grid: green for 2, 3, 4, 6, 8, 12; red for 5, 9, 10.', at: 'tr' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'CLICK Reset\nBoxes, result and grid cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'using-single-divisor-mode': {
    title: 'Divisible, and not divisible with a remainder',
    script: [
      { say: 'TYPE 48 and 6', at: 'tr' },
      { set: 'input[placeholder="Enter a number"]', value: '48' },
      { set: 'input[placeholder="Enter divisor"]', value: '6' },
      { wait: 1800 },
      { say: 'CLICK Check\nYes, 48 is divisible by 6. Result: 8.', at: 'tr' },
      { click: { button: 'Check' } },
      { wait: 2400 },
      { say: 'TYPE 7 as the divisor\nThe result clears while you type.', at: 'tr' },
      { set: 'input[placeholder="Enter divisor"]', value: '7' },
      { wait: 1800 },
      { say: 'CLICK Check\nNo, 48 is not divisible by 7. Remainder: 6.', at: 'tr' },
      { click: { button: 'Check' } },
      { wait: 2600 },
    ],
  },
  'using-common-divisors-mode': {
    title: 'Nine divisors at once',
    script: [
      { say: 'PICK Common Divisors', at: 'tr' },
      { set: 'input[value="common"]', value: true },
      { wait: 1800 },
      { say: 'TYPE 36', at: 'tr' },
      { set: 'input[placeholder="Enter a number"]', value: '36' },
      { wait: 1600 },
      { say: 'CLICK Check\nGreen: 2, 3, 4, 6, 9, 12. Red: 5, 8, 10.', at: 'tr' },
      { click: { button: 'Check' } },
      { wait: 2600 },
      { say: 'TYPE 360 and CLICK Check\nAll nine boxes green.', at: 'tr' },
      { set: 'input[placeholder="Enter a number"]', value: '360' },
      { click: { button: 'Check' } },
      { wait: 2600 },
    ],
  },
  'reading-results-and-interpreting-output': {
    title: 'A remainder, two messages, Reset',
    script: [
      { say: 'TYPE 27 and 5', at: 'tr' },
      { set: 'input[placeholder="Enter a number"]', value: '27' },
      { set: 'input[placeholder="Enter divisor"]', value: '5' },
      { wait: 1800 },
      { say: 'CLICK Check\nNo, 27 is not divisible by 5. Remainder: 2.', at: 'tr' },
      { click: { button: 'Check' } },
      { wait: 2400 },
      { say: 'TYPE 0 as the divisor and CLICK Check\nError: Enter a valid divisor (non-zero integer).', at: 'tr' },
      { set: 'input[placeholder="Enter divisor"]', value: '0' },
      { click: { button: 'Check' } },
      { wait: 2400 },
      { say: 'TYPE 2.5 as the number and CLICK Check\nError: Enter a valid integer.', at: 'tr' },
      { set: 'input[placeholder="Enter a number"]', value: '2.5' },
      { click: { button: 'Check' } },
      { wait: 2400 },
      { say: 'CLICK Reset\nEverything cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
};

const keyWords = [
  'divisibility calculator',
  'divisibility checker',
  'divisible by calculator',
  'check divisibility',
  'divisibility test',
  'remainder calculator',
  'divisibility rules',
  'division checker',
  'is divisible calculator',
  'divisibility by 2',
  'divisibility by 3',
  'divisibility rules calculator',
  'free divisibility checker',
  'online divisibility test',
  'math divisibility tool'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Divisibility Calculator`,
    content: `The divisibility calculator tests whether one number divides evenly into another. Choose your check mode: **Single Divisor** (test one specific divisor) or **Common Divisors** (test multiple divisors 2, 3, 4, 5, 6, 8, 9, 10, 12 at once).

In Single Divisor mode, enter the number to test in "Number to Check" and the divisor in "Divide By". For example, enter $24$ and $6$ to verify that $24$ is divisible by $6$ (result: $24 ÷ 6 = 4$, remainder $0$).

Try testing $25 ÷ 6$: enter $25$ and $6$. The calculator shows "No, $25$ is not divisible by $6$. Remainder: $1$" because $25 ÷ 6 = 4$ with remainder $1$. Any non-zero remainder means not divisible.

Click **Check** to see results. For Single Divisor, you get a yes/no answer with the quotient or remainder. For Common Divisors, you see a color-coded grid: green (✓) for divisible, red (✗) for not divisible; for $24$ the green boxes are $2, 3, 4, 6, 8, 12$ and the red ones $5, 9, 10$. Use **Reset** to clear and test new numbers. What it means for one number to divide another is explained in [understanding divisibility](!#understanding-divisibility).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Single Divisor Mode`,
    content: `Select **Single Divisor** to test if one specific number divides evenly into another. This mode answers questions like "Is $48$ divisible by $7$?" or "Does $5$ divide evenly into $100$?"

Enter your number in "Number to Check" and the potential divisor in "Divide By". The calculator performs division and checks if the remainder is zero. For $48 ÷ 6$: quotient = $8$, remainder = $0$, so yes, $48$ is divisible by $6$.

The result shows three pieces of information: divisibility status (yes/no), the quotient if divisible, or the remainder if not. Try $50 ÷ 7$: "No, not divisible. Remainder: $1$" because $50 = 7 × 7 + 1$; and $48 ÷ 7$ leaves remainder $6$, since $48 = 7 × 6 + 6$. Typing in a box clears the previous result.

This mode is useful for verifying calculations, checking if numbers are multiples, or testing divisibility before simplifying fractions. For $\\frac{36}{48}$, you might test if both are divisible by $6$, $8$, or $12$ to find the greatest common factor. Why a zero remainder is the whole test is explained in [understanding divisibility](!#understanding-divisibility).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using Common Divisors Mode`,
    content: `Switch to **Common Divisors** to test divisibility by $2, 3, 4, 5, 6, 8, 9, 10$, and $12$ simultaneously. This mode reveals patterns and properties of your number at a glance. Enter just one number and click Check.

The result displays a grid with nine boxes. Green boxes with ✓ show divisors that work; red boxes with ✗ show divisors that don't. Try entering $36$: you'll see green for $2, 3, 4, 6, 9, 12$ and red for $5, 8, 10$.

This visual grid helps identify number properties quickly. If $2, 4, 8$ are all green, your number is divisible by all powers of $2$ up to $8$. If only $2$ is green but $4$ is red, your number is $2 × \\text{odd}$.

Common Divisors mode is excellent for **learning divisibility rules**, finding **quick factorizations**, or checking if a number is **composite** (if multiple divisors show green, it's not prime). Try $360$ to see it's divisible by all nine common divisors; $120$ fails only at $9$. The rules behind each box are in [divisibility rules and patterns](!#divisibility-rules-and-patterns).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Understanding Divisibility`,
    content: `A number $a$ is divisible by $b$ if $a ÷ b$ gives a whole number with remainder $0$. In mathematical notation: $a \\div b = q$ with $a = b × q$ for some integer $q$. For example, $24$ is divisible by $6$ because $24 = 6 × 4$.

Written compactly, this is $b \\mid a$ — read **b divides a**. The bar is not a division sign and not a fraction: $b \\mid a$ is a statement that is either true or false, where $a \\div b$ is a number. It is also the reverse of the reading order most people expect, since the divisor comes first. The mark is set out in full at [divisibility notation](!/arithmetic/divisibility#2).

Divisibility is the foundation of many number theory concepts. If $a$ is divisible by $b$, then $b$ is a **factor** of $a$, and $a$ is a **multiple** of $b$. The number $12$ is divisible by $1, 2, 3, 4, 6, 12$—these are all factors of $12$.

Testing divisibility is equivalent to checking if the remainder (modulo) is zero. The calculator uses the modulo operation: if $a \\bmod b = 0$, then $a$ is divisible by $b$. This is why $15 \\bmod 5 = 0$ confirms $15$ is divisible by $5$.

Understanding divisibility helps with **fraction simplification**, **finding common denominators**, **prime factorization**, and **solving modular arithmetic** problems. It's a fundamental skill in elementary number theory and practical mathematics.

In the calculator this is the **Single Divisor** mode. The definition is in [what is divisibility](!/arithmetic/divisibility#1), the link to remainders in [divisibility and remainders](!/arithmetic/divisibility#4), and factors and multiples in [factors (divisors)](!/arithmetic/divisibility/factors#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Divisibility Rules and Patterns`,
    content: `Divisibility rules provide shortcuts for testing divisibility without full division. **Divisible by 2**: last digit is even ($0, 2, 4, 6, 8$). Try $48$: last digit $8$ is even, so divisible by $2$.

**Divisible by 3**: sum of digits is divisible by $3$. For $123$: $1 + 2 + 3 = 6$, and $6$ is divisible by $3$, so $123$ is divisible by $3$. **Divisible by 5**: last digit is $0$ or $5$. Test $125$: ends in $5$, so divisible by $5$.

**Divisible by 4**: last two digits form a number divisible by $4$. For $316$: the last two digits are $16$, and $16 ÷ 4 = 4$, so $316$ is divisible by $4$. **Divisible by 9**: sum of digits is divisible by $9$. Try $729$: $7 + 2 + 9 = 18$, divisible by $9$.

**Divisible by 10**: last digit is $0$. **Divisible by 6**: divisible by both $2$ and $3$. **Divisible by 12**: divisible by both $3$ and $4$. These rules come from properties of base-10 number system and modular arithmetic.

The **Common Divisors** mode applies these nine tests at once: $36$ passes $2, 3, 4, 6, 9, 12$ and fails $5, 8, 10$, while $360$ passes all nine. Each rule is proved in [divisibility by 2](!/arithmetic/divisibility/rules#2), [divisibility by 3](!/arithmetic/divisibility/rules#3), [divisibility by 5](!/arithmetic/divisibility/rules#5) and [why these rules work](!/arithmetic/divisibility/rules#13).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Results and Interpreting Output`,
    content: `In Single Divisor mode, results appear as colored text. Green text starting with "Yes" means divisible, showing the quotient: "Yes, $24$ is divisible by $6$. Result: $4$". Orange/yellow "No" means not divisible, showing the remainder.

The remainder tells you how much is left over after division. For "$27$ is not divisible by $5$. Remainder: $2$", this means $27 = 5 × 5 + 2$. The remainder is always less than the divisor.

In Common Divisors mode, the grid uses color coding. Green boxes with ✓ indicate divisibility; red boxes with ✗ indicate non-divisibility. Each box is labeled with its divisor number (2, 3, 4, etc.) for easy reading.

Error messages appear in red. "Error: Enter a valid integer" means you left the number blank, typed text, or typed a decimal such as $2.5$. "Error: Enter a valid divisor (non-zero integer)" means the divisor is $0$, blank, or not an integer. Division by zero is undefined. The remainder the calculator reports is the modulo of the two numbers, as explained in [divisibility and modular arithmetic](!#divisibility-and-modular-arithmetic).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Applications in Fraction Simplification`,
    content: `Divisibility testing is essential for **reducing fractions**. To simplify $\\frac{24}{36}$, test which numbers divide both $24$ and $36$. Using Common Divisors mode: both are divisible by $2, 3, 4, 6, 12$.

The greatest common divisor is $12$, so divide both: $\\frac{24÷12}{36÷12} = \\frac{2}{3}$. The divisibility calculator helps you quickly identify potential common divisors without trial-and-error division.

For complex fractions like $\\frac{144}{192}$, test both numbers with Common Divisors mode. You'll find both are divisible by $2, 3, 4, 6, 8, 12$. Testing these as potential GCF candidates, you discover GCF = $48$, giving $\\frac{144}{192} = \\frac{3}{4}$.

Divisibility also helps verify if a fraction is **already in lowest terms**. If numerator and denominator share no common divisors (other than $1$), the fraction is fully reduced. Test $\\frac{15}{28}$: they share no common divisors, so it's already simplified. Common factors are treated in [common factors](!/arithmetic/divisibility/factors#7) and the greatest of them in [listing factors](!/arithmetic/divisibility/gcd#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Using Divisibility for Prime Testing`,
    content: `Divisibility testing helps identify **composite numbers** (non-prime). If a number is divisible by any number other than $1$ and itself, it's composite. Use Common Divisors mode to quickly check.

Enter $77$ in Common Divisors mode: no common divisors show green, but this doesn't prove it's prime—you'd need to test all numbers up to $\\sqrt{77} ≈ 8.77$. However, $77 = 7 × 11$ is actually composite (divisible by $7$ and $11$).

For small numbers, Common Divisors mode catches most composites. If any divisor shows green (except cases like $2$ dividing even numbers you already know about), the number is definitely composite. Try $91$: no common divisors, but $91 = 7 × 13$.

To conclusively test primality, you'd need a [prime number checker](!/arithmetic/calculators/prime-calculator) that tests all divisors up to the square root. Divisibility testing is a first step: if divisible by $2, 3, 5$, etc., definitely not prime. If not, further testing needed. Prime numbers are introduced in [prime numbers](!/arithmetic/divisibility#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Divisibility and Modular Arithmetic`,
    content: `Divisibility is the foundation of **modular arithmetic** (mod or remainder arithmetic). Saying "$a$ is divisible by $b$" is equivalent to "$a \\equiv 0 \\pmod{b}$" (a is congruent to 0 modulo b).

The remainder from divisibility testing is the modulo value. When the calculator shows "Remainder: $3$" for $23 ÷ 5$, this means $23 \\bmod 5 = 3$ or $23 \\equiv 3 \\pmod{5}$. Modular arithmetic uses these remainders for clock arithmetic, cryptography, and number theory.

Divisibility rules are modular arithmetic shortcuts. "Last digit even" for divisibility by $2$ works because $10 \\equiv 0 \\pmod{2}$, so only the last digit matters. Similarly, "sum of digits" for divisibility by $3$ works because $10 \\equiv 1 \\pmod{3}$.

Understanding the connection between divisibility and modulo helps solve **congruence problems**, **Chinese Remainder Theorem** applications, and **cryptographic algorithms** like RSA. The divisibility calculator shows modulo results (remainders) when numbers aren't divisible. The link between the two ideas is set out in [modulo and divisibility](!/arithmetic/modulo#3) and [congruence](!/arithmetic/modulo#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Concepts`,
    content: `**Modulo Calculator** - Calculate remainders directly. Complements divisibility testing by showing $a \\bmod b$ for any numbers. Divisibility occurs when modulo equals zero.

**Factoring Calculator** - Find all factors of a number. Every factor represents a number that divides evenly. Combines divisibility testing with complete factor enumeration.

**GCF Calculator** - Find greatest common factor. Uses divisibility to identify which numbers divide into multiple inputs. Essential for fraction simplification.

**Prime Number Checker** - Test if a number is prime. A number is prime only if it's divisible by exactly two numbers: $1$ and itself.

**LCM Calculator** - Find least common multiple. The LCM is divisible by all input numbers—it's the smallest such number. Divisibility is central to understanding multiples.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is divisibility and how does this calculator work?",
    answer: "Divisibility means one number divides evenly into another with remainder 0. This calculator tests divisibility in two modes: Single Divisor (test one specific divisor, get quotient or remainder) and Common Divisors (test 2,3,4,5,6,8,9,10,12 at once with color-coded grid). Enter your numbers and click Check for instant results."
  },
  obj2: {
    question: "What's the difference between Single Divisor and Common Divisors modes?",
    answer: "Single Divisor tests one specific divisor and shows the quotient if divisible or remainder if not. Common Divisors tests nine common divisors simultaneously (2,3,4,5,6,8,9,10,12) and displays results as a color-coded grid: green (✓) for divisible, red (✗) for not divisible. Use Single for specific tests, Common for quick pattern identification."
  },
  obj3: {
    question: "How do I use divisibility to simplify fractions?",
    answer: "Test both numerator and denominator with Common Divisors mode to find shared divisors. For 24/36, both are divisible by 2,3,4,6,12. The greatest common divisor is 12, so divide both by 12: 24/36 = 2/3. Divisibility testing helps quickly identify potential GCF candidates."
  },
  obj4: {
    question: "What do the divisibility rules mean?",
    answer: "Divisibility rules are shortcuts for testing without full division. Examples: divisible by 2 if last digit is even; by 3 if digit sum is divisible by 3; by 5 if last digit is 0 or 5; by 10 if last digit is 0. These rules come from base-10 number system properties and modular arithmetic."
  },
  obj5: {
    question: "What's the connection between divisibility and remainders?",
    answer: "Divisibility occurs when remainder is 0. The remainder (modulo) tells you what's left after division. If 23 ÷ 5 gives remainder 3, then 23 = 5×4 + 3, meaning 23 is not divisible by 5. Zero remainder means divisible. This connects to modular arithmetic: a mod b = 0 means a is divisible by b."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Divisibility Calculator - Test Divisibility Rules",
    "description": "Free divisibility calculator tests if numbers divide evenly. Check single divisors or test multiple common divisors (2,3,4,5,6,8,9,10,12) at once. Perfect for learning divisibility rules.",
    "url": "https://www.learnmathclass.com/arithmetic/calculators/divisibility-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Single divisor testing with quotient or remainder",
      "Common divisors mode tests 9 divisors at once",
      "Color-coded grid for visual results",
      "Shows divisibility status, quotients, and remainders",
      "Perfect for learning divisibility rules",
      "Instant calculation and validation",
      "Useful for fraction simplification"
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
        "name": "Divisibility Calculator",
        "item": "https://www.learnmathclass.com/arithmetic/calculators/divisibility-calculator"
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
      title: "Divisibility Calculator | Test Divisibility Rules Online",
      description: "Free divisibility calculator tests if numbers divide evenly. Single divisor or common divisors mode. See quotients, remainders, and visual results instantly.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/calculators/divisibility-calculator",
      name: "Divisibility Calculator - Check Divisibility Rules"
    },
  },
  revalidate: 86400
};
}

export default function DivisibilityCalculatorPage({seoData, sectionsContent, navigationGroup, faqQuestions, schemas, detailInstructions, explanations, demos}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.6}
    minHeight={358}
    renderText={processContent}
  >
    <DivisibilityCalculator explanations={explanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-divisibility-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-divisibility-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'using-single-divisor-mode',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('using-single-divisor-mode'), sectionsContent.obj2.content],
  },
  {
    id: 'using-common-divisors-mode',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('using-common-divisors-mode'), sectionsContent.obj3.content],
  },
  {
    id: 'reading-results-and-interpreting-output',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('reading-results-and-interpreting-output'), sectionsContent.obj6.content],
  },
  {
    id: 'understanding-divisibility',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [sectionsContent.obj4.content],
  },
  {
    id: 'divisibility-rules-and-patterns',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [sectionsContent.obj5.content],
  },
  {
    id: 'applications-in-fraction-simplification',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'using-divisibility-for-prime-testing',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'divisibility-and-modular-arithmetic',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
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
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Calculator</h1>
    <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Divisibility Calculator'
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
          <DivisibilityCalculator explanations={explanations} />
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