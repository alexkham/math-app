// // // // // // // // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // // // // // // // import { processContent } from '@/app/utils/contentProcessor';


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    ATOMS
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // /* ---- SectionHeader ---- */
// // // // // // // // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // // // // // // // //   const s = {
// // // // // // // // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // // // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // // // // // // // //     badge: { fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // // // // // // // //     link: { marginLeft: 'auto', fontSize: '13px', fontWeight: 600, color: '#3498db', textDecoration: 'none' },
// // // // // // // // // // // // //   };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={s.header}>
       
// // // // // // // // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // // // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // // // // // // // //       {link && (
// // // // // // // // // // // // //         <a href={link} style={s.link}
// // // // // // // // // // // // //           onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
// // // // // // // // // // // // //           onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
// // // // // // // // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // // // // // // // //         </a>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- SectionNav ---- */
// // // // // // // // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // // // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // // // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // // // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // // // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth' }); } };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // // // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // // // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // // // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- IntroProse ---- */
// // // // // // // // // // // // // const IntroProse = ({ content }) => {
// // // // // // // // // // // // //   if (!content) return null;
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // // // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- CategoryCard ---- */
// // // // // // // // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // // // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // // // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // // // // //       <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // // // // // // // //       {count != null && <span style={{ fontSize: '11px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // // // // // // // //       {description && <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // // // // // // // //     </Tag>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- FormulaChip ---- */
// // // // // // // // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // // // // // // // //   const mathRef = useRef(null);
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // // // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // // // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [tex]);
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // // // // // // // //       {label && <div style={{ fontSize: '10px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // // // // // // // //       <div style={{ fontSize: '15px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- DefinitionItem ---- */
// // // // // // // // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // // // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // // // // // // // //     <span style={{ fontWeight: 700, fontSize: '13px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // // // // // // // //     <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // // // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // // // // // // // //     </span>
// // // // // // // // // // // // //   </div>
// // // // // // // // // // // // // );

// // // // // // // // // // // // // /* ---- ToolCard ---- */
// // // // // // // // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginBottom: '10px', color: '#2a7a6a', fontWeight: 700 }}>{icon || '⊕'}</div>
// // // // // // // // // // // // //       <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // // // // // // // //       {description && <p style={{ fontSize: '12px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // // // // // // // //     </a>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- EditorialBlock ---- */
// // // // // // // // // // // // // const EditorialBlock = ({ textContent, svgContent }) => {
// // // // // // // // // // // // //   const hasVis = !!svgContent;
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: hasVis ? '1fr 1fr' : '1fr', minHeight: hasVis ? '280px' : '200px' }}>
// // // // // // // // // // // // //         <div style={{ padding: '28px 32px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.98rem', lineHeight: 1.8, color: '#34495e' }}>
// // // // // // // // // // // // //           {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         {hasVis && (
// // // // // // // // // // // // //           <div style={{ background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', borderLeft: '1px solid #ebebeb' }}
// // // // // // // // // // // // //             dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    SECTION RENDERERS
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: '80px' };
// // // // // // // // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: '60px' };

// // // // // // // // // // // // // /* ---- FormulasSection ---- */
// // // // // // // // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // // // // //         return (
// // // // // // // // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // // // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         );
// // // // // // // // // // // // //       })}
// // // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- DefinitionsSection ---- */
// // // // // // // // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // // // // //         return (
// // // // // // // // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // // // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         );
// // // // // // // // // // // // //       })}
// // // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- EditorialSection ---- */
// // // // // // // // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // // // // // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} />
// // // // // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // // //   </section>
// // // // // // // // // // // // // );

// // // // // // // // // // // // // /* ---- StandaloneSection ---- */
// // // // // // // // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // // // // // // // //     {section.formulas?.length > 0 && (
// // // // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // // // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     )}
// // // // // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // // //   </section>
// // // // // // // // // // // // // );

// // // // // // // // // // // // // /* ---- SubsectionSection ---- */
// // // // // // // // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // // // // //   const children = data?.children || [];
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // // //       <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // // // // // // // //       {children.length > 0 && (
// // // // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // /* ---- ToolsSection ---- */
// // // // // // // // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // // // // //   const tools = data?.tools || [];
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // // //       <SectionHeader title={section.title} />
// // // // // // // // // // // // //       {tools.length > 0 && (
// // // // // // // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // // // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    SECTIONS CONTAINER
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // const renderers = {
// // // // // // // // // // // // //   formulas: FormulasSection,
// // // // // // // // // // // // //   definitions: DefinitionsSection,
// // // // // // // // // // // // //   editorial: EditorialSection,
// // // // // // // // // // // // //   standalone: StandaloneSection,
// // // // // // // // // // // // //   subsection: SubsectionSection,
// // // // // // // // // // // // //   tools: ToolsSection,
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // // // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // // // // // // // //     {sections.map((section, index) => {
// // // // // // // // // // // // //       const R = renderers[section.type];
// // // // // // // // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // // // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // // // // // // // //     })}
// // // // // // // // // // // // //   </div>
// // // // // // // // // // // // // );


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    SIDEBAR
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // // //   const lit = h || active;
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // // // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '12px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s' }}>{label}</div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <button style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', fontSize: '13.5px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent' }}
// // // // // // // // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // // // // //       {icon && <span style={{ width: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.6, flexShrink: 0 }}>{icon}</span>}
// // // // // // // // // // // // //       {label}
// // // // // // // // // // // // //     </button>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <a href={href} style={{ display: 'block', padding: '7px 20px 7px 48px', fontSize: '12.5px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)' }}
// // // // // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub }) => {
// // // // // // // // // // // // //   const [open, setOpen] = useState(false);
// // // // // // // // // // // // //   const ref = useRef(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) setOpen(false); };
// // // // // // // // // // // // //     document.addEventListener('click', handler);
// // // // // // // // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // // // // // // // //   }, [open]);

// // // // // // // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth' }); setOpen(false); };
// // // // // // // // // // // // //   const heading = { fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <aside ref={ref} style={{ position: 'fixed', left: 0, top: 0, width: open ? '260px' : '48px', height: '100vh', background: '#0d47a1', zIndex: 100, display: 'flex', flexDirection: 'column', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden', boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none' }}>
// // // // // // // // // // // // //      <br/>
// // // // // // // // // // // // //      <br/>
// // // // // // // // // // // // //      <br/>
// // // // // // // // // // // // //       <button style={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // // // // // // // //         onClick={() => setOpen(!open)} aria-label="Toggle sidebar"
// // // // // // // // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // // // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // // // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // // // // // // // //         </svg>
// // // // // // // // // // // // //       </button>

// // // // // // // // // // // // //       <div style={{ padding: '16px 20px 12px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // // // // // // // //         <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // // // // // // // //         {brandSub && <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // // // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <nav style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto' }}>
// // // // // // // // // // // // //         <div style={heading}>On This Page</div>
// // // // // // // // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // // // // //         {subtopics?.length > 0 && (
// // // // // // // // // // // // //           <>
// // // // // // // // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // // // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // // // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // // // // // // // //           </>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </nav>

// // // // // // // // // // // // //       <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s' }}>
// // // // // // // // // // // // //         <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </aside>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    HERO BANNER
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => (
// // // // // // // // // // // // //   <header style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // // // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // // // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // // // // // // // //       {breadcrumbUrl && (
// // // // // // // // // // // // //         <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // // // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // // // // // // // //       {subtitle && <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // // // // // // // //       {stats?.length > 0 && (
// // // // // // // // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // // // // // // // //           {stats.map((st, i) => (
// // // // // // // // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '20px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   </header>
// // // // // // // // // // // // // );


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    TOPIC STRIP
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '14px 20px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // // // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // // // // //       {icon && <span style={{ fontSize: '14px', opacity: 0.5 }}>{icon}</span>}
// // // // // // // // // // // // //       {label}
// // // // // // // // // // // // //     </a>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // // // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth' }); };
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', gap: 0, overflowX: 'auto', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // // // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };


// // // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // // //    SHELL — SectionFrontPage
// // // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // // const SectionFrontPage = ({ meta, sections, sectionData }) => {
// // // // // // // // // // // // //   const stats = useMemo(() => {
// // // // // // // // // // // // //     const r = [];
// // // // // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // // // // //       if (!sec) return;
// // // // // // // // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // // // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // // // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // // // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //     return r;
// // // // // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // // // // //   const subtopics = useMemo(() => {
// // // // // // // // // // // // //     const all = [];
// // // // // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // // // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //     return all;
// // // // // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //     <br/>
// // // // // // // // // // // // //     <br/>
// // // // // // // // // // // // //     <br/>
    
// // // // // // // // // // // // //       <Sidebar sections={sections} subtopics={subtopics} brandName={meta.title} brandSub="Learn Math Class" />
// // // // // // // // // // // // //       <div style={{ marginLeft: '48px', minHeight: '100vh' }}>
// // // // // // // // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // // // // // // // // //         <TopicStrip sections={sections} />
// // // // // // // // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default SectionFrontPage;



// // // // // // // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // // // // // // /**
// // // // // // // // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // // // // // // // //  * Adjust if your navbar height differs.
// // // // // // // // // // // //  */
// // // // // // // // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    ATOMS
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // // // // // // //   const s = {
// // // // // // // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // // // // // // //     badge: { fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // // // // // // //     link: { marginLeft: 'auto', fontSize: '13px', fontWeight: 600, color: '#3498db', textDecoration: 'none' },
// // // // // // // // // // // //   };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={s.header}>
// // // // // // // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // // // // // // //       {link && (
// // // // // // // // // // // //         <a href={link} style={s.link}
// // // // // // // // // // // //           onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
// // // // // // // // // // // //           onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
// // // // // // // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // // // // // // //         </a>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const IntroProse = ({ content }) => {
// // // // // // // // // // // //   if (!content) return null;
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // // // //       <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // // // // // // //       {count != null && <span style={{ fontSize: '11px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // // // // // // //       {description && <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // // // // // // //     </Tag>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // // // // // // //   const mathRef = useRef(null);
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [tex]);
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // // // // // // //       {label && <div style={{ fontSize: '10px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // // // // // // //       <div style={{ fontSize: '15px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // // // // // // //     <span style={{ fontWeight: 700, fontSize: '13px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // // // // // // //     <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // // // // // // //     </span>
// // // // // // // // // // // //   </div>
// // // // // // // // // // // // );

// // // // // // // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginBottom: '10px', color: '#2a7a6a', fontWeight: 700 }}>{icon || '⊕'}</div>
// // // // // // // // // // // //       <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // // // // // // //       {description && <p style={{ fontSize: '12px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // // // // // // //     </a>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const EditorialBlock = ({ textContent, svgContent }) => {
// // // // // // // // // // // //   const hasVis = !!svgContent;
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: hasVis ? '1fr 1fr' : '1fr', minHeight: hasVis ? '280px' : '200px' }}>
// // // // // // // // // // // //         <div style={{ padding: '28px 32px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.98rem', lineHeight: 1.8, color: '#34495e' }}>
// // // // // // // // // // // //           {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         {hasVis && (
// // // // // // // // // // // //           <div style={{ background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', borderLeft: '1px solid #ebebeb' }}
// // // // // // // // // // // //             dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    SECTION RENDERERS
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // // // //         return (
// // // // // // // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         );
// // // // // // // // // // // //       })}
// // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // // // //         return (
// // // // // // // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         );
// // // // // // // // // // // //       })}
// // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // // // // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} />
// // // // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // //   </section>
// // // // // // // // // // // // );

// // // // // // // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // // // // // // //     {section.formulas?.length > 0 && (
// // // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     )}
// // // // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // //   </section>
// // // // // // // // // // // // );

// // // // // // // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // // // //   const children = data?.children || [];
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // //       <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // // // // // // //       {children.length > 0 && (
// // // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // // // //   const tools = data?.tools || [];
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // // //       <SectionHeader title={section.title} />
// // // // // // // // // // // //       {tools.length > 0 && (
// // // // // // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    SECTIONS CONTAINER
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const renderers = {
// // // // // // // // // // // //   formulas: FormulasSection,
// // // // // // // // // // // //   definitions: DefinitionsSection,
// // // // // // // // // // // //   editorial: EditorialSection,
// // // // // // // // // // // //   standalone: StandaloneSection,
// // // // // // // // // // // //   subsection: SubsectionSection,
// // // // // // // // // // // //   tools: ToolsSection,
// // // // // // // // // // // // };

// // // // // // // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // // // // // // //     {sections.map((section, index) => {
// // // // // // // // // // // //       const R = renderers[section.type];
// // // // // // // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // // // // // // //     })}
// // // // // // // // // // // //   </div>
// // // // // // // // // // // // );


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    SIDEBAR
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const SIDEBAR_COLLAPSED = 48;
// // // // // // // // // // // // const SIDEBAR_EXPANDED = 260;

// // // // // // // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // //   const lit = h || active;
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '12px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <button style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', fontSize: '13.5px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent' }}
// // // // // // // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // // // //       {icon && <span style={{ width: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.6, flexShrink: 0 }}>{icon}</span>}
// // // // // // // // // // // //       {label}
// // // // // // // // // // // //     </button>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <a href={href} style={{ display: 'block', padding: '7px 20px 7px 48px', fontSize: '12.5px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)' }}
// // // // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // // // // // // // //   const ref = useRef(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // // // // // // // //     document.addEventListener('click', handler);
// // // // // // // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // // // // // // //   }, [open, onToggle]);

// // // // // // // // // // // //   const scrollTo = (id) => {
// // // // // // // // // // // //     const el = document.getElementById(id);
// // // // // // // // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // // // // // // // //     onToggle(false);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const heading = { fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // // // // // // //   const sidebarStyle = {
// // // // // // // // // // // //     position: 'fixed',
// // // // // // // // // // // //     left: 0,
// // // // // // // // // // // //     top: `${NAVBAR_HEIGHT}px`,
// // // // // // // // // // // //     width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // // // // // // // //     height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // // // // //     background: '#0d47a1',
// // // // // // // // // // // //     zIndex: 90,
// // // // // // // // // // // //     display: 'flex',
// // // // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // // // //     transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // // // //     boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // // // // // // // //     borderRight: '1px solid rgba(255,255,255,0.15)',
// // // // // // // // // // // //   };

// // // // // // // // // // // //   /* Hidden-scrollbar nav style — scrolls but no visible bar */
// // // // // // // // // // // //   const navStyle = {
// // // // // // // // // // // //     display: open ? 'flex' : 'none',
// // // // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // // // //     padding: '8px 0',
// // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // //     overflowY: 'auto',
// // // // // // // // // // // //     overflowX: 'hidden',
// // // // // // // // // // // //     scrollbarWidth: 'none',        /* Firefox */
// // // // // // // // // // // //     msOverflowStyle: 'none',       /* IE/Edge */
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <aside ref={ref} style={sidebarStyle}>
// // // // // // // // // // // //       {/* Inject a style tag to hide webkit scrollbar */}
// // // // // // // // // // // //       <style dangerouslySetInnerHTML={{ __html: `
// // // // // // // // // // // //         .sfp-sidebar-nav::-webkit-scrollbar { display: none; }
// // // // // // // // // // // //       `}} />

// // // // // // // // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // // // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // // // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // // // // // // //         </svg>
// // // // // // // // // // // //       </button>

// // // // // // // // // // // //       {/* Brand */}
// // // // // // // // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // // // // // // //         <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // // // // // // //         {brandSub && <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Dots (collapsed) */}
// // // // // // // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Nav (expanded) — uses className for webkit scrollbar hiding */}
// // // // // // // // // // // //       <nav className="sfp-sidebar-nav" style={navStyle}>
// // // // // // // // // // // //         <div style={heading}>On This Page</div>
// // // // // // // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // // // //         {subtopics?.length > 0 && (
// // // // // // // // // // // //           <>
// // // // // // // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // // // // // // //           </>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </nav>

// // // // // // // // // // // //       {/* Footer */}
// // // // // // // // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // // // // // // // //         <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </aside>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    HERO BANNER
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => (
// // // // // // // // // // // //   <header style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // // // // // // //       {breadcrumbUrl && (
// // // // // // // // // // // //         <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // // // // // // //       {subtitle && <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // // // // // // //       {stats?.length > 0 && (
// // // // // // // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // // // // // // //           {stats.map((st, i) => (
// // // // // // // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '20px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   </header>
// // // // // // // // // // // // );


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    TOPIC STRIP
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '14px 20px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // // // //       {icon && <span style={{ fontSize: '14px', opacity: 0.5 }}>{icon}</span>}
// // // // // // // // // // // //       {label}
// // // // // // // // // // // //     </a>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', gap: 0, overflowX: 'auto', position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // // // // // // //     </nav>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };


// // // // // // // // // // // // /* ================================================================
// // // // // // // // // // // //    SHELL — SectionFrontPage
// // // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // // const SectionFrontPage = ({ meta, sections, sectionData }) => {
// // // // // // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // // // // // // // //   const stats = useMemo(() => {
// // // // // // // // // // // //     const r = [];
// // // // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // // // //       if (!sec) return;
// // // // // // // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // // // // // // //     });
// // // // // // // // // // // //     return r;
// // // // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // // // //   const subtopics = useMemo(() => {
// // // // // // // // // // // //     const all = [];
// // // // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // // // // // // //       }
// // // // // // // // // // // //     });
// // // // // // // // // // // //     return all;
// // // // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <>
// // // // // // // // // // // //       <Sidebar
// // // // // // // // // // // //         sections={sections}
// // // // // // // // // // // //         subtopics={subtopics}
// // // // // // // // // // // //         brandName={meta.title}
// // // // // // // // // // // //         brandSub="Learn Math Class"
// // // // // // // // // // // //         open={sidebarOpen}
// // // // // // // // // // // //         onToggle={setSidebarOpen}
// // // // // // // // // // // //       />
// // // // // // // // // // // //       <div style={{
// // // // // // // // // // // //         marginLeft: contentMargin,
// // // // // // // // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // // // // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // // // // //       }}>
// // // // // // // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // // // // // // // //         <TopicStrip sections={sections} />
// // // // // // // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default SectionFrontPage;


// // // // // // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // // // // // /**
// // // // // // // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // // // // // // //  * Adjust if your navbar height differs.
// // // // // // // // // // //  */
// // // // // // // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    ATOMS
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // // // // // //   const s = {
// // // // // // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // // // // // //     badge: { fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // // // // // //     link: { marginLeft: 'auto', fontSize: '13px', fontWeight: 600, color: '#3498db', textDecoration: 'none' },
// // // // // // // // // // //   };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={s.header}>
// // // // // // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // // // // // //       {link && (
// // // // // // // // // // //         <a href={link} style={s.link}
// // // // // // // // // // //           onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
// // // // // // // // // // //           onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
// // // // // // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // // // // // //         </a>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const IntroProse = ({ content }) => {
// // // // // // // // // // //   if (!content) return null;
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // // //       <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // // // // // //       {count != null && <span style={{ fontSize: '11px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // // // // // //       {description && <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // // // // // //     </Tag>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // // // // // //   const mathRef = useRef(null);
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [tex]);
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // // // // // //       {label && <div style={{ fontSize: '10px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // // // // // //       <div style={{ fontSize: '15px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // // // // // //     <span style={{ fontWeight: 700, fontSize: '13px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // // // // // //     <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // // // // // //     </span>
// // // // // // // // // // //   </div>
// // // // // // // // // // // );

// // // // // // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginBottom: '10px', color: '#2a7a6a', fontWeight: 700 }}>{icon || '⊕'}</div>
// // // // // // // // // // //       <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // // // // // //       {description && <p style={{ fontSize: '12px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // // // // // //     </a>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const EditorialBlock = ({ textContent, svgContent }) => {
// // // // // // // // // // //   const hasVis = !!svgContent;
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: hasVis ? '1fr 1fr' : '1fr', minHeight: hasVis ? '280px' : '200px' }}>
// // // // // // // // // // //         <div style={{ padding: '28px 32px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.98rem', lineHeight: 1.8, color: '#34495e' }}>
// // // // // // // // // // //           {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // // // // // //         </div>
// // // // // // // // // // //         {hasVis && (
// // // // // // // // // // //           <div style={{ background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', borderLeft: '1px solid #ebebeb' }}
// // // // // // // // // // //             dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    SECTION RENDERERS
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // // //         return (
// // // // // // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         );
// // // // // // // // // // //       })}
// // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // // //         return (
// // // // // // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         );
// // // // // // // // // // //       })}
// // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // // // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} />
// // // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // //   </section>
// // // // // // // // // // // );

// // // // // // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // // // // // //     {section.formulas?.length > 0 && (
// // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     )}
// // // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // //   </section>
// // // // // // // // // // // );

// // // // // // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // // //   const children = data?.children || [];
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // //       <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // // // // // //       {children.length > 0 && (
// // // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // // //   const tools = data?.tools || [];
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // // //       <SectionHeader title={section.title} />
// // // // // // // // // // //       {tools.length > 0 && (
// // // // // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    SECTIONS CONTAINER
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const renderers = {
// // // // // // // // // // //   formulas: FormulasSection,
// // // // // // // // // // //   definitions: DefinitionsSection,
// // // // // // // // // // //   editorial: EditorialSection,
// // // // // // // // // // //   standalone: StandaloneSection,
// // // // // // // // // // //   subsection: SubsectionSection,
// // // // // // // // // // //   tools: ToolsSection,
// // // // // // // // // // // };

// // // // // // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // // // // // //     {sections.map((section, index) => {
// // // // // // // // // // //       const R = renderers[section.type];
// // // // // // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // // // // // //     })}
// // // // // // // // // // //   </div>
// // // // // // // // // // // );


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    SIDEBAR
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // //   const lit = h || active;
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '12px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // //   return (
// // // // // // // // // // //     <button style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', fontSize: '13.5px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent', overflow: 'hidden' }}
// // // // // // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // // //       {icon && <span style={{ width: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.6, flexShrink: 0 }}>{icon}</span>}
// // // // // // // // // // //       <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>{label}</span>
// // // // // // // // // // //     </button>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // //   return (
// // // // // // // // // // //     <a href={href} style={{ display: 'block', padding: '7px 20px 7px 48px', fontSize: '12.5px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
// // // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // // // // // // //   const ref = useRef(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // // // // // // //     document.addEventListener('click', handler);
// // // // // // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // // // // // //   }, [open, onToggle]);

// // // // // // // // // // //   const scrollTo = (id) => {
// // // // // // // // // // //     const el = document.getElementById(id);
// // // // // // // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // // // // // // //     onToggle(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   const heading = { fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // // // // // //   const sidebarStyle = {
// // // // // // // // // // //     position: 'fixed',
// // // // // // // // // // //     left: 0,
// // // // // // // // // // //     top: `${NAVBAR_HEIGHT}px`,
// // // // // // // // // // //     width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // // // // // // //     height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // // // //     background: '#0d47a1',
// // // // // // // // // // //     zIndex: 90,
// // // // // // // // // // //     display: 'flex',
// // // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // // //     transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // // //     boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // // // // // // //   };

// // // // // // // // // // //   /* Hidden-scrollbar nav style — scrolls but no visible bar */
// // // // // // // // // // //   const navStyle = {
// // // // // // // // // // //     display: open ? 'flex' : 'none',
// // // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // // //     padding: '8px 0',
// // // // // // // // // // //     flex: 1,
// // // // // // // // // // //     overflowY: 'auto',
// // // // // // // // // // //     overflowX: 'hidden',
// // // // // // // // // // //     scrollbarWidth: 'none',        /* Firefox */
// // // // // // // // // // //     msOverflowStyle: 'none',       /* IE/Edge */
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <aside ref={ref} style={sidebarStyle}>
// // // // // // // // // // //       {/* Inject a style tag to hide webkit scrollbar */}
// // // // // // // // // // //       <style dangerouslySetInnerHTML={{ __html: `
// // // // // // // // // // //         .sfp-sidebar-nav::-webkit-scrollbar { display: none; }
// // // // // // // // // // //       `}} />

// // // // // // // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // // // // // //         </svg>
// // // // // // // // // // //       </button>

// // // // // // // // // // //       {/* Brand */}
// // // // // // // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // // // // // //         <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // // // // // //         {brandSub && <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Dots (collapsed) */}
// // // // // // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Nav (expanded) — uses className for webkit scrollbar hiding */}
// // // // // // // // // // //       <nav className="sfp-sidebar-nav" style={navStyle}>
// // // // // // // // // // //         <div style={heading}>On This Page</div>
// // // // // // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // // //         {subtopics?.length > 0 && (
// // // // // // // // // // //           <>
// // // // // // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // // // // // //           </>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </nav>

// // // // // // // // // // //       {/* Footer */}
// // // // // // // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // // // // // // //         <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </aside>
// // // // // // // // // // //   );
// // // // // // // // // // // };


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    HERO BANNER
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => (
// // // // // // // // // // //   <header style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // // // // // //       {breadcrumbUrl && (
// // // // // // // // // // //         <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // // // // // //       {subtitle && <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // // // // // //       {stats?.length > 0 && (
// // // // // // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // // // // // //           {stats.map((st, i) => (
// // // // // // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '20px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   </header>
// // // // // // // // // // // );


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    TOPIC STRIP
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '14px 20px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // // //       {icon && <span style={{ fontSize: '14px', opacity: 0.5 }}>{icon}</span>}
// // // // // // // // // // //       {label}
// // // // // // // // // // //     </a>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', gap: 0, overflowX: 'auto', position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };


// // // // // // // // // // // /* ================================================================
// // // // // // // // // // //    SHELL — SectionFrontPage
// // // // // // // // // // //    ================================================================ */

// // // // // // // // // // // const SectionFrontPage = ({ meta, sections, sectionData }) => {
// // // // // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // // // // // // //   const stats = useMemo(() => {
// // // // // // // // // // //     const r = [];
// // // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // // //       if (!sec) return;
// // // // // // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // // // // // //     });
// // // // // // // // // // //     return r;
// // // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // // //   const subtopics = useMemo(() => {
// // // // // // // // // // //     const all = [];
// // // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // // // // // //       }
// // // // // // // // // // //     });
// // // // // // // // // // //     return all;
// // // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       <Sidebar
// // // // // // // // // // //         sections={sections}
// // // // // // // // // // //         subtopics={subtopics}
// // // // // // // // // // //         brandName={meta.title}
// // // // // // // // // // //         brandSub="Learn Math Class"
// // // // // // // // // // //         open={sidebarOpen}
// // // // // // // // // // //         onToggle={setSidebarOpen}
// // // // // // // // // // //       />
// // // // // // // // // // //       <div style={{
// // // // // // // // // // //         marginLeft: contentMargin,
// // // // // // // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // // // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // // // //       }}>
// // // // // // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // // // // // // //         <TopicStrip sections={sections} />
// // // // // // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default SectionFrontPage;



// // // // // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // // // // /**
// // // // // // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // // // // // //  * Adjust if your navbar height differs.
// // // // // // // // // //  */
// // // // // // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    ATOMS
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // // // // //   const s = {
// // // // // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // // // // //     badge: { fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // // // // //     link: { marginLeft: 'auto', fontSize: '13px', fontWeight: 600, color: '#3498db', textDecoration: 'none' },
// // // // // // // // // //   };
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={s.header}>
// // // // // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // // // // //       {link && (
// // // // // // // // // //         <a href={link} style={s.link}
// // // // // // // // // //           onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
// // // // // // // // // //           onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
// // // // // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // // // // //         </a>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const IntroProse = ({ content }) => {
// // // // // // // // // //   if (!content) return null;
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // // // // //   return (
// // // // // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // //       <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // // // // //       {count != null && <span style={{ fontSize: '11px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // // // // //       {description && <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // // // // //     </Tag>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // // // // //   const mathRef = useRef(null);
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // // // // //     }
// // // // // // // // // //   }, [tex]);
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // // // // //       {label && <div style={{ fontSize: '10px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // // // // //       <div style={{ fontSize: '15px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // // // // //     <span style={{ fontWeight: 700, fontSize: '13px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // // // // //     <span style={{ fontSize: '12.5px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // // // // //     </span>
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // // // // //   return (
// // // // // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginBottom: '10px', color: '#2a7a6a', fontWeight: 700 }}>{icon || '⊕'}</div>
// // // // // // // // // //       <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // // // // //       {description && <p style={{ fontSize: '12px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // // // // //     </a>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const EditorialBlock = ({ textContent, svgContent }) => {
// // // // // // // // // //   const hasVis = !!svgContent;
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: hasVis ? '1fr 1fr' : '1fr', minHeight: hasVis ? '280px' : '200px' }}>
// // // // // // // // // //         <div style={{ padding: '28px 32px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.98rem', lineHeight: 1.8, color: '#34495e' }}>
// // // // // // // // // //           {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // // // // //         </div>
// // // // // // // // // //         {hasVis && (
// // // // // // // // // //           <div style={{ background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', borderLeft: '1px solid #ebebeb' }}
// // // // // // // // // //             dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    SECTION RENDERERS
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // // //   return (
// // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // //         return (
// // // // // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         );
// // // // // // // // // //       })}
// // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // // //   return (
// // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // // //       {categories.length > 0 && (
// // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       {categories.map((c) => {
// // // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // // //         if (!ci.length) return null;
// // // // // // // // // //         return (
// // // // // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         );
// // // // // // // // // //       })}
// // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} />
// // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // //   </section>
// // // // // // // // // // );

// // // // // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // // // // //     {section.formulas?.length > 0 && (
// // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // // // // //       </div>
// // // // // // // // // //     )}
// // // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // //   </section>
// // // // // // // // // // );

// // // // // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // //   const children = data?.children || [];
// // // // // // // // // //   return (
// // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // //       <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // // // // //       {children.length > 0 && (
// // // // // // // // // //         <div style={catGrid}>
// // // // // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // // //   const tools = data?.tools || [];
// // // // // // // // // //   return (
// // // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // // //       <SectionHeader title={section.title} />
// // // // // // // // // //       {tools.length > 0 && (
// // // // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    SECTIONS CONTAINER
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const renderers = {
// // // // // // // // // //   formulas: FormulasSection,
// // // // // // // // // //   definitions: DefinitionsSection,
// // // // // // // // // //   editorial: EditorialSection,
// // // // // // // // // //   standalone: StandaloneSection,
// // // // // // // // // //   subsection: SubsectionSection,
// // // // // // // // // //   tools: ToolsSection,
// // // // // // // // // // };

// // // // // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // // // // //     {sections.map((section, index) => {
// // // // // // // // // //       const R = renderers[section.type];
// // // // // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // // // // //     })}
// // // // // // // // // //   </div>
// // // // // // // // // // );


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    SIDEBAR
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // //   const lit = h || active;
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '12px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // //   return (
// // // // // // // // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '13.5px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent', lineHeight: 1.4 }}
// // // // // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // //       {icon && <span style={{ width: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.6, flexShrink: 0, lineHeight: '19px' }}>{icon}</span>}
// // // // // // // // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // // // // // // // //     </button>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // //   return (
// // // // // // // // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '12.5px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // // // // // //   const ref = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // // // // // //     document.addEventListener('click', handler);
// // // // // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // // // // //   }, [open, onToggle]);

// // // // // // // // // //   const scrollTo = (id) => {
// // // // // // // // // //     const el = document.getElementById(id);
// // // // // // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // // // // // //     onToggle(false);
// // // // // // // // // //   };

// // // // // // // // // //   const heading = { fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // // // // //   const sidebarStyle = {
// // // // // // // // // //     position: 'fixed',
// // // // // // // // // //     left: 0,
// // // // // // // // // //     top: `${NAVBAR_HEIGHT}px`,
// // // // // // // // // //     width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // // // // // //     height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // // //     background: '#0d47a1',
// // // // // // // // // //     zIndex: 90,
// // // // // // // // // //     display: 'flex',
// // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // //     transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // //     boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // // // // // //   };

// // // // // // // // // //   /* Hidden-scrollbar nav style — scrolls but no visible bar */
// // // // // // // // // //   const navStyle = {
// // // // // // // // // //     display: open ? 'flex' : 'none',
// // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // //     padding: '8px 0',
// // // // // // // // // //     flex: 1,
// // // // // // // // // //     overflowY: 'auto',
// // // // // // // // // //     overflowX: 'hidden',
// // // // // // // // // //     scrollbarWidth: 'none',        /* Firefox */
// // // // // // // // // //     msOverflowStyle: 'none',       /* IE/Edge */
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <aside ref={ref} style={sidebarStyle}>
// // // // // // // // // //       {/* Inject a style tag to hide webkit scrollbar */}
// // // // // // // // // //       <style dangerouslySetInnerHTML={{ __html: `
// // // // // // // // // //         .sfp-sidebar-nav::-webkit-scrollbar { display: none; }
// // // // // // // // // //       `}} />

// // // // // // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // // // // //         </svg>
// // // // // // // // // //       </button>

// // // // // // // // // //       {/* Brand */}
// // // // // // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // // // // //         <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // // // // //         {brandSub && <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Dots (collapsed) */}
// // // // // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Nav (expanded) — uses className for webkit scrollbar hiding */}
// // // // // // // // // //       <nav className="sfp-sidebar-nav" style={navStyle}>
// // // // // // // // // //         <div style={heading}>On This Page</div>
// // // // // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // // //         {subtopics?.length > 0 && (
// // // // // // // // // //           <>
// // // // // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // // // // //           </>
// // // // // // // // // //         )}
// // // // // // // // // //       </nav>

// // // // // // // // // //       {/* Footer */}
// // // // // // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // // // // // //         <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // // // // //       </div>
// // // // // // // // // //     </aside>
// // // // // // // // // //   );
// // // // // // // // // // };


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    HERO BANNER
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => (
// // // // // // // // // //   <header style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // // // // //       {breadcrumbUrl && (
// // // // // // // // // //         <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // // // // //       {subtitle && <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // // // // //       {stats?.length > 0 && (
// // // // // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // // // // //           {stats.map((st, i) => (
// // // // // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '20px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   </header>
// // // // // // // // // // );


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    TOPIC STRIP
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // // // // //   return (
// // // // // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // // //       {icon && <span style={{ fontSize: '14px', opacity: 0.5 }}>{icon}</span>}
// // // // // // // // // //       {label}
// // // // // // // // // //     </a>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // // // // // //   return (
// // // // // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };


// // // // // // // // // // /* ================================================================
// // // // // // // // // //    SHELL — SectionFrontPage
// // // // // // // // // //    ================================================================ */

// // // // // // // // // // const SectionFrontPage = ({ meta, sections, sectionData }) => {
// // // // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // // // // // //   const stats = useMemo(() => {
// // // // // // // // // //     const r = [];
// // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // //       if (!sec) return;
// // // // // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // // // // //     });
// // // // // // // // // //     return r;
// // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // //   const subtopics = useMemo(() => {
// // // // // // // // // //     const all = [];
// // // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //     return all;
// // // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <Sidebar
// // // // // // // // // //         sections={sections}
// // // // // // // // // //         subtopics={subtopics}
// // // // // // // // // //         brandName={meta.title}
// // // // // // // // // //         brandSub="Learn Math Class"
// // // // // // // // // //         open={sidebarOpen}
// // // // // // // // // //         onToggle={setSidebarOpen}
// // // // // // // // // //       />
// // // // // // // // // //       <div style={{
// // // // // // // // // //         marginLeft: contentMargin,
// // // // // // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // // //       }}>
// // // // // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // // // // // //         <TopicStrip sections={sections} />
// // // // // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // // // // //       </div>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SectionFrontPage;





// // // // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // // // /**
// // // // // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // // // // //  * Adjust if your navbar height differs.
// // // // // // // // //  */
// // // // // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // // // // /* ================================================================
// // // // // // // // //    ATOMS
// // // // // // // // //    ================================================================ */

// // // // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // // // //   const s = {
// // // // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // // // //     badge: { fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // // // //     link: { marginLeft: 'auto', fontSize: '16.25px', fontWeight: 600, color: '#3498db', textDecoration: 'none' },
// // // // // // // // //   };
// // // // // // // // //   return (
// // // // // // // // //     <div style={s.header}>
// // // // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // // // //       {link && (
// // // // // // // // //         <a href={link} style={s.link}
// // // // // // // // //           onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
// // // // // // // // //           onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
// // // // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // // // //         </a>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const IntroProse = ({ content }) => {
// // // // // // // // //   if (!content) return null;
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.31rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // // // //   return (
// // // // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // // // //       {count != null && <span style={{ fontSize: '13.75px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // // // //       {description && <span style={{ fontSize: '15.6px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // // // //     </Tag>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // // // //   const mathRef = useRef(null);
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // // // //     }
// // // // // // // // //   }, [tex]);
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // // // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // // // //       <div style={{ fontSize: '18.75px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // // // //     <span style={{ fontWeight: 700, fontSize: '16.25px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // // // //     <span style={{ fontSize: '15.6px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // // // //     </span>
// // // // // // // // //   </div>
// // // // // // // // // );

// // // // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // // // //   return (
// // // // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17.5px', marginBottom: '10px', color: '#2a7a6a', fontWeight: 700 }}>{icon || '⊕'}</div>
// // // // // // // // //       <h4 style={{ fontSize: '16.25px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // // // //       {description && <p style={{ fontSize: '15px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // // // //     </a>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const EditorialBlock = ({ textContent, svgContent }) => {
// // // // // // // // //   const hasVis = !!svgContent;
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: hasVis ? '1fr 1fr' : '1fr', minHeight: hasVis ? '280px' : '200px' }}>
// // // // // // // // //         <div style={{ padding: '28px 32px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.225rem', lineHeight: 1.8, color: '#34495e' }}>
// // // // // // // // //           {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // // // //         </div>
// // // // // // // // //         {hasVis && (
// // // // // // // // //           <div style={{ background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', borderLeft: '1px solid #ebebeb' }}
// // // // // // // // //             dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };


// // // // // // // // // /* ================================================================
// // // // // // // // //    SECTION RENDERERS
// // // // // // // // //    ================================================================ */

// // // // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // //   return (
// // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // //       {categories.length > 0 && (
// // // // // // // // //         <div style={catGrid}>
// // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       {categories.map((c) => {
// // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // //         if (!ci.length) return null;
// // // // // // // // //         return (
// // // // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         );
// // // // // // // // //       })}
// // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // // //   return (
// // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // // //       {categories.length > 0 && (
// // // // // // // // //         <div style={catGrid}>
// // // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       {categories.map((c) => {
// // // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // // //         if (!ci.length) return null;
// // // // // // // // //         return (
// // // // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         );
// // // // // // // // //       })}
// // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} />
// // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // //   </section>
// // // // // // // // // );

// // // // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // // // //     {section.formulas?.length > 0 && (
// // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // // // //       </div>
// // // // // // // // //     )}
// // // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // //   </section>
// // // // // // // // // );

// // // // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // //   const children = data?.children || [];
// // // // // // // // //   return (
// // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // //       <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // // // //       {children.length > 0 && (
// // // // // // // // //         <div style={catGrid}>
// // // // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // // //   const tools = data?.tools || [];
// // // // // // // // //   return (
// // // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // // //       <SectionHeader title={section.title} />
// // // // // // // // //       {tools.length > 0 && (
// // // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };


// // // // // // // // // /* ================================================================
// // // // // // // // //    SECTIONS CONTAINER
// // // // // // // // //    ================================================================ */

// // // // // // // // // const renderers = {
// // // // // // // // //   formulas: FormulasSection,
// // // // // // // // //   definitions: DefinitionsSection,
// // // // // // // // //   editorial: EditorialSection,
// // // // // // // // //   standalone: StandaloneSection,
// // // // // // // // //   subsection: SubsectionSection,
// // // // // // // // //   tools: ToolsSection,
// // // // // // // // // };

// // // // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // // // //     {sections.map((section, index) => {
// // // // // // // // //       const R = renderers[section.type];
// // // // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // // // //     })}
// // // // // // // // //   </div>
// // // // // // // // // );


// // // // // // // // // /* ================================================================
// // // // // // // // //    SIDEBAR
// // // // // // // // //    ================================================================ */

// // // // // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // //   const lit = h || active;
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // //   return (
// // // // // // // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent', lineHeight: 1.4 }}
// // // // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // //       {icon && <span style={{ width: '20px', textAlign: 'center', fontSize: '17.5px', opacity: 0.6, flexShrink: 0, lineHeight: '19px' }}>{icon}</span>}
// // // // // // // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // // // // // // //     </button>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // //   return (
// // // // // // // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // // // // //   const ref = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // // // // //     document.addEventListener('click', handler);
// // // // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // // // //   }, [open, onToggle]);

// // // // // // // // //   const scrollTo = (id) => {
// // // // // // // // //     const el = document.getElementById(id);
// // // // // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // // // // //     onToggle(false);
// // // // // // // // //   };

// // // // // // // // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // // // //   const sidebarStyle = {
// // // // // // // // //     position: 'fixed',
// // // // // // // // //     left: 0,
// // // // // // // // //     top: `${NAVBAR_HEIGHT}px`,
// // // // // // // // //     width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // // // // //     height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // //     background: '#0d47a1',
// // // // // // // // //     zIndex: 90,
// // // // // // // // //     display: 'flex',
// // // // // // // // //     flexDirection: 'column',
// // // // // // // // //     transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // //     overflow: 'hidden',
// // // // // // // // //     boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // // // // //   };

// // // // // // // // //   /* Hidden-scrollbar nav style — scrolls but no visible bar */
// // // // // // // // //   const navStyle = {
// // // // // // // // //     display: open ? 'flex' : 'none',
// // // // // // // // //     flexDirection: 'column',
// // // // // // // // //     padding: '8px 0',
// // // // // // // // //     flex: 1,
// // // // // // // // //     overflowY: 'auto',
// // // // // // // // //     overflowX: 'hidden',
// // // // // // // // //     scrollbarWidth: 'none',        /* Firefox */
// // // // // // // // //     msOverflowStyle: 'none',       /* IE/Edge */
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <aside ref={ref} style={sidebarStyle}>
// // // // // // // // //       {/* Inject a style tag to hide webkit scrollbar */}
// // // // // // // // //       <style dangerouslySetInnerHTML={{
// // // // // // // // //         __html: `
// // // // // // // // //         .sfp-sidebar-nav::-webkit-scrollbar { display: none; }
// // // // // // // // //       `}} />

// // // // // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // // // //         </svg>
// // // // // // // // //       </button>

// // // // // // // // //       {/* Brand */}
// // // // // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // // // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // // // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Dots (collapsed) */}
// // // // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Nav (expanded) — uses className for webkit scrollbar hiding */}
// // // // // // // // //       <nav className="sfp-sidebar-nav" style={navStyle}>
// // // // // // // // //         <div style={heading}>On This Page</div>
// // // // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // // //         {subtopics?.length > 0 && (
// // // // // // // // //           <>
// // // // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // // // //           </>
// // // // // // // // //         )}
// // // // // // // // //       </nav>

// // // // // // // // //       {/* Footer */}
// // // // // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // // // // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // // // //       </div>
// // // // // // // // //     </aside>
// // // // // // // // //   );
// // // // // // // // // };


// // // // // // // // // /* ================================================================
// // // // // // // // //    HERO BANNER
// // // // // // // // //    ================================================================ */

// // // // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => (
// // // // // // // // //   <header style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // // // //       {breadcrumbUrl && (
// // // // // // // // //         <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // // // //       {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // // // //       {stats?.length > 0 && (
// // // // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // // // //           {stats.map((st, i) => (
// // // // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   </header>
// // // // // // // // // );


// // // // // // // // // /* ================================================================
// // // // // // // // //    TOPIC STRIP
// // // // // // // // //    ================================================================ */

// // // // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // // // //   const [h, setH] = useState(false);
// // // // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // // // //   return (
// // // // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // // //       {icon && <span style={{ fontSize: '17.5px', opacity: 0.5 }}>{icon}</span>}
// // // // // // // // //       {label}
// // // // // // // // //     </a>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // // // // //   return (
// // // // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };


// // // // // // // // // /* ================================================================
// // // // // // // // //    SHELL — SectionFrontPage
// // // // // // // // //    ================================================================ */

// // // // // // // // // const SectionFrontPage = ({ meta, sections, sectionData }) => {
// // // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // // // // //   const stats = useMemo(() => {
// // // // // // // // //     const r = [];
// // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // //       if (!sec) return;
// // // // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // // // //     });
// // // // // // // // //     return r;
// // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // //   const subtopics = useMemo(() => {
// // // // // // // // //     const all = [];
// // // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //     return all;
// // // // // // // // //   }, [sections, sectionData]);

// // // // // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Sidebar
// // // // // // // // //         sections={sections}
// // // // // // // // //         subtopics={subtopics}
// // // // // // // // //         brandName={meta.title}
// // // // // // // // //         brandSub="Learn Math Class"
// // // // // // // // //         open={sidebarOpen}
// // // // // // // // //         onToggle={setSidebarOpen}
// // // // // // // // //       />
// // // // // // // // //       <div style={{
// // // // // // // // //         marginLeft: contentMargin,
// // // // // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // // //       }}>
// // // // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // // // // //         <TopicStrip sections={sections} />
// // // // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // // // //       </div>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SectionFrontPage;



// // // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // // /**
// // // // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // // // //  * Adjust if your navbar height differs.
// // // // // // // //  */
// // // // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // // // /* ================================================================
// // // // // // // //    NAV ICON
// // // // // // // //    Renders the appropriate icon for a section based on its navIcon
// // // // // // // //    identifier. Supports both unicode text and inline SVGs.
// // // // // // // //    Pages can override by setting navIcon in seoData.
// // // // // // // //    ================================================================ */

// // // // // // // // const iconMap = {
// // // // // // // //   formulas: ({ size, color }) => (
// // // // // // // //     <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>
// // // // // // // //   ),
// // // // // // // //   definitions: ({ size, color }) => (
// // // // // // // //     <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>
// // // // // // // //   ),
// // // // // // // //   calculators: ({ size, color }) => (
// // // // // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //       <rect x="4" y="2" width="16" height="20" rx="2" />
// // // // // // // //       <rect x="7" y="5" width="10" height="4" rx="1" />
// // // // // // // //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="12" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // // // //       <circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // // // //     </svg>
// // // // // // // //   ),
// // // // // // // //   'visual-tools': ({ size, color }) => (
// // // // // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // // // // // // //       <circle cx="12" cy="12" r="3" />
// // // // // // // //     </svg>
// // // // // // // //   ),
// // // // // // // //   subsection: ({ size, color }) => (
// // // // // // // //     <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>
// // // // // // // //   ),
// // // // // // // // };

// // // // // // // // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // // // // // //   const renderer = iconMap[icon];
// // // // // // // //   if (renderer) return renderer({ size, color });
// // // // // // // //   // Fallback: render as unicode text if icon is a short string (custom override)
// // // // // // // //   if (typeof icon === 'string' && icon.length <= 4) {
// // // // // // // //     return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// // // // // // // //   }
// // // // // // // //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // // // // // // // };


// // // // // // // // /* ================================================================
// // // // // // // //    ATOMS
// // // // // // // //    ================================================================ */

// // // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // // //   const s = {
// // // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // // //     badge: { fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // // //     link: { marginLeft: 'auto', fontSize: '16.25px', fontWeight: 600, color: '#3498db', textDecoration: 'none' },
// // // // // // // //   };
// // // // // // // //   return (
// // // // // // // //     <div style={s.header}>
// // // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // // //       {link && (
// // // // // // // //         <a href={link} style={s.link}
// // // // // // // //           onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
// // // // // // // //           onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
// // // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // // //         </a>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // // // //   return (
// // // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const IntroProse = ({ content }) => {
// // // // // // // //   if (!content) return null;
// // // // // // // //   return (
// // // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.31rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // // //   return (
// // // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // // //       {count != null && <span style={{ fontSize: '13.75px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // // //       {description && <span style={{ fontSize: '15.6px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // // //     </Tag>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // // //   const mathRef = useRef(null);
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // // //     }
// // // // // // // //   }, [tex]);
// // // // // // // //   return (
// // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // // //       <div style={{ fontSize: '18.75px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // // //     <span style={{ fontWeight: 700, fontSize: '16.25px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // // //     <span style={{ fontSize: '15.6px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // // //     </span>
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // // //   return (
// // // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
// // // // // // // //         <NavIcon icon={icon} size={18} color="#2a7a6a" />
// // // // // // // //       </div>
// // // // // // // //       <h4 style={{ fontSize: '16.25px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // // //       {description && <p style={{ fontSize: '15px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // // //     </a>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const EditorialBlock = ({ textContent, svgContent }) => {
// // // // // // // //   const hasVis = !!svgContent;
// // // // // // // //   return (
// // // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: hasVis ? '1fr 1fr' : '1fr', minHeight: hasVis ? '280px' : '200px' }}>
// // // // // // // //         <div style={{ padding: '28px 32px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.225rem', lineHeight: 1.8, color: '#34495e' }}>
// // // // // // // //           {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // // //         </div>
// // // // // // // //         {hasVis && (
// // // // // // // //           <div style={{ background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px', borderLeft: '1px solid #ebebeb' }}
// // // // // // // //             dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };


// // // // // // // // /* ================================================================
// // // // // // // //    SECTION RENDERERS
// // // // // // // //    ================================================================ */

// // // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // //   return (
// // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // //       {categories.length > 0 && (
// // // // // // // //         <div style={catGrid}>
// // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       {categories.map((c) => {
// // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // //         if (!ci.length) return null;
// // // // // // // //         return (
// // // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         );
// // // // // // // //       })}
// // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // // //   const { categories, items, totalCount } = data;
// // // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // // //   return (
// // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // // //       {categories.length > 0 && (
// // // // // // // //         <div style={catGrid}>
// // // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       {categories.map((c) => {
// // // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // // //         if (!ci.length) return null;
// // // // // // // //         return (
// // // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         );
// // // // // // // //       })}
// // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} />
// // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // //   </section>
// // // // // // // // );

// // // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // // //     <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // // //     {section.formulas?.length > 0 && (
// // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // // //       </div>
// // // // // // // //     )}
// // // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // //   </section>
// // // // // // // // );

// // // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // //   const children = data?.children || [];
// // // // // // // //   return (
// // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // //       <SectionHeader title={section.title} link={section.link} linkText="Explore" />
// // // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // // //       {children.length > 0 && (
// // // // // // // //         <div style={catGrid}>
// // // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // // //   const tools = data?.tools || [];
// // // // // // // //   return (
// // // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // // //       <SectionHeader title={section.title} />
// // // // // // // //       {tools.length > 0 && (
// // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };


// // // // // // // // /* ================================================================
// // // // // // // //    SECTIONS CONTAINER
// // // // // // // //    ================================================================ */

// // // // // // // // const renderers = {
// // // // // // // //   formulas: FormulasSection,
// // // // // // // //   definitions: DefinitionsSection,
// // // // // // // //   editorial: EditorialSection,
// // // // // // // //   standalone: StandaloneSection,
// // // // // // // //   subsection: SubsectionSection,
// // // // // // // //   tools: ToolsSection,
// // // // // // // // };

// // // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // // //     {sections.map((section, index) => {
// // // // // // // //       const R = renderers[section.type];
// // // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // // //     })}
// // // // // // // //   </div>
// // // // // // // // );


// // // // // // // // /* ================================================================
// // // // // // // //    SIDEBAR
// // // // // // // //    ================================================================ */

// // // // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // // //   const [h, setH] = useState(false);
// // // // // // // //   const lit = h || active;
// // // // // // // //   return (
// // // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // // //   const [h, setH] = useState(false);
// // // // // // // //   return (
// // // // // // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent', lineHeight: 1.4 }}
// // // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // //       {icon && (
// // // // // // // //         <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}>
// // // // // // // //           <NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} />
// // // // // // // //         </span>
// // // // // // // //       )}
// // // // // // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // // // // // //     </button>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // // //   const [h, setH] = useState(false);
// // // // // // // //   return (
// // // // // // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // // // //   const ref = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // // // //     document.addEventListener('click', handler);
// // // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // // //   }, [open, onToggle]);

// // // // // // // //   const scrollTo = (id) => {
// // // // // // // //     const el = document.getElementById(id);
// // // // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // // // //     onToggle(false);
// // // // // // // //   };

// // // // // // // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // // //   const sidebarStyle = {
// // // // // // // //     position: 'fixed',
// // // // // // // //     left: 0,
// // // // // // // //     top: `${NAVBAR_HEIGHT}px`,
// // // // // // // //     width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // // // //     height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // //     background: '#0d47a1',
// // // // // // // //     zIndex: 90,
// // // // // // // //     display: 'flex',
// // // // // // // //     flexDirection: 'column',
// // // // // // // //     transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // //     overflow: 'hidden',
// // // // // // // //     boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // // // //   };

// // // // // // // //   /* Hidden-scrollbar nav style — scrolls but no visible bar */
// // // // // // // //   const navStyle = {
// // // // // // // //     display: open ? 'flex' : 'none',
// // // // // // // //     flexDirection: 'column',
// // // // // // // //     padding: '8px 0',
// // // // // // // //     flex: 1,
// // // // // // // //     overflowY: 'auto',
// // // // // // // //     overflowX: 'hidden',
// // // // // // // //     scrollbarWidth: 'none',        /* Firefox */
// // // // // // // //     msOverflowStyle: 'none',       /* IE/Edge */
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <aside ref={ref} style={sidebarStyle}>
// // // // // // // //       {/* Inject a style tag to hide webkit scrollbar */}
// // // // // // // //       <style dangerouslySetInnerHTML={{
// // // // // // // //         __html: `
// // // // // // // //         .sfp-sidebar-nav::-webkit-scrollbar { display: none; }
// // // // // // // //       `}} />

// // // // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // // //         </svg>
// // // // // // // //       </button>

// // // // // // // //       {/* Brand */}
// // // // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // // //       </div>

// // // // // // // //       {/* Dots (collapsed) */}
// // // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // //       </div>

// // // // // // // //       {/* Nav (expanded) — uses className for webkit scrollbar hiding */}
// // // // // // // //       <nav className="sfp-sidebar-nav" style={navStyle}>
// // // // // // // //         <div style={heading}>On This Page</div>
// // // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // // //         {subtopics?.length > 0 && (
// // // // // // // //           <>
// // // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // // //           </>
// // // // // // // //         )}
// // // // // // // //       </nav>

// // // // // // // //       {/* Footer */}
// // // // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // // // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // // //       </div>
// // // // // // // //     </aside>
// // // // // // // //   );
// // // // // // // // };


// // // // // // // // /* ================================================================
// // // // // // // //    HERO BANNER
// // // // // // // //    ================================================================ */

// // // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => (
// // // // // // // //   <header style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // // //       {breadcrumbUrl && (
// // // // // // // //         <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // // //       {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // // //       {stats?.length > 0 && (
// // // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // // //           {stats.map((st, i) => (
// // // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // // //               <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   </header>
// // // // // // // // );


// // // // // // // // /* ================================================================
// // // // // // // //    TOPIC STRIP
// // // // // // // //    ================================================================ */

// // // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // // //   const [h, setH] = useState(false);
// // // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // // //   return (
// // // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // // //       {icon && (
// // // // // // // //         <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}>
// // // // // // // //           <NavIcon icon={icon} size={16} color="currentColor" />
// // // // // // // //         </span>
// // // // // // // //       )}
// // // // // // // //       {label}
// // // // // // // //     </a>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // // // //   return (
// // // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // };


// // // // // // // // /* ================================================================
// // // // // // // //    SHELL — SectionFrontPage
// // // // // // // //    ================================================================ */

// // // // // // // // const SectionFrontPage = ({ meta, sections, sectionData }) => {
// // // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // // // //   const stats = useMemo(() => {
// // // // // // // //     const r = [];
// // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // //       if (!sec) return;
// // // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // // //     });
// // // // // // // //     return r;
// // // // // // // //   }, [sections, sectionData]);

// // // // // // // //   const subtopics = useMemo(() => {
// // // // // // // //     const all = [];
// // // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //     return all;
// // // // // // // //   }, [sections, sectionData]);

// // // // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Sidebar
// // // // // // // //         sections={sections}
// // // // // // // //         subtopics={subtopics}
// // // // // // // //         brandName={meta.title}
// // // // // // // //         brandSub="Learn Math Class"
// // // // // // // //         open={sidebarOpen}
// // // // // // // //         onToggle={setSidebarOpen}
// // // // // // // //       />
// // // // // // // //       <div style={{
// // // // // // // //         marginLeft: contentMargin,
// // // // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // // //       }}>
// // // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // // // //         <TopicStrip sections={sections} />
// // // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // // //       </div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SectionFrontPage;


// // // // // // // import React, { useState, useEffect, useRef, useMemo } from 'react';
// // // // // // // import Image from 'next/image';
// // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // /**
// // // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // // //  * Adjust if your navbar height differs.
// // // // // // //  */
// // // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // // /* ================================================================
// // // // // // //    NAV ICON
// // // // // // //    Renders the appropriate icon for a section based on its navIcon
// // // // // // //    identifier. Supports both unicode text and inline SVGs.
// // // // // // //    Pages can override by setting navIcon in seoData.
// // // // // // //    ================================================================ */

// // // // // // // const iconMap = {
// // // // // // //   formulas: ({ size, color }) => (
// // // // // // //     <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>
// // // // // // //   ),
// // // // // // //   definitions: ({ size, color }) => (
// // // // // // //     <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>
// // // // // // //   ),
// // // // // // //   calculators: ({ size, color }) => (
// // // // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // // // //       <rect x="4" y="2" width="16" height="20" rx="2" />
// // // // // // //       <rect x="7" y="5" width="10" height="4" rx="1" />
// // // // // // //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="12" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // // //       <circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // // //     </svg>
// // // // // // //   ),
// // // // // // //   'visual-tools': ({ size, color }) => (
// // // // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // // // //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // // // // // //       <circle cx="12" cy="12" r="3" />
// // // // // // //     </svg>
// // // // // // //   ),
// // // // // // //   subsection: ({ size, color }) => (
// // // // // // //     <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>
// // // // // // //   ),
// // // // // // // };

// // // // // // // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // // // // //   const renderer = iconMap[icon];
// // // // // // //   if (renderer) return renderer({ size, color });
// // // // // // //   if (typeof icon === 'string' && icon.length <= 4) {
// // // // // // //     return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// // // // // // //   }
// // // // // // //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // // // // // // };


// // // // // // // /* ================================================================
// // // // // // //    ATOMS
// // // // // // //    ================================================================ */

// // // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // // //   const [linkHovered, setLinkHovered] = useState(false);
// // // // // // //   const s = {
// // // // // // //     header: { display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #2c3e50' },
// // // // // // //     title: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: '#2c3e50', margin: 0 },
// // // // // // //     badge: { fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#e3f2fd', color: '#1565c0' },
// // // // // // //     link: {
// // // // // // //       marginLeft: 'auto', fontSize: '14px', fontWeight: 700,
// // // // // // //       color: '#ffffff', textDecoration: 'none',
// // // // // // //       background: linkHovered ? '#1565c0' : '#3498db',
// // // // // // //       padding: '7px 18px', borderRadius: '6px',
// // // // // // //       transition: 'all 0.15s', whiteSpace: 'nowrap',
// // // // // // //       transform: linkHovered ? 'translateY(-1px)' : 'none',
// // // // // // //       boxShadow: linkHovered ? '0 3px 10px rgba(21,101,192,0.25)' : 'none',
// // // // // // //     },
// // // // // // //   };
// // // // // // //   return (
// // // // // // //     <div style={s.header}>
// // // // // // //       <h2 style={s.title}>{title}</h2>
// // // // // // //       {badge && <span style={s.badge}>{badge}</span>}
// // // // // // //       {link && (
// // // // // // //         <a href={link} style={s.link}
// // // // // // //           onMouseEnter={() => setLinkHovered(true)}
// // // // // // //           onMouseLeave={() => setLinkHovered(false)}>
// // // // // // //           {linkText || 'See All'} &rarr;
// // // // // // //         </a>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SectionFooterLink = ({ link, linkText }) => {
// // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // //   if (!link) return null;
// // // // // // //   return (
// // // // // // //     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
// // // // // // //       <a href={link} style={{
// // // // // // //         display: 'inline-flex', alignItems: 'center', gap: '8px',
// // // // // // //         fontSize: '15px', fontWeight: 700, color: '#ffffff',
// // // // // // //         background: hovered ? '#1565c0' : '#3498db',
// // // // // // //         padding: '10px 28px', borderRadius: '8px',
// // // // // // //         textDecoration: 'none', transition: 'all 0.15s',
// // // // // // //         transform: hovered ? 'translateY(-1px)' : 'none',
// // // // // // //         boxShadow: hovered ? '0 4px 14px rgba(21,101,192,0.25)' : '0 2px 6px rgba(52,152,219,0.15)',
// // // // // // //       }}
// // // // // // //         onMouseEnter={() => setHovered(true)}
// // // // // // //         onMouseLeave={() => setHovered(false)}>
// // // // // // //         {linkText || 'View All'} &rarr;
// // // // // // //       </a>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // // //   const hasPrev = currentIndex > 0;
// // // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: '#5d6d7e', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // // //   const hover = { onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: '#3498db', color: '#1565c0', background: '#f0f7ff' }), onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: '#5d6d7e', background: 'none' }) };
// // // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // // //   return (
// // // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const IntroProse = ({ content }) => {
// // // // // // //   if (!content) return null;
// // // // // // //   return (
// // // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.31rem', lineHeight: 1.75, color: '#34495e', maxWidth: '740px', marginBottom: '28px' }}>
// // // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // //   const Tag = href ? 'a' : 'div';
// // // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: '4px solid #3498db', borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // //   const hov = { borderLeftColor: '#1565c0', boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // // //   return (
// // // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>{title}</h3>
// // // // // // //       {count != null && <span style={{ fontSize: '13.75px', color: '#3498db', fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // // //       {description && <span style={{ fontSize: '15.6px', color: '#5d6d7e', lineHeight: 1.5 }}>{description}</span>}
// // // // // // //     </Tag>
// // // // // // //   );
// // // // // // // };

// // // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // // //   const mathRef = useRef(null);
// // // // // // //   useEffect(() => {
// // // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // // //     }
// // // // // // //   }, [tex]);
// // // // // // //   return (
// // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#aab7c4', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // // //       <div style={{ fontSize: '18.75px', color: '#2c3e50' }} ref={mathRef} />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const DefinitionItem = ({ term, definition }) => (
// // // // // // //   <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // // //     <span style={{ fontWeight: 700, fontSize: '16.25px', color: '#0d47a1', minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // // //     <span style={{ fontSize: '15.6px', color: '#5d6d7e', lineHeight: 1.5 }}>
// // // // // // //       {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // // //     </span>
// // // // // // //   </div>
// // // // // // // );

// // // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // // //   const [hovered, setHovered] = useState(false);
// // // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // // //   const hov = { borderColor: '#2a7a6a', boxShadow: '0 4px 14px rgba(42,122,106,0.08)', transform: 'translateY(-2px)' };
// // // // // // //   return (
// // // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // // //       <div style={{ width: '34px', height: '34px', background: '#e6f4f1', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
// // // // // // //         <NavIcon icon={icon} size={18} color="#2a7a6a" />
// // // // // // //       </div>
// // // // // // //       <h4 style={{ fontSize: '16.25px', fontWeight: 700, marginBottom: '4px', color: '#2c3e50', marginTop: 0 }}>{title}</h4>
// // // // // // //       {description && <p style={{ fontSize: '15px', color: '#5d6d7e', lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // // //     </a>
// // // // // // //   );
// // // // // // // };


// // // // // // // /* ================================================================
// // // // // // //    EDITORIAL BLOCK — text + optional image/SVG
// // // // // // //    ================================================================ */

// // // // // // // const EditorialBlock = ({ textContent, svgContent, imageSrc, imageAlt, imageWidth, imageHeight, fullWidth }) => {
// // // // // // //   const hasVis = !!(svgContent || imageSrc);
// // // // // // //   const isSplit = hasVis && !fullWidth;

// // // // // // //   return (
// // // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // // //       <div style={{
// // // // // // //         display: 'grid',
// // // // // // //         gridTemplateColumns: isSplit ? '1fr 1fr' : '1fr',
// // // // // // //         minHeight: hasVis ? (fullWidth ? 'auto' : '300px') : '200px',
// // // // // // //       }}>
// // // // // // //         {/* Text column — hidden when fullWidth visual with no text */}
// // // // // // //         {(!fullWidth || textContent) && (
// // // // // // //           <div style={{ padding: '32px 36px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.225rem', lineHeight: 1.85, color: '#34495e' }}>
// // // // // // //             {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         {/* Visual column */}
// // // // // // //         {hasVis && (
// // // // // // //           <div style={{
// // // // // // //             background: '#fafafa',
// // // // // // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // // // //             padding: imageSrc && fullWidth ? '0' : '24px',
// // // // // // //             borderLeft: isSplit ? '1px solid #ebebeb' : 'none',
// // // // // // //             overflow: 'hidden',
// // // // // // //             minHeight: fullWidth ? '280px' : 'auto',
// // // // // // //           }}>
// // // // // // //             {svgContent && (
// // // // // // //               <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
// // // // // // //                 dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // // //             )}
// // // // // // //             {imageSrc && !svgContent && (
// // // // // // //               <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: fullWidth ? '280px' : '260px' }}>
// // // // // // //                 <Image
// // // // // // //                   src={imageSrc}
// // // // // // //                   alt={imageAlt || ''}
// // // // // // //                   fill
// // // // // // //                   sizes={isSplit ? '50vw' : '100vw'}
// // // // // // //                   style={{ objectFit: 'cover' }}
// // // // // // //                   {...(imageWidth && imageHeight ? {} : {})}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };


// // // // // // // /* ================================================================
// // // // // // //    SECTION RENDERERS
// // // // // // //    ================================================================ */

// // // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // // const catSub = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: '#2c3e50', paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' };
// // // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // //   const { categories, items, totalCount } = data;
// // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // //   return (
// // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Formulas" />
// // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // //       {(section.image || section.svg) && (
// // // // // // //         <EditorialBlock
// // // // // // //           textContent={section.editorialText}
// // // // // // //           svgContent={section.svg}
// // // // // // //           imageSrc={section.image}
// // // // // // //           imageAlt={section.imageAlt}
// // // // // // //           fullWidth={section.fullWidthVisual}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //       {categories.length > 0 && (
// // // // // // //         <div style={catGrid}>
// // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       {categories.map((c) => {
// // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // //         if (!ci.length) return null;
// // // // // // //         return (
// // // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         );
// // // // // // //       })}
// // // // // // //       <SectionFooterLink link={section.link} linkText="View All Formulas" />
// // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // // //   const { categories, items, totalCount } = data;
// // // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // // //   return (
// // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText="See All Definitions" />
// // // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // // //       {(section.image || section.svg) && (
// // // // // // //         <EditorialBlock
// // // // // // //           textContent={section.editorialText}
// // // // // // //           svgContent={section.svg}
// // // // // // //           imageSrc={section.image}
// // // // // // //           imageAlt={section.imageAlt}
// // // // // // //           fullWidth={section.fullWidthVisual}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //       {categories.length > 0 && (
// // // // // // //         <div style={catGrid}>
// // // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       {categories.map((c) => {
// // // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // // //         if (!ci.length) return null;
// // // // // // //         return (
// // // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // // //             <h3 style={catSub}>{c.name}</h3>
// // // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         );
// // // // // // //       })}
// // // // // // //       <SectionFooterLink link={section.link} linkText="View All Definitions" />
// // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // // //     <EditorialBlock
// // // // // // //       textContent={section.content}
// // // // // // //       svgContent={section.svg}
// // // // // // //       imageSrc={section.image}
// // // // // // //       imageAlt={section.imageAlt}
// // // // // // //       fullWidth={section.fullWidthVisual}
// // // // // // //     />
// // // // // // //     <SectionFooterLink link={section.link} linkText={section.linkText || 'Explore'} />
// // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // //   </section>
// // // // // // // );

// // // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // // //   <section id={section.id} style={secStyle}>
// // // // // // //     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // // //     {(section.image || section.svg) && (
// // // // // // //       <EditorialBlock
// // // // // // //         textContent={section.editorialText}
// // // // // // //         svgContent={section.svg}
// // // // // // //         imageSrc={section.image}
// // // // // // //         imageAlt={section.imageAlt}
// // // // // // //         fullWidth={section.fullWidthVisual}
// // // // // // //       />
// // // // // // //     )}
// // // // // // //     {section.formulas?.length > 0 && (
// // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // // //       </div>
// // // // // // //     )}
// // // // // // //     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // //   </section>
// // // // // // // );

// // // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // // //   const children = data?.children || [];
// // // // // // //   return (
// // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // //       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // // //       {(section.image || section.svg) && (
// // // // // // //         <EditorialBlock
// // // // // // //           textContent={section.editorialText}
// // // // // // //           svgContent={section.svg}
// // // // // // //           imageSrc={section.image}
// // // // // // //           imageAlt={section.imageAlt}
// // // // // // //           fullWidth={section.fullWidthVisual}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //       {children.length > 0 && (
// // // // // // //         <div style={catGrid}>
// // // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // // //   const tools = data?.tools || [];
// // // // // // //   return (
// // // // // // //     <section id={section.id} style={secStyle}>
// // // // // // //       <SectionHeader title={section.title} />
// // // // // // //       {(section.image || section.svg) && (
// // // // // // //         <EditorialBlock
// // // // // // //           textContent={section.editorialText}
// // // // // // //           svgContent={section.svg}
// // // // // // //           imageSrc={section.image}
// // // // // // //           imageAlt={section.imageAlt}
// // // // // // //           fullWidth={section.fullWidthVisual}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //       {tools.length > 0 && (
// // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };


// // // // // // // /* ================================================================
// // // // // // //    SECTIONS CONTAINER
// // // // // // //    ================================================================ */

// // // // // // // const renderers = {
// // // // // // //   formulas: FormulasSection,
// // // // // // //   definitions: DefinitionsSection,
// // // // // // //   editorial: EditorialSection,
// // // // // // //   standalone: StandaloneSection,
// // // // // // //   subsection: SubsectionSection,
// // // // // // //   tools: ToolsSection,
// // // // // // // };

// // // // // // // const SectionsContainer = ({ sections, sectionData }) => (
// // // // // // //   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px' }}>
// // // // // // //     {sections.map((section, index) => {
// // // // // // //       const R = renderers[section.type];
// // // // // // //       if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // // //       return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // // //     })}
// // // // // // //   </div>
// // // // // // // );


// // // // // // // /* ================================================================
// // // // // // //    SIDEBAR
// // // // // // //    ================================================================ */

// // // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // // //   const [h, setH] = useState(false);
// // // // // // //   const lit = h || active;
// // // // // // //   return (
// // // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // // //   const [h, setH] = useState(false);
// // // // // // //   return (
// // // // // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? '3px solid #5dade2' : '3px solid transparent', lineHeight: 1.4 }}
// // // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // //       {icon && (
// // // // // // //         <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}>
// // // // // // //           <NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} />
// // // // // // //         </span>
// // // // // // //       )}
// // // // // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // // // // //     </button>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // // //   const [h, setH] = useState(false);
// // // // // // //   return (
// // // // // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // // //   );
// // // // // // // };

// // // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // // //   const ref = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // // //     document.addEventListener('click', handler);
// // // // // // //     return () => document.removeEventListener('click', handler);
// // // // // // //   }, [open, onToggle]);

// // // // // // //   const scrollTo = (id) => {
// // // // // // //     const el = document.getElementById(id);
// // // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // // //     onToggle(false);
// // // // // // //   };

// // // // // // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // // //   const sidebarStyle = {
// // // // // // //     position: 'fixed',
// // // // // // //     left: 0,
// // // // // // //     top: `${NAVBAR_HEIGHT}px`,
// // // // // // //     width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // // //     height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // //     background: '#0d47a1',
// // // // // // //     zIndex: 90,
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // //     overflow: 'hidden',
// // // // // // //     boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // // //   };

// // // // // // //   const navStyle = {
// // // // // // //     display: open ? 'flex' : 'none',
// // // // // // //     flexDirection: 'column',
// // // // // // //     padding: '8px 0',
// // // // // // //     flex: 1,
// // // // // // //     overflowY: 'auto',
// // // // // // //     overflowX: 'hidden',
// // // // // // //     scrollbarWidth: 'none',
// // // // // // //     msOverflowStyle: 'none',
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <aside ref={ref} style={sidebarStyle}>
// // // // // // //       <style dangerouslySetInnerHTML={{
// // // // // // //         __html: `
// // // // // // //         .sfp-sidebar-nav::-webkit-scrollbar { display: none; }
// // // // // // //       `}} />

// // // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // // //         </svg>
// // // // // // //       </button>

// // // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // // //       </div>

// // // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // // //       </div>

// // // // // // //       <nav className="sfp-sidebar-nav" style={navStyle}>
// // // // // // //         <div style={heading}>On This Page</div>
// // // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // // //         {subtopics?.length > 0 && (
// // // // // // //           <>
// // // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // // //             <div style={heading}>Subtopics</div>
// // // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //       </nav>

// // // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // // //       </div>
// // // // // // //     </aside>
// // // // // // //   );
// // // // // // // };


// // // // // // // /* ================================================================
// // // // // // //    HERO BANNER
// // // // // // //    ================================================================ */

// // // // // // // const DEFAULT_HERO_BG = 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)';

// // // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats, heroBg }) => (
// // // // // // //   <header style={{ background: heroBg || DEFAULT_HERO_BG, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // // //     <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,152,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // // //       {breadcrumbUrl && (
// // // // // // //         <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // // //           <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // // //       {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // // //       {stats?.length > 0 && (
// // // // // // //         <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // // //           {stats.map((st, i) => (
// // // // // // //             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // // //               <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   </header>
// // // // // // // );


// // // // // // // /* ================================================================
// // // // // // //    TOPIC STRIP
// // // // // // //    ================================================================ */

// // // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // // //   const [h, setH] = useState(false);
// // // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: '#5d6d7e' };
// // // // // // //   const hov = { color: '#1565c0', background: '#f0f7ff', borderBottomColor: '#3498db' };
// // // // // // //   return (
// // // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // // //       {icon && (
// // // // // // //         <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}>
// // // // // // //           <NavIcon icon={icon} size={16} color="currentColor" />
// // // // // // //         </span>
// // // // // // //       )}
// // // // // // //       {label}
// // // // // // //     </a>
// // // // // // //   );
// // // // // // // };

// // // // // // // const TopicStrip = ({ sections }) => {
// // // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // // //   return (
// // // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };


// // // // // // // /* ================================================================
// // // // // // //    SHELL — SectionFrontPage
// // // // // // //    ================================================================ */

// // // // // // // const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', heroBg }) => {
// // // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // // //   const stats = useMemo(() => {
// // // // // // //     const r = [];
// // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // //       if (!sec) return;
// // // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // // //     });
// // // // // // //     return r;
// // // // // // //   }, [sections, sectionData]);

// // // // // // //   const subtopics = useMemo(() => {
// // // // // // //     const all = [];
// // // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // // //       }
// // // // // // //     });
// // // // // // //     return all;
// // // // // // //   }, [sections, sectionData]);

// // // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Sidebar
// // // // // // //         sections={sections}
// // // // // // //         subtopics={subtopics}
// // // // // // //         brandName={meta.title}
// // // // // // //         brandSub="Learn Math Class"
// // // // // // //         open={sidebarOpen}
// // // // // // //         onToggle={setSidebarOpen}
// // // // // // //       />
// // // // // // //       <div style={{
// // // // // // //         marginLeft: contentMargin,
// // // // // // //         marginRight: rightOffset,
// // // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // // //       }}>
// // // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} heroBg={heroBg} />
// // // // // // //         <TopicStrip sections={sections} />
// // // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SectionFrontPage;


// // // // // // import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
// // // // // // import Image from 'next/image';
// // // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // // import { getTheme } from './sectionFrontPageThemes';

// // // // // // /**
// // // // // //  * Height of the site navbar. Sidebar and content both offset by this.
// // // // // //  */
// // // // // // const NAVBAR_HEIGHT = 55;


// // // // // // /* ================================================================
// // // // // //    THEME CONTEXT
// // // // // //    ================================================================ */

// // // // // // const ThemeContext = createContext(null);
// // // // // // const useTheme = () => useContext(ThemeContext);


// // // // // // /* ================================================================
// // // // // //    NAV ICON
// // // // // //    ================================================================ */

// // // // // // const iconMap = {
// // // // // //   formulas: ({ size, color }) => (
// // // // // //     <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>
// // // // // //   ),
// // // // // //   definitions: ({ size, color }) => (
// // // // // //     <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>
// // // // // //   ),
// // // // // //   calculators: ({ size, color }) => (
// // // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // // //       <rect x="4" y="2" width="16" height="20" rx="2" />
// // // // // //       <rect x="7" y="5" width="10" height="4" rx="1" />
// // // // // //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="12" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // //       <circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // // //     </svg>
// // // // // //   ),
// // // // // //   'visual-tools': ({ size, color }) => (
// // // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // // //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // // // // //       <circle cx="12" cy="12" r="3" />
// // // // // //     </svg>
// // // // // //   ),
// // // // // //   subsection: ({ size, color }) => (
// // // // // //     <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>
// // // // // //   ),
// // // // // // };

// // // // // // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // // // //   const renderer = iconMap[icon];
// // // // // //   if (renderer) return renderer({ size, color });
// // // // // //   if (typeof icon === 'string' && icon.length <= 4) {
// // // // // //     return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// // // // // //   }
// // // // // //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    ATOMS
// // // // // //    ================================================================ */

// // // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // // //   const t = useTheme();
// // // // // //   const [linkHovered, setLinkHovered] = useState(false);
// // // // // //   return (
// // // // // //     <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
// // // // // //       <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
// // // // // //       {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
// // // // // //       {link && (
// // // // // //         <a href={link} style={{
// // // // // //           marginLeft: 'auto', fontSize: '14px', fontWeight: 700,
// // // // // //           color: '#ffffff', textDecoration: 'none',
// // // // // //           background: linkHovered ? t.buttonBgHover : t.buttonBg,
// // // // // //           padding: '7px 18px', borderRadius: '6px',
// // // // // //           transition: 'all 0.15s', whiteSpace: 'nowrap',
// // // // // //           transform: linkHovered ? 'translateY(-1px)' : 'none',
// // // // // //           boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
// // // // // //         }}
// // // // // //           onMouseEnter={() => setLinkHovered(true)}
// // // // // //           onMouseLeave={() => setLinkHovered(false)}>
// // // // // //           {linkText || 'See All'} &rarr;
// // // // // //         </a>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const SectionFooterLink = ({ link, linkText }) => {
// // // // // //   const t = useTheme();
// // // // // //   const [hovered, setHovered] = useState(false);
// // // // // //   if (!link) return null;
// // // // // //   return (
// // // // // //     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
// // // // // //       <a href={link} style={{
// // // // // //         display: 'inline-flex', alignItems: 'center', gap: '8px',
// // // // // //         fontSize: '15px', fontWeight: 700, color: '#ffffff',
// // // // // //         background: hovered ? t.buttonBgHover : t.buttonBg,
// // // // // //         padding: '10px 28px', borderRadius: '8px',
// // // // // //         textDecoration: 'none', transition: 'all 0.15s',
// // // // // //         transform: hovered ? 'translateY(-1px)' : 'none',
// // // // // //         boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
// // // // // //       }}
// // // // // //         onMouseEnter={() => setHovered(true)}
// // // // // //         onMouseLeave={() => setHovered(false)}>
// // // // // //         {linkText || 'View All'} &rarr;
// // // // // //       </a>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // // //   const hasPrev = currentIndex > 0;
// // // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // // //   const t = useTheme();
// // // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // // //   const hover = {
// // // // // //     onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
// // // // // //     onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
// // // // // //   };
// // // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // // //   return (
// // // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const IntroProse = ({ content }) => {
// // // // // //   const t = useTheme();
// // // // // //   if (!content) return null;
// // // // // //   return (
// // // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary, maxWidth: '740px', marginBottom: '28px' }}>
// // // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // // //   const t = useTheme();
// // // // // //   const [hovered, setHovered] = useState(false);
// // // // // //   const Tag = href ? 'a' : 'div';
// // // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // //   const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // // //   return (
// // // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
// // // // // //       {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // // //       {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>{description}</span>}
// // // // // //     </Tag>
// // // // // //   );
// // // // // // };

// // // // // // const FormulaChip = ({ label, tex }) => {
// // // // // //   const t = useTheme();
// // // // // //   const mathRef = useRef(null);
// // // // // //   useEffect(() => {
// // // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // // //     }
// // // // // //   }, [tex]);
// // // // // //   return (
// // // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // // //       <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const DefinitionItem = ({ term, definition }) => {
// // // // // //   const t = useTheme();
// // // // // //   return (
// // // // // //     <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // // //       <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // // //       <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
// // // // // //         {typeof definition === 'string' ? processContent(definition) : definition}
// // // // // //       </span>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const ToolCard = ({ title, description, href, icon }) => {
// // // // // //   const t = useTheme();
// // // // // //   const [hovered, setHovered] = useState(false);
// // // // // //   const base = { display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s' };
// // // // // //   const hov = { borderColor: t.toolAccent, boxShadow: `0 4px 14px ${t.toolAccent}14`, transform: 'translateY(-2px)' };
// // // // // //   return (
// // // // // //     <a href={href} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // // //       <div style={{ width: '34px', height: '34px', background: t.toolAccentBg, borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
// // // // // //         <NavIcon icon={icon} size={18} color={t.toolAccent} />
// // // // // //       </div>
// // // // // //       <h4 style={{ fontSize: '16.25px', fontWeight: 700, marginBottom: '4px', color: t.headingColor, marginTop: 0 }}>{title}</h4>
// // // // // //       {description && <p style={{ fontSize: '15px', color: t.textSecondary, lineHeight: 1.4, margin: 0 }}>{description}</p>}
// // // // // //     </a>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    EDITORIAL BLOCK
// // // // // //    ================================================================ */

// // // // // // const EditorialBlock = ({ textContent, svgContent, imageSrc, imageAlt, fullWidth }) => {
// // // // // //   const t = useTheme();
// // // // // //   const hasVis = !!(svgContent || imageSrc);
// // // // // //   const isSplit = hasVis && !fullWidth;

// // // // // //   return (
// // // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // // //       <div style={{
// // // // // //         display: 'grid',
// // // // // //         gridTemplateColumns: isSplit ? '1fr 1fr' : '1fr',
// // // // // //         minHeight: hasVis ? (fullWidth ? 'auto' : '300px') : '200px',
// // // // // //       }}>
// // // // // //         {(!fullWidth || textContent) && (
// // // // // //           <div style={{ padding: '32px 36px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.225rem', lineHeight: 1.85, color: t.textSecondary }}>
// // // // // //             {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {hasVis && (
// // // // // //           <div style={{
// // // // // //             background: '#fafafa',
// // // // // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // // //             padding: imageSrc && fullWidth ? '0' : '24px',
// // // // // //             borderLeft: isSplit ? '1px solid #ebebeb' : 'none',
// // // // // //             overflow: 'hidden',
// // // // // //             minHeight: fullWidth ? '280px' : 'auto',
// // // // // //           }}>
// // // // // //             {svgContent && (
// // // // // //               <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
// // // // // //                 dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // // //             )}
// // // // // //             {imageSrc && !svgContent && (
// // // // // //               <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: fullWidth ? '280px' : '260px' }}>
// // // // // //                 <Image
// // // // // //                   src={imageSrc}
// // // // // //                   alt={imageAlt || ''}
// // // // // //                   fill
// // // // // //                   sizes={isSplit ? '50vw' : '100vw'}
// // // // // //                   style={{ objectFit: 'cover' }}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    SECTION RENDERERS
// // // // // //    ================================================================ */

// // // // // // const catGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' };
// // // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // // const CatSubHeading = ({ children }) => {
// // // // // //   const t = useTheme();
// // // // // //   return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
// // // // // // };

// // // // // // const VisualBlock = ({ section }) => {
// // // // // //   if (!section.image && !section.svg) return null;
// // // // // //   return (
// // // // // //     <EditorialBlock
// // // // // //       textContent={section.editorialText}
// // // // // //       svgContent={section.svg}
// // // // // //       imageSrc={section.image}
// // // // // //       imageAlt={section.imageAlt}
// // // // // //       fullWidth={section.fullWidthVisual}
// // // // // //     />
// // // // // //   );
// // // // // // };

// // // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // //   const { categories, items, totalCount } = data;
// // // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // //   return (
// // // // // //     <section id={section.id} style={secStyle}>
// // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // //       <VisualBlock section={section} />
// // // // // //       {categories.length > 0 && (
// // // // // //         <div style={catGrid}>
// // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       {categories.map((c) => {
// // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // //         if (!ci.length) return null;
// // // // // //         return (
// // // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // // //             <CatSubHeading>{c.name}</CatSubHeading>
// // // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       })}
// // // // // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // // //   const { categories, items, totalCount } = data;
// // // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // // //   return (
// // // // // //     <section id={section.id} style={secStyle}>
// // // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // // //       <VisualBlock section={section} />
// // // // // //       {categories.length > 0 && (
// // // // // //         <div style={catGrid}>
// // // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       {categories.map((c) => {
// // // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // // //         if (!ci.length) return null;
// // // // // //         return (
// // // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // // //             <CatSubHeading>{c.name}</CatSubHeading>
// // // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       })}
// // // // // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // // //   <section id={section.id} style={secStyle}>
// // // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // // //     <EditorialBlock
// // // // // //       textContent={section.content}
// // // // // //       svgContent={section.svg}
// // // // // //       imageSrc={section.image}
// // // // // //       imageAlt={section.imageAlt}
// // // // // //       fullWidth={section.fullWidthVisual}
// // // // // //     />
// // // // // //     <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
// // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // //   </section>
// // // // // // );

// // // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // // //   <section id={section.id} style={secStyle}>
// // // // // //     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // // // //     {section.content && <IntroProse content={section.content} />}
// // // // // //     <VisualBlock section={section} />
// // // // // //     {section.formulas?.length > 0 && (
// // // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // // //       </div>
// // // // // //     )}
// // // // // //     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // //   </section>
// // // // // // );

// // // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // // //   const children = data?.children || [];
// // // // // //   return (
// // // // // //     <section id={section.id} style={secStyle}>
// // // // // //       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // // // //       {section.content && <IntroProse content={section.content} />}
// // // // // //       <VisualBlock section={section} />
// // // // // //       {children.length > 0 && (
// // // // // //         <div style={catGrid}>
// // // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // const ToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // // //   const tools = data?.tools || [];
// // // // // //   return (
// // // // // //     <section id={section.id} style={secStyle}>
// // // // // //       <SectionHeader title={section.title} />
// // // // // //       <VisualBlock section={section} />
// // // // // //       {tools.length > 0 && (
// // // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
// // // // // //           {tools.map((t, i) => <ToolCard key={i} title={t.title} description={t.description} href={t.href} icon={t.icon} />)}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // // //     </section>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    SECTIONS CONTAINER
// // // // // //    ================================================================ */

// // // // // // const renderers = {
// // // // // //   formulas: FormulasSection,
// // // // // //   definitions: DefinitionsSection,
// // // // // //   editorial: EditorialSection,
// // // // // //   standalone: StandaloneSection,
// // // // // //   subsection: SubsectionSection,
// // // // // //   tools: ToolsSection,
// // // // // // };

// // // // // // const SectionsContainer = ({ sections, sectionData }) => {
// // // // // //   const t = useTheme();
// // // // // //   return (
// // // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
// // // // // //       {sections.map((section, index) => {
// // // // // //         const R = renderers[section.type];
// // // // // //         if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // // //         return <R key={section.id} section={section} sections={sections} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // // //       })}
// // // // // //     </div>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    SIDEBAR
// // // // // //    ================================================================ */

// // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // const DotItem = ({ label, active, onClick }) => {
// // // // // //   const [h, setH] = useState(false);
// // // // // //   const lit = h || active;
// // // // // //   return (
// // // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // // //   const t = useTheme();
// // // // // //   const [h, setH] = useState(false);
// // // // // //   return (
// // // // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
// // // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // //       {icon && (
// // // // // //         <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}>
// // // // // //           <NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} />
// // // // // //         </span>
// // // // // //       )}
// // // // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // // // //     </button>
// // // // // //   );
// // // // // // };

// // // // // // const SidebarSubLink = ({ href, label }) => {
// // // // // //   const [h, setH] = useState(false);
// // // // // //   return (
// // // // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // // //   );
// // // // // // };

// // // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // // //   const t = useTheme();
// // // // // //   const ref = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // //     document.addEventListener('click', handler);
// // // // // //     return () => document.removeEventListener('click', handler);
// // // // // //   }, [open, onToggle]);

// // // // // //   const scrollTo = (id) => {
// // // // // //     const el = document.getElementById(id);
// // // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // // //     onToggle(false);
// // // // // //   };

// // // // // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // // //   return (
// // // // // //     <aside ref={ref} style={{
// // // // // //       position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`,
// // // // // //       width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // // //       height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // //       background: t.sidebarBg, zIndex: 90,
// // // // // //       display: 'flex', flexDirection: 'column',
// // // // // //       transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // //       overflow: 'hidden',
// // // // // //       boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // //     }}>
// // // // // //       <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />

// // // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // //         </svg>
// // // // // //       </button>

// // // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // //       </div>

// // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // // //       </div>

// // // // // //       <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// // // // // //         <div style={heading}>On This Page</div>
// // // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // // //         {subtopics?.length > 0 && (
// // // // // //           <>
// // // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // // //             <div style={heading}>Subtopics</div>
// // // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // // //           </>
// // // // // //         )}
// // // // // //       </nav>

// // // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // // //       </div>
// // // // // //     </aside>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    HERO BANNER
// // // // // //    ================================================================ */

// // // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => {
// // // // // //   const t = useTheme();
// // // // // //   return (
// // // // // //     <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // // //       <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // // //       <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // // //         {breadcrumbUrl && (
// // // // // //           <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // // //             <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // // //           </div>
// // // // // //         )}
// // // // // //         <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // // //         {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // // //         {stats?.length > 0 && (
// // // // // //           <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // // //             {stats.map((st, i) => (
// // // // // //               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // // // // //                 <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </header>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    TOPIC STRIP
// // // // // //    ================================================================ */

// // // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // // //   const t = useTheme();
// // // // // //   const [h, setH] = useState(false);
// // // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
// // // // // //   const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
// // // // // //   return (
// // // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // // //       {icon && (
// // // // // //         <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}>
// // // // // //           <NavIcon icon={icon} size={16} color="currentColor" />
// // // // // //         </span>
// // // // // //       )}
// // // // // //       {label}
// // // // // //     </a>
// // // // // //   );
// // // // // // };

// // // // // // const TopicStrip = ({ sections }) => {
// // // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // // //   return (
// // // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // // //     </nav>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    SHELL — SectionFrontPage
// // // // // //    ================================================================ */

// // // // // // const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue' }) => {
// // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // // // // //   const t = getTheme(theme);

// // // // // //   const stats = useMemo(() => {
// // // // // //     const r = [];
// // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // //       if (!sec) return;
// // // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // // //       if (sec.type === 'tools' && data.tools) r.push({ value: data.tools.length, label: 'Tools' });
// // // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // // //     });
// // // // // //     return r;
// // // // // //   }, [sections, sectionData]);

// // // // // //   const subtopics = useMemo(() => {
// // // // // //     const all = [];
// // // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // // //       const sec = sections.find((s) => s.id === key);
// // // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // // //       }
// // // // // //     });
// // // // // //     return all;
// // // // // //   }, [sections, sectionData]);

// // // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // // //   return (
// // // // // //     <ThemeContext.Provider value={t}>
// // // // // //       <Sidebar
// // // // // //         sections={sections}
// // // // // //         subtopics={subtopics}
// // // // // //         brandName={meta.title}
// // // // // //         brandSub="Learn Math Class"
// // // // // //         open={sidebarOpen}
// // // // // //         onToggle={setSidebarOpen}
// // // // // //       />
// // // // // //       <div style={{
// // // // // //         marginLeft: contentMargin,
// // // // // //         marginRight: rightOffset,
// // // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // //       }}>
// // // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // // //         <TopicStrip sections={sections} />
// // // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // // //       </div>
// // // // // //     </ThemeContext.Provider>
// // // // // //   );
// // // // // // };

// // // // // // export default SectionFrontPage;



// // // // // import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
// // // // // import Image from 'next/image';
// // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // import { getTheme } from './sectionFrontPageThemes';

// // // // // const NAVBAR_HEIGHT = 55;


// // // // // /* ================================================================
// // // // //    THEME CONTEXT
// // // // //    ================================================================ */

// // // // // const ThemeContext = createContext(null);
// // // // // const useTheme = () => useContext(ThemeContext);


// // // // // /* ================================================================
// // // // //    PLACEHOLDER SVGs FOR VISUAL TOOLS
// // // // //    ================================================================ */

// // // // // const placeholderSvgs = [
// // // // //   // 0: Function curves
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="180" y2="70" stroke="${c}30" stroke-width="1"/><line x1="20" y1="70" x2="20" y2="10" stroke="${c}30" stroke-width="1"/><path d="M25,65 Q60,60 80,40 Q100,20 130,15 Q160,10 175,12" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M25,68 Q70,65 100,55 Q130,45 160,25 Q170,18 175,20" fill="none" stroke="${c}80" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/></svg>`,
// // // // //   // 1: Transformation polygon
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="50" height="50" rx="2" fill="none" stroke="${c}40" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="90,15 140,35 130,75 80,70" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="15" r="3" fill="${c}"/><circle cx="140" cy="35" r="3" fill="${c}"/><circle cx="130" cy="75" r="3" fill="${c}"/><circle cx="80" cy="70" r="3" fill="${c}"/></svg>`,
// // // // //   // 2: Unit circle
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="35" fill="none" stroke="${c}30" stroke-width="1"/><line x1="100" y1="45" x2="130" y2="25" stroke="${c}" stroke-width="2"/><line x1="100" y1="45" x2="75" y2="70" stroke="${c}80" stroke-width="1.5"/><circle cx="100" cy="45" r="3" fill="${c}"/></svg>`,
// // // // //   // 3: Sine wave
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="190" y2="45" stroke="${c}20" stroke-width="1"/><path d="M10,45 Q35,10 60,45 Q85,80 110,45 Q135,10 160,45 Q185,80 190,55" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
// // // // //   // 4: Bar chart
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}30" stroke-width="1"/><rect x="35" y="30" width="24" height="45" rx="3" fill="${c}30"/><rect x="70" y="15" width="24" height="60" rx="3" fill="${c}60"/><rect x="105" y="40" width="24" height="35" rx="3" fill="${c}45"/><rect x="140" y="22" width="24" height="53" rx="3" fill="${c}"/></svg>`,
// // // // //   // 5: Parabola
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="80" x2="180" y2="80" stroke="${c}20" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="5" stroke="${c}20" stroke-width="1"/><path d="M30,80 Q100,5 170,80" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="12" r="3" fill="${c}"/></svg>`,
// // // // //   // 6: Scatter plot
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="20" y1="75" x2="20" y2="8" stroke="${c}20" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="${c}40"/><circle cx="65" cy="48" r="4" fill="${c}60"/><circle cx="85" cy="52" r="4" fill="${c}50"/><circle cx="110" cy="35" r="4" fill="${c}70"/><circle cx="130" cy="28" r="4" fill="${c}80"/><circle cx="155" cy="18" r="4" fill="${c}"/><path d="M35,62 Q95,45 160,15" fill="none" stroke="${c}50" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
// // // // //   // 7: Vectors
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="55" r="3" fill="${c}40"/><line x1="60" y1="55" x2="140" y2="25" stroke="${c}" stroke-width="2"/><polygon points="140,25 132,30 134,22" fill="${c}"/><line x1="60" y1="55" x2="150" y2="65" stroke="${c}70" stroke-width="2"/><polygon points="150,65 142,60 144,68" fill="${c}70"/><line x1="60" y1="55" x2="90" y2="15" stroke="${c}50" stroke-width="1.5" stroke-dasharray="3 3"/><polygon points="90,15 84,22 92,20" fill="${c}50"/></svg>`,
// // // // //   // 8: Number line
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="45" x2="185" y2="45" stroke="${c}40" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="100" y1="38" x2="100" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="150" y1="38" x2="150" y2="52" stroke="${c}60" stroke-width="1.5"/><circle cx="75" cy="45" r="5" fill="${c}" stroke="white" stroke-width="1.5"/><circle cx="130" cy="45" r="5" fill="none" stroke="${c}" stroke-width="2"/><line x1="75" y1="45" x2="130" y2="45" stroke="${c}" stroke-width="3" opacity="0.3"/></svg>`,
// // // // //   // 9: Matrix grid
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="12" width="100" height="66" rx="0" fill="none" stroke="${c}40" stroke-width="1.5"/><line x1="83" y1="12" x2="83" y2="78" stroke="${c}20" stroke-width="1"/><line x1="117" y1="12" x2="117" y2="78" stroke="${c}20" stroke-width="1"/><line x1="50" y1="34" x2="150" y2="34" stroke="${c}20" stroke-width="1"/><line x1="50" y1="56" x2="150" y2="56" stroke="${c}20" stroke-width="1"/><circle cx="67" cy="23" r="3" fill="${c}60"/><circle cx="100" cy="23" r="3" fill="${c}"/><circle cx="133" cy="23" r="3" fill="${c}40"/><circle cx="67" cy="45" r="3" fill="${c}40"/><circle cx="100" cy="45" r="3" fill="${c}60"/><circle cx="133" cy="45" r="3" fill="${c}"/><circle cx="67" cy="67" r="3" fill="${c}"/><circle cx="100" cy="67" r="3" fill="${c}40"/><circle cx="133" cy="67" r="3" fill="${c}60"/></svg>`,
// // // // //   // 10: Pie/angle
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="38" fill="none" stroke="${c}25" stroke-width="1"/><path d="M100,45 L138,45 A38,38 0 0,0 119,14 Z" fill="${c}20" stroke="${c}" stroke-width="1.5"/><path d="M100,45 L119,14 A38,38 0 0,0 70,18 Z" fill="${c}35" stroke="${c}" stroke-width="1.5"/><circle cx="100" cy="45" r="2.5" fill="${c}"/></svg>`,
// // // // //   // 11: Step function
// // // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="25" y1="80" x2="25" y2="8" stroke="${c}20" stroke-width="1"/><path d="M30,65 H60 V50 H90 V35 H120 V20 H150 V12 H175" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="65" r="3" fill="${c}"/><circle cx="90" cy="50" r="3" fill="${c}"/><circle cx="120" cy="35" r="3" fill="${c}"/><circle cx="150" cy="20" r="3" fill="${c}"/></svg>`,
// // // // // ];

// // // // // function getPlaceholderSvg(index, color) {
// // // // //   const fn = placeholderSvgs[index % placeholderSvgs.length];
// // // // //   return fn(color);
// // // // // }


// // // // // /* ================================================================
// // // // //    NAV ICON
// // // // //    ================================================================ */

// // // // // const iconMap = {
// // // // //   formulas: ({ size, color }) => (
// // // // //     <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>
// // // // //   ),
// // // // //   definitions: ({ size, color }) => (
// // // // //     <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>
// // // // //   ),
// // // // //   calculators: ({ size, color }) => (
// // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // //       <rect x="4" y="2" width="16" height="20" rx="2" />
// // // // //       <rect x="7" y="5" width="10" height="4" rx="1" />
// // // // //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="12" cy="13" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // //       <circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // // //     </svg>
// // // // //   ),
// // // // //   'visual-tools': ({ size, color }) => (
// // // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // // //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // // // //       <circle cx="12" cy="12" r="3" />
// // // // //     </svg>
// // // // //   ),
// // // // //   subsection: ({ size, color }) => (
// // // // //     <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>
// // // // //   ),
// // // // // };

// // // // // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // // //   const renderer = iconMap[icon];
// // // // //   if (renderer) return renderer({ size, color });
// // // // //   if (typeof icon === 'string' && icon.length <= 4) {
// // // // //     return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// // // // //   }
// // // // //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // // // // };


// // // // // /* ================================================================
// // // // //    GRID HELPER — max 3 per row, equal width
// // // // //    ================================================================ */

// // // // // const EqualGrid = ({ children }) => {
// // // // //   const items = React.Children.toArray(children);
// // // // //   const rows = [];
// // // // //   for (let i = 0; i < items.length; i += 3) {
// // // // //     rows.push(items.slice(i, i + 3));
// // // // //   }
// // // // //   return (
// // // // //     <div>
// // // // //       {rows.map((row, ri) => (
// // // // //         <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 1fr)`, gap: '16px', marginBottom: ri < rows.length - 1 ? '16px' : 0 }}>
// // // // //           {row}
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    BIG CTA BUTTON
// // // // //    ================================================================ */

// // // // // const BigCtaButton = ({ href, label }) => {
// // // // //   const t = useTheme();
// // // // //   const [hovered, setHovered] = useState(false);
// // // // //   return (
// // // // //     <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
// // // // //       <a href={href} style={{
// // // // //         display: 'inline-flex', alignItems: 'center', gap: '10px',
// // // // //         fontSize: '18px', fontWeight: 700, color: '#ffffff',
// // // // //         background: hovered ? t.buttonBgHover : t.buttonBg,
// // // // //         padding: '16px 44px', borderRadius: '10px',
// // // // //         textDecoration: 'none', transition: 'all 0.2s',
// // // // //         transform: hovered ? 'translateY(-2px)' : 'none',
// // // // //         boxShadow: hovered ? `0 8px 24px ${t.buttonBgHover}35` : `0 4px 12px ${t.buttonBg}20`,
// // // // //         letterSpacing: '0.01em',
// // // // //       }}
// // // // //         onMouseEnter={() => setHovered(true)}
// // // // //         onMouseLeave={() => setHovered(false)}>
// // // // //         {label} &rarr;
// // // // //       </a>
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    ATOMS
// // // // //    ================================================================ */

// // // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // // //   const t = useTheme();
// // // // //   const [linkHovered, setLinkHovered] = useState(false);
// // // // //   return (
// // // // //     <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
// // // // //       <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
// // // // //       {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
// // // // //       {link && (
// // // // //         <a href={link} style={{
// // // // //           marginLeft: 'auto', fontSize: '14px', fontWeight: 700,
// // // // //           color: '#ffffff', textDecoration: 'none',
// // // // //           background: linkHovered ? t.buttonBgHover : t.buttonBg,
// // // // //           padding: '7px 18px', borderRadius: '6px',
// // // // //           transition: 'all 0.15s', whiteSpace: 'nowrap',
// // // // //           transform: linkHovered ? 'translateY(-1px)' : 'none',
// // // // //           boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
// // // // //         }}
// // // // //           onMouseEnter={() => setLinkHovered(true)}
// // // // //           onMouseLeave={() => setLinkHovered(false)}>
// // // // //           {linkText || 'See All'} &rarr;
// // // // //         </a>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const SectionFooterLink = ({ link, linkText }) => {
// // // // //   const t = useTheme();
// // // // //   const [hovered, setHovered] = useState(false);
// // // // //   if (!link) return null;
// // // // //   return (
// // // // //     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
// // // // //       <a href={link} style={{
// // // // //         display: 'inline-flex', alignItems: 'center', gap: '8px',
// // // // //         fontSize: '15px', fontWeight: 700, color: '#ffffff',
// // // // //         background: hovered ? t.buttonBgHover : t.buttonBg,
// // // // //         padding: '10px 28px', borderRadius: '8px',
// // // // //         textDecoration: 'none', transition: 'all 0.15s',
// // // // //         transform: hovered ? 'translateY(-1px)' : 'none',
// // // // //         boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
// // // // //       }}
// // // // //         onMouseEnter={() => setHovered(true)}
// // // // //         onMouseLeave={() => setHovered(false)}>
// // // // //         {linkText || 'View All'} &rarr;
// // // // //       </a>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const SectionNav = ({ sections, currentIndex }) => {
// // // // //   const hasPrev = currentIndex > 0;
// // // // //   const hasNext = currentIndex < sections.length - 1;
// // // // //   const t = useTheme();
// // // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // // //   const hover = {
// // // // //     onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
// // // // //     onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
// // // // //   };
// // // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // // //   return (
// // // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const IntroProse = ({ content }) => {
// // // // //   const t = useTheme();
// // // // //   if (!content) return null;
// // // // //   return (
// // // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary, maxWidth: '740px', marginBottom: '28px' }}>
// // // // //       {typeof content === 'string' ? processContent(content) : content}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // // //   const t = useTheme();
// // // // //   const [hovered, setHovered] = useState(false);
// // // // //   const Tag = href ? 'a' : 'div';
// // // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s', position: 'relative' };
// // // // //   const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // // //   return (
// // // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
// // // // //       {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // // //       {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5, paddingBottom: '20px' }}>{description}</span>}
// // // // //       {href && (
// // // // //         <span style={{
// // // // //           position: 'absolute', bottom: '12px', right: '14px',
// // // // //           fontSize: '11.5px', fontWeight: 600, color: hovered ? t.buttonBg : t.textMuted,
// // // // //           border: `1px solid ${hovered ? t.buttonBg : '#e0e0e0'}`,
// // // // //           padding: '3px 10px', borderRadius: '4px',
// // // // //           transition: 'all 0.15s',
// // // // //         }}>
// // // // //           Learn more &rarr;
// // // // //         </span>
// // // // //       )}
// // // // //     </Tag>
// // // // //   );
// // // // // };

// // // // // const FormulaChip = ({ label, tex }) => {
// // // // //   const t = useTheme();
// // // // //   const mathRef = useRef(null);
// // // // //   useEffect(() => {
// // // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // // //       catch (e) { mathRef.current.textContent = tex; }
// // // // //     }
// // // // //   }, [tex]);
// // // // //   return (
// // // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // // //       <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const DefinitionItem = ({ term, definition }) => {
// // // // //   const t = useTheme();
// // // // //   return (
// // // // //     <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // // //       <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // // //       <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
// // // // //         {typeof definition === 'string' ? processContent(definition) : definition}
// // // // //       </span>
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    CALCULATOR CARD
// // // // //    ================================================================ */

// // // // // const CalculatorCard = ({ title, description, href }) => {
// // // // //   const t = useTheme();
// // // // //   const [hovered, setHovered] = useState(false);
// // // // //   return (
// // // // //     <a href={href} style={{
// // // // //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// // // // //       padding: '24px 22px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s',
// // // // //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// // // // //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// // // // //       transform: hovered ? 'translateY(-3px)' : 'none',
// // // // //     }}
// // // // //       onMouseEnter={() => setHovered(true)}
// // // // //       onMouseLeave={() => setHovered(false)}>
// // // // //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
// // // // //         <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // // //           <NavIcon icon="calculators" size={22} color={t.heroBg} />
// // // // //         </div>
// // // // //         <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Calculator</span>
// // // // //       </div>
// // // // //       <h3 style={{ fontSize: '17px', fontWeight: 700, color: t.headingColor, marginBottom: '6px' }}>{title}</h3>
// // // // //       {description && <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// // // // //       <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '14px', color: t.buttonBg, transition: 'gap 0.15s' }}>
// // // // //         Open calculator &rarr;
// // // // //       </span>
// // // // //     </a>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    VISUAL TOOL CARD
// // // // //    ================================================================ */

// // // // // const VisualToolCard = ({ title, description, href, image, previewIndex }) => {
// // // // //   const t = useTheme();
// // // // //   const [hovered, setHovered] = useState(false);

// // // // //   const previewContent = image
// // // // //     ? null
// // // // //     : getPlaceholderSvg(previewIndex || 0, t.buttonBgHover);

// // // // //   return (
// // // // //     <a href={href} style={{
// // // // //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// // // // //       textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
// // // // //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// // // // //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// // // // //       transform: hovered ? 'translateY(-3px)' : 'none',
// // // // //     }}
// // // // //       onMouseEnter={() => setHovered(true)}
// // // // //       onMouseLeave={() => setHovered(false)}>
// // // // //       <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.stripActiveBg, borderBottom: `1px solid ${t.badgeBg}`, overflow: 'hidden' }}>
// // // // //         {image ? (
// // // // //           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
// // // // //             <Image src={image} alt={title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div style={{ width: '200px' }} dangerouslySetInnerHTML={{ __html: previewContent }} />
// // // // //         )}
// // // // //       </div>
// // // // //       <div style={{ padding: '18px 20px' }}>
// // // // //         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
// // // // //           <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // // //             <NavIcon icon="visual-tools" size={18} color={t.heroBg} />
// // // // //           </div>
// // // // //           <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Visual Tool</span>
// // // // //         </div>
// // // // //         <h3 style={{ fontSize: '16px', fontWeight: 700, color: t.headingColor, marginBottom: '5px' }}>{title}</h3>
// // // // //         {description && <p style={{ fontSize: '13.5px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// // // // //         <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '12px', color: t.buttonBg, transition: 'gap 0.15s' }}>
// // // // //           Open tool &rarr;
// // // // //         </span>
// // // // //       </div>
// // // // //     </a>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    EDITORIAL BLOCK
// // // // //    ================================================================ */

// // // // // const EditorialBlock = ({ textContent, svgContent, imageSrc, imageAlt, fullWidth }) => {
// // // // //   const t = useTheme();
// // // // //   const hasVis = !!(svgContent || imageSrc);
// // // // //   const isSplit = hasVis && !fullWidth;

// // // // //   return (
// // // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // // //       <div style={{
// // // // //         display: 'grid',
// // // // //         gridTemplateColumns: isSplit ? '1fr 1fr' : '1fr',
// // // // //         minHeight: hasVis ? (fullWidth ? 'auto' : '300px') : '200px',
// // // // //       }}>
// // // // //         {(!fullWidth || textContent) && (
// // // // //           <div style={{ padding: '32px 36px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.225rem', lineHeight: 1.85, color: t.textSecondary }}>
// // // // //             {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // // //           </div>
// // // // //         )}
// // // // //         {hasVis && (
// // // // //           <div style={{
// // // // //             background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // //             padding: imageSrc && fullWidth ? '0' : '24px',
// // // // //             borderLeft: isSplit ? '1px solid #ebebeb' : 'none',
// // // // //             overflow: 'hidden', minHeight: fullWidth ? '280px' : 'auto',
// // // // //           }}>
// // // // //             {svgContent && (
// // // // //               <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
// // // // //                 dangerouslySetInnerHTML={{ __html: svgContent }} />
// // // // //             )}
// // // // //             {imageSrc && !svgContent && (
// // // // //               <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: fullWidth ? '280px' : '260px' }}>
// // // // //                 <Image src={imageSrc} alt={imageAlt || ''} fill sizes={isSplit ? '50vw' : '100vw'} style={{ objectFit: 'cover' }} />
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    SECTION RENDERERS
// // // // //    ================================================================ */

// // // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // // const CatSubHeading = ({ children }) => {
// // // // //   const t = useTheme();
// // // // //   return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
// // // // // };

// // // // // const VisualBlock = ({ section }) => {
// // // // //   if (!section.image && !section.svg) return null;
// // // // //   return (
// // // // //     <EditorialBlock
// // // // //       textContent={section.editorialText}
// // // // //       svgContent={section.svg}
// // // // //       imageSrc={section.image}
// // // // //       imageAlt={section.imageAlt}
// // // // //       fullWidth={section.fullWidthVisual}
// // // // //     />
// // // // //   );
// // // // // };

// // // // // /* ---- Visual Tools Section ---- */
// // // // // const VisualToolsSection = ({ section, sections, currentIndex, data }) => {
// // // // //   const children = data?.children || [];
// // // // //   return (
// // // // //     <section id={section.id} style={secStyle}>
// // // // //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// // // // //       {section.content && <IntroProse content={section.content} />}
// // // // //       <BigCtaButton href={section.link} label={`Explore ${section.title}`} />
// // // // //       {children.length > 0 && (
// // // // //         <EqualGrid>
// // // // //           {children.map((ch, i) => (
// // // // //             <VisualToolCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} previewIndex={i} />
// // // // //           ))}
// // // // //         </EqualGrid>
// // // // //       )}
// // // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // /* ---- Calculators Section ---- */
// // // // // const CalculatorsSection = ({ section, sections, currentIndex, data }) => {
// // // // //   const children = data?.children || [];
// // // // //   return (
// // // // //     <section id={section.id} style={secStyle}>
// // // // //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// // // // //       {section.content && <IntroProse content={section.content} />}
// // // // //       <BigCtaButton href={section.link} label={`Explore ${section.title}`} />
// // // // //       {children.length > 0 && (
// // // // //         <EqualGrid>
// // // // //           {children.map((ch, i) => (
// // // // //             <CalculatorCard key={i} title={ch.title} description={ch.description} href={ch.href} />
// // // // //           ))}
// // // // //         </EqualGrid>
// // // // //       )}
// // // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // /* ---- Formulas Section ---- */
// // // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // //   const { categories, items, totalCount } = data;
// // // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // //   return (
// // // // //     <section id={section.id} style={secStyle}>
// // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // //       <VisualBlock section={section} />
// // // // //       {categories.length > 0 && (
// // // // //         <EqualGrid>
// // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // //         </EqualGrid>
// // // // //       )}
// // // // //       {categories.map((c) => {
// // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // //         if (!ci.length) return null;
// // // // //         return (
// // // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // // //             <CatSubHeading>{c.name}</CatSubHeading>
// // // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // // //             </div>
// // // // //           </div>
// // // // //         );
// // // // //       })}
// // // // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // /* ---- Definitions Section ---- */
// // // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // // //   const { categories, items, totalCount } = data;
// // // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // // //   return (
// // // // //     <section id={section.id} style={secStyle}>
// // // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // // //       <VisualBlock section={section} />
// // // // //       {categories.length > 0 && (
// // // // //         <EqualGrid>
// // // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // // //         </EqualGrid>
// // // // //       )}
// // // // //       {categories.map((c) => {
// // // // //         const ci = items.filter((i) => i.category === c.key);
// // // // //         if (!ci.length) return null;
// // // // //         return (
// // // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // // //             <CatSubHeading>{c.name}</CatSubHeading>
// // // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // // //             </div>
// // // // //           </div>
// // // // //         );
// // // // //       })}
// // // // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // /* ---- Editorial Section ---- */
// // // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // // //   <section id={section.id} style={secStyle}>
// // // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} imageSrc={section.image} imageAlt={section.imageAlt} fullWidth={section.fullWidthVisual} />
// // // // //     <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
// // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //   </section>
// // // // // );

// // // // // /* ---- Standalone Section ---- */
// // // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // // //   <section id={section.id} style={secStyle}>
// // // // //     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // // //     {section.content && <IntroProse content={section.content} />}
// // // // //     <VisualBlock section={section} />
// // // // //     {section.formulas?.length > 0 && (
// // // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // // //       </div>
// // // // //     )}
// // // // //     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //   </section>
// // // // // );

// // // // // /* ---- Subsection Section ---- */
// // // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // // //   const children = data?.children || [];
// // // // //   return (
// // // // //     <section id={section.id} style={secStyle}>
// // // // //       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // // //       {section.content && <IntroProse content={section.content} />}
// // // // //       <VisualBlock section={section} />
// // // // //       {children.length > 0 && (
// // // // //         <EqualGrid>
// // // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // // //         </EqualGrid>
// // // // //       )}
// // // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // // //     </section>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    SECTIONS CONTAINER — visual-tools first, calculators last
// // // // //    ================================================================ */

// // // // // const renderers = {
// // // // //   formulas: FormulasSection,
// // // // //   definitions: DefinitionsSection,
// // // // //   editorial: EditorialSection,
// // // // //   standalone: StandaloneSection,
// // // // //   subsection: SubsectionSection,
// // // // //   calculators: CalculatorsSection,
// // // // //   'visual-tools': VisualToolsSection,
// // // // // };

// // // // // const TYPE_ORDER = {
// // // // //   'visual-tools': 0,
// // // // //   'formulas': 1,
// // // // //   'definitions': 2,
// // // // //   'editorial': 3,
// // // // //   'standalone': 4,
// // // // //   'subsection': 5,
// // // // //   'calculators': 6,
// // // // // };

// // // // // const SectionsContainer = ({ sections, sectionData }) => {
// // // // //   const t = useTheme();

// // // // //   const sorted = useMemo(() => {
// // // // //     return [...sections].sort((a, b) => {
// // // // //       const oa = TYPE_ORDER[a.type] ?? 5;
// // // // //       const ob = TYPE_ORDER[b.type] ?? 5;
// // // // //       return oa - ob;
// // // // //     });
// // // // //   }, [sections]);

// // // // //   return (
// // // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
// // // // //       {sorted.map((section, index) => {
// // // // //         const R = renderers[section.type];
// // // // //         if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // // //         return <R key={section.id} section={section} sections={sorted} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    SIDEBAR
// // // // //    ================================================================ */

// // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // const SIDEBAR_EXPANDED = 290;

// // // // // const DotItem = ({ label, active, onClick }) => {
// // // // //   const [h, setH] = useState(false);
// // // // //   const lit = h || active;
// // // // //   return (
// // // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // // //   const t = useTheme();
// // // // //   const [h, setH] = useState(false);
// // // // //   return (
// // // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
// // // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // //       {icon && (
// // // // //         <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}>
// // // // //           <NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} />
// // // // //         </span>
// // // // //       )}
// // // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // // //     </button>
// // // // //   );
// // // // // };

// // // // // const SidebarSubLink = ({ href, label }) => {
// // // // //   const [h, setH] = useState(false);
// // // // //   return (
// // // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // // //   );
// // // // // };

// // // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // // //   const t = useTheme();
// // // // //   const ref = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // //     document.addEventListener('click', handler);
// // // // //     return () => document.removeEventListener('click', handler);
// // // // //   }, [open, onToggle]);

// // // // //   const scrollTo = (id) => {
// // // // //     const el = document.getElementById(id);
// // // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // // //     onToggle(false);
// // // // //   };

// // // // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // // //   return (
// // // // //     <aside ref={ref} style={{
// // // // //       position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`,
// // // // //       width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`,
// // // // //       height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // //       background: t.sidebarBg, zIndex: 90,
// // // // //       display: 'flex', flexDirection: 'column',
// // // // //       transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // //       overflow: 'hidden',
// // // // //       boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // //     }}>
// // // // //       <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />

// // // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //           <polyline points="9 18 15 12 9 6" />
// // // // //         </svg>
// // // // //       </button>

// // // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // //       </div>

// // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // // //       </div>

// // // // //       <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// // // // //         <div style={heading}>On This Page</div>
// // // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // // //         {subtopics?.length > 0 && (
// // // // //           <>
// // // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // // //             <div style={heading}>Subtopics</div>
// // // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // // //           </>
// // // // //         )}
// // // // //       </nav>

// // // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // // //       </div>
// // // // //     </aside>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    HERO BANNER
// // // // //    ================================================================ */

// // // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats }) => {
// // // // //   const t = useTheme();
// // // // //   return (
// // // // //     <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // // //       <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // // //       <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // // //         {breadcrumbUrl && (
// // // // //           <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // // //             <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // // //           </div>
// // // // //         )}
// // // // //         <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // // //         {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // // //         {stats?.length > 0 && (
// // // // //           <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // // //             {stats.map((st, i) => (
// // // // //               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // // // //                 <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </header>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    TOPIC STRIP
// // // // //    ================================================================ */

// // // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // // //   const t = useTheme();
// // // // //   const [h, setH] = useState(false);
// // // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
// // // // //   const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
// // // // //   return (
// // // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // // //       {icon && (
// // // // //         <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}>
// // // // //           <NavIcon icon={icon} size={16} color="currentColor" />
// // // // //         </span>
// // // // //       )}
// // // // //       {label}
// // // // //     </a>
// // // // //   );
// // // // // };

// // // // // const TopicStrip = ({ sections }) => {
// // // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // // //   return (
// // // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // // //     </nav>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    SHELL — SectionFrontPage
// // // // //    ================================================================ */

// // // // // const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue' }) => {
// // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // // // //   const t = getTheme(theme);

// // // // //   const stats = useMemo(() => {
// // // // //     const r = [];
// // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // //       const sec = sections.find((s) => s.id === key);
// // // // //       if (!sec) return;
// // // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // // //       if (sec.type === 'calculators' && data.children) r.push({ value: data.children.length, label: 'Calculators' });
// // // // //       if (sec.type === 'visual-tools' && data.children) r.push({ value: data.children.length, label: 'Visual Tools' });
// // // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // // //     });
// // // // //     return r;
// // // // //   }, [sections, sectionData]);

// // // // //   const subtopics = useMemo(() => {
// // // // //     const all = [];
// // // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // // //       const sec = sections.find((s) => s.id === key);
// // // // //       if (sec?.type === 'subsection' && data?.children) {
// // // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // // //       }
// // // // //     });
// // // // //     return all;
// // // // //   }, [sections, sectionData]);

// // // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // // //   return (
// // // // //     <ThemeContext.Provider value={t}>
// // // // //       <Sidebar
// // // // //         sections={sections}
// // // // //         subtopics={subtopics}
// // // // //         brandName={meta.title}
// // // // //         brandSub="Learn Math Class"
// // // // //         open={sidebarOpen}
// // // // //         onToggle={setSidebarOpen}
// // // // //       />
// // // // //       <div style={{
// // // // //         marginLeft: contentMargin,
// // // // //         marginRight: rightOffset,
// // // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // //       }}>
// // // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} />
// // // // //         <TopicStrip sections={sections} />
// // // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // // //       </div>
// // // // //     </ThemeContext.Provider>
// // // // //   );
// // // // // };

// // // // // export default SectionFrontPage;


// // // // import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
// // // // import Image from 'next/image';
// // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // import { getTheme } from './sectionFrontPageThemes';

// // // // const NAVBAR_HEIGHT = 55;


// // // // /* ================================================================
// // // //    THEME CONTEXT
// // // //    ================================================================ */

// // // // const ThemeContext = createContext(null);
// // // // const useTheme = () => useContext(ThemeContext);


// // // // /* ================================================================
// // // //    PLACEHOLDER SVGs FOR VISUAL TOOLS
// // // //    ================================================================ */

// // // // const placeholderSvgs = [
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="180" y2="70" stroke="${c}30" stroke-width="1"/><line x1="20" y1="70" x2="20" y2="10" stroke="${c}30" stroke-width="1"/><path d="M25,65 Q60,60 80,40 Q100,20 130,15 Q160,10 175,12" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M25,68 Q70,65 100,55 Q130,45 160,25 Q170,18 175,20" fill="none" stroke="${c}80" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="50" height="50" rx="2" fill="none" stroke="${c}40" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="90,15 140,35 130,75 80,70" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="15" r="3" fill="${c}"/><circle cx="140" cy="35" r="3" fill="${c}"/><circle cx="130" cy="75" r="3" fill="${c}"/><circle cx="80" cy="70" r="3" fill="${c}"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="35" fill="none" stroke="${c}30" stroke-width="1"/><line x1="100" y1="45" x2="130" y2="25" stroke="${c}" stroke-width="2"/><line x1="100" y1="45" x2="75" y2="70" stroke="${c}80" stroke-width="1.5"/><circle cx="100" cy="45" r="3" fill="${c}"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="190" y2="45" stroke="${c}20" stroke-width="1"/><path d="M10,45 Q35,10 60,45 Q85,80 110,45 Q135,10 160,45 Q185,80 190,55" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}30" stroke-width="1"/><rect x="35" y="30" width="24" height="45" rx="3" fill="${c}30"/><rect x="70" y="15" width="24" height="60" rx="3" fill="${c}60"/><rect x="105" y="40" width="24" height="35" rx="3" fill="${c}45"/><rect x="140" y="22" width="24" height="53" rx="3" fill="${c}"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="80" x2="180" y2="80" stroke="${c}20" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="5" stroke="${c}20" stroke-width="1"/><path d="M30,80 Q100,5 170,80" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="12" r="3" fill="${c}"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="20" y1="75" x2="20" y2="8" stroke="${c}20" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="${c}40"/><circle cx="65" cy="48" r="4" fill="${c}60"/><circle cx="85" cy="52" r="4" fill="${c}50"/><circle cx="110" cy="35" r="4" fill="${c}70"/><circle cx="130" cy="28" r="4" fill="${c}80"/><circle cx="155" cy="18" r="4" fill="${c}"/><path d="M35,62 Q95,45 160,15" fill="none" stroke="${c}50" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="55" r="3" fill="${c}40"/><line x1="60" y1="55" x2="140" y2="25" stroke="${c}" stroke-width="2"/><polygon points="140,25 132,30 134,22" fill="${c}"/><line x1="60" y1="55" x2="150" y2="65" stroke="${c}70" stroke-width="2"/><polygon points="150,65 142,60 144,68" fill="${c}70"/><line x1="60" y1="55" x2="90" y2="15" stroke="${c}50" stroke-width="1.5" stroke-dasharray="3 3"/><polygon points="90,15 84,22 92,20" fill="${c}50"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="45" x2="185" y2="45" stroke="${c}40" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="100" y1="38" x2="100" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="150" y1="38" x2="150" y2="52" stroke="${c}60" stroke-width="1.5"/><circle cx="75" cy="45" r="5" fill="${c}" stroke="white" stroke-width="1.5"/><circle cx="130" cy="45" r="5" fill="none" stroke="${c}" stroke-width="2"/><line x1="75" y1="45" x2="130" y2="45" stroke="${c}" stroke-width="3" opacity="0.3"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="12" width="100" height="66" rx="0" fill="none" stroke="${c}40" stroke-width="1.5"/><line x1="83" y1="12" x2="83" y2="78" stroke="${c}20" stroke-width="1"/><line x1="117" y1="12" x2="117" y2="78" stroke="${c}20" stroke-width="1"/><line x1="50" y1="34" x2="150" y2="34" stroke="${c}20" stroke-width="1"/><line x1="50" y1="56" x2="150" y2="56" stroke="${c}20" stroke-width="1"/><circle cx="67" cy="23" r="3" fill="${c}60"/><circle cx="100" cy="23" r="3" fill="${c}"/><circle cx="133" cy="45" r="3" fill="${c}"/><circle cx="67" cy="67" r="3" fill="${c}"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="38" fill="none" stroke="${c}25" stroke-width="1"/><path d="M100,45 L138,45 A38,38 0 0,0 119,14 Z" fill="${c}20" stroke="${c}" stroke-width="1.5"/><path d="M100,45 L119,14 A38,38 0 0,0 70,18 Z" fill="${c}35" stroke="${c}" stroke-width="1.5"/><circle cx="100" cy="45" r="2.5" fill="${c}"/></svg>`,
// // // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="25" y1="80" x2="25" y2="8" stroke="${c}20" stroke-width="1"/><path d="M30,65 H60 V50 H90 V35 H120 V20 H150 V12 H175" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="65" r="3" fill="${c}"/><circle cx="90" cy="50" r="3" fill="${c}"/><circle cx="120" cy="35" r="3" fill="${c}"/><circle cx="150" cy="20" r="3" fill="${c}"/></svg>`,
// // // // ];

// // // // function getPlaceholderSvg(index, color) {
// // // //   const fn = placeholderSvgs[index % placeholderSvgs.length];
// // // //   return fn(color);
// // // // }


// // // // /* ================================================================
// // // //    NAV ICON
// // // //    ================================================================ */

// // // // const iconMap = {
// // // //   formulas: ({ size, color }) => (
// // // //     <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>
// // // //   ),
// // // //   definitions: ({ size, color }) => (
// // // //     <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>
// // // //   ),
// // // //   calculators: ({ size, color }) => (
// // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // //       <rect x="4" y="2" width="16" height="20" rx="2" />
// // // //       <rect x="7" y="5" width="10" height="4" rx="1" />
// // // //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="12" cy="13" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // //       <circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // // //     </svg>
// // // //   ),
// // // //   'visual-tools': ({ size, color }) => (
// // // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // // //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // // //       <circle cx="12" cy="12" r="3" />
// // // //     </svg>
// // // //   ),
// // // //   subsection: ({ size, color }) => (
// // // //     <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>
// // // //   ),
// // // // };

// // // // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // //   const renderer = iconMap[icon];
// // // //   if (renderer) return renderer({ size, color });
// // // //   if (typeof icon === 'string' && icon.length <= 4) {
// // // //     return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// // // //   }
// // // //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // // // };


// // // // /* ================================================================
// // // //    EQUAL GRID — max 3 per row, equal width
// // // //    ================================================================ */

// // // // const EqualGrid = ({ children }) => {
// // // //   const items = React.Children.toArray(children);
// // // //   const rows = [];
// // // //   for (let i = 0; i < items.length; i += 3) {
// // // //     rows.push(items.slice(i, i + 3));
// // // //   }
// // // //   return (
// // // //     <div>
// // // //       {rows.map((row, ri) => (
// // // //         <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 1fr)`, gap: '16px', marginBottom: ri < rows.length - 1 ? '16px' : 0 }}>
// // // //           {row}
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    ATOMS
// // // //    ================================================================ */

// // // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // // //   const t = useTheme();
// // // //   const [linkHovered, setLinkHovered] = useState(false);
// // // //   return (
// // // //     <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
// // // //       <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
// // // //       {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
// // // //       {link && (
// // // //         <a href={link} style={{
// // // //           marginLeft: 'auto', fontSize: '14px', fontWeight: 700,
// // // //           color: '#ffffff', textDecoration: 'none',
// // // //           background: linkHovered ? t.buttonBgHover : t.buttonBg,
// // // //           padding: '7px 18px', borderRadius: '6px',
// // // //           transition: 'all 0.15s', whiteSpace: 'nowrap',
// // // //           transform: linkHovered ? 'translateY(-1px)' : 'none',
// // // //           boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
// // // //         }}
// // // //           onMouseEnter={() => setLinkHovered(true)}
// // // //           onMouseLeave={() => setLinkHovered(false)}>
// // // //           {linkText || 'See All'} &rarr;
// // // //         </a>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // const SectionFooterLink = ({ link, linkText }) => {
// // // //   const t = useTheme();
// // // //   const [hovered, setHovered] = useState(false);
// // // //   if (!link) return null;
// // // //   return (
// // // //     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
// // // //       <a href={link} style={{
// // // //         display: 'inline-flex', alignItems: 'center', gap: '8px',
// // // //         fontSize: '15px', fontWeight: 700, color: '#ffffff',
// // // //         background: hovered ? t.buttonBgHover : t.buttonBg,
// // // //         padding: '10px 28px', borderRadius: '8px',
// // // //         textDecoration: 'none', transition: 'all 0.15s',
// // // //         transform: hovered ? 'translateY(-1px)' : 'none',
// // // //         boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
// // // //       }}
// // // //         onMouseEnter={() => setHovered(true)}
// // // //         onMouseLeave={() => setHovered(false)}>
// // // //         {linkText || 'View All'} &rarr;
// // // //       </a>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SectionNav = ({ sections, currentIndex }) => {
// // // //   const hasPrev = currentIndex > 0;
// // // //   const hasNext = currentIndex < sections.length - 1;
// // // //   const t = useTheme();
// // // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // // //   const hover = {
// // // //     onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
// // // //     onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
// // // //   };
// // // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); } };
// // // //   return (
// // // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // // //     </div>
// // // //   );
// // // // };

// // // // const IntroProse = ({ content }) => {
// // // //   const t = useTheme();
// // // //   if (!content) return null;
// // // //   return (
// // // //     <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary, maxWidth: '740px', marginBottom: '28px' }}>
// // // //       {typeof content === 'string' ? processContent(content) : content}
// // // //     </div>
// // // //   );
// // // // };

// // // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // // //   const t = useTheme();
// // // //   const [hovered, setHovered] = useState(false);
// // // //   const Tag = href ? 'a' : 'div';
// // // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s', position: 'relative', minHeight: '100px' };
// // // //   const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // // //   return (
// // // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
// // // //       {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // // //       {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5, paddingBottom: '24px' }}>{description}</span>}
// // // //       {href && (
// // // //         <span style={{
// // // //           position: 'absolute', bottom: '12px', right: '14px',
// // // //           fontSize: '11.5px', fontWeight: 600, color: hovered ? t.buttonBg : t.textMuted,
// // // //           border: `1px solid ${hovered ? t.buttonBg : '#e0e0e0'}`,
// // // //           padding: '3px 10px', borderRadius: '4px', transition: 'all 0.15s',
// // // //         }}>
// // // //           Learn more &rarr;
// // // //         </span>
// // // //       )}
// // // //     </Tag>
// // // //   );
// // // // };

// // // // const FormulaChip = ({ label, tex }) => {
// // // //   const t = useTheme();
// // // //   const mathRef = useRef(null);
// // // //   useEffect(() => {
// // // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // // //       catch (e) { mathRef.current.textContent = tex; }
// // // //     }
// // // //   }, [tex]);
// // // //   return (
// // // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // // //       <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
// // // //     </div>
// // // //   );
// // // // };

// // // // const DefinitionItem = ({ term, definition }) => {
// // // //   const t = useTheme();
// // // //   return (
// // // //     <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // // //       <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // // //       <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
// // // //         {typeof definition === 'string' ? processContent(definition) : definition}
// // // //       </span>
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    CALCULATOR CARD
// // // //    ================================================================ */

// // // // const CalculatorCard = ({ title, description, href }) => {
// // // //   const t = useTheme();
// // // //   const [hovered, setHovered] = useState(false);
// // // //   return (
// // // //     <a href={href} style={{
// // // //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// // // //       padding: '24px 22px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s',
// // // //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// // // //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// // // //       transform: hovered ? 'translateY(-3px)' : 'none',
// // // //     }}
// // // //       onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
// // // //         <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // //           <NavIcon icon="calculators" size={22} color={t.heroBg} />
// // // //         </div>
// // // //         <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Calculator</span>
// // // //       </div>
// // // //       <h3 style={{ fontSize: '17px', fontWeight: 700, color: t.headingColor, marginBottom: '6px' }}>{title}</h3>
// // // //       {description && <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// // // //       <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '14px', color: t.buttonBg, transition: 'gap 0.15s' }}>
// // // //         Open calculator &rarr;
// // // //       </span>
// // // //     </a>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    VISUAL TOOL CARD
// // // //    ================================================================ */

// // // // const VisualToolCard = ({ title, description, href, image, previewIndex }) => {
// // // //   const t = useTheme();
// // // //   const [hovered, setHovered] = useState(false);
// // // //   const previewContent = image ? null : getPlaceholderSvg(previewIndex || 0, t.buttonBgHover);

// // // //   return (
// // // //     <a href={href} style={{
// // // //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// // // //       textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
// // // //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// // // //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// // // //       transform: hovered ? 'translateY(-3px)' : 'none',
// // // //     }}
// // // //       onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // // //       <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.stripActiveBg, borderBottom: `1px solid ${t.badgeBg}`, overflow: 'hidden' }}>
// // // //         {image ? (
// // // //           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
// // // //             <Image src={image} alt={title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
// // // //           </div>
// // // //         ) : (
// // // //           <div style={{ width: '200px' }} dangerouslySetInnerHTML={{ __html: previewContent }} />
// // // //         )}
// // // //       </div>
// // // //       <div style={{ padding: '18px 20px' }}>
// // // //         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
// // // //           <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // //             <NavIcon icon="visual-tools" size={18} color={t.heroBg} />
// // // //           </div>
// // // //           <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Visual Tool</span>
// // // //         </div>
// // // //         <h3 style={{ fontSize: '16px', fontWeight: 700, color: t.headingColor, marginBottom: '5px' }}>{title}</h3>
// // // //         {description && <p style={{ fontSize: '13.5px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// // // //         <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '12px', color: t.buttonBg, transition: 'gap 0.15s' }}>
// // // //           Open tool &rarr;
// // // //         </span>
// // // //       </div>
// // // //     </a>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    EDITORIAL BLOCK
// // // //    ================================================================ */

// // // // const EditorialBlock = ({ textContent, svgContent, imageSrc, imageAlt, fullWidth }) => {
// // // //   const t = useTheme();
// // // //   const hasVis = !!(svgContent || imageSrc);
// // // //   const isSplit = hasVis && !fullWidth;

// // // //   return (
// // // //     <div style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', margin: '16px 0' }}>
// // // //       <div style={{ display: 'grid', gridTemplateColumns: isSplit ? '1fr 1fr' : '1fr', minHeight: hasVis ? (fullWidth ? 'auto' : '300px') : '200px' }}>
// // // //         {(!fullWidth || textContent) && (
// // // //           <div style={{ padding: '32px 36px', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.225rem', lineHeight: 1.85, color: t.textSecondary }}>
// // // //             {typeof textContent === 'string' ? processContent(textContent) : textContent}
// // // //           </div>
// // // //         )}
// // // //         {hasVis && (
// // // //           <div style={{ background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: imageSrc && fullWidth ? '0' : '24px', borderLeft: isSplit ? '1px solid #ebebeb' : 'none', overflow: 'hidden', minHeight: fullWidth ? '280px' : 'auto' }}>
// // // //             {svgContent && <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svgContent }} />}
// // // //             {imageSrc && !svgContent && (
// // // //               <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: fullWidth ? '280px' : '260px' }}>
// // // //                 <Image src={imageSrc} alt={imageAlt || ''} fill sizes={isSplit ? '50vw' : '100vw'} style={{ objectFit: 'cover' }} />
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    ARTICLE BLOCK — optional, between strip and sections
// // // //    ================================================================ */

// // // // const ArticleBlock = ({ article }) => {
// // // //   const t = useTheme();
// // // //   if (!article) return null;

// // // //   const { title, content } = typeof article === 'string' ? { title: null, content: article } : article;

// // // //   return (
// // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
// // // //       <div style={{
// // // //         background: t.articleBg, border: `1px solid ${t.articleBorder}`,
// // // //         borderRadius: '10px', padding: '32px 40px', margin: '28px 0 8px',
// // // //       }}>
// // // //         <div style={{ width: '40px', height: '3px', background: t.articleAccent, borderRadius: '2px', marginBottom: '16px' }} />
// // // //         {title && (
// // // //           <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: t.articleHeading, marginBottom: '12px' }}>{title}</h3>
// // // //         )}
// // // //         <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.8, color: t.articleText }}>
// // // //           {typeof content === 'string' ? processContent(content) : content}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    SECTION RENDERERS
// // // //    ================================================================ */

// // // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // // const CatSubHeading = ({ children }) => {
// // // //   const t = useTheme();
// // // //   return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
// // // // };

// // // // const VisualBlock = ({ section }) => {
// // // //   if (!section.image && !section.svg) return null;
// // // //   return <EditorialBlock textContent={section.editorialText} svgContent={section.svg} imageSrc={section.image} imageAlt={section.imageAlt} fullWidth={section.fullWidthVisual} />;
// // // // };

// // // // const VisualToolsSection = ({ section, sections, currentIndex, data }) => {
// // // //   const children = data?.children || [];
// // // //   return (
// // // //     <section id={section.id} style={secStyle}>
// // // //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// // // //       {section.content && <IntroProse content={section.content} />}
// // // //       {children.length > 0 && (
// // // //         <EqualGrid>
// // // //           {children.map((ch, i) => <VisualToolCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} previewIndex={i} />)}
// // // //         </EqualGrid>
// // // //       )}
// // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //     </section>
// // // //   );
// // // // };

// // // // const CalculatorsSection = ({ section, sections, currentIndex, data }) => {
// // // //   const children = data?.children || [];
// // // //   return (
// // // //     <section id={section.id} style={secStyle}>
// // // //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// // // //       {section.content && <IntroProse content={section.content} />}
// // // //       {children.length > 0 && (
// // // //         <EqualGrid>
// // // //           {children.map((ch, i) => <CalculatorCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // //         </EqualGrid>
// // // //       )}
// // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //     </section>
// // // //   );
// // // // };

// // // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // //   const { categories, items, totalCount } = data;
// // // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // //   return (
// // // //     <section id={section.id} style={secStyle}>
// // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // //       <VisualBlock section={section} />
// // // //       {categories.length > 0 && (
// // // //         <EqualGrid>
// // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // //         </EqualGrid>
// // // //       )}
// // // //       {categories.map((c) => {
// // // //         const ci = items.filter((i) => i.category === c.key);
// // // //         if (!ci.length) return null;
// // // //         return (
// // // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // // //             <CatSubHeading>{c.name}</CatSubHeading>
// // // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //       })}
// // // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //     </section>
// // // //   );
// // // // };

// // // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // // //   const { categories, items, totalCount } = data;
// // // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // // //   return (
// // // //     <section id={section.id} style={secStyle}>
// // // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // // //       {section.introContent && <IntroProse content={section.introContent} />}
// // // //       <VisualBlock section={section} />
// // // //       {categories.length > 0 && (
// // // //         <EqualGrid>
// // // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // // //         </EqualGrid>
// // // //       )}
// // // //       {categories.map((c) => {
// // // //         const ci = items.filter((i) => i.category === c.key);
// // // //         if (!ci.length) return null;
// // // //         return (
// // // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // // //             <CatSubHeading>{c.name}</CatSubHeading>
// // // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //       })}
// // // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //     </section>
// // // //   );
// // // // };

// // // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // // //   <section id={section.id} style={secStyle}>
// // // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // // //     <EditorialBlock textContent={section.content} svgContent={section.svg} imageSrc={section.image} imageAlt={section.imageAlt} fullWidth={section.fullWidthVisual} />
// // // //     <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
// // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //   </section>
// // // // );

// // // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // // //   <section id={section.id} style={secStyle}>
// // // //     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // //     {section.content && <IntroProse content={section.content} />}
// // // //     <VisualBlock section={section} />
// // // //     {section.formulas?.length > 0 && (
// // // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // // //       </div>
// // // //     )}
// // // //     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //   </section>
// // // // );

// // // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // // //   const children = data?.children || [];
// // // //   return (
// // // //     <section id={section.id} style={secStyle}>
// // // //       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // // //       {section.content && <IntroProse content={section.content} />}
// // // //       <VisualBlock section={section} />
// // // //       {children.length > 0 && (
// // // //         <EqualGrid>
// // // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // // //         </EqualGrid>
// // // //       )}
// // // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // // //     </section>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    SECTIONS CONTAINER — visual-tools first, calculators last
// // // //    ================================================================ */

// // // // const renderers = {
// // // //   formulas: FormulasSection,
// // // //   definitions: DefinitionsSection,
// // // //   editorial: EditorialSection,
// // // //   standalone: StandaloneSection,
// // // //   subsection: SubsectionSection,
// // // //   calculators: CalculatorsSection,
// // // //   'visual-tools': VisualToolsSection,
// // // // };

// // // // const TYPE_ORDER = {
// // // //   'visual-tools': 0,
// // // //   'formulas': 1,
// // // //   'definitions': 2,
// // // //   'editorial': 3,
// // // //   'standalone': 4,
// // // //   'subsection': 5,
// // // //   'calculators': 6,
// // // // };

// // // // const SectionsContainer = ({ sections, sectionData }) => {
// // // //   const t = useTheme();
// // // //   const sorted = useMemo(() => {
// // // //     return [...sections].sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));
// // // //   }, [sections]);

// // // //   return (
// // // //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
// // // //       {sorted.map((section, index) => {
// // // //         const R = renderers[section.type];
// // // //         if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // // //         return <R key={section.id} section={section} sections={sorted} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    SIDEBAR
// // // //    ================================================================ */

// // // // const SIDEBAR_COLLAPSED = 68;
// // // // const SIDEBAR_EXPANDED = 290;

// // // // const DotItem = ({ label, active, onClick }) => {
// // // //   const [h, setH] = useState(false);
// // // //   const lit = h || active;
// // // //   return (
// // // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // // //   const t = useTheme();
// // // //   const [h, setH] = useState(false);
// // // //   return (
// // // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
// // // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // //       {icon && (
// // // //         <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}>
// // // //           <NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} />
// // // //         </span>
// // // //       )}
// // // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // // //     </button>
// // // //   );
// // // // };

// // // // const SidebarSubLink = ({ href, label }) => {
// // // //   const [h, setH] = useState(false);
// // // //   return (
// // // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // // //   );
// // // // };

// // // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // // //   const t = useTheme();
// // // //   const ref = useRef(null);

// // // //   useEffect(() => {
// // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // //     document.addEventListener('click', handler);
// // // //     return () => document.removeEventListener('click', handler);
// // // //   }, [open, onToggle]);

// // // //   const scrollTo = (id) => {
// // // //     const el = document.getElementById(id);
// // // //     if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
// // // //     onToggle(false);
// // // //   };

// // // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // // //   return (
// // // //     <aside ref={ref} style={{ position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`, width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`, height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, background: t.sidebarBg, zIndex: 90, display: 'flex', flexDirection: 'column', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden', boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none' }}>
// // // //       <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />
// // // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //           <polyline points="9 18 15 12 9 6" />
// // // //         </svg>
// // // //       </button>
// // // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // //       </div>
// // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // // //       </div>
// // // //       <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// // // //         <div style={heading}>On This Page</div>
// // // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // // //         {subtopics?.length > 0 && (
// // // //           <>
// // // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // // //             <div style={heading}>Subtopics</div>
// // // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // // //           </>
// // // //         )}
// // // //       </nav>
// // // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // // //       </div>
// // // //     </aside>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    HERO BANNER — with conditional CTA buttons
// // // //    ================================================================ */

// // // // const HeroCtaButton = ({ href, icon, label, sublabel }) => {
// // // //   const [hovered, setHovered] = useState(false);
// // // //   return (
// // // //     <a href={`#${href}`} style={{
// // // //       display: 'flex', alignItems: 'center', gap: '14px',
// // // //       padding: '16px 28px', borderRadius: '10px',
// // // //       textDecoration: 'none', color: 'white', transition: 'all 0.2s',
// // // //       background: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
// // // //       border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}`,
// // // //       transform: hovered ? 'translateY(-2px)' : 'none',
// // // //       boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
// // // //       minWidth: '240px',
// // // //     }}
// // // //       onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
// // // //       onClick={(e) => { e.preventDefault(); const el = document.getElementById(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); }}>
// // // //       <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // //         <NavIcon icon={icon} size={22} color="white" />
// // // //       </div>
// // // //       <div style={{ display: 'flex', flexDirection: 'column' }}>
// // // //         <span style={{ fontSize: '16px', fontWeight: 700 }}>{label}</span>
// // // //         <span style={{ fontSize: '12px', fontWeight: 500, opacity: 0.7, marginTop: '2px' }}>{sublabel}</span>
// // // //       </div>
// // // //       <span style={{ marginLeft: 'auto', fontSize: '18px', opacity: 0.7, transition: 'transform 0.15s', transform: hovered ? 'translateX(4px)' : 'none' }}>&rarr;</span>
// // // //     </a>
// // // //   );
// // // // };

// // // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats, sections }) => {
// // // //   const t = useTheme();
// // // //   const hasVisualTools = sections?.some((s) => s.type === 'visual-tools');
// // // //   const hasCalculators = sections?.some((s) => s.type === 'calculators');
// // // //   const showCtas = hasVisualTools || hasCalculators;

// // // //   return (
// // // //     <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // // //       <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // // //       <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // // //         {breadcrumbUrl && (
// // // //           <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // // //             <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // // //           </div>
// // // //         )}
// // // //         <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
// // // //           <div style={{ flex: 1 }}>
// // // //             <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // // //             {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // // //           </div>
// // // //           {showCtas && (
// // // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px', flexShrink: 0 }}>
// // // //               {hasVisualTools && (
// // // //                 <HeroCtaButton href="visual-tools" icon="visual-tools" label="Visual Tools" sublabel="Interactive graphs &amp; visualizations" />
// // // //               )}
// // // //               {hasCalculators && (
// // // //                 <HeroCtaButton href="calculators" icon="calculators" label="Calculators" sublabel="Step-by-step equation solvers" />
// // // //               )}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //         {stats?.length > 0 && (
// // // //           <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // // //             {stats.map((st, i) => (
// // // //               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // // //                 <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    TOPIC STRIP
// // // //    ================================================================ */

// // // // const StripLink = ({ id, icon, label, onClick }) => {
// // // //   const t = useTheme();
// // // //   const [h, setH] = useState(false);
// // // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
// // // //   const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
// // // //   return (
// // // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // // //       {icon && <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}><NavIcon icon={icon} size={16} color="currentColor" /></span>}
// // // //       {label}
// // // //     </a>
// // // //   );
// // // // };

// // // // const TopicStrip = ({ sections }) => {
// // // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // // //   return (
// // // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // // //     </nav>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    SHELL — SectionFrontPage
// // // //    ================================================================ */

// // // // const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue', article }) => {
// // // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // // //   const t = getTheme(theme);

// // // //   const stats = useMemo(() => {
// // // //     const r = [];
// // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // //       const sec = sections.find((s) => s.id === key);
// // // //       if (!sec) return;
// // // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // // //       if (sec.type === 'calculators' && data.children) r.push({ value: data.children.length, label: 'Calculators' });
// // // //       if (sec.type === 'visual-tools' && data.children) r.push({ value: data.children.length, label: 'Visual Tools' });
// // // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // // //     });
// // // //     return r;
// // // //   }, [sections, sectionData]);

// // // //   const subtopics = useMemo(() => {
// // // //     const all = [];
// // // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // // //       const sec = sections.find((s) => s.id === key);
// // // //       if (sec?.type === 'subsection' && data?.children) {
// // // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // // //       }
// // // //     });
// // // //     return all;
// // // //   }, [sections, sectionData]);

// // // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // // //   return (
// // // //     <ThemeContext.Provider value={t}>
// // // //       <Sidebar
// // // //         sections={sections}
// // // //         subtopics={subtopics}
// // // //         brandName={meta.title}
// // // //         brandSub="Learn Math Class"
// // // //         open={sidebarOpen}
// // // //         onToggle={setSidebarOpen}
// // // //       />
// // // //       <div style={{
// // // //         marginLeft: contentMargin,
// // // //         marginRight: rightOffset,
// // // //         marginTop: `${NAVBAR_HEIGHT}px`,
// // // //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // //       }}>
// // // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} sections={sections} />
// // // //         <TopicStrip sections={sections} />
// // // //         <ArticleBlock article={article} />
// // // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // // //       </div>
// // // //     </ThemeContext.Provider>
// // // //   );
// // // // };

// // // // export default SectionFrontPage;


// // // import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
// // // import Image from 'next/image';
// // // import { processContent } from '@/app/utils/contentProcessor';
// // // import { getTheme } from './sectionFrontPageThemes';

// // // const NAVBAR_HEIGHT = 55;

// // // const ThemeContext = createContext(null);
// // // const useTheme = () => useContext(ThemeContext);


// // // /* ================================================================
// // //    PLACEHOLDER SVGs FOR VISUAL TOOLS
// // //    ================================================================ */

// // // const placeholderSvgs = [
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="180" y2="70" stroke="${c}30" stroke-width="1"/><line x1="20" y1="70" x2="20" y2="10" stroke="${c}30" stroke-width="1"/><path d="M25,65 Q60,60 80,40 Q100,20 130,15 Q160,10 175,12" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M25,68 Q70,65 100,55 Q130,45 160,25 Q170,18 175,20" fill="none" stroke="${c}80" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="50" height="50" rx="2" fill="none" stroke="${c}40" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="90,15 140,35 130,75 80,70" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="15" r="3" fill="${c}"/><circle cx="140" cy="35" r="3" fill="${c}"/><circle cx="130" cy="75" r="3" fill="${c}"/><circle cx="80" cy="70" r="3" fill="${c}"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="35" fill="none" stroke="${c}30" stroke-width="1"/><line x1="100" y1="45" x2="130" y2="25" stroke="${c}" stroke-width="2"/><line x1="100" y1="45" x2="75" y2="70" stroke="${c}80" stroke-width="1.5"/><circle cx="100" cy="45" r="3" fill="${c}"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="190" y2="45" stroke="${c}20" stroke-width="1"/><path d="M10,45 Q35,10 60,45 Q85,80 110,45 Q135,10 160,45 Q185,80 190,55" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}30" stroke-width="1"/><rect x="35" y="30" width="24" height="45" rx="3" fill="${c}30"/><rect x="70" y="15" width="24" height="60" rx="3" fill="${c}60"/><rect x="105" y="40" width="24" height="35" rx="3" fill="${c}45"/><rect x="140" y="22" width="24" height="53" rx="3" fill="${c}"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="80" x2="180" y2="80" stroke="${c}20" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="5" stroke="${c}20" stroke-width="1"/><path d="M30,80 Q100,5 170,80" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="12" r="3" fill="${c}"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="20" y1="75" x2="20" y2="8" stroke="${c}20" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="${c}40"/><circle cx="65" cy="48" r="4" fill="${c}60"/><circle cx="85" cy="52" r="4" fill="${c}50"/><circle cx="110" cy="35" r="4" fill="${c}70"/><circle cx="130" cy="28" r="4" fill="${c}80"/><circle cx="155" cy="18" r="4" fill="${c}"/><path d="M35,62 Q95,45 160,15" fill="none" stroke="${c}50" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="55" r="3" fill="${c}40"/><line x1="60" y1="55" x2="140" y2="25" stroke="${c}" stroke-width="2"/><polygon points="140,25 132,30 134,22" fill="${c}"/><line x1="60" y1="55" x2="150" y2="65" stroke="${c}70" stroke-width="2"/><polygon points="150,65 142,60 144,68" fill="${c}70"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="45" x2="185" y2="45" stroke="${c}40" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="100" y1="38" x2="100" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="150" y1="38" x2="150" y2="52" stroke="${c}60" stroke-width="1.5"/><circle cx="75" cy="45" r="5" fill="${c}" stroke="white" stroke-width="1.5"/><circle cx="130" cy="45" r="5" fill="none" stroke="${c}" stroke-width="2"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="12" width="100" height="66" rx="0" fill="none" stroke="${c}40" stroke-width="1.5"/><line x1="83" y1="12" x2="83" y2="78" stroke="${c}20" stroke-width="1"/><line x1="117" y1="12" x2="117" y2="78" stroke="${c}20" stroke-width="1"/><line x1="50" y1="34" x2="150" y2="34" stroke="${c}20" stroke-width="1"/><line x1="50" y1="56" x2="150" y2="56" stroke="${c}20" stroke-width="1"/><circle cx="67" cy="23" r="3" fill="${c}60"/><circle cx="100" cy="23" r="3" fill="${c}"/><circle cx="133" cy="45" r="3" fill="${c}"/><circle cx="67" cy="67" r="3" fill="${c}"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="38" fill="none" stroke="${c}25" stroke-width="1"/><path d="M100,45 L138,45 A38,38 0 0,0 119,14 Z" fill="${c}20" stroke="${c}" stroke-width="1.5"/><path d="M100,45 L119,14 A38,38 0 0,0 70,18 Z" fill="${c}35" stroke="${c}" stroke-width="1.5"/><circle cx="100" cy="45" r="2.5" fill="${c}"/></svg>`,
// // //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="25" y1="80" x2="25" y2="8" stroke="${c}20" stroke-width="1"/><path d="M30,65 H60 V50 H90 V35 H120 V20 H150 V12 H175" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="65" r="3" fill="${c}"/><circle cx="90" cy="50" r="3" fill="${c}"/><circle cx="120" cy="35" r="3" fill="${c}"/><circle cx="150" cy="20" r="3" fill="${c}"/></svg>`,
// // // ];

// // // function getPlaceholderSvg(index, color) {
// // //   return placeholderSvgs[index % placeholderSvgs.length](color);
// // // }


// // // /* ================================================================
// // //    NAV ICON
// // //    ================================================================ */

// // // const iconMap = {
// // //   formulas: ({ size, color }) => <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>,
// // //   definitions: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>,
// // //   calculators: ({ size, color }) => (
// // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // //       <rect x="4" y="2" width="16" height="20" rx="2" />
// // //       <rect x="7" y="5" width="10" height="4" rx="1" />
// // //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// // //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// // //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// // //     </svg>
// // //   ),
// // //   'visual-tools': ({ size, color }) => (
// // //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// // //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
// // //     </svg>
// // //   ),
// // //   subsection: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>,
// // // };

// // // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // //   const renderer = iconMap[icon];
// // //   if (renderer) return renderer({ size, color });
// // //   if (typeof icon === 'string' && icon.length <= 4) return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// // //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // // };


// // // /* ================================================================
// // //    EQUAL GRID
// // //    ================================================================ */

// // // const EqualGrid = ({ children }) => {
// // //   const items = React.Children.toArray(children);
// // //   const rows = [];
// // //   for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));
// // //   return (
// // //     <div>
// // //       {rows.map((row, ri) => (
// // //         <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 1fr)`, gap: '16px', marginBottom: ri < rows.length - 1 ? '16px' : 0 }}>
// // //           {row}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    INTRO PROSE — handles text, images, and SVG
// // //    layout: 'horizontal' | 'vertical' (default: 'horizontal')
// // //    imagePosition: 'left' | 'right' | 'top' | 'bottom' (default: 'right')
// // //    When no image/svg: full-width text.
// // //    ================================================================ */

// // // const IntroProse = ({ content, image, imageAlt, svg, layout = 'horizontal', imagePosition = 'right' }) => {
// // //   const t = useTheme();
// // //   if (!content && !image && !svg) return null;

// // //   const hasVisual = !!(image || svg);
// // //   const isVertical = layout === 'vertical' || imagePosition === 'top' || imagePosition === 'bottom';
// // //   const visualFirst = imagePosition === 'left' || imagePosition === 'top';

// // //   const textBlock = content ? (
// // //     <div style={{
// // //       fontFamily: "'Source Serif 4', Georgia, serif",
// // //       fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary,
// // //       flex: isVertical ? 'none' : 1,
// // //     }}>
// // //       {typeof content === 'string' ? processContent(content) : content}
// // //     </div>
// // //   ) : null;

// // //   const visualBlock = hasVisual ? (
// // //     <div style={{
// // //       flex: isVertical ? 'none' : 1,
// // //       minHeight: isVertical ? '240px' : '200px',
// // //       position: 'relative',
// // //       borderRadius: '8px',
// // //       overflow: 'hidden',
// // //       background: '#fafafa',
// // //       display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //     }}>
// // //       {image && (
// // //         <Image
// // //           src={image}
// // //           alt={imageAlt || ''}
// // //           fill
// // //           sizes={isVertical ? '100vw' : '50vw'}
// // //           style={{ objectFit: 'cover' }}
// // //         />
// // //       )}
// // //       {svg && !image && (
// // //         <div style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
// // //           dangerouslySetInnerHTML={{ __html: svg }} />
// // //       )}
// // //     </div>
// // //   ) : null;

// // //   // No visual — full width text
// // //   if (!hasVisual) {
// // //     return (
// // //       <div style={{ marginBottom: '28px' }}>
// // //         {textBlock}
// // //       </div>
// // //     );
// // //   }

// // //   // Vertical layout
// // //   if (isVertical) {
// // //     return (
// // //       <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
// // //         {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
// // //       </div>
// // //     );
// // //   }

// // //   // Horizontal layout
// // //   return (
// // //     <div style={{ marginBottom: '28px', display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
// // //       {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    ATOMS
// // //    ================================================================ */

// // // const SectionHeader = ({ title, badge, link, linkText }) => {
// // //   const t = useTheme();
// // //   const [linkHovered, setLinkHovered] = useState(false);
// // //   return (
// // //     <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
// // //       <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
// // //       {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
// // //       {link && (
// // //         <a href={link} style={{
// // //           marginLeft: 'auto', fontSize: '14px', fontWeight: 700, color: '#ffffff', textDecoration: 'none',
// // //           background: linkHovered ? t.buttonBgHover : t.buttonBg, padding: '7px 18px', borderRadius: '6px',
// // //           transition: 'all 0.15s', whiteSpace: 'nowrap',
// // //           transform: linkHovered ? 'translateY(-1px)' : 'none',
// // //           boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
// // //         }} onMouseEnter={() => setLinkHovered(true)} onMouseLeave={() => setLinkHovered(false)}>
// // //           {linkText || 'See All'} &rarr;
// // //         </a>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const SectionFooterLink = ({ link, linkText }) => {
// // //   const t = useTheme();
// // //   const [hovered, setHovered] = useState(false);
// // //   if (!link) return null;
// // //   return (
// // //     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
// // //       <a href={link} style={{
// // //         display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 700, color: '#ffffff',
// // //         background: hovered ? t.buttonBgHover : t.buttonBg, padding: '10px 28px', borderRadius: '8px',
// // //         textDecoration: 'none', transition: 'all 0.15s',
// // //         transform: hovered ? 'translateY(-1px)' : 'none',
// // //         boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
// // //       }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // //         {linkText || 'View All'} &rarr;
// // //       </a>
// // //     </div>
// // //   );
// // // };

// // // const SectionNav = ({ sections, currentIndex }) => {
// // //   const hasPrev = currentIndex > 0;
// // //   const hasNext = currentIndex < sections.length - 1;
// // //   const t = useTheme();
// // //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// // //   const hover = {
// // //     onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
// // //     onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
// // //   };
// // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // //   return (
// // //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// // //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// // //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// // //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// // //     </div>
// // //   );
// // // };

// // // const CategoryCard = ({ title, count, description, href, onClick }) => {
// // //   const t = useTheme();
// // //   const [hovered, setHovered] = useState(false);
// // //   const Tag = href ? 'a' : 'div';
// // //   const base = { display: 'flex', flexDirection: 'column', gap: '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', padding: '18px 16px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s', position: 'relative', minHeight: '100px' };
// // //   const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// // //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// // //   return (
// // //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // //       <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
// // //       {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// // //       {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5, paddingBottom: '24px' }}>{description}</span>}
// // //       {href && (
// // //         <span style={{
// // //           position: 'absolute', bottom: '12px', right: '14px',
// // //           fontSize: '11.5px', fontWeight: 600, color: hovered ? t.buttonBg : t.textMuted,
// // //           border: `1px solid ${hovered ? t.buttonBg : '#e0e0e0'}`,
// // //           padding: '3px 10px', borderRadius: '4px', transition: 'all 0.15s',
// // //         }}>Learn more &rarr;</span>
// // //       )}
// // //     </Tag>
// // //   );
// // // };

// // // const FormulaChip = ({ label, tex }) => {
// // //   const t = useTheme();
// // //   const mathRef = useRef(null);
// // //   useEffect(() => {
// // //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// // //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// // //       catch (e) { mathRef.current.textContent = tex; }
// // //     }
// // //   }, [tex]);
// // //   return (
// // //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// // //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// // //       <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
// // //     </div>
// // //   );
// // // };

// // // const DefinitionItem = ({ term, definition }) => {
// // //   const t = useTheme();
// // //   return (
// // //     <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// // //       <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
// // //       <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
// // //         {typeof definition === 'string' ? processContent(definition) : definition}
// // //       </span>
// // //     </div>
// // //   );
// // // };

// // // const CalculatorCard = ({ title, description, href }) => {
// // //   const t = useTheme();
// // //   const [hovered, setHovered] = useState(false);
// // //   return (
// // //     <a href={href} style={{
// // //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// // //       padding: '24px 22px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s',
// // //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// // //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// // //       transform: hovered ? 'translateY(-3px)' : 'none',
// // //     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
// // //         <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // //           <NavIcon icon="calculators" size={22} color={t.heroBg} />
// // //         </div>
// // //         <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Calculator</span>
// // //       </div>
// // //       <h3 style={{ fontSize: '17px', fontWeight: 700, color: t.headingColor, marginBottom: '6px' }}>{title}</h3>
// // //       {description && <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// // //       <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '14px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open calculator &rarr;</span>
// // //     </a>
// // //   );
// // // };

// // // const VisualToolCard = ({ title, description, href, image, previewIndex }) => {
// // //   const t = useTheme();
// // //   const [hovered, setHovered] = useState(false);
// // //   const previewContent = image ? null : getPlaceholderSvg(previewIndex || 0, t.buttonBgHover);
// // //   return (
// // //     <a href={href} style={{
// // //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// // //       textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
// // //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// // //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// // //       transform: hovered ? 'translateY(-3px)' : 'none',
// // //     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// // //       <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.stripActiveBg, borderBottom: `1px solid ${t.badgeBg}`, overflow: 'hidden' }}>
// // //         {image ? (
// // //           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
// // //             <Image src={image} alt={title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
// // //           </div>
// // //         ) : (
// // //           <div style={{ width: '200px' }} dangerouslySetInnerHTML={{ __html: previewContent }} />
// // //         )}
// // //       </div>
// // //       <div style={{ padding: '18px 20px' }}>
// // //         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
// // //           <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // //             <NavIcon icon="visual-tools" size={18} color={t.heroBg} />
// // //           </div>
// // //           <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Visual Tool</span>
// // //         </div>
// // //         <h3 style={{ fontSize: '16px', fontWeight: 700, color: t.headingColor, marginBottom: '5px' }}>{title}</h3>
// // //         {description && <p style={{ fontSize: '13.5px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// // //         <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '12px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open tool &rarr;</span>
// // //       </div>
// // //     </a>
// // //   );
// // // };


// // // /* ================================================================
// // //    ARTICLE BLOCK
// // //    ================================================================ */

// // // const ArticleBlock = ({ article }) => {
// // //   const t = useTheme();
// // //   if (!article) return null;
// // //   const { title, content } = typeof article === 'string' ? { title: null, content: article } : article;
// // //   return (
// // //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
// // //       <div style={{ background: t.articleBg, border: `1px solid ${t.articleBorder}`, borderRadius: '10px', padding: '32px 40px', margin: '28px 0 8px' }}>
// // //         <div style={{ width: '40px', height: '3px', background: t.articleAccent, borderRadius: '2px', marginBottom: '16px' }} />
// // //         {title && <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: t.articleHeading, marginBottom: '12px' }}>{title}</h3>}
// // //         <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.8, color: t.articleText }}>
// // //           {typeof content === 'string' ? processContent(content) : content}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    SECTION RENDERERS
// // //    ================================================================ */

// // // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // // const CatSubHeading = ({ children }) => {
// // //   const t = useTheme();
// // //   return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
// // // };

// // // /** Helper: renders IntroProse with visual props from section */
// // // const SectionIntro = ({ section, contentKey = 'content' }) => {
// // //   const text = section[contentKey] || section.introContent || section.content;
// // //   if (!text && !section.image && !section.svg) return null;
// // //   return (
// // //     <IntroProse
// // //       content={text}
// // //       image={section.image}
// // //       imageAlt={section.imageAlt}
// // //       svg={section.svg}
// // //       layout={section.introLayout}
// // //       imagePosition={section.introImagePosition}
// // //     />
// // //   );
// // // };

// // // const VisualToolsSection = ({ section, sections, currentIndex, data }) => {
// // //   const children = data?.children || [];
// // //   return (
// // //     <section id={section.id} style={secStyle}>
// // //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// // //       <SectionIntro section={section} />
// // //       {children.length > 0 && (
// // //         <EqualGrid>
// // //           {children.map((ch, i) => <VisualToolCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} previewIndex={i} />)}
// // //         </EqualGrid>
// // //       )}
// // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // //     </section>
// // //   );
// // // };

// // // const CalculatorsSection = ({ section, sections, currentIndex, data }) => {
// // //   const children = data?.children || [];
// // //   return (
// // //     <section id={section.id} style={secStyle}>
// // //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// // //       <SectionIntro section={section} />
// // //       {children.length > 0 && (
// // //         <EqualGrid>
// // //           {children.map((ch, i) => <CalculatorCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // //         </EqualGrid>
// // //       )}
// // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // //     </section>
// // //   );
// // // };

// // // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // //   const { categories, items, totalCount } = data;
// // //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // //   return (
// // //     <section id={section.id} style={secStyle}>
// // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // //       <SectionIntro section={section} contentKey="introContent" />
// // //       {categories.length > 0 && (
// // //         <EqualGrid>
// // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // //         </EqualGrid>
// // //       )}
// // //       {categories.map((c) => {
// // //         const ci = items.filter((i) => i.category === c.key);
// // //         if (!ci.length) return null;
// // //         return (
// // //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// // //             <CatSubHeading>{c.name}</CatSubHeading>
// // //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// // //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // //     </section>
// // //   );
// // // };

// // // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// // //   const { categories, items, totalCount } = data;
// // //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// // //   return (
// // //     <section id={section.id} style={secStyle}>
// // //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// // //       <SectionIntro section={section} contentKey="introContent" />
// // //       {categories.length > 0 && (
// // //         <EqualGrid>
// // //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// // //         </EqualGrid>
// // //       )}
// // //       {categories.map((c) => {
// // //         const ci = items.filter((i) => i.category === c.key);
// // //         if (!ci.length) return null;
// // //         return (
// // //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// // //             <CatSubHeading>{c.name}</CatSubHeading>
// // //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// // //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // //     </section>
// // //   );
// // // };

// // // const EditorialSection = ({ section, sections, currentIndex }) => (
// // //   <section id={section.id} style={secStyle}>
// // //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// // //     <SectionIntro section={section} />
// // //     <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
// // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // //   </section>
// // // );

// // // const StandaloneSection = ({ section, sections, currentIndex }) => (
// // //   <section id={section.id} style={secStyle}>
// // //     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // //     <SectionIntro section={section} />
// // //     {section.formulas?.length > 0 && (
// // //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// // //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// // //       </div>
// // //     )}
// // //     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // //     <SectionNav sections={sections} currentIndex={currentIndex} />
// // //   </section>
// // // );

// // // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// // //   const children = data?.children || [];
// // //   return (
// // //     <section id={section.id} style={secStyle}>
// // //       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// // //       <SectionIntro section={section} />
// // //       {children.length > 0 && (
// // //         <EqualGrid>
// // //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// // //         </EqualGrid>
// // //       )}
// // //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// // //       <SectionNav sections={sections} currentIndex={currentIndex} />
// // //     </section>
// // //   );
// // // };


// // // /* ================================================================
// // //    SECTIONS CONTAINER
// // //    ================================================================ */

// // // const renderers = {
// // //   formulas: FormulasSection,
// // //   definitions: DefinitionsSection,
// // //   editorial: EditorialSection,
// // //   standalone: StandaloneSection,
// // //   subsection: SubsectionSection,
// // //   calculators: CalculatorsSection,
// // //   'visual-tools': VisualToolsSection,
// // // };

// // // const TYPE_ORDER = { 'visual-tools': 0, 'formulas': 1, 'definitions': 2, 'editorial': 3, 'standalone': 4, 'subsection': 5, 'calculators': 6 };

// // // const SectionsContainer = ({ sections, sectionData }) => {
// // //   const t = useTheme();
// // //   const sorted = useMemo(() => [...sections].sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5)), [sections]);
// // //   return (
// // //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
// // //       {sorted.map((section, index) => {
// // //         const R = renderers[section.type];
// // //         if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// // //         return <R key={section.id} section={section} sections={sorted} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// // //       })}
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    SIDEBAR
// // //    ================================================================ */

// // // const SIDEBAR_COLLAPSED = 68;
// // // const SIDEBAR_EXPANDED = 290;

// // // const DotItem = ({ label, active, onClick }) => {
// // //   const [h, setH] = useState(false);
// // //   const lit = h || active;
// // //   return (
// // //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// // //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// // //     </div>
// // //   );
// // // };

// // // const SidebarNavLink = ({ icon, label, onClick }) => {
// // //   const t = useTheme();
// // //   const [h, setH] = useState(false);
// // //   return (
// // //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
// // //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // //       {icon && <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}><NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} /></span>}
// // //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// // //     </button>
// // //   );
// // // };

// // // const SidebarSubLink = ({ href, label }) => {
// // //   const [h, setH] = useState(false);
// // //   return (
// // //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// // //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// // //   );
// // // };

// // // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// // //   const t = useTheme();
// // //   const ref = useRef(null);
// // //   useEffect(() => {
// // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // //     document.addEventListener('click', handler);
// // //     return () => document.removeEventListener('click', handler);
// // //   }, [open, onToggle]);
// // //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); onToggle(false); };
// // //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// // //   return (
// // //     <aside ref={ref} style={{ position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`, width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`, height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, background: t.sidebarBg, zIndex: 90, display: 'flex', flexDirection: 'column', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden', boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none' }}>
// // //       <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />
// // //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// // //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// // //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// // //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// // //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
// // //       </button>
// // //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// // //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// // //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // //       </div>
// // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// // //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// // //       </div>
// // //       <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// // //         <div style={heading}>On This Page</div>
// // //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// // //         {subtopics?.length > 0 && (
// // //           <>
// // //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// // //             <div style={heading}>Subtopics</div>
// // //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// // //           </>
// // //         )}
// // //       </nav>
// // //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// // //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// // //       </div>
// // //     </aside>
// // //   );
// // // };


// // // /* ================================================================
// // //    HERO BANNER
// // //    ================================================================ */

// // // const HeroCtaButton = ({ href, icon, label, sublabel }) => {
// // //   const [hovered, setHovered] = useState(false);
// // //   return (
// // //     <a href={`#${href}`} style={{
// // //       display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 28px', borderRadius: '10px',
// // //       textDecoration: 'none', color: 'white', transition: 'all 0.2s',
// // //       background: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
// // //       border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}`,
// // //       transform: hovered ? 'translateY(-2px)' : 'none',
// // //       boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none', minWidth: '240px',
// // //     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
// // //       onClick={(e) => { e.preventDefault(); const el = document.getElementById(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); }}>
// // //       <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // //         <NavIcon icon={icon} size={22} color="white" />
// // //       </div>
// // //       <div style={{ display: 'flex', flexDirection: 'column' }}>
// // //         <span style={{ fontSize: '16px', fontWeight: 700 }}>{label}</span>
// // //         <span style={{ fontSize: '12px', fontWeight: 500, opacity: 0.7, marginTop: '2px' }}>{sublabel}</span>
// // //       </div>
// // //       <span style={{ marginLeft: 'auto', fontSize: '18px', opacity: 0.7, transition: 'transform 0.15s', transform: hovered ? 'translateX(4px)' : 'none' }}>&rarr;</span>
// // //     </a>
// // //   );
// // // };

// // // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats, sections }) => {
// // //   const t = useTheme();
// // //   const hasVisualTools = sections?.some((s) => s.type === 'visual-tools');
// // //   const hasCalculators = sections?.some((s) => s.type === 'calculators');
// // //   const showCtas = hasVisualTools || hasCalculators;

// // //   return (
// // //     <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// // //       <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
// // //       <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// // //         {breadcrumbUrl && (
// // //           <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// // //             <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// // //           </div>
// // //         )}
// // //         <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
// // //           <div style={{ flex: 1 }}>
// // //             <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// // //             {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// // //           </div>
// // //           {showCtas && (
// // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px', flexShrink: 0 }}>
// // //               {hasVisualTools && <HeroCtaButton href="visual-tools" icon="visual-tools" label="Visual Tools" sublabel="Interactive graphs &amp; visualizations" />}
// // //               {hasCalculators && <HeroCtaButton href="calculators" icon="calculators" label="Calculators" sublabel="Step-by-step equation solvers" />}
// // //             </div>
// // //           )}
// // //         </div>
// // //         {stats?.length > 0 && (
// // //           <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// // //             {stats.map((st, i) => (
// // //               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// // //                 <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </header>
// // //   );
// // // };


// // // /* ================================================================
// // //    TOPIC STRIP
// // //    ================================================================ */

// // // const StripLink = ({ id, icon, label, onClick }) => {
// // //   const t = useTheme();
// // //   const [h, setH] = useState(false);
// // //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
// // //   const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
// // //   return (
// // //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// // //       {icon && <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}><NavIcon icon={icon} size={16} color="currentColor" /></span>}
// // //       {label}
// // //     </a>
// // //   );
// // // };

// // // const TopicStrip = ({ sections }) => {
// // //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// // //   return (
// // //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// // //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// // //     </nav>
// // //   );
// // // };


// // // /* ================================================================
// // //    SHELL
// // //    ================================================================ */

// // // const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue', article }) => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const t = getTheme(theme);

// // //   const stats = useMemo(() => {
// // //     const r = [];
// // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // //       const sec = sections.find((s) => s.id === key);
// // //       if (!sec) return;
// // //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// // //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// // //       if (sec.type === 'calculators' && data.children) r.push({ value: data.children.length, label: 'Calculators' });
// // //       if (sec.type === 'visual-tools' && data.children) r.push({ value: data.children.length, label: 'Visual Tools' });
// // //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// // //     });
// // //     return r;
// // //   }, [sections, sectionData]);

// // //   const subtopics = useMemo(() => {
// // //     const all = [];
// // //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// // //       const sec = sections.find((s) => s.id === key);
// // //       if (sec?.type === 'subsection' && data?.children) {
// // //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// // //       }
// // //     });
// // //     return all;
// // //   }, [sections, sectionData]);

// // //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// // //   return (
// // //     <ThemeContext.Provider value={t}>
// // //       <Sidebar sections={sections} subtopics={subtopics} brandName={meta.title} brandSub="Learn Math Class" open={sidebarOpen} onToggle={setSidebarOpen} />
// // //       <div style={{ marginLeft: contentMargin, marginRight: rightOffset, marginTop: `${NAVBAR_HEIGHT}px`, minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`, transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)' }}>
// // //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} sections={sections} />
// // //         <TopicStrip sections={sections} />
// // //         <ArticleBlock article={article} />
// // //         <SectionsContainer sections={sections} sectionData={sectionData} />
// // //       </div>
// // //     </ThemeContext.Provider>
// // //   );
// // // };

// // // export default SectionFrontPage;



// // import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
// // import Image from 'next/image';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import { getTheme } from './sectionFrontPageThemes';

// // const NAVBAR_HEIGHT = 55;

// // const ThemeContext = createContext(null);
// // const useTheme = () => useContext(ThemeContext);


// // /* ================================================================
// //    PLACEHOLDER SVGs FOR VISUAL TOOLS
// //    ================================================================ */

// // const placeholderSvgs = [
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="180" y2="70" stroke="${c}30" stroke-width="1"/><line x1="20" y1="70" x2="20" y2="10" stroke="${c}30" stroke-width="1"/><path d="M25,65 Q60,60 80,40 Q100,20 130,15 Q160,10 175,12" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M25,68 Q70,65 100,55 Q130,45 160,25 Q170,18 175,20" fill="none" stroke="${c}80" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="50" height="50" rx="2" fill="none" stroke="${c}40" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="90,15 140,35 130,75 80,70" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="15" r="3" fill="${c}"/><circle cx="140" cy="35" r="3" fill="${c}"/><circle cx="130" cy="75" r="3" fill="${c}"/><circle cx="80" cy="70" r="3" fill="${c}"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="35" fill="none" stroke="${c}30" stroke-width="1"/><line x1="100" y1="45" x2="130" y2="25" stroke="${c}" stroke-width="2"/><line x1="100" y1="45" x2="75" y2="70" stroke="${c}80" stroke-width="1.5"/><circle cx="100" cy="45" r="3" fill="${c}"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="190" y2="45" stroke="${c}20" stroke-width="1"/><path d="M10,45 Q35,10 60,45 Q85,80 110,45 Q135,10 160,45 Q185,80 190,55" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}30" stroke-width="1"/><rect x="35" y="30" width="24" height="45" rx="3" fill="${c}30"/><rect x="70" y="15" width="24" height="60" rx="3" fill="${c}60"/><rect x="105" y="40" width="24" height="35" rx="3" fill="${c}45"/><rect x="140" y="22" width="24" height="53" rx="3" fill="${c}"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="80" x2="180" y2="80" stroke="${c}20" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="5" stroke="${c}20" stroke-width="1"/><path d="M30,80 Q100,5 170,80" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="12" r="3" fill="${c}"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="20" y1="75" x2="20" y2="8" stroke="${c}20" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="${c}40"/><circle cx="65" cy="48" r="4" fill="${c}60"/><circle cx="85" cy="52" r="4" fill="${c}50"/><circle cx="110" cy="35" r="4" fill="${c}70"/><circle cx="130" cy="28" r="4" fill="${c}80"/><circle cx="155" cy="18" r="4" fill="${c}"/><path d="M35,62 Q95,45 160,15" fill="none" stroke="${c}50" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="55" r="3" fill="${c}40"/><line x1="60" y1="55" x2="140" y2="25" stroke="${c}" stroke-width="2"/><polygon points="140,25 132,30 134,22" fill="${c}"/><line x1="60" y1="55" x2="150" y2="65" stroke="${c}70" stroke-width="2"/><polygon points="150,65 142,60 144,68" fill="${c}70"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="45" x2="185" y2="45" stroke="${c}40" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="100" y1="38" x2="100" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="150" y1="38" x2="150" y2="52" stroke="${c}60" stroke-width="1.5"/><circle cx="75" cy="45" r="5" fill="${c}" stroke="white" stroke-width="1.5"/><circle cx="130" cy="45" r="5" fill="none" stroke="${c}" stroke-width="2"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="12" width="100" height="66" rx="0" fill="none" stroke="${c}40" stroke-width="1.5"/><line x1="83" y1="12" x2="83" y2="78" stroke="${c}20" stroke-width="1"/><line x1="117" y1="12" x2="117" y2="78" stroke="${c}20" stroke-width="1"/><line x1="50" y1="34" x2="150" y2="34" stroke="${c}20" stroke-width="1"/><line x1="50" y1="56" x2="150" y2="56" stroke="${c}20" stroke-width="1"/><circle cx="67" cy="23" r="3" fill="${c}60"/><circle cx="100" cy="23" r="3" fill="${c}"/><circle cx="133" cy="45" r="3" fill="${c}"/><circle cx="67" cy="67" r="3" fill="${c}"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="38" fill="none" stroke="${c}25" stroke-width="1"/><path d="M100,45 L138,45 A38,38 0 0,0 119,14 Z" fill="${c}20" stroke="${c}" stroke-width="1.5"/><path d="M100,45 L119,14 A38,38 0 0,0 70,18 Z" fill="${c}35" stroke="${c}" stroke-width="1.5"/><circle cx="100" cy="45" r="2.5" fill="${c}"/></svg>`,
// //   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="25" y1="80" x2="25" y2="8" stroke="${c}20" stroke-width="1"/><path d="M30,65 H60 V50 H90 V35 H120 V20 H150 V12 H175" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="65" r="3" fill="${c}"/><circle cx="90" cy="50" r="3" fill="${c}"/><circle cx="120" cy="35" r="3" fill="${c}"/><circle cx="150" cy="20" r="3" fill="${c}"/></svg>`,
// // ];

// // function getPlaceholderSvg(index, color) {
// //   return placeholderSvgs[index % placeholderSvgs.length](color);
// // }


// // /* ================================================================
// //    NAV ICON
// //    ================================================================ */

// // const iconMap = {
// //   formulas: ({ size, color }) => <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>,
// //   definitions: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>,
// //   calculators: ({ size, color }) => (
// //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// //       <rect x="4" y="2" width="16" height="20" rx="2" />
// //       <rect x="7" y="5" width="10" height="4" rx="1" />
// //       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
// //       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
// //       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
// //     </svg>
// //   ),
// //   'visual-tools': ({ size, color }) => (
// //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
// //     </svg>
// //   ),
// //   subsection: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>,
// // };

// // const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// //   const renderer = iconMap[icon];
// //   if (renderer) return renderer({ size, color });
// //   if (typeof icon === 'string' && icon.length <= 4) return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
// //   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// // };


// // /* ================================================================
// //    EQUAL GRID
// //    ================================================================ */

// // const EqualGrid = ({ children }) => {
// //   const items = React.Children.toArray(children);
// //   const rows = [];
// //   for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));
// //   return (
// //     <div>
// //       {rows.map((row, ri) => (
// //         <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 1fr)`, gap: '16px', marginBottom: ri < rows.length - 1 ? '16px' : 0 }}>
// //           {row}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    INTRO PROSE — handles text, images, and SVG
// //    layout: 'horizontal' | 'vertical' (default: 'horizontal')
// //    imagePosition: 'left' | 'right' | 'top' | 'bottom' (default: 'right')
// //    When no image/svg: full-width text.
// //    ================================================================ */

// // const IntroProse = ({ content, image, imageAlt, svg, layout = 'horizontal', imagePosition = 'right' }) => {
// //   const t = useTheme();
// //   if (!content && !image && !svg) return null;

// //   const hasVisual = !!(image || svg);
// //   const isVertical = layout === 'vertical' || imagePosition === 'top' || imagePosition === 'bottom';
// //   const visualFirst = imagePosition === 'left' || imagePosition === 'top';

// //   const textBlock = content ? (
// //     <div style={{
// //       fontFamily: "'Source Serif 4', Georgia, serif",
// //       fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary,
// //       borderLeft: `3px solid ${t.cardAccent}`,
// //       paddingLeft: '28px',
// //       paddingTop: '8px',
// //       paddingBottom: '8px',
// //       flex: isVertical ? 'none' : 1,
// //     }}>
// //       {typeof content === 'string' ? processContent(content) : content}
// //     </div>
// //   ) : null;

// //   const visualBlock = hasVisual ? (
// //     <div style={{
// //       flex: isVertical ? 'none' : 1,
// //       minHeight: isVertical ? '240px' : '200px',
// //       position: 'relative',
// //       borderRadius: '8px',
// //       overflow: 'hidden',
// //       background: '#fafafa',
// //       display: 'flex', alignItems: 'center', justifyContent: 'center',
// //     }}>
// //       {image && (
// //         <Image
// //           src={image}
// //           alt={imageAlt || ''}
// //           fill
// //           sizes={isVertical ? '100vw' : '50vw'}
// //           style={{ objectFit: 'cover' }}
// //         />
// //       )}
// //       {svg && !image && (
// //         <div style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
// //           dangerouslySetInnerHTML={{ __html: svg }} />
// //       )}
// //     </div>
// //   ) : null;

// //   // No visual — full width text
// //   if (!hasVisual) {
// //     return (
// //       <div style={{ marginBottom: '28px' }}>
// //         {textBlock}
// //       </div>
// //     );
// //   }

// //   // Vertical layout
// //   if (isVertical) {
// //     return (
// //       <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
// //         {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
// //       </div>
// //     );
// //   }

// //   // Horizontal layout
// //   return (
// //     <div style={{ marginBottom: '28px', display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
// //       {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    ATOMS
// //    ================================================================ */

// // const SectionHeader = ({ title, badge, link, linkText }) => {
// //   const t = useTheme();
// //   const [linkHovered, setLinkHovered] = useState(false);
// //   return (
// //     <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
// //       <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
// //       {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
// //       {link && (
// //         <a href={link} style={{
// //           marginLeft: 'auto', fontSize: '14px', fontWeight: 700, color: '#ffffff', textDecoration: 'none',
// //           background: linkHovered ? t.buttonBgHover : t.buttonBg, padding: '7px 18px', borderRadius: '6px',
// //           transition: 'all 0.15s', whiteSpace: 'nowrap',
// //           transform: linkHovered ? 'translateY(-1px)' : 'none',
// //           boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
// //         }} onMouseEnter={() => setLinkHovered(true)} onMouseLeave={() => setLinkHovered(false)}>
// //           {linkText || 'See All'} &rarr;
// //         </a>
// //       )}
// //     </div>
// //   );
// // };

// // const SectionFooterLink = ({ link, linkText }) => {
// //   const t = useTheme();
// //   const [hovered, setHovered] = useState(false);
// //   if (!link) return null;
// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
// //       <a href={link} style={{
// //         display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 700, color: '#ffffff',
// //         background: hovered ? t.buttonBgHover : t.buttonBg, padding: '10px 28px', borderRadius: '8px',
// //         textDecoration: 'none', transition: 'all 0.15s',
// //         transform: hovered ? 'translateY(-1px)' : 'none',
// //         boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
// //       }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// //         {linkText || 'View All'} &rarr;
// //       </a>
// //     </div>
// //   );
// // };

// // const SectionNav = ({ sections, currentIndex }) => {
// //   const hasPrev = currentIndex > 0;
// //   const hasNext = currentIndex < sections.length - 1;
// //   const t = useTheme();
// //   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
// //   const hover = {
// //     onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
// //     onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
// //   };
// //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
// //       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
// //       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
// //       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
// //     </div>
// //   );
// // };

// // const CategoryCard = ({ title, count, description, href, onClick, image, imageAlt }) => {
// //   const t = useTheme();
// //   const [hovered, setHovered] = useState(false);
// //   const Tag = href ? 'a' : 'div';
// //   const hasImage = !!image;
// //   const base = { display: 'flex', flexDirection: 'column', gap: hasImage ? 0 : '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s', position: 'relative', minHeight: '100px', overflow: 'hidden' };
// //   const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
// //   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
// //   return (
// //     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// //       {hasImage && (
// //         <div style={{ position: 'relative', width: '100%', height: '140px', borderBottom: '1px solid #ebebeb', flexShrink: 0 }}>
// //           <Image src={image} alt={imageAlt || title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
// //         </div>
// //       )}
// //       <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
// //         <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
// //         {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
// //         {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5, paddingBottom: '24px' }}>{description}</span>}
// //       </div>
// //       {href && (
// //         <span style={{
// //           position: 'absolute', bottom: '12px', right: '14px',
// //           fontSize: '11.5px', fontWeight: 600, color: hovered ? t.buttonBg : t.textMuted,
// //           border: `1px solid ${hovered ? t.buttonBg : '#e0e0e0'}`,
// //           padding: '3px 10px', borderRadius: '4px', transition: 'all 0.15s',
// //         }}>Learn more &rarr;</span>
// //       )}
// //     </Tag>
// //   );
// // };

// // const FormulaChip = ({ label, tex }) => {
// //   const t = useTheme();
// //   const mathRef = useRef(null);
// //   useEffect(() => {
// //     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
// //       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
// //       catch (e) { mathRef.current.textContent = tex; }
// //     }
// //   }, [tex]);
// //   return (
// //     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
// //       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
// //       <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
// //     </div>
// //   );
// // };

// // const DefinitionItem = ({ term, definition }) => {
// //   const t = useTheme();
// //   return (
// //     <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
// //       <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
// //       <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
// //         {typeof definition === 'string' ? processContent(definition) : definition}
// //       </span>
// //     </div>
// //   );
// // };

// // const CalculatorCard = ({ title, description, href }) => {
// //   const t = useTheme();
// //   const [hovered, setHovered] = useState(false);
// //   return (
// //     <a href={href} style={{
// //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// //       padding: '24px 22px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s',
// //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// //       transform: hovered ? 'translateY(-3px)' : 'none',
// //     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
// //         <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// //           <NavIcon icon="calculators" size={22} color={t.heroBg} />
// //         </div>
// //         <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Calculator</span>
// //       </div>
// //       <h3 style={{ fontSize: '17px', fontWeight: 700, color: t.headingColor, marginBottom: '6px' }}>{title}</h3>
// //       {description && <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// //       <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '14px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open calculator &rarr;</span>
// //     </a>
// //   );
// // };

// // const VisualToolCard = ({ title, description, href, image, previewIndex }) => {
// //   const t = useTheme();
// //   const [hovered, setHovered] = useState(false);
// //   const previewContent = image ? null : getPlaceholderSvg(previewIndex || 0, t.buttonBgHover);
// //   return (
// //     <a href={href} style={{
// //       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
// //       textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
// //       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
// //       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
// //       transform: hovered ? 'translateY(-3px)' : 'none',
// //     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
// //       <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.stripActiveBg, borderBottom: `1px solid ${t.badgeBg}`, overflow: 'hidden' }}>
// //         {image ? (
// //           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
// //             <Image src={image} alt={title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
// //           </div>
// //         ) : (
// //           <div style={{ width: '200px' }} dangerouslySetInnerHTML={{ __html: previewContent }} />
// //         )}
// //       </div>
// //       <div style={{ padding: '18px 20px' }}>
// //         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
// //           <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// //             <NavIcon icon="visual-tools" size={18} color={t.heroBg} />
// //           </div>
// //           <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Visual Tool</span>
// //         </div>
// //         <h3 style={{ fontSize: '16px', fontWeight: 700, color: t.headingColor, marginBottom: '5px' }}>{title}</h3>
// //         {description && <p style={{ fontSize: '13.5px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{description}</p>}
// //         <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '12px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open tool &rarr;</span>
// //       </div>
// //     </a>
// //   );
// // };


// // /* ================================================================
// //    ARTICLE BLOCK
// //    ================================================================ */

// // const ArticleBlock = ({ article }) => {
// //   const t = useTheme();
// //   if (!article) return null;
// //   const { title, content } = typeof article === 'string' ? { title: null, content: article } : article;
// //   return (
// //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
// //       <div style={{ background: t.articleBg, border: `1px solid ${t.articleBorder}`, borderRadius: '10px', padding: '32px 40px', margin: '28px 0 8px' }}>
// //         <div style={{ width: '40px', height: '3px', background: t.articleAccent, borderRadius: '2px', marginBottom: '16px' }} />
// //         {title && <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: t.articleHeading, marginBottom: '12px' }}>{title}</h3>}
// //         <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.8, color: t.articleText }}>
// //           {typeof content === 'string' ? processContent(content) : content}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    SECTION RENDERERS
// //    ================================================================ */

// // const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// // const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// // const CatSubHeading = ({ children }) => {
// //   const t = useTheme();
// //   return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
// // };

// // /** Helper: renders IntroProse with visual props from section */
// // const SectionIntro = ({ section, contentKey = 'content' }) => {
// //   const text = section[contentKey] || section.introContent || section.content;
// //   if (!text && !section.image && !section.svg) return null;
// //   return (
// //     <IntroProse
// //       content={text}
// //       image={section.image}
// //       imageAlt={section.imageAlt}
// //       svg={section.svg}
// //       layout={section.introLayout}
// //       imagePosition={section.introImagePosition}
// //     />
// //   );
// // };

// // const VisualToolsSection = ({ section, sections, currentIndex, data }) => {
// //   const children = data?.children || [];
// //   return (
// //     <section id={section.id} style={secStyle}>
// //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// //       <SectionIntro section={section} />
// //       {children.length > 0 && (
// //         <EqualGrid>
// //           {children.map((ch, i) => <VisualToolCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} previewIndex={i} />)}
// //         </EqualGrid>
// //       )}
// //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// //       <SectionNav sections={sections} currentIndex={currentIndex} />
// //     </section>
// //   );
// // };

// // const CalculatorsSection = ({ section, sections, currentIndex, data }) => {
// //   const children = data?.children || [];
// //   return (
// //     <section id={section.id} style={secStyle}>
// //       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
// //       <SectionIntro section={section} />
// //       {children.length > 0 && (
// //         <EqualGrid>
// //           {children.map((ch, i) => <CalculatorCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
// //         </EqualGrid>
// //       )}
// //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// //       <SectionNav sections={sections} currentIndex={currentIndex} />
// //     </section>
// //   );
// // };

// // const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// //   const { categories, items, totalCount } = data;
// //   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// //   return (
// //     <section id={section.id} style={secStyle}>
// //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// //       <SectionIntro section={section} contentKey="introContent" />
// //       {categories.length > 0 && (
// //         <EqualGrid>
// //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// //         </EqualGrid>
// //       )}
// //       {categories.map((c) => {
// //         const ci = items.filter((i) => i.category === c.key);
// //         if (!ci.length) return null;
// //         return (
// //           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
// //             <CatSubHeading>{c.name}</CatSubHeading>
// //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
// //               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
// //             </div>
// //           </div>
// //         );
// //       })}
// //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// //       <SectionNav sections={sections} currentIndex={currentIndex} />
// //     </section>
// //   );
// // };

// // const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
// //   const { categories, items, totalCount } = data;
// //   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
// //   return (
// //     <section id={section.id} style={secStyle}>
// //       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
// //       <SectionIntro section={section} contentKey="introContent" />
// //       {categories.length > 0 && (
// //         <EqualGrid>
// //           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
// //         </EqualGrid>
// //       )}
// //       {categories.map((c) => {
// //         const ci = items.filter((i) => i.category === c.key);
// //         if (!ci.length) return null;
// //         return (
// //           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
// //             <CatSubHeading>{c.name}</CatSubHeading>
// //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
// //               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
// //             </div>
// //           </div>
// //         );
// //       })}
// //       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
// //       <SectionNav sections={sections} currentIndex={currentIndex} />
// //     </section>
// //   );
// // };

// // const EditorialSection = ({ section, sections, currentIndex }) => (
// //   <section id={section.id} style={secStyle}>
// //     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
// //     <SectionIntro section={section} />
// //     <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
// //     <SectionNav sections={sections} currentIndex={currentIndex} />
// //   </section>
// // );

// // const StandaloneSection = ({ section, sections, currentIndex }) => (
// //   <section id={section.id} style={secStyle}>
// //     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// //     <SectionIntro section={section} />
// //     {section.formulas?.length > 0 && (
// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
// //         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
// //       </div>
// //     )}
// //     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// //     <SectionNav sections={sections} currentIndex={currentIndex} />
// //   </section>
// // );

// // const SubsectionSection = ({ section, sections, currentIndex, data }) => {
// //   const children = data?.children || [];
// //   return (
// //     <section id={section.id} style={secStyle}>
// //       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
// //       <SectionIntro section={section} />
// //       {children.length > 0 && (
// //         <EqualGrid>
// //           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} imageAlt={ch.title} />)}
// //         </EqualGrid>
// //       )}
// //       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
// //       <SectionNav sections={sections} currentIndex={currentIndex} />
// //     </section>
// //   );
// // };


// // /* ================================================================
// //    SECTIONS CONTAINER
// //    ================================================================ */

// // const renderers = {
// //   formulas: FormulasSection,
// //   definitions: DefinitionsSection,
// //   editorial: EditorialSection,
// //   standalone: StandaloneSection,
// //   subsection: SubsectionSection,
// //   calculators: CalculatorsSection,
// //   'visual-tools': VisualToolsSection,
// // };

// // const TYPE_ORDER = { 'visual-tools': 0, 'formulas': 1, 'definitions': 2, 'editorial': 3, 'standalone': 4, 'subsection': 5, 'calculators': 6 };

// // const SectionsContainer = ({ sections, sectionData }) => {
// //   const t = useTheme();
// //   const sorted = useMemo(() => [...sections].sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5)), [sections]);
// //   return (
// //     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
// //       {sorted.map((section, index) => {
// //         const R = renderers[section.type];
// //         if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
// //         return <R key={section.id} section={section} sections={sorted} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
// //       })}
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    SIDEBAR
// //    ================================================================ */

// // const SIDEBAR_COLLAPSED = 68;
// // const SIDEBAR_EXPANDED = 290;

// // const DotItem = ({ label, active, onClick }) => {
// //   const [h, setH] = useState(false);
// //   const lit = h || active;
// //   return (
// //     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
// //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
// //       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
// //     </div>
// //   );
// // };

// // const SidebarNavLink = ({ icon, label, onClick }) => {
// //   const t = useTheme();
// //   const [h, setH] = useState(false);
// //   return (
// //     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
// //       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// //       {icon && <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}><NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} /></span>}
// //       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
// //     </button>
// //   );
// // };

// // const SidebarSubLink = ({ href, label }) => {
// //   const [h, setH] = useState(false);
// //   return (
// //     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
// //       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
// //   );
// // };

// // const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
// //   const t = useTheme();
// //   const ref = useRef(null);
// //   useEffect(() => {
// //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// //     document.addEventListener('click', handler);
// //     return () => document.removeEventListener('click', handler);
// //   }, [open, onToggle]);
// //   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); onToggle(false); };
// //   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

// //   return (
// //     <aside ref={ref} style={{ position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`, width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`, height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, background: t.sidebarBg, zIndex: 90, display: 'flex', flexDirection: 'column', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden', boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none' }}>
// //       <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />
// //       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
// //         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
// //         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
// //         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
// //         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
// //       </button>
// //       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
// //         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
// //         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// //       </div>
// //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
// //         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
// //       </div>
// //       <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// //         <div style={heading}>On This Page</div>
// //         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
// //         {subtopics?.length > 0 && (
// //           <>
// //             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
// //             <div style={heading}>Subtopics</div>
// //             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
// //           </>
// //         )}
// //       </nav>
// //       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
// //         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
// //       </div>
// //     </aside>
// //   );
// // };


// // /* ================================================================
// //    HERO BANNER
// //    ================================================================ */

// // const HeroCtaButton = ({ href, icon, label, sublabel }) => {
// //   const [hovered, setHovered] = useState(false);
// //   return (
// //     <a href={`#${href}`} style={{
// //       display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 28px', borderRadius: '10px',
// //       textDecoration: 'none', color: 'white', transition: 'all 0.2s',
// //       background: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
// //       border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}`,
// //       transform: hovered ? 'translateY(-2px)' : 'none',
// //       boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none', minWidth: '240px',
// //     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
// //       onClick={(e) => { e.preventDefault(); const el = document.getElementById(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); }}>
// //       <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// //         <NavIcon icon={icon} size={22} color="white" />
// //       </div>
// //       <div style={{ display: 'flex', flexDirection: 'column' }}>
// //         <span style={{ fontSize: '16px', fontWeight: 700 }}>{label}</span>
// //         <span style={{ fontSize: '12px', fontWeight: 500, opacity: 0.7, marginTop: '2px' }}>{sublabel}</span>
// //       </div>
// //       <span style={{ marginLeft: 'auto', fontSize: '18px', opacity: 0.7, transition: 'transform 0.15s', transform: hovered ? 'translateX(4px)' : 'none' }}>&rarr;</span>
// //     </a>
// //   );
// // };

// // const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats, sections }) => {
// //   const t = useTheme();
// //   const hasVisualTools = sections?.some((s) => s.type === 'visual-tools');
// //   const hasCalculators = sections?.some((s) => s.type === 'calculators');
// //   const showCtas = hasVisualTools || hasCalculators;

// //   return (
// //     <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
// //       <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
// //       <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
// //         {breadcrumbUrl && (
// //           <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
// //             <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
// //           </div>
// //         )}
// //         <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
// //           <div style={{ flex: 1 }}>
// //             <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
// //             {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
// //           </div>
// //           {showCtas && (
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px', flexShrink: 0 }}>
// //               {hasVisualTools && <HeroCtaButton href="visual-tools" icon="visual-tools" label="Visual Tools" sublabel="Interactive graphs &amp; visualizations" />}
// //               {hasCalculators && <HeroCtaButton href="calculators" icon="calculators" label="Calculators" sublabel="Step-by-step equation solvers" />}
// //             </div>
// //           )}
// //         </div>
// //         {stats?.length > 0 && (
// //           <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
// //             {stats.map((st, i) => (
// //               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
// //                 <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };


// // /* ================================================================
// //    TOPIC STRIP
// //    ================================================================ */

// // const StripLink = ({ id, icon, label, onClick }) => {
// //   const t = useTheme();
// //   const [h, setH] = useState(false);
// //   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
// //   const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
// //   return (
// //     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
// //       {icon && <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}><NavIcon icon={icon} size={16} color="currentColor" /></span>}
// //       {label}
// //     </a>
// //   );
// // };

// // const TopicStrip = ({ sections }) => {
// //   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
// //   return (
// //     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
// //       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
// //     </nav>
// //   );
// // };


// // /* ================================================================
// //    SHELL
// //    ================================================================ */

// // const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue', article }) => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const t = getTheme(theme);

// //   const stats = useMemo(() => {
// //     const r = [];
// //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// //       const sec = sections.find((s) => s.id === key);
// //       if (!sec) return;
// //       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
// //       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
// //       if (sec.type === 'calculators' && data.children) r.push({ value: data.children.length, label: 'Calculators' });
// //       if (sec.type === 'visual-tools' && data.children) r.push({ value: data.children.length, label: 'Visual Tools' });
// //       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
// //     });
// //     return r;
// //   }, [sections, sectionData]);

// //   const subtopics = useMemo(() => {
// //     const all = [];
// //     Object.entries(sectionData || {}).forEach(([key, data]) => {
// //       const sec = sections.find((s) => s.id === key);
// //       if (sec?.type === 'subsection' && data?.children) {
// //         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
// //       }
// //     });
// //     return all;
// //   }, [sections, sectionData]);

// //   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

// //   return (
// //     <ThemeContext.Provider value={t}>
// //       <Sidebar sections={sections} subtopics={subtopics} brandName={meta.title} brandSub="Learn Math Class" open={sidebarOpen} onToggle={setSidebarOpen} />
// //       <div style={{ marginLeft: contentMargin, marginRight: rightOffset, marginTop: `${NAVBAR_HEIGHT}px`, minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`, transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)' }}>
// //         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} sections={sections} />
// //         <TopicStrip sections={sections} />
// //         <ArticleBlock article={article} />
// //         <SectionsContainer sections={sections} sectionData={sectionData} />
// //       </div>
// //     </ThemeContext.Provider>
// //   );
// // };

// // export default SectionFrontPage;


// import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
// import Image from 'next/image';
// import { processContent } from '@/app/utils/contentProcessor';
// import { getTheme } from './sectionFrontPageThemes';

// const NAVBAR_HEIGHT = 55;

// const ThemeContext = createContext(null);
// const useTheme = () => useContext(ThemeContext);


// /* ================================================================
//    PLACEHOLDER SVGs FOR VISUAL TOOLS
//    ================================================================ */

// const placeholderSvgs = [
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="180" y2="70" stroke="${c}30" stroke-width="1"/><line x1="20" y1="70" x2="20" y2="10" stroke="${c}30" stroke-width="1"/><path d="M25,65 Q60,60 80,40 Q100,20 130,15 Q160,10 175,12" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M25,68 Q70,65 100,55 Q130,45 160,25 Q170,18 175,20" fill="none" stroke="${c}80" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="50" height="50" rx="2" fill="none" stroke="${c}40" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="90,15 140,35 130,75 80,70" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="15" r="3" fill="${c}"/><circle cx="140" cy="35" r="3" fill="${c}"/><circle cx="130" cy="75" r="3" fill="${c}"/><circle cx="80" cy="70" r="3" fill="${c}"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="35" fill="none" stroke="${c}30" stroke-width="1"/><line x1="100" y1="45" x2="130" y2="25" stroke="${c}" stroke-width="2"/><line x1="100" y1="45" x2="75" y2="70" stroke="${c}80" stroke-width="1.5"/><circle cx="100" cy="45" r="3" fill="${c}"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="190" y2="45" stroke="${c}20" stroke-width="1"/><path d="M10,45 Q35,10 60,45 Q85,80 110,45 Q135,10 160,45 Q185,80 190,55" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}30" stroke-width="1"/><rect x="35" y="30" width="24" height="45" rx="3" fill="${c}30"/><rect x="70" y="15" width="24" height="60" rx="3" fill="${c}60"/><rect x="105" y="40" width="24" height="35" rx="3" fill="${c}45"/><rect x="140" y="22" width="24" height="53" rx="3" fill="${c}"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="80" x2="180" y2="80" stroke="${c}20" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="5" stroke="${c}20" stroke-width="1"/><path d="M30,80 Q100,5 170,80" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="12" r="3" fill="${c}"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="20" y1="75" x2="20" y2="8" stroke="${c}20" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="${c}40"/><circle cx="65" cy="48" r="4" fill="${c}60"/><circle cx="85" cy="52" r="4" fill="${c}50"/><circle cx="110" cy="35" r="4" fill="${c}70"/><circle cx="130" cy="28" r="4" fill="${c}80"/><circle cx="155" cy="18" r="4" fill="${c}"/><path d="M35,62 Q95,45 160,15" fill="none" stroke="${c}50" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="55" r="3" fill="${c}40"/><line x1="60" y1="55" x2="140" y2="25" stroke="${c}" stroke-width="2"/><polygon points="140,25 132,30 134,22" fill="${c}"/><line x1="60" y1="55" x2="150" y2="65" stroke="${c}70" stroke-width="2"/><polygon points="150,65 142,60 144,68" fill="${c}70"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="45" x2="185" y2="45" stroke="${c}40" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="100" y1="38" x2="100" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="150" y1="38" x2="150" y2="52" stroke="${c}60" stroke-width="1.5"/><circle cx="75" cy="45" r="5" fill="${c}" stroke="white" stroke-width="1.5"/><circle cx="130" cy="45" r="5" fill="none" stroke="${c}" stroke-width="2"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="12" width="100" height="66" rx="0" fill="none" stroke="${c}40" stroke-width="1.5"/><line x1="83" y1="12" x2="83" y2="78" stroke="${c}20" stroke-width="1"/><line x1="117" y1="12" x2="117" y2="78" stroke="${c}20" stroke-width="1"/><line x1="50" y1="34" x2="150" y2="34" stroke="${c}20" stroke-width="1"/><line x1="50" y1="56" x2="150" y2="56" stroke="${c}20" stroke-width="1"/><circle cx="67" cy="23" r="3" fill="${c}60"/><circle cx="100" cy="23" r="3" fill="${c}"/><circle cx="133" cy="45" r="3" fill="${c}"/><circle cx="67" cy="67" r="3" fill="${c}"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="38" fill="none" stroke="${c}25" stroke-width="1"/><path d="M100,45 L138,45 A38,38 0 0,0 119,14 Z" fill="${c}20" stroke="${c}" stroke-width="1.5"/><path d="M100,45 L119,14 A38,38 0 0,0 70,18 Z" fill="${c}35" stroke="${c}" stroke-width="1.5"/><circle cx="100" cy="45" r="2.5" fill="${c}"/></svg>`,
//   (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="25" y1="80" x2="25" y2="8" stroke="${c}20" stroke-width="1"/><path d="M30,65 H60 V50 H90 V35 H120 V20 H150 V12 H175" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="65" r="3" fill="${c}"/><circle cx="90" cy="50" r="3" fill="${c}"/><circle cx="120" cy="35" r="3" fill="${c}"/><circle cx="150" cy="20" r="3" fill="${c}"/></svg>`,
// ];

// function getPlaceholderSvg(index, color) {
//   return placeholderSvgs[index % placeholderSvgs.length](color);
// }


// /* ================================================================
//    NAV ICON
//    ================================================================ */

// const iconMap = {
//   formulas: ({ size, color }) => <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>,
//   definitions: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>,
//   calculators: ({ size, color }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="4" y="2" width="16" height="20" rx="2" />
//       <rect x="7" y="5" width="10" height="4" rx="1" />
//       <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
//       <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
//       <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
//     </svg>
//   ),
//   'visual-tools': ({ size, color }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   subsection: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>,
// };

// const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
//   const renderer = iconMap[icon];
//   if (renderer) return renderer({ size, color });
//   if (typeof icon === 'string' && icon.length <= 4) return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
//   return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
// };


// /* ================================================================
//    EQUAL GRID
//    ================================================================ */

// const EqualGrid = ({ children }) => {
//   const items = React.Children.toArray(children);
//   const rows = [];
//   for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));
//   return (
//     <div>
//       {rows.map((row, ri) => (
//         <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 1fr)`, gap: '16px', marginBottom: ri < rows.length - 1 ? '16px' : 0 }}>
//           {row}
//         </div>
//       ))}
//     </div>
//   );
// };


// /* ================================================================
//    INTRO PROSE — handles text, images, and SVG
//    layout: 'horizontal' | 'vertical' (default: 'horizontal')
//    imagePosition: 'left' | 'right' | 'top' | 'bottom' (default: 'right')
//    When no image/svg: full-width text.
//    ================================================================ */

// const IntroProse = ({ content, image, imageAlt, svg, layout = 'horizontal', imagePosition = 'right' }) => {
//   const t = useTheme();
//   if (!content && !image && !svg) return null;

//   const hasVisual = !!(image || svg);
//   const isVertical = layout === 'vertical' || imagePosition === 'top' || imagePosition === 'bottom';
//   const visualFirst = imagePosition === 'left' || imagePosition === 'top';

//   const textBlock = content ? (
//     <div style={{
//       fontFamily: "'Source Serif 4', Georgia, serif",
//       fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary,
//       borderLeft: `3px solid ${t.cardAccent}`,
//       paddingLeft: '28px',
//       paddingTop: '8px',
//       paddingBottom: '8px',
//       flex: isVertical ? 'none' : 1,
//     }}>
//       {typeof content === 'string' ? processContent(content) : content}
//     </div>
//   ) : null;

//   const visualBlock = hasVisual ? (
//     <div style={{
//       flex: isVertical ? 'none' : 1,
//       minHeight: isVertical ? '240px' : '200px',
//       position: 'relative',
//       borderRadius: '8px',
//       overflow: 'hidden',
//       background: '#fafafa',
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//     }}>
//       {image && (
//         <Image
//           src={image}
//           alt={imageAlt || ''}
//           fill
//           sizes={isVertical ? '100vw' : '50vw'}
//           style={{ objectFit: 'cover' }}
//         />
//       )}
//       {svg && !image && (
//         <div style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//           dangerouslySetInnerHTML={{ __html: svg }} />
//       )}
//     </div>
//   ) : null;

//   // No visual — full width text
//   if (!hasVisual) {
//     return (
//       <div style={{ marginBottom: '28px' }}>
//         {textBlock}
//       </div>
//     );
//   }

//   // Vertical layout
//   if (isVertical) {
//     return (
//       <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
//       </div>
//     );
//   }

//   // Horizontal layout
//   return (
//     <div style={{ marginBottom: '28px', display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
//       {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
//     </div>
//   );
// };


// /* ================================================================
//    ATOMS
//    ================================================================ */

// const SectionHeader = ({ title, badge, link, linkText }) => {
//   const t = useTheme();
//   const [linkHovered, setLinkHovered] = useState(false);
//   return (
//     <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
//       <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
//       {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
//       {link && (
//         <a href={link} style={{
//           marginLeft: 'auto', fontSize: '14px', fontWeight: 700, color: '#ffffff', textDecoration: 'none',
//           background: linkHovered ? t.buttonBgHover : t.buttonBg, padding: '7px 18px', borderRadius: '6px',
//           transition: 'all 0.15s', whiteSpace: 'nowrap',
//           transform: linkHovered ? 'translateY(-1px)' : 'none',
//           boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
//         }} onMouseEnter={() => setLinkHovered(true)} onMouseLeave={() => setLinkHovered(false)}>
//           {linkText || 'See All'} &rarr;
//         </a>
//       )}
//     </div>
//   );
// };

// const SectionFooterLink = ({ link, linkText }) => {
//   const t = useTheme();
//   const [hovered, setHovered] = useState(false);
//   if (!link) return null;
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
//       <a href={link} style={{
//         display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 700, color: '#ffffff',
//         background: hovered ? t.buttonBgHover : t.buttonBg, padding: '10px 28px', borderRadius: '8px',
//         textDecoration: 'none', transition: 'all 0.15s',
//         transform: hovered ? 'translateY(-1px)' : 'none',
//         boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
//       }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//         {linkText || 'View All'} &rarr;
//       </a>
//     </div>
//   );
// };

// const SectionNav = ({ sections, currentIndex }) => {
//   const hasPrev = currentIndex > 0;
//   const hasNext = currentIndex < sections.length - 1;
//   const t = useTheme();
//   const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
//   const hover = {
//     onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
//     onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
//   };
//   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
//       {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
//       <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
//       {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
//     </div>
//   );
// };

// const CategoryCard = ({ title, count, description, href, onClick, image, imageAlt }) => {
//   const t = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const Tag = href ? 'a' : 'div';
//   const hasImage = !!image;
//   const base = { display: 'flex', flexDirection: 'column', gap: hasImage ? 0 : '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s', position: 'relative', minHeight: '100px', overflow: 'hidden' };
//   const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
//   const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
//   return (
//     <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//       {hasImage && (
//         <div style={{ position: 'relative', width: '100%', height: '140px', borderBottom: '1px solid #ebebeb', flexShrink: 0 }}>
//           <Image src={image} alt={imageAlt || title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
//         </div>
//       )}
//       <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
//         <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
//         {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
//         {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5, paddingBottom: '24px' }}>{typeof description === 'string' ? processContent(description) : description}</span>}
//       </div>
//       {href && (
//         <span style={{
//           position: 'absolute', bottom: '12px', right: '14px',
//           fontSize: '11.5px', fontWeight: 600, color: hovered ? t.buttonBg : t.textMuted,
//           border: `1px solid ${hovered ? t.buttonBg : '#e0e0e0'}`,
//           padding: '3px 10px', borderRadius: '4px', transition: 'all 0.15s',
//         }}>Learn more &rarr;</span>
//       )}
//     </Tag>
//   );
// };

// const FormulaChip = ({ label, tex }) => {
//   const t = useTheme();
//   const mathRef = useRef(null);
//   useEffect(() => {
//     if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
//       try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
//       catch (e) { mathRef.current.textContent = tex; }
//     }
//   }, [tex]);
//   return (
//     <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
//       {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
//       <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
//     </div>
//   );
// };

// const DefinitionItem = ({ term, definition }) => {
//   const t = useTheme();
//   return (
//     <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
//       <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
//       <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
//         {typeof definition === 'string' ? processContent(definition) : definition}
//       </span>
//     </div>
//   );
// };

// const CalculatorCard = ({ title, description, href }) => {
//   const t = useTheme();
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a href={href} style={{
//       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
//       padding: '24px 22px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s',
//       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
//       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
//       transform: hovered ? 'translateY(-3px)' : 'none',
//     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
//         <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//           <NavIcon icon="calculators" size={22} color={t.heroBg} />
//         </div>
//         <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Calculator</span>
//       </div>
//       <h3 style={{ fontSize: '17px', fontWeight: 700, color: t.headingColor, marginBottom: '6px' }}>{title}</h3>
//       {description && <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{typeof description === 'string' ? processContent(description) : description}</p>}
//       <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '14px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open calculator &rarr;</span>
//     </a>
//   );
// };

// const VisualToolCard = ({ title, description, href, image, previewIndex }) => {
//   const t = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const previewContent = image ? null : getPlaceholderSvg(previewIndex || 0, t.buttonBgHover);
//   return (
//     <a href={href} style={{
//       display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
//       textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
//       borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
//       boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
//       transform: hovered ? 'translateY(-3px)' : 'none',
//     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//       <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.stripActiveBg, borderBottom: `1px solid ${t.badgeBg}`, overflow: 'hidden' }}>
//         {image ? (
//           <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//             <Image src={image} alt={title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
//           </div>
//         ) : (
//           <div style={{ width: '200px' }} dangerouslySetInnerHTML={{ __html: previewContent }} />
//         )}
//       </div>
//       <div style={{ padding: '18px 20px' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
//           <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//             <NavIcon icon="visual-tools" size={18} color={t.heroBg} />
//           </div>
//           <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Visual Tool</span>
//         </div>
//         <h3 style={{ fontSize: '16px', fontWeight: 700, color: t.headingColor, marginBottom: '5px' }}>{title}</h3>
//         {description && <p style={{ fontSize: '13.5px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{typeof description === 'string' ? processContent(description) : description}</p>}
//         <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '12px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open tool &rarr;</span>
//       </div>
//     </a>
//   );
// };


// /* ================================================================
//    ARTICLE BLOCK
//    ================================================================ */

// const ArticleBlock = ({ article }) => {
//   const t = useTheme();
//   if (!article) return null;
//   const { title, content } = typeof article === 'string' ? { title: null, content: article } : article;
//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
//       <div style={{ background: t.articleBg, border: `1px solid ${t.articleBorder}`, borderRadius: '10px', padding: '32px 40px', margin: '28px 0 8px' }}>
//         <div style={{ width: '40px', height: '3px', background: t.articleAccent, borderRadius: '2px', marginBottom: '16px' }} />
//         {title && <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: t.articleHeading, marginBottom: '12px' }}>{title}</h3>}
//         <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.8, color: t.articleText }}>
//           {typeof content === 'string' ? processContent(content) : content}
//         </div>
//       </div>
//     </div>
//   );
// };


// /* ================================================================
//    SECTION RENDERERS
//    ================================================================ */

// const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
// const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

// const CatSubHeading = ({ children }) => {
//   const t = useTheme();
//   return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
// };

// /** Helper: renders IntroProse with visual props from section */
// const SectionIntro = ({ section, contentKey = 'content' }) => {
//   const text = section[contentKey] || section.introContent || section.content;
//   if (!text && !section.image && !section.svg) return null;
//   return (
//     <IntroProse
//       content={text}
//       image={section.image}
//       imageAlt={section.imageAlt}
//       svg={section.svg}
//       layout={section.introLayout}
//       imagePosition={section.introImagePosition}
//     />
//   );
// };

// const VisualToolsSection = ({ section, sections, currentIndex, data }) => {
//   const children = data?.children || [];
//   return (
//     <section id={section.id} style={secStyle}>
//       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
//       <SectionIntro section={section} />
//       {children.length > 0 && (
//         <EqualGrid>
//           {children.map((ch, i) => <VisualToolCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} previewIndex={i} />)}
//         </EqualGrid>
//       )}
//       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
//       <SectionNav sections={sections} currentIndex={currentIndex} />
//     </section>
//   );
// };

// const CalculatorsSection = ({ section, sections, currentIndex, data }) => {
//   const children = data?.children || [];
//   return (
//     <section id={section.id} style={secStyle}>
//       <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
//       <SectionIntro section={section} />
//       {children.length > 0 && (
//         <EqualGrid>
//           {children.map((ch, i) => <CalculatorCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
//         </EqualGrid>
//       )}
//       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
//       <SectionNav sections={sections} currentIndex={currentIndex} />
//     </section>
//   );
// };

// const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
//   const { categories, items, totalCount } = data;
//   const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
//   return (
//     <section id={section.id} style={secStyle}>
//       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
//       <SectionIntro section={section} contentKey="introContent" />
//       {categories.length > 0 && (
//         <EqualGrid>
//           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
//         </EqualGrid>
//       )}
//       {categories.map((c) => {
//         const ci = items.filter((i) => i.category === c.key);
//         if (!ci.length) return null;
//         return (
//           <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
//             <CatSubHeading>{c.name}</CatSubHeading>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
//               {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
//             </div>
//           </div>
//         );
//       })}
//       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
//       <SectionNav sections={sections} currentIndex={currentIndex} />
//     </section>
//   );
// };

// const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
//   const { categories, items, totalCount } = data;
//   const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
//   return (
//     <section id={section.id} style={secStyle}>
//       <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
//       <SectionIntro section={section} contentKey="introContent" />
//       {categories.length > 0 && (
//         <EqualGrid>
//           {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
//         </EqualGrid>
//       )}
//       {categories.map((c) => {
//         const ci = items.filter((i) => i.category === c.key);
//         if (!ci.length) return null;
//         return (
//           <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
//             <CatSubHeading>{c.name}</CatSubHeading>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
//               {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
//             </div>
//           </div>
//         );
//       })}
//       <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
//       <SectionNav sections={sections} currentIndex={currentIndex} />
//     </section>
//   );
// };

// const EditorialSection = ({ section, sections, currentIndex }) => (
//   <section id={section.id} style={secStyle}>
//     <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
//     <SectionIntro section={section} />
//     <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
//     <SectionNav sections={sections} currentIndex={currentIndex} />
//   </section>
// );

// const StandaloneSection = ({ section, sections, currentIndex }) => (
//   <section id={section.id} style={secStyle}>
//     <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
//     <SectionIntro section={section} />
//     {section.formulas?.length > 0 && (
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
//         {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
//       </div>
//     )}
//     <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
//     <SectionNav sections={sections} currentIndex={currentIndex} />
//   </section>
// );

// const SubsectionSection = ({ section, sections, currentIndex, data }) => {
//   const children = data?.children || [];
//   return (
//     <section id={section.id} style={secStyle}>
//       <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
//       <SectionIntro section={section} />
//       {children.length > 0 && (
//         <EqualGrid>
//           {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} imageAlt={ch.title} />)}
//         </EqualGrid>
//       )}
//       <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
//       <SectionNav sections={sections} currentIndex={currentIndex} />
//     </section>
//   );
// };


// /* ================================================================
//    SECTIONS CONTAINER
//    ================================================================ */

// const renderers = {
//   formulas: FormulasSection,
//   definitions: DefinitionsSection,
//   editorial: EditorialSection,
//   standalone: StandaloneSection,
//   subsection: SubsectionSection,
//   calculators: CalculatorsSection,
//   'visual-tools': VisualToolsSection,
// };

// const TYPE_ORDER = { 'visual-tools': 0, 'formulas': 1, 'definitions': 2, 'editorial': 3, 'standalone': 4, 'subsection': 5, 'calculators': 6 };

// const SectionsContainer = ({ sections, sectionData }) => {
//   const t = useTheme();
//   const sorted = useMemo(() => [...sections].sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5)), [sections]);
//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
//       {sorted.map((section, index) => {
//         const R = renderers[section.type];
//         if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
//         return <R key={section.id} section={section} sections={sorted} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
//       })}
//     </div>
//   );
// };


// /* ================================================================
//    SIDEBAR
//    ================================================================ */

// const SIDEBAR_COLLAPSED = 68;
// const SIDEBAR_EXPANDED = 290;

// const DotItem = ({ label, active, onClick }) => {
//   const [h, setH] = useState(false);
//   const lit = h || active;
//   return (
//     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
//       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
//       <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
//     </div>
//   );
// };

// const SidebarNavLink = ({ icon, label, onClick }) => {
//   const t = useTheme();
//   const [h, setH] = useState(false);
//   return (
//     <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
//       onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
//       {icon && <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}><NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} /></span>}
//       <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
//     </button>
//   );
// };

// const SidebarSubLink = ({ href, label }) => {
//   const [h, setH] = useState(false);
//   return (
//     <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
//       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
//   );
// };

// const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
//   const t = useTheme();
//   const ref = useRef(null);
//   useEffect(() => {
//     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
//     document.addEventListener('click', handler);
//     return () => document.removeEventListener('click', handler);
//   }, [open, onToggle]);
//   const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); onToggle(false); };
//   const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

//   return (
//     <aside ref={ref} style={{ position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`, width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`, height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, background: t.sidebarBg, zIndex: 90, display: 'flex', flexDirection: 'column', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden', boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none' }}>
//       <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />
//       <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
//         onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
//         onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
//         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
//         <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
//       </button>
//       <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
//         <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
//         {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
//       </div>
//       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
//         {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
//       </div>
//       <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//         <div style={heading}>On This Page</div>
//         {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
//         {subtopics?.length > 0 && (
//           <>
//             <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
//             <div style={heading}>Subtopics</div>
//             {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
//           </>
//         )}
//       </nav>
//       <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
//         <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
//       </div>
//     </aside>
//   );
// };


// /* ================================================================
//    HERO BANNER
//    ================================================================ */

// const HeroCtaButton = ({ href, icon, label, sublabel }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a href={`#${href}`} style={{
//       display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 28px', borderRadius: '10px',
//       textDecoration: 'none', color: 'white', transition: 'all 0.2s',
//       background: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
//       border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}`,
//       transform: hovered ? 'translateY(-2px)' : 'none',
//       boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none', minWidth: '240px',
//     }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
//       onClick={(e) => { e.preventDefault(); const el = document.getElementById(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); }}>
//       <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//         <NavIcon icon={icon} size={22} color="white" />
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <span style={{ fontSize: '16px', fontWeight: 700 }}>{label}</span>
//         <span style={{ fontSize: '12px', fontWeight: 500, opacity: 0.7, marginTop: '2px' }}>{sublabel}</span>
//       </div>
//       <span style={{ marginLeft: 'auto', fontSize: '18px', opacity: 0.7, transition: 'transform 0.15s', transform: hovered ? 'translateX(4px)' : 'none' }}>&rarr;</span>
//     </a>
//   );
// };

// const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats, sections }) => {
//   const t = useTheme();
//   const hasVisualTools = sections?.some((s) => s.type === 'visual-tools');
//   const hasCalculators = sections?.some((s) => s.type === 'calculators');
//   const showCtas = hasVisualTools || hasCalculators;

//   return (
//     <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
//       <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
//       <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
//         {breadcrumbUrl && (
//           <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
//             <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
//           </div>
//         )}
//         <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
//           <div style={{ flex: 1 }}>
//             <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
//             {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
//           </div>
//           {showCtas && (
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px', flexShrink: 0 }}>
//               {hasVisualTools && <HeroCtaButton href="visual-tools" icon="visual-tools" label="Visual Tools" sublabel="Interactive graphs &amp; visualizations" />}
//               {hasCalculators && <HeroCtaButton href="calculators" icon="calculators" label="Calculators" sublabel="Step-by-step equation solvers" />}
//             </div>
//           )}
//         </div>
//         {stats?.length > 0 && (
//           <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
//             {stats.map((st, i) => (
//               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
//                 <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };


// /* ================================================================
//    TOPIC STRIP
//    ================================================================ */

// const StripLink = ({ id, icon, label, onClick }) => {
//   const t = useTheme();
//   const [h, setH] = useState(false);
//   const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
//   const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
//   return (
//     <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
//       {icon && <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}><NavIcon icon={icon} size={16} color="currentColor" /></span>}
//       {label}
//     </a>
//   );
// };

// const TopicStrip = ({ sections }) => {
//   const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
//   return (
//     <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
//       {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
//     </nav>
//   );
// };


// /* ================================================================
//    SHELL
//    ================================================================ */

// const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue', article }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const t = getTheme(theme);

//   const stats = useMemo(() => {
//     const r = [];
//     Object.entries(sectionData || {}).forEach(([key, data]) => {
//       const sec = sections.find((s) => s.id === key);
//       if (!sec) return;
//       if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
//       if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
//       if (sec.type === 'calculators' && data.children) r.push({ value: data.children.length, label: 'Calculators' });
//       if (sec.type === 'visual-tools' && data.children) r.push({ value: data.children.length, label: 'Visual Tools' });
//       if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
//     });
//     return r;
//   }, [sections, sectionData]);

//   const subtopics = useMemo(() => {
//     const all = [];
//     Object.entries(sectionData || {}).forEach(([key, data]) => {
//       const sec = sections.find((s) => s.id === key);
//       if (sec?.type === 'subsection' && data?.children) {
//         data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
//       }
//     });
//     return all;
//   }, [sections, sectionData]);

//   const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

//   return (
//     <ThemeContext.Provider value={t}>
//       <Sidebar sections={sections} subtopics={subtopics} brandName={meta.title} brandSub="Learn Math Class" open={sidebarOpen} onToggle={setSidebarOpen} />
//       <div style={{ marginLeft: contentMargin, marginRight: rightOffset, marginTop: `${NAVBAR_HEIGHT}px`, minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`, transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)' }}>
//         <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} sections={sections} />
//         <TopicStrip sections={sections} />
//         <ArticleBlock article={article} />
//         <SectionsContainer sections={sections} sectionData={sectionData} />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default SectionFrontPage;



import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
import Image from 'next/image';
import { processContent } from '@/app/utils/contentProcessor';
import { getTheme } from './sectionFrontPageThemes';

const NAVBAR_HEIGHT = 55;

const ThemeContext = createContext(null);
const useTheme = () => useContext(ThemeContext);


/* ================================================================
   PLACEHOLDER SVGs FOR VISUAL TOOLS
   ================================================================ */

const placeholderSvgs = [
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="180" y2="70" stroke="${c}30" stroke-width="1"/><line x1="20" y1="70" x2="20" y2="10" stroke="${c}30" stroke-width="1"/><path d="M25,65 Q60,60 80,40 Q100,20 130,15 Q160,10 175,12" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><path d="M25,68 Q70,65 100,55 Q130,45 160,25 Q170,18 175,20" fill="none" stroke="${c}80" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="50" height="50" rx="2" fill="none" stroke="${c}40" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="90,15 140,35 130,75 80,70" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="15" r="3" fill="${c}"/><circle cx="140" cy="35" r="3" fill="${c}"/><circle cx="130" cy="75" r="3" fill="${c}"/><circle cx="80" cy="70" r="3" fill="${c}"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="35" fill="none" stroke="${c}30" stroke-width="1"/><line x1="100" y1="45" x2="130" y2="25" stroke="${c}" stroke-width="2"/><line x1="100" y1="45" x2="75" y2="70" stroke="${c}80" stroke-width="1.5"/><circle cx="100" cy="45" r="3" fill="${c}"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="190" y2="45" stroke="${c}20" stroke-width="1"/><path d="M10,45 Q35,10 60,45 Q85,80 110,45 Q135,10 160,45 Q185,80 190,55" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}30" stroke-width="1"/><rect x="35" y="30" width="24" height="45" rx="3" fill="${c}30"/><rect x="70" y="15" width="24" height="60" rx="3" fill="${c}60"/><rect x="105" y="40" width="24" height="35" rx="3" fill="${c}45"/><rect x="140" y="22" width="24" height="53" rx="3" fill="${c}"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="80" x2="180" y2="80" stroke="${c}20" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="5" stroke="${c}20" stroke-width="1"/><path d="M30,80 Q100,5 170,80" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="12" r="3" fill="${c}"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="20" y1="75" x2="20" y2="8" stroke="${c}20" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="${c}40"/><circle cx="65" cy="48" r="4" fill="${c}60"/><circle cx="85" cy="52" r="4" fill="${c}50"/><circle cx="110" cy="35" r="4" fill="${c}70"/><circle cx="130" cy="28" r="4" fill="${c}80"/><circle cx="155" cy="18" r="4" fill="${c}"/><path d="M35,62 Q95,45 160,15" fill="none" stroke="${c}50" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="55" r="3" fill="${c}40"/><line x1="60" y1="55" x2="140" y2="25" stroke="${c}" stroke-width="2"/><polygon points="140,25 132,30 134,22" fill="${c}"/><line x1="60" y1="55" x2="150" y2="65" stroke="${c}70" stroke-width="2"/><polygon points="150,65 142,60 144,68" fill="${c}70"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="45" x2="185" y2="45" stroke="${c}40" stroke-width="2"/><line x1="50" y1="38" x2="50" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="100" y1="38" x2="100" y2="52" stroke="${c}60" stroke-width="1.5"/><line x1="150" y1="38" x2="150" y2="52" stroke="${c}60" stroke-width="1.5"/><circle cx="75" cy="45" r="5" fill="${c}" stroke="white" stroke-width="1.5"/><circle cx="130" cy="45" r="5" fill="none" stroke="${c}" stroke-width="2"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="12" width="100" height="66" rx="0" fill="none" stroke="${c}40" stroke-width="1.5"/><line x1="83" y1="12" x2="83" y2="78" stroke="${c}20" stroke-width="1"/><line x1="117" y1="12" x2="117" y2="78" stroke="${c}20" stroke-width="1"/><line x1="50" y1="34" x2="150" y2="34" stroke="${c}20" stroke-width="1"/><line x1="50" y1="56" x2="150" y2="56" stroke="${c}20" stroke-width="1"/><circle cx="67" cy="23" r="3" fill="${c}60"/><circle cx="100" cy="23" r="3" fill="${c}"/><circle cx="133" cy="45" r="3" fill="${c}"/><circle cx="67" cy="67" r="3" fill="${c}"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="45" r="38" fill="none" stroke="${c}25" stroke-width="1"/><path d="M100,45 L138,45 A38,38 0 0,0 119,14 Z" fill="${c}20" stroke="${c}" stroke-width="1.5"/><path d="M100,45 L119,14 A38,38 0 0,0 70,18 Z" fill="${c}35" stroke="${c}" stroke-width="1.5"/><circle cx="100" cy="45" r="2.5" fill="${c}"/></svg>`,
  (c) => `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="75" x2="185" y2="75" stroke="${c}20" stroke-width="1"/><line x1="25" y1="80" x2="25" y2="8" stroke="${c}20" stroke-width="1"/><path d="M30,65 H60 V50 H90 V35 H120 V20 H150 V12 H175" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="65" r="3" fill="${c}"/><circle cx="90" cy="50" r="3" fill="${c}"/><circle cx="120" cy="35" r="3" fill="${c}"/><circle cx="150" cy="20" r="3" fill="${c}"/></svg>`,
];

function getPlaceholderSvg(index, color) {
  return placeholderSvgs[index % placeholderSvgs.length](color);
}


/* ================================================================
   NAV ICON
   ================================================================ */

const iconMap = {
  formulas: ({ size, color }) => <span style={{ fontSize: size, color, fontStyle: 'italic', fontWeight: 600 }}>&#402;</span>,
  definitions: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600, fontStyle: 'normal', letterSpacing: '-0.5px' }}>Aa</span>,
  calculators: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <rect x="7" y="5" width="10" height="4" rx="1" />
      <circle cx="8.5" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="13" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="13" r="0.8" fill={color} stroke="none" />
      <circle cx="8.5" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="16.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="16.5" r="0.8" fill={color} stroke="none" />
      <circle cx="8.5" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="12" cy="19.5" r="0.8" fill={color} stroke="none" /><circle cx="15.5" cy="19.5" r="0.8" fill={color} stroke="none" />
    </svg>
  ),
  'visual-tools': ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  subsection: ({ size, color }) => <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>,
};

const NavIcon = ({ icon, size = 16, color = 'currentColor' }) => {
  const renderer = iconMap[icon];
  if (renderer) return renderer({ size, color });
  if (typeof icon === 'string' && icon.length <= 4) return <span style={{ fontSize: size, color, fontWeight: 600 }}>{icon}</span>;
  return <span style={{ fontSize: size, color, fontWeight: 600 }}>&sect;</span>;
};


/* ================================================================
   EQUAL GRID
   ================================================================ */

const EqualGrid = ({ children }) => {
  const items = React.Children.toArray(children);
  const rows = [];
  for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));
  return (
    <div>
      {rows.map((row, ri) => (
        <div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 1fr)`, gap: '16px', marginBottom: ri < rows.length - 1 ? '16px' : 0 }}>
          {row}
        </div>
      ))}
    </div>
  );
};


/* ================================================================
   INTRO PROSE — handles text, images, and SVG
   layout: 'horizontal' | 'vertical' (default: 'horizontal')
   imagePosition: 'left' | 'right' | 'top' | 'bottom' (default: 'right')
   When no image/svg: full-width text.
   ================================================================ */

const IntroProse = ({ content, image, imageAlt, svg, layout = 'horizontal', imagePosition = 'right' }) => {
  const t = useTheme();
  if (!content && !image && !svg) return null;

  const hasVisual = !!(image || svg);
  const isVertical = layout === 'vertical' || imagePosition === 'top' || imagePosition === 'bottom';
  const visualFirst = imagePosition === 'left' || imagePosition === 'top';

  const textBlock = content ? (
    <div style={{
      fontFamily: "'Source Serif 4', Georgia, serif",
      fontSize: '1.31rem', lineHeight: 1.75, color: t.textSecondary,
      borderLeft: `3px solid ${t.cardAccent}`,
      paddingLeft: '28px',
      paddingTop: '8px',
      paddingBottom: '8px',
      flex: isVertical ? 'none' : 1,
    }}>
      {typeof content === 'string' ? processContent(content) : content}
    </div>
  ) : null;

  const visualBlock = hasVisual ? (
    <div style={{
      flex: isVertical ? 'none' : 1,
      minHeight: isVertical ? '240px' : '200px',
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fafafa',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {image && (
        <Image
          src={image}
          alt={imageAlt || ''}
          fill
          sizes={isVertical ? '100vw' : '50vw'}
          style={{ objectFit: 'cover' }}
        />
      )}
      {svg && !image && (
        <div style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          dangerouslySetInnerHTML={{ __html: svg }} />
      )}
    </div>
  ) : null;

  // No visual — full width text
  if (!hasVisual) {
    return (
      <div style={{ marginBottom: '28px' }}>
        {textBlock}
      </div>
    );
  }

  // Vertical layout
  if (isVertical) {
    return (
      <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
      </div>
    );
  }

  // Horizontal layout
  return (
    <div style={{ marginBottom: '28px', display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
      {visualFirst ? <>{visualBlock}{textBlock}</> : <>{textBlock}{visualBlock}</>}
    </div>
  );
};


/* ================================================================
   ATOMS
   ================================================================ */

const SectionHeader = ({ title, badge, link, linkText }) => {
  const t = useTheme();
  const [linkHovered, setLinkHovered] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${t.headerBorderColor}` }}>
      <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.19rem', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h2>
      {badge && <span style={{ fontSize: '15px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: t.badgeBg, color: t.badgeColor }}>{badge}</span>}
      {link && (
        <a href={link} style={{
          marginLeft: 'auto', fontSize: '14px', fontWeight: 700, color: '#ffffff', textDecoration: 'none',
          background: linkHovered ? t.buttonBgHover : t.buttonBg, padding: '7px 18px', borderRadius: '6px',
          transition: 'all 0.15s', whiteSpace: 'nowrap',
          transform: linkHovered ? 'translateY(-1px)' : 'none',
          boxShadow: linkHovered ? `0 3px 10px ${t.buttonBgHover}40` : 'none',
        }} onMouseEnter={() => setLinkHovered(true)} onMouseLeave={() => setLinkHovered(false)}>
          {linkText || 'See All'} &rarr;
        </a>
      )}
    </div>
  );
};

const SectionFooterLink = ({ link, linkText }) => {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);
  if (!link) return null;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 8px' }}>
      <a href={link} style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 700, color: '#ffffff',
        background: hovered ? t.buttonBgHover : t.buttonBg, padding: '10px 28px', borderRadius: '8px',
        textDecoration: 'none', transition: 'all 0.15s',
        transform: hovered ? 'translateY(-1px)' : 'none',
        boxShadow: hovered ? `0 4px 14px ${t.buttonBgHover}40` : `0 2px 6px ${t.buttonBg}25`,
      }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {linkText || 'View All'} &rarr;
      </a>
    </div>
  );
};

const SectionNav = ({ sections, currentIndex }) => {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;
  const t = useTheme();
  const btnStyle = { background: 'none', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '6px 14px', fontSize: '15px', fontWeight: 600, color: t.textSecondary, cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'all 0.15s' };
  const hover = {
    onMouseEnter: (e) => Object.assign(e.target.style, { borderColor: t.buttonBg, color: t.buttonBgHover, background: t.stripActiveBg }),
    onMouseLeave: (e) => Object.assign(e.target.style, { borderColor: '#e0e0e0', color: t.textSecondary, background: 'none' }),
  };
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '10px', borderTop: '1px solid #ebebeb' }}>
      {hasPrev ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex - 1].id)}>&larr; Prev: {sections[currentIndex - 1].title}</button> : <span />}
      <button style={btnStyle} {...hover} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr; Back to Top</button>
      {hasNext ? <button style={btnStyle} {...hover} onClick={() => scrollTo(sections[currentIndex + 1].id)}>Next: {sections[currentIndex + 1].title} &rarr;</button> : <span />}
    </div>
  );
};

const CategoryCard = ({ title, count, description, href, onClick, image, imageAlt, svg }) => {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);
  const Tag = href ? 'a' : 'div';
  const hasVisual = !!(image || svg);
  const base = { display: 'flex', flexDirection: 'column', gap: hasVisual ? 0 : '6px', background: '#ffffff', border: '1px solid #e0e0e0', borderLeft: `4px solid ${t.cardAccent}`, borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'all 0.15s', position: 'relative', minHeight: '100px', overflow: 'hidden' };
  const hov = { borderLeftColor: t.cardAccentHover, boxShadow: '0 4px 14px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' };
  const tagProps = href ? { href } : { onClick, style: { cursor: onClick ? 'pointer' : 'default' } };
  return (
    <Tag {...tagProps} style={{ ...base, ...(hovered ? hov : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hasVisual && (
        <div style={{ position: 'relative', width: '100%', height: '140px', borderBottom: '1px solid #ebebeb', flexShrink: 0, overflow: 'hidden', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {image && <Image src={image} alt={imageAlt || title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />}
          {svg && !image && <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg }} />}
        </div>
      )}
      <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
        <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: t.headingColor, margin: 0 }}>{title}</h3>
        {count != null && <span style={{ fontSize: '13.75px', color: t.cardAccent, fontWeight: 600 }}>{count} {count === 1 ? 'item' : 'items'}</span>}
        {description && <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5, paddingBottom: '24px' }}>{typeof description === 'string' ? processContent(description) : description}</span>}
      </div>
      {href && (
        <span style={{
          position: 'absolute', bottom: '12px', right: '14px',
          fontSize: '11.5px', fontWeight: 600, color: hovered ? t.buttonBg : t.textMuted,
          border: `1px solid ${hovered ? t.buttonBg : '#e0e0e0'}`,
          padding: '3px 10px', borderRadius: '4px', transition: 'all 0.15s',
        }}>Learn more &rarr;</span>
      )}
    </Tag>
  );
};

const FormulaChip = ({ label, tex }) => {
  const t = useTheme();
  const mathRef = useRef(null);
  useEffect(() => {
    if (mathRef.current && tex && typeof window !== 'undefined' && window.katex) {
      try { window.katex.render(tex, mathRef.current, { displayMode: false, throwOnError: false }); }
      catch (e) { mathRef.current.textContent = tex; }
    }
  }, [tex]);
  return (
    <div style={{ background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', padding: '12px 14px', textAlign: 'center' }}>
      {label && <div style={{ fontSize: '12.5px', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>{label}</div>}
      <div style={{ fontSize: '18.75px', color: t.textPrimary }} ref={mathRef} />
    </div>
  );
};

const DefinitionItem = ({ term, definition }) => {
  const t = useTheme();
  return (
    <div style={{ padding: '12px 16px', background: '#ffffff', border: '1px solid #ebebeb', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
      <span style={{ fontWeight: 700, fontSize: '16.25px', color: t.termColor, minWidth: '100px', flexShrink: 0 }}>{term}</span>
      <span style={{ fontSize: '15.6px', color: t.textSecondary, lineHeight: 1.5 }}>
        {typeof definition === 'string' ? processContent(definition) : definition}
      </span>
    </div>
  );
};

const CalculatorCard = ({ title, description, href, image, imageAlt, svg }) => {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);
  const hasVisual = !!(image || svg);
  return (
    <a href={href} style={{
      display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
      textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
      borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
      boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
      transform: hovered ? 'translateY(-3px)' : 'none',
    }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hasVisual && (
        <div style={{ position: 'relative', width: '100%', height: '140px', borderBottom: '1px solid #ebebeb', flexShrink: 0, overflow: 'hidden', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {image && <Image src={image} alt={imageAlt || title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />}
          {svg && !image && <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg }} />}
        </div>
      )}
      <div style={{ padding: '24px 22px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <NavIcon icon="calculators" size={22} color={t.heroBg} />
          </div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Calculator</span>
        </div>
        <h3 style={{ fontSize: '17px', fontWeight: 700, color: t.headingColor, marginBottom: '6px' }}>{title}</h3>
        {description && <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{typeof description === 'string' ? processContent(description) : description}</p>}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '14px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open calculator &rarr;</span>
      </div>
    </a>
  );
};

const VisualToolCard = ({ title, description, href, image, imageAlt, svg, previewIndex }) => {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);
  const previewContent = (image || svg) ? null : getPlaceholderSvg(previewIndex || 0, t.buttonBgHover);
  return (
    <a href={href} style={{
      display: 'block', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px',
      textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', overflow: 'hidden',
      borderColor: hovered ? t.buttonBgHover : '#e0e0e0',
      boxShadow: hovered ? `0 6px 20px ${t.heroBg}18` : 'none',
      transform: hovered ? 'translateY(-3px)' : 'none',
    }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.stripActiveBg, borderBottom: `1px solid ${t.badgeBg}`, overflow: 'hidden' }}>
        {image ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={image} alt={imageAlt || title || ''} fill sizes="33vw" style={{ objectFit: 'cover' }} />
          </div>
        ) : svg ? (
          <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg }} />
        ) : (
          <div style={{ width: '200px' }} dangerouslySetInnerHTML={{ __html: previewContent }} />
        )}
      </div>
      <div style={{ padding: '18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: t.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <NavIcon icon="visual-tools" size={18} color={t.heroBg} />
          </div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: t.badgeBg, color: t.badgeColor }}>Visual Tool</span>
        </div>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: t.headingColor, marginBottom: '5px' }}>{title}</h3>
        {description && <p style={{ fontSize: '13.5px', color: t.textSecondary, lineHeight: 1.5, margin: 0 }}>{typeof description === 'string' ? processContent(description) : description}</p>}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '8px' : '4px', fontSize: '13px', fontWeight: 700, marginTop: '12px', color: t.buttonBg, transition: 'gap 0.15s' }}>Open tool &rarr;</span>
      </div>
    </a>
  );
};


/* ================================================================
   ARTICLE BLOCK
   ================================================================ */

const ArticleBlock = ({ article }) => {
  const t = useTheme();
  if (!article) return null;
  const { title, content } = typeof article === 'string' ? { title: null, content: article } : article;
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
      <div style={{ background: t.articleBg, border: `1px solid ${t.articleBorder}`, borderRadius: '10px', padding: '32px 40px', margin: '28px 0 8px' }}>
        <div style={{ width: '40px', height: '3px', background: t.articleAccent, borderRadius: '2px', marginBottom: '16px' }} />
        {title && <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: t.articleHeading, marginBottom: '12px' }}>{title}</h3>}
        <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.8, color: t.articleText }}>
          {typeof content === 'string' ? processContent(content) : content}
        </div>
      </div>
    </div>
  );
};


/* ================================================================
   SECTION RENDERERS
   ================================================================ */

const catGroup = { margin: '28px 0 20px', scrollMarginTop: `${NAVBAR_HEIGHT + 20}px` };
const secStyle = { marginBottom: '48px', scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` };

const CatSubHeading = ({ children }) => {
  const t = useTheme();
  return <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.44rem', fontWeight: 700, color: t.headingColor, paddingBottom: '8px', marginBottom: '14px', borderBottom: '1px solid #e0e0e0' }}>{children}</h3>;
};

/** Helper: renders IntroProse with visual props from section */
const SectionIntro = ({ section, contentKey = 'content' }) => {
  const text = section[contentKey] || section.introContent || section.content;
  if (!text && !section.image && !section.svg) return null;
  return (
    <IntroProse
      content={text}
      image={section.image}
      imageAlt={section.imageAlt}
      svg={section.svg}
      layout={section.introLayout}
      imagePosition={section.introImagePosition}
    />
  );
};

const VisualToolsSection = ({ section, sections, currentIndex, data }) => {
  const children = data?.children || [];
  return (
    <section id={section.id} style={secStyle}>
      <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
      <SectionIntro section={section} />
      {children.length > 0 && (
        <EqualGrid>
          {children.map((ch, i) => <VisualToolCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} previewIndex={i} />)}
        </EqualGrid>
      )}
      <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
      <SectionNav sections={sections} currentIndex={currentIndex} />
    </section>
  );
};

const CalculatorsSection = ({ section, sections, currentIndex, data }) => {
  const children = data?.children || [];
  return (
    <section id={section.id} style={secStyle}>
      <SectionHeader title={section.title} badge={`${children.length} tools`} link={section.link} linkText={`Explore ${section.title}`} />
      <SectionIntro section={section} />
      {children.length > 0 && (
        <EqualGrid>
          {children.map((ch, i) => <CalculatorCard key={i} title={ch.title} description={ch.description} href={ch.href} />)}
        </EqualGrid>
      )}
      <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
      <SectionNav sections={sections} currentIndex={currentIndex} />
    </section>
  );
};

const FormulasSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
  const { categories, items, totalCount } = data;
  const scrollCat = (key) => { const el = document.getElementById(`formula-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
  return (
    <section id={section.id} style={secStyle}>
      <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
      <SectionIntro section={section} contentKey="introContent" />
      {categories.length > 0 && (
        <EqualGrid>
          {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
        </EqualGrid>
      )}
      {categories.map((c) => {
        const ci = items.filter((i) => i.category === c.key);
        if (!ci.length) return null;
        return (
          <div key={c.key} id={`formula-cat-${c.key}`} style={catGroup}>
            <CatSubHeading>{c.name}</CatSubHeading>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
              {ci.map((item, i) => <FormulaChip key={`${c.key}-${i}`} label={item.title} tex={item.formula} />)}
            </div>
          </div>
        );
      })}
      <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
      <SectionNav sections={sections} currentIndex={currentIndex} />
    </section>
  );
};

const DefinitionsSection = ({ section, sections, currentIndex, data, categoryExplanations }) => {
  const { categories, items, totalCount } = data;
  const scrollCat = (key) => { const el = document.getElementById(`def-cat-${key}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 20, behavior: 'smooth' }); };
  return (
    <section id={section.id} style={secStyle}>
      <SectionHeader title={section.title} badge={`${totalCount} items`} link={section.link} linkText={`See All ${section.title}`} />
      <SectionIntro section={section} contentKey="introContent" />
      {categories.length > 0 && (
        <EqualGrid>
          {categories.map((c) => <CategoryCard key={c.key} title={c.name} count={c.count} description={categoryExplanations?.[c.name]} onClick={() => scrollCat(c.key)} />)}
        </EqualGrid>
      )}
      {categories.map((c) => {
        const ci = items.filter((i) => i.category === c.key);
        if (!ci.length) return null;
        return (
          <div key={c.key} id={`def-cat-${c.key}`} style={catGroup}>
            <CatSubHeading>{c.name}</CatSubHeading>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {ci.map((item, i) => <DefinitionItem key={`${c.key}-${i}`} term={item.title} definition={item.description} />)}
            </div>
          </div>
        );
      })}
      <SectionFooterLink link={section.link} linkText={`View All ${section.title}`} />
      <SectionNav sections={sections} currentIndex={currentIndex} />
    </section>
  );
};

const EditorialSection = ({ section, sections, currentIndex }) => (
  <section id={section.id} style={secStyle}>
    <SectionHeader title={section.title} link={section.link} linkText={section.linkText} />
    <SectionIntro section={section} />
    <SectionFooterLink link={section.link} linkText={section.linkText || `Explore ${section.title}`} />
    <SectionNav sections={sections} currentIndex={currentIndex} />
  </section>
);

const StandaloneSection = ({ section, sections, currentIndex }) => (
  <section id={section.id} style={secStyle}>
    <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
    <SectionIntro section={section} />
    {section.formulas?.length > 0 && (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', margin: '16px 0' }}>
        {section.formulas.map((f, i) => <FormulaChip key={i} label={f.title} tex={f.formula} />)}
      </div>
    )}
    <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
    <SectionNav sections={sections} currentIndex={currentIndex} />
  </section>
);

const SubsectionSection = ({ section, sections, currentIndex, data }) => {
  const children = data?.children || [];
  return (
    <section id={section.id} style={secStyle}>
      <SectionHeader title={section.title} link={section.link} linkText={`Explore ${section.title}`} />
      <SectionIntro section={section} />
      {children.length > 0 && (
        <EqualGrid>
          {children.map((ch, i) => <CategoryCard key={i} title={ch.title} description={ch.description} href={ch.href} image={ch.image} imageAlt={ch.imageAlt || ch.title} svg={ch.svg} />)}
        </EqualGrid>
      )}
      <SectionFooterLink link={section.link} linkText={`Explore ${section.title}`} />
      <SectionNav sections={sections} currentIndex={currentIndex} />
    </section>
  );
};


/* ================================================================
   SECTIONS CONTAINER
   ================================================================ */

const renderers = {
  formulas: FormulasSection,
  definitions: DefinitionsSection,
  editorial: EditorialSection,
  standalone: StandaloneSection,
  subsection: SubsectionSection,
  calculators: CalculatorsSection,
  'visual-tools': VisualToolsSection,
};

const TYPE_ORDER = { 'visual-tools': 0, 'formulas': 1, 'definitions': 2, 'editorial': 3, 'standalone': 4, 'subsection': 5, 'calculators': 6 };

const SectionsContainer = ({ sections, sectionData }) => {
  const t = useTheme();
  const sorted = useMemo(() => [...sections].sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5)), [sections]);
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg }}>
      {sorted.map((section, index) => {
        const R = renderers[section.type];
        if (!R) { console.warn(`No renderer for type: ${section.type}`); return null; }
        return <R key={section.id} section={section} sections={sorted} currentIndex={index} data={sectionData?.[section.id]} categoryExplanations={section.categoryExplanations} />;
      })}
    </div>
  );
};


/* ================================================================
   SIDEBAR
   ================================================================ */

const SIDEBAR_COLLAPSED = 68;
const SIDEBAR_EXPANDED = 290;

const DotItem = ({ label, active, onClick }) => {
  const [h, setH] = useState(false);
  const lit = h || active;
  return (
    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lit ? 'white' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', transform: lit ? 'scale(1.5)' : 'scale(1)', position: 'relative' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}>
      <div style={{ position: 'absolute', left: '22px', top: '50%', transform: 'translateY(-50%)', background: '#2c3e50', color: 'white', fontSize: '15px', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.15s', zIndex: 10 }}>{label}</div>
    </div>
  );
};

const SidebarNavLink = ({ icon, label, onClick }) => {
  const t = useTheme();
  const [h, setH] = useState(false);
  return (
    <button style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 20px', fontSize: '16.875px', fontWeight: 600, color: h ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', backgroundColor: h ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: h ? `3px solid ${t.sidebarAccent}` : '3px solid transparent', lineHeight: 1.4 }}
      onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {icon && <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2px' }}><NavIcon icon={icon} size={16} color={h ? 'white' : 'rgba(255,255,255,0.6)'} /></span>}
      <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
    </button>
  );
};

const SidebarSubLink = ({ href, label }) => {
  const [h, setH] = useState(false);
  return (
    <a href={href} style={{ display: 'block', padding: '8px 20px 8px 48px', fontSize: '15.6px', fontWeight: 500, textDecoration: 'none', textTransform: 'capitalize', transition: 'all 0.15s', color: h ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
  );
};

const Sidebar = ({ sections, subtopics, brandName, brandSub, open, onToggle }) => {
  const t = useTheme();
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [open, onToggle]);
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); onToggle(false); };
  const heading = { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.3)', padding: '12px 20px 8px' };

  return (
    <aside ref={ref} style={{ position: 'fixed', left: 0, top: `${NAVBAR_HEIGHT}px`, width: open ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`, height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, background: t.sidebarBg, zIndex: 90, display: 'flex', flexDirection: 'column', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden', boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none' }}>
      <style dangerouslySetInnerHTML={{ __html: `.sfp-sidebar-nav::-webkit-scrollbar { display: none; }` }} />
      <button style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        onClick={() => onToggle(!open)} aria-label="Toggle sidebar"
        onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'none'; }}>
        <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
      <div style={{ padding: '14px 20px 10px', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: '20px', fontWeight: 700, color: 'white', display: 'block', marginBottom: '2px' }}>{brandName || 'Section'}</span>
        {brandSub && <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
      </div>
      <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
        {sections.map((sec, i) => <DotItem key={sec.id} label={sec.title} active={i === 0} onClick={() => scrollTo(sec.id)} />)}
      </div>
      <nav className="sfp-sidebar-nav" style={{ display: open ? 'flex' : 'none', flexDirection: 'column', padding: '8px 0', flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div style={heading}>On This Page</div>
        {sections.map((sec) => <SidebarNavLink key={sec.id} icon={sec.navIcon} label={sec.title} onClick={() => scrollTo(sec.id)} />)}
        {subtopics?.length > 0 && (
          <>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 20px' }} />
            <div style={heading}>Subtopics</div>
            {subtopics.map((sub, i) => <SidebarSubLink key={i} href={sub.href} label={sub.title} />)}
          </>
        )}
      </nav>
      <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transition: 'opacity 0.15s', transitionDelay: open ? '0.1s' : '0s', flexShrink: 0 }}>
        <span style={{ fontSize: '13.75px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Learn Math Class</span>
      </div>
    </aside>
  );
};


/* ================================================================
   HERO BANNER
   ================================================================ */

const HeroCtaButton = ({ href, icon, label, sublabel }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={`#${href}`} style={{
      display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 28px', borderRadius: '10px',
      textDecoration: 'none', color: 'white', transition: 'all 0.2s',
      background: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
      border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}`,
      transform: hovered ? 'translateY(-2px)' : 'none',
      boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none', minWidth: '240px',
    }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); const el = document.getElementById(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <NavIcon icon={icon} size={22} color="white" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '16px', fontWeight: 700 }}>{label}</span>
        <span style={{ fontSize: '12px', fontWeight: 500, opacity: 0.7, marginTop: '2px' }}>{sublabel}</span>
      </div>
      <span style={{ marginLeft: 'auto', fontSize: '18px', opacity: 0.7, transition: 'transform 0.15s', transform: hovered ? 'translateX(4px)' : 'none' }}>&rarr;</span>
    </a>
  );
};

const HeroBanner = ({ title, subtitle, breadcrumbUrl, stats, sections }) => {
  const t = useTheme();
  const hasVisualTools = sections?.some((s) => s.type === 'visual-tools');
  const hasCalculators = sections?.some((s) => s.type === 'calculators');
  const showCtas = hasVisualTools || hasCalculators;

  return (
    <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {breadcrumbUrl && (
          <div style={{ fontSize: '16.25px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 500 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a> &rsaquo; {title}
          </div>
        )}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
            {subtitle && <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '32px' }}>{subtitle}</p>}
          </div>
          {showCtas && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px', flexShrink: 0 }}>
              {hasVisualTools && <HeroCtaButton href="visual-tools" icon="visual-tools" label="Visual Tools" sublabel="Interactive graphs &amp; visualizations" />}
              {hasCalculators && <HeroCtaButton href="calculators" icon="calculators" label="Calculators" sublabel="Step-by-step equation solvers" />}
            </div>
          )}
        </div>
        {stats?.length > 0 && (
          <div style={{ display: 'flex', gap: '36px', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
            {stats.map((st, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16.25px', color: 'rgba(255,255,255,0.55)' }}>
                <span style={{ fontWeight: 700, fontSize: '25px', color: 'white' }}>{st.value}</span> {st.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};


/* ================================================================
   TOPIC STRIP
   ================================================================ */

const StripLink = ({ id, icon, label, onClick }) => {
  const t = useTheme();
  const [h, setH] = useState(false);
  const base = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.15s', color: t.stripTextColor };
  const hov = { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder };
  return (
    <a href={`#${id}`} style={{ ...base, ...(h ? hov : {}) }} onClick={(e) => onClick(e, id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {icon && <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}><NavIcon icon={icon} size={16} color="currentColor" /></span>}
      {label}
    </a>
  );
};

const TopicStrip = ({ sections }) => {
  const scrollTo = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' }); };
  return (
    <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {sections.map((sec) => <StripLink key={sec.id} id={sec.id} icon={sec.navIcon} label={sec.title} onClick={scrollTo} />)}
    </nav>
  );
};


/* ================================================================
   SHELL
   ================================================================ */

const SectionFrontPage = ({ meta, sections, sectionData, rightOffset = '45px', theme = 'deepBlue', article }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = getTheme(theme);

  const stats = useMemo(() => {
    const r = [];
    Object.entries(sectionData || {}).forEach(([key, data]) => {
      const sec = sections.find((s) => s.id === key);
      if (!sec) return;
      if (sec.type === 'formulas' && data.totalCount) r.push({ value: data.totalCount, label: 'Formulas' });
      if (sec.type === 'definitions' && data.totalCount) r.push({ value: data.totalCount, label: 'Definitions' });
      if (sec.type === 'calculators' && data.children) r.push({ value: data.children.length, label: 'Calculators' });
      if (sec.type === 'visual-tools' && data.children) r.push({ value: data.children.length, label: 'Visual Tools' });
      if (sec.type === 'subsection' && data.children) r.push({ value: data.children.length, label: `${sec.title} Topics` });
    });
    return r;
  }, [sections, sectionData]);

  const subtopics = useMemo(() => {
    const all = [];
    Object.entries(sectionData || {}).forEach(([key, data]) => {
      const sec = sections.find((s) => s.id === key);
      if (sec?.type === 'subsection' && data?.children) {
        data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
      }
    });
    return all;
  }, [sections, sectionData]);

  const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

  return (
    <ThemeContext.Provider value={t}>
      <Sidebar sections={sections} subtopics={subtopics} brandName={meta.title} brandSub="Learn Math Class" open={sidebarOpen} onToggle={setSidebarOpen} />
      <div style={{ marginLeft: contentMargin, marginRight: rightOffset, marginTop: `${NAVBAR_HEIGHT}px`, minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`, transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)' }}>
        <HeroBanner title={meta.title} subtitle={meta.subtitle} breadcrumbUrl={meta.breadcrumbUrl} stats={stats} sections={sections} />
        <TopicStrip sections={sections} />
        <ArticleBlock article={article} />
        <SectionsContainer sections={sections} sectionData={sectionData} />
      </div>
    </ThemeContext.Provider>
  );
};

export default SectionFrontPage;

export {
  ThemeContext,
  useTheme,
  NavIcon,
  EqualGrid,
  IntroProse,
  ArticleBlock,
  SectionNav,
  Sidebar,
  TopicStrip,
  SectionHeader,
  SectionFooterLink,
  CategoryCard,
  CalculatorCard,
  VisualToolCard,
  FormulaChip,
  DefinitionItem,
  placeholderSvgs,
  getPlaceholderSvg,
  NAVBAR_HEIGHT,
  SIDEBAR_COLLAPSED,
  SIDEBAR_EXPANDED,
};