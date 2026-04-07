import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=[
    'degrees and radians',
    'convert degrees to radians',
    'radian definition',
    'degree measurement',
    'arc length formula',
    'sector area formula',
    'standard position angle',
    'coterminal angles',
    'complementary angles trigonometry',
    'supplementary angles',
    'radians to degrees',
    's equals r theta',
    'angle measurement units',
    'radian vs degree'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a radian?",
      answer: "A radian is the angle subtended at the center of a circle by an arc whose length equals the radius of that circle. Since a full circumference is 2πr, a full rotation is 2π radians. Radians are dimensionless because they are a ratio of two lengths, and this property is what makes them the natural unit for calculus and trigonometric formulas."
    },
    obj2: {
      question: "How do you convert degrees to radians?",
      answer: "To convert degrees to radians, multiply the degree measure by π/180. For example, 90° × π/180 = π/2 radians. To convert radians to degrees, multiply by 180/π. The conversion rests on the fact that 180° and π radians both represent a half rotation."
    },
    obj3: {
      question: "What is the arc length formula?",
      answer: "The arc length formula is s = rθ, where s is the arc length, r is the radius, and θ is the central angle in radians. This formula works directly only when the angle is in radians. If the angle is in degrees, the formula becomes s = (πrθ)/180, which includes an extra conversion factor."
    },
    obj4: {
      question: "What are coterminal angles?",
      answer: "Coterminal angles are angles that share the same terminal side when placed in standard position. They differ by full rotations — multiples of 360° or 2π radians. For example, 50°, 410°, and −310° are all coterminal because they all end at the same position on the unit circle and produce identical trigonometric values."
    },
    obj5: {
      question: "Why are radians used instead of degrees in calculus?",
      answer: "Radians are used in calculus because they make fundamental formulas work without extra conversion constants. The derivative d/dx sin(x) = cos(x) holds only when x is in radians. The Taylor series, small-angle approximations, and the arc length and sector area formulas all assume radian measure. Degrees would introduce factors of π/180 throughout."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Degrees and Radians",
      "description": "Learn how to measure angles in degrees and radians, convert between the two systems, and apply radian measure to arc length and sector area formulas.",
      "url": "https://www.learnmathclass.com/trigonometry/degrees-radians",
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
        "name": "Degrees and Radians"
      },
      "teaches": [
        "Degree measurement and its conventions",
        "Radian definition as arc length divided by radius",
        "Converting between degrees and radians",
        "Arc length formula s = rθ",
        "Sector area formula A = ½r²θ",
        "Standard position of an angle on the coordinate plane",
        "Coterminal angles and periodicity",
        "Complementary and supplementary angle relationships"
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Degrees and Radians",
          "item": "https://www.learnmathclass.com/trigonometry/degrees-radians"
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

  // •

//   • First item
// • Second item


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

   

     obj1: {
    title: `Degree Measurement`,
    content: `A degree is $\\frac{1}{360}$ of a full rotation. The number 360 has no deep geometric significance — it persists because it is highly divisible (by 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, and more), which makes it convenient for subdividing rotations into equal parts without fractions. A right angle is $90°$, a straight angle is $180°$, and a complete rotation returns to the starting position at $360°$.

For precision beyond whole degrees, two conventions exist. The older system uses minutes and seconds of arc: $1° = 60'$ (sixty minutes) and $1' = 60''$ (sixty seconds). A measurement like $41°24'36''$ is common in navigation, cartography, and astronomy. The modern alternative is decimal degrees — for example, $41.41°$ — which is simpler for computation. Converting between the two is arithmetic: divide the minutes by 60 and the seconds by 3600, then add.

Degrees are intuitive and widely understood outside of mathematics. Compass bearings, latitude and longitude, architectural plans, and most geometric software use degrees as the default. Within trigonometry, degrees remain useful for visualizing angles and for problems stated in everyday terms. Their limitation appears when formulas demand a unit tied to the geometry of the circle — which is precisely what radians provide.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Radian Measurement`,
    content: `A radian is defined by a direct geometric relationship: it is the angle subtended at the center of a circle by an arc whose length equals the radius of that circle. If a circle has radius $r$ and an arc of length $s$ is marked along its circumference, the central angle $\\theta$ in radians is:

$$\\theta = \\frac{s}{r}$$

Because both $s$ and $r$ are lengths, their ratio is dimensionless — radians carry no physical unit. This is not a technicality; it is the reason radians integrate seamlessly into formulas where degrees would introduce unwanted conversion factors.

A full circumference has length $2\\pi r$, so a full rotation corresponds to $\\frac{2\\pi r}{r} = 2\\pi$ radians. A half rotation is $\\pi$ radians, a quarter rotation is $\\frac{\\pi}{2}$, and so on. One radian is approximately $57.296°$ — a fact occasionally useful for quick estimation, though exact values in terms of $\\pi$ are always preferred in mathematical work.

The radian is not an arbitrary alternative to degrees. It is the angle measure that makes the core formulas of trigonometry and calculus as clean as possible. Arc length becomes $s = r\\theta$ with no extra constants. Sector area becomes $A = \\frac{1}{2}r^2\\theta$. The Taylor series $\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$ holds only for $x$ in radians. The small-angle approximation $\\sin(\\theta) \\approx \\theta$ for $\\theta$ near zero — essential in physics and engineering — relies on radian measure. Every simplification that makes trigonometric calculus workable traces back to defining angle through the ratio of arc to radius.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Converting Between Degrees and Radians`,
    content: `The two systems are linked by a single relationship: a half rotation is simultaneously $180°$ and $\\pi$ radians. Every conversion follows from this.

To convert degrees to radians, multiply by $\\frac{\\pi}{180}$:

$$\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$$

To convert radians to degrees, multiply by $\\frac{180}{\\pi}$:

$$\\theta_{\\text{deg}} = \\theta_{\\text{rad}} \\times \\frac{180}{\\pi}$$

The standard angles that appear throughout trigonometry should be known in both units without computation:

- $30° = \\frac{\\pi}{6}$
- $45° = \\frac{\\pi}{4}$
- $60° = \\frac{\\pi}{3}$
- $90° = \\frac{\\pi}{2}$
- $120° = \\frac{2\\pi}{3}$
- $135° = \\frac{3\\pi}{4}$
- $150° = \\frac{5\\pi}{6}$
- $180° = \\pi$
- $210° = \\frac{7\\pi}{6}$
- $240° = \\frac{4\\pi}{3}$
- $270° = \\frac{3\\pi}{2}$
- $300° = \\frac{5\\pi}{3}$
- $315° = \\frac{7\\pi}{4}$
- $330° = \\frac{11\\pi}{6}$
- $360° = 2\\pi$

These values all follow a pattern: they are multiples of $\\frac{\\pi}{6}$ and $\\frac{\\pi}{4}$. Recognizing this pattern eliminates the need for memorization through brute force — the structure itself carries the information. These angles recur on the [unit circle](!/trigonometry/unit-circle), in the evaluation of [trigonometric functions](!/trigonometry/functions), and throughout the solving of [equations](!/trigonometry/equations) and [inequalities](!/trigonometry/inequalities).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Arc Length`,
    content: `When an angle $\\theta$ (in radians) is subtended at the center of a circle with radius $r$, the length of the intercepted arc is:

$$s = r\\theta$$

This formula is a direct consequence of the radian definition. Since $\\theta = \\frac{s}{r}$, multiplying both sides by $r$ gives $s = r\\theta$. No conversion constant is needed — the formula works cleanly because radians are a ratio, not an imposed unit.

If the angle is given in degrees, the formula requires adjustment:

$$s = \\frac{\\theta}{360} \\times 2\\pi r = \\frac{\\pi r \\theta}{180}$$

The additional factors are the price of using a unit not inherently tied to the circle. This is one of the clearest practical demonstrations of why radians simplify computation.

Arc length problems typically involve three quantities — $s$, $r$, and $\\theta$ — and any one of them can be found given the other two. A common variation asks for the angle subtended by a known arc on a known circle: $\\theta = \\frac{s}{r}$. Another asks for the radius of a circle given an arc length and central angle: $r = \\frac{s}{\\theta}$. In each case, the formula remains $s = r\\theta$ with $\\theta$ in radians.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Sector Area`,
    content: `A sector is the region enclosed by two radii and the arc between them — a "pie slice" of the circle. Its area is a fraction of the full circle's area, proportional to the central angle:

$$A = \\frac{1}{2}r^2\\theta$$

where $\\theta$ is in radians. The derivation is straightforward: the sector represents $\\frac{\\theta}{2\\pi}$ of the full circle, and the full circle has area $\\pi r^2$, so:

$$A = \\frac{\\theta}{2\\pi} \\times \\pi r^2 = \\frac{1}{2}r^2\\theta$$

If the angle is given in degrees:

$$A = \\frac{\\theta}{360} \\times \\pi r^2$$

As with arc length, the radian version is simpler and is the standard in mathematical work. Problems involving sector area follow the same pattern as arc length: three quantities ($A$, $r$, $\\theta$), any one computable from the other two. A typical application is finding the area swept by a rotating object — a windshield wiper, a radar beam, a door opening through a measured angle.

The relationship between arc length and sector area is worth noting: $A = \\frac{1}{2}rs$, obtained by substituting $s = r\\theta$ into the sector area formula. This parallels the triangle area formula $A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$, with the arc length playing the role of the base and the radius playing the role of the height. For very small angles, the sector closely approximates a triangle, and this analogy becomes nearly exact.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Standard Position of an Angle`,
    content: `In trigonometry, angles are placed on the coordinate plane in a standardized way. An angle is in standard position when its vertex is at the origin and its initial side lies along the positive $x$-axis. The terminal side is the ray that results from rotating the initial side through the given angle. This convention fixes a reference frame for all trigonometric evaluation: every angle, regardless of its measure, has a definite position on the plane and a definite intersection with the [unit circle](!/trigonometry/unit-circle).

The direction of rotation determines the sign of the angle. Counterclockwise rotation produces a positive angle; clockwise rotation produces a negative angle. The angle $90°$ is a quarter turn counterclockwise, while $-90°$ is a quarter turn clockwise. Both terminate at the same position on the coordinate plane — along the negative or positive $y$-axis respectively — but they are different angles with different trigonometric interpretations: $\\sin(90°) = 1$ while $\\sin(-90°) = -1$.

There is no restriction on the size of an angle. A rotation of $450°$ passes through a full rotation ($360°$) and continues another $90°$, terminating at the same position as $90°$. A rotation of $-270°$ goes $270°$ clockwise, also terminating at the $90°$ position. These are coterminal angles — different rotations that share the same terminal side.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Coterminal Angles`,
    content: `Two angles are coterminal if their terminal sides coincide when both are placed in standard position. This happens whenever the angles differ by a full rotation — that is, by $360°$ or $2\\pi$ radians. More generally, angles $\\theta$ and $\\theta + 360°n$ (or $\\theta + 2\\pi n$) are coterminal for any integer $n$.

Every angle has infinitely many coterminal partners. The angle $50°$ is coterminal with $410°$, $770°$, $-310°$, $-670°$, and so on. In radian terms, $\\frac{\\pi}{3}$ is coterminal with $\\frac{\\pi}{3} + 2\\pi = \\frac{7\\pi}{3}$, with $\\frac{\\pi}{3} - 2\\pi = -\\frac{5\\pi}{3}$, and with any expression of the form $\\frac{\\pi}{3} + 2\\pi n$.

Coterminal angles produce identical trigonometric values. Since the terminal side determines the intersection point with the [unit circle](!/trigonometry/unit-circle), and the coordinates of that point define sine and cosine, all coterminal angles yield the same sine, cosine, tangent, and so on. This is the geometric source of periodicity: $\\sin(\\theta + 2\\pi) = \\sin(\\theta)$ because adding $2\\pi$ brings the terminal side back to where it started.

A standard task is finding the coterminal angle within $[0°, 360°)$ or $[0, 2\\pi)$. This amounts to dividing by $360°$ (or $2\\pi$) and taking the remainder. For example, $\\theta = 850°$: dividing $850$ by $360$ gives quotient 2 with remainder $130$, so the coterminal angle in $[0°, 360°)$ is $130°$. For negative angles, add full rotations until the result falls in the desired range: $\\theta = -200°$ becomes $-200° + 360° = 160°$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Complementary and Supplementary Angles`,
    content: `Two angles are complementary if they sum to $90°$ (or $\\frac{\\pi}{2}$ radians). Two angles are supplementary if they sum to $180°$ (or $\\pi$ radians). These relationships appear constantly in trigonometry, geometry, and the analysis of triangles.

In a right triangle, the two acute angles are always complementary — they must sum to $90°$ because the three angles of any triangle sum to $180°$ and one angle is already $90°$. This geometric fact is the origin of the cofunction relationships in [right triangle trigonometry](!/trigonometry/right-triangle): $\\sin(\\theta) = \\cos(90° - \\theta)$, $\\tan(\\theta) = \\cot(90° - \\theta)$, and $\\sec(\\theta) = \\csc(90° - \\theta)$. The complement of an angle swaps each trigonometric function with its cofunction — a pattern formalized in the cofunction [identities](!/trigonometry/identities).

Supplementary angles arise naturally in the context of the [unit circle](!/trigonometry/unit-circle). The angles $\\theta$ and $180° - \\theta$ are supplementary, and their reference angles are equal. This produces a useful relationship: $\\sin(\\theta) = \\sin(180° - \\theta)$ and $\\cos(\\theta) = -\\cos(180° - \\theta)$. In other words, supplementary angles have equal sines but opposite cosines — a fact that plays a direct role in solving [trigonometric equations](!/trigonometry/equations) and in analyzing the ambiguous case of the [Law of Sines](!/trigonometry/sines-cosines-law).

For example, the angles $40°$ and $50°$ are complementary ($40° + 50° = 90°$), while $40°$ and $140°$ are supplementary ($40° + 140° = 180°$). The complement of $\\frac{\\pi}{6}$ is $\\frac{\\pi}{2} - \\frac{\\pi}{6} = \\frac{\\pi}{3}$. The supplement of $\\frac{\\pi}{6}$ is $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$. Recognizing these pairs accelerates computation across the subject.`,
    before: ``,
    after: ``,
    link: ``,
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
  title: `Two Systems for Measuring Rotation`,
  content: `Angles quantify rotation, but rotation needs a unit before it can be expressed as a number. Two systems serve this purpose throughout mathematics: degrees and radians. Degrees divide a full rotation into 360 equal parts — a convention with roots in Babylonian base-60 arithmetic and the approximate length of a solar year. Radians take a fundamentally different approach, defining an angle through the geometry of the circle itself: one radian is the angle that subtends an arc equal in length to the radius. A full rotation is $2\\pi$ radians, and the conversion between the two systems rests on the identity $180° = \\pi$ radians.

The distinction matters far beyond notation. [Arc length](!/trigonometry/degrees-radians), sector area, and every calculus formula involving trigonometric functions assume radian input. The derivative $\\frac{d}{dx}\\sin(x) = \\cos(x)$ holds only when $x$ is in radians. For this reason, radians are the default in any mathematical context beyond basic geometry and everyday measurement. Fluency in both systems — and the ability to convert between them without hesitation — is a prerequisite for the [unit circle](!/trigonometry/unit-circle), [trigonometric functions](!/trigonometry/functions), [graphs](!/trigonometry/graphs), and everything that follows in this section.`,
};




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Degrees and Radians | Learn Math Class",
        description: "Learn degree and radian angle measurement, convert between the two systems, and apply radians to arc length and sector area formulas with clear explanations.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/degrees-radians",
         name: "Degrees and Radians"
      },

       }
    }
   }

export default function DegreesRadiansPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Degrees and Radians</h1>
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
