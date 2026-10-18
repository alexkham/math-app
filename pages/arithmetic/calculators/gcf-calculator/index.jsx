import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import GCFCalculator from '@/app/components/calculators/algebra/GCFCalculator';
import '../../../../pages/pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/arithmetic/calculators/gcf-calculator" in calculators-mesh-registry.json (same folder): 6 instructions, 2 explanation texts with anchors, 12 sections (6 usage with demos, 2 new theory), lesson links to gcd, lcm, factors.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps() {

const navigationGroup=[
  {title:'Arithmetic Calculators',
    items:[
      {title:'Factoring Calculator',link:'/algebra/calculators/factoring'},
      {title:'LCM Calculator',link:'/arithmetic/calculators/lcm-calculator'},
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
  `Pick the method under **Calculation Method**: **Euclidean Algorithm** or **Prime Factorization**; the panel on the right explains the chosen one. [Learn more about the methods](!#getting-started-with-the-gcf-calculator)`,
  `Type whole numbers in **Number 1** and **Number 2**. [Learn more about the inputs](!#getting-started-with-the-gcf-calculator)`,
  `Click **+ Add Number** for a third to sixth number; the red **×** beside a field removes it. [Learn more about fields](!#adding-and-removing-number-fields)`,
  `Click **Calculate**; the greatest common factor appears in the result box. [Learn more about the result](!#understanding-the-gcf-result)`,
  `A red message appears when fewer than two fields hold a non-zero whole number; blanks, decimals and zeros are skipped. [Learn more about messages](!#reading-error-messages)`,
  `Click **Reset** to clear the result and return to two empty fields. [Learn more about Reset](!#getting-started-with-the-gcf-calculator)`,
];

const explanations = {
  euclidean: {
    text: "The Euclidean algorithm finds the GCF by repeatedly dividing and taking remainders. It's the most efficient method for finding the greatest common factor of two or more numbers. [Learn more about the Euclidean algorithm](!#how-the-euclidean-algorithm-works)"
  },
  prime: {
    text: "The prime factorization method finds GCF by breaking each number into prime factors, then multiplying the common prime factors. This method clearly shows why the GCF works. [Learn more about prime factorization](!#how-prime-factorization-finds-the-gcf)"
  }
};

const demos = {
  'getting-started-with-the-gcf-calculator': {
    title: 'Two numbers, a third one, then Reset',
    script: [
      { say: 'TYPE 144 and 96', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '144' },
      { set: 'input[placeholder="Number 2"]', value: '96' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nGCF = 48.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK + Add Number\nA Number 3 field appears.', at: 'tr' },
      { click: { button: '+ Add Number' } },
      { wait: 1800 },
      { say: 'TYPE 60 and CLICK Calculate\nGCF(144, 96, 60) = 12.', at: 'tr' },
      { set: 'input[placeholder="Number 3"]', value: '60' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK Reset\nTwo empty fields again.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'using-the-euclidean-algorithm-method': {
    title: 'GCF(48, 18) and GCF(1071, 462)',
    script: [
      { say: 'TYPE 48 and 18\nEuclidean Algorithm is the default method.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '48' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { wait: 1800 },
      { say: 'CLICK Calculate\n48 = 2·18 + 12, 18 = 1·12 + 6, 12 = 2·6: GCF = 6.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE 1071 and 462', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '1071' },
      { set: 'input[placeholder="Number 2"]', value: '462' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nGCF = 21, after three divisions.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'using-the-prime-factorization-method': {
    title: 'Prime Factorization mode',
    script: [
      { say: 'PICK Prime Factorization\nThe panel explains the method.', at: 'tr' },
      { set: 'input[value="prime"]', value: true },
      { wait: 2000 },
      { say: 'TYPE 12 and 18', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '12' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { wait: 1600 },
      { say: 'CLICK Calculate\nUnder the result: 12 = 2² · 3, 18 = 2 · 3²; lowest shared powers 2 · 3 = 6.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE 24 and 36, CLICK Calculate\n24 = 2·2·2·3, 36 = 2·2·3·3: common 2·2·3 = 12.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '24' },
      { set: 'input[placeholder="Number 2"]', value: '36' },
      { click: { button: 'Calculate' } },
      { wait: 2800 },
    ],
  },
  'adding-and-removing-number-fields': {
    title: 'Four fields, then remove one',
    script: [
      { say: 'CLICK + Add Number twice\nNumber 3 and Number 4 appear.', at: 'tr' },
      { click: { button: '+ Add Number' } },
      { click: { button: '+ Add Number' } },
      { wait: 1800 },
      { say: 'TYPE 12, 18, 24, 30 and CLICK Calculate\nGCF = 6.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '12' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { set: 'input[placeholder="Number 3"]', value: '24' },
      { set: 'input[placeholder="Number 4"]', value: '30' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'CLICK × beside Number 4\nThe field is gone and the old result is cleared.', at: 'tr' },
      { click: { button: '×', exact: true, nth: 3 } },
      { wait: 2000 },
      { say: 'TYPE 8 in Number 3 and CLICK Calculate\nGCF(12, 18, 8) = 2.', at: 'tr' },
      { set: 'input[placeholder="Number 3"]', value: '8' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'understanding-the-gcf-result': {
    title: 'Coprime, highly related, negative',
    script: [
      { say: 'TYPE 7 and 15, CLICK Calculate\nGCF = 1: the numbers are coprime.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '7' },
      { set: 'input[placeholder="Number 2"]', value: '15' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE 24 and 36, CLICK Calculate\nGCF = 12: both are multiples of 12.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '24' },
      { set: 'input[placeholder="Number 2"]', value: '36' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE -12 and 18, CLICK Calculate\nGCF = 6: the sign is ignored.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '-12' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'reading-error-messages': {
    title: 'Decimal, zero and a blank',
    script: [
      { say: 'TYPE 12 and 12.5, CLICK Calculate\nThe decimal is skipped: only one valid number, so an error.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '12' },
      { set: 'input[placeholder="Number 2"]', value: '12.5' },
      { click: { button: 'Calculate' } },
      { wait: 2800 },
      { say: 'TYPE 18 in Number 2, CLICK Calculate\nGCF = 6.', at: 'tr' },
      { set: 'input[placeholder="Number 2"]', value: '18' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 0 in Number 1, CLICK Calculate\nZero is skipped like a blank: error again.', at: 'tr' },
      { set: 'input[placeholder="Number 1"]', value: '0' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'CLICK Reset\nFields and result cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
};

const keyWords = [
  'gcf calculator',
  'greatest common factor calculator',
  'gcd calculator',
  'greatest common divisor',
  'gcf finder',
  'common factor calculator',
  'hcf calculator',
  'highest common factor',
  'euclidean algorithm calculator',
  'find gcf online',
  'gcf of two numbers',
  'gcf of multiple numbers',
  'prime factorization gcf',
  'free gcf calculator',
  'greatest common factor tool'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the GCF Calculator`,
    content: `The GCF calculator helps you find the greatest common factor of two or more numbers. Start by choosing your calculation method using the radio buttons at the top: **Euclidean Algorithm** (faster for large numbers) or **Prime Factorization** (shows how it works).

Enter your first number in the "Number 1" field and your second number in the "Number 2" field. The calculator accepts positive integers of any size. Try simple examples like finding the GCF of $12$ and $18$, or larger numbers like $144$ and $96$.

To find the GCF of more than two numbers, click the **+ Add Number** button below the input fields. You can add up to $6$ numbers total. Each additional field will appear with its own input box and a remove button (×) if you want to delete it later.

After entering your numbers, click the blue **Calculate** button. The GCF result appears in the result box below the inputs: GCF($144$, $96$) = $48$, and adding $60$ as a third number gives $12$. The calculator works instantly, even with large numbers. Use **Reset** to clear all fields and start fresh with two empty fields. What the result means is explained in [what is the greatest common factor](!#what-is-the-greatest-common-factor).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using the Euclidean Algorithm Method`,
    content: `Select **Euclidean Algorithm** as your calculation method for the fastest GCF computation. This ancient method uses division and remainders to find the GCF efficiently without breaking numbers into prime factors. It works especially well for large numbers.

The algorithm repeatedly divides the larger number by the smaller number, then replaces the larger number with the smaller and the smaller with the remainder. This continues until the remainder is $0$. Try finding GCF($48$, $18$): divide $48 ÷ 18 = 2$ remainder $12$, then $18 ÷ 12 = 1$ remainder $6$, then $12 ÷ 6 = 2$ remainder $0$. The GCF is $6$.

The division steps of each pair are listed under the result. For more than two numbers, the calculator applies this method repeatedly. It finds GCF(first, second), then finds GCF(result, third), and so on. Enter $12$, $18$, and $24$ to see this in action—the GCF is $6$ because it divides evenly into all three numbers.

This method is mathematically proven to always find the correct GCF. It's faster than prime factorization for numbers with hundreds or thousands of digits, making it the preferred method for computational efficiency in computer science and cryptography. A larger example: GCF($1071$, $462$) = $21$ after three divisions. The division chain is written out in [how the Euclidean algorithm works](!#how-the-euclidean-algorithm-works).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using the Prime Factorization Method`,
    content: `Switch to **Prime Factorization** mode to read how GCF works through prime factors: the panel on the right explains the method, and the result box shows the same GCF as the Euclidean method. This method breaks each number into its prime building blocks, then multiplies the common primes together. Under the result the calculator lists the factorization of every number and the lowest power of each shared prime; the method is explained further in [how prime factorization finds the GCF](!#how-prime-factorization-finds-the-gcf).

For example, to find GCF($12$, $18$): Break $12 = 2 × 2 × 3$ and $18 = 2 × 3 × 3$. The common prime factors are one $2$ and one $3$, so GCF = $2 × 3 = 6$. The calculator performs this factorization automatically for any numbers you enter.

This method clearly shows which prime factors the numbers share. Try GCF($24$, $36$): $24 = 2 × 2 × 2 × 3$ and $36 = 2 × 2 × 3 × 3$. Common factors are $2 × 2 × 3 = 12$. You take the lowest power of each common prime.

Prime factorization is excellent for learning and understanding GCF conceptually. It connects to other number theory topics like **LCM** (least common multiple), **simplifying fractions**, and **finding common denominators**. The method works perfectly for small to medium-sized numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Adding and Removing Number Fields`,
    content: `The calculator starts with two input fields, but you can find the GCF of up to $6$ numbers. Click the **+ Add Number** button (with dashed border) below your current inputs to add another field. A new input box appears labeled "Number 3", "Number 4", etc.

Each additional field includes a small **×** button on the right side. Click this red × button to remove that specific number field. You cannot remove fields if you only have two remaining—the calculator always requires at least two numbers to compute a GCF.

Adding multiple numbers is useful for real-world problems. For instance, if you're arranging $12$, $18$, $24$, and $30$ items into equal groups, the GCF tells you the largest possible group size: $6$ items per group. Try entering these numbers to verify.

The calculator processes all numbers using the Euclidean algorithm repeatedly. GCF($a$, $b$, $c$) = GCF(GCF($a$, $b$), $c$). This means finding the GCF of three numbers is just finding the GCF of two numbers, then finding the GCF of that result with the third number. Removing a field does not recompute: the old result stays until you click Calculate again, so $12$, $18$, $8$ gives $2$ only after a new click. Why this chaining is valid is explained in [how the Euclidean algorithm works](!#how-the-euclidean-algorithm-works).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding the GCF Result`,
    content: `After clicking Calculate, the GCF result appears in the white result box. The number shown is the largest integer that divides evenly into all your input numbers. For GCF($12$, $18$) = $6$, this means $6$ is the biggest number that goes into both $12$ and $18$ with no remainder.

If you get GCF = $1$, your numbers are **relatively prime** or **coprime**. They share no common factors except $1$. Try GCF($7$, $15$) = $1$, or GCF($8$, $9$) = $1$. These pairs have no common divisors, making them useful in fraction simplification and cryptography.

Large GCF values indicate numbers with many shared factors. GCF($24$, $36$) = $12$ shows these numbers are highly related—they're both multiples of $12$. In contrast, GCF($25$, $36$) = $1$ shows these numbers share nothing except $1$.

The GCF result is always positive, even when you enter negative numbers: the calculator uses their absolute values. Mathematically, GCF($-12$, $18$) = GCF($12$, $18$) = $6$ because divisibility properties are the same for negative numbers. Coprime numbers and the other properties behind these results are in [what is the greatest common factor](!#what-is-the-greatest-common-factor).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Error Messages`,
    content: `The calculator validates your input before computing. If you see **"Error: Enter at least 2 valid integers"** in red text, you either left a field empty, entered fewer than two numbers, or typed non-numeric characters like letters or symbols.

Make sure each number field contains a whole number. The calculator accepts integers only—no decimals or fractions; negative integers are allowed and their sign is ignored. A decimal such as $12.5$ is skipped like a blank field, so $12$ and $12.5$ leave only one valid number and you get the error.

If a number field is blank when you click Calculate, the calculator ignores that field. This means if you have six fields but only filled three, it computes GCF using just those three numbers. Remove unnecessary blank fields with the × button for cleaner results.

A field holding $0$ is skipped like a blank one, so $0$ and $18$ also give the error. Mathematically GCF($0$, $n$) = $n$, since every number divides $0$, but the calculator works only with non-zero integers. Keep all inputs as non-zero whole numbers. The definition the messages protect is in [what is the greatest common factor](!#what-is-the-greatest-common-factor).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is the Greatest Common Factor`,
    content: `The greatest common factor (GCF), also called greatest common divisor (GCD) or highest common factor (HCF), is the largest positive integer that divides evenly into two or more numbers. For GCF($12$, $18$) = $6$, the number $6$ is the biggest integer that goes into both $12$ and $18$ with zero remainder.

Think of GCF as finding the biggest building block shared by multiple numbers. The numbers $12$ and $18$ can both be built from groups of $6$: $12 = 6 × 2$ and $18 = 6 × 3$. You cannot use groups of $7$ or larger because those won't divide both numbers evenly.

GCF is fundamental to **fraction simplification**. To reduce $\\frac{12}{18}$, divide numerator and denominator by GCF($12$, $18$) = $6$ to get $\\frac{2}{3}$. This is why GCF is essential in elementary arithmetic and algebra.

Common factors are the divisors shared by all numbers. For $12$ and $18$, the common factors are $1, 2, 3, 6$. The **greatest** of these common factors is $6$. Finding the GCF efficiently requires algorithms like Euclid's or prime factorization rather than listing all factors.

The definition and notation are in [what is GCD](!/arithmetic/divisibility/gcd#1) and [basic properties](!/arithmetic/divisibility/gcd#2); listing factors is [method 1](!/arithmetic/divisibility/gcd#3) and common factors are treated in [common factors](!/arithmetic/divisibility/factors#7). Pairs with GCF $1$ are covered in [coprime numbers](!/arithmetic/divisibility/gcd#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Applications of GCF`,
    content: `**Simplifying Fractions**: Reduce fractions to lowest terms by dividing numerator and denominator by their GCF. The fraction $\\frac{24}{36}$ simplifies to $\\frac{2}{3}$ because GCF($24$, $36$) = $12$, and $\\frac{24÷12}{36÷12} = \\frac{2}{3}$.

**Dividing Items into Groups**: If you have $12$ apples and $18$ oranges and want to make identical fruit baskets, GCF($12$, $18$) = $6$ tells you the maximum number of baskets: $6$ baskets with $2$ apples and $3$ oranges each.

**Finding Common Denominators**: When adding fractions like $\\frac{1}{12} + \\frac{1}{18}$, you need the least common multiple (LCM), which connects to GCF through the formula: LCM($a$, $b$) × GCF($a$, $b$) = $a × b$.

**Tiling and Design**: If you're tiling a $24$ inch by $36$ inch rectangle with square tiles, GCF($24$, $36$) = $12$ tells you the largest square tile size that fits perfectly: $12$ inch × $12$ inch tiles with no cutting or waste.

More uses are collected in [applications of GCD](!/arithmetic/divisibility/gcd#10) and [worked examples](!/arithmetic/divisibility/gcd#11).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `GCF vs LCM`,
    content: `GCF (greatest common factor) finds the **largest** number that divides into all inputs. LCM (least common multiple) finds the **smallest** number that all inputs divide into. These are inverse concepts that work together in number theory.

For GCF($12$, $18$) = $6$ and LCM($12$, $18$) = $36$, notice that $6 × 36 = 216 = 12 × 18$. This relationship always holds: GCF($a$, $b$) × LCM($a$, $b$) = $a × b$ for any two positive integers $a$ and $b$.

Use GCF when **dividing or reducing**: simplifying fractions, splitting items into equal groups, finding common factors. Use LCM when **combining or building up**: adding fractions with different denominators, finding common multiples, scheduling repeating events.

Think of GCF as "breaking down" to find shared divisors, while LCM is "building up" to find common multiples. For $4$ and $6$: GCF = $2$ (largest shared divisor), LCM = $12$ (smallest shared multiple). Both concepts use the same prime factorization but apply it differently.

The product rule is proved in [the GCD–LCM relationship](!/arithmetic/divisibility/lcm#6), LCM itself is defined in [what is LCM](!/arithmetic/divisibility/lcm#1), and the coprime case, where LCM is the plain product, in [when a and b are coprime](!/arithmetic/divisibility/lcm#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Calculators and Concepts`,
    content: `[LCM Calculator](!/arithmetic/calculators/lcm-calculator) - Find the least common multiple of two or more numbers. Perfect companion to GCF for fraction operations and finding common multiples. Uses the relationship LCM($a$, $b$) = $\\frac{a × b}{\\text{GCF}(a, b)}$.

[Factoring Calculator](!/algebra/calculators/factoring) - Break numbers into prime factors or find all factors. Essential for understanding why GCF works and seeing the prime factorization method step-by-step.

[Divisibility Calculator](!/arithmetic/calculators/divisibility-calculator) - Test if numbers divide evenly into each other. Helps verify GCF results and understand divisibility relationships between numbers.

[Prime Number Checker](!/arithmetic/calculators/prime-calculator) - Verify if numbers are prime. Prime numbers have GCF = $1$ with any number not divisible by them, making them useful for understanding coprime relationships.

[Fraction Calculator](!/calculators/fraction-calculator) - Simplify fractions automatically using GCF. Combines fraction operations with automatic reduction to lowest terms.

The lessons behind this calculator are [greatest common divisor](!/arithmetic/divisibility/gcd#0), [least common multiple](!/arithmetic/divisibility/lcm#0) and [factors and multiples](!/arithmetic/divisibility/factors#0).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `How the Euclidean Algorithm Works`,
    content: `The Euclidean algorithm rests on one fact: for integers $a > b > 0$, GCF($a$, $b$) = GCF($b$, $a \\bmod b$). Any common divisor of $a$ and $b$ also divides the remainder $a - qb$, and any common divisor of $b$ and the remainder divides $a$. So the pair $(a, b)$ can be replaced by the smaller pair $(b, r)$ without changing the GCF.

For $48$ and $18$: $48 = 2 × 18 + 12$, then $18 = 1 × 12 + 6$, then $12 = 2 × 6 + 0$. The last non-zero remainder, $6$, is the GCF. For $1071$ and $462$: $1071 = 2 × 462 + 147$, $462 = 3 × 147 + 21$, $147 = 7 × 21 + 0$, so GCF = $21$.

The remainders shrink at every step, so the algorithm always stops, and it needs at most about $5$ times the number of digits of the smaller number in divisions. That is why the calculator uses it to compute every result; in **Prime Factorization** mode it additionally shows the factorizations, and in **Euclidean Algorithm** mode it lists the division steps under the result.

For three or more numbers the calculator chains the pair rule: GCF($a$, $b$, $c$) = GCF(GCF($a$, $b$), $c$). The algorithm is presented in [method 3: Euclidean algorithm](!/arithmetic/divisibility/gcd#5) and traced in [Euclidean algorithm step by step](!/arithmetic/divisibility/gcd#6); the chaining is justified in [GCD of more than two numbers](!/arithmetic/divisibility/gcd#9).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `How Prime Factorization Finds the GCF`,
    content: `Every integer greater than $1$ is a product of primes in exactly one way. Write each number as such a product, then keep every prime that appears in all of them, raised to the **lowest** power it has in any of them. The product of these kept powers is the GCF.

For $12 = 2^2 × 3$ and $18 = 2 × 3^2$: the prime $2$ appears with powers $2$ and $1$, so keep $2^1$; the prime $3$ appears with powers $1$ and $2$, so keep $3^1$. GCF = $2 × 3 = 6$. For $24 = 2^3 × 3$ and $36 = 2^2 × 3^2$: keep $2^2$ and $3^1$, so GCF = $12$.

A prime missing from one of the numbers is dropped: $25 = 5^2$ and $36 = 2^2 × 3^2$ share no prime, so GCF = $1$ and the numbers are coprime. The same factorizations give the LCM by keeping the **highest** powers instead, which is why GCF × LCM = $a × b$ for two numbers.

Factoring large numbers is slow, so this method suits small and medium inputs and is mainly a way to see why the answer is what it is. The method is set out in [method 2: prime factorization](!/arithmetic/divisibility/gcd#4) and compared with the others in [summary: three methods for GCD](!/arithmetic/divisibility/gcd#12).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is GCF and how does this calculator work?",
    answer: "GCF (Greatest Common Factor) is the largest positive integer that divides evenly into two or more numbers. This calculator finds the GCF using either the Euclidean Algorithm (fast, efficient method) or Prime Factorization (visual, educational method). Enter 2-6 numbers, choose your method, and click Calculate to see the result instantly."
  },
  obj2: {
    question: "What's the difference between Euclidean Algorithm and Prime Factorization methods?",
    answer: "The Euclidean Algorithm uses repeated division and remainders—it's faster and works well for large numbers. Prime Factorization breaks each number into prime factors and multiplies the common ones—it's more visual and helps you understand why the GCF is what it is. Both methods always give the same correct answer."
  },
  obj3: {
    question: "Can I find the GCF of more than two numbers?",
    answer: "Yes! Click the + Add Number button to add up to 6 number fields total. The calculator finds GCF of multiple numbers by repeatedly applying the algorithm: GCF(a,b,c) = GCF(GCF(a,b), c). This works for any quantity of numbers from 2 to 6."
  },
  obj4: {
    question: "What does it mean if the GCF is 1?",
    answer: "When GCF = 1, the numbers are relatively prime (or coprime)—they share no common factors except 1. For example, GCF(8,9) = 1 and GCF(7,15) = 1. These number pairs are useful in fraction simplification and cryptography because they have no common divisors."
  },
  obj5: {
    question: "How do I use GCF to simplify fractions?",
    answer: "To simplify a fraction, divide both numerator and denominator by their GCF. For 24/36: find GCF(24,36) = 12, then divide both by 12 to get 2/3. This reduces the fraction to lowest terms because 2 and 3 have GCF = 1 (they're coprime)."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GCF Calculator - Greatest Common Factor",
    "description": "Free online GCF calculator finds the greatest common factor of 2-6 numbers using Euclidean Algorithm or Prime Factorization. Simplify fractions and solve math problems instantly.",
    "url": "https://www.learnmathclass.com/arithmetic/calculators/gcf-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Find GCF of 2 to 6 numbers simultaneously",
      "Euclidean Algorithm method for fast calculation",
      "Prime Factorization method for educational visualization",
      "Dynamic add/remove number fields",
      "Instant calculation for any size integers",
      "Clear result display with error validation",
      "Perfect for fraction simplification"
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
        "name": "GCF Calculator",
        "item": "https://www.learnmathclass.com/arithmetic/calculators/gcf-calculator"
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
      title: "GCF Calculator | Greatest Common Factor of 2-6 Numbers",
      description: "Free GCF calculator finds the greatest common factor instantly using Euclidean Algorithm or Prime Factorization. Perfect for simplifying fractions and solving math problems.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/calculators/gcf-calculator",
      name: "GCF Calculator - Greatest Common Factor Tool"
    },
  },
  revalidate: 86400
};
}

export default function GCFCalculatorPage({seoData, sectionsContent, navigationGroup, faqQuestions, schemas, detailInstructions, explanations, demos}) {

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
    <GCFCalculator explanations={explanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-gcf-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-gcf-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'using-the-euclidean-algorithm-method',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('using-the-euclidean-algorithm-method'), sectionsContent.obj2.content],
  },
  {
    id: 'using-the-prime-factorization-method',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('using-the-prime-factorization-method'), sectionsContent.obj3.content],
  },
  {
    id: 'adding-and-removing-number-fields',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('adding-and-removing-number-fields'), sectionsContent.obj4.content],
  },
  {
    id: 'understanding-the-gcf-result',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('understanding-the-gcf-result'), sectionsContent.obj5.content],
  },
  {
    id: 'reading-error-messages',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('reading-error-messages'), sectionsContent.obj6.content],
  },
  {
    id: 'what-is-the-greatest-common-factor',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'how-the-euclidean-algorithm-works',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'how-prime-factorization-finds-the-gcf',
    title: sectionsContent.obj12.title,
    link: sectionsContent.obj12.link,
    content: [sectionsContent.obj12.content],
  },
  {
    id: 'applications-of-gcf',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'gcf-vs-lcm',
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
    
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>GCF Calculator</h1>
    <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use GCF Calculator'
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
          <GCFCalculator explanations={explanations} />
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