import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import OrthogonalWrapper from '../../../../app/components/linear-algebra copy/matrix/OrthogonalWrapper'
import orthogonalDiagrams from '../../../../app/components/linear-algebra copy/matrix/orthogonalDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'orthogonal matrix',
    'orthogonal matrix test',
    'Q transpose Q = I',
    'orthonormal columns',
    'orthogonal matrix determinant',
    'rotation matrix vs reflection matrix',
    'orthogonal matrix inverse equals transpose',
    'orthogonal matrix preserves length',
    'rotation axis from matrix',
    'Householder reflection',
    'permutation matrix orthogonal',
    'orthogonal group',
    'is this matrix orthogonal',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Orthogonal matrix** — a [square matrix](!/linear-algebra/matrix/types#1) $Q$ with $Q^TQ = I$; equivalently, its columns are orthonormal.

**Orthonormal** — unit length and mutually perpendicular.

**Inverse equals transpose** — $Q^{-1} = Q^T$, so $QQ^T = I$ too and the rows are orthonormal as well.

**Isometry** — a map preserving lengths: $\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$; orthogonal matrices also preserve [dot products](!/linear-algebra/vectors/dot-product#1) and angles.

**Determinant $\\pm 1$** — $+1$ for a rotation (orientation preserved), $-1$ for a reflection (orientation reversed).

**Rotation** — in the plane, $R(\\theta)$; in space, a turn by $\\theta$ about an axis, the fixed direction with $Q\\mathbf{u} = \\mathbf{u}$.

**Reflection** — in the plane, across a line; in space, across a plane; a Householder matrix $I - 2\\mathbf{u}\\mathbf{u}^T/\\mathbf{u}^T\\mathbf{u}$ reflects across the plane perpendicular to $\\mathbf{u}$.

**Permutation matrix** — reorders coordinates; always orthogonal.

**Orthogonal group $O(n)$** — all $n \\times n$ orthogonal matrices; closed under products and inverses.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a [matrix](!/linear-algebra/matrix#1) and test it.

• Use the **Preset** pills for eight matrices: a $30°$ rotation, a reflection, a permutation, a Householder reflection, a rotation about the $z$-axis, a matrix with perpendicular but non-unit columns, a scaled rotation, and a shear
• Use the **Size** stepper for $2 \\times 2$ or $3 \\times 3$, and **Shuffle** for a random rotation or reflection
• Edit any entry directly; the entries are shown to four decimals, and the test tolerates that rounding
• Change the **test vector** $\\mathbf{x}$ to see lengths and dot products preserved for your own [vector](!/linear-algebra/vectors#1)
• Hover the **?** icon for a reminder of what orthogonality means and implies
• Press play or step manually; the step log on the right keeps every stage

A matrix that fails the test stops early, with the diagnosis: perpendicular columns of the wrong length, which normalizing fixes, or columns that are not perpendicular at all.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook checks exactly.

• **$Q^TQ$** — computed as a product; the diagonal entries are the squared column lengths, the off-diagonal ones the dot products between columns
• **Not orthogonal** — the run stops, showing the normalized matrix when only the lengths were wrong
• **Determinant** — $\\pm 1$, with the rotation-or-reflection verdict
• **Lengths and angles** — $Q\\mathbf{x}$ and $Q\\mathbf{y}$ for two test vectors, with $\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$ and $(Q\\mathbf{x})\\cdot(Q\\mathbf{y}) = \\mathbf{x}\\cdot\\mathbf{y}$
• **Inverse** — $QQ^T = I$, so $Q^{-1} = Q^T$ and the rows are orthonormal too
• **Classify** — in 2D, the rotation angle or the mirror line; in 3D, the axis from the null space of $Q - I$ and the angle from the [trace](!/linear-algebra/matrix/trace#1)
• **Done** — the summary and the group properties`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one check with the arithmetic in the caption.

• In $Q^TQ$ and $QQ^T$ the diagonal is the target when the product is the identity; entries that spoil it are muted
• The test vectors and their images share colours: $\\mathbf{x}$ and $Q\\mathbf{x}$ accent, $\\mathbf{y}$ and $Q\\mathbf{y}$ secondary
• In the determinant scene the matrix is drawn between bars, with the diagonal accent for $+1$ and muted for $-1$
• The classification scene colours the whole matrix accent for a rotation and secondary for a reflection
• Entries are shown to four decimals since rotations involve sines and cosines`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The eight presets each make a different point.

• **Rotation $30°$** — $\\begin{pmatrix} \\cos 30° & -\\sin 30° \\\\ \\sin 30° & \\cos 30° \\end{pmatrix}$, determinant $+1$, angle read from the first column
• **Reflection** — $\\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, determinant $-1$, the mirror at $22.5°$
• **Permutation** — cyclic shift of coordinates; a rotation by $120°$ about $(1, 1, 1)$
• **Householder** — $I - \\frac{2}{3}\\mathbf{u}\\mathbf{u}^T$ with $\\mathbf{u} = (1, 1, 1)$; a reflection of space across the plane $x + y + z = 0$
• **Rotation about $z$** — $90°$ about the $z$-axis; the axis is found as the null space of $Q - I$
• **Orthogonal, not unit** — $\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$; the columns are perpendicular but of length $\\sqrt{2}$, and the tool shows the normalized version
• **Scaled rotation** — twice a $45°$ rotation; angles are kept but lengths double, and $Q^TQ = 4I$
• **Shear** — columns not perpendicular; no rescaling helps

Shuffle produces a random rotation or reflection by multiples of $30°$, combined with a signed permutation in 3D.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What an Orthogonal Matrix Is`,
      content: `A square matrix $Q$ is orthogonal when its columns $\\mathbf{q}_1, \\ldots, \\mathbf{q}_n$ are orthonormal: $\\mathbf{q}_i\\cdot\\mathbf{q}_j = 1$ if $i = j$ and $0$ otherwise. Since entry $(i, j)$ of $Q^TQ$ is exactly $\\mathbf{q}_i\\cdot\\mathbf{q}_j$, the condition is the single equation

$$Q^TQ = I$$

For a square matrix a one-sided inverse is the inverse, so $Q^{-1} = Q^T$ and also $QQ^T = I$, which says the rows are orthonormal too. Taking determinants, $(\\det Q)^2 = 1$, so $\\det Q = \\pm 1$.

The geometric content is that $Q$ preserves the dot product: $(Q\\mathbf{x})\\cdot(Q\\mathbf{y}) = \\mathbf{x}^TQ^TQ\\mathbf{y} = \\mathbf{x}\\cdot\\mathbf{y}$. Lengths and angles are dot products, so $Q$ moves every figure rigidly, without stretching or distorting; it is an isometry fixing the origin. Conversely every linear isometry is orthogonal.

In the plane there are two kinds. Determinant $+1$ gives a rotation $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$; determinant $-1$ gives a reflection $\\begin{pmatrix} \\cos 2\\varphi & \\sin 2\\varphi \\\\ \\sin 2\\varphi & -\\cos 2\\varphi \\end{pmatrix}$ across the line at angle $\\varphi$. In space, determinant $+1$ is a rotation about an axis, the direction $\\mathbf{u}$ with $Q\\mathbf{u} = \\mathbf{u}$, by an angle with $\\operatorname{tr} Q = 1 + 2\\cos\\theta$; determinant $-1$ is a reflection across a plane, possibly combined with a rotation about the plane's normal.

Orthogonal matrices are closed under multiplication and inversion, forming the orthogonal group, and they are the reason so much of linear algebra is numerically safe: a change of [basis](!/linear-algebra/vector-spaces#2) by an orthogonal matrix amplifies no error. The [spectral decomposition](!/linear-algebra/eigen/diagonalization#7), QR and the SVD are all built from them. For the theory, see the [orthogonal sets page](!/linear-algebra/orthogonality/orthogonal-sets) and the [geometric transformations page](!/linear-algebra/transformations/geometric).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts that hold for every orthogonal matrix $Q$.

• **$Q^TQ = QQ^T = I$** and $Q^{-1} = Q^T$; both columns and rows are orthonormal
• **$\\det Q = \\pm 1$**: rotation or reflection
• **Isometry**: $\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$, $(Q\\mathbf{x})\\cdot(Q\\mathbf{y}) = \\mathbf{x}\\cdot\\mathbf{y}$, angles preserved
• **Eigenvalues** have modulus $1$: real ones are $\\pm 1$, the rest are conjugate pairs $e^{\\pm i\\theta}$
• **Group**: products and inverses of orthogonal matrices are orthogonal; $Q^T$ and $Q^{-1}$ are orthogonal
• **Condition number $1$**: the best possible; solving $Q\\mathbf{x} = \\mathbf{b}$ is a transpose
• **Every orthonormal basis** is the column set of an orthogonal matrix, and changing to it is a rigid motion
• **Symmetric orthogonal** matrices are reflections: $Q^2 = I$, [eigenvalues](!/linear-algebra/eigen#2) $\\pm 1$
• **Permutation matrices** and $\\pm 1$ diagonal matrices are orthogonal
• **Unitary matrices** are the complex counterpart, with $Q^*Q = I$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Orthogonal matrices are the rigid motions, and the tools of numerical linear algebra.

• **Geometry and graphics**: rotations of objects, cameras and coordinate frames are orthogonal matrices, composed by multiplication and undone by transposition
• **Numerical stability**: QR factorization, Householder and Givens methods, the [QR algorithm for eigenvalues](!/linear-algebra/decompositions/qr#7) and the SVD all work by orthogonal transformations because they never amplify rounding error
• **Spectral decomposition**: a [symmetric matrix](!/linear-algebra/matrix/types#5) is $Q\\Lambda Q^T$; the change to its [eigenvector](!/linear-algebra/eigen#2) basis is orthogonal
• **Least squares**: with orthonormal columns the [normal equations](!/linear-algebra/orthogonality/least-squares#3) reduce to $\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$
• **Signal processing**: the discrete Fourier, cosine and wavelet transforms are orthogonal (or unitary), which is why they preserve energy and invert by transposition
• **Statistics**: orthogonal rotations of factor loadings, and orthogonal designs
• **Physics and robotics**: rotation groups $SO(2)$ and $SO(3)$, Euler angles, and the axis–angle form read from the trace`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset, the rotation by $30°$,

$$Q = \\begin{pmatrix} \\cos 30° & -\\sin 30° \\\\ \\sin 30° & \\cos 30° \\end{pmatrix} = \\begin{pmatrix} 0.866 & -0.5 \\\\ 0.5 & 0.866 \\end{pmatrix}$$

**Test.** $Q^TQ$ has diagonal entries $\\cos^2 30° + \\sin^2 30° = 1$ and off-diagonal entries $-\\cos 30°\\sin 30° + \\sin 30°\\cos 30° = 0$: the identity. Orthogonal.

**Determinant.** $\\cos^2 30° + \\sin^2 30° = 1$: a rotation.

**Lengths.** For $\\mathbf{x} = (2, 1)$, $Q\\mathbf{x} = (1.232, 1.866)$ and $\\|Q\\mathbf{x}\\|^2 = 1.518 + 3.482 = 5 = \\|\\mathbf{x}\\|^2$. For $\\mathbf{y} = (1, 0)$, $Q\\mathbf{y} = (0.866, 0.5)$, and $(Q\\mathbf{x})\\cdot(Q\\mathbf{y}) = 1.067 + 0.933 = 2 = \\mathbf{x}\\cdot\\mathbf{y}$.

**Inverse.** $Q^T = \\begin{pmatrix} 0.866 & 0.5 \\\\ -0.5 & 0.866 \\end{pmatrix}$ is the rotation by $-30°$, and $QQ^T = I$.

**Classify.** $\\cos\\theta = 0.866$ and $\\sin\\theta = 0.5$ give $\\theta = 30°$. The eigenvalues are $e^{\\pm i\\,30°}$, complex, so no real direction is fixed.

For contrast, the reflection preset $\\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ also passes the test but has determinant $-1$; with $\\cos 2\\varphi = \\sin 2\\varphi = 1/\\sqrt{2}$ the mirror is at $\\varphi = 22.5°$, and the direction $(\\cos 22.5°, \\sin 22.5°)$ is fixed while its perpendicular is reversed.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Perpendicular columns without unit length** — $\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ has orthogonal columns but is not an orthogonal matrix; the name refers to orthonormal columns
• **Checking only $\\det Q = \\pm 1$** — many non-orthogonal matrices have determinant $\\pm 1$, such as a shear; the test is $Q^TQ = I$
• **Reading a reflection as a rotation** — both preserve lengths; only the sign of the determinant tells them apart
• **Confusing the rotation angle with the eigenvalue argument in 3D** — the angle comes from $\\operatorname{tr} Q = 1 + 2\\cos\\theta$, not from any single entry
• **Assuming $Q^T = Q$** — only symmetric orthogonal matrices, the reflections, satisfy this; a rotation's transpose is the opposite rotation
• **Non-square matrices with orthonormal columns** — they satisfy $Q^TQ = I$ but not $QQ^T = I$, and are not called orthogonal matrices
• **Expecting real eigenvectors** — a rotation of the plane by anything but $0°$ or $180°$ has none`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Gram–Schmidt](!/linear-algebra/visual-tools/gram-schmidt) — how to manufacture an orthogonal matrix from any independent set of columns.

[QR decomposition](!/linear-algebra/visual-tools/qr-decomposition) — $A = QR$ with $Q$ orthogonal; the tool for least squares and the eigenvalue algorithm.

[Spectral decomposition](!/linear-algebra/visual-tools/spectral-decomposition) — $A = Q\\Lambda Q^T$ for symmetric $A$; the eigenvector matrix is orthogonal.

[Singular value decomposition](!/linear-algebra/visual-tools/singular-value-decomposition) — two orthogonal matrices and a diagonal one, for any matrix.

[Reflection and rotation in 2D](!/linear-algebra/visual-tools/reflection-2d) — the geometric pictures of the two kinds of orthogonal matrix.

[Complex eigenvalues in 2D](!/linear-algebra/visual-tools/complex-eigenvalues-2d) — why a rotation has no real eigenvector, and what its eigenvalues $e^{\\pm i\\theta}$ mean.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the $\\pm 1$ that separates rotations from reflections.

[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — free for orthogonal matrices: transpose.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Test`,
      content: `The frozen picture below shows $Q^TQ$ for the $30°$ rotation: the identity. Each diagonal entry is a column dotted with itself, $1$; each off-diagonal entry is the dot product of the two columns, $0$.

One multiplication decides orthogonality.`,
      before: ``,
      after: `The test packs $n$ length checks and $n(n-1)/2$ perpendicularity checks into one product, and it is exactly the condition that the columns form an orthonormal basis. The same product for a non-orthogonal matrix is still informative: the diagonal reports the squared column lengths and the off-diagonal entries report which pairs of columns are not perpendicular.

For a $2 \\times 2$ matrix the test can be done by eye. The columns $(a, c)$ and $(b, d)$ must satisfy $a^2 + c^2 = 1$, $b^2 + d^2 = 1$ and $ab + cd = 0$; with $a = \\cos\\theta$ and $c = \\sin\\theta$ the second column is forced to be $\\pm(-\\sin\\theta, \\cos\\theta)$, which is the whole classification.`,
      link: '',
    },
    obj12: {
      title: `Determinant Plus or Minus One`,
      content: `The frozen picture below shows the determinant of the $30°$ rotation: $\\cos^2 30° + \\sin^2 30° = 1$.

Orthogonal matrices have determinant $\\pm 1$, and the sign is the difference between a rotation and a reflection.`,
      before: ``,
      after: `The determinant is $\\pm 1$ because $\\det(Q^TQ) = (\\det Q)^2 = \\det I = 1$. Its sign records orientation: a rotation keeps a counterclockwise triangle counterclockwise, a reflection turns it clockwise. Both keep areas and volumes, since $|\\det Q| = 1$.

Rotations alone form a group, $SO(n)$, since the product of two determinant-$+1$ matrices has determinant $+1$. Reflections do not: the product of two reflections is a rotation, which is how every rotation of the plane can be built from two mirrors.`,
      link: '',
    },
    obj13: {
      title: `Lengths and Angles Survive`,
      content: `The frozen picture below shows the $30°$ rotation applied to $\\mathbf{x} = (2, 1)$ and $\\mathbf{y} = (1, 0)$. Both images have the same lengths as the originals, $\\sqrt{5}$ and $1$, and the same dot product, $2$.

Every dot product survives, so every length and every angle does.`,
      before: ``,
      after: `The one-line proof is $(Q\\mathbf{x})\\cdot(Q\\mathbf{y}) = (Q\\mathbf{x})^T(Q\\mathbf{y}) = \\mathbf{x}^TQ^TQ\\mathbf{y} = \\mathbf{x}^T\\mathbf{y}$. Because lengths are $\\sqrt{\\mathbf{x}\\cdot\\mathbf{x}}$ and angles come from $\\cos\\theta = \\mathbf{x}\\cdot\\mathbf{y} / \\|\\mathbf{x}\\|\\|\\mathbf{y}\\|$, everything geometric is preserved. The unit circle maps to itself; the grid maps to a rotated, or reflected, grid of the same squares.

This is what distinguishes orthogonal matrices from all other invertible ones. A general matrix sends the unit circle to an ellipse and changes angles; its singular values measure by how much. An orthogonal matrix has all singular values equal to $1$.`,
      link: '',
    },
    obj14: {
      title: `The Inverse Is the Transpose`,
      content: `The frozen picture below shows $QQ^T = I$ for the $30°$ rotation. The transpose is the rotation by $-30°$, and it undoes $Q$.

$Q^TQ = I$ was the test; $QQ^T = I$ comes free, and says the rows are orthonormal too.`,
      before: ``,
      after: `For a square matrix a left inverse is automatically a right inverse, so $Q^TQ = I$ forces $QQ^T = I$. The practical consequence is enormous: solving $Q\\mathbf{x} = \\mathbf{b}$ is $\\mathbf{x} = Q^T\\mathbf{b}$, one matrix-vector product, and the condition number is $1$, so no error is amplified.

That is why numerical algorithms are built from orthogonal steps. Householder reflections zero out entries below a pivot, Givens rotations zero out one entry at a time, and both leave the rest of the problem exactly as well-conditioned as before.`,
      link: '',
    },
    obj15: {
      title: `Reading Off a Reflection`,
      content: `The reflection preset $\\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ has determinant $-1$. The frozen picture below shows its classification: with $\\cos 2\\varphi = \\sin 2\\varphi = 1/\\sqrt{2}$, the mirror line is at $\\varphi = 22.5°$.

The direction $(\\cos 22.5°, \\sin 22.5°)$ is fixed and its perpendicular is reversed.`,
      before: ``,
      after: `A $2 \\times 2$ reflection matrix has the form $\\begin{pmatrix} \\cos 2\\varphi & \\sin 2\\varphi \\\\ \\sin 2\\varphi & -\\cos 2\\varphi \\end{pmatrix}$, symmetric, with $Q^2 = I$ and eigenvalues $+1$ along the mirror and $-1$ across it. The doubled angle is why a matrix whose entries suggest $45°$ is a reflection across the $22.5°$ line.

Reflections are the building blocks of all orthogonal matrices: any orthogonal matrix in $n$ dimensions is a product of at most $n$ reflections. Two reflections across lines at angle $\\alpha$ apart compose to a rotation by $2\\alpha$.`,
      link: '',
    },
    obj16: {
      title: `The Axis of a Rotation in Space`,
      content: `The permutation matrix that sends $(x, y, z)$ to $(z, x, y)$ is orthogonal with determinant $+1$. The frozen picture below shows its classification: the axis, the null space of $Q - I$, is $(1, 1, 1)$, and the trace $0 = 1 + 2\\cos\\theta$ gives $\\theta = 120°$.

Cycling three coordinates is a third of a turn about the main diagonal.`,
      before: ``,
      after: `Euler's theorem says every rotation of space has an axis, a line of fixed points. Algebraically, $Q$ has determinant $+1$ and eigenvalues of modulus $1$, so one eigenvalue is real and equal to $1$, and its eigenvector is the axis. The other two are $e^{\\pm i\\theta}$, and adding all three gives $\\operatorname{tr} Q = 1 + 2\\cos\\theta$, which fixes the angle up to sign.

The Householder preset shows the determinant $-1$ case: eigenvalue $-1$ along the normal $(1, 1, 1)$, which is reversed, and eigenvalue $1$ twice on the plane $x + y + z = 0$, which is fixed. A pure reflection across a plane.`,
      link: '',
    },
    obj17: {
      title: `Perpendicular but Not Unit`,
      content: `The matrix $\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ has perpendicular columns of length $\\sqrt{2}$: $Q^TQ = 2I$, not $I$. The frozen picture below shows the diagnosis and the fix, each column divided by $\\sqrt{2}$.

The normalized matrix is the reflection preset.`,
      before: ``,
      after: `This is the most common way to be almost orthogonal, and the easiest to repair: Gram–Schmidt's final step is exactly this normalization. The scaled-rotation preset is the same situation, $Q^TQ = 4I$ with columns of length $2$, and dividing by $2$ recovers the rotation.

Columns that are not perpendicular, as in the shear preset, cannot be repaired by rescaling. Gram–Schmidt would produce an orthonormal basis of the same column space, but the result is a different matrix, and the original was simply not orthogonal.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from OrthogonalWrapper's own buildScenes on the default preset (and
     the reflection, permutation and unnormalized presets for their special
     scenes) and rendered through frozenMatrixSvgFixed. Stills are found by
     phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: orthogonalDiagrams[key], caption, text })

  const stateUnits = {
    gram: unit('gram', 'Q&#7488;Q = I, frozen',
      'The 30&deg; rotation: each diagonal entry is cos&#178; + sin&#178; = 1, each off-diagonal entry is ' +
      '&minus;cos&middot;sin + sin&middot;cos = 0. The columns are orthonormal.'),
    det: unit('det', 'det Q = 1, frozen',
      'cos&#178; 30&deg; + sin&#178; 30&deg; = 1: orientation preserved, a rotation. Every orthogonal matrix has ' +
      'determinant +1 or &minus;1.'),
    lengths: unit('lengths', 'Lengths and angles, frozen',
      'x = (2, 1) and y = (1, 0) rotated by 30&deg;: |Qx| = |x| = &radic;5, |Qy| = 1, and (Qx)&middot;(Qy) = 2 = x&middot;y. ' +
      'The whole figure turned rigidly.'),
    inverse: unit('inverse', 'Q Q&#7488; = I, frozen',
      'The transpose is the rotation by &minus;30&deg; and undoes Q. Q&#8315;&#185; = Q&#7488;, and the rows are ' +
      'orthonormal too.'),
    reflect: unit('reflect', 'A reflection classified, frozen',
      'det &minus;1 and cos 2&phi; = sin 2&phi; = 1/&radic;2: the mirror line is at &phi; = 22.5&deg;. That direction is ' +
      'fixed, its perpendicular reversed.'),
    axis: unit('axis', 'A rotation of space classified, frozen',
      'The permutation (x, y, z) &rarr; (z, x, y): axis (1, 1, 1) from the null space of Q &minus; I, and ' +
      'trace 0 = 1 + 2 cos &theta; gives &theta; = 120&deg;.'),
    fix: unit('fix', 'Perpendicular, not unit, frozen',
      'Columns (1, 1) and (1, &minus;1) are perpendicular but of length &radic;2, so Q&#7488;Q = 2I. Dividing each ' +
      'column by &radic;2 gives an orthogonal matrix - the reflection preset.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     OrthogonalWrapper accepts an explanations prop keyed by scene phase:
     intro, gram, notortho, det, lengths, inverse, classify, done. Captions
     render with dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-an-orthogonal-matrix-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Orthonormal columns in one equation: Q&#7488;Q = I.', 'the-test', 'Learn more about the test'),
    gram: note('Diagonal: squared lengths. Off-diagonal: dot products between columns.', 'the-test', 'Learn more about the test'),
    notortho: note('Perpendicular but not unit is fixable; not perpendicular is not.', 'perpendicular-but-not-unit', 'Learn more about near misses'),
    det: note('(det Q)&#178; = 1; the sign separates rotations from reflections.', 'determinant-plus-or-minus-one', 'Learn more about the determinant'),
    lengths: note('(Qx)&middot;(Qy) = x&#7488;Q&#7488;Qy = x&middot;y: a rigid motion.', 'lengths-and-angles-survive', 'Learn more about isometry'),
    inverse: note('A left inverse of a square matrix is the inverse; rows are orthonormal too.', 'the-inverse-is-the-transpose', 'Learn more about the inverse'),
    classify: note('2D: angle or mirror line. 3D: axis from Q &minus; I, angle from the trace.', 'the-axis-of-a-rotation-in-space', 'Learn more about classification'),
    done: note('Products and inverses stay orthogonal: the orthogonal group.', 'the-inverse-is-the-transpose', 'Learn more about the group'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is an orthogonal matrix?",
      answer: "A square matrix Q whose columns are orthonormal: each column has length 1 and any two columns are perpendicular. That is equivalent to the single equation QᵀQ = I, and for a square matrix it implies QQᵀ = I as well, so the rows are orthonormal too and the inverse of Q is its transpose. Geometrically an orthogonal matrix is a rigid motion of space fixing the origin: a rotation, a reflection, or a combination."
    },
    obj2: {
      question: "How do you check whether a matrix is orthogonal?",
      answer: "Multiply Qᵀ by Q and compare with the identity. The diagonal entries of QᵀQ are the squared lengths of the columns and must be 1; the off-diagonal entries are the dot products between columns and must be 0. Checking the determinant alone is not enough, since many non-orthogonal matrices have determinant ±1; and columns that are perpendicular but not of unit length, as in [[1, 1], [1, −1]], do not make an orthogonal matrix until they are normalized."
    },
    obj3: {
      question: "Why is the determinant of an orthogonal matrix ±1?",
      answer: "Taking determinants of QᵀQ = I gives det(Qᵀ) det(Q) = (det Q)² = 1, so det Q is +1 or −1. The sign tells the type: +1 means Q preserves orientation and is a rotation; −1 means Q reverses orientation and is a reflection, or in three dimensions a reflection combined with a rotation. Either way volumes are preserved, since the absolute value is 1."
    },
    obj4: {
      question: "How do you find the axis and angle of a 3D rotation matrix?",
      answer: "The axis is the direction the rotation leaves fixed, an eigenvector for eigenvalue 1, found as the null space of Q − I. The angle comes from the trace: the eigenvalues of a rotation are 1, e^{iθ} and e^{−iθ}, which add to 1 + 2 cos θ, so cos θ = (tr Q − 1)/2. For a reflection in space, determinant −1, the direction reversed is the null space of Q + I and the trace is −1 + 2 cos θ."
    },
    obj5: {
      question: "Why do orthogonal matrices matter in numerical linear algebra?",
      answer: "Because they preserve lengths, they never amplify errors: their condition number is 1, and solving Qx = b is just x = Qᵀb. Algorithms built from orthogonal steps, such as QR factorization by Householder reflections or Givens rotations, the QR algorithm for eigenvalues and the singular value decomposition, are stable for exactly this reason. Orthogonal matrices also appear as the eigenvector matrices of symmetric matrices and as the U and V of the SVD."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Orthogonal Matrices Visualizer",
      "description": "Step-by-step visualizer that tests a 2×2 or 3×3 matrix for orthogonality via QᵀQ = I, reads the determinant ±1, shows lengths and dot products preserved for test vectors, verifies Q⁻¹ = Qᵀ, and classifies the matrix as a rotation by an angle, a reflection across a line, or a rotation about an axis in space.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/orthogonal-matrices",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable 2×2 or 3×3 matrix with eight presets and a shuffle producing random rotations and reflections",
        "QᵀQ computed as a product with a diagnosis when it is not the identity",
        "Normalized version shown when the columns are perpendicular but not unit",
        "Determinant ±1 with the rotation-or-reflection verdict",
        "Lengths and dot products of an editable test vector preserved",
        "Q Qᵀ = I and Q⁻¹ = Qᵀ verified",
        "Rotation angle, mirror line, or 3D axis and angle read off",
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
      "keywords": "orthogonal matrix, orthogonal matrix test, Q transpose Q = I, orthonormal columns, orthogonal matrix determinant, rotation matrix vs reflection matrix, orthogonal matrix inverse equals transpose, orthogonal matrix preserves length, rotation axis from matrix, Householder reflection, permutation matrix orthogonal, orthogonal group, is this matrix orthogonal, linear algebra visualizer, interactive matrix tool"
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
          "name": "Orthogonal Matrices",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/orthogonal-matrices"
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
      relatedTools: getRelatedTools('linear-algebra-orthogonal-matrices'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Orthogonal Matrices Visualizer | Test QᵀQ = I and Classify",
        description: "Test a 2×2 or 3×3 matrix for orthogonality step by step: QᵀQ = I, determinant ±1, lengths and angles preserved, Q⁻¹ = Qᵀ, and the rotation angle, mirror line, or 3D axis and angle read off.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/orthogonal-matrices",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="24" fill="none" stroke="#B5D4F4" stroke-width="1"/><line x1="40" y1="40" x2="62" y2="30" stroke="#FAC775" stroke-width="2.6"/><path d="M 66 28 L 59 27.5 L 60.5 33.5 Z" fill="#FAC775"/><line x1="40" y1="40" x2="50" y2="18" stroke="#97C459" stroke-width="2.6"/><path d="M 51.5 14.5 L 46.5 20 L 52.5 21.5 Z" fill="#97C459"/><path d="M 56 33 A 17 17 0 0 0 47.5 22.5" fill="none" stroke="#85B7EB" stroke-width="1.4"/><circle cx="40" cy="40" r="2" fill="#E6F1FB"/><text x="40" y="76" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">Q&#7488;Q = I</text></svg>`,
        name: "Orthogonal Matrices Visualizer",
        hubDescription: "Test a matrix of your own numbers for orthogonality exactly as it is done by hand: multiply QᵀQ and compare with the identity, read the determinant to separate rotations from reflections, watch lengths and dot products of a test vector survive, verify that the transpose is the inverse, and identify the transformation, as a rotation angle or mirror line in the plane or an axis and angle in space. Near misses are diagnosed: perpendicular columns of the wrong length are normalized on the spot. Presets include a permutation, a Householder reflection and a scaled rotation.",
        category: 'Matrices',
        subCategory: 'Orthogonality'
      }
    }
  }
}

export default function OrthogonalVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj11', 'the-test', 'gram'),
    stateRow('obj12', 'determinant-plus-or-minus-one', 'det'),
    stateRow('obj13', 'lengths-and-angles-survive', 'lengths'),
    stateRow('obj14', 'the-inverse-is-the-transpose', 'inverse'),
    stateRow('obj15', 'reading-off-a-reflection', 'reflect'),
    stateRow('obj16', 'the-axis-of-a-rotation-in-space', 'axis'),
    stateRow('obj17', 'perpendicular-but-not-unit', 'fix'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-an-orthogonal-matrix-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Orthogonal Matrices</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <OrthogonalWrapper
   defaultPreset='rotate30'
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
