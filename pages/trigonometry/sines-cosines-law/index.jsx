// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

// //   • First item
// // • Second item


// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@


// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,

// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//     const sectionsContent={

//     // obj1:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',


//     // },
//     // obj2:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },

//     // obj3:{

//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj4:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj5:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj6:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj7:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj8:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj9:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },
//     // obj10:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',

//     // },

//      obj1: {
//     title: `Triangle Notation`,
//     content: `A standard labeling convention is used throughout triangle-solving problems. The three vertices are labeled $A$, $B$, $C$. The side opposite each vertex is labeled with the corresponding lowercase letter: $a$ is opposite $A$, $b$ is opposite $B$, $c$ is opposite $C$.

// This means $a$ is the side between vertices $B$ and $C$, $b$ is the side between $A$ and $C$, and $c$ is the side between $A$ and $B$. The convention ensures that every side-angle pair — $(a, A)$, $(b, B)$, $(c, C)$ — consists of a side and the angle directly across the triangle from it. This pairing is central to the Law of Sines.

// The sum of the interior angles is always $180°$ (or $\\pi$ radians):

// $$A + B + C = 180°$$

// This constraint means that knowing any two angles immediately gives the third. It also limits the possible configurations: at most one angle can be obtuse (greater than $90°$), and if one angle is obtuse, the other two must both be acute.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Law of Sines`,
//     content: `The Law of Sines states that in any triangle, the ratio of each side to the sine of its opposite angle is constant:

// $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

// Equivalently, the sines are proportional to their opposite sides:

// $$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

// The common ratio $\\frac{a}{\\sin A}$ has a geometric interpretation: it equals the diameter of the circumscribed circle (the circle passing through all three vertices). If $R$ is the circumradius, then $\\frac{a}{\\sin A} = 2R$.

// The derivation proceeds by dropping an altitude from one vertex to the opposite side. In a triangle with vertices $A$, $B$, $C$, drop an altitude $h$ from $C$ to side $c$. This altitude can be expressed two ways:

// $$h = b\\sin A \\quad \\text{and} \\quad h = a\\sin B$$

// Setting these equal: $b\\sin A = a\\sin B$, which rearranges to $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. Repeating with an altitude from a different vertex produces the full three-way equality.

// The derivation works whether the triangle is acute or obtuse, though the obtuse case requires a slight adjustment (the altitude falls outside the triangle, and the supplementary angle identity $\\sin(180° - \\theta) = \\sin\\theta$ is invoked).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `When to Use the Law of Sines`,
//     content: `The Law of Sines requires at least one complete side-angle pair — a side and its opposite angle — to get started. Given one complete pair, the law can find any other side or angle if one additional piece of information is provided.

// **AAS (Angle-Angle-Side):** Two angles and a non-included side are known. The third angle follows from $A + B + C = 180°$. Then the Law of Sines finds the remaining two sides.

// Example: $A = 40°$, $B = 70°$, $a = 10$. Then $C = 180° - 40° - 70° = 70°$. From the Law of Sines:

// $$\\frac{10}{\\sin 40°} = \\frac{b}{\\sin 70°} \\quad \\Rightarrow \\quad b = \\frac{10\\sin 70°}{\\sin 40°}$$

// **ASA (Angle-Side-Angle):** Two angles and the included side are known. The third angle is computed first, then the Law of Sines provides the remaining sides. The distinction from AAS is organizational — the method is identical once the third angle is found.

// **SSA (Side-Side-Angle):** Two sides and an angle opposite one of them are known. This is the only configuration where the Law of Sines is the starting tool but the solution may not be unique — the ambiguous case (see below).

// The Law of Sines cannot start a solution when no complete side-angle pair is available. In SAS and SSS configurations, the Law of Cosines must be used first.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Ambiguous Case (SSA)`,
//     content: `When two sides and an angle opposite one of them are given — say $a$, $b$, and $A$ — the data may determine zero, one, or two distinct triangles. This is the ambiguous case, and it arises because the Law of Sines produces a sine value for the unknown angle, and $\\sin B = k$ (with $0 < k < 1$) has two solutions in $[0°, 180°)$: one acute ($B_1$) and one obtuse ($B_2 = 180° - B_1$).

// The analysis depends on whether $A$ is acute or obtuse, and on the relative sizes of $a$ and $b$.

// **When $A$ is acute:** Compute the height from the vertex opposite $b$: $h = b\\sin A$. This is the shortest distance from that vertex to the line containing side $a$.

// - If $a < h$: the side $a$ is too short to reach the opposite side. No triangle exists.
// - If $a = h$: the side $a$ just reaches, forming a right angle. Exactly one (right) triangle.
// - If $h < a < b$: the side $a$ reaches the opposite side at two different positions. Two distinct triangles exist.
// - If $a \\geq b$: only the acute solution for $B$ is geometrically valid (the obtuse candidate would make $A + B > 180°$). One triangle.

// **When $A$ is obtuse:**

// - If $a \\leq b$: no triangle (the side opposite the obtuse angle must be the longest).
// - If $a > b$: exactly one triangle (the obtuse angle is at $A$, so $B$ must be acute).

// In practice, the safest approach is computational: use the Law of Sines to find $\\sin B$, check whether the value is valid ($\\leq 1$), then check whether both the acute and obtuse solutions for $B$ produce a valid triangle (i.e., whether $A + B < 180°$ in each case).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Law of Cosines`,
//     content: `The Law of Cosines relates the three sides of a triangle to the cosine of one of its angles:

// $$c^2 = a^2 + b^2 - 2ab\\cos C$$

// Equivalently:

// $$a^2 = b^2 + c^2 - 2bc\\cos A$$
// $$b^2 = a^2 + c^2 - 2ac\\cos B$$

// Each form involves one angle and all three sides. The formula generalizes the Pythagorean theorem: when $C = 90°$, $\\cos C = 0$, and the equation reduces to $c^2 = a^2 + b^2$. The correction term $-2ab\\cos C$ accounts for the deviation from a right angle. When $C < 90°$ (acute), $\\cos C > 0$, and $c^2 < a^2 + b^2$. When $C > 90°$ (obtuse), $\\cos C < 0$, and $c^2 > a^2 + b^2$.

// The derivation uses coordinate geometry. Place the triangle with vertex $C$ at the origin, side $a$ along the positive $x$-axis. Then $B = (a, 0)$ and $A = (b\\cos C, b\\sin C)$. The distance from $A$ to $B$ is:

// $$c = \\sqrt{(b\\cos C - a)^2 + (b\\sin C)^2}$$

// Squaring and expanding:

// $$c^2 = b^2\\cos^2 C - 2ab\\cos C + a^2 + b^2\\sin^2 C = a^2 + b^2(\\cos^2 C + \\sin^2 C) - 2ab\\cos C$$

// Since $\\cos^2 C + \\sin^2 C = 1$ (the Pythagorean [identity](!/trigonometry/identities)):

// $$c^2 = a^2 + b^2 - 2ab\\cos C$$`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `When to Use the Law of Cosines`,
//     content: `The Law of Cosines is the starting tool when no complete side-angle pair is available — that is, when the Law of Sines cannot begin.

// **SAS (Side-Angle-Side):** Two sides and the included angle are known. The Law of Cosines directly computes the third side. Once all three sides and one angle are known, the remaining angles can be found using the Law of Sines (or the Law of Cosines again).

// Example: $a = 8$, $b = 6$, $C = 50°$. Find $c$:

// $$c^2 = 8^2 + 6^2 - 2(8)(6)\\cos 50° = 64 + 36 - 96\\cos 50° \\approx 100 - 61.7 = 38.3$$

// $$c \\approx 6.19$$

// **SSS (Side-Side-Side):** All three sides are known, and the angles must be found. Rearrange the Law of Cosines to solve for an angle:

// $$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

// Compute $\\cos C$, then apply [arccosine](!/trigonometry/inverse-functions) to find $C$. Repeat for another angle, or use $A + B + C = 180°$ for the third.

// A practical strategy for SSS: find the largest angle first (the one opposite the longest side). If its cosine is negative, the angle is obtuse, and the triangle contains an obtuse angle. If positive, all angles are acute. Finding the largest angle first resolves this question immediately, and the remaining angles (which must be acute) can be found more safely with the Law of Sines — since arcsine of a positive value always gives an acute angle, there is no ambiguity.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Choosing Between the Two Laws`,
//     content: `The decision framework is straightforward and depends entirely on what information is available:

// **Start with the Law of Sines when:**
// - AAS — two angles and a non-included side
// - ASA — two angles and the included side (find the third angle first)
// - SSA — two sides and an angle opposite one of them (watch for the ambiguous case)

// In each of these, at least one complete side-angle pair $(a, A)$ is either given or immediately obtainable.

// **Start with the Law of Cosines when:**
// - SAS — two sides and the included angle
// - SSS — all three sides, no angles

// In these configurations, no complete pair exists until after the first computation.

// **In combination:** Many problems require both laws. A typical SAS problem uses the Law of Cosines to find the third side, then switches to the Law of Sines for the remaining angles (which is faster than applying the Law of Cosines twice more). A typical SSS problem uses the Law of Cosines for the first (largest) angle, then switches to the Law of Sines for efficiency.

// **Configuration not possible:**
// - AAA — three angles, no sides. This determines the shape of the triangle (similarity class) but not its size. There is no unique solution.
// - Only one or two pieces of information — insufficient to determine any triangle.

// Any other combination of three pieces of information (out of three sides and three angles) falls into one of the cases above and is solvable by the appropriate law or combination.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Area of a Triangle Using Trigonometry`,
//     content: `The standard area formula $A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$ requires knowing the height, which is often not directly given. Trigonometry provides an alternative that uses two sides and the included angle:

// $$A = \\frac{1}{2}ab\\sin C$$

// where $a$ and $b$ are two sides and $C$ is the angle between them.

// The derivation is direct. Drop an altitude $h$ from vertex $C$ to side $c$. Then $h = a\\sin B$ (from the right triangle formed). But the formula is more naturally derived as $h = b\\sin A$ from one perspective or $h = a\\sin B$ from another. Using $h = b\\sin A$:

// $$\\text{Area} = \\frac{1}{2} \\times a \\times h = \\frac{1}{2} \\times a \\times b\\sin C$$

// This holds for all triangles — acute, right, or obtuse. For a right triangle with $C = 90°$, $\\sin C = 1$, and the formula reduces to $\\frac{1}{2}ab$, consistent with the standard formula (where $a$ and $b$ are the legs).

// The formula requires exactly the SAS configuration: two sides and the included angle. If other configurations are given, the missing information must be found first using the Law of Sines or Law of Cosines.

// Note that $\\sin C > 0$ for all valid triangle angles ($0° < C < 180°$), so the area is always positive. The area is maximized when $C = 90°$ (for fixed side lengths), since $\\sin C$ achieves its maximum at $90°$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Heron's Formula`,
//     content: `When all three sides of a triangle are known but no angle has been computed, the area can be found directly using Heron's formula — without first finding any angle.

// Compute the semi-perimeter:

// $$s = \\frac{a + b + c}{2}$$

// Then the area is:

// $$A = \\sqrt{s(s-a)(s-b)(s-c)}$$

// **Example:** A triangle with sides $a = 5$, $b = 7$, $c = 9$.

// $$s = \\frac{5 + 7 + 9}{2} = \\frac{21}{2} = 10.5$$

// $$A = \\sqrt{10.5 \\times 5.5 \\times 3.5 \\times 1.5} = \\sqrt{10.5 \\times 5.5 \\times 3.5 \\times 1.5}$$

// $$= \\sqrt{303.1875} \\approx 17.41$$

// Heron's formula can be derived from the trigonometric area formula $\\frac{1}{2}ab\\sin C$ combined with the Law of Cosines. Express $\\cos C$ in terms of the sides, use $\\sin^2 C = 1 - \\cos^2 C$ to find $\\sin C$, substitute into the area formula, and simplify. The algebra is substantial but the result is elegant.

// The formula has the advantage of requiring only side lengths — no angles, no trigonometric function evaluations. It is useful when the sides are given numerically and the area is the only quantity sought. Its disadvantage is that it provides no angle information; if angles are also needed, the Law of Cosines is a more efficient starting point.

// A validity check: $s - a$, $s - b$, and $s - c$ must all be positive. If any of them is zero or negative, the three given lengths do not form a valid triangle (they violate the triangle inequality).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Applications`,
//     content: `The Law of Sines and Law of Cosines apply wherever distances or angles must be determined indirectly — situations where direct measurement is impossible or impractical.

// **Surveying and land measurement.** A surveyor measures two distances and the angle between them (SAS) to determine the third distance — for example, the width of a river or the length of a property boundary obscured by terrain. Alternatively, from two known positions a measured distance apart, a surveyor observes the angles to a remote point (ASA) and computes the distance to it.

// **Navigation.** A ship or aircraft determines its position by measuring bearings (angles) to two known landmarks. The triangle formed by the vessel and the two landmarks is solved using the Law of Sines (typically an AAS or ASA configuration), yielding the distances from the vessel to each landmark.

// **Physics and engineering.** Forces acting at angles are resolved using the Law of Cosines. Two forces of known magnitudes acting at a known angle produce a resultant whose magnitude is computed by treating the force vectors as sides of a triangle — the Law of Cosines gives the resultant magnitude, and the Law of Sines gives the angle the resultant makes with each component force.

// **Indirect measurement.** The height of a mountain, the distance to a star (via parallax), or the span of a bridge can be determined by measuring accessible distances and angles and solving the resulting triangle. Each problem reduces to identifying the triangle, classifying the known information (AAS, ASA, SAS, SSA, SSS), and applying the appropriate law.

// In every application, the first step is geometric: identify the triangle, label the known and unknown elements, and determine which law applies. The computation follows mechanically from there.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',

//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',

//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',

//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',

//     },


//     obj15:{

//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',

//     }

//   }


//   const introContent = {
//   id: "intro",
//   title: `Solving Triangles Without a Right Angle`,
//   content: `[Right triangle trigonometry](!/trigonometry/right-triangle) solves triangles that contain a $90°$ angle. Most triangles do not. A triangle formed by three survey markers, three cities on a map, or three forces acting on an object will almost never include a right angle. These oblique triangles — triangles with no right angle — require different tools.

// The Law of Sines and the Law of Cosines are those tools. Together, they provide a complete framework for solving any triangle given sufficient information: finding unknown sides from known angles and sides, finding unknown angles from known sides, computing areas, and handling the geometric ambiguities that arise when the given data does not determine a unique triangle. The Law of Cosines generalizes the Pythagorean theorem — reducing to it exactly when one angle is $90°$ — while the Law of Sines provides a proportional relationship between sides and the sines of their opposite angles. Which law to apply depends entirely on what is known: the configuration of given sides and angles determines the starting point, and the two laws often work in sequence to complete the solution.

// `,
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Law of Sines and Cosines | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/trigonometry/sines-cosines-law",
//          name: "name"
//       },

//        }
//     }
//    }

// export default function SinesCosinesLawPage({seoData,sectionsContent , introContent}) {


//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },

// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />

//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />

//   <meta name="robots" content="index, follow" />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar
//            side='right'
//            // topOffset='65px'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Law of Sines and Cosines</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"

//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=[
    'law of sines',
    'law of cosines',
    'solving oblique triangles',
    'ambiguous case SSA',
    'triangle area trigonometry',
    'Herons formula',
    'sine rule',
    'cosine rule',
    'ASA AAS triangle',
    'SAS triangle',
    'SSS triangle',
    'when to use law of sines',
    'when to use law of cosines',
    'triangle notation sides angles'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is the Law of Sines?",
      answer: "The Law of Sines states that in any triangle, the ratio of each side to the sine of its opposite angle is constant: a/sinA = b/sinB = c/sinC. It is used to solve triangles when you know two angles and one side (ASA or AAS), or two sides and an angle opposite one of them (SSA, the ambiguous case)."
    },
    obj2: {
      question: "What is the Law of Cosines?",
      answer: "The Law of Cosines generalizes the Pythagorean theorem to all triangles: c² = a² + b² - 2ab·cos(C). It reduces to the Pythagorean theorem when C = 90°. It is used when you know two sides and the included angle (SAS) or all three sides (SSS) and need to find a missing side or angle."
    },
    obj3: {
      question: "What is the ambiguous case (SSA)?",
      answer: "The ambiguous case arises when two sides and a non-included angle are known (SSA). Depending on the measurements, this configuration can produce zero solutions (no triangle exists), exactly one solution, or two distinct triangles. The ambiguity occurs because the sine function gives the same value for supplementary angles, so two different angles may satisfy the equation."
    },
    obj4: {
      question: "How do you choose between the Law of Sines and the Law of Cosines?",
      answer: "Use the Law of Sines when you have a known angle-side opposite pair plus one additional piece (ASA, AAS, or SSA). Use the Law of Cosines when you have two sides and the included angle (SAS) or all three sides (SSS). The Law of Cosines is the only option when no angle-side opposite pair is available."
    },
    obj5: {
      question: "How do you find the area of a triangle using trigonometry?",
      answer: "When two sides and the included angle are known, the area is A = (1/2)ab·sin(C). This formula works for any triangle and reduces to the standard (1/2)·base·height formula when the angle is 90°. When all three sides are known, Heron's formula gives A = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2 is the semi-perimeter."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Law of Sines and Law of Cosines",
      "description": "Master the Law of Sines and Law of Cosines for oblique triangles, the ambiguous case, triangle area formulas, and Heron's formula.",
      "url": "https://www.learnmathclass.com/trigonometry/sines-cosines-law",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
      "about": { "@type": "Thing", "name": "Law of Sines and Law of Cosines" },
      "teaches": [
        "Standard triangle notation for sides and angles",
        "The Law of Sines and when to use it",
        "The ambiguous case (SSA) and its possible outcomes",
        "The Law of Cosines and when to use it",
        "Choosing between the two laws based on given information",
        "Triangle area using the formula A = (1/2)ab sin(C)",
        "Heron's formula for area from three sides",
        "Applications of triangle solving in real-world problems"
      ],
      "keywords": keyWords.join(", "),
      "author": { "@type": "Organization", "name": "Learn Math Class" },
      "publisher": { "@type": "Organization", "name": "Learn Math Class" },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
        { "@type": "ListItem", "position": 2, "name": "Trigonometry", "item": "https://www.learnmathclass.com/trigonometry" },
        { "@type": "ListItem", "position": 3, "name": "Law of Sines and Cosines", "item": "https://www.learnmathclass.com/trigonometry/sines-cosines-law" }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": { "@type": "Answer", "text": faqQuestions[key].answer }
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

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',


    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },

    // obj3:{

    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },

     obj1: {
    title: `Triangle Notation`,
    content: `A standard labeling convention is used throughout triangle-solving problems. The three vertices are labeled $A$, $B$, $C$. The side opposite each vertex is labeled with the corresponding lowercase letter: $a$ is opposite $A$, $b$ is opposite $B$, $c$ is opposite $C$.

This means $a$ is the side between vertices $B$ and $C$, $b$ is the side between $A$ and $C$, and $c$ is the side between $A$ and $B$. The convention ensures that every side-angle pair — $(a, A)$, $(b, B)$, $(c, C)$ — consists of a side and the angle directly across the triangle from it. This pairing is central to the Law of Sines.

The sum of the interior angles is always $180°$ (or $\\pi$ radians):

$$A + B + C = 180°$$

This constraint means that knowing any two angles immediately gives the third. It also limits the possible configurations: at most one angle can be obtuse (greater than $90°$), and if one angle is obtuse, the other two must both be acute.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Law of Sines`,
    content: `The Law of Sines states that in any triangle, the ratio of each side to the sine of its opposite angle is constant:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Equivalently, the sines are proportional to their opposite sides:

$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

The common ratio $\\frac{a}{\\sin A}$ has a geometric interpretation: it equals the diameter of the circumscribed circle (the circle passing through all three vertices). If $R$ is the circumradius, then $\\frac{a}{\\sin A} = 2R$.

The derivation proceeds by dropping an altitude from one vertex to the opposite side. In a triangle with vertices $A$, $B$, $C$, drop an altitude $h$ from $C$ to side $c$. This altitude can be expressed two ways:

$$h = b\\sin A \\quad \\text{and} \\quad h = a\\sin B$$

Setting these equal: $b\\sin A = a\\sin B$, which rearranges to $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. Repeating with an altitude from a different vertex produces the full three-way equality.

The derivation works whether the triangle is acute or obtuse, though the obtuse case requires a slight adjustment (the altitude falls outside the triangle, and the supplementary angle identity $\\sin(180° - \\theta) = \\sin\\theta$ is invoked).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `When to Use the Law of Sines`,
    content: `The Law of Sines requires at least one complete side-angle pair — a side and its opposite angle — to get started. Given one complete pair, the law can find any other side or angle if one additional piece of information is provided.

**AAS (Angle-Angle-Side):** Two angles and a non-included side are known. The third angle follows from $A + B + C = 180°$. Then the Law of Sines finds the remaining two sides.

Example: $A = 40°$, $B = 70°$, $a = 10$. Then $C = 180° - 40° - 70° = 70°$. From the Law of Sines:

$$\\frac{10}{\\sin 40°} = \\frac{b}{\\sin 70°} \\quad \\Rightarrow \\quad b = \\frac{10\\sin 70°}{\\sin 40°}$$

**ASA (Angle-Side-Angle):** Two angles and the included side are known. The third angle is computed first, then the Law of Sines provides the remaining sides. The distinction from AAS is organizational — the method is identical once the third angle is found.

**SSA (Side-Side-Angle):** Two sides and an angle opposite one of them are known. This is the only configuration where the Law of Sines is the starting tool but the solution may not be unique — the ambiguous case (see below).

The Law of Sines cannot start a solution when no complete side-angle pair is available. In SAS and SSS configurations, the Law of Cosines must be used first.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Ambiguous Case (SSA)`,
    content: `When two sides and an angle opposite one of them are given — say $a$, $b$, and $A$ — the data may determine zero, one, or two distinct triangles. This is the ambiguous case, and it arises because the Law of Sines produces a sine value for the unknown angle, and $\\sin B = k$ (with $0 < k < 1$) has two solutions in $[0°, 180°)$: one acute ($B_1$) and one obtuse ($B_2 = 180° - B_1$).

The analysis depends on whether $A$ is acute or obtuse, and on the relative sizes of $a$ and $b$.

**When $A$ is acute:** Compute the height from the vertex opposite $b$: $h = b\\sin A$. This is the shortest distance from that vertex to the line containing side $a$.

- If $a < h$: the side $a$ is too short to reach the opposite side. No triangle exists.
- If $a = h$: the side $a$ just reaches, forming a right angle. Exactly one (right) triangle.
- If $h < a < b$: the side $a$ reaches the opposite side at two different positions. Two distinct triangles exist.
- If $a \\geq b$: only the acute solution for $B$ is geometrically valid (the obtuse candidate would make $A + B > 180°$). One triangle.

**When $A$ is obtuse:**

- If $a \\leq b$: no triangle (the side opposite the obtuse angle must be the longest).
- If $a > b$: exactly one triangle (the obtuse angle is at $A$, so $B$ must be acute).

In practice, the safest approach is computational: use the Law of Sines to find $\\sin B$, check whether the value is valid ($\\leq 1$), then check whether both the acute and obtuse solutions for $B$ produce a valid triangle (i.e., whether $A + B < 180°$ in each case).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Law of Cosines`,
    content: `The Law of Cosines relates the three sides of a triangle to the cosine of one of its angles:

$$c^2 = a^2 + b^2 - 2ab\\cos C$$

Equivalently:

$$a^2 = b^2 + c^2 - 2bc\\cos A$$
$$b^2 = a^2 + c^2 - 2ac\\cos B$$

Each form involves one angle and all three sides. The formula generalizes the Pythagorean theorem: when $C = 90°$, $\\cos C = 0$, and the equation reduces to $c^2 = a^2 + b^2$. The correction term $-2ab\\cos C$ accounts for the deviation from a right angle. When $C < 90°$ (acute), $\\cos C > 0$, and $c^2 < a^2 + b^2$. When $C > 90°$ (obtuse), $\\cos C < 0$, and $c^2 > a^2 + b^2$.

The derivation uses coordinate geometry. Place the triangle with vertex $C$ at the origin, side $a$ along the positive $x$-axis. Then $B = (a, 0)$ and $A = (b\\cos C, b\\sin C)$. The distance from $A$ to $B$ is:

$$c = \\sqrt{(b\\cos C - a)^2 + (b\\sin C)^2}$$

Squaring and expanding:

$$c^2 = b^2\\cos^2 C - 2ab\\cos C + a^2 + b^2\\sin^2 C = a^2 + b^2(\\cos^2 C + \\sin^2 C) - 2ab\\cos C$$

Since $\\cos^2 C + \\sin^2 C = 1$ (the Pythagorean [identity](!/trigonometry/identities)):

$$c^2 = a^2 + b^2 - 2ab\\cos C$$`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `When to Use the Law of Cosines`,
    content: `The Law of Cosines is the starting tool when no complete side-angle pair is available — that is, when the Law of Sines cannot begin.

**SAS (Side-Angle-Side):** Two sides and the included angle are known. The Law of Cosines directly computes the third side. Once all three sides and one angle are known, the remaining angles can be found using the Law of Sines (or the Law of Cosines again).

Example: $a = 8$, $b = 6$, $C = 50°$. Find $c$:

$$c^2 = 8^2 + 6^2 - 2(8)(6)\\cos 50° = 64 + 36 - 96\\cos 50° \\approx 100 - 61.7 = 38.3$$

$$c \\approx 6.19$$

**SSS (Side-Side-Side):** All three sides are known, and the angles must be found. Rearrange the Law of Cosines to solve for an angle:

$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

Compute $\\cos C$, then apply [arccosine](!/trigonometry/inverse-functions) to find $C$. Repeat for another angle, or use $A + B + C = 180°$ for the third.

A practical strategy for SSS: find the largest angle first (the one opposite the longest side). If its cosine is negative, the angle is obtuse, and the triangle contains an obtuse angle. If positive, all angles are acute. Finding the largest angle first resolves this question immediately, and the remaining angles (which must be acute) can be found more safely with the Law of Sines — since arcsine of a positive value always gives an acute angle, there is no ambiguity.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Choosing Between the Two Laws`,
    content: `The decision framework is straightforward and depends entirely on what information is available:

**Start with the Law of Sines when:**
- AAS — two angles and a non-included side
- ASA — two angles and the included side (find the third angle first)
- SSA — two sides and an angle opposite one of them (watch for the ambiguous case)

In each of these, at least one complete side-angle pair $(a, A)$ is either given or immediately obtainable.

**Start with the Law of Cosines when:**
- SAS — two sides and the included angle
- SSS — all three sides, no angles

In these configurations, no complete pair exists until after the first computation.

**In combination:** Many problems require both laws. A typical SAS problem uses the Law of Cosines to find the third side, then switches to the Law of Sines for the remaining angles (which is faster than applying the Law of Cosines twice more). A typical SSS problem uses the Law of Cosines for the first (largest) angle, then switches to the Law of Sines for efficiency.

**Configuration not possible:**
- AAA — three angles, no sides. This determines the shape of the triangle (similarity class) but not its size. There is no unique solution.
- Only one or two pieces of information — insufficient to determine any triangle.

Any other combination of three pieces of information (out of three sides and three angles) falls into one of the cases above and is solvable by the appropriate law or combination.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Area of a Triangle Using Trigonometry`,
    content: `The standard area formula $A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$ requires knowing the height, which is often not directly given. Trigonometry provides an alternative that uses two sides and the included angle:

$$A = \\frac{1}{2}ab\\sin C$$

where $a$ and $b$ are two sides and $C$ is the angle between them.

The derivation is direct. Drop an altitude $h$ from vertex $C$ to side $c$. Then $h = a\\sin B$ (from the right triangle formed). But the formula is more naturally derived as $h = b\\sin A$ from one perspective or $h = a\\sin B$ from another. Using $h = b\\sin A$:

$$\\text{Area} = \\frac{1}{2} \\times a \\times h = \\frac{1}{2} \\times a \\times b\\sin C$$

This holds for all triangles — acute, right, or obtuse. For a right triangle with $C = 90°$, $\\sin C = 1$, and the formula reduces to $\\frac{1}{2}ab$, consistent with the standard formula (where $a$ and $b$ are the legs).

The formula requires exactly the SAS configuration: two sides and the included angle. If other configurations are given, the missing information must be found first using the Law of Sines or Law of Cosines.

Note that $\\sin C > 0$ for all valid triangle angles ($0° < C < 180°$), so the area is always positive. The area is maximized when $C = 90°$ (for fixed side lengths), since $\\sin C$ achieves its maximum at $90°$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Heron's Formula`,
    content: `When all three sides of a triangle are known but no angle has been computed, the area can be found directly using Heron's formula — without first finding any angle.

Compute the semi-perimeter:

$$s = \\frac{a + b + c}{2}$$

Then the area is:

$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$

**Example:** A triangle with sides $a = 5$, $b = 7$, $c = 9$.

$$s = \\frac{5 + 7 + 9}{2} = \\frac{21}{2} = 10.5$$

$$A = \\sqrt{10.5 \\times 5.5 \\times 3.5 \\times 1.5} = \\sqrt{10.5 \\times 5.5 \\times 3.5 \\times 1.5}$$

$$= \\sqrt{303.1875} \\approx 17.41$$

Heron's formula can be derived from the trigonometric area formula $\\frac{1}{2}ab\\sin C$ combined with the Law of Cosines. Express $\\cos C$ in terms of the sides, use $\\sin^2 C = 1 - \\cos^2 C$ to find $\\sin C$, substitute into the area formula, and simplify. The algebra is substantial but the result is elegant.

The formula has the advantage of requiring only side lengths — no angles, no trigonometric function evaluations. It is useful when the sides are given numerically and the area is the only quantity sought. Its disadvantage is that it provides no angle information; if angles are also needed, the Law of Cosines is a more efficient starting point.

A validity check: $s - a$, $s - b$, and $s - c$ must all be positive. If any of them is zero or negative, the three given lengths do not form a valid triangle (they violate the triangle inequality).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Applications`,
    content: `The Law of Sines and Law of Cosines apply wherever distances or angles must be determined indirectly — situations where direct measurement is impossible or impractical.

**Surveying and land measurement.** A surveyor measures two distances and the angle between them (SAS) to determine the third distance — for example, the width of a river or the length of a property boundary obscured by terrain. Alternatively, from two known positions a measured distance apart, a surveyor observes the angles to a remote point (ASA) and computes the distance to it.

**Navigation.** A ship or aircraft determines its position by measuring bearings (angles) to two known landmarks. The triangle formed by the vessel and the two landmarks is solved using the Law of Sines (typically an AAS or ASA configuration), yielding the distances from the vessel to each landmark.

**Physics and engineering.** Forces acting at angles are resolved using the Law of Cosines. Two forces of known magnitudes acting at a known angle produce a resultant whose magnitude is computed by treating the force vectors as sides of a triangle — the Law of Cosines gives the resultant magnitude, and the Law of Sines gives the angle the resultant makes with each component force.

**Indirect measurement.** The height of a mountain, the distance to a star (via parallax), or the span of a bridge can be determined by measuring accessible distances and angles and solving the resulting triangle. Each problem reduces to identifying the triangle, classifying the known information (AAS, ASA, SAS, SSA, SSS), and applying the appropriate law.

In every application, the first step is geometric: identify the triangle, label the known and unknown elements, and determine which law applies. The computation follows mechanically from there.`,
    before: ``,
    after: ``,
    link: ``,
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
  title: `Solving Triangles Without a Right Angle`,
  content: `[Right triangle trigonometry](!/trigonometry/right-triangle) solves triangles that contain a $90°$ angle. Most triangles do not. A triangle formed by three survey markers, three cities on a map, or three forces acting on an object will almost never include a right angle. These oblique triangles — triangles with no right angle — require different tools.

The Law of Sines and the Law of Cosines are those tools. Together, they provide a complete framework for solving any triangle given sufficient information: finding unknown sides from known angles and sides, finding unknown angles from known sides, computing areas, and handling the geometric ambiguities that arise when the given data does not determine a unique triangle. The Law of Cosines generalizes the Pythagorean theorem — reducing to it exactly when one angle is $90°$ — while the Law of Sines provides a proportional relationship between sides and the sines of their opposite angles. Which law to apply depends entirely on what is known: the configuration of given sides and angles determines the starting point, and the two laws often work in sequence to complete the solution.

`,
}




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Law of Sines and Cosines | Learn Math Class",
        description: "Master the Law of Sines and Law of Cosines for oblique triangles: the ambiguous case, choosing the right law, triangle area, and Heron's formula.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/sines-cosines-law",
         name: "Law of Sines and Law of Cosines"
      },

       }
    }
   }

export default function SinesCosinesLawPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Law of Sines and Cosines</h1>
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
