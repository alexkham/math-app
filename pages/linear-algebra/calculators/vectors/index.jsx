import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import VectorCalculator from '@/app/components/calculators/vector-calculator/VectorCalculator'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

/* calculators-mesh: finished 2026-10-17 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/linear-algebra/calculators/vectors" in calculators-mesh-registry.json (same folder): 5 usage sections, each with a demo; 24 panel notes; 30 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps(){
const keyWords = [
  'vector calculator',
  'vector operations calculator',
  'dot product calculator',
  'cross product calculator',
  'vector magnitude calculator',
  'vector projection calculator',
  'unit vector calculator',
  'vector addition calculator',
  'linear combination calculator',
  'Gram-Schmidt calculator',
  'linear independence checker',
  'vector angle calculator',
  'vector norm calculator',
  'vector distance calculator',
  'linear algebra vector tools'
];

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />


const vectorExplanations = {
  single: {
    _default:
      'Single vector operations analyze properties of one vector. Choose an operation to see details. [All single-vector operations](!#single-vector-operations)',
    Magnitude:
      'The magnitude (length) of a vector is the square root of the sum of its squared components: ||v|| = sqrt(v1^2 + v2^2 + ... + vn^2). Also called the Euclidean norm or L2 norm. [Learn more about the magnitude](!#vector-magnitude) · [All single-vector operations](!#single-vector-operations)',
    'Unit Vector':
      'A unit vector has magnitude 1 and points in the same direction as the original. Found by dividing each component by the magnitude: u = v / ||v||. Undefined for the zero vector. [Learn more about unit vectors](!#unit-vector) · [All single-vector operations](!#single-vector-operations)',
    Normalize:
      'Normalization scales a vector to unit length while preserving direction. The result is v / ||v||. Commonly used in machine learning, physics, and computer graphics to standardize vector lengths. [Learn more about normalization](!#vector-normalization) · [All single-vector operations](!#single-vector-operations)',
    'Sum of Components':
      'Computes the sum of all components of the vector: S = v1 + v2 + ... + vn. Useful for checking properties like zero-sum vectors or computing averages. [Learn more about the sum of components](!#sum-of-components) · [All single-vector operations](!#single-vector-operations)',
    'L1 Norm':
      'The L1 norm (Manhattan norm) sums the absolute values of all components: ||v||_1 = |v1| + |v2| + ... + |vn|. Measures distance along axis-aligned paths. Used in sparse optimization and LASSO regression. [Learn more about the L1 norm](!#l1-norm-manhattan-norm) · [All single-vector operations](!#single-vector-operations)',
    'L2 Norm':
      'The L2 norm is the standard Euclidean length: ||v||_2 = sqrt(v1^2 + v2^2 + ... + vn^2). Identical to the magnitude. Used as the default norm in most mathematical and engineering contexts. [Learn more about the L2 norm](!#l2-norm-euclidean-norm) · [All single-vector operations](!#single-vector-operations)',
    'Infinity Norm':
      'The infinity norm (max norm) returns the largest absolute component value: ||v||_inf = max(|v1|, |v2|, ..., |vn|). Measures the worst-case component magnitude. Used in numerical analysis for error bounds. [Learn more about the infinity norm](!#infinity-norm-max-norm) · [All single-vector operations](!#single-vector-operations)',
  },
  two: {
    _default:
      'Two-vector operations combine a pair of vectors to produce a scalar, vector, or angle. Choose an operation to learn more. [All two-vector operations](!#two-vector-operations)',
    Addition:
      'Vector addition sums corresponding components: (A+B)_i = a_i + b_i. Both vectors must have the same dimensionality. Addition is commutative and associative. [Learn more about vector addition](!#vector-addition) · [All two-vector operations](!#two-vector-operations)',
    Subtraction:
      'Vector subtraction finds the component-wise difference: (A-B)_i = a_i - b_i. The result points from the tip of B to the tip of A when both start at the origin. [Learn more about vector subtraction](!#vector-subtraction) · [All two-vector operations](!#two-vector-operations)',
    'Dot Product':
      'The dot product sums the products of corresponding components: A . B = a1*b1 + a2*b2 + ... + an*bn. It equals ||A|| ||B|| cos(theta). Zero dot product means the vectors are orthogonal. [Learn more about the dot product](!#dot-product) · [All two-vector operations](!#two-vector-operations)',
    'Cross Product':
      'The cross product (3D only) produces a vector perpendicular to both inputs: A x B = (a2*b3 - a3*b2, a3*b1 - a1*b3, a1*b2 - a2*b1). Its magnitude equals ||A|| ||B|| sin(theta). [Learn more about the cross product](!#cross-product) · [All two-vector operations](!#two-vector-operations)',
    'Angle Between':
      'The angle between two vectors is found via the dot product: theta = arccos((A . B) / (||A|| ||B||)). Returns a value between 0 and 180 degrees (0 and pi radians). [Learn more about the angle between vectors](!#angle-between-vectors) · [All two-vector operations](!#two-vector-operations)',
    Distance:
      'The distance between two vectors is the magnitude of their difference: d(A, B) = ||A - B||. This is the standard Euclidean distance in n-dimensional space. [Learn more about the distance between vectors](!#distance-between-vectors) · [All two-vector operations](!#two-vector-operations)',
    Projection:
      'The projection of A onto B gives the component of A in the direction of B: proj_B(A) = ((A . B) / (B . B)) * B. The result is a vector parallel to B. [Learn more about projection](!#vector-projection) · [All two-vector operations](!#two-vector-operations)',
    Rejection:
      'The rejection of A from B is the component of A perpendicular to B: rej_B(A) = A - proj_B(A). Together, projection and rejection decompose A into parallel and perpendicular parts. [Learn more about rejection](!#vector-rejection) · [All two-vector operations](!#two-vector-operations)',
  },
  multiple: {
    _default:
      'Multiple vector operations analyze sets of vectors for dependencies, spans, and orthogonal bases. Choose an operation to learn more. [All multiple-vector operations](!#multiple-vector-operations)',
    'Linear Combination':
      'A linear combination multiplies each vector by a scalar coefficient and sums: c1*v1 + c2*v2 + ... + cn*vn. Enter coefficients to compute the resulting vector. [Learn more about linear combinations](!#linear-combination) · [All multiple-vector operations](!#multiple-vector-operations)',
    'Span Check':
      'Checks whether a target vector can be expressed as a linear combination of the given vectors. Solves the system [v1|v2|...|vn]x = t using row reduction. [Learn more about the span check](!#span-check) · [All multiple-vector operations](!#multiple-vector-operations)',
    'Linear Independence':
      'Tests whether no vector in the set can be written as a linear combination of the others. Checks if the only solution to c1*v1 + ... + cn*vn = 0 is all zeros. [Learn more about linear independence](!#linear-independence) · [All multiple-vector operations](!#multiple-vector-operations)',
    'Orthogonality Check':
      'Verifies whether all pairs of vectors are orthogonal (perpendicular). Computes the dot product for every pair and checks if all equal zero. [Learn more about the orthogonality check](!#orthogonality-check) · [All multiple-vector operations](!#multiple-vector-operations)',
    'Gram-Schmidt':
      'Produces an orthonormal basis from the input vectors using the Gram-Schmidt process. Each vector is made orthogonal to all previous ones, then normalized to unit length. [Learn more about Gram-Schmidt](!#gram-schmidt-process) · [All multiple-vector operations](!#multiple-vector-operations)',
    'Matrix Form':
      'Arranges the input vectors as columns (or rows) of a matrix. Useful for visualizing the system, computing determinants, or preparing data for further matrix operations. [Learn more about the matrix form](!#matrix-form) · [All multiple-vector operations](!#multiple-vector-operations)',
  },
};

const sectionsContent = {

  obj1: {
    title: `Vector Magnitude`,
    content: `The magnitude (or length) of a vector $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$ measures its distance from the origin:

$$||\\mathbf{v}|| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

The magnitude is always non-negative and equals zero only for the zero vector. It is also called the **Euclidean norm** or **L2 norm**. In physics, the magnitude of a velocity vector gives speed, and the magnitude of a force vector gives the force strength.

See [Magnitude in two and three dimensions](!/linear-algebra/vectors/magnitude#1) and [The general norm](!/linear-algebra/vectors/magnitude#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Unit Vector`,
    content: `A unit vector has magnitude 1 and indicates direction only. Given a nonzero vector $\\mathbf{v}$, the corresponding unit vector is:

$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$$

The standard basis vectors $\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n$ are unit vectors pointing along each coordinate axis. Unit vectors are essential in defining directions for **projections**, constructing **orthonormal bases**, and representing orientations in physics and computer graphics.

See [Unit vectors](!/linear-algebra/vectors/magnitude#5) in the magnitude lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Vector Normalization`,
    content: `Normalization is the process of converting a vector to a unit vector by dividing each component by the magnitude. The result preserves direction while setting the length to 1.

Normalization is undefined for the zero vector since division by zero is not possible. It is widely used in machine learning (feature normalization), computer graphics (surface normals), and physics (direction vectors). Normalized vectors simplify many formulas because $||\\hat{\\mathbf{v}}|| = 1$ eliminates magnitude terms.

See [Normalization](!/linear-algebra/vectors/magnitude#6) and [Unit vectors](!/linear-algebra/vectors/magnitude#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Sum of Components`,
    content: `The sum of components adds all entries of a vector:

$$S = v_1 + v_2 + \\cdots + v_n$$

This operation is useful for checking whether a vector sums to zero (important in certain probability and physics contexts), computing averages when divided by $n$, and verifying conservation laws. It is a special case of the **dot product** with the all-ones vector: $S = \\mathbf{v} \\cdot \\mathbf{1}$.

The components and their notation are explained in [Notation and representation](!/linear-algebra/vectors#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `L1 Norm (Manhattan Norm)`,
    content: `The L1 norm sums the absolute values of all vector components:

$$||\\mathbf{v}||_1 = |v_1| + |v_2| + \\cdots + |v_n|$$

Also called the Manhattan norm or taxicab norm, it measures distance along axis-aligned paths rather than straight lines. The L1 norm is central to **sparse optimization** problems, LASSO regression, and compressed sensing, where it promotes solutions with many zero entries. It is always greater than or equal to the **L2 norm**.

See [The general norm](!/linear-algebra/vectors/magnitude#2) and [Properties of the norm](!/linear-algebra/vectors/magnitude#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `L2 Norm (Euclidean Norm)`,
    content: `The L2 norm is the standard Euclidean length of a vector, identical to the **magnitude**:

$$||\\mathbf{v}||_2 = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

It is the default norm in most mathematical and engineering contexts. The L2 norm measures straight-line distance from the origin and is used in least squares problems, Ridge regression, and defining **orthogonality**. The relationship $||\\mathbf{v}||_2^2 = \\mathbf{v} \\cdot \\mathbf{v}$ connects it to the **dot product**.

See [Magnitude in two and three dimensions](!/linear-algebra/vectors/magnitude#1) and [The general norm](!/linear-algebra/vectors/magnitude#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Infinity Norm (Max Norm)`,
    content: `The infinity norm returns the largest absolute component value:

$$||\\mathbf{v}||_\\infty = \\max(|v_1|, |v_2|, \\ldots, |v_n|)$$

It measures the worst-case component magnitude and is used in numerical analysis for bounding errors, defining matrix norms, and evaluating convergence criteria. The infinity norm is always less than or equal to the **L1 norm** and represents the limit of the $L_p$ norms as $p$ approaches infinity.

See [The general norm](!/linear-algebra/vectors/magnitude#2) and [Properties of the norm](!/linear-algebra/vectors/magnitude#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Vector Addition`,
    content: `Vector addition sums corresponding components of two vectors with the same dimensionality:

$$(\\mathbf{A} + \\mathbf{B})_i = a_i + b_i$$

Geometrically, placing vector $\\mathbf{B}$ at the tip of $\\mathbf{A}$ gives the resultant. Addition is commutative ($\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$) and associative. The zero vector is the additive identity. Vector addition models superposition of forces, velocities, and displacements in physics.

See [Vector addition](!/linear-algebra/vectors/basic-operations#1) and [Properties of addition](!/linear-algebra/vectors/basic-operations#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Vector Subtraction`,
    content: `Vector subtraction computes the component-wise difference:

$$(\\mathbf{A} - \\mathbf{B})_i = a_i - b_i$$

The result vector points from the tip of $\\mathbf{B}$ to the tip of $\\mathbf{A}$. Subtraction is equivalent to adding the negation: $\\mathbf{A} - \\mathbf{B} = \\mathbf{A} + (-\\mathbf{B})$. It is used to compute **displacement vectors**, **distances**, and relative positions between points.

See [Vector subtraction](!/linear-algebra/vectors/basic-operations#3) in the basic operations lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Dot Product`,
    content: `The dot product (inner product) of two vectors produces a scalar:

$$\\mathbf{A} \\cdot \\mathbf{B} = \\sum_{i=1}^{n} a_i b_i = ||\\mathbf{A}|| \\, ||\\mathbf{B}|| \\cos\\theta$$

A dot product of zero means the vectors are **orthogonal** (perpendicular). The sign indicates whether the angle between them is acute (positive) or obtuse (negative). The dot product is foundational in **projections**, computing work in physics, and defining angles in any dimension.

See [Algebraic definition](!/linear-algebra/vectors/dot-product#1), [Geometric definition](!/linear-algebra/vectors/dot-product#2) and [Properties of the dot product](!/linear-algebra/vectors/dot-product#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Cross Product`,
    content: `The cross product is defined only in 3D and produces a vector perpendicular to both inputs:

$$\\mathbf{A} \\times \\mathbf{B} = (a_2 b_3 - a_3 b_2, \\; a_3 b_1 - a_1 b_3, \\; a_1 b_2 - a_2 b_1)$$

The magnitude $||\\mathbf{A} \\times \\mathbf{B}|| = ||\\mathbf{A}|| \\, ||\\mathbf{B}|| \\sin\\theta$ equals the area of the parallelogram formed by the two vectors. The direction follows the right-hand rule. The cross product is anticommutative: $\\mathbf{A} \\times \\mathbf{B} = -(\\mathbf{B} \\times \\mathbf{A})$. It is used in physics for torque, angular momentum, and surface normals.

See [Algebraic definition](!/linear-algebra/vectors/cross-product#1), [Geometric interpretation](!/linear-algebra/vectors/cross-product#3) and [Direction and the right-hand rule](!/linear-algebra/vectors/cross-product#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Angle Between Vectors`,
    content: `The angle between two nonzero vectors is computed using the **dot product**:

$$\\theta = \\arccos\\left(\\frac{\\mathbf{A} \\cdot \\mathbf{B}}{||\\mathbf{A}|| \\, ||\\mathbf{B}||}\\right)$$

The result is between 0 and $\\pi$ radians (0 to 180 degrees). An angle of $\\pi/2$ (90 degrees) indicates **orthogonality**. This formula generalizes the concept of angle to any number of dimensions and is used in similarity measures (cosine similarity), physics, and geometry.

See [The angle between vectors](!/linear-algebra/vectors/dot-product#5) and [Sign of the dot product](!/linear-algebra/vectors/dot-product#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Distance Between Vectors`,
    content: `The Euclidean distance between two vectors is the **magnitude** of their difference:

$$d(\\mathbf{A}, \\mathbf{B}) = ||\\mathbf{A} - \\mathbf{B}|| = \\sqrt{\\sum_{i=1}^{n}(a_i - b_i)^2}$$

This is the straight-line distance between the two points in $n$-dimensional space. Distance is always non-negative, equals zero only when the vectors are identical, and satisfies the triangle inequality. It is the foundation of clustering algorithms like k-means, nearest neighbor methods, and error measurement.

See [Distance between vectors](!/linear-algebra/vectors/magnitude#4) in the magnitude lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Vector Projection`,
    content: `The projection of $\\mathbf{A}$ onto $\\mathbf{B}$ gives the component of $\\mathbf{A}$ in the direction of $\\mathbf{B}$:

$$\\text{proj}_{\\mathbf{B}}(\\mathbf{A}) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\mathbf{B} \\cdot \\mathbf{B}} \\, \\mathbf{B}$$

The scalar projection (the coefficient) tells how much of $\\mathbf{A}$ lies along $\\mathbf{B}$. Projection is central to the **Gram-Schmidt process**, **least squares** approximation, and decomposing forces in physics. Together with the **rejection**, it splits any vector into parallel and perpendicular components.

See [Projection onto a vector](!/linear-algebra/orthogonality/projections#1) and [Orthogonal projection](!/linear-algebra/vectors/dot-product#9).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Vector Rejection`,
    content: `The rejection of $\\mathbf{A}$ from $\\mathbf{B}$ is the component of $\\mathbf{A}$ perpendicular to $\\mathbf{B}$:

$$\\text{rej}_{\\mathbf{B}}(\\mathbf{A}) = \\mathbf{A} - \\text{proj}_{\\mathbf{B}}(\\mathbf{A})$$

The rejection vector is always **orthogonal** to $\\mathbf{B}$. Together, projection and rejection form an orthogonal decomposition: $\\mathbf{A} = \\text{proj}_{\\mathbf{B}}(\\mathbf{A}) + \\text{rej}_{\\mathbf{B}}(\\mathbf{A})$. This decomposition is used in the **Gram-Schmidt process** and in computing the distance from a point to a line.

See [The orthogonal decomposition](!/linear-algebra/orthogonality/projections#2), which splits a vector into its projection and its rejection.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Linear Combination`,
    content: `A linear combination multiplies each vector by a scalar coefficient and sums the results:

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$$

The set of all possible linear combinations of a set of vectors forms their **span**. Linear combinations are the fundamental building block of **linear algebra**: solving systems of equations, expressing transformations, and constructing subspaces all reduce to finding appropriate coefficients.

See [Definition](!/linear-algebra/vectors/linear-combinations#1) and [Geometric interpretation](!/linear-algebra/vectors/linear-combinations#2) in the linear combinations lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Span Check`,
    content: `A span check determines whether a target vector can be expressed as a **linear combination** of the given vectors. The calculator sets up the system $[\\mathbf{v}_1 | \\mathbf{v}_2 | \\cdots | \\mathbf{v}_k] \\mathbf{x} = \\mathbf{t}$ and solves via row reduction.

If a solution exists, the target vector is in the span, and the coefficients are reported. If the system is inconsistent, the target is not reachable from the given vectors. Span checking is fundamental to understanding **vector spaces** and **subspaces**.

See [Testing whether a vector is in a span](!/linear-algebra/vector-spaces/span#4) and [Span](!/linear-algebra/vectors/linear-combinations#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Linear Independence`,
    content: `A set of vectors is linearly independent if no vector can be written as a **linear combination** of the others. Equivalently, the only solution to:

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$$

is $c_1 = c_2 = \\cdots = c_k = 0$. The calculator checks this by forming the matrix with the vectors as columns and computing its **rank**. If rank equals the number of vectors, they are independent. A set of $n$ linearly independent vectors in $\\mathbb{R}^n$ forms a **basis**.

See [Testing independence: the homogeneous system](!/linear-algebra/vector-spaces/linear-independence#3) and [Testing independence: the determinant](!/linear-algebra/vector-spaces/linear-independence#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `Orthogonality Check`,
    content: `A set of vectors is orthogonal if every pair has a **dot product** of zero. The calculator computes $\\mathbf{v}_i \\cdot \\mathbf{v}_j$ for all $i \\neq j$ and reports whether all results are zero.

Orthogonal vectors are always **linearly independent**. An orthogonal set where every vector also has unit length is called **orthonormal**. Orthogonal and orthonormal bases simplify projections, decompositions, and coordinate transformations because components can be found independently via dot products.

See [Orthogonality](!/linear-algebra/vectors/dot-product#7) in the dot product lesson and [Orthogonal sets](!/linear-algebra/orthogonality/orthogonal-sets#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj20: {
    title: `Gram-Schmidt Process`,
    content: `The Gram-Schmidt process converts a set of **linearly independent** vectors into an **orthonormal** basis. For each vector in sequence:

1. Subtract the **projections** onto all previously computed basis vectors
2. **Normalize** the result to unit length

$$\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\text{proj}_{\\mathbf{u}_j}(\\mathbf{v}_k), \\quad \\hat{\\mathbf{u}}_k = \\frac{\\mathbf{u}_k}{||\\mathbf{u}_k||}$$

Gram-Schmidt is the foundation of QR decomposition and is used in numerical methods, signal processing, and constructing coordinate systems.

See [The algorithm: two vectors](!/linear-algebra/orthogonality/gram-schmidt#2), [The algorithm: general case](!/linear-algebra/orthogonality/gram-schmidt#3) and the [worked example](!/linear-algebra/orthogonality/gram-schmidt#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `Matrix Form`,
    content: `The matrix form operation arranges a set of vectors as columns of a matrix. If vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$ each have $n$ components, the resulting matrix is $n \\times k$.

This representation connects vector operations to **matrix operations**: the column space of the matrix equals the **span** of the vectors, the **rank** tells how many are linearly independent, and the **determinant** (for square matrices) indicates whether the vectors form a basis. Matrix form is the bridge between vector geometry and matrix algebra.

See [Span and column space](!/linear-algebra/vector-spaces/span#6) and [Linear combinations and systems of equations](!/linear-algebra/vectors/linear-combinations#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `Related Tools and Concepts`,
    content: `This vector calculator covers single-vector analysis, two-vector operations, and multi-vector computations. For matrix-specific operations like **determinants**, **inverses**, **LU decomposition**, and **scalar operations**, use the **Matrix Operations Calculator**.

For solving systems of linear equations with methods like Gaussian elimination and Cramer's Rule, use the **Linear Systems Calculator**. Related topics include **eigenvalues and eigenvectors**, **singular value decomposition**, **matrix norms**, and **linear transformations**.

The lesson hub summarises every operation in [All vector operations at a glance](!/linear-algebra/vectors#10).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj23: {
    title: `Single-Vector Operations`,
    content: `The **Single Vector** category works on one vector $\\mathbf{a}$ and offers seven operations: [Vector Magnitude](!#vector-magnitude), [Unit Vector](!#unit-vector), [Vector Normalization](!#vector-normalization), [Sum of Components](!#sum-of-components), the [L1 Norm](!#l1-norm-manhattan-norm), the [L2 Norm](!#l2-norm-euclidean-norm) and the [Infinity Norm](!#infinity-norm-max-norm). All work in any dimension from $2$ to $10$.

Most of them are ways of measuring length. For $\\mathbf{u} = (3, 4, 0)$ the magnitude, which is the L2 norm, is $5$; the L1 norm adds the absolute components, $7$; the infinity norm takes the largest, $4$; the unit vector divides by the magnitude, $(0.6, 0.8, 0)$, which is what Normalize does too; and the sum of components is $7$. The lesson introduces these measures in [Magnitude and the norm](!/linear-algebra/vectors#6).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj24: {
    title: `Two-Vector Operations`,
    content: `The **Two Vectors** category combines $\\mathbf{a}$ and $\\mathbf{b}$ of the same dimension with eight operations: [Vector Addition](!#vector-addition), [Vector Subtraction](!#vector-subtraction), the [Dot Product](!#dot-product), the [Cross Product](!#cross-product), the [Angle Between Vectors](!#angle-between-vectors), the [Distance Between Vectors](!#distance-between-vectors), [Vector Projection](!#vector-projection) and [Vector Rejection](!#vector-rejection). The cross product needs three dimensions; the calculator refuses it otherwise.

With $\\mathbf{a} = (1, 2, 3)$ and $\\mathbf{b} = (4, 5, 6)$: $\\mathbf{a} + \\mathbf{b} = (5, 7, 9)$, $\\mathbf{a} - \\mathbf{b} = (-3, -3, -3)$, $\\mathbf{a} \\cdot \\mathbf{b} = 32$, $\\mathbf{a} \\times \\mathbf{b} = (-3, 6, -3)$, the angle is about $12.93^\\circ$ and the distance $\\sqrt{27} \\approx 5.196$. The lesson covers them in [Basic vector operations](!/linear-algebra/vectors#5), [The dot product](!/linear-algebra/vectors#7) and [The cross product](!/linear-algebra/vectors#8).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj25: {
    title: `Multiple-Vector Operations`,
    content: `The **Multiple Vectors** category takes two or more vectors, up to ten, and offers six operations: [Linear Combination](!#linear-combination), which needs one coefficient per vector, [Span Check](!#span-check), which needs a target vector, [Linear Independence](!#linear-independence), [Orthogonality Check](!#orthogonality-check), the [Gram-Schmidt Process](!#gram-schmidt-process) and [Matrix Form](!#matrix-form), which writes the vectors as the columns of a matrix. The **+ Add Vector** button appears only in this category.

With $\\mathbf{a} = (1, 0, 0)$ and $\\mathbf{b} = (0, 1, 0)$ the combination $2\\mathbf{a} + 1\\mathbf{b}$ is $(2, 1, 0)$, the target $(3, 4, 0)$ lies in their span, and the two are independent and orthogonal; adding $\\mathbf{a} + \\mathbf{b}$ as a third vector makes the set dependent. The ideas are introduced in [Linear combinations](!/linear-algebra/vectors#9), [Span](!/linear-algebra/vector-spaces#4) and [Linear independence](!/linear-algebra/vector-spaces#5).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj26: {
    title: `Choosing a Category and an Operation`,
    content: `The calculator opens on **Select Operation Type** with three cards: **Single Vector** (magnitude, unit vector, normalization), **Two Vectors** (add, subtract, dot and cross product) and **Multiple Vectors** (linear combinations, spans, independence). Clicking a card moves to the input screen, with the **Category** list and the operations of the chosen category on the left, the **Vector Input** card in the middle and the explanation panel on the right. One vector is created for the single category, two for the other two, all with the current number of dimensions.

Click an operation to select it: a dot marks it, the panel heading takes its name and any earlier result is cleared. Click another category in the same column to switch; the operation list changes and the vectors are rebuilt, so typed components are lost. **Reset All** at the top right returns to the first screen with three dimensions. The three categories are described in [Single-Vector Operations](!#single-vector-operations), [Two-Vector Operations](!#two-vector-operations) and [Multiple-Vector Operations](!#multiple-vector-operations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj27: {
    title: `Setting the Dimension`,
    content: `The **Dimensions** box above the vectors sets how many components every vector has, from $2$ to $10$; the page opens with $3$. Changing it rebuilds every vector at once with empty components, and a value outside the range is refused with "Dimensionality must be between 2 and 10" while the vectors are left as they were. Every vector of a category shares the dimension, which is what the two-vector and multiple-vector operations require.

Two operations care about the number itself: the **Cross Product** is defined only in three dimensions, and Execute answers "Cross product is only defined for 3D vectors" otherwise, and the **Matrix Form** builds a matrix with as many rows as dimensions and as many columns as vectors. Why the cross product is a three-dimensional operation is explained in [Cross Product](!#cross-product).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj28: {
    title: `Entering the Vectors`,
    content: `Each vector is a card headed **Vector A**, **Vector B** and so on with one number box per component; type decimals or negative numbers and move on with Tab. **Random** fills the vector with whole numbers from $-10$ to $10$ and **Clear** empties it; each vector has its own pair of buttons. In the **Multiple Vectors** category, **+ Add Vector** appends another card, up to ten, and a **Remove** button on each card beyond the second takes it away.

Two operations ask for more. **Linear Combination** shows a **Coefficients (one per vector)** row under the cards, one box per vector, and **Span Check** shows a **Target Vector** row with one box per component. An empty or non-numeric component is reported at Execute time as "Vector A has empty components" or "Vector A contains invalid numbers", a missing coefficient as "All coefficients must be valid numbers", and a missing target as "Target vector has empty components". The components are the coordinates described in [Sum of Components](!#sum-of-components).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj29: {
    title: `Calculating and Reading the Result`,
    content: `Click **Execute Operation** under the vectors; the button is grey until an operation is selected. The calculator first checks the input and lists every problem in a red box; when the input passes, the button reads "Calculating..." for a moment and the **Result** box fills. The shape of the answer follows the operation: a number with its name for the magnitude, the norms, the dot product, the angle and the distance, for example $5$ for the magnitude of $(3, 4, 0)$ and $32$ for $(1, 2, 3) \\cdot (4, 5, 6)$; a vector for addition, subtraction, the cross product, the unit vector, projections and linear combinations, such as $(-3, 6, -3)$ for the cross product above; TRUE or FALSE with a note for the span, independence and orthogonality checks; and a matrix for the Gram-Schmidt process and the matrix form.

Decimals are shown rounded. **Reset All** clears everything and returns to the first screen. The operations behind the results are explained from [Vector Magnitude](!#vector-magnitude) on.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj30: {
    title: `The Explanation Panel, Steps and History`,
    content: `The panel on the right of the input card carries the heading of the selected operation and a short text on what it computes, with a link to the section of this page that explains it; before an operation is chosen it describes the category. After a successful Execute, **Calculation Steps** appears under the text with the arithmetic for your numbers, such as the three products of a dot product or the component differences of a subtraction, and a **History** accordion lists every computation of this visit with its time, inputs and result; **Clear history** empties it.

The panel changes as soon as you click another operation, and the steps disappear until the next Execute, so the text always matches the selected operation. Reset All clears the steps but not the history. The operations the panel describes are grouped in [Single-Vector Operations](!#single-vector-operations), [Two-Vector Operations](!#two-vector-operations) and [Multiple-Vector Operations](!#multiple-vector-operations).`,
    before: ``,
    after: ``,
    link: '',
  },

};

const faqQuestions = {
  obj1: {
    question: "What vector operations does this calculator support?",
    answer: "This calculator supports 21 vector operations across three categories: single vector operations (magnitude, unit vector, normalization, sum of components, L1/L2/infinity norms), two-vector operations (addition, subtraction, dot product, cross product, angle, distance, projection, rejection), and multiple vector operations (linear combination, span check, linear independence, orthogonality check, Gram-Schmidt, matrix form)."
  },
  obj2: {
    question: "What is the difference between dot product and cross product?",
    answer: "The dot product produces a scalar equal to the sum of component-wise products and measures how aligned two vectors are. The cross product (3D only) produces a vector perpendicular to both inputs whose magnitude equals the area of the parallelogram they form. A zero dot product means orthogonality while a zero cross product means the vectors are parallel."
  },
  obj3: {
    question: "How do you check if vectors are linearly independent?",
    answer: "Arrange the vectors as columns of a matrix and compute its rank via row reduction. If the rank equals the number of vectors, they are linearly independent. Equivalently, the only solution to c1*v1 + c2*v2 + ... + cn*vn = 0 must be all coefficients equal to zero."
  },
  obj4: {
    question: "What is vector projection used for?",
    answer: "Vector projection decomposes a vector into a component parallel to another vector and a perpendicular component (rejection). It is used in the Gram-Schmidt orthogonalization process, least squares approximation, computing shadows and reflections in graphics, and resolving forces into components along specified directions in physics."
  },
  obj5: {
    question: "What is the Gram-Schmidt process?",
    answer: "The Gram-Schmidt process takes a set of linearly independent vectors and produces an orthonormal basis. It works by sequentially subtracting projections onto previously computed basis vectors and normalizing the result. It is the foundation of QR decomposition used in numerical linear algebra."
  }
};


const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vector Operations Calculator",
    "description": "Free vector calculator with 21 operations: magnitude, dot product, cross product, projection, Gram-Schmidt, linear independence, and more with step-by-step solutions.",
    "url": "https://www.learnmathclass.com/linear-algebra/calculators/vectors",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Single vector operations: magnitude, unit vector, normalization, L1/L2/infinity norms",
      "Two-vector operations: addition, subtraction, dot product, cross product, angle, distance",
      "Vector projection and rejection decomposition",
      "Linear combination with custom coefficients",
      "Span check, linear independence, and orthogonality verification",
      "Gram-Schmidt orthonormalization process",
      "Step-by-step calculation breakdowns and computation history"
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
        "name": "Linear Algebra",
        "item": "https://www.learnmathclass.com/linear-algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Vector Operations Calculator",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators/vectors"
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
};



const detailInstructions = [
  `Pick a card on the first screen, **Single Vector**, **Two Vectors** or **Multiple Vectors**, then an operation in the **Category** column on the left. [Learn more about choosing an operation](!#choosing-a-category-and-an-operation)`,
  `Set **Dimensions** (2 to 10); every vector takes that many components, and the cross product needs exactly 3. [Learn more about the dimension](!#setting-the-dimension)`,
  `Type the components of **Vector A** (and **Vector B**), or use **Random** and **Clear**; in Multiple Vectors, **+ Add Vector** adds a card, and Linear Combination and Span Check show extra boxes for coefficients or a target. [Learn more about entering vectors](!#entering-the-vectors)`,
  `Click **Execute Operation**; a red box lists any problem, otherwise the **Result** box shows a number, a vector, TRUE or FALSE, or a matrix. **Reset All** returns to the first screen. [Learn more about the result](!#calculating-and-reading-the-result)`,
  `Read the panel on the right: the operation's description, the **Calculation Steps** after an Execute, and the **History** of this visit. [Learn more about the panel](!#the-explanation-panel-steps-and-history)`,
];
const demos = {
  'choosing-a-category-and-an-operation': {
    title: 'A category, an operation, another category',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Single Vector\nThe input screen: seven operations on the left, one 3-component vector in the middle.', at: 'tr' },
      { click: { button: 'Single Vector' } },
      { wait: 2800 },
      { say: 'CLICK Magnitude\nA dot marks it; the panel heading reads Magnitude.', at: 'tr' },
      { click: { button: 'Magnitude', exact: true } },
      { wait: 2600 },
      { say: 'CLICK Two Vectors in the Category column\nEight operations; Vector A and Vector B, both empty.', at: 'tr' },
      { click: { button: 'Two Vectors' } },
      { wait: 2800 },
    ],
  },
  'setting-the-dimension': {
    title: 'Two dimensions, a cross product refused, Reset All',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Two Vectors, TYPE 2 as Dimensions\nTwo components per vector.', at: 'tr' },
      { click: { button: 'Two Vectors' } },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { wait: 2800 },
      { say: 'TYPE 1, 2 and 3, 4, CLICK Cross Product, CLICK Execute Operation\nRefused: the cross product is only defined for 3D vectors.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '4' },
      { click: { button: 'Cross Product', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3000 },
      { say: 'CLICK Reset All\nBack to the first screen; three dimensions again.', at: 'tr' },
      { click: { button: 'Reset All', exact: true } },
      { wait: 2400 },
    ],
  },
  'entering-the-vectors': {
    title: 'Typing two vectors, Random, Clear, then a third vector',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Two Vectors, TYPE A = 1, 2, 3 and B = 4, 5, 6\nOne number per component.', at: 'tr' },
      { click: { button: 'Two Vectors' } },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '4' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '5' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '6' },
      { wait: 3000 },
      { say: 'CLICK Random above Vector A\nWhole numbers from −10 to 10 replace the components of A.', at: 'tr' },
      { click: { button: 'Random', exact: true } },
      { wait: 2600 },
      { say: 'CLICK Clear above Vector A\nThe components of A are empty again.', at: 'tr' },
      { click: { button: 'Clear', exact: true } },
      { wait: 2400 },
      { say: 'CLICK Multiple Vectors, then + Add Vector\nA third card, Vector C, with a Remove button.', at: 'tr' },
      { click: { button: 'Multiple Vectors' } },
      { click: { button: '+ Add Vector', exact: true } },
      { wait: 2800 },
    ],
  },
  'calculating-and-reading-the-result': {
    title: 'A magnitude, a dot product, a cross product',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Single Vector, TYPE 3, 4, 0, CLICK Magnitude, CLICK Execute Operation\nThe Result box: 5.', at: 'tr' },
      { click: { button: 'Single Vector' } },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '4' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '0' },
      { click: { button: 'Magnitude', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Two Vectors, TYPE 1, 2, 3 and 4, 5, 6, CLICK Dot Product, CLICK Execute Operation\n1·4 + 2·5 + 3·6 = 32.', at: 'tr' },
      { click: { button: 'Two Vectors' } },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '4' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '5' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '6' },
      { click: { button: 'Dot Product', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3400 },
      { say: 'CLICK Cross Product, CLICK Execute Operation\nThe vector (−3, 6, −3).', at: 'tr' },
      { click: { button: 'Cross Product', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3000 },
    ],
  },
  'the-explanation-panel-steps-and-history': {
    title: 'The panel text, the steps, the history',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Two Vectors, TYPE both vectors, CLICK Addition\nThe panel heading reads Addition with its description.', at: 'tr' },
      { click: { button: 'Two Vectors' } },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '4' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '5' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '6' },
      { click: { button: 'Addition', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Execute Operation\n(5, 7, 9); Calculation Steps appear under the text and History (1) below.', at: 'tr' },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3200 },
      { say: 'CLICK History (1)\nThe entry opens with its time, inputs and result.', at: 'tr' },
      { click: { button: 'History' } },
      { wait: 2600 },
    ],
  },
};

   return {
  props: {
    sectionsContent,
    vectorExplanations,
    detailInstructions,
    demos,
    faqQuestions,
    schemas,
    seoData: {
      title: "Vector Calculator - Interactive Operations | Learn Math Class",
      description: "Free vector calculator with 21 operations: dot product, cross product, magnitude, projection, Gram-Schmidt, linear independence, and more. Step-by-step solutions.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/calculators/vectors",
      name: "Vector Operations Calculator"
    },
  }
}
   }
export default function VectorCalculatorPage({seoData, sectionsContent, vectorExplanations, detailInstructions = [], demos = {}, faqQuestions, schemas}) {
   const demoPlayer = (slug) => (
    <ToolDemoPlayer
      key={`demo-${slug}`}
      script={demos[slug].script}
      title={demos[slug].title}
      label={`Demo: ${demos[slug].title}`}
      scale={demos[slug].scale || 0.4}
      minHeight={demos[slug].minHeight || undefined}
      renderText={processContent}
    >
      <VectorCalculator explanations={vectorExplanations} />
    </ToolDemoPlayer>
   )
   const genericSections=[
  { id:'choosing-a-category-and-an-operation', title:sectionsContent.obj26.title, link:sectionsContent.obj26.link, content:[demoPlayer('choosing-a-category-and-an-operation'), sectionsContent.obj26.content] },
  { id:'setting-the-dimension', title:sectionsContent.obj27.title, link:sectionsContent.obj27.link, content:[demoPlayer('setting-the-dimension'), sectionsContent.obj27.content] },
  { id:'entering-the-vectors', title:sectionsContent.obj28.title, link:sectionsContent.obj28.link, content:[demoPlayer('entering-the-vectors'), sectionsContent.obj28.content] },
  { id:'calculating-and-reading-the-result', title:sectionsContent.obj29.title, link:sectionsContent.obj29.link, content:[demoPlayer('calculating-and-reading-the-result'), sectionsContent.obj29.content] },
  { id:'the-explanation-panel-steps-and-history', title:sectionsContent.obj30.title, link:sectionsContent.obj30.link, content:[demoPlayer('the-explanation-panel-steps-and-history'), sectionsContent.obj30.content] },
  { id:'single-vector-operations', title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[sectionsContent.obj23.content] },
  { id:'vector-magnitude', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
  { id:'unit-vector', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
  { id:'vector-normalization', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
  { id:'sum-of-components', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
  { id:'l1-norm-manhattan-norm', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
  { id:'l2-norm-euclidean-norm', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
  { id:'infinity-norm-max-norm', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
  { id:'two-vector-operations', title:sectionsContent.obj24.title, link:sectionsContent.obj24.link, content:[sectionsContent.obj24.content] },
  { id:'vector-addition', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
  { id:'vector-subtraction', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
  { id:'dot-product', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
  { id:'cross-product', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
  { id:'angle-between-vectors', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
  { id:'distance-between-vectors', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
  { id:'vector-projection', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
  { id:'vector-rejection', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
  { id:'multiple-vector-operations', title:sectionsContent.obj25.title, link:sectionsContent.obj25.link, content:[sectionsContent.obj25.content] },
  { id:'linear-combination', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content] },
  { id:'span-check', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content] },
  { id:'linear-independence', title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content] },
  { id:'orthogonality-check', title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content] },
  { id:'gram-schmidt-process', title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content] },
  { id:'matrix-form', title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content] },
  { id:'related-tools-and-concepts', title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content] },
]
  return (
   <>
 <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Vectors Calculator</h1>
   <div style={{marginBottom:'20px'}}>
     <ExplanationDetails instructions={detailInstructions} title='How to use Vectors Calculator' />
   </div>
   <br/>
   
   <div style={{transform:'scale(1)',marginLeft:'-250px'}}>
   
    <SiblingsNav topOffset="200px" title='Similar Calculators' 
    bg="#f0f4ff"
  color="#1f2937"
  activeColor="#4285f4"
  activeBg="#f0f7ff">
  <VectorCalculator explanations={vectorExplanations}/>
   </SiblingsNav>
  
   </div>
   
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
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
          //  "#f2f2f2"
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
