/**
 * buildAllToolsData — site-wide visual-tools aggregator.
 *
 * The section landings each call buildToolIndexData('<section>/visual-tools')
 * and get a flat list of that section's tools. The site-wide hub needs every
 * section at once, grouped so the reader browses by subject first.
 *
 * VisualToolsPage already groups items two levels deep (category, then
 * subCategory) and renders a tab per category. So the only thing this module
 * does is call the existing builder once per section and REMAP the two axes:
 *
 *     category    := the section        ("Linear algebra")
 *     subCategory := the tool's own category + subCategory
 *                    ("Matrices · Decompositions")
 *
 * No new rendering component is needed.
 *
 * The four tools that live at the top-level /visual-tools/* routes (kept
 * there on purpose because of their search traffic) are pulled in the same
 * way and assigned to the subject they belong to, so the hub shows them
 * beside the section tools rather than in a separate orphan bucket.
 */

import { buildToolIndexData } from './buildToolsPageData';

// Display name + order of the tabs. Order is pedagogical, not alphabetical.
export const SECTIONS = [
  { slug: 'arithmetic',      label: 'Arithmetic' },
  { slug: 'algebra',         label: 'Algebra' },
  { slug: 'functions',       label: 'Functions' },
  { slug: 'trigonometry',    label: 'Trigonometry' },
  { slug: 'calculus',        label: 'Calculus' },
  { slug: 'linear-algebra',  label: 'Linear algebra' },
  { slug: 'probability',     label: 'Probability' },
  { slug: 'combinatorics',   label: 'Combinatorics' },
  { slug: 'set-theory',      label: 'Set theory' },
  { slug: 'complex-numbers', label: 'Complex numbers' },
];

// Tools at /visual-tools/<slug> and the section tab each belongs under.
// These keep their top-level URLs; only their placement on the hub is set here.
export const TOP_LEVEL_HOME = {
  'unit-circle': 'Trigonometry',
  'matrix-multiplication': 'Linear algebra',
  'fractions-visualizer': 'Arithmetic',
  'square-root': 'Arithmetic',
};

const OTHER = 'Other';

// "Matrices" + "Decompositions" -> "Matrices · Decompositions".
// A subCategory that merely repeats the category is collapsed to one label.
function groupLabel(item) {
  const cat = (item.category || '').trim();
  const sub = (item.subCategory || '').trim();
  if (!cat && !sub) return OTHER;
  if (!sub) return cat;
  if (!cat) return sub;
  if (sub.toLowerCase().includes(cat.toLowerCase())) return sub;
  return `${cat} · ${sub}`;
}

function slugOf(href) {
  const parts = String(href || '').split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
}

export async function buildAllToolsData() {
  const items = [];

  for (const { slug, label } of SECTIONS) {
    const data = await buildToolIndexData(`${slug}/visual-tools`);
    for (const it of data.items) {
      items.push({ ...it, section: label, category: label, subCategory: groupLabel(it) });
    }
  }

  // Top-level tools, folded into the section they belong to.
  const topLevel = await buildToolIndexData('visual-tools');
  for (const it of topLevel.items) {
    const label = TOP_LEVEL_HOME[slugOf(it.href)];
    if (!label) continue;
    items.push({ ...it, section: label, category: label, subCategory: groupLabel(it) });
  }

  const perSection = {};
  for (const it of items) perSection[it.section] = (perSection[it.section] || 0) + 1;

  return { items, total: items.length, perSection };
}

export default buildAllToolsData;
