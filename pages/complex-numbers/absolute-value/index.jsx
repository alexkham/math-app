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
  title: `Definition of Modulus`,
  before: ``,
  content: `The modulus of a complex number $z = a + bi$, written $|z|$, measures the straight-line distance from the origin to the point $(a, b)$ in the [complex plane](!/complex-numbers/geometric-representation). This distance follows directly from the Pythagorean theorem: the point $(a, b)$ sits at the end of a right triangle with horizontal leg $a$ and vertical leg $b$, so the hypotenuse has length $\\sqrt{a^2 + b^2}$.

The formula is thus:

$$|z| = |a + bi| = \\sqrt{a^2 + b^2}$$

The notation mirrors real number absolute value, and for good reason — modulus generalizes the familiar concept to two dimensions. Where real absolute value measures distance from zero along a line, complex modulus measures distance from zero across a plane.

Computation proceeds by squaring both components, adding, and taking the square root. For $z = 3 + 4i$, we calculate $|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. The famous 3-4-5 right triangle appears here — the complex number $3 + 4i$ lies exactly 5 units from the origin. For $z = -2 + i$, the modulus is $|z| = \\sqrt{(-2)^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}$, an irrational distance approximately equal to $2.236$.

The geometric picture makes modulus tangible. Draw the point, draw the line segment connecting it to the origin, and measure that segment's length. Every complex number possesses exactly one modulus, always a non-negative real value. Numbers closer to the origin have smaller moduli; numbers farther away have larger moduli. The modulus provides the only meaningful sense of "size" for complex numbers, since $\\mathbb{C}$ lacks the ordering that lets us compare real numbers directly.`,
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
  title: `Special Cases`,
  before: ``,
  content: `The modulus formula applies uniformly to all complex numbers, but certain categories yield particularly simple results. These special cases connect complex modulus back to familiar real-number concepts.

For purely real numbers — those with $b = 0$ — the modulus reduces to ordinary absolute value. If $z = a$ where $a$ is real, then $|z| = \\sqrt{a^2 + 0^2} = \\sqrt{a^2} = |a|$. The number $5$ has modulus $5$; the number $-7$ has modulus $7$. Real numbers sit on the horizontal axis of the complex plane, and their distance from the origin equals their distance from zero on the real line. Complex modulus and real absolute value agree completely on their shared domain.

For [pure imaginary numbers](!/complex-numbers/imaginary-numbers) — those with $a = 0$ — the modulus equals the absolute value of the coefficient. If $z = bi$, then $|z| = \\sqrt{0^2 + b^2} = \\sqrt{b^2} = |b|$. The number $4i$ has modulus $4$; the number $-3i$ has modulus $3$. Pure imaginaries sit on the vertical axis, and their modulus simply measures how far up or down they lie from the origin, ignoring the sign.

The complex number zero stands alone with modulus zero. Since $0 = 0 + 0i$, we have $|0| = \\sqrt{0^2 + 0^2} = 0$. This is the only complex number with vanishing modulus — every nonzero number lies some positive distance from the origin. The equivalence "$|z| = 0$ if and only if $z = 0$" proves essential in analysis, allowing us to test whether an expression equals zero by checking whether its modulus vanishes.`,
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
  title: `Modulus and the Conjugate`,
  before: ``,
  content: `A beautiful identity connects the modulus to the [complex conjugate](!/complex-numbers/complex-conjugate): for any complex number $z$, the product of $z$ and its conjugate equals the square of the modulus.

$$z \\cdot \\bar{z} = |z|^2$$

The proof follows from direct computation. Let $z = a + bi$, so $\\bar{z} = a - bi$. Their product expands as:

$$z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$$

The cross terms cancel, and since $i^2 = -1$, the imaginary square becomes positive. The result $a^2 + b^2$ is precisely $|z|^2$ by definition of modulus.

This identity appears everywhere in complex analysis. It explains why multiplying by the conjugate eliminates imaginary components — the product is guaranteed real. It provides a quick way to compute modulus: rather than taking a square root, compute $z \\cdot \\bar{z}$ and recognize the result as $|z|^2$.

The identity also enables [division](!/complex-numbers/operations). To compute $\\frac{w}{z}$, multiply numerator and denominator by $\\bar{z}$:

$$\\frac{w}{z} = \\frac{w \\cdot \\bar{z}}{z \\cdot \\bar{z}} = \\frac{w \\cdot \\bar{z}}{|z|^2}$$

The denominator becomes the real number $|z|^2$, converting the quotient to standard [algebraic form](!/complex-numbers/algebraic-form). Without the identity $z \\cdot \\bar{z} = |z|^2$, division of complex numbers would require far more cumbersome techniques.`,
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
  title: `Properties of Modulus`,
  before: ``,
  content: `The modulus operation obeys algebraic laws that mirror and extend properties of real absolute value. These rules simplify calculations and enable estimation when exact values prove difficult.

Non-negativity holds universally: $|z| \\geq 0$ for every complex number $z$. The modulus is a sum of squares under a square root, and both operations preserve non-negativity. Equality $|z| = 0$ occurs precisely when $z = 0$, since only the origin lies zero distance from itself.

The conjugate preserves modulus: $|\\bar{z}| = |z|$. Conjugation reflects a point across the real axis, and reflection does not change distance from the origin. The points $z = 3 + 4i$ and $\\bar{z} = 3 - 4i$ both lie exactly 5 units from zero.

Products follow a multiplicative rule: $|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$. The modulus of a product equals the product of the moduli. This property, impossible to guess from the definition, emerges from the algebra of complex multiplication and finds its natural explanation in [trigonometric form](!/complex-numbers/trigonometric-form), where multiplication multiplies lengths.

Division obeys the corresponding quotient rule: $|z_1 / z_2| = |z_1| / |z_2|$ for $z_2 \\neq 0$. The modulus of a quotient equals the quotient of the moduli.

Powers extend the pattern: $|z^n| = |z|^n$ for any integer $n$. Raising a complex number to the $n$-th power raises its modulus to the $n$-th power. Combined with [De Moivre's theorem](!/complex-numbers/demoivre-theorem), this property makes computing powers of complex numbers remarkably efficient.

These rules transform modulus from a mere distance measurement into a powerful algebraic tool. When facing a complicated product or quotient, compute each factor's modulus separately and combine using multiplication or division — often far simpler than working with the full complex expressions.`,
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
  title: `The Triangle Inequality`,
  before: ``,
  content: `Among all properties of modulus, none proves more fundamental than the triangle inequality. This bound constrains how moduli combine under addition and provides the foundation for estimation throughout complex analysis.

The statement is concise: for any two complex numbers $z_1$ and $z_2$,

$$|z_1 + z_2| \\leq |z_1| + |z_2|$$

The modulus of a sum never exceeds the sum of the moduli. Equality can occur, but the left side can never surpass the right.

The name comes from geometry. In the [complex plane](!/complex-numbers/geometric-representation), the numbers $0$, $z_1$, and $z_1 + z_2$ form vertices of a triangle (possibly degenerate). The side from $0$ to $z_1 + z_2$ has length $|z_1 + z_2|$. The path from $0$ to $z_1$ and then from $z_1$ to $z_1 + z_2$ has total length $|z_1| + |z_2|$. The direct path cannot exceed the detour — a triangle's side never surpasses the sum of the other two sides.

The vector interpretation makes this vivid. View $z_1$ and $z_2$ as arrows from the origin. Their sum $z_1 + z_2$ places $z_2$ at the tip of $z_1$ and measures the resultant. Walking along both vectors sequentially covers distance $|z_1| + |z_2|$. The straight-line resultant covers at most that distance, and typically less unless the vectors point in the same direction.

The inequality extends to any finite sum: $|z_1 + z_2 + \\cdots + z_n| \\leq |z_1| + |z_2| + \\cdots + |z_n|$. Repeated application of the two-term inequality yields this generalization immediately.`,
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
  title: `Proving the Triangle Inequality`,
  before: ``,
  content: `The geometric picture motivates the triangle inequality, but rigorous proof requires algebraic verification. The argument proceeds by squaring both sides and exploiting the identity $|z|^2 = z \\cdot \\bar{z}$.

Begin with the squared modulus of the sum:

$$|z_1 + z_2|^2 = (z_1 + z_2) \\cdot \\overline{(z_1 + z_2)} = (z_1 + z_2)(\\bar{z_1} + \\bar{z_2})$$

Expanding the product:

$$= z_1\\bar{z_1} + z_1\\bar{z_2} + z_2\\bar{z_1} + z_2\\bar{z_2} = |z_1|^2 + z_1\\bar{z_2} + \\overline{z_1\\bar{z_2}} + |z_2|^2$$

The middle terms $z_1\\bar{z_2}$ and $\\overline{z_1\\bar{z_2}}$ are [conjugates](!/complex-numbers/complex-conjugate) of each other. Their sum equals $2\\text{Re}(z_1\\bar{z_2})$, twice the real part. Thus:

$$|z_1 + z_2|^2 = |z_1|^2 + 2\\text{Re}(z_1\\bar{z_2}) + |z_2|^2$$

The key observation: the real part of any complex number never exceeds its modulus, so $\\text{Re}(z_1\\bar{z_2}) \\leq |z_1\\bar{z_2}| = |z_1||z_2|$. Substituting:

$$|z_1 + z_2|^2 \\leq |z_1|^2 + 2|z_1||z_2| + |z_2|^2 = (|z_1| + |z_2|)^2$$

Taking square roots of both sides (valid since all quantities are non-negative) yields the triangle inequality.

Equality holds precisely when $\\text{Re}(z_1\\bar{z_2}) = |z_1\\bar{z_2}|$, which occurs when $z_1\\bar{z_2}$ is a non-negative real number. This happens if and only if $z_1$ and $z_2$ point in the same direction from the origin — one is a non-negative real multiple of the other. Geometrically, the triangle degenerates to a line segment when both vectors align.`,
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
  title: `The Reverse Triangle Inequality`,
  before: ``,
  content: `A companion inequality bounds differences rather than sums. The reverse triangle inequality states:

$$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$$

The absolute difference of two moduli never exceeds the modulus of the difference. This bound proves useful when estimating how much moduli can vary as complex numbers change.

The proof derives from the standard triangle inequality. Write $z_1 = (z_1 - z_2) + z_2$. Applying the triangle inequality:

$$|z_1| = |(z_1 - z_2) + z_2| \\leq |z_1 - z_2| + |z_2|$$

Rearranging gives $|z_1| - |z_2| \\leq |z_1 - z_2|$. The same argument with roles reversed yields $|z_2| - |z_1| \\leq |z_2 - z_1| = |z_1 - z_2|$. Combining both inequalities:

$$-|z_1 - z_2| \\leq |z_1| - |z_2| \\leq |z_1 - z_2|$$

This is equivalent to $\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$.

The geometric interpretation: $|z_1 - z_2|$ measures the distance between two points in the plane. The quantity $\\big||z_1| - |z_2|\\big|$ measures how much their distances from the origin differ. Two points can be close together (small $|z_1 - z_2|$) even if they lie at very different distances from the origin — but the difference in their radii cannot exceed their separation. Conversely, two points far apart have moduli that may differ substantially, but never by more than the distance between them.`,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Applications`,
  before: ``,
  content: `The modulus and its inequalities serve practical purposes throughout complex analysis, from routine calculations to sophisticated proofs.

Bounding provides estimates when exact computation proves difficult. Suppose we need to show that some complicated expression stays small. Rather than evaluating it precisely, apply the triangle inequality to bound its modulus by a sum of simpler terms. The product rule $|z_1 z_2| = |z_1||z_2|$ often simplifies factors further. Such estimates form the backbone of convergence proofs and error analysis.

Distance measurement follows immediately from modulus. The quantity $|z_1 - z_2|$ gives the Euclidean distance between points $z_1$ and $z_2$ in the [complex plane](!/complex-numbers/geometric-representation). This interpretation converts geometric problems into algebraic ones and vice versa. Finding the closest point, testing whether two regions overlap, measuring path lengths — all reduce to modulus calculations.

Circles admit elegant description through modulus. The set of all complex numbers $z$ satisfying $|z - z_0| = r$ forms a circle centered at $z_0$ with radius $r$. The equation asks for all points lying distance exactly $r$ from the center $z_0$. Similarly, $|z - z_0| < r$ describes the open disk interior, and $|z - z_0| \\leq r$ describes the closed disk including its boundary. These sets appear constantly in complex analysis: convergence regions, domains of analyticity, and integration contours often take circular form.

The inequality $|z - z_0| < r$ can be rewritten as $z_0 - r < z < z_0 + r$ only when restricted to real numbers. In the full complex plane, the inequality carves out a two-dimensional region, not an interval. This shift from intervals to disks marks one of the fundamental differences between real and complex analysis.`,
  after: ``,
  link: '',
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
  title: "Measuring Distance in the Complex Plane",
  content: `Every complex number occupies a position in the [complex plane](!/complex-numbers/geometric-representation), and a natural question arises: how far does it lie from the origin? The modulus — also called absolute value — answers this question with a single non-negative real number. Beyond mere measurement, the modulus obeys algebraic laws that connect it to the [conjugate](!/complex-numbers/complex-conjugate), govern products and quotients, and establish fundamental inequalities used throughout analysis.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Absolute Value of Complex Numbers | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/absolute-value",
         name: "name"
      },
        
       }
    }
   }

export default function AbsoluteValuePage({seoData,sectionsContent , introContent}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Absolute Value</h1>
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
