// import React from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// /*
//   ConceptIntro — the introduction section for a concept.

//   variant : 'flat' (default) | 'structured'

//   The template (A–I) is an authoring decision expressed by the ORDER of
//   data.beats. This component renders whatever order it is given.

//   IMPORTANT: every processContent() call is wrapped in a <div>, never a <p>.
//   processContent can emit <div> (academic blocks, SVG placeholders) and <ul>,
//   neither of which is legal inside <p>, and both of which cause hydration
//   errors if nested there.

//   beat.kind:
//     'prose'      — lead + content
//     'instance'   — the worked case; tinted ground in flat variant
//     'definition' — statement + formula callout + gloss + kindOfThing + link

//   beat.tone:
//     'break'      — the beat where something fails (template C); red accents
// */

// const PALETTE = {
//   navy: '#06357a',
//   slate: '#34495e',
//   rule: '#e2e6ec',
//   panel: '#f9fafb',
//   railBg: '#f1f4f8',
//   defBg: '#eef3fa',
//   defLine: '#c3d3ea',
//   break: '#a4243b',
//   breakBg: '#fdf3f4',
//   muted: '#7c8794',
//   railNum: '#a9c0e4',
// }

// export default function ConceptIntro({ variant = 'flat', data }) {
//   if (!data || !Array.isArray(data.beats) || data.beats.length === 0) return null

//   const structured = variant === 'structured'

//   const shellStyle = structured
//     ? {
//         background: PALETTE.panel,
//         border: `1px solid ${PALETTE.rule}`,
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
//         margin: '26px 0 30px',
//         overflow: 'hidden',
//       }
//     : { margin: '0' }

//   const showHeader = structured && (data.concept || data.scheme)

//   return (
//     <div style={shellStyle}>
//       {showHeader && (
//         <div
//           style={{
//             background: data.tone === 'break' ? PALETTE.break : PALETTE.navy,
//             color: '#ffffff',
//             padding: '12px 26px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'baseline',
//             gap: '16px',
//             flexWrap: 'wrap',
//           }}
//         >
//           <span style={{ fontSize: '15px', fontWeight: 700 }}>{data.concept}</span>
//           {data.scheme && (
//             <span
//               style={{
//                 fontSize: '10.5px',
//                 letterSpacing: '0.12em',
//                 textTransform: 'uppercase',
//                 color: PALETTE.railNum,
//                 fontWeight: 700,
//               }}
//             >
//               {data.scheme}
//             </span>
//           )}
//         </div>
//       )}

//       {data.beats.map((beat, i) => (
//         <Beat
//           key={beat.id || `beat-${i}`}
//           beat={beat}
//           index={i + 1}
//           structured={structured}
//           isLast={i === data.beats.length - 1}
//         />
//       ))}
//     </div>
//   )
// }

// function Beat({ beat, index, structured, isLast }) {
//   const body = <BeatBody beat={beat} structured={structured} />

//   if (!structured) return body

//   const broken = beat.tone === 'break'
//   const accent = broken ? PALETTE.break : PALETTE.navy
//   const railLines = Array.isArray(beat.rail) ? beat.rail : beat.rail ? [beat.rail] : []

//   return (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: '150px 1fr',
//         borderBottom: isLast ? 'none' : `1px solid ${PALETTE.rule}`,
//       }}
//     >
//       <div
//         style={{
//           background: broken ? PALETTE.breakBg : PALETTE.railBg,
//           borderRight: `1px solid ${PALETTE.rule}`,
//           padding: '22px 16px 22px 26px',
//         }}
//       >
//         <div
//           style={{
//             fontFamily: '"Cambria Math","Times New Roman",serif',
//             fontSize: '20px',
//             color: accent,
//             fontWeight: 700,
//             lineHeight: 1,
//             opacity: 0.45,
//             marginBottom: '6px',
//           }}
//         >
//           {index}
//         </div>
//         <div
//           style={{
//             fontSize: '11px',
//             letterSpacing: '0.11em',
//             textTransform: 'uppercase',
//             color: accent,
//             fontWeight: 700,
//             lineHeight: 1.45,
//           }}
//         >
//           {railLines.map((line, i) => (
//             <div key={`rail-${i}`}>{line}</div>
//           ))}
//         </div>
//       </div>

//       <div style={{ padding: '22px 26px' }}>{body}</div>
//     </div>
//   )
// }

// function BeatBody({ beat, structured }) {
//   if (beat.kind === 'definition') return <DefinitionBeat beat={beat} structured={structured} />
//   if (beat.kind === 'instance') return <InstanceBeat beat={beat} structured={structured} />
//   return <ProseBeat beat={beat} structured={structured} />
// }

// function ProseBeat({ beat, structured }) {
//   const accent = beat.tone === 'break' ? PALETTE.break : PALETTE.navy

//   if (structured) {
//     return (
//       <div>
//         {beat.lead && (
//           <div
//             style={{
//               fontSize: '17px',
//               color: accent,
//               lineHeight: 1.55,
//               marginBottom: '14px',
//               fontWeight: 700,
//             }}
//           >
//             {processContent(beat.lead)}
//           </div>
//         )}
//         {beat.content && <div style={{ fontSize: '16px' }}>{processContent(beat.content)}</div>}
//       </div>
//     )
//   }

//   return (
//     <div style={{ margin: '0 0 18px', fontSize: '16.5px' }}>
//       {beat.lead && (
//         <span style={{ color: accent, fontWeight: 700 }}>{processContent(beat.lead)}</span>
//       )}
//       {beat.lead && beat.content ? ' ' : null}
//       {beat.content && processContent(beat.content)}
//     </div>
//   )
// }

// function InstanceBeat({ beat, structured }) {
//   const inner = (
//     <>
//       {beat.lead && (
//         <div style={{ fontSize: '16px', marginBottom: '12px' }}>
//           <span style={{ color: PALETTE.navy, fontWeight: 700 }}>{processContent(beat.lead)}</span>
//         </div>
//       )}

//       {beat.visual}

//       {beat.caption && (
//         <div
//           style={{
//             fontSize: '14.5px',
//             color: PALETTE.muted,
//             textAlign: 'center',
//             margin: '4px 0 12px',
//           }}
//         >
//           {processContent(beat.caption)}
//         </div>
//       )}

//       {beat.content && <div style={{ fontSize: '16px' }}>{processContent(beat.content)}</div>}
//     </>
//   )

//   if (structured) return <div>{inner}</div>

//   return (
//     <div
//       style={{
//         background: PALETTE.panel,
//         borderLeft: `2px solid ${PALETTE.rule}`,
//         padding: '20px 24px 8px',
//         margin: '24px 0',
//       }}
//     >
//       {inner}
//     </div>
//   )
// }

// function DefinitionBeat({ beat, structured }) {
//   return (
//     <div
//       style={{
//         background: PALETTE.defBg,
//         border: `1px solid ${PALETTE.defLine}`,
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(6,53,122,0.07)',
//         padding: '22px 26px 18px',
//         margin: structured ? '0' : '32px 0',
//       }}
//     >
//       <div
//         style={{
//           fontSize: '11px',
//           letterSpacing: '0.14em',
//           textTransform: 'uppercase',
//           color: PALETTE.navy,
//           fontWeight: 700,
//           marginBottom: '12px',
//         }}
//       >
//         {beat.kicker || 'The definition'}
//       </div>

//       {beat.statement && (
//         <div style={{ fontSize: '16.5px' }}>{processContent(beat.statement)}</div>
//       )}

//       {beat.formula && <div style={{ margin: '14px 0' }}>{processContent(beat.formula)}</div>}

//       {beat.gloss && (
//         <div style={{ fontSize: '16.5px', marginTop: beat.formula ? '0' : '14px' }}>
//           {processContent(beat.gloss)}
//         </div>
//       )}

//       {beat.kindOfThing && (
//         <div style={{ fontSize: '16.5px', marginTop: '14px' }}>
//           {processContent(beat.kindOfThing)}
//         </div>
//       )}

//       {beat.footer && (
//         <div
//           style={{
//             marginTop: '18px',
//             paddingTop: '14px',
//             borderTop: `1px solid ${PALETTE.defLine}`,
//             fontSize: '14.5px',
//           }}
//         >
//           {processContent(beat.footer)}
//         </div>
//       )}
//     </div>
//   )
// }



import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

/*
  ConceptIntro — renders a concept introduction section.

  ONE instance per section. The component walks data.blocks in order and
  renders each block according to its `type`. Order of appearance in the
  array is the only layout rule; the component supplies the styling.

  Block types
  -----------
  subtitle    { text }
  text        { lead?, content }
  instance    { lead?, visual?, caption?, content? }   tinted grey ground
  definition  { kicker?, statement?, formula?, gloss?, kindOfThing?, footer? }
  visual      { element, caption? }
  table       { html } or { element }
  formula     { content }                              callout string
  element     { element }                              rendered as given

  Visual weights, fixed here so they cannot drift between pages:
    tinted grey ground -> the worked instance
    tinted blue card   -> the definition
    plain prose        -> everything else

  IMPORTANT: every processContent() call is wrapped in a <div>, never a <p>.
  processContent can emit <div> (academic blocks, SVG placeholders) and <ul>,
  neither of which is legal inside <p>.
*/

const PALETTE = {
  navy: '#06357a',
  slate: '#34495e',
  rule: '#e2e6ec',
  panel: '#f9fafb',
  defBg: '#eef3fa',
  defLine: '#c3d3ea',
  break: '#a4243b',
  breakBg: '#fdf3f4',
  muted: '#7c8794',
}

const S = {
  subtitle: {
    fontSize: '17px',
    color: PALETTE.navy,
    fontWeight: 700,
    lineHeight: 1.4,
    margin: '32px 0 12px',
    paddingTop: '14px',
    borderTop: `1px solid ${PALETTE.rule}`,
  },
  text: {
    fontSize: '16.5px',
    margin: '0 0 18px',
  },
  instance: {
    background: PALETTE.panel,
    borderLeft: `2px solid ${PALETTE.rule}`,
    padding: '20px 24px 8px',
    margin: '24px 0',
  },
  instanceBreak: {
    background: PALETTE.breakBg,
    borderLeft: `2px solid ${PALETTE.break}`,
    padding: '20px 24px 8px',
    margin: '24px 0',
  },
  figure: {
    background: '#ffffff',
    border: `1px solid ${PALETTE.rule}`,
    borderRadius: '8px',
    padding: '18px 16px 8px',
    margin: '4px auto 14px',
    width: '100%',
  },
  caption: {
    fontSize: '14.5px',
    color: PALETTE.muted,
    textAlign: 'center',
    margin: '4px 0 12px',
  },
  definition: {
    background: PALETTE.defBg,
    border: `1px solid ${PALETTE.defLine}`,
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(6,53,122,0.07)',
    padding: '22px 26px 18px',
    margin: '32px 0',
  },
  kicker: {
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: PALETTE.navy,
    fontWeight: 700,
    marginBottom: '12px',
  },
  defBody: {
    fontSize: '16.5px',
    marginTop: '14px',
  },
  defFooter: {
    marginTop: '18px',
    paddingTop: '14px',
    borderTop: `1px solid ${PALETTE.defLine}`,
    fontSize: '14.5px',
  },
  table: {
    margin: '20px auto',
    width: '100%',
  },
  formula: {
    margin: '18px 0',
  },
}

export default function ConceptIntro({ data }) {
  if (!data || !Array.isArray(data.blocks) || data.blocks.length === 0) return null

  return (
    <div>
      {data.blocks.map((block, i) => (
        <Block key={block.id || `block-${i}`} block={block} />
      ))}
    </div>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'subtitle':
      return <Subtitle block={block} />
    case 'instance':
      return <Instance block={block} />
    case 'definition':
      return <Definition block={block} />
    case 'visual':
      return <Visual element={block.element} caption={block.caption} />
    case 'table':
      return <Table block={block} />
    case 'formula':
      return <div style={S.formula}>{processContent(block.content)}</div>
    case 'element':
      return <div>{block.element}</div>
    case 'text':
    default:
      return <Text block={block} />
  }
}

function Subtitle({ block }) {
  if (!block.text) return null
  return <h3 style={S.subtitle}>{processContent(block.text)}</h3>
}

function Text({ block }) {
  const accent = block.tone === 'break' ? PALETTE.break : PALETTE.navy
  return (
    <div style={S.text}>
      {block.lead && (
        <span style={{ color: accent, fontWeight: 700 }}>{processContent(block.lead)}</span>
      )}
      {block.lead && block.content ? ' ' : null}
      {block.content && processContent(block.content)}
    </div>
  )
}

function Instance({ block }) {
  const shell = block.tone === 'break' ? S.instanceBreak : S.instance
  const accent = block.tone === 'break' ? PALETTE.break : PALETTE.navy

  return (
    <div style={shell}>
      {block.lead && (
        <div style={{ fontSize: '16px', marginBottom: '12px' }}>
          <span style={{ color: accent, fontWeight: 700 }}>{processContent(block.lead)}</span>
        </div>
      )}

      {block.visual && <Visual element={block.visual} caption={block.caption} />}
      {!block.visual && block.caption && (
        <div style={S.caption}>{processContent(block.caption)}</div>
      )}

      {block.content && <div style={{ fontSize: '16px' }}>{processContent(block.content)}</div>}
    </div>
  )
}

function Visual({ element, caption }) {
  if (!element) return null
  return (
    <div>
      <div style={S.figure}>{element}</div>
      {caption && <div style={S.caption}>{processContent(caption)}</div>}
    </div>
  )
}

function Table({ block }) {
  if (block.html) {
    return <div style={S.table} dangerouslySetInnerHTML={{ __html: block.html }} />
  }
  if (block.element) {
    return <div style={S.table}>{block.element}</div>
  }
  return null
}

function Definition({ block }) {
  return (
    <div style={S.definition}>
      <div style={S.kicker}>{block.kicker || 'The definition'}</div>

      {block.statement && (
        <div style={{ fontSize: '16.5px' }}>{processContent(block.statement)}</div>
      )}

      {block.formula && <div style={{ margin: '14px 0' }}>{processContent(block.formula)}</div>}

      {block.gloss && (
        <div style={{ ...S.defBody, marginTop: block.formula ? '0' : '14px' }}>
          {processContent(block.gloss)}
        </div>
      )}

      {block.kindOfThing && <div style={S.defBody}>{processContent(block.kindOfThing)}</div>}

      {block.footer && <div style={S.defFooter}>{processContent(block.footer)}</div>}
    </div>
  )
}