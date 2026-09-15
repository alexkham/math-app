import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import ComplexEigen from '../../../../app/components/linear-algebra copy/r2-visualizers/complex-eigen/ComplexEigen'
import { SCENARIOS as CE_SCENARIOS } from '../../../../app/components/linear-algebra copy/r2-visualizers/complex-eigen/ComplexEigen'
import complexEigenDiagrams, { groupOf, statsFor } from '../../../../app/components/linear-algebra copy/r2-visualizers/complex-eigen/complexEigenDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'complex eigenvalues',
    'complex eigenvalues 2x2',
    'rotation scaling matrix',
    'complex eigenvalues geometric interpretation',
    'spiral orbit matrix',
    'A = PCP^-1',
    'real matrix complex eigenvalues',
    'eigenvalues rotation matrix',
    'discrete dynamical system spiral',
    'stability complex eigenvalues modulus',
    'trace determinant complex eigenvalues',
    'complex eigenvector real and imaginary parts',
    'linear algebra visualizer',
    'interactive linear algebra',
    'eigenvalue visualizer 2d'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Complex eigenvalues** &mdash; for a real $2 \\times 2$ [matrix](!/linear-algebra/definitions#matrix), a conjugate pair $\\lambda = a \\pm bi$ with $b \\neq 0$, occurring when $\\operatorname{tr}^2 A < 4\\det A$.

**Modulus** &mdash; $r = |\\lambda| = \\sqrt{a^2 + b^2} = \\sqrt{\\det A}$, the scale factor per step.

**Argument** &mdash; $\\theta = \\arg\\lambda$, the angle of rotation per step, with $\\operatorname{tr} A = 2r\\cos\\theta$.

**Rotation-scaling matrix** &mdash; $C = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix} = r\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.

**Rotation-scaling form** &mdash; $A = PCP^{-1}$ with $P = \\begin{pmatrix} \\operatorname{Re}\\mathbf{v} & \\operatorname{Im}\\mathbf{v} \\end{pmatrix}$, where $\\mathbf{v}$ is a complex eigenvector for $\\lambda = a - bi$.

**Orbit** &mdash; the sequence $\\mathbf{x}_0, A\\mathbf{x}_0, A^2\\mathbf{x}_0, \\ldots$; it spirals in for $r < 1$, out for $r > 1$, and runs round an ellipse for $r = 1$.

**Invariant ellipse** &mdash; the image under $P$ of a circle; $A$ maps each such ellipse to the one $r$ times as large.

**Spiral point** &mdash; the origin, called a stable spiral for $r < 1$, an unstable spiral for $r > 1$, and a centre for $r = 1$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started`,
      content: `The canvas shows a draggable start [vector](!/linear-algebra/vectors#1) $\\mathbf{x}_0$ in orange, the orbit $A^k\\mathbf{x}_0$ as blue dots numbered by step, a grey spiral tracing the continuous path between them, the purple invariant ellipse through $\\mathbf{x}_0$, and two green dashed lines along the columns of $P$, the [real and imaginary parts](!/complex-numbers/algebraic-form#21) of a complex eigenvector. The cyan arrow is the current point $A^k\\mathbf{x}_0$ of the animation.

Try this sequence to build intuition:

• Start with **Rotate 90°**: four dots on a circle, one lap, $P = I$
• Switch to **Skewed rotation**: the same 60° turn per step, but the circle has become an ellipse and the green axes are no longer perpendicular
• Press **Play** and watch the cyan arrow sweep the spiral continuously; the dots are where it lands at whole steps
• Choose **Spiral in** and **Spiral out**, then drag $\\mathbf{x}_0$ around: the shape of the spiral never depends on where you start
• Edit an entry of $A$ in the [matrix](!/linear-algebra/matrix#1) card until the [determinant](!/linear-algebra/determinants#1) drops below $\\operatorname{tr}^2/4$; the eigenvalues turn real and the rotation disappears
• Move the **steps** slider to see more or fewer laps`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Dragging the Start Vector`,
      content: `Every orbit is $\\mathbf{x}_0$ followed by its images under $A$, so dragging $\\mathbf{x}_0$ redraws the whole orbit, the spiral and the ellipse at once.

Things to notice while dragging:

• The ellipse through $\\mathbf{x}_0$ always has the same shape and tilt, only its size changes; it is the same circle seen through the same $P$
• The number of steps per lap does not change: $\\theta$ belongs to $A$, not to $\\mathbf{x}_0$
• For $r = 1$ every dot stays on the ellipse; for $r \\neq 1$ the dots step from one ellipse to the next, each $r$ times the last
• Dragging $\\mathbf{x}_0$ onto a green axis does nothing special: those are not eigenvectors, only the real and imaginary parts of one
• The live card's ratio $|A\\mathbf{x}_0| / |\\mathbf{x}_0|$ changes with position, because $A$ is not a pure scaling, but $|A^k\\mathbf{x}_0|$ still grows like $r^k$ on average`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `The Orbit Animation`,
      content: `The animation moves the cyan arrow along the continuous curve $\\mathbf{x}(k) = A^k\\mathbf{x}_0$ for real $k$ from $0$ to the chosen number of steps.

The fractional powers are meaningful because of the rotation-scaling form: $A^k = P\\,r^k R(k\\theta)\\,P^{-1}$ makes sense for any real $k$, and the curve it [traces](!/linear-algebra/matrix/trace#1) is a logarithmic spiral seen through $P$. The whole-number points on it are the orbit.

• **Play** sweeps from $k = 0$ to the end; **Pause** freezes it
• The step buttons jump one whole step at a time, landing exactly on the dots
• The scrubber sets any $k$; the readout shows the current point
• The **steps** slider sets how many steps the orbit and spiral run, from $2$ to $24$

Selecting a preset replays the animation from the start.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `The Matrix Card`,
      content: `The four entries of $A$ are editable. Below them the card shows the rotation-scaling form: $P$ with the real and imaginary parts of a complex eigenvector as its columns, and $C$ with $a$ and $\\pm b$ in the rotation pattern.

• $C$ is the matrix of $A$ in the basis of the columns of $P$: in those coordinates every step is a plain rotation by $\\theta$ and scaling by $r$
• $P$ is not unique; any complex multiple of the eigenvector gives another $P$, and the tool picks the one with the real column pointing to the right
• When the edited matrix has real eigenvalues the card says so instead; there is then no $C$, and the eigenvector tool is the right one to use

The presets are all matrices with complex eigenvalues. Shuffling entries by hand is the quickest way to see the boundary: the eigenvalues are complex exactly when $\\operatorname{tr}^2 A < 4\\det A$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `The Live Card`,
      content: `The live card reads the invariants off $A$ and the current $\\mathbf{x}_0$.

• $\\lambda = a \\pm bi$, the eigenvalue pair
• $r = |\\lambda| = \\sqrt{\\det A}$ and $\\theta = \\arg\\lambda$, with $360/\\theta$ as the number of steps per full turn
• $\\det A$ and $\\operatorname{tr} A$, which determine $r$ and $\\theta$ between them
• $|\\mathbf{x}_0|$, the ratio $|A\\mathbf{x}_0| / |\\mathbf{x}_0|$ and the angle from $\\mathbf{x}_0$ to $A\\mathbf{x}_0$, which vary with position because the rotation is skewed
• $|A^N\\mathbf{x}_0| / |\\mathbf{x}_0|$ after all $N$ steps, close to $r^N$
• A verdict line: on its ellipse, spiralling in with the number of steps to halve, or spiralling out with the number of steps to double`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Preset Scenarios`,
      content: `Seven matrices in three groups.

**On an ellipse ($r = 1$)** &mdash; Rotate 90° and Rotate 45° are plain rotations, four and eight steps to a lap; Skewed rotation is a 60° rotation in a sheared [basis](!/linear-algebra/vector-spaces#2), whose orbit is an ellipse.

**Spiral in ($r < 1$)** &mdash; Spiral in is $0.9$ times a rotation by $36.9°$; Skewed spiral in has $r = 0.866$ and a tilted ellipse.

**Spiral out ($r > 1$)** &mdash; Spiral out is $\\lambda = 1.1 \\pm 0.5i$, modulus $1.21$; Skewed spiral out is $1.15$ times a $40°$ rotation in a sheared basis.

Selecting a preset loads its matrix, keeps your $\\mathbf{x}_0$, and replays the animation.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `What Complex Eigenvalues Mean`,
      content: `A real $2 \\times 2$ matrix has complex eigenvalues when its [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation#2) $\\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$ has negative discriminant, that is when $\\operatorname{tr}^2 A < 4\\det A$. The roots are then a conjugate pair $a \\pm bi$, and there is no real vector that $A$ merely scales: every direction is turned.

What $A$ does instead is rotate and scale in a skewed coordinate system. Take a complex eigenvector $\\mathbf{v}$ for $\\lambda = a - bi$ and split it into real and imaginary parts, $\\mathbf{v} = \\operatorname{Re}\\mathbf{v} + i\\operatorname{Im}\\mathbf{v}$. Expanding $A\\mathbf{v} = \\lambda\\mathbf{v}$ into real and imaginary parts gives

$$A\\operatorname{Re}\\mathbf{v} = a\\operatorname{Re}\\mathbf{v} + b\\operatorname{Im}\\mathbf{v}, \\qquad A\\operatorname{Im}\\mathbf{v} = -b\\operatorname{Re}\\mathbf{v} + a\\operatorname{Im}\\mathbf{v}$$

which is exactly $AP = PC$ for $P = (\\operatorname{Re}\\mathbf{v} \\;\\; \\operatorname{Im}\\mathbf{v})$ and $C = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$. Since $\\operatorname{Re}\\mathbf{v}$ and $\\operatorname{Im}\\mathbf{v}$ are independent, $P$ is invertible and

$$A = PCP^{-1}, \\qquad C = r\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

with $r = \\sqrt{a^2 + b^2}$ and $\\theta = \\arg(a + bi)$. In the coordinates given by the columns of $P$, one application of $A$ is a rotation by $\\theta$ followed by a scaling by $r$. In standard coordinates the circles of that rotation become ellipses, the images of circles under $P$, and the orbit of any $\\mathbf{x}_0$ walks round its ellipse by $\\theta$ per step while the ellipse itself grows or shrinks by $r$.

This is the real counterpart of diagonalization. Over $\\mathbb{C}$ the matrix diagonalizes with $\\lambda$ and $\\bar\\lambda$ on the diagonal; over $\\mathbb{R}$ the best available form is the $2 \\times 2$ block $C$, and the geometry is a spiral rather than a pair of stretch directions. For the general theory, see the [complex eigenvalues theory page](!/linear-algebra/eigen/complex) and the [eigenvalues overview](!/linear-algebra/eigen).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Reading r and θ from the Matrix`,
      content: `Two numbers determine the whole behaviour, and both come straight from the matrix.

$$\\det A = \\lambda\\bar\\lambda = a^2 + b^2 = r^2, \\qquad \\operatorname{tr} A = \\lambda + \\bar\\lambda = 2a = 2r\\cos\\theta$$

So $r = \\sqrt{\\det A}$ and $\\cos\\theta = \\operatorname{tr} A / (2\\sqrt{\\det A})$. A determinant of $1$ means the orbit stays on its ellipse; larger means spiralling out, smaller means spiralling in. The trace then fixes the angle: trace $0$ is a quarter turn per step, trace $\\sqrt{2}\\,r$ an eighth, trace $r$ a sixth, and a negative trace means more than a quarter turn.

Because trace and determinant are unchanged by a change of basis, so are $r$ and $\\theta$: the skewed presets have exactly the same rotation angle and growth rate as their unskewed counterparts. Only the shape of the ellipse, carried by $P$, is different.

The dynamical reading is the important one. For $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, complex eigenvalues mean oscillation, and $r$ decides whether the oscillation is damped ($r < 1$), sustained ($r = 1$) or growing ($r > 1$). The same criterion, with $|\\lambda|$ in place of $r$, governs every eigenvalue of every linear system.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Key Properties`,
      content: `Facts that hold for every real $2 \\times 2$ matrix with complex eigenvalues.

• **Conjugate pair**: the eigenvalues are $a \\pm bi$, never a lone [complex number](!/complex-numbers/algebraic-form#1)
• **No real eigenvector**: no line through the origin is mapped to itself
• **$A = PCP^{-1}$** with $C$ a rotation-scaling and $P$ real and invertible
• **$r = \\sqrt{\\det A}$**, always positive; $\\det A > 0$ is necessary for complex eigenvalues
• **$\\theta$** satisfies $\\cos\\theta = \\operatorname{tr} A / 2r$; the sign of $\\theta$, the sense of rotation, comes from the choice of $\\lambda = a - bi$
• **Orbits** lie on ellipses for $r = 1$ and on spirals otherwise; the origin is a centre, a stable spiral or an unstable spiral
• **Powers**: $A^k = P\\,r^kR(k\\theta)\\,P^{-1}$, so $A^k = r^kI$ when $k\\theta$ is a multiple of $360°$
• **Rotation matrices** are the case $P = I$; every other case is a rotation in a skewed basis
• **Over $\\mathbb{C}$** the matrix is diagonalizable with $D = \\operatorname{diag}(\\lambda, \\bar\\lambda)$; $C$ is the real form of that`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Eigenvectors in 2D](!/linear-algebra/visual-tools/eigen-vectors-2d) &mdash; the real case, where two directions are preserved; the complex case is what happens when there are none.

[Eigenvalues and eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) &mdash; the characteristic polynomial whose negative discriminant produces the complex pair.

[Diagonalization](!/linear-algebra/visual-tools/matrix-diagonalization) &mdash; $A = PDP^{-1}$ over $\\mathbb{C}$; $A = PCP^{-1}$ is its real version.

[Rotation matrices](!/linear-algebra/visual-tools/orthogonal-matrices) &mdash; the rotation-scaling $C$ with $r = 1$; the building block of the complex case.

[Linear transformations in 2D](!/linear-algebra/visual-tools/linear-transformation-2d) &mdash; how a matrix moves the grid; a rotation-scaling turns squares into rotated, scaled parallelograms.

**Discrete dynamical systems and stability** &mdash; $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ oscillates when eigenvalues are complex, and $|\\lambda|$ decides growth or decay.

[Power iteration](!/linear-algebra/visual-tools/power-iteration) &mdash; which fails to converge for exactly these matrices, since the vector keeps turning.

**Complex numbers** &mdash; multiplication by $a + bi$ is itself rotation by $\\arg$ and scaling by the modulus, which is the whole story in one line.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `A Plain Rotation`,
      content: `The simplest matrix with complex eigenvalues is a rotation. The frozen picture below is the 45° rotation applied to $\\mathbf{x}_0 = (2, 0.5)$ eight times: eight dots equally spaced round a circle, back to the start.

The eigenvalues are $\\cos 45° \\pm i\\sin 45°$, of modulus $1$, and $P$ is the identity, so the invariant ellipse is a genuine circle.`,
      before: ``,
      after: `A rotation matrix $R(\\theta)$ has trace $2\\cos\\theta$ and determinant $1$, so its eigenvalues are $e^{\\pm i\\theta}$: the angle of the eigenvalue is the angle of the rotation, and the modulus $1$ says lengths are preserved. That is the case every other matrix with complex eigenvalues is secretly a copy of.

The picture also shows what an eigenvector would have to be and why none exists: a direction the rotation sends to itself. For $\\theta$ not a multiple of $180°$ there is no such direction in the real plane, and the complex eigenvectors $(1, \\mp i)$ are the algebra's way of recording the missing ones.`,
      link: '',
    },
    obj12: {
      title: `A Rotation in a Skewed Basis`,
      content: `The frozen picture below is the skewed rotation preset, six steps of $\\mathbf{x}_0 = (2, 0.5)$: six dots on an ellipse, back to the start, exactly as for a 60° rotation, but the circle has been sheared.

The matrix $\\begin{pmatrix} 1.366 & -1.732 \\\\ 0.866 & -0.366 \\end{pmatrix}$ does not look like a rotation. Its determinant is $1$ and its trace is $1 = 2\\cos 60°$, and that is enough.`,
      before: ``,
      after: `This is the general picture. The matrix is $PR(60°)P^{-1}$ with $P = \\begin{pmatrix} 1.732 & 0 \\\\ 0.866 & 0.866 \\end{pmatrix}$, so in the coordinates given by the columns of $P$ each step is a plain 60° turn. Standard coordinates see that turn through the lens of $P$, which stretches the circle into an ellipse and tilts it.

The two dashed green lines are the columns of $P$: the real and imaginary parts of a complex eigenvector. They are not eigenvectors themselves, and dragging $\\mathbf{x}_0$ onto one does nothing special; they are the axes of the coordinate system in which $A$ is honest about being a rotation.`,
      link: '',
    },
    obj13: {
      title: `The Columns of P`,
      content: `The frozen picture below is the same skewed matrix with the orbit hidden: only $\\mathbf{x}_0$, the ellipse through it, and the two columns of $P$ as green arrows with their lines.

The ellipse is the image under $P$ of the circle of radius $|P^{-1}\\mathbf{x}_0|$, and the green arrows are where $P$ sends the standard basis vectors.`,
      before: ``,
      after: `The columns of $P$ come from a complex eigenvector $\\mathbf{v}$ of $\\lambda = a - bi$, split as $\\operatorname{Re}\\mathbf{v}$ and $\\operatorname{Im}\\mathbf{v}$. For the skewed rotation, $\\mathbf{v} = (-1.732, -0.866 - 0.866i)$, and after flipping the sign so the real part points right, the columns are $(1.732, 0.866)$ and $(0, 0.866)$.

Any complex multiple of $\\mathbf{v}$ is also an eigenvector, and each gives a different $P$ with a differently sized and rotated pair of columns, but the same family of ellipses. What is intrinsic is the ellipse shape, not the particular axes drawn.`,
      link: '',
    },
    obj14: {
      title: `Spiralling In`,
      content: `The frozen picture below is the spiral-in preset, $0.9$ times a rotation by $36.9°$, run for twelve steps from $\\mathbf{x}_0 = (2, 0.5)$. The dots turn by $36.9°$ each step and lose a tenth of their length, so the orbit winds into the origin along a logarithmic spiral.

With $r = 0.9$ the length halves every $6.6$ steps.`,
      before: ``,
      after: `The eigenvalues $0.72 \\pm 0.54i$ have modulus $0.9$, inside the unit circle, and that alone decides the fate of every orbit: $|A^k\\mathbf{x}_0|$ is roughly $0.9^k|\\mathbf{x}_0|$, so every start decays to zero while circling. In the language of dynamical systems the origin is a stable spiral point, and the system $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ is a damped oscillation.

This is the discrete version of a spring with friction. The rotation is the oscillation, the modulus is the damping, and the same picture, with eigenvalues of negative real part instead of modulus below one, describes the continuous-time system $\\dot{\\mathbf{x}} = A\\mathbf{x}$.`,
      link: '',
    },
    obj15: {
      title: `Spiralling Out`,
      content: `The frozen picture below is the spiral-out preset, eigenvalues $1.1 \\pm 0.5i$ of modulus $1.208$, run for eight steps from a shorter start $\\mathbf{x}_0 = (1, 0.25)$. The dots turn by $24.4°$ a step and grow by 21%, doubling in length every $3.7$ steps.

The spiral leaves the picture; that is the point.`,
      before: ``,
      after: `Modulus above $1$ makes the origin an unstable spiral. Every non-zero start, however small, is flung outward while rotating, and the growth is exponential in the step count. Between this preset and the previous one the only difference is $r$; the pictures are the same spiral run in opposite directions.

The boundary case $r = 1$ is neither stable nor unstable: orbits stay on their ellipses forever. In applications it is the case of sustained oscillation, and it is delicate, since the smallest change to the matrix tips it one way or the other.`,
      link: '',
    },
    obj16: {
      title: `A Skewed Spiral`,
      content: `The frozen picture below is the skewed spiral-in preset, $\\lambda = 0.5 \\pm 0.707i$ with $r = 0.866$ and $\\theta = 54.7°$, run for ten steps. The orbit spirals in as before, but along tilted ellipses, because $P$ is not orthogonal.

Each dot lies on an ellipse $0.866$ times the size of the previous one, all of the same shape.`,
      before: ``,
      after: `Three separate things are visible here and worth separating. The shape and tilt of the ellipses come from $P$, which comes from the eigenvector. The angle per step comes from $\\theta$, which comes from the trace and determinant. The rate of shrinking comes from $r$, which comes from the determinant alone. Change the basis and only the first changes; change the matrix's scale and only the last does.

That separation is what the rotation-scaling form buys. A matrix that looks like an arbitrary jumble of four numbers is a rotation by a known angle, a scaling by a known factor, and a fixed change of coordinates, and each of the three can be read off independently.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from the tool's own canvas composition: ComplexEigen's exported
     composeScene for the orbit dots, the continuous spiral, the invariant
     ellipse, the columns of P and the two arrows. Six stills at t = 1 (one
     at t = 0 with the orbit hidden). See complexEigenDiagrams.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: complexEigenDiagrams[key], caption, text })
  const f = (x, p = 2) => Math.round(x * Math.pow(10, p)) / Math.pow(10, p)
  const rOf = (k) => f(statsFor[k].r, 3)
  const thOf = (k) => f(statsFor[k].thetaDeg, 1)

  const stateUnits = {
    rotation: unit('rotation', '45&deg; rotation, frozen',
      `Eight steps of x&#8320; = (2, 0.5) under the 45&deg; rotation: eight dots equally spaced on a circle, back to the ` +
      `start. r = ${rOf('rotate45')}, &theta; = ${thOf('rotate45')}&deg;, P = I, so the ellipse is a circle.`),
    ellipse: unit('ellipse', 'Skewed 60&deg; rotation, frozen',
      `Six steps of the skewed rotation: six dots on an ellipse and back to the start. det = 1 and trace = 1 give ` +
      `r = ${rOf('ellipse')} and &theta; = ${thOf('ellipse')}&deg; - a 60&deg; rotation seen through P.`),
    axes: unit('axes', 'The columns of P, frozen',
      'The same matrix with the orbit hidden: x&#8320;, the invariant ellipse through it, and the two columns of P ' +
      'as green arrows - the real and imaginary parts of a complex eigenvector, (1.73, 0.87) and (0, 0.87).'),
    inward: unit('inward', 'Spiral in, frozen',
      `Twelve steps at r = ${rOf('decay')}, &theta; = ${thOf('decay')}&deg;: each dot turned by ${thOf('decay')}&deg; and ` +
      'a tenth shorter, winding into the origin. The length halves every 6.6 steps.'),
    outward: unit('outward', 'Spiral out, frozen',
      `Eight steps from x&#8320; = (1, 0.25) at r = ${rOf('growth')}, &theta; = ${thOf('growth')}&deg;: the orbit turns ` +
      'and grows by 21% a step, doubling every 3.7 steps, and leaves the picture.'),
    skew: unit('skew', 'Skewed spiral in, frozen',
      `Ten steps at r = ${rOf('skewIn')}, &theta; = ${thOf('skewIn')}&deg; along tilted ellipses: the shape from P, ` +
      'the angle from &theta;, the shrinking from r - three independent facts in one picture.'),
  }


  /* ---- per-scenario panel notes (Line 1) ----
     The tool's ExplanationCard accepts an override with a byPreset map and
     REPLACES the entry, so each override spreads the tool's own SCENARIOS
     entry and appends the anchor to `body`. All seven scenarios are covered.
     The card renders with dangerouslySetInnerHTML, so the anchors are raw HTML. */
  const SECTION_FOR_GROUP = {
    circle: ['a-rotation-in-a-skewed-basis', 'rotations and ellipses'],
    inward: ['spiralling-in', 'spiralling in'],
    outward: ['spiralling-out', 'spiralling out'],
  }

  const explanationOverride = {
    byPreset: Object.fromEntries(
      Object.entries(CE_SCENARIOS).map(([key, sc]) => {
        const [slug, label] = SECTION_FOR_GROUP[groupOf[key]]
        return [key, {
          ...sc,
          body: `${sc.body || ''}<br/><a href="#${slug}" style="color:#1d4ed8;font-weight:600">Learn more about ${label}</a>` +
            ` &middot; <a href="#what-complex-eigenvalues-mean" style="color:#1d4ed8;font-weight:600">what complex eigenvalues mean</a>`,
        }]
      })
    ),
  }


  const faqQuestions = {
    obj1: {
      question: "What does it mean geometrically for a real matrix to have complex eigenvalues?",
      answer: "It means the matrix rotates: no real direction is mapped to a multiple of itself, so every vector is turned. More precisely, a real 2×2 matrix with eigenvalues a ± bi is a rotation by the angle of a + bi combined with a scaling by its modulus, carried out in a skewed coordinate system. The orbit of any starting vector under repeated application spirals inward, spirals outward, or runs round an ellipse."
    },
    obj2: {
      question: "What is the rotation-scaling form A = PCP⁻¹?",
      answer: "If A has complex eigenvalue a − bi with eigenvector v, let P have the real and imaginary parts of v as its columns and let C be the matrix with a on the diagonal, −b in the top right and b in the bottom left. Then A = P C P⁻¹. The matrix C is r times a rotation by θ, where r = √(a² + b²) and θ is the argument of a + bi, so in the basis given by the columns of P the matrix A is exactly a rotation-scaling. It is the real analogue of diagonalization."
    },
    obj3: {
      question: "How do you find r and θ without computing eigenvectors?",
      answer: "From the trace and determinant. The eigenvalues multiply to det A, so r² = det A and r = √(det A). They add to the trace, so 2a = tr A and cos θ = tr A / (2r). For a 2×2 matrix the eigenvalues are complex exactly when tr² A < 4 det A, and in that case these two formulas give the modulus and the angle directly."
    },
    obj4: {
      question: "When does the orbit spiral in, spiral out, or stay on an ellipse?",
      answer: "It depends only on the modulus r = |λ| = √(det A). If r < 1 every orbit spirals into the origin, a stable spiral; if r > 1 every orbit spirals outward, an unstable spiral; if r = 1 every orbit stays on an ellipse, and the origin is a centre. The angle θ sets how far round each step goes and the matrix P sets the shape and tilt of the ellipses, but neither affects growth or decay."
    },
    obj5: {
      question: "Why are the real and imaginary parts of the eigenvector not eigenvectors?",
      answer: "Because A mixes them: writing A v = λ v with v = Re v + i Im v and λ = a − bi and separating real and imaginary parts gives A(Re v) = a Re v + b Im v and A(Im v) = −b Re v + a Im v. Each is sent to a combination of both, which is exactly the rotation-scaling C acting on the pair. They form a basis in which A is a rotation, not two directions that A preserves; a matrix with complex eigenvalues preserves no real direction at all."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Eigenvalues 2D Visualizer",
      "description": "Interactive visualizer for a real 2×2 matrix with complex eigenvalues: drag a start vector and see its orbit spiral in, spiral out or circle an ellipse, the continuous spiral A^k x₀, the rotation-scaling form A = P C P⁻¹, the columns of P, and r and θ read from the determinant and trace.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/complex-eigenvalues-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable start vector with its orbit under repeated application, numbered by step",
        "Continuous spiral A^k x₀ for real k via the rotation-scaling form, animated with play, step and scrub",
        "Invariant ellipse through the start vector and the columns of P as axes",
        "Editable 2×2 matrix with P and C displayed, and a real-eigenvalue fallback",
        "Live card with λ = a ± bi, r = √det, θ, steps per turn, and the stability verdict",
        "Seven presets: plain and skewed rotations, spirals in and out",
        "Adjustable number of steps and toggleable layers"
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
      "keywords": "complex eigenvalues, complex eigenvalues 2x2, rotation scaling matrix, complex eigenvalues geometric interpretation, spiral orbit matrix, A = PCP^-1, real matrix complex eigenvalues, eigenvalues rotation matrix, discrete dynamical system spiral, stability complex eigenvalues modulus, trace determinant complex eigenvalues, complex eigenvector real and imaginary parts, linear algebra visualizer, interactive linear algebra, eigenvalue visualizer 2d"
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
          "name": "Complex Eigenvalues 2D",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/complex-eigenvalues-2d"
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
      relatedTools: getRelatedTools('linear-algebra-complex-eigenvalues-2d'),
      sectionsContent,
      stateUnits,
      explanationOverride,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Complex Eigenvalues 2D Visualizer | Rotation-Scaling and Spiral Orbits",
        description: "See what complex eigenvalues do: drag a start vector and watch its orbit spiral in, spiral out or circle an ellipse under a real 2×2 matrix. The rotation-scaling form A = PCP⁻¹, r from the determinant, θ from the trace.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/complex-eigenvalues-2d",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="70" x2="40" y2="10" stroke="#B5D4F4" stroke-width="1"/><line x1="10" y1="40" x2="70" y2="40" stroke="#B5D4F4" stroke-width="1"/><path d="M 44 40 C 44 34 38 32 35 36 C 30 41 36 50 44 49 C 55 47 58 34 50 26 C 40 17 22 26 24 42 C 26 58 46 66 60 56" fill="none" stroke="#85B7EB" stroke-width="1.6"/><circle cx="44" cy="40" r="1.8" fill="#FAC775"/><circle cx="36" cy="35" r="1.8" fill="#FAC775"/><circle cx="35" cy="45" r="1.8" fill="#FAC775"/><circle cx="46" cy="49" r="1.8" fill="#FAC775"/><circle cx="55" cy="36" r="1.8" fill="#FAC775"/><circle cx="41" cy="22" r="1.8" fill="#FAC775"/><circle cx="24" cy="38" r="1.8" fill="#FAC775"/><line x1="40" y1="40" x2="60" y2="56" stroke="#97C459" stroke-width="2.4"/><path d="M 63 58.5 L 57 57.5 L 59.5 52.5 Z" fill="#97C459"/><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">&lambda; = a &plusmn; bi</text></svg>`,
        name: "Complex Eigenvalues 2D Visualizer",
        hubDescription: "Drag a start vector and watch a real 2×2 matrix with complex eigenvalues turn it step by step: the orbit spirals in, spirals out, or runs round an ellipse, and a continuous spiral traces A^k x₀ between the steps. The matrix card shows the rotation-scaling form A = P C P⁻¹ with the real and imaginary parts of a complex eigenvector as the columns of P, and the live card reads r from the determinant and θ from the trace. Seven presets from plain rotations to skewed spirals, editable entries, and a real-eigenvalue fallback.",
        category: "Linear Algebra",
        subCategory: "Eigenvalues"
      }
    }
  }
}

export default function ComplexEigenvalues2DPage({seoData, sectionsContent, stateUnits, explanationOverride, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'dragging-the-start-vector'),
    plain('obj3', 'the-orbit-animation'),
    plain('obj6', 'preset-scenarios'),
    stateRow('obj11', 'a-plain-rotation', 'rotation'),
    stateRow('obj12', 'a-rotation-in-a-skewed-basis', 'ellipse'),
    stateRow('obj13', 'the-columns-of-p', 'axes'),
    stateRow('obj14', 'spiralling-in', 'inward'),
    stateRow('obj15', 'spiralling-out', 'outward'),
    stateRow('obj16', 'a-skewed-spiral', 'skew'),
    plain('obj4', 'the-matrix-card'),
    plain('obj5', 'the-live-card'),
    plain('obj7', 'what-complex-eigenvalues-mean'),
    plain('obj8', 'reading-r-and-theta-from-the-matrix'),
    plain('obj9', 'key-properties'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Complex Eigenvalues in 2D</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <ComplexEigen explanationOverride={explanationOverride}/>
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
