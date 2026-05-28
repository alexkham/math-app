# Component Package — rectangle-tile

GCD-as-tiling visualization. A rectangle of integer dimensions `width × height` is divided into the largest possible identical square tiles; the tile side is `gcd(width, height)`. The same figure carries two readings: a tile-count reading and an aspect-ratio reading.

Renderer: `app/utils/illustrations/arithmetic/divisibility/rectangleTile.js`
Export: `renderRectangleTile(spec) → string`

---

## 1. Scope

Covered: one scene type, `tiled-rectangle`, rendering a `width × height` rectangle subdivided into `gcd(width, height)`-sided squares, in two readings:

- `tiles` — "largest square tile" framing: one amber anchor tile, `cols × rows = N tiles`.
- `ratio` — "aspect ratio" framing: amber row/col count bands, `width : height = cols : rows`.

The renderer computes all geometry (gcd, cols, rows, pixel sizing). Spec authors supply only the two dimensions, the reading, and the info panel.

Reused from another template: nothing. Self-contained renderer and palette.

Deferred / not in scope: non-rectangular tiling, tilings where the tile is not the gcd square, 3-number tilings, animated subdivision. Add as new readings or scene types only if a real second placement appears (see process doc §8).

Placement: one section in the divisibility section — `/arithmetic/divisibility/gcd` §10 (Applications), which contains both the tiling and the aspect-ratio sentences for the same 48×80 rectangle. No other tiling-shaped section exists across the 5 pages (surveyed gcd + factors).

---

## 2. Palette

All keys live in `const C` at the top of the renderer and are overridable per spec via `spec.style` (customizability contract — process doc §5, step 4).

| Role          | Default     | Meaning                                            |
|---------------|-------------|----------------------------------------------------|
| `primary`     | `#7F77DD`   | tile fill, `tiles` reading (purple)                |
| `secondary`   | `#3FB6A8`   | tile fill, `ratio` reading (teal)                  |
| `result`      | `#EF9F27`   | amber emphasis — anchor tile / count bands         |
| `resultStroke`| `#C25E3A`   | result formulas + count labels (coral)             |
| `border`      | `#5A52C9`   | outer rectangle stroke, `tiles` reading            |
| `borderRatio` | `#2E8C81`   | outer rectangle stroke, `ratio` reading            |
| `stroke`      | `#7F77DD`   | inner grid lines, `tiles` reading                  |
| `strokeRatio` | `#3FB6A8`   | inner grid lines, `ratio` reading                  |
| `text`        | `#34495e`   | dimension labels                                   |
| `textMuted`   | `#7a7a75`   | italic gloss                                        |
| `infoFormula` | `#5A52C9`   | info-panel formula default                         |
| `separator`   | `#dddddd`   | info-panel hairline                                |
| `background`  | `#ffffff`   | reserved surface (currently unused as a fill)      |

Tile role color is keyed off `reading` (tiles→primary, ratio→secondary); override either via `spec.style`.

---

## 3. Primitives

| Primitive       | Visual                                                                 |
|-----------------|------------------------------------------------------------------------|
| Tile grid       | `cols × rows` squares, role-colored fill at 0.16 opacity               |
| Anchor tile     | Top-left tile, amber fill 0.55 (`tiles` reading only)                  |
| Count bands     | Top row + left column, amber fill 0.30, corner re-tinted (`ratio` only)|
| Inner grid      | Hairlines between tiles, role-colored stroke, 0.55–0.6 opacity         |
| Outer border    | Rectangle outline, role-colored stroke 2                              |
| gcd label       | The gcd value centered in the anchor tile (`tiles` reading only)       |
| Count labels    | `cols` above, `rows` left (rotated), coral (`ratio` reading only)      |
| Dimension labels| `width` above, `height` left (rotated)                                 |
| Info panel      | Right-of-plane block: formula / note / separator lines                 |

---

## 4. Critical implementation notes

- No `c-*` themed groups are used, so the `style="fill:none"` gotcha does not apply here. The outer border uses a plain `fill="none"` attribute on a non-themed `<rect>`, which is safe.
- Fills are hardcoded hex with opacity tints (0.16 / 0.30 / 0.55), readable over light or dark surrounds — matching the system's dark-safety convention.
- Defaults are hardcoded hex (not CSS vars), per the content-driven customizability contract. Theme adaptation, if needed on a page, is done via `spec.style` overrides.

---

## 5. Style tokens

| Token            | Value      | Use                                        |
|------------------|------------|--------------------------------------------|
| `VIEWBOX_W`      | 680        | viewBox width (height auto-computed)       |
| `PLANE_X0,Y0`    | 60, 40     | rectangle top-left                         |
| `INFO_X`         | 250        | info-panel left edge                       |
| `INFO_RIGHT`     | 470        | info-panel separator right edge            |
| `MAX_PLANE_W/H`  | 170 / 250  | rectangle fit box (px)                     |
| `MIN_TILE`       | 26         | smallest tile (px)                         |
| `MAX_TILE`       | 56         | largest tile (px)                          |
| tile fill opacity| 0.16       | grid tiles                                 |
| anchor opacity   | 0.55       | `tiles` anchor                             |
| band opacity     | 0.30       | `ratio` bands (0.18 at corner)             |
| stroke width     | 1 / 2      | inner grid / outer border                  |
| font sizes       | 12–14      | labels, notes, formulas                    |

Tile pixel size: `floor(min(170/cols, 250/rows))`, clamped to [26, 56]. Deterministic from cols/rows.

---

## 6. Coordinate model

No math-coordinate plane. The figure is a pixel grid in SVG space: tile `(c, r)` (col, row from top-left, 0-indexed) maps to `x = 60 + c·t`, `y = 40 + r·t`, where `t` is the computed tile pixel size. No y-flip.

---

## 7. Layout rules

Plane (rectangle) on the left from `(60, 40)`; info panel on the right from `x = 250`. ViewBox width fixed at 680; height auto-computed as `max(planeBottom, infoEndY+10, 120)`. Dimension labels sit outside the rectangle (width above, height rotated on the left). `ratio` count labels sit further out than the dimension labels to avoid collision.

---

## 8. Topic-specific specification language

None. There is no algebra or sampling layer. The only computed-not-authored values are `side = gcd(w,h)`, `cols = w/side`, `rows = h/side`. Authors never pass tile counts, the gcd, or pixel sizes.

---

## 9. Spec schema

```ts
type Spec = TiledRectangle;

type TiledRectangle = {
  kind: 'tiled-rectangle';
  width: number;             // rectangle width, math units (e.g. 48)
  height: number;            // rectangle height (e.g. 80)
  reading: 'tiles' | 'ratio';
  info: InfoPanel;
  style?: Partial<Palette>;  // any subset of §2 keys; rest fall through to C
};

type InfoPanel = { lines: InfoLine[] };

type InfoLine =
  | { kind: 'formula'; text: string; role?: 'primary' | 'secondary' | 'result' }
  | { kind: 'note'; text: string; italic?: boolean }
  | { kind: 'separator' };

// Renderer-computed, never authored:
//   side = gcd(width, height)
//   cols = width / side
//   rows = height / side
```

Overridable `style` keys (all of §2): `primary, secondary, result, resultStroke, border, borderRatio, stroke, strokeRatio, text, textMuted, infoFormula, separator, background`.

Defaults applied by the renderer: `reading` has no default (required); an absent or malformed `info` renders an empty info column; unknown `kind` returns an empty `<svg>`.

---

## 10. Spec examples

Tiles reading:

```js
renderRectangleTile({
  kind: 'tiled-rectangle',
  width: 48, height: 80, reading: 'tiles',
  info: { lines: [
    { kind: 'formula', text: 'largest square tile', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'side = gcd(48, 80) = 16' },
    { kind: 'note', text: '48 / 16 = 3 tiles across' },
    { kind: 'note', text: '80 / 16 = 5 tiles down' },
    { kind: 'separator' },
    { kind: 'formula', text: '3 × 5 = 15 tiles', role: 'result' },
    { kind: 'note', text: 'no gaps, no overlaps', italic: true },
  ]},
})
```

Ratio reading:

```js
renderRectangleTile({
  kind: 'tiled-rectangle',
  width: 48, height: 80, reading: 'ratio',
  info: { lines: [
    { kind: 'formula', text: 'aspect ratio 48 : 80', role: 'secondary' },
    { kind: 'separator' },
    { kind: 'note', text: 'divide both by gcd(48, 80) = 16' },
    { kind: 'note', text: '48 / 16 = 3' },
    { kind: 'note', text: '80 / 16 = 5' },
    { kind: 'separator' },
    { kind: 'formula', text: '48 : 80 = 3 : 5', role: 'result' },
    { kind: 'note', text: '3 and 5 are coprime — lowest terms', italic: true },
  ]},
})
```

---

## 11. Scene catalog

| Scene name        | Spec shape                                  | Placement              |
|-------------------|---------------------------------------------|------------------------|
| tiling-48x80      | `tiled-rectangle`, 48×80, `reading:'tiles'` | gcd §10 (Applications) |
| ratio-48x80       | `tiled-rectangle`, 48×80, `reading:'ratio'` | gcd §10 (Applications) |

Both target the same section (`obj10`). Integration decision pending: both figures vs one (the section is currently end-of-section prose with no figure).

---

## 12. Renderer requirements

The component takes a `Spec` and returns an SVG string. It must:

1. Validate `spec.kind === 'tiled-rectangle'`; otherwise return an empty `<svg>`.
2. Merge `palette = { ...C, ...(spec.style || {}) }` once; reference colors only via `palette.X`.
3. Compute `side = gcd(width, height)`, `cols = width/side`, `rows = height/side`.
4. Compute tile pixel size deterministically and clamp to [MIN_TILE, MAX_TILE].
5. Draw the `cols × rows` tile grid in the reading's role color at 0.16 opacity.
6. `tiles` reading: draw an amber anchor tile + gcd label inside it.
7. `ratio` reading: draw amber top-row and left-col bands (corner re-tinted) + coral cols/rows count labels.
8. Draw inner grid hairlines and the outer border in the reading's stroke colors.
9. Draw width/height dimension labels outside the rectangle.
10. Render the info panel (formula / note / separator line kinds).
11. Auto-compute viewBox height from plane and info column.
12. Emit `<title>`/`<desc>` describing the tiling for screen readers.
13. Be deterministic: identical spec → byte-identical string (no random IDs, no timestamps).

---

## 13. Validation checklist

- Both catalog scenes render from spec only.
- Hand-coded demos (`rectangle-tile-demo-1-tiles`, `-2-ratio`) match spec-rendered output pixel-near.
- gcd computation correct for the anchor case (48,80 → 16, 3×5).
- Coprime dims (e.g. 3×5) → side 1, full unit grid, gcd label "1".
- Square dims (e.g. 24×24) → 1×1 single tile, no inner lines.
- One dim a multiple of the other (e.g. 16×48) → 1×3 / 3×1 strip renders cleanly.
- `tiles` anchor tile and `ratio` bands never overflow the rectangle.
- `ratio` count labels do not collide with dimension labels.
- Light + dark surround parity (opacity-tinted fills readable in both).
- ViewBox height auto-fits; no whitespace below the taller column.
- `style` override of any §2 key changes only that role.
- Two renders of the same spec produce identical strings.