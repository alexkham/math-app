import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import PowerSetExplorer from '../../../../app/components/diagrams/set-theory/PowerSetExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import powerSetExplorerDiagrams from '../../../../app/components/diagrams/set-theory/powerSetExplorerDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'power set',
    'power set calculator',
    'power set explorer',
    'subset lattice',
    'hasse diagram subsets',
    'all subsets of a set',
    'how many subsets does a set have',
    'proper subset',
    'empty set subset',
    'number of subsets 2^n',
    'subsets of a 3 element set',
    'set theory visual tool',
    'interactive subset diagram',
    'binomial coefficient subsets',
    'free power set tool',
  ]

  const instructions = [
    'Type the elements of the set into the Elements box, separated by commas or spaces. Repeats are dropped, because a set has no duplicates, and order never matters.',
    'The Size buttons 1 to 5 rebuild the set at that many elements, and the preset buttons below load ready-made sets: a, b, c — 1, 2, 3, 4 — x, y — red, green, blue.',
    'The diagram is a Hasse diagram of the subset lattice. Every subset of the set is a node, and a line joins two nodes that differ by exactly one element, so the subset relation reads as upward paths.',
    'The readout beside the title reports the arithmetic: $|A| = n$ elements give $|P(A)| = 2^n$ subsets. Levels run from the empty set at the bottom to the whole set at the top.',
    'Click any subset, or focus it and press Enter, to select it. Its subsets light up below it, its supersets light up above it, and the legend under the diagram names the three colors.',
    'Switch the Empty set toggle to write the empty subset as $\\emptyset$ rather than as an empty pair of braces.',
    'The Subsets tab counts each level as $\\binom{n}{k}$ with a bar chart, and totals them to $2^n$ — a row of Pascal’s triangle read off the diagram.',
    'The Roster form below that table lists every subset in set notation. Clicking any entry selects that subset in the diagram, which is the fastest way to reach a node in a crowded lattice.',
    'The Style tab sets the highlight color, the vertical gap between levels, and whether lines outside the selected cones are dimmed.',
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
      content:`The explorer draws the power set of whatever set you hand it, so the first move is to define that set.

Type the members into the **Elements** box, separated by commas or spaces. Anything works as an element: letters, numbers, words. Two rules are enforced as you type, and both of them are facts about sets rather than quirks of the tool. Repeats are dropped, because a set has no duplicates. Order is ignored, because $\\{a, b\\}$ and $\\{b, a\\}$ are the same set.

Three shortcuts save you the typing:

• The **Size** buttons, 1 through 5, rebuild the set at that many elements.
• The preset buttons load ready-made sets — letters, numbers, a two-element set, and color names.
• The **Empty set** toggle decides whether the empty subset is drawn as $\\emptyset$ or as an empty pair of braces.

Five elements is the ceiling, and the reason is the doubling rather than an arbitrary limit: five elements already produce 32 subsets, and six would produce 64. The picture stops being readable well before the mathematics stops being correct.

Three things the box can be told will change what you see rather than draw a lattice: leaving it [empty](!#an-empty-elements-box), listing [a repeated element](!#a-repeated-element), or going [past five elements](!#past-five-elements). Each has its own frozen frame below.`,
      before:``,
      after:``,
      link:'',

    },

    obj2:{
      title:`Reading the Subset Lattice`,
      content:`The diagram is a **Hasse diagram**, and it is worth knowing what that means before you read anything off it.

Every node is one subset of your set. The empty set sits alone at the bottom, the whole set sits alone at the top, and the rows in between hold the subsets of each intermediate size — one element on the first row up, two on the next, and so on.

A line joins two nodes when they differ by exactly one element. That is the whole drawing rule, and it is what makes the picture readable: lines for one-step containments only, with the longer containments left implicit.

The payoff is that containment becomes a direction. If you can trace a path upward from one subset to another, the first is contained in the second. If you cannot get from one to the other by travelling upward, neither contains the other, and the two subsets are **incomparable**. Most pairs in a large lattice are incomparable, which is exactly why containment is a partial order rather than a ranking.

The readout beside the title keeps the arithmetic in view: $n$ elements, $2^n$ subsets.

Two views of the lattice come with nothing selected: [a one-element set](!#a-one-element-set), which is the base case the whole pattern grows from, and [the full diagram at rest](!#the-whole-lattice-nothing-selected).`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
      title:`Selecting a Subset`,
      content:`Click any node to select it — or move the keyboard focus to it and press Enter, which does the same thing.

Selection splits the diagram into three colors, named in the legend under the picture:

• The selected subset itself.
• Everything **below** it that it contains — its own subsets.
• Everything **above** it that contains it — its supersets.

Anything left pale is incomparable to your selection: it neither contains the subset nor sits inside it.

The two colored regions are called **cones**, and reading them is the point of the tool. The downward cone from a subset of size $k$ is a complete copy of the whole diagram for a set of that size, holding $2^k$ nodes. The upward cone holds $2^{n-k}$ nodes, one choice of in-or-out for each element not already present.

Try the extremes first. Select the bottom node and nothing lights up below it, because nothing is below the empty set. Select the top node and everything lights up below it, because every subset is contained in the set itself. The panel on the right narrates whichever case you have selected.

Four selections behave differently enough to be worth studying one at a time: [the empty set at the bottom](!#the-empty-set-at-the-bottom), [the whole set at the top](!#the-whole-set-at-the-top), [a singleton](!#a-singleton-selected), and [a subset in the middle](!#a-subset-in-the-middle) where both cones are visible at once.`,
      before:``,
      after:``,
      link:'',

    },

    obj4:{
      title:`Counting Levels in the Subsets Tab`,
      content:`The **Subsets** tab turns the picture into numbers.

The table at the top has one row per level. Level $k$ counts the subsets holding exactly $k$ elements, and that count is the binomial coefficient $\\binom{n}{k}$ — the number of ways to choose which $k$ of the $n$ elements to include. A bar beside each row scales the counts against each other, and the footer adds them up to $2^n$.

Two patterns show up immediately and are worth pausing on. The counts are symmetric, reading the same forwards and backwards, because choosing $k$ elements to keep is the same decision as choosing $n - k$ to leave out. And they are largest in the middle, because there are more ways to pick a middling number of elements than to pick almost none or almost all.

Below the table, the **Roster form** writes the power set out properly, in braces, one subset after another. Clicking any entry selects it in the diagram, which is far quicker than hunting for a node by eye once the lattice gets crowded.`,
      before:``,
      after:``,
      link:'',

    },

    obj5:{
      title:`Styling the Diagram`,
      content:`The **Style** tab has three controls, and each solves a specific readability problem rather than being decoration.

**Highlight** sets the accent color used for the selected subset and its downward cone. Worth changing when you are pasting screenshots into notes that already use a color scheme, or when the default blue is hard to distinguish on a projector.

**Level gap** sets the vertical distance between rows. Widen it when the labels on a five-element set start crowding each other; tighten it when you want the whole lattice visible without scrolling.

**Fade edges** dims every line that falls outside the two cones of the current selection. Leave it on while you are tracing containment, because it strips away the lines that have nothing to do with your subset and leaves the two cones standing out cleanly. Turn it off when you want to study the full structure of the lattice — the symmetry of the diagram is much easier to see with every edge drawn at equal weight.

None of the three change the mathematics; they change how much of it you can see at once.`,
      before:``,
      after:``,
      link:'',

    },

    obj6:{
      title:`Things Worth Trying`,
      content:`A few deliberate experiments make the structure obvious faster than reading about it does.

**Watch the doubling.** Step the Size buttons from 1 to 5 and read the total each time: 2, 4, 8, 16, 32. Each new element doubles the count, because every subset that existed before now appears twice — once without the new element, once with it.

**Find the copy inside.** Select a two-element subset of a four-element set. The cone below it holds four nodes in the same diamond shape the whole diagram has when $n = 2$. Every node carries a smaller copy of the picture inside it.

**Check the halves.** Select a single element. Exactly half the subsets contain it, because each of the others is independently in or out.

**Compare bottom and top.** The empty set has one subset and the maximum number of supersets. The full set is the reverse. Every node in between trades one for the other.

**Rename the elements.** Swap the letters for words. The lattice is identical, which is the point: the power set depends on how many elements there are, not on what they are.`,
      before:``,
      after:``,
      link:'',

    },

    obj7:{
      title:`What Is a Power Set?`,
      content:`The **power set** of a set $A$, written $P(A)$ or sometimes $2^A$, is the set of all subsets of $A$.

The definition is short, and the one thing to be careful about is that the members of $P(A)$ are themselves sets. If $A = \\{a, b\\}$, then

$$P(A) = \\{\\, \\emptyset,\\ \\{a\\},\\ \\{b\\},\\ \\{a, b\\} \\,\\}$$

which has four members, none of which is $a$ or $b$. The elements of $A$ are not elements of $P(A)$; the subsets built from them are.

Two members are easy to forget, and both are always present. The **empty set** is a subset of every set, so it always appears. And $A$ is a subset of itself, so the whole set always appears too. Leaving either one out is the most common mistake when listing a power set by hand.

The construction can be repeated: $P(P(A))$ is a perfectly good set, with $2^4 = 16$ members when $A$ has two elements. For the underlying definitions of subset and membership, see **set theory**.`,
      before:``,
      after:``,
      link:'',

    },

    obj8:{
      title:`Why a Set of n Elements Has 2 to the n Subsets`,
      content:`The formula for the size of a power set is

$$|P(A)| = 2^{|A|}$$

and the argument behind it is one decision repeated.

To build a subset, walk through the elements of $A$ one at a time and decide, for each, whether it goes in. Two choices per element, and the choices are independent, so $n$ elements give $2 \\times 2 \\times \\cdots \\times 2 = 2^n$ possible outcomes. Each distinct sequence of decisions produces a distinct subset, and every subset arises from exactly one sequence, so the count is exact rather than an estimate.

This is also why every subset can be written as a string of yes-or-no answers, one per element — the reason computers store small sets as bit patterns.

The same total can be reached by counting level by level and adding: $\\sum_k \\binom{n}{k} = 2^n$. Both routes are visible in the tool, the first in the shape of the lattice and the second in the level table. For the counting rules behind the coefficients, see **combinations**.`,
      before:``,
      after:``,
      link:'',

    },

    obj9:{
      title:`Subset, Proper Subset, and Element`,
      content:`Three relations are easy to confuse, and the lattice separates them cleanly.

$A \\subseteq B$ says every element of $A$ is also in $B$. This allows $A$ and $B$ to be the same set, which is why every set is a subset of itself and why the top node of the diagram belongs in the power set at all.

$A \\subset B$, a **proper subset**, says the same thing but rules out equality. That single exclusion is the entire difference, and it is why the two counts a set has always differ by exactly one: $2^n$ subsets, $2^n - 1$ proper ones.

$a \\in B$ is a different kind of claim altogether. It says $a$ is one of the members of $B$, not that it is contained in $B$ as a set. So for $B = \\{a, b\\}$: $\\{a\\} \\subseteq B$ is true, $a \\in B$ is true, and $a \\subseteq B$ is not even well formed.

The empty set is where this bites hardest. $\\emptyset \\subseteq B$ is always true; $\\emptyset \\in B$ is usually false. For the formal statements, see **subsets**.`,
      before:``,
      after:``,
      link:'',

    },

    obj10:{
      title:`Where Power Sets Are Used`,
      content:`The power set is not only a classroom exercise; it is the standard way to package all the possibilities of a situation as a single object.

In **probability**, the sample space is a set of outcomes and an event is a subset of it. For a finite sample space the collection of all events is exactly the power set, which is why a three-outcome experiment has eight events, counting the impossible one and the certain one.

In **combinatorics**, counting subsets by size is counting combinations, and the level table is a row of **Pascal’s triangle**.

In logic and computing, a subset of $n$ items is a string of $n$ bits, so power sets are the natural model for flag sets, feature toggles, and truth assignments over $n$ variables.

In **set theory** proper, the power set drives Cantor’s theorem: $|P(A)|$ is always strictly larger than $|A|$, even for infinite sets. That single result is what produces different sizes of infinity, and it starts from the diagram on this page.`,
      before:``,
      after:``,
      link:'',

    },

    obj11:{
      title:`Related Concepts and Tools`,
      content:`**Set Theory** — sets, membership, and the notation the whole page is written in.

**Subsets** — the containment relation, proper subsets, and how to prove one set sits inside another.

**Set Operations** — union, intersection, difference, and complement, defined on the same sets whose subsets are drawn here.

**Cardinality** — sizes of sets, finite and infinite, and Cantor’s theorem about the power set.

**Combinations** — the $\\binom{n}{k}$ counts that fill each level of the lattice.

**Pascal’s Triangle** — where those level counts come from, and why they are symmetric.

**Venn Diagram Generator** — the companion tool for shading set expressions rather than enumerating subsets.`,
      before:``,
      after:``,
      link:'',

    },

    // ---- Per-state sections (Line 1). One per id resolveExplanationId can
    // return, each opening with a frozen frame of the tool in that state. ----

    obj12:{
      title:`An Empty Elements Box`,
      content:`Clear the Elements box and the stage goes blank: there is no set, so there is no lattice to draw and the tool says so rather than guessing.`,
      before:``,
      after:`This is the one state where nothing is wrong and nothing is drawn. It is also a good place to notice a distinction that trips people up constantly: an empty box is not the empty set. The box being empty means you have not named a set at all. The empty set is a perfectly good set that happens to have no members, and it has a power set like any other:

$$P(\\varnothing) = \\{\\varnothing\\}$$

One member, not zero. The formula agrees: $2^0 = 1$. So a diagram of $P(\\varnothing)$ would be a single node — the shape you get by typing one element and then removing it in your head, not the shape you get by typing nothing.

The moment you type a first element the picture appears with two nodes, which is [the one-element case](!#a-one-element-set). Everything after that is doubling.`,
      link:'',

    },

    obj13:{
      title:`A Repeated Element`,
      content:`Type $a, b, a$ and the lattice comes back with four nodes, not eight. The second $a$ was dropped, and the set drawn is $\\{a, b\\}$.`,
      before:``,
      after:`Nothing was corrected here, because nothing was wrong to begin with. A set is determined by which things are in it, and listing a member twice does not put it in twice. So $\\{a, b, a\\}$ and $\\{a, b\\}$ are not two sets that happen to be equal after tidying — they are two spellings of one set, and they have the same power set.

The formal statement is the axiom of extensionality: two sets are equal exactly when they have the same members. Repetition and order are both features of the notation rather than the object, which is why $\\{a, b\\} = \\{b, a\\}$ as well.

A structure that does count repeats exists, and is called a multiset, but it is not what braces mean. If you need the count, you are asking a different question than the one this diagram answers — see [what a power set is](!#what-is-a-power-set).`,
      link:'',

    },

    obj14:{
      title:`Past Five Elements`,
      content:`Offer six elements and only the first five are drawn. The lattice below is what five produces: 32 nodes across six levels, already dense enough to need the roster to read comfortably.`,
      before:``,
      after:`The cap is a drawing limit, not a mathematical one. Six elements have 64 subsets and the diagram would still be correct; it would simply be unreadable, with node labels colliding and 192 edges crossing each other.

The rate is the reason. Each element added doubles the node count, so the picture grows by more at every step than it grew at the previous one: 2, 4, 8, 16, 32, 64. Nothing about the layout can absorb that — spreading the nodes wider only trades crowding for scrolling. The underlying argument is in [why the count is a power of two](!#why-a-set-of-n-elements-has-2-to-the-n-subsets).

For larger sets the level table is the practical tool. It reports $\\binom{n}{k}$ per level without needing to place anything on screen, and it keeps working long after the diagram has stopped being useful.`,
      link:'',

    },

    obj15:{
      title:`A One-Element Set`,
      content:`With a single element there are exactly two subsets, and the lattice is the shortest one the tool can draw: the empty set at the bottom, $\\{a\\}$ at the top, one line between them.`,
      before:``,
      after:`This is the base case, and it is worth looking at precisely because there is so little to look at. The two nodes are the two possible answers to the only question available: is $a$ in or out?

$$|P(\\{a\\})| = 2^1 = 2$$

Everything larger is this picture repeated. Add a second element and each of these two subsets splits into two — the version without the new element, and the same version with it added — which is why the next lattice has four nodes rather than three. Add a third and the four become eight.

That doubling is the whole content of the formula, and it is easiest to believe here, where you can see both halves at once. The general shape it grows into is [the resting lattice](!#the-whole-lattice-nothing-selected).`,
      link:'',

    },

    obj16:{
      title:`The Whole Lattice, Nothing Selected`,
      content:`This is the view the tool opens on: every subset drawn, none of them picked out. For three elements that is eight nodes on four levels, with the empty set alone at the bottom and $\\{a, b, c\\}$ alone at the top.`,
      before:``,
      after:`With nothing selected the diagram shows structure rather than a particular relationship. The levels read $1, 3, 3, 1$ — one empty subset, three singletons, three pairs, one full set — and those four numbers add to the eight nodes on screen.

They are also a row of Pascal’s triangle, and they are symmetric for a reason worth stating plainly: choosing which $k$ elements to keep is the same act as choosing which $n - k$ to leave out, so the two levels must have equal counts. The [level table](!#counting-levels-in-the-subsets-tab) makes the same point numerically.

The shape as a whole is a partial order drawn as a picture. Some pairs of nodes are connected by an upward path and some are not, and the ones that are not are exactly the pairs where neither subset contains the other. Selecting any node sorts every other node into one of those three relationships at once — start with [a subset in the middle](!#a-subset-in-the-middle) to see all of them together.`,
      link:'',

    },

    obj17:{
      title:`The Empty Set at the Bottom`,
      content:`Select the bottom node and the diagram lights up almost entirely upward: every other subset is a superset of $\\varnothing$, and nothing at all sits below it.`,
      before:``,
      after:`The downward cone is not missing; it is a single node, the empty set itself. $\\varnothing$ has exactly one subset, and $2^0 = 1$ confirms it.

The upward direction is the interesting one. The empty set is a subset of every set — here, of all eight — and the reason is a piece of logic rather than a special rule. The claim $\\varnothing \\subseteq S$ says every element of $\\varnothing$ lies in $S$, and since there are no elements to test, there is no way for the claim to fail. Statements that hold because there is nothing to check are called vacuously true, and this is the standard example.

Two claims that look alike behave differently, and the diagram will not save you from confusing them: $\\varnothing \\subseteq S$ is always true, while $\\varnothing \\in S$ says the empty set is one of the members of $S$, which is usually false. The distinction is worked through in [subset, proper subset, and element](!#subset-proper-subset-and-element), and the opposite extreme is [the whole set at the top](!#the-whole-set-at-the-top).`,
      link:'',

    },

    obj18:{
      title:`The Whole Set at the Top`,
      content:`Select the top node and the whole diagram turns into its downward cone: every subset is contained in $\\{a, b, c\\}$, and there is nothing above it to contain it in turn.`,
      before:``,
      after:`That the set appears in its own power set is not a quirk. $A \\subseteq A$ holds because every element of $A$ is in $A$, so $A$ qualifies as a subset of itself and belongs on the diagram like any other node.

This is where the two containment symbols separate. All eight subsets satisfy $S \\subseteq A$; seven of them satisfy $S \\subset A$, the proper version, which excludes the set itself. The counts differ by exactly one, always, and that one is the node you have selected.

$$|P(A)| = 2^n, \\qquad \\text{proper subsets} = 2^n - 1$$

The bottom node is the mirror image: maximum supersets and a single subset, against this node's maximum subsets and none above. Compare it directly at [the empty set at the bottom](!#the-empty-set-at-the-bottom).`,
      link:'',

    },

    obj19:{
      title:`A Singleton Selected`,
      content:`Select $\\{a\\}$ and the lattice divides unevenly: a small cone below, holding only $\\{a\\}$ and the empty set, and a large one above holding every subset that contains $a$.`,
      before:``,
      after:`The downward cone has two nodes, because a one-element set has $2^1 = 2$ subsets. The upward cone has four of the eight, and that fraction is the point: exactly half the subsets of any set contain a given element.

The argument is the same independence that produces the total count. Fix $a$ as included, then each of the remaining $n - 1$ elements is still freely in or out, which gives $2^{n-1}$ subsets — half of $2^n$. Fix $a$ as excluded and you get the other half.

$$2^{n-1} = \\tfrac{1}{2} \\cdot 2^n$$

Every singleton behaves identically, which is a useful sanity check: select $\\{b\\}$ and the shape of the highlighting changes but the counts do not. Selecting a larger subset shrinks the upper cone and grows the lower one — see [a subset in the middle](!#a-subset-in-the-middle).`,
      link:'',

    },

    obj20:{
      title:`A Subset in the Middle`,
      content:`Select $\\{a, b\\}$ inside a four-element set and both cones are substantial at once: four subsets below, four above, and eight nodes left pale because they are related to it in neither direction.`,
      before:``,
      after:`The two cones are the general case, and their sizes follow from the same in-or-out counting. Below a subset of size $k$ sit its own subsets, $2^k$ of them, which is a complete copy of the whole diagram for a set of that size — here a four-node diamond, the lattice of $\\{a, b\\}$. Above it sit the subsets containing it, $2^{n-k}$ of them, one free choice for each element not already in.

$$2^k + 2^{n-k} - 1 \\le 2^n$$

The subtraction is because the selected node belongs to both cones, and the inequality is usually strict — the difference is the pale nodes. Those are the subsets that neither contain $\\{a, b\\}$ nor sit inside it, such as $\\{c\\}$ or $\\{a, c\\}$, and they are why containment is a partial order rather than a ranking: most pairs of subsets simply cannot be compared.

Selecting a smaller subset trades one cone for the other, most sharply at [a singleton](!#a-singleton-selected), and the trade ends at the two extremes, [the bottom](!#the-empty-set-at-the-bottom) and [the top](!#the-whole-set-at-the-top).`,
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
  const d = powerSetExplorerDiagrams
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text })
  const stateUnits = {
    'no-elements': u('no-elements', 'Elements box empty, frozen',
      'No set has been named, so there is nothing to draw. Not the same as the empty set, which would be one node.'),
    'duplicate': u('duplicate', 'a, b, a &#8212; frozen',
      'Four nodes, not eight. The repeated a was never a second member, so the set drawn is the two-element one.'),
    'too-many': u('too-many', 'Five elements, frozen at the cap',
      '32 nodes across six levels. A sixth element would double this to 64 and the labels would collide.'),
    'one-element-set': u('one-element-set', 'A one-element set, frozen',
      'The shortest lattice the tool draws: in or out, two nodes, one edge. Every larger diagram is this one doubled.'),
    'nothing-selected': u('nothing-selected', 'Three elements, nothing selected',
      'Eight nodes on four levels, counts 1, 3, 3, 1. With no selection the picture shows structure rather than a relationship.'),
    'empty-set': u('empty-set', 'The empty set selected, frozen',
      'Nothing below, everything above. The bottom node is a subset of all eight, itself included.'),
    'full-set': u('full-set', 'The whole set selected, frozen',
      'The mirror image of the bottom: every node lies below, none above. Seven of the eight are proper subsets.'),
    'singleton': u('singleton', 'A singleton selected, frozen',
      'Two nodes below, four above. Exactly half the subsets contain a given element, whichever element you pick.'),
    'general': u('general', 'A pair inside a four-element set, frozen',
      'Both cones at once: four below, four above, and eight pale nodes comparable to neither.'),
  }

  // Panel notes (Line 1). The component keeps its own dynamic explanation
  // bodies; these add the anchor down to each state's dedicated section and
  // are SSR-visible from here. Keys match resolveExplanationId.
  const notes = {
    'no-elements': `An empty box is not the empty set — that one has a power set with exactly one member. [Learn more about an empty elements box](!#an-empty-elements-box) · [Getting started](!#getting-started)`,
    'duplicate': `Repetition is a feature of the notation, not of the set, so both spellings have the same power set. [Learn more about a repeated element](!#a-repeated-element) · [Getting started](!#getting-started)`,
    'too-many': `The cap is about legibility, not correctness: the next element would double the nodes again. [Learn more about going past five elements](!#past-five-elements) · [Getting started](!#getting-started)`,
    'one-element-set': `Two nodes are the two answers to the only question available, and every larger lattice is this one doubled. [Learn more about the one-element case](!#a-one-element-set) · [Reading the lattice](!#reading-the-subset-lattice)`,
    'nothing-selected': `The level counts are a row of Pascal’s triangle and read the same forwards and backwards, because choosing which elements to keep is the same act as choosing which to leave out. [Learn more about the resting lattice](!#the-whole-lattice-nothing-selected) · [Reading the lattice](!#reading-the-subset-lattice)`,
    'empty-set': `Vacuously true is the reason: there are no elements to check, so the containment cannot fail. [Learn more about the empty set at the bottom](!#the-empty-set-at-the-bottom) · [Selecting a subset](!#selecting-a-subset)`,
    'full-set': `All the subsets, but one fewer proper subset — the excluded one is the node you have selected. [Learn more about the whole set at the top](!#the-whole-set-at-the-top) · [Selecting a subset](!#selecting-a-subset)`,
    'singleton': `Half of every power set contains any given element, because the other elements stay freely in or out. [Learn more about a selected singleton](!#a-singleton-selected) · [Selecting a subset](!#selecting-a-subset)`,
    'general': `The two cones overlap only at the selection itself, and the pale nodes they miss are the ones comparable to it in neither direction — which is what makes containment a partial order rather than a ranking. [Learn more about a subset in the middle](!#a-subset-in-the-middle) · [Selecting a subset](!#selecting-a-subset)`,
  }

  const faqQuestions = {
    obj1: {
      question: "What is the power set of a set?",
      answer: "The power set of a set A, written P(A), is the set of all subsets of A. Its members are themselves sets, and two of them are always present: the empty set, which is a subset of every set, and A itself, since every set is a subset of itself."
    },
    obj2: {
      question: "How many subsets does a set with n elements have?",
      answer: "Exactly 2 to the power n. Building a subset means deciding independently for each element whether it goes in, which gives two choices per element. So a 3-element set has 8 subsets, a 4-element set has 16, and a 5-element set has 32."
    },
    obj3: {
      question: "Is the empty set a subset of every set?",
      answer: "Yes. The claim that the empty set is a subset of S asks whether every element of the empty set is in S, and there are no elements to check, so the condition holds by default. Note that this is different from the empty set being an element of S, which is usually false."
    },
    obj4: {
      question: "What is the difference between a subset and a proper subset?",
      answer: "A subset allows equality, so every set is a subset of itself. A proper subset excludes that one case. That is why a set with n elements has 2 to the n subsets but only 2 to the n minus 1 proper subsets."
    },
    obj5: {
      question: "How do I list all the subsets of a set?",
      answer: "Work level by level: the empty set, then every single element, then every pair, and so on up to the whole set. Level k holds n choose k subsets. The Subsets tab in the explorer does this for you and prints the full roster in set notation."
    }
  }

  const seoData = {
    title: "Power Set Explorer | Interactive Subset Lattice",
    description: "Explore the power set of any small set as an interactive subset lattice. Click a subset to see what it contains, count all subsets, and read each level.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/power-set",
    name: "Power Set Explorer",
    hubDescription: "Draw the power set of a set of up to five elements as a Hasse diagram of the subset lattice. Click any subset and its subsets light up below it while its supersets light up above it, so containment reads as a direction on the page. A level table counts each size as a binomial coefficient and totals them to 2 to the n, and a roster panel lists every subset in set notation.",
    category: "Sets and Subsets",
    subCategory: "Power Sets",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g stroke="#B5D4F4" stroke-width="0.9"><line x1="40" y1="70" x2="20" y2="52"/><line x1="40" y1="70" x2="40" y2="52"/><line x1="40" y1="70" x2="60" y2="52"/><line x1="20" y1="52" x2="20" y2="32"/><line x1="20" y1="52" x2="40" y2="32"/><line x1="40" y1="52" x2="20" y2="32"/><line x1="40" y1="52" x2="60" y2="32"/><line x1="60" y1="52" x2="40" y2="32"/><line x1="60" y1="52" x2="60" y2="32"/><line x1="20" y1="32" x2="40" y2="14"/><line x1="40" y1="32" x2="40" y2="14"/><line x1="60" y1="32" x2="40" y2="14"/></g><circle cx="40" cy="14" r="6" fill="#CECBF6" stroke="#534AB7" stroke-width="1.2"/><circle cx="20" cy="32" r="5.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="40" cy="32" r="5.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="60" cy="32" r="5.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="20" cy="52" r="5.5" fill="#B5D4F4" stroke="#185FA5" stroke-width="1"/><circle cx="40" cy="52" r="5.5" fill="#B5D4F4" stroke="#185FA5" stroke-width="1"/><circle cx="60" cy="52" r="5.5" fill="#B5D4F4" stroke="#185FA5" stroke-width="1"/><circle cx="40" cy="70" r="5.5" fill="#D3D1C7" stroke="#5F5E5A" stroke-width="1"/><text x="40" y="72.5" font-family="Georgia,serif" font-size="7" fill="#2C2C2A" text-anchor="middle">&#8709;</text></svg>`,
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
        "Power set of any set of up to five elements, drawn as a Hasse diagram of the subset lattice",
        "Click or keyboard selection of any subset, highlighting its subsets below and its supersets above",
        "Live count of the total number of subsets as 2 to the power of the set size",
        "Level table counting the subsets of each size as binomial coefficients, with a bar chart and total",
        "Roster form listing every subset in set notation, with click-to-select on each entry",
        "Preset sets and a size selector from one to five elements",
        "Styling controls for highlight color, level spacing, and fading of edges outside the selection"
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
          "name": "Power Set Explorer",
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

export default function PowerSetPage({seoData, sectionsContent, introContent, instructions, faqQuestions, schemas, stateUnits, notes}) {

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
    stateRow('obj12', 'an-empty-elements-box', 'no-elements'),
    stateRow('obj13', 'a-repeated-element', 'duplicate'),
    stateRow('obj14', 'past-five-elements', 'too-many'),

    plain('obj2', 'reading-the-subset-lattice'),
    stateRow('obj15', 'a-one-element-set', 'one-element-set'),
    stateRow('obj16', 'the-whole-lattice-nothing-selected', 'nothing-selected'),

    plain('obj3', 'selecting-a-subset'),
    stateRow('obj17', 'the-empty-set-at-the-bottom', 'empty-set'),
    stateRow('obj18', 'the-whole-set-at-the-top', 'full-set'),
    stateRow('obj19', 'a-singleton-selected', 'singleton'),
    stateRow('obj20', 'a-subset-in-the-middle', 'general'),

    plain('obj4', 'counting-levels-in-the-subsets-tab'),
    plain('obj5', 'styling-the-diagram'),
    plain('obj6', 'things-worth-trying'),
    plain('obj7', 'what-is-a-power-set'),
    plain('obj8', 'why-a-set-of-n-elements-has-2-to-the-n-subsets'),
    plain('obj9', 'subset-proper-subset-and-element'),
    plain('obj10', 'where-power-sets-are-used'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Power Set Explorer</h1>
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
   <PowerSetExplorer showIntro={false} notes={notes}/>
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
