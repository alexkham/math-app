import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },

    obj1: {
  title: `From Algebra to Geometry`,
  before: ``,
  content: `The [algebraic form](!/algebra/complex-numbers/algebraic-form) $z = a + bi$ contains two real numbers: the real part $a$ and the imaginary part $b$. Two numbers naturally suggest two dimensions. Rather than confining complex numbers to a line, we grant them an entire plane — a flat surface where horizontal position encodes the real part and vertical position encodes the imaginary part.

The correspondence is direct: the complex number $z = a + bi$ maps to the point with coordinates $(a, b)$. The number $4 + 3i$ becomes the point $(4, 3)$, located four units right of the origin and three units up. The number $-2 + i$ becomes $(-2, 1)$, sitting in the second quadrant. Every complex number finds a home at exactly one point, and every point in the plane represents exactly one complex number.

This visualization carries a historical name: the Argand diagram, honoring Jean-Robert Argand, who published the geometric interpretation in 1806. Other mathematicians including Caspar Wessel and Carl Friedrich Gauss developed similar ideas independently. The plane itself is called the complex plane, and its two axes receive names reflecting their contents — the real axis runs horizontally, the imaginary axis runs vertically.

The identification of complex numbers with points transforms algebra into geometry. Questions about numbers become questions about locations. Properties of operations become properties of movements. The entire machinery of coordinate geometry — distance, angle, reflection, rotation — applies immediately to complex arithmetic, providing visual intuition that pure symbolism cannot offer.`,
  after: ``,
  link: '',
},

    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj2: {
  title: `The Two Axes`,
  before: ``,
  content: `The complex plane organizes itself around two perpendicular lines passing through the origin. These axes partition the plane and provide reference directions for locating every complex number.

The horizontal axis carries the real numbers. Every point on this line has coordinates $(a, 0)$, corresponding to complex numbers of the form $z = a + 0i = a$. The integers $-3, -2, -1, 0, 1, 2, 3$ appear at their familiar positions stretching left and right. Irrational values like $\\sqrt{2}$ and $\\pi$ occupy their proper locations. The entire real number line, in all its infinite extent, embeds as the horizontal axis of the complex plane.

The vertical axis carries the [pure imaginary numbers](!/algebra/complex-numbers/imaginary-numbers). Every point on this line has coordinates $(0, b)$, corresponding to complex numbers $z = 0 + bi = bi$. The number $i$ sits one unit above the origin; $2i$ sits two units up; $-3i$ sits three units down. No real numbers appear on this axis except at the origin itself.

The origin occupies a singular position in this structure. Located at $(0, 0)$, it represents the complex number $0 = 0 + 0i$. This point lies on both axes simultaneously — it belongs to the real numbers (having zero imaginary part) and to the pure imaginary numbers (having zero real part). No other point shares this dual membership. The origin serves as the reference for all measurements: distances emanate from it, angles open from the positive real axis through it, and the entire coordinate system centers upon it.

Every other complex number — those with both $a \\neq 0$ and $b \\neq 0$ — lives off both axes, somewhere in the interior of one of the four quadrants.`,
  after: ``,
  link: '',
},
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj3: {
  title: `Plotting Complex Numbers`,
  before: ``,
  content: `Placing a complex number on the plane requires reading its real and imaginary parts as horizontal and vertical coordinates. The process mirrors plotting ordered pairs in elementary coordinate geometry, with the complex notation providing a different packaging of the same information.

Consider $z = 3 + 2i$. The real part $3$ dictates movement three units right from the origin. The imaginary part $2$ dictates movement two units up. The point $(3, 2)$ marks the location. For $z = -1 + 4i$, move one unit left and four units up to reach $(-1, 4)$. For $z = -2 - 3i$, move two units left and three units down to reach $(-2, -3)$ in the third quadrant.

The four quadrants organize complex numbers by the signs of their components. The first quadrant (upper right) contains numbers with positive real and positive imaginary parts. The second quadrant (upper left) holds numbers with negative real parts but positive imaginary parts. The third quadrant (lower left) contains both parts negative. The fourth quadrant (lower right) has positive real parts with negative imaginary parts. Knowing the quadrant immediately reveals the sign pattern of a complex number.

Special cases occupy the axes rather than the quadrants. Real numbers like $5$ appear at $(5, 0)$ on the horizontal axis. Pure imaginary numbers like $-2i$ appear at $(0, -2)$ on the vertical axis. These numbers have one zero component, placing them precisely on the boundary between quadrants rather than inside any particular region.

Complex numbers expressed differently may occupy the same point. The number $\\frac{6}{2} + \\frac{8}{4}i$ simplifies to $3 + 2i$ and plots at $(3, 2)$ regardless of how the components were originally written. The geometric location depends only on the final real values of $Re(z)$ and $Im(z)$, not on the form of the expression.`,
  after: ``,
  link: '',
},
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `Complex Numbers as Vectors`,
  before: ``,
  content: `Points in the plane sit motionless at fixed locations. Vectors capture something more dynamic — they encode magnitude and direction, representing displacement rather than mere position. Complex numbers admit both interpretations, and the vector viewpoint proves especially powerful for understanding arithmetic operations.

The complex number $z = a + bi$ can be viewed as an arrow beginning at the origin and ending at the point $(a, b)$. The horizontal component $a$ describes rightward displacement; the vertical component $b$ describes upward displacement. Together they determine both where the vector points and how long it extends. The number $4 + 3i$ becomes an arrow reaching to $(4, 3)$, angled upward and to the right with a length computable from its components.

Vector addition follows the parallelogram rule, also known as tip-to-tail addition. Given two vectors $z_1$ and $z_2$, place the tail of $z_2$ at the head of $z_1$. The sum $z_1 + z_2$ stretches from the origin to the final endpoint. Algebraically, $(a + bi) + (c + di) = (a + c) + (b + d)i$ adds components separately — and geometrically, this matches exactly how vectors combine through the parallelogram construction.

Subtraction reverses the second vector before adding. To compute $z_1 - z_2$, flip $z_2$ to point in the opposite direction and then add. The result connects the two points in the plane, giving the displacement from $z_2$ to $z_1$. The [modulus](!/algebra/complex-numbers/absolute-value) of $z_1 - z_2$ measures the distance between them.

The vector interpretation makes the [modulus](!/algebra/complex-numbers/absolute-value) geometrically obvious. The length of the arrow from the origin to $(a, b)$ follows from the Pythagorean theorem: $|z| = \\sqrt{a^2 + b^2}$. This is simply the distance formula applied to a vector's components, revealing modulus as nothing more exotic than length.`,
  after: ``,
  link: '',
},

    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj5: {
  title: `Visualizing the Conjugate`,
  before: ``,
  content: `The [conjugate](!/algebra/complex-numbers/complex-conjugate) operation gains immediate clarity in the geometric setting. For $z = a + bi$, the conjugate $\\bar{z} = a - bi$ preserves the real part while negating the imaginary part. On the plane, this transforms the point $(a, b)$ into $(a, -b)$ — the same horizontal coordinate, opposite vertical coordinate.

This transformation has a name: reflection across the real axis. The real axis acts as a mirror. Points above the axis map to corresponding points below; points below map to points above. Points on the real axis itself — the real numbers — remain fixed in place, unmoved by conjugation because they have no imaginary component to negate.

Concrete examples illustrate the reflection. The number $z = 2 + 3i$ sits at $(2, 3)$, two units right and three units up. Its conjugate $\\bar{z} = 2 - 3i$ sits at $(2, -3)$, the same distance right but now three units down. Draw both points and the horizontal axis, and the mirror symmetry becomes unmistakable. Similarly, $z = -1 + 4i$ at $(-1, 4)$ reflects to $\\bar{z} = -1 - 4i$ at $(-1, -4)$.

The reflection perspective explains several algebraic facts geometrically. Taking the conjugate twice returns to the original point — reflecting across the same mirror twice restores every point to its starting position, confirming $\\overline{\\bar{z}} = z$. A number equals its own conjugate precisely when reflection leaves it unchanged, which happens only for points on the mirror itself — the real numbers. A number equals the negative of its conjugate when it lies on the imaginary axis, equidistant above and below the origin.`,
  after: ``,
  link: '',
},
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj6: {
  title: `The Lack of Order in $\\mathbb{C}$`,
  before: ``,
  content: `Real numbers line up in sequence. Given any two distinct reals, one is larger and one is smaller. The relation "less than" totally orders $\\mathbb{R}$, allowing comparison between any pair of elements. This ordering underlies much of real analysis — limits approach from below or above, intervals have left and right endpoints, and functions increase or decrease.

Complex numbers refuse such arrangement. No consistent definition of "less than" extends from $\\mathbb{R}$ to $\\mathbb{C}$ while preserving the essential properties we expect from an ordering. The question "Is $3 + 2i$ greater than $1 + 5i$?" has no meaningful answer. Neither number dominates the other in any standard sense.

The geometry reveals why ordering fails. Real numbers occupy a one-dimensional line where direction determines comparison — rightward means greater, leftward means lesser. Complex numbers fill a two-dimensional plane where points spread in all directions. No single direction consistently represents "greater than" without privileging some numbers arbitrarily over others. Should $3 + 2i$ exceed $1 + 5i$ because it lies further right, or should $1 + 5i$ exceed $3 + 2i$ because it lies further up? Neither choice maintains logical consistency across all pairs.

One meaningful comparison survives: the [modulus](!/algebra/complex-numbers/absolute-value) provides a measure of size. The modulus $|z| = \\sqrt{a^2 + b^2}$ gives the distance from the origin to the point. We can legitimately say $|3 + 4i| = 5$ exceeds $|1 + i| = \\sqrt{2}$ because $5 > \\sqrt{2}$. But modulus compares magnitudes, not the numbers themselves. Multiple complex numbers share the same modulus — every point on a circle centered at the origin has identical modulus — so comparing distances cannot substitute for a full ordering.`,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `Visualizing Operations`,
  before: ``,
  content: `Arithmetic operations on complex numbers translate into geometric actions on the plane. This correspondence provides visual intuition that algebraic manipulation alone cannot offer, and it foreshadows the deeper connections explored in [trigonometric](!/algebra/complex-numbers/trigonometric-form) and [exponential](!/algebra/complex-numbers/exponential-form) forms.

Addition performs vector combination. Given $z_1$ and $z_2$ as arrows from the origin, their sum $z_1 + z_2$ completes the parallelogram formed by the two arrows. Equivalently, translate $z_2$ so its tail sits at the head of $z_1$; the sum extends from the origin to the new head of $z_2$. This tip-to-tail construction matches the component-wise addition $(a + c) + (b + d)i$ with perfect precision.

Subtraction measures displacement between points. The difference $z_1 - z_2$ represents the vector pointing from $z_2$ to $z_1$. Its modulus $|z_1 - z_2|$ gives the distance between the two complex numbers. In navigation terms, subtraction answers "how far and in what direction must I travel from $z_2$ to reach $z_1$?"

Multiplication introduces richer geometry involving both scaling and rotation. Multiplying by a positive real number stretches or shrinks the vector without changing its direction — $2z$ points the same way as $z$ but twice as far from the origin. Multiplying by $-1$ rotates the vector by $180°$, flipping it to the opposite side of the plane. Multiplying by $i$ rotates $90°$ counterclockwise: the number $1$ becomes $i$, $i$ becomes $-1$, $-1$ becomes $-i$, and $-i$ returns to $1$.

General multiplication combines rotation with scaling. The product $z_1 \\cdot z_2$ has modulus $|z_1||z_2|$ — the lengths multiply. Its angle from the positive real axis equals the sum of the individual angles — the rotations add. This geometric description anticipates the [trigonometric form](!/algebra/complex-numbers/trigonometric-form), where multiplication becomes transparently simple: multiply magnitudes, add angles.`,
  after: ``,
  link: '',
},
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Seeing Numbers in Two Dimensions",
  content: `
  Algebra defines complex numbers through symbols and operations, but geometry gives them shape and position. Every complex number corresponds to a unique point in a two-dimensional plane, transforming abstract expressions like $3 + 2i$ into visible locations we can plot, measure, and manipulate. This geometric perspective revolutionizes how we understand complex arithmetic — addition becomes vector combination, conjugation becomes reflection, and the [modulus](!/algebra/complex-numbers/absolute-value) becomes distance.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Geometric Representation | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/geometric-representation",
         name: "name"
      },
        
       }
    }
   }

export default function GeometricRepresentationPage({seoData,sectionsContent , introContent}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Geometric Representation</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
