// Naming shim: buildSectionData auto-imports `<camelSlug>Formulas` for the
// /calculus hub formulas section, but the module was created as
// calculusFormulasList.js (imported under that name by several pages).
// Re-export instead of renaming so nothing breaks.
export { default } from './calculusFormulasList';
