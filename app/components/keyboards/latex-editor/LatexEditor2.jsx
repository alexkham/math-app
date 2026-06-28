'use client'
import React, { useState, useRef, useEffect } from 'react';
import latexData from './latex_data';
import { processContent } from '@/app/utils/contentProcessor';

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '30px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  explanationBox: {
    fontSize: '14px',
    color: '#1e293b',
    lineHeight: '1.5',
    marginBottom: '20px',
    padding: '18px 22px',
    background: 'linear-gradient(120deg, #ebf4ff 0%, #e0ecff 100%)',
    border: '2px solid #245de1',
    borderLeft: '6px solid #245de1',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(36,93,225,0.1)',
  },
  hintLine: {
    marginTop: '8px',
    fontSize: '13px',
    color: '#334155',
  },
  categoriesWrapper: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '6px',
    marginBottom: '18px',
    border: '2px solid #cbd5e1',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  selectorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
    gap: '10px',
  },
  categoryBtn: {
    padding: '11px 14px',
    backgroundColor: '#fafbfc',
    border: '2px solid #cbd5e1',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.2s',
    color: '#475569',
  },
  categoryBtnActive: {
    backgroundColor: '#245de1',
    color: 'white',
    borderColor: '#245de1',
    boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
  },
  mainArea: {
    display: 'grid',
    gap: '20px',
  },
  keyboardSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '6px',
    border: '2px solid #cbd5e1',
    boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
    overflow: 'auto',
    maxHeight: '600px',
  },
  keyboardTitle: {
    margin: '0 0 14px 0',
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e293b',
  },
  subgroupLabel: {
    margin: '14px 0 8px 0',
    fontSize: '13px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    gap: '8px',
  },
  latexBtn: {
    padding: '12px 8px',
    background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
    border: '2px solid #e2e8f0',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    minHeight: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    color: '#334155',
    fontWeight: '500',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  latexBtnLabel: {
    fontSize: '10px',
    color: '#64748b',
    marginTop: '4px',
  },
  editorSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  textareaWrapper: {
    position: 'relative',
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '16px',
    paddingTop: '40px',
    fontSize: '14px',
    border: '2px solid #cbd5e1',
    borderRadius: '6px',
    resize: 'vertical',
    fontFamily: 'monospace',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    color: '#1e293b',
    boxSizing: 'border-box',
  },
  copyBtnInField: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '6px 12px',
    backgroundColor: '#245de1',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '11px',
    fontWeight: '600',
    transition: 'all 0.2s',
    zIndex: 10,
  },
  statusBar: {
    padding: '8px 12px',
    fontSize: '12px',
    color: '#475569',
    backgroundColor: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '4px',
    fontFamily: 'monospace',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  statusBarInside: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    border: '1px solid #fbbf24',
  },
  previewSection: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    paddingTop: '40px',
    borderRadius: '6px',
    border: '2px solid #cbd5e1',
    minHeight: '200px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  previewTitle: {
    position: 'absolute',
    top: '12px',
    left: '20px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#1e293b',
  },
  previewContent: {
    fontSize: '18px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '4px',
    minHeight: '150px',
    overflowX: 'auto',
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  navBtn: {
    flex: 1,
    minWidth: '50px',
    padding: '10px 14px',
    background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
    color: 'white',
    border: '2px solid #1e4fc7',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: '0 3px 8px rgba(36,93,225,0.3)',
  },
  clearBtn: {
    flex: 1,
    minWidth: '80px',
    padding: '10px',
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: 'white',
    border: '2px solid #dc2626',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: '0 3px 8px rgba(239,68,68,0.3)',
  },
};

// Find the unmatched-brace group enclosing position `pos` in `text`.
// Returns { open, close } indices (or null if not inside a group).
function findEnclosingGroup(text, pos) {
  let depth = 0;
  let openIdx = -1;
  // Walk left from pos to find an unmatched opening '{'
  for (let i = pos - 1; i >= 0; i--) {
    const ch = text[i];
    if (ch === '}') depth++;
    else if (ch === '{') {
      if (depth === 0) { openIdx = i; break; }
      depth--;
    }
  }
  if (openIdx === -1) return null;
  // Walk right from pos to find the matching '}'
  depth = 0;
  for (let j = pos; j < text.length; j++) {
    const ch = text[j];
    if (ch === '{') depth++;
    else if (ch === '}') {
      if (depth === 0) return { open: openIdx, close: j };
      depth--;
    }
  }
  return null;
}

export default function LatexEditor2() {
  const [latex, setLatex] = useState('');
  const [activeCategory, setActiveCategory] = useState('basic');
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPos, setCursorPos] = useState(0);
  const textareaRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const categories = Object.keys(latexData);

  const insertLatex = (code, requiresSelection = false, cursorTarget = null) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = latex.substring(start, end);

    let newText = latex;
    let newCursorPos = start;

    if (requiresSelection && selectedText) {
      const replacement = code.replace('{}', `{${selectedText}}`);
      newText = latex.substring(0, start) + replacement + latex.substring(end);
      newCursorPos = start + replacement.length;
    } else if (cursorTarget === 'bracket' && code.includes('[]')) {
      // Place cursor inside '[' ']' (for nth root and similar)
      const beforeBracket = code.indexOf('[]');
      newText = latex.substring(0, start) + code + latex.substring(end);
      newCursorPos = start + beforeBracket + 1;
    } else if (code.includes('{}')) {
      const beforeBrace = code.indexOf('{}');
      newText = latex.substring(0, start) + code + latex.substring(end);
      newCursorPos = start + beforeBrace + 1;
    } else {
      newText = latex.substring(0, start) + code + latex.substring(end);
      newCursorPos = start + code.length;
    }

    setLatex(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      setCursorPos(newCursorPos);
    }, 0);
  };

  const handleBackspace = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      setLatex(latex.substring(0, start) + latex.substring(end));
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
        setCursorPos(start);
      }, 0);
    } else if (start > 0) {
      setLatex(latex.substring(0, start - 1) + latex.substring(start));
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
        setCursorPos(start - 1);
      }, 0);
    }
  };

  const handleNewLine = () => {
    insertLatex('\n');
  };

  const moveCursor = (direction) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const pos = textarea.selectionStart;
    const newPos = direction === 'left' ? Math.max(0, pos - 1) : Math.min(latex.length, pos + 1);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newPos, newPos);
      setCursorPos(newPos);
    }, 0);
  };

  // Exit current {...} group: move caret just past the enclosing '}'.
  // If not inside a group, do nothing.
  const exitGroup = () => {
    const textarea = textareaRef.current;
    if (!textarea) return false;
    const pos = textarea.selectionStart;
    const group = findEnclosingGroup(latex, pos);
    if (!group) return false;
    const newPos = group.close + 1;
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newPos, newPos);
      setCursorPos(newPos);
    }, 0);
    return true;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      exitGroup();
    }
  };

  const handleSelect = (e) => {
    setCursorPos(e.target.selectionStart);
  };

  const handleChange = (e) => {
    setLatex(e.target.value);
    setCursorPos(e.target.selectionStart);
  };

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const getCategoryLabel = (key) => {
    return key.split('_').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Decide if current category renders as a flat grid or as labeled sub-groups
  const currentCategoryData = latexData[activeCategory];
  const isGrouped = !Array.isArray(currentCategoryData);

  // Cursor-context status for the status bar
  const enclosing = findEnclosingGroup(latex, cursorPos);
  const insideGroup = !!enclosing;
  let statusText = 'Cursor: outside any group';
  if (insideGroup) {
    const inner = latex.substring(enclosing.open + 1, enclosing.close);
    const preview = inner.length > 20 ? inner.substring(0, 20) + '\u2026' : inner;
    statusText = `Cursor: inside { ${preview || ' '} }  \u2014  press Tab to exit`;
  }

  const renderButtonGrid = (items) => (
    <div style={styles.buttonGrid}>
      {items.map((item, idx) => (
        <button
          key={idx}
          style={styles.latexBtn}
          onClick={() => insertLatex(item.latex, item.requiresSelection, item.cursorTarget)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
            e.currentTarget.style.borderColor = '#245de1';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: item.display }} />
          <span style={styles.latexBtnLabel}>{item.label}</span>
        </button>
      ))}
    </div>
  );

  const mainAreaStyle = {
    ...styles.mainArea,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
  };

  const statusStyle = {
    ...styles.statusBar,
    ...(insideGroup ? styles.statusBarInside : {}),
  };

  return (
    <div style={styles.container}>
      <div style={styles.explanationBox}>
        Build LaTeX formulas by clicking buttons to insert commands. Select text and click a button to wrap it with that command.
        Use navigation buttons to move cursor, delete characters, and add new lines.
        <div style={styles.hintLine}>
          <strong>Tip:</strong> when the cursor is inside a <code>{'{ }'}</code> group, press <strong>Tab</strong> to jump past the closing brace and continue typing outside the group.
        </div>
      </div>

      <div style={styles.categoriesWrapper}>
        <div style={styles.selectorGrid}>
          {categories.map((category, idx) => (
            <button
              key={idx}
              style={{
                ...styles.categoryBtn,
                ...(activeCategory === category ? styles.categoryBtnActive : {}),
              }}
              onClick={() => setActiveCategory(category)}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.borderColor = '#60a5fa';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = '#fafbfc';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }
              }}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      <div style={mainAreaStyle}>
        <div style={styles.keyboardSection}>
          <h3 style={styles.keyboardTitle}>
            {getCategoryLabel(activeCategory)}
          </h3>
          {isGrouped ? (
            Object.keys(currentCategoryData).map((subKey) => (
              <div key={subKey}>
                <div style={styles.subgroupLabel}>{getCategoryLabel(subKey)}</div>
                {renderButtonGrid(currentCategoryData[subKey])}
              </div>
            ))
          ) : (
            renderButtonGrid(currentCategoryData)
          )}
        </div>

        <div style={styles.editorSection}>
          <div style={styles.textareaWrapper}>
            <button
              style={{
                ...styles.copyBtnInField,
                backgroundColor: copiedLatex ? '#10b981' : '#245de1',
              }}
              onClick={() => copyToClipboard(latex, setCopiedLatex)}
            >
              {copiedLatex ? 'Copied!' : 'Copy'}
            </button>
            <textarea
              ref={textareaRef}
              style={styles.textarea}
              value={latex}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onSelect={handleSelect}
              onClick={handleSelect}
              onKeyUp={handleSelect}
              onFocus={(e) => {
                e.target.style.borderColor = '#245de1';
                e.target.style.boxShadow = '0 0 0 4px rgba(36,93,225,0.1)';
                setCursorPos(e.target.selectionStart);
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#cbd5e1';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
              placeholder="LaTeX code appears here..."
            />
          </div>

          <div style={statusStyle}>
            <span>{statusText}</span>
            {insideGroup && (
              <button
                style={{
                  padding: '4px 10px',
                  fontSize: '11px',
                  fontWeight: '600',
                  border: '1px solid #92400e',
                  borderRadius: '4px',
                  backgroundColor: '#92400e',
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={exitGroup}
              >
                Exit group &rarr;
              </button>
            )}
          </div>

          <div style={styles.previewSection}>
            <div style={styles.previewTitle}>Preview</div>
            <div style={styles.previewContent}>
              {latex ? (
                <span>{processContent(`$$${latex}$$`)}</span>
              ) : (
                <span style={{ color: '#94a3b8' }}>Preview will appear here...</span>
              )}
            </div>
          </div>

          <div style={styles.actionButtons}>
            <button
              style={styles.navBtn}
              onClick={() => moveCursor('left')}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              &larr;
            </button>
            <button
              style={styles.navBtn}
              onClick={() => moveCursor('right')}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              &rarr;
            </button>
            <button
              style={styles.navBtn}
              onClick={handleBackspace}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              &#9003;
            </button>
            <button
              style={styles.navBtn}
              onClick={handleNewLine}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              &crarr;
            </button>
            <button
              style={styles.clearBtn}
              onClick={() => { setLatex(''); setCursorPos(0); }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}