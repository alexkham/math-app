import { useSearchParams } from 'next/navigation'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import CombinatoricsCalculator from '@/app/components/calculators/combinatorics/CombinatoricsCalculator'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


/* calculators-mesh: finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/combinatorics/calculator" in calculators-mesh-registry.json (same folder): 4 usage sections, each with a demo; 10 panel texts with anchors; 16 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
 export async function getStaticProps(){

const keyWords = [
    'combinatorics calculator', 'permutation calculator', 'combination calculator',
    'factorial calculator', 'counting problems', 'arrangements calculator',
    'selections calculator', 'circular permutations', 'weak composition', 'strong composition'
  ]



      const explanationsMapping = {
  PermutationFull: {
    formula: '$P(n) = n!$',
    description: 'Calculate the number of ways to arrange $n$ distinct objects in a sequence. [Learn more about full permutations](!#permutation-full) · [All permutations](!#permutations)',
    example: 'How many ways can you arrange 5 people in a line? $5! = 120$ ways',
    reasoning: `For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$

    Read more about [full permutations](!/combinatorics/permutations#full) .
    `,
  },

  PermutationWithIdentical: {
    formula: '$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$',
    description: 'Calculate arrangements of $n$ objects where some objects are identical. $n_1, n_2, \\ldots, n_k$ are the counts of each type of identical object. [Learn more about identical items](!#permutation-with-identical-items) · [All permutations](!#permutations)',
    example: 'Arrange letters in "BOOK":\\n• Total: 4 letters\\n• B appears 1 time\\n• O appears 2 times\\n• K appears 1 time\\n• Result: $\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$ arrangements',
    reasoning: `We start with $n!$ total arrangements, then divide by the factorial of each repetition count to account for identical objects that don\'t create new arrangements when swapped.

    Read more about [permutations with identical items](!/combinatorics/permutations#identical).
    `,
  },

  PermutationWithoutRepetition: {
    formula: '$P(n,r)$ = $\\frac{n!}{(n-r)!}$',
    description: 'Calculate the number of ways to pick $r$ different items from $n$ items where order matters. Each selection creates a different arrangement. [Learn more about partial permutations](!#partial-permutation-without-repetition) · [All permutations](!#permutations)',
    example: 'Selecting and arranging podium finishers (1st, 2nd, 3rd) from 5 runners: $P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60$ arrangements',
    reasoning: `We start with $n!$ total arrangements, then divide by $(n-r)!$ to account for the remaining items we don\'t select. This gives us only the arrangements of the $r$ selected items in their specific positions.

    Read more about [partial permutations](!/combinatorics/permutations#without).
    `,
  },

  PermutationWithRepetition: {
    formula: '$P(n,r) = n^r$',
    description: 'Calculate the number of ways to arrange $r$ positions using $n$ items where each item can be used multiple times. [Learn more about repetition](!#permutation-with-repetition) · [All permutations](!#permutations)',
    example: 'Creating a 4-digit PIN using digits 0-9: $10^4 = 10,000$ possible PINs (each digit can be any of the 10 options)',
    reasoning: `For each of the $r$ positions, you have $n$ choices (since repetition is allowed). This gives us $n \\times n \\times \\cdots \\times n$ .
    ($r$ times) = $n^r$.

    Read more about permutations [with repetitions](!/combinatorics/permutations#with).`,
  },

  CircularPermutation: {
 formula: '$P_{circular}(n) = (n-1)!$',
 description: 'Calculate the number of ways to arrange $n$ distinct objects in a circle. In circular arrangements, rotations are considered identical. [Learn more about circular permutations](!#circular-permutation) · [All permutations](!#permutations)',
 example: 'How many ways can 6 people sit around a circular table? $(6-1)! = 5! = 120$ ways',
 reasoning: `In a circle, we fix one object to eliminate rotational symmetry. This leaves $(n-1)$ objects to arrange in $(n-1)!$ ways. All rotations of a linear arrangement represent the same circular arrangement.

 Read more about [circular permutations](!/combinatorics/permutations#circular).
 `,
},
Combination: {
 formula: '$C(n,r) = \\frac{n!}{r! \\times (n-r)!}$',
 description: 'Calculate the number of ways to pick $r$ different items from $n$ items where order doesn\'t matter. Each selection is a unique combination. [Learn more about combinations](!#simple-combination) · [All combinations and distributions](!#combinations-and-distributions)',
 example: 'Selecting a 3-person committee from 5 people: $C(5,3) = \\frac{5!}{3! \\times 2!} = \\frac{120}{6 \\times 2} = 10$ combinations',
 reasoning: `We start with $n!$ arrangements, divide by $r!$ to remove order within selected items, and divide by $(n-r)!$ to remove arrangements of unselected items. This leaves only unique selections.

 Read more about [simple combinations](!/combinatorics/combinations#combinations).

 `,
},

PartitionIntoGroups: {
 formula: '$\\binom{n}{n_1,n_2,\\ldots,n_r} = \\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_r!}$',
 description: 'Calculate the number of ways to distribute $n$ distinct items into $r$ labeled groups of specified sizes. The sum of group sizes must equal $n$. [Learn more about partitions](!#partition-into-groups) · [All combinations and distributions](!#combinations-and-distributions)',
 example: 'Dividing 10 students into 3 labeled groups (classroom: 3, playground: 4, gym: 3): $\\binom{10}{3,4,3} = \\frac{10!}{3! \\times 4! \\times 3!} = 4,200$ ways',
 reasoning: `We start with $n!$ arrangements, then divide by each group size factorial to account for arrangements within each group being identical. This leaves only the distinct ways to form the specified groups.

 Read more about [partition into groups](!/combinatorics/combinations#partition).

 `,
},
WeakComposition: {
  formula: '$C(n+r-1, r-1) = \\frac{(n+r-1)!}{(r-1)! \\times n!}$',
  description: 'Calculate the number of ways to distribute $n$ identical items into $r$ cells where empty cells are allowed. This is equivalent to finding non-negative integer solutions. [Learn more about weak compositions](!#weak-composition) · [All combinations and distributions](!#combinations-and-distributions)',
  example: 'Distributing 5 identical candies among 3 children (some can get none): $C(5+3-1, 3-1) = C(7,2) = 21$ compositions',
  reasoning: `We use the stars and bars method: arrange $n$ identical items and $r-1$ dividers. This gives $C(n+r-1, r-1)$ ways to choose positions for dividers among $n+r-1$ total positions.

  Read more about [weak composition](!/combinatorics/combinations#weak).

  `,
},
StrongComposition: {
  formula: '$C(n-1, r-1) = \\frac{(n-1)!}{(r-1)! \\times (n-r)!}$',
  description: 'Calculate the number of ways to distribute $n$ identical items into $r$ cells where no cells can be empty. Each cell must receive at least one item. [Learn more about strong compositions](!#strong-composition) · [All combinations and distributions](!#combinations-and-distributions)',
  example: 'Distributing 5 identical tasks among 3 team members (everyone gets at least one): $C(5-1, 3-1) = C(4,2) = 6$ compositions',
  reasoning: `We first give one item to each cell, leaving $n-r$ items to distribute freely. Then we use stars and bars with $n-r$ items and $r-1$ dividers, giving $C(n-1, r-1)$ arrangements.

  Read more about [strong composition](!/combinatorics/combinations#strong)

  `,
},
DistributionIntoCells: {
  formula: '$r^n$',
  description: 'Calculate the number of ways to distribute $n$ different items into $r$ numbered cells. Each item can go into any cell. [Learn more about distributions](!#distribution-into-cells) · [All combinations and distributions](!#combinations-and-distributions)',
  example: 'Assigning 3 different tasks to 2 specific days of the week: $2^3 = 8$ distributions',
  reasoning: `Each of the $n$ items has $r$ choices of cells to go into. Since items are different and cells are numbered, each item independently chooses from $r$ options, giving $r \\times r \\times ... \\times r = r^n$ total distributions.

  Read more about [distribution into cells](!/combinatorics/combinations#distribution)

  `,
}
}

const navigationGroup = [
  {
    title: 'Related Calculators',
    items: [
      { title: 'Factorial Calculator', link: '/calculators/factorial-calculator' },
      { title: 'Probability Calculators', link: '/probability/calculators' },
      { title: 'Statistics Calculator', link: '/calculators/statistics-calculator' },
      { title: 'Exponent Calculator', link: '/calculators/exponent-calculator' },
    ],
  },
];

const detailInstructions = [
  `Pick a scenario with the ten buttons at the top, from **Permutation (Full)** to **Distribution into Cells**; the form and the panel change to match. [Learn more about the scenarios](!#choosing-a-scenario)`,
  `Type the numbers the scenario asks for, such as **n** and **r**, in the boxes; the **×** next to a box clears it. [Learn more about the numbers](!#entering-the-numbers)`,
  `For identical items or groups, click **Add Type** or **Add Group** for another count and fill each one; the counts must add up to n. [Learn more about counts and groups](!#entering-the-numbers)`,
  `Click **Calculate**. The result box states the number of ways in a sentence, and a red message appears when a number is missing, negative, or impossible. [Learn more about results](!#calculating-and-reading-the-result)`,
  `The panel under the form shows the formula, what the scenario counts, a worked example and the reasoning, ending with links to the sections and lessons that explain it. [Learn more about the panel](!#the-explanation-panel)`,
  `Click **Reset** to clear the boxes and the result of the current scenario. [Learn more about Reset](!#calculating-and-reading-the-result)`,
];

const demos = {
  'choosing-a-scenario': {
    title: 'Four of the ten scenarios',
    script: [
      { say: 'CLICK Simple Combination\nTwo boxes, n and r.\nPanel: C(n, r).', at: 'tr' },
      { click: { button: 'Simple Combination' } },
      { wait: 2200 },
      { say: 'CLICK Circular Permutation\nOne box, n.\nPanel: (n - 1)!', at: 'tr' },
      { click: { button: 'Circular Permutation' } },
      { wait: 2200 },
      { say: 'CLICK Weak Composition\nItems n into r cells, empty cells allowed.', at: 'tr' },
      { click: { button: 'Weak Composition' } },
      { wait: 2200 },
      { say: 'CLICK Permutation (Full)\nBack to the first scenario: n!', at: 'tr' },
      { click: { button: 'Permutation (Full)' } },
      { wait: 2400 },
    ],
  },
  'entering-the-numbers': {
    title: 'n and r for a combination, and the × button',
    script: [
      { say: 'CLICK Simple Combination', at: 'tr' },
      { click: { button: 'Simple Combination' } },
      { wait: 1800 },
      { say: 'TYPE 5 as n', at: 'tr' },
      { set: 'input[placeholder="e.g., 5"]', value: '5' },
      { wait: 1600 },
      { say: 'TYPE 3 as r', at: 'tr' },
      { set: 'input[placeholder="e.g., 3"]', value: '3' },
      { wait: 1600 },
      { say: 'CLICK Calculate\nThere are 10 ways to select 3 items from 5.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'CLICK the × next to r\nThe r box is cleared.', at: 'tr' },
      { click: { button: '×', exact: true, nth: 1 } },
      { wait: 2200 },
    ],
  },
  'calculating-and-reading-the-result': {
    title: 'A result, a message, Reset',
    script: [
      { say: 'TYPE 5 as n\nPermutation (Full) is selected.', at: 'tr' },
      { set: 'input[placeholder="e.g., 5"]', value: '5' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n5! = 120: there are 120 ways to arrange 5 distinct objects.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE -1 and CLICK Calculate\nRed message: Please enter a non-negative number.', at: 'tr' },
      { set: 'input[placeholder="e.g., 5"]', value: '-1' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'CLICK Reset\nBox, result and message cleared.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'the-explanation-panel': {
    title: 'The panel follows the scenario',
    script: [
      { say: 'CLICK Partial Permutation without Repetition\nPanel: P(n, r) = n! / (n - r)!', at: 'tr' },
      { click: { button: 'Partial Permutation without Repetition' } },
      { wait: 2400 },
      { say: 'CLICK Permutation with Repetition\nPanel: n to the power r.', at: 'tr' },
      { click: { button: 'Permutation with Repetition' } },
      { wait: 2400 },
      { say: 'CLICK Partition into Groups\nPanel: the multinomial coefficient.', at: 'tr' },
      { click: { button: 'Partition into Groups' } },
      { wait: 2400 },
      { say: 'CLICK Distribution into Cells\nPanel: r to the power n.\nEach panel ends with links to its sections.', at: 'tr' },
      { click: { button: 'Distribution into Cells' } },
      { wait: 2600 },
    ],
  },
};

const sectionsContent = {
  obj1: {
    title: `Choosing a Scenario`,
    content: `The calculator covers ten counting scenarios, picked with the ten buttons at the top. The first five are permutations, where the order of the items matters: **Permutation (Full)**, **Permutation with Identical Items**, **Partial Permutation without Repetition**, **Permutation with Repetition** and **Circular Permutation**. The other five count selections and distributions, where the order does not matter: **Simple Combination**, **Partition into Groups**, **Weak Composition**, **Strong Composition** and **Distribution into Cells**.

Click a button and the form below changes to the boxes that scenario needs: one number $n$ for a full or circular permutation, $n$ and $r$ for a combination or a composition, or a list of counts for identical items and groups. The explanation panel under the form switches at the same time. The selected button is shown in blue.

The page can open on a given scenario through its address: adding **?scenario=6** to the URL opens Simple Combination, which is how the lessons link here. Each scenario keeps its own numbers while you look at another.

How to tell a permutation from a combination, the choice that decides the scenario, is explained in [permutations](!#permutations) and [combinations and distributions](!#combinations-and-distributions).`,
    before: ``, after: ``, link: '',
  },
  obj2: {
    title: `Entering the Numbers`,
    content: `Every scenario takes whole numbers from $0$ upward. The first box is $n$, the number of items; scenarios that pick or distribute also take $r$, the number picked or the number of cells. The placeholder in each box shows a sample value, and the **×** button next to a box clears it on its own.

Two scenarios take a list of counts. **Permutation with Identical Items** takes the total $n$ and one count per type of identical item, added with **Add Type**; the counts must add up to $n$, as for the word BOOK with $4$ letters and counts $1, 2, 1$. **Partition into Groups** takes $n$ and one size per group, added with **Add Group**; the sizes must add up to $n$. A row of counts has its own × to remove it.

The numbers are checked when you click **Calculate**: $r$ cannot exceed $n$ in a combination, since you cannot pick more items than there are, and counts that do not add up to $n$ are refused with a message that names the mismatch. For Simple Combination with $n = 5$ and $r = 3$ the result is $10$.

What $n$ and $r$ stand for in each formula is explained in [simple combination](!#simple-combination).`,
    before: ``, after: ``, link: '',
  },
  obj3: {
    title: `Calculating and Reading the Result`,
    content: `Click **Calculate** and the result box appears under the form. It shows the formula with your numbers, the count, and a sentence that says what was counted: for $n = 5$ in Permutation (Full), **There are 120 ways to arrange 5 distinct objects**. Large counts are printed with thousands separators.

Small inputs are computed on this page. Very large ones, where the factorials overflow, are sent to the server, and a count beyond what can be represented is reported as **Number too large for calculation**; a full permutation accepts $n$ up to $100$.

Messages appear in red above the result when the input is not usable: **Please enter a valid number** for an empty or non-numeric box, **Please enter a non-negative number** for a negative one, **r cannot be greater than n** in a combination, and a sum mismatch for identical items and groups. Correct the box and click Calculate again.

**Reset** clears the boxes, the result and the message of the current scenario; the other scenarios keep their numbers. Why $5!$ counts the arrangements of five objects is explained in [permutation (full)](!#permutation-full).`,
    before: ``, after: ``, link: '',
  },
  obj4: {
    title: `The Explanation Panel`,
    content: `Under the form of every scenario sits an explanation panel with four parts: the **formula** in symbols, a **description** of what the scenario counts, a worked **example** with real numbers, and the **reasoning** that derives the formula from the counting principle. The description ends with links to the sections on this page that treat the scenario and its family, and the reasoning ends with a link to the lesson that teaches it.

The panel follows the scenario buttons, not the numbers: it shows $P(n, r) = n! / (n - r)!$ for a partial permutation, $n^r$ for a permutation with repetition, the multinomial coefficient for a partition into groups, and $r^n$ for a distribution into cells, whatever you have typed. The result box, by contrast, shows the formula with your own numbers.

Read the example first when a scenario is new: it names a situation, people in a line, a PIN, candies among children, and that is the quickest way to recognise which scenario a problem belongs to.

The principle every panel rests on, multiplying the choices made one after another, is explained in [permutations](!#permutations).`,
    before: ``, after: ``, link: '',
  },
  obj5: {
    title: `Permutations`,
    content: `A permutation is an arrangement in which the order matters: the line $A, B, C$ differs from $C, B, A$. Counting them rests on the multiplication rule: with $n$ choices for the first place, $n - 1$ for the second and so on, the choices multiply. The five permutation scenarios of the calculator are variations on that rule.

[Permutation (full)](!#permutation-full) arranges all $n$ distinct items, $n!$ ways. [Permutation with identical items](!#permutation-with-identical-items) divides by the factorials of the repeated counts. [Partial permutation without repetition](!#partial-permutation-without-repetition) arranges only $r$ of the $n$ items, $n! / (n - r)!$ ways. [Permutation with repetition](!#permutation-with-repetition) lets every place take any of the $n$ items, $n^r$ ways. [Circular permutation](!#circular-permutation) seats $n$ items in a ring, $(n - 1)!$ ways.

The common mistake is to count a selection as a permutation: a committee of three from five is one combination, but the same three people in three ranked positions are six permutations.

See [the logic behind permutations](!/combinatorics/permutations#logic), [types of permutations](!/combinatorics/permutations#types) and [the multiplication rule](!/combinatorics/counting-principles#2).`,
    before: ``, after: ``, link: '',
  },
  obj6: {
    title: `Permutation (Full)`,
    content: `The number of ways to arrange $n$ distinct objects in a row is $n! = n \\times (n - 1) \\times \\cdots \\times 1$: the first place has $n$ choices, the second $n - 1$, and the choices multiply. Five people in a line can stand in $5! = 120$ orders, four books on a shelf in $4! = 24$.

The factorial grows fast: $7! = 5040$, $10! = 3628800$, and the calculator switches to the server beyond the numbers it can hold locally; it accepts $n$ up to $100$. By definition $0! = 1$: there is exactly one way to arrange nothing.

The common mistake is to add the choices instead of multiplying them, which gives $5 + 4 + 3 + 2 + 1 = 15$ instead of $120$.

See [permutation (full)](!/combinatorics/permutations#full) and, for the factorial itself, [what are factorials](!/calculators/factorial-calculator#what-are-factorials).`,
    before: ``, after: ``, link: '',
  },
  obj7: {
    title: `Permutation with Identical Items`,
    content: `When some of the $n$ objects are identical, arrangements that only swap identical objects look the same and must be counted once. With counts $n_1, n_2, \\ldots, n_k$ of each kind, the number of distinct arrangements is $\\dfrac{n!}{n_1! \\, n_2! \\cdots n_k!}$.

The letters of BOOK, with two O's, give $\\dfrac{4!}{1! \\, 2! \\, 1!} = \\dfrac{24}{2} = 12$ distinct words. MISSISSIPPI, with $11$ letters, four S, four I and two P, gives $\\dfrac{11!}{4! \\, 4! \\, 2!} = 34650$. Each division removes the swaps within one kind of letter.

In the calculator, type the total $n$ and one count per kind with **Add Type**; the counts must add up to $n$. The common mistake is to list only the repeated kinds: a kind that occurs once still counts $1$, and the total must match.

See [permutation with identical items](!/combinatorics/permutations#identical).`,
    before: ``, after: ``, link: '',
  },
  obj8: {
    title: `Partial Permutation without Repetition`,
    content: `Picking $r$ items from $n$ and arranging them in order, each item used at most once, can be done in $P(n, r) = \\dfrac{n!}{(n - r)!} = n (n - 1) \\cdots (n - r + 1)$ ways. The product has $r$ factors, starting at $n$ and going down by one.

Three podium places from five runners: $P(5, 3) = 5 \\times 4 \\times 3 = 60$. Two officers, a chair and a secretary, from six members: $P(6, 2) = 30$. With $r = n$ the formula is the full permutation, $n!$.

The common mistake is to use this count when the order does not matter: the $60$ podiums become $10$ committees once the ranking is dropped, which is the combination $C(5, 3)$.

See [partial permutation without repetition](!/combinatorics/permutations#without).`,
    before: ``, after: ``, link: '',
  },
  obj9: {
    title: `Permutation with Repetition`,
    content: `When each of $r$ places can hold any of $n$ items and an item may be used again, the places are independent and the count is $n^r$. A four-digit PIN from the ten digits allows $10^4 = 10000$ codes; a three-letter code from $26$ letters allows $26^3 = 17576$.

The exponent is the number of places, the base the number of choices per place; the calculator's boxes are $n$ for the items and $r$ for the places. The count equals the distribution into cells with the roles of items and cells swapped.

The common mistake is to use $n!$ or $P(n, r)$, which forbid repeats: a PIN may repeat a digit, so $10 \\times 9 \\times 8 \\times 7 = 5040$ would be the count of PINs with four different digits only.

See [permutation with repetition](!/combinatorics/permutations#with).`,
    before: ``, after: ``, link: '',
  },
  obj10: {
    title: `Circular Permutation`,
    content: `Seating $n$ distinct people around a round table gives $(n - 1)!$ arrangements, because turning the whole table does not create a new seating: fix one person and arrange the other $n - 1$ relative to them. Six people have $(6 - 1)! = 120$ seatings, five people $4! = 24$.

If the table can also be flipped, so that mirror images count as the same, the number halves to $(n - 1)! / 2$, which is the count for a bracelet of beads; the calculator uses the rotation rule only.

The common mistake is to use $n!$ for a circle; the $n$ rotations of each seating are the same seating, which is where the division by $n$ comes from.

See [circular permutation](!/combinatorics/permutations#circular).`,
    before: ``, after: ``, link: '',
  },
  obj11: {
    title: `Combinations and Distributions`,
    content: `A combination is a selection in which the order does not matter: the committee $\\{A, B, C\\}$ is the same committee however it is listed. The number of ways to choose $r$ of $n$ items is $C(n, r) = \\dfrac{n!}{r! \\, (n - r)!}$, which is the partial permutation $P(n, r)$ divided by the $r!$ orders of each selection.

The calculator's five scenarios in this family count selections and placements. [Simple combination](!#simple-combination) chooses $r$ items. [Partition into groups](!#partition-into-groups) splits $n$ distinct items into labelled groups of given sizes. [Weak composition](!#weak-composition) and [strong composition](!#strong-composition) share $n$ identical items among $r$ cells, with or without empty cells. [Distribution into cells](!#distribution-into-cells) places $n$ distinct items into $r$ cells with no limit per cell.

The key question for each is whether the items are distinct or identical and whether the cells are labelled; the answers decide between $r^n$, the multinomial coefficient and stars and bars.

See [types of combinations](!/combinatorics/combinations#types), [permutations and combinations](!/combinatorics/basics#3) and [the binomial coefficient](!/combinatorics/basics#5).`,
    before: ``, after: ``, link: '',
  },
  obj12: {
    title: `Simple Combination`,
    content: `Choosing $r$ items from $n$ without regard to order can be done in $C(n, r) = \\dfrac{n!}{r! \\, (n - r)!}$ ways, also written $\\binom{n}{r}$ and read "n choose r". A committee of $3$ from $5$ people: $C(5, 3) = \\dfrac{120}{6 \\times 2} = 10$. A lottery pick of $4$ numbers from $10$: $C(10, 4) = 210$.

Useful facts: $C(n, r) = C(n, n - r)$, so choosing $3$ of $5$ equals leaving out $2$ of $5$; $C(n, 0) = C(n, n) = 1$; and the values are the rows of Pascal's triangle, each the sum of the two above it.

The calculator refuses $r > n$ with a message, since you cannot pick more items than there are. The common mistake is to forget the division by $r!$ and report $P(n, r)$, which counts ordered picks.

See [simple combinations](!/combinatorics/combinations#combinations) and [definition of the binomial coefficient](!/combinatorics/binomial-coefficient#1).`,
    before: ``, after: ``, link: '',
  },
  obj13: {
    title: `Partition into Groups`,
    content: `Splitting $n$ distinct items into labelled groups of sizes $n_1, n_2, \\ldots, n_r$ with $n_1 + n_2 + \\cdots + n_r = n$ can be done in $\\binom{n}{n_1, n_2, \\ldots, n_r} = \\dfrac{n!}{n_1! \\, n_2! \\cdots n_r!}$ ways, the multinomial coefficient. Ten students into a classroom group of $3$, a playground group of $4$ and a gym group of $3$: $\\dfrac{10!}{3! \\, 4! \\, 3!} = 4200$.

The formula is a chain of combinations: choose the first group, $C(10, 3)$, then the second from the rest, $C(7, 4)$, then the last, $C(3, 3)$, and multiply: $120 \\times 35 \\times 1 = 4200$. With two groups it is the ordinary binomial coefficient.

In the calculator, type $n$ and one size per group with **Add Group**; the sizes must add up to $n$. The common mistake is to treat unlabelled groups of equal size as labelled: two teams of $5$ from $10$ players are $C(10, 5) / 2 = 126$ pairings, not $252$.

See [partition into groups](!/combinatorics/combinations#partition) and [the multinomial coefficient](!/combinatorics/binomial-coefficient#4).`,
    before: ``, after: ``, link: '',
  },
  obj14: {
    title: `Weak Composition`,
    content: `Sharing $n$ identical items among $r$ labelled cells, where a cell may stay empty, can be done in $C(n + r - 1, r - 1)$ ways. Five identical candies among three children: $C(7, 2) = 21$; the same count gives the non-negative integer solutions of $x_1 + x_2 + x_3 = 5$.

The count comes from stars and bars: write the $n$ items as stars and separate the cells with $r - 1$ bars; every arrangement of the $n + r - 1$ symbols is one distribution, and choosing where the bars go is $C(n + r - 1, r - 1)$. For $5$ candies and $3$ children, one arrangement is $\\star\\star | \\star | \\star\\star$, meaning $2, 1, 2$.

The common mistake is to treat the candies as distinct and answer $3^5 = 243$; that is the distribution into cells, a different scenario.

See [weak composition](!/combinatorics/combinations#weak).`,
    before: ``, after: ``, link: '',
  },
  obj15: {
    title: `Strong Composition`,
    content: `Sharing $n$ identical items among $r$ labelled cells so that every cell gets at least one can be done in $C(n - 1, r - 1)$ ways. Five identical tasks among three team members, nobody idle: $C(4, 2) = 6$; these are the positive integer solutions of $x_1 + x_2 + x_3 = 5$.

The count follows from the weak composition: hand one item to each cell first, which leaves $n - r$ items to share freely among $r$ cells, $C(n - r + r - 1, r - 1) = C(n - 1, r - 1)$ ways. Equivalently, place $r - 1$ bars in the $n - 1$ gaps between the stars.

The count is $0$ when $n < r$, since there are not enough items to fill every cell. The common mistake is to use the weak formula, which allows empty cells: $21$ instead of $6$ for the tasks.

See [strong composition](!/combinatorics/combinations#strong).`,
    before: ``, after: ``, link: '',
  },
  obj16: {
    title: `Distribution into Cells`,
    content: `Placing $n$ distinct items into $r$ labelled cells, any number per cell, can be done in $r^n$ ways: each item chooses its cell independently. Three different tasks on two days: $2^3 = 8$ schedules. Four distinct letters into three mailboxes: $3^4 = 81$.

The scenario is the mirror image of the permutation with repetition: there the places choose items, here the items choose cells; both counts are a power. It also counts the functions from an $n$-element set to an $r$-element set.

The common mistake is to use it for identical items: three identical tasks on two days are only $4$ schedules, a weak composition, because the tasks cannot be told apart.

See [distribution into cells](!/combinatorics/combinations#distribution).`,
    before: ``, after: ``, link: '',
  },
};

const faqQuestions = {
  obj1: { question: 'What is the difference between a permutation and a combination?', answer: 'In a permutation the order matters, in a combination it does not. Three podium places from five runners are P(5,3) = 60 permutations; a committee of three from five people is C(5,3) = 10 combinations. The calculator has five permutation scenarios and five selection and distribution scenarios.' },
  obj2: { question: 'How many ways can n objects be arranged?', answer: 'n factorial: n! = n × (n-1) × ... × 1. Five objects can be arranged in 5! = 120 ways and six objects in 720 ways. Pick Permutation (Full), type n and click Calculate.' },
  obj3: { question: 'What are weak and strong compositions?', answer: 'Both share n identical items among r cells. A weak composition allows empty cells, C(n+r-1, r-1) ways; a strong composition requires at least one item in every cell, C(n-1, r-1) ways. Five candies among three children: 21 weak and 6 strong compositions.' },
  obj4: { question: 'Why does the calculator say r cannot be greater than n?', answer: 'Because a combination picks r different items out of n, and there are only n to pick from. Choose r at most equal to n, or use Permutation with Repetition if items may be reused.' },
  obj5: { question: 'How large can the numbers be?', answer: 'Small inputs are computed on the page. Larger ones are sent to the server, and a result beyond what can be represented is reported as too large. A full permutation accepts n up to 100, which has 158 digits.' },
};

const pageUrl = '/combinatorics/calculator';
const pageName = 'Combinatorics Calculator';
const schemas = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
      { '@type': 'ListItem', position: 2, name: 'Combinatorics', item: 'https://www.learnmathclass.com/combinatorics' },
      { '@type': 'ListItem', position: 3, name: pageName, item: `https://www.learnmathclass.com${pageUrl}` },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.keys(faqQuestions).map((key) => ({
      '@type': 'Question',
      name: faqQuestions[key].question,
      acceptedAnswer: { '@type': 'Answer', text: faqQuestions[key].answer },
    })),
  },
};


   return {
      props:{
         explanationsMapping,
          seoData: {
        title: "Combinatorics Calculator - Permutations & Combinations | Learn Math Class",
        description: "Free combinatorics calculator for permutations, combinations, and counting problems. Calculate factorials, arrangements, and selections with step-by-step solutions.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/calculator",
        name: "Combinatorics Calculator"
      },
      keyWords,
      navigationGroup,
      detailInstructions,
      demos,
      sectionsContent,
      faqQuestions,
      schemas,
       }
    }
   }

export default function CombinatoricsCalculatorPage({ seoData, explanationsMapping, keyWords, navigationGroup, detailInstructions, demos, sectionsContent, schemas }) {
     const searchParams = useSearchParams()
      const scenario = searchParams.get('scenario')
      const initialScenario = scenario ? parseInt(scenario) : 1

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.5}
    minHeight={384}
    renderText={processContent}
  >
    <CombinatoricsCalculator explanations={explanationsMapping} initialScenario={1}/>
  </ToolDemoPlayer>
);

const genericSections = [
  { id: 'choosing-a-scenario', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('choosing-a-scenario'), sectionsContent.obj1.content] },
  { id: 'entering-the-numbers', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('entering-the-numbers'), sectionsContent.obj2.content] },
  { id: 'calculating-and-reading-the-result', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('calculating-and-reading-the-result'), sectionsContent.obj3.content] },
  { id: 'the-explanation-panel', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('the-explanation-panel'), sectionsContent.obj4.content] },
  { id: 'permutations', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [sectionsContent.obj5.content] },
  { id: 'permutation-full', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [sectionsContent.obj6.content] },
  { id: 'permutation-with-identical-items', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
  { id: 'partial-permutation-without-repetition', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
  { id: 'permutation-with-repetition', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
  { id: 'circular-permutation', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
  { id: 'combinations-and-distributions', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
  { id: 'simple-combination', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [sectionsContent.obj12.content] },
  { id: 'partition-into-groups', title: sectionsContent.obj13.title, link: sectionsContent.obj13.link, content: [sectionsContent.obj13.content] },
  { id: 'weak-composition', title: sectionsContent.obj14.title, link: sectionsContent.obj14.link, content: [sectionsContent.obj14.content] },
  { id: 'strong-composition', title: sectionsContent.obj15.title, link: sectionsContent.obj15.link, content: [sectionsContent.obj15.content] },
  { id: 'distribution-into-cells', title: sectionsContent.obj16.title, link: sectionsContent.obj16.link, content: [sectionsContent.obj16.content] },
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
 <meta property="og:type" content="article" />
 <meta property="og:site_name" content="Learn Math Class" />

 <meta name="twitter:card" content="summary" />
 <meta name="twitter:title" content={seoData.title} />
 <meta name="twitter:description" content={seoData.description} />

 <meta name="robots" content="index, follow" />

 <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify({
       "@context": "https://schema.org",
       "@type": "WebPage",
       "name": seoData.name,
       "description": seoData.description,
       "keywords": seoData.keywords,
       "url": `https://www.learnmathclass.com${seoData.url}`,
       "dateModified": new Date().toISOString(),
       "inLanguage": "en-US",
       "mainEntity": {
         "@type": "Article",
         "name": seoData.name,
         "dateModified": new Date().toISOString(),
         "author": {
           "@type": "Organization",
           "name": "Learn Math Class"
         }
       }
     })
   }}
 />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
</Head>

   <style jsx>{`
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
       .layout-container > div:first-child,
       .layout-container > div:first-child *,
       :global([class*="vertical"]),
       :global([class*="vertical"]) * {
         position: static !important;
       }
     }
   `}</style>

   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
         side='right'
         // topOffset='65px'
         sidebarWidth='45px'
         panelWidth='300px'

         iconColor='white'
         panelBackgroundColor='#f2f2f2'/>
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Combinatorics Calculator</h1>
   <div style={{marginBottom:'20px'}}>
     <ExplanationDetails instructions={detailInstructions} title='How to use Combinatorics Calculator' />
   </div>
   <div className="layout-container">
     <div>
       <br/>
       <VerticalButtonGroup items={navigationGroup} width='250px' theme='lightBlue' isSticky={true} verticalOffset='200px' />
     </div>
     <div>
       <CombinatoricsCalculator
       explanations={explanationsMapping}
       initialScenario={initialScenario}/>
     </div>
   </div>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
