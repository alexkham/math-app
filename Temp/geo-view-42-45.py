import os, sys
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
nl = '\r\n' if '\r\n' in s else '\n'

def ins_after_line(anchor, block):
    global s
    assert s.count(anchor) == 1, anchor
    i = s.index(anchor) + len(anchor)
    j = s.index(nl, i) + len(nl)
    s = s[:j] + block.replace('\n', nl) + s[j:]

def ins_before_close(anchor, block, close='  }'):
    global s
    anchor = anchor.replace('\n', nl)
    assert s.count(anchor) == 1, anchor
    i = s.index(anchor)
    j = s.index(nl + close + nl, i) + len(nl)
    s = s[:j] + block.replace('\n', nl) + s[j:]

def js(x):
    return "'" + x.replace("\\", "\\\\").replace("'", "\\'") + "'"

def build(P):
    slug, prev = P['slug'], P['prev']
    n = len(P['phases'])
    ins_after_line("    { params: { view: '%s' } }," % prev, "    { params: { view: '%s' } },\n" % slug)

    secs = []
    for i, (title, content) in enumerate(P['sections']):
        secs.append("        obj%d: {\n          title: %s,\n          content: `%s`,\n          before: '',\n          after: '',\n          link: ''\n        }" % (i, js(title), content))
    faqs = []
    for i, (q, a) in enumerate(P['faq']):
        faqs.append("        obj%d: {\n          question: %s,\n          answer: %s\n        }" % (i + 1, js(q), js(a)))
    kw = ",\n".join("        " + js(k) for k in P['keywords'])
    VIEW = """    '%(slug)s': {
      proofKey: '%(key)s',
      title: %(title)s,
      description: %(desc)s,
      h1Title: %(h1)s,
      url: '/geometry/visual-tools/%(slug)s',
      svg: `%(svg)s`,
      category: 'Proofs',
      subCategory: %(sub)s,
      name: %(name)s,
      keywords: [
%(kw)s
      ],
      sectionsContent: {
%(secs)s
      },
      faqQuestions: {
%(faqs)s
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": %(appname)s,
          "description": %(appdesc)s,
          "url": "https://www.learnmathclass.com/geometry/visual-tools/%(slug)s",
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
            { "@type": "ListItem", "position": 4, "name": %(h1j)s, "item": "https://www.learnmathclass.com/geometry/visual-tools/%(slug)s" }
          ]
        }
      }
    },
""" % dict(slug=slug, key=P['key'], title=js(P['title']), desc=js(P['desc']), h1=js(P['h1']), svg=P['svg'], name=js(P['name']), kw=kw, sub=js(P.get('subCategory', 'Triangle')),
           secs=",\n".join(secs), faqs=",\n".join(faqs), appname='"' + P['name'].replace(' Proof', ' Proof Visualizer') + '"', appdesc='"' + P['appdesc'] + '"', h1j='"' + P['h1'] + '"')
    ins_before_close('"name": "%s", "item"' % P['prev_h1'], VIEW, close='  };')

    dragged_expr = P.get('dragged_expr', "{ ...PROOFS.%s.model, params: { ...PROOFS.%s.model.params, t: 0.7 } }" % (P['key'], P['key']))
    ins_after_line("  const %s = {" % P['prev_dragged'], "  // %s\n  const %s = %s\n" % (P['dragged_comment'], P['dragged'], dragged_expr))

    units = []
    for ph, cap, txt in P['stills']:
        units.append("      %s: unit(D['%s-%s'], %s,\n        %s)," % (ph, P['key'], ph, js(cap), js(txt)))
    units.append("      dragged: unit(proofStill('%s', %d, { model: %s }), %s,\n        %s)," % (P['key'], n - 1, P['dragged'], js(P['dragged_cap']), js(P['dragged_txt'])))
    UNITS = "    '%s': {\n%s\n    },\n" % (slug, "\n".join(units))
    ins_before_close("'%s': {\n      given: unit(D['%s-given']" % (prev, P['prev_key']), UNITS)

    order = ["      ['obj0', 'getting-started'],"]
    for i, (sid, ph) in enumerate(P['order']):
        order.append("      ['obj%d', '%s'%s]," % (i + 1, sid, (", '%s'" % ph) if ph else ''))
    ORDER = "    '%s': [\n%s\n    ],\n" % (slug, "\n".join(order))
    ins_before_close("'%s': [\n      ['obj0', 'getting-started']," % prev, ORDER)

    notes = ["      %s: note(%s, '%s', %s)," % (ph, js(body), anchor, js(label)) for ph, body, anchor, label in P['notes']]
    EXPL = "    '%s': {\n%s\n    },\n" % (slug, "\n".join(notes))
    ins_before_close("'%s': {\n      given: note(" % prev, EXPL)

    INSTR = """    '%s': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      %s,
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
""" % (slug, js(P['instr2']))
    ins_before_close("'%s': [\n      '**▶ Play**" % prev, INSTR)

    demo = []
    for say in P['demo_says']:
        demo.append("          { say: %s }," % js(say).replace('\n', '\\n'))
        demo.append("          { click: { button: 'Next' } },")
        demo.append("          { wait: 1800 },")
    demo[-1] = "          { wait: 2000 },"
    demo.append("          { say: %s }," % js(P['demo_drag_say']).replace('\n', '\\n'))
    demo.append("          " + P.get('demo_drag', "{ drag: '[data-handle=\"D\"]', dx: -8, dy: 14, ms: 1400 },"))
    demo.append("          { wait: 1200 },")
    demo.append("          { say: 'RESET\\nBack to step 1 and the original figure.' },")
    demo.append("          { click: { button: 'Reset', exact: true } },")
    demo.append("          { wait: 1200 },")
    DEMO = "    '%s': {\n      'getting-started': {\n        title: 'A run through the proof player',\n        script: [\n%s\n        ]\n      }\n    },\n" % (slug, "\n".join(demo))
    ins_before_close("'%s': {\n      'getting-started': {" % prev, DEMO)

    f2 = "\n".join("            { n: %d, label: %s, desc: %s, pos: { top: '%s', left: '%s' } }," % (i + 1, js(l), js(d), t, le) for i, (l, d, t, le) in enumerate(P['frame2']))
    rows = "\n".join("          [%s]," % ", ".join(js(c) for c in r) for r in P['input_rows'])
    HOWTO = """    '%(slug)s': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: %(drag_desc)s, pos: { top: '%(p3top)s', left: '%(p3left)s' } },
            { n: 4, label: 'Readout', desc: %(readout_desc)s, pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25%% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the %(n)d steps is on screen', pos: { top: '336px', left: 'calc(25%% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50%% - 10px)' } },
          ] },
          { title: 'Proof complete: step %(n)d of %(n)d', mockupProps: { step: %(last)d }, callouts: [
%(f2)s
          ] },
        ],
      },
      inputs: {
        intro: %(intro)s,
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
%(rows)s
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: %(labels_desc)s },
          { control: '**Measures**', description: %(measures_desc)s },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives %(readout_short)s. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (%(tags)s) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: %(beh1)s },
        { title: %(beh2t)s, content: %(beh2)s },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
""" % dict(slug=slug, drag_desc=js(P['drag_desc']), p3top=P.get('p3top', '150px'), p3left=P.get('p3left', 'calc(25% - 60px)'), readout_desc=js(P['readout_desc']), n=n, last=n - 1, f2=f2,
           intro=js(P['intro']), rows=rows, labels_desc=js(P['labels_desc']), measures_desc=js(P['measures_desc']), readout_short=P['readout_short'], tags=P['tags'],
           beh1=js(P['beh1']), beh2t=js(P['beh2t']), beh2=js(P['beh2']))
    ins_before_close("'%s': {\n      labels:" % prev, HOWTO)

# ------------------------------------------------------------------
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
PAGES = __import__(sys.argv[1] if len(sys.argv) > 1 else 'geo_pages_42_45').PAGES
for P in PAGES:
    build(P)
open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', [s.count("'%s'" % P['slug']) for P in PAGES])
