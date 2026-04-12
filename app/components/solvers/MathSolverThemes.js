/* =====================================================
   MATH SOLVER THEMES v2

   CSS variable definitions for the solver design system.
   Four variants: blue light, blue dark, minimal light, minimal dark.
   ~60 variables per theme.

   Usage:
     import { THEME_CSS } from './MathSolverThemes_v2';

   Apply via className:
     <div className="ms-theme-blue">
     <div className="ms-theme-blue ms-dark">
     <div className="ms-theme-minimal">
     <div className="ms-theme-minimal ms-dark">
   ===================================================== */

const THEME_CSS = `
  /* ---- BLUE THEME (default) ---- */
  .ms-theme-blue {
    --ms-accent: #3b82f6;
    --ms-accent-hover: #2563eb;
    --ms-accent-light: #eff6ff;
    --ms-accent-light-hover: #dbeafe;
    --ms-accent-shadow: rgba(59, 130, 246, 0.3);

    --ms-bg: linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%);
    --ms-card: #fff;
    --ms-card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

    --ms-text: #1e3a5f;
    --ms-text-secondary: #334155;
    --ms-muted: #64748b;
    --ms-faint: #94a3b8;

    --ms-display-bg: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    --ms-display-text: #fff;
    --ms-display-op: rgba(255, 255, 255, 0.75);
    --ms-display-eq: #fbbf24;
    --ms-display-log: #fde68a;
    --ms-display-euler: #a5f3fc;
    --ms-display-sub: #bfdbfe;
    --ms-display-placeholder: rgba(255, 255, 255, 0.5);
    --ms-display-cursor: rgba(255, 255, 255, 0.85);

    --ms-builder-bg: transparent;
    --ms-key-bg: #f8fafc;
    --ms-key-border: #e2e8f0;
    --ms-key-text: #334155;
    --ms-key-hover: #f1f5f9;
    --ms-key-var: #3b82f6;
    --ms-key-op: #64748b;
    --ms-key-special: #0891b2;
    --ms-key-num: #1e293b;

    --ms-action-bg: #f1f5f9;
    --ms-action-text: #64748b;
    --ms-action-border: #e2e8f0;
    --ms-solve-bg: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    --ms-solve-text: #fff;
    --ms-solve-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
    --ms-disabled-bg: #cbd5e1;

    --ms-result-bg: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    --ms-result-text: #fff;
    --ms-result-num: #fbbf24;

    --ms-error-bg: #fef2f2;
    --ms-error-border: #fecaca;
    --ms-error-text: #dc2626;

    --ms-step-card: #f8fafc;
    --ms-step-border: #3b82f6;
    --ms-step-number: #3b82f6;

    --ms-placeholder-bg: #f1f5f9;
    --ms-placeholder-border: #cbd5e1;

    --ms-tab-bg: #e2e8f0;
    --ms-tab-active: #fff;

    --ms-form-bg: #f8fafc;
    --ms-form-border: #e2e8f0;
    --ms-form-selected-border: #3b82f6;
    --ms-form-selected-bg: #eff6ff;
    --ms-form-selected-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);

    --ms-random-bg: #eff6ff;
    --ms-random-border: #3b82f6;
    --ms-random-text: #3b82f6;

    --ms-graph-result-accent: #2e7d32;
    --ms-graph-result-bg: #eaf3eb;
  }

  /* ---- BLUE DARK ---- */
  .ms-theme-blue.ms-dark {
    --ms-bg: #0f172a;
    --ms-card: #1e293b;
    --ms-card-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    --ms-text: #e2e8f0;
    --ms-text-secondary: #cbd5e1;
    --ms-muted: #94a3b8;
    --ms-faint: #64748b;

    --ms-display-bg: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);

    --ms-key-bg: #334155;
    --ms-key-border: #475569;
    --ms-key-text: #e2e8f0;
    --ms-key-hover: #475569;
    --ms-key-num: #f1f5f9;

    --ms-action-bg: #334155;
    --ms-action-text: #94a3b8;
    --ms-action-border: #475569;

    --ms-result-bg: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);

    --ms-error-bg: #451a1a;
    --ms-error-border: #7f1d1d;
    --ms-error-text: #fca5a5;

    --ms-step-card: #1e293b;
    --ms-placeholder-bg: #1e293b;
    --ms-placeholder-border: #334155;

    --ms-tab-bg: #334155;
    --ms-tab-active: #1e293b;

    --ms-form-bg: #334155;
    --ms-form-border: #475569;
    --ms-form-selected-bg: #1e3a5f;
    --ms-form-selected-border: #3b82f6;

    --ms-random-bg: #1e3a5f;
  }

  /* ---- MINIMAL THEME ---- */
  .ms-theme-minimal {
    --ms-accent: #005a9e;
    --ms-accent-hover: #004c87;
    --ms-accent-light: #e0ecf5;
    --ms-accent-light-hover: #d0e0f0;
    --ms-accent-shadow: rgba(0, 90, 158, 0.2);

    --ms-bg: #f5f5f5;
    --ms-card: #fff;
    --ms-card-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);

    --ms-text: #1b1b1b;
    --ms-text-secondary: #444;
    --ms-muted: #717171;
    --ms-faint: #999;

    --ms-display-bg: #fff;
    --ms-display-text: #1b1b1b;
    --ms-display-op: #717171;
    --ms-display-eq: #005a9e;
    --ms-display-log: #005a9e;
    --ms-display-euler: #0891b2;
    --ms-display-sub: #717171;
    --ms-display-placeholder: #999;
    --ms-display-cursor: #1b1b1b;

    --ms-builder-bg: #ebebeb;
    --ms-key-bg: #fafafa;
    --ms-key-border: transparent;
    --ms-key-text: #1b1b1b;
    --ms-key-hover: #f0f0f0;
    --ms-key-var: #005a9e;
    --ms-key-op: #444;
    --ms-key-special: #0891b2;
    --ms-key-num: #1b1b1b;

    --ms-action-bg: #e0e0e0;
    --ms-action-text: #717171;
    --ms-action-border: transparent;
    --ms-solve-bg: #005a9e;
    --ms-solve-text: #fff;
    --ms-solve-shadow: none;
    --ms-disabled-bg: #ccc;

    --ms-result-bg: #005a9e;
    --ms-result-text: #fff;
    --ms-result-num: #fbbf24;

    --ms-error-bg: #fef2f2;
    --ms-error-border: #e0b0b0;
    --ms-error-text: #8b3a3a;

    --ms-step-card: #fff;
    --ms-step-border: #005a9e;
    --ms-step-number: #005a9e;

    --ms-placeholder-bg: #f0f0f0;
    --ms-placeholder-border: #d5d5d5;

    --ms-tab-bg: #e8e8e8;
    --ms-tab-active: #fff;

    --ms-form-bg: #f5f5f5;
    --ms-form-border: #e0e0e0;
    --ms-form-selected-border: #005a9e;
    --ms-form-selected-bg: #e0ecf5;
    --ms-form-selected-shadow: 0 2px 8px rgba(0, 90, 158, 0.12);

    --ms-random-bg: #e0ecf5;
    --ms-random-border: #005a9e;
    --ms-random-text: #005a9e;

    --ms-graph-result-accent: #2e7d32;
    --ms-graph-result-bg: #eaf3eb;
  }

  /* ---- MINIMAL DARK ---- */
  .ms-theme-minimal.ms-dark {
    --ms-bg: #1e1e1e;
    --ms-card: #2b2b2b;
    --ms-card-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

    --ms-text: #e4e4e4;
    --ms-text-secondary: #ccc;
    --ms-muted: #888;
    --ms-faint: #666;

    --ms-display-bg: #2b2b2b;
    --ms-display-text: #e4e4e4;
    --ms-display-op: #888;
    --ms-display-eq: #4da6e8;
    --ms-display-log: #4da6e8;
    --ms-display-euler: #67d4e8;
    --ms-display-sub: #888;
    --ms-display-placeholder: #666;
    --ms-display-cursor: #e4e4e4;

    --ms-builder-bg: #262626;
    --ms-key-bg: #353535;
    --ms-key-border: transparent;
    --ms-key-text: #e4e4e4;
    --ms-key-hover: #3e3e3e;
    --ms-key-var: #4da6e8;
    --ms-key-op: #ccc;
    --ms-key-num: #e4e4e4;

    --ms-action-bg: #333;
    --ms-action-text: #888;
    --ms-solve-bg: #4da6e8;
    --ms-solve-shadow: none;
    --ms-disabled-bg: #444;

    --ms-result-bg: #4da6e8;

    --ms-error-bg: #2e1c1c;
    --ms-error-border: #5a3333;
    --ms-error-text: #e08080;

    --ms-step-card: #2b2b2b;
    --ms-step-border: #4da6e8;
    --ms-step-number: #4da6e8;

    --ms-placeholder-bg: #2a2a2a;
    --ms-placeholder-border: #383838;

    --ms-tab-bg: #333;
    --ms-tab-active: #2b2b2b;

    --ms-form-bg: #333;
    --ms-form-border: #444;
    --ms-form-selected-bg: #1c3248;
    --ms-form-selected-border: #4da6e8;

    --ms-random-bg: #1c3248;
    --ms-random-border: #4da6e8;
    --ms-random-text: #4da6e8;

    --ms-graph-result-accent: #5cb85c;
    --ms-graph-result-bg: #1c2e1c;
  }
`;

export { THEME_CSS };
export default THEME_CSS;