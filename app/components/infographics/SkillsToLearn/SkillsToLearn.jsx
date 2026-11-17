/*
  SkillsToLearn.jsx

  The skills a student should learn for a lesson's topic, each one linked to
  its how-to page in the Methods tier, with a one-sentence summary of the
  method. The list covers the whole topic, not only what the lesson teaches:
  a skill taught on the page gets an "On this page" link back to its section;
  a skill from another hub can show which hub it lives in.

  ------------------------------------------------------------------
  CONTENT FORMAT
  ------------------------------------------------------------------
  Text fields go through processContent, so $math$ and **bold** work.
  Do not put links inside `skill` or `desc`: the skill is already a link.

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data   required:

    {
      title?:    string | false,  // default 'Skills you should learn'; false when the page section shows it
      lede?:     string,          // one line above the list
      numbered?: boolean,         // number the skills 1, 2, 3 ... across all groups (default false)
      groups: [
        {
          title?: string,
          items: [
            {
              skill: string,      // what the student can do, e.g. 'Divide two complex numbers'
              href:  string,      // Methods page: '/<hub>/<slug>' or '/<hub>#<card id>'
              desc?: string,      // one or two sentences on the method
              level?: 'atomic' | 'composite' | 'strategy' | 'applied',
              here?: string,      // '#3' when this lesson teaches the skill
              from?: string       // hub label when the skill lives in another hub
            }
          ]
        }
      ],
      hub?: { href: string, label: string }
    }

  numbered  optional prop, same as data.numbered (the prop wins).
  theme     optional colour overrides (see DEFAULT_THEME).
*/

import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const DEFAULT_THEME = {
  panel: '#ffffff',
  panelSoft: '#f8fafd',
  edge: '#c3cfe0',
  line: '#dde4ee',
  ink: '#334155',
  muted: '#64748b',
  faint: '#8a94a6',
  title: '#3b5a8a',
  link: '#2563EB',
  dot: '#9db8e6',
  numBg: '#eef3fb',
  tagEdge: '#c9d5e8',
  here: '#9a5a12',
  hereSoft: '#fdf7ec',
  hereEdge: '#e8cf9f',
};

const LEVEL_TAGS = {
  atomic: 'Single rule',
  strategy: 'Which method',
  applied: 'Word problems',
};

const cssVars = (t) => ({
  '--stl-panel': t.panel,
  '--stl-panel-soft': t.panelSoft,
  '--stl-edge': t.edge,
  '--stl-line': t.line,
  '--stl-ink': t.ink,
  '--stl-muted': t.muted,
  '--stl-faint': t.faint,
  '--stl-title': t.title,
  '--stl-link': t.link,
  '--stl-dot': t.dot,
  '--stl-num-bg': t.numBg,
  '--stl-tag-edge': t.tagEdge,
  '--stl-here': t.here,
  '--stl-here-soft': t.hereSoft,
  '--stl-here-edge': t.hereEdge,
});

const CSS = `
.stl-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--stl-ink);
  line-height: 1.5;
  background: var(--stl-panel);
  border: 1px solid var(--stl-edge);
  border-radius: 14px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05);
  overflow: hidden;
  max-width: 860px;
  margin: 8px auto;
}
.stl-root .stl-inline br { display: none; }
.stl-root .stl-inline p { margin: 0; display: inline; }
.stl-root .katex { font-size: 1em; }

.stl-root .stl-head {
  padding: 16px 30px 14px;
  background: var(--stl-panel-soft);
  border-bottom: 1px solid var(--stl-line);
}
.stl-root .stl-title {
  font-size: 20px; font-weight: 700;
  color: var(--stl-title);
  margin: 0 0 4px;
}
.stl-root .stl-lede { font-size: 14px; color: var(--stl-muted); }

.stl-root .stl-group { padding: 4px 30px 10px; }
.stl-root .stl-gtitle {
  font-size: 13px; font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--stl-title);
  margin: 18px 0 2px;
}

.stl-root ul, .stl-root ol { list-style: none; margin: 0; padding: 0; }
.stl-root li {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 13px 0;
  border-bottom: 1px solid var(--stl-line);
}
.stl-root li:last-child { border-bottom: none; }
.stl-root .stl-dot {
  flex: 0 0 6px;
  width: 6px; height: 6px;
  margin-top: 10px;
  border-radius: 50%;
  background: var(--stl-dot);
}
.stl-root .stl-num {
  flex: 0 0 24px;
  height: 24px;
  margin-top: 1px;
  border-radius: 50%;
  background: var(--stl-num-bg);
  color: var(--stl-title);
  font-size: 12px; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
}
.stl-root .stl-main { flex: 1 1 0; min-width: 0; }
.stl-root a.stl-skill {
  color: var(--stl-link);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}
.stl-root a.stl-skill:hover { text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
.stl-root .stl-tag {
  display: inline-block;
  margin-left: 8px;
  padding: 0 8px;
  font-size: 11px; font-weight: 500;
  line-height: 18px;
  color: var(--stl-title);
  border: 1px solid var(--stl-tag-edge);
  border-radius: 999px;
  vertical-align: 2px;
}
.stl-root .stl-desc {
  display: block;
  margin-top: 3px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--stl-muted);
}
.stl-root .stl-meta {
  flex: 0 0 auto;
  padding-top: 2px;
  font-size: 12.5px;
  color: var(--stl-faint);
  white-space: nowrap;
}
.stl-root a.stl-here {
  display: inline-block;
  color: var(--stl-here);
  background: var(--stl-here-soft);
  border: 1px solid var(--stl-here-edge);
  padding: 0 9px;
  line-height: 20px;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;
}
.stl-root a.stl-here:hover { text-decoration: underline; text-underline-offset: 2px; }

.stl-root .stl-foot {
  padding: 12px 30px 14px;
  border-top: 1px solid var(--stl-line);
  font-size: 14px;
}
.stl-root .stl-foot a {
  color: var(--stl-link);
  font-weight: 600;
  text-decoration: none;
}
.stl-root .stl-foot a:hover { text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }

@media (max-width: 640px) {
  .stl-root .stl-head, .stl-root .stl-group, .stl-root .stl-foot { padding-left: 16px; padding-right: 16px; }
  .stl-root li { flex-wrap: wrap; row-gap: 6px; gap: 12px; padding: 12px 0; }
  .stl-root .stl-meta { flex-basis: 100%; padding: 0 0 0 18px; white-space: normal; }
  .stl-root.stl-numbered .stl-meta { padding-left: 36px; }
  .stl-root a.stl-skill { font-size: 15.5px; }
  .stl-root .stl-desc { font-size: 13.5px; }
}
`;

const Inline = ({ text }) => <span className="stl-inline">{processContent(text)}</span>;

export default function SkillsToLearn({ data, theme, numbered }) {
  if (!data || !Array.isArray(data.groups)) return null;
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const title = data.title || 'Skills you should learn';
  const isNumbered = typeof numbered === 'boolean' ? numbered : !!data.numbered;
  const List = isNumbered ? 'ol' : 'ul';
  let n = 0;   // one running number across all groups

  return (
    <div className={'stl-root' + (isNumbered ? ' stl-numbered' : '')} style={cssVars(t)}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {(data.title !== false || data.lede) && (
        <div className="stl-head">
          {data.title !== false && <div className="stl-title">{title}</div>}
          {data.lede && <div className="stl-lede"><Inline text={data.lede} /></div>}
        </div>
      )}

      {data.groups.map((g, gi) => (
        <div className="stl-group" key={gi}>
          {g.title && <div className="stl-gtitle"><Inline text={g.title} /></div>}
          <List {...(isNumbered ? { start: n + 1 } : {})}>
            {g.items.map((it, i) => {
              n += 1;
              return (
                <li key={i}>
                  {isNumbered
                    ? <span className="stl-num" aria-hidden="true">{n}</span>
                    : <span className="stl-dot" aria-hidden="true" />}
                  <span className="stl-main">
                    <a className="stl-skill" href={it.href}><Inline text={it.skill} /></a>
                    {LEVEL_TAGS[it.level] && <span className="stl-tag">{LEVEL_TAGS[it.level]}</span>}
                    {it.desc && <span className="stl-desc"><Inline text={it.desc} /></span>}
                  </span>
                  <span className="stl-meta">
                    {it.here
                      ? <a className="stl-here" href={it.here}>On this page ↑</a>
                      : (it.from ? <>in {it.from}</> : null)}
                  </span>
                </li>
              );
            })}
          </List>
        </div>
      ))}

      {data.hub && (
        <div className="stl-foot">
          <a href={data.hub.href}>{data.hub.label} →</a>
        </div>
      )}
    </div>
  );
}
