import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { processContent } from '@/app/utils/contentProcessor';
import { getTheme } from './sectionFrontPageThemes';
import {
  ThemeContext,
  useTheme,
  NavIcon,
  EqualGrid,
  Sidebar,
  TopicStrip,
  CalculatorCard,
  VisualToolCard,
  NAVBAR_HEIGHT,
  SIDEBAR_COLLAPSED,
  SIDEBAR_EXPANDED,
} from './SectionFrontPage';


/* ================================================================
   TOOL HERO — fills viewport with article
   ================================================================ */

const ToolHeroBanner = ({ title, subtitle, breadcrumbUrl, toolCount, toolType, cardsAnchor }) => {
  const t = useTheme();
  const [ctaHovered, setCtaHovered] = useState(false);

  const scrollToCards = (e) => {
    e.preventDefault();
    const el = document.getElementById(cardsAnchor || 'tool-cards');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10, behavior: 'smooth' });
  };

  const ctaLabel = toolType === 'visual-tools' ? 'Explore Tools' : 'Get Started';
  const ctaIcon = toolType === 'visual-tools' ? 'visual-tools' : 'calculators';

  return (
    <header style={{ background: t.heroBg, color: 'white', padding: '48px 48px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-40%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {breadcrumbUrl && (
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontWeight: 500 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
            {breadcrumbUrl.split('/').filter(Boolean).slice(0, -1).map((seg, i, arr) => (
              <span key={i}>
                {' '}&rsaquo;{' '}
                <a href={'/' + arr.slice(0, i + 1).join('/')} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', textTransform: 'capitalize' }}>{seg.replace(/-/g, ' ')}</a>
              </span>
            ))}
            {' '}&rsaquo; {title}
          </div>
        )}
        <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.02em', marginTop: 0 }}>{title}</h1>
        {subtitle && <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '28px' }}>{subtitle}</p>}
        <a href={`#${cardsAnchor || 'tool-cards'}`} onClick={scrollToCards} style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          background: ctaHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.12)',
          border: `1px solid ${ctaHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.2)'}`,
          color: 'white', padding: '14px 32px', borderRadius: '10px',
          fontSize: '16px', fontWeight: 700, textDecoration: 'none',
          transition: 'all 0.2s',
          transform: ctaHovered ? 'translateY(-2px)' : 'none',
          boxShadow: ctaHovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
        }} onMouseEnter={() => setCtaHovered(true)} onMouseLeave={() => setCtaHovered(false)}>
          <NavIcon icon={ctaIcon} size={20} color="white" />
          {ctaLabel} &rarr;
        </a>
        <div style={{ display: 'flex', gap: '32px', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {toolCount > 0 && (
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 700, fontSize: '22px', color: 'white' }}>{toolCount}</span>
              {toolType === 'visual-tools' ? 'Visual Tools' : 'Calculators'}
            </div>
          )}
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '22px', color: 'white' }}>100%</span> Free
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '22px', color: 'white' }}>Step-by-step</span> Solutions
          </div>
        </div>
      </div>
    </header>
  );
};


/* ================================================================
   TOOL ARTICLE — between hero and cards, fills remaining viewport
   ================================================================ */

const ToolArticle = ({ article, image, imageAlt, svg }) => {
  const t = useTheme();
  if (!article) return null;

  const { title, content } = typeof article === 'string' ? { title: null, content: article } : article;
  const hasVisual = !!(image || svg);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
      <div style={{
        background: t.articleBg, border: `1px solid ${t.articleBorder}`,
        borderRadius: '10px', padding: '0', margin: '28px 0 8px',
        overflow: 'hidden',
        display: hasVisual ? 'flex' : 'block',
      }}>
        <div style={{ padding: '32px 40px', flex: 1 }}>
          <div style={{ width: '40px', height: '3px', background: t.articleAccent, borderRadius: '2px', marginBottom: '16px' }} />
          {title && <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: t.articleHeading, marginBottom: '12px' }}>{title}</h3>}
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.8, color: t.articleText }}>
            {typeof content === 'string' ? processContent(content) : content}
          </div>
        </div>
        {hasVisual && (
          <div style={{ flex: 1, position: 'relative', minHeight: '200px', overflow: 'hidden' }}>
            {image && <Image src={image} alt={imageAlt || ''} fill sizes="50vw" style={{ objectFit: 'cover' }} />}
            {svg && !image && (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#fafafa' }}
                dangerouslySetInnerHTML={{ __html: svg }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};


/* ================================================================
   TOOL STRIP — links to sibling sections
   ================================================================ */

const ToolStripLink = ({ sec, isActive }) => {
  const t = useTheme();
  const [h, setH] = useState(false);
  const baseStyle = { display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', textDecoration: 'none', fontSize: '16.25px', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: `2px solid ${isActive ? t.stripActiveBorder : 'transparent'}`, transition: 'all 0.15s', color: isActive ? t.stripActiveColor : t.stripTextColor, background: isActive ? t.stripActiveBg : 'transparent' };
  const hovStyle = !isActive ? { color: t.stripActiveColor, background: t.stripActiveBg, borderBottomColor: t.stripActiveBorder } : {};
  return (
    <a href={sec.link || `#${sec.id}`} style={{ ...baseStyle, ...(h && !isActive ? hovStyle : {}) }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {sec.navIcon && <span style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}><NavIcon icon={sec.navIcon} size={16} color="currentColor" /></span>}
      {sec.title}
    </a>
  );
};

const ToolStrip = ({ sections, currentId }) => {
  return (
    <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, position: 'sticky', top: `${NAVBAR_HEIGHT}px`, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {sections.map((sec) => (
        <ToolStripLink key={sec.id} sec={sec} isActive={sec.id === currentId} />
      ))}
    </nav>
  );
};


/* ================================================================
   SHELL — ToolSectionPage
   ================================================================ */

const ToolSectionPage = ({
  meta,
  children,
  parentSections,
  parentSectionData,
  toolType = 'calculators',
  rightOffset = '45px',
  theme = 'deepBlue',
  article,
  articleImage,
  articleImageAlt,
  articleSvg,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = getTheme(theme);

  // Subtopics for sidebar from parent sections
  const subtopics = useMemo(() => {
    const all = [];
    Object.entries(parentSectionData || {}).forEach(([key, data]) => {
      const sec = parentSections?.find((s) => s.id === key);
      if (sec?.type === 'subsection' && data?.children) {
        data.children.forEach((ch) => all.push({ title: ch.title, href: ch.href }));
      }
    });
    return all;
  }, [parentSections, parentSectionData]);

  // All sections including current for strip
  const allSectionsForStrip = useMemo(() => {
    const currentSection = {
      id: toolType === 'visual-tools' ? 'visual-tools' : 'calculators',
      title: meta.title,
      navIcon: toolType,
      link: meta.breadcrumbUrl,
    };
    return [currentSection, ...(parentSections || [])];
  }, [meta, parentSections, toolType]);

  const currentStripId = toolType === 'visual-tools' ? 'visual-tools' : 'calculators';
  const contentMargin = sidebarOpen ? `${SIDEBAR_EXPANDED}px` : `${SIDEBAR_COLLAPSED}px`;

  const CardComponent = toolType === 'visual-tools' ? VisualToolCard : CalculatorCard;

  return (
    <ThemeContext.Provider value={t}>
      <Sidebar
        sections={parentSections || []}
        subtopics={subtopics}
        brandName={meta.parentTitle || meta.title}
        brandSub="Learn Math Class"
        open={sidebarOpen}
        onToggle={setSidebarOpen}
        sidebarSectionTitle={`More in ${meta.parentTitle}`||'More In This Section'}
      />
      <div style={{
        marginLeft: contentMargin,
        marginRight: rightOffset,
        marginTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Hero + Article fill viewport */}
        <div style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`, display: 'flex', flexDirection: 'column' }}>
          <ToolHeroBanner
            title={meta.title}
            subtitle={meta.subtitle}
            breadcrumbUrl={meta.breadcrumbUrl}
            toolCount={children?.length || 0}
            toolType={toolType}
            cardsAnchor="tool-cards"
          />
          <ToolStrip sections={allSectionsForStrip} currentId={currentStripId} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ToolArticle
              article={article}
              image={articleImage}
              imageAlt={articleImageAlt}
              svg={articleSvg}
            />
          </div>
        </div>

        {/* Cards section */}
        <div id="tool-cards" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px 80px', background: t.contentBg, scrollMarginTop: `${NAVBAR_HEIGHT + 10}px` }}>
          {children && children.length > 0 && (
            <EqualGrid>
              {children.map((ch, i) => (
                <CardComponent
                  key={i}
                  title={ch.title}
                  description={ch.description}
                  href={ch.href}
                  image={ch.image}
                  imageAlt={ch.imageAlt}
                  svg={ch.svg}
                  previewIndex={i}
                />
              ))}
            </EqualGrid>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ToolSectionPage;