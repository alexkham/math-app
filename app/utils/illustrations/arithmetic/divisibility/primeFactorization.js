// utils/illustrations/arithmetic/divisibility/primeFactorization.js
//
// String-based SVG renderer for the "prime-factorization" illustration component.
// v1.
//
// Scene types:
//
//   'tree'           — factor tree for a single integer n.
//                      Branches split repeatedly until every leaf is a prime
//                      (rendered as an amber circle). A product line below the
//                      tree shows n = p1^a1 · p2^a2 · ...
//
//   'paired-stacks'  — two side-by-side prime-power stacks for a and b.
//                      For each prime in the union of factorizations, a column
//                      of chips of height = exponent in that number. The
//                      'highlight' field selects 'min' (GCD) or 'max' (LCM):
//                      chips up to that height are amber, the rest are dashed-
//                      muted. A result line below states gcd or lcm.
//
// Customizability contract: a self-contained `const C = {...}` palette holds
// defaults; spec.style merges over it once at the top of each scene renderer.
// All color references use `palette.X`, never literal hex.

// ───────────────────────── Default palette ─────────────────────────

const C = {
  // Surfaces / structure
  background:   '#FFFFFF',
  border:       '#5F5E5A',
  text:         '#5F5E5A',
  textMuted:    '#888780',
  neutral:      '#888780',

  // Role colors
  primary:      '#6B62CE',     // title, root box, result formula
  secondary:    '#4FB3A7',     // (reserved; not used today)
  result:       '#EF9F27',     // amber fill — highlight chips, prime leaves
  resultStroke: '#BA7517',     // amber stroke
  negation:     '#C5503F',     // (reserved)

  // Chip-specific (override-friendly)
  fill:         '#EF9F27',     // alias for result; primary chip fill
  stroke:       '#BA7517',     // alias for resultStroke
}

// ───────────────────────── Layout constants ─────────────────────────

const VIEWBOX_W = 680
const TITLE_X = 30
const TITLE_Y = 24
const INFO_X = 450
const INFO_W = 200  // 450..650

// Tree
const TREE_ROOT_W = 60
const TREE_ROOT_H = 30
const TREE_BOX_W = 56
const TREE_BOX_H = 28
const TREE_LEAF_R = 14
const TREE_LEVEL_DY = 56
const TREE_TOP_Y = 44
const TREE_HSPACE_MIN = 36  // minimum horizontal gap between leaves

// Paired-stacks
const STK_TOP_Y = 44         // header y
const STK_HEADER_NUM_Y = 56  // number label
const STK_HEADER_FACT_Y = 72 // factorization label
const STK_COL_HDR_Y = 98     // column prime header
const STK_BASE_Y = 258       // baseline y (chips grow upward)
const STK_CHIP_W = 32
const STK_CHIP_H = 26        // step between chips
const STK_COL_GAP = 4        // gap between columns within a stack
const STK_STACK_GAP = 40     // gap between the two stacks

// ───────────────────────── Math helpers ─────────────────────────

function factorize(n) {
  // returns Map<prime, exponent> sorted by ascending prime
  const out = new Map()
  let x = n
  for (let p = 2; p * p <= x; p++) {
    while (x % p === 0) {
      out.set(p, (out.get(p) || 0) + 1)
      x = x / p
    }
  }
  if (x > 1) out.set(x, (out.get(x) || 0) + 1)
  return out
}

function formatPowerProduct(factorMap, colorPrime, colorExp) {
  // Returns an SVG <tspan> sequence representing p1^a1 · p2^a2 · ...
  // Skips exponent display when a = 1.
  const parts = []
  let first = true
  for (const [p, a] of factorMap.entries()) {
    if (!first) parts.push(`<tspan> · </tspan>`)
    first = false
    parts.push(`<tspan font-weight="600" fill="${colorPrime}">${p}</tspan>`)
    if (a > 1) {
      parts.push(`<tspan font-size="10" baseline-shift="super" fill="${colorExp}">${a}</tspan>`)
    }
  }
  return parts.join('')
}

function smallestPrimeFactor(n) {
  if (n % 2 === 0) return 2
  for (let p = 3; p * p <= n; p += 2) {
    if (n % p === 0) return p
  }
  return n // n is prime
}

function isPrime(n) {
  return n >= 2 && smallestPrimeFactor(n) === n
}

// ───────────────────────── Tree layout ─────────────────────────
//
// Build a binary factor tree by repeatedly extracting the smallest prime
// factor. Each composite node n splits into (p, n/p) where p is smallest
// prime factor. A node is a leaf when it is prime.

function buildTreeNode(n) {
  if (isPrime(n)) {
    return { value: n, isLeaf: true, children: [] }
  }
  const p = smallestPrimeFactor(n)
  return {
    value: n,
    isLeaf: false,
    children: [
      { value: p, isLeaf: true, children: [] },
      buildTreeNode(n / p),
    ],
  }
}

// Walk tree to compute x positions of leaves first, then propagate parents.
function layoutTree(root) {
  // First pass: count leaves to size horizontal slots
  let leafIdx = 0
  function assignLeafX(node) {
    if (node.isLeaf) {
      node._leafIdx = leafIdx++
      return
    }
    for (const c of node.children) assignLeafX(c)
  }
  assignLeafX(root)
  const leafCount = leafIdx

  // Compute total tree depth
  function depth(node) {
    if (node.isLeaf) return 0
    return 1 + Math.max(...node.children.map(depth))
  }
  const treeDepth = depth(root)

  // Choose horizontal slot width
  const slotW = Math.max(TREE_HSPACE_MIN + 16, 52)
  const treeW = leafCount * slotW
  // Center the tree horizontally in the left half (x: 30..400)
  const leftBound = 30
  const rightBound = 400
  const centerX = (leftBound + rightBound) / 2
  const offsetX = centerX - treeW / 2

  // Second pass: set x for each node based on leaves below it
  function setX(node, level) {
    node._level = level
    if (node.isLeaf) {
      node._x = offsetX + node._leafIdx * slotW + slotW / 2
    } else {
      for (const c of node.children) setX(c, level + 1)
      const xs = node.children.map(c => c._x)
      node._x = (Math.min(...xs) + Math.max(...xs)) / 2
    }
    node._y = TREE_TOP_Y + level * TREE_LEVEL_DY
  }
  setX(root, 0)

  return { root, treeDepth, leafCount, treeW }
}

function renderTreeNode(node, palette) {
  const x = node._x
  const y = node._y
  if (node.isLeaf) {
    // amber circle leaf
    return `
      <circle cx="${x}" cy="${y + TREE_LEAF_R}" r="${TREE_LEAF_R}"
              fill="${palette.fill}" fill-opacity="0.45"
              stroke="${palette.stroke}" stroke-width="1.4"/>
      <text x="${x}" y="${y + TREE_LEAF_R + 5}" font-family="sans-serif"
            font-size="13" font-weight="600" fill="${palette.text}"
            text-anchor="middle">${node.value}</text>
    `
  }
  // composite box (or root box, larger)
  const isRoot = node._level === 0
  const w = isRoot ? TREE_ROOT_W : TREE_BOX_W
  const h = isRoot ? TREE_ROOT_H : TREE_BOX_H
  const fill = isRoot ? palette.primary : palette.neutral
  const fillOp = isRoot ? '0.12' : '0.10'
  const strokeColor = isRoot ? palette.primary : palette.neutral
  const sw = isRoot ? 1.4 : 1.2
  const textWeight = isRoot ? '600' : '400'
  return `
    <rect x="${x - w/2}" y="${y}" width="${w}" height="${h}" rx="6"
          fill="${fill}" fill-opacity="${fillOp}"
          stroke="${strokeColor}" stroke-width="${sw}"/>
    <text x="${x}" y="${y + h/2 + 5}" font-family="sans-serif"
          font-size="${isRoot ? 15 : 14}" font-weight="${textWeight}"
          fill="${palette.text}" text-anchor="middle">${node.value}</text>
  `
}

function renderTreeBranches(node, palette) {
  if (node.isLeaf) return ''
  const x = node._x
  const y = node._y
  const isRoot = node._level === 0
  const h = isRoot ? TREE_ROOT_H : TREE_BOX_H
  const parentBottomY = y + h
  let svg = ''
  for (const c of node.children) {
    const cx = c._x
    const cy = c._y
    svg += `<line x1="${x - (isRoot ? 10 : 8)}" y1="${parentBottomY}"
                   x2="${cx}" y2="${cy}"
                   stroke="${palette.neutral}" stroke-width="1.2"/>`
    // Adjust slightly so two lines come from parent's left/right corners
    // Simpler: just draw a clean line from parent's bottom center to child top.
    // We replace the above with one clean line per child:
  }
  // Redo cleanly — one line from parent bottom-center to each child's top-center
  svg = ''
  for (const c of node.children) {
    const cx = c._x
    const cy = c._y
    const offset = c._x < x ? -10 : 10
    svg += `<line x1="${x + offset}" y1="${parentBottomY - 4}"
                   x2="${cx}" y2="${cy}"
                   stroke="${palette.neutral}" stroke-width="1.2"/>`
    svg += renderTreeBranches(c, palette)
  }
  return svg
}

function renderTreeNodes(node, palette) {
  let svg = renderTreeNode(node, palette)
  if (!node.isLeaf) {
    for (const c of node.children) {
      svg += renderTreeNodes(c, palette)
    }
  }
  return svg
}

// ───────────────────────── Info panel ─────────────────────────

function infoPanel(lines, palette, startY = TITLE_Y) {
  if (!lines || !Array.isArray(lines) || lines.length === 0) return ''
  let y = startY
  let svg = ''
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.kind === 'formula') {
      const color = roleColor(line.role, palette)
      const weight = line.role ? '600' : '500'
      svg += `<text x="${INFO_X}" y="${y}" font-family="sans-serif"
                    font-size="14" font-weight="${weight}"
                    fill="${color}">${escapeXml(line.text)}</text>`
      y += 24
    } else if (line.kind === 'separator') {
      svg += `<line x1="${INFO_X}" y1="${y - 14}" x2="${INFO_X + INFO_W}" y2="${y - 14}"
                    stroke="${palette.textMuted}" stroke-width="0.5" stroke-opacity="0.4"/>`
      y += 10
    } else if (line.kind === 'note') {
      const italic = line.italic ? ' font-style="italic"' : ''
      svg += `<text x="${INFO_X}" y="${y}" font-family="sans-serif"
                    font-size="11" fill="${palette.textMuted}"${italic}>${escapeXml(line.text)}</text>`
      y += 16
    }
  }
  return svg
}

function roleColor(role, palette) {
  switch (role) {
    case 'primary':   return palette.primary
    case 'secondary': return palette.secondary
    case 'result':    return palette.resultStroke
    case 'negation':  return palette.negation
    default:          return palette.text
  }
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// ───────────────────────── Scene: tree ─────────────────────────

function renderTree(spec) {
  const palette = { ...C, ...(spec.style || {}) }
  const n = spec.n
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) return ''

  const title = spec.title ?? `Prime factorization — ${n}`
  const factors = factorize(n)

  // Build & lay out the tree
  const root = buildTreeNode(n)
  const layout = layoutTree(root)

  // Compute viewBox height from tree depth
  const treeBottomY = TREE_TOP_Y + layout.treeDepth * TREE_LEVEL_DY + 2 * TREE_LEAF_R + 8
  const productLineY = treeBottomY + 20
  const productTextY = productLineY + 24
  const viewBoxH = Math.max(productTextY + 26, 220)

  // Render product line
  const productSvg = `
    <line x1="30" y1="${productLineY}" x2="400" y2="${productLineY}"
          stroke="${palette.textMuted}" stroke-width="0.5" stroke-opacity="0.4"/>
    <text x="30" y="${productTextY}" font-family="sans-serif" font-size="14" fill="${palette.text}">
      ${n} = ${formatPowerProduct(factors, palette.primary, palette.primary)}
    </text>
  `

  return `<svg width="100%" viewBox="0 0 ${VIEWBOX_W} ${viewBoxH}"
               xmlns="http://www.w3.org/2000/svg" role="img">
    <title>${escapeXml(title)}</title>
    <text x="${TITLE_X}" y="${TITLE_Y}" font-family="sans-serif"
          font-size="13" font-weight="600" fill="${palette.primary}">${escapeXml(title)}</text>
    ${renderTreeBranches(root, palette)}
    ${renderTreeNodes(root, palette)}
    ${productSvg}
    ${infoPanel(spec.info && spec.info.lines, palette)}
  </svg>`
}

// ───────────────────────── Scene: paired-stacks ─────────────────────────

function renderPairedStacks(spec) {
  const palette = { ...C, ...(spec.style || {}) }
  const a = spec.a
  const b = spec.b
  if (typeof a !== 'number' || typeof b !== 'number' || a < 2 || b < 2) return ''
  if (!Number.isInteger(a) || !Number.isInteger(b)) return ''
  const mode = spec.highlight === 'max' ? 'max' : 'min'

  const fa = factorize(a)
  const fb = factorize(b)

  // Union of primes, sorted
  const primeSet = new Set([...fa.keys(), ...fb.keys()])
  const primes = [...primeSet].sort((x, y) => x - y)

  // Compute selected exponents per prime
  const selected = new Map()
  for (const p of primes) {
    const ea = fa.get(p) || 0
    const eb = fb.get(p) || 0
    const exp = mode === 'min' ? Math.min(ea, eb) : Math.max(ea, eb)
    if (exp > 0) selected.set(p, exp)
  }

  // Result number
  let result = 1
  for (const [p, e] of selected.entries()) result *= Math.pow(p, e)

  // Title
  const op = mode === 'min' ? 'gcd' : 'lcm'
  const title = spec.title ?? `Prime factorizations — ${op}(${a}, ${b})`

  // ─── Stack layout ─────────────────────────────────────────────
  // Each stack has |primes| columns. Stack A on left, Stack B on right.
  // X positions are computed so both stacks fit in the left half (~ 30..420)
  // with a gap between them.

  // Width of one stack = primes.length columns
  const colW = STK_CHIP_W + STK_COL_GAP
  const stackW = Math.max(primes.length * colW, STK_CHIP_W + 8)

  // Left edge of stack A. Center both stacks within x: 20..420
  const totalW = 2 * stackW + STK_STACK_GAP
  const leftEdge = 20 + ((420 - 20) - totalW) / 2
  const stackAx0 = leftEdge
  const stackBx0 = leftEdge + stackW + STK_STACK_GAP

  // Render one stack
  function renderStack(x0, label, fmap) {
    const headerCx = x0 + stackW / 2
    let svg = `
      <text x="${headerCx}" y="${STK_HEADER_NUM_Y}" font-family="sans-serif"
            font-size="13" font-weight="600" fill="${palette.text}"
            text-anchor="middle">${label}</text>
      <text x="${headerCx}" y="${STK_HEADER_FACT_Y}" font-family="sans-serif"
            font-size="11" fill="${palette.textMuted}"
            text-anchor="middle">${formatPowerProductPlain(fmap)}</text>
    `
    // Columns
    for (let i = 0; i < primes.length; i++) {
      const p = primes[i]
      const cx = x0 + i * colW + STK_CHIP_W / 2
      const colExp = fmap.get(p) || 0
      const selExp = selected.get(p) || 0

      // Column prime header
      svg += `<text x="${cx}" y="${STK_COL_HDR_Y}" font-family="sans-serif"
                    font-size="11" fill="${palette.textMuted}"
                    text-anchor="middle">${p}</text>`

      // Chips (grow upward from baseline)
      for (let k = 1; k <= colExp; k++) {
        const yTop = STK_BASE_Y - k * STK_CHIP_H
        const highlighted = k <= selExp
        if (highlighted) {
          svg += `
            <rect x="${cx - STK_CHIP_W/2}" y="${yTop}" width="${STK_CHIP_W}" height="${STK_CHIP_H - 4}" rx="4"
                  fill="${palette.fill}" fill-opacity="0.55"
                  stroke="${palette.stroke}" stroke-width="1.4"/>
            <text x="${cx}" y="${yTop + (STK_CHIP_H - 4)/2 + 4}" font-family="sans-serif"
                  font-size="12" font-weight="600" fill="${palette.text}"
                  text-anchor="middle">${p}</text>
          `
        } else {
          svg += `
            <rect x="${cx - STK_CHIP_W/2}" y="${yTop}" width="${STK_CHIP_W}" height="${STK_CHIP_H - 4}" rx="4"
                  fill="${palette.neutral}" fill-opacity="0.10"
                  stroke="${palette.neutral}" stroke-width="1.2"
                  stroke-dasharray="3 3"/>
            <text x="${cx}" y="${yTop + (STK_CHIP_H - 4)/2 + 4}" font-family="sans-serif"
                  font-size="12" fill="${palette.textMuted}"
                  text-anchor="middle">${p}</text>
          `
        }
      }
    }
    // Baseline
    svg += `<line x1="${x0 - 4}" y1="${STK_BASE_Y}" x2="${x0 + stackW + 4}" y2="${STK_BASE_Y}"
                  stroke="${palette.text}" stroke-width="1.4"/>`
    return svg
  }

  const stackASvg = renderStack(stackAx0, String(a), fa)
  const stackBSvg = renderStack(stackBx0, String(b), fb)

  // Result rows below
  const resultY1 = STK_BASE_Y + 32
  const resultY2 = resultY1 + 20
  const modeWord = mode === 'min' ? 'minimum' : 'maximum'
  const resultSvg = `
    <text x="30" y="${resultY1}" font-family="sans-serif" font-size="13" fill="${palette.text}">
      ${op.toUpperCase()} takes the <tspan font-weight="600" fill="${palette.stroke}">${modeWord}</tspan> exponent of each ${mode === 'min' ? 'shared' : ''} prime:
    </text>
    <text x="30" y="${resultY2}" font-family="sans-serif" font-size="14" fill="${palette.text}">
      ${op}(${a}, ${b}) = ${formatPowerProduct(selected, palette.primary, palette.primary)} = <tspan font-weight="700" fill="${palette.primary}">${result}</tspan>
    </text>
  `

  const viewBoxH = resultY2 + 16

  return `<svg width="100%" viewBox="0 0 ${VIEWBOX_W} ${viewBoxH}"
               xmlns="http://www.w3.org/2000/svg" role="img">
    <title>${escapeXml(title)}</title>
    <text x="${TITLE_X}" y="${TITLE_Y}" font-family="sans-serif"
          font-size="13" font-weight="600" fill="${palette.primary}">${escapeXml(title)}</text>
    ${stackASvg}
    ${stackBSvg}
    ${resultSvg}
    ${infoPanel(spec.info && spec.info.lines, palette)}
  </svg>`
}

function formatPowerProductPlain(fmap) {
  // Plain-text version (used in stack header subtitle): "2⁴ · 3"
  const supers = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' }
  const parts = []
  for (const [p, a] of fmap.entries()) {
    if (a === 1) parts.push(String(p))
    else parts.push(String(p) + String(a).split('').map(d => supers[d]).join(''))
  }
  return parts.join(' · ')
}

// ───────────────────────── Public API ─────────────────────────

export function renderPrimeFactorization(spec) {
  if (!spec || typeof spec !== 'object') return ''
  switch (spec.kind) {
    case 'tree':           return renderTree(spec)
    case 'paired-stacks':  return renderPairedStacks(spec)
    default:               return ''
  }
}