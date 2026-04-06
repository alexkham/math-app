// import processContent from wherever you keep it
import { processContent } from "../../utils/contentProcessor";


const themes = {
  light: {
    background: '#f0f4f8',
    borderLeft: '4px solid #2b6cb0',
    borderRadius: '0 12px 12px 0',
    categoryTitle: { color: '#1a3a5c', fontSize: '18px', fontWeight: '600', letterSpacing: '0.3px' },
    categoryBorder: '1px solid #d0d8e4',
    termName: { color: '#2b6cb0', fontWeight: '500' },
    termDef: { color: '#4a5568' },
    mainTitle: { color: '#1a3a5c' },
  },
  dark: {
    background: '#1e293b',
    borderLeft: '4px solid #7dd3fc',
    borderRadius: '0 12px 12px 0',
    categoryTitle: { color: '#94a3b8', fontSize: '18px', fontWeight: '600', letterSpacing: '0.3px' },
    categoryBorder: '1px solid #334155',
    termName: { color: '#7dd3fc', fontWeight: '500' },
    termDef: { color: '#cbd5e1' },
    mainTitle: { color: '#e2e8f0' },
  },
};

function parseKeyTermsMarkdown(mdString) {
  const lines = mdString.trim().split('\n');
  const categories = [];
  let current = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ')) {
      current = { heading: trimmed.replace('## ', ''), terms: [] };
      categories.push(current);
    } else if (trimmed.startsWith('- ') && current) {
      const termMatch = trimmed.match(/^- \[(.+?)\]\((.+?)\)\s*—\s*(.+)$/);
      if (termMatch) {
        current.terms.push({
          name: termMatch[1],
          link: termMatch[2],
          definition: termMatch[3],
        });
      } else {
        const plainMatch = trimmed.match(/^- \*\*(.+?)\*\*\s*—\s*(.+)$/);
        if (plainMatch) {
          current.terms.push({
            name: plainMatch[1],
            link: null,
            definition: plainMatch[2],
          });
        }
      }
    }
  }
  return categories;
}

export default function KeyTermsCard({ title, content, after, variant = 'light', id }) {
  const theme = themes[variant] || themes.light;
  const categories = parseKeyTermsMarkdown(content);

  return (
    <div
      id={id}
      style={{
        background: theme.background,
        borderLeft: theme.borderLeft,
        borderRadius: theme.borderRadius,
        padding: '24px 28px',
        margin: '0 auto',
        maxWidth: '900px',
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 18px 0',
            ...theme.mainTitle,
          }}
        >
          {title}
        </h2>
      )}

      {categories.map((cat, ci) => (
        <div key={ci} style={{ marginTop: ci === 0 ? '0' : '16px' }}>
          <h3
            style={{
              margin: '0 0 10px 0',
              paddingBottom: '6px',
              borderBottom: theme.categoryBorder,
              ...theme.categoryTitle,
            }}
          >
            {cat.heading}
          </h3>
          {cat.terms.map((term, ti) => (
            <div
              key={ti}
              style={{
                display: 'flex',
                gap: '8px',
                padding: '4px 0',
                fontSize: '14px',
                lineHeight: '1.4',
              }}
            >
              <span
                style={{
                  whiteSpace: 'nowrap',
                  minWidth: '160px',
                  flexShrink: 0,
                  ...theme.termName,
                }}
              >
                {term.link ? (
                  <a
                    href={term.link.replace('!/', '/')}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {term.name}
                  </a>
                ) : (
                  term.name
                )}
              </span>
              <span style={{ ...theme.termDef }}>
                &mdash; {processContent(term.definition)}
              </span>
            </div>
          ))}
        </div>
      ))}

      {after && (
        <div style={{ marginTop: '18px' }}>
          {processContent(after)}
        </div>
      )}
    </div>
  );
}