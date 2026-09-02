import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import VennTruthTableExplorer from '../../../../app/components/diagrams/set-theory/VennTruthTableExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import vennTruthTableDiagrams from '../../../../app/components/diagrams/set-theory/vennTruthTableDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'venn diagram truth table',
    'truth table generator',
    'set expression truth table',
    'venn diagram logic',
    'set operations and logic',
    'intersection conjunction',
    'union disjunction',
    'complement negation',
    'tautology venn diagram',
    'contradiction set theory',
    'boolean algebra sets',
    'de morgan truth table',
    'logic connectives table',
    'two set truth table',
    'free truth table tool',
  ]

  const instructions = [
    'Type a set expression into the Expression box, or build it from the symbol buttons: the set letters, then $\\cap$, $\\cup$, $\\setminus$, $\\oplus$, the complement mark, brackets, $\\emptyset$ and $U$.',
    'The 2 sets and 3 sets buttons rebuild both views at that size. Two sets give 4 regions and 4 rows; three sets give 8 of each.',
    'The counter beside the Expression heading reads how many regions the expression shades out of the total.',
    'As sets and As logic show the same expression in both alphabets, rewritten live as you type.',
    'The preset buttons load standard expressions, including $A \\cup A^c$ and $A \\cap A^c$ — the tautology and the contradiction.',
    'The Regions panel shades every region the expression is true on, and its heading shows the result column as a string of ones and zeros.',
    'The Truth table panel lists one row per region: which sets the point is inside, then whether the expression holds there.',
    'Click any row, or any region of the diagram, and the matching one on the other side is outlined. Click it again to deselect.',
    'The key under the table pairs each set symbol with its logical twin: $\\cap$ with $\\wedge$, $\\cup$ with $\\vee$, $\\oplus$ with exclusive or, and the complement mark with negation.',
    'The panel below both views names what you are looking at — a tautology, a contradiction, a named connective, or an expression that ignores one of its sets.',
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
      content:`The tool holds one expression and draws it twice, so the first thing to do is give it an expression.

Type into the **Expression** box, or assemble it from the symbol buttons underneath: the set letters first, then the operators — intersection, union, difference, symmetric difference, the complement mark, brackets, the empty set and the universe.

Two choices shape everything else:

• The **2 sets** and **3 sets** buttons rebuild both views. Two sets give 4 regions and 4 rows; three sets give 8 of each.
• The **preset buttons** load standard expressions, which is the quickest way to see the tool work before typing anything of your own.

Watch two readouts as you type. The counter beside the Expression heading says how many regions are shaded out of the total, and the **As sets** and **As logic** lines rewrite your expression into logical notation as you go.

If the expression will not parse the box turns red and the reason appears below it. Unclosed brackets account for most of these.

Before typing anything the tool sits in [its empty state](!#an-empty-expression-box), which is worth a look on its own: the diagram is drawn, the table is built, and only the answer is missing.`,
      before:``,
      after:``,
      link:'',

    },

    obj2:{
      title:`Reading the Two Views`,
      content:`The **Regions** panel on the left and the **Truth table** on the right are not an illustration and its explanation. They are the same object written twice.

A region of the diagram is a decision about each set: inside or outside. A row of the table is a decision about each set: true or false. With $n$ sets there are $2^n$ of each, and they are the same $2^n$ decisions in a different alphabet.

So the shaded regions are exactly the true rows. The heading of the Regions panel prints the result column as a string of ones and zeros — the **signature** of the expression — and reading it left to right walks the table top to bottom.

The table columns are the sets, in order, followed by the **Result** column. The Region column names each row the way set notation would: an intersection of the sets the point lies in, or the universe symbol for the region outside everything.

Two expressions are equal exactly when their result columns match, which is the whole basis of checking an identity here. [An ordinary mixed column](!#an-ordinary-mixed-column) shows the correspondence at its plainest.`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
      title:`Linking a Row to a Region`,
      content:`Click any row of the table and the region it describes is outlined on the diagram. Click any region and the row that describes it is selected. Clicking the same one again clears the selection.

This is the feature that makes the correspondence concrete rather than asserted. A row that reads true, false for sets $A$ and $B$ picks out the part of $A$ lying outside $B$ — one specific area of the picture, not a general idea about it.

The explanation panel changes while a row is selected: it spells out which memberships the row fixes and whether the expression is true there, which is the reason that region is shaded or blank.

The deeper point is that every point of the universe lies in exactly one region, so every point is described by exactly one row. That is why the table has no gaps and no overlaps, and why a finite table can settle a claim about arbitrarily large sets. Frozen mid-selection, [one row and one region](!#one-row-one-region) show the pairing directly.`,
      before:``,
      after:``,
      link:'',

    },

    obj4:{
      title:`Writing Expressions the Parser Accepts`,
      content:`The parser is the same one the Venn diagram generator uses, so the notation carries over.

Operators need something on both sides, and the complement mark goes **after** what it negates: $A^c$, not a prefix. Brackets group exactly as they do in arithmetic, and nesting is allowed, so $((A \\cap B) \\setminus C)^c$ is a single valid expression.

Only the set letters currently drawn are accepted. Asking for $C$ while in two-set mode reports an unknown set rather than guessing.

Two habits help. Build long expressions in stages — type an inner part, check the shading, then wrap it — and read the error text rather than retyping blindly, because it names the token the reader stopped at.

The **As logic** line is also a check on your intent: if the logical rewrite is not what you meant, the set expression is not either.

Two failures are worth meeting deliberately rather than by accident: [an expression that will not parse](!#an-expression-that-will-not-parse), and [a set that is not on the diagram](!#a-set-not-on-the-diagram).

A few input conveniences carry over from the generator as well. The complement can be written with a prime mark or a star instead of the superscript, and the difference sign may be typed as a plain hyphen. Whatever spelling you use, the diagram and the table update on the same keystroke, so there is never a moment where the two views disagree.`,
      before:``,
      after:``,
      link:'',

    },

    obj5:{
      title:`Checking an Identity`,
      content:`The tool has no compare box, and does not need one: the result column is a fingerprint.

Type one side of an identity, note the signature in the Regions heading, then type the other side and compare. Matching columns mean the two expressions shade the same regions, which for sets means they are equal.

Worth doing at least once each:

• De Morgan: $(A \\cup B)^c$ against $A^c \\cap B^c$ — the columns agree.
• The false pairing: $(A \\cap B)^c$ against $A^c \\cap B^c$ — they do not.
• Distribution: $A \\cap (B \\cup C)$ against $(A \\cap B) \\cup (A \\cap C)$, in three-set mode.
• Difference as intersection: $A \\setminus B$ against $A \\cap B^c$.

Because the check runs over all $2^n$ rows, agreement is a proof for those sets rather than a suggestive picture. A single differing row is a counterexample, and the row tells you exactly which membership pattern breaks the claim.`,
      before:``,
      after:``,
      link:'',

    },

    obj6:{
      title:`Set Notation and Logic Notation`,
      content:`Set theory and propositional logic look nothing alike on the page and are the same algebra underneath. The key below the table is the dictionary:

• Intersection $\\cap$ is conjunction $\\wedge$ — in both sets.
• Union $\\cup$ is disjunction $\\vee$ — in either.
• Complement $^c$ is negation $\\neg$ — not in.
• Symmetric difference $\\oplus$ is exclusive or — in exactly one.
• The universe $U$ is truth, and the empty set $\\varnothing$ is falsity.

Difference has no single logical symbol because it is already a compound: $A \\setminus B$ is $A \\wedge \\neg B$, which is how the **As logic** line rewrites it.

The translation is mechanical, and it runs in both directions. Every set identity you prove is a logical equivalence you have proved at the same time, because the two notations describe one structure — a **Boolean algebra**. That is why the diagram and the table can never disagree.`,
      before:``,
      after:``,
      link:'',

    },

    obj7:{
      title:`What a Truth Table Is`,
      content:`A **truth table** lists every possible assignment of true and false to the variables of an expression, and records the value of the expression under each.

With $n$ variables there are $2^n$ assignments, because each variable is independently true or false. Two variables give 4 rows, three give 8, and the count doubles with every variable added.

The table is a decision procedure rather than an argument. To ask whether two expressions are equivalent, you do not need to reason about them — you build both columns and compare, and the answer is certain because the rows exhaust the possibilities.

Here the variables are memberships: the proposition is that the point lies in $A$, and the region is that assignment made visible. Nothing about the method changes; only the reading of what the variables stand for.

That reframing is what lets a table settle a question about sets. A claim about two sets is a claim about every point, and every point falls under exactly one of the four assignments, so four rows exhaust the argument. For the propositional-logic treatment, see **truth tables**.`,
      before:``,
      after:``,
      link:'',

    },

    obj8:{
      title:`Tautologies and Contradictions`,
      content:`Two result columns are special because they do not depend on the sets at all.

A column of all ones is a **tautology**: the expression is true under every assignment, so every region is shaded and the expression equals the universe. $A \\cup A^c$ is the standard case — a point is either in $A$ or outside it, and there is no third option. That is the law of the excluded middle wearing set notation.

A column of all zeros is a **contradiction**: false under every assignment, nothing shaded, and the expression equals the empty set. $A \\cap A^c$ is the standard case, since no point is both in and out.

The two are complements of each other, in both alphabets at once: negate a tautology and you get a contradiction, complement the universe and you get the empty set. Each has its own frame below: [every region shaded](!#every-region-shaded) and [no region shaded](!#no-region-shaded). Everything else — every expression whose column mixes ones and zeros — is **contingent**, and its truth depends on which sets you actually have.`,
      before:``,
      after:``,
      link:'',

    },

    obj9:{
      title:`The Named Connectives`,
      content:`With two sets there are 4 regions, so a result column is 4 bits, so there are $2^4 = 16$ distinct expressions up to equivalence. That is exactly the number of binary logical connectives, and it is not a coincidence — it is the same count arrived at twice.

Several of the sixteen have names, and the tool announces them when your expression lands on one:

• $A \\cap B$ is conjunction, AND.
• $A \\cup B$ is disjunction, OR.
• $A \\oplus B$ is exclusive or, XOR.
• $(A \\cap B)^c$ is the Sheffer stroke, NAND.
• $(A \\cup B)^c$ is the Peirce arrow, NOR.
• $A^c \\cup B$ is material implication, if $A$ then $B$.
• $(A \\oplus B)^c$ is the biconditional, if and only if.

Implication is the one worth dwelling on. Written as sets it says every point of $A$ lies in $B$, which is containment; written as logic it is the conditional. It is the case frozen at [when the column has a name](!#when-the-column-has-a-name). For the logical treatment, see **implications**.`,
      before:``,
      after:``,
      link:'',

    },

    obj10:{
      title:`When an Expression Ignores a Set`,
      content:`Sometimes flipping membership in one set changes nothing: every row keeps its value, and the shading is symmetric across that circle. The tool detects this and says which set is being ignored.

The classic case is $A \\cap (A \\cup B)$. It mentions $B$, but $B$ never affects the outcome — the expression simplifies to $A$, by the absorption law. The column is the column of $A$.

A column that survives deleting a variable is the signal that the expression can be simplified, and it is how redundancy is detected mechanically rather than by inspection. In circuit design the same test identifies an input that can be removed.

Notice that mentioning a set and depending on it are different things. The parser sees the letter; the table sees whether it matters.

The frozen case is [a column that ignores a set](!#a-column-that-ignores-a-set).

The diagram shows the same fact geometrically. If an expression ignores $B$, its shading is symmetric across the boundary of circle $B$ — whatever is shaded inside is shaded outside, so the curve cuts through the shaded area without changing it. A boundary that makes no difference to the picture is a variable that makes no difference to the answer. For the algebraic laws behind the simplification, see **set laws and identities**.`,
      before:``,
      after:``,
      link:'',

    },

    obj11:{
      title:`Related Concepts and Tools`,
      content:`**Set Operations** — formal definitions of intersection, union, difference, complement, and symmetric difference.

**Truth Tables** — the propositional-logic treatment, with connectives, tautologies, and contradictions.

**De Morgan's Laws** — the identity pair whose columns this tool matches fastest.

**Set Laws and Identities** — the algebraic catalog, including the absorption law behind ignored sets.

**Propositional Logic** — syntax and semantics of the notation in the As logic line.

**Venn Diagrams** — the diagram side on its own, for two and three sets.

**Venn Diagram Generator** — the companion tool, which shades expressions on up to five sets but does not build the table.`,
      before:``,
      after:``,
      link:'',

    },

    // ---- Per-state sections (Line 1). One per id resolveExplanationId can
    // return, each opening with a frozen frame of the tool in that state. ----

    obj12:{
      title:`An Empty Expression Box`,
      content:`With no expression typed, both views are already built: the circles are drawn, the regions exist, the table has its rows. Only the answer is missing, and nothing is shaded.`,
      before:``,
      after:`This state is worth a moment because it shows what the diagram is before any expression acts on it. The regions are not created by the expression — they are created by the sets, and there are $2^n$ of them whatever you eventually type.

An expression does one thing only: it selects. It answers true or false for each region, and the shading is that answer painted on. The same is true of the table, which already has its rows and only wants a Result column.

Seeing the empty case makes the later ones easier to read. [Every region shaded](!#every-region-shaded) and [no region shaded](!#no-region-shaded) are the two extremes of that selection, and everything else lies between them.`,
      link:'',

    },

    obj13:{
      title:`An Expression That Will Not Parse`,
      content:`Type $A \\cap (B$ and the box turns red. The reader reached the end of the expression still waiting for a closing bracket, so it stops and says so rather than guessing what you meant.`,
      before:``,
      after:`Both views hold their previous shading while an expression is unparseable. Nothing is cleared, because there is no new answer to show — only a message about the reading.

Three causes account for nearly all of these. An unclosed bracket, as here. An operator with nothing on one side, such as a trailing intersection sign. And a complement mark placed before what it negates instead of after it.

The error names the token the reader stopped at, which is usually more useful than retyping the whole expression. Build long expressions in stages and the parse failures stay local: type an inner part, watch it shade, then wrap it.

The other way an expression can fail is to be perfectly well formed and mention [a set that is not on the diagram](!#a-set-not-on-the-diagram).`,
      link:'',

    },

    obj14:{
      title:`A Set That Is Not on the Diagram`,
      content:`Type $A \\cap C$ in two-set mode and nothing is wrong with the syntax — the expression simply names a set that is not drawn. The tool reports the unknown letter and lists what is available.`,
      before:``,
      after:`This is a different failure from a parse error. The expression is well formed; it just refers to something that does not exist here. In logical terms it uses a free variable the model has no interpretation for.

The fix is either to switch to three sets, which brings $C$ into existence, or to rewrite using only the letters on the diagram. Switching is usually what you want, and it rebuilds both views at 8 regions and 8 rows.

Notice what the tool does not do: it does not silently treat the unknown set as empty. That would produce a shading, and a shading is an answer — it would look like a result rather than a mistake. Refusing to guess is what keeps the two views trustworthy.`,
      link:'',

    },

    obj15:{
      title:`Every Region Shaded`,
      content:`$A \\cup A^c$ shades all four regions, and the result column reads all ones. Nothing is left blank, whatever the sets contain.`,
      before:``,
      after:`In set terms this expression equals the universe $U$. Every point is either in $A$ or outside it, so every point qualifies, and no choice of $A$ can change that.

In logical terms it is a **tautology**: true under every assignment. The example is the law of the excluded middle written with circles instead of letters, and the diagram is the proof — there is nowhere left to stand.

What makes this state useful is that it is unfalsifiable by experiment. You can redraw the circles any way you like, make $A$ enormous or empty, and the shading does not change. An expression whose truth survives every configuration is saying something about the logic rather than about the sets.

Its exact mirror is [no region shaded](!#no-region-shaded), and complementing either one produces the other.`,
      link:'',

    },

    obj16:{
      title:`No Region Shaded`,
      content:`$A \\cap A^c$ shades nothing at all, and the result column reads all zeros. The diagram is drawn, the regions are there, and not one of them qualifies.`,
      before:``,
      after:`In set terms the expression equals the empty set $\\varnothing$, for any $A$ whatsoever. No point is both inside $A$ and outside it, so the intersection has nothing to collect.

In logical terms it is a **contradiction**: false under every assignment. It is the negation of the tautology in the previous frame, and the pairing runs through both notations at once — the universe and the empty set correspond exactly to the tautology and the contradiction.

An empty shading is easy to mistake for a broken expression, which is why the tool distinguishes the two. Nothing shaded because the expression is a contradiction is a result; nothing shaded because the expression [would not parse](!#an-expression-that-will-not-parse) is a message. The result column tells you which you are looking at.`,
      link:'',

    },

    obj17:{
      title:`When the Column Has a Name`,
      content:`$A^c \\cup B$ shades three of the four regions — everything except the part of $A$ outside $B$ — and the tool names the column: this is material implication, if $A$ then $B$.`,
      before:``,
      after:`The naming is not decoration. With two sets a result column is 4 bits, so there are $2^4 = 16$ possible columns, and that is exactly the number of binary logical connectives. Several of the sixteen are famous enough to have names, and landing on one is worth knowing about.

Implication is the most instructive. As sets, $A^c \\cup B$ says every point of $A$ lies in $B$ — which is containment, $A \\subseteq B$, whenever the shading is complete. As logic it is the conditional. The single blank region is the only way the implication can fail: something in $A$ that is not in $B$.

That also explains the notorious truth-table row where a false antecedent makes the conditional true. On the diagram it is simply a region outside $A$ — nothing there is being claimed, so nothing there can break the claim.

Other named columns in the same catalog include the Sheffer stroke, the Peirce arrow, and the biconditional.`,
      link:'',

    },

    obj18:{
      title:`A Column That Ignores a Set`,
      content:`$A \\cap (A \\cup B)$ shades exactly circle $A$. The expression mentions $B$, but the shading is symmetric across $B$'s boundary — the curve passes straight through the shaded area without changing it.`,
      before:``,
      after:`The expression simplifies to $A$ by the **absorption law**, so $B$ is along for the ride. Flip membership in $B$ and every row keeps its value; the $B$ column could be deleted from the table without affecting the Result column at all.

That is the general test, and it is mechanical rather than a matter of inspection: a variable that never changes the answer is a variable the expression does not depend on, however often it appears in the text. The tool checks each set this way and reports the ones that make no difference.

A column that survives deleting a variable is the signal that the expression can be simplified. In circuit design the same test finds an input that can be cut; in proof work it finds a hypothesis that was never used.

Compare an expression that genuinely uses everything it mentions, such as [an ordinary mixed column](!#an-ordinary-mixed-column).`,
      link:'',

    },

    obj19:{
      title:`An Ordinary Mixed Column`,
      content:`$A \\cap (B \\cup C)$ on three sets shades three regions of the eight: the parts of $A$ that meet $B$ or $C$. No special name, no degenerate case — just an expression that depends on all three sets.`,
      before:``,
      after:`This is the ordinary state, and the one the tool spends most of its time in. The result column mixes ones and zeros, which makes the expression **contingent**: whether it holds at a given point depends on where that point is.

Read one row and the correspondence stops being abstract. A row fixes inside or outside for each of $A$, $B$ and $C$, which picks out one region; the Result cell says whether the expression holds there; and that is why the region is shaded or blank. Eight rows, eight regions, no gaps.

Three sets is also where identities become worth checking. Type $(A \\cap B) \\cup (A \\cap C)$ next and the column is identical — the distributive law, verified over all eight rows rather than argued for. The method is in [checking an identity](!#checking-an-identity).`,
      link:'',

    },

    obj20:{
      title:`One Row, One Region`,
      content:`With $A \\cap B$ in the box, clicking the row for $A$ alone outlines that region on the diagram: inside $A$, outside $B$. The expression is false there, which is why the region sits blank inside the dashed outline.`,
      before:``,
      after:`Selection is the feature that turns the correspondence from a claim into something you can point at. The row fixes a membership pattern; the outline shows which part of the picture that pattern describes. Clicking the region instead of the row does the same thing from the other side, and clicking again clears it.

A selected row can be true or false, and both are worth seeing. A true row outlines a shaded region and explains why it is shaded; a false row, like this one, outlines a blank region and explains why it is blank.

Underneath this is the fact that makes the whole tool work: every point of the universe lies in exactly one region, so every point is described by exactly one row. The table is a partition of all the possibilities, which is why checking every row is a complete argument and not a sample.`,
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
  const d = vennTruthTableDiagrams
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text })
  const stateUnits = {
    'empty': u('empty', 'No expression yet, frozen',
      'The regions exist before any expression does. Typing one only decides which of them get shaded.'),
    'error': u('error', 'A &#8746; (B &#8212; frozen',
      'The reader ran out of expression while still waiting for a closing bracket, so it reports rather than guesses.'),
    'unknown-set': u('unknown-set', 'A &#8745; C in two-set mode, frozen',
      'Well formed, but it names a set that is not drawn. The tool refuses to treat the unknown set as empty.'),
    'tautology': u('tautology', 'A &#8746; A&#7580;, frozen',
      'All four regions shaded. Every point is in A or outside it, so the shading cannot be broken by any choice of A.'),
    'contradiction': u('contradiction', 'A &#8745; A&#7580;, frozen',
      'Nothing shaded, and nothing wrong. No point is both inside A and outside it, so the intersection collects nothing.'),
    'named': u('named', 'A&#7580; &#8746; B, frozen',
      'Three regions of four. The one blank region is the only way the implication can fail: something in A that is not in B.'),
    'independent': u('independent', 'A &#8745; (A &#8746; B), frozen',
      'The shading is exactly circle A. B&#8217;s boundary runs through it without changing anything, which is what absorption looks like.'),
    'general': u('general', 'A &#8745; (B &#8746; C) on three sets, frozen',
      'Three regions of eight, and all three sets matter. The ordinary case: a column mixing ones and zeros.'),
    'row-selected': u('row-selected', 'A &#8745; B with the A-only row picked, frozen',
      'The dashed outline is the region that row describes. It is blank because the expression is false there.'),
  }

  // Panel notes (Line 1). The component keeps its own dynamic explanation
  // bodies; these add the anchor down to each state's dedicated section and
  // are SSR-visible from here. Keys match resolveExplanationId.
  const notes = {
    'empty': `The regions are made by the sets, not by the expression — an expression only selects among them. [Learn more about the empty expression box](!#an-empty-expression-box) · [Getting started](!#getting-started)`,
    'error': `Both views hold their previous shading while an expression is unreadable, because there is no new answer to show. [Learn more about a failed parse](!#an-expression-that-will-not-parse) · [Writing expressions](!#writing-expressions-the-parser-accepts)`,
    'unknown-set': `The tool will not treat an unknown set as empty — that would look like a result instead of a mistake. [Learn more about an unknown set](!#a-set-not-on-the-diagram) · [Writing expressions](!#writing-expressions-the-parser-accepts)`,
    'tautology': `Redraw the circles any way you like and the shading does not change, which is what makes this a statement about the logic rather than about the sets. [Learn more about every region shaded](!#every-region-shaded) · [Tautologies and contradictions](!#tautologies-and-contradictions)`,
    'contradiction': `Nothing shaded because the expression is a contradiction is a result; nothing shaded because it would not parse is a message. [Learn more about no region shaded](!#no-region-shaded) · [Tautologies and contradictions](!#tautologies-and-contradictions)`,
    'named': `Set notation and logic notation developed separately and still look nothing alike, yet they describe one Boolean algebra and translate mechanically either way. [Learn more about named columns](!#when-the-column-has-a-name) · [The named connectives](!#the-named-connectives)`,
    'independent': `A column that survives deleting a variable is the signal that the expression can be simplified. [Learn more about an ignored set](!#a-column-that-ignores-a-set) · [When an expression ignores a set](!#when-an-expression-ignores-a-set)`,
    'general': `Two expressions are equal precisely when their columns match, which is what makes checking an identity a finite job. [Learn more about a mixed column](!#an-ordinary-mixed-column) · [Reading the two views](!#reading-the-two-views)`,
    'row-selected': `Every point lies in exactly one region, so every point is described by exactly one row — the table is a partition, not a sample. [Learn more about one row and one region](!#one-row-one-region) · [Linking a row to a region](!#linking-a-row-to-a-region)`,
  }

  const faqQuestions = {
    obj1: {
      question: "How is a Venn diagram related to a truth table?",
      answer: "They are the same object in two notations. A region of the diagram fixes whether a point is inside or outside each set, and a row of the truth table fixes true or false for each set. With n sets there are 2 to the n of each, and the shaded regions are exactly the true rows."
    },
    obj2: {
      question: "What is the logic symbol for intersection and union?",
      answer: "Intersection corresponds to conjunction, written as a wedge, and union corresponds to disjunction, written as a vee. Complement corresponds to negation, and symmetric difference corresponds to exclusive or. Set difference is a compound: A minus B is A and not B."
    },
    obj3: {
      question: "How do I check a set identity with a truth table?",
      answer: "Enter one side of the identity and read the result column, then enter the other side and compare. Matching columns mean the two expressions shade the same regions, so they are equal as sets. A single differing row is a counterexample and names the membership pattern that breaks the claim."
    },
    obj4: {
      question: "What is a tautology in set terms?",
      answer: "A tautology is an expression true under every assignment, so its result column is all ones and every region is shaded. In set terms it equals the universe. A union B complement is the standard example. Its mirror image is a contradiction, all zeros, equal to the empty set."
    },
    obj5: {
      question: "Why does A intersect the union of A and B ignore B?",
      answer: "Because it simplifies to A by the absorption law. Flipping membership in B never changes the result, so the B column can be deleted without affecting the answer. The tool detects this and reports which set the expression does not depend on."
    }
  }

  const seoData = {
    title: "Venn Diagram and Truth Table Explorer",
    description: "See any set expression twice: shaded Venn regions and a truth table. Click a row or a region to link them, compare columns, and check identities live.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/venn-truth-table",
    name: "Venn Diagram and Truth Table Explorer",
    hubDescription: "One set expression shown two ways at once — as shaded regions of a two or three set Venn diagram, and as a truth table with a result column. Clicking a row outlines the region it describes, and clicking a region selects its row. The tool also rewrites every expression into logical notation and flags tautologies, contradictions, and expressions that ignore one of their sets.",
    category: "Logic and Sets",
    subCategory: "Truth Tables",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="34" r="10" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.2"/><circle cx="28" cy="34" r="10" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.2"/><path d="M 22 26 A 10 10 0 0 1 22 42 A 10 10 0 0 1 22 26 Z" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="9" y="22" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">A</text><text x="35" y="22" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">B</text><rect x="45" y="20" width="10" height="8" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="55" y="20" width="10" height="8" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="65" y="20" width="10" height="8" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="45" y="28" width="10" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="55" y="28" width="10" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="65" y="28" width="10" height="8" fill="#C0DD97" stroke="#3B6D11" stroke-width="1"/><rect x="45" y="36" width="10" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="55" y="36" width="10" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="65" y="36" width="10" height="8" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.7"/><rect x="45" y="44" width="10" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="55" y="44" width="10" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="65" y="44" width="10" height="8" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.7"/><text x="50" y="26" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">A</text><text x="60" y="26" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">B</text><text x="70" y="26" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">&#8745;</text><text x="50" y="34" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">T</text><text x="60" y="34" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">T</text><text x="70" y="34" font-family="Georgia,serif" font-size="6" fill="#173404" text-anchor="middle">T</text><text x="50" y="42" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">T</text><text x="60" y="42" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">F</text><text x="70" y="42" font-family="Georgia,serif" font-size="6" fill="#888780" text-anchor="middle">F</text><text x="50" y="50" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">F</text><text x="60" y="50" font-family="Georgia,serif" font-size="6" fill="#042C53" text-anchor="middle">T</text><text x="70" y="50" font-family="Georgia,serif" font-size="6" fill="#888780" text-anchor="middle">F</text><line x1="34" y1="34" x2="43" y2="31" stroke="#FAC775" stroke-width="0.9" stroke-dasharray="2,1.5"/></svg>`,
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
        "Any set expression shown simultaneously as shaded Venn regions and as a truth table",
        "Two-set and three-set modes, with 4 or 8 regions and matching rows",
        "Click a truth table row to outline its region, or a region to select its row",
        "Live rewriting of every expression from set notation into logical notation",
        "Result column printed as a signature, so two expressions can be compared for equality",
        "Automatic naming of standard connectives including NAND, NOR, implication, and the biconditional",
        "Detection of tautologies, contradictions, and expressions that ignore one of their sets"
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
          "name": "Venn Diagram and Truth Table Explorer",
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

export default function VennTruthTablePage({seoData, sectionsContent, introContent, instructions, faqQuestions, schemas, stateUnits, notes}) {

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
    stateRow('obj12', 'an-empty-expression-box', 'empty'),

    plain('obj2', 'reading-the-two-views'),
    stateRow('obj19', 'an-ordinary-mixed-column', 'general'),

    plain('obj3', 'linking-a-row-to-a-region'),
    stateRow('obj20', 'one-row-one-region', 'row-selected'),

    plain('obj4', 'writing-expressions-the-parser-accepts'),
    stateRow('obj13', 'an-expression-that-will-not-parse', 'error'),
    stateRow('obj14', 'a-set-not-on-the-diagram', 'unknown-set'),

    plain('obj5', 'checking-an-identity'),
    plain('obj6', 'set-notation-and-logic-notation'),
    plain('obj7', 'what-a-truth-table-is'),

    plain('obj8', 'tautologies-and-contradictions'),
    stateRow('obj15', 'every-region-shaded', 'tautology'),
    stateRow('obj16', 'no-region-shaded', 'contradiction'),

    plain('obj9', 'the-named-connectives'),
    stateRow('obj17', 'when-the-column-has-a-name', 'named'),

    plain('obj10', 'when-an-expression-ignores-a-set'),
    stateRow('obj18', 'a-column-that-ignores-a-set', 'independent'),

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagram and Truth Table Explorer</h1>
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
   <VennTruthTableExplorer showIntro={false} notes={notes}/>
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
