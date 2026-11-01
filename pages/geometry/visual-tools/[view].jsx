import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import ProofPlayerWrapper from '@/app/components/geometry/proof-player/ProofPlayerWrapper'
import ProofPlayerMockup from '@/app/components/geometry/proof-player/ProofPlayerMockup'
import HowToUseSection from '@/app/components/how-to-use/HowToUseSection'
import proofDiagrams from '@/app/components/geometry/proof-player/proofDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'triangle-angle-sum' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'triangle-angle-sum': {
      proofKey: 'angleSum',
      title: 'Triangle Angle Sum Proof | Interactive Step-by-Step Visualizer',
      description: 'Watch the proof that the angles of a triangle add up to 180° step by step, then drag the vertices to see it hold for every triangle.',
      h1Title: 'Triangle Angle Sum Theorem',
      url: '/geometry/visual-tools/triangle-angle-sum',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="20" x2="72" y2="20" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><polygon points="14,58 66,58 40,20" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><path d="M 22 58 A 8 8 0 0 0 18.5 51.4 L 14 58 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 58 58 A 8 8 0 0 1 61.5 51.4 L 66 58 Z" fill="#85B7EB" fill-opacity="0.9" stroke="#0C447C" stroke-width="0.8"/><path d="M 35.5 26.6 A 8 8 0 0 0 44.5 26.6 L 40 20 Z" fill="#E6F1FB" fill-opacity="0.9" stroke="#185FA5" stroke-width="0.8"/><path d="M 32 20 A 8 8 0 0 0 35.5 26.6 L 40 20 Z" fill="#FAC775" fill-opacity="0.85" stroke="#854F0B" stroke-width="0.8"/><path d="M 44.5 26.6 A 8 8 0 0 0 48 20 L 40 20 Z" fill="#85B7EB" fill-opacity="0.9" stroke="#0C447C" stroke-width="0.8"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#945; + &#946; + &#947; = 180&#176;</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'Triangle Angle Sum Proof',
      keywords: [
        'triangle angle sum',
        'triangle angle sum theorem',
        'angles of a triangle add up to 180',
        'triangle angle sum proof',
        'why do angles in a triangle add up to 180',
        'euclid I.32',
        'alternate angles proof',
        'parallel line proof triangle',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the triangle to see that nothing in the argument depends on its shape. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `For every triangle $ABC$ with interior angles $\\alpha$ at $A$, $\\beta$ at $B$ and $\\gamma$ at $C$:

$$\\alpha + \\beta + \\gamma = 180°$$

The claim is about all triangles at once. The proof never uses a measurement, which is why dragging the vertices cannot break it.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Parallel Line',
          content: `Through $C$ draw the line $DE$ parallel to $AB$. A parallel through $C$ can be constructed without any extra assumption; the parallel postulate adds that it is the only one. The next step, equal alternate angles, depends on that uniqueness. In geometries where the postulate fails, such as on a sphere, the angle sum of a triangle is not $180°$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Alternate Angles',
          content: `$AC$ crosses both parallel lines, so the angle it makes with $DE$ at $C$ equals the angle it makes with $AB$ at $A$: $\\angle ACD = \\alpha$. The same holds for $BC$: $\\angle BCE = \\beta$.

Each original angle is copied to $C$, on its own side of $\\gamma$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Why It Holds',
          content: `At $C$ the angles $\\alpha$, $\\gamma$ and $\\beta$ sit side by side along the straight line $DE$ with no gaps and no overlap. A straight angle measures $180°$, so $\\alpha + \\gamma + \\beta = 180°$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Consequences',
          content: `• Each angle of an equilateral triangle is $60°$
• A triangle has at most one right or obtuse angle
• The two acute angles of a right triangle are complementary
• An exterior angle equals the sum of the two remote interior angles`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'Why do the angles of a triangle add up to 180 degrees?',
          answer: 'Draw the line through one vertex parallel to the opposite side. The other two angles reappear at that vertex as alternate angles, and together with the third angle they fill a straight line, which measures 180 degrees.'
        },
        obj2: {
          question: 'Does the triangle angle sum depend on the shape of the triangle?',
          answer: 'No. The proof uses only the parallel line and alternate angles, never a measurement, so it holds for acute, right and obtuse triangles alike.'
        },
        obj3: {
          question: 'Is the angle sum of a triangle always 180 degrees?',
          answer: 'In Euclidean (flat) geometry, yes. The proof relies on the parallel postulate; on a sphere the angle sum exceeds 180 degrees, and in hyperbolic geometry it is less.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Triangle Angle Sum Proof Visualizer",
          "description": "Step-by-step interactive proof that the angles of a triangle sum to 180 degrees, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/triangle-angle-sum",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "Triangle Angle Sum", "item": "https://www.learnmathclass.com/geometry/visual-tools/triangle-angle-sum" }
          ]
        }
      }
    },
  };

  const config = viewConfig[view];

  /* ---- frozen-state demonstration units (Line 1) ----
     proofDiagrams renders the live ProofCanvas to static SVG, one still per
     proof phase (the last scene of that phase), keyed `<proofKey>-<phase>`. */
  const unit = (svg, caption, text) => demoUnitFrame({ svg, caption, text })
  const D = proofDiagrams

  const unitsByView = {
    'triangle-angle-sum': {
      given: unit(D['angleSum-given'], 'Opening scene, frozen',
        'Any triangle with its three interior angles marked α, β, γ.'),
      construct: unit(D['angleSum-construct'], 'Parallel line, frozen',
        'Line DE through C, parallel to AB.'),
      alternate: unit(D['angleSum-alternate'], 'Both alternate pairs, frozen',
        'The angles at A and B reappear at C, one on each side of γ.'),
      conclude: unit(D['angleSum-conclude'], 'Straight angle, frozen',
        'α, γ and β fill the straight angle DCE: 180°.'),
    },
  }

  // [sectionsKey, anchorId, unitKey?] — unitKey = proof phase
  const orderByView = {
    'triangle-angle-sum': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-parallel-line', 'construct'],
      ['obj3', 'alternate-angles', 'alternate'],
      ['obj4', 'why-it-holds', 'conclude'],
      ['obj5', 'consequences'],
    ],
  }

  /* ---- per-phase scene notes (Line 1) ----
     Keyed by view, then by proof phase. The player renders scene text as raw
     HTML (not processContent), so links are plain <a href="#slug"> anchors,
     appended to the formula of every scene with that phase. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569;font-family:Arial,sans-serif">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a></div>`

  const EXPLANATIONS = {
    'triangle-angle-sum': {
      given: note('The claim is about every triangle, not this one.', 'the-statement', 'Learn more about the statement'),
      construct: note('The parallel postulate makes DE the only parallel to AB through C.', 'the-parallel-line', 'Learn more about the construction'),
      alternate: note('This is where the parallel postulate is used: alternate angles are equal only because DE is the parallel to AB.', 'alternate-angles', 'Learn more about alternate angles'),
      conclude: note('Drag a vertex: the readout stays at 180°.', 'why-it-holds', 'Learn more about why it holds'),
    },
  }

  const stateUnits = unitsByView[view] || {}
  const sectionOrder = orderByView[view] || []
  const explanations = EXPLANATIONS[view] || null

  const sectionsContent = config.sectionsContent;
  const faqQuestions = config.faqQuestions;
  const schemas = {
    ...config.schemas,
    webApplication: { ...config.schemas.webApplication, keywords: config.keywords.join(", ") },
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
  };

  // How-to instructions and animated demos (ToolDemoPlayer v3), keyed by view.
  // No demo scripts exist yet; a view's demos go in DEMOS keyed by section
  // anchor, and render at the top of that section.
  const INSTRUCTIONS = {
    'triangle-angle-sum': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original triangle. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$ at any step; the readout under the canvas keeps $\\alpha + \\beta + \\gamma = 180°$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each angle\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
  }

  const DEMOS = {}

  // Long-form how-to-use (HowToUseSection), rendered as the body of the
  // first section. Keyed by view. `overview.callouts[].pos` are pixel
  // offsets inside the mockup frame; the Mockup component itself is
  // attached at render time (ProofPlayerMockup with this view's proofKey).
  const HOW_TO_USE = {
    'triangle-angle-sum': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        callouts: [
          // Measured on the mockup frame (two equal columns; the canvas is
          // 230px high and centred in its column, so x positions inside it
          // are written as 25% of the frame width ± px).
          { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
          { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each angle\'s size beside its arc', pos: { top: '4px', left: '216px' } },
          { n: 3, label: 'Solid points', desc: 'drag A, B or C at any step; the hollow points D and E are constructed and follow', pos: { top: '260px', left: 'calc(25% - 130px)' } },
          { n: 4, label: 'Readout', desc: 'the line under the figure: the three angles and their sum, live while you drag; the sum stays at 180°', pos: { top: '310px', left: '26px' } },
          { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original triangle', pos: { top: '344px', left: 'calc(25% - 226px)' } },
          { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
          { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
        ]
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'moves the vertex; every angle, the parallel line and the readout follow'],
          ['$D$, $E$', 'hollow dot', 'cannot be dragged: they sit on the parallel through $C$ and move with it'],
          ['a vertex onto the opposite side', '—', 'refused: the figure would stop being a triangle, so the move is ignored'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original triangle' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $E$' },
          { control: '**Measures**', description: 'write each angle\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three angles and their sum. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Parallel postulate**, **Alternate angles**, **Straight angle**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only the parallel line and alternate angles, which is why the sum stays $180°$ for every triangle you drag.' },
        { title: 'Degenerate drags are rejected', content: 'A drag that would put the three vertices on one line, or nearly so, is ignored. The theorem says nothing about that case.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the triangle to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a vertex to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
  }

  const instructions = INSTRUCTIONS[view];
  const demos = DEMOS[view] || null;
  const howToUse = HOW_TO_USE[view] || null;

  return {
    props: {
      instructions,
      demos,
      howToUse,
      explanations,
      relatedTools: getRelatedTools(`geometry-proofs-${params.view}`),
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: config.title,
        description: config.description,
        keywords: config.keywords.join(", "),
        url: config.url,
        name: config.name
      },
      stateUnits,
      sectionOrder,
      proofKey: config.proofKey,
      h1Title: config.h1Title
    }
  };
}

export default function GeometryProofPage({ relatedTools, seoData, sectionsContent, stateUnits, sectionOrder, proofKey, h1Title, faqQuestions, schemas, instructions, explanations, demos, howToUse }) {

  const tool = () => (
    <ProofPlayerWrapper proofKeys={[proofKey]} explanations={{ [proofKey]: explanations }} />
  )

  const demo = (id) => (
    <ToolDemoPlayer
      key={`demo-${id}`}
      script={demos[id].script}
      title={demos[id].title}
      label={`Demo: ${demos[id].title}`}
      scale={0.6}
      renderText={processContent}
    >
      {tool()}
    </ToolDemoPlayer>
  )

  const genericSections = (sectionOrder || []).map(([obj, id, unitKey]) => {
    const src = sectionsContent[obj]
    if (!src || !src.title) return null
    const body = [ src.content ]
    if (unitKey && stateUnits[unitKey]) {
      body.push(<div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />)
      if (src.after) body.push(src.after)
    }
    if (demos && demos[id]) body.unshift(demo(id))
    if (id === 'getting-started' && howToUse) {
      body.push(
        <HowToUseSection
          key="how-to-use"
          data={{ ...howToUse, overview: { ...howToUse.overview, Mockup: ProofPlayerMockup, mockupProps: { proofKey } } }}
        />
      )
    }
    return { id, title: src.title, link: src.link || '', content: body }
  }).filter(Boolean);

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      </Head>

      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
        {h1Title}
      </h1>
      {/* Tight stack: the canvas and its controls must be on screen when the page opens. */}
      <div style={{width:'80%', margin:'auto'}}>
        <ExplanationDetails title='How to use' instructions={instructions} accent='#1e40af' />
      </div>
      <div style={{width:'80%',margin:'10px auto 0'}}>
        {tool()}
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <br/>
      {relatedTools && relatedTools.length > 0 && <RelatedTools tools={relatedTools}/>}
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
