// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import React from 'react'
// // // import '../../pages.css'
// // // import Head from 'next/head'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// // // import { tableHeaders } from '@/app/styles/theme'
// // // import twoSetsVennDiagrams from '@/app/components/venn-diagrams/twoSetsVennDiagrams'
// // // import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderSetElementsV2 from '@/app/utils/illustrations/set-theory/relationships/setElements.v2'


// // // export async function getStaticProps(){
// // // const keyWords = [
// // //   "cardinality of sets",
// // //   "cardinality definition",
// // //   "finite sets",
// // //   "infinite sets",
// // //   "countable sets",
// // //   "uncountable sets",
// // //   "countably infinite",
// // //   "cardinality of real numbers",
// // //   "cardinality of integers",
// // //   "bijection between sets",
// // //   "cantors diagonal argument",
// // //   "comparing infinite sets",
// // //   "power set cardinality",
// // //   "size of infinity"
// // // ]
// // //   // •

// // // //   \u2022 First item
// // // // \u2022 Second item

  
// // // // <hr style="border-width:1px;"></hr>

// // // // <hr style="color:blue;" />

// // // // <hr style="border-color:#3498db; border-width:1px;" />



// // // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// // //         //     {processContent(sectionsContent.normal.notation)}
// // //         // </div>,


// // // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // // //     {processContent(sectionsContent.normal.parameters)}
// // // // </div>,
        
// // // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // // //                   {processContent(sectionsContent.obj4.content)}
// // // //                   </div>,


// // // //  <div key={'dist'} style={{
// // // //                     textAlign: 'center',
// // // //                     transform: 'scale(0.98)',
// // // //                     transformOrigin: 'center',
// // // //                     marginTop:'50px',
// // // //                     marginLeft:'-150px'
// // // //                   }} dangerouslySetInnerHTML={{ 
// // // //                     __html:   sectionContent.distributions.svg,
// // // //                   }} />

// // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // //   // ---------- TABLES ----------

// // //   // obj5 — comparison: countable vs uncountable
// // //   const obj5Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.comparison}">Category</th>
// // //       <th style="${tableHeaders.comparison}">Defining condition</th>
// // //       <th style="${tableHeaders.comparison}">Example sets</th>
// // //       <th style="${tableHeaders.comparison}">Standard proof technique</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Countably infinite</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection with ℕ exists</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; even integers</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">construct an explicit listing &nbsp;(sequence) of all elements</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Uncountable</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">no bijection with ℕ is possible</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">ℝ; any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">Cantor&apos;s diagonal argument &nbsp;(or Cantor&apos;s theorem)</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj6 — aggregation: cardinality comparison relations as a notation reference card
// // //   const obj6Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.aggregation}">Relation</th>
// // //       <th style="${tableHeaders.aggregation}">Meaning</th>
// // //       <th style="${tableHeaders.aggregation}">Witnessed by</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = |B|</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B have the same cardinality</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection &nbsp;A → B</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| ≤ |B|</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is no larger than B</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an injection &nbsp;A → B</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">|A| &lt; |B|</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">A is strictly smaller than B</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">an injection exists, but no bijection does</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj7 — summary: capstone hierarchy of cardinalities
// // //   const summaryTable = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.summary}">Cardinality</th>
// // //       <th style="${tableHeaders.summary}">Description</th>
// // //       <th style="${tableHeaders.summary}">Representative set(s)</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">empty</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅ &nbsp;(the only set with this cardinality)</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">finite n &nbsp;(n ∈ ℕ)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded element count</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2, ..., n}; &nbsp;the English alphabet &nbsp;(n = 26)</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ℵ<sub>0</sub> &nbsp;(aleph-null)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">countably infinite — the smallest infinite cardinality</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; &nbsp;the even integers</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">𝔠 = 2<sup>ℵ<sub>0</sub></sup> &nbsp;(continuum)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uncountable; the size of the real line</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ; &nbsp;any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">2<sup>𝔠</sup>, &nbsp;2<sup>(2<sup>𝔠</sup>)</sup>, &nbsp;...</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">strictly larger uncountable cardinalities &nbsp;(by Cantor&apos;s theorem)</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">𝒫(ℝ); &nbsp;𝒫(𝒫(ℝ)); &nbsp;the hierarchy continues without end</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // // //   const sectionsContent = {
// // // //     obj0: {
// // // //   title: `Key Terms`,
// // // //   content: `
// // // // - [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set
// // // // - [Finite Set](!/set-theory/definitions#finite_set) — a set with a bounded element count
// // // // - [Infinite Set](!/set-theory/definitions#infinite_set) — a set that cannot be matched with any finite count
// // // // - [Countable Set](!/set-theory/definitions#countable_set) — a set whose elements can be listed in a sequence
// // // // - [Uncountable Set](!/set-theory/definitions#uncountable_set) — a set too large to be listed sequentially
// // // // - [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — sets related by having the same cardinality
// // // // - [Power Set](!/set-theory/definitions#power_set) — always produces a set of strictly larger cardinality


// // // // `,
// // // //   before: ``,
// // // //   after: `
// // // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
// // // //   link: '',
// // // // },
// // // //   obj1: {
// // // //     title: `Definition of Cardinality`,
// // // //     content: `
// // // // The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$.

// // // // For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.

// // // // The empty set contains no elements:

// // // // $$|\\emptyset| = 0$$

// // // // Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // //   obj2: {
// // // //     title: `Finite Sets`,
// // // //     content: `
// // // // A set is finite if its elements can be counted with a natural number. Formally, a set $A$ is finite if there exists some $n \\in \\mathbb{N}$ such that:

// // // // $$|A| = n$$

// // // // This means a bijection exists between $A$ and the set $\\{1, 2, 3, \\ldots, n\\}$.

// // // // Examples of finite sets:

// // // // - The set of letters in the English alphabet has cardinality $26$

// // // // - The set of prime numbers less than $20$ is $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ with cardinality $8$

// // // // - Any [subset](!/set-theory/subsets) of a finite set is finite

// // // // The cardinality of a finite set satisfies:

// // // // $$|A \\cup B| = |A| + |B| - |A \\cap B|$$

// // // // This inclusion-exclusion principle accounts for elements counted twice when sets overlap.
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // //   obj3: {
// // // //     title: `Infinite Sets`,
// // // //     content: `
// // // // A set is infinite if it is not finite — no natural number can express its size.

// // // // The standard number sets are all infinite:

// // // // - $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — the natural numbers

// // // // - $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — the integers

// // // // - $\\mathbb{Q}$ — the rational numbers

// // // // - $\\mathbb{R}$ — the real numbers

// // // // A defining property of infinite sets: an infinite set can be put into one-to-one correspondence with a proper subset of itself. For example, the function $f(n) = 2n$ maps $\\mathbb{N}$ bijectively onto the even numbers, which form a proper subset of $\\mathbb{N}$.

// // // // Not all infinite sets have the same cardinality. The integers and rationals turn out to be the same size as the natural numbers, but the real numbers form a strictly larger infinity.
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // //   obj4: {
// // // //     title: `Countable Sets`,
// // // //     content: `
// // // // A set is countably infinite if its elements can be put in one-to-one correspondence with the natural numbers $\\mathbb{N}$. Such a set can be listed as a sequence:

// // // // $$a_1, a_2, a_3, \\ldots$$

// // // // where every element appears exactly once.

// // // // The integers $\\mathbb{Z}$ are countable. The listing:

// // // // $$0, 1, -1, 2, -2, 3, -3, \\ldots$$

// // // // establishes a bijection with $\\mathbb{N}$.

// // // // The rationals $\\mathbb{Q}$ are countable despite appearing denser than $\\mathbb{Z}$. By arranging positive rationals in a grid and traversing diagonally, every rational is eventually listed.

// // // // A set is called countable if it is either finite or countably infinite. Some authors reserve "countable" for countably infinite sets only — context determines the convention.

// // // // The union of countably many countable sets remains countable. This is why $\\mathbb{Q}$ is countable: it is a countable union of countable sets (rationals with each fixed denominator).
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // //   obj5: {
// // // //     title: `Uncountable Sets`,
// // // //     content: `
// // // // A set is uncountable if it is infinite but not countable — its elements cannot be listed in a sequence that covers them all.

// // // // The real numbers $\\mathbb{R}$ are uncountable. Cantor's diagonal argument proves this: assume a listing of all real numbers between $0$ and $1$ exists. Construct a new number by making its $n$-th decimal digit different from the $n$-th digit of the $n$-th number in the list. This new number differs from every listed number, contradicting the assumption that the list was complete.

// // // // Any interval $(a, b)$ with $a < b$ is uncountable. In fact, every such interval has the same cardinality as $\\mathbb{R}$ itself — a bijection exists between them.

// // // // The cardinality of $\\mathbb{R}$ is denoted $\\mathfrak{c}$ (for continuum) or $2^{\\aleph_0}$, indicating it equals the cardinality of the [power set](!/set-theory/subsets#5) of $\\mathbb{N}$.
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // //   obj6: {
// // // //     title: `Comparing Cardinalities`,
// // // //     content: `
// // // // Cardinalities are compared using functions between sets:

// // // // - $|A| = |B|$ when a bijection exists between $A$ and $B$

// // // // - $|A| \\leq |B|$ when an injection (one-to-one function) exists from $A$ to $B$

// // // // - $|A| < |B|$ when $|A| \\leq |B|$ and $|A| \\neq |B|$

// // // // The Cantor-Schröder-Bernstein theorem states: if $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|$.

// // // // Cantor's theorem establishes a fundamental inequality for any set $A$:

// // // // $$|A| < |\\mathcal{P}(A)|$$

// // // // The [power set](!/set-theory/subsets) always has strictly greater cardinality than the original set. For finite sets, this is immediate: $2^n > n$. For infinite sets, the proof uses a diagonal argument similar to the uncountability of $\\mathbb{R}$.

// // // // This theorem implies there is no largest cardinality — given any set, its power set is strictly larger, producing an endless hierarchy of infinite sizes.
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // //   obj7: {
// // // //     title: `Summary: A Hierarchy of Cardinalities`,
// // // //     content: `
// // // // The sets covered above arrange themselves into a strict hierarchy of sizes. The table below collects the major rungs — empty, finite, countably infinite, the continuum, and beyond — with a representative set at each level. Cantor's theorem guarantees the hierarchy never ends: for every set, its power set is strictly larger, producing an unbounded tower of cardinalities.
// // // //     `,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: '',
// // // //   },
// // // // };

// // // const sectionsContent = {
// // //     obj0: {
// // //   title: `Key Terms`,
// // //   content: `
// // // - [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set
// // // - [Finite Set](!/set-theory/definitions#finite_set) — a set with a bounded element count
// // // - [Infinite Set](!/set-theory/definitions#infinite_set) — a set that cannot be matched with any finite count
// // // - [Countable Set](!/set-theory/definitions#countable_set) — a set whose elements can be listed in a sequence
// // // - [Uncountable Set](!/set-theory/definitions#uncountable_set) — a set too large to be listed sequentially
// // // - [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — sets related by having the same cardinality
// // // - [Power Set](!/set-theory/definitions#power_set) — always produces a set of strictly larger cardinality


// // // `,
// // //   before: ``,
// // //   after: `
// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
// // //   link: '',
// // // },
// // //   obj1: {
// // //     title: `Definition of Cardinality`,
// // //     content: `
// // // The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$. This bar notation is one of several [cardinality symbols](!/math-symbols/set-theory) in standard use.

// // // For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.

// // // The empty set contains no elements:

// // // $$|\\emptyset| = 0$$

// // // Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // //   obj2: {
// // //     title: `Finite Sets`,
// // //     content: `
// // // A set is finite if its elements can be counted with a natural number. Formally, a set $A$ is finite if there exists some $n \\in \\mathbb{N}$ such that:

// // // $$|A| = n$$

// // // This means a bijection exists between $A$ and the set $\\{1, 2, 3, \\ldots, n\\}$.

// // // Examples of finite sets:

// // // - The set of letters in the English alphabet has cardinality $26$

// // // - The set of prime numbers less than $20$ is $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ with cardinality $8$

// // // - Any [subset](!/set-theory/subsets) of a finite set is finite

// // // The cardinality of a finite union of finite sets satisfies the inclusion-exclusion principle:

// // // @academic[formula_callout:Inclusion-Exclusion - Two Sets
// // // $$|A \\cup B| = |A| + |B| - |A \\cap B|$$
// // // /set-theory/formulas#inclusion-exclusion_-_two_sets]@

// // // @academic[formulas_link:Browse all set theory formulas
// // // /set-theory/formulas]@

// // // The correction term $|A \\cap B|$ accounts for elements counted twice when the sets overlap. The pattern extends to three sets by alternating between adding singles, subtracting pairwise intersections, and adding back the triple intersection:

// // // @academic[formula_callout:Inclusion-Exclusion - Three Sets
// // // $$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$
// // // /set-theory/formulas#inclusion-exclusion_-_three_sets]@

// // // @academic[formulas_link:Browse all set theory formulas
// // // /set-theory/formulas]@

// // // When the sets share no elements, the correction terms vanish and the cardinality simply adds:

// // // @academic[formula_callout:Cardinality of Disjoint Union
// // // $$|A \\cup B| = |A| + |B| \\quad \\text{when } A \\cap B = \\emptyset$$
// // // /set-theory/formulas#cardinality_of_disjoint_union]@

// // // @academic[formulas_link:Browse all set theory formulas
// // // /set-theory/formulas]@
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // //   obj3: {
// // //     title: `Infinite Sets`,
// // //     content: `
// // // A set is infinite if it is not finite — no natural number can express its size.

// // // The standard number sets are all infinite:

// // // - $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — the natural numbers

// // // - $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — the integers

// // // - $\\mathbb{Q}$ — the rational numbers

// // // - $\\mathbb{R}$ — the real numbers

// // // A defining property of infinite sets: an infinite set can be put into one-to-one correspondence with a proper subset of itself. For example, the function $f(n) = 2n$ maps $\\mathbb{N}$ bijectively onto the even numbers, which form a proper subset of $\\mathbb{N}$.

// // // Not all infinite sets have the same cardinality. The integers and rationals turn out to be the same size as the natural numbers, but the real numbers form a strictly larger infinity.
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // //   obj4: {
// // //     title: `Countable Sets`,
// // //     content: `
// // // A set is countably infinite if its elements can be put in one-to-one correspondence with the natural numbers $\\mathbb{N}$. Such a set can be listed as a sequence:

// // // $$a_1, a_2, a_3, \\ldots$$

// // // where every element appears exactly once.

// // // The integers $\\mathbb{Z}$ are countable. The listing:

// // // $$0, 1, -1, 2, -2, 3, -3, \\ldots$$

// // // establishes a bijection with $\\mathbb{N}$.

// // // The rationals $\\mathbb{Q}$ are countable despite appearing denser than $\\mathbb{Z}$. By arranging positive rationals in a grid and traversing diagonally, every rational is eventually listed.

// // // A set is called countable if it is either finite or countably infinite. Some authors reserve "countable" for countably infinite sets only — context determines the convention.

// // // The union of countably many countable sets remains countable. This is why $\\mathbb{Q}$ is countable: it is a countable union of countable sets (rationals with each fixed denominator).
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // //   obj5: {
// // //     title: `Uncountable Sets`,
// // //     content: `
// // // A set is uncountable if it is infinite but not countable — its elements cannot be listed in a sequence that covers them all.

// // // The real numbers $\\mathbb{R}$ are uncountable. Cantor's diagonal argument proves this: assume a listing of all real numbers between $0$ and $1$ exists. Construct a new number by making its $n$-th decimal digit different from the $n$-th digit of the $n$-th number in the list. This new number differs from every listed number, contradicting the assumption that the list was complete.

// // // Any interval $(a, b)$ with $a < b$ is uncountable. In fact, every such interval has the same cardinality as $\\mathbb{R}$ itself — a bijection exists between them.

// // // The cardinality of $\\mathbb{R}$ is denoted $\\mathfrak{c}$ (for continuum) or $2^{\\aleph_0}$, indicating it equals the cardinality of the [power set](!/set-theory/subsets#5) of $\\mathbb{N}$.
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   notation: {
// // //     title: `Cardinality Notation`,
// // //     lead: `Size gets a bar pair, infinity gets a Hebrew letter, and the continuum gets a Fraktur one — three generations of marks for one question: how many members? The variant zoo ($\\operatorname{card}$, $\\#$, $n(A)$) rides along.`,
// // //     inherited: `The braces, $\\in$, $\\varnothing$ and set-builder come from [set theory basics](!/set-theory/basics#2); the power set $\\mathcal{P}(A)$ and $2^A$ behind the continuum from the [subsets page](!/set-theory/subsets#6); the double-struck ℕ–ℝ chain likewise.`,
// // //     entries: [
// // //       {
// // //         id: 'bar-pair',
// // //         tex: `$|A|$`,
// // //         read: `the cardinality of A`,
// // //         means: `The bar pair around a set counts it: $|A| = 3$ for $A = \\{1, 2, 3\\}$ — **Definition of Cardinality** above. The same fence with a different tenant: on numbers the bars mean [absolute value](!/algebra/equations/absolute-value#notation), on sets they count.`,
// // //         cases: `The variant zoo by dialect: $\\operatorname{card}(A)$ in formal set theory, $\\#A$ in combinatorics, $n(A)$ in school probability texts, $\\|A\\|$ occasionally — all the same question; this site keeps the bars.`,
// // //         confusedWith: `A number's magnitude. $|{-5}| = 5$ but $|\\{-5\\}| = 1$ — bars around the number measure distance, bars around the braces count members; the inner braces flip the meaning entirely.`,
// // //       },
// // //       {
// // //         id: 'aleph-null',
// // //         tex: `$\\aleph_0$`,
// // //         read: `aleph-null; aleph-nought`,
// // //         means: `The first infinite cardinal: $|\\mathbb{N}| = \\aleph_0$ — the size shared by every countably infinite set, as **Countable Sets** above establishes. The aleph is mathematics' one standard Hebrew letter, Cantor's own choice; the [mathematical keyboard](!/keyboard) carries it, along with the $\\beth$ that follows it.`,
// // //         cases: `The subscript starts a ladder — $\\aleph_0, \\aleph_1, \\ldots$ enumerate ever-larger infinities; $|\\mathbb{Z}| = |\\mathbb{Q}| = \\aleph_0$ despite appearances, the working surprise of the countability arguments above.`,
// // //         confusedWith: `The infinity symbol. $\\aleph_0$ is a cardinal — a size — while the $\\infty$ of [limit notation](!/calculus/limits/infinity#notation) is a direction of growth; the two never interchange, and $\\aleph_0 + 1 = \\aleph_0$ obeys arithmetic $\\infty$ was never given.`,
// // //       },
// // //       {
// // //         id: 'continuum',
// // //         tex: `$\\mathfrak{c} = 2^{\\aleph_0}$`,
// // //         read: `the continuum; two to the aleph-null`,
// // //         means: `The size of the reals: $|\\mathbb{R}| = \\mathfrak{c}$, in Fraktur type — the blackletter font also seen on the [real-part marks](!/complex-numbers/algebraic-form#2) $\\Re$ and $\\Im$. The exponent spelling $2^{\\aleph_0}$ reads it as a power-set size, via $|\\mathcal{P}(A)| = 2^{|A|}$ from the [subsets page](!/set-theory/subsets#6).`,
// // //         cases: `Strictness is the point: $\\aleph_0 < \\mathfrak{c}$ — **Uncountable Sets** above proves the gap with Cantor's diagonal; every interval $(a, b)$ already has full cardinality $\\mathfrak{c}$.`,
// // //         confusedWith: `A plain letter c. The Fraktur stroke is the reservation — roman $c$ is a free constant; and $2^{\\aleph_0}$ is not "a huge finite power of two" but a set-sized exponent, legal only in cardinal arithmetic.`,
// // //       },
// // //     ],
// // //     symbolsHref: `/math-symbols/set-theory`,
// // //     symbolsLabel: `All set theory symbols`,
// // //     parentHref: `/set-theory`,
// // //     parentLabel: `Set Theory`,
// // //   },
// // //   obj6: {
// // //     title: `Comparing Cardinalities`,
// // //     content: `
// // // Cardinalities are compared using functions between sets:

// // // - $|A| = |B|$ when a bijection exists between $A$ and $B$

// // // - $|A| \\leq |B|$ when an injection (one-to-one function) exists from $A$ to $B$

// // // - $|A| < |B|$ when $|A| \\leq |B|$ and $|A| \\neq |B|$

// // // The Cantor-Schröder-Bernstein theorem states: if $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|$.

// // // Cantor's theorem establishes a fundamental inequality for any set $A$:

// // // @academic[formula_callout:Cantor Theorem
// // // $$|A| < |\\mathcal{P}(A)|$$
// // // /set-theory/formulas#cantor_theorem]@

// // // @academic[formulas_link:Browse all set theory formulas
// // // /set-theory/formulas]@

// // // The [power set](!/set-theory/subsets) always has strictly greater cardinality than the original set. For finite sets, this is immediate: $2^n > n$. For infinite sets, the proof uses a diagonal argument similar to the uncountability of $\\mathbb{R}$.

// // // This theorem implies there is no largest cardinality — given any set, its power set is strictly larger, producing an endless hierarchy of infinite sizes.
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // //   obj7: {
// // //     title: `Summary: A Hierarchy of Cardinalities`,
// // //     content: `
// // // The sets covered above arrange themselves into a strict hierarchy of sizes. The table below collects the major rungs — empty, finite, countably infinite, the continuum, and beyond — with a representative set at each level. Cantor's theorem guarantees the hierarchy never ends: for every set, its power set is strictly larger, producing an unbounded tower of cardinalities.
// // //     `,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // // }; 


// // // const introContent = {
// // //   id: "intro",
// // //   title: `Measuring the Size of Sets`,
// // //   content: `
// // // Cardinality measures the size of a [set](!/set-theory) — how many elements it contains. For finite sets, cardinality is simply a count. For infinite sets, the situation becomes more subtle: different infinite sets can have different sizes, and comparing them requires the concept of one-to-one correspondence. This leads to the distinction between countable and uncountable infinities.
// // //   `,
// // // };


// // // const faqQuestions = {
// // //   obj1: {
// // //     question: "What is the cardinality of a set?",
// // //     answer: "Cardinality measures the number of elements in a set, denoted |A|. For finite sets, it's a count. For infinite sets, two sets have equal cardinality when a bijection (one-to-one correspondence) exists between them.",
// // //     sectionId: "1"
// // //   },
// // //   obj2: {
// // //     question: "What is a finite set?",
// // //     answer: "A set is finite if its elements can be counted with a natural number n. A bijection exists between the set and {1, 2, ..., n}. Any subset of a finite set is also finite.",
// // //     sectionId: "2"
// // //   },
// // //   obj3: {
// // //     question: "What is an infinite set?",
// // //     answer: "A set is infinite if no natural number expresses its size. Infinite sets can be mapped bijectively onto proper subsets of themselves — for example, natural numbers onto even numbers via f(n) = 2n.",
// // //     sectionId: "3"
// // //   },
// // //   obj4: {
// // //     question: "What does countably infinite mean?",
// // //     answer: "A set is countably infinite if its elements can be listed as a sequence a₁, a₂, a₃, ... covering every element exactly once. The integers and rationals are countably infinite.",
// // //     sectionId: "4"
// // //   },
// // //   obj5: {
// // //     question: "Are the rational numbers countable?",
// // //     answer: "Yes. By arranging positive rationals in a grid and traversing diagonally, every rational appears in the sequence. The union of countably many countable sets remains countable.",
// // //     sectionId: "4"
// // //   },
// // //   obj6: {
// // //     question: "What is an uncountable set?",
// // //     answer: "A set is uncountable if it is infinite but cannot be listed in a sequence. The real numbers are uncountable — Cantor's diagonal argument proves no list can include every real number.",
// // //     sectionId: "5"
// // //   },
// // //   obj7: {
// // //     question: "What is Cantor's diagonal argument?",
// // //     answer: "Assume all reals between 0 and 1 are listed. Construct a new number by making its n-th digit differ from the n-th digit of the n-th listed number. This number isn't in the list, proving the reals are uncountable.",
// // //     sectionId: "5"
// // //   },
// // //   obj8: {
// // //     question: "How do you compare cardinalities of infinite sets?",
// // //     answer: "|A| ≤ |B| when an injection exists from A to B. |A| = |B| when a bijection exists. The Cantor-Schröder-Bernstein theorem states: if |A| ≤ |B| and |B| ≤ |A|, then |A| = |B|.",
// // //     sectionId: "6"
// // //   },
// // //   obj9: {
// // //     question: "What is Cantor's theorem about power sets?",
// // //     answer: "For any set A, |A| < |P(A)| — the power set always has strictly greater cardinality. This implies there is no largest infinity; each power set produces a larger one.",
// // //     sectionId: "6"
// // //   },
// // //   obj10: {
// // //     question: "What is the cardinality of the real numbers?",
// // //     answer: "The cardinality of ℝ is denoted 𝔠 (continuum) or 2^ℵ₀, equal to the cardinality of the power set of ℕ. Every interval (a, b) has this same cardinality.",
// // //     sectionId: "5"
// // //   }
// // // }


// // // const schemas = {
// // //   learningResource: {
// // //     "@context": "https://schema.org",
// // //     "@type": "LearningResource",
// // //     "name": "Cardinality of Sets",
// // //     "description": "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
// // //     "url": "https://www.learnmathclass.com/set-theory/cardinality",
// // //     "inLanguage": "en-US",
// // //     "learningResourceType": "Explanation",
// // //     "educationalLevel": "High School, College",
// // //     "educationalUse": "Learning",
// // //     "audience": {
// // //       "@type": "EducationalAudience",
// // //       "educationalRole": "student"
// // //     },
// // //     "about": {
// // //       "@type": "Thing",
// // //       "name": "Cardinality of Sets"
// // //     },
// // //     "teaches": [
// // //       "Definition of cardinality and bijections",
// // //       "Finite sets and counting",
// // //       "Properties of infinite sets",
// // //       "Countable and countably infinite sets",
// // //       "Uncountable sets and Cantor's diagonal argument",
// // //       "Comparing cardinalities and Cantor's theorem"
// // //     ],
// // //     "keywords": keyWords.join(", "),
// // //     "author": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "publisher": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "datePublished": "2024-01-15",
// // //     "dateModified": new Date().toISOString()
// // //   },

// // //   breadcrumb: {
// // //     "@context": "https://schema.org",
// // //     "@type": "BreadcrumbList",
// // //     "itemListElement": [
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 1,
// // //         "name": "Home",
// // //         "item": "https://www.learnmathclass.com"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 2,
// // //         "name": "Set Theory",
// // //         "item": "https://www.learnmathclass.com/set-theory"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 3,
// // //         "name": "Cardinality",
// // //         "item": "https://www.learnmathclass.com/set-theory/cardinality"
// // //       }
// // //     ]
// // //   },

// // //   faq: {
// // //     "@context": "https://schema.org",
// // //     "@type": "FAQPage",
// // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // //       "@type": "Question",
// // //       "name": faqQuestions[key].question,
// // //       "acceptedAnswer": {
// // //         "@type": "Answer",
// // //         "text": faqQuestions[key].answer
// // //       }
// // //     }))
// // //   }
// // // }





// // //   // Operation A demonstration unit: frozen tool states + attached explanation
// // //   // panel + tool link, one frame. Rendered as a content-array item.
// // //   const demoUnits = {
// // //     inclusionExclusion: demoUnitFrame({
// // //       svg: [twoSetsVennDiagrams.union, twoSetsVennDiagrams.disjoint],
// // //       caption: 'Why the correction term exists',
// // //       text: 'Two frozen configurations tell the whole story: when the circles overlap (top), the lens lies inside both sets &#8212; summing |A| + |B| counts it twice, so |A &#8745; B| is subtracted once. When the sets are disjoint (bottom), there is no lens and the counts simply add. Slide between the two situations yourself on the',
// // //       href: '/set-theory/visual-tools/two-sets-basic-venn',
// // //       linkText: 'two-set Venn explorer',
// // //     }),
// // //   };

// // //   return {
// // //   props: {
// // //     sectionsContent,
// // //     introContent,
// // //     obj5Table,
// // //     obj6Table,
// // //     summaryTable,
// // //     faqQuestions,
// // //     schemas,
// // //     demoUnits,
// // //     seoData: {
// // //       title: "Cardinality of Sets: Finite, Countable & Uncountable | Learn Math Class",
// // //       description: "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
// // //       keywords: keyWords.join(", "),
// // //       url: "/set-theory/cardinality",
// // //       name: "Cardinality of Sets"
// // //     },
// // //   }
// // // }
// // //    }


// // // export default function CardinalityPage({seoData, sectionsContent, introContent, obj5Table, obj6Table, summaryTable, faqQuestions, schemas, demoUnits}) {

// // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // //   const genericSections=[
// // //     {
// // //         id:'0',
// // //         title:sectionsContent.obj0.title,
// // //         link:sectionsContent.obj0.link,
// // //         content:[
// // //           sectionsContent.obj0.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'1',
// // //         title:sectionsContent.obj1.title,
// // //         link:sectionsContent.obj1.link,
// // //         content:[
// // //           sectionsContent.obj1.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'2',
// // //         title:sectionsContent.obj2.title,
// // //         link:sectionsContent.obj2.link,
// // //         content:[
// // //           sectionsContent.obj2.content,
// // //           <div key={'unit-inclusion-exclusion'} dangerouslySetInnerHTML={{ __html: demoUnits.inclusionExclusion }} />,
// // //           `Counting without double-counting is the entire craft of finite cardinality — inclusion-exclusion just states it as a formula, and it scales to any number of sets.`,
// // //         ]
// // //     },
// // //     {
// // //         id:'3',
// // //         title:sectionsContent.obj3.title,
// // //         link:sectionsContent.obj3.link,
// // //         content:[
// // //           sectionsContent.obj3.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'4',
// // //         title:sectionsContent.obj4.title,
// // //         link:sectionsContent.obj4.link,
// // //         content:[
// // //           sectionsContent.obj4.content,
// // //         ]
// // //     },

// // //     // obj5: prose + countable-vs-uncountable comparison table
// // //     // (placed here since obj4 + obj5 together define both categories; the table synthesizes both)
// // //     {
// // //         id:'5',
// // //         title:sectionsContent.obj5.title,
// // //         link:sectionsContent.obj5.link,
// // //         content:[
// // //           sectionsContent.obj5.content,
// // //           <div
// // //             key={'obj5-table'}
// // //             style={tableWrapStyle}
// // //             dangerouslySetInnerHTML={{ __html: obj5Table }}
// // //           />,
// // //         ]
// // //     },

// // //     // obj6: prose + cardinality-comparison-relations aggregation table
// // //     {
// // //         id:'notation',
// // //         title:sectionsContent.notation.title,
// // //         link:``,
// // //         content:[
// // //           <NotationSection
// // //             key={'notation'}
// // //             title={sectionsContent.notation.title}
// // //             lead={sectionsContent.notation.lead}
// // //             inherited={sectionsContent.notation.inherited}
// // //             entries={sectionsContent.notation.entries}
// // //             symbolsHref={sectionsContent.notation.symbolsHref}
// // //             symbolsLabel={sectionsContent.notation.symbolsLabel}
// // //             parentHref={sectionsContent.notation.parentHref}
// // //             parentLabel={sectionsContent.notation.parentLabel}
// // //             theme={'navy'}
// // //           />,
// // //         ]
// // //     },
// // //     {
// // //         id:'6',
// // //         title:sectionsContent.obj6.title,
// // //         link:sectionsContent.obj6.link,
// // //         content:[
// // //           sectionsContent.obj6.content,
// // //           <div
// // //             key={'obj6-table'}
// // //             style={tableWrapStyle}
// // //             dangerouslySetInnerHTML={{ __html: obj6Table }}
// // //           />,
// // //         ]
// // //     },

// // //     // obj7: NEW capstone — hierarchy of cardinalities
// // //     {
// // //         id:'7',
// // //         title:sectionsContent.obj7.title,
// // //         link:sectionsContent.obj7.link,
// // //         content:[
// // //           sectionsContent.obj7.content,
// // //           <div
// // //             key={'summary-table'}
// // //             style={tableWrapStyle}
// // //             dangerouslySetInnerHTML={{ __html: summaryTable }}
// // //           />,
// // //         ]
// // //     },
// // //     // {
// // //     //     id:'8',
// // //     //     title:sectionsContent.obj8.title,
// // //     //     link:sectionsContent.obj8.link,
// // //     //     content:[
// // //     //       sectionsContent.obj8.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'9',
// // //     //     title:sectionsContent.obj9.title,
// // //     //     link:sectionsContent.obj9.link,
// // //     //     content:[
// // //     //       sectionsContent.obj9.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'10',
// // //     //     title:sectionsContent.obj10.title,
// // //     //     link:sectionsContent.obj10.link,
// // //     //     content:[
// // //     //       sectionsContent.obj10.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'11',
// // //     //     title:sectionsContent.obj11.title,
// // //     //     link:sectionsContent.obj11.link,
// // //     //     content:[
// // //     //       sectionsContent.obj11.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'12',
// // //     //     title:sectionsContent.obj12.title,
// // //     //     link:sectionsContent.obj12.link,
// // //     //     content:[
// // //     //       sectionsContent.obj12.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'13',
// // //     //     title:sectionsContent.obj13.title,
// // //     //     link:sectionsContent.obj13.link,
// // //     //     content:[
// // //     //       sectionsContent.obj13.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'14',
// // //     //     title:sectionsContent.obj14.title,
// // //     //     link:sectionsContent.obj14.link,
// // //     //     content:[
// // //     //       sectionsContent.obj14.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'15',
// // //     //     title:sectionsContent.obj15.title,
// // //     //     link:sectionsContent.obj15.link,
// // //     //     content:[
// // //     //       sectionsContent.obj15.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
    
// // // ]

// // //   return (
// // //    <>
 

// // // <Head>
// // //   <title>{seoData.title}</title>
// // //   <meta name="description" content={seoData.description} />
// // //   <meta name="keywords" content={seoData.keywords} />
// // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// // //   <meta property="og:title" content={seoData.title} />
// // //   <meta property="og:description" content={seoData.description} />
// // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //   <meta property="og:type" content="article" />
// // //   <meta property="og:site_name" content="Learn Math Class" />
  
// // //   <meta name="twitter:card" content="summary" />
// // //   <meta name="twitter:title" content={seoData.title} />
// // //   <meta name="twitter:description" content={seoData.description} />
  
// // //   <meta name="robots" content="index, follow" />
  
// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify(schemas.learningResource)
// // //     }}
// // //   />

// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify(schemas.breadcrumb)
// // //     }}
// // //   />

// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify(schemas.faq)
// // //     }}
// // //   />
// // // </Head>
// // //    {/* <GenericNavbar/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <OperaSidebar 
// // //            side='right'
// // //            // topOffset='65px' 
// // //            sidebarWidth='45px'
// // //            panelWidth='200px'
// // //            iconColor='white'
// // //            panelBackgroundColor='#f2f2f2'
// // //          /> 
// // //    <Breadcrumb/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cardinality of Sets</h1>
// // //    <br/>
// // //    <br/>
// // //    <SectionTableOfContents sections={genericSections}
// // //     showSecondaryNav={true}
// // //          secondaryNavMode="siblings"  // or "children"
// // //          secondaryNavTitle="More in this Section"
   
// // //    />
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <IntroSection 
// // //           id={introContent.id}
// // //           title={introContent.title}
// // //           content={introContent.content}
// // //            backgroundColor='#f9fafb'
// // //           //  "#f2f2f2"
// // //           textColor="#06357a"
// // //         />
// // //    <br/>
// // //      <KeyTermsCard
// // //            id="0"
// // //            title={sectionsContent.obj0.title}
// // //            content={sectionsContent.obj0.content}
// // //            after={sectionsContent.obj0.after}
// // //            variant="light"
// // //          />
// // //    <br/>
// // //    <Sections sections={genericSections.slice(1)}/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    {/* <ScrollUpButton/> */}
// // //    </>
// // //   )
// // // }



// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import React from 'react'
// // import '../../pages.css'
// // import Head from 'next/head'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// // import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
// // import { tableHeaders } from '@/app/styles/theme'
// // import twoSetsVennDiagrams from '@/app/components/venn-diagrams/twoSetsVennDiagrams'
// // import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


// // export async function getStaticProps(){
// // const keyWords = [
// //   "cardinality of sets",
// //   "cardinality definition",
// //   "finite sets",
// //   "infinite sets",
// //   "countable sets",
// //   "uncountable sets",
// //   "countably infinite",
// //   "cardinality of real numbers",
// //   "cardinality of integers",
// //   "bijection between sets",
// //   "cantors diagonal argument",
// //   "comparing infinite sets",
// //   "power set cardinality",
// //   "size of infinity"
// // ]

// //   const linkStyle = 'color: inherit; text-decoration: underline;'

// //   // ---------- TABLES ----------

// //   // obj5 — comparison: countable vs uncountable
// //   const obj5Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.comparison}">Category</th>
// //       <th style="${tableHeaders.comparison}">Defining condition</th>
// //       <th style="${tableHeaders.comparison}">Example sets</th>
// //       <th style="${tableHeaders.comparison}">Standard proof technique</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Countably infinite</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection with ℕ exists</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; even integers</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">construct an explicit listing &nbsp;(sequence) of all elements</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Uncountable</td>
// //       <td style="padding: 12px 15px; color: #34495e;">no bijection with ℕ is possible</td>
// //       <td style="padding: 12px 15px; color: #34495e;">ℝ; any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">Cantor&apos;s diagonal argument &nbsp;(or Cantor&apos;s theorem)</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj6 — aggregation: cardinality comparison relations as a notation reference card
// //   const obj6Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Relation</th>
// //       <th style="${tableHeaders.aggregation}">Meaning</th>
// //       <th style="${tableHeaders.aggregation}">Witnessed by</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = |B|</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B have the same cardinality</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection &nbsp;A → B</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| ≤ |B|</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is no larger than B</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an injection &nbsp;A → B</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">|A| &lt; |B|</td>
// //       <td style="padding: 12px 15px; color: #34495e;">A is strictly smaller than B</td>
// //       <td style="padding: 12px 15px; color: #34495e;">an injection exists, but no bijection does</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj7 — summary: capstone hierarchy of cardinalities
// //   const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Cardinality</th>
// //       <th style="${tableHeaders.summary}">Description</th>
// //       <th style="${tableHeaders.summary}">Representative set(s)</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">empty</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅ &nbsp;(the only set with this cardinality)</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">finite n &nbsp;(n ∈ ℕ)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded element count</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2, ..., n}; &nbsp;the English alphabet &nbsp;(n = 26)</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ℵ<sub>0</sub> &nbsp;(aleph-null)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">countably infinite — the smallest infinite cardinality</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; &nbsp;the even integers</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">𝔠 = 2<sup>ℵ<sub>0</sub></sup> &nbsp;(continuum)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uncountable; the size of the real line</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ; &nbsp;any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">2<sup>𝔠</sup>, &nbsp;2<sup>(2<sup>𝔠</sup>)</sup>, &nbsp;...</td>
// //       <td style="padding: 12px 15px; color: #34495e;">strictly larger uncountable cardinalities &nbsp;(by Cantor&apos;s theorem)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">𝒫(ℝ); &nbsp;𝒫(𝒫(ℝ)); &nbsp;the hierarchy continues without end</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // const sectionsContent = {
// //     obj0: {
// //   title: `Key Terms`,
// //   content: `
// // - [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set
// // - [Finite Set](!/set-theory/definitions#finite_set) — a set with a bounded element count
// // - [Infinite Set](!/set-theory/definitions#infinite_set) — a set that cannot be matched with any finite count
// // - [Countable Set](!/set-theory/definitions#countable_set) — a set whose elements can be listed in a sequence
// // - [Uncountable Set](!/set-theory/definitions#uncountable_set) — a set too large to be listed sequentially
// // - [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — sets related by having the same cardinality
// // - [Power Set](!/set-theory/definitions#power_set) — always produces a set of strictly larger cardinality


// // `,
// //   before: ``,
// //   after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
// //   link: '',
// // },
// //   obj1: {
// //     title: `Definition of Cardinality`,
// //     content: `
// // The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$. This bar notation is one of several [cardinality symbols](!/math-symbols/set-theory) in standard use.

// // For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.

// // The empty set contains no elements:

// // $$|\\emptyset| = 0$$

// // Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj2: {
// //     title: `Finite Sets`,
// //     content: `
// // A set is finite if its elements can be counted with a natural number. Formally, a set $A$ is finite if there exists some $n \\in \\mathbb{N}$ such that:

// // $$|A| = n$$

// // This means a bijection exists between $A$ and the set $\\{1, 2, 3, \\ldots, n\\}$.

// // Examples of finite sets:

// // - The set of letters in the English alphabet has cardinality $26$

// // - The set of prime numbers less than $20$ is $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ with cardinality $8$

// // - Any [subset](!/set-theory/subsets) of a finite set is finite

// // The cardinality of a finite union of finite sets satisfies the inclusion-exclusion principle:

// // @academic[formula_callout:Inclusion-Exclusion - Two Sets
// // $$|A \\cup B| = |A| + |B| - |A \\cap B|$$
// // /set-theory/formulas#inclusion-exclusion_-_two_sets]@

// // @academic[formulas_link:Browse all set theory formulas
// // /set-theory/formulas]@

// // The correction term $|A \\cap B|$ accounts for elements counted twice when the sets overlap. The pattern extends to three sets by alternating between adding singles, subtracting pairwise intersections, and adding back the triple intersection:

// // @academic[formula_callout:Inclusion-Exclusion - Three Sets
// // $$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$
// // /set-theory/formulas#inclusion-exclusion_-_three_sets]@

// // @academic[formulas_link:Browse all set theory formulas
// // /set-theory/formulas]@

// // When the sets share no elements, the correction terms vanish and the cardinality simply adds:

// // @academic[formula_callout:Cardinality of Disjoint Union
// // $$|A \\cup B| = |A| + |B| \\quad \\text{when } A \\cap B = \\emptyset$$
// // /set-theory/formulas#cardinality_of_disjoint_union]@

// // @academic[formulas_link:Browse all set theory formulas
// // /set-theory/formulas]@
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj3: {
// //     title: `Infinite Sets`,
// //     content: `
// // A set is infinite if it is not finite — no natural number can express its size.

// // The standard number sets are all infinite:

// // - $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — the natural numbers

// // - $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — the integers

// // - $\\mathbb{Q}$ — the rational numbers

// // - $\\mathbb{R}$ — the real numbers

// // A defining property of infinite sets: an infinite set can be put into one-to-one correspondence with a proper subset of itself. For example, the function $f(n) = 2n$ maps $\\mathbb{N}$ bijectively onto the even numbers, which form a proper subset of $\\mathbb{N}$.

// // Not all infinite sets have the same cardinality. The integers and rationals turn out to be the same size as the natural numbers, but the real numbers form a strictly larger infinity.
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj4: {
// //     title: `Countable Sets`,
// //     content: `
// // A set is countably infinite if its elements can be put in one-to-one correspondence with the natural numbers $\\mathbb{N}$. Such a set can be listed as a sequence:

// // $$a_1, a_2, a_3, \\ldots$$

// // where every element appears exactly once.

// // The integers $\\mathbb{Z}$ are countable. The listing:

// // $$0, 1, -1, 2, -2, 3, -3, \\ldots$$

// // establishes a bijection with $\\mathbb{N}$.

// // The rationals $\\mathbb{Q}$ are countable despite appearing denser than $\\mathbb{Z}$. By arranging positive rationals in a grid and traversing diagonally, every rational is eventually listed.

// // A set is called countable if it is either finite or countably infinite. Some authors reserve "countable" for countably infinite sets only — context determines the convention.

// // The union of countably many countable sets remains countable. This is why $\\mathbb{Q}$ is countable: it is a countable union of countable sets (rationals with each fixed denominator).
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj5: {
// //     title: `Uncountable Sets`,
// //     content: `
// // A set is uncountable if it is infinite but not countable — its elements cannot be listed in a sequence that covers them all.

// // The real numbers $\\mathbb{R}$ are uncountable. Cantor's diagonal argument proves this: assume a listing of all real numbers between $0$ and $1$ exists. Construct a new number by making its $n$-th decimal digit different from the $n$-th digit of the $n$-th number in the list. This new number differs from every listed number, contradicting the assumption that the list was complete.

// // Any interval $(a, b)$ with $a < b$ is uncountable. In fact, every such interval has the same cardinality as $\\mathbb{R}$ itself — a bijection exists between them.

// // The cardinality of $\\mathbb{R}$ is denoted $\\mathfrak{c}$ (for continuum) or $2^{\\aleph_0}$, indicating it equals the cardinality of the [power set](!/set-theory/subsets#5) of $\\mathbb{N}$.
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   notation: {
// //     title: `Cardinality Notation`,
// //     lead: `Size gets a bar pair, infinity gets a Hebrew letter, and the continuum gets a Fraktur one — three generations of marks for one question: how many members? The variant zoo ($\\operatorname{card}$, $\\#$, $n(A)$) rides along.`,
// //     inherited: `The braces, $\\in$, $\\varnothing$ and set-builder come from [set theory basics](!/set-theory/basics#2); the power set $\\mathcal{P}(A)$ and $2^A$ behind the continuum from the [subsets page](!/set-theory/subsets#6); the double-struck ℕ–ℝ chain likewise.`,
// //     entries: [
// //       {
// //         id: 'bar-pair',
// //         tex: `$|A|$`,
// //         read: `the cardinality of A`,
// //         means: `The bar pair around a set counts it: $|A| = 3$ for $A = \\{1, 2, 3\\}$ — **Definition of Cardinality** above. The same fence with a different tenant: on numbers the bars mean [absolute value](!/algebra/equations/absolute-value#notation), on sets they count.`,
// //         cases: `The variant zoo by dialect: $\\operatorname{card}(A)$ in formal set theory, $\\#A$ in combinatorics, $n(A)$ in school probability texts, $\\|A\\|$ occasionally — all the same question; this site keeps the bars.`,
// //         confusedWith: `A number's magnitude. $|{-5}| = 5$ but $|\\{-5\\}| = 1$ — bars around the number measure distance, bars around the braces count members; the inner braces flip the meaning entirely.`,
// //       },
// //       {
// //         id: 'aleph-null',
// //         tex: `$\\aleph_0$`,
// //         read: `aleph-null; aleph-nought`,
// //         means: `The first infinite cardinal: $|\\mathbb{N}| = \\aleph_0$ — the size shared by every countably infinite set, as **Countable Sets** above establishes. The aleph is mathematics' one standard Hebrew letter, Cantor's own choice; the [mathematical keyboard](!/keyboard) carries it, along with the $\\beth$ that follows it.`,
// //         cases: `The subscript starts a ladder — $\\aleph_0, \\aleph_1, \\ldots$ enumerate ever-larger infinities; $|\\mathbb{Z}| = |\\mathbb{Q}| = \\aleph_0$ despite appearances, the working surprise of the countability arguments above.`,
// //         confusedWith: `The infinity symbol. $\\aleph_0$ is a cardinal — a size — while the $\\infty$ of [limit notation](!/calculus/limits/infinity#notation) is a direction of growth; the two never interchange, and $\\aleph_0 + 1 = \\aleph_0$ obeys arithmetic $\\infty$ was never given.`,
// //       },
// //       {
// //         id: 'continuum',
// //         tex: `$\\mathfrak{c} = 2^{\\aleph_0}$`,
// //         read: `the continuum; two to the aleph-null`,
// //         means: `The size of the reals: $|\\mathbb{R}| = \\mathfrak{c}$, in Fraktur type — the blackletter font also seen on the [real-part marks](!/complex-numbers/algebraic-form#2) $\\Re$ and $\\Im$. The exponent spelling $2^{\\aleph_0}$ reads it as a power-set size, via $|\\mathcal{P}(A)| = 2^{|A|}$ from the [subsets page](!/set-theory/subsets#6).`,
// //         cases: `Strictness is the point: $\\aleph_0 < \\mathfrak{c}$ — **Uncountable Sets** above proves the gap with Cantor's diagonal; every interval $(a, b)$ already has full cardinality $\\mathfrak{c}$.`,
// //         confusedWith: `A plain letter c. The Fraktur stroke is the reservation — roman $c$ is a free constant; and $2^{\\aleph_0}$ is not "a huge finite power of two" but a set-sized exponent, legal only in cardinal arithmetic.`,
// //       },
// //     ],
// //     symbolsHref: `/math-symbols/set-theory`,
// //     symbolsLabel: `All set theory symbols`,
// //     parentHref: `/set-theory`,
// //     parentLabel: `Set Theory`,
// //   },
// //   obj6: {
// //     title: `Comparing Cardinalities`,
// //     content: `
// // Cardinalities are compared using functions between sets:

// // - $|A| = |B|$ when a bijection exists between $A$ and $B$

// // - $|A| \\leq |B|$ when an injection (one-to-one function) exists from $A$ to $B$

// // - $|A| < |B|$ when $|A| \\leq |B|$ and $|A| \\neq |B|$

// // The Cantor-Schröder-Bernstein theorem states: if $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|$.

// // Cantor's theorem establishes a fundamental inequality for any set $A$:

// // @academic[formula_callout:Cantor Theorem
// // $$|A| < |\\mathcal{P}(A)|$$
// // /set-theory/formulas#cantor_theorem]@

// // @academic[formulas_link:Browse all set theory formulas
// // /set-theory/formulas]@

// // The [power set](!/set-theory/subsets) always has strictly greater cardinality than the original set. For finite sets, this is immediate: $2^n > n$. For infinite sets, the proof uses a diagonal argument similar to the uncountability of $\\mathbb{R}$.

// // This theorem implies there is no largest cardinality — given any set, its power set is strictly larger, producing an endless hierarchy of infinite sizes.
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj7: {
// //     title: `Summary: A Hierarchy of Cardinalities`,
// //     content: `
// // The sets covered above arrange themselves into a strict hierarchy of sizes. The table below collects the major rungs — empty, finite, countably infinite, the continuum, and beyond — with a representative set at each level. Cantor's theorem guarantees the hierarchy never ends: for every set, its power set is strictly larger, producing an unbounded tower of cardinalities.
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   faq: {
// //     title: `Frequently Asked Questions`,
// //   },
// // }; 


// // const introContent = {
// //   id: "intro",
// //   title: `Measuring the Size of Sets`,
// //   content: `
// // Cardinality measures the size of a [set](!/set-theory) — how many elements it contains. For finite sets, cardinality is simply a count. For infinite sets, the situation becomes more subtle: different infinite sets can have different sizes, and comparing them requires the concept of one-to-one correspondence. This leads to the distinction between countable and uncountable infinities.
// //   `,
// // };


// // const faqQuestions = {
// //   obj1: {
// //     question: "What is the cardinality of a set?",
// //     answer: "Cardinality measures the number of elements in a set, denoted |A|. For finite sets, it's a count. For infinite sets, two sets have equal cardinality when a bijection (one-to-one correspondence) exists between them.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "What is a finite set?",
// //     answer: "A set is finite if its elements can be counted with a natural number n. A bijection exists between the set and {1, 2, ..., n}. Any subset of a finite set is also finite.",
// //     sectionId: "2"
// //   },
// //   obj3: {
// //     question: "What is an infinite set?",
// //     answer: "A set is infinite if no natural number expresses its size. Infinite sets can be mapped bijectively onto proper subsets of themselves — for example, natural numbers onto even numbers via f(n) = 2n.",
// //     sectionId: "3"
// //   },
// //   obj4: {
// //     question: "What does countably infinite mean?",
// //     answer: "A set is countably infinite if its elements can be listed as a sequence a₁, a₂, a₃, ... covering every element exactly once. The integers and rationals are countably infinite.",
// //     sectionId: "4"
// //   },
// //   obj5: {
// //     question: "Are the rational numbers countable?",
// //     answer: "Yes. By arranging positive rationals in a grid and traversing diagonally, every rational appears in the sequence. The union of countably many countable sets remains countable.",
// //     sectionId: "4"
// //   },
// //   obj6: {
// //     question: "What is an uncountable set?",
// //     answer: "A set is uncountable if it is infinite but cannot be listed in a sequence. The real numbers are uncountable — Cantor's diagonal argument proves no list can include every real number.",
// //     sectionId: "5"
// //   },
// //   obj7: {
// //     question: "What is Cantor's diagonal argument?",
// //     answer: "Assume all reals between 0 and 1 are listed. Construct a new number by making its n-th digit differ from the n-th digit of the n-th listed number. This number isn't in the list, proving the reals are uncountable.",
// //     sectionId: "5"
// //   },
// //   obj8: {
// //     question: "How do you compare cardinalities of infinite sets?",
// //     answer: "|A| ≤ |B| when an injection exists from A to B. |A| = |B| when a bijection exists. The Cantor-Schröder-Bernstein theorem states: if |A| ≤ |B| and |B| ≤ |A|, then |A| = |B|.",
// //     sectionId: "6"
// //   },
// //   obj9: {
// //     question: "What is Cantor's theorem about power sets?",
// //     answer: "For any set A, |A| < |P(A)| — the power set always has strictly greater cardinality. This implies there is no largest infinity; each power set produces a larger one.",
// //     sectionId: "6"
// //   },
// //   obj10: {
// //     question: "What is the cardinality of the real numbers?",
// //     answer: "The cardinality of ℝ is denoted 𝔠 (continuum) or 2^ℵ₀, equal to the cardinality of the power set of ℕ. Every interval (a, b) has this same cardinality.",
// //     sectionId: "5"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Cardinality of Sets",
// //     "description": "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
// //     "url": "https://www.learnmathclass.com/set-theory/cardinality",
// //     "inLanguage": "en-US",
// //     "learningResourceType": "Explanation",
// //     "educationalLevel": "High School, College",
// //     "educationalUse": "Learning",
// //     "audience": {
// //       "@type": "EducationalAudience",
// //       "educationalRole": "student"
// //     },
// //     "about": {
// //       "@type": "Thing",
// //       "name": "Cardinality of Sets"
// //     },
// //     "teaches": [
// //       "Definition of cardinality and bijections",
// //       "Finite sets and counting",
// //       "Properties of infinite sets",
// //       "Countable and countably infinite sets",
// //       "Uncountable sets and Cantor's diagonal argument",
// //       "Comparing cardinalities and Cantor's theorem"
// //     ],
// //     "keywords": keyWords.join(", "),
// //     "author": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "publisher": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "datePublished": "2024-01-15",
// //     "dateModified": new Date().toISOString()
// //   },

// //   breadcrumb: {
// //     "@context": "https://schema.org",
// //     "@type": "BreadcrumbList",
// //     "itemListElement": [
// //       {
// //         "@type": "ListItem",
// //         "position": 1,
// //         "name": "Home",
// //         "item": "https://www.learnmathclass.com"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 2,
// //         "name": "Set Theory",
// //         "item": "https://www.learnmathclass.com/set-theory"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": "Cardinality",
// //         "item": "https://www.learnmathclass.com/set-theory/cardinality"
// //       }
// //     ]
// //   }
// // }


// //   // Operation A demonstration unit: frozen tool states + attached explanation
// //   // panel + tool link, one frame. Rendered as a content-array item.
// //   const demoUnits = {
// //     inclusionExclusion: demoUnitFrame({
// //       svg: [twoSetsVennDiagrams.union, twoSetsVennDiagrams.disjoint],
// //       caption: 'Why the correction term exists',
// //       text: 'Two frozen configurations tell the whole story: when the circles overlap (top), the lens lies inside both sets &#8212; summing |A| + |B| counts it twice, so |A &#8745; B| is subtracted once. When the sets are disjoint (bottom), there is no lens and the counts simply add. Slide between the two situations yourself on the',
// //       href: '/set-theory/visual-tools/two-sets-basic-venn',
// //       linkText: 'two-set Venn explorer',
// //     }),
// //   };

// //   return {
// //   props: {
// //     sectionsContent,
// //     introContent,
// //     obj5Table,
// //     obj6Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     demoUnits,
// //     seoData: {
// //       title: "Cardinality of Sets: Finite, Countable & Uncountable | Learn Math Class",
// //       description: "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
// //       keywords: keyWords.join(", "),
// //       url: "/set-theory/cardinality",
// //       name: "Cardinality of Sets"
// //     },
// //   }
// // }
// //    }


// // export default function CardinalityPage({seoData, sectionsContent, introContent, obj5Table, obj6Table, summaryTable, faqQuestions, schemas, demoUnits}) {

// //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// //   const genericSections=[
// //     {
// //         id:'0',
// //         title:sectionsContent.obj0.title,
// //         link:sectionsContent.obj0.link,
// //         content:[
// //           sectionsContent.obj0.content,
// //         ]
// //     },
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //           <div key={'unit-inclusion-exclusion'} dangerouslySetInnerHTML={{ __html: demoUnits.inclusionExclusion }} />,
// //           `Counting without double-counting is the entire craft of finite cardinality — inclusion-exclusion just states it as a formula, and it scales to any number of sets.`,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },

// //     // obj5: prose + countable-vs-uncountable comparison table
// //     // (placed here since obj4 + obj5 together define both categories; the table synthesizes both)
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //           <div
// //             key={'obj5-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: obj5Table }}
// //           />,
// //         ]
// //     },

// //     // obj6: prose + cardinality-comparison-relations aggregation table
// //     {
// //         id:'notation',
// //         title:sectionsContent.notation.title,
// //         link:``,
// //         content:[
// //           <NotationSection
// //             key={'notation'}
// //             title={sectionsContent.notation.title}
// //             lead={sectionsContent.notation.lead}
// //             inherited={sectionsContent.notation.inherited}
// //             entries={sectionsContent.notation.entries}
// //             symbolsHref={sectionsContent.notation.symbolsHref}
// //             symbolsLabel={sectionsContent.notation.symbolsLabel}
// //             parentHref={sectionsContent.notation.parentHref}
// //             parentLabel={sectionsContent.notation.parentLabel}
// //             theme={'navy'}
// //           />,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //           <div
// //             key={'obj6-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: obj6Table }}
// //           />,
// //         ]
// //     },

// //     // obj7: NEW capstone — hierarchy of cardinalities
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //           <div
// //             key={'summary-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: summaryTable }}
// //           />,
// //         ]
// //     },

// //     // faq: rendered component — must be built here, not in getStaticProps
// //     {
// //         id:'faq',
// //         title:sectionsContent.faq.title,
// //         link:``,
// //         content:[
// //           <FAQSection
// //             key={'faq'}
// //             faqQuestions={faqQuestions}
// //             theme={'blueGradient'}
// //             width={'100%'}
// //           />,
// //         ]
// //     },
// // ]

// //   return (
// //    <>
 

// // <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.learningResource)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.breadcrumb)
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cardinality of Sets</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    />
// //    <br/>
// //    <br/>
// //    <br/>
// //     <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         />
// //    <br/>
// //      <KeyTermsCard
// //            id="0"
// //            title={sectionsContent.obj0.title}
// //            content={sectionsContent.obj0.content}
// //            after={sectionsContent.obj0.after}
// //            variant="light"
// //          />
// //    <br/>
// //    <Sections sections={genericSections.slice(1)}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
// import { tableHeaders } from '@/app/styles/theme'
// import twoSetsVennDiagrams from '@/app/components/venn-diagrams/twoSetsVennDiagrams'
// import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


// export async function getStaticProps(){
// const keyWords = [
//   "cardinality of sets",
//   "cardinality definition",
//   "finite sets",
//   "infinite sets",
//   "countable sets",
//   "uncountable sets",
//   "countably infinite",
//   "cardinality of real numbers",
//   "cardinality of integers",
//   "bijection between sets",
//   "cantors diagonal argument",
//   "comparing infinite sets",
//   "power set cardinality",
//   "size of infinity"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj5 — comparison: countable vs uncountable
//   const obj5Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Category</th>
//       <th style="${tableHeaders.comparison}">Defining condition</th>
//       <th style="${tableHeaders.comparison}">Example sets</th>
//       <th style="${tableHeaders.comparison}">Standard proof technique</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Countably infinite</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection with ℕ exists</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; even integers</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">construct an explicit listing &nbsp;(sequence) of all elements</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Uncountable</td>
//       <td style="padding: 12px 15px; color: #34495e;">no bijection with ℕ is possible</td>
//       <td style="padding: 12px 15px; color: #34495e;">ℝ; any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
//       <td style="padding: 12px 15px; color: #34495e;">Cantor&apos;s diagonal argument &nbsp;(or Cantor&apos;s theorem)</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj6 — aggregation: cardinality comparison relations as a notation reference card
//   const obj6Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Relation</th>
//       <th style="${tableHeaders.aggregation}">Meaning</th>
//       <th style="${tableHeaders.aggregation}">Witnessed by</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = |B|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B have the same cardinality</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection &nbsp;A → B</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| ≤ |B|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is no larger than B</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an injection &nbsp;A → B</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">|A| &lt; |B|</td>
//       <td style="padding: 12px 15px; color: #34495e;">A is strictly smaller than B</td>
//       <td style="padding: 12px 15px; color: #34495e;">an injection exists, but no bijection does</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj7 — summary: capstone hierarchy of cardinalities
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Cardinality</th>
//       <th style="${tableHeaders.summary}">Description</th>
//       <th style="${tableHeaders.summary}">Representative set(s)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">empty</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅ &nbsp;(the only set with this cardinality)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">finite n &nbsp;(n ∈ ℕ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded element count</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2, ..., n}; &nbsp;the English alphabet &nbsp;(n = 26)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ℵ<sub>0</sub> &nbsp;(aleph-null)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">countably infinite — the smallest infinite cardinality</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; &nbsp;the even integers</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">𝔠 = 2<sup>ℵ<sub>0</sub></sup> &nbsp;(continuum)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uncountable; the size of the real line</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ; &nbsp;any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">2<sup>𝔠</sup>, &nbsp;2<sup>(2<sup>𝔠</sup>)</sup>, &nbsp;...</td>
//       <td style="padding: 12px 15px; color: #34495e;">strictly larger uncountable cardinalities &nbsp;(by Cantor&apos;s theorem)</td>
//       <td style="padding: 12px 15px; color: #34495e;">𝒫(ℝ); &nbsp;𝒫(𝒫(ℝ)); &nbsp;the hierarchy continues without end</td>
//     </tr>
//   </tbody>
// </table>
// `

// const sectionsContent = {
//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set
// - [Finite Set](!/set-theory/definitions#finite_set) — a set with a bounded element count
// - [Infinite Set](!/set-theory/definitions#infinite_set) — a set that cannot be matched with any finite count
// - [Countable Set](!/set-theory/definitions#countable_set) — a set whose elements can be listed in a sequence
// - [Uncountable Set](!/set-theory/definitions#uncountable_set) — a set too large to be listed sequentially
// - [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — sets related by having the same cardinality
// - [Power Set](!/set-theory/definitions#power_set) — always produces a set of strictly larger cardinality


// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
//   link: '',
// },
//   obj1: {
//     title: `Definition of Cardinality`,
//     content: `
// The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$. This bar notation is one of several [cardinality symbols](!/math-symbols/set-theory) in standard use.

// For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.

// The empty set contains no elements:

// $$|\\emptyset| = 0$$

// Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Finite Sets`,
//     content: `
// A set is finite if its elements can be counted with a natural number. Formally, a set $A$ is finite if there exists some $n \\in \\mathbb{N}$ such that:

// $$|A| = n$$

// This means a bijection exists between $A$ and the set $\\{1, 2, 3, \\ldots, n\\}$.

// Examples of finite sets:

// - The set of letters in the English alphabet has cardinality $26$

// - The set of prime numbers less than $20$ is $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ with cardinality $8$

// - Any [subset](!/set-theory/subsets) of a finite set is finite

// The cardinality of a finite union of finite sets satisfies the inclusion-exclusion principle:

// @academic[formula_callout:Inclusion-Exclusion - Two Sets
// $$|A \\cup B| = |A| + |B| - |A \\cap B|$$
// /set-theory/formulas#inclusion-exclusion_-_two_sets]@

// @academic[formulas_link:Browse all set theory formulas
// /set-theory/formulas]@

// The correction term $|A \\cap B|$ accounts for elements counted twice when the sets overlap. The pattern extends to three sets by alternating between adding singles, subtracting pairwise intersections, and adding back the triple intersection:

// @academic[formula_callout:Inclusion-Exclusion - Three Sets
// $$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$
// /set-theory/formulas#inclusion-exclusion_-_three_sets]@

// @academic[formulas_link:Browse all set theory formulas
// /set-theory/formulas]@

// When the sets share no elements, the correction terms vanish and the cardinality simply adds:

// @academic[formula_callout:Cardinality of Disjoint Union
// $$|A \\cup B| = |A| + |B| \\quad \\text{when } A \\cap B = \\emptyset$$
// /set-theory/formulas#cardinality_of_disjoint_union]@

// @academic[formulas_link:Browse all set theory formulas
// /set-theory/formulas]@
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Infinite Sets`,
//     content: `
// A set is infinite if it is not finite — no natural number can express its size.

// The standard number sets are all infinite:

// - $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — the natural numbers

// - $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — the integers

// - $\\mathbb{Q}$ — the rational numbers

// - $\\mathbb{R}$ — the real numbers

// A defining property of infinite sets: an infinite set can be put into one-to-one correspondence with a proper subset of itself. For example, the function $f(n) = 2n$ maps $\\mathbb{N}$ bijectively onto the even numbers, which form a proper subset of $\\mathbb{N}$.

// Not all infinite sets have the same cardinality. The integers and rationals turn out to be the same size as the natural numbers, but the real numbers form a strictly larger infinity.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Countable Sets`,
//     content: `
// A set is countably infinite if its elements can be put in one-to-one correspondence with the natural numbers $\\mathbb{N}$. Such a set can be listed as a sequence:

// $$a_1, a_2, a_3, \\ldots$$

// where every element appears exactly once.

// The integers $\\mathbb{Z}$ are countable. The listing:

// $$0, 1, -1, 2, -2, 3, -3, \\ldots$$

// establishes a bijection with $\\mathbb{N}$.

// The rationals $\\mathbb{Q}$ are countable despite appearing denser than $\\mathbb{Z}$. By arranging positive rationals in a grid and traversing diagonally, every rational is eventually listed.

// A set is called countable if it is either finite or countably infinite. Some authors reserve "countable" for countably infinite sets only — context determines the convention.

// The union of countably many countable sets remains countable. This is why $\\mathbb{Q}$ is countable: it is a countable union of countable sets (rationals with each fixed denominator).
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Uncountable Sets`,
//     content: `
// A set is uncountable if it is infinite but not countable — its elements cannot be listed in a sequence that covers them all.

// The real numbers $\\mathbb{R}$ are uncountable. Cantor's diagonal argument proves this: assume a listing of all real numbers between $0$ and $1$ exists. Construct a new number by making its $n$-th decimal digit different from the $n$-th digit of the $n$-th number in the list. This new number differs from every listed number, contradicting the assumption that the list was complete.

// Any interval $(a, b)$ with $a < b$ is uncountable. In fact, every such interval has the same cardinality as $\\mathbb{R}$ itself — a bijection exists between them.

// The cardinality of $\\mathbb{R}$ is denoted $\\mathfrak{c}$ (for continuum) or $2^{\\aleph_0}$, indicating it equals the cardinality of the [power set](!/set-theory/subsets#5) of $\\mathbb{N}$.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   notation: {
//     title: `Cardinality Notation`,
//     lead: `Size gets a bar pair, infinity gets a Hebrew letter, and the continuum gets a Fraktur one — three generations of marks for one question: how many members? The variant zoo ($\\operatorname{card}$, $\\#$, $n(A)$) rides along.`,
//     inherited: `The braces, $\\in$, $\\varnothing$ and set-builder come from [set theory basics](!/set-theory/basics#2); the power set $\\mathcal{P}(A)$ and $2^A$ behind the continuum from the [subsets page](!/set-theory/subsets#6); the double-struck ℕ–ℝ chain likewise.`,
//     entries: [
//       {
//         id: 'bar-pair',
//         tex: `$|A|$`,
//         read: `the cardinality of A`,
//         means: `The bar pair around a set counts it: $|A| = 3$ for $A = \\{1, 2, 3\\}$ — **Definition of Cardinality** above. The same fence with a different tenant: on numbers the bars mean [absolute value](!/algebra/equations/absolute-value#notation), on sets they count.`,
//         cases: `The variant zoo by dialect: $\\operatorname{card}(A)$ in formal set theory, $\\#A$ in combinatorics, $n(A)$ in school probability texts, $\\|A\\|$ occasionally — all the same question; this site keeps the bars.`,
//         confusedWith: `A number's magnitude. $|{-5}| = 5$ but $|\\{-5\\}| = 1$ — bars around the number measure distance, bars around the braces count members; the inner braces flip the meaning entirely.`,
//       },
//       {
//         id: 'aleph-null',
//         tex: `$\\aleph_0$`,
//         read: `aleph-null; aleph-nought`,
//         means: `The first infinite cardinal: $|\\mathbb{N}| = \\aleph_0$ — the size shared by every countably infinite set, as **Countable Sets** above establishes. The aleph is mathematics' one standard Hebrew letter, Cantor's own choice; the [mathematical keyboard](!/keyboard) carries it, along with the $\\beth$ that follows it.`,
//         cases: `The subscript starts a ladder — $\\aleph_0, \\aleph_1, \\ldots$ enumerate ever-larger infinities; $|\\mathbb{Z}| = |\\mathbb{Q}| = \\aleph_0$ despite appearances, the working surprise of the countability arguments above.`,
//         confusedWith: `The infinity symbol. $\\aleph_0$ is a cardinal — a size — while the $\\infty$ of [limit notation](!/calculus/limits/infinity#notation) is a direction of growth; the two never interchange, and $\\aleph_0 + 1 = \\aleph_0$ obeys arithmetic $\\infty$ was never given.`,
//       },
//       {
//         id: 'continuum',
//         tex: `$\\mathfrak{c} = 2^{\\aleph_0}$`,
//         read: `the continuum; two to the aleph-null`,
//         means: `The size of the reals: $|\\mathbb{R}| = \\mathfrak{c}$, in Fraktur type — the blackletter font also seen on the [real-part marks](!/complex-numbers/algebraic-form#2) $\\Re$ and $\\Im$. The exponent spelling $2^{\\aleph_0}$ reads it as a power-set size, via $|\\mathcal{P}(A)| = 2^{|A|}$ from the [subsets page](!/set-theory/subsets#6).`,
//         cases: `Strictness is the point: $\\aleph_0 < \\mathfrak{c}$ — **Uncountable Sets** above proves the gap with Cantor's diagonal; every interval $(a, b)$ already has full cardinality $\\mathfrak{c}$.`,
//         confusedWith: `A plain letter c. The Fraktur stroke is the reservation — roman $c$ is a free constant; and $2^{\\aleph_0}$ is not "a huge finite power of two" but a set-sized exponent, legal only in cardinal arithmetic.`,
//       },
//     ],
//     symbolsHref: `/math-symbols/set-theory`,
//     symbolsLabel: `All set theory symbols`,
//     parentHref: `/set-theory`,
//     parentLabel: `Set Theory`,
//   },
//   obj6: {
//     title: `Comparing Cardinalities`,
//     content: `
// Cardinalities are compared using functions between sets:

// - $|A| = |B|$ when a bijection exists between $A$ and $B$

// - $|A| \\leq |B|$ when an injection (one-to-one function) exists from $A$ to $B$

// - $|A| < |B|$ when $|A| \\leq |B|$ and $|A| \\neq |B|$

// The Cantor-Schröder-Bernstein theorem states: if $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|$.

// Cantor's theorem establishes a fundamental inequality for any set $A$:

// @academic[formula_callout:Cantor Theorem
// $$|A| < |\\mathcal{P}(A)|$$
// /set-theory/formulas#cantor_theorem]@

// @academic[formulas_link:Browse all set theory formulas
// /set-theory/formulas]@

// The [power set](!/set-theory/subsets) always has strictly greater cardinality than the original set. For finite sets, this is immediate: $2^n > n$. For infinite sets, the proof uses a diagonal argument similar to the uncountability of $\\mathbb{R}$.

// This theorem implies there is no largest cardinality — given any set, its power set is strictly larger, producing an endless hierarchy of infinite sizes.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Summary: A Hierarchy of Cardinalities`,
//     content: `
// The sets covered above arrange themselves into a strict hierarchy of sizes. The table below collects the major rungs — empty, finite, countably infinite, the continuum, and beyond — with a representative set at each level. Cantor's theorem guarantees the hierarchy never ends: for every set, its power set is strictly larger, producing an unbounded tower of cardinalities.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   faq: {
//     title: `Cardinality FAQ`,
//   },
// }; 


// const introContent = {
//   id: "intro",
//   title: `Measuring the Size of Sets`,
//   content: `
// Cardinality measures the size of a [set](!/set-theory) — how many elements it contains. For finite sets, cardinality is simply a count. For infinite sets, the situation becomes more subtle: different infinite sets can have different sizes, and comparing them requires the concept of one-to-one correspondence. This leads to the distinction between countable and uncountable infinities.
//   `,
// };


// const faqQuestions = {
//   obj1: {
//     question: "What is the cardinality of a set?",
//     answer: "Cardinality measures the number of elements in a set, denoted |A|. For finite sets, it's a count. For infinite sets, two sets have equal cardinality when a bijection (one-to-one correspondence) exists between them.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is a finite set?",
//     answer: "A set is finite if its elements can be counted with a natural number n. A bijection exists between the set and {1, 2, ..., n}. Any subset of a finite set is also finite.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "What is an infinite set?",
//     answer: "A set is infinite if no natural number expresses its size. Infinite sets can be mapped bijectively onto proper subsets of themselves — for example, natural numbers onto even numbers via f(n) = 2n.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "What does countably infinite mean?",
//     answer: "A set is countably infinite if its elements can be listed as a sequence a₁, a₂, a₃, ... covering every element exactly once. The integers and rationals are countably infinite.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "Are the rational numbers countable?",
//     answer: "Yes. By arranging positive rationals in a grid and traversing diagonally, every rational appears in the sequence. The union of countably many countable sets remains countable.",
//     sectionId: "4"
//   },
//   obj6: {
//     question: "What is an uncountable set?",
//     answer: "A set is uncountable if it is infinite but cannot be listed in a sequence. The real numbers are uncountable — Cantor's diagonal argument proves no list can include every real number.",
//     sectionId: "5"
//   },
//   obj7: {
//     question: "What is Cantor's diagonal argument?",
//     answer: "Assume all reals between 0 and 1 are listed. Construct a new number by making its n-th digit differ from the n-th digit of the n-th listed number. This number isn't in the list, proving the reals are uncountable.",
//     sectionId: "5"
//   },
//   obj8: {
//     question: "How do you compare cardinalities of infinite sets?",
//     answer: "|A| ≤ |B| when an injection exists from A to B. |A| = |B| when a bijection exists. The Cantor-Schröder-Bernstein theorem states: if |A| ≤ |B| and |B| ≤ |A|, then |A| = |B|.",
//     sectionId: "6"
//   },
//   obj9: {
//     question: "What is Cantor's theorem about power sets?",
//     answer: "For any set A, |A| < |P(A)| — the power set always has strictly greater cardinality. This implies there is no largest infinity; each power set produces a larger one.",
//     sectionId: "6"
//   },
//   obj10: {
//     question: "What is the cardinality of the real numbers?",
//     answer: "The cardinality of ℝ is denoted 𝔠 (continuum) or $2^{ℵ₀}$, equal to the cardinality of the power set of ℕ. Every interval (a, b) has this same cardinality.",
//     sectionId: "5"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Cardinality of Sets",
//     "description": "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
//     "url": "https://www.learnmathclass.com/set-theory/cardinality",
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
//       "name": "Cardinality of Sets"
//     },
//     "teaches": [
//       "Definition of cardinality and bijections",
//       "Finite sets and counting",
//       "Properties of infinite sets",
//       "Countable and countably infinite sets",
//       "Uncountable sets and Cantor's diagonal argument",
//       "Comparing cardinalities and Cantor's theorem"
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
//         "name": "Set Theory",
//         "item": "https://www.learnmathclass.com/set-theory"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Cardinality",
//         "item": "https://www.learnmathclass.com/set-theory/cardinality"
//       }
//     ]
//   }
// }


//   // Operation A demonstration unit: frozen tool states + attached explanation
//   // panel + tool link, one frame. Rendered as a content-array item.
//   const demoUnits = {
//     inclusionExclusion: demoUnitFrame({
//       svg: [twoSetsVennDiagrams.union, twoSetsVennDiagrams.disjoint],
//       caption: 'Why the correction term exists',
//       text: 'Two frozen configurations tell the whole story: when the circles overlap (top), the lens lies inside both sets &#8212; summing |A| + |B| counts it twice, so |A &#8745; B| is subtracted once. When the sets are disjoint (bottom), there is no lens and the counts simply add. Slide between the two situations yourself on the',
//       href: '/set-theory/visual-tools/two-sets-basic-venn',
//       linkText: 'two-set Venn explorer',
//     }),
//   };

//   return {
//   props: {
//     sectionsContent,
//     introContent,
//     obj5Table,
//     obj6Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     demoUnits,
//     seoData: {
//       title: "Cardinality of Sets: Finite, Countable & Uncountable | Learn Math Class",
//       description: "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
//       keywords: keyWords.join(", "),
//       url: "/set-theory/cardinality",
//       name: "Cardinality of Sets"
//     },
//   }
// }
//    }


// export default function CardinalityPage({seoData, sectionsContent, introContent, obj5Table, obj6Table, summaryTable, faqQuestions, schemas, demoUnits}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
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
//           <div key={'unit-inclusion-exclusion'} dangerouslySetInnerHTML={{ __html: demoUnits.inclusionExclusion }} />,
//           `Counting without double-counting is the entire craft of finite cardinality — inclusion-exclusion just states it as a formula, and it scales to any number of sets.`,
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

//     // obj5: prose + countable-vs-uncountable comparison table
//     // (placed here since obj4 + obj5 together define both categories; the table synthesizes both)
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//           <div
//             key={'obj5-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj5Table }}
//           />,
//         ]
//     },

//     // obj6: prose + cardinality-comparison-relations aggregation table
//     {
//         id:'notation',
//         title:sectionsContent.notation.title,
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.notation.title}
//             lead={sectionsContent.notation.lead}
//             inherited={sectionsContent.notation.inherited}
//             entries={sectionsContent.notation.entries}
//             symbolsHref={sectionsContent.notation.symbolsHref}
//             symbolsLabel={sectionsContent.notation.symbolsLabel}
//             parentHref={sectionsContent.notation.parentHref}
//             parentLabel={sectionsContent.notation.parentLabel}
//             theme={'navy'}
//           />,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//           <div
//             key={'obj6-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj6Table }}
//           />,
//         ]
//     },

//     // obj7: NEW capstone — hierarchy of cardinalities
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//           <div
//             key={'summary-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: summaryTable }}
//           />,
//         ]
//     },

//     // faq: rendered component — must be built here, not in getStaticProps
//     {
//         id:'faq',
//         title:sectionsContent.faq.title,
//         link:``,
//         content:[
//           // <FAQSection
//           //   key={'faq'}
//           //   faqQuestions={faqQuestions}
//           //   theme={'blueGradient'}
//           //   width={'100%'}
//           //   openFirst={false}
//           // />,

// //           <FAQSection
// //             key={'faq'}
// //             faqQuestions={faqQuestions}
// //             theme={'cardBased'}
// //             width={'100%'}
// //             openFirst={false}
// // />,

// <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
// <FAQSection
//   key={'faq'}
//   faqQuestions={faqQuestions}
//   theme={'leftBorder'}
//   width={'100%'}
//   openFirst={false}
// />
// </div>
// ,
//         ]
//     },
// ]

//   return (
//    <>
 

// <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cardinality of Sets</h1>
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
//      <KeyTermsCard
//            id="0"
//            title={sectionsContent.obj0.title}
//            content={sectionsContent.obj0.content}
//            after={sectionsContent.obj0.after}
//            variant="light"
//          />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import twoSetsVennDiagrams from '@/app/components/venn-diagrams/twoSetsVennDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import Hierarchy from '@/app/components/infographics/Hierarchy/Hierarchy'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "cardinality of sets",
  "cardinality definition",
  "finite sets",
  "infinite sets",
  "countable sets",
  "uncountable sets",
  "countably infinite",
  "cardinality of real numbers",
  "cardinality of integers",
  "bijection between sets",
  "cantors diagonal argument",
  "comparing infinite sets",
  "power set cardinality",
  "size of infinity"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj5 — comparison: countable vs uncountable
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Category</th>
      <th style="${tableHeaders.comparison}">Defining condition</th>
      <th style="${tableHeaders.comparison}">Example sets</th>
      <th style="${tableHeaders.comparison}">Standard proof technique</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Countably infinite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection with ℕ exists</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; even integers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">construct an explicit listing &nbsp;(sequence) of all elements</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Uncountable</td>
      <td style="padding: 12px 15px; color: #34495e;">infinite, and no bijection with ℕ is possible</td>
      <td style="padding: 12px 15px; color: #34495e;">ℝ; any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
      <td style="padding: 12px 15px; color: #34495e;">Cantor&apos;s diagonal argument &nbsp;(or Cantor&apos;s theorem)</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — aggregation: cardinality comparison relations as a notation reference card
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Relation</th>
      <th style="${tableHeaders.aggregation}">Meaning</th>
      <th style="${tableHeaders.aggregation}">Witnessed by</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = |B|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B have the same cardinality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bijection &nbsp;A → B</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| ≤ |B|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is no larger than B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an injection &nbsp;A → B</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">|A| &lt; |B|</td>
      <td style="padding: 12px 15px; color: #34495e;">A is strictly smaller than B</td>
      <td style="padding: 12px 15px; color: #34495e;">an injection exists, but no bijection does</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — summary: capstone hierarchy of cardinalities
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Cardinality</th>
      <th style="${tableHeaders.summary}">Description</th>
      <th style="${tableHeaders.summary}">Representative set(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">empty</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∅ &nbsp;(the only set with this cardinality)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">finite n &nbsp;(n ∈ ℕ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded element count</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2, ..., n}; &nbsp;the English alphabet &nbsp;(n = 26)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ℵ<sub>0</sub> &nbsp;(aleph-null)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">countably infinite — the smallest infinite cardinality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℕ, ℤ, ℚ; &nbsp;the even integers</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">𝔠 = 2<sup>ℵ<sub>0</sub></sup> &nbsp;(continuum)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uncountable; the size of the real line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ; &nbsp;any interval &nbsp;(a, b); &nbsp;𝒫(ℕ)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">2<sup>𝔠</sup>, &nbsp;2<sup>(2<sup>𝔠</sup>)</sup>, &nbsp;...</td>
      <td style="padding: 12px 15px; color: #34495e;">strictly larger uncountable cardinalities &nbsp;(by Cantor&apos;s theorem)</td>
      <td style="padding: 12px 15px; color: #34495e;">𝒫(ℝ); &nbsp;𝒫(𝒫(ℝ)); &nbsp;the hierarchy continues without end</td>
    </tr>
  </tbody>
</table>
`

// Concept introduction (section 1, "Definition of Cardinality") — template F,
// two descriptions shown to agree. Running instance: A = {a, b, c} against
// {1, 2, 3} and {1, 2}. Old obj1 text is kept in sectionsContent.obj1,
// unused; its formula box, pitfall aside and five passages are carried in
// unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciBothTable = ciTableOpen(['compare {a, b, c} with', 'by counting', 'by pairing', 'same size?']) +
  ciRow(['{1, 2, 3}', '3 and 3', 'a–1, b–2, c–3, nothing left', 'yes']) +
  ciRow(['{1, 2}', '3 and 2', 'a–1, b–2, c left over', 'no'], { shade: true, last: true }) +
  '</tbody></table>'

const sectionsContent = {
    obj0: {
  title: `Key Terms`,
  content: `
- [Cardinality](!/set-theory/definitions#cardinality) — the number of elements in a set
- [Finite Set](!/set-theory/definitions#finite_set) — a set with a bounded element count
- [Infinite Set](!/set-theory/definitions#infinite_set) — a set that cannot be matched with any finite count
- [Countable Set](!/set-theory/definitions#countable_set) — a set whose elements can be listed in a sequence
- [Uncountable Set](!/set-theory/definitions#uncountable_set) — a set too large to be listed sequentially
- [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — sets related by having the same cardinality
- [Power Set](!/set-theory/definitions#power_set) — always produces a set of strictly larger cardinality


`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition of Cardinality`,
    content: `
The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$. This bar notation is one of several [cardinality symbols](!/math-symbols/set-theory) in standard use.

For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.

The empty set contains no elements:

@academic[formula_callout:Definition of Cardinality
$$|\\emptyset| = 0$$]@

@academic[pitfall,aside:true,width:35%:Counting the elements inside an element
Reading $|\\{\\emptyset\\}|$ as $0$, or $|\\{\\{1, 2\\}, 3\\}|$ as $3$, counts what is inside the inner braces. Each inner set is one element: $|\\{\\emptyset\\}| = 1$ and $|\\{\\{1, 2\\}, 3\\}| = 2$.
[Read more](!#pitfalls)]@

The elements being counted can be of any kind: numbers, letters, words, or other sets. A set whose elements are themselves sets is written with braces inside braces, as in $\\{\\{1, 2\\}, 3\\}$ or $\\{\\emptyset\\}$. Such sets are counted by the same rule as every other set, and they come up throughout this page once power sets appear, since every element of a power set is itself a set.

Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Finite Sets`,
    content: `
A set is finite if its elements can be counted with a natural number. Formally, a set $A$ is finite if there exists some $n \\in \\mathbb{N}$ such that:

@academic[formula_callout:Finite Sets
$$|A| = n$$]@

This means a bijection exists between $A$ and the set $\\{1, 2, 3, \\ldots, n\\}$.

Examples of finite sets:

- The set of letters in the English alphabet has cardinality $26$

- The set of prime numbers less than $20$ is $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ with cardinality $8$

- Any [subset](!/set-theory/subsets) of a finite set is finite

The cardinality of a finite union of finite sets satisfies the inclusion-exclusion principle:

@academic[formula_callout:Inclusion-Exclusion - Two Sets
$$|A \\cup B| = |A| + |B| - |A \\cap B|$$
/set-theory/formulas#inclusion-exclusion_-_two_sets]@

@academic[formulas_link:Browse all set theory formulas
/set-theory/formulas]@

The correction term $|A \\cap B|$ accounts for elements counted twice when the sets overlap. The pattern extends to three sets by alternating between adding singles, subtracting pairwise intersections, and adding back the triple intersection:

@academic[formula_callout:Inclusion-Exclusion - Three Sets
$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$
/set-theory/formulas#inclusion-exclusion_-_three_sets]@

@academic[formulas_link:Browse all set theory formulas
/set-theory/formulas]@

@academic[pitfall,aside:true,width:35%:Forgetting the triple intersection
Stopping after the pairs gives $4 + 3 + 3 - 2 - 1 - 2 = 5$: the element 4 is added three times and subtracted three times, so it is not counted. Adding $|A \\cap B \\cap C| = 1$ back gives $6$.
[Read more](!#pitfalls)]@

@academic[example:Example
For a concrete case, take $A = \\{1, 2, 3, 4\\}$, $B = \\{2, 4, 5\\}$ and $C = \\{4, 5, 6\\}$. The singles are $4$, $3$ and $3$, and the pairwise intersections $\\{2, 4\\}$, $\\{4\\}$ and $\\{4, 5\\}$ have sizes $2$, $1$ and $2$. The element $4$ is the only one that lies in all three sets. The union is $\\{1, 2, 3, 4, 5, 6\\}$, with six elements, and each of the seven terms of the formula uses one of these counts.]@

When the sets share no elements, the correction terms vanish and the cardinality simply adds:

@academic[formula_callout:Cardinality of Disjoint Union
$$|A \\cup B| = |A| + |B| \\quad \\text{when } A \\cap B = \\emptyset$$
/set-theory/formulas#cardinality_of_disjoint_union]@

@academic[formulas_link:Browse all set theory formulas
/set-theory/formulas]@
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Infinite Sets`,
    content: `
A set is infinite if it is not finite — no natural number can express its size.

The standard number sets are all infinite:

- $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — the natural numbers

- $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — the integers

- $\\mathbb{Q}$ — the rational numbers

- $\\mathbb{R}$ — the real numbers

A defining property of infinite sets: an infinite set can be put into one-to-one correspondence with a proper subset of itself. For example, the function $f(n) = 2n$ maps $\\mathbb{N}$ bijectively onto the even numbers, which form a proper subset of $\\mathbb{N}$.

@academic[pitfall,aside:true,width:35%:Treating a proper subset as smaller
Concluding that the even numbers are fewer than $\\mathbb{N}$, because the odd numbers are missing from them, applies a rule that holds only for finite sets. The pairing $n \\mapsto 2n$ is a bijection, so $|\\{0, 2, 4, \\ldots\\}| = |\\mathbb{N}|$.
[Read more](!#pitfalls)]@

In the example, every natural number $n$ has exactly one partner $2n$, and every even number $m$ comes from exactly one natural number, $m/2$. The pairing therefore uses up both sets completely, with no element left over on either side. For a finite set, removing even a single element always leaves fewer elements than before, so no such pairing between the set and a part of it is possible.

Not all infinite sets have the same cardinality. The integers and rationals turn out to be the same size as the natural numbers, but the real numbers form a strictly larger infinity.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Countable Sets`,
    content: `
A set is countably infinite if its elements can be put in one-to-one correspondence with the natural numbers $\\mathbb{N}$. Such a set can be listed as a sequence:

@academic[formula_callout:Countable Sets
$$a_1, a_2, a_3, \\ldots$$]@

where every element appears exactly once.

The integers $\\mathbb{Z}$ are countable. The listing:

@academic[formula_callout:Countable Sets
$$0, 1, -1, 2, -2, 3, -3, \\ldots$$]@

establishes a bijection with $\\mathbb{N}$.

@academic[pitfall,aside:true,width:35%:Listing the positive integers first
Writing $0, 1, 2, 3, \\ldots$ and planning the negatives after them never reaches $-1$: no finite position is left for it. The alternating list puts $-1$ at position $3$ and $-3$ at position $7$.
[Read more](!#pitfalls)]@

In this listing, positive and negative integers take turns, with $0$ at the start. Each integer has a definite place: counting positions from $1$, the positive integer $n$ is entry number $2n$ and the negative integer $-n$ is entry number $2n + 1$. Reading the list in order, every integer is reached after finitely many steps, and no integer appears twice.

The rationals $\\mathbb{Q}$ are countable despite appearing denser than $\\mathbb{Z}$. By arranging positive rationals in a grid and traversing diagonally, every rational is eventually listed.

@academic[fact,aside:true,width:35%:Dense, yet no bigger than $\\mathbb{N}$
Between any two fractions lie infinitely many more, even between $0$ and $\\frac{1}{1000}$. Still, $\\mathbb{Q}$ can be listed one by one, so it has exactly as many elements as $\\mathbb{N}$.]@

Walking the diagonals of the grid gives the start of such a list: $1, \\frac{1}{2}, 2, \\frac{1}{3}, 3, \\frac{1}{4}, \\frac{2}{3}, \\frac{3}{2}, 4, \\ldots$ Along each diagonal the numerator and the denominator add up to the same number, and a fraction such as $\\frac{2}{2}$, equal to one already listed, is skipped. Each diagonal is finite, so every positive rational is reached after finitely many steps. Interleaving the negatives and $0$, as with the integers, extends the list to all of $\\mathbb{Q}$.

A set is called countable if it is either finite or countably infinite. Some authors reserve "countable" for countably infinite sets only — context determines the convention.

@academic[rule_theorem_plain:The union of countably many countable sets remains countable.]@

This is why $\\mathbb{Q}$ is countable: it is a countable union of countable sets (rationals with each fixed denominator).
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Uncountable Sets`,
    content: `
A set is uncountable if it is infinite but not countable — its elements cannot be listed in a sequence that covers them all.

@academic[rule_theorem_plain:The real numbers $\\mathbb{R}$ are uncountable.]@

@academic[fact,aside:true,width:35%:The irrationals outnumber the fractions
Since $\\mathbb{Q}$ is countable and $\\mathbb{R}$ is not, the irrationals alone are uncountable: a list of them, merged with a list of $\\mathbb{Q}$, would list all of $\\mathbb{R}$. The fractions are only a countable sliver of the line.]@

Cantor's diagonal argument proves this: assume a listing of all real numbers between $0$ and $1$ exists. Construct a new number by making its $n$-th decimal digit different from the $n$-th digit of the $n$-th number in the list, using only digits other than $0$ and $9$ so that no number with two decimal forms (such as $0.4999\\ldots = 0.5$) can slip through. This new number differs from every listed number, contradicting the assumption that the list was complete.

Any interval $(a, b)$ with $a < b$ is uncountable. In fact, every such interval has the same cardinality as $\\mathbb{R}$ itself — a bijection exists between them.

The cardinality of $\\mathbb{R}$ is denoted $\\mathfrak{c}$ (for continuum) or $2^{\\aleph_0}$, where $\\aleph_0$ — aleph-null, the Hebrew letter aleph carrying subscript zero — is the size of $\\mathbb{N}$ and the smallest infinite cardinal. The second spelling indicates that it equals the cardinality of the [power set](!/set-theory/subsets#5) of $\\mathbb{N}$.
    `,
    before: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Cardinality Notation`,
    lead: `Size gets a bar pair, infinity gets a Hebrew letter, and the continuum gets a Fraktur one — three generations of marks for one question: how many members? The variant zoo ($\\operatorname{card}$, $\\#$, $n(A)$) rides along.`,
    inherited: `The braces, $\\in$, $\\varnothing$ and set-builder come from [set theory basics](!/set-theory/basics#2); the power set $\\mathcal{P}(A)$ and $2^A$ behind the continuum from the [subsets page](!/set-theory/subsets#6); the double-struck ℕ–ℝ chain likewise.`,
    entries: [
      {
        id: 'bar-pair',
        tex: `$|A|$`,
        read: `the cardinality of A`,
        means: `The bar pair around a set counts it: $|A| = 3$ for $A = \\{1, 2, 3\\}$ — **Definition of Cardinality** above. The same fence with a different tenant: on numbers the bars mean [absolute value](!/algebra/equations/absolute-value#notation), on sets they count.`,
        cases: `The variant zoo by dialect: $\\operatorname{card}(A)$ in formal set theory, $\\#A$ in combinatorics, $n(A)$ in school probability texts, $\\|A\\|$ occasionally — all the same question; this site keeps the bars.`,
        confusedWith: `A number's magnitude. $|{-5}| = 5$ but $|\\{-5\\}| = 1$ — bars around the number measure distance, bars around the braces count members; the inner braces flip the meaning entirely.`,
      },
      {
        id: 'aleph-null',
        tex: `$\\aleph_0$`,
        read: `aleph-null; aleph-nought`,
        means: `The first infinite cardinal: $|\\mathbb{N}| = \\aleph_0$ — the size shared by every countably infinite set, as **Countable Sets** above establishes. The aleph is mathematics' one standard Hebrew letter, Cantor's own choice; the [mathematical keyboard](!/keyboard) carries it, along with the $\\beth$ that follows it.`,
        cases: `The subscript starts a ladder — $\\aleph_0, \\aleph_1, \\ldots$ enumerate ever-larger infinities; $|\\mathbb{Z}| = |\\mathbb{Q}| = \\aleph_0$ despite appearances, the working surprise of the countability arguments above.`,
        confusedWith: `The infinity symbol. $\\aleph_0$ is a cardinal — a size — while the $\\infty$ of [limit notation](!/calculus/limits/infinity#notation) is a direction of growth; the two never interchange, and $\\aleph_0 + 1 = \\aleph_0$ obeys arithmetic $\\infty$ was never given.`,
      },
      {
        id: 'continuum',
        tex: `$\\mathfrak{c} = 2^{\\aleph_0}$`,
        read: `the continuum; two to the aleph-null`,
        means: `The size of the reals: $|\\mathbb{R}| = \\mathfrak{c}$, in Fraktur type — the blackletter font also seen on the [real-part marks](!/complex-numbers/algebraic-form#2) $\\Re$ and $\\Im$. The exponent spelling $2^{\\aleph_0}$ reads it as a power-set size, via $|\\mathcal{P}(A)| = 2^{|A|}$ from the [subsets page](!/set-theory/subsets#6).`,
        cases: `Strictness is the point: $\\aleph_0 < \\mathfrak{c}$ — **Uncountable Sets** above proves the gap with Cantor's diagonal; every interval $(a, b)$ already has full cardinality $\\mathfrak{c}$.`,
        confusedWith: `A plain letter c. The Fraktur stroke is the reservation — roman $c$ is a free constant; and $2^{\\aleph_0}$ is not "a huge finite power of two" but a set-sized exponent, legal only in cardinal arithmetic.`,
      },
    ],
    symbolsHref: `/math-symbols/set-theory`,
    symbolsLabel: `All set theory symbols`,
    parentHref: `/set-theory`,
    parentLabel: `Set Theory`,
  },
  obj6: {
    title: `Comparing Cardinalities`,
    content: `
Cardinalities are compared using functions between sets:

- $|A| = |B|$ when a bijection exists between $A$ and $B$

- $|A| \\leq |B|$ when an injection (one-to-one function) exists from $A$ to $B$

- $|A| < |B|$ when $|A| \\leq |B|$ and $|A| \\neq |B|$

@academic[pitfall,aside:true,width:35%:Concluding smaller size from one injection
Taking the injection $n \\mapsto n$ from $\\mathbb{N}$ into $\\mathbb{Q}$, which misses $\\tfrac{1}{2}$ and infinitely many other rationals, as proof that $|\\mathbb{N}| < |\\mathbb{Q}|$ overlooks the listing of the rationals. That listing is a bijection, so $|\\mathbb{N}| = |\\mathbb{Q}|$.
[Read more](!#pitfalls)]@

Sending each natural number to itself is an injection from $\\mathbb{N}$ into $\\mathbb{Z}$, so $|\\mathbb{N}| \\leq |\\mathbb{Z}|$. In the opposite direction, giving each integer its position in the listing $0, 1, -1, 2, -2, \\ldots$ from the section on countable sets is an injection from $\\mathbb{Z}$ into $\\mathbb{N}$, so $|\\mathbb{Z}| \\leq |\\mathbb{N}|$ as well. Two sets with injections running both ways are exactly the situation of the theorem below.

@academic[rule_theorem:Cantor–Schröder–Bernstein Theorem
The Cantor-Schröder-Bernstein theorem states: if $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|$.]@

Cantor's theorem establishes a fundamental inequality for any set $A$:

@academic[formula_callout:Cantor Theorem
$$|A| < |\\mathcal{P}(A)|$$
/set-theory/formulas#cantor_theorem]@

@academic[formulas_link:Browse all set theory formulas
/set-theory/formulas]@

The [power set](!/set-theory/subsets) always has strictly greater cardinality than the original set. For finite sets, this is immediate: $2^n > n$. For infinite sets, the proof uses a diagonal argument similar to the uncountability of $\\mathbb{R}$.

This theorem implies there is no largest cardinality — given any set, its power set is strictly larger, producing an endless hierarchy of infinite sizes.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Common Pitfalls`,
    content: `
Five mistakes come up again and again when sets are measured and compared. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Counting the elements inside an element**

When the elements of a set are themselves sets, the members of those inner sets are counted as well, or an inner empty set is read as "nothing". Cardinality counts only the items listed at the outer level of braces.

Wrong working: $|\\{\\{1, 2\\}, 3\\}| = 3$, counting 1, 2 and 3; and $|\\{\\emptyset\\}| = 0$, because the empty set has no elements.

Right working: the outer braces of $\\{\\{1, 2\\}, 3\\}$ hold two items, the set $\\{1, 2\\}$ and the number $3$, so its cardinality is $2$. The outer braces of $\\{\\emptyset\\}$ hold one item, the empty set, so $|\\{\\emptyset\\}| = 1$, while $|\\emptyset| = 0$.

Why it happens: inner braces look like grouping marks, and the numbers inside them catch the eye more than the braces do.

How to check: split the listing only at the commas of the outer level and count the pieces. For a power set this gives the expected $2^n$: $\\mathcal{P}(\\{1\\}) = \\{\\emptyset, \\{1\\}\\}$ has $2^1 = 2$ elements.

**Forgetting the triple intersection**

For three sets, the singles are added, the pairwise intersections are subtracted, and the count stops there. The elements in all three sets are then added three times and subtracted three times, so they are not counted at all.

Wrong working: for $A = \\{1, 2, 3, 4\\}$, $B = \\{2, 4, 5\\}$ and $C = \\{4, 5, 6\\}$, the size of the union is given as $4 + 3 + 3 - 2 - 1 - 2 = 5$.

Right working: add back $|A \\cap B \\cap C| = 1$, the size of $\\{4\\}$: $4 + 3 + 3 - 2 - 1 - 2 + 1 = 6$. This matches the union $\\{1, 2, 3, 4, 5, 6\\}$.

Why it happens: the two-set formula ends with a subtraction, and subtracting the overlaps feels like the complete correction. The over-correction at the centre stays hidden until one element is traced through every term.

How to check: trace an element that is in all three sets, here $4$. It is counted by $|A|$, $|B|$ and $|C|$ and removed by all three pairwise terms, so without the triple term it is counted $3 - 3 = 0$ times. For small sets, writing the union out and counting it settles the answer.

**Treating a proper subset as smaller**

A proper subset of an infinite set is assumed to have a smaller cardinality, because some elements were removed to form it. This holds for finite sets but fails for infinite ones, where sizes are compared by bijections, not by containment.

Wrong working: the even numbers $\\{0, 2, 4, \\ldots\\}$ leave out every odd number, so $|\\{0, 2, 4, \\ldots\\}| < |\\mathbb{N}|$.

Right working: $f(n) = 2n$ pairs each $n \\in \\mathbb{N}$ with exactly one even number and reaches every even number $m$ from $n = m/2$. It is a bijection, so $|\\{0, 2, 4, \\ldots\\}| = |\\mathbb{N}|$.

Why it happens: for finite sets, "part" and "smaller" always go together, and everyday counting is finite.

How to check: before comparing sizes, look for a bijection. If a simple rule such as $n \\mapsto 2n$ or $n \\mapsto n + 1$ pairs the two sets completely, the sizes are equal, however the sets sit inside each other.

**Listing the positive integers first**

To list $\\mathbb{Z}$, the non-negative integers are written first and the negative integers are meant to follow. The first part never ends, so no negative integer ever gets a position.

Wrong working: $0, 1, 2, 3, \\ldots, -1, -2, -3, \\ldots$ is offered as a listing of $\\mathbb{Z}$. There is no natural number $n$ for which $-1$ is the $n$-th entry.

Right working: alternate the signs, $0, 1, -1, 2, -2, 3, -3, \\ldots$. Counting from $1$, the positive integer $n$ is entry $2n$ and $-n$ is entry $2n + 1$, so $-1$ is entry $3$ and $-3$ is entry $7$.

Why it happens: putting like with like is the natural way to arrange a list, and for finite lists it works.

How to check: pick any element, for example $-1$, and name its position as a definite number. If the only answer is "after all the positive integers", the list is not a listing in the sense of the section on countable sets. The same reason explains why the rationals are listed diagonally rather than row by row: a first row that never ends would never let the second row begin.

**Concluding smaller size from one injection**

An injection from $A$ into $B$ that misses some elements of $B$ is taken as proof that $|A| < |B|$. A single injection only shows $|A| \\leq |B|$; the strict inequality needs that no bijection between $A$ and $B$ exists at all.

Wrong working: $n \\mapsto n$ is an injection from $\\mathbb{N}$ into $\\mathbb{Q}$, and it misses $\\tfrac{1}{2}$, so $|\\mathbb{N}| < |\\mathbb{Q}|$.

Right working: the injection gives only $|\\mathbb{N}| \\leq |\\mathbb{Q}|$. The section on countable sets lists the rationals as a sequence, and that listing is a bijection with $\\mathbb{N}$, so $|\\mathbb{N}| = |\\mathbb{Q}|$.

Why it happens: for finite sets, an injection that misses elements does prove strictness, because an injection between two sets of the same finite size always hits every element. Infinite sets do not behave this way.

How to check: try to find a different function that is a bijection, or recall a known one. Even $\\mathbb{N}$ has the injection $n \\mapsto n + 1$ into itself, which misses $0$, and nobody concludes $|\\mathbb{N}| < |\\mathbb{N}|$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Summary: A Hierarchy of Cardinalities`,
    content: `
The sets covered above arrange themselves into a strict hierarchy of sizes. The table below collects the major rungs — empty, finite, countably infinite, the continuum, and beyond — with a representative set at each level. Cantor's theorem guarantees the hierarchy never ends: for every set, its power set is strictly larger, producing an unbounded tower of cardinalities.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  faq: {
    title: `Cardinality FAQ`,
  },
}; 


const introContent = {
  id: "intro",
  title: `Measuring the Size of Sets`,
  content: `
Cardinality measures the size of a [set](!/set-theory) — how many elements it contains. For finite sets, cardinality is simply a count. For infinite sets, the situation becomes more subtle: different infinite sets can have different sizes, and comparing them requires the concept of one-to-one correspondence. This leads to the distinction between countable and uncountable infinities.
  `,
};


// Six questions, each 50-60 words, each covering ground the prose above does
// not state in extractable form. Questions that merely restated a section
// heading were removed.
const faqQuestions = {
  obj1: {
    question: "How do you find the cardinality of a union of two sets?",
    answer: "Add the sizes and subtract the overlap: |A ∪ B| = |A| + |B| − |A ∩ B|. The subtraction is needed because elements lying in both sets would otherwise be counted twice. When the sets are disjoint the overlap is empty and the sizes simply add. Adjust the circles on the [two-set Venn explorer](!/set-theory/visual-tools/two-sets-basic-venn) to watch the correction term appear and vanish.",
    sectionId: "2"
  },
  obj2: {
    question: "Are the rational numbers countable?",
    answer: "Yes. Arrange the positive rationals in a grid by numerator and denominator, then traverse it diagonally — every fraction is reached at some finite step, so the whole set can be listed as a sequence. That listing is a bijection with the natural numbers, making ℚ countably infinite despite sitting densely inside the real line.",
    sectionId: "4"
  },
  obj3: {
    question: "What is Cantor's diagonal argument?",
    answer: "Suppose every real number between 0 and 1 could be listed. Build a new number whose n-th decimal digit differs from the n-th digit of the n-th number on the list. This number differs from every entry in at least one place, so it is missing from the list. The assumption fails, and the reals are therefore uncountable.",
    sectionId: "5"
  },
  obj4: {
    question: "Can two infinite sets have different sizes?",
    answer: "Yes. The naturals and the reals are both infinite, but no bijection between them exists — Cantor's diagonal argument rules one out. ℕ has cardinality ℵ₀ and ℝ has cardinality 𝔠, with ℵ₀ < 𝔠. Sizes are compared by functions: an injection from A to B gives |A| ≤ |B|, and a bijection gives equality.",
    sectionId: "6"
  },
  obj5: {
    question: "What is the cardinality of the real numbers?",
    answer: "The reals have cardinality 𝔠, called the continuum, also written 2^ℵ₀ because it equals the size of the [power set](!/set-theory/subsets) of ℕ. It is strictly larger than ℵ₀, the size of the naturals. Every interval (a, b) has this same cardinality — a bijection maps any open interval onto the whole real line.",
    sectionId: "5"
  },
  obj6: {
    question: "Is there a largest infinity?",
    answer: "No. Cantor's theorem says |A| < |P(A)| for every set A — the power set is always strictly larger. Apply it to ℝ to get a bigger infinity, then apply it again, and again. The result is an endless tower of cardinalities with no top. For finite sets the same theorem is just the observation that 2ⁿ > n.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cardinality of Sets",
    "description": "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
    "url": "https://www.learnmathclass.com/set-theory/cardinality",
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
      "name": "Cardinality of Sets"
    },
    "teaches": [
      "Definition of cardinality and bijections",
      "Finite sets and counting",
      "Properties of infinite sets",
      "Countable and countably infinite sets",
      "Uncountable sets and Cantor's diagonal argument",
      "Comparing cardinalities and Cantor's theorem"
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
        "name": "Set Theory",
        "item": "https://www.learnmathclass.com/set-theory"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cardinality",
        "item": "https://www.learnmathclass.com/set-theory/cardinality"
      }
    ]
  }
}


  // Operation A demonstration unit: frozen tool states + attached explanation
  // panel + tool link, one frame. Rendered as a content-array item.
  const seInfinite = {style: { primary: '#2563EB', primaryLight: '#E3ECFD', secondary: '#06357A', secondaryLight: '#DCE4F0', result: '#B45309', resultFill: '#FDF3E3', text: '#1E3A5F' }, 
    kind: 'pairing', width: 560, height: 380,
    svgTitle: 'An infinite set pairs with a proper part of itself; a finite set cannot',
    panels: [
      { leftName: 'ℕ', rightName: 'even numbers ⊂ ℕ', left: ['0', '1', '2', '3', '…'], right: ['0', '2', '4', '6', '…'],
        pairs: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]], verdict: 'n ↦ 2n: every n has a partner', ok: true },
      { leftName: '{0, 1, 2, 3}', rightName: '{0, 2}', left: ['0', '1', '2', '3'], right: ['0', '2'],
        pairs: [[0, 0], [1, 1]], verdict: 'n ↦ 2n: 2 and 3 have no partner', ok: false },
    ],
  };
  const seListing = {style: { primary: '#2563EB', primaryLight: '#E3ECFD', secondary: '#06357A', secondaryLight: '#DCE4F0', result: '#B45309', resultFill: '#FDF3E3', text: '#1E3A5F' }, 
    kind: 'listing', size: 5,
    svgTitle: 'Walking the grid of fractions diagonal by diagonal lists every positive rational once',
  };
  const seDiagonal = {style: { primary: '#2563EB', primaryLight: '#E3ECFD', secondary: '#06357A', secondaryLight: '#DCE4F0', result: '#B45309', resultFill: '#FDF3E3', text: '#1E3A5F' }, 
    kind: 'diagonal',
    svgTitle: 'Changing every diagonal digit builds a number missing from any list',
    heading: 'an assumed complete list of numbers between 0 and 1',
    rows: [[3, 1, 4, 1, 5], [2, 7, 1, 8, 2], [5, 0, 0, 0, 0], [1, 4, 1, 4, 2], [6, 6, 6, 6, 6]],
    verdict: 'x is on no row — the list was not complete',
  };

  const seCiPairs = {style: { primary: '#2563EB', primaryLight: '#E3ECFD', secondary: '#06357A', secondaryLight: '#DCE4F0', result: '#B45309', resultFill: '#FDF3E3', text: '#1E3A5F' },
    kind: 'pairing', width: 560, height: 300,
    svgTitle: 'Pairing {a, b, c} with {1, 2, 3} uses everything; with {1, 2} it leaves c over',
    panels: [
      { leftName: '{a, b, c}', rightName: '{1, 2, 3}', left: ['a', 'b', 'c'], right: ['1', '2', '3'],
        pairs: [[0, 0], [1, 1], [2, 2]], verdict: 'every element has one partner', ok: true },
      { leftName: '{a, b, c}', rightName: '{1, 2}', left: ['a', 'b', 'c'], right: ['1', '2'],
        pairs: [[0, 0], [1, 1]], verdict: 'c has no partner', ok: false },
    ],
  };
  const conceptIntroFigures = {
    pairs: renderSetElementsV2(seCiPairs),
    bothTable: ciBothTable,
  };

  const demoUnits = {
    inclusionExclusion: demoUnitFrame({
      svg: [twoSetsVennDiagrams.union, twoSetsVennDiagrams.disjoint],
      caption: 'Why the correction term exists',
      text: 'Two frozen configurations tell the whole story: when the circles overlap (top), the lens lies inside both sets &#8212; summing |A| + |B| counts it twice, so |A &#8745; B| is subtracted once. When the sets are disjoint (bottom), there is no lens and the counts simply add. Slide between the two situations yourself on the',
      href: '/set-theory/visual-tools/two-sets-basic-venn',
      linkText: 'two-set Venn explorer',
    }),
    infiniteSelfPairing: demoUnitFrame({
      svg: renderSetElementsV2(seInfinite),
      caption: 'The rule n &#8614; 2n, on an infinite set and on a finite one',
      text: 'On the left every natural number n is sent to 2n, and every even number is hit exactly once &#8212; so &#8469; pairs perfectly with the even numbers, a part of itself. On the right the same rule is tried on {0, 1, 2, 3} and its part {0, 2}: 2 and 3 are left with nowhere to go. A finite set can never pair with a proper part of itself; an infinite set always can.',
    }),
    countingRationals: demoUnitFrame({
      svg: renderSetElementsV2(seListing),
      caption: 'Listing the positive rationals',
      text: 'Each fraction p/q sits at column p, row q. The walk runs diagonal by diagonal, turning at the edges, so any fraction is reached after finitely many steps. A fraction not in lowest terms, such as 2/2, names a number already listed &#8212; it is dashed and gets no number, so every rational appears exactly once. The order numbers are the bijection with the natural numbers.',
    }),
    cantorDiagonal: demoUnitFrame({
      svg: renderSetElementsV2(seDiagonal),
      caption: 'Cantor&#39;s diagonal, five rows deep',
      text: 'Suppose the rows r&#8321;, r&#8322;, &#8230; list every number between 0 and 1. Take the n-th digit of the n-th row (boxed) and change it; those changed digits spell a new number x. x cannot be r&#8321; &#8212; they differ in the first digit; it cannot be r&#8322; &#8212; they differ in the second; and so on down every row. So no list is complete, and the reals are uncountable.',
    }),
  };

  const cardinalityLevels = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'A strict hierarchy of sizes',
    preface: 'The sets on this page arrange themselves by size, from the empty set up through the finite sets, the countable infinity, the continuum, and beyond.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'The tower never ends',
    conclusion: 'Cantor\'s theorem guarantees it: for every set, its power set is strictly larger, so $\\mathcal{P}(\\mathbb{R})$, $\\mathcal{P}(\\mathcal{P}(\\mathbb{R}))$, … keep climbing without end.',
    axis: { top: 'largest', label: 'cardinality', bottom: 'smallest' },
    levels: [
      { id: 'beyond', name: 'Beyond the continuum', sub: '$2^{\\mathfrak{c}}$: $\\mathcal{P}(\\mathbb{R})$' },
      { id: 'c', name: 'The continuum', sub: '$\\mathfrak{c} = 2^{\\aleph_0}$: $\\mathbb{R}$, any interval' },
      { id: 'aleph0', name: 'Countably infinite', sub: '$\\aleph_0$: $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$' },
      { id: 'finite', name: 'Finite', sub: '$n$: $\\{1, 2, \\ldots, n\\}$' },
      { id: 'empty', name: 'Empty', sub: '$0$: $\\varnothing$' },
    ],
  };

  return {
  props: {
    cardinalityLevels,
    sectionsContent,
    introContent,
    obj5Table,
    obj6Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    conceptIntroFigures,
    seoData: {
      title: "Cardinality of Sets: Finite, Countable & Uncountable | Learn Math Class",
      description: "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
      keywords: keyWords.join(", "),
      url: "/set-theory/cardinality",
      name: "Cardinality of Sets"
    },
  }
}
   }


const hierarchyTheme = { title: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function CardinalityPage({cardinalityLevels, seoData, sectionsContent, introContent, obj5Table, obj6Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template F (two descriptions agree).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `The obvious way to measure a set is to count its elements.`,
        content: [
          `The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$. This bar notation is one of several [cardinality symbols](!/math-symbols/set-theory) in standard use.`,
          `For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.`,
        ],
      },
      {
        id: 'second',
        lead: `There is another way that never uses a number: pair the elements off.`,
        content: [
          `To see whether a theatre has as many seats as people, nobody needs to count — ask everyone to sit down. If every person has a seat and no seat is empty, the two match. Sets can be compared the same way: join each element of one to its own element of the other, and see whether anything is left over.`,
        ],
        visual: ciSvg('pairs'),
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `On the same sets, counting and pairing give the same verdict.`,
        content: [
          ciTable('bothTable'),
        ],
      },
      {
        id: 'agree',
        lead: `They had to agree: counting is pairing, with the numbers 1, 2, 3, … as the partners.`,
        content: [
          `Counting $\\{a, b, c\\}$ means pointing at $a$ and saying "one", at $b$ and saying "two", at $c$ and saying "three" — pairing the set with $\\{1, 2, 3\\}$. Two sets with the same count are both paired with the same $\\{1, \\dots, n\\}$, so they can be paired with each other.`,
          `Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [cardinality](!/set-theory/definitions#cardinality) of a set $A$, written $|A|$, is its size: the number of its elements for a finite set, and in general what all sets that can be paired with $A$ have in common.`,
        formula: [
          `The empty set contains no elements:`,
          `@academic[formula_callout:Definition of Cardinality
$$|\\emptyset| = 0$$]@`,
        ],
        footer: `So $|\\{a, b, c\\}| = 3$, and $|\\{1, 2\\}| = 2$.`,
      },
      {
        id: 'kind',
        lead: `Cardinality is a property of the set as a whole — and every element counts once, whatever it is.`,
        content: [
          `The elements being counted can be of any kind: numbers, letters, words, or other sets. A set whose elements are themselves sets is written with braces inside braces, as in $\\{\\{1, 2\\}, 3\\}$ or $\\{\\emptyset\\}$. Such sets are counted by the same rule as every other set, and they come up throughout this page once power sets appear, since every element of a power set is itself a set.`,
          `@academic[pitfall,aside:true,width:35%:Counting the elements inside an element
Reading $|\\{\\emptyset\\}|$ as $0$, or $|\\{\\{1, 2\\}, 3\\}|$ as $3$, counts what is inside the inner braces. Each inner set is one element: $|\\{\\emptyset\\}| = 1$ and $|\\{\\{1, 2\\}, 3\\}| = 2$.
[Read more](!#pitfalls)]@`,
        ],
      },
      {
        id: 'caveat',
        lead: `Which description to use: counting for finite sets, pairing for everything else.`,
        content: `Counting needs a last number, so it stops working the moment a set is infinite. Pairing does not need one, which is why it is the tool that compares infinite sets — and where it gives surprising answers, as the section on [infinite sets](!/set-theory/cardinality#3) shows.`,
      },
      {
        id: 'exit',
        content: `The rest of the page covers finite, infinite, countable and uncountable sets, the notation, and how cardinalities are compared.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-inclusion-exclusion'} dangerouslySetInnerHTML={{ __html: demoUnits.inclusionExclusion }} />,
          `Counting without double-counting is the entire craft of finite cardinality — inclusion-exclusion just states it as a formula, and it scales to any number of sets.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-infiniteSelfPairing'} dangerouslySetInnerHTML={{ __html: demoUnits.infiniteSelfPairing }} />,
          `Being able to pair with a proper part of itself is exactly what separates an infinite set from a finite one.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-countingRationals'} dangerouslySetInnerHTML={{ __html: demoUnits.countingRationals }} />,
          `A set is countable precisely when some walk like this reaches every one of its elements.`,
        ]
    },

    // obj5: prose + countable-vs-uncountable comparison table
    // (placed here since obj4 + obj5 together define both categories; the table synthesizes both)
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-cantorDiagonal'} dangerouslySetInnerHTML={{ __html: demoUnits.cantorDiagonal }} />,
          `Whatever list is proposed, the diagonal construction produces a real number it leaves out.`,
          `@academic[punchline:No list can hold every real number: some infinities are strictly larger than others.]@`,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
        ]
    },

    // obj6: prose + cardinality-comparison-relations aggregation table
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div
            key={'obj6-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj6Table }}
          />,
          `@academic[punchline:Infinite sizes are settled by pairings, not by appearances, and there is always a bigger one.]@`,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },

    // obj7: NEW capstone — hierarchy of cardinalities
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
          <DiagramFrame
            key={'obj7-diagram'}
            id="cardinality-hierarchy-pyramid"
            title="A hierarchy of cardinalities"
            source="/set-theory/cardinality"
          >
            <Hierarchy data={cardinalityLevels} variant="pyramid" exportable={false} theme={hierarchyTheme} />
          </DiagramFrame>,
        ]
    },

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cardinality of Sets</h1>
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
     <KeyTermsCard
           id="0"
           title={sectionsContent.obj0.title}
           content={sectionsContent.obj0.content}
           after={sectionsContent.obj0.after}
           variant="light"
         />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}