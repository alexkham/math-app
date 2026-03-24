import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "vector properties",
  "properties of vectors",
  "vector magnitude",
  "vector direction",
  "parallel vectors",
  "orthogonal vectors",
  "vector equality",
  "perpendicular vectors",
  "vector dimension",
  "parallel vectors definition",
  "orthogonal definition",
  "vector space axioms",
  "collinear vectors",
  "vector relationships"
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
    title: `Magnitude`,
    content: `Every vector has a magnitude — a single non-negative number that measures its size. For a vector $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$ in $\\mathbb{R}^n$, the magnitude is given by the Euclidean norm:

$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

Magnitude is an intrinsic property: it belongs to the vector and does not depend on any other vector or operation. It is always non-negative, and the only vector with magnitude zero is the zero vector $\\mathbf{0}$. This makes magnitude a reliable indicator of whether a vector is trivial — a vector is the zero vector if and only if its magnitude vanishes.

The norm satisfies two additional structural properties. Under [scalar multiplication](!/linear-algebra/vectors/basic-operations), the magnitude scales predictably: $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$. Under addition, it obeys the triangle inequality: $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$. These properties, along with normalization and the distance formula, are developed on the [magnitude](!/linear-algebra/vectors/magnitude) page.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Direction`,
    content: `Every nonzero vector has a direction — an orientation in space that specifies which way the vector points. Direction is what separates a vector from a scalar: a scalar carries size alone, while a vector carries size together with a spatial orientation.

In $\\mathbb{R}^2$, direction can be described by the angle $\\alpha$ that the vector makes with the positive $x$-axis. A vector $(v_1, v_2)$ points in the direction $\\alpha = \\arctan\\left(\\frac{v_2}{v_1}\\right)$, with appropriate adjustment for quadrant. In $\\mathbb{R}^3$, a single angle is insufficient — direction is instead specified by two angles or, more commonly, by the unit vector $\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$ that points the same way with magnitude stripped away.

The unit vector representation generalizes to any $\\mathbb{R}^n$. Dividing a nonzero vector by its [magnitude](!/linear-algebra/vectors/magnitude) isolates its direction as a vector on the unit sphere. Two vectors that differ only in magnitude share the same unit vector and therefore point the same way.

The zero vector has no direction. Its components are all zero, its magnitude is zero, and there is no meaningful orientation to extract. The expression $\\frac{\\mathbf{0}}{\\|\\mathbf{0}\\|}$ involves division by zero and is undefined. This is not a technicality — the zero vector genuinely has no directional content.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Dimension`,
    content: `Every vector belongs to a specific $\\mathbb{R}^n$, and the number $n$ — the count of components — is its dimension. A vector in $\\mathbb{R}^2$ has two components, a vector in $\\mathbb{R}^5$ has five, and the distinction is absolute: there is no natural way to add or compare vectors from different dimensions because there is no way to match up their components.

In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, dimension has a direct geometric meaning — it is the number of independent spatial directions available. Two-component vectors live in a plane; three-component vectors live in the full space we inhabit visually. For $n > 3$, the geometric picture breaks down, but the algebraic structure does not. Operations, norms, and dot products all work identically in $\\mathbb{R}^{100}$ as they do in $\\mathbb{R}^3$ — only the number of terms in each sum changes.

Dimension is fixed by the space, not by the vector. Every vector in $\\mathbb{R}^n$ has exactly $n$ components, and all operations within $\\mathbb{R}^n$ produce vectors with $n$ components. A vector cannot gain or lose components through addition, scaling, or any [linear combination](!/linear-algebra/vectors/linear-combinations). This rigidity is what keeps the algebra consistent.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Equality`,
    content: `Two vectors are equal when every one of their corresponding components matches. For $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$:

$$\\mathbf{a} = \\mathbf{b} \\quad \\Longleftrightarrow \\quad a_i = b_i \\text{ for every } i = 1, 2, \\ldots, n$$

There is no partial equality for vectors. If even a single component differs, the vectors are not equal. This all-or-nothing criterion is the algebraic version of the geometric requirement: equal vectors must have the same magnitude and the same direction.

For free vectors — vectors defined by magnitude and direction alone, without a fixed position — equality is independent of location. An arrow drawn at one corner of a diagram represents the same vector as an identical arrow drawn elsewhere, as long as the length and orientation agree. Moving a vector without rotating or rescaling it does not change the vector. This is the principle that allows vectors to be repositioned freely in tip-to-tail constructions and parallelogram diagrams without altering the result of an [addition](!/linear-algebra/vectors/basic-operations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Parallelism`,
    content: `Two vectors are parallel when one is a scalar multiple of the other. For $\\mathbf{a}$ and $\\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$:

$$\\mathbf{a} \\parallel \\mathbf{b} \\quad \\Longleftrightarrow \\quad \\mathbf{a} = c\\mathbf{b} \\text{ for some scalar } c$$

When $c > 0$, the two vectors point in the same direction — they are parallel in the strict sense. When $c < 0$, they point in opposite directions — anti-parallel. Both cases fall under the umbrella of parallelism because the vectors lie along the same line through the origin, differing only in scale and possibly in sign.

Parallelism can be detected without computing the scalar $c$ explicitly. If the components of $\\mathbf{a}$ and $\\mathbf{b}$ satisfy $\\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\cdots = \\frac{a_n}{b_n}$ (with appropriate handling when a component of $\\mathbf{b}$ is zero), the vectors are parallel. Alternatively, in $\\mathbb{R}^3$, the [cross product](!/linear-algebra/vectors/cross-product) provides a definitive test: $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0}$ if and only if $\\mathbf{a}$ and $\\mathbf{b}$ are parallel.

By convention, the zero vector is considered parallel to every vector, since $\\mathbf{0} = 0\\mathbf{b}$ for any $\\mathbf{b}$. This convention avoids the need to exclude $\\mathbf{0}$ as a special case in statements about parallelism.

Parallelism is the simplest instance of linear dependence. Two vectors are linearly dependent precisely when one is a scalar multiple of the other — precisely when they are parallel. The concept generalizes: for three or more vectors, dependence means at least one vector is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the others, but for a pair, dependence reduces to parallelism.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Orthogonality`,
    content: `Two vectors are orthogonal when their [dot product](!/linear-algebra/vectors/dot-product) equals zero:

$$\\mathbf{a} \\perp \\mathbf{b} \\quad \\Longleftrightarrow \\quad \\mathbf{a} \\cdot \\mathbf{b} = 0$$

In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, orthogonality corresponds to perpendicularity — the two vectors meet at a right angle. The algebraic condition $a_1b_1 + a_2b_2 + \\cdots + a_nb_n = 0$ translates the geometric concept of a $90°$ angle into a computation that works in any dimension, including those beyond visualization.

Orthogonality is in a sense the opposite extreme of parallelism. Parallel vectors are maximally aligned — one lies entirely along the direction of the other. Orthogonal vectors have zero alignment — projecting one onto the other yields the zero vector. Between these extremes lies every other angular relationship, measured quantitatively by the dot product.

The zero vector is orthogonal to every vector, since $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for all $\\mathbf{v}$. This is consistent with the convention that the zero vector is also parallel to every vector. The zero vector is the only vector that is simultaneously parallel and orthogonal to everything — a consequence of its having no magnitude and no direction.

Orthogonality grows in importance well beyond this section. Orthogonal bases simplify coordinate computations, orthogonal projections decompose vectors into independent components, and the Gram–Schmidt process converts an arbitrary basis into an orthogonal one. These ideas are developed in the [orthogonality](!/linear-algebra/orthogonality) section.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Algebraic Properties`,
    content: `In addition to the intrinsic and relational properties above, vectors in $\\mathbb{R}^n$ obey a collection of algebraic rules governing how they interact with [addition and scalar multiplication](!/linear-algebra/vectors/basic-operations). These rules are not properties of individual vectors but of the operations themselves — they describe the behavior of addition and scaling as applied to any vectors in the space.

Under addition, vectors are commutative ($\\mathbf{a} + \\mathbf{b} = \\mathbf{b} + \\mathbf{a}$), associative ($( \\mathbf{a} + \\mathbf{b}) + \\mathbf{c} = \\mathbf{a} + (\\mathbf{b} + \\mathbf{c})$), have an identity element ($\\mathbf{a} + \\mathbf{0} = \\mathbf{a}$), and every vector has an additive inverse ($\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}$). Under scalar multiplication, associativity holds ($c(d\\mathbf{a}) = (cd)\\mathbf{a}$), the scalar $1$ acts as an identity ($1\\mathbf{a} = \\mathbf{a}$), and two distributive laws connect the two operations: $c(\\mathbf{a} + \\mathbf{b}) = c\\mathbf{a} + c\\mathbf{b}$ and $(c + d)\\mathbf{a} = c\\mathbf{a} + d\\mathbf{a}$.

These ten properties are not specific to vectors in $\\mathbb{R}^n$ — they are the axioms that define a [vector space](!/linear-algebra/vector-spaces/axioms). Any mathematical structure satisfying the same rules qualifies as a vector space, whether its elements are arrows in the plane, polynomials, matrices, or functions. The vectors in $\\mathbb{R}^n$ are the most tangible example, but the algebraic framework they satisfy is far more general.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
     id: `intro`,
  title: `What Vectors Have and How They Relate`,
  content: `Before diving into operations and products, it is worth stepping back to ask what a vector possesses simply by existing and how two vectors can be compared. Every vector in $\\mathbb{R}^n$ carries intrinsic attributes — magnitude, direction, and a fixed number of components — that belong to the vector itself, independent of any operation performed on it. Vectors also stand in structural relationships to one another: they may be equal, parallel, or orthogonal. This page collects both the intrinsic and relational properties in a single reference, with each developed fully on the page where it naturally belongs.`,
};


const faqQuestions = {
  obj1: {
    question: "What is the magnitude of a vector?",
    answer: "Magnitude is the length of a vector: ‖v‖ = √(v₁² + v₂² + ... + vₙ²). It's always non-negative, zero only for the zero vector. Under scalar multiplication: ‖cv‖ = |c|‖v‖. Under addition: ‖a + b‖ ≤ ‖a‖ + ‖b‖ (triangle inequality).",
    sectionId: "1"
  },
  obj2: {
    question: "What is the direction of a vector?",
    answer: "Direction is which way a vector points—its orientation in space. It's captured by the unit vector v/‖v‖. In ℝ² it can be an angle; in higher dimensions, use the unit vector. The zero vector has no direction since ‖0‖ = 0 makes normalization undefined.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the dimension of a vector?",
    answer: "Dimension is the number of components n in a vector from ℝⁿ. Vectors in ℝ² have 2 components, in ℝ³ have 3, etc. Vectors from different dimensions cannot be added or compared—their component counts don't match.",
    sectionId: "3"
  },
  obj4: {
    question: "When are two vectors equal?",
    answer: "Vectors a and b are equal when every corresponding component matches: aᵢ = bᵢ for all i. There's no partial equality—if even one component differs, the vectors are unequal. Equal vectors have the same magnitude and direction.",
    sectionId: "4"
  },
  obj5: {
    question: "What does it mean for vectors to be parallel?",
    answer: "Vectors a and b are parallel when a = cb for some scalar c. If c > 0, same direction; if c < 0, opposite directions (anti-parallel). In ℝ³, a × b = 0 iff a ∥ b. The zero vector is parallel to everything by convention.",
    sectionId: "5"
  },
  obj6: {
    question: "What does it mean for vectors to be orthogonal?",
    answer: "Vectors are orthogonal (perpendicular) when their dot product equals zero: a · b = 0. This means 90° angle in ℝ² and ℝ³. The zero vector is orthogonal to every vector. Orthogonality means zero projection—no alignment.",
    sectionId: "6"
  },
  obj7: {
    question: "What are the algebraic properties of vectors?",
    answer: "Addition: commutative, associative, identity (0), inverses (-v). Scalar multiplication: associative, identity (1), two distributive laws. These ten properties are the vector space axioms—any structure satisfying them is a vector space.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of a Vector",
    "description": "Learn vector properties: magnitude, direction, dimension, equality, parallelism, orthogonality, and the algebraic axioms that define vector spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/properties",
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
      "name": "Vector Properties"
    },
    "teaches": [
      "Vector magnitude and norm",
      "Vector direction and unit vectors",
      "Dimension and component count",
      "Vector equality conditions",
      "Parallel and anti-parallel vectors",
      "Orthogonality and perpendicularity",
      "Vector space axioms"
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
        "name": "Properties of a Vector",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/properties"
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
      title: "Vector Properties: Magnitude, Direction & Orthogonality | Learn Math Class",
      description: "Learn vector properties: magnitude, direction, dimension, equality, parallelism, orthogonality, and the algebraic axioms that define vector spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/properties",
      name: "Properties of a Vector"
    },
  }
}
   }
export default function VectorPropertiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Properties of a Vector</h1>
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
