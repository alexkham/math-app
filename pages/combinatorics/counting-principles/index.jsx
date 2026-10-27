// // tables-optimized: v4 | 2026-06-03 | 2 tables (obj2 comparison, obj8 summary capstone)
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){

//   const keyWords = [
//     'counting principles',
//     'addition rule combinatorics',
//     'multiplication rule combinatorics',
//     'rule of sum',
//     'rule of product',
//     'complementary counting',
//     'double counting',
//     'pigeonhole principle',
//     'fundamental counting principle',
//     'combinatorics rules',
//     'counting techniques',
//     'counting methods',
//     'basic counting principles',
//     'combinatorial counting'
//   ]

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj2 — comparison: addition rule vs multiplication rule (the AND/OR foundational pair)
//   const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Aspect</th>
//       <th style="${tableHeaders.comparison}">Addition rule</th>
//       <th style="${tableHeaders.comparison}">Multiplication rule</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linguistic marker</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;or&quot; — method 1 OR method 2 OR …</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;and&quot; — step 1 AND step 2 AND …</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Structural condition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cases are mutually exclusive (no outcome belongs to two methods)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">steps are independent (count per step does not depend on earlier choices)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Formula</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m₁ + m₂ + … + m<sub>k</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m₁ × m₂ × … × m<sub>k</sub></td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/set-theory" style="${linkStyle}">Set-theory</a> identity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|A ∪ B| = |A| + |B| for disjoint A, B</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|A × B| = |A| · |B| (Cartesian product)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Example</td>
//       <td style="padding: 12px 15px; color: #34495e;">2 bus + 3 train + 4 taxi routes → 9 total</td>
//       <td style="padding: 12px 15px; color: #34495e;">3 mains × 2 drinks × 4 desserts → 24 meals</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj8 — summary capstone: all five principles in one reference card
//   const capstoneTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Principle</th>
//       <th style="${tableHeaders.summary}">Marker / form</th>
//       <th style="${tableHeaders.summary}">What it does</th>
//       <th style="${tableHeaders.summary}">Canonical example</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition rule</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;or&quot; across mutually exclusive cases</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum the counts of each case</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 + 3 + 4 = 9 route choices</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplication rule</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;and&quot; across independent steps</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply the step counts</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 × 2 × 4 = 24 lunch combos</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Complementary counting</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;at least one&quot; → count its negation &quot;none&quot;</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|A| = |U| − |U ∖ A|; subtract the complement</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">900 − 648 = 252 three-digit integers with a repeated digit</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Double counting</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count the same set two different ways</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">equate the two expressions → identity, not a number</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handshake lemma: Σ deg(v) = 2|E|</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Pigeonhole principle</td>
//       <td style="padding: 12px 15px; color: #34495e;">items &gt; containers</td>
//       <td style="padding: 12px 15px; color: #34495e;">at least one container holds ≥ ⌈n⁄k⌉ items (existence, not location)</td>
//       <td style="padding: 12px 15px; color: #34495e;">13 people, 12 months → two share a birth month</td>
//     </tr>
//   </tbody>
// </table>
// `

// //    const sectionsContent = {
// //   obj1: {
// //     title: `The Addition Rule`,
// //     content: `
// // The addition rule applies when a count splits into cases that cannot occur simultaneously. If an outcome can be achieved by method 1 in $m_1$ ways, by method 2 in $m_2$ ways, and so on through method $k$ in $m_k$ ways, with no outcome belonging to more than one method, then the total number of outcomes is
 
// // $$m_1 + m_2 + \\cdots + m_k.$$
 
// // The linguistic marker for the addition rule is the word **or** — pick method 1 OR method 2 OR method 3. Each "or" between mutually exclusive cases contributes its own count to the sum.
 
// // In the language of [set theory](!/set-theory), the rule is the cardinality identity $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$, generalized to any number of pairwise disjoint sets.
 
// // ## Example
 
// // A traveller can reach the city by 2 bus routes, by 3 train routes, or by 4 taxi routes. Since these options are mutually exclusive — one trip uses one mode of transport — the total number of route choices is
 
// // $$2 + 3 + 4 = 9.$$
 
// // ## The Mutual-Exclusion Condition
 
// // The rule requires that the cases be mutually exclusive. When two methods share outcomes, naive addition counts the shared outcomes twice. The systematic correction for this case is the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion), which extends the addition rule by alternating additions and subtractions of intersection sizes.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
 
// //   obj2: {
// //     title: `The Multiplication Rule`,
// //     content: `
// // The multiplication rule applies when an outcome is built from a sequence of independent steps, each contributing its own number of options. If step 1 has $m_1$ outcomes, step 2 has $m_2$ outcomes, and so on through step $k$ with $m_k$ outcomes, and the steps are independent, then the combined sequence has
 
// // $$m_1 \\times m_2 \\times \\cdots \\times m_k$$
 
// // possible outcomes.
 
// // The linguistic marker for the multiplication rule is the word **and** — choose step 1 AND step 2 AND step 3. Each "and" between independent steps multiplies the count.
 
// // In set-theoretic terms, the rule is the cardinality of the Cartesian product, $|A \\times B| = |A| \\cdot |B|$, extended to any finite number of factors.
 
// // ## Example
 
// // A lunch combo is built from 3 main courses, 2 drinks, and 4 desserts. Each main can be paired with each drink, and each pairing with each dessert, giving
 
// // $$3 \\times 2 \\times 4 = 24$$
 
// // possible meals.
 
// // ## The Independence Condition
 
// // The rule requires that the number of options at each step not depend on the choices made at earlier steps. When the option count at a later step shifts based on earlier choices, the multiplication rule does not apply directly and the count must be broken down further — usually by splitting into cases via the addition rule.
 
// // The multiplication rule is the engine behind every [permutation](!/combinatorics/permutations) formula. Arranging $n$ distinct items in a line uses the rule with decreasing counts at each step: $n$ choices for the first position AND $(n-1)$ for the second AND $(n-2)$ for the third, down to $1$, yielding $n!$ total arrangements. [Combinations](!/combinatorics/combinations) build on the same product, with a division step to remove the ordering.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
 
// //   obj3: {
// //     title: `Complementary Counting`,
// //     content: `
// // Some counting problems are easier to solve in reverse. Counting the cases that fail a condition can be significantly simpler than counting the cases that satisfy it, especially when the condition has the form "at least one" — its negation, "none", often collapses into a single tractable count.
 
// // If $U$ is the universe of all outcomes and $A \\subseteq U$ is the set of desired outcomes, then
 
// // $$|A| = |U| - |U \\setminus A|.$$
 
// // The strategy is to count the total, count the complement, and subtract.
 
// // ## Example
 
// // The number of arrangements of $n$ distinct items in which at least one item ends up in a specific designated position is awkward to count directly — multiple items can satisfy the condition independently, and the cases overlap. The complementary count — arrangements in which no item is in that position — partitions cleanly: the designated position holds one of the $n-1$ non-designated items, and the remaining $n-1$ items fill the rest. Subtracting this count from $n!$ gives the desired number.
 
// // ## Structural Note
 
// // In set-theoretic notation, complementary counting expresses $|A| = |U| - |A^c|$, where $A^c$ is the complement of $A$ in the universe. This is the addition rule applied to the partition $A \\cup A^c = U$ — complementary counting is a strategic application of the addition rule rather than an independent principle.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
 
// //   obj4: {
// //     title: `Double Counting`,
// //     content: `
// // Double counting is a proof technique rather than a counting formula. The set in question is counted in two genuinely different ways; the two resulting expressions both equal the size of the set, so they equal each other. The output is an identity, not a numerical count.
 
// // If $|S|$ can be expressed as $f(n)$ by one argument and as $g(n)$ by another argument, then
 
// // $$f(n) = g(n).$$
 
// // ## The Handshake Lemma
 
// // A canonical illustration: in a group of people who have shaken hands in various pairings, the sum of the number of hands each person shook equals twice the total number of handshakes. The reason is that each handshake is counted once from each participant&apos;s perspective — the same set (handshakes) counted two ways. In graph theory this becomes $\\sum_{v} \\deg(v) = 2|E|$, where the left side sums degrees over all vertices and the right side counts each edge from both endpoints.
 
// // ## Combinatorial Identities
 
// // Many of the identities involving the [binomial coefficient](!/combinatorics/binomial-coefficient) — including Vandermonde&apos;s identity and the hockey stick identity — are most naturally proved by double counting. A subset count is interpreted in two ways: by selecting members directly, and by partitioning the selection into stages or cases. The two expressions for the same subset count then equate to produce the identity. Algebraic proofs of these identities exist, but the combinatorial proofs are typically shorter and more illuminating.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
 
// //   obj5: {
// //     title: `The Pigeonhole Principle`,
// //     content: `
// // The pigeonhole principle does not count outcomes — it guarantees the existence of a particular kind of outcome. The statement is existential: it certifies that something must occur without identifying where.
 
// // ## Basic Form
 
// // If $n$ items are distributed among $k$ containers and $n > k$, then at least one container holds at least two items.
 
// // The reasoning is direct: if every container held at most one item, the total number of items would be at most $k$, contradicting $n > k$.
 
// // ## Generalized Form
 
// // If $n$ items are distributed among $k$ containers, then at least one container holds at least $\\lceil n/k \\rceil$ items, where $\\lceil \\cdot \\rceil$ denotes the ceiling function. The basic form is the case $n = k+1$, which forces $\\lceil n/k \\rceil = 2$.
 
// // ## Examples
 
// // In any group of 13 people, at least two share a birth month — the 13 people are distributed among 12 months, so the basic form applies.
 
// // Among any 5 integers chosen from $\\{1, 2, \\ldots, 8\\}$, at least two come from one of the four pairs $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, \\{7,8\\}$ — 5 items distributed into 4 pairs forces at least one pair to contain two of the chosen integers, and those two differ by exactly 1.
 
// // ## One-Sided Nature
 
// // The pigeonhole principle is asymmetric. It proves that a collision must occur, but says nothing about which container holds it or how to find it. The principle yields existence proofs in number theory, geometry, and combinatorics, often in settings where direct construction is hard or impossible.
 
// // In the language of [functions](!/functions), the principle states that no injection exists from a finite set into a strictly smaller finite set — any function from a larger finite set to a smaller one must map at least two elements of the domain to the same target.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
 
// //   obj6: {
// //     title: `Putting the Principles Together`,
// //     content: `
// // Most counting problems are not solved by applying a single principle. They require chaining several — addition to split a problem into cases, multiplication within each case to count its outcomes, complementary counting to simplify a case that is easier in reverse.
 
// // ## A Worked Example
 
// // Count the number of 3-digit positive integers whose digits are all distinct.
 
// // The first digit cannot be 0 (or the number would not be a 3-digit number), so it has 9 choices. The second digit can be any digit except the one already used, giving 9 remaining choices (now including 0). The third digit can be any digit except the two already used, giving 8 choices. By the multiplication rule:
 
// // $$9 \\times 9 \\times 8 = 648.$$
 
// // Now consider the complementary question: how many 3-digit positive integers contain at least one repeated digit?
 
// // The total number of 3-digit positive integers is $9 \\times 10 \\times 10 = 900$ — 9 choices for the first digit and 10 each for the other two. Subtracting the 648 with all-distinct digits gives
 
// // $$900 - 648 = 252$$
 
// // with at least one repetition.
 
// // A direct count of the "at least one repetition" set would require case analysis: exactly two digits equal and one different, all three digits equal, and the various positional arrangements. The complementary route converts the multi-case problem into a single subtraction.
 
// // ## When Each Principle Applies
 
// // The addition rule splits a count across mutually exclusive cases. The multiplication rule builds a count from independent steps. Complementary counting reframes a hard "at least one" problem as a simpler "none" problem and subtracts. Double counting produces identities by counting the same set two different ways. The pigeonhole principle proves that a configuration must exist when items outnumber containers.
 
// // These five principles together cover the logical foundation of every formula that appears in the rest of the section.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
 
// //   obj7: {
// //     title: `Related Concepts`,
// //     content: `
// // • [Set Theory](!/set-theory) — the language of unions, intersections, complements, and Cartesian products that the counting rules formalize as cardinality identities.
 
// // • [Functions](!/functions) — the pigeonhole principle is the statement that no injection exists from a finite set into a strictly smaller finite set.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj8: {
// //     title: `Counting Principles at a Glance`,
// //     content: `
// // The page covered five logical rules behind every counting argument: the addition and multiplication rules for combining counts, complementary counting for &quot;at least one&quot; problems, double counting as a proof technique for identities, and the pigeonhole principle for existence guarantees. The table below collects each principle with its linguistic marker, its purpose, and a canonical example.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
// // };

// // formulas-optimized: v1 | 2026-06-11 | 6 callouts (obj1, obj2, obj3, obj4, obj5 ×2)
// const sectionsContent = {
//   obj1: {
//     title: `The Addition Rule`,
//     content: `
// The addition rule applies when a count splits into cases that cannot occur simultaneously. If an outcome can be achieved by method 1 in $m_1$ ways, by method 2 in $m_2$ ways, and so on through method $k$ in $m_k$ ways, with no outcome belonging to more than one method, then the total number of outcomes is
 
// @academic[formula_callout:Addition Rule
// $$|A_1 \\cup A_2 \\cup \\cdots \\cup A_k| = |A_1| + |A_2| + \\cdots + |A_k|, \\quad A_i \\cap A_j = \\emptyset \\text{ for } i \\neq j.$$
// /combinatorics/formulas#addition_rule]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@
 
// The linguistic marker for the addition rule is the word **or** — pick method 1 OR method 2 OR method 3. Each "or" between mutually exclusive cases contributes its own count to the sum.
 
// In the language of [set theory](!/set-theory), the rule is the cardinality identity $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$, generalized to any number of pairwise disjoint sets.
 
// ## Example
 
// A traveller can reach the city by 2 bus routes, by 3 train routes, or by 4 taxi routes. Since these options are mutually exclusive — one trip uses one mode of transport — the total number of route choices is
 
// $$2 + 3 + 4 = 9.$$
 
// ## The Mutual-Exclusion Condition
 
// The rule requires that the cases be mutually exclusive. When two methods share outcomes, naive addition counts the shared outcomes twice. The systematic correction for this case is the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion), which extends the addition rule by alternating additions and subtractions of intersection sizes.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj2: {
//     title: `The Multiplication Rule`,
//     content: `
// The multiplication rule applies when an outcome is built from a sequence of independent steps, each contributing its own number of options. If step 1 has $m_1$ outcomes, step 2 has $m_2$ outcomes, and so on through step $k$ with $m_k$ outcomes, and the steps are independent, then the combined sequence has
 
// @academic[formula_callout:Multiplication Rule
// $$|A_1 \\times A_2 \\times \\cdots \\times A_k| = |A_1| \\cdot |A_2| \\cdots |A_k| = m_1 \\cdot m_2 \\cdots m_k.$$
// /combinatorics/formulas#multiplication_rule]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@
 
// possible outcomes.
 
// The linguistic marker for the multiplication rule is the word **and** — choose step 1 AND step 2 AND step 3. Each "and" between independent steps multiplies the count.
 
// In set-theoretic terms, the rule is the cardinality of the Cartesian product, $|A \\times B| = |A| \\cdot |B|$, extended to any finite number of factors.
 
// ## Example
 
// A lunch combo is built from 3 main courses, 2 drinks, and 4 desserts. Each main can be paired with each drink, and each pairing with each dessert, giving
 
// $$3 \\times 2 \\times 4 = 24$$
 
// possible meals.
 
// ## The Independence Condition
 
// The rule requires that the number of options at each step not depend on the choices made at earlier steps. When the option count at a later step shifts based on earlier choices, the multiplication rule does not apply directly and the count must be broken down further — usually by splitting into cases via the addition rule.
 
// The multiplication rule is the engine behind every [permutation](!/combinatorics/permutations) formula. Arranging $n$ distinct items in a line uses the rule with decreasing counts at each step: $n$ choices for the first position AND $(n-1)$ for the second AND $(n-2)$ for the third, down to $1$, yielding $n!$ total arrangements. [Combinations](!/combinatorics/combinations) build on the same product, with a division step to remove the ordering.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj3: {
//     title: `Complementary Counting`,
//     content: `
// Some counting problems are easier to solve in reverse. Counting the cases that fail a condition can be significantly simpler than counting the cases that satisfy it, especially when the condition has the form "at least one" — its negation, "none", often collapses into a single tractable count.
 
// If $U$ is the universe of all outcomes and $A \\subseteq U$ is the set of desired outcomes, then
 
// @academic[formula_callout:Complementary Counting
// $$|A| = |U| - |U \\setminus A| = |U| - |A^c|.$$
// /combinatorics/formulas#complementary_counting]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@
 
// The strategy is to count the total, count the complement, and subtract.
 
// ## Example
 
// The number of arrangements of $n$ distinct items in which at least one item ends up in a specific designated position is awkward to count directly — multiple items can satisfy the condition independently, and the cases overlap. The complementary count — arrangements in which no item is in that position — partitions cleanly: the designated position holds one of the $n-1$ non-designated items, and the remaining $n-1$ items fill the rest. Subtracting this count from $n!$ gives the desired number.
 
// ## Structural Note
 
// In [set-theoretic notation](!/math-symbols/set-theory), complementary counting expresses $|A| = |U| - |A^c|$, where $A^c$ is the complement of $A$ in the universe. This is the addition rule applied to the partition $A \\cup A^c = U$ — complementary counting is a strategic application of the addition rule rather than an independent principle.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj4: {
//     title: `Double Counting`,
//     content: `
// Double counting is a proof technique rather than a counting formula. The set in question is counted in two genuinely different ways; the two resulting expressions both equal the size of the set, so they equal each other. The output is an identity, not a numerical count.
 
// If $|S|$ can be expressed as $f(n)$ by one argument and as $g(n)$ by another argument, then
 
// @academic[formula_callout:Double Counting
// $$|S| = f(n) = g(n) \\implies f(n) = g(n).$$
// /combinatorics/formulas#double_counting]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@
 
// ## The Handshake Lemma
 
// A canonical illustration: in a group of people who have shaken hands in various pairings, the sum of the number of hands each person shook equals twice the total number of handshakes. The reason is that each handshake is counted once from each participant&apos;s perspective — the same set (handshakes) counted two ways. In graph theory this becomes $\\sum_{v} \\deg(v) = 2|E|$, where the left side sums degrees over all vertices and the right side counts each edge from both endpoints.
 
// ## Combinatorial Identities
 
// Many of the identities involving the [binomial coefficient](!/combinatorics/binomial-coefficient) — including Vandermonde&apos;s identity and the hockey stick identity — are most naturally proved by double counting. A subset count is interpreted in two ways: by selecting members directly, and by partitioning the selection into stages or cases. The two expressions for the same subset count then equate to produce the identity. Algebraic proofs of these identities exist, but the combinatorial proofs are typically shorter and more illuminating.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj5: {
//     title: `The Pigeonhole Principle`,
//     content: `
// The pigeonhole principle does not count outcomes — it guarantees the existence of a particular kind of outcome. The statement is existential: it certifies that something must occur without identifying where.
 
// ## Basic Form
 
// If $n$ items are distributed among $k$ containers and $n > k$, then at least one container holds at least two items.

// Formally:

// @academic[formula_callout:Pigeonhole Principle
// $$n > k \\implies \\exists \\text{ container with } \\ge 2 \\text{ items}.$$
// /combinatorics/formulas#pigeonhole_principle]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@
 
// The reasoning is direct: if every container held at most one item, the total number of items would be at most $k$, contradicting $n > k$.
 
// ## Generalized Form
 
// If $n$ items are distributed among $k$ containers, then at least one container holds at least $\\lceil n/k \\rceil$ items, where $\\lceil \\cdot \\rceil$ denotes the ceiling function. The basic form is the case $n = k+1$, which forces $\\lceil n/k \\rceil = 2$.

// Formally:

// @academic[formula_callout:Pigeonhole Principle (Generalized)
// $$n \\text{ items into } k \\text{ containers} \\implies \\exists \\text{ container with } \\ge \\lceil n/k \\rceil \\text{ items}.$$
// /combinatorics/formulas#pigeonhole_principle_generalized]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@
 
// ## Examples
 
// In any group of 13 people, at least two share a birth month — the 13 people are distributed among 12 months, so the basic form applies.
 
// Among any 5 integers chosen from $\\{1, 2, \\ldots, 8\\}$, at least two come from one of the four pairs $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, \\{7,8\\}$ — 5 items distributed into 4 pairs forces at least one pair to contain two of the chosen integers, and those two differ by exactly 1.
 
// ## One-Sided Nature
 
// The pigeonhole principle is asymmetric. It proves that a collision must occur, but says nothing about which container holds it or how to find it. The principle yields existence proofs in number theory, geometry, and combinatorics, often in settings where direct construction is hard or impossible.
 
// In the language of [functions](!/functions), the principle states that no injection exists from a finite set into a strictly smaller finite set — any function from a larger finite set to a smaller one must map at least two elements of the domain to the same target.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj6: {
//     title: `Putting the Principles Together`,
//     content: `
// Most counting problems are not solved by applying a single principle. They require chaining several — addition to split a problem into cases, multiplication within each case to count its outcomes, complementary counting to simplify a case that is easier in reverse.
 
// ## A Worked Example
 
// Count the number of 3-digit positive integers whose digits are all distinct.
 
// The first digit cannot be 0 (or the number would not be a 3-digit number), so it has 9 choices. The second digit can be any digit except the one already used, giving 9 remaining choices (now including 0). The third digit can be any digit except the two already used, giving 8 choices. By the multiplication rule:
 
// $$9 \\times 9 \\times 8 = 648.$$
 
// Now consider the complementary question: how many 3-digit positive integers contain at least one repeated digit?
 
// The total number of 3-digit positive integers is $9 \\times 10 \\times 10 = 900$ — 9 choices for the first digit and 10 each for the other two. Subtracting the 648 with all-distinct digits gives
 
// $$900 - 648 = 252$$
 
// with at least one repetition.
 
// A direct count of the "at least one repetition" set would require case analysis: exactly two digits equal and one different, all three digits equal, and the various positional arrangements. The complementary route converts the multi-case problem into a single subtraction.
 
// ## When Each Principle Applies
 
// The addition rule splits a count across mutually exclusive cases. The multiplication rule builds a count from independent steps. Complementary counting reframes a hard "at least one" problem as a simpler "none" problem and subtracts. Double counting produces identities by counting the same set two different ways. The pigeonhole principle proves that a configuration must exist when items outnumber containers.
 
// These five principles together cover the logical foundation of every formula that appears in the rest of the section.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj7: {
//     title: `Related Concepts`,
//     content: `
// • [Set Theory](!/set-theory) — the language of unions, intersections, complements, and Cartesian products that the counting rules formalize as cardinality identities.
 
// • [Functions](!/functions) — the pigeonhole principle is the statement that no injection exists from a finite set into a strictly smaller finite set.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Counting Principles at a Glance`,
//     content: `
// The page covered five logical rules behind every counting argument: the addition and multiplication rules for combining counts, complementary counting for &quot;at least one&quot; problems, double counting as a proof technique for identities, and the pigeonhole principle for existence guarantees. The table below collects each principle with its linguistic marker, its purpose, and a canonical example.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
// };

// const introContent = {
//   id: 'intro',
//   title: `The Logic Beneath the Formulas`,
//   content: `
// Before any specific formula in combinatorics — before permutations, combinations, or the binomial theorem — there are a small number of logical rules that govern how counts combine. Every counting argument in the section, however elaborate, is a structured application of these rules.
 
// Two of them are foundational. The addition rule applies when a count splits into mutually exclusive cases; the multiplication rule applies when an outcome is built from a sequence of independent steps. Three further principles extend or vary these ideas: complementary counting (count what fails the condition and subtract), double counting (count the same set two ways and equate), and the pigeonhole principle (more items than containers forces a repeat).
 
// Each principle answers a structural question about a counting problem rather than computing a specific number. Recognizing which principle applies is the first step in any counting argument.
// `,
// };

// const faqQuestions = {
//   obj1: {
//     question: "What are the basic counting principles in combinatorics?",
//     answer: "The basic counting principles are the addition rule, the multiplication rule, complementary counting, double counting, and the pigeonhole principle. Together they form the logical foundation behind every counting formula, including permutations, combinations, and binomial identities."
//   },
//   obj2: {
//     question: "What is the difference between the addition rule and the multiplication rule?",
//     answer: "The addition rule applies when a count splits into mutually exclusive cases (the linguistic marker is 'or') and totals the case counts. The multiplication rule applies when an outcome is built from a sequence of independent steps (the marker is 'and') and multiplies the step counts."
//   },
//   obj3: {
//     question: "What is complementary counting?",
//     answer: "Complementary counting computes |A| as |U| - |Aᶜ|, counting the total and subtracting the complement. It is most useful when the condition has the form 'at least one', since its negation 'none' typically partitions into a single clean case rather than overlapping subcases."
//   },
//   obj4: {
//     question: "What does the pigeonhole principle state?",
//     answer: "If n items are distributed among k containers and n > k, at least one container holds at least two items. The generalized form states that at least one container holds at least ⌈n/k⌉ items. The principle proves existence — it does not identify which container holds the collision."
//   },
//   obj5: {
//     question: "When do you use double counting?",
//     answer: "Double counting is used to prove combinatorial identities. The same set is counted in two genuinely different ways, and the two resulting expressions are equated. This produces identities such as the handshake lemma and many binomial-coefficient identities including Vandermonde's identity."
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Counting Principles in Combinatorics",
//     "description": "Counting principles of combinatorics: addition rule, multiplication rule, complementary counting, double counting, and the pigeonhole principle explained.",
//     "url": "https://www.learnmathclass.com/combinatorics/counting-principles",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Counting Principles"
//     },
//     "teaches": [
//       "Addition rule for mutually exclusive cases",
//       "Multiplication rule for sequential independent steps",
//       "Complementary counting strategy for 'at least one' problems",
//       "Double counting as a proof technique for combinatorial identities",
//       "Pigeonhole principle in basic and generalized form",
//       "Combining counting principles in multi-step problems"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Combinatorics",
//         "item": "https://www.learnmathclass.com/combinatorics"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Counting Principles",
//         "item": "https://www.learnmathclass.com/combinatorics/counting-principles"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          obj2Table,
//          capstoneTable,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Counting Principles in Combinatorics | Learn Math Class",
//         description: "Counting principles of combinatorics: addition rule, multiplication rule, complementary counting, double counting, and the pigeonhole principle explained.",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics/counting-principles",
//          name: "Counting Principles in Combinatorics"
//       },
        
//        }
//     }
//    }

// export default function CountingPrinciplesPage({seoData, sectionsContent, introContent, obj2Table, capstoneTable, faqQuestions, schemas}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//     // {
//     //     id:'0',
//     //     title:sectionsContent.obj0.title,
//     //     link:sectionsContent.obj0.link,
//     //     content:[
//     //       sectionsContent.obj0.content,
//     //     ]
//     // },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//           <div key={'obj2-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj2Table }} />,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//           <div key={'capstone-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
//         ]
//     },
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Counting Principles</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


// tables-optimized: v4 | 2026-06-03 | 2 tables (obj2 comparison, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import distributionIntoCellsDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/distributionIntoCellsDiagrams'
import renderCountTree from '@/app/utils/illustrations/combinatorics/counting/countTree'


export async function getStaticProps(){

  const keyWords = [
    'counting principles',
    'addition rule combinatorics',
    'multiplication rule combinatorics',
    'rule of sum',
    'rule of product',
    'complementary counting',
    'double counting',
    'pigeonhole principle',
    'fundamental counting principle',
    'combinatorics rules',
    'counting techniques',
    'counting methods',
    'basic counting principles',
    'combinatorial counting'
  ]

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — comparison: addition rule vs multiplication rule (the AND/OR foundational pair)
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Addition rule</th>
      <th style="${tableHeaders.comparison}">Multiplication rule</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linguistic marker</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;or&quot; — method 1 OR method 2 OR …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;and&quot; — step 1 AND step 2 AND …</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Structural condition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cases are mutually exclusive (no outcome belongs to two methods)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">steps are independent (count per step does not depend on earlier choices)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Formula</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m₁ + m₂ + … + m<sub>k</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m₁ × m₂ × … × m<sub>k</sub></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/set-theory" style="${linkStyle}">Set-theory</a> identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|A ∪ B| = |A| + |B| for disjoint A, B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|A × B| = |A| · |B| (Cartesian product)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Example</td>
      <td style="padding: 12px 15px; color: #34495e;">2 bus + 3 train + 4 taxi routes → 9 total</td>
      <td style="padding: 12px 15px; color: #34495e;">3 mains × 2 drinks × 4 desserts → 24 meals</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: all five principles in one reference card
  const capstoneTable = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Principle</th>
      <th style="${tableHeaders.summary}">Marker / form</th>
      <th style="${tableHeaders.summary}">What it does</th>
      <th style="${tableHeaders.summary}">Canonical example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;or&quot; across mutually exclusive cases</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum the counts of each case</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 + 3 + 4 = 9 route choices</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiplication rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;and&quot; across independent steps</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply the step counts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 × 2 × 4 = 24 lunch combos</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Complementary counting</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;at least one&quot; → count its negation &quot;none&quot;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|A| = |U| − |U ∖ A|; subtract the complement</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">900 − 648 = 252 three-digit integers with a repeated digit</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Double counting</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count the same set two different ways</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">equate the two expressions → identity, not a number</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handshake lemma: Σ deg(v) = 2|E|</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Pigeonhole principle</td>
      <td style="padding: 12px 15px; color: #34495e;">items &gt; containers</td>
      <td style="padding: 12px 15px; color: #34495e;">at least one container holds ≥ ⌈n⁄k⌉ items (existence, not location)</td>
      <td style="padding: 12px 15px; color: #34495e;">13 people, 12 months → two share a birth month</td>
    </tr>
  </tbody>
</table>
`

//    const sectionsContent = {
//   obj1: {
//     title: `The Addition Rule`,
//     content: `
// The addition rule applies when a count splits into cases that cannot occur simultaneously. If an outcome can be achieved by method 1 in $m_1$ ways, by method 2 in $m_2$ ways, and so on through method $k$ in $m_k$ ways, with no outcome belonging to more than one method, then the total number of outcomes is
 
// $$m_1 + m_2 + \\cdots + m_k.$$
 
// The linguistic marker for the addition rule is the word **or** — pick method 1 OR method 2 OR method 3. Each "or" between mutually exclusive cases contributes its own count to the sum.
 
// In the language of [set theory](!/set-theory), the rule is the cardinality identity $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$, generalized to any number of pairwise disjoint sets.
 
// ## Example
 
// A traveller can reach the city by 2 bus routes, by 3 train routes, or by 4 taxi routes. Since these options are mutually exclusive — one trip uses one mode of transport — the total number of route choices is
 
// $$2 + 3 + 4 = 9.$$
 
// ## The Mutual-Exclusion Condition
 
// The rule requires that the cases be mutually exclusive. When two methods share outcomes, naive addition counts the shared outcomes twice. The systematic correction for this case is the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion), which extends the addition rule by alternating additions and subtractions of intersection sizes.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj2: {
//     title: `The Multiplication Rule`,
//     content: `
// The multiplication rule applies when an outcome is built from a sequence of independent steps, each contributing its own number of options. If step 1 has $m_1$ outcomes, step 2 has $m_2$ outcomes, and so on through step $k$ with $m_k$ outcomes, and the steps are independent, then the combined sequence has
 
// $$m_1 \\times m_2 \\times \\cdots \\times m_k$$
 
// possible outcomes.
 
// The linguistic marker for the multiplication rule is the word **and** — choose step 1 AND step 2 AND step 3. Each "and" between independent steps multiplies the count.
 
// In set-theoretic terms, the rule is the cardinality of the Cartesian product, $|A \\times B| = |A| \\cdot |B|$, extended to any finite number of factors.
 
// ## Example
 
// A lunch combo is built from 3 main courses, 2 drinks, and 4 desserts. Each main can be paired with each drink, and each pairing with each dessert, giving
 
// $$3 \\times 2 \\times 4 = 24$$
 
// possible meals.
 
// ## The Independence Condition
 
// The rule requires that the number of options at each step not depend on the choices made at earlier steps. When the option count at a later step shifts based on earlier choices, the multiplication rule does not apply directly and the count must be broken down further — usually by splitting into cases via the addition rule.
 
// The multiplication rule is the engine behind every [permutation](!/combinatorics/permutations) formula. Arranging $n$ distinct items in a line uses the rule with decreasing counts at each step: $n$ choices for the first position AND $(n-1)$ for the second AND $(n-2)$ for the third, down to $1$, yielding $n!$ total arrangements. [Combinations](!/combinatorics/combinations) build on the same product, with a division step to remove the ordering.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj3: {
//     title: `Complementary Counting`,
//     content: `
// Some counting problems are easier to solve in reverse. Counting the cases that fail a condition can be significantly simpler than counting the cases that satisfy it, especially when the condition has the form "at least one" — its negation, "none", often collapses into a single tractable count.
 
// If $U$ is the universe of all outcomes and $A \\subseteq U$ is the set of desired outcomes, then
 
// $$|A| = |U| - |U \\setminus A|.$$
 
// The strategy is to count the total, count the complement, and subtract.
 
// ## Example
 
// The number of arrangements of $n$ distinct items in which at least one item ends up in a specific designated position is awkward to count directly — multiple items can satisfy the condition independently, and the cases overlap. The complementary count — arrangements in which no item is in that position — partitions cleanly: the designated position holds one of the $n-1$ non-designated items, and the remaining $n-1$ items fill the rest. Subtracting this count from $n!$ gives the desired number.
 
// ## Structural Note
 
// In set-theoretic notation, complementary counting expresses $|A| = |U| - |A^c|$, where $A^c$ is the complement of $A$ in the universe. This is the addition rule applied to the partition $A \\cup A^c = U$ — complementary counting is a strategic application of the addition rule rather than an independent principle.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj4: {
//     title: `Double Counting`,
//     content: `
// Double counting is a proof technique rather than a counting formula. The set in question is counted in two genuinely different ways; the two resulting expressions both equal the size of the set, so they equal each other. The output is an identity, not a numerical count.
 
// If $|S|$ can be expressed as $f(n)$ by one argument and as $g(n)$ by another argument, then
 
// $$f(n) = g(n).$$
 
// ## The Handshake Lemma
 
// A canonical illustration: in a group of people who have shaken hands in various pairings, the sum of the number of hands each person shook equals twice the total number of handshakes. The reason is that each handshake is counted once from each participant&apos;s perspective — the same set (handshakes) counted two ways. In graph theory this becomes $\\sum_{v} \\deg(v) = 2|E|$, where the left side sums degrees over all vertices and the right side counts each edge from both endpoints.
 
// ## Combinatorial Identities
 
// Many of the identities involving the [binomial coefficient](!/combinatorics/binomial-coefficient) — including Vandermonde&apos;s identity and the hockey stick identity — are most naturally proved by double counting. A subset count is interpreted in two ways: by selecting members directly, and by partitioning the selection into stages or cases. The two expressions for the same subset count then equate to produce the identity. Algebraic proofs of these identities exist, but the combinatorial proofs are typically shorter and more illuminating.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj5: {
//     title: `The Pigeonhole Principle`,
//     content: `
// The pigeonhole principle does not count outcomes — it guarantees the existence of a particular kind of outcome. The statement is existential: it certifies that something must occur without identifying where.
 
// ## Basic Form
 
// If $n$ items are distributed among $k$ containers and $n > k$, then at least one container holds at least two items.
 
// The reasoning is direct: if every container held at most one item, the total number of items would be at most $k$, contradicting $n > k$.
 
// ## Generalized Form
 
// If $n$ items are distributed among $k$ containers, then at least one container holds at least $\\lceil n/k \\rceil$ items, where $\\lceil \\cdot \\rceil$ denotes the ceiling function. The basic form is the case $n = k+1$, which forces $\\lceil n/k \\rceil = 2$.
 
// ## Examples
 
// In any group of 13 people, at least two share a birth month — the 13 people are distributed among 12 months, so the basic form applies.
 
// Among any 5 integers chosen from $\\{1, 2, \\ldots, 8\\}$, at least two come from one of the four pairs $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, \\{7,8\\}$ — 5 items distributed into 4 pairs forces at least one pair to contain two of the chosen integers, and those two differ by exactly 1.
 
// ## One-Sided Nature
 
// The pigeonhole principle is asymmetric. It proves that a collision must occur, but says nothing about which container holds it or how to find it. The principle yields existence proofs in number theory, geometry, and combinatorics, often in settings where direct construction is hard or impossible.
 
// In the language of [functions](!/functions), the principle states that no injection exists from a finite set into a strictly smaller finite set — any function from a larger finite set to a smaller one must map at least two elements of the domain to the same target.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj6: {
//     title: `Putting the Principles Together`,
//     content: `
// Most counting problems are not solved by applying a single principle. They require chaining several — addition to split a problem into cases, multiplication within each case to count its outcomes, complementary counting to simplify a case that is easier in reverse.
 
// ## A Worked Example
 
// Count the number of 3-digit positive integers whose digits are all distinct.
 
// The first digit cannot be 0 (or the number would not be a 3-digit number), so it has 9 choices. The second digit can be any digit except the one already used, giving 9 remaining choices (now including 0). The third digit can be any digit except the two already used, giving 8 choices. By the multiplication rule:
 
// $$9 \\times 9 \\times 8 = 648.$$
 
// Now consider the complementary question: how many 3-digit positive integers contain at least one repeated digit?
 
// The total number of 3-digit positive integers is $9 \\times 10 \\times 10 = 900$ — 9 choices for the first digit and 10 each for the other two. Subtracting the 648 with all-distinct digits gives
 
// $$900 - 648 = 252$$
 
// with at least one repetition.
 
// A direct count of the "at least one repetition" set would require case analysis: exactly two digits equal and one different, all three digits equal, and the various positional arrangements. The complementary route converts the multi-case problem into a single subtraction.
 
// ## When Each Principle Applies
 
// The addition rule splits a count across mutually exclusive cases. The multiplication rule builds a count from independent steps. Complementary counting reframes a hard "at least one" problem as a simpler "none" problem and subtracts. Double counting produces identities by counting the same set two different ways. The pigeonhole principle proves that a configuration must exist when items outnumber containers.
 
// These five principles together cover the logical foundation of every formula that appears in the rest of the section.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj7: {
//     title: `Related Concepts`,
//     content: `
// • [Set Theory](!/set-theory) — the language of unions, intersections, complements, and Cartesian products that the counting rules formalize as cardinality identities.
 
// • [Functions](!/functions) — the pigeonhole principle is the statement that no injection exists from a finite set into a strictly smaller finite set.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Counting Principles at a Glance`,
//     content: `
// The page covered five logical rules behind every counting argument: the addition and multiplication rules for combining counts, complementary counting for &quot;at least one&quot; problems, double counting as a proof technique for identities, and the pigeonhole principle for existence guarantees. The table below collects each principle with its linguistic marker, its purpose, and a canonical example.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
// };

// formulas-optimized: v1 | 2026-06-11 | 6 callouts (obj1, obj2, obj3, obj4, obj5 ×2)
const sectionsContent = {
  obj1: {
    title: `The Addition Rule`,
    content: `
The addition rule applies when a count splits into cases that cannot occur simultaneously. If an outcome can be achieved by method 1 in $m_1$ ways, by method 2 in $m_2$ ways, and so on through method $k$ in $m_k$ ways, with no outcome belonging to more than one method, then the total number of outcomes is
 
@academic[formula_callout:Addition Rule
$$|A_1 \\cup A_2 \\cup \\cdots \\cup A_k| = |A_1| + |A_2| + \\cdots + |A_k|, \\quad A_i \\cap A_j = \\emptyset \\text{ for } i \\neq j.$$
/combinatorics/formulas#addition_rule]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@
 
The linguistic marker for the addition rule is the word **or** — pick method 1 OR method 2 OR method 3. Each "or" between mutually exclusive cases contributes its own count to the sum.
 
In the language of [set theory](!/set-theory), the rule is the cardinality identity $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$, generalized to any number of pairwise disjoint sets.
 
@academic[example:Example
 
A traveller can reach the city by 2 bus routes, by 3 train routes, or by 4 taxi routes. Since these options are mutually exclusive — one trip uses one mode of transport — the total number of route choices is
 
$$2 + 3 + 4 = 9.$$]@
 
## The Mutual-Exclusion Condition
 
The rule requires that the cases be mutually exclusive. When two methods share outcomes, naive addition counts the shared outcomes twice. The systematic correction for this case is the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion), which extends the addition rule by alternating additions and subtractions of intersection sizes.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj2: {
    title: `The Multiplication Rule`,
    content: `
The multiplication rule applies when an outcome is built from a sequence of independent steps, each contributing its own number of options. If step 1 has $m_1$ outcomes, step 2 has $m_2$ outcomes, and so on through step $k$ with $m_k$ outcomes, and the steps are independent, then the combined sequence has
 
@academic[formula_callout:Multiplication Rule
$$|A_1 \\times A_2 \\times \\cdots \\times A_k| = |A_1| \\cdot |A_2| \\cdots |A_k| = m_1 \\cdot m_2 \\cdots m_k.$$
/combinatorics/formulas#multiplication_rule]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@
 
possible outcomes.
 
The linguistic marker for the multiplication rule is the word **and** — choose step 1 AND step 2 AND step 3. Each "and" between independent steps multiplies the count.
 
In set-theoretic terms, the rule is the cardinality of the Cartesian product, $|A \\times B| = |A| \\cdot |B|$, extended to any finite number of factors.
 
@academic[example:Example
 
A lunch combo is built from 3 main courses, 2 drinks, and 4 desserts. Each main can be paired with each drink, and each pairing with each dessert, giving
 
$$3 \\times 2 \\times 4 = 24$$
 
possible meals.]@

@academic[pitfall,aside:true,width:35%:Adding the steps
Adding the menu counts, $3 + 2 + 4 = 9$, counts dishes, not meals: a meal is a main and a drink and a dessert. Each of the $3 \\times 2 = 6$ main-and-drink pairs takes any of $4$ desserts, so there are $3 \\times 2 \\times 4 = 24$ meals.
[Read more](!#pitfalls)]@

Here every outcome uses all three steps: a meal has one main, one drink and one dessert. The traveller in the addition rule makes a single choice instead, and each trip uses exactly one mode of transport. Whether an outcome is put together from several choices or picked from one of several separate lists is what decides between multiplying and adding.
 
## The Independence Condition
 
@academic[fact,aside:true,width:35%:A cube with 43 quintillion positions
A Rubik's Cube has $8!$ corner placements, $3^7$ corner twists, $12!$ edge placements and $2^{11}$ edge flips, halved by a parity rule: about $4.3 \\times 10^{19}$ positions. The last twist and the last flip are forced by the others, so they contribute a factor of $1$.]@

The rule requires that the number of options at each step not depend on the choices made at earlier steps. When the option count at a later step shifts based on earlier choices, the multiplication rule does not apply directly and the count must be broken down further — usually by splitting into cases via the addition rule.
 
The multiplication rule is the engine behind every [permutation](!/combinatorics/permutations) formula. Arranging $n$ distinct items in a line uses the rule with decreasing counts at each step: $n$ choices for the first position AND $(n-1)$ for the second AND $(n-2)$ for the third, down to $1$, yielding $n!$ total arrangements. [Combinations](!/combinatorics/combinations) build on the same product, with a division step to remove the ordering.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj3: {
    title: `Complementary Counting`,
    content: `
Some counting problems are easier to solve in reverse. Counting the cases that fail a condition can be significantly simpler than counting the cases that satisfy it, especially when the condition has the form "at least one" — its negation, "none", often collapses into a single tractable count.
 
If $U$ is the universe of all outcomes and $A \\subseteq U$ is the set of desired outcomes, then
 
@academic[formula_callout:Complementary Counting
$$|A| = |U| - |U \\setminus A| = |U| - |A^c|.$$
/combinatorics/formulas#complementary_counting]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@
 
The strategy is to count the total, count the complement, and subtract.
 
@academic[example:Example
 
The number of arrangements of $n$ distinct items in which a designated item lands in a designated position can be found from its complement: the arrangements in which that item is not in that position. The complement partitions cleanly: the designated position holds one of the $n-1$ other items, and the remaining $n-1$ items fill the rest in $(n-1)!$ ways. Subtracting $(n-1) \\cdot (n-1)!$ from $n!$ gives the desired number, $(n-1)!$.]@

@academic[pitfall,aside:true,width:35%:Securing one success first
For at least one head in $4$ coin flips, choosing the flip that shows the head ($4$ ways) and letting the other $3$ land freely gives $4 \\cdot 2^3 = 32$, more than the $2^4 = 16$ possible outcomes. The complement gives $16 - 1 = 15$.
[Read more](!#pitfalls)]@

A condition of the form "at least one" hides many cases at once: exactly one, exactly two, and so on up to all of them, and a single outcome can meet the condition in several places. Its negation, "none", is a single case with no overlaps, and it is usually counted by one product. That is why the subtraction route is the standard choice whenever the words "at least one" appear.
 
## Structural Note
 
In [set-theoretic notation](!/math-symbols/set-theory), complementary counting expresses $|A| = |U| - |A^c|$, where $A^c$ is the complement of $A$ in the universe. This is the addition rule applied to the partition $A \\cup A^c = U$ — complementary counting is a strategic application of the addition rule rather than an independent principle.

@academic[punchline:An "at least one" count is usually one subtraction away: count the outcomes with none and take them from the total.]@
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj4: {
    title: `Double Counting`,
    content: `
Double counting is a proof technique rather than a counting formula. The set in question is counted in two genuinely different ways; the two resulting expressions both equal the size of the set, so they equal each other. The output is an identity, not a numerical count.
 
If $|S|$ can be expressed as $f(n)$ by one argument and as $g(n)$ by another argument, then
 
@academic[formula_callout:Double Counting
$$|S| = f(n) = g(n) \\implies f(n) = g(n).$$
/combinatorics/formulas#double_counting]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@
 
## The Handshake Lemma
 
A canonical illustration: in a group of people who have shaken hands in various pairings, the sum of the number of hands each person shook equals twice the total number of handshakes. The reason is that each handshake is counted once from each participant&apos;s perspective — the same set (handshakes) counted two ways. In graph theory this becomes $\\sum_{v} \\deg(v) = 2|E|$, where the left side sums degrees over all vertices and the right side counts each edge from both endpoints.

@academic[pitfall,aside:true,width:35%:Counting each handshake twice
With $6$ people who all shake hands, $6 \\cdot 5 = 30$ counts every handshake once from each of its two people. The lemma halves the sum: $\\frac{30}{2} = 15$ handshakes, the same as the $\\binom{6}{2} = 15$ pairs.
[Read more](!#pitfalls)]@

The lemma is easiest to use when every person's count is known. If each of $n$ people shakes hands with every other person exactly once, each of them shakes $n - 1$ hands, so the left side of the identity is a single product. The right side then gives the number of handshakes, which must match the number of pairs of people.
 
## Combinatorial Identities
 
Many of the identities involving the [binomial coefficient](!/combinatorics/binomial-coefficient) — including Vandermonde&apos;s identity and the hockey stick identity — are most naturally proved by double counting. A subset count is interpreted in two ways: by selecting members directly, and by partitioning the selection into stages or cases. The two expressions for the same subset count then equate to produce the identity. Algebraic proofs of these identities exist, but the combinatorial proofs are typically shorter and more illuminating.

@academic[punchline:Counting one set in two different ways proves that the two answers are equal, with no algebra needed.]@
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj5: {
    title: `The Pigeonhole Principle`,
    content: `
The pigeonhole principle does not count outcomes — it guarantees the existence of a particular kind of outcome. The statement is existential: it certifies that something must occur without identifying where.
 
## Basic Form
 
If $n$ items are distributed among $k$ containers and $n > k$, then at least one container holds at least two items.

Formally:

@academic[formula_callout:Pigeonhole Principle
$$n > k \\implies \\exists \\text{ container with } \\ge 2 \\text{ items}.$$
/combinatorics/formulas#pigeonhole_principle]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@
 
The reasoning is direct: if every container held at most one item, the total number of items would be at most $k$, contradicting $n > k$.
 
## Generalized Form
 
If $n$ items are distributed among $k$ containers, then at least one container holds at least $\\lceil n/k \\rceil$ items, where $\\lceil \\cdot \\rceil$ denotes the ceiling function. The basic form is the case $n = k+1$, which forces $\\lceil n/k \\rceil = 2$.

Formally:

@academic[formula_callout:Pigeonhole Principle (Generalized)
$$n \\text{ items into } k \\text{ containers} \\implies \\exists \\text{ container with } \\ge \\lceil n/k \\rceil \\text{ items}.$$
/combinatorics/formulas#pigeonhole_principle_generalized]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@
 
## Examples
 
@academic[pitfall,aside:true,width:35%:Rounding n/k down
For $25$ people and $12$ months, $\\lfloor 25/12 \\rfloor = 2$ claims only that some month has $2$ birthdays. The bound is $\\lceil 25/12 \\rceil = 3$: with at most $2$ per month, $12$ months hold only $24$ people.
[Read more](!#pitfalls)]@

In any group of 13 people, at least two share a birth month — the 13 people are distributed among 12 months, so the basic form applies.
 
Among any 5 integers chosen from $\\{1, 2, \\ldots, 8\\}$, at least two come from one of the four pairs $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, \\{7,8\\}$ — 5 items distributed into 4 pairs forces at least one pair to contain two of the chosen integers, and those two differ by exactly 1.
 
## One-Sided Nature
 
@academic[fact,aside:true,width:35%:No compressor shrinks every file
There are $2^n$ files of $n$ bits but only $2^n - 1$ shorter bit strings, the empty one included. If every file got shorter, two files would share a compressed form, and unpacking could not tell them apart.]@

The pigeonhole principle is asymmetric. It proves that a collision must occur, but says nothing about which container holds it or how to find it. The principle yields existence proofs in number theory, geometry, and combinatorics, often in settings where direct construction is hard or impossible.
 
In the language of [functions](!/functions), the principle states that no injection exists from a finite set into a strictly smaller finite set — any function from a larger finite set to a smaller one must map at least two elements of the domain to the same target.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj6: {
    title: `Putting the Principles Together`,
    content: `
Most counting problems are not solved by applying a single principle. They require chaining several — addition to split a problem into cases, multiplication within each case to count its outcomes, complementary counting to simplify a case that is easier in reverse.
 
## A Worked Example
 
Count the number of 3-digit positive integers whose digits are all distinct.
 
The first digit cannot be 0 (or the number would not be a 3-digit number), so it has 9 choices. The second digit can be any digit except the one already used, giving 9 remaining choices (now including 0). The third digit can be any digit except the two already used, giving 8 choices. By the multiplication rule:
 
@academic[formula_callout:Putting the Principles Together
$$9 \\times 9 \\times 8 = 648.$$]@
 
Now consider the complementary question: how many 3-digit positive integers contain at least one repeated digit?
 
The total number of 3-digit positive integers is $9 \\times 10 \\times 10 = 900$ — 9 choices for the first digit and 10 each for the other two. Subtracting the 648 with all-distinct digits gives
 
@academic[formula_callout:Putting the Principles Together
$$900 - 648 = 252$$]@
 
with at least one repetition.
 
A direct count of the "at least one repetition" set would require case analysis: exactly two digits equal and one different, all three digits equal, and the various positional arrangements. The complementary route converts the multi-case problem into a single subtraction.
 
## When Each Principle Applies
 
The addition rule splits a count across mutually exclusive cases. The multiplication rule builds a count from independent steps. Complementary counting reframes a hard "at least one" problem as a simpler "none" problem and subtracts. Double counting produces identities by counting the same set two different ways. The pigeonhole principle proves that a configuration must exist when items outnumber containers.
 
These five principles together cover the logical foundation of every formula that appears in the rest of the section.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  pitfalls: {
    title: `Common Pitfalls`,
    content: `Five mistakes come up again and again when the counting principles are put to work. Four are marked where they happen in the sections above; the fifth, adding cases that overlap, is described in the addition rule section. Here each is worked through in full, with the wrong and the right working side by side.

**Adding overlapping cases**

A count is split into cases and the case counts are added, but some outcomes belong to two cases at once. Each of those outcomes is counted twice.

Wrong working: the integers from $1$ to $20$ divisible by $2$ or by $3$. There are $10$ multiples of $2$ and $6$ multiples of $3$, so the count is given as $10 + 6 = 16$.

Right working: the multiples of $6$, namely $6$, $12$ and $18$, are in both lists. Subtracting them once gives $10 + 6 - 3 = 13$. This is the [inclusion–exclusion principle](!/combinatorics/inclusion-exclusion) for two sets.

Why it happens: the word "or" points to the addition rule, and the condition that the cases cannot happen together is easy to skip.

How to check: look for one outcome that fits two cases; here $6$ is divisible by both $2$ and $3$. Listing the numbers also works: $2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20$ are $13$ numbers.

**Adding the steps**

An outcome is built from several choices made together, but the option counts are added as if a single choice were made from one combined list. The reverse slip multiplies alternatives: the traveller's $2$ bus, $3$ train and $4$ taxi routes give $9$ trips, not $2 \\times 3 \\times 4 = 24$, because a trip uses only one of them.

Wrong working: a lunch combo has $3$ mains, $2$ drinks and $4$ desserts, and the number of meals is given as $3 + 2 + 4 = 9$.

Right working: each meal is one main and one drink and one dessert. The $3$ mains pair with the $2$ drinks in $3 \\times 2 = 6$ ways, and each pair goes with any of the $4$ desserts: $3 \\times 2 \\times 4 = 24$ meals.

Why it happens: $9$ is the number of dishes on the menu, and adding feels like putting the options together. The word "and" is often left out of the problem.

How to check: ask whether one outcome uses one choice or one of each. Main $1$ alone already gives $2 \\times 4 = 8$ different meals, so $9$ meals in total is far too few.

**Securing one success first**

For an "at least one" condition, one success is fixed first and everything else is left free. An outcome with several successes is then counted once for each of them.

Wrong working: at least one head in $4$ coin flips. Choose the flip that shows the head in $4$ ways and let the other $3$ flips land freely in $2^3 = 8$ ways: $4 \\cdot 8 = 32$.

Right working: there are $2^4 = 16$ outcomes in all, and only one of them, all tails, has no head. So $16 - 1 = 15$ outcomes have at least one head.

Why it happens: fixing a head does guarantee the condition, so the count looks safe. But an outcome such as two heads followed by two tails is reached twice, once with the first flip fixed and once with the second, and four heads is reached four times.

How to check: the answer can never be larger than the total; $32 > 16$ shows the overcount. Counting by the exact number of heads confirms the right answer: $\\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 4 + 6 + 4 + 1 = 15$.

**Counting each handshake twice**

The number of handshakes is found by adding up how many hands each person shook, and that sum is given as the answer.

Wrong working: $6$ people each shake hands with everyone else. Each shakes $5$ hands, so the count is given as $6 \\cdot 5 = 30$.

Right working: each handshake involves $2$ people, so it appears twice in the sum. By the handshake lemma the sum is $2|E|$, so $|E| = \\frac{30}{2} = 15$. Choosing the $2$ people of a handshake gives the same number: $\\binom{6}{2} = 15$.

Why it happens: counting person by person is natural, and it is easy to forget that the handshake between two people appears in both of their counts.

How to check: try $3$ people. They make $3$ handshakes, but the per-person sum is $3 \\cdot 2 = 6$. The per-person sum is always even, since it is twice the number of handshakes; an odd sum signals a slip in the counts.

**Rounding n/k down**

The generalized form guarantees a container with at least $\\lceil n/k \\rceil$ items, but the quotient is rounded down instead of up.

Wrong working: $25$ people and $12$ months. $\\lfloor 25/12 \\rfloor = 2$, so the conclusion drawn is only that some month has at least $2$ birthdays. For $13$ people the floor gives $1$, which says nothing at all.

Right working: $\\lceil 25/12 \\rceil = 3$. If every month had at most $2$ birthdays, the $12$ months would hold at most $24$ people, fewer than $25$. So some month has at least $3$.

Why it happens: rounding down is the habit for questions like "how many full boxes", where the leftover is ignored. Here the leftover is the whole point: it has to go somewhere, and it pushes one container higher.

How to check: spread the items as evenly as possible. $12$ months with $2$ people each hold $24$; the $25$th person makes a third in some month, so the guaranteed number is $3$.`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
 
  obj7: {
    title: `Related Concepts`,
    content: `
• [Set Theory](!/set-theory) — the language of unions, intersections, complements, and Cartesian products that the counting rules formalize as cardinality identities.
 
• [Functions](!/functions) — the pigeonhole principle is the statement that no injection exists from a finite set into a strictly smaller finite set.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Counting Principles at a Glance`,
    content: `
The page covered five logical rules behind every counting argument: the addition and multiplication rules for combining counts, complementary counting for &quot;at least one&quot; problems, double counting as a proof technique for identities, and the pigeonhole principle for existence guarantees. The table below collects each principle with its linguistic marker, its purpose, and a canonical example.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
  faq: {
    title: `Counting Principles FAQ`,
  },
};

const introContent = {
  id: 'intro',
  title: `The Logic Beneath the Formulas`,
  content: `
Before any specific formula in combinatorics — before permutations, combinations, or the binomial theorem — there are a small number of logical rules that govern how counts combine. Every counting argument in the section, however elaborate, is a structured application of these rules.
 
Two of them are foundational. The addition rule applies when a count splits into mutually exclusive cases; the multiplication rule applies when an outcome is built from a sequence of independent steps. Three further principles extend or vary these ideas: complementary counting (count what fails the condition and subtract), double counting (count the same set two ways and equate), and the pigeonhole principle (more items than containers forces a repeat).
 
Each principle answers a structural question about a counting problem rather than computing a specific number. Recognizing which principle applies is the first step in any counting argument.
`,
};

const faqQuestions = {
  obj1: {
    question: "Do you add or multiply when counting possibilities?",
    answer: "Multiply when choices happen in sequence and each is made in addition to the others. Add when the choices are alternatives and only one of them occurs. Picking a shirt and then a hat multiplies; picking either a shirt or a hat adds. The words and and or in the problem usually signal which applies.",
    sectionId: "2"
  },
  obj2: {
    question: "When is it easier to count the opposite?",
    answer: "Whenever the phrase at least appears, or when the forbidden cases are far fewer than the allowed ones. Count everything, count what fails, and subtract. Problems asking for arrangements where at least one condition holds usually have many valid cases and few invalid ones, which makes the complementary route much shorter.",
    sectionId: "3"
  },
  obj3: {
    question: "What does the pigeonhole principle let you prove?",
    answer: "That some outcome must occur, without identifying which one. If more items are placed than there are containers, at least one container holds two. It gives existence rather than construction, which is why it proves things like two people in a large city having the same number of hairs, with no way to name them.",
    sectionId: "5"
  },
  obj4: {
    question: "When do you use double counting?",
    answer: "When you want to prove two expressions are equal rather than compute a number. Count the same collection in two different ways and the two answers must agree, which establishes an identity directly. Many binomial coefficient identities are proved this way, and the argument is often shorter than algebraic manipulation.",
    sectionId: "4"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Counting Principles in Combinatorics",
    "description": "Counting principles of combinatorics: addition rule, multiplication rule, complementary counting, double counting, and the pigeonhole principle explained.",
    "url": "https://www.learnmathclass.com/combinatorics/counting-principles",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Counting Principles"
    },
    "teaches": [
      "Addition rule for mutually exclusive cases",
      "Multiplication rule for sequential independent steps",
      "Complementary counting strategy for 'at least one' problems",
      "Double counting as a proof technique for combinatorial identities",
      "Pigeonhole principle in basic and generalized form",
      "Combining counting principles in multi-step problems"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Combinatorics",
        "item": "https://www.learnmathclass.com/combinatorics"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Counting Principles",
        "item": "https://www.learnmathclass.com/combinatorics/counting-principles"
      }
    ]
  },

}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const ctOutfits = {
    kind: 'product',
    svgTitle: 'Three shirts times two trousers: a tree of six outfits',
    step1: { name: 'step 1: shirt', options: ['S\u2081', 'S\u2082', 'S\u2083'] },
    step2: { name: 'step 2: trousers', options: ['P\u2081', 'P\u2082'] },
    outcomeName: 'outfit', outcomePlural: 'outfits',
  };

  const demoUnits = {
    pigeonhole: demoUnitFrame({
      svg: distributionIntoCellsDiagrams.big43,
      caption: '4 items into 3 cells: 3&#8308; = 81 ways',
      text: 'Every one of the 81 assignments of 4 items to 3 cells is enumerated here, and not one of them leaves all three cells with a single item &#8212; there are simply not enough cells to go round. That is the pigeonhole principle as an exhaustive check rather than an argument: the crowded cell is present in all 81 cases, which is why the conclusion needs no construction. Change the counts and watch the guarantee appear and disappear on the',
      href: '/combinatorics/visual-tools/distribution',
      linkText: 'distribution into cells visualizer',
    }),
    outfitTree: demoUnitFrame({
      svg: renderCountTree(ctOutfits),
      caption: 'Three choices, then two',
      text: 'Choose a shirt, then trousers. Each of the 3 shirts opens its own branch, and every branch splits the same 2 ways, so the tree ends in 3 &#215; 2 = 6 leaves &#8212; one for each outfit, each reached by exactly one path. Add a third step with k options and every leaf would split k ways again: that repeated splitting is why the counts multiply.',
    }),
  };

   return {
      props:{
    demoUnits,
         sectionsContent,
         introContent,
         obj2Table,
         capstoneTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Counting Principles in Combinatorics | Learn Math Class",
        description: "Counting principles of combinatorics: addition rule, multiplication rule, complementary counting, double counting, and the pigeonhole principle explained.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/counting-principles",
         name: "Counting Principles in Combinatorics"
      },
        
       }
    }
   }

export default function CountingPrinciplesPage({seoData, sectionsContent, introContent, obj2Table, capstoneTable, faqQuestions, schemas, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-outfitTree'} dangerouslySetInnerHTML={{ __html: demoUnits.outfitTree }} />,
          `The rule needs the second step to offer the same number of options whatever the first choice was; the tree shows it as equal-sized fans.`,
          <div key={'obj2-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj2Table }} />,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
                  <div key={'unit-pigeonhole'} dangerouslySetInnerHTML={{ __html: demoUnits.pigeonhole }} />,
          `The generalized form above is the same argument with the threshold raised: push enough items in and some container must hold not just two but many.`,
          `@academic[punchline:When items outnumber containers, a collision is certain, even when no one can say where it happens.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:sectionsContent.pitfalls.link,
        content:[
          sectionsContent.pitfalls.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'capstone-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
        ]
    },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:sectionsContent.faq.title,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },
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
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Counting Principles</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
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