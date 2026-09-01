import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TwoSetsLawsExplorer from '../../../../app/components/venn-diagrams/TwoSetsLawsExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import twoSetsLawsVennDiagrams from '../../../../app/components/venn-diagrams/twoSetsLawsVennDiagrams'


export async function getStaticProps(){

  const keyWords = [
    "two set laws venn",
    "set laws visualizer",
    "set identities proof",
    "de morgan laws visual",
    "idempotent law sets",
    "commutative law sets",
    "absorption law sets",
    "complement law sets",
    "double complement law",
    "symmetric difference identity",
    "set algebra laws",
    "venn diagram proof",
    "two set algebraic identities",
    "visual proof set theory",
    "set theory laws",
  ]

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `
- **Set identity** — an equation between two set expressions that holds for all sets
- **Idempotent law** — $A \\cup A = A$, $A \\cap A = A$
- **Commutative law** — $A \\cup B = B \\cup A$, $A \\cap B = B \\cap A$
- **Identity element** — $\\emptyset$ for union, $U$ for intersection
- **Annihilator** — $U$ for union, $\\emptyset$ for intersection
- **Complement law** — $A \\cup A' = U$, $A \\cap A' = \\emptyset$
- **Double complement** — $(A')' = A$
- **De Morgan's laws** — $(A \\cup B)' = A' \\cap B'$, $(A \\cap B)' = A' \\cup B'$
- **Absorption law** — $A \\cup (A \\cap B) = A$, $A \\cap (A \\cup B) = A$
- **Visual proof** — two diagrams shading the same regions confirm an identity
`,
      before: ``,
      after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Explorer`,
      content: `Open the explorer and you'll see two miniature Venn diagrams side by side, separated by an equals sign. The left diagram shades the regions for the **left-hand side** of an identity; the right diagram shades the regions for the **right-hand side**. When the two shaded patterns match, the identity holds — and a green badge below the diagrams confirms it.

The current identity is shown as a badge above the diagrams (e.g. $A \\cup A = A$). Each side has a label showing the specific expression it represents. The first identity loads automatically, so you can start interacting immediately.

The interface has three control areas: the **category tabs** at the top, the **formula buttons** below them, and the **Jump to** dropdown on the right. Underneath the diagrams are theme controls and a Previous/Next navigation strip with a counter showing your position among the 26 identities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Navigating Category Tabs`,
      content: `The eight category tabs group the 26 laws by structural type:

• [Idempotent](!#the-idempotent-laws) — laws where combining a set with itself returns the set
• [Commutative](!#the-commutative-laws) — order does not matter for union or intersection
• [Identity & Annihilation](!#identity-and-annihilation) — special roles of $\\emptyset$ and $U$
• [Complement](!#the-complement-laws) — laws involving $A'$, including the double complement
• [De Morgan's Laws](!#de-morgans-laws-and-their-mirrors) — the two complement-distribution laws
• [Absorption](!#the-absorption-laws) — $A$ absorbs $A \\cap B$ in a union, and $A \\cup B$ in an intersection
• [Difference](!#the-difference-identities) — equivalent forms for $A \\setminus B$ and the symmetric difference
• [Compound Complements](!#the-compound-complements) — complements of mixed expressions like $(A \\cup B')'$

Click a tab to switch the row of formula buttons below it. The current identity stays selected across tab switches, so you can browse other groups without losing context.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Selecting an Identity`,
      content: `Two ways to pick a law. The **formula buttons** under the active tab display every identity in that category — each button shows the full equation (e.g. $A \\cup A = A$, $(A \\cup B)' = A' \\cap B'$). Click any one to load it into the diagrams.

The **Jump to** dropdown lists all 26 identities across every category in a single menu, grouped by tab. Useful when you know the formula but not which group it belongs to.

When you select an identity, four things update simultaneously:

• The badge above the diagrams shows the new equation
• The left diagram re-shades for the new LHS expression
• The right diagram re-shades for the new RHS expression
• The match indicator below confirms whether the two patterns agree`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Side-by-Side Proof`,
      content: `Each side of the equals sign is a complete two-circle Venn diagram with four disjoint regions: outside both, only in $A$, only in $B$, and the intersection. The shaded combination of these four regions represents the set described by the expression.

A set identity asserts that the LHS and RHS pick out the same regions. The explorer evaluates both expressions on all four combinations of $A$ and $B$ membership and shades the diagrams accordingly. If the same regions are shaded on both sides, the two set expressions are equal as sets — that is the geometric content of the identity.

For example, selecting $(A \\cup B)' = A' \\cap B'$ produces two diagrams that each shade only the region outside both circles. The visual match is the proof.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Match Indicator`,
      content: `Below the two diagrams, a colored badge reports whether the regions agree:

• **Green badge with a checkmark** — the two predicates produce the same truth value on all four membership combinations, meaning the identity holds for any choice of $A$ and $B$
• **Red badge with a cross** — the regions differ, meaning the equation is not a valid identity

For every law in the explorer's catalog, the badge is green — the catalog only includes valid identities. The match indicator is a verification, not a test of the user's input. Its purpose is to make the equality between LHS and RHS visible: the equation is true because the two shaded patterns are identical, not just because a textbook says so.

This turns the explorer into a tool for visual reasoning rather than rote memorization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Theme Controls and Navigation`,
      content: `The **Theme** panel below the diagrams customizes shading appearance:

• **Color picker** — change the hue of the shaded regions
• **Opacity slider** — adjust transparency from $1.00$ (opaque) to $0.00$ (invisible), with the current value shown next to the slider
• **Reset** — restore the default blue at $0.85$ opacity

Theme changes persist across identity selections, so adjustments apply to every law you visit afterward.

The navigation strip at the bottom has **Previous** and **Next** buttons that cycle through all 26 identities in the order defined by the category groups, with a counter showing position. Navigation wraps around — pressing **Previous** on the first identity jumps to the last. The active tab and active formula button update automatically as you advance, so you always know where you are in the catalog.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Set Identity?`,
      content: `A **set identity** is an equation between two set expressions that holds for every possible choice of the sets involved. The equation $A \\cup B = B \\cup A$ is an identity because it is true regardless of what $A$ and $B$ are. By contrast, $A \\cup B = A$ is not an identity — it holds only when $B \\subseteq A$.

Set identities form the algebraic backbone of set theory. They let expressions be rewritten without changing their meaning, much like algebraic identities for numbers ($a + b = b + a$, $a(b + c) = ab + ac$). Skilled use of set identities is what turns set-theoretic reasoning from case-by-case argument into mechanical manipulation.

For the full algebraic catalog, including identities involving three or more sets, see **set laws and identities**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why Do Visual Proofs Work?`,
      content: `A two-circle Venn diagram divides the universe into four mutually exclusive regions, and every two-set expression assigns each region one of two states: in or out. Two expressions are equal as sets if and only if they assign the same state to every region.

This means a set identity in two variables can be verified by checking just four cases — the four possible combinations of "is in $A$" and "is in $B$". The explorer performs this check by evaluating each expression on all four combinations and shading the regions where the result is true. If the two diagrams match, the identity is verified.

This is not just a heuristic — it is a complete decision procedure for two-set identities. For identities involving more sets, the same principle applies with more regions ($2^n$ for $n$ sets), but the visual approach becomes harder to read past three sets. See **venn diagrams** for the multi-set generalization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `De Morgan's Laws and Their Mirrors`,
      content: `Two of the most-used identities are **De Morgan's laws**:

$$(A \\cup B)' = A' \\cap B'$$

$$(A \\cap B)' = A' \\cup B'$$

The complement of a union equals the intersection of the complements; the complement of an intersection equals the union of the complements. Each law converts a complement of a combined set into a combination of complements.

The [Compound Complements](!#the-compound-complements) category in the explorer derives several mirrored identities from De Morgan's plus the double-complement law $(A')' = A$. For example, $(A \\cap B')' = A' \\cup B$ — useful in propositional logic, where it corresponds to the implication $A \\to B$. Each of the four compound complements has a matching dual obtained by swapping $A$ and $B$ or by complementing both sides.

For the algebraic proofs and the general $n$-set form, see **De Morgan's laws**.`,
      before: ``,
      after: `Both laws get a dedicated frozen frame below: [De Morgan's law for the union](!#de-morgans-law-for-the-union) and [De Morgan's law for the intersection](!#de-morgans-law-for-the-intersection).`,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Two-Set Basic Identities** — the companion explorer for shading individual operations (union, intersection, complement, differences) rather than identity equations.

**Set Operations** — formal definitions of union, intersection, complement, difference, and symmetric difference.

**Venn Diagrams** — overview of one-set, two-set, and three-set diagrams.

**De Morgan's Laws** — algebraic proofs and the $n$-set generalization.

**Set Laws and Identities** — the full algebraic catalog of laws on sets.

**Three-Set Venn Diagram** — extends visual proof techniques to three overlapping sets.

**Set Theory Definitions** — glossary of foundational terms used throughout set algebra.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 group sections ----

    obj11: {
      title: `The Idempotent Laws`,
      content: `The two idempotent laws open the catalog because they are the gentlest possible identities: combining a set with itself changes nothing. [The union form](!#idempotent-law-for-union) states $A \\cup A = A$, [the intersection form](!#idempotent-law-for-intersection) states $A \\cap A = A$, and both frozen frames shade the same full circle on each side of the equals sign.

Idempotence is one of the properties that separates set algebra from ordinary arithmetic — $x + x = x$ holds only for zero, while $A \\cup A = A$ holds for every set. It is also why repeated conditions collapse in logic and in query languages: asking twice is asking once.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `The Commutative Laws`,
      content: `Order does not matter for the two central operations: [union commutes](!#commutative-law-for-union) and [intersection commutes](!#commutative-law-for-intersection). Both proofs are pictures of left-right symmetry — swapping the operands relabels the circles without moving a single region.

The commutative pair is the baseline against which the non-commutative parts of the catalog stand out: set difference, treated in [the difference identities](!#the-difference-identities), is the standard example of an operation where order emphatically does matter.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `Identity and Annihilation`,
      content: `Four laws fix how the two extreme sets interact with the two operations. The empty set is the identity for union ([union with the empty set](!#union-with-the-empty-set)) and the annihilator for intersection ([intersection with the empty set](!#intersection-with-the-empty-set)); the universe is the identity for intersection ([intersection with the universe](!#intersection-with-the-universe)) and the annihilator for union ([union with the universe](!#union-with-the-universe)).

The pattern is a perfect duality: swap $\\cup$ with $\\cap$ and $\\emptyset$ with $U$, and each law becomes another law of the group. This $\\emptyset \\leftrightarrow U$ mirror runs through the whole algebra and returns at full strength in De Morgan's laws.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `The Complement Laws`,
      content: `Five laws pin down complementation. The defining pair: [a set united with its complement](!#a-set-united-with-its-complement) fills the universe, and [a set intersected with its complement](!#a-set-intersected-with-its-complement) is empty. [The double complement](!#the-double-complement) says the operation undoes itself. The boundary cases [complement of the universe](!#the-complement-of-the-universe) and [complement of the empty set](!#the-complement-of-the-empty-set) show the two extremes trading places.

Together the five say that complementation is an involution that swaps "everything" with "nothing" and splits the universe cleanly in two — no element escapes, none is counted twice.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `The Absorption Laws`,
      content: `The two absorption laws are the least intuitive of the basic catalog and the most useful for simplification: [absorption by union](!#absorption-by-union), $A \\cup (A \\cap B) = A$, and [absorption by intersection](!#absorption-by-intersection), $A \\cap (A \\cup B) = A$. In both frozen frames the elaborate left-hand side collapses to the plain circle of $A$.

The intuition once seen is hard to unsee: $A \\cap B$ is inside $A$, so uniting it with $A$ adds nothing; $A \\cup B$ contains $A$, so intersecting with it removes nothing. Absorption is what lets long expressions shrink — $B$ vanishes from both laws entirely.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj16: {
      title: `The Difference Identities`,
      content: `Five laws translate subtraction into the core operations. The one-sided pair: [difference as intersection](!#difference-as-intersection), $A \\setminus B = A \\cap B'$, and [its reversed form](!#the-reversed-difference). The symmetric difference gets two equivalent constructions — [from the two one-sided differences](!#symmetric-difference-from-two-differences) and [as union minus intersection](!#symmetric-difference-as-union-minus-intersection) — plus [the complement of the symmetric difference](!#the-complement-of-the-symmetric-difference), the "agreement set" of the pair.

The unifying moral: difference is not a new primitive. Every subtraction rewrites into intersections with complements, which is why the deeper laws of the algebra never need a $\\setminus$ of their own.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj17: {
      title: `The Compound Complements`,
      content: `The last tab pushes De Morgan's laws one step further: complements of expressions that already contain a complement. The four identities come in mirror pairs — [the complement of A′ ∪ B](!#the-complement-of-a-complement-union-b) with [the complement of A ∪ B′](!#the-complement-of-a-union-b-complement), and [the complement of A ∩ B′](!#the-complement-of-a-intersect-b-complement) with [the complement of A′ ∩ B](!#the-complement-of-a-complement-intersect-b).

Each is proved the same mechanical way: apply De Morgan, then cancel the double complement. The payoff is logical: these four expressions are the set forms of implication and its negation, which is why they appear whenever set algebra is used to reason about conditionals.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Per-state sections: Idempotent ----

    obj18: {
      title: `Idempotent Law for Union`,
      content: `The catalog's opening identity, $A \\cup A = A$: both sides of the frozen frame shade the same full circle of $A$, and the union of a set with itself is revealed as no operation at all.`,
      before: ``,
      after: `The element-level argument is one line: $x \\in A \\cup A$ means "$x \\in A$ or $x \\in A$", and a disjunction of a statement with itself is just the statement. The diagram says the same thing spatially — painting the circle of $A$ twice leaves the picture unchanged.

Idempotence has a practical face: duplicate conditions can always be dropped. Its intersection twin, [the idempotent law for intersection](!#idempotent-law-for-intersection), makes the identical claim with **and** in place of **or**.`,
      link: '',
    },

    obj19: {
      title: `Idempotent Law for Intersection`,
      content: `The conjunction twin, $A \\cap A = A$: overlapping a set with itself is total, so both mini diagrams shade the full circle of $A$.`,
      before: ``,
      after: `"$x \\in A$ and $x \\in A$" carries exactly the information of "$x \\in A$" — the intersection version of the same collapse seen in [the idempotent law for union](!#idempotent-law-for-union). Geometrically, a circle overlapped with itself **is** itself, which is why the two sides of the equals sign are indistinguishable frames.

Together the idempotent pair guarantees that set expressions never gain content by repetition — a property arithmetic lacks and one that Boolean algebras take as an axiom.`,
      link: '',
    },

    // ---- Per-state sections: Commutative ----

    obj20: {
      title: `Commutative Law for Union`,
      content: `$A \\cup B = B \\cup A$: both frames shade all three regions inside the circles, and the order of the operands is nowhere visible in the picture.`,
      before: ``,
      after: `The shaded region — both crescents plus the lens — is left-right symmetric, and that symmetry is the proof: swapping $A$ and $B$ reflects the diagram across its vertical axis, but a symmetric shading is its own reflection. "In $A$ or in $B$" and "in $B$ or in $A$" ask the same question.

Commutativity seems too obvious to state until it fails: subtraction breaks it, as [the reversed difference](!#the-reversed-difference) shows, and many operations elsewhere in mathematics (matrix products, function composition) fail it too. Stating it explicitly marks where reordering is legal.`,
      link: '',
    },

    obj21: {
      title: `Commutative Law for Intersection`,
      content: `$A \\cap B = B \\cap A$: each side shades only the central lens, the one region the two circles share — and sharing is symmetric.`,
      before: ``,
      after: `The lens does not belong to either circle more than the other, so there is nothing for the operand order to change. At the element level, "and" commutes just as "or" does in [the commutative law for union](!#commutative-law-for-union).

One subtlety worth noticing: commutativity concerns the **operands** of a single operation, not the interaction of different operations. How union and intersection interact with each other is the business of the distributive and absorption laws — see [absorption by union](!#absorption-by-union) for the version this catalog covers.`,
      link: '',
    },

    // ---- Per-state sections: Identity & Annihilation ----

    obj22: {
      title: `Union with the Empty Set`,
      content: `$A \\cup \\emptyset = A$: adding nothing changes nothing. Both frames shade exactly the circle of $A$.`,
      before: ``,
      after: `The empty set plays the role zero plays in addition — the identity element: an operand that leaves the other operand untouched. The frozen frame makes the analogy visual: the left side unites the shaded circle with a set that shades nothing at all, so nothing new appears.

The mirror statement for the other operation is [intersection with the universe](!#intersection-with-the-universe) — under the $\\emptyset \\leftrightarrow U$, $\\cup \\leftrightarrow \\cap$ duality the two laws are a single law read twice.`,
      link: '',
    },

    obj23: {
      title: `Intersection with the Universe`,
      content: `$A \\cap U = A$: restricting to "everything" is no restriction. The shading on both sides is the plain circle of $A$.`,
      before: ``,
      after: `$U$ is the identity element for intersection, exactly as $\\emptyset$ is for union in [union with the empty set](!#union-with-the-empty-set). Since every element of $A$ is automatically in $U$, the condition "$x \\in A$ and $x \\in U$" never loses anyone to its second clause.

The law earns its keep as a rewriting tool: it lets $U$ be introduced or removed at will, which is the standard opening move in derivations that need a complement pair $B \\cup B'$ substituted for $U$ — a technique the complement laws make available.`,
      link: '',
    },

    obj24: {
      title: `Intersection with the Empty Set`,
      content: `$A \\cap \\emptyset = \\emptyset$: nothing can be shared with a set that has nothing. Both frames are blank — the identity's two sides agree on zero regions.`,
      before: ``,
      after: `Here $\\emptyset$ switches roles, from identity for union to annihilator for intersection: any set it meets is wiped out. The condition "$x \\in A$ and $x \\in \\emptyset$" fails for every $x$ on its second clause, regardless of $A$.

The arithmetic analogy is multiplication by zero. Its dual is [union with the universe](!#union-with-the-universe), where $U$ annihilates in the opposite direction — and comparing the two blank-versus-full frames is the quickest way to internalize the duality that organizes this whole tab.`,
      link: '',
    },

    obj25: {
      title: `Union with the Universe`,
      content: `$A \\cup U = U$: adding to "everything" yields "everything". Both frames shade all four regions of the diagram.`,
      before: ``,
      after: `$U$ annihilates union the way $\\emptyset$ annihilates intersection: once every element is already included, no union can add more. The left-hand frame paints $A$ and then paints everything; the second paint makes the first invisible.

This completes the four-law square of the tab — two identities, two annihilations, exchanged by the $\\emptyset \\leftrightarrow U$ duality visible in [intersection with the empty set](!#intersection-with-the-empty-set). Boundedness from above by $U$ and below by $\\emptyset$ is what makes the algebra of subsets a **bounded** lattice, the structure all these laws axiomatize.`,
      link: '',
    },

    // ---- Per-state sections: Complement ----

    obj26: {
      title: `A Set United with Its Complement`,
      content: `$A \\cup A' = U$: a set and its complement together leave nothing out. Both frames shade the entire rectangle.`,
      before: ``,
      after: `Every element faces a two-way choice — in $A$ or not in $A$ — and the union collects both answers, so nobody is missed. In logic this is the law of excluded middle: $P$ or not-$P$ always holds.

Paired with [the intersection form](!#a-set-intersected-with-its-complement), it says $A$ and $A'$ form a **partition** of $U$: exhaustive (this law) and mutually exclusive (the other). The pair is what justifies every case-split argument of the form "either $x \\in A$ or $x \\notin A$".`,
      link: '',
    },

    obj27: {
      title: `A Set Intersected with Its Complement`,
      content: `$A \\cap A' = \\emptyset$: no element is both in a set and outside it. Both frames are empty of shading.`,
      before: ``,
      after: `This is the law of non-contradiction in set form: "$x \\in A$ and $x \\notin A$" is unsatisfiable, so the intersection collapses to $\\emptyset$ no matter what $A$ is. The blank frame is not a failure to draw — it is the content of the law.

Together with [the union form](!#a-set-united-with-its-complement), it characterizes the complement uniquely: $A'$ is the only set that both fills the universe with $A$ and shares nothing with $A$. That uniqueness is what makes derivations like the double complement possible.`,
      link: '',
    },

    obj28: {
      title: `The Double Complement`,
      content: `$(A')' = A$: complementing twice returns the original set. Both frames shade the plain circle of $A$, as if nothing had happened — because algebraically, nothing has.`,
      before: ``,
      after: `Complementation flips every region's status, shaded to blank and back; two flips restore each region exactly. Operations that undo themselves are called involutions — negatives of numbers and logical negation behave the same way.

The practical force of the law is cancellation: any even stack of primes collapses, any odd stack collapses to one. It is the second half of the standard two-step that simplifies every identity in [the compound complements](!#the-compound-complements): De Morgan first, double complement to finish.`,
      link: '',
    },

    obj29: {
      title: `The Complement of the Universe`,
      content: `$U' = \\emptyset$: nothing lies outside everything. Both frames are blank.`,
      before: ``,
      after: `The law is a boundary check on the definition: $U'$ collects the elements of $U$ not in $U$, and there are none. It is the degenerate extreme of complementation — the largest possible input producing the smallest possible output.

With its mirror, [the complement of the empty set](!#the-complement-of-the-empty-set), it shows complementation exchanging the algebra's two poles. The pair also follows from the complement laws with $A = U$: uniqueness of the complement forces $U'$ to be exactly $\\emptyset$.`,
      link: '',
    },

    obj30: {
      title: `The Complement of the Empty Set`,
      content: `$\\emptyset' = U$: everything lies outside nothing. Both frames shade the full rectangle.`,
      before: ``,
      after: `Every element of the universe vacuously fails to be in $\\emptyset$, so all of them land in the complement. The all-shaded frame is [the complement of the universe](!#the-complement-of-the-universe) run backwards — one more face of the involution property.

Reading the two boundary laws together with the double complement closes the loop: $\\emptyset' = U$, $U' = \\emptyset$, and a second application of either returns the start. The two extreme sets are complementation's only fixed **pair**, swapped endlessly.`,
      link: '',
    },

    // ---- Per-state sections: De Morgan's Laws ----

    obj31: {
      title: `De Morgan's Law for the Union`,
      content: `$(A \\cup B)' = A' \\cap B'$: the frozen frames each shade the single outside region — being beyond the union means being beyond $A$ and beyond $B$ at once.`,
      before: ``,
      after: `The left side computes "not (in $A$ or in $B$)"; the right side computes "not in $A$, and not in $B$". The match of the two one-region shadings is the four-case truth-table proof drawn as a picture: complement converts union to intersection, at the price of complementing the operands.

The law is the engine of the whole back half of the catalog: [the compound complements](!#the-compound-complements) are all produced by applying it (or [its intersection twin](!#de-morgans-law-for-the-intersection)) and then cancelling double complements.`,
      link: '',
    },

    obj32: {
      title: `De Morgan's Law for the Intersection`,
      content: `$(A \\cap B)' = A' \\cup B'$: both frames shade three regions — everything except the lens. Escaping the intersection requires missing at least one of the sets.`,
      before: ``,
      after: `"Not (in $A$ and in $B$)" allows three ways out: miss $A$, miss $B$, or miss both — and the three shaded regions are exactly those cases. The right-hand side, a union of complements, collects the same three regions from the other direction.

Note the exact mirror-symmetry with [the union law](!#de-morgans-law-for-the-union): swap $\\cup$ with $\\cap$ and 1 shaded region with 3. The two laws are duals, and applying either twice — with the double complement — recovers the other. Between them, complement can be pushed through any two-set expression.`,
      link: '',
    },

    // ---- Per-state sections: Absorption ----

    obj33: {
      title: `Absorption by Union`,
      content: `$A \\cup (A \\cap B) = A$: uniting a set with a piece of itself changes nothing. The elaborate left-hand side and the plain right-hand side shade the same circle.`,
      before: ``,
      after: `The inner expression $A \\cap B$ is a subset of $A$ — it lives inside the circle being united with it. A union can only add elements from outside, and there are none to add. $B$'s role in the law is a decoy: whatever $B$ is, the answer is $A$.

Absorption is the law that shrinks expressions during simplification, and one of the two absorption axioms that (with its partner [absorption by intersection](!#absorption-by-intersection)) characterizes lattices. Arithmetic has no analogue — $a + ab = a$ fails for most numbers — which is why the law feels unfamiliar at first sight.`,
      link: '',
    },

    obj34: {
      title: `Absorption by Intersection`,
      content: `$A \\cap (A \\cup B) = A$: restricting a set to a superset of itself is no restriction. Both frames shade the plain circle of $A$.`,
      before: ``,
      after: `The inner expression $A \\cup B$ contains all of $A$, so intersecting $A$ with it discards nothing. Again $B$ evaporates from the result — the mirror of the evaporation in [absorption by union](!#absorption-by-union), with the roles of $\\cup$ and $\\cap$ exchanged.

The two absorption laws are each other's duals under the same $\\cup \\leftrightarrow \\cap$ swap seen throughout the catalog, and either one implies the idempotent laws (set $B = A$). They are less famous than De Morgan's but do comparable work in reducing nested expressions to simplest form.`,
      link: '',
    },

    // ---- Per-state sections: Difference ----

    obj35: {
      title: `Difference as Intersection`,
      content: `$A \\setminus B = A \\cap B'$: subtraction unmasked. Both frames shade the A-only crescent — "in $A$ but not in $B$" and "in $A$ and in $B'$" are the same condition read twice.`,
      before: ``,
      after: `The law matters because it eliminates an operation: anything provable about differences can be routed through intersections and complements, where the big laws (De Morgan, distributivity, absorption) already apply. It is the standard first move when simplifying any expression containing $\\setminus$.

The frozen crescent also fixes the asymmetry of subtraction in advance: the mirrored identity, [the reversed difference](!#the-reversed-difference), shades the opposite crescent — same rewrite, opposite side.`,
      link: '',
    },

    obj36: {
      title: `The Reversed Difference`,
      content: `$B \\setminus A = A' \\cap B$: the mirror rewrite. Both frames shade the B-only crescent — the private part of $B$.`,
      before: ``,
      after: `Comparing this frame with [difference as intersection](!#difference-as-intersection) shows the two one-sided differences shading disjoint crescents: order of subtraction is not cosmetic, it selects which set's private region survives. The intersection form makes the asymmetry algebraically explicit — the complement lands on a different operand.

The two rewrites together supply the raw material for the symmetric difference constructions that follow: each crescent, expressed in $\\cap$/$'$ form, ready to be united by [the first symmetric-difference identity](!#symmetric-difference-from-two-differences).`,
      link: '',
    },

    obj37: {
      title: `Symmetric Difference from Two Differences`,
      content: `$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$: the "exactly one" set assembled from its two halves. Both frames shade the two crescents, lens excluded.`,
      before: ``,
      after: `The construction is bottom-up: take the private part of $A$, take the private part of $B$, and unite them. Since the two crescents are disjoint, the union is a clean gluing with no double-counting — which is also why $|A \\triangle B| = |A \\setminus B| + |B \\setminus A|$ holds without a correction term.

The same two-crescent region has a second, top-down construction — [union minus intersection](!#symmetric-difference-as-union-minus-intersection) — and the pair of identities proving one region two ways is a small showcase of what "equal as sets" means.`,
      link: '',
    },

    obj38: {
      title: `Symmetric Difference as Union Minus Intersection`,
      content: `$A \\triangle B = (A \\cup B) \\cap (A \\cap B)'$: the same two crescents, built top-down — start from everything in either set, then strike out what is in both.`,
      before: ``,
      after: `The right-hand side is the difference $({A \\cup B}) \\setminus (A \\cap B)$ already rewritten through [difference as intersection](!#difference-as-intersection), so no $\\setminus$ symbol appears. Painting it is a two-step: shade the union's three regions, erase the lens.

Against [the bottom-up construction](!#symmetric-difference-from-two-differences), this identity completes a satisfying pincer: two entirely different recipes, one gluing crescents together, one carving the middle out of the union — and the explorer certifies both land on the same region set.`,
      link: '',
    },

    obj39: {
      title: `The Complement of the Symmetric Difference`,
      content: `$(A \\triangle B)' = (A \\cap B) \\cup (A \\cup B)'$: the negative of "exactly one" is "both or neither". Both frames shade the lens and the outside — the two regions where the sets agree.`,
      before: ``,
      after: `The symmetric difference collects the regions where membership in $A$ and membership in $B$ **disagree**; its complement therefore collects the agreement: elements in both sets (the lens) together with elements in neither (the outside). In logic this is the biconditional — the truth set of "$x \\in A$ if and only if $x \\in B$".

The two-piece shading is unusual among the catalog's states: a disconnected region, inner lens plus outer field. It is a good final test of region-reading skill — and clicking between this law and [either symmetric-difference form](!#symmetric-difference-from-two-differences) flips the shading to its exact photographic negative.`,
      link: '',
    },

    // ---- Per-state sections: Compound Complements ----

    obj40: {
      title: `The Complement of A′ ∪ B`,
      content: `$(A' \\cup B)' = A \\cap B'$: both frames shade the A-only crescent. Negating "outside $A$ or in $B$" leaves exactly "in $A$ and outside $B$".`,
      before: ``,
      after: `The derivation is the tab's standard two-step: De Morgan turns $(A' \\cup B)'$ into $(A')' \\cap B'$, and the double complement collapses $(A')'$ to $A$. Every compound complement in the group falls to the same combination.

The logical reading gives the law its bite: $A' \\cup B$ is the truth set of the implication $A \\Rightarrow B$, so its complement is the truth set of the implication's **negation** — "in $A$ yet not in $B$", the exact region where a counterexample lives. Its operand-swapped mirror is [the complement of A ∪ B′](!#the-complement-of-a-union-b-complement).`,
      link: '',
    },

    obj41: {
      title: `The Complement of A ∪ B′`,
      content: `$(A \\cup B')' = A' \\cap B$: the mirror compound. Both frames shade the B-only crescent — outside $A$, inside $B$.`,
      before: ``,
      after: `De Morgan followed by double complement again: $(A \\cup B')'$ becomes $A' \\cap (B')'$, and the inner pair of primes cancels. The answer is the negation of the reverse implication $B \\Rightarrow A$ — the region where $B$ holds without $A$.

Held next to [its mirror](!#the-complement-of-a-complement-union-b), the pair shades the two opposite crescents: negating the two opposite implications isolates the two opposite kinds of counterexample. The symmetry is exact — swap $A$ and $B$ everywhere and each law becomes the other.`,
      link: '',
    },

    obj42: {
      title: `The Complement of A ∩ B′`,
      content: `$(A \\cap B')' = A' \\cup B$: both frames shade three regions, sparing only the A-only crescent. Negating a counterexample recovers the implication.`,
      before: ``,
      after: `The inner expression $A \\cap B'$ is "in $A$ but not $B$" — the failure region of $A \\Rightarrow B$, read **$A$ implies $B$** and set out at [implication notation](!/logic/propositional-logic/semantics/implication#notation). Complementing it therefore **asserts** the implication: the shaded three-region set is the material conditional itself, true everywhere except where $A$ holds without $B$.

Mechanically it is De Morgan's intersection law plus the cancellation of $(B')'$. This identity is the one most often met outside set theory, since rewriting "$A$ implies $B$" as "not-$A$ or $B$" is the same law in propositional clothing. Its swap-mirror is [the complement of A′ ∩ B](!#the-complement-of-a-complement-intersect-b).`,
      link: '',
    },

    obj43: {
      title: `The Complement of A′ ∩ B`,
      content: `$(A' \\cap B)' = A \\cup B'$: the final law of the catalog. Both frames shade everything but the B-only crescent.`,
      before: ``,
      after: `The inner $A' \\cap B$ is the failure region of the reverse implication $B \\Rightarrow A$; complementing it asserts that implication, shading all regions except the lone counterexample crescent. As with [its mirror](!#the-complement-of-a-intersect-b-complement), the proof is one De Morgan step and one double-complement cancellation.

Closing the catalog here is fitting: the four compound complements demonstrate that the basic laws are not a list to memorize but a **toolkit** — every new-looking identity in the tab is two old laws composed. That composability is what the phrase "algebra of sets" promises.`,
      link: '',
    },
  }

  // Frozen-state framed units (Line 1): the LHS = RHS pair with match badge,
  // one per law. Built here, passed via props, rendered as content-array items.
  const d = twoSetsLawsVennDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    'idem-u': u('idem-u', 'A &#8746; A = A, frozen',
      'Both sides shade the identical full circle of A. The union of a set with itself literally has nothing to add.'),
    'idem-i': u('idem-i', 'A &#8745; A = A, frozen',
      'A circle overlapped with itself is itself &#8212; the two frames could be swapped without anyone noticing.'),
    'comm-u': u('comm-u', 'A &#8746; B = B &#8746; A, frozen',
      'Three regions on each side, in a left-right symmetric pattern. A symmetric shading is its own reflection &#8212; that is commutativity.'),
    'comm-i': u('comm-i', 'A &#8745; B = B &#8745; A, frozen',
      'Only the shared lens on both sides. The overlap belongs to neither circle more than the other, so operand order cannot matter.'),
    'id-u-e': u('id-u-e', 'A &#8746; &#8709; = A, frozen',
      'Uniting the shaded circle with a set that shades nothing: the right frame is unchanged. The empty set is union&#8217;s zero.'),
    'id-i-u': u('id-i-u', 'A &#8745; U = A, frozen',
      'Restricting A to &#8220;everything&#8221; loses no one. U is intersection&#8217;s identity element.'),
    'ann-i': u('ann-i', 'A &#8745; &#8709; = &#8709;, frozen',
      'Two blank frames &#8212; and their agreement IS the proof. Nothing can be shared with a set that has nothing.'),
    'ann-u': u('ann-u', 'A &#8746; U = U, frozen',
      'Both frames fully shaded. Once everything is included, union cannot add more &#8212; U annihilates.'),
    'cmp-u': u('cmp-u', 'A &#8746; A&#8242; = U, frozen',
      'A set plus its complement covers all four regions: every element answers &#8220;in A&#8221; or &#8220;not in A&#8221;, and both answers are collected.'),
    'cmp-i': u('cmp-i', 'A &#8745; A&#8242; = &#8709;, frozen',
      'Blank on both sides: no element is inside and outside A at once. Non-contradiction, drawn.'),
    'dcmp': u('dcmp', '(A&#8242;)&#8242; = A, frozen',
      'Two flips of every region&#8217;s status land back at the start &#8212; the frames show A untouched. Complementation is an involution.'),
    'cmp-U': u('cmp-U', 'U&#8242; = &#8709;, frozen',
      'Nothing lies outside everything: complementing the universe empties the frame entirely.'),
    'cmp-e': u('cmp-e', '&#8709;&#8242; = U, frozen',
      'Everything lies outside nothing: complementing the empty set floods the frame.'),
    'dm-u': u('dm-u', '(A &#8746; B)&#8242; = A&#8242; &#8745; B&#8242;, frozen',
      'One region each side &#8212; the outside. Beyond the union means beyond A and beyond B simultaneously: the first De Morgan law.'),
    'dm-i': u('dm-i', '(A &#8745; B)&#8242; = A&#8242; &#8746; B&#8242;, frozen',
      'Three regions each side, only the lens spared. Escaping the intersection needs missing just one of the sets: the second law.'),
    'abs-u': u('abs-u', 'A &#8746; (A &#8745; B) = A, frozen',
      'The elaborate left side collapses to the plain circle: A &#8745; B already lives inside A, so uniting adds nothing. B is a decoy.'),
    'abs-i': u('abs-i', 'A &#8745; (A &#8746; B) = A, frozen',
      'A &#8746; B contains all of A, so the intersection discards nothing. Again B vanishes from the answer.'),
    'diff': u('diff', 'A &#8726; B = A &#8745; B&#8242;, frozen',
      'The A-only crescent two ways: &#8220;in A but not B&#8221; and &#8220;in A and in B&#8242;&#8221; are one condition in two notations.'),
    'diff-r': u('diff-r', 'B &#8726; A = A&#8242; &#8745; B, frozen',
      'The mirror rewrite shades the opposite crescent &#8212; subtraction order picks which private region survives.'),
    'sd-1': u('sd-1', 'A &#9651; B = (A &#8726; B) &#8746; (B &#8726; A), frozen',
      'Exactly-one built bottom-up: two disjoint crescents glued by union, lens excluded on both sides.'),
    'sd-2': u('sd-2', 'A &#9651; B = (A &#8746; B) &#8745; (A &#8745; B)&#8242;, frozen',
      'The same crescents top-down: shade the whole union, then carve the lens out. Two recipes, one region set.'),
    'sd-c': u('sd-c', '(A &#9651; B)&#8242; = (A &#8745; B) &#8746; (A &#8746; B)&#8242;, frozen',
      'The agreement set: lens plus outside &#8212; a disconnected shading marking where membership in A and B coincide.'),
    'cc-1': u('cc-1', '(A&#8242; &#8746; B)&#8242; = A &#8745; B&#8242;, frozen',
      'De Morgan then double complement: what remains is the A-only crescent &#8212; the counterexample region of A &#8658; B.'),
    'cc-2': u('cc-2', '(A &#8746; B&#8242;)&#8242; = A&#8242; &#8745; B, frozen',
      'The operand-swapped mirror: the B-only crescent, where B holds without A.'),
    'cc-3': u('cc-3', '(A &#8745; B&#8242;)&#8242; = A&#8242; &#8746; B, frozen',
      'Negating the counterexample region asserts the implication: three regions shaded, the lone A-only crescent spared.'),
    'cc-4': u('cc-4', '(A&#8242; &#8745; B)&#8242; = A &#8746; B&#8242;, frozen',
      'The final mirror: everything but the B-only crescent &#8212; the reverse implication asserted as a region.'),
  };

  // Per-state panel explanations (Line 1). Rendered by ExplanationsPanel as an
  // extra tab through processContent — $math$ and same-page !# anchors work.
  // The built-in Overview tab still renders when nothing is passed.
  const tab = (content) => [{ key: 'learn', label: 'Learn More', sections: [{ title: 'On This Page', content }] }];
  const explanations = {
    'idem-u': tab(`Repetition adds nothing in set algebra — unlike arithmetic, where $x + x = x$ only holds for zero. [Learn more about the idempotent union law](!#idempotent-law-for-union) · [All idempotent laws](!#the-idempotent-laws)`),
    'idem-i': tab(`A set overlapped with itself is total overlap — the **and** twin of the union law. [Learn more about the idempotent intersection law](!#idempotent-law-for-intersection) · [All idempotent laws](!#the-idempotent-laws)`),
    'comm-u': tab(`Swapping the operands reflects the diagram left-right, and the union's shading is its own reflection. [Learn more about commutative union](!#commutative-law-for-union) · [All commutative laws](!#the-commutative-laws)`),
    'comm-i': tab(`The lens belongs equally to both circles, so order cannot matter. [Learn more about commutative intersection](!#commutative-law-for-intersection) · [All commutative laws](!#the-commutative-laws)`),
    'id-u-e': tab(`$\\emptyset$ is the identity element for union — the set-theoretic zero. [Learn more about union with the empty set](!#union-with-the-empty-set) · [Identity and annihilation](!#identity-and-annihilation)`),
    'id-i-u': tab(`$U$ is the identity element for intersection: restricting to everything is no restriction. [Learn more about intersection with the universe](!#intersection-with-the-universe) · [Identity and annihilation](!#identity-and-annihilation)`),
    'ann-i': tab(`$\\emptyset$ annihilates intersection the way zero annihilates multiplication. [Learn more about intersection with the empty set](!#intersection-with-the-empty-set) · [Identity and annihilation](!#identity-and-annihilation)`),
    'ann-u': tab(`$U$ annihilates union: once everything is in, nothing can be added. [Learn more about union with the universe](!#union-with-the-universe) · [Identity and annihilation](!#identity-and-annihilation)`),
    'cmp-u': tab(`Excluded middle in set form: every element is in $A$ or in $A'$, so together they fill $U$. [Learn more about a set united with its complement](!#a-set-united-with-its-complement) · [All complement laws](!#the-complement-laws)`),
    'cmp-i': tab(`Non-contradiction: no element is in $A$ and outside it, so the intersection is empty. [Learn more about a set intersected with its complement](!#a-set-intersected-with-its-complement) · [All complement laws](!#the-complement-laws)`),
    'dcmp': tab(`Complementation is an involution — two flips of every region restore the original. [Learn more about the double complement](!#the-double-complement) · [All complement laws](!#the-complement-laws)`),
    'cmp-U': tab(`Nothing lies outside everything — the boundary case of complementation. [Learn more about the complement of the universe](!#the-complement-of-the-universe) · [All complement laws](!#the-complement-laws)`),
    'cmp-e': tab(`Everything lies outside nothing — the mirror boundary case. [Learn more about the complement of the empty set](!#the-complement-of-the-empty-set) · [All complement laws](!#the-complement-laws)`),
    'dm-u': tab(`Complement converts union to intersection: outside the union means outside both sets at once. [Learn more about De Morgan's law for the union](!#de-morgans-law-for-the-union) · [Both De Morgan laws](!#de-morgans-laws-and-their-mirrors)`),
    'dm-i': tab(`Complement converts intersection to union: escaping the overlap needs missing only one set. [Learn more about De Morgan's law for the intersection](!#de-morgans-law-for-the-intersection) · [Both De Morgan laws](!#de-morgans-laws-and-their-mirrors)`),
    'abs-u': tab(`$A \\cap B$ is already inside $A$, so uniting it with $A$ adds nothing — $B$ is a decoy. [Learn more about absorption by union](!#absorption-by-union) · [All absorption laws](!#the-absorption-laws)`),
    'abs-i': tab(`$A \\cup B$ contains all of $A$, so intersecting removes nothing — $B$ vanishes again. [Learn more about absorption by intersection](!#absorption-by-intersection) · [All absorption laws](!#the-absorption-laws)`),
    'diff': tab(`Subtraction is not a new primitive: $A \\setminus B$ rewrites as $A \\cap B'$, opening it to all the other laws. [Learn more about difference as intersection](!#difference-as-intersection) · [All difference identities](!#the-difference-identities)`),
    'diff-r': tab(`The mirror rewrite — the complement lands on the other operand, and the opposite crescent survives. [Learn more about the reversed difference](!#the-reversed-difference) · [All difference identities](!#the-difference-identities)`),
    'sd-1': tab(`Exactly-one built bottom-up: the two disjoint private crescents glued by union. [Learn more about this construction](!#symmetric-difference-from-two-differences) · [All difference identities](!#the-difference-identities)`),
    'sd-2': tab(`The same region top-down: everything in the union, minus everything in the intersection. [Learn more about this construction](!#symmetric-difference-as-union-minus-intersection) · [All difference identities](!#the-difference-identities)`),
    'sd-c': tab(`The agreement set — both or neither — is the biconditional $x \\in A \\Leftrightarrow x \\in B$ as a region. [Learn more about the complement of the symmetric difference](!#the-complement-of-the-symmetric-difference) · [All difference identities](!#the-difference-identities)`),
    'cc-1': tab(`De Morgan plus double complement isolates the counterexample region of the implication $A \\Rightarrow B$. [Learn more about this identity](!#the-complement-of-a-complement-union-b) · [All compound complements](!#the-compound-complements)`),
    'cc-2': tab(`The operand-swapped mirror: the counterexample region of the reverse implication. [Learn more about this identity](!#the-complement-of-a-union-b-complement) · [All compound complements](!#the-compound-complements)`),
    'cc-3': tab(`Negating the counterexample asserts the implication — this is "$A \\Rightarrow B$" as a three-region set. [Learn more about this identity](!#the-complement-of-a-intersect-b-complement) · [All compound complements](!#the-compound-complements)`),
    'cc-4': tab(`The closing mirror: the reverse implication asserted, sparing only its counterexample crescent. [Learn more about this identity](!#the-complement-of-a-complement-intersect-b) · [All compound complements](!#the-compound-complements)`),
  };

  const introContent = {
    id: "intro",
    title: "Visual Proofs of Two-Set Laws",
    content: `Every algebraic law in two-set algebra reduces to a claim about regions in a Venn diagram: the left-hand side and the right-hand side of the law shade the same regions. The explorer below displays both sides as miniature Venn diagrams and confirms the match. Twenty-seven laws are organized into eight categories — from idempotence and commutativity through De Morgan's laws to compound complements.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a set identity?",
      answer: "A set identity is an equation between two set expressions that holds for every possible choice of the sets involved. For example, A union B equals B union A is an identity because it is true regardless of what A and B are. Set identities form the algebraic backbone of set theory and allow expressions to be rewritten without changing their meaning."
    },
    obj2: {
      question: "How does the explorer verify a set law visually?",
      answer: "The explorer displays the left-hand side and right-hand side of each identity as two miniature Venn diagrams. Each side shades the regions where its expression is true across all four combinations of membership in A and B. When the two shaded patterns match, a green badge confirms that the identity holds for any sets A and B."
    },
    obj3: {
      question: "What categories of laws are included?",
      answer: "The explorer covers idempotent laws, commutative laws, identity and annihilation laws involving the empty set and the universe, complement laws including double complement, De Morgan's laws, absorption laws, difference identities including symmetric difference forms, and compound complements derived from De Morgan and double complement combined. Twenty-seven identities in total across eight categories."
    },
    obj4: {
      question: "Why is the visual proof a valid proof?",
      answer: "A two-circle Venn diagram divides the universe into four disjoint regions, and any two-set expression assigns each region a single truth value. Two expressions are equal as sets if and only if they produce the same truth value in every region. Checking all four combinations of A and B membership is therefore a complete decision procedure for two-set identities."
    },
    obj5: {
      question: "What are De Morgan's laws?",
      answer: "De Morgan's laws state that the complement of a union equals the intersection of the complements, and the complement of an intersection equals the union of the complements. Symbolically, (A union B) prime equals A prime intersect B prime, and (A intersect B) prime equals A prime union B prime. Both can be verified visually by shading the relevant regions in the Venn diagram."
    },
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Two-Set Venn Diagram Laws and Identities Explorer",
      "description": "Verify two-set laws and identities by shading both sides of each equation on side-by-side Venn diagrams — idempotent, commutative, De Morgan's, absorption, and more.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-laws-venn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Side-by-side Venn diagrams shading the left-hand and right-hand sides of each identity",
        "Automatic match indicator confirming the regions agree on all four membership combinations",
        "Twenty-seven identities organized into eight category tabs: Idempotent, Commutative, Identity and Annihilation, Complement, De Morgan's Laws, Absorption, Difference, and Compound Complements",
        "Formula buttons and a Jump-to dropdown for selecting any identity",
        "Customizable shading color and opacity with one-click reset",
        "Previous and Next navigation with a wrap-around scenario counter",
        "Side explanation panel describing the meaning of each law"
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
          "name": "Two-Set Venn Diagram: Laws and Identities",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-laws-venn"
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
        title: "Two-Set Venn Diagram: Laws & Identities | Learn Math Class",
        description: "Verify two-set laws and identities by shading both sides on side-by-side Venn diagrams — idempotent, commutative, De Morgan's, absorption, and complement laws.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools/two-sets-laws-venn",
        name: "Two-Set Venn Diagram Laws and Identities Explorer",
        hubDescription: "Verify two-set algebraic laws by shading both sides of each identity on a pair of side-by-side Venn diagrams. Browse 27 laws across eight categories — idempotent, commutative, identity, complement, De Morgan's, absorption, difference, and compound complements — and watch the match indicator confirm each visual proof.",
        category: "Venn Diagrams",
        subCategory: "Two Sets"
      },
    }
  }
}

export default function TwoSetsLawsVennPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / section with after-text / per-state section
  // carrying its frozen LHS=RHS unit as [content, unit, after].
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
    plain('obj4', 'reading-the-side-by-side-proof'),
    plain('obj5', 'the-match-indicator'),
    plain('obj6', 'theme-controls-and-navigation'),

    plain('obj11', 'the-idempotent-laws'),
    stateRow('obj18', 'idempotent-law-for-union', 'idem-u'),
    stateRow('obj19', 'idempotent-law-for-intersection', 'idem-i'),

    plain('obj12', 'the-commutative-laws'),
    stateRow('obj20', 'commutative-law-for-union', 'comm-u'),
    stateRow('obj21', 'commutative-law-for-intersection', 'comm-i'),

    plain('obj13', 'identity-and-annihilation'),
    stateRow('obj22', 'union-with-the-empty-set', 'id-u-e'),
    stateRow('obj23', 'intersection-with-the-universe', 'id-i-u'),
    stateRow('obj24', 'intersection-with-the-empty-set', 'ann-i'),
    stateRow('obj25', 'union-with-the-universe', 'ann-u'),

    plain('obj14', 'the-complement-laws'),
    stateRow('obj26', 'a-set-united-with-its-complement', 'cmp-u'),
    stateRow('obj27', 'a-set-intersected-with-its-complement', 'cmp-i'),
    stateRow('obj28', 'the-double-complement', 'dcmp'),
    stateRow('obj29', 'the-complement-of-the-universe', 'cmp-U'),
    stateRow('obj30', 'the-complement-of-the-empty-set', 'cmp-e'),

    plain('obj7', 'what-is-a-set-identity'),
    plain('obj8', 'why-do-visual-proofs-work'),

    withAfter('obj9', 'de-morgans-laws-and-their-mirrors'),
    stateRow('obj31', 'de-morgans-law-for-the-union', 'dm-u'),
    stateRow('obj32', 'de-morgans-law-for-the-intersection', 'dm-i'),

    plain('obj15', 'the-absorption-laws'),
    stateRow('obj33', 'absorption-by-union', 'abs-u'),
    stateRow('obj34', 'absorption-by-intersection', 'abs-i'),

    plain('obj16', 'the-difference-identities'),
    stateRow('obj35', 'difference-as-intersection', 'diff'),
    stateRow('obj36', 'the-reversed-difference', 'diff-r'),
    stateRow('obj37', 'symmetric-difference-from-two-differences', 'sd-1'),
    stateRow('obj38', 'symmetric-difference-as-union-minus-intersection', 'sd-2'),
    stateRow('obj39', 'the-complement-of-the-symmetric-difference', 'sd-c'),

    plain('obj17', 'the-compound-complements'),
    stateRow('obj40', 'the-complement-of-a-complement-union-b', 'cc-1'),
    stateRow('obj41', 'the-complement-of-a-union-b-complement', 'cc-2'),
    stateRow('obj42', 'the-complement-of-a-intersect-b-complement', 'cc-3'),
    stateRow('obj43', 'the-complement-of-a-complement-intersect-b', 'cc-4'),

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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'-80px'}}>Venn Diagrams: Two Sets Laws and Complex Identities</h1>
      <br/>
      <div style={{transform:'scale(0.85)'}}>
        <TwoSetsLawsExplorer explanations={explanations}/>
      </div>

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