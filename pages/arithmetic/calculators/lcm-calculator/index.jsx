import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import LCMCalculator from '@/app/components/calculators/algebra/LCMCalculator';
import '../../../../pages/pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "C:/Program Files/Git/arithmetic/calculators/lcm-calculator" in calculators-mesh-registry.json (same folder): 6 usage sections, each with a demo; 2 panel texts with anchors; 11 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup=[
  {title:'Arithmetic Calculators',
    items:[
      {title:'Factoring Calculator',link:'/algebra/calculators/factoring'},
      {title:'GCF Calculator',link:'/arithmetic/calculators/gcf-calculator'},
      {title:'Divisibility Calculator',link:'/arithmetic/calculators/divisibility-calculator'},
      // {title:'Prime Number Checker',link:'/arithmetic/calculators/prime-checker'},
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
  `Pick the method with the two buttons under **Calculation Method**: **Prime Factorization** or **GCF Formula**. Both give the same LCM; the panel on the right explains the chosen one. [Learn more about the methods](!#getting-started-with-the-lcm-calculator)`,
  `Type a positive whole number in **Number 1** and another in **Number 2**. [Learn more about the inputs](!#getting-started-with-the-lcm-calculator)`,
  `Click **+ Add Number** for a third to sixth number, and the **×** next to a field to remove it. [Learn more about adding fields](!#adding-and-removing-number-fields)`,
  `Click **Calculate**. The LCM appears in the **LCM Result** box under the buttons. [Learn more about the result](!#understanding-the-lcm-result)`,
  `The panel on the right explains the selected method, and its link opens the section below that explains it in full. [Learn more about prime factorization](!#using-prime-factorization-method)`,
  `Click **Reset** to clear every field and the result. A red message appears when fewer than two valid whole numbers are entered. [Learn more about messages](!#reading-error-messages)`,
];

const explanations = {
  prime: {
    text: "The prime factorization method finds LCM by breaking each number into prime factors, then taking the highest power of each prime that appears. This gives you the smallest number divisible by all inputs. [Learn more about prime factorization](!#finding-the-lcm-by-prime-factorization)"
  },
  formula: {
    text: "The formula method uses LCM(a,b) = (a × b) / GCF(a,b). For multiple numbers, apply this formula repeatedly. This method is efficient and works well for any set of numbers. [Learn more about the GCF formula](!#lcm-vs-gcf)"
  }
};

const demos = {
  'getting-started-with-the-lcm-calculator': {
    title: 'Two numbers, a result, the other method, Reset',
    script: [
      { say: 'TYPE 4 and 6', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '4' },
      { set: 'input[placeholder="Number 2"]', value: '6' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nLCM Result: 12.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK GCF Formula\nThe panel explains the other method.', at: 'tr' },
      { set: 'input[value="formula"]', value: true },
      { wait: 2200 },
      { say: 'CLICK Reset\nFields and result cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'using-prime-factorization-method': {
    title: 'Prime factorization with two and three numbers',
    script: [
      { say: 'TYPE 12 and 18\n12 = 2² × 3 and 18 = 2 × 3².', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '12' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { wait: 2000 },
      { say: 'CLICK Calculate\nHighest powers 2² × 3² = 36.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK + Add Number\nA third field appears.', at: 'tr' },
      { click: { button: '+ Add Number' } },
      { wait: 1800 },
      { say: 'TYPE 8 as Number 3\n8 = 2³.', at: 'tr' },
      { set: 'input[placeholder="Number 3"]', value: '8' },
      { wait: 1800 },
      { say: 'CLICK Calculate\n2³ × 3² = 72.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'using-gcf-formula-method': {
    title: 'The GCF formula on two pairs',
    script: [
      { say: 'CLICK GCF Formula\nLCM(a, b) = a × b / GCF(a, b).', at: 'tr' },
      { set: 'input[value="formula"]', value: true },
      { wait: 2000 },
      { say: 'TYPE 12 and 18\nGCF(12, 18) = 6.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '12' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { wait: 2000 },
      { say: 'CLICK Calculate\n12 × 18 / 6 = 216 / 6 = 36.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 5 and 7, CLICK Calculate\nCoprime numbers: GCF 1, so LCM = 5 × 7 = 35.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '5' },
      { set: 'input[placeholder="Number 2"]', value: '7' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'adding-and-removing-number-fields': {
    title: 'Four numbers, then one removed',
    script: [
      { say: 'CLICK + Add Number\nNumber 3 appears.', at: 'tr' },
      { click: { button: '+ Add Number' } },
      { wait: 1800 },
      { say: 'CLICK + Add Number again\nNumber 4 appears, each with a × button.', at: 'tr' },
      { click: { button: '+ Add Number' } },
      { wait: 1800 },
      { say: 'TYPE 2, 3, 4 and 5', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '2' },
      { set: 'input[placeholder="Number 2"]', value: '3' },
      { set: 'input[placeholder="Number 3"]', value: '4' },
      { set: 'input[placeholder="Number 4"]', value: '5' },
      { wait: 2000 },
      { say: 'CLICK Calculate\nLCM(2, 3, 4, 5) = 60.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK the × of Number 4\nThree fields remain.', at: 'tr' },
      { click: { button: '×', exact: true, nth: 3 } },
      { wait: 2400 },
    ],
  },
  'understanding-the-lcm-result': {
    title: 'Shared factors, coprime numbers, large numbers',
    script: [
      { say: 'TYPE 6 and 9\nThey share the factor 3.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '6' },
      { set: 'input[placeholder="Number 2"]', value: '9' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nLCM Result: 18.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 5 and 7\nNo shared factor.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '5' },
      { set: 'input[placeholder="Number 2"]', value: '7' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nLCM Result: 35, the product.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 144 and 216, CLICK Calculate\nLCM Result: 432.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '144' },
      { set: 'input[placeholder="Number 2"]', value: '216' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'reading-error-messages': {
    title: 'Too few numbers, a decimal, then a valid pair',
    script: [
      { say: 'TYPE 4 in Number 1 only', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '4' },
      { wait: 1600 },
      { say: 'TYPE 3.14 as Number 2\nA decimal is ignored.', at: 'tr' },
      { set: 'input[placeholder="Number 2"]', value: '3.14' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nOnly one valid number.\nRed message: Error: Enter at least 2 valid integers.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE 6 as Number 2, CLICK Calculate\nLCM Result: 12.', at: 'tr' },
      { set: 'input[placeholder="Number 2"]', value: '6' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
};

const keyWords = [
  'lcm calculator',
  'least common multiple calculator',
  'lcm finder',
  'lowest common multiple',
  'common multiple calculator',
  'lcm of two numbers',
  'lcm of multiple numbers',
  'prime factorization lcm',
  'find lcm online',
  'free lcm calculator',
  'least common denominator',
  'lcd calculator',
  'lcm calculator with steps',
  'multiple calculator',
  'common denominator finder'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the LCM Calculator`,
    content: `The LCM calculator finds the least common multiple of two or more numbers—the smallest positive integer that all your numbers divide into evenly. Start by choosing your calculation method: **Prime Factorization** (educational, shows the process) or **GCF Formula** (uses the relationship between LCM and GCF).

Enter your first number in "Number 1" and second number in "Number 2". The calculator accepts any positive integers. Try finding LCM($4$, $6$) = $12$, or LCM($8$, $12$) = $24$. These are common examples used in fraction addition.

To find LCM of more than two numbers, click **+ Add Number**. You can enter up to $6$ numbers total. Each new field appears with a remove button (×) if you want to delete it. For example, find LCM($2$, $3$, $4$) = $12$.

Click the blue **Calculate** button to see your result instantly. The LCM appears in the result box below the inputs. Use **Reset** to clear all fields and try different numbers. The calculator handles large numbers efficiently. What a common multiple is, and why the least one matters, is explained in [what is the least common multiple](!#what-is-the-least-common-multiple).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Prime Factorization Method`,
    content: `Select **Prime Factorization** to see how LCM works through prime factors. This method breaks each number into primes, then takes the highest power of each prime that appears. The result is the smallest number containing all prime factors from all inputs.

For LCM($12$, $18$): Break $12 = 2^2 × 3$ and $18 = 2 × 3^2$. Take the highest power of each prime: $2^2$ and $3^2$. Multiply them: LCM = $2^2 × 3^2 = 4 × 9 = 36$. This is the smallest number divisible by both $12$ and $18$.

Try LCM($8$, $12$, $18$): Factor as $8 = 2^3$, $12 = 2^2 × 3$, $18 = 2 × 3^2$. Highest powers: $2^3$, $3^2$. Result: $2^3 × 3^2 = 8 × 9 = 72$. You can verify: $72 ÷ 8 = 9$, $72 ÷ 12 = 6$, $72 ÷ 18 = 4$.

This method visualizes why LCM works and connects to other number theory concepts. It's especially useful for understanding **common denominators** in fraction addition: to add $\\frac{1}{12} + \\frac{1}{18}$, convert to denominator $36$. The method is worked through in [finding the LCM by prime factorization](!#finding-the-lcm-by-prime-factorization).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using GCF Formula Method`,
    content: `Switch to **GCF Formula** to use the mathematical relationship: LCM($a$, $b$) = $\\frac{a × b}{\\text{GCF}(a, b)}$. This formula calculates LCM quickly using the greatest common factor. The calculator computes GCF first, then applies the formula automatically.

For LCM($12$, $18$): Calculate GCF($12$, $18$) = $6$. Then LCM = $\\frac{12 × 18}{6} = \\frac{216}{6} = 36$. This method is computationally faster than prime factorization for large numbers.

The relationship between GCF and LCM is fundamental: GCF finds the largest shared divisor (breaking down), while LCM finds the smallest shared multiple (building up). Notice that GCF($12$, $18$) × LCM($12$, $18$) = $6 × 36 = 216 = 12 × 18$.

For more than two numbers, the calculator applies the formula repeatedly: LCM($a$, $b$, $c$) = LCM(LCM($a$, $b$), $c$). First find LCM of first two numbers, then find LCM of that result with the third number, and so on. For coprime numbers the GCF is $1$ and the LCM is the product: LCM($5$, $7$) = $35$. Why the formula holds is explained in [LCM vs GCF](!#lcm-vs-gcf).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Adding and Removing Number Fields`,
    content: `The calculator starts with two inputs but supports up to $6$ numbers. Click the **+ Add Number** button (dashed border) to add fields. New inputs appear labeled "Number 3", "Number 4", etc. Each has its own input box and tooltip.

Remove any field by clicking its **×** button on the right. You cannot remove fields if only two remain—LCM requires at least two numbers. The calculator automatically adjusts to whatever number of fields you have filled with valid integers.

Finding LCM of multiple numbers is common in **scheduling problems**. If events repeat every $4$, $6$, and $9$ days, they coincide every LCM($4$, $6$, $9$) = $36$ days. Try entering these to verify.

Each additional number potentially increases the LCM. For example, LCM($2$, $3$) = $6$, but LCM($2$, $3$, $4$) = $12$, and LCM($2$, $3$, $4$, $5$) = $60$. The LCM grows because it must contain all prime factors from all inputs. Where several numbers are needed in practice is shown in [applications of LCM](!#applications-of-lcm).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding the LCM Result`,
    content: `After clicking Calculate, the LCM result shows the smallest positive integer divisible by all your inputs. For LCM($4$, $6$) = $12$, you can verify: $12 ÷ 4 = 3$ and $12 ÷ 6 = 2$. Both divisions give whole numbers with no remainder.

If inputs share many factors, the LCM is relatively small. LCM($6$, $9$) = $18$ because $6$ and $9$ share the factor $3$. If inputs are **coprime** (GCF = $1$), the LCM equals their product. LCM($5$, $7$) = $35 = 5 × 7$ because $5$ and $7$ share no common factors.

Large LCM values indicate numbers with few shared factors. LCM($7$, $11$, $13$) = $1001$ because these are all prime and share nothing. In contrast, LCM($12$, $18$, $24$) = $72$ is smaller relative to the inputs because they share many factors.

The LCM result always appears as a positive integer. Mathematically, LCM is defined only for positive integers, though the underlying principles work with negative numbers (their LCM would be the same as the positive versions). For large inputs the result is still exact: LCM($144$, $216$) = $432$. The definition behind every result is in [what is the least common multiple](!#what-is-the-least-common-multiple).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Error Messages`,
    content: `The calculator validates inputs before computing. If you see **"Error: Enter at least 2 valid integers"** in red, you either left fields empty, entered fewer than two numbers, or typed non-numeric characters.

Each field should contain a positive whole number. A decimal such as $3.14$ or $4.5$ is ignored, so with only one other number the same message appears; a fraction such as $\\frac{1}{2}$ cannot be typed at all. A negative number is used by its absolute value, since LCM is defined for positive integers.

Blank fields are ignored during calculation. If you create six fields but only fill four, the calculator computes LCM using those four numbers. For cleaner results, remove unused fields with the × button.

Zero is ignored because LCM involving $0$ is mathematically undefined or trivial (every number divides $0$, but there's no "least" multiple). Keep all inputs as positive integers greater than zero. Why zero has no least multiple follows from the definition in [what is the least common multiple](!#what-is-the-least-common-multiple).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is the Least Common Multiple`,
    content: `The least common multiple (LCM), also called lowest common multiple, is the smallest positive integer that is a multiple of two or more numbers. For LCM($4$, $6$) = $12$, the number $12$ is the smallest integer that both $4$ and $6$ divide into evenly.

Think of multiples as numbers you get when counting by a certain value. Multiples of $4$ are $4, 8, 12, 16, 20...$. Multiples of $6$ are $6, 12, 18, 24, 30...$. The **common multiples** are $12, 24, 36...$. The **least** of these is $12$.

LCM is essential for **fraction addition with different denominators**. To add $\\frac{1}{4} + \\frac{1}{6}$, convert both to denominator LCM($4$, $6$) = $12$: $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$. This is why LCM is also called the least common denominator (LCD).

Finding LCM by listing multiples is inefficient for large numbers. Algorithms using [prime factorization](!#finding-the-lcm-by-prime-factorization) or the [GCF formula](!#lcm-vs-gcf) compute LCM much faster. For LCM($144$, $216$), listing multiples would be tedious, but prime factorization gives $432$ instantly.

The definition is in [what is LCM](!/arithmetic/divisibility/lcm#1), the listing method in [listing multiples](!/arithmetic/divisibility/lcm#3), and the use for fractions in [finding a common denominator](!/arithmetic/fractions/adding-subtracting#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Applications of LCM`,
    content: `**Adding Fractions**: Find common denominators for fraction addition. To add $\\frac{1}{6} + \\frac{1}{8}$, use LCM($6$, $8$) = $24$ as denominator: $\\frac{4}{24} + \\frac{3}{24} = \\frac{7}{24}$.

**Scheduling and Cycles**: If two events repeat every $4$ and $6$ days, they coincide every LCM($4$, $6$) = $12$ days. Three buses departing every $10$, $15$, and $20$ minutes all leave together every LCM($10$, $15$, $20$) = $60$ minutes.

**Gear and Rotation Problems**: If gear A has $12$ teeth and gear B has $18$ teeth, after how many teeth rotations do they align again? LCM($12$, $18$) = $36$ teeth. This is $3$ full rotations of A and $2$ full rotations of B.

**Tile and Pattern Design**: When creating repeating patterns with tiles of different sizes, LCM tells you the repeat length. Patterns of width $4$ inches and $6$ inches repeat every LCM($4$, $6$) = $12$ inches. More uses are collected in [applications of LCM](!/arithmetic/divisibility/lcm#10).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `LCM vs GCF`,
    content: `LCM (least common multiple) finds the **smallest** number that all inputs divide into. GCF (greatest common factor) finds the **largest** number that divides into all inputs. These are complementary concepts with an inverse relationship.

For LCM($12$, $18$) = $36$ and GCF($12$, $18$) = $6$, notice the product relationship: $36 × 6 = 216 = 12 × 18$. This formula always holds: LCM($a$, $b$) × GCF($a$, $b$) = $a × b$ for any positive integers.

Use LCM when **combining or building up**: adding fractions, finding common multiples, scheduling coinciding events. Use GCF when **dividing or reducing**: simplifying fractions, splitting items into groups, finding common divisors.

Both use prime factorization but differently. For GCF, take the **lowest** power of each common prime. For LCM, take the **highest** power of each prime that appears anywhere. Understanding both concepts together provides deep insight into number structure.

In the calculator this is the **GCF Formula** method: the GCF is found with the Euclidean algorithm, then the product is divided by it. The formula is derived in [using GCD](!/arithmetic/divisibility/lcm#5) and [the GCD and LCM relationship](!/arithmetic/divisibility/lcm#6); the algorithm is in [Euclidean algorithm step by step](!/arithmetic/divisibility/gcd#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Concepts`,
    content: `**GCF Calculator** - Find the greatest common factor. Essential companion to LCM since LCM($a$, $b$) = $\\frac{a × b}{\\text{GCF}(a, b)}$. Both concepts work together in fraction operations.

**Factoring Calculator** - Break numbers into prime factors. Understanding prime factorization is key to seeing how LCM works and computing it manually.

**Fraction Calculator** - Add, subtract, multiply, and divide fractions with automatic LCM calculation for common denominators. Combines fraction operations with LCM.

**Divisibility Calculator** - Test if the LCM divides evenly into other numbers or verify that your inputs divide evenly into the LCM result.

**Modulo Calculator** - Find remainders when dividing. Related to LCM because LCM is the first number where all inputs give remainder $0$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Finding the LCM by Prime Factorization`,
    content: `Write every number as a product of primes, then take each prime to the highest power in which it appears anywhere, and multiply: the result is the smallest number that contains every factorization, which is the LCM.

Example: $12 = 2^2 \\times 3$ and $18 = 2 \\times 3^2$. The highest power of $2$ is $2^2$ and of $3$ is $3^2$, so LCM($12$, $18$) = $2^2 \\times 3^2 = 36$. With a third number, $8 = 2^3$, the highest power of $2$ becomes $2^3$ and LCM($8$, $12$, $18$) = $2^3 \\times 3^2 = 72$. Check: $72 = 8 \\times 9 = 12 \\times 6 = 18 \\times 4$.

A prime that appears in only one number still goes in: LCM($4$, $9$) = $2^2 \\times 3^2 = 36$. The common mistake is to take the lowest powers, which gives the GCF instead: $2 \\times 3 = 6$ for $12$ and $18$. Another is to add the exponents: $2^3 \\times 3^3 = 216$ is a common multiple of $12$ and $18$ but not the least.

In the calculator this is the **Prime Factorization** method. The method is taught in [prime factorization](!/arithmetic/divisibility/lcm#4) and practised in [worked examples](!/arithmetic/divisibility/lcm#11); factorizing itself is in [prime factorization](!/arithmetic/divisibility#8).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is LCM and how does this calculator work?",
    answer: "LCM (Least Common Multiple) is the smallest positive integer that is divisible by two or more numbers. This calculator finds LCM using either Prime Factorization (takes highest power of each prime) or GCF Formula (uses LCM = a×b/GCF). Enter 2-6 numbers, choose your method, and get instant results."
  },
  obj2: {
    question: "What's the difference between Prime Factorization and GCF Formula methods?",
    answer: "Prime Factorization breaks each number into primes and takes the highest power of each prime that appears—it's educational and visual. GCF Formula uses the relationship LCM(a,b) = a×b/GCF(a,b)—it's faster for computation. Both methods give the same correct answer."
  },
  obj3: {
    question: "How do I use LCM to add fractions?",
    answer: "Use LCM as the common denominator. To add 1/4 + 1/6, find LCM(4,6) = 12. Convert: 1/4 = 3/12 and 1/6 = 2/12. Then add: 3/12 + 2/12 = 5/12. The LCM gives you the least common denominator (LCD)."
  },
  obj4: {
    question: "What's the relationship between LCM and GCF?",
    answer: "LCM and GCF are inverse concepts connected by the formula: LCM(a,b) × GCF(a,b) = a × b. For example, LCM(12,18) = 36 and GCF(12,18) = 6, and 36 × 6 = 216 = 12 × 18. This relationship helps compute one from the other."
  },
  obj5: {
    question: "Can I find LCM of more than two numbers?",
    answer: "Yes! Click + Add Number to enter up to 6 numbers. The calculator finds LCM of multiple numbers by applying the algorithm repeatedly: LCM(a,b,c) = LCM(LCM(a,b), c). This works for any quantity from 2 to 6 numbers."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LCM Calculator - Least Common Multiple",
    "description": "Free online LCM calculator finds the least common multiple of 2-6 numbers using Prime Factorization or GCF Formula. Perfect for adding fractions and solving math problems.",
    "url": "https://www.learnmathclass.com/arithmetic/calculators/lcm-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Find LCM of 2 to 6 numbers simultaneously",
      "Prime Factorization method for visual learning",
      "GCF Formula method for fast calculation",
      "Dynamic add/remove number fields",
      "Instant calculation for any size integers",
      "Perfect for fraction addition and LCD finding",
      "Clear result display with validation"
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
        "name": "LCM Calculator",
        "item": "https://www.learnmathclass.com/arithmetic/calculators/lcm-calculator"
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
      title: "LCM Calculator | Least Common Multiple of 2-6 Numbers",
      description: "Free LCM calculator finds the least common multiple instantly using Prime Factorization or GCF Formula. Perfect for adding fractions and finding common denominators.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/calculators/lcm-calculator",
      name: "LCM Calculator - Least Common Multiple Tool"
    },
  },
  revalidate: 86400
};
}

export default function LCMCalculatorPage({seoData, sectionsContent, navigationGroup, faqQuestions, schemas, detailInstructions, explanations, demos}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.6}
    minHeight={382}
    renderText={processContent}
  >
    <LCMCalculator explanations={explanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-lcm-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-lcm-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'using-prime-factorization-method',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('using-prime-factorization-method'), sectionsContent.obj2.content],
  },
  {
    id: 'using-gcf-formula-method',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('using-gcf-formula-method'), sectionsContent.obj3.content],
  },
  {
    id: 'adding-and-removing-number-fields',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('adding-and-removing-number-fields'), sectionsContent.obj4.content],
  },
  {
    id: 'understanding-the-lcm-result',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('understanding-the-lcm-result'), sectionsContent.obj5.content],
  },
  {
    id: 'reading-error-messages',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('reading-error-messages'), sectionsContent.obj6.content],
  },
  {
    id: 'what-is-the-least-common-multiple',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'finding-the-lcm-by-prime-factorization',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'lcm-vs-gcf',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'applications-of-lcm',
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
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>LCM Calculator</h1>
    <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use LCM Calculator'
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
          <LCMCalculator explanations={explanations} />
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