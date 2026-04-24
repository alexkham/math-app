import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import LinearSystemsCalculator from '@/app/components/calculators/linear-system/LinearSystemsCalculator'


export async function getStaticProps(){
const keyWords = [
  'linear systems calculator',
  'system of equations solver',
  'Gaussian elimination calculator',
  'Gauss-Jordan calculator',
  'Cramers rule calculator',
  'matrix inverse method solver',
  'augmented matrix calculator',
  'solve linear equations online',
  'row echelon form calculator',
  'RREF calculator',
  'system of linear equations',
  'linear algebra solver',
  'simultaneous equations calculator',
  'back substitution calculator',
  'free equation solver'
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
  _default:
    'Enter a system of linear equations. Choose a solution method and click Solve to find the unknowns.',
  'Gaussian Elimination':
    'Reduces the augmented matrix [A|b] to row echelon form via forward elimination, then uses back-substitution to find the solution. Time complexity O(n^3).\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/linear-systems#1) \u2193@',
  'Gauss-Jordan':
    'Extends Gaussian elimination by reducing the matrix to reduced row echelon form (RREF), eliminating above and below each pivot. The solution is read directly from the last column.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/linear-systems#2) \u2193@',
  "Cramer's Rule":
    'Uses determinants to solve square systems. Each variable xi = det(Ai)/det(A), where Ai is A with column i replaced by b. Requires det(A) != 0. Elegant but O(n!) for large n.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/linear-systems#3) \u2193@',
  'Inverse Method':
    'Computes x = A^(-1)b directly. Requires A to be square and non-singular (det(A) != 0). The inverse is found via Gauss-Jordan on [A|I].\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/linear-systems#4) \u2193@',
};


const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },

  obj1: {
    title: `Gaussian Elimination`,
    content: `Gaussian elimination reduces an augmented matrix $[A|\\mathbf{b}]$ to row echelon form (REF) through three elementary row operations: swapping rows, scaling a row by a nonzero constant, and adding a multiple of one row to another.

The process works column by column from left to right. For each column, a pivot element is selected (using partial pivoting for numerical stability), and all entries below the pivot are eliminated. The result is an upper triangular system that is solved via **back-substitution**, working from the last equation upward.

$$a_{11}x_1 + a_{12}x_2 + \\cdots = b_1$$
$$a_{22}x_2 + \\cdots = b_2$$
$$\\ddots$$

Gaussian elimination has $O(n^3)$ time complexity and is the foundation of most direct solvers for linear systems.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Gauss-Jordan Elimination`,
    content: `Gauss-Jordan elimination extends **Gaussian elimination** by continuing to reduce the matrix to reduced row echelon form (RREF). After creating zeros below each pivot (forward elimination), it also eliminates all entries above each pivot (backward elimination) and scales each pivot to 1.

The result is an identity-like structure on the left side of the augmented matrix, and the solution vector appears directly in the rightmost column — no back-substitution is needed.

Gauss-Jordan is slightly more expensive than standard Gaussian elimination (roughly 50% more operations) but produces a cleaner final form. It is also the method used to compute **matrix inverses** by applying the process to $[A|I]$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Cramer&apos;s Rule`,
    content: `Cramer&apos;s Rule solves a square system $A\\mathbf{x} = \\mathbf{b}$ by expressing each unknown as a ratio of **determinants**:

$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$

where $A_i$ is the matrix $A$ with its $i$-th column replaced by $\\mathbf{b}$. The method requires $\\det(A) \\neq 0$, meaning the system must have a unique solution.

While Cramer&apos;s Rule is elegant and useful for theoretical analysis and small systems (2x2, 3x3), it becomes computationally impractical for large systems due to $O(n!)$ complexity of naive determinant computation. For practical computation, **Gaussian elimination** is preferred.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Inverse Method`,
    content: `The inverse method solves $A\\mathbf{x} = \\mathbf{b}$ by computing $\\mathbf{x} = A^{-1}\\mathbf{b}$ directly. This requires $A$ to be square and non-singular ($\\det(A) \\neq 0$).

The calculator finds $A^{-1}$ using **Gauss-Jordan elimination** on the augmented matrix $[A|I]$. Row operations transform the left side into $I$, and the right side becomes $A^{-1}$.

The inverse method is most useful when solving multiple systems with the same coefficient matrix but different right-hand sides, since $A^{-1}$ only needs to be computed once. For a single system, Gaussian elimination is more efficient because computing the full inverse requires more operations than directly solving the system.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Types of Solutions`,
    content: `A system of linear equations has exactly one of three solution types:

**Unique solution** -- the system has exactly one set of values satisfying all equations. This occurs when the coefficient matrix has full rank (rank equals the number of unknowns). The graph shows lines intersecting at a single point.

**Infinitely many solutions** -- the system is consistent but underdetermined. This occurs when the rank is less than the number of unknowns and no contradictions exist. Solutions form a line, plane, or higher-dimensional subspace.

**No solution** -- the system is inconsistent. This occurs when row reduction produces a row of the form $[0 \\; 0 \\; \\cdots \\; 0 \\; | \\; c]$ where $c \\neq 0$. Geometrically, this means parallel lines or planes that never intersect.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Augmented Matrix Representation`,
    content: `The augmented matrix $[A|\\mathbf{b}]$ combines the coefficient matrix and the constants vector into a single matrix for efficient manipulation. For a system with $m$ equations and $n$ unknowns:

$$\\left[\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right]$$

Row operations on the augmented matrix correspond exactly to valid algebraic manipulations of the equations. The calculator supports both equation input (showing the algebraic form) and matrix input (showing the augmented matrix directly).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Row Echelon Form vs Reduced Row Echelon Form`,
    content: `**Row echelon form (REF)** is the result of **Gaussian elimination**. Requirements: all zero rows are at the bottom, each leading entry (pivot) is to the right of the one above it, and all entries below each pivot are zero. REF requires back-substitution to find the solution.

**Reduced row echelon form (RREF)** is the result of **Gauss-Jordan elimination**. In addition to REF requirements: every pivot equals 1, and every pivot is the only nonzero entry in its column. The solution can be read directly from the final matrix.

RREF is unique for any given matrix, while REF is not (different pivot choices produce different REF forms). Both forms preserve the solution set of the original system.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `This linear systems calculator solves systems using four methods with step-by-step breakdowns and a 2D graph for two-variable systems. For matrix-specific operations like **determinants**, **inverses**, **LU decomposition**, and **Kronecker products**, use the **Matrix Operations Calculator**.

For vector-level computations including **dot products**, **cross products**, **projections**, **Gram-Schmidt orthogonalization**, and **linear independence checks**, use the **Vector Operations Calculator**. Related topics include **eigenvalues**, **rank**, **null space**, and **least squares** solutions.`,
    before: ``,
    after: ``,
    link: '',
  },

};

const faqQuestions = {
  obj1: {
    question: "What methods does this linear systems calculator support?",
    answer: "The calculator supports four solution methods: Gaussian elimination (forward elimination with back-substitution), Gauss-Jordan elimination (full reduction to RREF), Cramer's Rule (determinant-based solution for square systems), and the Inverse Method (computing x = A inverse times b). Each method includes step-by-step calculation breakdowns."
  },
  obj2: {
    question: "Which method should I use to solve a system of equations?",
    answer: "Gaussian elimination is the most versatile and efficient general-purpose method. Gauss-Jordan is useful when you want the solution without back-substitution. Cramer's Rule works well for small square systems (2x2 or 3x3) but is impractical for larger ones. The Inverse Method is best when solving multiple systems with the same coefficient matrix."
  },
  obj3: {
    question: "How do I know if a system has no solution or infinitely many solutions?",
    answer: "During row reduction, if a row becomes all zeros on the left but nonzero on the right (like 0 0 0 | 5), the system has no solution. If there are fewer pivots than unknowns and no contradictory rows, the system has infinitely many solutions with free variables."
  },
  obj4: {
    question: "What is the difference between Gaussian and Gauss-Jordan elimination?",
    answer: "Gaussian elimination reduces the matrix to row echelon form (upper triangular) and then uses back-substitution to find the solution. Gauss-Jordan continues the reduction to reduced row echelon form where every pivot is 1 and is the only nonzero entry in its column, so the solution is read directly without back-substitution."
  },
  obj5: {
    question: "Can this calculator handle non-square systems?",
    answer: "Yes, the calculator supports systems with different numbers of equations and variables (up to 10 each). Non-square systems may have no solution or infinitely many solutions. Note that Cramer's Rule and the Inverse Method require square systems, but Gaussian and Gauss-Jordan elimination work for any dimensions."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Linear Systems Calculator",
    "description": "Free linear systems calculator with Gaussian elimination, Gauss-Jordan, Cramer's Rule, and inverse method. Step-by-step solutions with 2D graphing for two-variable systems.",
    "url": "https://www.learnmathclass.com/linear-algebra/calculators/linear-systems",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Four solution methods: Gaussian elimination, Gauss-Jordan, Cramer's Rule, Inverse Method",
      "Step-by-step calculation breakdowns for every method",
      "Equation view and augmented matrix input modes",
      "2D graph visualization for two-variable systems",
      "Support for systems up to 10 equations and 10 unknowns",
      "Detection of unique, infinite, and no-solution cases",
      "Random fill and clear controls for quick testing"
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
        "name": "Linear Systems Calculator",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators/linear-systems"
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
      title: "Linear Systems Calculator - Equation Solver | Learn Math Class",
      description: "Solve systems of linear equations with Gaussian elimination, Gauss-Jordan, Cramer's Rule, and inverse method. Free step-by-step solutions with 2D graphing.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/calculators/linear-systems",
      name: "Linear Systems Calculator"
    },
  }
}
   }

export default function LinearSystemsCalculatorPage({seoData, sectionsContent, descriptions, faqQuestions, schemas}) {
    
 const genericSections=[
  { id:'0', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
  { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
  { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
  { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
  { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
  { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
  { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
  { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
  { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Linear Systems Calculator</h1>
   <br/>
    <div style={{transform:'scale(1)',marginLeft:'-250px'}}>
        <SiblingsNav topOffset="200px" title='Similar Calculators' 
           bg="#f0f4ff"
         color="#1f2937"
         activeColor="#4285f4"
         activeBg="#f0f7ff">
   <LinearSystemsCalculator descriptions={descriptions}/>
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
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
