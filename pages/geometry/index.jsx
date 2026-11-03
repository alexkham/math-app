import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import Link from 'next/link'
import '@/pages/pages.css'

// Provisional geometry hub (noindex, follow). Owner-supplied layout:
// hero, intro article, the sections that exist (today only Visual Tools),
// core ideas and how a proof works. Figure cards without an href are
// planned and render dimmed, not as links.
// Kept out of public/sitemap.xml by the noindex filter in generate-sitemap.mjs.

export async function getStaticProps(){

  const hero = {
    title: 'Geometry',
    intro: 'Plane geometry through interactive proofs. Every theorem runs step by step on a live figure you can drag.'
  }

  // Paragraphs are raw HTML (entities and one <em>).
  const article = {
    title: 'What Geometry Studies',
    paragraphs: [
      'Geometry is the study of shape, size and position. Plane geometry works in a flat surface with a small set of objects &mdash; points, lines, angles and the figures they enclose &mdash; and asks which of their properties must always hold, whatever the particular drawing looks like.',
      'What sets geometry apart from measurement is <em>proof</em>. Measuring the angles of one triangle tells you about that triangle; a proof tells you about every triangle at once. Each result is derived from a few accepted starting points, the axioms, and from results proved earlier, so the whole subject is one connected chain of reasoning.',
      'This section starts from those proofs. Each figure gets an interactive visual tool where the argument unfolds one step at a time, with the rule behind every step named beside it. You can drag the figure at any point and watch the conclusion survive the change &mdash; the clearest way to see why a proof is general.'
    ]
  }

  const sections = [
    {
      tag: 'Section',
      title: 'Visual Tools',
      href: '/geometry/visual-tools',
      description: 'Interactive proof players, one per figure.',
      button: 'Open visual tools',
      text: [
        'Visual tools are organized by figure. Each figure has its own player, and each theorem about that figure is a separate scenario: a sequence of scenes that adds constructions and markings, highlights what the current step uses, and keeps a running log of the argument with its justification.',
        'The figures are the shapes the proofs are about. Triangles come first because most of plane geometry rests on them: congruence and similarity are defined for triangles, and results about circles, quadrilaterals and polygons are usually proved by cutting those shapes into triangles.'
      ],
      figures: [
        {
          key: 'lines',
          title: 'Lines and Angles',
          description: 'The objects everything else is built from: points, lines and the angles they make. Crossing lines, straight angles, parallel lines and their transversals.',
          href: '/geometry/visual-tools#sub-proofs-lines-and-angles',
          views: ['Vertical angles'],
          more: 'Open lines and angles'
        },
        {
          key: 'triangle',
          title: 'Triangle',
          description: 'The simplest polygon and the base of most proofs in the plane: angle relationships, isosceles and equilateral triangles, congruence and the Pythagorean theorem, each on a triangle you can reshape.',
          href: '/geometry/visual-tools#sub-proofs-triangle',
          views: ['Triangle angle sum', 'Exterior angle theorem', 'Sum of exterior angles', 'Isosceles base angles', 'Triangle inequality', 'Larger side, larger angle', 'Perpendicular is shortest'],
          more: 'Open triangle'
        },
        {
          key: 'circle',
          title: 'Circle',
          description: "All points at one distance from a center. Inscribed and central angles, Thales' theorem, tangents meeting radii at right angles, chords and arcs.",
          href: '/geometry/visual-tools#sub-proofs-circle',
          views: ["Thales' theorem"],
          more: 'Open circle'
        },
        {
          key: 'quadrilateral',
          title: 'Quadrilateral',
          description: 'Four-sided figures and their families: parallelograms, rectangles, rhombi, trapezoids. Properties of sides and diagonals, and the 360° angle sum.'
        },
        {
          key: 'polygon',
          title: 'Polygon',
          description: 'Figures with any number of sides. Interior angle sums of (n − 2) · 180°, exterior angles that always total 360°, and regular polygons.'
        }
      ]
    }
  ]

  const ideas = [
    { title: 'Points, Lines and Angles', text: 'The basic objects. Two points determine a line; two rays from a common point form an angle, measured in degrees.' },
    { title: 'Parallel Lines', text: 'Lines that never meet. A transversal crossing them creates pairs of equal angles — the tool behind many angle proofs.' },
    { title: 'Congruence', text: 'Figures with the same shape and size. For triangles, three matching parts are enough: SSS, SAS, ASA.' },
    { title: 'Similarity', text: 'Same shape, different size. Corresponding angles are equal and corresponding sides share one ratio.' },
    { title: 'Area', text: 'The space a figure covers. Many area formulas are proved by cutting a figure apart and rearranging the pieces.' }
  ]

  const steps = [
    { title: 'Given', text: 'The figure and what is known about it, marked on the canvas.' },
    { title: 'Construct', text: 'Auxiliary lines or points that the argument needs, added one at a time.' },
    { title: 'Justify', text: 'Each step names its rule — a postulate, a definition or an earlier theorem.' },
    { title: 'Conclude', text: 'The statement follows. Drag the figure to see it hold for every shape.' }
  ]

  return {
    props: {
      hero,
      article,
      sections,
      ideas,
      steps,
      breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
          { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" }
        ]
      },
      seoData: {
        title: "Geometry | Learn Math Class",
        description: "Plane geometry through interactive proofs. Every theorem runs step by step on a live figure you can drag.",
        url: "/geometry"
      }
    }
  }
}

const FIGURE_ICONS = {
  lines: <g><line x1="6" y1="40" x2="42" y2="10" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="8" x2="40" y2="42" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/><path d="M 17 31 A 8 8 0 0 1 17.5 19.5 L 24 25 Z" fill="#3498db" fillOpacity=".35"/><path d="M 31 19 A 8 8 0 0 1 30.5 30.5 L 24 25 Z" fill="#3498db" fillOpacity=".35"/></g>,
  triangle: <polygon points="6,40 42,40 24,8" fill="#3498db" fillOpacity=".12" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round"/>,
  circle: <circle cx="24" cy="24" r="17" fill="#3498db" fillOpacity=".12" stroke="#0f172a" strokeWidth="2"/>,
  quadrilateral: <polygon points="6,38 16,10 42,10 32,38" fill="none" stroke="#aab7c4" strokeWidth="2" strokeLinejoin="round"/>,
  polygon: <polygon points="24,5 42,18 35,40 13,40 6,18" fill="none" stroke="#aab7c4" strokeWidth="2" strokeLinejoin="round"/>
}

function FigureCard({ figure }) {
  const top = (
    <div className="child-top">
      <svg viewBox="0 0 48 48" aria-hidden="true">{FIGURE_ICONS[figure.key]}</svg>
      <span className={figure.href ? 'tag live' : 'tag plan'}>{figure.href ? 'Figure' : 'Planned'}</span>
    </div>
  )

  if (!figure.href) {
    return (
      <div className="child dim">
        {top}
        <h3>{figure.title}</h3>
        <p>{figure.description}</p>
      </div>
    )
  }

  return (
    <Link className="child link" href={figure.href}>
      {top}
      <h3>{figure.title}</h3>
      <p>{figure.description}</p>
      <div className="url">{figure.href.split('#')[0]}</div>
      <ul className="views">
        {figure.views.map((v) => <li key={v}>{v}</li>)}
      </ul>
      <span className="more">{figure.more} &rarr;</span>
    </Link>
  )
}

export default function GeometryPage({ hero, article, sections, ideas, steps, breadcrumb, seoData }) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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

      <div className="geo-hub">
        <header className="hero">
          <div className="hero-in">
            <h1>{hero.title}</h1>
            <p>{hero.intro}</p>
          </div>
        </header>

        <main className="main">

          <div className="article">
            <h2>{article.title}</h2>
            {article.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <h2 className="sec-title">Sections</h2>

          {sections.map((s) => (
            <section className="level" key={s.href}>
              <div className="level-head">
                <div>
                  <span className="tag live">{s.tag}</span>
                  <h2><Link href={s.href}>{s.title}</Link></h2>
                  <p>{s.description}</p>
                  <div className="url">{s.href}</div>
                </div>
                <Link className="btn" href={s.href}>{s.button} &rarr;</Link>
              </div>

              <div className="level-text">
                {s.text.map((t, i) => <p key={i}>{t}</p>)}
              </div>

              <div className="children">
                {s.figures.map((f) => <FigureCard key={f.key} figure={f} />)}
              </div>
            </section>
          ))}

          <h2 className="sec-title">Core Ideas</h2>
          <div className="ideas">
            {ideas.map((idea) => (
              <div className="idea" key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </div>
            ))}
          </div>

          <h2 className="sec-title">How a Proof Works Here</h2>
          <ol className="steps">
            {steps.map((st) => (
              <li key={st.title}><strong>{st.title}</strong>{st.text}</li>
            ))}
          </ol>

        </main>
      </div>

      {/* Global but prefixed with .geo-hub: scoped styled-jsx would not reach the <a> rendered by Link. */}
      <style jsx global>{`
        .geo-hub{
          --hero:#0d47a1;--accent:#3498db;--accent-hover:#1565c0;
          --badge-bg:#e3f2fd;--badge:#1565c0;
          --text:#2c3e50;--text2:#5d6d7e;--muted:#aab7c4;
          --content:#f8f8f8;--border:#e2e8f0;
          font-family:Arial,sans-serif;color:var(--text);background:var(--content);
        }
        .geo-hub *{box-sizing:border-box}
        .geo-hub a{color:inherit;text-decoration:none}

        .geo-hub .hero{background:var(--hero);color:#fff;padding:40px 24px 36px}
        .geo-hub .hero-in{max-width:1200px;margin:0 auto}
        .geo-hub .hero h1{margin:0 0 10px;font-size:40px;font-weight:700;color:#fff}
        .geo-hub .hero p{margin:0;font-size:16px;line-height:1.6;color:#d6e4f5;max-width:640px}
        @media (max-width:820px){.geo-hub .hero h1{font-size:32px}}

        .geo-hub .main{max-width:1200px;margin:0 auto;padding:36px 24px 60px}

        .geo-hub .level{background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.06);overflow:hidden}
        .geo-hub .level-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 24px;border-bottom:1px solid var(--border)}
        .geo-hub .level-head h2{margin:0 0 4px;font-size:22px}
        .geo-hub .level-head h2 a{color:var(--text)}
        .geo-hub .level-head h2 a:hover{color:var(--accent-hover)}
        .geo-hub .level-head p{margin:0;font-size:14px;color:var(--text2);line-height:1.5}
        .geo-hub .url{font-family:'JetBrains Mono',Menlo,monospace;font-size:12px;color:var(--muted);margin-top:6px}
        .geo-hub .tag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 9px;border-radius:4px;white-space:nowrap}
        .geo-hub .tag.live{background:var(--badge-bg);color:var(--badge)}
        .geo-hub .tag.plan{background:#f1f5f9;color:#64748b}
        .geo-hub .btn{flex-shrink:0;background:var(--accent);color:#fff;font-weight:700;font-size:14px;padding:10px 18px;border-radius:6px;white-space:nowrap}
        .geo-hub .btn:hover{background:var(--accent-hover)}

        .geo-hub .children{padding:20px 24px 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}
        .geo-hub .child{border:2px solid var(--border);border-radius:10px;padding:18px;display:flex;flex-direction:column;gap:10px;background:#fff;transition:all .25s ease}
        .geo-hub .child.link:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 16px rgba(49,130,206,.18)}
        .geo-hub .child.dim{background:#fafafa}
        .geo-hub .child.dim h3,.geo-hub .child.dim p{color:var(--muted)}
        .geo-hub .child-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
        .geo-hub .child svg{width:48px;height:48px}
        .geo-hub .child h3{margin:0;font-size:18px;color:var(--text)}
        .geo-hub .child p{margin:0;font-size:14px;line-height:1.55;color:var(--text2)}
        .geo-hub .views{list-style:none;margin:4px 0 0;padding:10px 0 0;border-top:1px dashed var(--border);display:flex;flex-direction:column;gap:6px}
        .geo-hub .views li{font-size:13px;color:var(--text2);display:flex;align-items:center;gap:8px}
        .geo-hub .views li::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0}
        .geo-hub .child .more{font-size:13px;font-weight:700;color:var(--accent-hover);margin-top:auto}

        .geo-hub .article{max-width:860px;margin:0 0 32px}
        .geo-hub .article h2{margin:0 0 12px;font-size:24px;color:var(--text)}
        .geo-hub .article p{margin:0 0 14px;font-size:16px;line-height:1.7;color:var(--text)}
        .geo-hub .article em{color:var(--accent-hover);font-style:normal;font-weight:600}

        .geo-hub .sec-title{border-bottom:2px solid var(--text);padding-bottom:8px;margin:44px 0 18px;font-size:22px;color:var(--text)}
        .geo-hub .level-text{padding:18px 24px 0;font-size:15px;line-height:1.65;color:var(--text2);max-width:900px}
        .geo-hub .level-text p{margin:0 0 10px}

        .geo-hub .ideas{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px}
        .geo-hub .idea{background:#fff;border:1px solid var(--border);border-top:3px solid var(--accent);border-radius:0 0 10px 10px;padding:16px 18px}
        .geo-hub .idea h3{margin:0 0 8px;font-size:16px;color:var(--text)}
        .geo-hub .idea p{margin:0;font-size:14px;line-height:1.6;color:var(--text2)}

        .geo-hub .steps{counter-reset:s;list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
        .geo-hub .steps li{counter-increment:s;background:#fff;border:1px solid var(--border);border-radius:10px;padding:16px 18px 16px 56px;position:relative;font-size:14px;line-height:1.6;color:var(--text2)}
        .geo-hub .steps li::before{content:counter(s);position:absolute;left:16px;top:16px;width:26px;height:26px;border-radius:50%;background:var(--badge-bg);color:var(--badge);font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center}
        .geo-hub .steps li strong{display:block;color:var(--text);font-size:15px;margin-bottom:4px}
      `}</style>
    </>
  )
}
