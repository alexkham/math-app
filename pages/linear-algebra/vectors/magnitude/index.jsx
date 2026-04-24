import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "vector magnitude",
  "magnitude of a vector",
  "vector norm",
  "Euclidean norm",
  "vector length formula",
  "unit vector",
  "normalize vector",
  "distance between vectors",
  "magnitude formula",
  "vector normalization",
  "triangle inequality vectors",
  "L2 norm",
  "vector distance formula",
  "standard basis vectors"
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
    title: `Magnitude in Two and Three Dimensions`,
    content: `In $\\mathbb{R}^2$, the magnitude of a vector $\\mathbf{v} = (v_1, v_2)$ is the length of the hypotenuse of the right triangle formed by its components:

$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2}$$

This is a direct application of the Pythagorean theorem — the horizontal component $v_1$ and the vertical component $v_2$ form the two legs, and the vector itself is the hypotenuse.

In $\\mathbb{R}^3$, the same reasoning applies in two stages. A vector $\\mathbf{v} = (v_1, v_2, v_3)$ can be decomposed into a component in the $xy$-plane with length $\\sqrt{v_1^2 + v_2^2}$ and a vertical component $v_3$. Applying the Pythagorean theorem a second time gives:

$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$$

The geometric intuition is the same in both cases: the magnitude is the straight-line distance from the tail of the vector to its tip. The only difference is the number of perpendicular components being combined.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `The General Norm`,
    content: `The pattern from $\\mathbb{R}^2$ and $\\mathbb{R}^3$ extends without modification to any $\\mathbb{R}^n$. For a vector $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$:

$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2} = \\sqrt{\\sum_{i=1}^{n} v_i^2}$$

This quantity is called the Euclidean norm, or equivalently the $\\ell^2$ norm. The subscript distinguishes it from other ways of measuring vector size — the $\\ell^1$ norm sums absolute values, the $\\ell^\\infty$ norm takes the largest absolute component — but when "norm" appears without qualification in this section, it always refers to the Euclidean norm.

The double-bar notation $\\|\\mathbf{v}\\|$ is standard for the norm. Single bars $|x|$ are reserved for the absolute value of a scalar. The distinction matters: magnitude is a property of vectors, absolute value is a property of numbers, and the notational separation keeps the two from being confused.

In dimensions beyond three, the formula cannot be visualized as a geometric length, but it retains the same algebraic role. It measures how far $\\mathbf{v}$ sits from the origin in the coordinate system of $\\mathbb{R}^n$, generalizing the concept of length purely through algebra.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Properties of the Norm`,
    content: `The Euclidean norm satisfies three properties that any reasonable notion of length should obey. Together, they are what make the norm a reliable measure of vector size.

## Non-Negativity

$$\\|\\mathbf{v}\\| \\geq 0, \\quad \\text{with equality if and only if } \\mathbf{v} = \\mathbf{0}$$

The sum of squared components is never negative, and its square root is zero only when every component is zero. Length is always non-negative, and the only vector with zero length is the zero vector itself.

## Scaling

$$\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$$

Multiplying a vector by a scalar $c$ multiplies its length by $|c|$. The absolute value is necessary because a negative scalar reverses the direction without producing a negative length. This property connects the norm directly to [scalar multiplication](!/linear-algebra/vectors/basic-operations): scaling a vector by $c$ does exactly what the geometric picture suggests — it stretches or compresses by $|c|$ and possibly flips.

## Triangle Inequality

$$\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$$

The length of a sum never exceeds the sum of the individual lengths. Geometrically, in the tip-to-tail picture of vector addition, the direct path from start to finish (the sum) is never longer than the path that follows both vectors end to end. Equality holds only when $\\mathbf{a}$ and $\\mathbf{b}$ point in the same direction — when the path is already straight. The triangle inequality is proved using the Cauchy–Schwarz inequality, which is developed on the [dot product](!/linear-algebra/vectors/dot-product) page.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Distance Between Vectors`,
    content: `The norm provides a natural way to measure how far apart two vectors are. The distance between $\\mathbf{a}$ and $\\mathbf{b}$ is defined as the norm of their difference:

$$d(\\mathbf{a}, \\mathbf{b}) = \\|\\mathbf{a} - \\mathbf{b}\\| = \\sqrt{(a_1 - b_1)^2 + (a_2 - b_2)^2 + \\cdots + (a_n - b_n)^2}$$

When $\\mathbf{a}$ and $\\mathbf{b}$ are interpreted as position vectors — arrows from the origin to points in space — this formula gives the straight-line distance between those points. In $\\mathbb{R}^2$, it reduces to the familiar distance formula from coordinate geometry. In $\\mathbb{R}^3$, it extends to three-dimensional Euclidean distance. In higher dimensions, the algebraic expression remains identical even though the geometry can no longer be drawn.

Distance inherits its behavior from the norm. It is always non-negative, equals zero only when the two vectors are identical, is symmetric ($d(\\mathbf{a}, \\mathbf{b}) = d(\\mathbf{b}, \\mathbf{a})$, since $\\|\\mathbf{a} - \\mathbf{b}\\| = \\|\\mathbf{b} - \\mathbf{a}\\|$), and satisfies its own triangle inequality: $d(\\mathbf{a}, \\mathbf{c}) \\leq d(\\mathbf{a}, \\mathbf{b}) + d(\\mathbf{b}, \\mathbf{c})$. These properties make the Euclidean distance a metric — a formal measure of separation on $\\mathbb{R}^n$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Unit Vectors`,
    content: `A unit vector is a vector whose norm equals exactly $1$:

$$\\|\\hat{\\mathbf{u}}\\| = 1$$

A unit vector retains all the directional information of the original vector while discarding any notion of scale. It answers the question "which way?" without saying "how far."

The standard basis vectors are the most immediate examples. In $\\mathbb{R}^3$:

$$\\mathbf{e}_1 = (1, 0, 0), \\quad \\mathbf{e}_2 = (0, 1, 0), \\quad \\mathbf{e}_3 = (0, 0, 1)$$

Each has exactly one component equal to $1$ and the rest equal to $0$, giving a norm of $1$. These unit vectors point along the coordinate axes, and any vector can be decomposed as a [linear combination](!/linear-algebra/vectors/linear-combinations) of them: $\\mathbf{v} = v_1\\mathbf{e}_1 + v_2\\mathbf{e}_2 + v_3\\mathbf{e}_3$.

But unit vectors are not confined to the coordinate directions. Any direction in $\\mathbb{R}^n$ has a corresponding unit vector. The vector $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$ is a unit vector in $\\mathbb{R}^2$ pointing at $45°$ to both axes. The set of all unit vectors in $\\mathbb{R}^2$ traces the unit circle; in $\\mathbb{R}^3$, the unit sphere.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Normalization`,
    content: `Normalization is the process of converting any nonzero vector into the unit vector that shares its direction. Given $\\mathbf{v} \\neq \\mathbf{0}$, the normalized form is:

$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|} = \\frac{1}{\\|\\mathbf{v}\\|}(v_1, v_2, \\ldots, v_n)$$

This divides every component by the same positive scalar $\\|\\mathbf{v}\\|$, which is a special case of scalar multiplication by $\\frac{1}{\\|\\mathbf{v}\\|}$. The scaling property of the norm guarantees that the result has magnitude $1$:

$$\\left\\|\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}\\right\\| = \\frac{\\|\\mathbf{v}\\|}{\\|\\mathbf{v}\\|} = 1$$

Because the scalar $\\frac{1}{\\|\\mathbf{v}\\|}$ is positive, the direction of $\\mathbf{v}$ is preserved — the normalized vector $\\hat{\\mathbf{v}}$ points exactly the same way as $\\mathbf{v}$, just with unit length.

The zero vector cannot be normalized. It has $\\|\\mathbf{0}\\| = 0$, and dividing by zero is undefined. This is consistent with the geometric fact that the zero vector carries no directional information — there is no "way" it points, so extracting a direction from it is impossible.

Normalization appears throughout the rest of this section. The angle formula on the [dot product](!/linear-algebra/vectors/dot-product) page involves the quantity $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\|\\mathbf{b}\\|}$, which is the dot product of the two normalized vectors $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$. Orthogonal projection decomposes a vector relative to a direction, and that direction is specified most cleanly through a unit vector. Whenever a formula isolates the directional component of a vector, normalization is doing the work underneath.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
     id: `intro`,
  title: `Measuring Length and Extracting Direction`,
  content: `Every nonzero vector carries two pieces of information: how long it is and which way it points. The norm isolates the first piece — it assigns a single non-negative number to each vector, measuring its length in a way that is consistent across any dimension. Once the norm is defined, distance between vectors follows immediately, and normalization provides a way to strip away length entirely, leaving behind a unit vector that encodes pure direction. The concepts on this page underpin nearly everything that follows in the section, from the angle formula in the [dot product](!/linear-algebra/vectors/dot-product) to the area interpretation of the [cross product](!/linear-algebra/vectors/cross-product).`,
};

const faqQuestions = {
  obj1: {
    question: "How do you find the magnitude of a vector in 2D and 3D?",
    answer: "In ℝ²: ‖v‖ = √(v₁² + v₂²). In ℝ³: ‖v‖ = √(v₁² + v₂² + v₃²). Both come from the Pythagorean theorem—the magnitude is the straight-line distance from the tail to the tip of the vector.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the Euclidean norm formula?",
    answer: "For v = (v₁, v₂, ..., vₙ) in ℝⁿ: ‖v‖ = √(v₁² + v₂² + ... + vₙ²). This is the Euclidean or ℓ² norm. The double-bar notation ‖v‖ distinguishes it from absolute value |x| used for scalars.",
    sectionId: "2"
  },
  obj3: {
    question: "What are the properties of the vector norm?",
    answer: "Non-negativity: ‖v‖ ≥ 0 with equality iff v = 0. Scaling: ‖cv‖ = |c|‖v‖. Triangle inequality: ‖a + b‖ ≤ ‖a‖ + ‖b‖. These properties make the norm a reliable measure of vector size.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you find the distance between two vectors?",
    answer: "d(a, b) = ‖a - b‖ = √((a₁-b₁)² + (a₂-b₂)² + ... + (aₙ-bₙ)²). This is the Euclidean distance—the straight-line distance between the endpoints when vectors represent positions.",
    sectionId: "4"
  },
  obj5: {
    question: "What is a unit vector?",
    answer: "A unit vector has magnitude exactly 1: ‖û‖ = 1. It carries direction without scale. The standard basis vectors e₁, e₂, e₃ are unit vectors along coordinate axes. All unit vectors in ℝ² form the unit circle; in ℝ³, the unit sphere.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you normalize a vector?",
    answer: "Divide by its magnitude: v̂ = v/‖v‖. This scales every component by 1/‖v‖, producing a unit vector pointing in the same direction. The zero vector cannot be normalized since ‖0‖ = 0 and division by zero is undefined.",
    sectionId: "6"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Magnitude of a Vector",
    "description": "Learn vector magnitude: Euclidean norm formula, properties (scaling, triangle inequality), distance between vectors, unit vectors, and normalization with examples.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/magnitude",
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
      "name": "Vector Magnitude"
    },
    "teaches": [
      "Magnitude formula in 2D and 3D",
      "Euclidean norm in ℝⁿ",
      "Norm properties and triangle inequality",
      "Distance between vectors",
      "Unit vectors and standard basis",
      "Vector normalization"
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
        "name": "Magnitude of a Vector",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/magnitude"
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
      title: "Vector Magnitude: Norm, Distance & Unit Vectors | Learn Math Class",
      description: "Learn vector magnitude: Euclidean norm formula, properties (scaling, triangle inequality), distance between vectors, unit vectors, and normalization with examples.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/magnitude",
      name: "Magnitude of a Vector"
    },
  }
}
   }
export default function VectorMagnitudePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Magnitude of a Vector</h1>
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
