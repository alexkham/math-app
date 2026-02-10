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
import CheatSheet from '@/app/components/cheat-sheets/CheatSheet'


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

    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
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


  
const complexNumbersCheatSheetData = {
  categories: [
    {
      title: 'The Imaginary Unit & Pure Imaginaries',
      items: [
        {
          name: 'Definition of $i$',
          formula: '$i^2 = -1$',
          note: 'The [imaginary unit](!/complex-numbers/imaginary-numbers) was created to solve $x^2 + 1 = 0$, which has no solution in $\\mathbb{R}$.',
          color: '#6366f1'
        },
        {
          name: 'Square Roots of Negatives',
          formula: '$\\sqrt{-a} = i\\sqrt{a}$ for $a > 0$',
          alert_warning: '**Trap:** $\\sqrt{-1} \\cdot \\sqrt{-1} \\neq \\sqrt{1}$. Always extract $i$ first, then multiply: $i \\cdot i = i^2 = -1$.',
          color: '#6366f1'
        },
        {
          name: 'Powers of $i$ — The 4-Cycle',
          key_value: [
            { key: '$i^1$', value: '$i$' },
            { key: '$i^2$', value: '$-1$' },
            { key: '$i^3$', value: '$-i$' },
            { key: '$i^4$', value: '$1$ (cycle restarts)' }
          ],
          note: 'For $i^k$: divide $k$ by $4$, use the remainder. E.g. $i^{323}$: $323 \\div 4$ remainder $3$ → $i^{323} = i^3 = -i$.',
          color: '#6366f1'
        },
        {
          name: 'Powers of $i$ — Visualized',
          canvas: {
            width: 240,
            height: 240,
            drawKey: 'powersOfI'
          },
          note: 'Multiplying by $i$ = 90° counterclockwise rotation on the unit circle.',
          color: '#6366f1'
        },
        {
          name: 'Pure Imaginary Numbers',
          definition: {
            term: 'Pure Imaginary',
            description: 'A number of the form $bi$ where $b \\in \\mathbb{R}$ and $b \\neq 0$. Equivalently, $z$ is [pure imaginary](!/complex-numbers/imaginary-numbers) when $Re(z) = 0$ and $z \\neq 0$.'
          },
          note: 'Zero ($0 + 0i$) is both real and pure imaginary — the only number with dual membership.',
          color: '#6366f1'
        }
      ]
    },
    {
      title: 'Algebraic Form & Components',
      items: [
        {
          name: 'Standard (Algebraic) Form',
          formula: '$z = a + bi$',
          bullet_list: [
            '$a, b \\in \\mathbb{R}$, and $i^2 = -1$',
            '$a$ is the **real part**, $b$ is the **imaginary part**',
            'The [imaginary part](!/complex-numbers/algebraic-form) $b$ is itself a real number — not $bi$'
          ],
          color: '#3b82f6'
        },
        {
          name: 'The Complex Plane',
          canvas: {
            width: 260,
            height: 220,
            drawKey: 'complexPoint'
          },
          note: 'A complex number $z = a + bi$ plotted as the point $(a, b)$.',
          color: '#3b82f6'
        },
        {
          name: '$Re(z)$ and $Im(z)$',
          key_value: [
            { key: '$Re(z)$', value: '$a$ — horizontal coordinate on the [complex plane](!/complex-numbers/geometric-representation)' },
            { key: '$Im(z)$', value: '$b$ — vertical coordinate (a real number, not $bi$)' }
          ],
          alert_warning: '**Common mistake:** $Im(5 - 3i) = -3$, not $3$. The sign belongs to the imaginary part.',
          color: '#3b82f6'
        },
        {
          name: 'Extracting Parts via Conjugate',
          key_value: [
            { key: 'Real part', value: '$Re(z) = \\dfrac{z + \\bar{z}}{2}$' },
            { key: 'Imaginary part', value: '$Im(z) = \\dfrac{z - \\bar{z}}{2i}$' }
          ],
          color: '#3b82f6'
        },
        {
          name: 'Equality of Complex Numbers',
          formula: '$a + bi = c + di \\iff a = c$ and $b = d$',
          note: 'One complex equation yields **two** real equations. This is the key technique for solving complex equations by equating real and imaginary parts separately.',
          color: '#3b82f6'
        },
        {
          name: 'Classification of Complex Numbers',
          key_value: [
            { key: '$b = 0$', value: '$z = a$ is a real number' },
            { key: '$a = 0,\\; b \\neq 0$', value: '$z = bi$ is [pure imaginary](!/complex-numbers/imaginary-numbers)' },
            { key: '$a = b = 0$', value: '$z = 0$ (both real and pure imaginary)' },
            { key: '$a \\neq 0,\\; b \\neq 0$', value: 'Genuinely complex (off both axes)' }
          ],
          color: '#3b82f6'
        }
      ]
    },
    {
      title: 'Complex Conjugate',
      items: [
        {
          name: 'Definition',
          formula: '$\\bar{z} = a - bi$',
          note: 'Negate only the imaginary part. On the [complex plane](!/complex-numbers/geometric-representation), this is reflection across the real axis. Also written $z^*$ in physics.',
          alert_warning: '**Not negation:** $\\overline{3+2i} = 3-2i$, but $-(3+2i) = -3-2i$.',
          color: '#8b5cf6'
        },
        {
          name: 'Conjugate Reflection',
          canvas: {
            width: 260,
            height: 240,
            drawKey: 'conjugate'
          },
          note: 'The conjugate $\\bar{z}$ is the reflection of $z$ across the real axis.',
          color: '#8b5cf6'
        },
        {
          name: 'Conjugate Arithmetic Properties',
          bullet_list: [
            '$\\overline{\\bar{z}} = z$ (double conjugate)',
            '$\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$',
            '$\\overline{z_1 - z_2} = \\bar{z_1} - \\bar{z_2}$',
            '$\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$',
            '$\\overline{z_1 / z_2} = \\bar{z_1} / \\bar{z_2}$',
            '$\\overline{z^n} = (\\bar{z})^n$'
          ],
          note: 'Conjugation commutes with all arithmetic — conjugate each piece separately.',
          color: '#8b5cf6'
        },
        {
          name: 'Key Conjugate Identities',
          key_value: [
            { key: '$z + \\bar{z}$', value: '$2\\,Re(z)$ — always real' },
            { key: '$z - \\bar{z}$', value: '$2i\\,Im(z)$ — always pure imaginary' },
            { key: '$z \\cdot \\bar{z}$', value: '$|z|^2 = a^2 + b^2$ — always real and $\\geq 0$' }
          ],
          color: '#8b5cf6'
        },
        {
          name: 'Classification Theorems',
          comparison: {
            left: {
              title: '$z$ is Real',
              content: '$z = \\bar{z}$ (fixed by reflection)'
            },
            right: {
              title: '$z$ is Pure Imaginary',
              content: '$\\bar{z} = -z$ (negated by reflection)'
            }
          },
          color: '#8b5cf6'
        },
        {
          name: 'Conjugate Pairs in Real Polynomials',
          note: 'If $p(z)$ has all real coefficients and $p(z_0) = 0$, then $p(\\bar{z_0}) = 0$. Non-real roots of real polynomials always come in [conjugate pairs](!/complex-numbers/complex-conjugate).',
          alert_info: 'Consequence: real polynomials of **odd degree** always have at least one real root.',
          color: '#8b5cf6'
        }
      ]
    },
    {
      title: 'Arithmetic Operations',
      items: [
        {
          name: 'Addition & Subtraction',
          formula: '$(a+bi) \\pm (c+di) = (a \\pm c) + (b \\pm d)i$',
          note: 'Combine real parts, combine imaginary parts independently. Geometrically: [vector addition](!/complex-numbers/geometric-representation) (parallelogram rule).',
          color: '#10b981'
        },
        {
          name: 'Vector Addition — Parallelogram Rule',
          canvas: {
            width: 280,
            height: 240,
            drawKey: 'vectorAddition'
          },
          note: 'Adding $z_1 + z_2$ follows the parallelogram (tip-to-tail) rule.',
          color: '#10b981'
        },
        {
          name: 'Multiplication',
          formula: '$(a+bi)(c+di) = (ac - bd) + (ad + bc)i$',
          steps: [
            'Expand using FOIL / distribution',
            'Replace every $i^2$ with $-1$',
            'Collect real and imaginary parts'
          ],
          color: '#10b981'
        },
        {
          name: 'Multiplication as Rotation & Scaling',
          canvas: {
            width: 280,
            height: 260,
            drawKey: 'multiplicationRotation'
          },
          note: 'Multiply moduli, add arguments: $|z_1 z_2| = |z_1||z_2|$, $\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2)$.',
          color: '#10b981'
        },
        {
          name: 'Division',
          formula: '$\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\cdot \\bar{z_2}}{|z_2|^2}$',
          steps: [
            'Multiply numerator and denominator by $\\bar{z_2}$',
            'Denominator becomes $z_2 \\cdot \\bar{z_2} = |z_2|^2$ (real)',
            'Expand numerator, write result as $a + bi$'
          ],
          note: 'The [conjugate](!/complex-numbers/complex-conjugate) eliminates $i$ from the denominator.',
          color: '#10b981'
        },
        {
          name: 'Multiplicative Inverse',
          formula: '$z^{-1} = \\dfrac{\\bar{z}}{|z|^2} = \\dfrac{a - bi}{a^2 + b^2}$',
          note: 'Exists for every $z \\neq 0$. Geometrically: reflect across real axis and rescale [modulus](!/complex-numbers/absolute-value) to $1/|z|$.',
          color: '#10b981'
        },
        {
          name: 'Common Pitfalls',
          bullet_list: [
            '**Forgetting $i^2 = -1$** in multiplication — the $bdi^2$ term must become $-bd$',
            '**Sign errors in subtraction** — distribute the minus across both parts: $(5+3i)-(2-4i) = 3+7i$',
            '**Leaving complex denominators** — always multiply by conjugate to get real denominator',
            '**Confusing conjugate with negation** — conjugate flips only the imaginary sign'
          ],
          color: '#10b981'
        }
      ]
    },
    {
      title: 'Modulus (Absolute Value)',
      items: [
        {
          name: 'Definition',
          formula: '$|z| = |a + bi| = \\sqrt{a^2 + b^2}$',
          note: 'Distance from the origin to $(a, b)$ in the [complex plane](!/complex-numbers/geometric-representation). Generalizes real absolute value to two dimensions.',
          color: '#f59e0b'
        },
        {
          name: 'Modulus — Right Triangle',
          canvas: {
            width: 260,
            height: 240,
            drawKey: 'modulus'
          },
          note: 'The modulus $|z|$ is the hypotenuse of the right triangle with legs $a$ and $b$.',
          color: '#f59e0b'
        },
        {
          name: 'Special Cases',
          key_value: [
            { key: 'Real $z = a$', value: '$|a| = |a|$ (ordinary absolute value)' },
            { key: 'Pure imaginary $z = bi$', value: '$|bi| = |b|$' },
            { key: '$z = 0$', value: '$|0| = 0$ (the only $z$ with $|z| = 0$)' }
          ],
          color: '#f59e0b'
        },
        {
          name: 'Modulus–Conjugate Identity',
          highlight: '$z \\cdot \\bar{z} = |z|^2$',
          note: 'The product $z \\cdot \\bar{z}$ is always real and non-negative. This identity powers [division](!/complex-numbers/operations) and connects modulus to the [conjugate](!/complex-numbers/complex-conjugate).',
          color: '#f59e0b'
        },
        {
          name: 'Algebraic Properties of Modulus',
          bullet_list: [
            '$|z| \\geq 0$, with $|z| = 0 \\iff z = 0$',
            '$|\\bar{z}| = |z|$',
            '$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$',
            '$|z_1 / z_2| = |z_1| / |z_2|$',
            '$|z^n| = |z|^n$'
          ],
          color: '#f59e0b'
        },
        {
          name: 'Triangle Inequalities',
          key_value: [
            { key: 'Triangle', value: '$|z_1 + z_2| \\leq |z_1| + |z_2|$' },
            { key: 'Reverse', value: '$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$' }
          ],
          note: 'Equality in the triangle inequality holds iff $z_1$ and $z_2$ point in the same direction (one is a non-negative real multiple of the other).',
          color: '#f59e0b'
        },
        {
          name: 'Distance Between Two Points',
          formula: '$d(z_1, z_2) = |z_1 - z_2|$',
          note: 'The Euclidean distance in the [complex plane](!/complex-numbers/geometric-representation). The set $|z - z_0| = r$ is a circle centered at $z_0$ with radius $r$.',
          color: '#f59e0b'
        }
      ]
    },
    {
      title: 'Geometric Representation',
      items: [
        {
          name: 'The Complex Plane (Argand Diagram)',
          definition: {
            term: '$z = a + bi \\longleftrightarrow (a, b)$',
            description: 'Every complex number maps to a unique point. Horizontal axis = real numbers, vertical axis = [pure imaginaries](!/complex-numbers/imaginary-numbers). Also called the Argand diagram.'
          },
          color: '#06b6d4'
        },
        {
          name: 'Quadrants of the Complex Plane',
          canvas: {
            width: 260,
            height: 260,
            drawKey: 'quadrants'
          },
          note: 'Q1 $(+,+)$, Q2 $(-,+)$, Q3 $(-,-)$, Q4 $(+,-)$.',
          color: '#06b6d4'
        },
        {
          name: 'Axes & Quadrants',
          key_value: [
            { key: 'Real axis', value: 'Horizontal — all numbers with $b = 0$' },
            { key: 'Imaginary axis', value: 'Vertical — all numbers with $a = 0$' },
            { key: 'Origin', value: '$0 + 0i$ — the only point on both axes' }
          ],
          color: '#06b6d4'
        },
        {
          name: 'Complex Numbers as Vectors',
          bullet_list: [
            '$z = a + bi$ is an arrow from origin to $(a,b)$',
            'Addition follows the **parallelogram rule** (tip-to-tail)',
            '$z_1 - z_2$ is the vector from $z_2$ to $z_1$',
            '$|z|$ = length of the vector ([modulus](!/complex-numbers/absolute-value))'
          ],
          color: '#06b6d4'
        },
        {
          name: 'Geometric Meaning of Operations',
          key_value: [
            { key: 'Addition', value: 'Vector (parallelogram) addition' },
            { key: 'Conjugate', value: '[Reflection](!/complex-numbers/complex-conjugate) across real axis' },
            { key: 'Multiply by $r$', value: 'Scale by $r$ (no rotation)' },
            { key: 'Multiply by $i$', value: 'Rotate $90°$ counterclockwise' },
            { key: 'Multiply by $-1$', value: 'Rotate $180°$' },
            { key: 'General product', value: 'Scale by $|z_2|$ and rotate by $\\arg(z_2)$' }
          ],
          color: '#06b6d4'
        },
        {
          name: 'No Ordering in $\\mathbb{C}$',
          alert_info: 'Complex numbers **cannot be ordered**. The plane extends in all directions — no consistent "$<$" exists. Only [moduli](!/complex-numbers/absolute-value) (distances) can be compared.',
          color: '#06b6d4'
        }
      ]
    },
    {
      title: 'Trigonometric Form',
      items: [
        {
          name: 'The Trigonometric Representation',
          formula: '$z = r(\\cos\\theta + i\\sin\\theta) = r\\,\\text{cis}\\,\\theta$',
          key_value: [
            { key: '$r = |z|$', value: '[Modulus](!/complex-numbers/absolute-value) — distance from origin' },
            { key: '$\\theta = \\arg(z)$', value: 'Argument — angle from positive real axis' }
          ],
          color: '#ec4899'
        },
        {
          name: 'Trigonometric Form — Visualized',
          canvas: {
            width: 300,
            height: 280,
            drawKey: 'trigForm'
          },
          note: 'The modulus $r$ is the length, $\\theta$ is the angle from the positive real axis.',
          color: '#ec4899'
        },
        {
          name: 'Argument & Principal Argument',
          bullet_list: [
            '$\\arg(z)$ is determined only up to multiples of $2\\pi$',
            '$\\text{Arg}(z) \\in (-\\pi, \\pi]$ is the **principal** argument (unique)',
            '$\\arg(0)$ is **undefined**'
          ],
          color: '#ec4899'
        },
        {
          name: 'Finding the Argument by Quadrant',
          key_value: [
            { key: 'Q1 ($a>0, b>0$)', value: '$\\theta = \\arctan(b/a)$' },
            { key: 'Q2 ($a<0, b>0$)', value: '$\\theta = \\arctan(b/a) + \\pi$' },
            { key: 'Q3 ($a<0, b<0$)', value: '$\\theta = \\arctan(b/a) - \\pi$' },
            { key: 'Q4 ($a>0, b<0$)', value: '$\\theta = \\arctan(b/a)$' }
          ],
          note: 'Or use $\\text{atan2}(b, a)$ which handles all quadrants automatically.',
          color: '#ec4899'
        },
        {
          name: 'Special Angles on the Axes',
          key_value: [
            { key: 'Positive real ($a > 0$)', value: '$\\theta = 0$' },
            { key: 'Positive imaginary ($b > 0$)', value: '$\\theta = \\pi/2$' },
            { key: 'Negative real ($a < 0$)', value: '$\\theta = \\pi$' },
            { key: 'Negative imaginary ($b < 0$)', value: '$\\theta = -\\pi/2$' }
          ],
          color: '#ec4899'
        },
        {
          name: 'Unit Circle — Key Angles',
          canvas: {
            width: 300,
            height: 300,
            drawKey: 'unitCircleAngles'
          },
          note: 'Memorize these standard angles — they appear constantly in problems.',
          color: '#ec4899'
        },
        {
          name: 'Conversions',
          two_column: {
            left: '**Algebraic → Trig:**\n$r = \\sqrt{a^2+b^2}$\n$\\theta = \\text{atan2}(b, a)$',
            right: '**Trig → Algebraic:**\n$a = r\\cos\\theta$\n$b = r\\sin\\theta$'
          },
          color: '#ec4899'
        },
        {
          name: 'Multiplication & Division',
          key_value: [
            { key: 'Product', value: '$z_1 z_2 = r_1 r_2\\,\\text{cis}(\\theta_1 + \\theta_2)$' },
            { key: 'Quotient', value: '$z_1 / z_2 = (r_1/r_2)\\,\\text{cis}(\\theta_1 - \\theta_2)$' }
          ],
          note: 'Multiply moduli & add arguments. Divide moduli & subtract arguments. This is why [trigonometric form](!/complex-numbers/trigonometric-form) excels at multiplication.',
          color: '#ec4899'
        }
      ]
    },
    {
      title: "Exponential Form & Euler's Formula",
      items: [
        {
          name: "Euler's Formula",
          highlight: '$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$',
          note: 'Proved via Taylor series. Connects exponential functions to trigonometry. The point $e^{i\\theta}$ traces the unit circle as $\\theta$ varies.',
          color: '#e11d48'
        },
        {
          name: "$e^{i\\theta}$ on the Unit Circle",
          canvas: {
            width: 280,
            height: 260,
            drawKey: 'eulerFormula'
          },
          note: 'As $\\theta$ varies, $e^{i\\theta}$ traces the unit circle through $1, i, -1, -i$.',
          color: '#e11d48'
        },
        {
          name: "Euler's Identity",
          highlight: '$e^{i\\pi} + 1 = 0$',
          note: "Unites five fundamental constants: $e$, $i$, $\\pi$, $1$, $0$. Often called the most beautiful formula in mathematics.",
          color: '#e11d48'
        },
        {
          name: 'Exponential Form',
          formula: '$z = re^{i\\theta}$',
          note: 'Equivalent to $r\\,\\text{cis}\\,\\theta$ via Euler. The three representations: $a + bi = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$.',
          color: '#e11d48'
        },
        {
          name: 'Operations in Exponential Form',
          key_value: [
            { key: 'Product', value: '$z_1 z_2 = r_1 r_2\\, e^{i(\\theta_1 + \\theta_2)}$' },
            { key: 'Quotient', value: '$z_1 / z_2 = (r_1/r_2)\\, e^{i(\\theta_1 - \\theta_2)}$' },
            { key: 'Power', value: '$z^n = r^n e^{in\\theta}$' },
            { key: '$n$-th roots', value: '$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n}$' }
          ],
          note: 'Standard exponent rules apply directly — this is why [exponential form](!/complex-numbers/exponential-form) is the most efficient for computation.',
          color: '#e11d48'
        },
        {
          name: 'Conjugate in Exponential Form',
          formula: '$\\overline{re^{i\\theta}} = re^{-i\\theta}$',
          note: 'Conjugation negates the argument. Reflection across the real axis = flipping the angle sign.',
          color: '#e11d48'
        }
      ]
    },
    {
      title: "De Moivre's Theorem & Roots",
      items: [
        {
          name: "De Moivre's Theorem",
          formula: '$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$',
          note: 'For any complex number: $z^n = r^n\\,\\text{cis}(n\\theta)$. Raise the modulus to the power, multiply the argument by $n$.',
          color: '#7c3aed'
        },
        {
          name: 'Computing Powers — Procedure',
          steps: [
            'Convert to [trigonometric form](!/complex-numbers/trigonometric-form): find $r$ and $\\theta$',
            'Apply [De Moivre](!/complex-numbers/demoivre-theorem): $z^n = r^n\\,\\text{cis}(n\\theta)$',
            'Reduce angle modulo $360°$ if needed',
            'Convert back to algebraic form'
          ],
          note: 'Example: $(1+i)^{10} = (\\sqrt{2})^{10}\\text{cis}(450°) = 32\\text{cis}(90°) = 32i$',
          color: '#7c3aed'
        },
        {
          name: '$n$-th Root Formula',
          formula: '$z_k = R^{1/n}\\,\\text{cis}\\!\\left(\\dfrac{\\phi + 360°k}{n}\\right)$, $\\;k = 0, 1, \\ldots, n{-}1$',
          bullet_list: [
            'Every nonzero complex number has exactly **$n$ distinct $n$-th roots**',
            'All roots share modulus $R^{1/n}$ — they lie on a circle',
            'Roots are spaced $360°/n$ apart — vertices of a regular $n$-gon'
          ],
          color: '#7c3aed'
        },
        {
          name: 'Roots of Unity ($z^n = 1$)',
          formula: '$z_k = \\text{cis}\\!\\left(\\dfrac{2\\pi k}{n}\\right) = \\omega^k$, where $\\omega = \\text{cis}\\!\\left(\\dfrac{2\\pi}{n}\\right)$',
          key_value: [
            { key: 'Sum of all roots', value: '$1 + \\omega + \\omega^2 + \\cdots + \\omega^{n-1} = 0$' },
            { key: '4th roots of unity', value: '$1,\\; i,\\; -1,\\; -i$ (square on unit circle)' },
            { key: '6th roots of unity', value: 'Regular hexagon on unit circle' }
          ],
          color: '#7c3aed'
        },
        {
          name: '6th Roots of Unity — Visualized',
          canvas: {
            width: 260,
            height: 260,
            drawKey: 'rootsOfUnity6'
          },
          note: 'Six equally spaced roots forming a regular hexagon on the unit circle.',
          color: '#7c3aed'
        },
        {
          name: 'Quick Root Examples',
          key_value: [
            { key: '$\\sqrt{i}$', value: '$\\text{cis}(45°)$ and $\\text{cis}(225°)$' },
            { key: '$\\sqrt[3]{-8}$', value: '$2\\text{cis}(60°),\\; -2,\\; 2\\text{cis}(300°)$' },
            { key: '$\\sqrt[4]{-16}$', value: '$\\sqrt{2}(1+i),\\; \\sqrt{2}(-1+i),\\; \\sqrt{2}(-1-i),\\; \\sqrt{2}(1-i)$' }
          ],
          color: '#7c3aed'
        },
        {
          name: 'Cube Roots of $-8$',
          canvas: {
            width: 260,
            height: 260,
            drawKey: 'cubeRootsOfNeg8'
          },
          note: 'Three roots forming an equilateral triangle on a circle of radius 2.',
          color: '#7c3aed'
        },
        {
          name: 'Fourth Roots of $-16$',
          canvas: {
            width: 260,
            height: 260,
            drawKey: 'fourthRootsOfNeg16'
          },
          note: 'Four roots forming a square on a circle of radius 2, rotated 45° from axes.',
          color: '#7c3aed'
        }
      ]
    },
    {
      title: 'Equations & Polynomials',
      items: [
        {
          name: 'Fundamental Theorem of Algebra',
          highlight: 'Every polynomial of degree $n \\geq 1$ has exactly $n$ roots in $\\mathbb{C}$ (counted with multiplicity).',
          note: '$\\mathbb{C}$ is **algebraically closed** — every polynomial factors completely into linear terms: $p(z) = a_n(z - z_1)(z - z_2)\\cdots(z - z_n)$.',
          color: '#0ea5e9'
        },
        {
          name: "Vieta's Formulas (Quadratic)",
          formula: '$z^2 + bz + c = 0$ with roots $z_1, z_2$',
          key_value: [
            { key: 'Sum of roots', value: '$z_1 + z_2 = -b$' },
            { key: 'Product of roots', value: '$z_1 \\cdot z_2 = c$' }
          ],
          note: "Extends to higher degrees: the $k$-th symmetric sum of roots $= (-1)^k \\times$ coefficient of $z^{n-k}$. See [Vieta's formulas](!/complex-numbers/equations-and-polynomials).",
          color: '#0ea5e9'
        },
        {
          name: 'Real Polynomials — Conjugate Pair Theorem',
          bullet_list: [
            'Non-real roots come in [conjugate pairs](!/complex-numbers/complex-conjugate): if $z_0$ is a root, so is $\\bar{z_0}$',
            'Odd-degree real polynomials always have at least one **real** root',
            'Each conjugate pair gives a real quadratic factor: $(z - z_0)(z - \\bar{z_0}) = z^2 - 2\\,Re(z_0)\\,z + |z_0|^2$'
          ],
          color: '#0ea5e9'
        },
        {
          name: 'Solving $z^n = \\bar{z}$',
          formula: '$n + 2$ solutions total',
          bullet_list: [
            '$z = 0$ (from $r = 0$)',
            '$n + 1$ points on the unit circle: $z_k = \\text{cis}\\!\\left(\\dfrac{360°k}{n+1}\\right)$ for $k = 0, \\ldots, n$'
          ],
          note: 'Write $z = re^{i\\theta}$, match moduli ($r^n = r$) and arguments ($(n+1)\\theta = 360°k$).',
          color: '#0ea5e9'
        },
        {
          name: 'Conjugate Equations as Geometric Loci',
          key_value: [
            { key: '$z + \\bar{z} = k$', value: 'Vertical line $Re(z) = k/2$' },
            { key: '$z - \\bar{z} = ki$', value: 'Horizontal line $Im(z) = k/2$' },
            { key: '$z \\cdot \\bar{z} = k$', value: 'Circle $|z| = \\sqrt{k}$ centered at origin' }
          ],
          note: 'Combine conditions to find intersections. See [equations & polynomials](!/complex-numbers/equations-and-polynomials).',
          color: '#0ea5e9'
        }
      ]
    },
    {
      title: 'Field Properties & Structure',
      items: [
        {
          name: 'The 11 Field Axioms of $\\mathbb{C}$',
          bullet_list: [
            '**Closure:** $z_1 + z_2 \\in \\mathbb{C}$; $z_1 \\cdot z_2 \\in \\mathbb{C}$',
            '**Commutativity:** $z_1 + z_2 = z_2 + z_1$; $z_1 z_2 = z_2 z_1$',
            '**Associativity:** $(z_1+z_2)+z_3 = z_1+(z_2+z_3)$; $(z_1 z_2)z_3 = z_1(z_2 z_3)$',
            '**Additive identity:** $z + 0 = z$',
            '**Multiplicative identity:** $z \\cdot 1 = z$',
            '**Additive inverse:** $z + (-z) = 0$',
            '**Multiplicative inverse:** $z \\cdot z^{-1} = 1$ for $z \\neq 0$',
            '**Distributivity:** $z_1(z_2 + z_3) = z_1 z_2 + z_1 z_3$'
          ],
          note: '$\\mathbb{C}$ is a [field](!/complex-numbers/properties) — all techniques from real algebra transfer directly.',
          color: '#64748b'
        },
        {
          name: 'The 19 Core Properties',
          definition: {
            term: 'Complete Property Set',
            description: '11 field axioms + 7 conjugate properties (including double conjugate) + 7 modulus properties + 5 argument properties − shared overlaps = **19 distinct rules** governing complex arithmetic.'
          },
          note: 'These properties are catalogued on the [properties page](!/complex-numbers/properties).',
          color: '#64748b'
        },
        {
          name: 'Argument Properties (mod $2\\pi$)',
          key_value: [
            { key: '$\\arg(z_1 z_2)$', value: '$\\arg(z_1) + \\arg(z_2)$' },
            { key: '$\\arg(z_1/z_2)$', value: '$\\arg(z_1) - \\arg(z_2)$' },
            { key: '$\\arg(z^n)$', value: '$n \\cdot \\arg(z)$' },
            { key: '$\\arg(\\bar{z})$', value: '$-\\arg(z)$' },
            { key: '$\\arg(-z)$', value: '$\\arg(z) + \\pi$' }
          ],
          color: '#64748b'
        },
        {
          name: 'Why $\\mathbb{C}$ Cannot Be Ordered',
          alert_info: 'Suppose $i > 0$: then $i^2 > 0$, so $-1 > 0$ — contradiction. Suppose $i < 0$: then $-i > 0$, so $(-i)^2 > 0$, meaning $-1 > 0$ — same contradiction. No consistent ordering exists.',
          color: '#64748b'
        },
        {
          name: 'Algebraic Closure',
          note: '$\\mathbb{C}$ is **algebraically closed**: every non-constant polynomial has at least one root. No further number system extension is needed. See the [Fundamental Theorem of Algebra](!/complex-numbers/equations-and-polynomials).',
          color: '#64748b'
        }
      ]
    }
  ]
};




  const introContent = {
  id: "intro",
  title: "",
  content: ``
}




   return {
      props:{
         sectionsContent,
         introContent,
         complexNumbersCheatSheetData,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/url",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent,
    complexNumbersCheatSheetData,
}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Complex Numbers Cheat Sheets</h1>
   <br/>
    <CheatSheet
      type="card"
    //   title="Complex Numbers Cheat Sheets"
      subtitle="Organized by category"
      data={complexNumbersCheatSheetData}
      showControls={true}
      showFilters={true}
    />
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
   <br/>
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
