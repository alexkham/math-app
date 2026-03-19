import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=['','','','','']

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

  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }

const sectionsContent = {
  obj1: {
    title: `What LU Decomposition Is`,
    content: `The LU decomposition writes an $n \\times n$ [matrix](!/linear-algebra/matrix) $A$ as

$$A = LU$$

where $L$ is lower [triangular](!/linear-algebra/matrix/types) with ones on the diagonal (unit lower triangular) and $U$ is upper triangular. The matrix $U$ is the [row echelon form](!/linear-algebra/linear-systems/echelon-form) of $A$, and $L$ stores the multipliers that [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) used to produce it.

The factorization captures the entire elimination process in a reusable form. Instead of performing elimination from scratch for every new right-hand side $\\mathbf{b}$, the work is done once (producing $L$ and $U$) and reused cheaply for each solve.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Construction from Gaussian Elimination`,
    content: `Forward elimination on $A$ applies a sequence of row-addition [operations](!/linear-algebra/matrix/operations), each represented by an [elementary matrix](!/linear-algebra/matrix/operations) $E_i$. The product $E_k \\cdots E_2 E_1 A = U$ reduces $A$ to upper triangular form.

Rearranging: $A = E_1^{-1} E_2^{-1} \\cdots E_k^{-1} U$. Each $E_i$ is a lower triangular matrix that adds a multiple of one row to a row below. Its inverse simply negates the multiplier. The product $L = E_1^{-1} E_2^{-1} \\cdots E_k^{-1}$ is lower triangular, with the multipliers sitting in the sub-diagonal positions.

## Worked Example

$$A = \\begin{pmatrix} 2 & 1 & -1 \\\\ 4 & 0 & 2 \\\\ -2 & 5 & 3 \\end{pmatrix}$$

Subtract $2$ times row $1$ from row $2$ (multiplier $m_{21} = 2$) and add row $1$ to row $3$ (multiplier $m_{31} = -1$):

$$\\begin{pmatrix} 2 & 1 & -1 \\\\ 0 & -2 & 4 \\\\ 0 & 6 & 2 \\end{pmatrix}$$

Add $3$ times row $2$ to row $3$ (multiplier $m_{32} = -3$):

$$U = \\begin{pmatrix} 2 & 1 & -1 \\\\ 0 & -2 & 4 \\\\ 0 & 0 & 14 \\end{pmatrix}$$

The multipliers fill $L$: $L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -1 & -3 & 1 \\end{pmatrix}$.

Verification: $LU = \\begin{pmatrix} 2 & 1 & -1 \\\\ 4 & 0 & 2 \\\\ -2 & 5 & 3 \\end{pmatrix} = A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Structure of L and U`,
    content: `The lower factor $L$ is unit lower triangular: ones on the diagonal and multipliers below. Entry $l_{ij}$ (with $i > j$) is the multiplier used to eliminate position $(i, j)$ during forward elimination. The diagonal is always ones because no row scaling is performed — only row additions.

The upper factor $U$ is the echelon form: pivots on the diagonal, zeros below, and the result of all elimination steps. The diagonal entries of $U$ are the pivots, and their product gives the [determinant](!/linear-algebra/determinants): $\\det(A) = \\det(L)\\det(U) = 1 \\cdot u_{11}u_{22}\\cdots u_{nn}$.

The factorization stores $L$ and $U$ compactly. Since $L$ has ones on the diagonal (which need not be stored) and $U$ has zeros below the diagonal (which need not be stored), both factors fit in a single $n \\times n$ array: the lower triangle holds the multipliers and the upper triangle holds $U$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `When LU Exists Without Pivoting`,
    content: `The factorization $A = LU$ without row swaps exists if and only if every leading principal submatrix of $A$ is nonsingular. The $k$-th leading principal submatrix is the upper-left $k \\times k$ block of $A$, and its [determinant](!/linear-algebra/determinants) must be nonzero for $k = 1, 2, \\dots, n$.

When a zero appears in a pivot position during elimination, no row-addition operation can produce a nonzero pivot — a row swap is required. The simple $A = LU$ factorization breaks down, and the pivoted version $PA = LU$ is needed.

For example, $A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ has no $LU$ factorization without pivoting: the $(1,1)$ entry is zero, and no multiple of row $1$ can create a nonzero pivot. But after swapping the two rows, elimination proceeds immediately.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Partial Pivoting: PA = LU`,
    content: `Partial pivoting modifies the elimination process: at each step, the row with the largest absolute value in the current pivot column (among rows at or below the pivot position) is swapped into the pivot position. All row swaps are recorded in a permutation matrix $P$.

The factorization becomes $PA = LU$, where $P$ is the product of all row-swap [permutation matrices](!/linear-algebra/matrix/types). This factorization exists for every [invertible](!/linear-algebra/matrix/inverse) matrix — partial pivoting eliminates the restriction on leading principal submatrices.

Partial pivoting also improves numerical stability. Small pivots amplify rounding errors (dividing by a number near zero magnifies imprecision), and selecting the largest available pivot keeps the multipliers in $L$ bounded by $1$ in absolute value, limiting error accumulation.

In numerical software, LU with partial pivoting is the default — the unpivoted version $A = LU$ is a theoretical simplification that is rarely used in practice.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Solving Systems with LU`,
    content: `Given $PA = LU$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps.

Forward substitution: solve $L\\mathbf{y} = P\\mathbf{b}$ for $\\mathbf{y}$. Since $L$ is lower triangular, this starts at the top and works downward — each equation involves one new unknown plus previously solved values. Cost: $O(n^2)$.

Back substitution: solve $U\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Since $U$ is upper triangular, this starts at the bottom and works upward. Cost: $O(n^2)$.

The factorization itself costs $\\frac{2}{3}n^3$ operations. Each subsequent solve costs $O(n^2)$. For $k$ systems with the same coefficient matrix but different right-hand sides $\\mathbf{b}_1, \\dots, \\mathbf{b}_k$: factor once at cost $\\frac{2}{3}n^3$, then solve $k$ times at cost $kn^2$. When $k$ is large, the per-system cost drops to essentially $O(n^2)$ — far cheaper than $k$ independent eliminations at $\\frac{2}{3}n^3$ each.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `LU and the Determinant`,
    content: `The [determinant](!/linear-algebra/determinants) of $A$ is a free byproduct of the LU factorization. Since $\\det(L) = 1$ (the diagonal is all ones) and $\\det(U) = u_{11}u_{22}\\cdots u_{nn}$ (the product of the diagonal for a [triangular](!/linear-algebra/matrix/types) matrix):

$$\\det(A) = \\det(L)\\det(U) = u_{11}u_{22}\\cdots u_{nn}$$

With pivoting, each row swap flips the sign: $\\det(A) = (-1)^s u_{11}u_{22}\\cdots u_{nn}$, where $s$ is the number of row swaps recorded in $P$.

This makes determinant computation essentially free once LU is available — just multiply the diagonal of $U$ and account for the sign. It is far more efficient than cofactor expansion, and it is the method every numerical library uses.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `LU and the Inverse`,
    content: `To compute $A^{-1}$, solve $A\\mathbf{x}_j = \\mathbf{e}_j$ for each standard basis vector $\\mathbf{e}_j$, $j = 1, \\dots, n$. The solutions $\\mathbf{x}_1, \\dots, \\mathbf{x}_n$ are the columns of $A^{-1}$.

With LU: factor $A$ once ($\\frac{2}{3}n^3$), then solve $n$ systems ($n \\times O(n^2) = O(n^3)$). Total cost: roughly $\\frac{8}{3}n^3$ — cheaper than $n$ independent eliminations.

In practice, computing $A^{-1}$ explicitly is rarely the right approach. Solving $A\\mathbf{x} = \\mathbf{b}$ via LU is faster than multiplying $A^{-1}\\mathbf{b}$, and more numerically stable. The [inverse](!/linear-algebra/matrix/inverse) formula is primarily a theoretical tool; for computation, LU solves are preferred.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Worked Example: 4×4 with Pivoting`,
    content: `$$A = \\begin{pmatrix} 0 & 2 & 1 & 3 \\\\ 1 & 0 & 3 & -1 \\\\ 3 & 1 & 0 & 2 \\\\ 2 & 3 & 1 & 0 \\end{pmatrix}$$

The $(1,1)$ entry is zero — a row swap is needed. The largest entry in column $1$ is $3$ in row $3$. Swap rows $1$ and $3$:

$$\\begin{pmatrix} 3 & 1 & 0 & 2 \\\\ 1 & 0 & 3 & -1 \\\\ 0 & 2 & 1 & 3 \\\\ 2 & 3 & 1 & 0 \\end{pmatrix}$$

Eliminate below the $(1,1)$ pivot. Multipliers: $m_{21} = 1/3$, $m_{31} = 0$, $m_{41} = 2/3$:

$$\\begin{pmatrix} 3 & 1 & 0 & 2 \\\\ 0 & -1/3 & 3 & -5/3 \\\\ 0 & 2 & 1 & 3 \\\\ 0 & 7/3 & 1 & -4/3 \\end{pmatrix}$$

The largest entry in column $2$ below position $(2,2)$ is $7/3$ in row $4$. Swap rows $2$ and $4$. Continue elimination on columns $2$ and $3$ with the appropriate multipliers.

After completing all steps, the factorization $PA = LU$ is assembled with $P$ recording both row swaps, $L$ storing all multipliers, and $U$ storing the final upper triangular result. Verification: $LU = PA$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Computational Cost`,
    content: `The LU factorization of an $n \\times n$ matrix requires roughly $\\frac{2}{3}n^3$ arithmetic operations (multiplications and additions). Each triangular solve (forward or back substitution) requires roughly $n^2$ operations.

For a single system $A\\mathbf{x} = \\mathbf{b}$, LU costs about the same as [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) applied directly. The advantage appears with multiple right-hand sides: $k$ systems sharing the same $A$ cost $\\frac{2}{3}n^3 + 2kn^2$, versus $\\frac{2}{3}kn^3$ for $k$ independent eliminations.

Compared to alternatives: [Cramer's rule](!/linear-algebra/determinants/applications) costs $O(n \\cdot n!)$ — absurdly expensive. Explicit [inverse](!/linear-algebra/matrix/inverse) computation costs roughly $2n^3$. The [Cholesky](!/linear-algebra/decompositions/cholesky) factorization costs $\\frac{1}{3}n^3$ but requires symmetry and positive definiteness. LU is the general-purpose baseline — the standard direct solver for dense [linear systems](!/linear-algebra/linear-systems) in scientific computing.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


 const introContent = {
  title: `Gaussian Elimination as a Matrix Factorization`,
  content: `The LU decomposition factors a square matrix into a lower triangular factor L and an upper triangular factor U. The upper factor is the row echelon form; the lower factor stores the multipliers used to get there. Once computed, the factorization converts every subsequent system solve into two cheap triangular substitutions — making LU the workhorse of direct linear system solvers.`,
}



   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/decompositions/lower-upper",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Page Title</h1>
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
