import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import SpanMembershipWrapper from '../../../../app/components/linear-algebra copy/matrix/SpanMembershipWrapper'
import spanMembershipDiagrams from '../../../../app/components/linear-algebra copy/matrix/spanMembershipDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'span of vectors',
    'is a vector in the span',
    'linear combination of vectors',
    'subspace membership',
    'coordinates relative to a basis',
    'coordinate vector',
    'linear independence test',
    'dimension of span',
    'span calculator step by step',
    'vector in span calculator',
    'basis of a span',
    'consistent system linear combination',
    'row reduction span',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Span** — the set of all [linear combinations](!/linear-algebra/vectors/linear-combinations#1) $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k$; the smallest [subspace](!/linear-algebra/vector-spaces/subspaces#1) containing the [vectors](!/linear-algebra/vectors#1).

**Membership** — $\\mathbf{w} \\in \\operatorname{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ exactly when $V\\mathbf{c} = \\mathbf{w}$ has a solution, where $V$ has the $\\mathbf{v}_i$ as columns.

**Coordinates** — the solution $\\mathbf{c}$; unique when the $\\mathbf{v}_i$ are independent, in which case $\\mathbf{c}$ is the [coordinate vector](!/linear-algebra/vector-spaces#4) of $\\mathbf{w}$ in the basis $\\{\\mathbf{v}_i\\}$.

**Dimension of the span** — the rank of $V$; the number of [pivot](!/linear-algebra/linear-systems/echelon-form#4) columns.

**Linear independence** — rank equal to $k$; no vector is a combination of the others.

**Dependency** — a relation $\\mathbf{v}_f = \\sum c_i\\mathbf{v}_i$ read from a free column of the reduced form.

**Basis of the span** — the pivot vectors; the dependent ones can be dropped without shrinking the span.

**Augmented matrix** — $[V \\mid \\mathbf{w}]$, whose reduction decides consistency.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Enter spanning vectors and a test vector, then watch two row reductions answer three questions.

• Use the **Preset** pills for seven problems: a vector in a plane, a vector off that plane, a vector on a line, a dependent spanning set, a basis of $\\mathbb{R}^3$, a plane in $\\mathbb{R}^4$, and the zero vector
• Use the **space** stepper for $\\mathbb{R}^2$ to $\\mathbb{R}^4$ and the **vectors** stepper for one to four spanning vectors; **Shuffle** gives random vectors with $\\mathbf{w}$ usually in the span
• Edit any entry of the vectors or of $\\mathbf{w}$ directly; $\\mathbf{w}$ is the amber column
• Hover the **?** icon for a reminder of how membership becomes a linear system
• Press play or step manually; the step log on the right keeps every stage

The three questions are: how big is the span, is $\\mathbf{w}$ in it, and if so what are its coordinates. The answers come from the rank of $V$, the consistency of $[V \\mid \\mathbf{w}]$, and its solution.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook procedure exactly.

• **Setup** — the vectors as the columns of $V$ and the test vector $\\mathbf{w}$; the question $V\\mathbf{c} = \\mathbf{w}$
• **Rank** — $V$ row reduced; the rank is the dimension of the span, and each free column gives a dependency $\\mathbf{v}_f = \\sum c_i\\mathbf{v}_i$ read from the reduced form
• **Membership** — $[V \\mid \\mathbf{w}]$ row reduced; a pivot in the last column means $\\mathbf{w}$ is not in the span, and the rank of the enlarged set has gone up by one
• **Not in the span** — the run stops with the enlarged rank and a pointer to the projection
• **Coordinates** — the coefficients read from the reduced form, free ones set to zero, checked by multiplying $V\\mathbf{c}$; the dependency vectors are listed when the coordinates are not unique
• **Done** — the summary: dimension, basis, membership and coordinates`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one step with the reasoning in the caption.

• Each spanning vector keeps its own colour as a column of $V$ and as an entry of the coefficient vector $\\mathbf{c}$
• $\\mathbf{w}$ is amber throughout, in the matrices and in the input grid
• In the reduced form of $V$ the pivots are accent and the free columns muted, since those columns are the dependent vectors
• In the reduced form of $[V \\mid \\mathbf{w}]$ a pivot in the last column is muted: it is the mark of inconsistency
• The check $V\\mathbf{c}$ is drawn as the target, matching $\\mathbf{w}$
• Coefficients come out as fractions when they are not integers`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Problem`,
      content: `The seven presets each make a different point.

• **In a plane** — $\\mathbf{v}_1 = (1, 0, 1)$, $\\mathbf{v}_2 = (0, 1, 1)$ and $\\mathbf{w} = (2, 3, 5) = 2\\mathbf{v}_1 + 3\\mathbf{v}_2$; unique coordinates $(2, 3)$
• **Off the plane** — the same vectors and $\\mathbf{w} = (1, 1, 1)$, which does not satisfy the plane's equation $x + y = z$
• **On a line** — a single vector and a multiple of it; the span is a line and the coordinate is the multiple
• **Dependent set** — $\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$; the span is still a plane, and $\\mathbf{w}$ has infinitely many coordinate vectors
• **A basis of $\\mathbb{R}^3$** — three independent vectors; every $\\mathbf{w}$ is in the span, with unique coordinates
• **A plane in $\\mathbb{R}^4$** — two vectors in four dimensions; the same test in a space that cannot be drawn
• **$\\mathbf{w} = \\mathbf{0}$** — always in the span, with all coefficients zero

Shuffle picks random small-integer vectors and, most of the time, a $\\mathbf{w}$ built as a combination of them.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What Span and Membership Mean`,
      content: `The span of $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ is the set of every vector that can be built from them by scaling and adding:

$$\\operatorname{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k\\}$$

It is a subspace, a line, a plane, or more, through the origin, and it is the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2) of the [matrix](!/linear-algebra/matrix#1) $V$ whose columns are the $\\mathbf{v}_i$, because $V\\mathbf{c}$ is exactly the combination with coefficients $\\mathbf{c}$.

That identification turns every question about the span into a question about a linear system. A vector $\\mathbf{w}$ is in the span if and only if $V\\mathbf{c} = \\mathbf{w}$ has a solution, which row reduction of $[V \\mid \\mathbf{w}]$ decides: consistent means in, a pivot in the last column means out. When it is in, the solution $\\mathbf{c}$ lists the coefficients, and if the $\\mathbf{v}_i$ are independent there is exactly one such $\\mathbf{c}$, the coordinate vector of $\\mathbf{w}$ relative to the basis $\\{\\mathbf{v}_i\\}$.

The size of the span is the rank of $V$. If the rank is $k$, the vectors are independent and form a basis of their span. If the rank is less, some columns are free, and the reduced form shows each free vector as a combination of the pivot vectors; those pivot vectors alone are a basis, and the coordinates of any $\\mathbf{w}$ are unique only after the dependent vectors are dropped.

The whole subject of bases, dimension and coordinates is contained in this one computation. For the theory, see the [span page](!/linear-algebra/vector-spaces/span), the [linear independence page](!/linear-algebra/vector-spaces/linear-independence) and the [basis page](!/linear-algebra/vector-spaces/basis).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts about spans and membership.

• **Span is a subspace**: closed under addition and scaling, and it always contains $\\mathbf{0}$
• **Span equals column space**: $\\operatorname{span}\\{\\mathbf{v}_i\\} = C(V)$, so membership is consistency of $V\\mathbf{c} = \\mathbf{w}$
• **Dimension equals rank**: the number of pivot columns of $V$
• **Independence** means rank $k$; then coordinates are unique and the $\\mathbf{v}_i$ are a basis of the span
• **Dependence** shows up as free columns; each gives a relation among the vectors, and the coordinates of any $\\mathbf{w}$ form a whole family differing by null-space vectors of $V$
• **Adding a vector** to the set either leaves the span unchanged, when the vector was already in it, or raises the dimension by one
• **$k$ vectors in $\\mathbb{R}^n$** with $k > n$ are always dependent; with $k < n$ they never span $\\mathbb{R}^n$; a basis needs exactly $n$
• **Removing dependent vectors** does not shrink the span
• **Every subspace** is the span of some finite set, and every spanning set contains a basis`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Membership in a span is the basic decision problem of linear algebra.

• **Solvability**: $A\\mathbf{x} = \\mathbf{b}$ is solvable exactly when $\\mathbf{b}$ is in the span of the columns of $A$
• **Coordinates and change of basis**: expressing a vector in a new basis is solving $V\\mathbf{c} = \\mathbf{w}$ with the basis vectors as columns
• **Reachability**: in control theory, whether a state can be reached is whether it lies in the span of the controllability directions
• **Signal representation**: whether a signal can be built from a dictionary of basis functions, and with what coefficients
• **Dimension counting**: the rank test tells how many of a set of measurements, features or constraints are genuinely different
• **Geometry**: a point lies on a plane through the origin exactly when its position vector is in the plane's span
• **Foundations**: the definitions of basis, dimension, subspace and linear map all rest on span and independence`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset: $\\mathbf{v}_1 = (1, 0, 1)$, $\\mathbf{v}_2 = (0, 1, 1)$ and $\\mathbf{w} = (2, 3, 5)$.

**Rank.** $V = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$ reduces to $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$: rank $2$. The span is a plane in $\\mathbb{R}^3$, the vectors are independent, and they form a basis of it. The plane is $x + y = z$, since $(c_1, c_2, c_1 + c_2)$ is the general combination.

**Membership.** $[V \\mid \\mathbf{w}] = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 3 \\\\ 1 & 1 & 5 \\end{pmatrix}$; subtracting the first two rows from the third gives $(0, 0, 0)$, so the reduced form is $\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 0 \\end{pmatrix}$ with no pivot in the last column. Consistent: $\\mathbf{w}$ is in the plane, as $2 + 3 = 5$ confirms.

**Coordinates.** $c_1 = 2$, $c_2 = 3$: $\\mathbf{w} = 2\\mathbf{v}_1 + 3\\mathbf{v}_2 = (2, 0, 2) + (0, 3, 3) = (2, 3, 5)$. Unique, because the vectors are independent.

**Contrast.** For $\\mathbf{w} = (1, 1, 1)$ the third row of the reduction becomes $(0, 0, -1)$, a pivot in the last column: $1 + 1 \\neq 1$, the vector is off the plane, and adding it to the set raises the rank to $3$.

**Dependent set.** With $\\mathbf{v}_3 = (1, 2, 1) = \\mathbf{v}_1 + \\mathbf{v}_2$ added, $V$ reduces to $\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$: still rank $2$, third column free, and the relation $\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$ is read from it. Then $\\mathbf{w} = (2, 3, 1) = 2\\mathbf{v}_1 + \\mathbf{v}_2$, but also $\\mathbf{v}_1 + \\mathbf{v}_3$, and $(2, 1, 0) + t(-1, -1, 1)$ for any $t$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Putting the vectors in as rows** — membership of $\\mathbf{w}$ needs the vectors as columns of $V$, so that $V\\mathbf{c}$ is a combination of them; rows would test something else
• **Judging membership by eye** — a vector can look "similar" to the spanning vectors and still be outside the span; only the reduction decides
• **Forgetting the zero vector** — $\\mathbf{0}$ is in every span, with all coefficients zero; a set that does not contain $\\mathbf{0}$ is not a subspace
• **Reading coordinates from a dependent set as unique** — with free columns there are infinitely many coefficient vectors; the tool sets the free ones to zero and says so
• **Confusing span with the set of vectors** — the span of two vectors in $\\mathbb{R}^3$ is a whole plane, not two arrows
• **Assuming $k$ vectors span a $k$-dimensional space** — only if they are independent; the dimension is the rank
• **Expecting three vectors in $\\mathbb{R}^3$ to be a basis** — they might be dependent; the rank must be $3$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Span and independence in 2D](!/linear-algebra/visual-tools/span-independence-2d) — the geometric picture of the same test in the plane, with draggable vectors.

[Linear system solutions](!/linear-algebra/visual-tools/linear-system-solutions) — membership is consistency, and the coordinates are the solution.

[Four fundamental subspaces](!/linear-algebra/visual-tools/four-fundamental-subspaces) — the span is the column space of $V$; the dependencies are its null space.

[Matrix rank](!/linear-algebra/visual-tools/matrix-rank) — the dimension of the span; the rank tool shows the elimination in detail.

[Vector linear combination](!/linear-algebra/visual-tools/vector-linear-combination) — building $\\mathbf{w}$ from the $\\mathbf{v}_i$ once the coefficients are known.

[Basis and change of basis](!/linear-algebra/visual-tools/change-basis-2d) — coordinates relative to a basis, and converting between bases.

[Least squares](!/linear-algebra/visual-tools/least-squares) — what to do when $\\mathbf{w}$ is not in the span: project it there.

[Gram–Schmidt](!/linear-algebra/visual-tools/gram-schmidt) — replacing a basis of the span by an orthonormal one.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Sizing the Span`,
      content: `The frozen picture below shows $V$ for the default preset reduced: two pivots, rank $2$. The span of $(1, 0, 1)$ and $(0, 1, 1)$ is a plane in $\\mathbb{R}^3$, and the two vectors are independent.

The rank is the dimension, and independence means every column is a pivot column.`,
      before: ``,
      after: `Reducing $V$ first is not strictly needed for the membership question, but it tells you what to expect. Rank equal to the number of vectors means unique coordinates; rank less means some vectors are redundant and the reduced form names them. Rank equal to the dimension of the space means the span is everything, and any $\\mathbf{w}$ will be in it.

The plane here can be described either way: as the span, all $(c_1, c_2, c_1 + c_2)$, or by the equation $x + y = z$. The membership test is the bridge between the two descriptions.`,
      link: '',
    },
    obj12: {
      title: `The Membership Test`,
      content: `The frozen picture below shows $[V \\mid \\mathbf{w}]$ for $\\mathbf{w} = (2, 3, 5)$ reduced: the last row becomes all zeros, no pivot in the amber column. $\\mathbf{w}$ is in the span.

The rank of the enlarged set is still $2$; $\\mathbf{w}$ added no new direction.`,
      before: ``,
      after: `The test is the consistency test for linear systems, applied to $V\\mathbf{c} = \\mathbf{w}$. Row operations preserve solutions, and in the reduced form a row of the shape $(0, \\ldots, 0 \\mid b)$ with $b \\neq 0$ is an equation $0 = b$ with no solution; its absence means a solution exists.

Equivalently, $\\mathbf{w}$ is in the span exactly when $\\operatorname{rank}[V \\mid \\mathbf{w}] = \\operatorname{rank} V$. Adding a vector to a spanning set either changes nothing or raises the rank by one, and the augmented reduction shows which.`,
      link: '',
    },
    obj13: {
      title: `Reading the Coordinates`,
      content: `The frozen picture below shows the coordinates for the default preset: $\\mathbf{c} = (2, 3)$, and the check $V\\mathbf{c} = 2(1, 0, 1) + 3(0, 1, 1) = (2, 3, 5) = \\mathbf{w}$.

Because the vectors are independent, these are the only coordinates.`,
      before: ``,
      after: `The coordinate vector is the solution of the system, read from the reduced augmented matrix: each pivot row gives one coefficient. When the reduced form of $V$ is the identity on top, as here, the coefficients are simply the entries of the reduced $\\mathbf{w}$ column.

Coordinates relative to a basis are what make a basis useful. Once $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is chosen for the plane, every vector in it is a pair of numbers, and the plane behaves exactly like $\\mathbb{R}^2$. Changing to a different basis of the same plane is solving the same kind of system with different columns.`,
      link: '',
    },
    obj14: {
      title: `Not in the Span`,
      content: `For $\\mathbf{w} = (1, 1, 1)$ the frozen picture below shows the reduction of $[V \\mid \\mathbf{w}]$ ending with a pivot in the last column: the third row reads $0 = -1$.

The vector is off the plane, since $1 + 1 \\neq 1$, and adding it to the set raises the rank to $3$.`,
      before: ``,
      after: `A vector outside the span cannot be written as a combination, no matter what coefficients are tried, and the failed row is the proof. The enlarged set $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{w}\\}$ is then independent and, here, a basis of all of $\\mathbb{R}^3$.

What can be done with such a $\\mathbf{w}$ is to find the point of the span nearest to it, its orthogonal projection, which is the least-squares problem. The difference between $\\mathbf{w}$ and its projection is perpendicular to the span and measures how far outside the vector lies.`,
      link: '',
    },
    obj15: {
      title: `A Dependent Spanning Set`,
      content: `The dependent preset adds $\\mathbf{v}_3 = (1, 2, 1)$ to the plane's two vectors. The frozen picture below shows $V$ reduced: still rank $2$, with the third column free and the relation $\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$ read from its entries.

The span has not grown, and the coordinates of any vector in it are no longer unique.`,
      before: ``,
      after: `A free column in the reduced form of $V$ is a vector that the pivot vectors already produce, and its column of the reduced form lists the coefficients. Dropping every such vector leaves a basis of the same span; keeping them costs uniqueness, since any dependency can be added to a coordinate vector without changing the combination.

For $\\mathbf{w} = (2, 3, 1)$ the tool reports $2\\mathbf{v}_1 + \\mathbf{v}_2$ with the free coefficient set to zero, and notes that adding multiples of $(-1, -1, 1)$, the dependency, gives the others.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from SpanMembershipWrapper's own buildScenes on the default preset
     (and the off-plane and dependent presets for their special scenes) and
     rendered through frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: spanMembershipDiagrams[key], caption, text })

  const stateUnits = {
    rank: unit('rank', 'Rank of V, frozen',
      'v&#8321; = (1, 0, 1) and v&#8322; = (0, 1, 1) as columns, reduced to two pivots: rank 2, a plane, independent vectors. ' +
      'The plane is x + y = z.'),
    membership: unit('membership', 'Membership test, frozen',
      '[V | w] for w = (2, 3, 5): the last row reduces to zeros, no pivot in the amber column. w is in the plane; ' +
      'indeed 2 + 3 = 5.'),
    coords: unit('coords', 'Coordinates, frozen',
      'c = (2, 3), and V c = 2(1, 0, 1) + 3(0, 1, 1) = (2, 3, 5) = w. Unique, because the two vectors are independent.'),
    notin: unit('notin', 'Not in the span, frozen',
      '[V | w] for w = (1, 1, 1): a pivot lands in the amber column, the row 0 = &minus;1. Off the plane, since ' +
      '1 + 1 &ne; 1; the enlarged set has rank 3.'),
    dependent: unit('dependent', 'A dependent set, frozen',
      'With v&#8323; = (1, 2, 1) added, V still has rank 2; the third column is free and reads v&#8323; = v&#8321; + v&#8322;. ' +
      'The span is the same plane, and coordinates are no longer unique.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     SpanMembershipWrapper accepts an explanations prop keyed by scene
     phase: intro, rank, membership, notin, coords, done. Captions render
     with dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-span-and-membership-mean" style="color:#1d4ed8;font-weight:600">what span means</a></div>`

  const explanations = {
    intro: note('The span is the column space of V; membership is solvability of V c = w.', 'sizing-the-span', 'Learn more about the setup'),
    rank: note('Rank = dimension; free columns name the redundant vectors.', 'sizing-the-span', 'Learn more about the rank'),
    membership: note('A pivot in the last column is a row 0 = b: no combination exists.', 'the-membership-test', 'Learn more about the test'),
    notin: note('w raises the rank by one; its nearest point in the span is a projection.', 'not-in-the-span', 'Learn more about the outside case'),
    coords: note('The solution is the coordinate vector; unique iff the v&#7522; are independent.', 'reading-the-coordinates', 'Learn more about coordinates'),
    done: note('Dimension, membership, coordinates: one row reduction each.', 'a-dependent-spanning-set', 'Learn more about dependent sets'),
  }


  const faqQuestions = {
    obj1: {
      question: "How do you check whether a vector is in the span of other vectors?",
      answer: "Put the spanning vectors as the columns of a matrix V and ask whether V c = w has a solution, since V c is exactly the combination with coefficients c. Row reduce the augmented matrix [V | w]: if no pivot lands in the last column the system is consistent and w is in the span; if a pivot does land there, some row reads 0 = b with b nonzero, and w is not in the span. Equivalently, w is in the span exactly when the rank of [V | w] equals the rank of V."
    },
    obj2: {
      question: "What are the coordinates of a vector relative to a basis?",
      answer: "If v₁, …, vₖ are a basis of a subspace and w is in it, the coordinates of w are the unique coefficients c with w = c₁v₁ + ⋯ + cₖvₖ. They are found by solving V c = w, which row reduction of [V | w] does; each pivot row yields one coefficient. Uniqueness holds because the basis vectors are independent, so the system has at most one solution."
    },
    obj3: {
      question: "How do you find the dimension of a span?",
      answer: "The dimension of span{v₁, …, vₖ} is the rank of the matrix V whose columns are the vectors, which is the number of pivot columns in its reduced row echelon form. If the rank is k the vectors are independent and form a basis of the span; if it is less, the free columns correspond to vectors that are combinations of the pivot vectors, and the pivot vectors alone are a basis."
    },
    obj4: {
      question: "What happens when the spanning vectors are dependent?",
      answer: "The span is smaller than the number of vectors suggests, and coordinates are no longer unique. The reduced form of V has free columns, and each free column expresses one vector as a combination of the pivot vectors. Any w in the span then has infinitely many coefficient vectors, differing by multiples of these dependency relations; the tool reports the one with the free coefficients set to zero and lists the dependencies. Dropping the dependent vectors restores a basis and unique coordinates."
    },
    obj5: {
      question: "What can you do with a vector that is not in the span?",
      answer: "No coefficients reproduce it, but the point of the span closest to it exists and is unique: its orthogonal projection onto the span, computed by least squares as V (VᵀV)⁻¹ Vᵀ w when the spanning vectors are independent. The difference between the vector and its projection is perpendicular to the span and measures how far outside it lies. Adding the vector to the spanning set enlarges the span by one dimension."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Span and Membership Visualizer",
      "description": "Step-by-step visualizer that decides whether a vector lies in the span of given vectors in R² to R⁴: the rank of V for the dimension of the span and any dependencies, the reduction of [V | w] for membership, and the coordinates read off and checked.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/span-membership",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "One to four editable spanning vectors in R² to R⁴ and an editable test vector, seven presets and a shuffle",
        "Rank of V as the dimension of the span, with dependencies read from free columns",
        "Membership decided by row reducing [V | w]",
        "Coordinates read off and verified by multiplying V c",
        "Non-unique coordinates explained with the dependency vectors",
        "The out-of-span case reported with the enlarged rank",
        "Adjustable playback speed and scrollable step log"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2026-09-12",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "College",
      "keywords": "span of vectors, is a vector in the span, linear combination of vectors, subspace membership, coordinates relative to a basis, coordinate vector, linear independence test, dimension of span, span calculator step by step, vector in span calculator, basis of a span, consistent system linear combination, row reduction span, linear algebra visualizer, interactive matrix tool"
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
          "name": "Linear Algebra",
          "item": "https://www.learnmathclass.com/linear-algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Span and Membership",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/span-membership"
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


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  return {
    props: {
      relatedTools: getRelatedTools('linear-algebra-span-membership'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Span and Membership Visualizer | Is a Vector in the Span?",
        description: "Decide step by step whether a vector lies in the span of given vectors: the rank of V for the dimension and dependencies, the reduction of [V | w] for membership, and the coordinates read off and checked. Works in R² to R⁴.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/span-membership",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="14,58 44,66 70,42 40,34" fill="rgba(133,183,235,0.18)" stroke="#85B7EB" stroke-width="1.2"/><line x1="32" y1="50" x2="54" y2="44" stroke="#FAC775" stroke-width="2.4"/><path d="M 58 43 L 52 41 L 53 46.5 Z" fill="#FAC775"/><line x1="32" y1="50" x2="40" y2="38" stroke="#97C459" stroke-width="2.4"/><path d="M 42 35 L 37 38 L 41.5 41 Z" fill="#97C459"/><line x1="32" y1="50" x2="60" y2="30" stroke="#E6F1FB" stroke-width="2" stroke-dasharray="3,2"/><circle cx="60" cy="30" r="2.4" fill="#E6F1FB"/><text x="66" y="26" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" font-style="italic">w</text><text x="40" y="76" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">w = c&#8321;v&#8321; + c&#8322;v&#8322; ?</text></svg>`,
        name: "Span and Membership Visualizer",
        hubDescription: "Enter spanning vectors and a test vector in R² to R⁴ and settle three questions exactly as they are settled by hand: row reduce V to find the dimension of the span and any dependencies among the vectors, row reduce [V | w] to decide whether w is a combination of them, and read off and verify the coordinates when it is. Dependent sets are diagnosed with their relations, non-unique coordinates are explained, and a vector outside the span is reported with the rank it adds. Presets cover a plane, a line, a dependent set, a basis of R³ and a plane in R⁴.",
        category: 'Matrices',
        subCategory: 'Vector Spaces'
      }
    }
  }
}

export default function SpanMembershipVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections=[
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-scenes-in-order'),
    stateRow('obj11', 'sizing-the-span', 'rank'),
    stateRow('obj12', 'the-membership-test', 'membership'),
    stateRow('obj13', 'reading-the-coordinates', 'coords'),
    stateRow('obj14', 'not-in-the-span', 'notin'),
    stateRow('obj15', 'a-dependent-spanning-set', 'dependent'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-problem'),
    plain('obj5', 'what-span-and-membership-mean'),
    plain('obj6', 'key-properties'),
    plain('obj7', 'why-it-matters'),
    plain('obj8', 'worked-example'),
    plain('obj9', 'common-mistakes'),
    plain('obj10', 'related-concepts'),
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
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Span and Membership</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <SpanMembershipWrapper
   defaultPreset='plane'
   explanations={explanations}
   />
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
   <br/>
   <RelatedTools tools={relatedTools}/>
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}
