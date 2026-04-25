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


const descriptions = {
  single: {
    _default:
      'Single vector operations analyze properties of one vector. Choose an operation to see details.',
    Magnitude:
      'The magnitude (length) of a vector is the square root of the sum of its squared components: ||v|| = sqrt(v1^2 + v2^2 + ... + vn^2). Also called the Euclidean norm or L2 norm.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#1) \u2193@',
    'Unit Vector':
      'A unit vector has magnitude 1 and points in the same direction as the original. Found by dividing each component by the magnitude: u = v / ||v||. Undefined for the zero vector.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#2) \u2193@',
    Normalize:
      'Normalization scales a vector to unit length while preserving direction. The result is v / ||v||. Commonly used in machine learning, physics, and computer graphics to standardize vector lengths.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#3) \u2193@',
    'Sum of Components':
      'Computes the sum of all components of the vector: S = v1 + v2 + ... + vn. Useful for checking properties like zero-sum vectors or computing averages.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#4) \u2193@',
    'L1 Norm':
      'The L1 norm (Manhattan norm) sums the absolute values of all components: ||v||_1 = |v1| + |v2| + ... + |vn|. Measures distance along axis-aligned paths. Used in sparse optimization and LASSO regression.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#5) \u2193@',
    'L2 Norm':
      'The L2 norm is the standard Euclidean length: ||v||_2 = sqrt(v1^2 + v2^2 + ... + vn^2). Identical to the magnitude. Used as the default norm in most mathematical and engineering contexts.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#6) \u2193@',
    'Infinity Norm':
      'The infinity norm (max norm) returns the largest absolute component value: ||v||_inf = max(|v1|, |v2|, ..., |vn|). Measures the worst-case component magnitude. Used in numerical analysis for error bounds.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#7) \u2193@',
  },
  two: {
    _default:
      'Two-vector operations combine a pair of vectors to produce a scalar, vector, or angle. Choose an operation to learn more.',
    Addition:
      'Vector addition sums corresponding components: (A+B)_i = a_i + b_i. Both vectors must have the same dimensionality. Addition is commutative and associative.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#8) \u2193@',
    Subtraction:
      'Vector subtraction finds the component-wise difference: (A-B)_i = a_i - b_i. The result points from the tip of B to the tip of A when both start at the origin.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#9) \u2193@',
    'Dot Product':
      'The dot product sums the products of corresponding components: A . B = a1*b1 + a2*b2 + ... + an*bn. It equals ||A|| ||B|| cos(theta). Zero dot product means the vectors are orthogonal.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#10) \u2193@',
    'Cross Product':
      'The cross product (3D only) produces a vector perpendicular to both inputs: A x B = (a2*b3 - a3*b2, a3*b1 - a1*b3, a1*b2 - a2*b1). Its magnitude equals ||A|| ||B|| sin(theta).\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#11) \u2193@',
    'Angle Between':
      'The angle between two vectors is found via the dot product: theta = arccos((A . B) / (||A|| ||B||)). Returns a value between 0 and 180 degrees (0 and pi radians).\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#12) \u2193@',
    Distance:
      'The distance between two vectors is the magnitude of their difference: d(A, B) = ||A - B||. This is the standard Euclidean distance in n-dimensional space.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#13) \u2193@',
    Projection:
      'The projection of A onto B gives the component of A in the direction of B: proj_B(A) = ((A . B) / (B . B)) * B. The result is a vector parallel to B.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#14) \u2193@',
    Rejection:
      'The rejection of A from B is the component of A perpendicular to B: rej_B(A) = A - proj_B(A). Together, projection and rejection decompose A into parallel and perpendicular parts.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#15) \u2193@',
  },
  multiple: {
    _default:
      'Multiple vector operations analyze sets of vectors for dependencies, spans, and orthogonal bases. Choose an operation to learn more.',
    'Linear Combination':
      'A linear combination multiplies each vector by a scalar coefficient and sums: c1*v1 + c2*v2 + ... + cn*vn. Enter coefficients to compute the resulting vector.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#16) \u2193@',
    'Span Check':
      'Checks whether a target vector can be expressed as a linear combination of the given vectors. Solves the system [v1|v2|...|vn]x = t using row reduction.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#17) \u2193@',
    'Linear Independence':
      'Tests whether no vector in the set can be written as a linear combination of the others. Checks if the only solution to c1*v1 + ... + cn*vn = 0 is all zeros.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#18) \u2193@',
    'Orthogonality Check':
      'Verifies whether all pairs of vectors are orthogonal (perpendicular). Computes the dot product for every pair and checks if all equal zero.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#19) \u2193@',
    'Gram-Schmidt':
      'Produces an orthonormal basis from the input vectors using the Gram-Schmidt process. Each vector is made orthogonal to all previous ones, then normalized to unit length.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#20) \u2193@',
    'Matrix Form':
      'Arranges the input vectors as columns (or rows) of a matrix. Useful for visualizing the system, computing determinants, or preparing data for further matrix operations.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/vectors#21) \u2193@',
  },
};

const sectionsContent = {

  obj1: {
    title: `Vector Magnitude`,
    content: `The magnitude (or length) of a vector $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$ measures its distance from the origin:

$$||\\mathbf{v}|| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

The magnitude is always non-negative and equals zero only for the zero vector. It is also called the **Euclidean norm** or **L2 norm**. In physics, the magnitude of a velocity vector gives speed, and the magnitude of a force vector gives the force strength.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Unit Vector`,
    content: `A unit vector has magnitude 1 and indicates direction only. Given a nonzero vector $\\mathbf{v}$, the corresponding unit vector is:

$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$$

The standard basis vectors $\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n$ are unit vectors pointing along each coordinate axis. Unit vectors are essential in defining directions for **projections**, constructing **orthonormal bases**, and representing orientations in physics and computer graphics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Vector Normalization`,
    content: `Normalization is the process of converting a vector to a unit vector by dividing each component by the magnitude. The result preserves direction while setting the length to 1.

Normalization is undefined for the zero vector since division by zero is not possible. It is widely used in machine learning (feature normalization), computer graphics (surface normals), and physics (direction vectors). Normalized vectors simplify many formulas because $||\\hat{\\mathbf{v}}|| = 1$ eliminates magnitude terms.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Sum of Components`,
    content: `The sum of components adds all entries of a vector:

$$S = v_1 + v_2 + \\cdots + v_n$$

This operation is useful for checking whether a vector sums to zero (important in certain probability and physics contexts), computing averages when divided by $n$, and verifying conservation laws. It is a special case of the **dot product** with the all-ones vector: $S = \\mathbf{v} \\cdot \\mathbf{1}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `L1 Norm (Manhattan Norm)`,
    content: `The L1 norm sums the absolute values of all vector components:

$$||\\mathbf{v}||_1 = |v_1| + |v_2| + \\cdots + |v_n|$$

Also called the Manhattan norm or taxicab norm, it measures distance along axis-aligned paths rather than straight lines. The L1 norm is central to **sparse optimization** problems, LASSO regression, and compressed sensing, where it promotes solutions with many zero entries. It is always greater than or equal to the **L2 norm**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `L2 Norm (Euclidean Norm)`,
    content: `The L2 norm is the standard Euclidean length of a vector, identical to the **magnitude**:

$$||\\mathbf{v}||_2 = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

It is the default norm in most mathematical and engineering contexts. The L2 norm measures straight-line distance from the origin and is used in least squares problems, Ridge regression, and defining **orthogonality**. The relationship $||\\mathbf{v}||_2^2 = \\mathbf{v} \\cdot \\mathbf{v}$ connects it to the **dot product**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Infinity Norm (Max Norm)`,
    content: `The infinity norm returns the largest absolute component value:

$$||\\mathbf{v}||_\\infty = \\max(|v_1|, |v_2|, \\ldots, |v_n|)$$

It measures the worst-case component magnitude and is used in numerical analysis for bounding errors, defining matrix norms, and evaluating convergence criteria. The infinity norm is always less than or equal to the **L1 norm** and represents the limit of the $L_p$ norms as $p$ approaches infinity.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Vector Addition`,
    content: `Vector addition sums corresponding components of two vectors with the same dimensionality:

$$(\\mathbf{A} + \\mathbf{B})_i = a_i + b_i$$

Geometrically, placing vector $\\mathbf{B}$ at the tip of $\\mathbf{A}$ gives the resultant. Addition is commutative ($\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$) and associative. The zero vector is the additive identity. Vector addition models superposition of forces, velocities, and displacements in physics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Vector Subtraction`,
    content: `Vector subtraction computes the component-wise difference:

$$(\\mathbf{A} - \\mathbf{B})_i = a_i - b_i$$

The result vector points from the tip of $\\mathbf{B}$ to the tip of $\\mathbf{A}$. Subtraction is equivalent to adding the negation: $\\mathbf{A} - \\mathbf{B} = \\mathbf{A} + (-\\mathbf{B})$. It is used to compute **displacement vectors**, **distances**, and relative positions between points.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Dot Product`,
    content: `The dot product (inner product) of two vectors produces a scalar:

$$\\mathbf{A} \\cdot \\mathbf{B} = \\sum_{i=1}^{n} a_i b_i = ||\\mathbf{A}|| \\, ||\\mathbf{B}|| \\cos\\theta$$

A dot product of zero means the vectors are **orthogonal** (perpendicular). The sign indicates whether the angle between them is acute (positive) or obtuse (negative). The dot product is foundational in **projections**, computing work in physics, and defining angles in any dimension.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Cross Product`,
    content: `The cross product is defined only in 3D and produces a vector perpendicular to both inputs:

$$\\mathbf{A} \\times \\mathbf{B} = (a_2 b_3 - a_3 b_2, \\; a_3 b_1 - a_1 b_3, \\; a_1 b_2 - a_2 b_1)$$

The magnitude $||\\mathbf{A} \\times \\mathbf{B}|| = ||\\mathbf{A}|| \\, ||\\mathbf{B}|| \\sin\\theta$ equals the area of the parallelogram formed by the two vectors. The direction follows the right-hand rule. The cross product is anticommutative: $\\mathbf{A} \\times \\mathbf{B} = -(\\mathbf{B} \\times \\mathbf{A})$. It is used in physics for torque, angular momentum, and surface normals.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Angle Between Vectors`,
    content: `The angle between two nonzero vectors is computed using the **dot product**:

$$\\theta = \\arccos\\left(\\frac{\\mathbf{A} \\cdot \\mathbf{B}}{||\\mathbf{A}|| \\, ||\\mathbf{B}||}\\right)$$

The result is between 0 and $\\pi$ radians (0 to 180 degrees). An angle of $\\pi/2$ (90 degrees) indicates **orthogonality**. This formula generalizes the concept of angle to any number of dimensions and is used in similarity measures (cosine similarity), physics, and geometry.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Distance Between Vectors`,
    content: `The Euclidean distance between two vectors is the **magnitude** of their difference:

$$d(\\mathbf{A}, \\mathbf{B}) = ||\\mathbf{A} - \\mathbf{B}|| = \\sqrt{\\sum_{i=1}^{n}(a_i - b_i)^2}$$

This is the straight-line distance between the two points in $n$-dimensional space. Distance is always non-negative, equals zero only when the vectors are identical, and satisfies the triangle inequality. It is the foundation of clustering algorithms like k-means, nearest neighbor methods, and error measurement.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Vector Projection`,
    content: `The projection of $\\mathbf{A}$ onto $\\mathbf{B}$ gives the component of $\\mathbf{A}$ in the direction of $\\mathbf{B}$:

$$\\text{proj}_{\\mathbf{B}}(\\mathbf{A}) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\mathbf{B} \\cdot \\mathbf{B}} \\, \\mathbf{B}$$

The scalar projection (the coefficient) tells how much of $\\mathbf{A}$ lies along $\\mathbf{B}$. Projection is central to the **Gram-Schmidt process**, **least squares** approximation, and decomposing forces in physics. Together with the **rejection**, it splits any vector into parallel and perpendicular components.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Vector Rejection`,
    content: `The rejection of $\\mathbf{A}$ from $\\mathbf{B}$ is the component of $\\mathbf{A}$ perpendicular to $\\mathbf{B}$:

$$\\text{rej}_{\\mathbf{B}}(\\mathbf{A}) = \\mathbf{A} - \\text{proj}_{\\mathbf{B}}(\\mathbf{A})$$

The rejection vector is always **orthogonal** to $\\mathbf{B}$. Together, projection and rejection form an orthogonal decomposition: $\\mathbf{A} = \\text{proj}_{\\mathbf{B}}(\\mathbf{A}) + \\text{rej}_{\\mathbf{B}}(\\mathbf{A})$. This decomposition is used in the **Gram-Schmidt process** and in computing the distance from a point to a line.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Linear Combination`,
    content: `A linear combination multiplies each vector by a scalar coefficient and sums the results:

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$$

The set of all possible linear combinations of a set of vectors forms their **span**. Linear combinations are the fundamental building block of **linear algebra**: solving systems of equations, expressing transformations, and constructing subspaces all reduce to finding appropriate coefficients.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Span Check`,
    content: `A span check determines whether a target vector can be expressed as a **linear combination** of the given vectors. The calculator sets up the system $[\\mathbf{v}_1 | \\mathbf{v}_2 | \\cdots | \\mathbf{v}_k] \\mathbf{x} = \\mathbf{t}$ and solves via row reduction.

If a solution exists, the target vector is in the span, and the coefficients are reported. If the system is inconsistent, the target is not reachable from the given vectors. Span checking is fundamental to understanding **vector spaces** and **subspaces**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Linear Independence`,
    content: `A set of vectors is linearly independent if no vector can be written as a **linear combination** of the others. Equivalently, the only solution to:

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$$

is $c_1 = c_2 = \\cdots = c_k = 0$. The calculator checks this by forming the matrix with the vectors as columns and computing its **rank**. If rank equals the number of vectors, they are independent. A set of $n$ linearly independent vectors in $\\mathbb{R}^n$ forms a **basis**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `Orthogonality Check`,
    content: `A set of vectors is orthogonal if every pair has a **dot product** of zero. The calculator computes $\\mathbf{v}_i \\cdot \\mathbf{v}_j$ for all $i \\neq j$ and reports whether all results are zero.

Orthogonal vectors are always **linearly independent**. An orthogonal set where every vector also has unit length is called **orthonormal**. Orthogonal and orthonormal bases simplify projections, decompositions, and coordinate transformations because components can be found independently via dot products.`,
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

Gram-Schmidt is the foundation of QR decomposition and is used in numerical methods, signal processing, and constructing coordinate systems.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `Matrix Form`,
    content: `The matrix form operation arranges a set of vectors as columns of a matrix. If vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$ each have $n$ components, the resulting matrix is $n \\times k$.

This representation connects vector operations to **matrix operations**: the column space of the matrix equals the **span** of the vectors, the **rank** tells how many are linearly independent, and the **determinant** (for square matrices) indicates whether the vectors form a basis. Matrix form is the bridge between vector geometry and matrix algebra.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `Related Tools and Concepts`,
    content: `This vector calculator covers single-vector analysis, two-vector operations, and multi-vector computations. For matrix-specific operations like **determinants**, **inverses**, **LU decomposition**, and **scalar operations**, use the **Matrix Operations Calculator**.

For solving systems of linear equations with methods like Gaussian elimination and Cramer's Rule, use the **Linear Systems Calculator**. Related topics include **eigenvalues and eigenvectors**, **singular value decomposition**, **matrix norms**, and **linear transformations**.`,
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



   return {
  props: {
    sectionsContent,
    descriptions,
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
export default function VectorCalculatorPage({seoData, sectionsContent, descriptions, faqQuestions, schemas}) {
   const genericSections=[
  { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
  { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
  { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
  { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
  { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
  { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
  { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
  { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
  { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
  { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
  { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
  { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
  { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
  { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
  { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
  { id:'16', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content] },
  { id:'17', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content] },
  { id:'18', title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content] },
  { id:'19', title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content] },
  { id:'20', title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content] },
  { id:'21', title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content] },
  { id:'22', title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content] },
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
   <br/>
   
   <div style={{transform:'scale(1)',marginLeft:'-250px'}}>
   
    <SiblingsNav topOffset="200px" title='Similar Calculators' 
    bg="#f0f4ff"
  color="#1f2937"
  activeColor="#4285f4"
  activeBg="#f0f7ff">
  <VectorCalculator descriptions={descriptions}/>
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
