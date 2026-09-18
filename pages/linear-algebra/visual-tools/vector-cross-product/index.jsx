import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import CrossProductWrapper from '../../../../app/components/linear-algebra copy/matrix/CrossProductWrapper'
import crossProductDiagrams from '../../../../app/components/linear-algebra copy/matrix/crossProductDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'cross product of vectors',
    'vector cross product',
    'u cross v',
    'cross product formula',
    'cross product calculator',
    'cross product visualizer',
    'how to compute cross product',
    'cross product determinant',
    'i j k determinant',
    'cross product step by step',
    'perpendicular vector',
    'right hand rule',
    'cross product 3d',
    'linear algebra visualizer',
    'interactive vector tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Cross product](!/linear-algebra/definitions#cross_product) — the vector $\\mathbf{u} \\times \\mathbf{v}$ built from two [vectors](!/linear-algebra/definitions#vector) in $\\mathbb{R}^3$. It is perpendicular to both, and its length is the area of the parallelogram the two vectors [span](!/linear-algebra/definitions#span).

[Component formula](!/linear-algebra/vectors/cross-product#1) — $w_1 = u_2 v_3 - u_3 v_2$, $w_2 = u_3 v_1 - u_1 v_3$, $w_3 = u_1 v_2 - u_2 v_1$. Each component skips its own row and cross-multiplies the other two.

[Determinant mnemonic](!/linear-algebra/determinants/applications#3) — the symbolic $3 \\times 3$ [determinant](!/linear-algebra/definitions#determinant) with $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ in the first row, $\\mathbf{u}$ in the second and $\\mathbf{v}$ in the third. Expanding along the first row reproduces the component formula.

**Cyclic order** — the index pattern $1 \\to 2 \\to 3 \\to 1$ that decides which product carries the plus sign in each component.

[Minor and cofactor](!/linear-algebra/definitions#cofactor) — the $2 \\times 2$ determinant left after striking a row and a column, and that determinant with its position sign $(+, -, +)$ attached.

[Right-hand rule](!/linear-algebra/definitions#right_hand_rule) — the convention that fixes which of the two perpendicular directions $\\mathbf{u} \\times \\mathbf{v}$ points along.

[Anticommutativity](!/linear-algebra/vectors/cross-product#5) — $\\mathbf{v} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{v})$. Swapping the operands reverses every component.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Pick a method, then watch $\\mathbf{u} \\times \\mathbf{v} = \\mathbf{w}$ fill one component at a time.

• Use the **Method** pills to switch between the **component formula** and the **determinant expansion**
• There is no length control: the cross product is defined only for [vectors](!/linear-algebra/vectors#1) in $\\mathbb{R}^3$, so $\\mathbf{u}$, $\\mathbf{v}$ and $\\mathbf{w}$ always have three components
• Hover the **?** icon for a reminder of what the cross product is and how the two methods relate
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• Both methods produce the same three expressions — switch between them at the same step to compare`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Two Methods`,
      content: `The visualizer offers two routes to the same three numbers.

• **Component formula** — for component $k$, skip row $k$ of both vectors and cross-multiply the remaining two rows: $w_k = u_a v_b - u_b v_a$, where $a$ and $b$ are the rows after $k$ in cyclic order. Three scenes, one per component
• **Determinant expansion** — write $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ above $\\mathbf{u}$ and $\\mathbf{v}$ as a symbolic [determinant](!/linear-algebra/determinants#1) and expand along the first row. Each scene strikes a row and a column, highlights the $2 \\times 2$ minor that remains, applies the cofactor sign, and writes the result into $\\mathbf{w}$

The component formula is faster by hand. The determinant is easier to remember, and it explains where the minus sign in the middle component comes from: it is the cofactor sign of the second column.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In the component method, the two active entries of $\\mathbf{u}$ are highlighted primary, the two active entries of $\\mathbf{v}$ secondary, and the skipped row of each vector is muted; four curved arrows flow into the destination component of $\\mathbf{w}$, highlighted accent
• In the determinant method, the [pivot](!/linear-algebra/linear-systems/echelon-form#4) [basis](!/linear-algebra/vector-spaces#2) vector is highlighted primary, the struck row and column are greyed and lined through, the $2 \\times 2$ minor is secondary, and one arrow flows from the pivot into the destination component
• Filled components of $\\mathbf{w}$ show their symbolic content, $u_a v_b - u_b v_a$, in a wider cell so the two-term expression stays readable
• The step log on the right keeps a record of every completed component, and clicking any entry jumps back to that scene`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Why the Length Is Fixed at Three`,
      content: `Every other vector tool in this section has a length stepper. This one does not, and the reason is mathematical rather than a design choice.

• In $\\mathbb{R}^3$ there is exactly one direction perpendicular to two independent vectors (up to sign), so a vector-valued product makes sense
• In $\\mathbb{R}^2$ there is no room: the only thing left of the formula is the single number $u_1 v_2 - u_2 v_1$, the signed area, which is a [scalar](!/linear-algebra/vectors#1)
• In $\\mathbb{R}^n$ for $n \\geq 4$ the space perpendicular to two vectors has dimension $n - 2$, so there is no single perpendicular direction to pick
• The generalization that does work in every dimension is the wedge product, which returns an oriented area rather than a vector; the cross product is the special case where that area can be encoded as a normal vector

A bilinear, anticommutative, vector-valued product of two vectors with the cross product's properties exists only in [dimensions](!/linear-algebra/vector-spaces/dimension#1) three and seven.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Cross Product Is`,
      content: `The cross product of two vectors $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^3$ is the vector

$$\\mathbf{u} \\times \\mathbf{v} = \\begin{pmatrix} u_2 v_3 - u_3 v_2 \\\\ u_3 v_1 - u_1 v_3 \\\\ u_1 v_2 - u_2 v_1 \\end{pmatrix}$$

The same vector is the formal expansion of

$$\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix} = (u_2 v_3 - u_3 v_2)\\,\\mathbf{i} - (u_1 v_3 - u_3 v_1)\\,\\mathbf{j} + (u_1 v_2 - u_2 v_1)\\,\\mathbf{k}$$

Geometrically, $\\mathbf{u} \\times \\mathbf{v}$ is perpendicular to both $\\mathbf{u}$ and $\\mathbf{v}$, its length is

$$\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\| \\sin\\theta$$

the area of the parallelogram spanned by the two vectors, and its direction is given by the right-hand rule: curl the fingers of the right hand from $\\mathbf{u}$ toward $\\mathbf{v}$ and the thumb points along $\\mathbf{u} \\times \\mathbf{v}$.

For the full treatment, including the geometric proof of the length formula and the [scalar triple product](!/linear-algebra/formulas#scalar_triple_product), see the [cross product theory page](!/linear-algebra/vectors/cross-product).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The cross product is bilinear but neither commutative nor associative.

• **Anticommutativity**: $\\mathbf{v} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{v})$
• **Distributivity**: $\\mathbf{u} \\times (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{w}$
• **Scalar pull-out**: $(k\\mathbf{u}) \\times \\mathbf{v} = k(\\mathbf{u} \\times \\mathbf{v}) = \\mathbf{u} \\times (k\\mathbf{v})$
• **Self-product**: $\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}$, and more generally $\\mathbf{u} \\times \\mathbf{v} = \\mathbf{0}$ exactly when $\\mathbf{u}$ and $\\mathbf{v}$ are parallel
• **Perpendicularity**: $\\mathbf{u} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0$ and $\\mathbf{v} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0$
• **Not associative**: $(\\mathbf{u} \\times \\mathbf{v}) \\times \\mathbf{w} \\neq \\mathbf{u} \\times (\\mathbf{v} \\times \\mathbf{w})$ in general
• **Lagrange identity**: $\\|\\mathbf{u} \\times \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2$
• **Standard basis**: $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$, $\\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}$, $\\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}$, cyclically

The basis products are the component formula in miniature: the cyclic order $1 \\to 2 \\to 3 \\to 1$ is the same pattern that assigns the plus sign in each component.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The cross product is the standard way to manufacture a perpendicular direction from two known ones.

• **Normal vectors**: the normal to the plane through three points, or to a surface patch, is a cross product of two edge vectors
• **Area**: $\\|\\mathbf{u} \\times \\mathbf{v}\\|$ is the area of the parallelogram spanned by $\\mathbf{u}$ and $\\mathbf{v}$, and half of it is the area of the triangle
• **Volume**: the scalar triple product $\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})$ is the signed volume of the parallelepiped, and it is the $3 \\times 3$ determinant with the three vectors as rows
• **Physics**: torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$, angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$, and the magnetic force $q\\mathbf{v} \\times \\mathbf{B}$ are all cross products
• **Orientation**: the sign of a cross product tells whether a turn is clockwise or counterclockwise, which drives orientation tests in computational geometry
• **Computer graphics**: lighting, back-face culling and camera coordinate frames all rely on cross products for normals and perpendicular axes`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take

$$\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}, \\quad \\mathbf{v} = \\begin{pmatrix} 4 \\\\ 5 \\\\ 6 \\end{pmatrix}$$

Component by component:

$$w_1 = u_2 v_3 - u_3 v_2 = 2 \\cdot 6 - 3 \\cdot 5 = 12 - 15 = -3$$

$$w_2 = u_3 v_1 - u_1 v_3 = 3 \\cdot 4 - 1 \\cdot 6 = 12 - 6 = 6$$

$$w_3 = u_1 v_2 - u_2 v_1 = 1 \\cdot 5 - 2 \\cdot 4 = 5 - 8 = -3$$

So

$$\\mathbf{u} \\times \\mathbf{v} = \\begin{pmatrix} -3 \\\\ 6 \\\\ -3 \\end{pmatrix}$$

Check perpendicularity with the [dot product](!/linear-algebra/vectors/dot-product#1): $\\mathbf{u} \\cdot \\mathbf{w} = -3 + 12 - 9 = 0$ and $\\mathbf{v} \\cdot \\mathbf{w} = -12 + 30 - 18 = 0$. The area of the parallelogram spanned by $\\mathbf{u}$ and $\\mathbf{v}$ is $\\|\\mathbf{w}\\| = \\sqrt{9 + 36 + 9} = \\sqrt{54} = 3\\sqrt{6}$.

Step through the visualizer with either method to see the same three expressions assembled symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Losing the sign of the middle component** — $w_2 = u_3 v_1 - u_1 v_3$, not $u_1 v_3 - u_3 v_1$. The cyclic rule puts row 3 before row 1; the determinant explains it as the minus cofactor sign of the second column
• **Treating it as commutative** — $\\mathbf{v} \\times \\mathbf{u}$ is $-(\\mathbf{u} \\times \\mathbf{v})$, the opposite vector
• **Confusing it with the dot product** — the dot product returns a scalar and measures alignment; the cross product returns a vector and measures perpendicularity and area
• **Assuming associativity** — $(\\mathbf{u} \\times \\mathbf{v}) \\times \\mathbf{w}$ and $\\mathbf{u} \\times (\\mathbf{v} \\times \\mathbf{w})$ are different vectors in general
• **Applying it outside $\\mathbb{R}^3$** — there is no vector cross product of two vectors in $\\mathbb{R}^2$ or $\\mathbb{R}^4$; in the plane the formula collapses to the scalar $u_1 v_2 - u_2 v_1$
• **Reading the determinant literally** — the top row holds vectors, so it is a mnemonic for the expansion, not a determinant of a numerical [matrix](!/linear-algebra/matrix#1)
• **Skipping the check** — a cross product is easy to verify: dot the result with each input, and both must come out zero`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Dot product](!/linear-algebra/visual-tools/vectors-inner-product) — the other product of two vectors; scalar-valued, and zero exactly when the vectors are perpendicular, which makes it the natural check on a cross product.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the $2 \\times 2$ determinants inside each component, and the $3 \\times 3$ mnemonic that organises them.

**Scalar triple product** — $\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})$, the signed volume of a parallelepiped.

**Normal vector** — a vector perpendicular to a plane or surface; cross products are the usual way to produce one.

**Right-hand rule** — the orientation convention that picks the sign of the cross product.

**Orthogonality** — the relationship the cross product guarantees between its output and each of its inputs.

**Wedge product** — the generalization to any dimension, returning an oriented area rather than a vector.

**Levi-Civita symbol** — the index notation $w_i = \\varepsilon_{ijk} u_j v_k$ that encodes the cyclic sign rule.

[Magnitude](!/linear-algebra/visual-tools/vector-magnitude) — $\\|\\mathbf{u} \\times \\mathbf{v}\\|$ is the area of the parallelogram the two vectors [span](!/linear-algebra/vector-spaces/span#1), so the length of the result carries geometric information the components alone do not.

[Span and independence](!/linear-algebra/visual-tools/span-independence-2d) — two vectors in $\\mathbb{R}^3$ are linearly dependent exactly when their cross product is the zero vector, which makes it the $\\mathbb{R}^3$ analogue of the determinant test in the plane.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: Two Vectors in Three Dimensions`,
      content: `The player starts with $\\mathbf{u}$ and $\\mathbf{v}$ drawn as three-component columns and an empty $\\mathbf{w}$ waiting to hold $\\mathbf{u} \\times \\mathbf{v}$.

Nothing is computed yet. What the scene fixes is the shape of the answer: two vectors in, **a vector out**, with the same three rows as its inputs.`,
      before: ``,
      after: `That output shape separates the cross product from the dot product, which takes the same two inputs and collapses them to a single number. Here the result keeps its three components, and each one will be assembled from entries of both $\\mathbf{u}$ and $\\mathbf{v}$.

The one precondition is that both vectors live in $\\mathbb{R}^3$. A cross product of two vectors in the plane, or in four dimensions, is not defined, which is why the tool offers no length control.`,
      link: '',
    },
    obj12: {
      title: `The Component Sweep`,
      content: `Each step of the component method skips one row of both vectors and cross-multiplies the other two: the $\\mathbf{u}$ entry from the first remaining row with the $\\mathbf{v}$ entry from the second, minus the reverse pairing.

The frozen picture below is the middle step. Row 2 is skipped, the entries in rows 3 and 1 are active, and $w_2 = u_3 v_1 - u_1 v_3$ is being written.`,
      before: ``,
      after: `Each component is a $2 \\times 2$ determinant. Take the two rows of $\\mathbf{u}$ and $\\mathbf{v}$ that are not the component's own row, arrange them as a $2 \\times 2$ block, and the component is that block's determinant, with the rows read in cyclic order.

The cyclic order is the whole difficulty. For $w_1$ the rows run $2, 3$; for $w_3$ they run $1, 2$; for $w_2$ they run $3, 1$, not $1, 3$. Reading them as $1, 3$ produces $u_1 v_3 - u_3 v_1$, the correct value with the wrong sign, and it is by far the most common cross product error.`,
      link: '',
    },
    obj13: {
      title: `The Determinant Expansion`,
      content: `The determinant method writes $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ in the first row, $\\mathbf{u}$ in the second and $\\mathbf{v}$ in the third, then expands along the first row. Each step strikes the first row and one column, leaving a $2 \\times 2$ minor, and the cofactor sign for that column decides whether the minor is taken as is or negated.

The frozen picture below is the $\\mathbf{j}$ step. The first row and second column are struck, the minor is the block $u_1, u_3$ over $v_1, v_3$, and the sign is minus.`,
      before: ``,
      after: `This is a mnemonic rather than a determinant in the strict sense, because the top row holds vectors, not numbers. But the expansion is mechanical and it produces exactly the three expressions of the component formula, so anyone who can expand a $3 \\times 3$ determinant can compute a cross product without memorising the cyclic rule.

It also explains the awkward sign. The cofactor signs along the first row alternate $+, -, +$, so the $\\mathbf{j}$ coefficient is $-(u_1 v_3 - u_3 v_1)$. Distribute the minus and the terms reorder to $u_3 v_1 - u_1 v_3$, which is precisely the cyclic form. Two methods, one answer.`,
      link: '',
    },
    obj14: {
      title: `The Completed Product`,
      content: `The final scene fills all three rows, so $\\mathbf{w}$ reads $(u_2 v_3 - u_3 v_2,\\; u_3 v_1 - u_1 v_3,\\; u_1 v_2 - u_2 v_1)$.

Each entry mixes components of both inputs, and no entry of $\\mathbf{w}$ uses the matching entries of $\\mathbf{u}$ and $\\mathbf{v}$: row 1 of $\\mathbf{w}$ never sees $u_1$ or $v_1$.`,
      before: ``,
      after: `Three facts follow from the completed picture. The vector is **perpendicular to both inputs**: dot it with $\\mathbf{u}$ or with $\\mathbf{v}$ and every product cancels against another, leaving zero. Its **length is the area** of the parallelogram spanned by $\\mathbf{u}$ and $\\mathbf{v}$, which is $\\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\| \\sin\\theta$. And its **direction follows the right-hand rule**, so swapping the inputs reverses every sign: $\\mathbf{v} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{v})$.

The perpendicularity is the property worth remembering as a check. A cross product computed by hand should always be dotted back against its two inputs, and both dot products must vanish.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from CrossProductWrapper's two scene builders (exported additively)
     and rendered through frozenMatrixSvg. Arrows are not reproduced in the
     stills; the cell highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: crossProductDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'u and v as three-component columns, w empty on the right. Two vectors in, one vector out - ' +
      'and the length is pinned at three because the operation exists nowhere else.'),
    components: unit('components', 'Component method, middle step',
      'Row 2 of u and v muted, rows 3 and 1 active, and w<sub>2</sub> being written as ' +
      'u<sub>3</sub>v<sub>1</sub> &minus; u<sub>1</sub>v<sub>3</sub>. The rows are read in cyclic ' +
      'order, 3 then 1, which is where the sign is usually lost.'),
    determinant: unit('determinant', 'Determinant method, the j step',
      'First row and second column struck through, the 2&times;2 minor highlighted, and the ' +
      'cofactor sign for this column negative. The negated minor reorders into the same ' +
      'expression the component method produces.'),
    done: unit('done', 'Completed cross product, frozen',
      'All three rows of w filled. Each holds a 2&times;2 determinant from the other two rows ' +
      'of u and v; the vector is perpendicular to both inputs and its length is the area ' +
      'they span.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     CrossProductWrapper accepts an explanations prop keyed by phase:
     intro, components, determinant, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-cross-product-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Two vectors in, a vector out - and only in three dimensions.', 'the-opening-scene', 'Learn more about the opening scene'),
    components: note('Skip a row, cross-multiply the other two in cyclic order; the middle component runs 3 then 1.', 'the-component-sweep', 'Learn more about the component sweep'),
    determinant: note('Strike a row and a column, take the minor, apply the cofactor sign - the minus on j is the cyclic rule in disguise.', 'the-determinant-expansion', 'Learn more about the determinant expansion'),
    done: note('Perpendicular to both inputs, length equal to the spanned area, direction by the right-hand rule.', 'the-completed-product', 'Learn more about the completed product'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the cross product of two vectors?",
      answer: "The cross product of two vectors u and v in three-dimensional space is a third vector, written u × v, that is perpendicular to both u and v. Its components are u2 v3 − u3 v2, u3 v1 − u1 v3, and u1 v2 − u2 v1. Its length equals the area of the parallelogram spanned by u and v, and its direction is given by the right-hand rule."
    },
    obj2: {
      question: "Why is the cross product only defined in three dimensions?",
      answer: "In three dimensions there is exactly one direction perpendicular to two independent vectors, up to sign, so a vector-valued product makes sense. In two dimensions the formula collapses to a single number, the signed area u1 v2 − u2 v1. In four or more dimensions the space perpendicular to two vectors has more than one dimension, so there is no single perpendicular direction to choose. A product with the cross product's properties exists only in dimensions three and seven."
    },
    obj3: {
      question: "How does the i, j, k determinant give the cross product?",
      answer: "Write the basis vectors i, j, k in the first row of a 3 × 3 array, the components of u in the second row, and the components of v in the third. Expanding along the first row as if it were a determinant gives (u2 v3 − u3 v2) i − (u1 v3 − u3 v1) j + (u1 v2 − u2 v1) k, and those three coefficients are the components of u × v. It is a mnemonic rather than a true determinant, because the top row contains vectors, but the expansion is mechanical and always produces the correct result."
    },
    obj4: {
      question: "What is the difference between the dot product and the cross product?",
      answer: "The dot product takes two vectors and returns a scalar that measures how aligned they are; it is zero when the vectors are perpendicular. The cross product takes two vectors in three-dimensional space and returns a vector perpendicular to both; it is zero when the vectors are parallel. The dot product is defined in any dimension, the cross product only in three."
    },
    obj5: {
      question: "Is the cross product commutative?",
      answer: "No. The cross product is anticommutative: v × u equals −(u × v), the vector of the same length pointing the opposite way. It is also not associative, so (u × v) × w and u × (v × w) are different in general. It is bilinear, meaning it distributes over addition and scalars can be pulled out of either factor."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Cross Product of Vectors Visualizer",
      "description": "Step-by-step visualizer for the cross product of two vectors in three dimensions. Watch u × v build one component at a time, by the component formula or by expanding the i, j, k determinant.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-cross-product",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two methods: the component formula and the i, j, k determinant expansion",
        "One scene per component, with the skipped row muted and the active entries highlighted",
        "Struck rows and columns, highlighted minors and cofactor signs in the determinant method",
        "Animated curved arrows from the source entries into the destination component",
        "Symbolic entries preserved through every step",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the cross product and how the two methods relate"
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
      "educationalLevel": "High School, College",
      "keywords": "cross product of vectors, vector cross product, u cross v, cross product formula, cross product calculator, cross product visualizer, how to compute cross product, cross product determinant, i j k determinant, cross product step by step, perpendicular vector, right hand rule, cross product 3d, linear algebra visualizer, interactive vector tool"
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
          "name": "Vector Cross Product",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-cross-product"
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
      relatedTools: getRelatedTools('linear-algebra-vector-cross-product'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Cross Product of Vectors Visualizer | u × v Step by Step",
        description: "Visualize the cross product of two vectors step by step. Watch u × v build one component at a time, by the component formula or the i, j, k determinant expansion.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/vector-cross-product",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M 18 58 L 26 50 L 26 58 Z" fill="none" stroke="#B5D4F4" stroke-width="0.8"/><line x1="18" y1="58" x2="62" y2="58" stroke="#85B7EB" stroke-width="2.6"/><path d="M 66 58 L 58 54 L 58 62 Z" fill="#85B7EB"/><line x1="18" y1="58" x2="46" y2="40" stroke="#97C459" stroke-width="2.6"/><path d="M 49 38 L 40.5 39.5 L 44.5 46 Z" fill="#97C459"/><line x1="18" y1="58" x2="18" y2="18" stroke="#FAC775" stroke-width="3"/><path d="M 18 13 L 13 22 L 23 22 Z" fill="#FAC775"/><text x="65" y="69" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">u</text><text x="52" y="36" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">v</text><text x="34" y="20" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">u &#215; v</text></svg>`,
        name: "Cross Product of Vectors Visualizer",
        hubDescription: "Watch u × v build one component at a time for two vectors in three dimensions. Choose the component formula — skip a row, cross-multiply the other two in cyclic order — or the i, j, k determinant expansion that strikes a row and a column, takes the minor and applies the cofactor sign. Both methods produce the same perpendicular vector, and the tool shows exactly where the sign of the middle component comes from.",
        category: 'Vectors',
        subCategory: 'Products'
      }
    }
  }
}

export default function CrossProductVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-two-methods'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'the-component-sweep', 'components'),
    stateRow('obj13', 'the-determinant-expansion', 'determinant'),
    stateRow('obj14', 'the-completed-product', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'why-three-dimensions'),
    plain('obj5', 'what-the-cross-product-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Cross Product of Vectors</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <CrossProductWrapper
   mode='both'
   defaultMethod='components'
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
