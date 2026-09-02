


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import SiblingsNavStandalone from '../../../../app/components/SiblingsNavStandalone'
import ThreeSetBasicIdentitiesExplorer from '../../../../app/components/venn-diagrams/3-sets/ThreeSetBasicIdentitiesExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import threeSetsVennDiagrams from '../../../../app/components/venn-diagrams/3-sets/threeSetsVennDiagrams'

export async function getStaticProps(){

  const keyWords = [
    "three set venn diagram",
    "venn diagram three sets",
    "three set identities",
    "set identities visualizer",
    "union of three sets",
    "intersection of three sets",
    "triple intersection A B C",
    "triple union A B C",
    "de morgan laws three sets",
    "exactly one of three sets",
    "exactly two of three sets",
    "set operations explorer",
    "interactive venn diagram",
    "three circle venn diagram",
    "eight region venn diagram",
  ]

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `
- **Set** — a collection of distinct elements
- **Universal set** — the set containing every element under consideration, denoted $U$
- **Union** — $A \\cup B \\cup C$, elements in at least one of $A$, $B$, $C$
- **Intersection** — $A \\cap B \\cap C$, elements in all three sets
- **Pairwise intersection** — $A \\cap B$, $A \\cap C$, or $B \\cap C$
- **Complement** — $A'$, elements in $U$ but not in $A$
- **Set difference** — $A \\setminus B$, elements in $A$ but not in $B$
- **Symmetric difference** — $A \\triangle B \\triangle C$, elements in an odd number of $A$, $B$, $C$
- **De Morgan's laws (three sets)** — $(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$ and $(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$
- **Region** — one of the eight disjoint pieces a three-circle Venn diagram divides the universe into
`,
      before: ``,
      after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Explorer`,
      content: `Open the explorer and a three-circle Venn diagram appears with the first identity pre-selected. The blue shaded regions mark the elements that satisfy the current identity; the unshaded regions are excluded. The symbol of the current identity appears in the badge above the diagram, and the explanation panel beside it describes what the highlighted regions mean.

The interface has three main controls. The **category tabs** at the top group identities by type. The **formula buttons** below the tabs show the identities within the active category. The **Jump to** dropdown on the right lists every identity across all categories in one place.

At the bottom of the diagram column, **Previous** and **Next** cycle through all 40 identities in order, with a counter showing your current position. The theme panel underneath lets you customize the shading color and opacity.

No setup is required — pick any tab and any button to see the corresponding region combination light up immediately.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Navigating Category Tabs`,
      content: `The category tabs organize all 40 identities into six groups based on their structural role:

• [Basic Sets](!#the-basic-sets) — the sets $A$, $B$, $C$ themselves, the universal set $U$, and the empty set $\\emptyset$
• [Complements](!#the-three-complements) — $A'$, $B'$, and $C'$
• [Intersection & Union](!#intersections-and-unions) — the triple intersection $A \\cap B \\cap C$, the three pairwise intersections, the triple union $A \\cup B \\cup C$, and the three pairwise unions
• [Differences](!#the-differences) — the six pairwise differences, the three "only" regions like $A \\setminus (B \\cup C)$, the mixed $(A \\cup B) \\setminus C$, and the symmetric differences $A \\triangle B$ and $A \\triangle B \\triangle C$
• [Compound](!#compound-expressions) — three-set expressions including $A \\cap (B \\cup C)$, $A \\cup (B \\cap C)$, "exactly one of $A, B, C$", "exactly two", "at least two", and "at most one"
• [De Morgan's Laws](!#de-morgans-laws-for-three-sets) — $(A \\cup B \\cup C)'$ and $(A \\cap B \\cap C)'$

Click a tab to switch the row of formula buttons below. The active tab updates automatically when you navigate with Previous/Next. The tab strip scrolls horizontally on narrow screens.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Selecting an Identity`,
      content: `Two ways to pick an identity. Use the **formula buttons** under the active tab to choose from identities in that category — each button shows the set-theory notation ($A \\cup B \\cup C$, $A'$, $A \\triangle B \\triangle C$, "exactly two", and so on). Or use the **Jump to** dropdown, which lists every identity across all six categories in one menu, grouped by tab.

When you select an identity, three things update simultaneously:

• The diagram shading changes to highlight the regions belonging to the new identity
• The badge above the diagram updates to the new symbol
• The explanation panel refreshes with a definition and, where applicable, a numerical example like $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$, $C = \\{3,4,5\\}$ for the triple intersection

The active category tab follows your selection, so you always see which group the current identity belongs to.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Shaded Venn Diagram`,
      content: `A three-circle Venn diagram divides the universe into eight disjoint regions, and every three-set identity highlights some combination of them:

• **Outside all three circles** — elements in none of $A$, $B$, $C$, formally $A' \\cap B' \\cap C'$
• **Only in A** — formally $A \\setminus (B \\cup C)$
• **Only in B** — formally $B \\setminus (A \\cup C)$
• **Only in C** — formally $C \\setminus (A \\cup B)$
• **In A and B, not C** — formally $A \\cap B \\cap C'$
• **In A and C, not B** — formally $A \\cap B' \\cap C$
• **In B and C, not A** — formally $A' \\cap B \\cap C$
• **In all three** — the triple intersection $A \\cap B \\cap C$, the central region

For example, $A \\cup B \\cup C$ shades all seven regions inside any circle. "Exactly one" shades only the three "only" regions. "Exactly two" shades only the three pairwise-but-not-triple regions. $(A \\cup B \\cup C)'$ shades only the outside region. Hover over any region for a tooltip naming it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Customizing Color and Opacity`,
      content: `The **Theme** panel below the diagram offers two adjustments to the shaded regions.

The **color picker** changes the shading hue. Useful when printing, presenting, comparing diagrams side by side, or matching the color scheme of a course or textbook. Any standard color value works.

The **opacity slider** controls how transparent the shading is, ranging from $1.00$ (fully opaque) to $0.00$ (invisible). Lower opacity is helpful when you want to see the underlying circle outlines through the fill, especially in the central triple-intersection region where multiple overlapping boundaries meet. The current numeric value appears next to the slider in monospace.

Click **Reset** to return both controls to the defaults — blue at $0.85$ opacity. Theme changes persist as you navigate between scenarios, so adjustments stay applied across the entire session.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Previous and Next Navigation`,
      content: `At the bottom of the diagram column, the **Previous** and **Next** buttons cycle through all 40 identities in the order defined by the category groups: Basic Sets, then Complements, then Intersection & Union, then Differences, Compound, and finally De Morgan's Laws. The counter between the two buttons displays the current position, formatted as "$n$ / $40$".

Navigation wraps around: pressing **Previous** on the first scenario jumps to the last, and pressing **Next** on the last returns to the first. This makes the explorer well suited for systematic review — start at the first identity and click through every region combination one by one to see how each algebraic expression maps to a subset of the eight regions.

The active tab and active formula button update automatically as you advance, so you always know which group the current identity belongs to.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Three-Set Venn Diagram?`,
      content: `A three-set Venn diagram is a visual representation of three sets drawn as three overlapping circles inside a rectangle. The rectangle represents the **universal set** $U$ — everything under consideration. The three circles, labeled $A$, $B$, and $C$, are arranged symmetrically so that every possible combination of memberships produces its own region.

The diagram has exactly eight disjoint regions: one outside all circles, three "only" regions (only in $A$, only in $B$, only in $C$), three pairwise-but-not-triple regions, and the central triple intersection. Every algebraic combination of three sets — no matter how complex — maps to some union of these eight regions.

This is what gives three-set diagrams their distinctive value: they can visualize "counting" identities like "exactly two of $A, B, C$" or "at least one of $A, B, C$" that have no analogue in the two-set case, where there is no notion of "exactly two of two."

For comprehensive theory on Venn diagrams across different numbers of sets, see **Venn diagrams**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Three-Set Operations`,
      content: `Three-set algebra is generated by the same five operations as two-set algebra, but applied to three operands:

**Triple union** $A \\cup B \\cup C$ — elements in at least one of $A$, $B$, $C$. Visually, every region inside any circle.

**Triple intersection** $A \\cap B \\cap C$ — elements in all three sets simultaneously. Visually, the central region where all three circles overlap.

**Pairwise intersection** $A \\cap B$ — elements in both $A$ and $B$, regardless of $C$. Visually, two regions: the "in A and B, not C" region and the central triple intersection.

**Complement** $A'$ — elements outside $A$. With three sets this shades four regions: outside all circles, only in $B$, only in $C$, and the $B \\cap C$ region.

**Difference** $A \\setminus B$ — elements in $A$ but not in $B$. Two regions: "only in A" and "in A and C, not B".

**Symmetric difference** $A \\triangle B \\triangle C$ — elements in an odd number of the three sets. Four regions: the three "only" regions plus the triple intersection.

For formal definitions and algebraic properties, see **set operations**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `De Morgan's Laws for Three Sets`,
      content: `De Morgan's laws extend cleanly from two sets to three:

$$(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$$

$$(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$$

The complement of the triple union equals the intersection of the three complements. The complement of the triple intersection equals the union of the three complements. The pattern generalizes to any finite collection of sets.

Both laws can be verified visually with the explorer. Select $(A \\cup B \\cup C)'$ from the De Morgan's Laws tab: only the region outside all three circles is shaded. That same region is what $A' \\cap B' \\cap C'$ would produce — outside $A$ and outside $B$ and outside $C$ simultaneously. Likewise, $(A \\cap B \\cap C)'$ shades everything except the central triple intersection — the same regions that $A' \\cup B' \\cup C'$ produces.

For algebraic proofs, the general $n$-set form, and applications to propositional logic, see **De Morgan's laws**.`,
      before: ``,
      after: `Each law has a dedicated frozen frame below: [the complement of the triple union](!#the-complement-of-the-triple-union) — the catalog's one-region extreme — and [the complement of the triple intersection](!#the-complement-of-the-triple-intersection), its seven-region mirror.`,
      link: '',
    },

    obj10: {
      title: `Counting Identities Unique to Three Sets`,
      content: `Three-set algebra is the smallest setting where "counting" identities become non-trivial. The Compound tab collects them:

[Exactly one of $A, B, C$](!#exactly-one-of-the-three-sets) — elements in exactly one of the three sets. Shades the three "only" regions.

[Exactly two of $A, B, C$](!#exactly-two-of-the-three-sets) — elements in exactly two of the three sets. Shades the three pairwise-but-not-triple regions, excluding the central triple intersection.

[At least two of $A, B, C$](!#at-least-two-of-the-three-sets) — elements in two or three sets. Combines "exactly two" with the triple intersection.

[At most one of $A, B, C$](!#at-most-one-of-the-three-sets) — elements in zero or one sets. Combines the outside region with the three "only" regions.

These identities are typical of how three-set Venn diagrams are applied in combinatorics, probability (inclusion-exclusion), and survey analysis. The two-set case collapses most of them — "exactly two of two" is just the intersection, "at least two of two" is also the intersection.

For comprehensive treatment, see **set laws and identities**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts and Tools`,
      content: `**Set Operations** — formal definitions and properties of union, intersection, complement, difference, and symmetric difference.

**Venn Diagrams** — overview of one-set, two-set, and three-set diagrams, drawing conventions, and when each is appropriate.

**De Morgan's Laws** — algebraic proofs of the two-set and three-set forms and the generalization to arbitrary collections of sets.

**Two-Set Venn Diagram** — the simpler two-circle case with four regions; useful for first exposure to the visual approach.

**Inclusion-Exclusion Principle** — the counting formula $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$, which depends on the eight-region decomposition.

**Set Theory Definitions** — glossary of foundational terms used throughout set algebra.

**Set Laws and Identities** — algebraic catalog of commutative, associative, distributive, absorption, and complement laws on sets.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 group sections ----

    obj12: {
      title: `The Basic Sets`,
      content: `The Basic Sets tab shows the diagram's raw material before any operation acts on it. [Set A](!#the-set-a-on-its-own), [set B](!#the-set-b-on-its-own), and [set C](!#the-set-c-on-its-own) each shade one full circle — which in a three-circle diagram already means four regions apiece. [The universal set](!#the-universal-set-u) shades all eight regions, and [the empty set](!#the-empty-set) shades none.

The step up from two sets is worth pausing on: each circle now overlaps **two** neighbors plus the shared center, so even "just the set $A$" is a four-region composite. Learning to see one circle as four regions is the core reading skill for everything below.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `The Three Complements`,
      content: `The Complements tab flips one circle at a time: [the complement of A](!#the-complement-of-a), [the complement of B](!#the-complement-of-b), and [the complement of C](!#the-complement-of-c). Each shades four regions — the outside plus everything that avoids the complemented circle.

The three frames are rotations of one another, a first taste of the diagram's three-fold symmetry: any statement proved about $A'$ transfers to $B'$ and $C'$ by relabeling. Complements are also the raw ingredients of the De Morgan states at the end of the catalog.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Intersections and Unions`,
      content: `Eight states cover the and/or combinations. At the extremes sit [the triple intersection](!#the-triple-intersection) — the diagram's smallest interesting region — and [the triple union](!#the-triple-union), everything inside any circle. Between them, the three pairwise intersections ([A ∩ B](!#pairwise-intersection-a-and-b), [A ∩ C](!#pairwise-intersection-a-and-c), [B ∩ C](!#pairwise-intersection-b-and-c)) and the three pairwise unions ([A ∪ B](!#pairwise-union-a-and-b), [A ∪ C](!#pairwise-union-a-and-c), [B ∪ C](!#pairwise-union-b-and-c)).

The pairwise states carry the tab's key lesson: with a third set on the page, $A \\cap B$ is **two** regions and $A \\cup B$ is **six**, because the ignored set $C$ cuts through both. An operation on two sets does not stop being about two sets — but its picture changes when the universe holds a third.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `The Differences`,
      content: `Twelve subtraction states. The six one-sided differences ([A ∖ B](!#the-difference-a-minus-b), [A ∖ C](!#the-difference-a-minus-c), [B ∖ A](!#the-difference-b-minus-a), [B ∖ C](!#the-difference-b-minus-c), [C ∖ A](!#the-difference-c-minus-a), [C ∖ B](!#the-difference-c-minus-b)) each shade two regions. Subtracting **both** neighbors instead of one produces the three "only" states ([only in A](!#only-in-a), [only in B](!#only-in-b), [only in C](!#only-in-c)). The tab closes with [the mixed difference (A ∪ B) ∖ C](!#union-of-a-and-b-minus-c) and the two symmetric differences — [A △ B](!#symmetric-difference-of-a-and-b) and [the triple form A △ B △ C](!#the-triple-symmetric-difference).

The organizing contrast: $A \\setminus B$ keeps the part of $A$ that $C$ shares, while $A \\setminus (B \\cup C)$ strips $A$ to its private region. One extra subtraction, one region fewer — the difference between "not in $B$" and "in nothing else".`,
      before: ``,
      after: ``,
      link: '',
    },

    obj16: {
      title: `Compound Expressions`,
      content: `The Compound tab is where three sets earn their keep. Three states isolate single pairwise regions ([A and B but not C](!#in-a-and-b-but-not-c), [A and C but not B](!#in-a-and-c-but-not-b), [B and C but not A](!#in-b-and-c-but-not-a)); three show mixed and/or grouping ([A ∩ (B ∪ C)](!#a-intersected-with-b-union-c), [(A ∪ B) ∩ C](!#a-union-b-intersected-with-c), [A ∪ (B ∩ C)](!#a-united-with-b-intersect-c)); and four count memberships ([exactly one](!#exactly-one-of-the-three-sets), [exactly two](!#exactly-two-of-the-three-sets), [at least two](!#at-least-two-of-the-three-sets), [at most one](!#at-most-one-of-the-three-sets)).

The counting quartet has no two-set analogue, and the grouped states preview the distributive laws: $A \\cap (B \\cup C)$ and $A \\cup (B \\cap C)$ shade different region sets, proving parentheses matter when the operations mix.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Per-state sections: Basic Sets ----

    obj17: {
      title: `The Set A on Its Own`,
      content: `The top circle, fully shaded — and in a three-set diagram that already means four regions: A-only, the two pairwise slivers $A \\cap B$ and $A \\cap C$, and the central core.`,
      before: ``,
      after: `The four-piece decomposition $A = (A \\text{ only}) \\cup (A \\cap B \\cap C') \\cup (A \\cap B' \\cap C) \\cup (A \\cap B \\cap C)$ is the three-set version of the two-piece split familiar from two circles, and it drives every counting argument about $|A|$ in the presence of two other sets.

With the example $A = \\{1,2,3\\}$, the four pieces sort the elements by which neighbors also claim them. Compare [set B](!#the-set-b-on-its-own) and [set C](!#the-set-c-on-its-own) — the same frame rotated a third of a turn.`,
      link: '',
    },

    obj18: {
      title: `The Set B on Its Own`,
      content: `The lower-left circle, fully shaded: B-only, the slivers shared with $A$ and with $C$, and the center.`,
      before: ``,
      after: `Nothing distinguishes $B$'s frame from [$A$'s](!#the-set-a-on-its-own) except position — rotate the diagram $120°$ and they trade places. That rotational symmetry is the three-set face of commutativity: any identity indifferent to the naming of sets must produce rotation-symmetric families of frames.

The decomposition reads the same way: $B$ splits into its private region plus three shared pieces, and the explorer's tooltips name each one on hover.`,
      link: '',
    },

    obj19: {
      title: `The Set C on Its Own`,
      content: `The lower-right circle, fully shaded — the third and last rotation of the single-set frame.`,
      before: ``,
      after: `With all three single-set frames seen, a bookkeeping fact becomes visible: each of the seven inside regions is claimed by one, two, or three of the circles, and summing $|A| + |B| + |C|$ counts the pairwise slivers twice and the center three times. That over-counting is exactly what the inclusion-exclusion formula corrects.

The frame also completes the reading drill: whichever circle is shaded, the picture is four regions — one private, two shared with a single neighbor, one shared with both. See [only in C](!#only-in-c) for the private region alone.`,
      link: '',
    },

    obj20: {
      title: `The Universal Set U`,
      content: `All eight regions shaded — the three-set diagram at full saturation.`,
      before: ``,
      after: `The rectangle's role is unchanged from the two-set case: $U$ is the modeling boundary, identity for intersection, annihilator for union, and the reference against which the three complements are cut. What changes is only the count — the universe now decomposes into $2^3 = 8$ disjoint regions, one for each membership pattern.

Its polar opposite is [the empty set](!#the-empty-set); the pair bound the whole catalog between "everything" and "nothing".`,
      link: '',
    },

    obj21: {
      title: `The Empty Set`,
      content: `Zero regions shaded: three interlocking circles and no highlight anywhere.`,
      before: ``,
      after: `As with two sets, the blank frame is a real answer — $A \\cap A'$, or the intersection of any disjoint pair, produces exactly this shading. And $\\emptyset$ remains a subset of every set, vacuously.

The blank frame is also the catalog's zero point: every other state is "the empty set plus some regions". Clicking between $\\emptyset$ and [the universal set](!#the-universal-set-u) shows the two extremes that complementation, in [the complements tab](!#the-three-complements), exchanges.`,
      link: '',
    },

    // ---- Per-state sections: Complements ----

    obj22: {
      title: `The Complement of A`,
      content: `Four regions shaded: the outside, B-only, C-only, and the $B \\cap C$ sliver — everything that avoids the top circle.`,
      before: ``,
      after: `The complement of one set among three is bigger than beginners expect: it keeps most of $B$ and most of $C$. Only the four regions inside circle $A$ — including the slivers $A \\cap B$ and $A \\cap C$ and the center — are excluded, because their elements are in $A$ regardless of what else they belong to.

Together with [set A on its own](!#the-set-a-on-its-own), the two frames partition all eight regions four-and-four: the complement laws $A \\cup A' = U$, $A \\cap A' = \\emptyset$ survive the move to three sets untouched.`,
      link: '',
    },

    obj23: {
      title: `The Complement of B`,
      content: `The rotation of the previous frame: outside, A-only, C-only, and the $A \\cap C$ sliver — the four regions avoiding the lower-left circle.`,
      before: ``,
      after: `Note which shared piece survives: $A \\cap C$ is the one pairwise sliver with no stake in $B$, so it is the only two-set region inside $B'$. The center never survives any complement — its elements are in all three sets, so every complement evicts them.

Rotating once more gives [the complement of C](!#the-complement-of-c); rotating back, [the complement of A](!#the-complement-of-a). All three are one frame seen from three angles.`,
      link: '',
    },

    obj24: {
      title: `The Complement of C`,
      content: `The third rotation: outside, A-only, B-only, and the $A \\cap B$ sliver.`,
      before: ``,
      after: `With all three complements seen, an intersection experiment suggests itself: overlay any two of them and only two regions survive both — the outside and the third set's private region. Overlay all three and only the outside remains, which is precisely [the complement of the triple union](!#the-complement-of-the-triple-union), the first De Morgan state.

That mental overlay — intersecting complements region by region — is the three-set De Morgan law being computed by eye.`,
      link: '',
    },

    // ---- Per-state sections: Intersection & Union ----

    obj25: {
      title: `The Triple Intersection`,
      content: `A single region shaded: the central core where all three circles overlap, $A \\cap B \\cap C$.`,
      before: ``,
      after: `The center is the diagram's most exclusive address — membership requires passing all three tests. With the example sets $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$, $C = \\{3,4,5\\}$, only the element $3$ qualifies.

Structurally, the triple intersection is inside every pairwise intersection, which is why each pairwise state — see [A ∩ B](!#pairwise-intersection-a-and-b) — shades the center along with its own sliver. It is also the region that separates "exactly two" from "at least two" in the counting states.`,
      link: '',
    },

    obj26: {
      title: `The Pairwise Intersection A ∩ B`,
      content: `Two regions: the $A \\cap B$ sliver plus the central core. "In both $A$ and $B$" says nothing about $C$ — so both answers to the $C$ question are included.`,
      before: ``,
      after: `This is the tab's recurring subtlety. The region labeled $A \\cap B$ in the diagram is really $A \\cap B \\cap C'$ — the **pairwise-but-not-triple** piece — while the full set $A \\cap B$ is that sliver together with the center. The explorer's shading draws the distinction sharply.

Want the sliver alone? That is a different expression, $A \\cap B \\cap C'$, frozen at [A and B but not C](!#in-a-and-b-but-not-c) in the Compound tab.`,
      link: '',
    },

    obj27: {
      title: `The Pairwise Intersection A ∩ C`,
      content: `The rotation: the $A \\cap C$ sliver plus the center — everything in both $A$ and $C$, with $B$ left unexamined.`,
      before: ``,
      after: `The same two-region anatomy as [A ∩ B](!#pairwise-intersection-a-and-b), reflected to the other side of the top circle. Each pairwise intersection contains the triple intersection, so the three states of this family share the center and differ only in which sliver joins it.

Its not-$B$ restriction lives at [A and C but not B](!#in-a-and-c-but-not-b).`,
      link: '',
    },

    obj28: {
      title: `The Pairwise Intersection B ∩ C`,
      content: `The third rotation: the bottom sliver $B \\cap C$ plus the center — the pairwise intersection that ignores $A$.`,
      before: ``,
      after: `Completing the family shows the pattern: three pairwise intersections, three slivers, one shared center. Their union is exactly the "at least two" counting state, and removing the center from each gives the "exactly two" state — the counting quartet is assembled from these parts.

The corresponding restricted region is [B and C but not A](!#in-b-and-c-but-not-a).`,
      link: '',
    },

    obj29: {
      title: `The Triple Union`,
      content: `Seven regions shaded — everything inside any circle. Only the outside stays blank.`,
      before: ``,
      after: `The triple union is the counting workhorse of three-set problems. Its seven disjoint regions are what the three-set inclusion-exclusion formula tallies: add the three sets, subtract the three pairwise intersections (each counted twice), and add back the triple intersection (counted three times, subtracted three times):

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

Its photographic negative — the one blank region here — is [the complement of the triple union](!#the-complement-of-the-triple-union).`,
      link: '',
    },

    obj30: {
      title: `The Pairwise Union A ∪ B`,
      content: `Six regions shaded: everything except the outside and C-only. A two-set union — drawn inside a three-set universe.`,
      before: ``,
      after: `Why six regions and not three? Because $C$ slices through both circles: the slivers $A \\cap C$, $B \\cap C$, and the center all contain elements of $A$ or $B$, so they belong to the union even though they also touch $C$. The only inside region excluded is C-only — in $C$ and in nothing else.

Compare the rotations [A ∪ C](!#pairwise-union-a-and-c) and [B ∪ C](!#pairwise-union-b-and-c): each pairwise union excludes exactly the third set's private region.`,
      link: '',
    },

    obj31: {
      title: `The Pairwise Union A ∪ C`,
      content: `Six regions again — this time only the outside and B-only are spared.`,
      before: ``,
      after: `The frame confirms the family rule seen in [A ∪ B](!#pairwise-union-a-and-b): a pairwise union in a three-set universe misses exactly two regions, the outside and the ignored set's private piece. Everything else has at least one foot in $A$ or $C$.

The complement of this shading — B-only plus outside — is a compound expression worth writing down as an exercise: $(A \\cup C)' = A' \\cap C'$, the two-set De Morgan law operating inside the three-set picture.`,
      link: '',
    },

    obj32: {
      title: `The Pairwise Union B ∪ C`,
      content: `The final rotation: six shaded regions, sparing the outside and A-only.`,
      before: ``,
      after: `This union is the "$B$ or $C$" that appears inside the compound state [A ∩ (B ∪ C)](!#a-intersected-with-b-union-c) — freezing it separately makes the later composition readable: first form the six-region union, then intersect with the top circle.

Excluding A-only is also a way to see subtraction hiding in union: the shaded set is $U \\setminus (A \\setminus (B \\cup C))'$... which is precisely why the explorer prefers pictures to nested formulas.`,
      link: '',
    },

    // ---- Per-state sections: Differences ----

    obj33: {
      title: `The Difference A Minus B`,
      content: `Two regions: A-only plus the $A \\cap C$ sliver — the part of the top circle that stays clear of $B$.`,
      before: ``,
      after: `The three-set surprise is the second region: $A \\setminus B$ keeps the elements $A$ shares with $C$, because the subtraction only asks about $B$. Removing a set removes its slivers and the center, but the "innocent bystander" overlap with $C$ survives.

To strip that too, subtract both neighbors: [only in A](!#only-in-a) shades the truly private region. The one-sided differences and the only-regions differ by exactly one sliver each.`,
      link: '',
    },

    obj34: {
      title: `The Difference A Minus C`,
      content: `The mirror subtraction: A-only plus the $A \\cap B$ sliver — the top circle cleared of $C$.`,
      before: ``,
      after: `Together with [A minus B](!#the-difference-a-minus-b), this frame shows subtraction's direction-sensitivity inside one circle: same minuend $A$, different subtrahend, different surviving sliver. Both frames keep A-only; they disagree only about which neighbor's overlap lives.

The rewrite $A \\setminus C = A \\cap C'$ still holds — every difference in this tab is an intersection with a complement in disguise.`,
      link: '',
    },

    obj35: {
      title: `The Difference B Minus A`,
      content: `Two regions in the lower left: B-only plus the bottom sliver $B \\cap C$.`,
      before: ``,
      after: `Reversing [A minus B](!#the-difference-a-minus-b) moves the shading to the other circle entirely — the two one-sided differences of a pair share no region at all, exactly as in the two-set case, only now each is a two-region composite.

The surviving sliver is again the bystander: $B$'s overlap with $C$ has no stake in the subtraction of $A$.`,
      link: '',
    },

    obj36: {
      title: `The Difference B Minus C`,
      content: `B-only plus the $A \\cap B$ sliver: the lower-left circle with everything touching $C$ removed.`,
      before: ``,
      after: `The pattern by now is mechanical: subtracting one neighbor deletes that neighbor's sliver and the center, keeps the private region and the other sliver. Six one-sided differences, six two-region frames, each a rotation or reflection of the others.

What stays constant across the family is the rewrite $X \\setminus Y = X \\cap Y'$ — worth checking mentally against the frame each time.`,
      link: '',
    },

    obj37: {
      title: `The Difference C Minus A`,
      content: `C-only plus the bottom sliver $B \\cap C$: the lower-right circle cleared of $A$.`,
      before: ``,
      after: `A useful comparison: [B minus A](!#the-difference-b-minus-a) and this frame share the $B \\cap C$ sliver — both subtractions of $A$ keep it, since its elements avoid $A$ by definition. Overlaying the two frames would shade $(B \\cup C) \\setminus A$ exactly.

That overlay observation is a difference identity being discovered pictorially: $(B \\setminus A) \\cup (C \\setminus A) = (B \\cup C) \\setminus A$.`,
      link: '',
    },

    obj38: {
      title: `The Difference C Minus B`,
      content: `The last of the six: C-only plus the $A \\cap C$ sliver.`,
      before: ``,
      after: `Closing the one-sided family, note what none of the six frames ever shade: the center. The triple intersection belongs to every set, so subtracting any one set always evicts it — only the "only" regions and single slivers survive one-sided subtraction.

The stricter cut that removes the surviving sliver too is [only in C](!#only-in-c), one step down the tab.`,
      link: '',
    },

    obj39: {
      title: `Only in A`,
      content: `One region: the top of the diagram, $A \\setminus (B \\cup C)$ — elements of $A$ and of nothing else.`,
      before: ``,
      after: `Subtracting the union of both neighbors is the strongest exclusion the diagram offers a single set. Compare [A minus B](!#the-difference-a-minus-b): one extra set in the subtrahend costs exactly one more region, the $A \\cap C$ sliver.

The three "only" regions are the atoms of the counting states — [exactly one](!#exactly-one-of-the-three-sets) is precisely their union — and in survey problems they answer the question "how many chose **only** this option?"`,
      link: '',
    },

    obj40: {
      title: `Only in B`,
      content: `The private region of the lower-left circle: $B \\setminus (A \\cup C)$, one region, no shared pieces.`,
      before: ``,
      after: `The formula deserves one careful reading: subtracting $A \\cup C$ is subtracting **either** neighbor, so the survivors avoid both. This is De Morgan operating quietly — "not in $A$ or $C$" equals "not in $A$ and not in $C$", i.e. $B \\cap A' \\cap C'$.

The three only-frames are the diagram's rotational family at its purest: one region each, at three clock positions.`,
      link: '',
    },

    obj41: {
      title: `Only in C`,
      content: `The lower-right private region: $C \\setminus (A \\cup B)$.`,
      before: ``,
      after: `Completing the trio makes the "exactly one" decomposition concrete: the three private regions are pairwise disjoint, so $|{\\text{exactly one}}| = |A \\text{ only}| + |B \\text{ only}| + |C \\text{ only}|$ with no correction terms — disjointness is what makes counting additive.

Each only-region is also what remains of its set in the strictest sense; everything else a set owns is co-owned. The contrast between ownership and co-ownership is the whole story of the differences tab.`,
      link: '',
    },

    obj42: {
      title: `The Union of A and B Minus C`,
      content: `Three regions: A-only, B-only, and their shared sliver $A \\cap B$ — the two-circle union with everything touching $C$ carved away.`,
      before: ``,
      after: `The frame is best read as a two-step: [the pairwise union A ∪ B](!#pairwise-union-a-and-b) shades six regions; subtracting $C$ then removes the three that touch the lower-right circle ($A \\cap C$, $B \\cap C$, and the center). What remains is a self-contained two-set world — the top of the diagram behaving as if $C$ did not exist.

Mixed expressions like this one are the bridge between the difference and compound tabs: one more grouping variant and the distributive laws come into view.`,
      link: '',
    },

    obj43: {
      title: `The Symmetric Difference of A and B`,
      content: `Four regions: A-only, B-only, and the two side slivers $A \\cap C$ and $B \\cap C$ — in exactly one of $A$ or $B$, with $C$ free to do as it pleases.`,
      before: ``,
      after: `The two-set symmetric difference imported into a three-set universe keeps its meaning — membership in exactly one of $A$, $B$ — but its picture doubles: each "crescent" of the two-set diagram is now split by $C$ into a private piece and a sliver. The excluded regions are those where the $A$/$B$ count is $0$ or $2$: the outside, C-only, the $A \\cap B$ sliver, and the center.

The genuinely three-set generalization is [the triple symmetric difference](!#the-triple-symmetric-difference), where the parity rule takes over.`,
      link: '',
    },

    obj44: {
      title: `The Triple Symmetric Difference`,
      content: `Four regions in the tab's most surprising pattern: the three "only" regions — plus the center.`,
      before: ``,
      after: `$A \\triangle B \\triangle C$ collects elements in an **odd number** of the three sets: one or three. The only-regions supply the count-one elements; the triple intersection supplies count-three. The pairwise slivers, at count two, are excluded — which is why the shading skips them and the frame looks like "exactly one" with a lit center.

The parity rule is what makes $\\triangle$ associative: however the expression is parenthesized, an element's membership flips once per set that contains it, and only an odd number of flips leaves it in. Compare [exactly one](!#exactly-one-of-the-three-sets) — identical but for the center.`,
      link: '',
    },

    // ---- Per-state sections: Compound ----

    obj45: {
      title: `In A and B but Not C`,
      content: `A single region: the $A \\cap B$ sliver alone, $A \\cap B \\cap C'$ — the pairwise overlap with the center explicitly evicted.`,
      before: ``,
      after: `This is the state that resolves the pairwise-intersection subtlety head-on: [the full A ∩ B](!#pairwise-intersection-a-and-b) is two regions, and appending $\\cap\\, C'$ deletes the center, leaving the sliver. Three symbols in the formula, one region in the picture — each of the eight regions is expressible as such a triple condition.

In survey language: "chose $A$ and $B$ but not $C$" — the kind of clause inclusion-exclusion bookkeeping constantly needs.`,
      link: '',
    },

    obj46: {
      title: `In A and C but Not B`,
      content: `The rotation: the $A \\cap C$ sliver alone, $A \\cap B' \\cap C$.`,
      before: ``,
      after: `Same anatomy as [A and B but not C](!#in-a-and-b-but-not-c), one position around the ring. The three sliver-states are the middle tier of the membership hierarchy — more exclusive than a full set, less exclusive than the center.

Note the formula's shape: every region of the diagram is a conjunction of three literals, one per set, primed or unprimed. Eight combinations, eight regions — the diagram **is** the truth table of three variables.`,
      link: '',
    },

    obj47: {
      title: `In B and C but Not A`,
      content: `The bottom sliver alone: $A' \\cap B \\cap C$.`,
      before: ``,
      after: `The third sliver completes the "exactly two" atoms: unite the three sliver-states and you get [exactly two of the three sets](!#exactly-two-of-the-three-sets) region for region. The compound tab first shows the parts, then the assemblies.

The primed-first formula ($A'$ leading) reads oddly aloud — "not in $A$, in $B$, in $C$" — but the alphabetical discipline pays off when comparing all eight region-formulas side by side.`,
      link: '',
    },

    obj48: {
      title: `A Intersected with B Union C`,
      content: `Three regions: both of $A$'s slivers plus the center — the part of the top circle that touches at least one neighbor.`,
      before: ``,
      after: `Read it inside-out: [B ∪ C](!#pairwise-union-b-and-c) shades six regions, and intersecting with $A$ keeps only those inside the top circle. Equivalently, subtract this from full $A$ and what is left is [only in A](!#only-in-a) — this state and the only-state split the circle into social and solitary halves.

The frame is also the left side of a distributive law: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ — and the right side visibly assembles the same three regions from the two pairwise intersections.`,
      link: '',
    },

    obj49: {
      title: `A Union B Intersected with C`,
      content: `Three regions again, rotated onto the lower-right circle: $C$'s two slivers plus the center — the part of $C$ touching $A$ or $B$.`,
      before: ``,
      after: `Structurally the twin of [A ∩ (B ∪ C)](!#a-intersected-with-b-union-c) with the roles rotated: form the union of two circles, then clip to the third. The result is always the clipped circle minus its private region.

Comparing the two frames drives home that the **pattern** of a compound expression, not the letters in it, determines the picture's shape — relabeling rotates the frame, regrouping changes it.`,
      link: '',
    },

    obj50: {
      title: `A United with B Intersect C`,
      content: `Five regions: all four pieces of circle $A$, plus the bottom sliver $B \\cap C$ — the whole top circle joined by the one region where $B$ and $C$ meet without it.`,
      before: ``,
      after: `Swap the operations of [A ∩ (B ∪ C)](!#a-intersected-with-b-union-c) and the picture inflates from three regions to five: union is generous where intersection is strict. Setting the two frames side by side is the fastest proof that $\\cap$ and $\\cup$ do not commute with each other — grouping matters.

This frame is likewise half of a distributive law: $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$, whose right side intersects two six-region unions down to these same five regions.`,
      link: '',
    },

    obj51: {
      title: `Exactly One of the Three Sets`,
      content: `The three "only" regions — membership count equal to one, nothing shared, nothing outside.`,
      before: ``,
      after: `The first of the counting quartet, and the one with no two-set ancestor worth the name. Its atoms were built in the differences tab ([only in A](!#only-in-a) and its rotations); here they are united into a single predicate on membership count.

Counting states are where the diagram meets applications: "exactly one" answers survey questions ("chose a single option"), probability questions (exactly one event occurs), and — with the center added — becomes [the triple symmetric difference](!#the-triple-symmetric-difference).`,
      link: '',
    },

    obj52: {
      title: `Exactly Two of the Three Sets`,
      content: `The three pairwise slivers — membership count exactly two, the center pointedly excluded.`,
      before: ``,
      after: `The quartet's middle state assembles the three sliver-atoms from [the compound singles](!#in-a-and-b-but-not-c). Its formula, written out, is a three-way union of triple conjunctions — the picture is far more legible than the algebra, which is the explorer's argument in miniature.

Add the center and the count relaxes to [at least two](!#at-least-two-of-the-three-sets); the difference between the two states is one region and one word.`,
      link: '',
    },

    obj53: {
      title: `At Least Two of the Three Sets`,
      content: `Four regions: the three pairwise slivers plus the center — membership count two or three.`,
      before: ``,
      after: `"At least two" is the majority state: its elements are in most of the sets. It decomposes as [exactly two](!#exactly-two-of-the-three-sets) plus [the triple intersection](!#the-triple-intersection), and the frame shows the join seamlessly — the four regions form the diagram's whole interior overlap structure.

In voting terms this is the two-out-of-three rule; in probability, the event "at least two of three events occur" — the direct three-set generalization of an intersection.`,
      link: '',
    },

    obj54: {
      title: `At Most One of the Three Sets`,
      content: `Four regions at the diagram's periphery: the outside plus the three "only" regions — membership count zero or one.`,
      before: ``,
      after: `The quartet closes with the complement of the previous state: "at most one" and [at least two](!#at-least-two-of-the-three-sets) partition the eight regions four-and-four, since every element's membership count is either ≤ 1 or ≥ 2. The two frames are photographic negatives.

It is also the only counting state that shades the outside — count zero qualifies — a reminder that membership predicates quantify over all of $U$, not just the circles.`,
      link: '',
    },

    // ---- Per-state sections: De Morgan's Laws ----

    obj55: {
      title: `The Complement of the Triple Union`,
      content: `One region: the outside. Beyond the union of all three sets means beyond each of them individually.`,
      before: ``,
      after: `The three-set first De Morgan law, $(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$, is this frame's caption: the lone shaded region is exactly what survives intersecting [the three complements](!#the-three-complements) — each complement keeps the outside, and the outside is all they share.

It is the negative of [the triple union](!#the-triple-union): seven regions there, the eighth here. The generalization to $n$ sets changes nothing but the count.`,
      link: '',
    },

    obj56: {
      title: `The Complement of the Triple Intersection`,
      content: `Seven regions — everything except the central core. Avoiding "all three" merely requires missing one.`,
      before: ``,
      after: `The second law, $(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$, shades the majority of the diagram: an element escapes the triple intersection by failing any single membership test, and only the center passes all three. One region spared here, one region shaded in [the union law](!#the-complement-of-the-triple-union) — the same 1-versus-7 mirror the two-set laws showed as 1-versus-3.

Ending the catalog on this pair is apt: the two frames compress everything the page teaches — complements, unions, intersections, and the eight-region anatomy — into a single visual contrast.`,
      link: '',
    },
  }

  // Frozen-state framed units (Line 1), one per scenario. Built here, passed
  // via props, rendered as content-array items.
  const d3 = threeSetsVennDiagrams.states;
  const u = (key, caption, text) => demoUnitFrame({ svg: d3[key], caption, text });
  const stateUnits = {
    'set-a': u('set-a', 'Set A, frozen',
      'The full top circle: four regions at once &#8212; one private, two shared slivers, one center. A single set is already a composite here.'),
    'set-b': u('set-b', 'Set B, frozen',
      'The lower-left circle, fully lit. Rotate the frame a third of a turn and it becomes set A &#8212; commutativity as rotational symmetry.'),
    'set-c': u('set-c', 'Set C, frozen',
      'The third rotation completes the family: every single-set frame is one private region plus three co-owned pieces.'),
    'universe': u('universe', 'Universal set U, frozen',
      'All eight regions shaded &#8212; the 2&#179; membership patterns of three sets, saturated at once.'),
    'empty': u('empty', 'Empty set &#8709;, frozen',
      'Three interlocking circles, zero highlight. The blank frame is the picture of expressions like A &#8745; A&#8242;.'),
    'a-comp': u('a-comp', 'Complement A&#8242;, frozen',
      'Four regions avoiding the top circle: outside, both neighbors&#8217; private parts, and their shared bottom sliver.'),
    'b-comp': u('b-comp', 'Complement B&#8242;, frozen',
      'The rotation: only the A&#8745;C sliver survives among the shared pieces &#8212; the one overlap with no stake in B.'),
    'c-comp': u('c-comp', 'Complement C&#8242;, frozen',
      'Third rotation. The center never survives any complement: its elements belong to all three sets.'),
    'inter-abc': u('inter-abc', 'A &#8745; B &#8745; C, frozen',
      'One region, the central core &#8212; the only address that passes all three membership tests. Example sets leave just {3} here.'),
    'inter-ab': u('inter-ab', 'A &#8745; B, frozen',
      'Two regions: the A&#8745;B sliver plus the center. &#8220;In both A and B&#8221; leaves the C question open &#8212; so both answers are in.'),
    'inter-ac': u('inter-ac', 'A &#8745; C, frozen',
      'The rotated pairwise intersection: its own sliver plus the shared center.'),
    'inter-bc': u('inter-bc', 'B &#8745; C, frozen',
      'The bottom pairwise intersection &#8212; third of the family, same two-region anatomy.'),
    'union-abc': u('union-abc', 'A &#8746; B &#8746; C, frozen',
      'Seven of the eight regions &#8212; everything inside any circle. The disjoint pieces inclusion-exclusion adds and subtracts.'),
    'union-ab': u('union-ab', 'A &#8746; B, frozen',
      'Six regions, not three: C slices through both circles, so its slivers and the center ride along. Only C-only and the outside are spared.'),
    'union-ac': u('union-ac', 'A &#8746; C, frozen',
      'The rotation spares B-only instead &#8212; a pairwise union always excludes exactly the third set&#8217;s private region.'),
    'union-bc': u('union-bc', 'B &#8746; C, frozen',
      'The final rotation: six regions, A-only left out. This is the &#8220;B or C&#8221; that later gets clipped by A in the compound tab.'),
    'a-minus-b': u('a-minus-b', 'A &#8726; B, frozen',
      'Two regions: A-only plus the A&#8745;C sliver. Subtracting B removes B&#8217;s sliver and the center &#8212; the C overlap is an innocent bystander.'),
    'a-minus-c': u('a-minus-c', 'A &#8726; C, frozen',
      'The mirror subtraction keeps the other sliver: same minuend, different subtrahend, different survivor.'),
    'b-minus-a': u('b-minus-a', 'B &#8726; A, frozen',
      'Reversal moves the shading to the other circle entirely &#8212; the two differences of a pair share nothing.'),
    'b-minus-c': u('b-minus-c', 'B &#8726; C, frozen',
      'B-only plus the A&#8745;B sliver: the mechanical pattern &#8212; delete the subtrahend&#8217;s sliver and the center, keep the rest.'),
    'c-minus-a': u('c-minus-a', 'C &#8726; A, frozen',
      'C-only plus the bottom sliver. Note it shares that sliver with B &#8726; A &#8212; both subtractions of A spare it.'),
    'c-minus-b': u('c-minus-b', 'C &#8726; B, frozen',
      'The last one-sided difference. None of the six ever shade the center &#8212; subtracting any set evicts it.'),
    'a-only-only': u('a-only-only', 'A &#8726; (B &#8746; C), frozen',
      'One region: the truly private part of A. Subtracting the union of both neighbors is the strongest single-set exclusion.'),
    'b-only-only': u('b-only-only', 'B &#8726; (A &#8746; C), frozen',
      '&#8220;Not in A or C&#8221; = &#8220;not in A and not in C&#8221; &#8212; De Morgan quietly at work in the formula for one quiet region.'),
    'c-only-only': u('c-only-only', 'C &#8726; (A &#8746; B), frozen',
      'The third private region. The three &#8220;only&#8221; frames are the atoms of the counting states.'),
    'ab-minus-c': u('ab-minus-c', '(A &#8746; B) &#8726; C, frozen',
      'Three regions: the two-circle union with every C-touching piece carved away &#8212; a two-set world restored at the top of the frame.'),
    'symdiff-ab': u('symdiff-ab', 'A &#9651; B, frozen',
      'Four regions: each two-set crescent is split by C into a private piece and a sliver. Exactly one of A, B &#8212; C rides free.'),
    'symdiff-abc': u('symdiff-abc', 'A &#9651; B &#9651; C, frozen',
      'The parity rule: an odd membership count. The three only-regions (count 1) plus the lit center (count 3).'),
    'ab-not-c': u('ab-not-c', 'A &#8745; B &#8745; C&#8242;, frozen',
      'The A&#8745;B sliver alone &#8212; the pairwise overlap with the center explicitly evicted. Three literals, one region.'),
    'ac-not-b': u('ac-not-b', 'A &#8745; B&#8242; &#8745; C, frozen',
      'The rotated sliver: every region of the diagram is one such three-literal conjunction. Eight combinations, eight regions.'),
    'bc-not-a': u('bc-not-a', 'A&#8242; &#8745; B &#8745; C, frozen',
      'The bottom sliver alone &#8212; third atom of &#8220;exactly two&#8221;.'),
    'a-and-bORc': u('a-and-bORc', 'A &#8745; (B &#8746; C), frozen',
      'The social half of circle A: both slivers plus the center. Left side of a distributive law, drawn.'),
    'aORb-and-c': u('aORb-and-c', '(A &#8746; B) &#8745; C, frozen',
      'The rotated twin: a two-circle union clipped to the third circle &#8212; always the clipped circle minus its private region.'),
    'a-or-bANDc': u('a-or-bANDc', 'A &#8746; (B &#8745; C), frozen',
      'Five regions: all of A plus the bottom sliver. Swap &#8745; and &#8746; in the grouping and the picture inflates &#8212; parentheses matter.'),
    'exactly-one': u('exactly-one', 'Exactly one, frozen',
      'The three private regions &#8212; membership count exactly 1. A counting state with no real two-set ancestor.'),
    'exactly-two': u('exactly-two', 'Exactly two, frozen',
      'The three pairwise slivers, center excluded &#8212; count exactly 2. The picture is far more legible than its formula.'),
    'at-least-two': u('at-least-two', 'At least two, frozen',
      'Slivers plus center &#8212; the majority rule, two-out-of-three. The whole interior overlap structure at once.'),
    'at-most-one': u('at-most-one', 'At most one, frozen',
      'The periphery: outside plus the three private regions &#8212; count 0 or 1. The photographic negative of &#8220;at least two&#8221;.'),
    'dm-union': u('dm-union', '(A &#8746; B &#8746; C)&#8242;, frozen',
      'One region, the outside: beyond the union means beyond each set individually &#8212; the intersection of all three complements.'),
    'dm-inter': u('dm-inter', '(A &#8745; B &#8745; C)&#8242;, frozen',
      'Seven regions, only the core spared: escaping &#8220;all three&#8221; takes just one failed membership. The 1-versus-7 mirror of the union law.'),
  };

  // Per-state panel explanations (Line 1). Rendered by ExplanationsPanel as an
  // extra tab through processContent — $math$ and same-page !# anchors work.
  // The built-in Overview tab still renders when nothing is passed.
  const tab = (content) => [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content }] }];
  const explanations = {
    'set-a': tab(`One circle, four regions: a set among three neighbors decomposes into a private piece, two shared slivers, and the common core. [Learn more about set A](!#the-set-a-on-its-own) · [All basic sets](!#the-basic-sets)`),
    'set-b': tab(`The same four-piece anatomy, rotated a third of a turn — relabeling sets rotates frames. [Learn more about set B](!#the-set-b-on-its-own) · [All basic sets](!#the-basic-sets)`),
    'set-c': tab(`The third rotation; summing $|A|+|B|+|C|$ double-counts the slivers and triple-counts the center — inclusion-exclusion's reason for existing. [Learn more about set C](!#the-set-c-on-its-own) · [All basic sets](!#the-basic-sets)`),
    'universe': tab(`Eight regions — the $2^3$ membership patterns of three sets, all shaded at once. [Learn more about the universal set](!#the-universal-set-u) · [All basic sets](!#the-basic-sets)`),
    'empty': tab(`The blank diagram is a real answer: $A \\cap A'$ and every disjoint intersection produce exactly this. [Learn more about the empty set](!#the-empty-set) · [All basic sets](!#the-basic-sets)`),
    'a-comp': tab(`Four regions avoid circle $A$ — including most of $B$ and $C$; only the pieces inside $A$ are evicted. [Learn more about the complement of A](!#the-complement-of-a) · [All complements](!#the-three-complements)`),
    'b-comp': tab(`The one shared piece that survives is $A \\cap C$ — the sliver with no stake in $B$. [Learn more about the complement of B](!#the-complement-of-b) · [All complements](!#the-three-complements)`),
    'c-comp': tab(`Overlay all three complements mentally and only the outside survives — that is the first De Morgan law computed by eye. [Learn more about the complement of C](!#the-complement-of-c) · [All complements](!#the-three-complements)`),
    'inter-abc': tab(`The single most exclusive region: three membership tests, all passed. It hides inside every pairwise intersection. [Learn more about the triple intersection](!#the-triple-intersection) · [All intersections and unions](!#intersections-and-unions)`),
    'inter-ab': tab(`Two regions, not one: $A \\cap B$ says nothing about $C$, so the center rides along with the sliver. [Learn more about A ∩ B](!#pairwise-intersection-a-and-b) · [All intersections and unions](!#intersections-and-unions)`),
    'inter-ac': tab(`The same two-region anatomy, reflected: its own sliver plus the shared center. [Learn more about A ∩ C](!#pairwise-intersection-a-and-c) · [All intersections and unions](!#intersections-and-unions)`),
    'inter-bc': tab(`Third of the family — three slivers, one common center, assembled later into the counting states. [Learn more about B ∩ C](!#pairwise-intersection-b-and-c) · [All intersections and unions](!#intersections-and-unions)`),
    'union-abc': tab(`Seven disjoint regions — the pieces the formula $|A \\cup B \\cup C| = |A|+|B|+|C|-|A \\cap B|-|A \\cap C|-|B \\cap C|+|A \\cap B \\cap C|$ tallies. [Learn more about the triple union](!#the-triple-union) · [All intersections and unions](!#intersections-and-unions)`),
    'union-ab': tab(`Six regions: $C$ slices through both circles, so its slivers and the center belong too — only C-only and the outside are excluded. [Learn more about A ∪ B](!#pairwise-union-a-and-b) · [All intersections and unions](!#intersections-and-unions)`),
    'union-ac': tab(`A pairwise union always excludes exactly two regions: the outside and the ignored set's private piece. [Learn more about A ∪ C](!#pairwise-union-a-and-c) · [All intersections and unions](!#intersections-and-unions)`),
    'union-bc': tab(`The "B or C" that the compound tab later clips with $A$ — six regions, A-only spared. [Learn more about B ∪ C](!#pairwise-union-b-and-c) · [All intersections and unions](!#intersections-and-unions)`),
    'a-minus-b': tab(`Subtracting $B$ removes its sliver and the center — but the $A \\cap C$ overlap survives, an innocent bystander. [Learn more about A minus B](!#the-difference-a-minus-b) · [All differences](!#the-differences)`),
    'a-minus-c': tab(`Same minuend, different subtrahend, different surviving sliver — direction-sensitivity inside one circle. [Learn more about A minus C](!#the-difference-a-minus-c) · [All differences](!#the-differences)`),
    'b-minus-a': tab(`The reversed pair shades a different circle entirely — the two differences share no region. [Learn more about B minus A](!#the-difference-b-minus-a) · [All differences](!#the-differences)`),
    'b-minus-c': tab(`Delete the subtrahend's sliver and the center, keep the rest — the rewrite $B \\setminus C = B \\cap C'$ still holds. [Learn more about B minus C](!#the-difference-b-minus-c) · [All differences](!#the-differences)`),
    'c-minus-a': tab(`Both subtractions of $A$ spare the bottom sliver — overlaying them discovers $(B \\setminus A) \\cup (C \\setminus A) = (B \\cup C) \\setminus A$. [Learn more about C minus A](!#the-difference-c-minus-a) · [All differences](!#the-differences)`),
    'c-minus-b': tab(`No one-sided difference ever shades the center: subtracting any set evicts the triple intersection. [Learn more about C minus B](!#the-difference-c-minus-b) · [All differences](!#the-differences)`),
    'a-only-only': tab(`Subtracting both neighbors at once strips $A$ to its truly private region — one subtraction more, one region fewer. [Learn more about only-in-A](!#only-in-a) · [All differences](!#the-differences)`),
    'b-only-only': tab(`"Not in $A$ or $C$" equals "not in $A$ and not in $C$" — De Morgan hiding inside the only-region formula. [Learn more about only-in-B](!#only-in-b) · [All differences](!#the-differences)`),
    'c-only-only': tab(`The three private regions are disjoint, so "exactly one" counts additively with no corrections. [Learn more about only-in-C](!#only-in-c) · [All differences](!#the-differences)`),
    'ab-minus-c': tab(`A two-step picture: the six-region union of $A$ and $B$, then every $C$-touching piece carved away. [Learn more about (A ∪ B) minus C](!#union-of-a-and-b-minus-c) · [All differences](!#the-differences)`),
    'symdiff-ab': tab(`The two-set symmetric difference in a three-set universe: each crescent splits into a private piece and a sliver — four regions, $C$ unexamined. [Learn more about A △ B](!#symmetric-difference-of-a-and-b) · [All differences](!#the-differences)`),
    'symdiff-abc': tab(`Odd membership count: the only-regions (count 1) plus the center (count 3) — parity is what makes $\\triangle$ associative. [Learn more about A △ B △ C](!#the-triple-symmetric-difference) · [All differences](!#the-differences)`),
    'ab-not-c': tab(`The sliver alone: appending $\\cap\\, C'$ to $A \\cap B$ evicts the center. Every region is such a three-literal conjunction. [Learn more about A ∩ B ∩ C′](!#in-a-and-b-but-not-c) · [All compound expressions](!#compound-expressions)`),
    'ac-not-b': tab(`Eight literal-combinations, eight regions — the diagram is the truth table of three variables. [Learn more about A ∩ B′ ∩ C](!#in-a-and-c-but-not-b) · [All compound expressions](!#compound-expressions)`),
    'bc-not-a': tab(`The third sliver-atom; unite all three and "exactly two" appears. [Learn more about A′ ∩ B ∩ C](!#in-b-and-c-but-not-a) · [All compound expressions](!#compound-expressions)`),
    'a-and-bORc': tab(`The social half of circle $A$ — and the left side of the distributive law $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$. [Learn more about A ∩ (B ∪ C)](!#a-intersected-with-b-union-c) · [All compound expressions](!#compound-expressions)`),
    'aORb-and-c': tab(`Clip a two-circle union to the third circle: always the clipped circle minus its private region. [Learn more about (A ∪ B) ∩ C](!#a-union-b-intersected-with-c) · [All compound expressions](!#compound-expressions)`),
    'a-or-bANDc': tab(`Regroup the same letters and the picture inflates from three regions to five — parentheses matter when $\\cap$ and $\\cup$ mix. [Learn more about A ∪ (B ∩ C)](!#a-united-with-b-intersect-c) · [All compound expressions](!#compound-expressions)`),
    'exactly-one': tab(`Membership count exactly 1 — a predicate with no two-set analogue, assembled from the three only-regions. [Learn more about exactly one](!#exactly-one-of-the-three-sets) · [All compound expressions](!#compound-expressions)`),
    'exactly-two': tab(`The three slivers with the center excluded — count exactly 2, atoms from the compound singles. [Learn more about exactly two](!#exactly-two-of-the-three-sets) · [All compound expressions](!#compound-expressions)`),
    'at-least-two': tab(`Slivers plus center: the two-out-of-three majority rule, "exactly two" relaxed by one region. [Learn more about at least two](!#at-least-two-of-the-three-sets) · [All compound expressions](!#compound-expressions)`),
    'at-most-one': tab(`Count 0 or 1: the periphery of the diagram, and the exact complement of "at least two". [Learn more about at most one](!#at-most-one-of-the-three-sets) · [All compound expressions](!#compound-expressions)`),
    'dm-union': tab(`One region: outside the union means outside every set — $(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$. [Learn more about the complement of the triple union](!#the-complement-of-the-triple-union) · [De Morgan's laws](!#de-morgans-laws-for-three-sets)`),
    'dm-inter': tab(`Seven regions: missing any one set escapes the triple intersection — $(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$. [Learn more about the complement of the triple intersection](!#the-complement-of-the-triple-intersection) · [De Morgan's laws](!#de-morgans-laws-for-three-sets)`),
  };

  const introContent = {
    id: "intro",
    title: "Three-Set Algebra Through Shaded Regions",
    content: `Every algebraic expression involving three sets — no matter how compound — reduces to a combination of eight disjoint regions in a Venn diagram. The explorer below lets you select any standard three-set identity and instantly see which combination of regions it picks out. The shaded area shows the elements satisfying the expression; the explanation panel translates the picture back into set-builder notation.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a three-set Venn diagram?",
      answer: "A three-set Venn diagram is a visual representation of three sets, drawn as three overlapping circles inside a rectangle that represents the universal set. The three circles, labeled A, B, and C, divide the universe into eight disjoint regions: one outside all circles, three only-regions, three pairwise-but-not-triple regions, and the central triple intersection. Every three-set identity corresponds to a combination of these eight regions."
    },
    obj2: {
      question: "What identities can the explorer visualize?",
      answer: "The explorer covers 40 three-set identities organized into six categories: basic sets A, B, C, the universal set, and the empty set; complements A prime, B prime, C prime; pairwise and triple intersections and unions; differences including the symmetric differences A triangle B and A triangle B triangle C; compound expressions like A intersect (B union C) and counting identities like exactly two of A, B, C; and the two De Morgan's laws for three sets."
    },
    obj3: {
      question: "What are De Morgan's laws for three sets?",
      answer: "De Morgan's laws for three sets state that the complement of the triple union equals the intersection of the three complements, and the complement of the triple intersection equals the union of the three complements. Symbolically, (A union B union C) prime equals A prime intersect B prime intersect C prime, and (A intersect B intersect C) prime equals A prime union B prime union C prime. Both can be verified visually with the explorer."
    },
    obj4: {
      question: "How many regions does a three-set Venn diagram have?",
      answer: "A three-circle Venn diagram divides the universal set into exactly eight disjoint regions: one outside all three circles, three regions where elements belong to only one set, three regions where elements belong to exactly two sets but not the third, and one central region where elements belong to all three sets. Every three-set algebraic expression highlights some subset of these eight regions."
    },
    obj5: {
      question: "What does exactly two of A, B, C mean in a Venn diagram?",
      answer: "Exactly two of A, B, C describes elements that belong to two of the three sets but not the third. In a three-circle Venn diagram, this corresponds to the three regions where exactly two circles overlap, excluding the central region where all three overlap. The explorer shades these three pairwise-but-not-triple regions under the Compound tab."
    },
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Three-Set Venn Diagram Basic Identities Explorer",
      "description": "Shade Venn diagram regions for three-set operations: triple union, triple intersection, complements, differences, counting identities, and De Morgan's laws.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/three-sets-basic-venn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive three-circle Venn diagram with shaded regions for each selected identity",
        "Identities organized into six category tabs: Basic Sets, Complements, Intersection and Union, Differences, Compound expressions, and De Morgan's Laws",
        "Formula buttons and a Jump-to dropdown for selecting any of 40 three-set identities",
        "Counting identities unique to three sets: exactly one, exactly two, at least two, at most one",
        "Customizable shading color and opacity with a one-click reset",
        "Previous and Next navigation with a scenario counter that wraps around",
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
          "name": "Three-Set Venn Diagram: Basic Identities",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/three-sets-basic-venn"
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
        title: "Three-Set Venn Diagram: Basic Identities | Learn Math Class",
        description: "Shade Venn diagram regions for three-set operations: triple union, triple intersection, complements, differences, counting identities, and De Morgan's laws.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools/three-sets-basic-venn",
        name: "Three-Set Venn Diagram Basic Identities Explorer",
        hubDescription: "Shade the three-circle Venn diagram for any three-set identity — triple union and intersection, complements, the various differences, counting identities like exactly two of A, B, C, and De Morgan's laws for three sets. Switch between six category tabs, pick an identity from the formula buttons or the Jump-to dropdown, and customize the shading color and opacity. Each highlighted region updates with an explanation panel showing the set-builder notation.",
        category: "Venn Diagrams",
        subCategory: "Three Sets",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="29" cy="31" r="18" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.2"/><circle cx="51" cy="31" r="18" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.2"/><circle cx="40" cy="49" r="18" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.2"/><path d="M 33.05 32.40 A 18 18 0 0 1 46.95 32.40 A 18 18 0 0 1 40 45.25 A 18 18 0 0 1 33.05 32.40 Z" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="16" y="22" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle" font-style="italic">A</text><text x="64" y="22" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle" font-style="italic">B</text><text x="40" y="66" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle" font-style="italic">C</text></svg>`
      },
    }
  }
}

export default function ThreeSetsBasicVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / section with after-text / per-state section
  // carrying its frozen unit as [content, unit, after].
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

    plain('obj12', 'the-basic-sets'),
    stateRow('obj17', 'the-set-a-on-its-own', 'set-a'),
    stateRow('obj18', 'the-set-b-on-its-own', 'set-b'),
    stateRow('obj19', 'the-set-c-on-its-own', 'set-c'),
    stateRow('obj20', 'the-universal-set-u', 'universe'),
    stateRow('obj21', 'the-empty-set', 'empty'),

    plain('obj13', 'the-three-complements'),
    stateRow('obj22', 'the-complement-of-a', 'a-comp'),
    stateRow('obj23', 'the-complement-of-b', 'b-comp'),
    stateRow('obj24', 'the-complement-of-c', 'c-comp'),

    plain('obj14', 'intersections-and-unions'),
    stateRow('obj25', 'the-triple-intersection', 'inter-abc'),
    stateRow('obj26', 'pairwise-intersection-a-and-b', 'inter-ab'),
    stateRow('obj27', 'pairwise-intersection-a-and-c', 'inter-ac'),
    stateRow('obj28', 'pairwise-intersection-b-and-c', 'inter-bc'),
    stateRow('obj29', 'the-triple-union', 'union-abc'),
    stateRow('obj30', 'pairwise-union-a-and-b', 'union-ab'),
    stateRow('obj31', 'pairwise-union-a-and-c', 'union-ac'),
    stateRow('obj32', 'pairwise-union-b-and-c', 'union-bc'),

    plain('obj15', 'the-differences'),
    stateRow('obj33', 'the-difference-a-minus-b', 'a-minus-b'),
    stateRow('obj34', 'the-difference-a-minus-c', 'a-minus-c'),
    stateRow('obj35', 'the-difference-b-minus-a', 'b-minus-a'),
    stateRow('obj36', 'the-difference-b-minus-c', 'b-minus-c'),
    stateRow('obj37', 'the-difference-c-minus-a', 'c-minus-a'),
    stateRow('obj38', 'the-difference-c-minus-b', 'c-minus-b'),
    stateRow('obj39', 'only-in-a', 'a-only-only'),
    stateRow('obj40', 'only-in-b', 'b-only-only'),
    stateRow('obj41', 'only-in-c', 'c-only-only'),
    stateRow('obj42', 'union-of-a-and-b-minus-c', 'ab-minus-c'),
    stateRow('obj43', 'symmetric-difference-of-a-and-b', 'symdiff-ab'),
    stateRow('obj44', 'the-triple-symmetric-difference', 'symdiff-abc'),

    plain('obj16', 'compound-expressions'),
    stateRow('obj45', 'in-a-and-b-but-not-c', 'ab-not-c'),
    stateRow('obj46', 'in-a-and-c-but-not-b', 'ac-not-b'),
    stateRow('obj47', 'in-b-and-c-but-not-a', 'bc-not-a'),
    stateRow('obj48', 'a-intersected-with-b-union-c', 'a-and-bORc'),
    stateRow('obj49', 'a-union-b-intersected-with-c', 'aORb-and-c'),
    stateRow('obj50', 'a-united-with-b-intersect-c', 'a-or-bANDc'),
    stateRow('obj51', 'exactly-one-of-the-three-sets', 'exactly-one'),
    stateRow('obj52', 'exactly-two-of-the-three-sets', 'exactly-two'),
    stateRow('obj53', 'at-least-two-of-the-three-sets', 'at-least-two'),
    stateRow('obj54', 'at-most-one-of-the-three-sets', 'at-most-one'),

    plain('obj7', 'what-is-a-three-set-venn-diagram'),
    plain('obj8', 'three-set-operations'),

    withAfter('obj9', 'de-morgans-laws-for-three-sets'),
    stateRow('obj55', 'the-complement-of-the-triple-union', 'dm-union'),
    stateRow('obj56', 'the-complement-of-the-triple-intersection', 'dm-inter'),

    plain('obj10', 'counting-identities-unique-to-three-sets'),
    plain('obj11', 'related-concepts-and-tools'),
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Three Sets Basic Identities</h1>
      <br/>
      {/* <div style={{ display: 'grid', gridTemplateColumns: '200px minmax(0, 1fr)', gap: 28 }}>
        <SiblingsNavStandalone

          bg="#fafaf7"
          color="#2c5d99"
          activeColor="#143a66"
          activeBg="#dde9f7"

        /> */}
      <div style={{transform:'scale(0.85)'}}>

       <ThreeSetBasicIdentitiesExplorer explanations={explanations}/>

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