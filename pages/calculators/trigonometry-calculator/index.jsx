
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import CalculatorSwitcher from '@/app/components/calculators/CalculatorSwitcher'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

export default function TrigonometryCalculatorPage({ explanations, inverseTrigoExplanations, navigationGroup, detailInstructions, demos, sectionsContent, schemas }) {
  const metadata = {
    title: "Online Trigonometry Calculator | Learn Math Class",
    description: "Free online trigonometry calculator for calculating sine, cosine, tangent, and their inverse functions. Convert between degrees and radians, with detailed explanations of trigonometric concepts.",
    keywords: [
      "trigonometry calculator",
      "trigonometric functions calculator",
      "inverse trigonometry functions",
      "inverse trigonometric calculator",
      "sine calculator",
      "cosine calculator",
      "tangent calculator",
      "degree to radian converter",
      "online math tools",
      "trigonometry learning"
    ]
  };
  const { title, description, keywords } = metadata;

  const demoPlayer = (key) => (
    <ToolDemoPlayer
      key={`demo-${key}`}
      script={demos[key].script}
      title={demos[key].title}
      label={`Demo: ${demos[key].title}`}
      scale={0.5}
      minHeight={476}
      renderText={processContent}
    >
      <CalculatorSwitcher standardExplanations={explanations} inverseExplanations={inverseTrigoExplanations} scale={'1'}/>
    </ToolDemoPlayer>
  );

  const genericSections = [
    { id: 'switching-between-the-three-calculators', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('switching-between-the-three-calculators'), sectionsContent.obj1.content] },
    { id: 'entering-the-angle-and-its-units', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('entering-the-angle-and-its-units'), sectionsContent.obj2.content] },
    { id: 'choosing-the-precision', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('choosing-the-precision'), sectionsContent.obj3.content] },
    { id: 'calculating-and-reading-the-table', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('calculating-and-reading-the-table'), sectionsContent.obj4.content] },
    { id: 'the-function-headers-and-the-explanation-panel', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('the-function-headers-and-the-explanation-panel'), sectionsContent.obj5.content] },
    { id: 'using-the-inverse-calculator', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [demoPlayer('using-the-inverse-calculator'), sectionsContent.obj6.content] },
    { id: 'reset-and-messages', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [demoPlayer('reset-and-messages'), sectionsContent.obj7.content] },
    { id: 'the-six-trigonometric-functions', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
    { id: 'sine', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
    { id: 'cosine', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
    { id: 'tangent', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
    { id: 'cosecant', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [sectionsContent.obj12.content] },
    { id: 'secant', title: sectionsContent.obj13.title, link: sectionsContent.obj13.link, content: [sectionsContent.obj13.content] },
    { id: 'cotangent', title: sectionsContent.obj14.title, link: sectionsContent.obj14.link, content: [sectionsContent.obj14.content] },
    { id: 'degrees-and-radians', title: sectionsContent.obj15.title, link: sectionsContent.obj15.link, content: [sectionsContent.obj15.content] },
    { id: 'the-inverse-functions', title: sectionsContent.obj16.title, link: sectionsContent.obj16.link, content: [sectionsContent.obj16.content] },
    { id: 'arcsine', title: sectionsContent.obj17.title, link: sectionsContent.obj17.link, content: [sectionsContent.obj17.content] },
    { id: 'arccosine', title: sectionsContent.obj18.title, link: sectionsContent.obj18.link, content: [sectionsContent.obj18.content] },
    { id: 'arctangent', title: sectionsContent.obj19.title, link: sectionsContent.obj19.link, content: [sectionsContent.obj19.content] },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/trigonometry-calculator" />
        <meta property="og:site_name" content="Learn Math Class" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/trigonometry-calculator" />

        {/* Schema.org markup for rich snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "${title}",
              "description": "${description}",
              "url": "https://www.learnmathclass.com/calculators/trigonometry-calculator",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web browser"
            }
          `}
        </script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      </Head>

      <style jsx>{`
        .layout-container {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .layout-container {
            grid-template-columns: 1fr;
          }
          .layout-container > div:first-child,
          .layout-container > div:first-child *,
          :global([class*="vertical"]),
          :global([class*="vertical"]) * {
            position: static !important;
          }
        }
      `}</style>

      {/* <GenericNavbar/> */}

      <br/>
      <br/>
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <br/>
      <br/>
      <Breadcrumb/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Trigonometry Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails instructions={detailInstructions} title='How to use Trigonometry Calculator' />
      </div>

      <div className="layout-container">
        <div>
          <br/>
          <VerticalButtonGroup items={navigationGroup} width='250px' theme='lightBlue' isSticky={true} verticalOffset='200px' />
        </div>
        <div>
          <CalculatorSwitcher standardExplanations={explanations} inverseExplanations={inverseTrigoExplanations} scale={'0.9'}/>
        </div>
      </div>
      {/* <div style={{transform:'scale(0.9)'}}>
        <TrigoCalculator explanations={explanations}/>
        </div> */}
        {/* <InverseTrigoCalculator explanations={inverseTrigoExplanations}/> */}
      {/* </CalculatorSwitcher> */}
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
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

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/calculators/trigonometry-calculator" in calculators-mesh-registry.json (same folder): 7 usage sections, each with a demo; 9 panel texts with anchors; 19 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps() {
  // Define all static data
  const metadata = {
    title: "Online Trigonometry Calculator | Learn Math Class",
    description: "Free online trigonometry calculator for calculating sine, cosine, tangent, and their inverse functions. Convert between degrees and radians, with detailed explanations of trigonometric concepts.",
    keywords: [
      "trigonometry calculator",
      "trigonometric functions calculator",
      "inverse trigonometry functions",
      "inverse trigonometric calculator",
      "sine calculator",
      "cosine calculator",
      "tangent calculator",
      "degree to radian converter",
      "online math tools",
      "trigonometry learning"
    ]
  };

  const navigationGroup = [
    {
      title: 'Other Calculators',
      items: [
        { title: 'Exponent Calculator', link: '/calculators/exponent-calculator' },
        { title: 'Root Calculator', link: '/calculators/root-calculator' },
        { title: 'Logarithm Calculator', link: '/calculators/log-calculator' },
        { title: 'Complex Numbers Calculator', link: '/calculators/complex-numbers' },
        { title: 'Fraction Calculator', link: '/calculators/fraction-calculator' },
        { title: 'Statistics Calculator', link: '/calculators/statistics-calculator' },
      ],
    },
  ];

  const explanations = {
    sin: {
      description: "Sine is the ratio of the opposite side to the hypotenuse in a right triangle. In the unit circle, it's the y-coordinate of a point on the circle. [Learn more about sine](!#sine) · [All six functions](!#the-six-trigonometric-functions)",
      link: "https://en.wikipedia.org/wiki/Sine"
    },
    cos: {
      description: "Cosine is the ratio of the adjacent side to the hypotenuse in a right triangle. In the unit circle, it's the x-coordinate of a point on the circle. [Learn more about cosine](!#cosine) · [All six functions](!#the-six-trigonometric-functions)",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cosine"
    },
    tan: {
      description: "Tangent is the ratio of sine to cosine (or opposite to adjacent in a right triangle). It represents the slope of the line from the origin to a point on the unit circle. [Learn more about tangent](!#tangent) · [All six functions](!#the-six-trigonometric-functions)",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Tangent"
    },
    csc: {
      description: "Cosecant is the reciprocal of sine. It's the ratio of the hypotenuse to the opposite side in a right triangle (csc = 1/sin). [Learn more about cosecant](!#cosecant) · [All six functions](!#the-six-trigonometric-functions)",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cosecant"
    },
    sec: {
      description: "Secant is the reciprocal of cosine. It's the ratio of the hypotenuse to the adjacent side in a right triangle (sec = 1/cos). [Learn more about secant](!#secant) · [All six functions](!#the-six-trigonometric-functions)",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Secant"
    },
    cot: {
      description: "Cotangent is the reciprocal of tangent. It's the ratio of cosine to sine (or adjacent to opposite in a right triangle, cot = 1/tan). [Learn more about cotangent](!#cotangent) · [All six functions](!#the-six-trigonometric-functions)",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cotangent"
    }
  };

  const inverseTrigoExplanations = {
    arcsin: {
      description: "Arcsine (arcsin) is the inverse function of sine. It returns the angle (in the selected units) whose sine equals the input ratio. The input must be between -1 and 1. The output angle will be in the range [-90°, 90°] for degrees or [-π/2, π/2] for radians. [Learn more about arcsine](!#arcsine) · [All inverse functions](!#the-inverse-functions)",
      link: "https://mathworld.wolfram.com/InverseSine.html"
    },
    arccos: {
      description: "Arccosine (arccos) is the inverse function of cosine. It returns the angle (in the selected units) whose cosine equals the input ratio. The input must be between -1 and 1. The output angle will be in the range [0°, 180°] for degrees or [0, π] for radians. [Learn more about arccosine](!#arccosine) · [All inverse functions](!#the-inverse-functions)",
      link: "https://mathworld.wolfram.com/InverseCosine.html"
    },
    arctan: {
      description: "Arctangent (arctan) is the inverse function of tangent. It returns the angle (in the selected units) whose tangent equals the input ratio. Unlike arcsin and arccos, arctan accepts any real number as input. The output angle will be in the range (-90°, 90°) for degrees or (-π/2, π/2) for radians. [Learn more about arctangent](!#arctangent) · [All inverse functions](!#the-inverse-functions)",
      link: "https://mathworld.wolfram.com/InverseTangent.html"
    }
  };

  const detailInstructions = [
    `Pick a calculator with the three options above the tool: **Standard Trigonometry Functions**, **Inverse Trigonometry Functions** or **Angle Explorer**. [Learn more about switching](!#switching-between-the-three-calculators)`,
    `In the standard calculator, type the angle in the **Angle** box and pick **Degrees** or **Radians** in **Select Units**. [Learn more about the angle](!#entering-the-angle-and-its-units)`,
    `Pick how many decimal places the table shows in **Select Precision Level**; the default is 5. [Learn more about precision](!#choosing-the-precision)`,
    `Click **Calculate**. The table fills with sin, cos, tan, csc, sec and cot of the angle; each value has a copy button. [Learn more about the table](!#calculating-and-reading-the-table)`,
    `Click a blue header of the table, sin to cot, to read that function's explanation in the panel on the right; the text ends with a link to the section below that treats it in full. [Learn more about the panel](!#the-function-headers-and-the-explanation-panel)`,
    `In the inverse calculator, type a **Ratio**, pick the **Angle Unit**, click **Calculate**, and read arcsin, arccos and arctan. [Learn more about the inverse calculator](!#using-the-inverse-calculator)`,
    `Click **Reset** to clear the boxes and the table. A ratio outside -1 to 1 shows a message in the inverse calculator. [Learn more about Reset](!#reset-and-messages)`,
  ];

  const demos = {
    'switching-between-the-three-calculators': {
      title: 'Standard, inverse, angle explorer',
      script: [
        { say: 'PICK Inverse Trigonometry Functions\nA Ratio box and arcsin, arccos, arctan.', at: 'tr' },
        { set: 'input[type=radio][value="inverse"]', value: true },
        { wait: 2200 },
        { say: 'PICK Angle Explorer\nA visual tool for angles.', at: 'tr' },
        { set: 'input[type=radio][value="angle-explorer"]', value: true },
        { wait: 2200 },
        { say: 'PICK Standard Trigonometry Functions\nBack to the Angle box and the six functions.', at: 'tr' },
        { set: 'input[type=radio][value="standard"]', value: true },
        { wait: 2000 },
        { say: 'TYPE 30 as the angle\nDegrees are selected by default.', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '30' },
        { wait: 2200 },
      ],
    },
    'entering-the-angle-and-its-units': {
      title: 'The same angle in degrees and in radians',
      script: [
        { say: 'TYPE 30 as the angle', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '30' },
        { wait: 1800 },
        { say: 'PICK Radians\nThe box now expects radians.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'radians' },
        { wait: 2000 },
        { say: 'TYPE 0.5236\nπ/6 radians, the same angle as 30°.', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '0.5236' },
        { wait: 2200 },
        { say: 'PICK Degrees\nBack to degrees; the number stays until you change it.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'degrees' },
        { wait: 2200 },
      ],
    },
    'choosing-the-precision': {
      title: 'Decimal places',
      script: [
        { say: 'TYPE 45 as the angle', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '45' },
        { wait: 1600 },
        { say: 'PICK 2 Decimal Places\nValues will show as 0.71.', at: 'tr' },
        { set: { css: 'select', nth: 1 }, value: '2' },
        { wait: 2000 },
        { say: 'PICK 8 Decimal Places\nValues will show as 0.70710678.', at: 'tr' },
        { set: { css: 'select', nth: 1 }, value: '8' },
        { wait: 2000 },
        { say: 'PICK 5 Decimal Places\nThe default: 0.70711.', at: 'tr' },
        { set: { css: 'select', nth: 1 }, value: '5' },
        { wait: 2200 },
      ],
    },
    'calculating-and-reading-the-table': {
      title: 'What Calculate fills in',
      script: [
        { say: 'TYPE 30 as the angle', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '30' },
        { wait: 1600 },
        { say: 'READ Calculate\nIt asks the server and fills the table:\nsin 0.50000, cos 0.86603, tan 0.57735. Not clicked here.', at: 'bl' },
        { move: { button: 'Calculate' }, ms: 900 },
        { wait: 2800 },
        { say: 'CLICK the tan header\nThe panel explains tangent, undefined at 90°.', at: 'tr' },
        { click: { css: 'th', nth: 2 } },
        { wait: 2200 },
        { say: 'CLICK the cot header\nThe panel explains cotangent, undefined at 0°.', at: 'tr' },
        { click: { css: 'th', nth: 5 } },
        { wait: 2400 },
      ],
    },
    'the-function-headers-and-the-explanation-panel': {
      title: 'One explanation per function',
      script: [
        { say: 'CLICK the cos header\nCosine: adjacent over hypotenuse.', at: 'tr' },
        { click: { css: 'th', nth: 1 } },
        { wait: 2200 },
        { say: 'CLICK the csc header\nCosecant: 1 / sin.', at: 'tr' },
        { click: { css: 'th', nth: 3 } },
        { wait: 2200 },
        { say: 'CLICK the sec header\nSecant: 1 / cos.', at: 'tr' },
        { click: { css: 'th', nth: 4 } },
        { wait: 2200 },
        { say: 'CLICK the cot header\nCotangent: 1 / tan.\nEach text ends with a link to its section.', at: 'tr' },
        { click: { css: 'th', nth: 5 } },
        { wait: 2600 },
      ],
    },
    'using-the-inverse-calculator': {
      title: 'Arcsine, arccosine and arctangent of a ratio',
      script: [
        { say: 'PICK Inverse Trigonometry Functions', at: 'tr' },
        { set: 'input[type=radio][value="inverse"]', value: true },
        { wait: 1800 },
        { say: 'TYPE 0.5 as the ratio', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '0.5' },
        { wait: 1600 },
        { say: 'CLICK Calculate\nRadians: arcsin 0.52360, arccos 1.04720, arctan 0.46365.', at: 'tr' },
        { click: { button: 'Calculate' } },
        { wait: 2600 },
        { say: 'PICK Degrees and CLICK Calculate\narcsin 30, arccos 60, arctan 26.56505.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'degrees' },
        { click: { button: 'Calculate' } },
        { wait: 2600 },
        { say: 'TYPE 2 and CLICK Calculate\nOutside -1 to 1: arcsin and arccos undefined, arctan 63.43495.', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '2' },
        { click: { button: 'Calculate' } },
        { wait: 2800 },
      ],
    },
    'reset-and-messages': {
      title: 'A message, then Reset',
      script: [
        { say: 'PICK Inverse Trigonometry Functions', at: 'tr' },
        { set: 'input[type=radio][value="inverse"]', value: true },
        { wait: 1800 },
        { say: 'TYPE 1.5 as the ratio', at: 'tr' },
        { set: { css: 'input:not([type=radio])', nth: 0 }, value: '1.5' },
        { wait: 1600 },
        { say: 'CLICK Calculate\nMessage: Value outside [-1,1] range.\narctan is still computed: 0.98279.', at: 'tr' },
        { click: { button: 'Calculate' } },
        { wait: 2600 },
        { say: 'CLICK Reset\nRatio, table and message cleared; arcsin selected again.', at: 'tr' },
        { click: { button: 'Reset' } },
        { wait: 2400 },
      ],
    },
  };

  const sectionsContent = {
    obj1: {
      title: `Switching Between the Three Calculators`,
      content: `Three options sit above the tool. **Standard Trigonometry Functions** takes an angle and returns its sine, cosine, tangent, cosecant, secant and cotangent. **Inverse Trigonometry Functions** takes a ratio and returns the angle whose sine, cosine or tangent it is. **Angle Explorer** is a visual tool for looking at an angle in standard position; it has no explanation panel.

Click an option and the tool below changes at once. Each calculator keeps its own numbers while you look at another, so you can switch back without retyping. The standard calculator opens first, with the Angle box empty and **Degrees** selected, so typing $30$ gives the angle $30^\\circ$.

The two calculators share the same layout: the inputs and the buttons on the left, the explanation panel on the right, and the table of results underneath with a copy button beside every value.

What each function means, and how the six are related, is explained in [the six trigonometric functions](!#the-six-trigonometric-functions).`,
      before: ``, after: ``, link: '',
    },
    obj2: {
      title: `Entering the Angle and Its Units`,
      content: `Type the angle in the **Angle** box of the standard calculator. The box's placeholder names the unit in force: **Enter Angle in Degrees** or **Enter Angle in Radians**. Whole numbers, decimals and negative angles all work, and angles beyond one turn are fine: $390^\\circ$ gives the same values as $30^\\circ$.

Pick the unit in **Select Units**. The same angle has two names: $30^\\circ$ in degrees is $\\pi / 6 \\approx 0.5236$ in radians, since a full turn is $360^\\circ$ or $2\\pi$. Changing the unit does not convert the number already in the box, so after switching to radians type the radian value yourself.

A mismatch is the usual source of surprising results: $30$ radians is almost five turns, and its sine is $-0.98803$, not $0.5$. The placeholder tells you which unit the calculator will assume.

How degrees and radians are defined and converted is explained in [degrees and radians](!#degrees-and-radians).`,
      before: ``, after: ``, link: '',
    },
    obj3: {
      title: `Choosing the Precision`,
      content: `**Select Precision Level** sets how many decimal places the table shows. The default is $5$, which prints $\\sin 45^\\circ$ as $0.70711$; with $2$ places it reads $0.71$ and with $8$ places $0.70710678$. The choice affects only the display, not the calculation, and it applies to all six values at once.

Whole-number results print without decimals: $\\sin 30^\\circ = 0.50000$ at five places is really $\\frac{1}{2}$, and $\\csc 30^\\circ$ prints as $2$. A value that is undefined, such as $\\tan 90^\\circ$, prints as **Undefined** whatever the precision.

Use fewer places when you want to recognise an exact value and more when the result feeds another calculation; rounding too early is the usual cause of a wrong final digit. The same setting exists in the inverse calculator.

Which values are exact at the common angles is shown in [the six trigonometric functions](!#the-six-trigonometric-functions).`,
      before: ``, after: ``, link: '',
    },
    obj4: {
      title: `Calculating and Reading the Table`,
      content: `Click **Calculate** and the standard calculator sends the angle and the unit to the server, which returns the six values; the table under the form fills with them. For $30^\\circ$ it shows $\\sin = 0.50000$, $\\cos = 0.86603$, $\\tan = 0.57735$, $\\csc = 2$, $\\sec = 1.15470$ and $\\cot = 1.73205$. Until you click, every cell shows three dots. The demo above stops at the button, because the request would go out every time the demo loops.

A value that does not exist prints as **Undefined**: $\\tan 90^\\circ$ and $\\sec 90^\\circ$, because $\\cos 90^\\circ = 0$, or $\\csc 0^\\circ$ and $\\cot 0^\\circ$, because $\\sin 0^\\circ = 0$. If the server cannot be reached, the message **Failed to fetch data** appears instead of values.

Every cell has a copy button that puts the value on the clipboard. The headers of the table are also buttons: click one to read that function's explanation, as described in the next section.

Why some values are undefined is explained in [tangent](!#tangent) and [cotangent](!#cotangent).`,
      before: ``, after: ``, link: '',
    },
    obj5: {
      title: `The Function Headers and the Explanation Panel`,
      content: `The six headers of the table, **sin**, **cos**, **tan**, **csc**, **sec** and **cot**, are blue and clickable; hovering one shows the hint *Click for Explanation*. Click a header and the panel on the right shows the function's name in capitals, a short definition with the right-triangle ratio and the unit-circle reading, and a link to an external reference. Each definition ends with a link to the section on this page that treats the function in full.

The panel shows sine when the page opens and after Reset. Clicking a header does not change the numbers in the table; it only changes the explanation, so you can read all six for one angle.

The inverse calculator works the same way: its headers **arcsin**, **arccos** and **arctan** open the explanations of the inverse functions, with the input range and the output range of each.

The reciprocal relations the explanations mention, $\\csc = 1 / \\sin$, $\\sec = 1 / \\cos$ and $\\cot = 1 / \\tan$, are set out in [cosecant](!#cosecant), [secant](!#secant) and [cotangent](!#cotangent).`,
      before: ``, after: ``, link: '',
    },
    obj6: {
      title: `Using the Inverse Calculator`,
      content: `Pick **Inverse Trigonometry Functions** to go from a ratio back to an angle. Type the ratio in the **Ratio** box, choose **Radians** or **Degrees** in **Angle Unit**, set the precision, and click **Calculate**. The table shows arcsin, arccos and arctan of the ratio, computed on this page without a server.

For the ratio $0.5$ in radians the table reads arcsin $0.52360$, arccos $1.04720$ and arctan $0.46365$; in degrees, $30$, $60$ and $26.56505$. Arcsine and arccosine accept ratios from $-1$ to $1$ only, because a sine or cosine never leaves that range; arctangent accepts any number, since a tangent can be anything.

Type $2$ and click Calculate: the message **Value outside [-1,1] range: arcsin/arccos undefined, arctan calculated** appears, the first two cells read **Undefined**, and arctan $2$ is still given, $63.43495^\\circ$.

Which angle the calculator returns when several would fit is explained in [the inverse functions](!#the-inverse-functions).`,
      before: ``, after: ``, link: '',
    },
    obj7: {
      title: `Reset and Messages`,
      content: `Each calculator has a **Reset** button next to **Calculate**. In the standard calculator it empties the Angle box, returns the unit to **Degrees** and the precision to $5$ places, clears the table back to dots and sets the panel to sine. In the inverse calculator it empties the Ratio box, clears the table and the message, and sets the panel to arcsine.

Messages appear in red under the form. The inverse calculator warns when the ratio lies outside $-1$ to $1$: arcsine and arccosine are undefined there, arctangent is still computed, for example arctan $1.5 = 0.98279$ radians. The standard calculator reports **Failed to fetch data** when the server does not answer; try again in a moment.

In the standard calculator, Reset also submits the form, so clicking it sends an empty request to the server; the table clears either way. The demo above therefore shows Reset on the inverse calculator.

The range rule behind the inverse calculator's message is explained in [arcsine](!#arcsine) and [arccosine](!#arccosine).`,
      before: ``, after: ``, link: '',
    },
    obj8: {
      title: `The Six Trigonometric Functions`,
      content: `In a right triangle with an acute angle $\\theta$, the three basic functions are ratios of sides: $\\sin\\theta$ is opposite over hypotenuse, $\\cos\\theta$ adjacent over hypotenuse, and $\\tan\\theta$ opposite over adjacent. The three others are their reciprocals: $\\csc\\theta = 1 / \\sin\\theta$, $\\sec\\theta = 1 / \\cos\\theta$ and $\\cot\\theta = 1 / \\tan\\theta$.

On the unit circle the definitions extend to every angle: the point at angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$, and $\\tan\\theta$ is the slope of the radius to it. That is how the calculator evaluates $\\sin 150^\\circ = 0.5$ or $\\cos 200^\\circ = -0.93969$, angles that fit in no right triangle.

A few angles have exact values worth knowing: at $30^\\circ$, $\\sin = \\frac{1}{2}$, $\\cos = \\frac{\\sqrt{3}}{2} \\approx 0.86603$, $\\tan = \\frac{1}{\\sqrt{3}} \\approx 0.57735$; at $45^\\circ$, $\\sin = \\cos = \\frac{\\sqrt{2}}{2} \\approx 0.70711$ and $\\tan = 1$. The calculator's six headers are explained one by one in [sine](!#sine), [cosine](!#cosine), [tangent](!#tangent), [cosecant](!#cosecant), [secant](!#secant) and [cotangent](!#cotangent).

See [defining sine, cosine, and tangent](!/trigonometry/right-triangle#2), [evaluating trigonometric functions at any angle](!/trigonometry/functions#9) and [the six functions at a glance](!/trigonometry/functions#11).`,
      before: ``, after: ``, link: '',
    },
    obj9: {
      title: `Sine`,
      content: `The sine of an angle is the ratio of the opposite side to the hypotenuse in a right triangle, and on the unit circle the $y$-coordinate of the point at that angle. It runs from $-1$ to $1$: $\\sin 0^\\circ = 0$, $\\sin 30^\\circ = \\frac{1}{2}$, $\\sin 90^\\circ = 1$, $\\sin 150^\\circ = \\frac{1}{2}$ again, and $\\sin 270^\\circ = -1$.

Sine repeats every $360^\\circ$, or $2\\pi$ radians, and is odd: $\\sin(-\\theta) = -\\sin\\theta$. Its graph is the familiar wave, which is why sine describes oscillations: sound, alternating current, tides. Together with cosine it satisfies $\\sin^2\\theta + \\cos^2\\theta = 1$.

The common mistake is to expect $\\sin 30$ to be $0.5$ when the calculator is set to radians: $30$ radians is almost five turns, and $\\sin 30 \\approx -0.98803$. Check the unit before reading the table.

See [the sine function](!/trigonometry/functions#1) and [graph of the sine function](!/trigonometry/graphs#1).`,
      before: ``, after: ``, link: '',
    },
    obj10: {
      title: `Cosine`,
      content: `The cosine of an angle is the ratio of the adjacent side to the hypotenuse, and on the unit circle the $x$-coordinate of the point at that angle. It also runs from $-1$ to $1$: $\\cos 0^\\circ = 1$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\cos 90^\\circ = 0$, $\\cos 180^\\circ = -1$.

Cosine is the sine shifted by a quarter turn, $\\cos\\theta = \\sin(90^\\circ - \\theta)$, which is the cofunction relation; it is even, $\\cos(-\\theta) = \\cos\\theta$, and repeats every $360^\\circ$. Its zeros at $90^\\circ$ and $270^\\circ$ are where tangent and secant become undefined.

Cosine appears in the law of cosines, which generalises Pythagoras to any triangle, and in the dot product of vectors. The common mistake is to mix up which side is adjacent: it is the side that touches the angle and is not the hypotenuse.

See [the cosine function](!/trigonometry/functions#2) and [cofunction relationships](!/trigonometry/right-triangle#8).`,
      before: ``, after: ``, link: '',
    },
    obj11: {
      title: `Tangent`,
      content: `The tangent of an angle is the ratio of the opposite side to the adjacent side, equal to $\\sin\\theta / \\cos\\theta$. On the unit circle it is the slope of the radius to the point at that angle, so it can take any real value: $\\tan 0^\\circ = 0$, $\\tan 30^\\circ \\approx 0.57735$, $\\tan 45^\\circ = 1$, $\\tan 60^\\circ \\approx 1.73205$.

Where the cosine is zero the tangent is undefined, at $90^\\circ$, $270^\\circ$ and every half turn beyond; the calculator prints **Undefined** there. Near those angles the tangent grows without bound, which gives its graph the vertical asymptotes. Tangent repeats every $180^\\circ$, half the period of sine and cosine, and is odd.

Tangent is the function of slopes and gradients: a road rising $1$ metre over $10$ metres has an angle whose tangent is $0.1$. The common mistake is to round $\\tan 89.9^\\circ$ to infinity; it is large, about $572.96$, but defined.

See [the tangent function](!/trigonometry/functions#3) and [graph of the tangent function](!/trigonometry/graphs#3).`,
      before: ``, after: ``, link: '',
    },
    obj12: {
      title: `Cosecant`,
      content: `The cosecant is the reciprocal of the sine: $\\csc\\theta = 1 / \\sin\\theta$, the hypotenuse over the opposite side. Since $|\\sin\\theta| \\le 1$, the cosecant is never between $-1$ and $1$: $\\csc 30^\\circ = 2$, $\\csc 90^\\circ = 1$, $\\csc 150^\\circ = 2$.

It is undefined wherever the sine is zero, at $0^\\circ$, $180^\\circ$ and every half turn, and the calculator prints **Undefined** there. It shares the period $360^\\circ$ and the odd symmetry of the sine, and it is large exactly where the sine is small.

The cosecant appears mainly in identities and in calculus, where $1 + \\cot^2\\theta = \\csc^2\\theta$ is the companion of the Pythagorean identity. The common mistake is to confuse the cosecant with the inverse sine: $\\csc\\theta$ is a reciprocal of a value, $\\arcsin x$ is an angle; $\\csc 30^\\circ = 2$ while $\\arcsin 0.5 = 30^\\circ$.

See [the cosecant function](!/trigonometry/functions#4) and [the reciprocal functions](!/trigonometry/right-triangle#3).`,
      before: ``, after: ``, link: '',
    },
    obj13: {
      title: `Secant`,
      content: `The secant is the reciprocal of the cosine: $\\sec\\theta = 1 / \\cos\\theta$, the hypotenuse over the adjacent side. It is never between $-1$ and $1$: $\\sec 0^\\circ = 1$, $\\sec 30^\\circ \\approx 1.15470$, $\\sec 60^\\circ = 2$, $\\sec 180^\\circ = -1$.

It is undefined wherever the cosine is zero, at $90^\\circ$ and $270^\\circ$, where the calculator prints **Undefined**. Like the cosine it is even and repeats every $360^\\circ$. The identity $1 + \\tan^2\\theta = \\sec^2\\theta$ follows from dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$.

The secant names the length of a line that cuts a circle, which is where the word comes from. The common mistake is the same as for the cosecant: $\\sec\\theta$ is not $\\arccos$, the inverse cosine; $\\sec 60^\\circ = 2$ while $\\arccos 0.5 = 60^\\circ$.

See [the secant function](!/trigonometry/functions#5) and [reciprocal and quotient relationships](!/trigonometry/functions#7).`,
      before: ``, after: ``, link: '',
    },
    obj14: {
      title: `Cotangent`,
      content: `The cotangent is the reciprocal of the tangent: $\\cot\\theta = 1 / \\tan\\theta = \\cos\\theta / \\sin\\theta$, the adjacent side over the opposite side. $\\cot 30^\\circ \\approx 1.73205$, $\\cot 45^\\circ = 1$, $\\cot 60^\\circ \\approx 0.57735$, so the cotangent of an angle is the tangent of its complement.

It is undefined where the sine is zero, at $0^\\circ$ and $180^\\circ$, the opposite of the tangent's gaps at $90^\\circ$ and $270^\\circ$; the calculator prints **Undefined** at both kinds of angle for the right function. At $90^\\circ$ the cotangent is $0$ although the tangent is undefined there. It repeats every $180^\\circ$ and is odd.

The common mistake is to compute $1 / \\tan\\theta$ at an angle where the tangent is undefined and conclude the cotangent is too: $\\cot 90^\\circ = \\cos 90^\\circ / \\sin 90^\\circ = 0 / 1 = 0$. Use the cosine-over-sine form at those angles.

See [the cotangent function](!/trigonometry/functions#6) and [reciprocal and quotient relationships](!/trigonometry/functions#7).`,
      before: ``, after: ``, link: '',
    },
    obj15: {
      title: `Degrees and Radians`,
      content: `A degree is $\\frac{1}{360}$ of a full turn. A radian is the angle whose arc on a circle equals the radius, so a full turn is $2\\pi$ radians and $180^\\circ = \\pi$ radians. To convert, multiply degrees by $\\frac{\\pi}{180}$ or radians by $\\frac{180}{\\pi}$: $30^\\circ = \\frac{\\pi}{6} \\approx 0.5236$ and $1$ radian $\\approx 57.2958^\\circ$.

The calculator computes with whichever unit **Select Units** shows, and the inverse calculator returns its angles in the unit of **Angle Unit**. Degrees are the everyday unit; radians are the natural one in calculus, where $\\frac{d}{dx}\\sin x = \\cos x$ holds only for $x$ in radians, and in formulas such as the arc length $s = r\\theta$.

The common mistake is to type a degree value while radians are selected, or the reverse: $\\sin 30$ radians is about $-0.98803$, nothing like $\\sin 30^\\circ = 0.5$. The placeholder of the Angle box names the unit in force.

See [degree measurement](!/trigonometry/degrees-radians#1), [radian measurement](!/trigonometry/degrees-radians#2) and [converting between degrees and radians](!/trigonometry/degrees-radians#3).`,
      before: ``, after: ``, link: '',
    },
    obj16: {
      title: `The Inverse Functions`,
      content: `The inverse functions run the ratios backwards: $\\arcsin x$ is the angle whose sine is $x$, $\\arccos x$ the angle whose cosine is $x$, $\\arctan x$ the angle whose tangent is $x$. They are also written $\\sin^{-1}$, $\\cos^{-1}$ and $\\tan^{-1}$, which does not mean $1 / \\sin$; that is the cosecant.

Because the sine of many angles is $0.5$, the inverse must choose one: each function returns the angle in a fixed principal range. Arcsine and arctangent return angles from $-90^\\circ$ to $90^\\circ$, arccosine from $0^\\circ$ to $180^\\circ$. So $\\arcsin 0.5 = 30^\\circ$, not $150^\\circ$, and $\\arccos 0.5 = 60^\\circ$. The input of arcsine and arccosine must lie between $-1$ and $1$; arctangent takes any number.

The calculator's three headers are explained in [arcsine](!#arcsine), [arccosine](!#arccosine) and [arctangent](!#arctangent). To find every angle with a given sine, take the principal value and add the symmetric partner and multiples of a full turn.

See [why restriction is necessary](!/trigonometry/inverse-functions#1), [evaluating inverse trigonometric functions](!/trigonometry/inverse-functions#7) and [summary of the six inverse trigonometric functions](!/trigonometry/inverse-functions#10).`,
      before: ``, after: ``, link: '',
    },
    obj17: {
      title: `Arcsine`,
      content: `Arcsine returns the angle between $-90^\\circ$ and $90^\\circ$ whose sine is the input: $\\arcsin 0.5 = 30^\\circ$ or $\\frac{\\pi}{6} \\approx 0.52360$ radians, $\\arcsin 1 = 90^\\circ$, $\\arcsin(-1) = -90^\\circ$, $\\arcsin 0 = 0$.

The input must lie between $-1$ and $1$, because no angle has a sine outside that range; the calculator reports a ratio such as $2$ as undefined. Arcsine is odd and increasing, and $\\sin(\\arcsin x) = x$ for every allowed $x$, while $\\arcsin(\\sin\\theta) = \\theta$ only for $\\theta$ in the principal range: $\\arcsin(\\sin 150^\\circ) = 30^\\circ$.

Arcsine solves for an angle from a ratio of sides: a ramp that rises $1$ metre over a $4$-metre slope has angle $\\arcsin 0.25 \\approx 14.48^\\circ$. The common mistake is to read $\\sin^{-1} x$ as $1 / \\sin x$.

See [the arcsine function](!/trigonometry/inverse-functions#2) and [solving basic sine equations](!/trigonometry/equations#2).`,
      before: ``, after: ``, link: '',
    },
    obj18: {
      title: `Arccosine`,
      content: `Arccosine returns the angle between $0^\\circ$ and $180^\\circ$ whose cosine is the input: $\\arccos 0.5 = 60^\\circ$ or $\\frac{\\pi}{3} \\approx 1.04720$ radians, $\\arccos 1 = 0$, $\\arccos 0 = 90^\\circ$, $\\arccos(-1) = 180^\\circ$.

As with arcsine, the input must lie between $-1$ and $1$. Arccosine is decreasing: a larger cosine means a smaller angle. It is linked to arcsine by $\\arccos x = 90^\\circ - \\arcsin x$, so $\\arccos 0.5 = 90^\\circ - 30^\\circ = 60^\\circ$, and $\\arccos(-x) = 180^\\circ - \\arccos x$.

Arccosine gives the angle between two vectors from their dot product and the angles of a triangle from its sides, by the law of cosines. The common mistake is to expect a negative result for a negative input: $\\arccos(-0.5) = 120^\\circ$, a positive angle in the second quadrant.

See [the arccosine function](!/trigonometry/inverse-functions#3) and [solving basic cosine equations](!/trigonometry/equations#3).`,
      before: ``, after: ``, link: '',
    },
    obj19: {
      title: `Arctangent`,
      content: `Arctangent returns the angle between $-90^\\circ$ and $90^\\circ$ whose tangent is the input: $\\arctan 1 = 45^\\circ$ or $\\frac{\\pi}{4} \\approx 0.78540$ radians, $\\arctan 0.5 \\approx 26.56505^\\circ$, $\\arctan 2 \\approx 63.43495^\\circ$, $\\arctan 0 = 0$.

Any real number is a valid input, because a tangent can be any real number; that is why the calculator still returns arctan when a ratio outside $-1$ to $1$ makes arcsine and arccosine undefined. As the input grows the angle approaches $90^\\circ$ without reaching it: $\\arctan 1000 \\approx 89.94^\\circ$. Arctangent is odd and increasing.

Arctangent turns a slope into an angle: a gradient of $0.1$ is an angle of $\\arctan 0.1 \\approx 5.71^\\circ$. The common mistake is to use it for a direction without checking the quadrant: the points $(1, 1)$ and $(-1, -1)$ both have slope $1$, but only the first lies at $45^\\circ$.

See [the arctangent function](!/trigonometry/inverse-functions#4) and [solving basic tangent equations](!/trigonometry/equations#4).`,
      before: ``, after: ``, link: '',
    },
  };

  const faqQuestions = {
    obj1: { question: 'How do I calculate sine, cosine and tangent of an angle?', answer: 'Pick Standard Trigonometry Functions, type the angle in the Angle box, choose Degrees or Radians, and click Calculate. The table shows sin, cos, tan, csc, sec and cot of the angle. For 30 degrees: sin 0.5, cos 0.86603, tan 0.57735.' },
    obj2: { question: 'How do I find an angle from a sine, cosine or tangent value?', answer: 'Pick Inverse Trigonometry Functions, type the ratio, choose the angle unit and click Calculate. The table shows arcsin, arccos and arctan. For 0.5 the angles are 30, 60 and 26.56505 degrees. Arcsin and arccos need a ratio between -1 and 1.' },
    obj3: { question: 'Why does tan 90 show Undefined?', answer: 'Because tan equals sin divided by cos, and cos 90 degrees is 0; dividing by zero is undefined. The same happens to sec at 90 degrees and to csc and cot at 0 degrees, where sin is 0.' },
    obj4: { question: 'What is the difference between degrees and radians?', answer: 'A full turn is 360 degrees or 2 pi radians, so 180 degrees equal pi radians. To convert, multiply degrees by pi/180 or radians by 180/pi. 30 degrees is pi/6, about 0.5236 radians. Select the unit the calculator should assume before typing the angle.' },
    obj5: { question: 'Why is the result of sin 30 not 0.5?', answer: 'Most likely the unit is set to Radians: 30 radians is almost five full turns and its sine is about -0.98803. Switch Select Units to Degrees and calculate again.' },
  };

  const pageUrl = '/calculators/trigonometry-calculator';
  const pageName = 'Trigonometry Calculator';
  const schemas = {
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://www.learnmathclass.com/calculators' },
        { '@type': 'ListItem', position: 3, name: pageName, item: `https://www.learnmathclass.com${pageUrl}` },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(faqQuestions).map((key) => ({
        '@type': 'Question',
        name: faqQuestions[key].question,
        acceptedAnswer: { '@type': 'Answer', text: faqQuestions[key].answer },
      })),
    },
  };

  return {
    props: {
      explanations,
      inverseTrigoExplanations,
      metadata,
      navigationGroup,
      detailInstructions,
      demos,
      sectionsContent,
      faqQuestions,
      schemas,
    },
    revalidate: 3600 // Revalidate every hour
  }
}
