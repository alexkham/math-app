import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "vectors",
  "vector definition",
  "vector notation",
  "vector components",
  "unit vector",
  "zero vector",
  "position vector",
  "vector magnitude",
  "dot product",
  "cross product",
  "linear combination",
  "standard basis vectors",
  "vector operations",
  "vectors linear algebra"
]
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

 const sectionsContent = {
  obj1: {
    title: `What Is a Vector`,
    content: `At its core, a vector is a mathematical object defined by two attributes: a magnitude (a non-negative number representing size) and a direction (an orientation in space). A scalar, by contrast, is fully specified by a single number — temperature, mass, or area require no directional component. A vector demands both.

Geometrically, a vector appears as a directed line segment: an arrow drawn from an initial point to a terminal point. The arrow's length encodes the magnitude, and the way it points encodes the direction. Two arrows that share the same length and orientation represent the same vector, regardless of where in space they are positioned. This is the concept of a free vector — identity is determined entirely by magnitude and direction, never by location.

Algebraically, a vector in $\\mathbb{R}^n$ is an ordered $n$-tuple of real numbers:

$$\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$$

Each entry $v_i$ is called a component. In $\\mathbb{R}^2$, a vector has two components and can be plotted on a coordinate plane. In $\\mathbb{R}^3$, three components place it in three-dimensional space. For $n > 3$, direct visualization is no longer possible, but the algebraic framework continues to function identically. The components of a vector encode both its magnitude and its direction numerically, linking the geometric and algebraic viewpoints into a single coherent object.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Notation and Representation`,
    content: `Several notational conventions exist for vectors, and the choice often depends on context. Boldface lowercase letters are standard in printed text:

$$\\mathbf{v},\\quad \\mathbf{u},\\quad \\mathbf{w}$$

In handwritten work, an arrow placed above the letter serves the same purpose: $\\vec{v}$, $\\vec{u}$, $\\vec{w}$. When a vector runs from a specific point $A$ to a specific point $B$, the notation $\\vec{AB}$ identifies both the direction and the endpoints explicitly.

The components of a vector can be written as a row or as a column. Row notation lists the entries horizontally:

$$\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$$

Column notation stacks them vertically:

$$\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{pmatrix}$$

The distinction matters when vectors interact with [matrices](!/linear-algebra/matrix): matrix multiplication requires column vectors on the right side of the product. Throughout this section, both formats appear depending on which is clearer for the situation at hand.

## Standard Basis Vectors

In any $\\mathbb{R}^n$, the standard basis consists of $n$ vectors, each with a $1$ in exactly one position and $0$ everywhere else. In $\\mathbb{R}^3$, these are commonly written as $\\mathbf{i}$, $\\mathbf{j}$, and $\\mathbf{k}$:

$$\\mathbf{i} = (1, 0, 0), \\quad \\mathbf{j} = (0, 1, 0), \\quad \\mathbf{k} = (0, 0, 1)$$

In general $\\mathbb{R}^n$, the notation $\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n$ is used. Any vector can be decomposed as a sum of scaled basis vectors: $\\mathbf{v} = v_1\\mathbf{e}_1 + v_2\\mathbf{e}_2 + \\cdots + v_n\\mathbf{e}_n$. This decomposition makes the components explicit and connects directly to the idea of a [linear combination](!/linear-algebra/vectors/linear-combinations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Types of Vectors`,
    content: `Not all vectors play the same role. Several categories appear repeatedly throughout linear algebra, and recognizing them early simplifies everything that follows.

## The Zero Vector

The zero vector $\\mathbf{0}$ has every component equal to zero. Its [magnitude](!/linear-algebra/vectors/magnitude) is $0$, and it has no defined direction. Despite this, the zero vector is indispensable: it serves as the additive identity under [vector addition](!/linear-algebra/vectors/basic-operations), meaning $\\mathbf{v} + \\mathbf{0} = \\mathbf{v}$ for every vector $\\mathbf{v}$.

## Unit Vectors

A unit vector has magnitude exactly $1$. It encodes pure direction with no scaling. The standard basis vectors are all unit vectors, but any nonzero vector can be converted into a unit vector through normalization — a process covered in detail on the magnitude page. Unit vectors are essential for isolating directional information from length.

## Position Vectors

A position vector has its tail fixed at the origin and its head at a specific point in space. The vector $\\mathbf{p} = (3, 5)$ as a position vector points from the origin to the point $(3, 5)$. This convention establishes a one-to-one correspondence between points and vectors: every point in $\\mathbb{R}^n$ corresponds to exactly one position vector, and every position vector identifies exactly one point.

## Free Vectors

A free vector is defined solely by its magnitude and direction, with no attachment to a particular location. Translating a free vector to a different starting point does not change the vector. Two arrows in different parts of the plane that share the same length and orientation represent the same free vector. Most of the algebra in this section treats vectors as free — their behavior under operations depends only on their components, not on where they happen to be drawn.

## Equal Vectors

Two vectors are equal when all their corresponding components match: $\\mathbf{a} = \\mathbf{b}$ if and only if $a_i = b_i$ for every $i$. Geometrically, equal vectors have the same magnitude and the same direction. Position plays no part — a vector drawn at one corner of a diagram is identical to a vector drawn at another corner, provided the components agree.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Vector Properties`,
    content: `Every vector carries intrinsic attributes — magnitude, direction, and dimensionality — that exist independently of any operation. Magnitude measures how large a vector is, direction specifies where it points, and dimensionality records how many components it contains. These are not consequences of addition or multiplication; they belong to the vector itself.

Beyond what individual vectors possess, vectors also relate to one another through structural relationships. Two vectors are equal when their components match exactly. They are parallel when one is a scalar multiple of the other, meaning they share the same or opposite direction. They are orthogonal when their [dot product](!/linear-algebra/vectors/dot-product) equals zero, indicating that they meet at a right angle in the geometric interpretation.

The [properties](!/linear-algebra/vectors/properties) page collects both the intrinsic and relational attributes in a single reference, with each property developed fully on the page where it naturally belongs.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Vector Properties](!/linear-algebra/vectors/properties) →@`,
    link: '',
  },
  obj5: {
    title: `Basic Vector Operations`,
    content: `Three operations form the algebraic backbone of everything in this section: addition, subtraction, and scalar multiplication. Each operates component by component, each produces a vector in the same $\\mathbb{R}^n$, and each has a geometric interpretation that reinforces the algebra.

Vector addition combines two vectors into a third by summing their corresponding components. Geometrically, this is the tip-to-tail construction — place the tail of the second vector at the head of the first, and the sum runs from the starting tail to the ending head. The parallelogram method provides an equivalent picture: the sum is the diagonal of the parallelogram formed by the two vectors.

Subtraction reverses the process: $\\mathbf{a} - \\mathbf{b}$ adds $\\mathbf{a}$ to the negation of $\\mathbf{b}$, producing the vector that points from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$.

Scalar multiplication scales a vector by a real number. Multiplying by a positive scalar stretches or compresses the vector without changing its direction; multiplying by a negative scalar also reverses it. These three operations satisfy a collection of algebraic rules — commutativity, associativity, distributivity — that make structured computation possible.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Basic Vector Operations](!/linear-algebra/vectors/basic-operations) →@`,
    link: '',
  },
  obj6: {
    title: `Magnitude and the Norm`,
    content: `The magnitude of a vector quantifies its length as a single non-negative number. In $\\mathbb{R}^2$, this is the hypotenuse of the right triangle formed by the components. In $\\mathbb{R}^3$, the same idea extends through a second application of the Pythagorean theorem. The general formula for any $\\mathbb{R}^n$ is:

$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

This quantity is called the Euclidean norm, and it satisfies three fundamental properties: it is never negative, it scales predictably under scalar multiplication ($\\|c\\mathbf{v}\\| = |c|\\|\\mathbf{v}\\|$), and it obeys the triangle inequality ($\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$).

The norm also provides a natural notion of distance: the distance between two vectors $\\mathbf{a}$ and $\\mathbf{b}$ is $\\|\\mathbf{a} - \\mathbf{b}\\|$. Closely tied to magnitude is the concept of a unit vector — a vector whose norm equals $1$. Any nonzero vector can be rescaled to unit length through normalization, a process that extracts pure direction by dividing out the magnitude.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Magnitude and the Norm](!/linear-algebra/vectors/magnitude) →@`,
    link: '',
  },
  obj7: {
    title: `The Dot Product`,
    content: `The [dot product](!/linear-algebra/vectors/dot-product) is the first operation in this section that does not return a vector. It takes two vectors and produces a scalar, computed by multiplying corresponding components and summing the results:

$$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n$$

This algebraic formula has a geometric equivalent: $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\|\\mathbf{b}\\|\\cos\\theta$, where $\\theta$ is the angle between the two vectors. The geometric form reveals what the dot product actually measures — how much two vectors align directionally. When the dot product is positive, the vectors point roughly the same way. When it is negative, they point roughly in opposite directions. When it equals zero, the vectors are orthogonal: perpendicular in the geometric sense.

This connection to angles makes the dot product the gateway to projection: decomposing one vector into a component along another and a component perpendicular to it.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[The Dot Product](!/linear-algebra/vectors/dot-product) →@`,
    link: '',
  },
  obj8: {
    title: `The Cross Product`,
    content: `Where the dot product takes two vectors and returns a scalar, the [cross product](!/linear-algebra/vectors/cross-product) takes two vectors and returns a new vector. This returned vector is perpendicular to both inputs, giving the cross product a geometric role that the dot product cannot fill: it finds directions orthogonal to a given plane.

The cross product is defined exclusively in $\\mathbb{R}^3$. For vectors $\\mathbf{a} = (a_1, a_2, a_3)$ and $\\mathbf{b} = (b_1, b_2, b_3)$:

$$\\mathbf{a} \\times \\mathbf{b} = (a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1)$$

The magnitude $\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\|\\mathbf{b}\\|\\sin\\theta$ equals the area of the parallelogram that the two vectors span. The direction is determined by the right-hand rule, which introduces the concept of orientation — a handedness to three-dimensional space that has no analogue in the dot product. Unlike most operations encountered so far, the cross product is anti-commutative: swapping the order of the inputs reverses the direction of the result.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[The Cross Product](!/linear-algebra/vectors/cross-product) →@`,
    link: '',
  },
  obj9: {
    title: `Linear Combinations`,
    content: `Every operation covered so far — addition, subtraction, scalar multiplication — is a special case of a single unifying idea: the [linear combination](!/linear-algebra/vectors/linear-combinations). Given vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$ and scalars $c_1, c_2, \\ldots, c_k$, the expression

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$$

is a linear combination of those vectors. Adding two vectors is the special case where $k = 2$ and both scalars equal $1$. Scalar multiplication is the case $k = 1$.

The set of all possible linear combinations of a given collection of vectors is called the span of that collection. The span of a single nonzero vector is a line through the origin. The span of two non-parallel vectors is a plane. The span of three non-coplanar vectors in $\\mathbb{R}^3$ fills the entire space. Asking whether a particular vector lies in the span of a given set turns out to be equivalent to asking whether a certain [system of equations](!/linear-algebra/linear-systems) has a solution — a connection that links vectors directly to the machinery of matrices and row reduction.

Linear combinations also set the stage for two concepts developed in the [vector spaces](!/linear-algebra/vector-spaces) section: linear independence, which identifies when no vector in a set is redundant, and basis, which captures the minimal spanning set needed to reach every point in a space.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Linear Combinations](!/linear-algebra/vectors/linear-combinations) →@`,
    link: '',
  },
};

 const introContent = {
   id: `intro`,
  title: `Where Algebra Meets Geometry`,
  content: `A vector captures two pieces of information in a single mathematical object: how far and which way. This dual nature — part algebraic, part geometric — makes vectors the natural language for describing anything that requires both a size and an orientation. In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, vectors are arrows that can be drawn, measured, and rotated. In $\\mathbb{R}^n$, they generalize beyond visual intuition into ordered lists of numbers that still obey the same algebraic rules. This section develops vectors from the ground up: what they are, how they behave, and the operations that give them structure.`,
};

const faqQuestions = {
  obj1: {
    question: "What is a vector?",
    answer: "A vector is a mathematical object with two attributes: magnitude (size) and direction. Geometrically, it's a directed line segment (arrow). Algebraically, it's an ordered n-tuple of real numbers v = (v₁, v₂, ..., vₙ) where each entry is a component.",
    sectionId: "1"
  },
  obj2: {
    question: "How are vectors notated?",
    answer: "Vectors use boldface letters (v, u, w) in print or arrows above letters (v⃗) when handwritten. Components can be written as rows (v₁, v₂) or columns. Standard basis vectors in ℝ³ are i, j, k. Any vector decomposes as a sum of scaled basis vectors.",
    sectionId: "2"
  },
  obj3: {
    question: "What are the different types of vectors?",
    answer: "Key types include: the zero vector (all components zero, no direction), unit vectors (magnitude 1, pure direction), position vectors (tail at origin), and free vectors (defined by magnitude and direction only, not location). Two vectors are equal when all components match.",
    sectionId: "3"
  },
  obj4: {
    question: "What properties do vectors have?",
    answer: "Vectors have intrinsic properties (magnitude, direction, dimensionality) and relational properties. Two vectors are parallel if one is a scalar multiple of the other. They are orthogonal if their dot product equals zero, meaning they meet at a right angle.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the basic vector operations?",
    answer: "The three fundamental operations are: addition (sum corresponding components, tip-to-tail construction), subtraction (add the negation), and scalar multiplication (scale each component by a real number). These operations satisfy commutativity, associativity, and distributivity.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the magnitude of a vector?",
    answer: "Magnitude (or norm) is the vector's length: ‖v‖ = √(v₁² + v₂² + ... + vₙ²). It's always non-negative, scales predictably under scalar multiplication (‖cv‖ = |c|‖v‖), and obeys the triangle inequality. Distance between vectors is ‖a - b‖.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the dot product?",
    answer: "The dot product takes two vectors and returns a scalar: a·b = a₁b₁ + a₂b₂ + ... + aₙbₙ. Geometrically, a·b = ‖a‖‖b‖cosθ. It measures alignment: positive means similar direction, negative means opposite, zero means orthogonal (perpendicular).",
    sectionId: "7"
  },
  obj8: {
    question: "What is the cross product?",
    answer: "The cross product (ℝ³ only) returns a vector perpendicular to both inputs. Its magnitude ‖a × b‖ = ‖a‖‖b‖sinθ equals the parallelogram area. Direction follows the right-hand rule. Unlike dot product, cross product is anti-commutative: a × b = -(b × a).",
    sectionId: "8"
  },
  obj9: {
    question: "What is a linear combination?",
    answer: "A linear combination c₁v₁ + c₂v₂ + ... + cₖvₖ scales and adds vectors. The span of a set is all possible linear combinations: one vector spans a line, two non-parallel vectors span a plane. This connects to linear independence and basis in vector spaces.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Vectors",
    "description": "Learn vectors in linear algebra: definition, notation, types (unit, zero, position), operations (addition, scalar multiplication), magnitude, dot product, cross product, and linear combinations.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Vectors"
    },
    "teaches": [
      "Vector definition and components",
      "Vector notation and standard basis",
      "Types of vectors: zero, unit, position, free",
      "Basic operations: addition, subtraction, scalar multiplication",
      "Magnitude, norm, and distance",
      "Dot product and cross product",
      "Linear combinations and span"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Vectors",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors"
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
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Vectors: Definition, Operations & Products | Learn Math Class",
      description: "Learn vectors in linear algebra: definition, notation, types (unit, zero, position), operations (addition, scalar multiplication), magnitude, dot product, cross product, and linear combinations.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors",
      name: "Vectors"
    },
  }
}
   }
export default function VectorsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
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
      __html: JSON.stringify(schemas.learningResource)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Vectors</h1>
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
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
