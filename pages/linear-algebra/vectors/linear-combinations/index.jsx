import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "linear combination",
  "linear combination of vectors",
  "span of vectors",
  "spanning set",
  "vector span",
  "linear combination formula",
  "linear combination definition",
  "trivial combination",
  "non-trivial combination",
  "span linear algebra",
  "spanning vectors",
  "linear combination examples",
  "coefficient vector",
  "linear independence preview"
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
    title: `Definition`,
    content: `Given vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$ in $\\mathbb{R}^n$ and scalars $c_1, c_2, \\ldots, c_k$ in $\\mathbb{R}$, the expression

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$$

is a linear combination of those vectors. The scalars $c_i$ are called the coefficients or weights of the combination. Each term $c_i\\mathbf{v}_i$ is a [scaled](!/linear-algebra/vectors/basic-operations) copy of $\\mathbf{v}_i$, and the full expression adds all the scaled copies together.

The definition imposes no restrictions on the coefficients — they can be positive, negative, or zero. Setting all coefficients to $1$ reduces the linear combination to ordinary vector addition. Using a single vector with one coefficient gives scalar multiplication. Setting all coefficients to zero produces the zero vector. These familiar operations are not separate concepts; they are boundary cases of the same construction.

A linear combination always produces a vector in the same $\\mathbb{R}^n$ as the inputs. Both scalar multiplication and addition preserve the dimension, so no matter how many vectors are combined or what coefficients are chosen, the result remains in the original space.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Geometric Interpretation`,
    content: `The geometric meaning of a linear combination depends on how many vectors are involved and how they relate to one another.

A single nonzero vector $\\mathbf{v}$ generates all its scalar multiples: $c\\mathbf{v}$ for every real number $c$. These fill a line through the origin in the direction of $\\mathbf{v}$. Moving $c$ from $-\\infty$ to $\\infty$ sweeps the entire line, passing through the origin at $c = 0$.

Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ that are not [parallel](!/linear-algebra/vectors/properties) generate all combinations $c_1\\mathbf{u} + c_2\\mathbf{v}$. Varying both coefficients independently fills a plane through the origin — the plane that contains both $\\mathbf{u}$ and $\\mathbf{v}$. In $\\mathbb{R}^2$, two non-parallel vectors already span the entire space. In $\\mathbb{R}^3$, they span a flat sheet passing through the origin, leaving one dimension unreached.

Three vectors in $\\mathbb{R}^3$ that do not all lie in the same plane span the full space: every point in $\\mathbb{R}^3$ is reachable as $c_1\\mathbf{u} + c_2\\mathbf{v} + c_3\\mathbf{w}$ for some choice of coefficients. If the three vectors are coplanar, however, the third contributes nothing new — the span remains a plane rather than expanding to fill three dimensions.

The coefficients act as continuous dials. Adjusting one coefficient while holding the others fixed slides the result along the direction of the corresponding vector. Adjusting all of them simultaneously moves the result anywhere within the span.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Span`,
    content: `The span of a set of vectors is the collection of every vector that can be formed as a linear combination of the set. For vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$:

$$\\text{span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k \\mid c_i \\in \\mathbb{R}\\}$$

The span is a subset of $\\mathbb{R}^n$ that contains all vectors reachable through linear combinations — and no others. It always contains the zero vector, since setting every coefficient to zero produces $\\mathbf{0}$.

The geometric shape of the span reflects the structure of the input vectors. A single nonzero vector spans a line. Two non-parallel vectors span a plane. In general, the span of $k$ vectors that are "sufficiently independent" is a $k$-dimensional flat subspace passing through the origin. What "sufficiently independent" means precisely is the subject of linear independence, but the intuition is clear: each new vector expands the span by one dimension only if it points in a direction not already covered.

The span of the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\}$ is all of $\\mathbb{R}^n$, since any vector $(v_1, v_2, \\ldots, v_n)$ equals $v_1\\mathbf{e}_1 + v_2\\mathbf{e}_2 + \\cdots + v_n\\mathbf{e}_n$. The span of a proper subset of the standard basis is a coordinate subspace — a lower-dimensional slice of $\\mathbb{R}^n$ aligned with the coordinate axes.

The formal theory of span, including its relationship to [subspaces](!/linear-algebra/vector-spaces/subspaces), is developed in the [vector spaces](!/linear-algebra/vector-spaces/span) section.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Spanning Sets`,
    content: `A set of vectors spans a space if every vector in that space belongs to the span of the set. Equivalently, the set spans $\\mathbb{R}^n$ if for every vector $\\mathbf{b}$ in $\\mathbb{R}^n$, there exist coefficients $c_1, c_2, \\ldots, c_k$ such that $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{b}$.

The standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\}$ spans $\\mathbb{R}^n$ with exactly $n$ vectors and no redundancy. But spanning sets need not be this efficient. The set $\\{(1, 0),\\ (0, 1),\\ (1, 1)\\}$ also spans $\\mathbb{R}^2$, because any vector $(a, b)$ can be written as $a(1, 0) + b(0, 1) + 0(1, 1)$. The third vector is unnecessary — it is already a linear combination of the first two — yet its presence does not prevent the set from spanning. A spanning set with redundant vectors is larger than it needs to be but still reaches every point in the space.

The question of which vectors in a spanning set are genuinely needed and which are superfluous is answered by the concept of linear independence. A spanning set with no redundancy is called a basis — the smallest possible spanning set for a given space. Both ideas are formalized in the [vector spaces](!/linear-algebra/vector-spaces) section.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Trivial and Non-Trivial Combinations`,
    content: `Among all possible linear combinations of a set of vectors, one always exists regardless of the vectors involved: the trivial combination. Setting every coefficient to zero gives:

$$0\\mathbf{v}_1 + 0\\mathbf{v}_2 + \\cdots + 0\\mathbf{v}_k = \\mathbf{0}$$

This produces the zero vector for any choice of $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$. It is called trivial because it carries no information about the vectors themselves — it works automatically, without engaging with the actual components.

A non-trivial combination is one in which at least one coefficient is nonzero. The distinction between trivial and non-trivial combinations is the key to defining linear independence. A set of vectors is linearly independent if the only combination that produces $\\mathbf{0}$ is the trivial one — there is no way to combine the vectors with nonzero coefficients and arrive back at the origin. If a non-trivial combination does produce $\\mathbf{0}$, then at least one vector in the set can be written as a linear combination of the others, revealing redundancy.

This characterization is developed formally in the [linear independence](!/linear-algebra/vector-spaces/linear-independence) section, but the computational meaning is accessible now: if the equation $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ has only the solution $c_1 = c_2 = \\cdots = c_k = 0$, the vectors are independent. If it has other solutions, they are dependent.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Linear Combinations and Systems of Equations`,
    content: `The question "Is $\\mathbf{b}$ a linear combination of $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$?" is an algebraic question about the existence of coefficients. Writing it out component by component produces a system of linear equations:

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{b}$$

Arranging the vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ as columns of a [matrix](!/linear-algebra/matrices) $A$ and the coefficients as an unknown vector $\\mathbf{x}$, the equation becomes:

$$A\\mathbf{x} = \\mathbf{b}$$

The linear combination question and the system-of-equations question are identical — they are two descriptions of the same problem. The combination exists if and only if the system has a solution. Solving the system finds the coefficients; the coefficients reconstruct the combination.

This connection transforms a geometric question (does $\\mathbf{b}$ lie in the span of the columns?) into a computational one (does the augmented matrix $[A \\mid \\mathbf{b}]$ reduce to a consistent system?). The tools for answering the computational question — row reduction, echelon forms, pivot analysis — belong to the [linear systems](!/linear-algebra/linear-systems) section, but the conceptual link originates here, in the definition of a linear combination.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Toward Independence and Basis`,
    content: `Linear combinations open two questions that this page has raised but not resolved. The first: given a set of vectors, can any of them be removed without shrinking the span? A vector that is a linear combination of the others in the set contributes nothing new — every point it helps reach is already reachable without it. A set where no vector is redundant in this sense is called linearly independent. Independence is a property of the set as a whole, not of any individual vector, and it is characterized by the trivial-combination criterion: the only way to combine the vectors into $\\mathbf{0}$ is with all-zero coefficients.

The second question: what is the smallest set of vectors whose span equals the entire space? Such a set must span $\\mathbb{R}^n$ (reaching every vector) and be linearly independent (containing no excess). A set with both properties is a basis for $\\mathbb{R}^n$, and every basis of $\\mathbb{R}^n$ contains exactly $n$ vectors — a fact that defines the dimension of the space.

Both concepts — [linear independence](!/linear-algebra/vector-spaces/linear-independence) and [basis](!/linear-algebra/vector-spaces) — are developed rigorously in the vector spaces section. The machinery of linear combinations built on this page provides the raw material from which those definitions are constructed.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
     id: `intro`,
  title: `Building New Vectors from Old`,
  content: `Every operation in this section — addition, subtraction, scalar multiplication — is a special case of one unifying construction: the linear combination. Scale a collection of vectors by chosen coefficients, then add the results. The output is a single vector assembled from the pieces. This idea is deceptively simple, but it reaches into every corner of linear algebra. Asking which vectors can be built from a given set leads to the concept of span. Asking whether a set contains redundant vectors leads to linear independence. Asking whether a particular vector can be expressed as a combination of others turns out to be equivalent to solving a [system of linear equations](!/linear-algebra/linear-systems). The definitions introduced here are developed formally in the [vector spaces](!/linear-algebra/vector-spaces) section, but their computational foundation belongs here, grounded in the concrete algebra of $\\mathbb{R}^n$.`,
};

const faqQuestions = {
  obj1: {
    question: "What is a linear combination of vectors?",
    answer: "A linear combination is c₁v₁ + c₂v₂ + ... + cₖvₖ where v₁,...,vₖ are vectors and c₁,...,cₖ are scalar coefficients. Each term scales a vector, then all terms are added. Vector addition and scalar multiplication are special cases of this construction.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the geometric meaning of a linear combination?",
    answer: "One vector spans a line through the origin. Two non-parallel vectors span a plane through the origin. Three non-coplanar vectors in ℝ³ span all of 3D space. The coefficients act as continuous dials moving the result anywhere within the span.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the span of a set of vectors?",
    answer: "The span is the set of all vectors that can be formed as linear combinations of the given vectors. It always contains the zero vector (all coefficients zero) and forms a subspace through the origin—a line, plane, or higher-dimensional flat.",
    sectionId: "3"
  },
  obj4: {
    question: "What is a spanning set?",
    answer: "A spanning set for a space is a collection of vectors whose span equals that entire space—every vector in the space can be written as a linear combination of the set. Spanning sets may contain redundant vectors; removing redundancy leads to a basis.",
    sectionId: "4"
  },
  obj5: {
    question: "What is a trivial linear combination?",
    answer: "The trivial combination sets all coefficients to zero: 0v₁ + 0v₂ + ... + 0vₖ = 0. It always produces the zero vector regardless of the input vectors. A non-trivial combination has at least one nonzero coefficient—its existence reveals redundancy in the set.",
    sectionId: "5"
  },
  obj6: {
    question: "How do linear combinations relate to systems of equations?",
    answer: "Asking 'Is b a linear combination of v₁,...,vₖ?' is equivalent to asking 'Does Ax = b have a solution?' where A has v₁,...,vₖ as columns. The combination exists if and only if the system is consistent. Solving finds the coefficients.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the connection between linear combinations and linear independence?",
    answer: "Vectors are linearly independent if the only combination producing zero is the trivial one (all coefficients zero). If a non-trivial combination yields zero, the vectors are dependent—at least one is redundant. An independent spanning set is called a basis.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Linear Combinations",
    "description": "Learn linear combinations of vectors: definition, geometric interpretation, span, spanning sets, trivial vs non-trivial combinations, and connection to systems of equations.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/linear-combinations",
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
      "name": "Linear Combinations"
    },
    "teaches": [
      "Linear combination definition and formula",
      "Geometric interpretation of linear combinations",
      "Span of a set of vectors",
      "Spanning sets and redundancy",
      "Trivial and non-trivial combinations",
      "Connection to systems of linear equations",
      "Preview of linear independence and basis"
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
        "name": "Linear Combinations",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/linear-combinations"
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
      title: "Linear Combinations: Span & Spanning Sets | Learn Math Class",
      description: "Learn linear combinations of vectors: definition, geometric interpretation, span, spanning sets, trivial vs non-trivial combinations, and connection to systems of equations.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/linear-combinations",
      name: "Linear Combinations"
    },
  }
}
   }
export default function LinearCombinationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Linear Combinations</h1>
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
