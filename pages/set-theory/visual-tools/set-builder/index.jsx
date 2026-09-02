import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import SetBuilderExplorer from '../../../../app/components/diagrams/set-theory/SetBuilderExplorer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import setBuilderDiagrams from '../../../../app/components/diagrams/set-theory/setBuilderDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'set builder notation',
    'set builder notation examples',
    'how to read set builder notation',
    'set builder to roster form',
    'roster form vs set builder',
    'defining sets by a rule',
    'set notation domain condition',
    'such that symbol set theory',
    'infinite set notation',
    'empty set condition',
    'set builder intersection union',
    'predicate set definition',
    'write a set with a condition',
    'set builder notation practice',
    'free set builder tool',
  ]

  const instructions = [
    'The expression at the top is the set you are building. It always has the same two parts: a domain before the bar, and a condition after it.',
    'Pick the domain from the Domain panel — the natural numbers, the naturals with zero, the integers, or a finite set you type yourself.',
    'Add a condition with the Add condition button, then choose a test from the dropdown: comparisons, between, even, odd, prime, perfect square, divisibility, or $x^2 < a$.',
    'Conditions that need a number show a box for it. Change the number and the candidates re-filter as you type.',
    'With two or more conditions, the and / or switch decides whether a candidate must pass every test or just one of them.',
    'The candidate strip shows the domain. Green chips pass the condition and are in the set; grey chips are candidates that failed.',
    'A trailing ellipsis means the domain runs on past the chips shown — the strip is a window, not the whole domain.',
    'Click any candidate, or focus it and press Enter, to see it tested condition by condition with a tick or a cross for each.',
    'The Roster form panel lists the members in braces, or shows $\\varnothing$ when nothing passes and says so when the set is too big to list.',
    'The preset buttons load ready-made expressions, and the line under the builder reads the whole thing back to you in words.',
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
      content:`The expression across the top of the tool is the set you are building, and it never has more than two parts: a **domain** before the bar, and a **condition** after it.

Everything else on the page feeds those two. The Domain panel sets where candidates come from. The condition rows set the test they have to pass. The strip of chips shows the candidates, green for the ones in the set and grey for the ones that failed.

The fastest way in is the preset buttons, which load complete expressions you can then take apart. Under the builder line there is also a reading of the whole expression in plain words, which is worth glancing at whenever the symbols stop being obvious.

One thing to notice early: an expression with no condition at all is legal. It keeps the entire domain, which is [a condition with nothing to test](!#an-empty-condition) — legal, and pointless, and a useful thing to have seen once.`,
      before:``,
      after:``,
      link:'',

    },

    obj2:{
      title:`Choosing the Domain`,
      content:`The **Domain** panel offers four choices, and they change the set even when the condition is untouched.

• The natural numbers, starting at 1.
• The naturals including zero.
• The integers, which bring negative candidates into play.
• A finite set you type yourself, entered as numbers separated by commas.

The domain is the first of two gates. It decides which things are even eligible for testing, and anything outside it is never considered at all — not rejected, simply absent. That case has its own frame at [a number outside the domain](!#a-number-outside-the-domain).

The chips shown are a window onto the domain rather than the whole of it. An infinite domain ends the strip with an ellipsis, because the candidates continue past what the panel can hold. A finite domain you type is shown in full.

Switching domains keeps your conditions intact, which makes the comparison easy to run: build an expression over the naturals, then switch to the integers and watch negative candidates arrive and be judged by the same test. Any selected candidate is cleared on the switch, since a pick made in one domain means nothing in another.`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
      title:`Adding Conditions`,
      content:`**Add condition** creates a row, and the dropdown in that row chooses the test. The available predicates cover most of what elementary set-builder expressions need:

• Comparisons — less than, at most, greater than, at least, equal, not equal.
• A between test, taking two bounds at once.
• Parity — even and odd.
• Number properties — prime, perfect square, and divisibility by a chosen number.
• A squared comparison, $x^2 < a$.

Tests that need a number show a box for it, and the candidates re-filter as you type rather than on submit, so you can watch the set change digit by digit.

Each row has a cross that removes it. Removing the last one takes you back to the no-condition case, and the whole domain floods green.

Conditions are independent of each other. Nothing stops you from adding two that overlap, or two that contradict, and the tool will not warn you — it simply reports what survives, which is the honest behaviour and occasionally a surprise.

The ordinary situation — one condition, a finite answer — is frozen at [the ordinary bounded case](!#the-ordinary-bounded-case).`,
      before:``,
      after:``,
      link:'',

    },

    obj4:{
      title:`Joining Conditions with And or Or`,
      content:`With two or more conditions a switch appears: **and** or **or**.

Joined by **and**, a candidate has to pass every test. Joined by **or**, passing one is enough. The switch changes nothing about the conditions themselves — only how their verdicts are combined — and flipping it back and forth over the same two tests is the clearest demonstration in the tool.

The two settings are exactly intersection and union, which is the point:

$$\\{x \\in D : P(x) \\text{ and } Q(x)\\} = \\{x \\in D : P(x)\\} \\cap \\{x \\in D : Q(x)\\}$$

$$\\{x \\in D : P(x) \\text{ or } Q(x)\\} = \\{x \\in D : P(x)\\} \\cup \\{x \\in D : Q(x)\\}$$

The asymmetry between them is worth holding onto. Under **and**, every condition you add can only remove candidates, so the set shrinks or stays put. Under **or**, every condition you add can only admit candidates, so the set grows or stays put. Neither can do both.

Both are frozen below, over the same pair of conditions: [joined by and](!#two-conditions-joined-by-and) and [joined by or](!#two-conditions-joined-by-or).`,
      before:``,
      after:``,
      link:'',

    },

    obj5:{
      title:`Testing a Candidate`,
      content:`Click any chip — or focus it and press Enter — and the panel underneath tests that number condition by condition, a tick or a cross for each, with the verdict at the top.

This is the membership test made visible. Asking whether something belongs to a set defined this way is never a matter of looking it up in a list; it is a matter of running the condition. That is exactly why the notation can describe sets nobody could finish writing down.

With more than one condition the panel also restates how the verdicts combine, because a candidate can fail one test and still be in the set when the join is **or**.

Testing candidates one at a time is also the fastest way to debug an expression that is returning the wrong set. Pick a number you expected to be a member, read which condition rejected it, and the mistake is usually in that row rather than anywhere else.

Clicking the same chip again clears the selection. Both outcomes have their own frame: [a candidate that passes](!#a-candidate-that-passes) and [a candidate that fails](!#a-candidate-that-fails).`,
      before:``,
      after:``,
      link:'',

    },

    obj6:{
      title:`Reading the Roster Panel`,
      content:`The **Roster form** panel writes the finished set out in braces — the same set the builder expression describes, in the other notation.

Three things can appear there, and each says something different:

• A list of members, when the set is finite and small enough to print.
• The empty-set symbol, when nothing passed. That is an answer, not a failure — see [nothing passes the filter](!#nothing-passes-the-filter).
• A note that the set cannot be listed, when the condition leaves the domain unbounded.

The panel is the honest check on whether you have built what you meant. An expression can look right and produce a roster you did not expect, and the roster is the one that is telling the truth.

It is also the panel that shows how much the two notations differ in reach. For a small finite set the roster is the friendlier of the two; the moment the condition stops bounding the domain, the roster has nothing to offer and the builder expression carries the whole description on its own.

Watch for the single-member case in particular, where the braces matter: [exactly one survivor](!#exactly-one-survivor).`,
      before:``,
      after:``,
      link:'',

    },

    obj7:{
      title:`What Set-Builder Notation Is`,
      content:`**Set-builder notation** defines a set by a rule its members satisfy, rather than by listing them. The standard shape is

$$\\{x \\in D : P(x)\\}$$

read as "the set of all $x$ in $D$ such that $P(x)$". The bar is sometimes written as a colon and sometimes as a vertical stroke; they mean the same thing, and this tool uses the colon.

Three pieces do the work. The **variable** $x$ stands for a candidate. The **domain** $D$ says where candidates come from. The **predicate** $P(x)$ is the test — a statement about $x$ that is either true or false for each one.

The set is exactly the candidates that make the predicate true. Nothing else is implied: the notation does not order the members, does not count repeats, and does not care which rule you used if two rules pick out the same things. For the underlying vocabulary, see **set theory definitions**.`,
      before:``,
      after:``,
      link:'',

    },

    obj8:{
      title:`Why the Domain Matters`,
      content:`Dropping the domain and writing "all $x$ such that $P(x)$" looks like a harmless abbreviation. It is not, and the reason is one of the more famous results in the subject.

Unrestricted comprehension — the assumption that any property whatsoever carves out a set — produces **Russell's paradox**. Take the property of not containing yourself, form the set of everything with that property, and ask whether that set contains itself. Either answer contradicts itself.

The repair adopted by modern set theory is exactly the domain in front of the bar: you may separate out the members of an existing set that satisfy a property, but you may not conjure a set from a property alone. Written properly, every set-builder expression names the set its candidates are drawn from.

The practical consequence is smaller but constant. $\\{x \\in \\mathbb{N} : x^2 < 10\\}$ and $\\{x \\in \\mathbb{Z} : x^2 < 10\\}$ are different sets with identical conditions — the second has four negative members the first cannot reach.`,
      before:``,
      after:``,
      link:'',

    },

    obj9:{
      title:`Conditions as Set Operations`,
      content:`Every logical connective in a condition corresponds to an operation on sets, which is why the bar notation and the operation symbols are not separate topics.

Joining with **and** gives intersection; joining with **or** gives union. Negating a condition gives the complement relative to the domain:

$$\\{x \\in D : \\text{not } P(x)\\} = D \\setminus \\{x \\in D : P(x)\\}$$

That last one is why the complement always needs a domain to be taken relative to. There is no absolute complement, because there is no set of everything.

Difference follows from the same pattern, since $A \setminus B$ keeps what is in $A$ and not in $B$ — a conjunction with a negation in it, exactly as the condition would be written.

The correspondence runs in both directions and is worth using deliberately. A set expression that is awkward to read as operations is often obvious written as a condition, and the reverse happens just as often. For the operations in their own right, see **set operations**.`,
      before:``,
      after:``,
      link:'',

    },

    obj10:{
      title:`When Roster Form Runs Out`,
      content:`Roster form — listing members between braces — works only while there are few enough members to write.

Past that point it starts leaning on an ellipsis, and an ellipsis is an appeal to the reader to guess the rule. $\\{2, 4, 6, \\ldots\\}$ probably means the positive even numbers, but nothing in the notation says so; it could be powers of two continuing $8, 16$. The rule is doing the work either way, and roster form leaves it unstated.

Set-builder notation states the rule instead, so nothing is left to guess:

$$\\{x \\in \\mathbb{N} : x \\text{ is even}\\}$$

This is why the notation is not merely a convenience. Every infinite set you meet is named by a rule like this one, because there is no alternative once the elements run out of room.

The limitation is not really about infinity, either. A finite set of ten thousand members has a roster form in principle and none in practice, and the builder expression that describes it is no longer than the one for three members. The frozen case is [a set too big to list](!#a-set-too-big-to-list).`,
      before:``,
      after:``,
      link:'',

    },

    obj11:{
      title:`Related Concepts and Tools`,
      content:`**Set Theory Definitions** — the vocabulary this page assumes: element, membership, domain, subset.

**Set Operations** — intersection, union, difference, and complement, the operations conditions correspond to.

**Set Notation** — roster form, interval notation, and the symbols used across the subject.

**Cardinality** — finite, countable, and uncountable sets, and why listing stops working.

**Propositional Logic** — the and, or and not that join conditions.

**Power Set Explorer** — every subset of a small set, drawn as a lattice.

**Venn Diagram Generator** — shading set expressions once they are built.`,
      before:``,
      after:``,
      link:'',

    },

    // ---- Per-state sections (Line 1). One per id resolveExplanationId can
    // return, each opening with a frozen frame of the tool in that state. ----

    obj12:{
      title:`An Empty Condition`,
      content:`Remove every condition and the bar has nothing after it. Each candidate is tested against no requirement at all, so each one passes and the whole strip turns green.`,
      before:``,
      after:`The set here is the domain itself: $\\{x \\in \\mathbb{N}\\} = \\mathbb{N}$. That is legal notation, and it is also pointless notation — a filter that filters nothing is a longer way of writing $\\mathbb{N}$.

It is worth seeing once because it isolates what the condition contributes. The domain alone gives you everything; the condition is the only thing that can take members away. Every set you build here is a subset of the domain, never larger, which is the shape of the whole notation in one picture.

Add a condition and candidates start failing immediately — the ordinary case is [one condition and a finite answer](!#the-ordinary-bounded-case).`,
      link:'',

    },

    obj13:{
      title:`Nothing Passes the Filter`,
      content:`Ask for numbers that are both even and odd and every chip stays grey. No candidate in the domain survives, so the roster panel shows the empty-set symbol.`,
      before:``,
      after:`An empty result is an answer rather than an error, and the distinction matters. The expression is well formed, the domain is populated, the conditions are meaningful — they simply cannot hold at once.

Conditions joined by **and** make this easy to arrange, because two incompatible tests give the empty set however large the domain is. Parity is the cleanest example: no integer is both even and odd, so the size of the domain is irrelevant.

This is also how the empty set is usually *proved* to be empty in practice. You rarely check every candidate; you show that the conditions are contradictory, and emptiness follows. Clicking any chip shows the same thing case by case — see [a candidate that fails](!#a-candidate-that-fails).`,
      link:'',

    },

    obj14:{
      title:`A Set Too Big to List`,
      content:`Ask for the even naturals and the filter keeps passing candidates for as long as the strip runs, then the ellipsis says what the strip cannot: the domain continues, and so does the set.`,
      before:``,
      after:`Nothing bounds this condition. Every candidate is tested and infinitely many pass, so no list can finish and the roster panel says so rather than pretending otherwise.

This is where the notation stops being a convenience and becomes a necessity. $\\{x \\in \\mathbb{N} : x \\text{ is even}\\}$ names this set exactly, in eight symbols, with nothing left implicit. Roster form can only gesture at it.

The strip is worth reading carefully here, because it makes the pattern visible without claiming to be complete: every second chip is green, forever. A window onto an infinite set is not the set, and the ellipsis is the tool being honest about the difference. The argument in full is in [when roster form runs out](!#when-roster-form-runs-out).`,
      link:'',

    },

    obj15:{
      title:`Exactly One Survivor`,
      content:`Ask for numbers that are prime and even and exactly one chip lights up. Two is the only even prime, so the set has a single member.`,
      before:``,
      after:`The roster form is $\\{2\\}$, and the braces are not decoration. $2$ is a number; $\\{2\\}$ is a set whose only member is that number, and the two are not interchangeable.

$$2 \\in \\{2\\} \\quad \\text{is true} \\qquad 2 = \\{2\\} \\quad \\text{is not}$$

A set with one member is called a **singleton**, and confusing it with its member is one of the most common slips in early set theory. The distinction becomes unavoidable later: $\\{\\varnothing\\}$ is a singleton whose member is the empty set, so it has one member while $\\varnothing$ has none.

The result here is also a small theorem rather than an accident. Every even number beyond $2$ has $2$ as a proper divisor, so none of them can be prime.`,
      link:'',

    },

    obj16:{
      title:`A Candidate That Passes`,
      content:`With the primes selected, clicking $7$ tests it and reports the verdict: a tick against the condition, and $7$ is in the set.`,
      before:``,
      after:`This is the entire membership test, performed rather than looked up. $7$ comes from the domain, the condition is applied to it, and the answer decides membership. There is no list being consulted anywhere.

That is the property that lets set-builder notation describe sets no one could write down. Membership in $\\{x \\in \\mathbb{N} : x \\text{ is prime}\\}$ is decidable for any candidate you name, however large, even though the set is infinite and no roster exists.

Note also what the tick does *not* say. It reports that this candidate satisfies the condition, not that the condition is a good description of the set you had in mind. The tool checks your expression; it cannot check your intention. The opposite verdict is at [a candidate that fails](!#a-candidate-that-fails).`,
      link:'',

    },

    obj17:{
      title:`A Candidate That Fails`,
      content:`Clicking $9$ with the same condition gives a cross. It is a perfectly good natural number, and it is not in the set.`,
      before:``,
      after:`Being in the domain and being in the set are different things, and the failing chips are the difference made visible. Grey candidates are not errors and not outsiders — they were tested and rejected.

That is the second gate at work. The domain decided $9$ was worth testing; the condition decided it does not stay. Both gates are needed, and skipping the distinction is what makes set-builder expressions confusing to read at first.

With several conditions the panel names which ones failed, which matters when the join is **or**, because failing one test is survivable there and fatal under **and**.

A third possibility exists and looks similar at a glance: a number that never gets tested at all, at [a number outside the domain](!#a-number-outside-the-domain).`,
      link:'',

    },

    obj18:{
      title:`A Number Outside the Domain`,
      content:`With the domain set to $\\mathbb{N}$ and the condition $x < 10$, the number $-4$ satisfies the condition perfectly. It is still not in the set, and it is not even on the strip.`,
      before:``,
      after:`This is the case people skip. A set-builder expression has two gates, and the domain is the first one. Something can pass the condition and still be excluded for coming from the wrong place, because the condition is never applied to it at all.

Switch the domain to $\\mathbb{Z}$ without touching the condition and $-4$ appears among the candidates and passes. Same condition, different set — which is the whole argument for [why the domain matters](!#why-the-domain-matters), and the practical face of the restriction that keeps the notation free of paradox.

The distinction is worth stating in three parts, because the middle one is easy to lose: a number can be outside the domain, or inside the domain and failing, or inside and passing. Only the last is a member.`,
      link:'',

    },

    obj19:{
      title:`Two Conditions Joined by And`,
      content:`Even numbers below twelve: two conditions, joined by **and**, so a candidate has to pass both. Five chips survive out of the window shown.`,
      before:``,
      after:`Joining with **and** is intersection, exactly:

$$\\{x \\in D : P(x) \\text{ and } Q(x)\\} = \\{x \\in D : P(x)\\} \\cap \\{x \\in D : Q(x)\\}$$

The left-hand side filters once with a compound test; the right-hand side filters twice and keeps what both runs agree on. Same members, and the equality is not a rule to memorise so much as a restatement of what "and" does.

Adding a condition under **and** can only shrink the set or leave it unchanged, never grow it — each new test is another way to be excluded. That monotonicity is worth carrying around: if a set is already empty, no further **and** condition will repopulate it.

Flip the switch and the same two conditions give [the union instead](!#two-conditions-joined-by-or).`,
      link:'',

    },

    obj20:{
      title:`Two Conditions Joined by Or`,
      content:`The same two conditions — even, and below twelve — joined by **or**. Now passing either one is enough, and eighteen of the twenty-four candidates survive.`,
      before:``,
      after:`Joining with **or** is union:

$$\\{x \\in D : P(x) \\text{ or } Q(x)\\} = \\{x \\in D : P(x)\\} \\cup \\{x \\in D : Q(x)\\}$$

The **or** here is inclusive: a candidate passing both tests is still in the set, and still counted once. Sets carry no multiplicities, so there is nothing to double up.

That single fact is the reason counting unions needs a correction term while counting a filtered list does not. $|A \\cup B| = |A| + |B| - |A \\cap B|$ subtracts the overlap precisely because the union already merged it, and the chips show why — the numbers that are both even and below twelve are green once, not twice.

Compare the same pair [under and](!#two-conditions-joined-by-and), where the five overlapping candidates are the entire set rather than the part that needs correcting.`,
      link:'',

    },

    obj21:{
      title:`The Ordinary Bounded Case`,
      content:`One condition, $x < 4$, over the naturals. Three candidates pass, the rest go grey, and the roster panel can print the answer in full: $\\{1, 2, 3\\}$.`,
      before:``,
      after:`This is the case where both notations are available, and comparing them is the point. $\\{x \\in \\mathbb{N} : x < 4\\}$ and $\\{1, 2, 3\\}$ are the same set. Not equivalent, not corresponding — the same, and a set does not remember which notation named it.

Which one to write is a question of what you can afford. Roster form is concrete and needs no reading; builder form is compact and survives the set getting large. For three members the roster wins on clarity. Push the bound to $x < 4000$ and it stops being an option while the builder expression does not change shape at all.

That is the ordinary working state of the notation, and everything else on this page is a way it can go differently: nothing passing, one thing passing, or too many things passing to write down.`,
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
  const d = setBuilderDiagrams
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text })
  const stateUnits = {
    'no-conditions': u('no-conditions', 'No condition after the bar, frozen',
      'Every candidate passes a test that asks for nothing, so the set is the domain itself.'),
    'empty-result': u('empty-result', 'Even and odd at once, frozen',
      'Not one chip survives. Two conditions that cannot both hold give the empty set however large the domain is.'),
    'infinite-result': u('infinite-result', 'The even naturals, frozen',
      'Every second chip is green and the ellipsis carries the pattern past the window. No list can finish this set.'),
    'singleton-result': u('singleton-result', 'Prime and even, frozen',
      'One chip. Two is the only even prime, so the set is a singleton &#8212; and &#123;2&#125; is not the same object as 2.'),
    'candidate-passes': u('candidate-passes', '7 tested against the primes, frozen',
      'The chip is outlined and the verdict is a tick: 7 comes from the domain and satisfies the condition.'),
    'candidate-fails': u('candidate-fails', '9 tested against the primes, frozen',
      'A good natural number, rejected. Grey chips were tested and failed &#8212; they are not outsiders.'),
    'candidate-outside': u('candidate-outside', '&#8722;4 against a domain of &#8469;, frozen',
      'It satisfies x &#60; 10 and is still excluded, because the domain never offers it for testing.'),
    'and-join': u('and-join', 'Even and below twelve, frozen',
      'Five survivors. Under and, each extra condition is another way to be excluded, so the set can only shrink.'),
    'or-join': u('or-join', 'Even or below twelve, frozen',
      'Eighteen survivors. Candidates passing both tests are green once &#8212; sets carry no multiplicities.'),
    'general': u('general', 'x &#60; 4 over the naturals, frozen',
      'Three green chips, and a roster short enough to print. Both notations describe this set equally well.'),
  }

  // Panel notes (Line 1). The component keeps its own dynamic explanation
  // bodies; these add the anchor down to each state's dedicated section and
  // are SSR-visible from here. Keys match resolveExplanationId.
  const notes = {
    'no-conditions': `The domain alone gives you everything; the condition is the only thing that can take members away. [Learn more about an empty condition](!#an-empty-condition) · [Getting started](!#getting-started)`,
    'empty-result': `Emptiness is usually proved by showing the conditions are contradictory, not by checking every candidate. [Learn more about nothing passing](!#nothing-passes-the-filter) · [Reading the roster panel](!#reading-the-roster-panel)`,
    'infinite-result': `An ellipsis in roster form asks the reader to guess the rule; set-builder notation states it, so nothing is left to guess. [Learn more about a set too big to list](!#a-set-too-big-to-list) · [When roster form runs out](!#when-roster-form-runs-out)`,
    'singleton-result': `A set with one member is not that member — $\\{\\varnothing\\}$ has one element while $\\varnothing$ has none. [Learn more about a single survivor](!#exactly-one-survivor) · [Reading the roster panel](!#reading-the-roster-panel)`,
    'candidate-passes': `Membership is decided by running the condition, which is why the notation can describe sets no one could list. [Learn more about a passing candidate](!#a-candidate-that-passes) · [Testing a candidate](!#testing-a-candidate)`,
    'candidate-fails': `Being in the domain and being in the set are different things, and the grey chips are that difference. [Learn more about a failing candidate](!#a-candidate-that-fails) · [Testing a candidate](!#testing-a-candidate)`,
    'candidate-outside': `Changing the domain changes the set even when the condition is untouched: $\\{x \\in \\mathbb{N} : x^2 < 10\\}$ and $\\{x \\in \\mathbb{Z} : x^2 < 10\\}$ differ by four negative numbers. [Learn more about a number outside the domain](!#a-number-outside-the-domain) · [Choosing the domain](!#choosing-the-domain)`,
    'and-join': `Under and the set can only shrink as conditions are added, so an empty set stays empty. [Learn more about joining with and](!#two-conditions-joined-by-and) · [Joining conditions](!#joining-conditions-with-and-or-or)`,
    'or-join': `A candidate passing both tests is counted once, which is the same fact that makes a union need a correction term. [Learn more about joining with or](!#two-conditions-joined-by-or) · [Joining conditions](!#joining-conditions-with-and-or-or)`,
    'general': `The domain is not decoration — dropping it and writing all $x$ such that is precisely what Russell’s paradox exploits. [Learn more about the ordinary case](!#the-ordinary-bounded-case) · [Adding conditions](!#adding-conditions)`,
  }

  const faqQuestions = {
    obj1: {
      question: "What is set-builder notation?",
      answer: "Set-builder notation defines a set by a rule its members satisfy instead of by listing them. It is written as the set of all x in D such that P of x, where D is the domain the candidates come from and P is the condition each one has to pass."
    },
    obj2: {
      question: "How do you read set-builder notation?",
      answer: "Read the bar as such that. The part before it names the variable and the domain, and the part after it is the test. So the set of all x in the natural numbers such that x is even describes the positive even numbers."
    },
    obj3: {
      question: "Why does set-builder notation need a domain?",
      answer: "Because assuming any property whatsoever carves out a set leads to Russell's paradox. Modern set theory allows separating the members of an existing set that satisfy a property, which is why every well-formed expression names the set its candidates are drawn from."
    },
    obj4: {
      question: "How do I convert set-builder notation to roster form?",
      answer: "Test each candidate in the domain against the condition and list the ones that pass. This works only when the result is finite and small. If the condition leaves the domain unbounded there is no roster form, and the builder expression is the only exact description."
    },
    obj5: {
      question: "What do and and or mean between two conditions?",
      answer: "Joining two conditions with and gives the intersection of the two sets they define, since a candidate must pass both. Joining with or gives the union, since passing either is enough. The or is inclusive, and a candidate passing both is still counted once."
    }
  }

  const seoData = {
    title: "Set-Builder Notation Explorer | Build Sets by Rule",
    description: "Build a set from a domain and a condition, watch each candidate get tested, and see the roster form appear live. Interactive set-builder notation tool.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/set-builder",
    name: "Set-Builder Notation Explorer",
    hubDescription: "Assemble a set-builder expression one piece at a time: choose a domain, add conditions such as even, prime or less than, and join them with and or or. Every candidate in the domain appears as a chip that turns green when it passes, clicking one shows it tested condition by condition, and a roster panel prints the finished set — or says why it cannot be listed.",
    category: "Set Notation",
    subCategory: "Set-Builder",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="8" width="70" height="16" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="40" y="19.5" font-family="Georgia,serif" font-size="9" fill="#042C53" text-anchor="middle" font-style="italic">{ x | x even }</text><rect x="5" y="34" width="10" height="12" rx="2" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.9"/><rect x="17" y="34" width="10" height="12" rx="2" fill="#C0DD97" stroke="#3B6D11" stroke-width="1.1"/><rect x="29" y="34" width="10" height="12" rx="2" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.9"/><rect x="41" y="34" width="10" height="12" rx="2" fill="#C0DD97" stroke="#3B6D11" stroke-width="1.1"/><rect x="53" y="34" width="10" height="12" rx="2" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.9"/><rect x="65" y="34" width="10" height="12" rx="2" fill="#C0DD97" stroke="#3B6D11" stroke-width="1.1"/><text x="10" y="42.5" font-family="Georgia,serif" font-size="7" fill="#888780" text-anchor="middle">1</text><text x="22" y="42.5" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle">2</text><text x="34" y="42.5" font-family="Georgia,serif" font-size="7" fill="#888780" text-anchor="middle">3</text><text x="46" y="42.5" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle">4</text><text x="58" y="42.5" font-family="Georgia,serif" font-size="7" fill="#888780" text-anchor="middle">5</text><text x="70" y="42.5" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle">6</text><rect x="16" y="56" width="48" height="16" rx="3" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="40" y="67.5" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle" font-style="italic">{2, 4, 6}</text></svg>`,
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
        "Build a set-builder expression from a domain and one or more conditions",
        "Domains covering the naturals, the naturals with zero, the integers, and a custom finite set",
        "Predicates for comparisons, between, parity, primality, perfect squares, divisibility, and squared bounds",
        "And / or joining, demonstrating intersection and union of the sets each condition defines",
        "A candidate strip where passing members are highlighted and failing candidates stay visible",
        "Click any candidate to see it tested condition by condition with a verdict for each",
        "Live roster form, including the empty set and a notice when the set is too large to list"
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
          "name": "Set-Builder Notation Explorer",
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

export default function SetBuilderPage({seoData, sectionsContent, introContent, instructions, faqQuestions, schemas, stateUnits, notes}) {

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
    stateRow('obj12', 'an-empty-condition', 'no-conditions'),

    plain('obj2', 'choosing-the-domain'),
    stateRow('obj18', 'a-number-outside-the-domain', 'candidate-outside'),

    plain('obj3', 'adding-conditions'),
    stateRow('obj21', 'the-ordinary-bounded-case', 'general'),

    plain('obj4', 'joining-conditions-with-and-or-or'),
    stateRow('obj19', 'two-conditions-joined-by-and', 'and-join'),
    stateRow('obj20', 'two-conditions-joined-by-or', 'or-join'),

    plain('obj5', 'testing-a-candidate'),
    stateRow('obj16', 'a-candidate-that-passes', 'candidate-passes'),
    stateRow('obj17', 'a-candidate-that-fails', 'candidate-fails'),

    plain('obj6', 'reading-the-roster-panel'),
    stateRow('obj13', 'nothing-passes-the-filter', 'empty-result'),
    stateRow('obj15', 'exactly-one-survivor', 'singleton-result'),

    plain('obj7', 'what-set-builder-notation-is'),
    plain('obj8', 'why-the-domain-matters'),
    plain('obj9', 'conditions-as-set-operations'),

    plain('obj10', 'when-roster-form-runs-out'),
    stateRow('obj14', 'a-set-too-big-to-list', 'infinite-result'),

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set-Builder Notation Explorer</h1>
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
   <SetBuilderExplorer showIntro={false} notes={notes}/>
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
