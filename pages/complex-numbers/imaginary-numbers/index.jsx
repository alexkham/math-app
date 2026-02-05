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
  title: `The Necessity of a New Number System`,
  before: ``,
  content: `Every expansion of our number system arose from an equation that refused to yield solutions. Negative numbers emerged when subtraction demanded answers beyond the counting numbers. Fractions appeared when division insisted on exactness. Irrational numbers surfaced when geometry required lengths like $\\sqrt{2}$ that no fraction could capture. Each time, mathematicians faced a choice: declare certain problems unsolvable, or expand the boundaries of what counts as a number.

The equation $x^2 + 1 = 0$ poses exactly this challenge to the real number system $\\mathbb{R}$. Rearranging gives $x^2 = -1$, which asks: what number, when multiplied by itself, produces negative one? No real number qualifies. Positive numbers squared remain positive. Negative numbers squared also yield positive results, since two negative signs cancel. Zero squared gives zero. The entire real line offers no candidate.

Rather than abandon such equations as meaningless, mathematicians introduced a new object: the imaginary unit, denoted $i$, defined by the single property $i^2 = -1$. This definition creates exactly what the equation demands — a number whose square is negative one. The symbol $i$ does not represent any point on the traditional number line; it exists perpendicular to all real numbers, opening an entirely new dimension for mathematical exploration.

An equivalent notation writes $i = \\sqrt{-1}$, interpreting $i$ as the principal square root of negative one. This form emphasizes the connection to familiar radical expressions, though it requires caution. The usual rules for manipulating square roots do not always extend safely to negative radicands, a subtlety explored in the [next section](!/complex-numbers/imaginary-numbers#simplifying-square-roots). Despite its name, nothing about the imaginary unit is fictitious or unreal — it is simply a different kind of number, as legitimate as any other, governed by consistent rules that extend arithmetic into new territory.`,
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
  title: `Simplifying Square Roots of Negative Numbers`,
  before: ``,
  content: `With the imaginary unit established, we gain a systematic method for handling square roots of negative numbers — expressions that previously had no meaning within $\\mathbb{R}$. The technique extracts the negative sign as a factor of $i$, leaving behind an ordinary real radical.

The rule states: for any positive real number $a$, the square root of its negative equals $i$ times the square root of the positive value. Symbolically, $\\sqrt{-a} = i\\sqrt{a}$. The negative sign transforms into the imaginary unit, while the magnitude passes through unchanged.

Consider $\\sqrt{-4}$. Applying the rule: $\\sqrt{-4} = i\\sqrt{4} = i \\cdot 2 = 2i$. The answer $2i$ satisfies verification, since $(2i)^2 = 4i^2 = 4(-1) = -4$. For $\\sqrt{-7}$, where the radicand has no perfect square factor, we obtain $\\sqrt{-7} = i\\sqrt{7}$, leaving the irrational portion intact. A more involved example: $\\sqrt{-12} = i\\sqrt{12} = i\\sqrt{4 \\cdot 3} = 2i\\sqrt{3}$, combining the extraction of $i$ with standard simplification of the remaining radical.

One critical warning accompanies this technique: the familiar product rule for radicals, $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$, fails when both radicands are negative. A naive calculation might proceed as $\\sqrt{-1} \\cdot \\sqrt{-1} = \\sqrt{(-1)(-1)} = \\sqrt{1} = 1$. But this contradicts the definition — we know $\\sqrt{-1} = i$, and $i \\cdot i = i^2 = -1$, not $+1$. The error arises because the product rule assumes non-negative radicands. When negatives appear, extract $i$ from each factor first, then multiply: $\\sqrt{-1} \\cdot \\sqrt{-1} = i \\cdot i = i^2 = -1$. This trap catches many students; the safest practice converts all negative square roots to $i$-form before performing any multiplication.`,
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
  title: `Defining Pure Imaginary Numbers`,
  before: ``,
  content: `The imaginary unit $i$ serves as the foundation for an entire family of numbers. Multiply $i$ by any real number $b$, and the result $bi$ belongs to a special category: the pure imaginary numbers. These occupy a distinct position within the broader [complex number](!/algebra/complex-numbers) system, characterized by the complete absence of a real component.

Formally, when we write a complex number in standard form $z = a + bi$, the number qualifies as pure imaginary precisely when $a = 0$. The real part vanishes entirely, leaving only the imaginary term. The structure reduces to $z = 0 + bi = bi$, where $b$ can be any real value — positive, negative, rational, irrational, or even zero.

Examples span a wide range of appearances. Simple cases include $3i$, $-7i$, and $\\frac{1}{2}i$. More elaborate forms arise in calculations: $\\sqrt{5}i$ carries an irrational coefficient, while $\\frac{6\\sqrt{3}}{13}i$ combines fractions and radicals. Despite their varied appearances, all share the defining characteristic — no real part exists alongside the imaginary term.

The number zero occupies a unique position in this classification. Written as $0 = 0 + 0i$, it satisfies the condition for being real (the imaginary part equals zero) and simultaneously satisfies the condition for being pure imaginary (the real part equals zero). No other number achieves this dual membership. Zero stands alone at the intersection of the real and imaginary worlds, belonging fully to both categories. On the [complex plane](!/complex-numbers/geometric-representation), this corresponds to the single point where the horizontal real axis and the vertical imaginary axis cross — the origin itself.`,
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
  title: `Critical Distinction: The "Imaginary Part" is Real`,
  before: ``,
  content: `The terminology surrounding complex numbers contains a paradox that trips up countless students. In the expression $z = a + bi$, we call $b$ the "imaginary part" — yet $b$ itself is an ordinary real number. The name refers to which component of $z$ the value describes, not to the nature of $b$ as a number.

Consider $z = 5 + 3i$. The real part equals $5$, and the imaginary part equals $3$. Not $3i$ — just $3$. The coefficient standing before $i$ is what we extract and label as the imaginary part. When asked for $Im(z)$, the correct response is the real number $3$, stripped of its accompanying $i$. The imaginary unit indicates where the value lives within the complex structure; it does not become part of the value itself.

Notation formalizes this distinction. For any complex number $z = a + bi$, we write $Re(z) = a$ for the real part and $Im(z) = b$ for the imaginary part. Both $Re(z)$ and $Im(z)$ produce real number outputs — they extract coordinates from the complex number, much like obtaining the $x$ and $y$ values from a point in the plane.

The confusion intensifies with negative imaginary parts. Given $z = 2 - 7i$, students often struggle with whether the imaginary part is $-7$ or $7$. Writing the number in strict standard form as $z = 2 + (-7)i$ clarifies the situation: the coefficient multiplying $i$ is $-7$, so $Im(z) = -7$. The sign belongs to the imaginary part, not to the $i$.

A reliable rule of thumb: when identifying the imaginary part of any complex number, mentally rewrite it in the form $a + bi$ and read off whatever real number occupies the position directly before $i$. That number — complete with its sign, whether integer, fraction, or irrational — constitutes the imaginary part. The $i$ merely marks the location; it never participates in the answer to "what is $Im(z)$?"`,
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
  title: `The Cyclic Nature of the Powers of $i$`,
  before: ``,
  content: `Raising $i$ to successive powers produces a pattern that loops back on itself every four steps. This cyclic behavior distinguishes imaginary exponentiation from real number powers and provides a powerful shortcut for calculations that would otherwise seem impossibly complex.

Begin with the first four powers. By definition, $i^1 = i$. Squaring gives $i^2 = -1$, the foundational property. For the cube, multiply once more: $i^3 = i^2 \\cdot i = (-1) \\cdot i = -i$. The fourth power completes the cycle: $i^4 = i^2 \\cdot i^2 = (-1)(-1) = 1$. And now the pattern resets — $i^5 = i^4 \\cdot i = 1 \\cdot i = i$, returning us to where we started.

The sequence $i, -1, -i, 1$ repeats indefinitely. Every fourth power brings the value back to $1$, launching the cycle anew. This periodicity means that $i^{17}$ equals $i^1$, that $i^{42}$ equals $i^2$, and that $i^{1000}$ equals $i^4 = 1$. No matter how large the exponent grows, only four possible outcomes exist.

The computational shortcut exploits this four-cycle through division with remainder. To evaluate $i^k$ for any positive integer $k$, divide $k$ by $4$ and examine the remainder $r$. The answer matches $i^r$: remainder $0$ yields $1$, remainder $1$ yields $i$, remainder $2$ yields $-1$, and remainder $3$ yields $-i$.

Consider $i^{323}$. Dividing $323$ by $4$ produces $80$ with remainder $3$. Therefore $i^{323} = i^3 = -i$. The enormous exponent collapses to a single-digit calculation. Similarly, $i^{500}$ has remainder $0$ when divided by $4$, so $i^{500} = i^0 = 1$. For $i^{67}$, the division $67 ÷ 4$ leaves remainder $3$, giving $i^{67} = -i$.

Negative exponents follow the same logic after one preliminary step. Recall that $i^{-1} = \\frac{1}{i}$, which simplifies by multiplying numerator and denominator by $i$: $\\frac{1}{i} \\cdot \\frac{i}{i} = \\frac{i}{i^2} = \\frac{i}{-1} = -i$. Thus $i^{-1} = -i$, corresponding to remainder $3$ in the cycle. The pattern for negative powers runs backward through the same four values, and the remainder method adapts naturally once the exponent's sign is handled.`,
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
  title: `Geometric Visualization: The Imaginary Axis`,
  before: ``,
  content: `Numbers become tangible when we can see them. The real numbers arrange themselves along a horizontal line — the familiar number line from elementary mathematics, stretching from negative infinity on the left through zero to positive infinity on the right. Pure imaginary numbers demand their own territory, and they claim the perpendicular direction: a vertical axis passing through zero.

The [complex plane](!/complex-numbers/geometric-representation) combines these two axes into a unified coordinate system. The horizontal axis carries real numbers, while the vertical axis carries pure imaginary numbers. Every point in this plane represents a complex number, with its horizontal position indicating the real part and its vertical position indicating the imaginary part.

Pure imaginary numbers occupy the vertical axis exclusively. The number $3i$ sits three units above the origin. The number $-2i$ lies two units below. The value $\\frac{1}{2}i$ hovers halfway between zero and $i$. Each pure imaginary number $bi$ corresponds to the ordered pair $(0, b)$ — zero horizontal displacement, vertical displacement equal to $b$. The first coordinate vanishes because pure imaginary numbers have no real part.

This geometric arrangement reveals a beautiful symmetry in the structure of complex numbers. Real numbers provide the "width" of the system, extending left and right from the origin. Imaginary numbers provide the "height," extending up and down. Together they span every direction, allowing complex numbers to fill the entire plane rather than merely a line. A general complex number $a + bi$ appears at coordinates $(a, b)$, combining horizontal and vertical components.

The origin deserves special attention in this picture. Located at $(0, 0)$, it represents the number $0 = 0 + 0i$. This single point lies on both axes simultaneously — it belongs to the real numbers (being located on the horizontal axis) and to the pure imaginary numbers (being located on the vertical axis). No other point shares this property; every other location commits to one category or exists off both axes entirely as a genuinely complex number with nonzero parts.`,
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
  title: `Mathematical Properties and Conjugates`,
  before: ``,
  content: `Pure imaginary numbers exhibit distinctive behavior under the standard operations of complex arithmetic, particularly when interacting with the [conjugate](!/complex-numbers/complex-conjugate) operation. Understanding these properties illuminates why pure imaginaries form a coherent subcategory within $\\mathbb{C}$.

For a general complex number $z = a + bi$, the conjugate $\\bar{z} = a - bi$ negates only the imaginary component while preserving the real part. When applied to a pure imaginary number $z = bi$ (where $a = 0$), this operation produces $\\bar{z} = 0 - bi = -bi$. The conjugate of a pure imaginary is simply its negative. Geometrically, reflection across the real axis maps a point on the positive imaginary axis to the corresponding point on the negative imaginary axis — a straightforward flip through the origin along the vertical line.

This observation leads to a powerful classification theorem: a complex number is pure imaginary if and only if $\\bar{z} = -z$. The condition $\\bar{z} = -z$ expands to $a - bi = -a - bi$, which forces $a = -a$ and therefore $a = 0$. Conversely, when $a = 0$, the equality $\\bar{z} = -bi = -z$ holds automatically. This test provides an algebraic criterion for identifying pure imaginary numbers without examining their form directly.

Arithmetic with conjugates produces predictable outcomes for any complex number. Adding $z$ to its conjugate eliminates the imaginary part: $z + \\bar{z} = (a + bi) + (a - bi) = 2a$, always a real number. Subtracting the conjugate from the original eliminates the real part: $z - \\bar{z} = (a + bi) - (a - bi) = 2bi$, always pure imaginary. For pure imaginary inputs where $a = 0$, these formulas specialize: $z + \\bar{z} = 0$ and $z - \\bar{z} = 2bi = 2z$.

The [absolute value](!/complex-numbers/absolute-value) of a pure imaginary number simplifies dramatically. For general $z = a + bi$, the modulus formula gives $|z| = \\sqrt{a^2 + b^2}$. With $a = 0$, this reduces to $|bi| = \\sqrt{0 + b^2} = \\sqrt{b^2} = |b|$. The modulus of a pure imaginary number equals the absolute value of its coefficient — the distance from the origin along the vertical axis. The number $5i$ has modulus $5$; the number $-3i$ has modulus $3$. No square root computation required, just the magnitude of the real coefficient stripped of its sign.`,
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
  title: "When Real Numbers Fall Short",
  content: `
  The real number line stretches infinitely in both directions, accommodating every integer, fraction, and irrational value we encounter in daily life. Yet certain equations expose its limitations. The simple expression $x^2 = -1$ has no home among real numbers — squaring any real value, positive or negative, always produces a non-negative result. To address this gap, mathematics extends beyond the familiar line into a richer structure built upon a single new element: the imaginary unit $i$.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Imaginary Numbers | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/imaginary-numbers",
         name: "name"
      },
        
       }
    }
   }

export default function ImaginaryNumbersPage({seoData,sectionsContent , introContent}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Imaginary Numbers</h1>
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
