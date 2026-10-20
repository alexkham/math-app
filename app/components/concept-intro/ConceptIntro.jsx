import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

/*
  ConceptIntro — the introduction section for a concept.

  The template (A–I) is an authoring decision expressed by the ORDER of
  data.beats. This component renders whatever order it is given and knows
  nothing about which template is in use.

  IMPORTANT: every processContent() call is wrapped in a <div>, never a <p>.
  processContent can emit <div> (academic blocks, SVG placeholders) and <ul>,
  neither of which is legal inside <p>, and both of which cause hydration
  errors if nested there.

  beat.kind
    'prose'       — the default. Plain weight.
    'instance'    — the worked case. Tinted grey ground.
    'definition'  — tinted blue card. Holds a definition and nothing else.

  beat.tone
    'break'       — something fails in this beat. A red ACCENT on the ordinary
                    ground, never a ground of its own. Three weights, not four.

  Every beat kind accepts a visual. A beat that carries something the reader
  has not yet been shown is illustrated, wherever it sits in the ordering, and
  the opening beat most of all. The definition is the usual exception — by the
  time it arrives everything in it has been shown — except in template B, where
  the definition is step 2 and takes the illustration that puts something
  pointable before the name.

  Fields, all optional except where a kind requires them:

    lead       string   bolded opening clause. Rendered on its own line.
    content    string   the beat's prose.
    visual     node     a component. Never raw SVG markup from the page file.
    caption    string   states the correspondence: what in the picture is what
                        quantity in the text.
    note       string   a closing line under the whole beat — used on an
                        instance beat carrying both a table and a figure, where
                        the correspondence is about the pair.

  definition kind only:

    kicker     string   defaults to 'The definition'.
    statement  string   answers 'what is this?', in the form 'this is that'.
                        Links the term to its definitions-page entry.
    formula    string   the formula callout, after the statement.
    footer     string   formulas_link, or a related-page link.

  What is deliberately NOT a definition field: gloss, and what kind of thing it
  is. Neither is a definition. 'What kind of thing it is' is its own obligatory
  element and follows the card as an ordinary prose beat.
*/

const PALETTE = {
  navy: '#06357a',
  slate: '#34495e',
  rule: '#e2e6ec',
  ground: '#f1f4f8',
  defBg: '#eef3fa',
  defLine: '#c3d3ea',
  break: '#a4243b',
  muted: '#7c8794',
}

const LEAD_GAP = '14px'

export default function ConceptIntro({ data }) {
  if (!data || !Array.isArray(data.beats) || data.beats.length === 0) return null

  return (
    <div>
      {data.beats.map((beat, i) => (
        <Beat key={beat.id || `beat-${i}`} beat={beat} />
      ))}
    </div>
  )
}

function Beat({ beat }) {
  if (beat.kind === 'definition') return <DefinitionBeat beat={beat} />
  if (beat.kind === 'instance') return <InstanceBeat beat={beat} />
  return <ProseBeat beat={beat} />
}

/* ---------------------------------------------------------------------------
 * Lead — the bolded opening clause.
 *
 * Block, not inline: it sits on its own line and the beat's text begins below
 * it. Which means the clause has to be written as a complete sentence; one
 * that runs on grammatically into what follows reads as a broken line here.
 * ------------------------------------------------------------------------ */
function Lead({ text, accent }) {
  if (!text) return null

  return (
    <div
      style={{
        display: 'block',
        color: accent,
        fontWeight: 700,
        fontSize: '16.5px',
        lineHeight: 1.55,
        margin: `0 0 ${LEAD_GAP}`,
      }}
    >
      {processContent(text)}
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * Figure — the chrome around a beat's visual.
 *
 * Light on purpose. DiagramFrame is the other thing: it carries an attribution
 * strip and a download rail pointing at build-generated files in
 * /public/diagrams/, which suits a standalone infographic and not six inline
 * pictures inside one section.
 * ------------------------------------------------------------------------ */
function Figure({ visual, caption }) {
  if (!visual) return null

  return (
    <div
      style={{
        background: '#ffffff',
        border: `1px solid ${PALETTE.rule}`,
        borderRadius: '6px',
        padding: '16px 14px 6px',
        margin: '0 0 18px',
      }}
    >
      {visual}
      {caption && (
        <div
          style={{
            fontSize: '14px',
            lineHeight: 1.5,
            color: PALETTE.muted,
            textAlign: 'center',
            margin: '8px 6px 6px',
          }}
        >
          {processContent(caption)}
        </div>
      )}
    </div>
  )
}

function Body({ beat }) {
  return (
    <>
      {beat.content && (
        <div style={{ fontSize: '16.5px', marginBottom: beat.visual ? '18px' : '0' }}>
          {processContent(beat.content)}
        </div>
      )}
      <Figure visual={beat.visual} caption={beat.caption} />
      {beat.note && (
        <div
          style={{
            fontSize: '14.5px',
            lineHeight: 1.55,
            color: PALETTE.muted,
            borderTop: `1px solid ${PALETTE.rule}`,
            paddingTop: '12px',
            margin: '4px 0 0',
          }}
        >
          {processContent(beat.note)}
        </div>
      )}
    </>
  )
}

function ProseBeat({ beat }) {
  const accent = beat.tone === 'break' ? PALETTE.break : PALETTE.navy

  return (
    <div style={{ margin: '0 0 22px' }}>
      <Lead text={beat.lead} accent={accent} />
      <Body beat={beat} />
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * InstanceBeat — the worked case.
 *
 * tone 'break' changes the accent and the left rule only. The ground stays
 * grey, because a beat where something fails is still a worked instance.
 * ------------------------------------------------------------------------ */
function InstanceBeat({ beat }) {
  const accent = beat.tone === 'break' ? PALETTE.break : PALETTE.navy

  return (
    <div
      style={{
        background: PALETTE.ground,
        border: `1px solid ${PALETTE.rule}`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: '6px',
        padding: '22px 24px 18px',
        margin: '0 0 24px',
      }}
    >
      <Lead text={beat.lead} accent={accent} />
      <Body beat={beat} />
    </div>
  )
}

function DefinitionBeat({ beat }) {
  if (process.env.NODE_ENV !== 'production') {
    if (beat.gloss || beat.kindOfThing) {
      console.warn(
        '[ConceptIntro] A definition beat was given gloss or kindOfThing. ' +
          'The definition block holds a definition and nothing else. ' +
          'Move that text to its own prose beat after the card.'
      )
    }
  }

  return (
    <div
      style={{
        background: PALETTE.defBg,
        border: `1px solid ${PALETTE.defLine}`,
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(6,53,122,0.07)',
        padding: '22px 26px 18px',
        margin: '0 0 24px',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: PALETTE.navy,
          fontWeight: 700,
          marginBottom: '12px',
        }}
      >
        {beat.kicker || 'The definition'}
      </div>

      {beat.statement && (
        <div style={{ fontSize: '16.5px', lineHeight: 1.6 }}>
          {processContent(beat.statement)}
        </div>
      )}

      {beat.formula && <div style={{ margin: '16px 0 0' }}>{processContent(beat.formula)}</div>}

      {beat.visual && (
        <div style={{ marginTop: '16px' }}>
          <Figure visual={beat.visual} caption={beat.caption} />
        </div>
      )}

      {beat.footer && (
        <div
          style={{
            marginTop: '18px',
            paddingTop: '14px',
            borderTop: `1px solid ${PALETTE.defLine}`,
            fontSize: '14.5px',
          }}
        >
          {processContent(beat.footer)}
        </div>
      )}
    </div>
  )
}
