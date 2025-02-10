import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Sections from '@/app/components/page-components/section/Sections'
import MyList from '@/app/components/page-components/lists/MyList'
import MathContainer from '@/app/components/math-content/MathContainer'

export default function MatrixPage() {
    
  

    const introContent = {
        id: "intro",
        title: "Introduction to Matrices",
        content: `In this section, we will explore the concept of matrices, which are fundamental structures in linear algebra. Linear Algebrs is often referred to as "matrix algebra" due to their significance in the field. The primary goal of linear algebra is to organize data into matrices and perform various operations on them.`
      }

      const sectionsContent = [
        {
          id: "definition",
          title: "Definition and Notation",
        //   link: "/linear-algebra",
          content: [`A matrix is a rectangular structure consisted  of elements (numbers or variables) arranged in m rows and n columns, denoted as a matrix of order m × n.
            By convention,we use english capital letters (A, B, C, ...) to denote matrices.
           Matrices are typically written using one of three types of brackets: square brackets [ ], parentheses ( ), or vertical bars | |. 
           The elements within the matrix are denoted with lowercase letters and two indices representing their position in the matrix.`,
          <MathContainer
          key={34}
          content='**Using different capital letters**:
            $$A = \begin{pmatrix}
            1 & 2 \\
            3 & 4
            \end{pmatrix}, \quad
            B = \begin{pmatrix}
            5 & 6 \\
            7 & 8
            \end{pmatrix}, \quad
            C = \begin{pmatrix}
            9 & 10 \\
            11 & 12
            \end{pmatrix}$$

            **Same matrices using different bracket types**:
            $$A = \begin{pmatrix}
            1 & 2 \\
            3 & 4
            \end{pmatrix}, \quad
            B = \begin{bmatrix}
            1 & 2 \\
            3 & 4
            \end{bmatrix}, \quad
            C = \begin{vmatrix}
            1 & 2 \\
            3 & 4
            \end{vmatrix}$$'/>,
            `There are more notations we use for special  types of matrices which we will get familiar with in later sections.`
          
          ]
        },
        {
          id: "indexing", 
          title: "Elements, Structure and Indexing",
          content:[
            `The horizontal lines in a matrix are called rows, and vertical lines are columns. By convention, rows are enumerated from top to bottom, starting with 1, and this number becomes the first index of matrix elements.`,
            <MathContainer
            key={35}
            content='
            **Row example**:

$$A = \begin{pmatrix} 
\textcolor{red}{2} & \textcolor{red}{5} & \textcolor{red}{1} \\
3 & 8 & 6 \\
5 & 4 & 7
\end{pmatrix}$$

Elements in row 1 (red) are referred to as $a_{1j}$ where j is the column number.
            '/>,
            `The vertical lines in a matrix are called columns. By convention, columns are numbered from left to right starting with 1, and this number becomes the second index of matrix elements.`,
            <MathContainer
            key={0}
            content='
            **Column example**:

$$A = \begin{pmatrix}
2 & \textcolor{blue}{5} & 1 \\
3 & \textcolor{blue}{8} & 6 \\
5 & \textcolor{blue}{4} & 7
\end{pmatrix}$$

Elements in column 2 (blue) are denoted as $a_{i2}$ where i is the row number.
            '/>,
            `**Important**:In linear algebra, we traditionally use 1-based indexing for matrices - first row/column is 1 (and not 0). `,
            `
            A matrix of size m×n (read as "m by n") has m rows and n columns. The first number always refers to rows, second to columns.`,
            <MathContainer
            key={33}
            content='
            **Size examples**:

$$B = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix} \quad \text{2}\times\text{3 matrix}$$

$$C = \begin{pmatrix}
7 & 8 \\
9 & 10 \\
11 & 12
\end{pmatrix} \quad \text{3}\times\text{2 matrix}$$
            '/>,
            `Any element in a matrix is uniquely identified by it's row and column indices $(i,j)$. The element $a_{ij}$ is located at the intersection of row i and column j.`,
            <MathContainer
            key={36}
            content='
            **Element indexing**:

$$A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & \color{red}{a_{22}} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}$$
        '/>,
        `**For the highlighted element** $\\color{red}{a_{22}}$:
First index (2) indicates row number
Second index (2) indicates column number`,
<MathContainer
key={2}
content='
**Different indices example**:

$$A = \begin{pmatrix}
a_{11} & \color{blue}{a_{12}} & a_{13} & \color{red}{a_{14}} \\
a_{21} & a_{22} & \color{green}{a_{23}} & a_{24} \\
a_{31} & a_{32} & a_{33} & a_{34}
\end{pmatrix}$$
'/> ,
`**Elements highlighted**:
 $\\color{blue}{a_{12}}$ - first row, second column
 $\\color{green}{a_{23}}$ - second row, third column  
 $\\color{red}{a_{14}}$ - first row, fourth column`,
 `

Elements indices are essential for defining matrix operations like addition and multiplication. The way indices work in operations you can find in Matrix Operations section.`

        ]             
          
        },
        {
          id: "classification",
          title: "Types of Matrices",
          content: [`Matrices are classified based on various criteria such as their shape (square, rectangular), content type .Square matrices furthermore may be divided later into many special types based on element patterns (diagonal, triangular), or element properties (symmetric, skew-symmetric) and more. Each type has unique characteristics that determine it's behavior in matrix operations and properties.
           
            **Based on the shape of the matrix we define 4 types**:`,
          <MyList
          key={4}
          boxed={true} color={'blue'} compact={true} type={'dot'} width={'500px'}
          data={[`**Column matrices (m×1)**: `,]} />,
          <MathContainer
          key={5}
          width='500px'
          content='$$\text{Column matrix: } 
A_{3\times1} = \begin{pmatrix}
a_{11} \\
a_{21} \\
a_{31}
\end{pmatrix}$$'/>,
<MyList
key={6}
boxed={true} color={'blue'} compact={true} type={'dot'} width={'500px'}
data={[`**Row matrices (1×n)**: `,]} />,
<MathContainer
key={7}
width='500px'
content='$$\text{Row matrix: }
B_{1\times3} = \begin{pmatrix}
b_{11} & b_{12} & b_{13}
\end{pmatrix}$$'/>,
<MyList
key={8}
boxed={true} color={'blue'} compact={true} type={'dot'} width={'500px'}
data={[`**General rectangular matrix (m×n where m≠n)**: `,]} />,
<MathContainer
key={9}
width='500px'
content='$$\text{General rectangular: }
C_{2\times3} = \begin{pmatrix}
c_{11} & c_{12} & c_{13} & c_{14} \\
c_{21} & c_{22} & c_{23} & c_{24}
\end{pmatrix}$$'/>,
<MyList
key={10}
boxed={true} color={'blue'} compact={true} type={'dot'} width={'500px'}
data={[`**Square matrix (m×n where m=n)**: `,]} />,
<MathContainer
key={11}
width='500px'
content='$$\text{Square Matrix : }
A_3 = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix} \quad $$'/>,
`
**In terms of content type we distinguish**: `,
<MyList
key={12}
boxed={true} color={'yellow'} compact={true} type={'dot'} 
data={[
    `**Numeric matrices**:
    Contain only numbers (integers, decimals, complex numbers). Standard choice for practical computations and real-world applications.`,

]}/>,
<MathContainer
key={13}

content='$$A = \begin{pmatrix}
2 & -3 & 4 \\
0 & 5 & 1
\end{pmatrix}$$'/>,
<MyList
key={14}
boxed={true} color={'yellow'} compact={true} type={'dot'} 
data={[
    `** Variable/Symbolic matrices**:
    Use letters to represent unknown or general values. Essential in proofs and theoretical mathematics.`,

]}/>,
<MathContainer
key={15}

content='$$B = \begin{pmatrix}
x & y & z \\
a & b & c
\end{pmatrix}$$'/>,
<MyList
key={16}
boxed={true} color={'yellow'} compact={true} type={'dot'} 
data={[
    `** Mixed matrices**:
    Combine numbers, variables, and special constants. Common in systems of equations and mathematical modeling.`,

]}/>,
<MathContainer
key={17}

content='$$C = \begin{pmatrix}
1 & x & 0 \\
y & 2 & \pi
\end{pmatrix}$$'/>,
<MyList
key={18}
boxed={true} color={'yellow'} compact={true} type={'dot'} 
data={[
    `**Zero (Null) matrices**:
    Have all elements equal to zero. Important in defining additive identity and studying linear transformations.`,

]}/>,
<MathContainer
key={19}

content='$$O = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$'/>,
        
        ]
        },
        {
          id: "properties",
          title: "Matrix Properties", 
          content: [`Matrix properties are essential characteristics that define how matrices behave in operations and transformations. Understanding these properties helps predict operation results and solve matrix equations.
**Matrix Properties Overview**:
`,
 <MyList 
 key={20}
 boxed={true} color={'gray'} compact={true} type={'dot'} 
  data={[`**Size/Dimension**:
     Number of rows (m) and columns (n) determines what matrices can be multiplied and what operations are possible.`,

`**Rank**:
 Maximum number of linearly independent rows/columns. Shows how much unique information matrix contains.`,

`**Determinant**:
 Scalar value that exists only for square matrices. Zero determinant indicates matrix singularity.`,

`**Eigenvalues/Eigenvectors**: 
Special numbers and vectors (square matrices only) that help understand matrix transformations.`,

`**Trace**:
 Sum of main diagonal elements in square matrices. Useful in various matrix equations and proofs.`,

]} />  ,
`Each property represents a profound enough topic in linear algebra and deserves dedicated study due to complexity,extensiveness and importance.
These foundational features play crucial roles across linear algebra, connecting with matrix operations, linear transformations, vector spaces, and systems of equations. Their applications span from basic calculations to advanced theoretical concepts. `
],

        },
        {
          id: "special",
          title: "Square Matrices and Special Cases",
          content: [`
            Square matrices form a unique class that enables a rich variety of special cases based on their element patterns, symmetry properties, and operational behaviors.That is why square matrices deserve detailed study and investigation.
            Square matrices (n×n) have important subtypes based on element patterns.
            **Diagonal patterns**:
            `,
            <MyList
            key={21}
            boxed={true} color={'blue'} compact={true} type={'dot'} width={'500px'}
            data={[
                `**Diagonal**:
                 All elements outside main diagonal are zero`,
                `**Upper triangular**:
                 All elements below diagonal are zero `,
                `**Lower triangular**:
                 All elements above diagonal are zero`,
            ]}
            />,
            `**By element relationships**:`,
            <MyList
            key={22}
            boxed={true} color={'yellow'} compact={true} type={'dot'} width={'500px'}
            data={[
               `**Symmetric**:
                $a_{ij} = a_{ji}$ for all i,j
                `,
                `**Skew-symmetric**:
                 $a_{ij} = -a_{ji}$ for all i,j
                `,
                `**Identity**:
                 1's on main diagonal, 0's elsewhere
                `,
                `**Scalar**:
                 Constant multiples of identity matrix                    
                `      
            
            ]}
            />,
            `**These special cases are particularly important because they**:
           `,
            <MyList
            key={23}
            boxed={true} color={'gray'} compact={false}  width={'500px'}
            data={[
                `Simplify matrix operations`,
                `Have unique properties`,
                `Appear frequently in applications`,
                `Help understand matrix transformations`,
            ]}
            />,
        `Also need to mention that those classifications are not absolute and mutually exclusive.Often times happens that very same matrix may belong to different categories in different breakdowns simultaneously which creates very interesting combinations of properties and behaviors.This poses great challenge and gives a taste for further deeper studies of square matrices.To learn more about different types of square matrices and reciprocal relations between them [visit this page](!/linear-algebra/matrix/types).   `
        ]
        }
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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Matrix</h1>
    <br/>
    {/* <MyList data={list} boxed={true} color={'blue'} compact={true} type={'dot'}/> */}
    <br/>
    <br/>
    <SectionTableOfContents sections={sectionsContent}/>
    <br/>
    <br/>
    
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        />
        <br/>
        <br/>
        <Sections sections={sectionsContent}/>
        <br/>
        <br/>
       
        <br/>
        <br/>
        <ScrollUpButton/>
    
    </>
  )
}
