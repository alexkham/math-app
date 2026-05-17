'use client';

// TableLayout.jsx — v4.2
// - Per cell: only one ? at a time. Not in place → upper-left ? ("get a hint").
//   In place → upper-left ? gone, only "see why" link in the strip.
// - All ? (cells + headers + see-why) use the same click-popover. No hover.
// - Everything prop-driven: no tip → no ? rendered at all.

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';

/* ============================================================
   PURE HELPERS
   ============================================================ */

function normalizeHeader(h) {
  if (h && typeof h === 'object') {
    if (h.variants) return h;
    const variants = {};
    if (h.rad !== undefined) variants.rad = h.rad;
    if (h.deg !== undefined) variants.deg = h.deg;
    if (Object.keys(variants).length > 0) {
      const { rad, deg, ...rest } = h;
      return { ...rest, variants };
    }
  }
  return h;
}

function normalizeData(data) {
  let cells;
  if (data.cells) {
    cells = data.cells.map((row) => row.map((c) => ({ ...c })));
  } else if (data.values) {
    cells = data.values.map((row) => row.map((v) => ({ value: v })));
  } else {
    throw new Error('TableLayout: data must include `cells` or `values`.');
  }
  return {
    rowHeaders: data.rowHeaders.map(normalizeHeader),
    colHeaders: data.colHeaders.map(normalizeHeader),
    cells,
  };
}

function buildTiles(cells) {
  const tiles = [];
  let id = 0;
  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[r].length; c++) {
      tiles.push({
        id: id++,
        content: cells[r][c].value,
        tip: cells[r][c].tip ?? null,
        link: cells[r][c].link ?? null,
      });
    }
  }
  return tiles;
}

function createSlots(cells) {
  return Array.from({ length: cells.length }, () =>
    Array.from({ length: cells[0].length }, () => null)
  );
}

function homeSlots(cells, tiles) {
  const slots = createSlots(cells);
  let k = 0;
  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[r].length; c++) {
      slots[r][c] = tiles[k++].id;
    }
  }
  return slots;
}

function shuffleSlots(cells, tiles) {
  const ids = tiles.map((t) => t.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  const slots = createSlots(cells);
  let k = 0;
  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[r].length; c++) {
      slots[r][c] = ids[k++];
    }
  }
  return slots;
}

function isCorrectAt(tile, r, c, cells) {
  if (!tile) return false;
  return tile.content === cells[r][c].value;
}

function checkSolved(slots, cells, tilesById) {
  for (let r = 0; r < slots.length; r++) {
    for (let c = 0; c < slots[r].length; c++) {
      const id = slots[r][c];
      if (id === null || id === undefined) return false;
      const t = tilesById.get(id);
      if (!isCorrectAt(t, r, c, cells)) return false;
    }
  }
  return true;
}

function swapSlots(slots, a, b) {
  const next = slots.map((row) => row.slice());
  const tmp = next[a.r][a.c];
  next[a.r][a.c] = next[b.r][b.c];
  next[b.r][b.c] = tmp;
  return next;
}

function transpose(cells, rowHeaders, colHeaders, slots) {
  const R = cells.length;
  const C = cells[0].length;
  const newCells = Array.from({ length: C }, (_, r) =>
    Array.from({ length: R }, (_, c) => cells[c][r])
  );
  const newSlots = Array.from({ length: C }, (_, r) =>
    Array.from({ length: R }, (_, c) => slots[c][r])
  );
  return {
    cells: newCells,
    rowHeaders: colHeaders,
    colHeaders: rowHeaders,
    slots: newSlots,
  };
}

function headerDisplay(h, unitKey) {
  if (h === null || h === undefined) return { primary: '' };
  if (typeof h === 'string') return { primary: h };
  const tip = h.tip ?? null;
  const link = h.link ?? null;
  if (h.variants && h.variants[unitKey] !== undefined) {
    return { primary: h.variants[unitKey], secondary: h.arg ?? null, tip, link };
  }
  if (h.variants) {
    const firstKey = Object.keys(h.variants)[0];
    return { primary: h.variants[firstKey], secondary: h.arg ?? null, tip, link };
  }
  if (h.name !== undefined) {
    return { primary: h.name, secondary: h.arg ?? null, tip, link };
  }
  return { primary: h.label ?? '', tip, link };
}

function anyHeaderHasVariants(headers) {
  return headers.some(
    (h) => h && typeof h === 'object' && h.variants && Object.keys(h.variants).length > 0
  );
}

function nextUnit(current, options) {
  const i = options.indexOf(current);
  if (i === -1) return options[0];
  return options[(i + 1) % options.length];
}

/* ============================================================
   DEFAULT THEME — SKY
   ============================================================ */

export const SKY_THEME = {
  name: 'sky',
  light: {
    '--bg': '#f0f7ff',
    '--text': '#0f2849',
    '--muted': '#64748b',
    '--board': '#dceaf8',
    '--header-bg': '#c5dcf2',
    '--header-text': '#0f2849',
    '--cell': '#ffffff',
    '--tile': '#3b82f6',
    '--tile-hover': '#2563eb',
    '--tile-text': '#ffffff',
    '--tile-correct-bg': '#eaf3fd',
    '--tile-correct-border': '#1e40af',
    '--tile-correct-text': '#0f2849',
    '--success-bg': '#1e40af',
    '--success-text': '#ffffff',
    '--success-link': '#bfdbfe',
    '--accent': '#2563eb',
    '--accent-soft': '#dbeafe',
    '--btn': '#2563eb',
    '--btn-hover': '#1d4ed8',
    '--btn-text': '#ffffff',
    '--btn-secondary-bg': '#dceaf8',
    '--btn-secondary-hover': '#bfdbfe',
    '--btn-secondary-text': '#0f2849',
    '--win': '#1e40af',
    '--win-glow': 'rgba(59, 130, 246, 0.45)',
    '--banner-bg': '#ffffff',
    '--banner-shadow': 'rgba(15, 40, 73, 0.18)',
    '--tip-bg': '#0f172a',
    '--tip-text': '#f1f5f9',
    '--tip-border': '#334155',
    '--tip-shadow': 'rgba(0, 0, 0, 0.35)',
    '--tip-link': '#93c5fd',
    '--tip-muted': '#94a3b8',
  },
  dark: {
    '--bg': '#0f1729',
    '--text': '#dbeafe',
    '--muted': '#94a3b8',
    '--board': '#1e293b',
    '--header-bg': '#334155',
    '--header-text': '#dbeafe',
    '--cell': '#1e293b',
    '--tile': '#3b82f6',
    '--tile-hover': '#2563eb',
    '--tile-text': '#ffffff',
    '--tile-correct-bg': '#1a2a4d',
    '--tile-correct-border': '#60a5fa',
    '--tile-correct-text': '#dbeafe',
    '--success-bg': '#1d4ed8',
    '--success-text': '#ffffff',
    '--success-link': '#bfdbfe',
    '--accent': '#60a5fa',
    '--accent-soft': '#1e3a5f',
    '--btn': '#2563eb',
    '--btn-hover': '#3b82f6',
    '--btn-text': '#ffffff',
    '--btn-secondary-bg': '#334155',
    '--btn-secondary-hover': '#475569',
    '--btn-secondary-text': '#dbeafe',
    '--win': '#60a5fa',
    '--win-glow': 'rgba(96, 165, 250, 0.5)',
    '--banner-bg': '#1e293b',
    '--banner-shadow': 'rgba(0, 0, 0, 0.5)',
    '--tip-bg': '#0a0f1e',
    '--tip-text': '#f1f5f9',
    '--tip-border': '#334155',
    '--tip-shadow': 'rgba(0, 0, 0, 0.6)',
    '--tip-link': '#93c5fd',
    '--tip-muted': '#94a3b8',
  },
};

/* ============================================================
   EXAMPLE DATA
   ============================================================ */

export const trigTableData = {
  rowHeaders: [
    { variants: { rad: '0',   deg: '0°'  }, tip: 'Zero angle.', link: '#' },
    { variants: { rad: 'π/6', deg: '30°' }, tip: 'Special angle from the 30-60-90 triangle.', link: '#' },
    { variants: { rad: 'π/4', deg: '45°' }, tip: 'Special angle from the 45-45-90 triangle. sin = cos.', link: '#' },
    { variants: { rad: 'π/3', deg: '60°' }, tip: 'Special angle from the 30-60-90 triangle.', link: '#' },
    { variants: { rad: 'π/2', deg: '90°' }, tip: 'Right angle. tan and sec are undefined.', link: '#' },
  ],
  colHeaders: [
    { label: 'sin', tip: 'Sine — opposite over hypotenuse; y on the unit circle.', link: '#' },
    { label: 'cos', tip: 'Cosine — adjacent over hypotenuse; x on the unit circle.', link: '#' },
    { label: 'tan', tip: 'Tangent — sin/cos.', link: '#' },
    { label: 'csc', tip: 'Cosecant — 1/sin.', link: '#' },
    { label: 'sec', tip: 'Secant — 1/cos.', link: '#' },
    { label: 'cot', tip: 'Cotangent — cos/sin.', link: '#' },
  ],
  cells: [
    [
      { value: '0', tip: 'sin(0) = 0.', link: '#' },
      { value: '1', tip: 'cos(0) = 1.', link: '#' },
      { value: '0', tip: 'tan(0) = 0/1 = 0.', link: '#' },
      { value: '∞', tip: 'csc(0) is undefined.', link: '#' },
      { value: '1', tip: 'sec(0) = 1.', link: '#' },
      { value: '∞', tip: 'cot(0) is undefined.', link: '#' },
    ],
    [
      { value: '1/2',   tip: 'sin(π/6) = 1/2.', link: '#' },
      { value: '√3/2',  tip: 'cos(π/6) = √3/2.', link: '#' },
      { value: '√3/3',  tip: 'tan(π/6) = 1/√3.', link: '#' },
      { value: '2',     tip: 'csc(π/6) = 2.', link: '#' },
      { value: '2√3/3', tip: 'sec(π/6) = 2/√3.', link: '#' },
      { value: '√3',    tip: 'cot(π/6) = √3.', link: '#' },
    ],
    [
      { value: '√2/2', tip: 'sin(π/4) = √2/2.', link: '#' },
      { value: '√2/2', tip: 'cos(π/4) = √2/2.', link: '#' },
      { value: '1',    tip: 'tan(π/4) = 1.', link: '#' },
      { value: '√2',   tip: 'csc(π/4) = √2.', link: '#' },
      { value: '√2',   tip: 'sec(π/4) = √2.', link: '#' },
      { value: '1',    tip: 'cot(π/4) = 1.', link: '#' },
    ],
    [
      { value: '√3/2',  tip: 'sin(π/3) = √3/2.', link: '#' },
      { value: '1/2',   tip: 'cos(π/3) = 1/2.', link: '#' },
      { value: '√3',    tip: 'tan(π/3) = √3.', link: '#' },
      { value: '2√3/3', tip: 'csc(π/3) = 2/√3.', link: '#' },
      { value: '2',     tip: 'sec(π/3) = 2.', link: '#' },
      { value: '√3/3',  tip: 'cot(π/3) = 1/√3.', link: '#' },
    ],
    [
      { value: '1', tip: 'sin(π/2) = 1.', link: '#' },
      { value: '0', tip: 'cos(π/2) = 0.', link: '#' },
      { value: '∞', tip: 'tan(π/2) is undefined.', link: '#' },
      { value: '1', tip: 'csc(π/2) = 1.', link: '#' },
      { value: '∞', tip: 'sec(π/2) is undefined.', link: '#' },
      { value: '0', tip: 'cot(π/2) = 0.', link: '#' },
    ],
  ],
};

/* ============================================================
   COMPONENT
   ============================================================ */

export default function TablePuzzle({
  data = trigTableData,
  title,
  hint,
  theme = SKY_THEME,
  initialMode = 'light',
  maxWidth = 900,
  maxHeight = 640,
  rowHeaderWidth = 120,
  colHeaderHeight = 56,
  unitsOptions = ['rad', 'deg'],
  initialUnits = 'rad',
  showUnitsToggle = true,
  showModeToggle = true,
  showShuffleButton = true,
  showFlipToggle = true,
  shuffleOnMount = true,
  onSolve,
}) {
  const initial = useMemo(() => {
    const norm = normalizeData(data);
    const tiles = buildTiles(norm.cells);
    return { ...norm, tiles };
  }, [data]);

  const [rowHeaders, setRowHeaders] = useState(initial.rowHeaders);
  const [colHeaders, setColHeaders] = useState(initial.colHeaders);
  const [cells, setCells] = useState(initial.cells);
  const tiles = useMemo(() => buildTiles(cells), [cells]);

  const [slots, setSlots] = useState(() =>
    shuffleOnMount
      ? shuffleSlots(initial.cells, initial.tiles)
      : homeSlots(initial.cells, initial.tiles)
  );

  const [mode, setMode] = useState(initialMode);
  const [units, setUnits] = useState(initialUnits);
  const [dragFrom, setDragFrom] = useState(null);
  const [dragOverPos, setDragOverPos] = useState(null);
  const [openTip, setOpenTip] = useState(null);
  const [justPlacedTileId, setJustPlacedTileId] = useState(null);
  const justPlacedTimer = useRef(null);

  const tilesById = useMemo(() => {
    const m = new Map();
    tiles.forEach((t) => m.set(t.id, t));
    return m;
  }, [tiles]);

  const solved = checkSolved(slots, cells, tilesById);

  useEffect(() => {
    if (solved && typeof onSolve === 'function') onSolve();
  }, [solved, onSolve]);

  useEffect(() => {
    if (!openTip) return;
    const onDocClick = (e) => {
      if (
        !e.target.closest('.tlPopover') &&
        !e.target.closest('.tlHelpBtn') &&
        !e.target.closest('.tlSeeWhy')
      ) {
        setOpenTip(null);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenTip(null);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [openTip]);

  useEffect(() => {
    return () => {
      if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
    };
  }, []);

  const triggerPulse = useCallback((tileId) => {
    setJustPlacedTileId(tileId);
    if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
    justPlacedTimer.current = setTimeout(() => {
      setJustPlacedTileId(null);
      justPlacedTimer.current = null;
    }, 700);
  }, []);

  const handleShuffle = useCallback(() => {
    setSlots(shuffleSlots(cells, tiles));
    setDragFrom(null);
    setDragOverPos(null);
    setOpenTip(null);
    setJustPlacedTileId(null);
    if (justPlacedTimer.current) {
      clearTimeout(justPlacedTimer.current);
      justPlacedTimer.current = null;
    }
  }, [cells, tiles]);

  const handleFlip = useCallback(() => {
    const t = transpose(cells, rowHeaders, colHeaders, slots);
    setCells(t.cells);
    setRowHeaders(t.rowHeaders);
    setColHeaders(t.colHeaders);
    setSlots(t.slots);
    setDragFrom(null);
    setDragOverPos(null);
    setOpenTip(null);
  }, [cells, rowHeaders, colHeaders, slots]);

  const handleToggleUnits = useCallback(() => {
    setUnits((u) => nextUnit(u, unitsOptions));
  }, [unitsOptions]);

  const handleToggleMode = useCallback(() => {
    setMode((m) => (m === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleDragStart = (e, r, c) => {
    if (solved) return;
    setDragFrom({ r, c });
    setOpenTip(null);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${r},${c}`);
  };

  const handleDragEnd = () => {
    setDragFrom(null);
    setDragOverPos(null);
  };

  const handleDragOver = (e, r, c) => {
    if (solved) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!dragOverPos || dragOverPos.r !== r || dragOverPos.c !== c) {
      setDragOverPos({ r, c });
    }
  };

  const handleDragLeave = (r, c) => {
    if (dragOverPos && dragOverPos.r === r && dragOverPos.c === c) {
      setDragOverPos(null);
    }
  };

  const handleDrop = (e, r, c) => {
    if (solved) return;
    e.preventDefault();
    setDragOverPos(null);
    if (!dragFrom) return;
    if (dragFrom.r === r && dragFrom.c === c) {
      setDragFrom(null);
      return;
    }
    const newSlots = swapSlots(slots, dragFrom, { r, c });
    setSlots(newSlots);
    setDragFrom(null);
    const movedId = newSlots[r][c];
    const moved = tilesById.get(movedId);
    if (isCorrectAt(moved, r, c, cells)) triggerPulse(movedId);
  };

  const palette = (theme && theme[mode]) || SKY_THEME[mode] || SKY_THEME.light;
  const variantsPresent =
    anyHeaderHasVariants(rowHeaders) || anyHeaderHasVariants(colHeaders);
  const renderUnitsToggle =
    showUnitsToggle && variantsPresent && unitsOptions.length > 1;

  const C = colHeaders.length;
  const R = rowHeaders.length;
  const boardStyle = {
    width: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    height: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
    maxWidth: '100%',
    gridTemplateColumns: `${typeof rowHeaderWidth === 'number' ? rowHeaderWidth + 'px' : rowHeaderWidth} repeat(${C}, minmax(0, 1fr))`,
    gridTemplateRows: `${typeof colHeaderHeight === 'number' ? colHeaderHeight + 'px' : colHeaderHeight} repeat(${R}, minmax(0, 1fr))`,
  };

  return (
    <div className="tlRoot" style={palette}>
      {showModeToggle && (
        <div className="tlTopBar">
          <button type="button" className="tlModeToggle" onClick={handleToggleMode}>
            {mode === 'dark' ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      )}

      {title && <h1 className="tlTitle">{title}</h1>}
      {hint && <div className="tlHint">{hint}</div>}

      <div className="tlControls">
        {showShuffleButton && (
          <button type="button" className="tlBtn" onClick={handleShuffle}>
            Shuffle
          </button>
        )}
        {showFlipToggle && (
          <button type="button" className="tlBtn tlBtnSecondary" onClick={handleFlip}>
            Flip rows ↔ cols
          </button>
        )}
        {renderUnitsToggle && (
          <button type="button" className="tlBtn tlBtnSecondary" onClick={handleToggleUnits}>
            Units: {units}
          </button>
        )}
      </div>

      <div className={`tlBoardWrap${solved ? ' tlSolved' : ''}`}>
        <div className="tlBoard" style={boardStyle}>
          <div className="tlCorner" />

          {colHeaders.map((h, i) => {
            const disp = headerDisplay(h, units);
            const tipOpen =
              openTip && openTip.kind === 'col' && openTip.index === i;
            return (
              <div key={`col-${i}`} className="tlHeader tlColHeader">
                <span className="tlHeaderText">
                  <span className="tlHeaderPrimary">{disp.primary}</span>
                  {disp.secondary && (
                    <span className="tlHeaderSecondary">{disp.secondary}</span>
                  )}
                </span>
                {disp.tip && (
                  <button
                    type="button"
                    className="tlHelpBtn tlHelpBtnHeader"
                    title="Get a hint"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenTip(tipOpen ? null : { kind: 'col', index: i });
                    }}
                  >
                    ?
                  </button>
                )}
                {tipOpen && (
                  <Popover
                    tip={disp.tip}
                    link={disp.link}
                    onClose={() => setOpenTip(null)}
                  />
                )}
              </div>
            );
          })}

          {rowHeaders.map((rh, r) => {
            const disp = headerDisplay(rh, units);
            const rowTipOpen =
              openTip && openTip.kind === 'row' && openTip.index === r;
            return (
              <Fragment key={`row-${r}`}>
                <div className="tlHeader tlRowHeader">
                  <span className="tlHeaderText">
                    <span className="tlHeaderPrimary">{disp.primary}</span>
                    {disp.secondary && (
                      <span className="tlHeaderSecondary">{disp.secondary}</span>
                    )}
                  </span>
                  {disp.tip && (
                    <button
                      type="button"
                      className="tlHelpBtn tlHelpBtnHeader"
                      title="Get a hint"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenTip(rowTipOpen ? null : { kind: 'row', index: r });
                      }}
                    >
                      ?
                    </button>
                  )}
                  {rowTipOpen && (
                    <Popover
                      tip={disp.tip}
                      link={disp.link}
                      onClose={() => setOpenTip(null)}
                    />
                  )}
                </div>

                {colHeaders.map((_, c) => {
                  const tileId = slots[r]?.[c];
                  const tile = tileId != null ? tilesById.get(tileId) : null;
                  const isDragOver =
                    dragOverPos && dragOverPos.r === r && dragOverPos.c === c;
                  const isCorrect = tile && isCorrectAt(tile, r, c, cells);
                  const isDragging =
                    dragFrom && dragFrom.r === r && dragFrom.c === c;
                  const cellTipOpen =
                    openTip &&
                    openTip.kind === 'cell' &&
                    tile &&
                    openTip.tileId === tile.id;
                  const justPulsed =
                    tile && justPlacedTileId === tile.id && isCorrect;
                  return (
                    <div
                      key={`cell-${r}-${c}`}
                      className={`tlCell${isDragOver ? ' tlCellDragOver' : ''}`}
                      onDragOver={(e) => handleDragOver(e, r, c)}
                      onDragLeave={() => handleDragLeave(r, c)}
                      onDrop={(e) => handleDrop(e, r, c)}
                    >
                      {tile && (
                        <div
                          className={[
                            'tlTile',
                            isCorrect ? 'tlTileCorrect' : '',
                            isDragging ? 'tlTileDragging' : '',
                            justPulsed ? 'tlTileJustPlaced' : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          draggable={!solved}
                          onDragStart={(e) => handleDragStart(e, r, c)}
                          onDragEnd={handleDragEnd}
                        >
                          {/* Upper-left ? — only when NOT in place, and tile has a tip */}
                          {!isCorrect && tile.tip && (
                            <button
                              type="button"
                              className="tlHelpBtn"
                              title="Get a hint"
                              draggable={false}
                              onMouseDown={(e) => e.stopPropagation()}
                              onDragStart={(e) => e.preventDefault()}
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenTip(
                                  cellTipOpen
                                    ? null
                                    : { kind: 'cell', tileId: tile.id }
                                );
                              }}
                            >
                              ?
                            </button>
                          )}

                          <div className="tlTileValue">
                            <span>{tile.content}</span>
                          </div>

                          {/* In-place strip — shows "see why" only when tip exists */}
                          {isCorrect && (
                            <div className="tlTileStrip">
                              <span>✓ In place</span>
                              {tile.tip && (
                                <>
                                  <span className="tlStripSep">—</span>
                                  <button
                                    type="button"
                                    className="tlSeeWhy"
                                    title="See why"
                                    draggable={false}
                                    onMouseDown={(e) => e.stopPropagation()}
                                    onDragStart={(e) => e.preventDefault()}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenTip(
                                        cellTipOpen
                                          ? null
                                          : { kind: 'cell', tileId: tile.id }
                                      );
                                    }}
                                  >
                                    see why
                                  </button>
                                </>
                              )}
                            </div>
                          )}

                          {cellTipOpen && tile.tip && (
                            <Popover
                              tip={tile.tip}
                              link={tile.link}
                              onClose={() => setOpenTip(null)}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>

        <div
          className={`tlBanner${solved ? ' tlBannerShow' : ''}`}
          aria-hidden={!solved}
        >
          ✓ Solved!
          <span className="tlBannerSub">
            Tiles locked. Shuffle to play again.
          </span>
        </div>
      </div>

      <style jsx>{`
        .tlRoot {
          position: relative;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: var(--text);
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          border-radius: 12px;
          transition: background 0.2s, color 0.2s;
        }

        .tlTopBar {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 8px;
        }
        .tlModeToggle {
          background: transparent;
          border: 1px solid var(--cell);
          color: var(--muted);
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-family: inherit;
        }
        .tlModeToggle:hover { background: var(--btn-secondary-bg); }

        .tlTitle { margin: 0 0 6px; font-size: 22px; font-weight: 600; }
        .tlHint {
          color: var(--muted);
          font-size: 14px;
          margin-bottom: 16px;
          text-align: center;
          max-width: 640px;
        }

        .tlControls {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .tlBtn {
          padding: 8px 14px;
          background: var(--btn);
          color: var(--btn-text);
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
          font-weight: 500;
          transition: background 0.15s;
        }
        .tlBtn:hover { background: var(--btn-hover); }
        .tlBtnSecondary {
          background: var(--btn-secondary-bg);
          color: var(--btn-secondary-text);
        }
        .tlBtnSecondary:hover { background: var(--btn-secondary-hover); }

        .tlBoardWrap {
          position: relative;
          padding: 8px;
          border-radius: 12px;
          transition: box-shadow 0.4s ease;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .tlSolved {
          box-shadow:
            0 0 0 3px var(--accent),
            0 0 30px 8px var(--win-glow);
          animation: tlPulse 1.6s ease-in-out infinite;
        }
        @keyframes tlPulse {
          0%, 100% { box-shadow: 0 0 0 3px var(--accent), 0 0 24px 6px var(--win-glow); }
          50%      { box-shadow: 0 0 0 3px var(--accent), 0 0 36px 12px var(--win-glow); }
        }

        .tlBoard {
          display: grid;
          gap: 6px;
          padding: 8px;
          background: var(--board);
          border-radius: 8px;
          box-sizing: border-box;
        }

        .tlCorner { background: transparent; }

        .tlHeader {
          position: relative;
          background: var(--header-bg);
          color: var(--header-text);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6px 28px 6px 14px;
          font-family: inherit;
          min-width: 0;
        }
        .tlHeaderText {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          line-height: 1.2;
        }
        .tlHeaderPrimary { font-size: 15px; font-weight: 600; }
        .tlHeaderSecondary {
          font-size: 12px;
          font-weight: 400;
          opacity: 0.75;
        }

        .tlCell {
          position: relative;
          background: var(--cell);
          border-radius: 6px;
          border: 2px dashed transparent;
          transition: border-color 0.15s, background 0.15s;
          padding: 0;
          min-width: 0;
          min-height: 0;
        }
        .tlCellDragOver {
          border-color: var(--accent);
          background: var(--accent-soft);
        }

        .tlTile {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--tile);
          color: var(--tile-text);
          border: 3px solid transparent;
          border-radius: 6px;
          cursor: grab;
          display: flex;
          flex-direction: column;
          user-select: none;
          font-family: inherit;
          font-weight: 500;
          text-align: center;
          line-height: 1.3;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .tlTile:hover { background: var(--tile-hover); }
        .tlTile:active { cursor: grabbing; }
        .tlTileDragging { opacity: 0.3; }
        .tlTileCorrect {
          background: var(--tile-correct-bg);
          color: var(--tile-correct-text);
          border-color: var(--tile-correct-border);
          font-weight: 700;
        }
        .tlTileCorrect:hover { background: var(--tile-correct-bg); }
        .tlTileJustPlaced { animation: tlTilePulse 0.7s ease; }
        @keyframes tlTilePulse {
          0%   { transform: scale(1);    box-shadow: 0 0 0 0 var(--win-glow); }
          40%  { transform: scale(1.06); box-shadow: 0 0 0 8px var(--win-glow); }
          100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
        }

        .tlSolved .tlTile { pointer-events: none; cursor: default; }
        .tlSolved .tlTile .tlHelpBtn,
        .tlSolved .tlTile .tlSeeWhy { pointer-events: auto; }

        .tlTileValue {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          min-height: 0;
          font-size: 14px;
        }

        .tlTileStrip {
          flex: 0 0 auto;
          background: var(--success-bg);
          color: var(--success-text);
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-top: 1px solid var(--tile-correct-border);
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        .tlStripSep { opacity: 0.6; }

        .tlSeeWhy {
          color: var(--success-link);
          text-decoration: underline;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
        }
        .tlSeeWhy:hover { color: #fff; }

        .tlHelpBtn {
          position: absolute;
          top: 6px;
          left: 8px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          background: transparent;
          color: rgba(255, 255, 255, 0.9);
          font-size: 11px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          line-height: 1;
          user-select: none;
          z-index: 5;
          transition: color 0.15s, background 0.15s;
        }
        .tlHelpBtn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.2);
        }
        .tlHelpBtnHeader {
          top: 4px;
          right: 6px;
          left: auto;
          color: var(--header-text);
          opacity: 0.55;
        }
        .tlHelpBtnHeader:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.08);
          color: var(--header-text);
        }

        .tlBanner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.6);
          background: var(--banner-bg);
          color: var(--win);
          padding: 18px 32px;
          border-radius: 12px;
          font-size: 22px;
          font-weight: 700;
          font-family: inherit;
          box-shadow: 0 12px 40px var(--banner-shadow);
          opacity: 0;
          pointer-events: none;
          transition:
            opacity 0.35s ease,
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 60;
          text-align: center;
          white-space: nowrap;
        }
        .tlBannerShow {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .tlBannerSub {
          display: block;
          font-size: 13px;
          font-weight: 400;
          color: var(--muted);
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   POPOVER
   ============================================================ */

function Popover({ tip, link, onClose }) {
  return (
    <div className="tlPopover" onMouseDown={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="tlPopoverClose"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
      >
        ×
      </button>
      <div className="tlPopoverText">{tip}</div>
      {link && (
        <a
          className="tlPopoverLink"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more →
        </a>
      )}
      <style jsx>{`
        .tlPopover {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--tip-bg);
          color: var(--tip-text);
          border: 1px solid var(--tip-border);
          border-radius: 8px;
          padding: 12px 28px 12px 14px;
          width: 260px;
          font-size: 13px;
          line-height: 1.45;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 400;
          text-align: left;
          box-shadow: 0 12px 30px var(--tip-shadow);
          z-index: 100;
          white-space: normal;
        }
        .tlPopoverClose {
          position: absolute;
          top: 4px;
          right: 6px;
          background: transparent;
          border: none;
          color: var(--tip-muted);
          cursor: pointer;
          font-size: 16px;
          padding: 0;
          line-height: 1;
          font-family: inherit;
        }
        .tlPopoverText { display: block; }
        .tlPopoverLink {
          display: inline-block;
          margin-top: 8px;
          color: var(--tip-link);
          text-decoration: none;
          font-weight: 600;
        }
        .tlPopoverLink:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}