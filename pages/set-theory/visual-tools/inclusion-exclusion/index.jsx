import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import InclusionExclusionExplorer from '../../../../app/components/diagrams/set-theory/InclusionExclusionExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import inclusionExclusionDiagrams from '../../../../app/components/diagrams/set-theory/inclusionExclusionDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'inclusion exclusion principle',
    'inclusion exclusion formula',
    'union of three sets formula',
    'size of a union',
    'counting overlapping sets',
    'venn diagram counting',
    'double counting correction',
    'cardinality of union',
    'three set union calculator',
    'inclusion exclusion visual proof',
    'why alternating signs',
    'pairwise intersection counting',
    'combinatorics counting principle',
    'set cardinality problems',
    'free inclusion exclusion tool',
  ]

  const instructions = [
    'Enter the sizes of the sets and their overlaps in the panel on the right: $|A|$, $|B|$, the pairwise intersections, and with three sets the triple intersection too.',
    'The 2 sets and 3 sets buttons switch between the three-term formula and the seven-term one.',
    'The large number in each region is how many times that region has been counted so far — not how many elements it holds.',
    'The small grey number underneath is the element count of that region, worked out from the sizes you entered.',
    'Press Next term to apply the terms one at a time, Previous to step back, and Reset to return to zero.',
    'Play steps through the whole formula automatically, and Pause stops it wherever it has reached.',
    'The region being changed by the current term is tinted: green when the term is being added, red when it is being subtracted.',
    'The running total beside the diagram is the value of the formula so far, and the counter reads which term you are on.',
    'The goal is to get every region reading exactly $1$. That is the moment the running total equals the size of the union.',
    'A region marked with a cross has a negative element count, which means the sizes you entered cannot describe any real collection of sets.',
  ]

  const sectionsContent={

    obj0:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },

    obj1:{
      title:`Getting Started`,
      content:`The tool walks the inclusion-exclusion formula one term at a time and shows what each term does to the picture.

Enter the sizes on the right — $|A|$, $|B|$, and the overlaps — then press **Next term** repeatedly. Each press applies one term of the formula and updates every region.

Two numbers sit in each region, and mixing them up makes the whole display confusing:

• The **large number** is how many times that region has been counted so far.
• The **small grey number** underneath is how many elements the region actually holds.

The large numbers all start at $0$ and the entire job of the formula is to get every one of them to exactly $1$. When that happens, each element of the union has been counted once and the running total is the answer.

**Play** runs the whole sequence, **Previous** steps back, and **Reset** returns to the beginning — which is [the state before any term is applied](!#nothing-counted-yet).`,
      before:``,
      after:``,
      link:'',

    },

    obj2:{
      title:`Entering the Sizes`,
      content:`The right-hand panel takes the sizes, and with three sets there are seven of them: the three set sizes, the three pairwise intersections, and the triple intersection.

Those seven numbers determine everything else. The tool works backwards from them to the size of each region, which is why the small grey numbers change as soon as you type.

The relationship runs both ways. A region count is what is left after removing the overlaps — the part of $A$ alone is $|A| - |A \\cap B| - |A \\cap C| + |A \\cap B \\cap C|$, which is inclusion-exclusion applied to a single set. The input-mode toggle lets you enter region counts directly instead, and the sizes are then derived from those.

Not every combination of numbers is possible, and the tool says so rather than drawing something incoherent — see [sizes that cannot happen](!#sizes-that-cannot-happen).

Set every overlap to zero and the formula has nothing to correct, which is worth seeing on its own: [nothing overlaps](!#when-nothing-overlaps).`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
      title:`Stepping Through the Terms`,
      content:`With three sets the formula has seven terms, applied in a fixed order: the three set sizes first, then the three pairwise intersections, then the triple.

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

Each press of **Next term** applies exactly one of these. The regions that term touches are tinted — green while a term is being added, red while one is being subtracted — and their large numbers move by one in that direction.

Watching the order matters, because the story has three distinct phases. The additions build an over-count. The subtractions overshoot in the middle. The final addition repairs the overshoot.

The frozen frames below follow that sequence: [a term being added](!#a-term-being-added), [all the sets in](!#all-the-sets-are-in), [a term being subtracted](!#a-term-being-subtracted), and the two ends, [the emptied centre](!#the-centre-falls-to-zero) and [every region at one](!#every-region-counted-once).`,
      before:``,
      after:``,
      link:'',

    },

    obj4:{
      title:`Reading the Region Numbers`,
      content:`The large number in a region is its **multiplicity** — the number of times the terms applied so far have counted it.

Colour tracks what that number means. A region reading exactly $1$ is tinted in the accent colour, because it is correct. A region reading $2$ or more, or less than $0$, is tinted amber, because it is wrong and still needs work. Regions the current term is touching take the term's own colour instead.

Reading the diagram this way turns the formula into a visible process rather than an identity to trust. At any moment you can see which parts of the union are already right and which are still miscounted, and the next term is always aimed at the amber ones.

The small grey number never changes as you step, because the elements do not change — only the bookkeeping does. When a region's element count would be negative the tool prints a cross instead, which is a statement about your input rather than about the step you are on.`,
      before:``,
      after:``,
      link:'',

    },

    obj5:{
      title:`Two Sets and Three Sets`,
      content:`The **2 sets** and **3 sets** buttons switch between two versions of the same idea.

With two sets the formula is short enough to hold in your head:

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

Three terms, one correction, and the whole argument is that the lens in the middle got counted twice and needs removing once.

With three sets the count jumps to seven terms, and a new phenomenon appears that two sets cannot show: the triple overlap is corrected too many times by the pairwise subtractions and has to be added back. That is the smallest case where the alternating signs stop looking arbitrary.

Start on two sets if the pattern is unfamiliar, then switch. The two-set walk-through takes three presses and the three-set one takes seven, and the second makes sense fastest immediately after the first.

Switching sizes is worth doing as well. The shape of the argument does not depend on the numbers, so any sizes that are actually possible will produce the same sequence of over-count and repair — only the running total differs.`,
      before:``,
      after:``,
      link:'',

    },

    obj6:{
      title:`What the Principle Says`,
      content:`The **inclusion-exclusion principle** computes the size of a union from the sizes of the sets and their intersections.

For two sets:

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

For three:

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

The pattern continues for any number of sets: add the individual sizes, subtract the pairwise intersections, add the triples, subtract the quadruples, alternating by the number of sets in each term.

Simply adding $|A| + |B|$ over-counts whatever lies in both sets, and the corrections exist to undo that. The principle is a bookkeeping statement rather than a deep theorem, but the bookkeeping is delicate enough that the signs are worth deriving rather than memorising.

It is also worth noting what the formula does not require. The sets need not be finite in any structured way, need not be nested, and need not overlap at all — the statement holds in every configuration, including the degenerate ones. For the general statement, see **cardinality**.`,
      before:``,
      after:``,
      link:'',

    },

    obj7:{
      title:`Why the Signs Alternate`,
      content:`The alternating signs are not a convention. They are forced, and the reason is visible in the region numbers.

Take an element lying in exactly $k$ of the sets. The single-set terms count it $k$ times, once for each set containing it. The pairwise terms subtract it once for every pair of those sets, which is $\\binom{k}{2}$ times. The triples add it back $\\binom{k}{3}$ times, and so on.

Its total multiplicity is therefore

$$\\binom{k}{1} - \\binom{k}{2} + \\binom{k}{3} - \\cdots$$

and that alternating sum equals exactly $1$ for every $k \\ge 1$. It follows from the binomial theorem applied to $(1 - 1)^k = 0$, rearranged.

So every element in the union is counted once, whatever number of sets it happens to lie in, and elements in no set are never counted at all. Any other choice of signs would break this.

The walk-through is that argument performed on one example rather than in general. Each region holds the elements lying in one particular collection of sets, and its large number is the running value of that alternating sum. For the coefficients, see **binomial coefficients**.`,
      before:``,
      after:``,
      link:'',

    },

    obj8:{
      title:`Where It Gets Used`,
      content:`Counting a union directly is usually harder than counting its parts, which is what makes the principle worth having.

In **probability** the same statement holds with measures in place of sizes: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, and the three-event version has the same seven terms. The addition rule for probability is inclusion-exclusion.

In **combinatorics** it counts arrangements avoiding several forbidden patterns at once — how many permutations leave no element fixed, how many integers below a bound avoid a list of divisors. The sieve of Eratosthenes and Euler's totient function are both inclusion-exclusion in disguise.

In computing, the same reasoning counts records matching at least one of several filters without materialising the union, which matters when the individual counts are cheap and the union is not.

The practical rule of thumb: whenever a question asks how many things satisfy at least one of several conditions, and the conditions can hold together, this is the formula that applies. If the conditions are mutually exclusive, the corrections all vanish and plain addition is enough.`,
      before:``,
      after:``,
      link:'',

    },

    obj9:{
      title:`Common Mistakes`,
      content:`Three errors account for most wrong answers, and each one has a signature in the region numbers.

**Stopping after the subtractions.** With three sets this leaves the centre at $0$, so elements in all three sets are not counted at all. The running total comes out too small by exactly $|A \\cap B \\cap C|$.

**Subtracting the triple overlap instead of adding it.** The same mistake with a worse ending: the centre lands on $-1$, which is visibly impossible once you are watching the numbers rather than the algebra.

**Entering overlaps larger than the sets they sit inside.** An intersection can never exceed either set containing it, and with three sets there is a subtler version — pairwise overlaps that leave no room once the triple overlap is fixed.

All three are easy to catch by the same habit: step through and check that every region lands on $1$. The formula is right when the picture is right, and not before.`,
      before:``,
      after:``,
      link:'',

    },

    obj10:{
      title:`Related Concepts and Tools`,
      content:`**Cardinality** — sizes of sets, and the general statement of the principle for $n$ sets.

**Set Operations** — union and intersection, the operations the formula relates.

**Venn Diagrams** — the two- and three-set pictures the regions come from.

**Binomial Coefficients** — the $\\binom{k}{j}$ counts that make the alternating sum collapse to one.

**Probability Rules** — the addition rule, which is this principle stated for measures.

**Combinatorics** — counting problems where the principle does the heavy lifting.

**Venn Diagram Generator** — for shading expressions rather than counting them.`,
      before:``,
      after:``,
      link:'',

    },

    // ---- Per-state sections (Line 1). One per id resolveExplanationId can
    // return, each opening with a frozen frame of the tool in that state. ----

    obj11:{
      title:`Nothing Counted Yet`,
      content:`Before any term is applied every region reads $0$. The picture is drawn, the element counts are known, and the bookkeeping has not started.`,
      before:``,
      after:`This is the state to look at when the two numbers per region are still unfamiliar, because they are maximally different here. The small grey numbers are already final — they are the element counts, fixed by the sizes you entered. The large numbers are all zero, because no term has counted anything.

Nothing about the sets changes from here on. Every step that follows changes only the large numbers, moving each region towards $1$.

That framing is what makes the walk-through a proof rather than a demonstration. The claim is not that the formula gives the right answer on these numbers; it is that each region ends at a multiplicity of exactly $1$, which forces the total to be the size of the union whatever the sizes happen to be.

Press once and [the first term goes in](!#a-term-being-added).`,
      link:'',

    },

    obj12:{
      title:`When Nothing Overlaps`,
      content:`Set all the intersections to zero and the sets are pairwise disjoint. Every overlap region holds no elements, and the formula has nothing to correct.`,
      before:``,
      after:`Here the union is simply the sum: $|A \\cup B \\cup C| = |A| + |B| + |C|$. Stepping through confirms it — the three additions do all the work, and the four correction terms each subtract or add zero.

This is worth seeing before the general case, because it isolates what the principle is for. Inclusion-exclusion exists only to repair double counting. With no overlap there is no double counting, and the formula degenerates into the obvious answer.

It also explains why the addition rule for disjoint events in probability needs no correction term while the general one does. Disjointness is exactly the condition that makes the intersections vanish.

Give any one intersection a positive size and the correction terms start doing work — the ordinary case runs from [the first addition](!#a-term-being-added) onward.`,
      link:'',

    },

    obj13:{
      title:`A Term Being Added`,
      content:`With $|A|$ and $|B|$ applied, every region inside those sets has gone up by one. The lens where they meet reads $2$, and the tint marks what the current term just touched.`,
      before:``,
      after:`The over-count appears immediately, and it appears for a reason that needs no arithmetic: an element in both $A$ and $B$ was counted once when $A$ was added and once again when $B$ was added. Nothing was done wrong — adding the sizes is exactly what the first terms are supposed to do.

Regions reading $2$ or more are tinted amber to mark them as unfinished. Every subsequent subtraction is aimed at those regions, and at nothing else.

Notice too that regions in exactly one set are already correct at $1$, and every later term leaves them alone. The corrections are surgical: each one touches only the regions inside the intersection it names.

Keep pressing and [all three sets go in](!#all-the-sets-are-in).`,
      link:'',

    },

    obj14:{
      title:`All the Sets Are In`,
      content:`Three terms applied, and the running total is too big. Regions in one set read $1$, regions in two read $2$, and the centre — in all three — reads $3$.`,
      before:``,
      after:`This is the peak of the over-count, and the numbers say exactly how bad it is. Each element has been counted once for every set containing it, so its multiplicity is the number of sets it lies in.

The repair is not a guess. Each region reading $2$ lies in exactly one pairwise intersection, so subtracting that intersection brings it to $1$. Every over-counted region is reachable by a term the formula already contains, which is why the corrections are the intersections and not something invented.

The centre is the case that does not resolve so neatly. It reads $3$ and needs to reach $1$, so it needs removing twice — but it lies inside all three pairwise intersections, so the three subtractions will reach it three times. That mismatch is the whole reason the formula has a seventh term.

Watch it happen at [a term being subtracted](!#a-term-being-subtracted).`,
      link:'',

    },

    obj15:{
      title:`A Term Being Subtracted`,
      content:`The first pairwise overlap is being removed. The regions inside $A \\cap B$ drop by one and are tinted red, and the running total falls.`,
      before:``,
      after:`For the region in $A$ and $B$ but not $C$, this is the end of the story: it was counted twice, one count has been removed, and it now reads $1$ and stays there.

For the centre it is not. The centre lies inside $A \\cap B$ too, so it also drops — from $3$ to $2$ — even though it needs a different amount of correction than its neighbour. The subtraction cannot distinguish them, because both are inside the intersection being subtracted.

That is the structural problem the formula has to solve. A term aimed at one region unavoidably hits every region contained in it, so corrections overshoot on the deeper overlaps and the overshoot has to be repaired in turn.

Two more subtractions follow, and the centre keeps falling: [the centre reaches zero](!#the-centre-falls-to-zero).`,
      link:'',

    },

    obj16:{
      title:`The Centre Falls to Zero`,
      content:`All three pairwise subtractions are done. Every region in exactly two sets now reads $1$ and is correct — and the centre reads $0$.`,
      before:``,
      after:`The centre was counted $3$ times by the three sets, then removed $3$ times by the three pairwise overlaps, because it lies inside every one of them. Three up, three down, and elements in all three sets are currently not being counted at all.

This is the moment that makes the final term inevitable. $+|A \\cap B \\cap C|$ is not an adjustment someone found by trial; it is the unique correction that brings a region at $0$ back to $1$.

It is also where the two most common wrong versions of the formula fail. Stopping here leaves the total short by the size of the triple overlap. Subtracting the triple instead of adding it drives the centre to $-1$, which is visibly impossible.

Both are easy to spot once you are watching the region numbers rather than the algebra — which is the argument for reading the picture at all. One more term and [every region reads one](!#every-region-counted-once).`,
      link:'',

    },

    obj17:{
      title:`Every Region Counted Once`,
      content:`The triple overlap is added back and the centre returns to $1$. Every region on the diagram now reads exactly $1$, and the running total is the size of the union.`,
      before:``,
      after:`That is the proof, finished. The formula is not a recipe to memorise — it is a bookkeeping correction: add everything, remove what you double counted, put back what you removed too often.

The check is available directly. The element counts of all seven regions sum to the same number the formula produced, because the regions partition the union and each is now counted exactly once.

The pattern continues past three sets without changing character. For four sets you add the four sizes, subtract the six pairs, add the four triples, and subtract the quadruple — alternating by the number of sets in each term, for the reason set out in [why the signs alternate](!#why-the-signs-alternate).

What generalises is not the list of terms but the requirement they satisfy: every region ends at a multiplicity of one.`,
      link:'',

    },

    obj18:{
      title:`Sizes That Cannot Happen`,
      content:`Enter $|A| = 10$ alongside overlaps that need more room than that, and a region comes out negative. The tool marks it with a cross instead of an element count.`,
      before:``,
      after:`A negative region is not a rounding artefact — it is a proof that no collection of sets has the sizes you entered. Region counts are element counts, and no set has a negative number of elements.

Two constraints are being violated, and the second is easy to miss. An overlap can never exceed either set it sits inside, so $|A \\cap B|$ is at most the smaller of $|A|$ and $|B|$. Beyond that, once the triple overlap is fixed, each pairwise overlap has to leave enough room for what remains — push $|A \\cap B \\cap C|$ up too far and the pairwise-only slivers go negative while every individual number still looks reasonable.

The crossed region tells you where to start working backwards. This is also why a walk-through can end with regions that are not all $1$: the arithmetic is faithful, and it is reporting that the input was impossible — see [when the walk-through does not resolve](!#when-the-walk-through-does-not-resolve).`,
      link:'',

    },

    obj19:{
      title:`When the Walk-Through Does Not Resolve`,
      content:`Every term has been applied and at least one region is still not counted exactly once. With valid sizes this cannot happen, so the input is what to check.`,
      before:``,
      after:`The formula does not fail. What fails is the premise that the entered numbers describe a real collection of sets, and the walk-through is reporting that faithfully rather than hiding it.

This is worth distinguishing from an arithmetic slip. Every term was applied in the right order with the right sign; the multiplicities are correct for the terms; and the regions still do not settle, because the region sizes underlying them were never consistent.

Look for a region flagged with a cross and work outward from it, as at [sizes that cannot happen](!#sizes-that-cannot-happen). Reducing an overlap, or increasing the set that contains it, is usually enough.

The general lesson is one worth carrying beyond this tool: a counting formula applied to impossible data returns an answer, and the answer is meaningless. The check that every region lands on $1$ is what catches it.`,
      link:'',

    },

  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

  // Frozen-state framed units (Line 1): one per explanation id, built here and
  // rendered as content-array items. Panel text reads the picture; no href,
  // because this is the tool's own page.
  const d = inclusionExclusionDiagrams
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text })
  const stateUnits = {
    'start': u('start', 'Before any term, frozen',
      'Large numbers all zero, small grey element counts already final. Only the bookkeeping changes from here.'),
    'disjoint': u('disjoint', 'Every overlap zero, frozen',
      'The three overlap regions hold nothing, so the corrections have nothing to correct and the union is a plain sum.'),
    'adding': u('adding', '|A| and |B| applied, frozen',
      'The lens reads 2. Elements in both sets were counted once by each, which is the over-count the subtractions exist to fix.'),
    'all-added': u('all-added', 'All three sets in, frozen',
      'Ones, twos, and a three in the centre: every element counted once per set containing it. The peak of the over-count.'),
    'subtracting': u('subtracting', 'Subtracting |A &#8745; B|, frozen',
      'The A&#8745;B sliver lands on 1 and stops. The centre drops too, from 3 to 2, because it sits inside this overlap as well.'),
    'centre-emptied': u('centre-emptied', 'All three subtractions done, frozen',
      'Counted up three times, removed three times: the centre reads 0, and nothing in all three sets is being counted.'),
    'complete': u('complete', 'All seven terms applied, frozen',
      'Every region reads exactly 1. The running total is now the size of the union, and the proof is finished.'),
    'impossible': u('impossible', 'Sizes that cannot happen, frozen',
      'A crossed region has a negative element count &#8212; a proof that no collection of sets has these sizes.'),
    'incomplete': u('incomplete', 'All terms applied, still not resolved',
      'The terms are right and the regions still do not land on 1, because the entered sizes were never consistent.'),
  }

  // Panel notes (Line 1). The component keeps its own dynamic explanation
  // bodies; these add the anchor down to each state's dedicated section and
  // are SSR-visible from here. Keys match resolveExplanationId.
  const notes = {
    'start': `Nothing about the sets changes from here — every step moves only the large numbers, each towards exactly one. [Learn more about the starting state](!#nothing-counted-yet) · [Getting started](!#getting-started)`,
    'disjoint': `Disjointness is exactly the condition that makes the corrections vanish, which is why the disjoint addition rule needs no correction term. [Learn more about no overlap](!#when-nothing-overlaps) · [Entering the sizes](!#entering-the-sizes)`,
    'adding': `The corrections are surgical: each one touches only the regions inside the intersection it names, and leaves the already-correct regions alone. [Learn more about adding a term](!#a-term-being-added) · [Stepping through the terms](!#stepping-through-the-terms)`,
    'all-added': `Every over-counted region lies inside a pairwise intersection the formula already contains, which is why the corrections are the intersections and not something invented. [Learn more about the peak over-count](!#all-the-sets-are-in) · [Stepping through the terms](!#stepping-through-the-terms)`,
    'subtracting': `A term aimed at one region unavoidably hits every region contained in it, so corrections overshoot on the deeper overlaps. [Learn more about subtracting a term](!#a-term-being-subtracted) · [Stepping through the terms](!#stepping-through-the-terms)`,
    'centre-emptied': `A common wrong version stops here, or subtracts the triple overlap instead of adding it — the first leaves the centre at $0$, the second drives it to $-1$. [Learn more about the emptied centre](!#the-centre-falls-to-zero) · [Common mistakes](!#common-mistakes)`,
    'complete': `The signs keep going the same way: for four sets, add the four sizes, subtract the six pairs, add the four triples, subtract the quadruple. [Learn more about the finished count](!#every-region-counted-once) · [Why the signs alternate](!#why-the-signs-alternate)`,
    'impossible': `An overlap can never exceed either set it sits inside, and with three sets the pairwise overlaps must also leave room once the triple is fixed. [Learn more about impossible sizes](!#sizes-that-cannot-happen) · [Common mistakes](!#common-mistakes)`,
    'incomplete': `A counting formula applied to impossible data still returns an answer, and the answer is meaningless — the every-region-at-one check is what catches it. [Learn more about an unresolved walk-through](!#when-the-walk-through-does-not-resolve) · [Common mistakes](!#common-mistakes)`,
  }

  const faqQuestions = {
    obj1: {
      question: "What is the inclusion-exclusion principle?",
      answer: "It computes the size of a union from the sizes of the sets and their intersections. For two sets the union is the sum of the sizes minus the intersection. For three sets you add the three sizes, subtract the three pairwise intersections, and add the triple intersection back."
    },
    obj2: {
      question: "Why does the three-set formula add the triple intersection?",
      answer: "Because the three subtractions remove it too many times. Elements in all three sets are counted three times by the set sizes, then removed three times by the pairwise intersections, leaving them at zero. Adding the triple intersection brings them back to being counted once."
    },
    obj3: {
      question: "Why do the signs alternate?",
      answer: "An element in exactly k of the sets is counted k times, then subtracted k choose 2 times, then added k choose 3 times, and so on. That alternating sum of binomial coefficients equals exactly one for every k of at least one, so every element of the union is counted precisely once."
    },
    obj4: {
      question: "What happens if the sets do not overlap?",
      answer: "All the intersections are zero, so every correction term contributes nothing and the union is just the sum of the sizes. Inclusion-exclusion exists only to repair double counting, so with no overlap there is nothing for it to do."
    },
    obj5: {
      question: "Why does the tool say my sizes are impossible?",
      answer: "Because they imply a region with a negative number of elements. An intersection can never be larger than either set containing it, and with three sets each pairwise overlap must also leave enough room once the triple overlap is fixed."
    }
  }

  const seoData = {
    title: "Inclusion-Exclusion Principle Explorer",
    description: "Step through the inclusion-exclusion formula one term at a time and watch every region of the Venn diagram get counted exactly once. Free visual tool.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/inclusion-exclusion",
    name: "Inclusion-Exclusion Principle Explorer",
    hubDescription: "Enter the sizes of two or three sets and their overlaps, then apply the inclusion-exclusion formula one term at a time. Each region of the diagram shows how many times it has been counted so far, so the over-counting appears, the subtractions overshoot on the triple overlap, and the final term repairs it. The walk-through ends when every region reads exactly one.",
    category: "Counting and Cardinality",
    subCategory: "Inclusion-Exclusion",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="29" cy="31" r="18" fill="#85B7EB" fill-opacity="0.55" stroke="#0C447C" stroke-width="1"/><circle cx="51" cy="31" r="18" fill="#FAC775" fill-opacity="0.55" stroke="#854F0B" stroke-width="1"/><circle cx="40" cy="49" r="18" fill="#97C459" fill-opacity="0.55" stroke="#27500A" stroke-width="1"/><text x="21" y="29" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">1</text><text x="59" y="29" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">1</text><text x="40" y="61" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle">1</text><text x="40" y="25" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">2</text><text x="28" y="44" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle">2</text><text x="52" y="44" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle">2</text><text x="40" y="39" font-family="Georgia,serif" font-size="8" fill="#4B1528" text-anchor="middle">3</text></svg>`,
  }

  const schemas = {

    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Step-by-step walk-through of the inclusion-exclusion formula for two or three sets",
        "Per-region multiplicity display showing how many times each region has been counted",
        "Element counts derived from the entered sizes, or entered directly by region",
        "Colour coding that marks correct regions, over-counted regions, and the term in progress",
        "Previous, Next, Reset and automatic Play controls over the term sequence",
        "Detection of impossible size combinations, with the offending region flagged",
        "Running total that becomes the size of the union once every region is counted once"
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
          "name": "Inclusion-Exclusion Principle Explorer",
          "item": `https://www.learnmathclass.com${seoData.url}`
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
      props:{
         sectionsContent,
         introContent,
         instructions,
         faqQuestions,
         schemas,
         seoData,
         stateUnits,
         notes,
       }
    }
   }

export default function InclusionExclusionPage({seoData, sectionsContent, introContent, instructions, faqQuestions, schemas, stateUnits, notes}) {

  // Slug ids (Line 1). obj0 is the Key Terms slot, unused on tool pages, so it
  // never reaches this list. A per-state row carries its frozen unit between
  // the opening prose and the deeper treatment - a unit never closes a section.
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
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
    plain('obj1', 'getting-started'),
    stateRow('obj11', 'nothing-counted-yet', 'start'),

    plain('obj2', 'entering-the-sizes'),
    stateRow('obj12', 'when-nothing-overlaps', 'disjoint'),
    stateRow('obj18', 'sizes-that-cannot-happen', 'impossible'),

    plain('obj3', 'stepping-through-the-terms'),
    stateRow('obj13', 'a-term-being-added', 'adding'),
    stateRow('obj14', 'all-the-sets-are-in', 'all-added'),
    stateRow('obj15', 'a-term-being-subtracted', 'subtracting'),
    stateRow('obj16', 'the-centre-falls-to-zero', 'centre-emptied'),
    stateRow('obj17', 'every-region-counted-once', 'complete'),

    plain('obj4', 'reading-the-region-numbers'),
    plain('obj5', 'two-sets-and-three-sets'),
    plain('obj6', 'what-the-principle-says'),
    plain('obj7', 'why-the-signs-alternate'),
    plain('obj8', 'where-it-gets-used'),

    plain('obj9', 'common-mistakes'),
    stateRow('obj19', 'when-the-walk-through-does-not-resolve', 'incomplete'),

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Inclusion-Exclusion Principle Explorer</h1>
   <br/>
   <div style={{width:'80%', margin:'auto'}}>
     <ExplanationDetails
       title='How to use'
       instructions={instructions}
       accent='#2f4fd8'
     />
   </div>
   <br/>
   <br/>
   <InclusionExclusionExplorer showIntro={false} notes={notes}/>
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
   {/* Widget pages do not carry an intro section.
    <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   */}
   {/* Key Terms is for theoretical pages only - obj0 is left empty here.
    <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   />
   <br/>
   */}
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
