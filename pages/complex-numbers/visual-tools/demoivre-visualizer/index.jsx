
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import DeMoivreCalculator from '../../../../app/components/calculators/complex-numbers/DeMoivreCalculator'
import SiblingsNav from '../../../../app/components/SiblingsNav'

export async function getStaticProps(){

  const keyWords = [
    "de moivre's theorem",
    "de moivre calculator",
    "complex number power",
    "de moivre's theorem visualizer",
    "complex exponentiation",
    "raise complex number to power",
    "de moivre formula",
    "cos theta i sin theta power n",
    "complex power calculator",
    "polar form exponentiation",
    "complex number nth power",
    "de moivre interactive",
    "spiral complex powers",
    "negative exponent complex number",
    "complex power step by step"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Set z and Choose n`,
      content:`Drag the navy point $z$ anywhere on the complex plane, or type values into the Re and Im input fields (range $\\pm 10$). Then set the exponent $n$ using the slider ($-10$ to $10$), the input field ($-20$ to $20$), or one of seven presets: $(1+i)^2$, $(1+i)^4$, $i^3$, $(1+i)^8$, $(3+4i)^{-1}$, $2^{10}$, and $(0.5+0.5i)^6$.

The green result vector $z^n$ updates instantly along with the step-by-step panel, polar values, and the purple intermediate power trail. Click **Random** to generate a random base and exponent.

The input summary on the right shows $z$ in rectangular form, its modulus $|z|$, its argument $\\theta$ in both degrees and radians, and the current exponent $n$. All values update in real time as you drag or type.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Outward Spiral — When |z| > 1`,
      content:`Click $(1+i)^4$ to see the classic outward spiral. Since $|1+i| = \\sqrt{2} \\approx 1.414 > 1$, each successive power has a larger modulus: $|z^k| = |z|^k$ grows with $k$. The purple trail dots $z^1, z^2, z^3$ fan outward from the origin, connected by a dashed polyline.

At each step the angle also increases by $\\theta = 45°$, so the trail rotates $45°$ per step while expanding. The result $(1+i)^4 = -4$ lands on the negative real axis at angle $4 \\times 45° = 180°$ with modulus $(\\sqrt{2})^4 = 4$.

Now click $(1+i)^8$. The spiral extends further — the modulus reaches $(\\sqrt{2})^8 = 16$ — but the angle wraps back to $8 \\times 45° = 360° = 0°$, placing the result at $+16$ on the positive real axis. The trail makes two full revolutions.

Try increasing $n$ with the slider while watching the spiral grow. Each click of $n$ adds one more purple dot and pushes the green result further outward.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`The Inward Spiral — When |z| < 1`,
      content:`Click $(0.5 + 0.5i)^6$ to see the inward spiral. Since $|0.5 + 0.5i| = \\frac{\\sqrt{2}}{2} \\approx 0.707 < 1$, each power has a smaller modulus: $|z^k| = |z|^k$ shrinks toward zero. The purple trail dots spiral inward, converging on the origin.

The result modulus is $(0.707)^6 \\approx 0.125$ — very small. The zoom inset appears in the upper-right corner of the plane, magnifying the area near the origin so the green result point is visible and labeled.

This behavior is the opposite of the outward spiral: if $|z| < 1$, repeated multiplication pulls the point closer to zero. The angle still accumulates ($6 \\times 45° = 270°$), but the distance from the origin shrinks exponentially.

Drag $z$ to any point inside the unit circle and increase $n$ to see the inward spiral get tighter. The higher the exponent, the closer the result is to zero.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Unit Circle Rotation — When |z| = 1`,
      content:`Set $z = i$ (type Re = 0, Im = 1) so that $|z| = 1$. Now slide $n$ from $1$ to $4$. Because $|z| = 1$, the modulus never changes: $|z^n| = 1^n = 1$. Every power stays on the unit circle — the trail dots form a perfect arc with no spiraling.

At $n = 1$: $i^1 = i$ (angle $90°$). At $n = 2$: $i^2 = -1$ (angle $180°$). At $n = 3$: $i^3 = -i$ (angle $270°$). At $n = 4$: $i^4 = 1$ (angle $360° = 0°$). The dashed modulus circles for $z$ and the result overlap because both have radius $1$.

Click the $i^3$ preset to see three purple trail dots evenly spaced $90°$ apart on the unit circle, ending at $-i$.

This is why **powers of i** cycle every four steps. On the unit circle, De Moivre's theorem is pure rotation: the modulus is fixed and only the angle changes. Any point on the unit circle produces this behavior — try $z = \\cos(60°) + i\\sin(60°)$ and watch the dots walk around the circle in $60°$ steps.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Negative Exponents — Reciprocals and Reversal`,
      content:`Click $(3+4i)^{-1}$ to see a negative exponent. De Moivre's theorem handles negative powers naturally: $z^{-n} = r^{-n} \\cdot e^{-in\\theta}$. The modulus shrinks (reciprocal) and the angle reverses (negative direction).

Here $|3+4i| = 5$, so $|z^{-1}| = 1/5 = 0.2$. The angle is $\\theta \\approx 53.1°$, so the result angle is $-53.1°$. The green vector is short and points below the real axis — the reciprocal is a tiny vector in the opposite angular direction.

Try sliding $n$ into negative values with any base. The trail reverses: instead of spiraling outward (for $|z| > 1$), it spirals inward. Instead of accumulating angle, it subtracts angle.

At $n = 0$, the result is always $z^0 = 1$ regardless of $z$ — the green point sits at $(1, 0)$ on the positive real axis. This is the boundary between positive and negative exponents.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`Pure Real Base — No Spiral, Just Scaling`,
      content:`Click $2^{10}$ to see a purely real base. Since $z = 2$ has angle $\\theta = 0°$, every power also has angle $0°$: the result sits on the positive real axis. The modulus is $2^{10} = 1024$ — far off-screen — so the green result appears as a dashed ray pointing right with an arrow.

The purple trail dots $z^1, z^2, \\dots, z^9$ march along the positive real axis, each one doubling the previous: $2, 4, 8, 16, \\dots, 512$. There is no rotation because $n \\times 0° = 0°$ for any $n$.

Now try changing $z$ to $-2$ (angle $180°$). The powers alternate between the positive and negative real axes: $(-2)^1 = -2$, $(-2)^2 = 4$, $(-2)^3 = -8$, and so on. The trail zigzags left and right along the real axis, growing in magnitude. The angle alternates between $0°$ and $180°$ because $n \\times 180°$ is $0°$ for even $n$ and $180°$ for odd $n$.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Reading the Purple Trail and Modulus Circles`,
      content:`The **purple trail** shows every intermediate power from $z^1$ up to $z^{n-1}$ (for positive $n$) or from $z^{-1}$ down to $z^{-(|n|-1)}$ (for negative $n$). Each dot is labeled with its power. A dashed polyline connects them in order, tracing the spiral path from $z$ to the final result.

Two **dashed modulus circles** appear when relevant. The inner navy circle has radius $|z|$ — the modulus of the base. The outer green circle has radius $|z^n|$ — the modulus of the result. When $|z| > 1$, the result circle is larger; when $|z| < 1$, it is smaller. When $|z| = 1$, both circles coincide.

Two **angle arcs** appear near the origin. The navy arc labeled $\\theta$ shows the argument of $z$. The green arc labeled $n\\theta$ shows the argument of $z^n$. The green arc is always $n$ times as wide as the navy arc — this is the "multiply the angle" rule of De Moivre's theorem made visible.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`The Five-Step Calculation`,
      content:`The **Step-by-Step** panel on the right walks through De Moivre's theorem in five numbered stages.

**Step 1** — convert $z$ to polar form: $z = r \\cdot e^{i\\theta}$, showing the computed modulus and argument.

**Step 2** — state the theorem: $(r \\cdot e^{i\\theta})^n = r^n \\cdot e^{in\\theta}$.

**Step 3** — raise the modulus to the $n$-th power: $|z|^n = r^n$.

**Step 4** — multiply the angle by $n$: $n\\theta$. If the result exceeds $\\pm 180°$, a normalized angle also appears.

**Step 5** — convert back to rectangular form using $\\cos(n\\theta)$ and $\\sin(n\\theta)$, showing the evaluation and the final complex number.

Every value in every step updates dynamically with each drag, keystroke, or slider change. This makes the panel a live worked example for any base-exponent combination you choose.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`What is De Moivre's Theorem?`,
      content:`**De Moivre's theorem** states that for any integer $n$:

$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$

In exponential notation using **Euler's formula**:

$$(re^{i\\theta})^n = r^n \\cdot e^{in\\theta}$$

Raising a complex number to a power means raising the modulus to that power and multiplying the angle by $n$. This converts exponentiation — normally a difficult operation in rectangular form — into a simple combination of real exponentiation and angle multiplication.

The theorem is a direct consequence of Euler's formula and the laws of exponents. Since $e^{i\\theta}$ is a complex exponential, $(e^{i\\theta})^n = e^{in\\theta}$ follows from the rule $a^{mn} = (a^m)^n$.

De Moivre's theorem works for all integers $n$ — positive, negative, and zero. It is also the foundation for finding **roots of unity** and deriving trigonometric identities for $\\cos(n\\theta)$ and $\\sin(n\\theta)$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Connection to Roots of Unity`,
      content:`De Moivre's theorem in reverse gives the $n$-th roots of any complex number. The $n$-th roots of unity — the solutions to $z^n = 1$ — are:

$$z_k = e^{i \\cdot 2\\pi k / n} = \\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n}, \\quad k = 0, 1, \\dots, n-1$$

These $n$ points are equally spaced around the unit circle, separated by angles of $\\frac{360°}{n}$.

In the visualizer, set $z$ to any $n$-th root of unity and raise it to the $n$-th power — the result will always be $1$. For example, set $z = \\cos(72°) + i\\sin(72°) \\approx 0.31 + 0.95i$ and $n = 5$. The trail traces five equally spaced dots around the unit circle, and the result lands at $1$.

Roots of unity appear throughout mathematics: in Fourier transforms, polynomial factoring, and group theory. De Moivre's theorem is the computational tool that makes finding and verifying these roots straightforward.`,
      before:``,
      after:``,
      link:'',
    },

//     obj11:{
//       title:`Related Concepts and Tools`,
//       content:`De Moivre's theorem ties together many areas of complex number theory. Explore these related pages.

// **Euler's Formula Explorer** — the identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is the foundation of De Moivre's theorem. The explorer visualizes the unit circle trace and the right triangle connection.

// **Complex Multiplication Visualizer** — multiplication is the single-step version of De Moivre: multiply moduli, add angles. Repeated multiplication gives exponentiation.

// **Polar-Rectangular Converter** — De Moivre's theorem requires polar form. This converter handles the conversion between $a + bi$ and $re^{i\\theta}$.

// **Powers of i Calculator** — the $i^n$ cycle is a special case of De Moivre with $r = 1$ and $\\theta = 90°$. The mod 4 pattern emerges because $4 \\times 90° = 360°$.

// **Complex Division Visualizer** — division subtracts angles and divides moduli, the inverse of the power operation.

// **Complex Numbers** — foundational theory covering the imaginary unit, algebraic operations, and the modulus-argument representation.`,
//       before:``,
//       after:``,
//       link:'',
//     },

obj11:{
  title:`Related Concepts and Tools`,
  content:`De Moivre's theorem only makes sense in polar form — the whole point is that exponentiation becomes trivial when you write $z = re^{i\\theta}$. The tools below build up everything this theorem depends on.

The essential prerequisite is the [Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular). De Moivre's theorem lives entirely in polar coordinates — $r$ gets raised to the $n$th power, $\\theta$ gets multiplied by $n$. If you want to understand why the step-by-step panel here converts to polar first, that tool shows the conversion geometry in full detail.

Right behind it is [Euler's Formula Explorer](!/complex-numbers/visual-tools/euler-formula). The exponential notation $re^{i\\theta}$ is not just shorthand — it is why De Moivre's theorem works at all. $(re^{i\\theta})^n = r^n e^{in\\theta}$ follows directly from the exponent rules once you accept Euler's formula.

The [Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) shows the single-step version of what this tool does repeatedly. Each intermediate power in the purple trail is one more multiplication — modulus scales by $|z|$, angle shifts by $\\theta$. The trail you see here is that operation applied $n$ times in sequence.

Finally, for the unit circle behavior — where $|z| = 1$ and powers only rotate — the [Powers of i Calculator](!/complex-numbers/visual-tools/i-powers) is the cleanest special case. Setting $r = 1$ and $\\theta = 90°$ here reproduces exactly the $i, -1, -i, 1$ cycle that tool is built around.`,
  before:``,
  after:``,
  link:'',
},

  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

  const faqQuestions = {
    obj1: {
      question: "What is De Moivre's theorem?",
      answer: "De Moivre's theorem states that (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) for any integer n. In polar form: (r·e^(iθ))^n = r^n · e^(inθ). It means raising a complex number to a power raises the modulus to that power and multiplies the angle by n."
    },
    obj2: {
      question: "How do you raise a complex number to a power?",
      answer: "Convert to polar form z = r·e^(iθ), then apply De Moivre's theorem: z^n = r^n · e^(inθ). The modulus is raised to the n-th power and the angle is multiplied by n. Convert back to rectangular form using cos(nθ) and sin(nθ)."
    },
    obj3: {
      question: "What do negative exponents mean for complex numbers?",
      answer: "A negative exponent gives the reciprocal: z^(−n) = 1/z^n = r^(−n) · e^(−inθ). The modulus becomes the reciprocal power and the angle reverses direction. For example, (3+4i)^(−1) has modulus 1/5 and angle −53.1°."
    },
    obj4: {
      question: "Why do the powers of a complex number form a spiral?",
      answer: "Each multiplication by z scales by |z| and rotates by θ. When |z| > 1, the distance from the origin grows exponentially, creating an outward spiral. When |z| < 1, the distance shrinks, creating an inward spiral. When |z| = 1, there is no spiral — only rotation around the unit circle."
    },
    obj5: {
      question: "How does De Moivre's theorem relate to roots of unity?",
      answer: "The n-th roots of unity are the solutions to z^n = 1. Using De Moivre's theorem in reverse, they are z_k = e^(i·2πk/n) for k = 0, 1, ..., n−1 — n equally spaced points around the unit circle."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "De Moivre's Theorem Visual Calculator",
      "description": "Interactive De Moivre's theorem calculator with draggable complex plane. Raise any complex number to any integer power, see the spiral trail, angle arcs, and step-by-step polar solution.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/demoivre-visualizer",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable complex number with adjustable integer exponent from −20 to 20",
        "Purple spiral trail showing all intermediate powers z¹ through z^(n−1)",
        "Dual modulus circles for base and result with angle arcs θ and nθ",
        "Five-step calculation breakdown from polar conversion to rectangular result",
        "Zoom inset for tiny results and ray-to-edge for off-screen results",
        "Seven presets covering outward spiral, inward spiral, unit circle, and negative exponents",
        "n slider for smooth exponent exploration from −10 to 10"
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
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/complex-numbers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "De Moivre's Theorem Calculator",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/demoivre-visualizer"
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
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "De Moivre's Theorem Calculator | Learn Math Class",
        description: "Visualize De Moivre's theorem interactively. Raise complex numbers to any power, see spiral trails, angle multiplication, and step-by-step polar solutions.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/demoivre-visualizer",
         name: "De Moivre's Theorem Visual Calculator"
      },
        
       }
    }
   }

export default function DeMoivreVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>De Moivre Law Visual Calculator</h1>
   <br/>
   <SiblingsNav>
   <DeMoivreCalculator/>
   </SiblingsNav>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   />
   <br/>
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