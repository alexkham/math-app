import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TwoSetIdentitiesExplorer from '../../../../app/components/venn-diagrams/TwoSetsBasicIdentitiesExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import SiblingsNavStandalone from '../../../../app/components/SiblingsNavStandalone'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import twoSetsVennDiagrams from '../../../../app/components/venn-diagrams/twoSetsVennDiagrams'

export async function getStaticProps(){

  const keyWords = [
    "two set venn diagram",
    "venn diagram two sets",
    "two set identities",
    "set identities visualizer",
    "union of two sets",
    "intersection of two sets",
    "set complement venn",
    "symmetric difference venn",
    "de morgan laws venn",
    "set operations explorer",
    "interactive venn diagram",
    "two circle venn diagram",
    "shaded venn regions",
    "subset disjoint equal sets",
    "set theory visualization",
  ]

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `
- **Set** — a collection of distinct elements
- **Universal set** — the set containing every element under consideration, denoted $U$
- **Union** — $A \\cup B$, elements in $A$, in $B$, or in both
- **Intersection** — $A \\cap B$, elements in both $A$ and $B$
- **Complement** — $A'$, elements in $U$ but not in $A$
- **Set difference** — $A \\setminus B$, elements in $A$ but not in $B$
- **Symmetric difference** — $A \\triangle B$, elements in exactly one of $A$ or $B$
- **Subset** — $A \\subseteq B$ when every element of $A$ is also in $B$
- **Disjoint sets** — sets that share no elements, $A \\cap B = \\emptyset$
- **De Morgan's laws** — $(A \\cup B)' = A' \\cap B'$ and $(A \\cap B)' = A' \\cup B'$
`,
      before: ``,
      after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Explorer`,
      content: `Open the explorer and a two-circle Venn diagram appears with the first identity pre-selected. The blue shaded region marks the elements that satisfy the current identity; the unshaded regions are excluded. The symbol of the current identity appears in the badge above the diagram, and the explanation panel beside it describes what the highlighted region means.

The interface has three main controls. The **category tabs** at the top group identities by type. The **formula buttons** below the tabs show the identities within the active category. The **Jump to** dropdown on the right lists every identity across all categories in one place.

At the bottom of the diagram column, **Previous** and **Next** cycle through all 19 identities in order, with a counter showing your current position. The theme panel underneath lets you customize the shading color and opacity.

No setup is required — pick any tab and any button to see the corresponding region light up immediately.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Navigating Category Tabs`,
      content: `The category tabs organize all 19 identities into seven groups based on their structural role:

• [Basic Sets](!#the-basic-sets) — the sets $A$ and $B$ themselves, the universal set $U$, and the empty set $\\emptyset$
• [Complements](!#the-two-complements) — $A'$ and $B'$, also written $A^c$ and $B^c$ in the [set operations](!/set-theory/operations#notation) lessons; the prime is this tool's house style and the two spellings mean the same thing
• [Intersection & Union](!#intersection-and-union) — $A \\cap B$ and $A \\cup B$
• [Differences](!#the-three-differences) — $A \\setminus B$, $B \\setminus A$, and the symmetric difference $A \\triangle B$
• [Compound](!#compound-expressions) — combined expressions like $A \\cup B'$ and $A' \\cup B$
• [De Morgan's Laws](!#de-morgans-laws-for-two-sets) — $(A \\cup B)'$ and $(A \\cap B)'$
• [Relations](!#set-relations) — subset, disjoint, and equal sets, each drawn with a special circle layout

Click a tab to switch the row of formula buttons below. The currently selected identity stays highlighted across tab switches, so you can browse other categories without losing your place. The tab strip scrolls horizontally on narrow screens.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Selecting an Identity`,
      content: `Two ways to pick an identity. Use the **formula buttons** under the active tab to choose from identities in that category — each button shows the set-theory notation ($A \\cup B$, $A'$, $A \\triangle B$, and so on). Or use the **Jump to** dropdown, which lists every identity across all seven categories in one menu, grouped by tab.

When you select an identity, three things update simultaneously:

• The diagram shading changes to highlight the regions belonging to the new identity
• The badge above the diagram updates to the new symbol
• The explanation panel refreshes with a definition and, where applicable, a numerical example like $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$

Selection is preserved when you switch tabs, so you can compare an identity to others without re-selecting after navigating.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Shaded Venn Diagram`,
      content: `A two-circle Venn diagram divides the universe into four disjoint regions, and every two-set identity highlights some combination of them:

• **Outside both circles** — elements not in $A$ and not in $B$, formally $A' \\cap B'$
• **Only in A** — elements in $A$ but not in $B$, formally $A \\setminus B$
• **Only in B** — elements in $B$ but not in $A$, formally $B \\setminus A$
• **In both** — the intersection $A \\cap B$

For example, $A \\cup B$ shades the three regions inside either circle. $A'$ shades the two regions outside circle $A$ (the outside region plus B-only). The symmetric difference $A \\triangle B$ shades the two crescent regions but leaves the central overlap unshaded. The complement of the union $(A \\cup B)'$ shades only the region outside both circles.

Hover over any region for a tooltip naming it. Identities in the **Relations** group use special circle layouts (nested, separated, or coincident) instead of the standard overlap.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Customizing Color and Opacity`,
      content: `The **Theme** panel below the diagram offers two adjustments to the shaded regions.

The **color picker** changes the shading hue. Useful when printing, presenting, comparing diagrams side by side, or matching the color scheme of a course or textbook. Any standard color value works.

The **opacity slider** controls how transparent the shading is, ranging from $1.00$ (fully opaque) to $0.00$ (invisible). Lower opacity is helpful when you want to see the underlying circle outlines through the fill, or when overlaying the diagram on other content. The current numeric value appears next to the slider in monospace.

Click **Reset** to return both controls to the defaults — blue at $0.85$ opacity. Theme changes persist as you navigate between scenarios, so adjustments stay applied across the entire session.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Previous and Next Navigation`,
      content: `At the bottom of the diagram column, the **Previous** and **Next** buttons cycle through all 19 identities in the order defined by the category groups: Basic Sets, then Complements, then Intersection & Union, then Differences, Compound, De Morgan's Laws, and finally Relations. The counter between the two buttons displays the current position, formatted as "$n$ / $19$".

Navigation wraps around: pressing **Previous** on the first scenario jumps to the last, and pressing **Next** on the last returns to the first. This makes the explorer well suited for systematic review — start at the first identity and click through every region one by one to see how each algebraic expression maps to a shaded combination of the four regions.

The active tab and active formula button update automatically as you advance, so you always know which group the current identity belongs to.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Two-Set Venn Diagram?`,
      content: `A two-set Venn diagram is a visual representation of two sets drawn as overlapping circles inside a rectangle. The rectangle represents the **universal set** $U$ — everything under consideration. The two circles, labeled $A$ and $B$, represent the two specific sets, and their overlap shows elements common to both.

The diagram has exactly four disjoint regions: outside both circles, only in $A$, only in $B$, and the intersection. Every algebraic combination of two sets — no matter how complex — maps to some union of these four regions. This is what makes two-set Venn diagrams a complete visual language for two-set algebra.

Three-set Venn diagrams have eight regions and are harder to read, while one-set diagrams have only two regions and are usually unnecessary. The two-set diagram sits at the practical sweet spot: rich enough to display every standard identity, simple enough to interpret at a glance.

For comprehensive theory on Venn diagrams across different numbers of sets, see **Venn diagrams**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Set Operations on Two Sets`,
      content: `Five core operations generate every two-set identity:

**Union** $A \\cup B$ — elements in $A$, in $B$, or in both. Set-builder form: $\\{x : x \\in A \\text{ or } x \\in B\\}$. Visually, the entire shaded region of the two circles.

**Intersection** $A \\cap B$ — elements in both $A$ and $B$ simultaneously. Set-builder form: $\\{x : x \\in A \\text{ and } x \\in B\\}$. Visually, the overlap of the circles.

**Complement** $A'$ — elements in $U$ but not in $A$. Set-builder form: $\\{x : x \\notin A\\}$. Visually, everything outside circle $A$.

**Difference** $A \\setminus B$ — elements in $A$ but not in $B$, equivalent to $A \\cap B'$. Visually, the crescent of $A$ that does not overlap $B$.

**Symmetric difference** $A \\triangle B$ — elements in exactly one of the two sets, equivalent to $(A \\setminus B) \\cup (B \\setminus A)$ or $(A \\cup B) \\setminus (A \\cap B)$. Visually, both crescents but not the overlap.

For formal definitions and algebraic properties, see **set operations**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `De Morgan's Laws for Two Sets`,
      content: `De Morgan's laws relate the complement of a combined set to the combination of complements:

$$(A \\cup B)' = A' \\cap B'$$

$$(A \\cap B)' = A' \\cup B'$$

The complement of the union equals the intersection of the complements. The complement of the intersection equals the union of the complements. Each law converts a complement of a combination into a combination of complements — useful both for algebraic manipulation and for translating logical statements.

Both laws can be verified visually with the explorer. Select $(A \\cup B)'$ from the De Morgan's Laws tab: only the region outside both circles is shaded. That same region is what $A' \\cap B'$ would produce — outside $A$ and outside $B$ simultaneously. The two expressions describe the same set, and the diagram confirms it.

For algebraic proofs, the general $n$-set form, and applications to propositional logic, see **De Morgan's laws**.`,
      before: ``,
      after: `Each law has a dedicated treatment below: [the complement of the union](!#the-complement-of-the-union) shades a single region — the most extreme shading in the whole catalog — while [the complement of the intersection](!#the-complement-of-the-intersection) shades three of the four.`,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Set Operations** — formal definitions and properties of union, intersection, complement, difference, and symmetric difference.

**Venn Diagrams** — overview of one-set, two-set, and three-set diagrams, drawing conventions, and when each is appropriate.

**De Morgan's Laws** — algebraic proofs of both two-set laws and the generalization to arbitrary collections of sets.

**Set Relations** — definitions of subset, proper subset, disjoint sets, and equal sets, with examples.

**Set Theory Definitions** — glossary of foundational terms used throughout set algebra.

**Three-Set Venn Diagram** — extends the same visual approach to three overlapping sets and the eight regions they produce, including the three-set De Morgan's laws.

**Set Laws and Identities** — algebraic catalog of commutative, associative, distributive, absorption, and complement laws on sets.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 group sections ----

    obj11: {
      title: `The Basic Sets`,
      content: `Before any operation happens, the explorer can display the raw material of two-set algebra: the four atomic states of the Basic Sets tab. [Set A on its own](!#the-set-a-on-its-own) and [set B on its own](!#the-set-b-on-its-own) each shade one full circle. [The universal set](!#the-universal-set-u) shades every region inside the rectangle, and [the empty set](!#the-empty-set) shades nothing at all.

These four are worth visiting first, because every other identity in the catalog is assembled from them: each of the 19 shadings is just a choice of which of the four regions belongs to $A$, to $B$, to both, or to neither. Once you can read the two extremes — everything shaded for $U$, nothing shaded for $\\emptyset$ — every intermediate shading becomes a statement about membership.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `The Two Complements`,
      content: `The Complements tab holds the two states that flip shading inside-out: [the complement of A](!#the-complement-of-a) and [the complement of B](!#the-complement-of-b). Complementation is the only basic operation that shades the region **outside** both circles, which is why these two states look so different from every union or intersection.

The complement is also the operation that makes the universal set matter. Without a fixed $U$, "everything not in $A$" is not a well-defined set; with one, $A'$ is simply $U \\setminus A$, and the diagram shows it as the rectangle with a circular hole.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `Intersection and Union`,
      content: `The two central operations of set algebra get one state each: [the intersection](!#the-intersection-of-a-and-b) shades the single overlap region, and [the union](!#the-union-of-a-and-b) shades all three regions inside the circles. Together they are the diagram's translation of the logical words **and** and **or**.

They are also each other's extremes: the intersection is the smallest set containing exactly the shared elements, the union the smallest set containing both $A$ and $B$ whole. Every set sandwiched between them — $A \\cap B \\subseteq S \\subseteq A \\cup B$ — is expressible from the diagram's regions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `The Three Differences`,
      content: `The Differences tab collects the three subtraction-flavored states: [A minus B](!#the-difference-a-minus-b) shades the left crescent, [B minus A](!#the-difference-b-minus-a) shades the right crescent, and [the symmetric difference](!#the-symmetric-difference) shades both crescents at once.

The trio makes a precise algebraic point. Unlike union and intersection, set difference is not commutative — the two one-sided differences shade different regions — and the symmetric difference is exactly the repair: $A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$ is commutative again, because it treats both crescents equally.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `Compound Expressions`,
      content: `The Compound tab shows what happens when complement meets union: [A united with the complement of B](!#the-union-of-a-with-the-complement-of-b) and [the complement of A united with B](!#the-union-of-the-complement-of-a-with-b). Each shades three of the four regions, leaving exactly one crescent blank.

These two states are the diagram's version of logical implication. $A' \\cup B$ is the set form of "if $x \\in A$ then $x \\in B$" — it fails only on the A-only crescent, precisely where an element is in $A$ without being in $B$. Its mirror $A \\cup B'$ encodes the reverse implication.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj16: {
      title: `Set Relations`,
      content: `The Relations tab is different in kind from every other tab: instead of shading regions of the standard overlapping layout, it **redraws the circles** to express a relationship between the sets. [A as a subset of B](!#a-as-a-subset-of-b) nests a small circle inside a large one, [B as a subset of A](!#b-as-a-subset-of-a) mirrors it, [disjoint sets](!#disjoint-sets) pulls the circles apart, and [equal sets](!#equal-sets) draws them on top of each other.

This is an honest limitation of Venn diagrams worth understanding: the standard two-circle layout deliberately shows the **general position**, where all four regions are possible. A relation like $A \\subseteq B$ asserts that one of those regions is empty, and the clearest way to draw an empty region is not to draw it at all.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 per-state sections: Basic Sets ----

    obj17: {
      title: `The Set A on Its Own`,
      content: `The simplest possible selection: the explorer shades everything belonging to $A$ — the left crescent and the central overlap together, making up the full left circle.`,
      before: ``,
      after: `The frozen frame makes a point that is easy to miss when sets are only written symbolically: inside a universe with a second set around, $A$ is not one region but two. The diagram decomposes it as

$$A = (A \\setminus B) \\cup (A \\cap B)$$

and the two pieces are disjoint — an element of $A$ either is in $B$ too, or it is not, never both. This two-piece decomposition is used constantly: it is how counting formulas split $|A|$, and it is the visual reason the difference $A \\setminus B$ and the intersection recombine into the whole set.

The same picture also illustrates the blandest-looking identities of the algebra, $A \\cap U = A$ and $A \\cup \\emptyset = A$: intersecting with everything changes nothing, uniting with nothing changes nothing. Compare the mirror state [set B on its own](!#the-set-b-on-its-own) — same shape, opposite side.`,
      link: '',
    },

    obj18: {
      title: `The Set B on Its Own`,
      content: `The mirror of the previous state: the shading covers the full right circle — the B-only crescent plus the central overlap.`,
      before: ``,
      after: `Nothing about the algebra distinguishes the two circles, and the pair of frames proves it: swap the labels $A$ and $B$ and each frozen picture becomes the other. This left-right symmetry of the diagram is the geometric face of commutativity — any identity that survives swapping $A$ and $B$, like $A \\cup B = B \\cup A$, must shade a left-right symmetric region.

The decomposition works the same way as for $A$: the set splits as $B = (B \\setminus A) \\cup (A \\cap B)$, one part private, one part shared. When you later look at [the difference B minus A](!#the-difference-b-minus-a), it is exactly this private part on its own.`,
      link: '',
    },

    obj19: {
      title: `The Universal Set U`,
      content: `Selecting $U$ shades every region — both crescents, the overlap, and the space outside the circles. The whole rectangle lights up.`,
      before: ``,
      after: `The universal set is a modeling decision, not a mathematical discovery: it is whatever "everything under consideration" means in the problem at hand — all students in a school, all integers, all outcomes of an experiment. The rectangle in a Venn diagram is that decision drawn as a boundary.

Two algebraic roles follow directly from the all-shaded picture. As the largest possible set, $U$ absorbs unions ($A \\cup U = U$) and vanishes from intersections ($A \\cap U = A$). And it anchors complementation: $A'$ only means something relative to a fixed $U$, and the extreme cases $U' = \\emptyset$ and $\\emptyset' = U$ pair this state with its exact opposite, [the empty set](!#the-empty-set).`,
      link: '',
    },

    obj20: {
      title: `The Empty Set`,
      content: `Selecting $\\emptyset$ shades nothing. The frozen frame is the diagram at rest: circles, rectangle, labels — and zero highlighted regions.`,
      before: ``,
      after: `An all-blank diagram is not a degenerate case; it is a legitimate answer. Plenty of natural expressions evaluate to the empty set — $A \\cap A'$ for any $A$, or the intersection of [disjoint sets](!#disjoint-sets) — and when the explorer produces no shading at all, that **is** the picture of such an expression.

The empty set's algebra mirrors the universal set's, with the roles reversed: it vanishes from unions ($A \\cup \\emptyset = A$) and absorbs intersections ($A \\cap \\emptyset = \\emptyset$). One more fact has no visual clue at all and is worth stating: $\\emptyset \\subseteq A$ for every set $A$ — vacuously, since there is no element of $\\emptyset$ that could fail to be in $A$.`,
      link: '',
    },

    // ---- Per-state sections: Complements ----

    obj21: {
      title: `The Complement of A`,
      content: `Selecting $A'$ turns the shading inside-out: highlighted are the outside region and the B-only crescent — everything except the full circle of $A$.`,
      before: ``,
      after: `The frozen frame is the rectangle with a circular hole, and the hole is exactly the previous shading of [set A on its own](!#the-set-a-on-its-own). That is the definition made visible: $A' = U \\setminus A$, so the two states partition the rectangle between them, with no overlap and nothing left over. In symbols, $A \\cup A' = U$ and $A \\cap A' = \\emptyset$ — the complement laws, both readable straight off the pair of pictures.

Note that part of $B$ is shaded and part is not: the B-only crescent belongs to $A'$, but the central overlap does not, because its elements are in $A$. The complement cuts through $B$ without any regard for it — a first hint of why compound expressions like $(A \\cup B)'$ in the De Morgan states need care rather than guesswork.`,
      link: '',
    },

    obj22: {
      title: `The Complement of B`,
      content: `The mirror complement: $B'$ shades the outside region and the A-only crescent — everything except the full circle of $B$.`,
      before: ``,
      after: `Together with [the complement of A](!#the-complement-of-a), this frame completes a tidy four-way bookkeeping of the diagram: each of the four regions is either in $A$ or in $A'$, and independently either in $B$ or in $B'$. The four combinations $A \\cap B$, $A \\cap B'$, $A' \\cap B$, $A' \\cap B'$ are exactly the four regions — overlap, left crescent, right crescent, outside.

Applying the operation twice undoes it: $(B')' = B$, the double complement law. In the picture, complementing swaps shaded and unshaded regions, and swapping twice restores the original — which is also why the complement pairs states across the whole catalog, matching each shading with its photographic negative.`,
      link: '',
    },

    // ---- Per-state sections: Intersection & Union ----

    obj23: {
      title: `The Intersection of A and B`,
      content: `Selecting $A \\cap B$ shades a single region: the lens where the two circles overlap. This is the tightest shading of any operation in the catalog — one region out of four.`,
      before: ``,
      after: `The intersection answers the question **and**: an element is highlighted exactly when it is in $A$ **and** in $B$. With the explorer's example sets $A = \\{1,2,3,4\\}$ and $B = \\{3,4,5,6\\}$, the lens holds $\\{3,4\\}$ — the elements the two sets share.

Two structural facts are visible in the frozen frame. First, $A \\cap B$ sits inside both circles, which is the picture of $A \\cap B \\subseteq A$ and $A \\cap B \\subseteq B$: the intersection is always a subset of each of its parents. Second, the lens is the region that [disjoint sets](!#disjoint-sets) lose entirely — when it is empty, the sets have nothing in common, and the Relations tab redraws them apart.`,
      link: '',
    },

    obj24: {
      title: `The Union of A and B`,
      content: `Selecting $A \\cup B$ shades three regions at once — both crescents and the overlap — covering everything inside either circle and leaving only the outside blank.`,
      before: ``,
      after: `The union answers the question **or**, in the inclusive sense: in $A$, in $B$, or in both. With $A = \\{1,2,3\\}$ and $B = \\{3,4,5\\}$ the union is $\\{1,2,3,4,5\\}$ — the shared element $3$ appears once, not twice, because sets do not count multiplicity.

The three-region shading explains the most used counting formula in elementary set theory. Adding $|A|$ and $|B|$ counts the lens twice — it is inside both circles — so the correction

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

subtracts [the intersection](!#the-intersection-of-a-and-b) exactly once. The frozen frame is the inclusion-exclusion principle before any formula is written: three disjoint regions, each counted once.`,
      link: '',
    },

    // ---- Per-state sections: Differences ----

    obj25: {
      title: `The Difference A Minus B`,
      content: `Selecting $A \\setminus B$ shades only the left crescent: the part of $A$ that does not touch $B$. The overlap, though it belongs to $A$, is excluded.`,
      before: ``,
      after: `The difference is intersection in disguise: $A \\setminus B = A \\cap B'$, "in $A$ and not in $B$". The frozen frame proves the equivalence — start from the full circle of $A$ and delete the lens, or intersect $A$ with [the complement of B](!#the-complement-of-b); either route paints the same crescent.

Subtraction of sets, like subtraction of numbers, is order-sensitive. The mirror state [B minus A](!#the-difference-b-minus-a) shades the **other** crescent, and the two results share no elements at all — a stronger asymmetry than numbers show, where $a - b$ and $b - a$ at least sit symmetrically around zero. The two crescents together, with the lens still excluded, form [the symmetric difference](!#the-symmetric-difference).`,
      link: '',
    },

    obj26: {
      title: `The Difference B Minus A`,
      content: `The reversed subtraction: $B \\setminus A$ shades only the right crescent — the private part of $B$, with the shared lens removed.`,
      before: ``,
      after: `Comparing this frame with [A minus B](!#the-difference-a-minus-b) side by side is the cleanest possible demonstration that set difference is not commutative: same two sets, same two circles, opposite crescents, and not a single element in common between the two answers.

The identity $B \\setminus A = B \\cap A'$ holds just as its mirror does, and one consequence deserves spelling out: the three sets $A \\setminus B$, $A \\cap B$, and $B \\setminus A$ are pairwise disjoint and together cover $A \\cup B$. Every element of the union lives in exactly one of the three — the left crescent, the lens, or the right crescent. That three-way split is the skeleton on which all two-set counting arguments hang.`,
      link: '',
    },

    obj27: {
      title: `The Symmetric Difference`,
      content: `Selecting $A \\triangle B$ shades both crescents while leaving the central lens blank — the elements belonging to exactly one of the two sets.`,
      before: ``,
      after: `The symmetric difference is the **exclusive or** of set theory: in $A$ or in $B$, but not in both. The frozen frame shows its two equivalent constructions at a glance. Union the two one-sided differences, $(A \\setminus B) \\cup (B \\setminus A)$, and you paint the two crescents directly; or take [the union](!#the-union-of-a-and-b) and delete [the intersection](!#the-intersection-of-a-and-b), $(A \\cup B) \\setminus (A \\cap B)$, and you arrive at the same picture from outside in.

Unlike the one-sided differences, $\\triangle$ is commutative — the shading is left-right symmetric — and it has an algebra of its own: $A \\triangle A = \\emptyset$, $A \\triangle \\emptyset = A$, and the operation is even associative, making it a group operation on subsets of $U$. The blank lens is the whole story: shared elements cancel.`,
      link: '',
    },

    // ---- Per-state sections: Compound ----

    obj28: {
      title: `The Union of A with the Complement of B`,
      content: `Selecting $A \\cup B'$ shades three regions — outside, the A-only crescent, and the lens — leaving blank exactly one region: the B-only crescent.`,
      before: ``,
      after: `Reading compound shadings is easiest through the blank region rather than the shaded ones. Here the unshaded crescent is $B \\setminus A$, so the frame says $A \\cup B' = (B \\setminus A)'$ — the complement of [the difference B minus A](!#the-difference-b-minus-a). One glance at the two frozen frames confirms they are photographic negatives of each other.

The same region-reading gives the logical meaning: an element fails to be in $A \\cup B'$ only by being in $B$ without being in $A$. So the state encodes the implication "if $x \\in B$ then $x \\in A$" — it is the truth set of $B \\Rightarrow A$. Its mirror, [the union of the complement of A with B](!#the-union-of-the-complement-of-a-with-b), encodes the reverse implication.`,
      link: '',
    },

    obj29: {
      title: `The Union of the Complement of A with B`,
      content: `The mirror compound: $A' \\cup B$ shades outside, the B-only crescent, and the lens, leaving only the A-only crescent blank.`,
      before: ``,
      after: `The blank region is $A \\setminus B$, so this state is the complement of [the difference A minus B](!#the-difference-a-minus-b): $A' \\cup B = (A \\setminus B)'$. In logical form it is the truth set of the implication $A \\Rightarrow B$ — the only way to violate "if in $A$, then in $B$" is to sit in the A-only crescent, and that is precisely the one unshaded region.

This state also quietly contains the subset relation. Saying $A \\subseteq B$ is saying the implication holds for **every** element of $U$ — that is, $A' \\cup B = U$, all four regions shaded. Compare [A as a subset of B](!#a-as-a-subset-of-b) in the Relations tab, where the same fact is drawn by moving the circles instead of shading around them.`,
      link: '',
    },

    // ---- Per-state sections: De Morgan's Laws ----

    obj30: {
      title: `The Complement of the Union`,
      content: `Selecting $(A \\cup B)'$ shades a single region: the space outside both circles. Nothing inside either circle is highlighted.`,
      before: ``,
      after: `This is the most extreme shading in the catalog — one region, and the one no basic operation reaches on its own. The frame is the visual proof of the first De Morgan law: being outside the union means being outside $A$ **and** outside $B$ simultaneously, which is precisely the intersection of the two complements,

$$(A \\cup B)' = A' \\cap B'$$

You can verify it with the earlier frames: overlay [the complement of A](!#the-complement-of-a) and [the complement of B](!#the-complement-of-b) and keep only regions shaded in both — the B-only crescent falls (not in $A'$'s partner), the A-only crescent falls, and only the outside survives. Complement turned a union into an intersection; that swap is the whole content of the law.`,
      link: '',
    },

    obj31: {
      title: `The Complement of the Intersection`,
      content: `Selecting $(A \\cap B)'$ shades three regions — outside and both crescents — leaving only the central lens blank.`,
      before: ``,
      after: `The second De Morgan law is this frame's caption written in symbols: avoiding the intersection means missing at least one of the two sets, i.e. being outside $A$ **or** outside $B$,

$$(A \\cap B)' = A' \\cup B'$$

Note the mirrored structure with [the complement of the union](!#the-complement-of-the-union): there, complement turned $\\cup$ into $\\cap$ and shaded 1 region; here it turns $\\cap$ into $\\cup$ and shades 3. The two shadings are complementary — together they cover all four regions, overlapping nowhere, because their unpainted parts ([the union](!#the-union-of-a-and-b) and [the intersection](!#the-intersection-of-a-and-b) respectively) nest inside one another.

A useful reading habit generalizes from here: a complemented compound expression is easiest to shade by first shading the inside expression, then flipping every region. The explorer lets you do exactly that experiment with one click.`,
      link: '',
    },

    // ---- Per-state sections: Relations ----

    obj32: {
      title: `A as a Subset of B`,
      content: `Selecting $A \\subseteq B$ redraws the layout: a small circle $A$ sits entirely inside a large circle $B$, and the shading fills $A$ — which is now the same thing as the overlap $A \\cap B$.`,
      before: ``,
      after: `The nested layout encodes the relation geometrically: there is nowhere to stand inside $A$ without also standing inside $B$, so the A-only crescent of the standard layout has vanished. That vanished region **is** the assertion — $A \\subseteq B$ is equivalent to $A \\setminus B = \\emptyset$.

Two algebraic consequences become obvious in the picture: $A \\cap B = A$ (the overlap is all of $A$) and $A \\cup B = B$ (uniting adds nothing new to $B$). Either equation can serve as the definition of subset, and both degenerate gracefully in the extremes: $\\emptyset \\subseteq B$ for any $B$, and $B \\subseteq B$ always — the subset relation is reflexive. When it holds in both directions at once, the sets are equal; see [equal sets](!#equal-sets) for that limiting layout, and [B as a subset of A](!#b-as-a-subset-of-a) for this state's mirror.`,
      link: '',
    },

    obj33: {
      title: `B as a Subset of A`,
      content: `The mirrored nesting: a small circle $B$ inside a large circle $A$, with the shading filling $B$ — again the entire overlap of the pair.`,
      before: ``,
      after: `Everything from [A as a subset of B](!#a-as-a-subset-of-b) transfers with the roles reversed: $B \\setminus A = \\emptyset$, $A \\cap B = B$, and $A \\cup B = A$. The pair of nested frames also makes antisymmetry visible — if each set is a subset of the other, neither circle can be strictly smaller, and the layouts collapse into the coincident circles of equal sets.

One caution the drawing teaches by contrast: in the **standard** overlapping layout, nothing stops $B \\subseteq A$ from being true — the picture merely fails to show it, since it draws a B-only crescent that would in fact be empty. The Relations layouts exist precisely to remove that silent possibility from the page.`,
      link: '',
    },

    obj34: {
      title: `Disjoint Sets`,
      content: `Selecting $A \\cap B = \\emptyset$ separates the circles completely: two non-overlapping discs, both shaded, with clear space between them.`,
      before: ``,
      after: `Disjointness is the empty-intersection relation: the sets share no elements, so the lens region of the standard layout is gone and the circles need not touch. The shading here highlights both discs — everything that is in $A$ or in $B$ — showing that for disjoint sets the union simply places the two sets side by side.

Counting is where disjointness pays off: with no shared elements to double-count, inclusion-exclusion loses its correction term and $|A \\cup B| = |A| + |B|$ exactly. This is the additivity that underlies probability of mutually exclusive events and every "partition into cases" argument. Note the contrast with [the intersection](!#the-intersection-of-a-and-b) state in the standard layout, whose single shaded lens is exactly what disjointness declares empty.`,
      link: '',
    },

    obj35: {
      title: `Equal Sets`,
      content: `Selecting $A = B$ draws the two circles in the same position — one solid outline, one dashed so both remain visible — and shades the single shared disc.`,
      before: ``,
      after: `Equality is the degenerate limit of the diagram: all the structure that makes a Venn diagram interesting has collapsed. There is no A-only crescent, no B-only crescent — just one region inside and one outside. The dashed second outline is a drawing trick, not mathematics: coincident circles would otherwise be indistinguishable from a single set.

The working definition behind the picture is double inclusion: $A = B$ exactly when $A \\subseteq B$ and $B \\subseteq A$. That is how equality of sets is actually proved — two subset arguments, one in each direction — and the two nested layouts of [A as a subset of B](!#a-as-a-subset-of-b) and [B as a subset of A](!#b-as-a-subset-of-a) are the two halves of the proof, superimposed here into a single coincident frame. In element terms: sets are equal when they have exactly the same members, regardless of how they are described.`,
      link: '',
    },
  }

  // Frozen-state framed units (Line 1). Built here, passed via props, rendered
  // as content-array items — never interpolated into sectionsContent strings.
  const d = twoSetsVennDiagrams;
  const stateUnits = {
    setA: demoUnitFrame({ svg: d.setA, caption: 'Set A, frozen',
      text: 'The full left circle is shaded: the A-only crescent and the shared lens together. Even the simplest set occupies two of the diagram&#8217;s four regions.' }),
    setB: demoUnitFrame({ svg: d.setB, caption: 'Set B, frozen',
      text: 'The mirror image of set A &#8212; the full right circle. Swapping the labels turns either frame into the other, which is commutativity drawn as symmetry.' }),
    universe: demoUnitFrame({ svg: d.universeAll, caption: 'Universal set U, frozen',
      text: 'Every region is shaded, crescents, lens and outside alike. The rectangle&#8217;s boundary is the only unshaded thing left &#8212; the edge of &#8220;everything under consideration&#8221;.' }),
    empty: demoUnitFrame({ svg: d.plain, caption: 'Empty set &#8709;, frozen',
      text: 'Zero regions shaded. The bare circles are not a missing answer &#8212; they are the answer: the picture of a set with no elements.' }),
    aComp: demoUnitFrame({ svg: d.complementA, caption: 'Complement A&#8242;, frozen',
      text: 'The rectangle is painted with a circular hole where A was. Note the split through B: its private crescent is shaded, its shared lens is not.' }),
    bComp: demoUnitFrame({ svg: d.complementB, caption: 'Complement B&#8242;, frozen',
      text: 'The negative of set B: outside plus the A-only crescent. Together with B itself it covers the rectangle exactly once.' }),
    intersection: demoUnitFrame({ svg: d.intersection, caption: 'Intersection A &#8745; B, frozen',
      text: 'One region only &#8212; the lens where the circles overlap. The tightest shading any operation produces.' }),
    union: demoUnitFrame({ svg: d.union, caption: 'Union A &#8746; B, frozen',
      text: 'Three regions shaded, only the outside left blank. The lens is painted once, not twice &#8212; the visual root of inclusion-exclusion.' }),
    aMinusB: demoUnitFrame({ svg: d.differenceAB, caption: 'Difference A &#8726; B, frozen',
      text: 'Only the left crescent: A with its shared lens deleted. What remains of A after B takes its part back.' }),
    bMinusA: demoUnitFrame({ svg: d.differenceBA, caption: 'Difference B &#8726; A, frozen',
      text: 'The opposite crescent from A &#8726; B &#8212; same sets, reversed subtraction, disjoint answer. Order matters.' }),
    symdiff: demoUnitFrame({ svg: d.symmetricDifference, caption: 'Symmetric difference A &#9651; B, frozen',
      text: 'Both crescents shaded, the lens conspicuously blank: elements of exactly one set. Shared elements cancel.' }),
    aOrBcomp: demoUnitFrame({ svg: d.aUnionBcomp, caption: 'A &#8746; B&#8242;, frozen',
      text: 'Everything except the B-only crescent. Read it from the blank: the one way out is being in B without A.' }),
    acompOrB: demoUnitFrame({ svg: d.acompUnionB, caption: 'A&#8242; &#8746; B, frozen',
      text: 'Everything except the A-only crescent &#8212; the truth set of &#8220;if in A, then in B&#8221;. The blank region is the counterexample zone.' }),
    dm1: demoUnitFrame({ svg: d.complementUnion, caption: '(A &#8746; B)&#8242;, frozen',
      text: 'A single shaded region: outside both circles. Outside the union means outside A and outside B at once &#8212; De Morgan&#8217;s first law as a picture.' }),
    dm2: demoUnitFrame({ svg: d.complementIntersection, caption: '(A &#8745; B)&#8242;, frozen',
      text: 'Three regions shaded, only the lens spared. Avoiding the intersection means missing at least one set &#8212; the second law.' }),
    subAB: demoUnitFrame({ svg: d.subsetAinB, caption: 'A &#8838; B, frozen',
      text: 'The layout itself changes: A nests inside B, so an A-only region cannot even be drawn. The shaded A is simultaneously the whole intersection.' }),
    subBA: demoUnitFrame({ svg: d.subsetBinA, caption: 'B &#8838; A, frozen',
      text: 'The mirrored nesting: B sits wholly inside A. Here A &#8745; B = B and A &#8746; B = A, both visible at a glance.' }),
    disjoint: demoUnitFrame({ svg: d.disjoint, caption: 'Disjoint sets, frozen',
      text: 'The circles separate entirely &#8212; no lens exists to shade. With nothing shared, the union is a plain side-by-side placement.' }),
    equal: demoUnitFrame({ svg: d.equalSets, caption: 'Equal sets, frozen',
      text: 'Two circles drawn in one place, the second dashed so it stays visible. All the interior structure of the diagram has collapsed into a single shared disc.' }),
  };

  // Per-state panel explanations (Line 1). Rendered by ExplanationsPanel as an
  // extra tab through processContent — $math$ and same-page !# anchors work.
  // The component's built-in Definition/Example tab still renders when this is
  // not passed.
  const explanations = {
    'set-a': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Inside a universe with a second set present, $A$ splits into two disjoint pieces: its private crescent $A \\setminus B$ and the shared lens $A \\cap B$. [Learn more about set A](!#the-set-a-on-its-own) · [All basic sets](!#the-basic-sets)` }] }],
    'set-b': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The exact mirror of set A — relabel the circles and the two states trade places, which is why commutative identities always shade symmetric regions. [Learn more about set B](!#the-set-b-on-its-own) · [All basic sets](!#the-basic-sets)` }] }],
    'universe': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `$U$ shades all four regions: it absorbs unions, vanishes from intersections, and gives the complement its meaning as $A' = U \\setminus A$. [Learn more about the universal set](!#the-universal-set-u) · [All basic sets](!#the-basic-sets)` }] }],
    'empty': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The blank diagram is a real answer — expressions like $A \\cap A'$ produce exactly this shading, and $\\emptyset$ is a subset of every set vacuously. [Learn more about the empty set](!#the-empty-set) · [All basic sets](!#the-basic-sets)` }] }],
    'a-comp': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `$A'$ is the rectangle with a hole where $A$ was: together they satisfy $A \\cup A' = U$ and $A \\cap A' = \\emptyset$, the complement laws. [Learn more about the complement of A](!#the-complement-of-a) · [All complements](!#the-two-complements)` }] }],
    'b-comp': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The photographic negative of $B$; taking the complement twice restores the original, $(B')' = B$. [Learn more about the complement of B](!#the-complement-of-b) · [All complements](!#the-two-complements)` }] }],
    'intersection': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The lens is the diagram's word for **and**, and it always sits inside both parents: $A \\cap B \\subseteq A$ and $A \\cap B \\subseteq B$. [Learn more about the intersection](!#the-intersection-of-a-and-b) · [Intersection and union](!#intersection-and-union)` }] }],
    'union': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Three regions, each painted once — which is why $|A \\cup B| = |A| + |B| - |A \\cap B|$ needs its correction term. [Learn more about the union](!#the-union-of-a-and-b) · [Intersection and union](!#intersection-and-union)` }] }],
    'a-minus-b': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The left crescent is difference as intersection in disguise: $A \\setminus B = A \\cap B'$. [Learn more about A minus B](!#the-difference-a-minus-b) · [All differences](!#the-three-differences)` }] }],
    'b-minus-a': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Reversing the subtraction shades the opposite crescent — the two differences share no elements at all, so set subtraction is emphatically not commutative. [Learn more about B minus A](!#the-difference-b-minus-a) · [All differences](!#the-three-differences)` }] }],
    'symdiff': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Both crescents without the lens: the exclusive or, $A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$. [Learn more about the symmetric difference](!#the-symmetric-difference) · [All differences](!#the-three-differences)` }] }],
    'a-or-bcomp': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Read it from the single blank region: $A \\cup B'$ is the complement of $B \\setminus A$, the truth set of the implication $B \\Rightarrow A$. [Learn more about A union B-complement](!#the-union-of-a-with-the-complement-of-b) · [All compound expressions](!#compound-expressions)` }] }],
    'acomp-or-b': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The blank A-only crescent is the counterexample zone of "if $x \\in A$ then $x \\in B$" — shade it all and you have drawn $A \\subseteq B$. [Learn more about A-complement union B](!#the-union-of-the-complement-of-a-with-b) · [All compound expressions](!#compound-expressions)` }] }],
    'dm-1': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `One region only: outside the union means outside $A$ and outside $B$ at once, so $(A \\cup B)' = A' \\cap B'$. [Learn more about the complement of the union](!#the-complement-of-the-union) · [De Morgan's laws](!#de-morgans-laws-for-two-sets)` }] }],
    'dm-2': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Everything but the lens: missing the intersection means escaping at least one set, so $(A \\cap B)' = A' \\cup B'$. [Learn more about the complement of the intersection](!#the-complement-of-the-intersection) · [De Morgan's laws](!#de-morgans-laws-for-two-sets)` }] }],
    'sub-a-b': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The nesting removes the A-only region from the page entirely — $A \\subseteq B$ is exactly the claim $A \\setminus B = \\emptyset$, with $A \\cap B = A$ and $A \\cup B = B$ as corollaries. [Learn more about A as a subset of B](!#a-as-a-subset-of-b) · [All relations](!#set-relations)` }] }],
    'sub-b-a': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `The mirrored nesting: here $B \\setminus A = \\emptyset$, $A \\cap B = B$, and $A \\cup B = A$. [Learn more about B as a subset of A](!#b-as-a-subset-of-a) · [All relations](!#set-relations)` }] }],
    'disjoint': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `With no lens to share, inclusion-exclusion loses its correction term: $|A \\cup B| = |A| + |B|$ exactly. [Learn more about disjoint sets](!#disjoint-sets) · [All relations](!#set-relations)` }] }],
    'equal': [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content:
      `Equality is double inclusion — $A \\subseteq B$ and $B \\subseteq A$ at once — which is why the two nested layouts collapse into coincident circles. [Learn more about equal sets](!#equal-sets) · [All relations](!#set-relations)` }] }],
  };

  const introContent = {
    id: "intro",
    title: "Two-Set Algebra Through Shaded Regions",
    content: `Every algebraic expression involving two sets — no matter how compound — reduces to a combination of four disjoint regions in a Venn diagram. The explorer below lets you select any standard two-set identity and instantly see which combination of regions it picks out. The shaded area shows the elements satisfying the expression; the explanation panel translates the picture back into set-builder notation.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a two-set Venn diagram?",
      answer: "A two-set Venn diagram is a visual representation of two sets, drawn as overlapping circles inside a rectangle that represents the universal set. The two circles, labeled A and B, divide the universe into four disjoint regions: outside both sets, in A only, in B only, and in both A and B. Every two-set identity corresponds to a combination of these four regions."
    },
    obj2: {
      question: "What identities can the explorer visualize?",
      answer: "The explorer covers all standard two-set identities: the basic sets A and B, the universal set, and the empty set; complements A prime and B prime; intersection and union; the three differences (A minus B, B minus A, and symmetric difference); compound expressions like A union B prime; De Morgan's laws; and the relations of subset, disjoint sets, and equal sets. Twenty-two scenarios in total."
    },
    obj3: {
      question: "What are De Morgan's laws for two sets?",
      answer: "De Morgan's laws state that the complement of a union equals the intersection of the complements, and the complement of an intersection equals the union of the complements. Symbolically, (A union B) prime equals A prime intersect B prime, and (A intersect B) prime equals A prime union B prime. Both can be verified visually by shading the relevant regions in the Venn diagram."
    },
    obj4: {
      question: "How is the symmetric difference different from the union?",
      answer: "The union of A and B includes every element in A, in B, or in both, covering all three shaded regions inside the two circles. The symmetric difference includes only elements in exactly one of the sets, excluding the intersection. In a Venn diagram, the symmetric difference shades the two crescent regions and leaves the central overlap unshaded."
    },
    obj5: {
      question: "Can the explorer show set relations like subset and disjoint?",
      answer: "Yes. Under the Relations tab, the explorer switches to special circle layouts that reflect each relation: a small circle inside a larger one for A being a subset of B, two separated circles for disjoint sets that share no elements, and two overlapping circles drawn at the same position for equal sets. The shaded region in each case highlights the elements common to A and B."
    },
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Two-Set Venn Diagram Basic Identities Explorer",
      "description": "Shade Venn diagram regions for two-set operations: union, intersection, complement, difference, De Morgan's laws, and set relations like subset and disjoint.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-basic-venn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive two-circle Venn diagram with shaded regions for each selected identity",
        "Identities organized into seven category tabs: Basic Sets, Complements, Intersection and Union, Differences, Compound expressions, De Morgan's Laws, and Relations",
        "Formula buttons and a Jump-to dropdown for selecting any of 22 standard two-set identities",
        "Customizable shading color and opacity with a one-click reset",
        "Previous and Next navigation with a scenario counter that wraps around",
        "Special circle layouts for subset, disjoint, and equal-set relations",
        "Side explanation panel with set-builder definitions and numeric examples"
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
      "educationalLevel": "High School, College",
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
          "name": "Set Theory",
          "item": "https://www.learnmathclass.com/set-theory"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Two-Set Venn Diagram: Basic Identities",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-basic-venn"
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

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      stateUnits,
      explanations,
      seoData: {
        title: "Two-Set Venn Diagram: Basic Identities | Learn Math Class",
        description: "Shade Venn diagram regions for two-set operations: union, intersection, complement, difference, De Morgan's laws, and set relations like subset and disjoint.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools/two-sets-basic-venn",
        name: "Two-Set Venn Diagram Basic Identities Explorer",
        hubDescription: "Shade the Venn diagram for any two-set identity — union, intersection, complement, the three differences, De Morgan's laws, and set relations like subset and disjoint. Switch between categories using the tabs, pick an identity from the formula buttons or Jump-to dropdown, and customize the shading color and opacity. Each highlighted region updates with an explanation panel showing the set-builder notation.",
        category: "Venn Diagrams",
        subCategory: "Two Sets",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="38" r="20" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="1.3"/><circle cx="50" cy="38" r="20" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="1.3"/><text x="19" y="26" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle" font-style="italic">A</text><text x="61" y="26" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle" font-style="italic">B</text><text x="40" y="72" font-family="Georgia,serif" font-size="10" fill="#E6F1FB" text-anchor="middle" font-style="italic">A &#8746; B</text></svg>`
      },
    }
  }
}

export default function TwoSetsBasicVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / group section / per-state section with its
  // frozen-state framed unit [content, unit, after].
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
  })
  const withAfter = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content, sectionsContent[obj].after]
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
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started-with-the-explorer'),
    plain('obj2', 'navigating-category-tabs'),
    plain('obj3', 'selecting-an-identity'),
    plain('obj4', 'reading-the-shaded-venn-diagram'),
    plain('obj5', 'customizing-color-and-opacity'),
    plain('obj6', 'previous-and-next-navigation'),

    plain('obj11', 'the-basic-sets'),
    stateRow('obj17', 'the-set-a-on-its-own', 'setA'),
    stateRow('obj18', 'the-set-b-on-its-own', 'setB'),
    stateRow('obj19', 'the-universal-set-u', 'universe'),
    stateRow('obj20', 'the-empty-set', 'empty'),

    plain('obj12', 'the-two-complements'),
    stateRow('obj21', 'the-complement-of-a', 'aComp'),
    stateRow('obj22', 'the-complement-of-b', 'bComp'),

    plain('obj13', 'intersection-and-union'),
    stateRow('obj23', 'the-intersection-of-a-and-b', 'intersection'),
    stateRow('obj24', 'the-union-of-a-and-b', 'union'),

    plain('obj14', 'the-three-differences'),
    stateRow('obj25', 'the-difference-a-minus-b', 'aMinusB'),
    stateRow('obj26', 'the-difference-b-minus-a', 'bMinusA'),
    stateRow('obj27', 'the-symmetric-difference', 'symdiff'),

    plain('obj15', 'compound-expressions'),
    stateRow('obj28', 'the-union-of-a-with-the-complement-of-b', 'aOrBcomp'),
    stateRow('obj29', 'the-union-of-the-complement-of-a-with-b', 'acompOrB'),

    plain('obj7', 'what-is-a-two-set-venn-diagram'),
    plain('obj8', 'set-operations-on-two-sets'),

    withAfter('obj9', 'de-morgans-laws-for-two-sets'),
    stateRow('obj30', 'the-complement-of-the-union', 'dm1'),
    stateRow('obj31', 'the-complement-of-the-intersection', 'dm2'),

    plain('obj16', 'set-relations'),
    stateRow('obj32', 'a-as-a-subset-of-b', 'subAB'),
    stateRow('obj33', 'b-as-a-subset-of-a', 'subBA'),
    stateRow('obj34', 'disjoint-sets', 'disjoint'),
    stateRow('obj35', 'equal-sets', 'equal'),

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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Two Sets Basic Identities</h1>
      <br/>
      {/* <div style={{ display: 'grid', gridTemplateColumns: '200px minmax(0, 1fr)', gap: 28 }}>
        <SiblingsNavStandalone

          bg="#fafaf7"
          color="#2c5d99"
          activeColor="#143a66"
          activeBg="#dde9f7"

        /> */}
      <div style={{transform:'scale(0.85)'}}>

        <TwoSetIdentitiesExplorer explanations={explanations}/>

      </div>
      {/* </div> */}

      {/* <SiblingsNavStandalone
        bg="#fafaf7"
        color="#2c5d99"
        activeColor="#143a66"
        activeBg="#dde9f7"
      /> */}

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