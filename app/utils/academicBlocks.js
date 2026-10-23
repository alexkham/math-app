
'use client';
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ReactDOMServer from 'react-dom/server';

// ─── Centralized constants for formula callouts ──────────────
// Change these in one place to retheme all formula callouts.
const FORMULA_CALLOUT_DEFAULTS = {
  minWidth: '60%',                       // grows past this if the formula is wider
  borderColor: '#0040a0',
  background: '#f8f9ff',
  titleColor: '#0040a0',
  dividerColor: '#0040a040',             // colored border with alpha
  formulaPadY: '18px',                   // breathing room around the formula
  formulaPadYSerif: '20px',
  footerText: 'Learn more about this formula:',
  arrow: '\u2192',                       // →
};

// ─── Warning triangle drawn before the title of `pitfall` blocks ───
const PITFALL_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><path d="M12 3.5 22 20.5H2Z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.3" r="0.6" fill="#B45309"/></svg>';

// ─── Light bulb drawn before the title of `fact` blocks ───
const FACT_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0C447C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/></svg>';

// ─── Target drawn at the start of `punchline` bands ───
const PUNCHLINE_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#DCE6F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="#DCE6F3"/></svg>';

// ─── Centralized constants for "browse all formulas" links ───
// These sit directly under a formula_callout card.
// Negative marginTop pulls them tight against the card above.
const FORMULAS_LINK_DEFAULTS = {
  marginTop: '-14px',
  marginBottom: '24px',
  arrow: '\u2192',

  // L6 (default — ornament: side rules flanking the link)
  ornamentColor: '#4a6da8',
  ornamentRuleColor: '#d1d5db',
  ornamentFontSize: '12px',
  ornamentLetterSpacing: '0.04em',

  // L1 (alternate — plain centered link, no decoration)
  plainColor: '#0040a0',
  plainFontSize: '13px',
};

// ─── Shared parsing helpers for formula blocks ───────────────
// Two authoring conventions exist in the corpus:
//   multi-line  — one field per line (the original convention)
//   single-line — pipe-delimited, e.g.  id|Title|$$formula$$
// Both are accepted. The helpers below normalise them to one shape so the
// renderers never branch on format.

// 'determinant_of_product' → 'Determinant of product'
const humaniseFormulaId = (id) => {
  if (!id) return '';
  const words = id.replace(/[-_]+/g, ' ').trim();
  if (!words) return '';
  return words.charAt(0).toUpperCase() + words.slice(1);
};

const looksLikeUrl = (s) => /^!?(?:\/|https?:\/\/|#)/.test((s || '').trim());

// → { title, formula, url }   url may be '' — the footer row is then suppressed
const parseFormulaCallout = (content) => {
  const lines = content.trim().split(/\r?\n/);

  // Single-line, pipe-delimited:  id|Title|$$formula$$  or  Title|$$formula$$
  if (lines.length === 1 && lines[0].indexOf('|') !== -1) {
    const parts = lines[0].split('|').map((s) => s.trim());
    while (parts.length > 1 && parts[parts.length - 1] === '') parts.pop();

    if (parts.length >= 3) {
      return { title: parts[1], formula: parts.slice(2).join('|'), url: '' };
    }
    if (parts.length === 2) {
      return { title: parts[0], formula: parts[1], url: '' };
    }
    return { title: parts[0] || '', formula: '', url: '' };
  }

  // A single line with no pipes is a bare title — never reuse it as the URL.
  if (lines.length === 1) {
    return { title: lines[0].trim(), formula: '', url: '' };
  }

  // Multi-line:  Title / formula… / URL
  const title = lines[0].trim();
  let url = lines[lines.length - 1].trim();
  let formula;

  if (looksLikeUrl(url)) {
    formula = lines.slice(1, -1).join('\n');
    if (url.startsWith('!')) url = url.substring(1);
  } else {
    formula = lines.slice(1).join('\n');
    url = '';
  }

  return { title, formula, url };
};

// → { label, url }
const parseFormulasLink = (content) => {
  const lines = content.trim().split(/\r?\n/);

  // Single-line URL only — derive the label from the fragment.
  if (lines.length === 1 && looksLikeUrl(lines[0])) {
    let url = lines[0].trim();
    if (url.startsWith('!')) url = url.substring(1);
    const hash = url.indexOf('#');
    const label = hash !== -1
      ? humaniseFormulaId(url.substring(hash + 1))
      : 'Browse all formulas';
    return { label, url };
  }

  // Single line that is not a URL — a label with nowhere to point.
  if (lines.length === 1) {
    return { label: lines[0].trim(), url: '' };
  }

  // Multi-line:  Label / URL
  let url = lines[lines.length - 1].trim();
  if (url.startsWith('!')) url = url.substring(1);
  return { label: lines[0].trim(), url };
};

export const renderAcademicBlockHTML = (
  content,
  blockType,
  customWidth = null,
  customAlign = null,
  customOpts = {}
) => {
  const type = (blockType || 'theorem').toLowerCase();

  const {
    cite = null,
    tags = null,
    number = null,
    linkto = null,
    collapsible = false,
    compact = false,
    aside = false,
  } = customOpts;

  const styles = {
    // Original
    theorem:    { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0', label: 'Theorem' },
    definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000', label: 'Definition' },
    lemma:      { border: '2px solid #800060', background: '#fff8ff', color: '#800060', label: 'Lemma' },
    example:    { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f6f6f7', color: '#404080', label: 'Example' },
    proof:      { border: '1px solid #505050', background: '#fafafa', color: '#505050', label: 'Proof' },

    // Thick-left
    thick_left_theorem:    { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0', label: 'Theorem' },
    thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000', label: 'Definition' },
    thick_left_lemma:      { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060', label: 'Lemma' },
    thick_left_example:    { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080', label: 'Example' },
    thick_left_proof:      { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050', label: 'Proof' },

    // Color
    gray:   { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41', label: 'Note' },
    yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404', label: 'Pitfall' },

    // Augmented
    corollary:  { border: '1px solid #7c3aed', borderLeft: '6px solid #7c3aed', background: '#faf5ff', color: '#7c3aed', label: 'Corollary' },
    remark:     { border: 'none', borderLeft: '3px solid #cbd5e1', background: 'transparent', color: '#475569', label: 'Remark', italic: true },
    warning:    { border: '1px solid #dc2626', background: '#fef2f2', color: '#dc2626', label: '\u26a0 Warning' },
    tip:        { border: '1px solid #0d9488', background: '#f0fdfa', color: '#0d9488', label: '\u2713 Tip' },
    exercise:   { border: '1px solid #ea580c', background: '#fff7ed', color: '#ea580c', label: 'Exercise' },
    solution:   { border: '1px dashed #ea580c', background: '#fffbf5', color: '#ea580c', label: 'Solution', tightTop: true },
    intuition:  { border: '1px solid #f59e0b', background: '#fffbeb', color: '#b45309', label: '\ud83d\udca1 Intuition' },
    recall:     { border: '1px dashed #2563eb', background: '#eff6ff', color: '#2563eb', label: '\u21a9 Recall' },

    // Common mistakes \u2014 site amber, thin border all round; `pitfall` shows the triangle, `pitfall_plain` does not
    pitfall:       { border: '1px solid #B45309', background: '#FDF3E3', color: '#B45309', label: 'Pitfall', icon: PITFALL_ICON },
    pitfall_plain: { border: '1px solid #B45309', background: '#FDF3E3', color: '#B45309', label: 'Pitfall' },

    // Surprising true statements — light blue side box with a bulb; meant for `,aside:true`
    fact:          { border: '1px solid #185FA5', background: '#E6F1FB', color: '#0C447C', label: 'Fact', icon: FACT_ICON },

    // Notation variants (7 color options for mathematical notation entries)
    notation_slate:    { border: '1px solid #5b7ca3', borderLeft: '6px solid #5b7ca3', background: '#eef2f7',    color: '#3f5c7e', label: 'Notation' },
    notation_teal:     { border: '1px solid #14b8a6', borderLeft: '6px solid #14b8a6', background: '#f0fdfa',    color: '#0f766e', label: 'Notation' },
    notation_lavender: { border: '1px solid #a78bfa', borderLeft: '6px solid #a78bfa', background: '#f5f3ff',    color: '#6d28d9', label: 'Notation' },
    notation_beige:    { border: '1px solid #d4a373', borderLeft: '6px solid #d4a373', background: '#faf5ef',    color: '#8b5e34', label: 'Notation' },
    notation_mono:     { border: '1px solid #94a3b8', borderLeft: '6px solid #94a3b8', background: '#f8fafc',    color: '#475569', label: 'Notation', mono: true },
    notation_indigo:   { border: '1px solid #6366f1', borderLeft: '6px solid #6366f1', background: 'transparent', color: '#4338ca', label: 'Notation' },
    notation_stone:    { border: '1px solid #a8a29e', borderLeft: '6px solid #a8a29e', background: '#fafaf9',    color: '#57534e', label: 'Notation' },
  };

  // Alias: bare `notation` defaults to beige (the user's favorite).
  styles.notation = styles.notation_beige;

  const processInline = (line) => {
    let out = line;
    out = out.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    out = out.replace(/\$\$([\s\S]*?)\$\$/g, (m, math) =>
      ReactDOMServer.renderToString(<BlockMath math={math.trim()} />)
    );
    out = out.replace(/\$([\s\S]*?)\$/g, (m, math) =>
      ReactDOMServer.renderToString(<InlineMath math={math.trim()} />)
    );
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\[([^\]]+)\]\((!?)([^)]+)\)/g, (m, text, sameTab, url) => {
      const cleanUrl = sameTab ? url.substring(1) : url;
      let finalUrl = sameTab ? (cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`) : url;
      // In-page anchor, e.g. [Details](!#pitfalls): keep it as "#pitfalls".
      if (sameTab && url.startsWith('#')) finalUrl = url;
      return `<a href="${finalUrl}" ${!sameTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
    });
    out = out.replace(
      /@\[([^\]]+)\]@/g,
      '<span style="background-color: rgba(175, 184, 193, 0.2); padding: 0.2em 0.4em; border-radius: 6px; font-family: ui-monospace, monospace; font-size: 95%; color: black; font-weight: 300;">$1</span>'
    );
    return out;
  };

  const processAcademicContent = (text) => {
    if (!text) return '';
    const lines = text.split(/\r?\n/);
    return lines
      .map((rawLine) => {
        const trimmed = rawLine.trim();
        if (!trimmed) return '<div style="height: 0.6em;"></div>';
        let isCentered = false;
        let line = rawLine;
        if (trimmed.startsWith('<center>') && trimmed.endsWith('</center>')) {
          isCentered = true;
          line = trimmed.slice(8, -9);
        }
        const inner = processInline(line);
        const align = isCentered ? 'text-align: center;' : '';
        return `<div style="margin: 0 0 0.5em; ${align}">${inner}</div>`;
      })
      .join('');
  };

  // ─── Formula callout variants (R2 sans-serif, R6 serif centered) ───
  // Content convention (3 lines):
  //   Line 1:  Title (formula name)
  //   Line 2:  Formula (block math, $$...$$)
  //   Line 3:  URL of the full reference entry (e.g. /functions/formulas#composition_of_functions)
  //
  // If the formula spans multiple lines, everything between line 1 and the last line is treated as the formula body.
  // The URL line may be prefixed with `!` (same-tab convention) — it is stripped if present.
  if (type === 'formula_callout' || type === 'formula_callout_serif') {
    const isSerif = type === 'formula_callout_serif';

    // Accepts the multi-line form and the pipe-delimited single-line form.
    const parsed = parseFormulaCallout(content);
    const urlRaw = parsed.url;

    const titleProcessed = processInline(parsed.title);
    const formulaProcessed = processInline(parsed.formula);

    // Width: default behavior is min-width 60% + width fit-content (grows past 60% only when content demands).
    // A user override via ,width: forces an explicit width.
    const widthRule = customWidth
      ? `width: ${customWidth}; max-width: ${customWidth};`
      : `min-width: ${FORMULA_CALLOUT_DEFAULTS.minWidth}; width: fit-content;`;

    // Alignment: default centered. ,align:left or ,align:right overrides.
    let marginRule = 'margin: 20px auto;';
    if (customAlign === 'left') marginRule = 'margin: 20px 0;';
    if (customAlign === 'right') marginRule = 'margin: 20px 0 20px auto;';

    const titleStyle = isSerif
      ? `font-weight: bold; margin: 0 0 14px; color: ${FORMULA_CALLOUT_DEFAULTS.titleColor}; font-size: 1.2rem; line-height: 1.3; text-align: center; padding-bottom: 10px; border-bottom: 1px solid ${FORMULA_CALLOUT_DEFAULTS.dividerColor}; font-family: Georgia, 'Times New Roman', serif;`
      : `font-weight: bold; margin: 0 0 16px; color: ${FORMULA_CALLOUT_DEFAULTS.titleColor}; font-size: 1.05rem; line-height: 1.4; padding-bottom: 8px; border-bottom: 1px solid ${FORMULA_CALLOUT_DEFAULTS.dividerColor};`;

    const formulaPadY = isSerif
      ? FORMULA_CALLOUT_DEFAULTS.formulaPadYSerif
      : FORMULA_CALLOUT_DEFAULTS.formulaPadY;

    // The footer row exists only when the callout carries its own URL. Pages
    // using the single-line form supply the link with a sibling
    // @academic[formulas_link:…]@ block, so an empty row here would duplicate it.
    const footerHTML = urlRaw
      ? `<div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid ${FORMULA_CALLOUT_DEFAULTS.dividerColor}; font-size: 13px;">
          ${FORMULA_CALLOUT_DEFAULTS.footerText} <a href="${urlRaw}" style="color: ${FORMULA_CALLOUT_DEFAULTS.titleColor}; text-decoration: none; font-weight: 500;">${titleProcessed} ${FORMULA_CALLOUT_DEFAULTS.arrow}</a>
        </div>`
      : '';

    return `
      <div style="
        display: block;
        box-sizing: border-box;
        ${marginRule}
        padding: 16px 18px;
        border-radius: 8px;
        border: 2px solid ${FORMULA_CALLOUT_DEFAULTS.borderColor};
        background-color: ${FORMULA_CALLOUT_DEFAULTS.background};
        font-size: 1rem;
        line-height: 1.6;
        ${widthRule}
      ">
        <div style="${titleStyle}">${titleProcessed}</div>
        <div style="font-size: 1em; line-height: 1.6; padding: ${formulaPadY} 0;">${formulaProcessed}</div>
        ${footerHTML}
      </div>
    `.trim();
  }

  // ─── "Browse all formulas" link variants ─────────────────────
  // Designed to sit directly under a formula_callout card.
  // Negative top margin pulls the link tight against the card above.
  //
  // Content convention (2 lines):
  //   Line 1:  Label text (e.g. "Browse all functions formulas")
  //   Line 2:  URL (optional leading `!` is stripped)
  //
  // Types:
  //   formulas_link           — L6 default: ornament style, link flanked by horizontal side rules
  //   formulas_link_ornament  — alias of formulas_link (kept for backward compat)
  //   formulas_link_plain     — L1: plain centered link, no decoration
  if (
    type === 'formulas_link' ||
    type === 'formulas_link_ornament' ||
    type === 'formulas_link_plain'
  ) {
    const isPlain = type === 'formulas_link_plain';

    // Accepts `Label \n URL` and a bare URL on a single line.
    const parsedLink = parseFormulasLink(content);
    const urlRaw = parsedLink.url;

    const labelProcessed = processInline(parsedLink.label);

    if (isPlain) {
      // L1 — plain centered link, no decoration
      return `
        <div style="
          text-align: center;
          margin: ${FORMULAS_LINK_DEFAULTS.marginTop} 0 ${FORMULAS_LINK_DEFAULTS.marginBottom};
        ">
          <a href="${urlRaw}" style="
            color: ${FORMULAS_LINK_DEFAULTS.plainColor};
            text-decoration: none;
            font-size: ${FORMULAS_LINK_DEFAULTS.plainFontSize};
          ">${labelProcessed} ${FORMULAS_LINK_DEFAULTS.arrow}</a>
        </div>
      `.trim();
    }

    // L6 — ornament (default for formulas_link and formulas_link_ornament)
    return `
      <div style="
        display: flex;
        align-items: center;
        gap: 12px;
        margin: ${FORMULAS_LINK_DEFAULTS.marginTop} 0 ${FORMULAS_LINK_DEFAULTS.marginBottom};
      ">
        <span style="flex: 1; height: 1px; background: ${FORMULAS_LINK_DEFAULTS.ornamentRuleColor};"></span>
        <a href="${urlRaw}" style="color: ${FORMULAS_LINK_DEFAULTS.ornamentColor}; text-decoration: none; font-size: ${FORMULAS_LINK_DEFAULTS.ornamentFontSize}; letter-spacing: ${FORMULAS_LINK_DEFAULTS.ornamentLetterSpacing};">${labelProcessed} ${FORMULAS_LINK_DEFAULTS.arrow}</a>
        <span style="flex: 1; height: 1px; background: ${FORMULAS_LINK_DEFAULTS.ornamentRuleColor};"></span>
      </div>
    `.trim();
  }

  // ─── Rules, theorems, axioms, corollaries — one quiet box, a kind tag before the title ───
  //   rule | rule_theorem | rule_axiom | rule_corollary   first line = name, rest = statement
  //   …_plain                                             tag only: the whole text is the statement
  const ruleMatch = type.match(/^rule(?:_(theorem|axiom|corollary))?(_plain)?$/);
  if (ruleMatch) {
    const kind = (ruleMatch[1] || 'rule').toUpperCase();
    const plain = !!ruleMatch[2];
    const lines = content.trim().split(/\r?\n/);
    const name = plain ? '' : processInline(lines[0].trim());
    const statement = processAcademicContent(plain ? lines.join('\n') : lines.slice(1).join('\n'));
    // No width given: the box is only as wide as its text (never wider than the column), left-aligned with the text.
    // Width given: exactly that wide; the text wraps inside it.
    const widthRule = customWidth ? `width:${customWidth};max-width:100%;` : 'width:fit-content;max-width:100%;';
    let marginRule = 'margin:20px 0;';
    if (customAlign === 'center') marginRule = 'margin:20px auto;';
    if (customAlign === 'right') marginRule = 'margin:20px 0 20px auto;';
    return `
      <div style="display:block;box-sizing:border-box;${marginRule}padding:12px 16px;border-radius:8px;border:1px solid #2563EB;background-color:#E8F0FE;font-size:1rem;line-height:1.6;${widthRule}">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 6px;font-weight:bold;color:#06357A;line-height:1.4;">
          <span style="font-size:11px;font-weight:600;letter-spacing:0.04em;color:#ffffff;background:#2563EB;border-radius:4px;padding:1px 6px;">${kind}</span>${name ? `<span>${name}</span>` : ''}
        </div>
        <div style="font-size:1em;line-height:1.6;">${statement}</div>
      </div>
    `.trim();
  }

  // ─── Punchline — the one-line takeaway at the end of a section ───
  //   punchline   the whole content is the sentence; full-width slate band, white text, target icon
  if (type === 'punchline') {
    const sentence = content.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean).map(processInline).join(' ');
    return `
      <div style="display:flex;align-items:center;gap:12px;box-sizing:border-box;clear:both;margin:24px 0;padding:14px 18px;border-radius:8px;background-color:#4A5E78;width:100%;">
        ${PUNCHLINE_ICON}
        <div style="font-size:1.125rem;font-weight:600;line-height:1.45;color:#ffffff;">${sentence}</div>
      </div>
    `.trim();
  }

  // theorem+proof combo
  if (type === 'theorem+proof' || type === 'lemma+proof' || type === 'corollary+proof') {
    const baseType = type.replace('+proof', '');
    const baseStyle = styles[baseType] || styles.theorem;
    const parts = content.split(/^---$/m);
    const statementBlock = parts[0].trim();
    const proofBlock = (parts[1] || '').trim();
    const sLines = statementBlock.split(/\r?\n/);
    const sTitle = processInline(sLines[0].trim());
    const sBody = processAcademicContent(sLines.slice(1).join('\n'));
    const pBody = processAcademicContent(proofBlock);

    return `
      <div style="display:block;box-sizing:border-box;margin:20px 0;border-radius:8px;border:${baseStyle.border};border-left:${baseStyle.borderLeft || baseStyle.border};background:${baseStyle.background};overflow:hidden;width:${customWidth || '100%'};">
        <div style="padding:16px 18px;">
          <div style="font-weight:bold;color:${baseStyle.color};margin-bottom:10px;">${sTitle}</div>
          <div>${sBody}</div>
        </div>
        <div style="padding:14px 18px;background:#fafafa;border-top:1px dashed ${baseStyle.color}40;">
          <div style="font-weight:bold;color:#505050;margin-bottom:6px;font-size:14px;">Proof</div>
          <div style="font-size:14px;">${pBody}</div>
        </div>
      </div>
    `.trim();
  }

  const contentLines = content.trim().split(/\r?\n/);
  const titleRaw = contentLines[0].trim();
  const bodyRaw = contentLines.slice(1).join('\n');
  let titleProcessed = processInline(titleRaw);
  const bodyProcessed = processAcademicContent(bodyRaw);

  let style;
  if (styles[type]) style = styles[type];
  else if (type.startsWith('thick_left_')) style = styles[type] || styles.thick_left_theorem;
  else style = styles.theorem;

  // Only styles that define `icon` get one; every other block renders as before.
  const iconHTML = style.icon || '';

  if (number) titleProcessed = `${style.label} ${number} \u2014 ${titleProcessed}`;

  if (linkto) {
    titleProcessed = `<a href="${linkto}" style="color:${style.color};text-decoration:none;border-bottom:1px dashed ${style.color};">${titleProcessed} \u2192</a>`;
  }

  let tagsHTML = '';
  if (tags) {
    const tagList = Array.isArray(tags) ? tags : String(tags).split('|');
    tagsHTML = `<div style="margin-bottom:10px;display:flex;gap:6px;flex-wrap:wrap;">${tagList
      .map(
        (t) =>
          `<span style="font-size:11px;background:${style.color}22;color:${style.color};padding:2px 8px;border-radius:10px;font-weight:600;">${t.trim()}</span>`
      )
      .join('')}</div>`;
  }

  let citeHTML = '';
  if (cite) {
    citeHTML = `<div style="margin-top:12px;padding-top:8px;border-top:1px solid ${style.color}40;font-size:13px;color:#64748b;font-style:italic;text-align:right;">\u2014 ${cite}</div>`;
  }

  const widthRule = customWidth
    ? `width: ${customWidth}; max-width: ${customWidth};`
    : 'width: 100%;';

  let marginRule = customWidth ? 'margin: 20px auto;' : 'margin: 20px 0;';
  if (customWidth && customAlign === 'left') marginRule = 'margin: 20px 0;';
  if (customWidth && customAlign === 'right') marginRule = 'margin: 20px 0 20px auto;';
  if (style.tightTop) marginRule = marginRule.replace('20px', '4px');

  const padding = compact ? '6px 12px' : '16px 18px';
  const fontSize = compact ? '14px' : '1rem';
  const italicRule = style.italic ? 'font-style: italic;' : '';
  const monoTitleRule = style.mono
    ? "font-family: 'Menlo','Consolas',monospace; font-size: 15px;"
    : '';

  if (aside) {
    return `
      <div style="float:right;width:${customWidth || '40%'};margin:0 0 12px 20px;box-sizing:border-box;padding:12px 16px;border-radius:8px;border:${style.border};border-left:${style.borderLeft || style.border};background:${style.background};font-size:14px;${italicRule}">
        <div style="font-weight:bold;color:${style.color};margin-bottom:6px;${monoTitleRule}">${iconHTML}${style.label}: ${titleProcessed}</div>
        ${tagsHTML}
        <div>${bodyProcessed}</div>
        ${citeHTML}
      </div>
    `.trim();
  }

  if (collapsible) {
    return `
      <details style="display:block;box-sizing:border-box;${marginRule}padding:0;border-radius:8px;border:${style.border};border-left:${style.borderLeft || style.border};background:${style.background};${widthRule}">
        <summary style="font-weight:bold;color:${style.color};padding:12px 18px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;${monoTitleRule}">
          <span>${iconHTML}${titleProcessed}</span>
          <span style="font-size:12px;">\u25bc</span>
        </summary>
        <div style="padding:0 18px 16px;">
          ${tagsHTML}
          ${bodyProcessed}
          ${citeHTML}
        </div>
      </details>
    `.trim();
  }

  if (compact) {
    return `
      <div style="display:block;box-sizing:border-box;margin:8px 0;padding:${padding};border-radius:6px;border:${style.border};border-left:${style.borderLeft || style.border};background:${style.background};font-size:${fontSize};${widthRule}${italicRule}">
        <span style="font-weight:bold;color:${style.color};${monoTitleRule}">${iconHTML}${titleProcessed}:</span>
        <span>${bodyRaw.split(/\r?\n/).filter(Boolean).map(processInline).join(' ')}</span>
      </div>
    `.trim();
  }

  return `
    <div style="
      display: block;
      box-sizing: border-box;
      ${marginRule}
      padding: ${padding};
      border-radius: 8px;
      border: ${style.border};
      border-left: ${style.borderLeft || style.border};
      background-color: ${style.background};
      font-size: ${fontSize};
      line-height: 1.6;
      ${italicRule}
      ${widthRule}
    ">
      <div style="
        font-weight: bold;
        margin: 0 0 10px;
        color: ${style.color};
        font-size: 1rem;
        line-height: 1.4;
        ${monoTitleRule}
        ${style.italic ? 'font-style: normal;' : ''}
      ">${iconHTML}${titleProcessed}</div>
      ${tagsHTML}
      <div style="font-size: 1em; line-height: 1.6;">${bodyProcessed}</div>
      ${citeHTML}
    </div>
  `.trim();
};