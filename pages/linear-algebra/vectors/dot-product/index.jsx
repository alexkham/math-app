import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "dot product",
  "dot product formula",
  "scalar product",
  "inner product",
  "dot product calculator",
  "angle between vectors",
  "dot product properties",
  "orthogonal vectors",
  "vector projection",
  "Cauchy-Schwarz inequality",
  "dot product geometric",
  "perpendicular vectors",
  "cosine angle vectors",
  "scalar projection"
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
    title: `Algebraic Definition`,
    content: `The dot product of two vectors $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in $\\mathbb{R}^n$ is the scalar obtained by multiplying corresponding components and summing the results:

$$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n = \\sum_{i=1}^{n} a_ib_i$$

The notation uses a centered dot between the two vectors. Other names for the same operation are the inner product and the scalar product — the latter emphasizing that the output is a scalar, not a vector.

This definition works in any dimension. In $\\mathbb{R}^2$, the dot product of $(3, 4)$ and $(1, -2)$ is $3(1) + 4(-2) = -5$. In $\\mathbb{R}^5$, the same rule applies with five terms instead of two. The computation is mechanical, but the meaning it carries — revealed by the geometric definition — is what makes the dot product central to the rest of linear algebra.

The dot product differs fundamentally from [vector addition](!/linear-algebra/vectors/basic-operations) and scalar multiplication. Those operations take vectors and produce vectors. The dot product takes two vectors and collapses them into a single number, discarding the directional structure in favor of a measurement of alignment.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Geometric Definition`,
    content: `There is a second way to compute the dot product that bypasses components entirely and works directly with lengths and angles. If $\\mathbf{a}$ and $\\mathbf{b}$ are both nonzero and $\\theta$ denotes the angle they form when drawn from a common point, then:

$$\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

The right-hand side multiplies the [magnitudes](!/linear-algebra/vectors/magnitude) of both vectors and adjusts the product by $\\cos\\theta$. That cosine factor does all the interpretive work: it equals $1$ when $\\theta = 0$ (full alignment), drops to $0$ at $\\theta = \\frac{\\pi}{2}$ (no alignment at all), and reaches $-1$ at $\\theta = \\pi$ (complete opposition).

Why does this agree with the component-wise formula? Place $\\mathbf{a}$ and $\\mathbf{b}$ tail to tail and form the triangle completed by $\\mathbf{a} - \\mathbf{b}$. The law of cosines gives the squared length of the third side:

$$\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 - 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

Now expand $\\|\\mathbf{a} - \\mathbf{b}\\|^2$ by writing it as $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b})$ and distributing. The result is $\\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. Setting the two expressions equal and cancelling the squared norms leaves $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$. The component-based sum of products and the length-angle formula are two faces of a single quantity — one assembled from arithmetic on coordinates, the other encoding geometric information about orientation.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Properties of the Dot Product`,
    content: `The dot product obeys a set of algebraic rules that make it behave predictably in calculations.

## Commutativity

$$\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$$

The order of the two vectors does not matter. This follows directly from commutativity of real number multiplication: $a_ib_i = b_ia_i$ for every component.

## Distributivity

$$\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$$

The dot product distributes over vector addition. This allows the dot product of a vector with a sum to be broken apart, a property used constantly when expanding expressions involving multiple vectors.

## Scalar Factoring

$$(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b})$$

A scalar multiplied into one of the vectors can be pulled out of the dot product entirely. Combined with commutativity, this also gives $\\mathbf{a} \\cdot (c\\mathbf{b}) = c(\\mathbf{a} \\cdot \\mathbf{b})$.

## Positive Definiteness

$$\\mathbf{a} \\cdot \\mathbf{a} = \\|\\mathbf{a}\\|^2 \\geq 0, \\quad \\text{with equality if and only if } \\mathbf{a} = \\mathbf{0}$$

The dot product of a vector with itself is the sum of squared components — always non-negative, and zero only for the zero vector. This property ties the dot product directly to the norm and ensures that the geometric notion of length is consistent with the algebraic framework.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Connection to Magnitude`,
    content: `Positive definiteness reveals that the [norm](!/linear-algebra/vectors/magnitude) is hiding inside the dot product. When a vector is dotted with itself, the result is exactly the quantity that sits under the square root in the norm formula:

$$\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2 = \\|\\mathbf{v}\\|^2$$

Squared length, in other words, is not a separate concept — it is a dot product in which both slots are filled by the same vector. Flipping this around gives an alternative expression for the norm: $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$. Rather than defining magnitude independently and then discovering a coincidence, we can view the norm as something the dot product generates.

This observation has practical consequences. Several norm properties that would otherwise demand their own proofs fall out as corollaries of dot product rules. Scalar factoring implies $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ with no extra work. The triangle inequality $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ follows once we control the size of $\\mathbf{a} \\cdot \\mathbf{b}$ through Cauchy–Schwarz — again, a statement framed entirely in dot product language.

The dependence runs both ways. The geometric formula $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ rebuilds the dot product from two norms and an angle. Neither concept stands alone: the dot product encodes magnitude, and magnitude participates in the dot product's geometric interpretation. Separating them into unrelated topics conceals the single algebraic mechanism they both rely on.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The Angle Between Vectors`,
    content: `Rearranging the geometric formula isolates the angle:

$$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$$

This formula is defined only when both vectors are nonzero, since division by zero is undefined. The angle $\\theta$ lies in the interval $[0, \\pi]$, covering all possibilities from vectors pointing in the same direction ($\\theta = 0$) to vectors pointing in exactly opposite directions ($\\theta = \\pi$).

The right-hand side is the dot product of the two normalized vectors $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$. Normalization strips away the magnitudes, leaving only the directional relationship. The cosine of the angle between two vectors depends solely on their directions, not on how long they are.

In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, this formula can be verified against the angle measured with a protractor. In higher dimensions, where geometric angles cannot be visualized, the formula serves as the definition of the angle between two vectors — extending a geometric concept into spaces where geometry alone cannot reach.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Sign of the Dot Product`,
    content: `The sign of the dot product reveals the angular relationship between two vectors without requiring the angle itself to be computed. Since $\\|\\mathbf{a}\\|$ and $\\|\\mathbf{b}\\|$ are both positive for nonzero vectors, the sign of $\\mathbf{a} \\cdot \\mathbf{b}$ is determined entirely by $\\cos\\theta$.

When $\\mathbf{a} \\cdot \\mathbf{b} > 0$, the cosine is positive, which means $\\theta$ lies in the interval $(0, \\frac{\\pi}{2})$. The vectors form an acute angle — they point in broadly the same direction.

When $\\mathbf{a} \\cdot \\mathbf{b} = 0$, the cosine is zero, placing $\\theta$ at exactly $\\frac{\\pi}{2}$. The vectors are perpendicular — neither has any component in the direction of the other.

When $\\mathbf{a} \\cdot \\mathbf{b} < 0$, the cosine is negative, so $\\theta$ lies in $(\\frac{\\pi}{2}, \\pi)$. The vectors form an obtuse angle — they point in broadly opposite directions.

This three-way classification is a fast diagnostic tool. Checking whether a dot product is positive, zero, or negative is often all that is needed to determine the geometric relationship between two vectors — no square roots, no inverse cosines, just the sign of a sum of products.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Orthogonality`,
    content: `Two vectors are orthogonal when their dot product is zero:

$$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\quad \\Longleftrightarrow \\quad \\mathbf{a} \\perp \\mathbf{b}$$

In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, orthogonality corresponds to perpendicularity — the vectors meet at a right angle. In $\\mathbb{R}^n$ for $n > 3$, perpendicularity cannot be visualized, but the algebraic condition $\\mathbf{a} \\cdot \\mathbf{b} = 0$ still serves as its definition. Orthogonality is the generalization of "right angle" to any number of dimensions.

The zero vector occupies a special position: $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for every vector $\\mathbf{v}$, so the zero vector is orthogonal to everything. This is a convention that simplifies many statements — without it, theorems about orthogonal sets would need to exclude the zero vector as a separate case.

Orthogonality is far more than a geometric curiosity. Orthogonal vectors are algebraically independent in a strong sense — projecting one onto the other yields zero, meaning neither contributes anything in the direction of the other. This idea scales up: orthogonal bases, orthogonal decompositions, and orthogonal complements form a central thread through the [orthogonality](!/linear-algebra/orthogonality) section of linear algebra.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `The Cauchy–Schwarz Inequality`,
    content: `The dot product of two vectors cannot grow arbitrarily large when their lengths are fixed. Cauchy–Schwarz makes this constraint precise:

$$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$$

The geometric angle formula offers the most transparent explanation. Writing $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ and noting that $|\\cos\\theta|$ never surpasses $1$, the absolute dot product is automatically bounded by the product of the norms. This ceiling is reached only when $\\cos\\theta$ hits $\\pm 1$ — at $\\theta = 0$ or $\\theta = \\pi$ — so equality corresponds to [parallel](!/linear-algebra/vectors/properties) vectors pointing along or against each other.

An entirely coordinate-based proof exists as well, requiring no notion of angle. Consider the expression $\\|\\mathbf{a} - t\\mathbf{b}\\|^2$ for a variable scalar $t$. Because a squared norm is never negative, this expression defines a quadratic in $t$ with no negative values. A real quadratic that stays non-negative must have a non-positive discriminant, and writing out that discriminant condition yields exactly the Cauchy–Schwarz bound. This argument extends to any setting where an inner product is defined, even when angles lack geometric substance.

The inequality plays a structural role beyond bounding computations. Without it, the angle formula would be ill-posed: feeding $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$ into $\\arccos$ requires the fraction to land in $[-1, 1]$, and Cauchy–Schwarz is what guarantees this. The norm's triangle inequality likewise depends on it — establishing $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ involves controlling the mixed term $\\mathbf{a} \\cdot \\mathbf{b}$, which is exactly the job Cauchy–Schwarz performs.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Orthogonal Projection`,
    content: `It is frequently necessary to break a vector $\\mathbf{a}$ into two pieces relative to a nonzero vector $\\mathbf{b}$: one piece aligned with $\\mathbf{b}$ and another at a right angle to it. The dot product supplies the machinery for this decomposition.

## Scalar Projection

The signed distance that $\\mathbf{a}$ covers in the direction of $\\mathbf{b}$ is captured by a single number:

$$\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}$$

When this quantity comes out positive, $\\mathbf{a}$ tilts toward $\\mathbf{b}$. A negative result means $\\mathbf{a}$ tilts away. Zero signals complete orthogonality — $\\mathbf{a}$ contributes nothing at all in the direction of $\\mathbf{b}$.

## Vector Projection

To obtain an actual vector rather than a bare number, the scalar projection is re-embedded along $\\mathbf{b}$:

$$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}\\,\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2}\\,\\mathbf{b}$$

The coefficient $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}$ rescales $\\mathbf{b}$ so that the output has the appropriate length and orientation. What results is a vector parallel to $\\mathbf{b}$ whose norm equals $|\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a}|$.

## Orthogonal Decomposition

Removing the projected component from $\\mathbf{a}$ leaves behind the perpendicular part:

$$\\mathbf{a}_{\\perp} = \\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}$$

Together, the two pieces reconstruct the original:

$$\\mathbf{a} = \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} + \\mathbf{a}_{\\perp}$$

The parallel component lies along $\\mathbf{b}$; the perpendicular component satisfies $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$, a fact that follows by substituting the formula and simplifying. These two constituents are geometrically independent — adjusting one leaves the other unchanged, and each accounts for information the other entirely misses.

This two-part split reappears in more sophisticated forms throughout linear algebra. Projection onto a line generalizes to projection onto multi-dimensional subspaces. The Gram–Schmidt procedure repeats the same splitting step iteratively, peeling off parallel components one vector at a time to produce an orthogonal collection. Least-squares fitting identifies the closest approximation inside a subspace by projecting onto it. Each of these techniques, covered in the [orthogonality](!/linear-algebra/orthogonality) section, traces back to the same principle at work here: partition a vector into what runs along a chosen direction and what runs across it.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
     id: `intro`,
  title: `The Product That Reveals Angles`,
  content: `The dot product is unlike any operation encountered so far in this section. It takes two vectors and returns not a vector but a single number — a scalar. That number encodes something geometric: the degree to which the two vectors point in the same direction. Through its algebraic definition, the dot product is a straightforward computation — multiply corresponding components and sum. Through its geometric definition, it connects directly to the angle between the vectors, opening the door to orthogonality, projection, and the Cauchy–Schwarz inequality. Both definitions are equivalent, and both are essential.`,
};

const faqQuestions = {
  obj1: {
    question: "What is the dot product formula?",
    answer: "For a = (a₁, a₂, ..., aₙ) and b = (b₁, b₂, ..., bₙ): a · b = a₁b₁ + a₂b₂ + ... + aₙbₙ. Multiply corresponding components and sum. Also called the inner product or scalar product because it returns a scalar, not a vector.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the geometric formula for the dot product?",
    answer: "a · b = ‖a‖‖b‖cosθ, where θ is the angle between vectors. This equals the algebraic formula and reveals that the dot product measures alignment: positive for acute angles, zero for perpendicular, negative for obtuse angles.",
    sectionId: "2"
  },
  obj3: {
    question: "What are the properties of the dot product?",
    answer: "Commutative: a · b = b · a. Distributive: a · (b + c) = a · b + a · c. Scalar factoring: (ca) · b = c(a · b). Positive definite: a · a = ‖a‖² ≥ 0, with equality only when a = 0.",
    sectionId: "3"
  },
  obj4: {
    question: "How is the dot product related to magnitude?",
    answer: "v · v = ‖v‖², so the squared magnitude is the dot product of a vector with itself. This means ‖v‖ = √(v · v). The norm is not separate from the dot product—it's generated by it.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you find the angle between two vectors?",
    answer: "cosθ = (a · b)/(‖a‖‖b‖). Compute the dot product divided by the product of magnitudes, then take arccos. The angle θ lies in [0, π]. This formula defines angle in higher dimensions where visualization fails.",
    sectionId: "5"
  },
  obj6: {
    question: "What does the sign of the dot product tell you?",
    answer: "Positive: acute angle (vectors point similarly). Zero: perpendicular (90°). Negative: obtuse angle (vectors point oppositely). The sign alone reveals the angular relationship without computing the actual angle.",
    sectionId: "6"
  },
  obj7: {
    question: "When are two vectors orthogonal?",
    answer: "Two vectors are orthogonal (perpendicular) when their dot product equals zero: a · b = 0. The zero vector is orthogonal to every vector by convention. Orthogonality generalizes 'right angle' to any dimension.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the Cauchy-Schwarz inequality?",
    answer: "|a · b| ≤ ‖a‖‖b‖. The absolute dot product cannot exceed the product of magnitudes. Equality holds when vectors are parallel. This inequality ensures cosθ stays in [-1, 1] and underlies the triangle inequality.",
    sectionId: "8"
  },
  obj9: {
    question: "What is the projection of one vector onto another?",
    answer: "Vector projection: proj_b(a) = (a · b / ‖b‖²)b. Scalar projection: comp_b(a) = a · b / ‖b‖. The perpendicular component is a - proj_b(a). This decomposes any vector into parallel and orthogonal parts.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Dot Product",
    "description": "Learn the dot product: algebraic and geometric definitions, properties, angle formula, orthogonality, Cauchy-Schwarz inequality, and vector projection with formulas and examples.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/dot-product",
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
      "name": "Dot Product"
    },
    "teaches": [
      "Algebraic and geometric dot product formulas",
      "Dot product properties",
      "Finding the angle between vectors",
      "Orthogonality and perpendicular vectors",
      "Cauchy-Schwarz inequality",
      "Scalar and vector projection",
      "Orthogonal decomposition"
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Dot Product",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/dot-product"
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
      title: "Dot Product: Formula, Angle & Projection | Learn Math Class",
      description: "Learn the dot product: algebraic and geometric definitions, properties, angle formula, orthogonality, Cauchy-Schwarz inequality, and vector projection with formulas and examples.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/dot-product",
      name: "Dot Product"
    },
  }
}
   }
export default function DotProductPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Dot Product</h1>
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
