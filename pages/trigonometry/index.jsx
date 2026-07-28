

/**
 * /pages/trigonometry/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as /pages/algebra/index.jsx). Sections are auto-discovered from
 * the child directories on disk; the old hand-authored hub content was
 * migrated as follows:
 *
 *   - formulas / definitions / identities / unit-circle / functions
 *     articles  -> `hubDescription` in the corresponding child page,
 *     re-surfaced here automatically via buildSectionData extraction
 *   - Key Terms anchor list        -> augment on the definitions section
 *   - Angles article               -> prose-only section (no child page)
 *   - Symbols blurb                -> prose-only section (links outside
 *                                     the section, to /math-symbols)
 *   - Tools slider                 -> prose-only section (cross-section
 *                                     tool links)
 *   - Introduction to Trigonometry -> `article` prop of SectionFrontPage
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Trigonometry',
  subtitle: 'Functions, identities, and the unit circle — from right-triangle ratios to periodic graphs and equations.',
  breadcrumbUrl: '/trigonometry',
};


/* ================================================================
   CUSTOM SECTIONS
   ================================================================ */

const customSections = {

  // Curated key-terms anchor mesh into the definitions glossary,
  // shown above the auto-generated definitions grid as compact cards.
  'definitions': {
    mode: 'augment',
    position: 'before',
    body: `
      <style>
        .lmc-kt-wrap { font-family: 'DM Sans', system-ui, sans-serif; columns: 2 320px; column-gap: 14px; }
        .lmc-kt-card { break-inside: avoid; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px 16px 10px; margin-bottom: 14px; }
        .lmc-kt-head { font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #64748b; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid #f1f5f9; }
        .lmc-kt-item { padding: 3px 0; font-size: 13.5px; line-height: 1.5; }
        .lmc-kt-item a { color: #2563eb; text-decoration: none; font-weight: 600; }
        .lmc-kt-item a:hover { text-decoration: underline; }
        .lmc-kt-item span { color: #6b7280; }
      </style>
      <div class="lmc-kt-wrap">
        <div class="lmc-kt-card">
          <div class="lmc-kt-head">Angles &amp; Measurement</div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#angle">Angle</a> <span>&mdash; a figure formed by two rays sharing a common endpoint, measuring rotation</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#degree">Degree</a> <span>&mdash; 1/360 of a full rotation</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#radian">Radian</a> <span>&mdash; the angle subtended by an arc equal in length to the radius</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#arc_length">Arc Length</a> <span>&mdash; distance along a circular arc: <em>s</em> = <em>r&theta;</em></span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#central_angle">Central Angle</a> <span>&mdash; an angle whose vertex is at the center of a circle</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#sector">Sector</a> <span>&mdash; the region between two radii and their intercepted arc</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#unit_circle">Unit Circle</a> <span>&mdash; the circle <em>x</em><sup>2</sup> + <em>y</em><sup>2</sup> = 1 centered at the origin</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#initial_side">Initial Side</a> <span>&mdash; the fixed ray from which rotation begins</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#terminal_side">Terminal Side</a> <span>&mdash; the ray obtained after rotation</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#positive_angle">Positive Angle</a> <span>&mdash; counterclockwise rotation</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#negative_angle">Negative Angle</a> <span>&mdash; clockwise rotation</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#angle_in_standard_position">Standard Position</a> <span>&mdash; vertex at origin, initial side along the positive <em>x</em>-axis</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#coterminal_angles">Coterminal Angles</a> <span>&mdash; angles sharing the same terminal side</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#quadrantal_angles">Quadrantal Angles</a> <span>&mdash; angles whose terminal side lies on an axis</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#reference_angle">Reference Angle</a> <span>&mdash; the acute angle between the terminal side and the <em>x</em>-axis</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#complementary_angles">Complementary Angles</a> <span>&mdash; two angles summing to 90&deg;</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#supplementary_angles">Supplementary Angles</a> <span>&mdash; two angles summing to 180&deg;</span></div>
        </div>
        <div class="lmc-kt-card">
          <div class="lmc-kt-head">Functions</div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#sine">Sine</a> <span>&mdash; the <em>y</em>-coordinate on the unit circle</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#cosine">Cosine</a> <span>&mdash; the <em>x</em>-coordinate on the unit circle</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#tangent">Tangent</a> <span>&mdash; the ratio sin&nbsp;&theta; / cos&nbsp;&theta;, the slope of the terminal side</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#cosecant">Cosecant</a> <span>&mdash; reciprocal of sine</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#secant">Secant</a> <span>&mdash; reciprocal of cosine</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#cotangent">Cotangent</a> <span>&mdash; reciprocal of tangent</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#trigonometric_ratio">Trigonometric Ratio</a> <span>&mdash; a ratio of two sides of a right triangle relative to an acute angle</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#periodic_function">Periodic Function</a> <span>&mdash; a function that repeats at regular intervals</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#inverse_trigonometric_function">Inverse Trigonometric Function</a> <span>&mdash; returns the angle for a given trigonometric value</span></div>
        </div>
        <div class="lmc-kt-card">
          <div class="lmc-kt-head">Right Triangle</div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#hypotenuse">Hypotenuse</a> <span>&mdash; the side opposite the right angle</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#adjacent_side">Adjacent Side</a> <span>&mdash; the leg next to the chosen acute angle</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#opposite_side">Opposite Side</a> <span>&mdash; the leg across from the chosen acute angle</span></div>
        </div>
        <div class="lmc-kt-card">
          <div class="lmc-kt-head">Graphs</div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#amplitude">Amplitude</a> <span>&mdash; maximum distance from midline to peak: |<em>A</em>|</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#period">Period</a> <span>&mdash; horizontal length of one cycle: 2&pi;/|<em>B</em>|</span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#phase_shift">Phase Shift</a> <span>&mdash; horizontal displacement: <em>C</em>/<em>B</em></span></div>
          <div class="lmc-kt-item"><a href="/trigonometry/definitions#frequency">Frequency</a> <span>&mdash; cycles per unit interval: 1/<em>T</em></span></div>
        </div>
      </div>
    `,
  },

  // No /trigonometry/angles child page exists — the old hub's editorial
  // article lives on as a standalone prose section.
  'angles': {
    mode: 'prose-only',
    title: 'Angles',
    insertBefore: 'degrees-radians',
    body: `
      <p>In some way, we can see an angle as a mathematical model that represents the amount of rotation between two rays sharing a common endpoint. It is one of the central concepts in trigonometry, alongside the right triangle and the unit circle. Angles provide the basis for defining trigonometric functions, which depend on rotational input to describe relationships between lengths, positions, and periodic behavior. Through this role, the angle becomes essential for understanding how these functions behave, both algebraically and geometrically.</p>

      <p>Measurement of angles is defined through two principal units &mdash; degrees and radians &mdash; and includes distinctions between positive and negative directionality, as well as values extending beyond a single rotation. The concept of coterminal angles arises naturally within this extended framework.</p>

      <p>Angular magnitudes are categorized based on their size: zero, acute, right, obtuse, straight, reflex, and full angles. These classifications serve as a basis for identifying structural properties in figures and for formulating general principles in planar analysis.</p>

      <p>Relationships between angles &mdash; such as complementarity, supplementarity, adjacency, and opposition &mdash; are defined by positional constraints and linear combinations.</p>

      <p>In geometric contexts, angles determine the internal structure of triangles and polygons, govern the behavior of circular segments, and appear in the formulation of central and inscribed arc measures. Within trigonometry, angles are treated as rotational parameters on the unit circle, where quadrant location and reference angles determine function values and signs. Standard angles play a central role in simplifying expressions and solving equations.</p>

      <p>These definitions extend to the behavior of trigonometric functions across their domains, including periodicity, symmetry, and transformation. The treatment also includes inverse functions and the role of angles in modeling cyclic and rotational phenomena in applied settings. The topic as a whole integrates measurement, classification, and function, providing a complete mathematical foundation for angular analysis.</p>
    `,
  },

  // Cross-section interactive tools the old hub promoted in its slider,
  // rendered as card tiles matching the auto-generated tool cards.
  'tools': {
    mode: 'prose-only',
    title: 'Interactive Tools',
    body: `
      <style>
        .lmc-tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; font-family: 'DM Sans', system-ui, sans-serif; }
        .lmc-tool-card { display: block; background: #fff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px 18px; text-decoration: none; color: inherit; transition: all 0.2s; }
        .lmc-tool-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); border-color: #2563eb; }
        .lmc-tool-badge { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 3px 8px; border-radius: 4px; background: #eff6ff; color: #2563eb; margin-bottom: 10px; }
        .lmc-tool-title { font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 6px; }
        .lmc-tool-desc { font-size: 13.5px; color: #64748b; line-height: 1.5; }
        .lmc-tool-open { display: inline-block; font-size: 13px; font-weight: 700; color: #2563eb; margin-top: 12px; }
      </style>
      <div class="lmc-tools-grid">
        <a class="lmc-tool-card" href="/converters/degree-radians">
          <span class="lmc-tool-badge">Converter</span>
          <div class="lmc-tool-title">Degree &harr; Radians Converter</div>
          <div class="lmc-tool-desc">Convert between degrees and radians with a visual, intuitive, and interactive converter.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/visual-tools/unit-circle">
          <span class="lmc-tool-badge">Visual Tool</span>
          <div class="lmc-tool-title">Unit Circle Explorer</div>
          <div class="lmc-tool-desc">Explore the unit circle for a better understanding of the main trigonometry concepts.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/calculators/trigonometry-calculator">
          <span class="lmc-tool-badge">Calculator</span>
          <div class="lmc-tool-title">Trigonometry Calculator</div>
          <div class="lmc-tool-desc">Calculate the values of all main trigonometric functions for angles measured in degrees and radians.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
      </div>
    `,
  },

  // Pointer to the symbols reference, which lives outside this section.
  'symbols': {
    mode: 'prose-only',
    title: 'Trigonometry Symbols Reference',
    link: '/math-symbols/trigonometry',
    linkText: 'View Trigonometry Symbols',
    body: `
      <p>Our <a href="/math-symbols/trigonometry">Trigonometry Symbols page</a> offers a comprehensive collection of notation used in trigonometric mathematics. This reference serves as a valuable resource for students and educators working with angular relationships and periodic functions.</p>

      <p>The guide organizes symbols into functional categories including basic trigonometric functions (sin(&theta;), cos(&theta;), tan(&theta;)), their inverse functions (sin&#8315;&sup1;(x), cos&#8315;&sup1;(x)), and fundamental identities such as the Pythagorean identity sin&sup2;(&theta;) + cos&sup2;(&theta;) = 1. It extends to practical applications like the Law of Sines and Cosines for triangle calculations, unit circle relationships, and hyperbolic functions.</p>

      <p>Advanced sections cover complex number representations using trigonometric forms, the Euler formula, and important sum and difference identities &mdash; all presented with precise LaTeX code for academic writing and mathematical typesetting.</p>
    `,
  },

};


/* ================================================================
   INTRO ARTICLE (rendered by SectionFrontPage's ArticleBlock)
   ================================================================ */

const introArticle = {
  title: 'Introduction to Trigonometry',
  content: `While mainly focusing on relationships between the angles and sides of triangles, trigonometry extends beyond simple geometric shapes, offering tools to describe patterns involving periodicity and circular motion. This makes trigonometry essential in fields ranging from physics and engineering to computer graphics and navigation.

Here’s what students can expect to learn:

1. **Core Concepts**:
   • **Angles and Their Measures**: Degrees, radians, and how they relate to circles.
   • **Trigonometric Functions**: Sine, cosine, tangent, and their reciprocals (cosecant, secant, cotangent).
   • **Unit Circle**: A key tool for understanding how trigonometric functions behave across all angles.
   • **Inverse Trigonometric Functions**: Solving equations to find angles.

2. **Applications**:
   • **Solving Triangles**: Using the laws of sines and cosines to find unknown sides or angles.
   • **Wave Behavior**: Modeling oscillations in physics, sound waves, and light waves.
   • **Circular and Periodic Motion**: Understanding orbits, pendulums, and cycles.

3. **Advanced Topics**:
   • **Identities**: Simplifying expressions and solving equations using formulas like the Pythagorean identity, angle addition formulas, and double-angle formulas.
   • **Graphs of Trigonometric Functions**: Visualizing periodic patterns and their transformations (shifts, stretches, reflections).
   • **Complex Numbers and Euler’s Formula**: Exploring the deep connection between trigonometry and algebra.

4. **Skills Developed**:
   • **Problem-solving**: Tackling real-world problems involving geometry, motion, and oscillation.
   • **Visualization**: Interpreting and sketching graphs and diagrams to represent abstract relationships.
   • **Logical reasoning**: Manipulating trigonometric expressions and proofs.

Trigonometry teaches students how to connect abstract mathematical concepts with practical scenarios, developing versatile skills useful in scientific modeling, technical fields, and everyday problem-solving.
`,
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/trigonometry', { customSections });

  const keyWords = ['trigonometry', 'unit circle', 'trigonometric functions',
    'trigonometric functions on the unit circle', '6 trigonometric functions',
    'basic trigonometry', 'right triangle', 'pythagorean relationship', 'pythagoras triangle'];

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
      introArticle,
      seoData: {
        title: "Trigonometry - Functions, Identities & Formulas | Learn Math Class",
        description: "Complete trigonometry guide covering functions, identities, formulas, and the unit circle. Learn sine, cosine, tangent with interactive tools and examples.",
        keywords: keyWords.join(", "),
        url: "/trigonometry",
        name: "Trigonometry"
      },
    },
  };
}


export default function TrigonometryPage({ pageMeta, sections, sectionData, introArticle, seoData }) {
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

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
        article={introArticle}
      />
    </>
  );
}
