import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'

export default function ScalarMatrixPage() {

    const keyWords=[
        'scalar matrix','diagonal matrix', 'diagonal matrix example',
        'diagonal matrix definition','matrix','square matrix'
    ]

    const introContent={
        id: "intro",
        title: "Introduction",
        content:`A **scalar matrix** is a special type of [diagonal matrix](!/linear-algebra/matrix/types/diagonal-matrix) where all elements on main diagonal are the same. This makes it a neat subset of diagonal matrices, inheriting their simplicity while adding an extra layer of uniformity. Since every scalar matrix is essentially a scaled version of the [identity matrix](!/linear-algebra/matrix/types/identity-matrix), it plays a key role in scaling transformations and eigenvalue problems. With straightforward computations for multiplication, inversion, and determinants, scalar matrices are fundamental in linear algebra and mathematical applications.
`
    }

    const diagonalSections = [
       
        {
            id: `definition`,
            title: `Definition and Examples`,
            content: [
                `A **scalar matrix** is a **square matrix** where all diagonal elements are equal to the same number and all elements outside the main diagonal are zeros.
                Defined in this way, it falls under definition of [diagonal matrix](!/linear-algebra/matrix/types/diagonal-matrix)  forming special case of this type.
                 Moreover, a scalar matrix can be seen as a scaled version of the [identity matrix](!/linear-algebra/matrix/types/identity-matrix):identity matrix multiplied by a any number results in scalar matrix.`,

        `\nMathematically, a scalar matrix $S$ is defined as $ (S)_{ij} = \\begin{cases} c, & \\text{if } i = j \\\\ 0, & \\text{if } i \\neq j \\end{cases} $, where $c$ is a constant scalar value.`,

        `\n**Key Insight**: Since a scalar matrix is just the identity matrix multiplied by a scalar, we can express it as $S = cI$, where $I$ is the identity matrix and $c$ is a scalar.`,

        `\nFor an $n \\times n$ scalar matrix, we often use notation $S_{n\\times n}$ (or just $S$) where $n$ is the order of the matrix.`,

        `\nA $2 \\times 2$ scalar matrix: $S_{2\\times 2} = \\begin{pmatrix} c & 0 \\\\ 0 & c \\end{pmatrix}$.`,

        `\nA $3 \\times 3$ scalar matrix: $S_{3\\times 3} = \\begin{pmatrix} c & 0 & 0 \\\\ 0 & c & 0 \\\\ 0 & 0 & c \\end{pmatrix}$.`,

        `\nGeneral form for $n \\times n$ case: $S_{n\\times n} = cI = \\begin{pmatrix} c & 0 & 0 & \\cdots & 0 \\\\ 0 & c & 0 & \\cdots & 0 \\\\ 0 & 0 & c & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & c \\end{pmatrix}$.`
            ]
        },
//         {
//             id: `special_matrices`,
//             title: `Relation to Other Special Matrices`,
//             content: [
//                 `The [definition](!/linear-algebra/matrix/types/diagonal-matrix#definition) of a diagonal matrix - requiring only that all non-diagonal elements be zero - creates a broad category that naturally includes several other matrix types as special cases.`,

             
             
//                 `Since it (the definition) sets no special requirements for  diagonal elements, diagonal matrices include also:`,             
//                 `\n**Zero Matrix**: Where all elements (including diagonal) are 0.
//                 [Identity Matrix](!/linear-algebra/matrix/types/identity-matrix): Where all diagonal elements are **1** and other equal to **0**.
//                 **Scalar Matrix**: When all diagonal elements are equal to some scalar λ and other equal to **0**.`,
             
//                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 280">
//     <!-- Diagonal Matrix (largest ellipse) -->
//     <ellipse cx="175" cy="140" rx="154" ry="112" 
//              fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/>
//     <text x="175" y="56" text-anchor="middle" font-family="Arial" font-size="16" fill="#1565C0">
//         Diagonal Matrices
//     </text>
//     <text x="175" y="70" text-anchor="middle" font-family="Arial" font-size="12" fill="#1565C0">
//         (aᵢⱼ = 0 for i ≠ j)
//     </text>

//     <!-- Scalar Matrix (medium ellipse) -->
//     <ellipse cx="175" cy="161" rx="98" ry="70" 
//              fill="#E8F5E9" stroke="#2E7D32" stroke-width="2"/>
//     <text x="175" y="126" text-anchor="middle" font-family="Arial" font-size="16" fill="#2E7D32">
//         Scalar Matrices
//     </text>
//     <text x="175" y="140" text-anchor="middle" font-family="Arial" font-size="12" fill="#2E7D32">
//         (all diagonal elements = λ)
//     </text>

//     <!-- Identity Matrix (small circle) -->
//     <circle cx="119" cy="175" r="28" 
//             fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>
//     <text x="119" y="179" text-anchor="middle" font-family="Arial" font-size="14" fill="#E65100">
//         Identity
//     </text>

//     <!-- Zero Matrix (inside scalar, separated from identity) -->
//     <circle cx="224" cy="175" r="28" 
//             fill="#F3E5F5" stroke="#6A1B9A" stroke-width="2"/>
//     <text x="224" y="179" text-anchor="middle" font-family="Arial" font-size="14" fill="#6A1B9A">
//         Zero
//     </text>

//     <!-- Legend -->
//     <text x="21" y="266" font-family="Arial" font-size="12" fill="#E65100">
//         Note: Identity (λ = 1) and Zero (λ = 0)
//     </text>
//     <text x="21" y="280" font-family="Arial" font-size="12" fill="#E65100">
//         are special cases of scalar matrices
//     </text>
// </svg>`,
               
//               `\nOn the other hand, **diagonal matrices**, by their definition, belong to both **upper** and **lower triangular** matrix categories simultaneously, since they satisfy both conditions: having zeros below the main diagonal (upper triangular) and having zeros above the main diagonal (lower triangular). This makes diagonal matrices a special intersection case of **triangular matrices**.`,
//               `\nAny **diagonal matrix** (and so **identity**, **zero** and **scalar matrices** as a sub-sets of diagonal) is automatically symmetric, since the condition for symmetry (aᵢⱼ = aⱼᵢ for all i,j) is naturally satisfied when all off-diagonal elements are zero.
//               However, the opposite is not always true : **symmetric matrices** form a broader category as they can have non-zero elements anywhere as long as they mirror across the main diagonal.`,
//                `\nThe relationship between **diagonal** and **skew-symmetric matrices** has one special case: the zero matrix is the only matrix that satisfies both definitions, since it's the only matrix that can have all elements equal to zero (including the diagonal) while maintaining the skew-symmetric property aᵢⱼ = -aⱼᵢ.`,
//                 `\n**To learn more about relationships between different types of square matrices, visit this** [page](!/linear-algebra/matrix/types).`,
//                 `\n You may also check our [matrix types generator tool](!/visual-tools/matrix-types) for visual illustration of different types of square matrices`


//             ]
//         },
        {
            id: `properties`,
            title: `Basic Properties`,
            content: [
                "A **scalar matrix** is a diagonal matrix where all diagonal elements are equal. This special form inherits key properties from diagonal matrices while adding additional features:",
        
                "\n**1. Structure:** A scalar matrix by it's [definition](!/linear-algebra/matrix/types/scalar-matrix#definition) has identical values on its main diagonal, while all off-diagonal elements are zero.It is worth noting that the elements of the main diagonal may be equal to zeros as well and that kind of matrix, while being **zero matrix**, will be still refered as **scalar diagonal** type.",
                `For further reference concerning different square matrices types and their relations you may visit this [page](!/linear-algebra/matrix/types).`,
                 `Moreover, check this [diagram](!/linear-algebra/matrix/types/diagonal-matrix#diagram) illustrating various subsets of diagonal matrices and their intersections.`,
                "\n**2. Multiplication:** The product of two scalar matrices is another scalar matrix, where the diagonal value is the product of the original scalars.",
                `See more detailed explanation about closure properties of scalar matrix [here](!/linear-algebra/matrix/types/scalar-matrix#closure) in dedicated section.`,
        
                "\n**3. Commutativity:** Scalar matrices commute with all diagonal matrices and with each other, meaning if $S_1$ and $S_2$ are scalar matrices, then $S_1 S_2 = S_2 S_1$.",
        
                "\n**4. Determinant:** The determinant of an $n \\times n$ scalar matrix $S = cI$ is given by $\\det(S) = c^n$.",
        
                "\n**5. Trace:** The trace of an $n \\times n$ scalar matrix is $\\text{tr}(S) = nc$ since all diagonal elements are $c$.",
        
                "\n**6. Inverse:** A scalar matrix is invertible if $c \\neq 0$. Its inverse is also scalar, given by $S^{-1} = (1/c)I$.",
        
                "\n**7. Eigenvalues and Eigenvectors:** The only eigenvalue of a scalar matrix is $c$, with every nonzero vector as an eigenvector."
            ]
        },
        {
            id: `closure`,
            title: `Closure Properties`,
            content: [
                "A **diagonal matrix** exhibits specific closure properties under various operations:",

                "\n**1. Closed under Multiplication:** The product of two diagonal matrices of the same size is another diagonal matrix: if $D_1$ and $D_2$ are diagonal, then $D_1 D_2$ remains diagonal.",
        
                "\n**2. Closed under Exponentiation:** Raising a diagonal matrix to any integer power preserves its diagonal structure: if $D$ is diagonal, then $D^k$ is also diagonal for any integer $k$.\nThis is pretty intuitive as exponentiation is a special case of multiplication. Check [this section](!/linear-algebra/matrix/types/diagonal-matrix#powers) for more details.",
        
                "\n**3. Closed under Addition:** The sum of two diagonal matrices is also diagonal, where each diagonal entry is the sum of corresponding entries: if $D_1$ and $D_2$ are diagonal, then $D_1 + D_2$ is diagonal as well.",
        
                "\n**4. Closed under Scalar Multiplication:** Multiplying a diagonal matrix by a scalar preserves its diagonal structure: if $D$ is diagonal, then $cD$ is also diagonal for any scalar $c$."
            ]
        },
        // {
        //     id: `multiplication_role`,
        //     title: `Multiplicative Role in Matrix Algebra`,
        //     content: [
        //         `The identity matrix is called the **unit matrix** because it behaves as the multiplicative identity in matrix algebra. This means that when multiplied by another matrix, it leaves the matrix unchanged.`,

        //         `\n**Multiplication with Square Matrices**`,
                
        //         `For any square matrix $A$ of size $n \\times n$, multiplying by the identity matrix does not change $A$:`,
            
        //         `\nMultiplication from the left: $ I_n A = A $.`,
                
        //         `\nMultiplication from the right: $ A I_n = A $.`,
            
        //         `\nSince matrix multiplication is generally not commutative, the fact that $ I_n $ satisfies both $ I_n A = A $ and $ A I_n = A $ reinforces its role as the identity element in matrix algebra.`,
            
        //         `\n** Multiplication with Non-Square Matrices**`,
                
        //         `When the identity matrix is multiplied with a **non-square matrix**, it still acts as the identity, but the order of the identity matrix must match the matrix it is multiplied with.`,
            
        //         `\nFor a matrix $ B $ of size $ m \\times n $, we use identity matrices of appropriate size:`,
            
        //         `\nMultiplication from the left: If $ B $ is $ m \\times n $, then $ I_m B = B $, where $ I_m $ is the $ m \\times m $ identity matrix.`,
            
        //         `\nMultiplication from the right: If $ B $ is $ m \\times n $, then $ B I_n = B $, where $ I_n $ is the $ n \\times n $ identity matrix.`,
            
        //         `\nThis means that identity matrices of different sizes still preserve the structure of the matrix they are multiplied with, maintaining their role as unit matrices in different dimensions.`
        //     ]
        // },
        {
            id: `powers`,
            title: `Powers of the Identity Matrix`,
            content: [
                "Exponentiating a **diagonal matrix** is straightforward since diagonal matrices retain their structure under multiplication.",

                "\n**1. Power of a Diagonal Matrix**",
                "\nFor any diagonal matrix $D = \\text{diag}(d_{11}, d_{22}, \\dots, d_{nn})$, raising it to the power of $k$ results in:",
                "\n$ D^k = \\text{diag}(d_{11}^k, d_{22}^k, \\dots, d_{nn}^k) $.",
                "\nThis follows from the fact that multiplying diagonal matrices is equivalent to exponentiating each diagonal element individually.",
        
                "\n**2. Comparison with Identity Matrix**",
                "\nThe identity matrix is a special case of a diagonal matrix where all diagonal elements are **1**:",
                "\n$ I_n = \\text{diag}(1,1,\\dots,1) $.",
                "\nApplying the same exponentiation rule:",
                "\n$ I_n^k = \\text{diag}(1^k, 1^k, \\dots, 1^k) = I_n $.",
                "\nSince 1 raised to any power is still 1, the identity matrix remains unchanged under exponentiation.",
        
                "\n**3. Example Calculation**",
                "\nConsider the diagonal matrix:",
                "\n$ D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} $.",
                "\nComputing its square:",
                "\n$ D^2 = \\begin{pmatrix} 2^2 & 0 \\\\ 0 & 3^2 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix} $.",
                "\nFor a higher power, say $ k = 3 $:",
                "\n$ D^3 = \\begin{pmatrix} 2^3 & 0 \\\\ 0 & 3^3 \\end{pmatrix} = \\begin{pmatrix} 8 & 0 \\\\ 0 & 27 \\end{pmatrix} $.",
                
                "\nThis confirms that exponentiation of diagonal matrices applies element-wise to the diagonal entries."
            ]
        },
        // {
        //     id: `linear_transformations`,
        //     title: `Identity Matrix in Linear Transformations`,
        //     content: []
        // },
        // {
        //     id: `applications`,
        //     title: `Applications`,
        //     content: []
        // },
       
       
    ];
    
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
     <OperaSidebar 
                  side='right'
                 //  topOffset='55px' 
                  sidebarWidth='45px'
                  panelWidth='300px'
                  iconColor='white'
                  panelBackgroundColor='#f2f2f2'
                /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Scalar Matrix</h1>

      <SectionTableOfContents sections={diagonalSections}/>
      <br/>
      <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        />
        <Sections sections={diagonalSections} />
        
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
