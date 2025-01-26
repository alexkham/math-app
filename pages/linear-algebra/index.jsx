// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// import linearAlgebraFormulasList from '@/app/api/db/formulas/linear-algebra/linearAlgebraFormulas';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import { SectionIcon } from 'lucide-react';
// import Sections from '@/app/components/page-components/section/Sections';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';

// export default function LinearAlgebraPage() {

//   const keyWords=['linear algebra','elementary linear algebra','matrix algebra',
//     'vector algebra','algebra and linear algebra'
//   ]
  

//   const linearAlgebraSections = [
   
//     {
//       id: 'formulas',
//       title: 'Linear Algebra Formulas',
//       content:"Explore ",
//       content: [
//         'Explore Linear Algebra formulas with explanations and examples',
//         " ",
//         <VerticalScrollingFormulaWidget 
//         key={"formula-widget"}
//          formulaData={linearAlgebraFormulasList}
//          moreFormulasLink='/linear-algebra/formulas'
//         //  title='See them all'
//           />,
   
//     ]
      
//     },
//   ];


//   const introContent = {
//     id: "intro",
//     title: "Introduction to Linear Algebra",
//     content:`Linear algebra is a field of mathematics that focuses on studying vectors, matrices, and the relationships between them, forming the mathematical framework for analyzing structures and transformations in multidimensional spaces. It introduces powerful tools to understand and solve problems where quantities interact linearly, making it fundamental to numerous disciplines.

// This field begins with vectors—quantities that have both magnitude and direction—and their operations, such as addition and scaling. It extends to matrices, which are grid-like arrangements of numbers used to represent systems of equations or transformations. Learning how to manipulate matrices and understand their properties is a key part of linear algebra.

// Students also explore vector spaces, the environments in which vectors live, and subspaces, which reveal structure and constraints within these spaces. Concepts like linear independence, span, and basis give insight into how vectors relate and interact. The study of linear transformations, which describe how vectors change under operations like rotations or scaling, helps build a deeper understanding of the subject.

// Eigenvalues and eigenvectors, pivotal concepts in linear algebra, allow students to uncover hidden properties of transformations. Techniques like solving systems of equations, matrix decomposition, and understanding projections or orthogonality are practical outcomes of this study.

// Ultimately, linear algebra provides a foundation for solving abstract and applied problems, developing skills to think logically, recognize patterns, and simplify complex systems. It equips students with a versatile toolkit for further studies in mathematics, sciences, engineering, and beyond.`

//   };
  
  

//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
   
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Linear Algebra</h1>
//     <SectionTableOfContents sections={linearAlgebraSections}/>
    
//     <IntroSection 
//   id={introContent.id}
//   title={introContent.title}
//   content={introContent.content}
//   backgroundColor="#f2f2f2"
//   textColor="#34383c"
// />
  
//     <Sections  sections={linearAlgebraSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>
    


    
//     </>
//   )
// }


import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import { SectionIcon } from 'lucide-react'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'
import MyList from '@/app/components/page-components/lists/MyList'

export async function getStaticProps() {
  const { default: linearAlgebraFormulasList } = await import('@/app/api/db/formulas/linear-algebra/linearAlgebraFormulas');
  const { default: linearAlgebraTermsList } = await import('@/app/api/db/definitions/linear-algebra/linearAlgebraDefinitions')
  
  // Static content that can be used for SEO
  const sectionContent = {
    formulas: {
      title: 'Linear Algebra Formulas',
     
      description: 'Navigate through an essential collection of linear algebra formulas that power mathematical analysis and transformations. This guide presents key formulas across vector operations, matrix calculations, eigenvalues, and linear transformations - each equipped with clear notation, detailed explanations, and practical examples. You will find precise mathematical representations, component breakdowns, and specific use cases for over 15 fundamental formula categories. The organized structure helps you quickly locate and understand the tools you need, whether for solving equations, analyzing transformations, or applying linear algebra concepts in real-world scenarios. Perfect for students needing formula clarification, researchers requiring quick mathematical reference, or practitioners applying linear algebra in their work.'
    },
    definitions: {
      title: 'Linear Algebra Terms and Definitions',
      description: `Discover essential linear algebra definitions that form the mathematical foundation for understanding vectors, matrices, and their relationships. This guide breaks down key terms from basic vector concepts like magnitude and direction to advanced matrix classifications and properties. Each definition includes precise mathematical notation, clear explanations, and visual examples to help grasp the concept. Whether you're learning about vector spaces, exploring matrix types like triangular and symmetric matrices, or studying transformations, this organized reference makes complex linear algebra terminology accessible. The page serves as both a learning tool and a quick reference for students and practitioners, featuring interactive mathematical notation and practical examples throughout.`,
    },
    matrices: {
      title: 'Matrices',
      description: `Explore matrices in linear algebra through our detailed guide.Starting with matrix definitions and notations, the page explains matrix structure, elements, and indexing. You will learn to distinguish between different matrix types - from basic row and column matrices to more complex square matrices. The guide also covers essential matrix properties and dives into special cases of square matrices like diagonal and triangular forms. Each topic features clear mathematical notation and visual examples to reinforce your understanding of these fundamental concepts.`,
      list:[`[Definitions and Notations](!/linear-algebra/matrix#definition) - Explains how matrices are written using different types of brackets (square, parentheses, vertical bars) and introduces basic matrix notation conventions.
      `,
      `[Elements, Structure and Indexing](!/linear-algebra/matrix#indexing) - Covers how matrix elements are organized in rows and columns, explains the 1-based indexing system, and demonstrates how to reference specific elements using row and column indices.`,
      `[Types of Matrices](!/linear-algebra/matrix#classification) - Describes different classifications of matrices based on their shape (column, row, rectangular, and square matrices) and content type (numeric, variable/symbolic, mixed, and zero matrices).`,
      `[Matrix Properties](!/linear-algebra/matrix#properties) - Introduces essential characteristics like size/dimension, rank, determinant, eigenvalues/eigenvectors, and trace, explaining their importance in matrix operations and transformations.`,
      `[Square Matrices and Special Cases](!/linear-algebra/matrix#special) - Focuses on unique types of square matrices, including those with special diagonal patterns (diagonal, upper triangular, lower triangular) and element relationships (symmetric, skew-symmetric, identity, scalar).`,
    
    ]
    }
  }

  const introContent = {
    id: "intro",
    title: "Introduction to Linear Algebra",
    content: `Linear algebra is a field of mathematics that focuses on studying vectors, matrices, and the relationships between them, forming the mathematical framework for analyzing structures and transformations in multidimensional spaces. It introduces powerful tools to understand and solve problems where quantities interact linearly, making it fundamental to numerous disciplines.

This field begins with vectors—quantities that have both magnitude and direction—and their operations, such as addition and scaling. It extends to matrices, which are grid-like arrangements of numbers used to represent systems of equations or transformations. Learning how to manipulate matrices and understand their properties is a key part of linear algebra.

Students also explore vector spaces, the environments in which vectors live, and subspaces, which reveal structure and constraints within these spaces. Concepts like linear independence, span, and basis give insight into how vectors relate and interact. The study of linear transformations, which describe how vectors change under operations like rotations or scaling, helps build a deeper understanding of the subject.

To help students navigate these foundational concepts, we created a dedicated Matrix Theory section that provides an in-depth exploration of matrices - from basic definitions and notations to various matrix types and properties. This interactive guide covers matrix structure, indexing, special cases of square matrices, and key matrix properties, with clear mathematical notation and visual examples throughout. The section serves as both a comprehensive learning resource and a quick reference for understanding these essential building blocks of linear algebra.

Eigenvalues and eigenvectors, pivotal concepts in linear algebra, allow students to uncover hidden properties of transformations. Techniques like solving systems of equations, matrix decomposition, and understanding projections or orthogonality are practical outcomes of this study.

Ultimately, linear algebra provides a foundation for solving abstract and applied problems, developing skills to think logically, recognize patterns, and simplify complex systems. It equips students with a versatile toolkit for further studies in mathematics, sciences, engineering, and beyond.`
  }

  const keyWords = [
    'linear algebra',
    'elementary linear algebra',
    'matrix algebra',
    'vector algebra',
    'algebra and linear algebra',
    'linear transformations',
    'vector spaces',
    'matrices and vectors'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/linear-algebra'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      linearAlgebraFormulasList,
      linearAlgebraTermsList
    }
  }
}

export default function LinearAlgebraPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  linearAlgebraFormulasList,
  linearAlgebraTermsList
}) {
  // Reconstruct sections with React components
  const linearAlgebraSections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/linear-algebra/formulas',
      content: [
        sectionContent.formulas.description,
       `
       
       `,
        <VerticalScrollingFormulaWidget 
          key="formula-widget"
          formulaData={linearAlgebraFormulasList}
          moreFormulasLink='/linear-algebra/formulas'
          panelWidth={'600px'}
          width='600px'
          // backgroundColor='orange'
        />
      ]
    },
    {
      id: 'definitions',
      title: sectionContent.definitions.title,
      link:'/linear-algebra/definitions',
      content: [
        {
          content: sectionContent.definitions.description,
          layout: 'horizontal',
          position: 'left', 
          width: 1
        },
      
        {
          content: <VerticalScrollingFormulaWidget
            key="definitions-widget"
            formulaData={linearAlgebraTermsList}
            moreFormulasLink='/linear-algebra/definitions'
            type='definition'
          />,
          layout: 'horizontal',
          position: 'right',
          width: 1
        }
      ]
     },
    {
      id: 'matrix',
      title: sectionContent.matrices.title,
      link:'/linear-algebra/matrix',
      content: [
        sectionContent.matrices.description,
       <MyList data={sectionContent.matrices.list}
       key={249}/>,
       
      ]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Linear Algebra - Learn Mathematics",
    "description": "Comprehensive guide to linear algebra covering vectors, matrices, transformations, and core concepts. Learn about vector spaces, eigenvalues, and their applications.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Linear Algebra",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Linear Algebra - Vectors, Matrices & Transformations | Learn Math Class"
  const pageDescription = "Master linear algebra with our comprehensive guide covering vectors, matrices, transformations, and core concepts. Perfect for students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="canonical" href="https://www.learnmathclass.com/linear-algebra" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        topOffset='55px' 
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Linear Algebra
        </h1>
        <SectionTableOfContents sections={linearAlgebraSections}/>
        <br/>
        <br/>
        
        <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        />
        
        <Sections sections={linearAlgebraSections}/>
        <br/>
        <br/>
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}