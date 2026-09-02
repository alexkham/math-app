import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import IndexedUnionIntersectionExplorer from '../../../../app/components/diagrams/set-theory/IndexedUnionIntersectionExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import indexedUnionIntersectionDiagrams from '../../../../app/components/diagrams/set-theory/indexedUnionIntersectionDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'indexed union and intersection',
    'union of a family of sets',
    'intersection of a family of sets',
    'big union symbol',
    'big intersection symbol',
    'indexed family of sets',
    'nested intervals intersection',
    'infinite intersection empty',
    'arbitrary unions and intersections',
    'union intersection notation',
    'monotone set sequence',
    'limit of a sequence of sets',
    'open closed interval intersection',
    'set theory quantifiers',
    'free indexed set tool',
  ]

  const instructions = [
    'Pick a family from the family picker. Each one is a rule giving the set $A_i$ for every index $i$, shown beside its name.',
    'The index control raises or lowers how many sets are in play. Push it up and watch the two accumulated results move.',
    'The member rows show $A_1, A_2, A_3, \\ldots$ in order, faint at the start and solid at the current index.',
    'The two heavy bars underneath are the running union $\\bigcup$ in blue and the running intersection $\\bigcap$ in amber.',
    'On a number line, a hollow endpoint is excluded and a filled one is included. An arrowhead means the set runs to infinity.',
    'Discrete families are drawn as a grid instead, one row per set, with the members of that set highlighted.',
    'The Venn families show the finite case: two panels, one shading the union and one the intersection.',
    'The limits panel names what the two operators settle on over the whole infinite family, which is not always what a finite stage suggests.',
    'Play steps the index upward on its own, and pausing leaves it wherever it has reached.',
    'The explanation panel names the lesson of the family you are on — an empty limit, a decisive endpoint, an unbounded union, or a stalled operator.',
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
      content:`The tool takes an **indexed family** of sets — $A_1, A_2, A_3, \\ldots$ — and accumulates the two big operators over it as you raise the index.

Choose a family, then push the index up. Three things move together:

• The **member rows**, one per set, showing $A_1$ through $A_n$.
• The **union bar**, in blue, holding everything in at least one of them.
• The **intersection bar**, in amber, holding everything in all of them.

The union can only grow as the index rises and the intersection can only shrink. Watching them move in opposite directions is the point of the display, and it is the first thing to look for.

At index $1$ there is nothing to accumulate — both operators simply return $A_1$, which is [where every family starts](!#one-set-is-not-a-family). Raise it and they begin to separate.

The panel underneath names what the current family is there to demonstrate, and the limits it reports are claims about the whole infinite family rather than about the finitely many rows on screen. That distinction does real work on this page: several families look settled long before they are, and one of them looks unsettled when it has already finished.`,
      before:``,
      after:``,
      link:'',

    },

    obj2:{
      title:`Choosing a Family`,
      content:`Each family in the picker is a rule that produces a set for every index, and each was chosen to make one specific thing happen.

• Shrinking intervals, $A_i = (0, 1/i]$ and its closed cousin $[0, 1/i]$ — nearly identical rules with different limits.
• Growing intervals, $A_i = [-i, i]$, bounded at every stage.
• Sliding tails, $A_i = [i, \\infty)$, each one leaving the last behind.
• Prefixes, $A_i = \\{1, 2, \\ldots, i\\}$, each containing the one before.
• Discrete tails, $A_i = \\{i, i+1, \\ldots\\}$, each dropping its smallest member.
• Multiples of the index, where the intersection tracks a least common multiple.
• Two Venn families, which show the finite case rather than a limit.

The expression for the current family is printed beside the picker, so you can always see the rule generating the rows below.

The families are not variations on one idea. Each is a counterexample to a plausible guess about how unions and intersections behave in the limit.`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
      title:`Pushing the Index`,
      content:`The index control decides how many sets are being accumulated. It is the only control that matters for the mathematics; everything else chooses what is being accumulated.

Raising it adds a member row and updates both bars. Lowering it removes the row and rolls the bars back. **Play** raises the index on its own so you can watch the two bars converge without clicking.

Early on there is not much to see — with two or three sets the pattern is usually [still forming](!#the-pattern-is-still-forming). Push to five or six and the behaviour that distinguishes one family from another becomes visible.

Two habits make the tool more useful. Step one index at a time rather than jumping, so you can see which term caused a change. And when a bar stops moving, notice it: a term that changes nothing is telling you the family is nested, and nesting is what makes the limits predictable.`,
      before:``,
      after:``,
      link:'',

    },

    obj4:{
      title:`Reading the Number Line`,
      content:`Interval families are drawn on a shared number line, so every set and both accumulated results are directly comparable.

The endpoint marks carry the detail that matters most here:

• A **filled dot** means the endpoint is included.
• A **hollow dot** means it is excluded.
• An **arrowhead** at either end means the set continues without bound.

The member rows fade with age — the earliest sets are faintest and the current one is solid — so the direction of travel is visible at a glance.

Below the dashed rule sit the two accumulated bars, drawn heavier than the members. When a bar shows the empty-set symbol instead of a segment, the accumulation has nothing in it at that stage.

The tick labels are the coordinates, and they rescale when a family needs a wider view. That is worth noticing when comparing two families: the same visual width can mean very different intervals.`,
      before:``,
      after:``,
      link:'',

    },

    obj5:{
      title:`Discrete and Venn Views`,
      content:`Not every family is a family of intervals, and the tool switches renderer to match.

**Discrete families** are drawn as a grid: one row per set, one cell per candidate number, with the members of that set highlighted. The two accumulated rows sit underneath in the same layout, so you can read down a column to see which sets contain a given number. That is the view used by the prefix, discrete-tail and multiples families — the last of which produces [an intersection tracking the least common multiple](!#the-running-intersection-is-an-lcm).

**Venn families** are different in kind: they show a finite family rather than an infinite one, side by side, one panel shading the union and one the intersection. With only two or three sets the big operators are just $\\cup$ and $\\cap$ written once instead of repeatedly, which is [the finite chain](!#the-finite-chain).

A Venn diagram can only ever show a small finite family, because it needs a separate region for every combination of memberships and there are $2^n$ of those.`,
      before:``,
      after:``,
      link:'',

    },

    obj6:{
      title:`What the Big Operators Mean`,
      content:`For a family indexed by a set $I$, the two operators are defined by membership conditions:

$$\\bigcup_{i \\in I} A_i = \\{x : x \\in A_i \\text{ for some } i\\}$$

$$\\bigcap_{i \\in I} A_i = \\{x : x \\in A_i \\text{ for every } i\\}$$

They do to a family of sets what $\\sum$ does to a family of numbers: take the whole indexed collection and return a single object.

The index set can be anything — the naturals, the reals, an arbitrary set with no order at all. Nothing in the definitions refers to a first index or a next one, which is why the notation survives uncountable families where a step-by-step reading would not.

With finitely many sets the operators are exactly the chained $\\cup$ and $\\cap$ you already use, and nothing is gained but brevity. The reason for having them is that they keep working when the chain has no end. For the two-set operations, see **set operations**.`,
      before:``,
      after:``,
      link:'',

    },

    obj7:{
      title:`Union Is There Exists, Intersection Is For All`,
      content:`The fastest way to stop memorising these operators is to read them as quantifiers.

$x \\in \\bigcup_i A_i$ says $x$ lies in **some** $A_i$ — an existence claim. $x \\in \\bigcap_i A_i$ says $x$ lies in **every** $A_i$ — a universal claim. That is the whole difference, and everything else follows from it.

Monotonicity follows immediately. Adding another set gives existence one more chance to succeed, so the union can only grow; and it gives universality one more chance to fail, so the intersection can only shrink.

De Morgan's laws follow too, as the quantifier duality:

$$\\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c \\qquad \\left(\\bigcap_i A_i\\right)^c = \\bigcup_i A_i^c$$

Failing to be in any set is being outside all of them. The two-set version is the same statement with $I$ of size two.

The quantifier reading also explains why the operators need no order on the index set. Neither question — is $x$ in some member, is $x$ in every member — refers to a first index or a next one, so nothing breaks when the family is indexed by the reals rather than by the naturals. For the quantifiers themselves, see **propositional logic**.`,
      before:``,
      after:``,
      link:'',

    },

    obj8:{
      title:`Monotone Families`,
      content:`A family is **nested** when each set contains the next, or each is contained in the next, and nesting is what makes the limits easy to predict.

Nested downward — each $A_{i+1} \\subseteq A_i$ — and the union settles immediately at $A_1$, because no later set can contribute anything new. All the interest is in the intersection, and that is [a stalled union](!#when-the-union-stops-growing).

Nested upward — each $A_i \\subseteq A_{i+1}$ — and the mirror image happens: the intersection settles at $A_1$ and the union grows, which is [a stalled intersection](!#when-the-intersection-stops-shrinking). The growing-intervals family is the clean case, and it also shows [bounded sets with an unbounded union](!#bounded-sets-unbounded-union).

Neither stall is a failure. A union takes each element once however many sets contain it, so a term already covered contributes nothing, and the operator is behaving exactly as defined.

Families that are not nested in either direction do both things at once — the union grows and the intersection shrinks on the same step, which is [the general case](!#the-general-case).`,
      before:``,
      after:``,
      link:'',

    },

    obj9:{
      title:`When the Limit Surprises You`,
      content:`The two most valuable families are the ones whose limits are not what a finite stage suggests.

Take $A_i = (0, 1/i]$. Every set in the family is non-empty — each holds infinitely many points, at every index, without exception. The intersection over the whole infinite family is nevertheless empty, because for any candidate $x > 0$ there is an index with $1/i < x$ that excludes it. **Non-empty at every stage, empty in the limit** — and that is [an empty intersection of non-empty sets](!#an-empty-intersection-of-non-empty-sets).

Two sets can never demonstrate this. It needs infinitely many, which is precisely why the notation exists.

The condition that rules it out is **compactness**. For closed bounded intervals nested downward the intersection is guaranteed non-empty, which is exactly why the closed variant of the same family behaves differently — see [when one bracket decides](!#when-one-bracket-decides-the-answer).

The lesson generalises past intervals: a property holding at every finite stage need not hold in the limit, and set operations over infinite families are where that first bites.`,
      before:``,
      after:``,
      link:'',

    },

    obj10:{
      title:`Open Versus Closed`,
      content:`$A_i = (0, 1/i]$ and $A_i = [0, 1/i]$ differ by a single character, and their infinite intersections differ by a whole point.

In the open version nothing survives. Every positive $x$ is dropped once $1/i < x$, and $0$ was never a member of any set, so the intersection is $\\varnothing$.

In the closed version $0$ belongs to every set in the family, so it survives every stage and the intersection is exactly $\\{0\\}$ — a singleton rather than nothing.

$$\\bigcap_{i=1}^{\\infty} \\left(0, \\tfrac{1}{i}\\right] = \\varnothing \\qquad \\bigcap_{i=1}^{\\infty} \\left[0, \\tfrac{1}{i}\\right] = \\{0\\}$$

This is worth doing by hand once, because it is the cleanest demonstration that open and closed are not a formality of notation. The bracket is carrying real information, and here it is the difference between an empty set and a point.

The unions are worth comparing too, and they are less dramatic: $(0, 1]$ against $[0, 1]$, differing by the same single point. Union is the forgiving operator — one set containing an element is enough to keep it — while intersection demands unanimity, which is why it is the one that notices a bracket. For the underlying vocabulary, see **interval notation**.`,
      before:``,
      after:``,
      link:'',

    },

    obj11:{
      title:`Related Concepts and Tools`,
      content:`**Set Operations** — union and intersection for two sets, which these operators generalise.

**Set Notation** — interval notation, the brackets that decide the limits on this page.

**Set Laws and Identities** — De Morgan's laws, stated here for arbitrary families.

**Cardinality** — countable and uncountable index sets.

**Propositional Logic** — the existential and universal quantifiers the operators translate into.

**Venn Diagram Generator** — for the finite case, with expressions rather than families.

**Power Set Explorer** — every subset of a small set, arranged by containment.`,
      before:``,
      after:``,
      link:'',

    },

    // ---- Per-state sections (Line 1). One per id resolveExplanationId can
    // return, each opening with a frozen frame of the tool in that state. ----

    obj12:{
      title:`One Set Is Not a Family`,
      content:`At index $1$ both operators return $A_1$ itself. The union bar and the intersection bar lie on top of the single member row, and neither has done any work.`,
      before:``,
      after:`This is the degenerate case, and it is worth a look because it shows what the operators are before they have anything to accumulate. A union over one set is that set. An intersection over one set is that set. They differ only once there is a second term to disagree about.

The analogy with $\\sum$ holds here too: a sum of one number is that number, and the notation earns nothing until the family is genuinely a family.

Raise the index and the two bars separate immediately and permanently. From that point on the union is at least as large as any member and the intersection at most as small — see [the pattern forming](!#the-pattern-is-still-forming).`,
      link:'',

    },

    obj13:{
      title:`The Pattern Is Still Forming`,
      content:`Three sets in. The union has grown a little, the intersection has shrunk a little, and neither has arrived anywhere that tells you what the family will do.`,
      before:``,
      after:`This is the honest middle of the process, and it is included because it is where most families look alike. Every family in the picker produces a growing union and a shrinking intersection at this stage. What distinguishes them only appears further along.

The monotonicity is already visible, though, and it is worth naming precisely. Both operators are **monotone** in the index, in opposite directions: adding a term can only enlarge the union and only reduce the intersection, never the reverse.

That is not an empirical observation about these families. It follows from the definitions — membership in a union survives any new term, and membership in an intersection is only ever at risk from one.

Keep going. By five or six terms each family has committed to its lesson.`,
      link:'',

    },

    obj14:{
      title:`An Empty Intersection of Non-Empty Sets`,
      content:`The shrinking family $A_i = (0, 1/i]$ at six terms. Every member row is a genuine interval holding infinitely many points, and the intersection bar has shrunk to $(0, 1/6]$ — small, but not empty.`,
      before:``,
      after:`The frozen frame shows a finite stage, and at any finite stage the intersection is non-empty. The limit is where the surprise lives: over the whole infinite family the intersection is $\\varnothing$.

The argument takes one line. Pick any $x > 0$. Choose an index $i$ with $1/i < x$. Then $x \\notin A_i$, so $x$ is not in the intersection. Since $x$ was arbitrary and $0$ was never a member of any $A_i$, nothing at all survives.

So every set in the family is non-empty, and the intersection of all of them is empty. There is no contradiction — an element of the intersection would have to sit in every $A_i$ at once, and no number manages it.

Two sets can never show this, nor can any finite family, where the intersection of non-empty nested sets is always non-empty. It needs infinitely many, and it is the most useful thing indexed intersection has to teach. The condition that rules it out is discussed at [when one bracket decides](!#when-one-bracket-decides-the-answer).`,
      link:'',

    },

    obj15:{
      title:`When One Bracket Decides the Answer`,
      content:`The same family with the left endpoint included: $A_i = [0, 1/i]$. The picture is almost identical to the open version, and the limit is not.`,
      before:``,
      after:`Here $0$ belongs to every set in the family. It is in $[0, 1]$, in $[0, 1/2]$, in $[0, 1/100]$, and in every set after them, so it survives every stage and the infinite intersection is $\\{0\\}$ rather than $\\varnothing$.

Everything else is dropped exactly as before — any $x > 0$ still fails once $1/i < x$. One point survives, and it survives because of one bracket.

The general principle behind the difference is **compactness**. A downward-nested family of closed bounded intervals always has a non-empty intersection; drop closedness and the guarantee goes with it. The open family is the standard counterexample, and this pair is the cleanest way to see that the hypothesis is doing real work.

Open versus closed is not a formality of notation. Here it is the difference between an empty set and a point — the contrast is drawn out at [open versus closed](!#open-versus-closed).`,
      link:'',

    },

    obj16:{
      title:`Bounded Sets, Unbounded Union`,
      content:`The growing family $A_i = [-i, i]$. Every member is a bounded interval of finite length, and the union bar has already outrun the visible window.`,
      before:``,
      after:`Over the infinite family the union is all of $\\mathbb{R}$, even though not one member of the family is unbounded. Every real number is caught eventually: whatever $x$ you pick, some index reaches it, and from that index onward it stays in.

That is exactly what union membership asks for — belonging to **at least one** $A_i$, not to all of them, and not to any particular one. No single set has to contain everything for the union to.

The intersection meanwhile is stuck at $A_1 = [-1, 1]$. The family is nested upward, so the first set is the smallest and nothing after it can remove anything — which is [a stalled intersection](!#when-the-intersection-stops-shrinking).

The pair is a good check on intuition. A property every member has — boundedness — is not inherited by the union, while a property of the first member alone determines the intersection entirely.`,
      link:'',

    },

    obj17:{
      title:`The Running Intersection Is an LCM`,
      content:`The multiples family, where $A_i$ holds the multiples of $i$. The intersection row highlights the numbers divisible by every index so far — the multiples of $\\mathrm{lcm}(1, \\ldots, n)$.`,
      before:``,
      after:`That requirement climbs quickly. The least common multiples run $1, 2, 6, 12, 60, 60, 420$, so by six terms only multiples of $60$ survive, and none of them are inside the window the grid can show. Each new index either divides what came before, changing nothing, or multiplies the requirement.

Over the whole infinite family the intersection is $\\varnothing$, because no natural number is a multiple of every natural number. The union is all of $\\mathbb{N}$, because every $n$ is a multiple of itself — and in fact the union settles at once, since $A_1$ is already everything.

A set operation producing the least common multiple is not a coincidence. Divisibility orders $\\mathbb{N}$ the way $\\subseteq$ orders sets: the set of multiples of $a$ contains the set of multiples of $b$ exactly when $a$ divides $b$. Intersection is the meet in that order, and the meet of divisibility is the lcm.`,
      link:'',

    },

    obj18:{
      title:`The Finite Chain`,
      content:`Three sets on a Venn diagram, with the union shaded on the left and the intersection on the right. This is the whole content of the big operators at finite size.`,
      before:``,
      after:`With finitely many sets the notation unpacks into something already familiar:

$$\\bigcup_{i=1}^{3} A_i = A_1 \\cup A_2 \\cup A_3 \\qquad \\bigcap_{i=1}^{3} A_i = A_1 \\cap A_2 \\cap A_3$$

Union takes every region lying inside at least one circle — seven of the eight. Intersection takes only the region inside all three, which is why it shrinks to the centre. The same $\\cup$ and $\\cap$, written once instead of twice.

Nothing is gained here but brevity, and that is the point of including the case. The reason for having the notation is not the finite chain; it is that the same definition keeps working when the chain has no end, as every other family on this page shows.

A Venn diagram cannot show more than a small finite family, because it needs a separate region for each of the $2^n$ combinations of memberships. That is a limit of the picture, not of the operators.`,
      link:'',

    },

    obj19:{
      title:`When the Union Stops Growing`,
      content:`A downward-nested family: each set is contained in the one before. The union bar has not moved since the first term, because every later set was already inside it.`,
      before:``,
      after:`A term that adds nothing to the union is not a malfunction. A union takes each element once however many sets contain it, so a set contained in what came before contributes exactly nothing.

Whenever a family is nested downward, the union is settled at $A_1$ from the start and the entire story is in the intersection. Recognising the nesting early tells you which of the two bars is worth watching.

The mirror case is a family nested upward, where the intersection is the one that settles — see [when the intersection stops shrinking](!#when-the-intersection-stops-shrinking).

One implementation note. With the families the tool ships, the explanation panel announces the family's own lesson before it reaches this observation, so this exact message is not one you will normally see. The situation it describes is on screen the whole time you are on a shrinking family — the union bar simply never moves.`,
      link:'',

    },

    obj20:{
      title:`When the Intersection Stops Shrinking`,
      content:`An upward-nested family: each set contains the one before. The intersection bar has been fixed at $A_1$ since the second term, because every later set contains everything that had survived.`,
      before:``,
      after:`In an upward-nested family the first set is the smallest, so the intersection settles immediately and stays there. Nothing later can remove an element, because every later set contains the first.

The union is where the action is, and on the growing-intervals family it never stops — which is [bounded sets with an unbounded union](!#bounded-sets-unbounded-union).

The two stalls together make the general rule concrete. Nesting in either direction freezes one operator and leaves the other to do all the work; a family nested in neither direction leaves both moving, which is [the general case](!#the-general-case).

As with the union stall, the shipped families announce their own lesson first, so this message does not normally surface. The behaviour it names is visible regardless: on any upward-nested family the amber bar simply stops moving.`,
      link:'',

    },

    obj21:{
      title:`The General Case`,
      content:`A family nested in neither direction: the sliding tails $A_i = [i, \\infty)$, where each set drops part of the last and adds nothing. Both bars are still moving.`,
      before:``,
      after:`This is the state the explanation panel falls back to when no sharper description applies — union and intersection both changing, neither settled, and the reading of the notation carrying the explanation instead of any special feature of the family.

That reading is the quantifier one. $x \\in \\bigcup_i A_i$ says $x$ lies in some $A_i$; $x \\in \\bigcap_i A_i$ says $x$ lies in every $A_i$. Existence and universality, and the monotonicity in opposite directions falls straight out of them.

The same reading extends past countable families. The index set can be anything at all — the operators only ever ask whether an element is in some member, or in every member, and neither question needs the indices to be ordered or countable.

With the families this tool ships, the panel always finds a sharper description first, so this fallback is not one you will normally meet. It is documented here because it is the definition every other case is a special instance of.`,
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
  const d = indexedUnionIntersectionDiagrams
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text })
  const stateUnits = {
    'start': u('start', 'A single index, frozen',
      'Both bars sit on the one member row. A union over one set is that set, and so is an intersection.'),
    'building': u('building', 'Three terms in, frozen',
      'The blue bar has grown and the amber one has shrunk. Every family looks like this at three terms.'),
    'nested-empty': u('nested-empty', '(0, 1/i] at six terms, frozen',
      'Every member is a genuine interval and the intersection is still non-empty at (0, 1/6]. Emptiness is a statement about the limit, not this picture.'),
    'endpoint-decides': u('endpoint-decides', '[0, 1/i] at six terms, frozen',
      'Almost the same picture as the open family. The filled left endpoint is the entire difference, and it saves exactly one point.'),
    'unbounded-union': u('unbounded-union', '[&#8722;i, i] at five terms, frozen',
      'Every member is bounded and the blue bar has already outrun the window. The amber bar has not moved since A&#8321;.'),
    'lcm-intersection': u('lcm-intersection', 'Multiples of the index, frozen',
      'Read down a column to see which sets contain a number. The amber row holds the multiples of lcm(1..6) = 60 &#8212; none within the grid.'),
    'finite-chain': u('finite-chain', 'Three sets on a Venn diagram, frozen',
      'Union shades seven regions of eight; intersection shades only the centre. The big operators as an ordinary chain.'),
    'union-stalled': u('union-stalled', 'A downward-nested family, frozen',
      'The blue bar has not moved since the first term. Each set sits inside the one before, so nothing later can add to the union.'),
    'intersection-stalled': u('intersection-stalled', 'An upward-nested family, frozen',
      'The amber bar is fixed at A&#8321;. Each set contains the one before, so nothing later can remove anything.'),
    'general': u('general', 'Sliding tails, frozen',
      'Nested in neither direction: the blue bar grows and the amber bar shrinks on the same step.'),
  }

  // Panel notes (Line 1). The component keeps its own dynamic explanation
  // bodies; these add the anchor down to each state's dedicated section and
  // are SSR-visible from here. Keys match resolveExplanationId.
  const notes = {
    'start': `A sum of one number is that number, and the notation earns nothing until the family is genuinely a family. [Learn more about the single-index case](!#one-set-is-not-a-family) · [Getting started](!#getting-started)`,
    'building': `Monotonicity is not an observation about these families — it follows from the definitions, since union membership survives any new term and intersection membership is only ever at risk. [Learn more about the forming pattern](!#the-pattern-is-still-forming) · [Pushing the index](!#pushing-the-index)`,
    'nested-empty': `The condition that rules this out is compactness: for closed bounded intervals nested downward, the intersection is guaranteed non-empty. [Learn more about an empty intersection](!#an-empty-intersection-of-non-empty-sets) · [When the limit surprises you](!#when-the-limit-surprises-you)`,
    'endpoint-decides': `Worth doing by hand once: pick any $x > 0$, find an $i$ with $1/i < x$, and nothing positive survives the open family. [Learn more about the deciding bracket](!#when-one-bracket-decides-the-answer) · [When the limit surprises you](!#when-the-limit-surprises-you)`,
    'unbounded-union': `A property every member has — boundedness — is not inherited by the union, while the first member alone fixes the intersection. [Learn more about an unbounded union](!#bounded-sets-unbounded-union) · [Monotone families](!#monotone-families)`,
    'lcm-intersection': `The union stalls at once here, since $A_1$ is all of $\\mathbb{N}$ — this family is entirely about the intersection. [Learn more about the lcm](!#the-running-intersection-is-an-lcm) · [Discrete and Venn views](!#discrete-and-venn-views)`,
    'finite-chain': `A Venn diagram can only ever show a small finite family: it needs a separate region for every combination of memberships, and there are $2^n$ of them. [Learn more about the finite chain](!#the-finite-chain) · [Discrete and Venn views](!#discrete-and-venn-views)`,
    'union-stalled': `A union takes each element once however many sets contain it, so a term contained in what came before contributes nothing. [Learn more about a stalled union](!#when-the-union-stops-growing) · [Monotone families](!#monotone-families)`,
    'intersection-stalled': `In an upward-nested family the first set is the smallest, so the intersection settles immediately. [Learn more about a stalled intersection](!#when-the-intersection-stops-shrinking) · [Monotone families](!#monotone-families)`,
    'general': `The quantifier reading extends past countable families — the index set can be anything, since the operators only ask about some member or every member. [Learn more about the general case](!#the-general-case) · [What the big operators mean](!#what-the-big-operators-mean)`,
  }

  const faqQuestions = {
    obj1: {
      question: "What do the big union and intersection symbols mean?",
      answer: "The big union of a family is the set of elements lying in at least one member, and the big intersection is the set of elements lying in every member. They do to a family of sets what the summation symbol does to a family of numbers: take the whole indexed collection and return one object."
    },
    obj2: {
      question: "Can an intersection of non-empty sets be empty?",
      answer: "Yes, if there are infinitely many of them. For the family of intervals from 0 to 1 over i, excluding 0, every member is non-empty, but any positive number is dropped once 1 over i falls below it, so nothing survives the whole family."
    },
    obj3: {
      question: "Why does including the left endpoint change the intersection?",
      answer: "Because zero then belongs to every set in the family and survives every stage. The open family has an empty intersection while the closed one has the single point zero. The underlying principle is compactness, which guarantees a non-empty intersection for nested closed bounded intervals."
    },
    obj4: {
      question: "Do unions and intersections always change when you add a set?",
      answer: "No. In a family nested downward the union is settled at the first set and never grows. In a family nested upward the intersection is settled at the first set and never shrinks. A term already covered by what came before contributes nothing."
    },
    obj5: {
      question: "How do union and intersection relate to quantifiers?",
      answer: "Union is existence and intersection is universality. Membership in a union says an element lies in some member of the family, and membership in an intersection says it lies in every member. De Morgan's laws for arbitrary families are the duality between those two quantifiers."
    }
  }

  const seoData = {
    title: "Indexed Union and Intersection Explorer",
    description: "Watch the big union and intersection accumulate over a family of sets. Push the index up and see what each operator settles on in the limit. Free tool.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/union-intersection",
    name: "Indexed Union and Intersection Explorer",
    hubDescription: "Pick a family of sets indexed by 1, 2, 3 and upward, then raise the index and watch the big union and the big intersection accumulate in opposite directions. Interval families are drawn on a shared number line with endpoint marks that matter, discrete families as a membership grid, and the finite families on a Venn diagram. Each family is built to make one limit surprising.",
    category: "Set Operations",
    subCategory: "Indexed Families",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="9" width="48" height="7" rx="3.5" fill="#C0DD97" stroke="#3B6D11" stroke-width="1"/><rect x="16" y="21" width="48" height="6" rx="3" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><rect x="22" y="29" width="36" height="6" rx="3" fill="#85B7EB" stroke="#185FA5" stroke-width="0.9"/><rect x="28" y="37" width="24" height="6" rx="3" fill="#378ADD" stroke="#185FA5" stroke-width="0.9"/><line x1="12" y1="48" x2="68" y2="48" stroke="#B5D4F4" stroke-width="1"/><line x1="16" y1="45.5" x2="16" y2="50.5" stroke="#B5D4F4" stroke-width="0.9"/><line x1="28" y1="45.5" x2="28" y2="50.5" stroke="#B5D4F4" stroke-width="0.9"/><line x1="40" y1="45.5" x2="40" y2="50.5" stroke="#B5D4F4" stroke-width="0.9"/><line x1="52" y1="45.5" x2="52" y2="50.5" stroke="#B5D4F4" stroke-width="0.9"/><line x1="64" y1="45.5" x2="64" y2="50.5" stroke="#B5D4F4" stroke-width="0.9"/><rect x="28" y="55" width="24" height="7" rx="3.5" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><text x="8" y="15.5" font-family="Georgia,serif" font-size="9" fill="#C0DD97" text-anchor="middle">&#8746;</text><text x="8" y="61.5" font-family="Georgia,serif" font-size="9" fill="#FAC775" text-anchor="middle">&#8745;</text></svg>`,
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
        "Running big union and big intersection over an indexed family of sets",
        "Eight families including shrinking and growing intervals, tails, prefixes, and multiples",
        "Interval families drawn on a shared number line with included and excluded endpoint marks",
        "Discrete families drawn as a membership grid, one row per set",
        "Venn families showing the finite case with union and intersection side by side",
        "An index control with automatic play, so the two operators can be watched converging",
        "A limits panel naming what each operator settles on over the whole infinite family"
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
          "name": "Indexed Union and Intersection Explorer",
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

export default function UnionIntersectionPage({seoData, sectionsContent, introContent, instructions, faqQuestions, schemas, stateUnits, notes}) {

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
    stateRow('obj12', 'one-set-is-not-a-family', 'start'),

    plain('obj2', 'choosing-a-family'),

    plain('obj3', 'pushing-the-index'),
    stateRow('obj13', 'the-pattern-is-still-forming', 'building'),

    plain('obj4', 'reading-the-number-line'),

    plain('obj5', 'discrete-and-venn-views'),
    stateRow('obj17', 'the-running-intersection-is-an-lcm', 'lcm-intersection'),
    stateRow('obj18', 'the-finite-chain', 'finite-chain'),

    plain('obj6', 'what-the-big-operators-mean'),
    stateRow('obj21', 'the-general-case', 'general'),

    plain('obj7', 'union-is-there-exists-intersection-is-for-all'),

    plain('obj8', 'monotone-families'),
    stateRow('obj16', 'bounded-sets-unbounded-union', 'unbounded-union'),
    stateRow('obj19', 'when-the-union-stops-growing', 'union-stalled'),
    stateRow('obj20', 'when-the-intersection-stops-shrinking', 'intersection-stalled'),

    plain('obj9', 'when-the-limit-surprises-you'),
    stateRow('obj14', 'an-empty-intersection-of-non-empty-sets', 'nested-empty'),
    stateRow('obj15', 'when-one-bracket-decides-the-answer', 'endpoint-decides'),

    plain('obj10', 'open-versus-closed'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Indexed Union and Intersection Explorer</h1>
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
   <IndexedUnionIntersectionExplorer showIntro={false} notes={notes}/>
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
