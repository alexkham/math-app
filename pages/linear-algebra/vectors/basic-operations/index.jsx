import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

 const keyWords = [
  "vector addition",
  "vector subtraction",
  "scalar multiplication",
  "add vectors",
  "vector operations",
  "tip to tail method",
  "parallelogram method",
  "vector properties",
  "commutative vector addition",
  "distributive property vectors",
  "zero vector",
  "additive inverse vector",
  "scale a vector",
  "vector algebra"
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
    title: `Vector Addition`,
    content: `Adding two vectors means pairing up their components and summing each pair independently. For $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in the same $\\mathbb{R}^n$:

$$\\mathbf{a} + \\mathbf{b} = (a_1 + b_1,\\ a_2 + b_2,\\ \\ldots,\\ a_n + b_n)$$

The result is again a vector in $\\mathbb{R}^n$ — addition does not change the dimension. Both inputs must belong to the same space; adding a vector in $\\mathbb{R}^2$ to a vector in $\\mathbb{R}^3$ is undefined because there is no way to match up the components.

Geometrically, vector addition has two equivalent visualizations. In the tip-to-tail method, the tail of $\\mathbf{b}$ is placed at the head of $\\mathbf{a}$, and the sum $\\mathbf{a} + \\mathbf{b}$ is the vector running from the tail of $\\mathbf{a}$ to the head of $\\mathbf{b}$. In the parallelogram method, both vectors share a common tail, and the sum is the diagonal of the parallelogram they form. The two constructions always yield the same result, and each highlights a different aspect of addition: tip-to-tail emphasizes sequential displacement, while the parallelogram makes the symmetry between $\\mathbf{a}$ and $\\mathbf{b}$ visually explicit.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Properties of Addition`,
    content: `Vector addition obeys four algebraic rules that govern how sums behave. Each has a geometric counterpart that can be verified by drawing the vectors involved.

## Commutativity

$$\\mathbf{a} + \\mathbf{b} = \\mathbf{b} + \\mathbf{a}$$

The order in which two vectors are added does not affect the result. Geometrically, the parallelogram has the same diagonal regardless of which vector is placed first. At the component level, this follows directly from commutativity of real number addition: $a_i + b_i = b_i + a_i$ for every component.

## Associativity

$$(\\mathbf{a} + \\mathbf{b}) + \\mathbf{c} = \\mathbf{a} + (\\mathbf{b} + \\mathbf{c})$$

When adding three or more vectors, grouping does not matter. The tip-to-tail construction confirms this: chaining $\\mathbf{a}$, $\\mathbf{b}$, and $\\mathbf{c}$ end to end produces the same resultant vector no matter which pair is summed first. This property allows sums of multiple vectors to be written without parentheses.

## Additive Identity

$$\\mathbf{a} + \\mathbf{0} = \\mathbf{a}$$

The zero vector $\\mathbf{0} = (0, 0, \\ldots, 0)$ leaves any vector unchanged under addition. It functions as the neutral element: adding it contributes nothing to any component. Geometrically, the zero vector is a point with no length and no direction — appending it tip-to-tail adds no displacement.

## Additive Inverse

$$\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}$$

Every vector $\\mathbf{a}$ has a corresponding vector $-\\mathbf{a} = (-a_1, -a_2, \\ldots, -a_n)$ that cancels it exactly. The inverse has the same [magnitude](!/linear-algebra/vectors/magnitude) as $\\mathbf{a}$ but points in the opposite direction. Adding a vector to its inverse returns to the origin — the displacements undo each other completely.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Vector Subtraction`,
    content: `Subtraction is not an independent operation — it is addition combined with negation. The difference $\\mathbf{a} - \\mathbf{b}$ is defined as:

$$\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b}) = (a_1 - b_1,\\ a_2 - b_2,\\ \\ldots,\\ a_n - b_n)$$

Reducing subtraction to addition and negation means that all four properties of addition — commutativity, associativity, identity, and inverse — carry over automatically. No separate set of rules is needed.

The geometric picture of subtraction is particularly useful. When $\\mathbf{a}$ and $\\mathbf{b}$ are drawn from a common tail, the difference $\\mathbf{a} - \\mathbf{b}$ is the vector pointing from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$. This interpretation connects subtraction directly to distance: the length of $\\mathbf{a} - \\mathbf{b}$ is the Euclidean distance between the heads of the two vectors, formalized as $d(\\mathbf{a}, \\mathbf{b}) = \\|\\mathbf{a} - \\mathbf{b}\\|$ on the [magnitude](!/linear-algebra/vectors/magnitude) page.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Scalar Multiplication`,
    content: `Scalar multiplication takes a real number $c$ and a vector $\\mathbf{a}$ and scales every component by $c$:

$$c\\mathbf{a} = (ca_1,\\ ca_2,\\ \\ldots,\\ ca_n)$$

The result is always a vector in the same $\\mathbb{R}^n$. Geometrically, scalar multiplication changes the length of the vector by a factor of $|c|$ while preserving or reversing its direction depending on the sign of $c$.

When $c > 0$, the scaled vector $c\\mathbf{a}$ points in the same direction as $\\mathbf{a}$. If $c > 1$, the vector stretches; if $0 < c < 1$, it compresses. When $c < 0$, the direction flips — the scaled vector points opposite to $\\mathbf{a}$, with its length multiplied by $|c|$. The boundary case $c = 0$ collapses any vector to the zero vector: $0\\mathbf{a} = \\mathbf{0}$.

Because scalar multiplication only ever stretches, compresses, or reverses a vector along its own line, the result $c\\mathbf{a}$ is always [parallel](!/linear-algebra/vectors/properties) to $\\mathbf{a}$ (provided $\\mathbf{a} \\neq \\mathbf{0}$). This observation becomes important later: two vectors are parallel precisely when one is a scalar multiple of the other.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Properties of Scalar Multiplication`,
    content: `Scalar multiplication satisfies its own set of algebraic rules that describe how scalars and vectors interact. Combined with the properties of addition, these rules form the complete algebraic framework for working with vectors.

## Associativity with Scalars

$$c(d\\mathbf{a}) = (cd)\\mathbf{a}$$

Scaling a vector by $d$ and then by $c$ produces the same result as scaling once by the product $cd$. The operations collapse into a single multiplication on the scalar side.

## Distributivity over Vector Addition

$$c(\\mathbf{a} + \\mathbf{b}) = c\\mathbf{a} + c\\mathbf{b}$$

A scalar applied to a sum distributes across both terms. Geometrically, scaling the diagonal of a parallelogram by $c$ yields the same vector as scaling both sides by $c$ and then forming the new parallelogram.

## Distributivity over Scalar Addition

$$(c + d)\\mathbf{a} = c\\mathbf{a} + d\\mathbf{a}$$

Two scalars summed before multiplication produce the same result as two separate scalings added afterward. This rule links the arithmetic of real numbers to the algebra of vectors.

## Multiplicative Identity

$$1\\mathbf{a} = \\mathbf{a}$$

Scaling by $1$ leaves a vector unchanged. This ensures that the scalar $1$ acts neutrally, just as the zero vector acts neutrally under addition.

## Consequences

Two special cases follow immediately from these rules. Setting $c = 0$ gives $0\\mathbf{a} = \\mathbf{0}$: scaling any vector by zero produces the zero vector. Setting $c = -1$ gives $(-1)\\mathbf{a} = -\\mathbf{a}$: scaling by $-1$ produces the additive inverse. Neither fact requires a separate axiom — both are consequences of the properties above.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `The Algebraic Foundation`,
    content: `Addition and scalar multiplication are not just two operations among many — they are the two operations on which the entire algebraic theory of vectors rests. Every other construction in this section is built from them. The [dot product](!/linear-algebra/vectors/dot-product) multiplies corresponding components and sums the results — a sequence of scalar multiplications followed by real-number addition. The [cross product](!/linear-algebra/vectors/cross-product) combines components through differences of pairwise products — again, scalar multiplication and addition in a specific pattern. A [linear combination](!/linear-algebra/vectors/linear-combinations) $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$ is nothing more than repeated scalar multiplication followed by repeated addition.

The ten properties listed on this page — four for addition, four for scalar multiplication, plus two distributive laws — are not arbitrary. They are precisely the axioms that define a [vector space](!/linear-algebra/vector-spaces/axioms). Any collection of objects that satisfies these rules qualifies as a vector space, whether the objects are arrows in $\\mathbb{R}^3$, polynomials, matrices, or functions. The vectors in $\\mathbb{R}^n$ studied throughout this section are the most concrete example, but the algebraic structure they exhibit extends far beyond ordered tuples of numbers.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
     id: `intro`,
  title: `The Three Operations That Define Vector Algebra`,
  content: `Addition, subtraction, and scalar multiplication are the operations that give vectors their algebraic structure. Each works component by component, each preserves the dimension of the input, and each carries a geometric interpretation that reinforces the computation. Together, they satisfy a precise set of rules — commutativity, associativity, distributivity — that make vector algebra predictable and consistent. Every other operation in this section, from the [dot product](!/linear-algebra/vectors/dot-product) to [linear combinations](!/linear-algebra/vectors/linear-combinations), is built on top of these three.`,
};

const faqQuestions = {
  obj1: {
    question: "How do you add two vectors?",
    answer: "Add corresponding components: a + b = (a₁ + b₁, a₂ + b₂, ..., aₙ + bₙ). Both vectors must be in the same ℝⁿ. Geometrically, use tip-to-tail (place b's tail at a's head) or parallelogram method (sum is the diagonal).",
    sectionId: "1"
  },
  obj2: {
    question: "What are the properties of vector addition?",
    answer: "Vector addition is commutative (a + b = b + a), associative ((a + b) + c = a + (b + c)), has an identity (a + 0 = a), and every vector has an inverse (a + (-a) = 0). These mirror real number addition.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you subtract vectors?",
    answer: "Subtraction is addition plus negation: a - b = a + (-b) = (a₁ - b₁, a₂ - b₂, ...). Geometrically, a - b points from the tip of b to the tip of a when both share a common tail. Its length gives the distance between the vectors.",
    sectionId: "3"
  },
  obj4: {
    question: "What is scalar multiplication of a vector?",
    answer: "Multiply each component by the scalar c: ca = (ca₁, ca₂, ..., caₙ). When c > 0, the vector stretches or compresses in the same direction. When c < 0, it also reverses direction. When c = 0, the result is the zero vector.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the properties of scalar multiplication?",
    answer: "Scalar multiplication is associative with scalars (c(da) = (cd)a), distributes over vector addition (c(a + b) = ca + cb) and scalar addition ((c + d)a = ca + da), and has identity 1a = a. Setting c = 0 gives 0a = 0; c = -1 gives the additive inverse.",
    sectionId: "5"
  },
  obj6: {
    question: "Why are addition and scalar multiplication fundamental?",
    answer: "All other vector operations build from these two. The dot product uses component multiplication and addition. Linear combinations are repeated scalar multiplication and addition. The ten properties (4 for addition, 4 for scalar multiplication, 2 distributive) define vector spaces.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Basic Vector Operations",
    "description": "Master vector addition, subtraction, and scalar multiplication. Learn component-wise formulas, geometric methods (tip-to-tail, parallelogram), and algebraic properties that define vector spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/basic-operations",
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
      "name": "Basic Vector Operations"
    },
    "teaches": [
      "Vector addition and its properties",
      "Tip-to-tail and parallelogram methods",
      "Vector subtraction as addition of inverse",
      "Scalar multiplication",
      "Distributive and associative properties",
      "Foundation for vector space axioms"
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
        "name": "Basic Vector Operations",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/basic-operations"
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
      title: "Vector Operations: Addition, Subtraction & Scaling | Learn Math Class",
      description: "Master vector addition, subtraction, and scalar multiplication. Learn component-wise formulas, geometric methods (tip-to-tail, parallelogram), and algebraic properties that define vector spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/basic-operations",
      name: "Basic Vector Operations"
    },
  }
}
   }
export default function BasicVectorOperationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Basic Operations on Vectors</h1>
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
