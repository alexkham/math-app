/**
 * VisualToolsPage v19 — file 2 of 3 (visualToolsBlocks.jsx)
 * ArticleBlock, VideoPlayerThumb, playlists, StripGrid, ArticleVideoBlock, VideoModal.
 */

import React, { useState, useEffect } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import {
  FONT_FAMILY, SERIF_FAMILY,
  hexToRgba, hasArticleContent, sanitizeVideos, sanitizeVideoLayout,
} from './VisualToolsCards';


/* ================================================================
   ARTICLE BLOCK
   ================================================================ */

export const ArticleBlock = ({ article, theme, compact = false }) => {
  if (!hasArticleContent(article)) return null;
  return (
    <div style={{
      background: theme.cardBg || '#fff',
      border: `1px solid ${theme.border}`,
      borderRadius: 12,
      padding: compact ? '20px 24px' : '28px 32px',
      fontFamily: SERIF_FAMILY,
      color: theme.text,
      lineHeight: 1.7,
      fontSize: compact ? '0.92rem' : '0.98rem',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
    }}>
      {article.eyebrow && (
        <p style={{
          fontFamily: FONT_FAMILY,
          fontSize: '0.7rem', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '1.4px',
          color: theme.textMuted, margin: '0 0 6px',
        }}>{article.eyebrow}</p>
      )}
      {article.title && (
        <h2 style={{
          fontFamily: SERIF_FAMILY,
          fontSize: compact ? '1.2rem' : '1.45rem', fontWeight: 600,
          color: theme.accent, margin: '0 0 16px',
          lineHeight: 1.3,
        }}>{article.title}</h2>
      )}
      {article.content && processContent(article.content)}
    </div>
  );
};


/* ================================================================
   VIDEO PLAYER THUMBNAIL
   ================================================================ */

export const VideoPlayerThumb = ({ video, theme, onClick }) => {
  if (!video) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'relative', width: '100%', aspectRatio: '16 / 9',
        background: `linear-gradient(135deg, #1f4577 0%, ${theme.accent} 100%)`,
        borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: 'none', padding: 0,
      }}
    >
      {video.thumbnail && (
        <img src={video.thumbnail} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.7,
        }} />
      )}
      <div style={{
        position: 'relative', zIndex: 2,
        width: 56, height: 56, borderRadius: '50%',
        background: 'rgba(255,255,255,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
      }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: `14px solid ${theme.accent}`,
          borderTop: '9px solid transparent',
          borderBottom: '9px solid transparent',
          marginLeft: 4,
        }} />
      </div>
      <div style={{
        position: 'absolute', bottom: 12, left: 14, right: 14, zIndex: 2,
        color: '#fff', textAlign: 'left', fontFamily: FONT_FAMILY,
      }}>
        <p style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{video.title || 'Video'}</p>
        {video.duration && <p style={{ fontSize: '0.78rem', opacity: 0.85, margin: '2px 0 0' }}>{video.duration}</p>}
      </div>
    </button>
  );
};


/* ================================================================
   VERTICAL PLAYLIST (beside layout)
   ================================================================ */

export const VerticalPlaylist = ({ videos, activeIdx, onSelect, theme, heading }) => (
  <div style={{
    background: '#fff',
    border: `1px solid ${theme.border}`,
    borderRadius: 8, overflow: 'hidden',
    maxHeight: 360, overflowY: 'auto',
    marginTop: 12,
  }}>
    <div style={{
      padding: '10px 14px', borderBottom: `1px solid ${theme.border}`,
      background: theme.bgSubtle,
      fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '1.2px', color: theme.textMuted,
      fontFamily: FONT_FAMILY,
      display: 'flex', justifyContent: 'space-between',
    }}>
      <span>{heading}</span>
      <span style={{ color: theme.accent, textTransform: 'none', letterSpacing: 0 }}>{videos.length} videos</span>
    </div>
    {videos.map((v, idx) => {
      const isActive = idx === activeIdx;
      return (
        <button
          key={v.id || idx}
          type="button"
          onClick={() => onSelect(idx)}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 12px', width: '100%', textAlign: 'left',
            border: 'none',
            borderBottom: `1px solid ${theme.border}`,
            borderLeft: `3px solid ${isActive ? theme.accent : 'transparent'}`,
            background: isActive ? hexToRgba(theme.accent, 0.06) : 'transparent',
            cursor: 'pointer', fontFamily: FONT_FAMILY,
          }}
        >
          <div style={{
            width: 56, height: 32, borderRadius: 4, flexShrink: 0,
            background: `linear-gradient(135deg, #1f4577, ${theme.accent})`,
            position: 'relative', overflow: 'hidden',
          }}>
            {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontSize: '0.8rem', fontWeight: 500, margin: 0,
              color: isActive ? theme.accent : theme.text,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{v.title || 'Video'}</p>
            {v.duration && <p style={{ fontSize: '0.72rem', color: theme.textMuted, margin: '2px 0 0' }}>{v.duration}</p>}
          </div>
        </button>
      );
    })}
  </div>
);


/* ================================================================
   HORIZONTAL PLAYLIST (above/below layouts, accordion)
   ================================================================ */

export const HorizontalPlaylist = ({ videos, activeIdx, onSelect, theme, heading, open, onToggle }) => (
  <div style={{
    background: '#fff', border: `1px solid ${theme.border}`,
    borderRadius: 8, overflow: 'hidden', marginTop: 12,
  }}>
    <button
      type="button" onClick={onToggle}
      style={{
        width: '100%', padding: '10px 14px',
        background: theme.bgSubtle, border: 'none',
        borderBottom: open ? `1px solid ${theme.border}` : 'none',
        fontSize: '0.78rem', fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '1.2px',
        color: theme.textMuted, fontFamily: FONT_FAMILY,
        cursor: 'pointer', textAlign: 'left',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}
    >
      <span>
        {heading}
        <span style={{ marginLeft: 6, color: theme.accent, textTransform: 'none', letterSpacing: 0, fontSize: '0.75rem' }}>{videos.length} videos</span>
      </span>
      <span style={{
        width: 0, height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: `6px solid ${theme.textMuted}`,
        transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
        transition: 'transform 0.2s',
      }} />
    </button>
    <div style={{
      display: open ? 'grid' : 'none',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: 10, padding: 14,
    }}>
      {videos.map((v, idx) => {
        const isActive = idx === activeIdx;
        return (
          <button
            key={v.id || idx} type="button"
            onClick={() => onSelect(idx)}
            style={{
              cursor: 'pointer', borderRadius: 6, padding: 4,
              border: `2px solid ${isActive ? theme.accent : 'transparent'}`,
              background: isActive ? hexToRgba(theme.accent, 0.06) : 'transparent',
              textAlign: 'left', fontFamily: FONT_FAMILY,
            }}
          >
            <div style={{
              width: '100%', aspectRatio: '16 / 9',
              background: `linear-gradient(135deg, #1f4577, ${theme.accent})`,
              borderRadius: 4, marginBottom: 6,
              position: 'relative', overflow: 'hidden',
            }}>
              {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
            </div>
            <p style={{
              fontSize: '0.78rem', fontWeight: 500,
              color: isActive ? theme.accent : theme.text,
              margin: 0, lineHeight: 1.3,
            }}>{v.title || 'Video'}</p>
            {v.duration && <p style={{ fontSize: '0.7rem', color: theme.textMuted, margin: '2px 0 0' }}>{v.duration}</p>}
          </button>
        );
      })}
    </div>
  </div>
);


/* ================================================================
   STRIP GRID (strip layout)
   ================================================================ */

export const StripGrid = ({ videos, theme, title, onSelect }) => (
  <div style={{
    background: '#fff', border: `1px solid ${theme.border}`,
    borderRadius: 12, padding: '20px 24px',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
      <h3 style={{
        fontFamily: SERIF_FAMILY, fontSize: '1.05rem', fontWeight: 600,
        color: theme.accent, margin: 0,
      }}>{title}</h3>
      <span style={{
        fontFamily: FONT_FAMILY, fontSize: '0.75rem',
        color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '1.2px',
      }}>{videos.length} videos</span>
    </div>
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12,
    }}>
      {videos.map((v, idx) => (
        <button
          key={v.id || idx} type="button"
          onClick={() => onSelect(idx)}
          style={{
            cursor: 'pointer', borderRadius: 6, padding: 4,
            border: '2px solid transparent', background: 'transparent',
            textAlign: 'left', fontFamily: FONT_FAMILY,
          }}
        >
          <div style={{
            width: '100%', aspectRatio: '16 / 9',
            background: `linear-gradient(135deg, #1f4577, ${theme.accent})`,
            borderRadius: 4, marginBottom: 6,
            position: 'relative', overflow: 'hidden',
          }}>
            {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
          </div>
          <p style={{ fontSize: '0.78rem', fontWeight: 500, color: theme.text, margin: 0, lineHeight: 1.3 }}>{v.title || 'Video'}</p>
          {v.duration && <p style={{ fontSize: '0.7rem', color: theme.textMuted, margin: '2px 0 0' }}>{v.duration}</p>}
        </button>
      ))}
    </div>
  </div>
);


/* ================================================================
   ARTICLE-VIDEO ORCHESTRATOR
   ================================================================ */

export const ArticleVideoBlock = ({
  article, videos, layout, theme,
  videosHeading, videosCtaLabel, videosStripTitle,
  onOpenModal, compact = false,
}) => {
  const cleanVideos = sanitizeVideos(videos);
  const cleanLayout = sanitizeVideoLayout(layout);
  const hasArt = hasArticleContent(article);
  const hasVid = cleanVideos.length > 0;

  const [activeIdx, setActiveIdx] = useState(0);
  const [playlistOpen, setPlaylistOpen] = useState(true);

  if (!hasArt && !hasVid) return null;

  const activeVideo = hasVid ? cleanVideos[Math.min(activeIdx, cleanVideos.length - 1)] : null;
  const handleSelect = (idx) => {
    setActiveIdx(idx);
    if (cleanVideos[idx]) onOpenModal(cleanVideos[idx]);
  };

  // Videos only
  if (!hasArt && hasVid) {
    if (cleanLayout === 'strip') {
      return <StripGrid videos={cleanVideos} theme={theme} title={videosStripTitle} onSelect={handleSelect} />;
    }
    return (
      <div>
        <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
        {cleanVideos.length > 1 && (
          <HorizontalPlaylist
            videos={cleanVideos} activeIdx={activeIdx} onSelect={handleSelect}
            theme={theme} heading={videosHeading}
            open={playlistOpen} onToggle={() => setPlaylistOpen((o) => !o)}
          />
        )}
      </div>
    );
  }

  // Article only
  if (hasArt && !hasVid) {
    return <ArticleBlock article={article} theme={theme} compact={compact} />;
  }

  // Both — strip
  if (cleanLayout === 'strip') {
    return (
      <>
        <div style={{ marginBottom: 18 }}>
          <ArticleBlock article={article} theme={theme} compact={compact} />
        </div>
        <StripGrid videos={cleanVideos} theme={theme} title={videosStripTitle} onSelect={handleSelect} />
      </>
    );
  }

  // Both — above
  if (cleanLayout === 'above') {
    return (
      <div>
        <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
        {cleanVideos.length > 1 && (
          <HorizontalPlaylist
            videos={cleanVideos} activeIdx={activeIdx} onSelect={handleSelect}
            theme={theme} heading={videosHeading}
            open={playlistOpen} onToggle={() => setPlaylistOpen((o) => !o)}
          />
        )}
        <div style={{ marginTop: 18 }}>
          <ArticleBlock article={article} theme={theme} compact={compact} />
        </div>
      </div>
    );
  }

  // Both — beside
  if (cleanLayout === 'beside') {
    return (
      <div className="vtp-beside-grid" style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        gap: 28, alignItems: 'start',
      }}>
        <ArticleBlock article={article} theme={theme} compact={compact} />
        <div className="vtp-beside-vid" style={{ position: 'sticky', top: 20 }}>
          <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
          {cleanVideos.length > 1 && (
            <VerticalPlaylist
              videos={cleanVideos} activeIdx={activeIdx} onSelect={handleSelect}
              theme={theme} heading={videosHeading}
            />
          )}
        </div>
      </div>
    );
  }

  // Both — below (default)
  return (
    <div style={{
      background: theme.cardBg || '#fff',
      border: `1px solid ${theme.border}`,
      borderRadius: 12,
      padding: compact ? '20px 24px' : '28px 32px',
      fontFamily: SERIF_FAMILY,
      color: theme.text, lineHeight: 1.7,
      fontSize: compact ? '0.92rem' : '0.98rem',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
    }}>
      {article.eyebrow && (
        <p style={{ fontFamily: FONT_FAMILY, fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.4px', color: theme.textMuted, margin: '0 0 6px' }}>{article.eyebrow}</p>
      )}
      {article.title && (
        <h2 style={{ fontFamily: SERIF_FAMILY, fontSize: compact ? '1.2rem' : '1.45rem', fontWeight: 600, color: theme.accent, margin: '0 0 16px', lineHeight: 1.3 }}>{article.title}</h2>
      )}
      {article.content && processContent(article.content)}
      <div style={{ marginTop: 22, paddingTop: 22, borderTop: `1px solid ${theme.border}` }}>
        <p style={{ fontFamily: FONT_FAMILY, fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.4px', color: theme.textMuted, margin: '0 0 12px' }}>{videosCtaLabel}</p>
        <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
        {cleanVideos.length > 1 && (
          <HorizontalPlaylist
            videos={cleanVideos} activeIdx={activeIdx} onSelect={handleSelect}
            theme={theme} heading={videosHeading}
            open={playlistOpen} onToggle={() => setPlaylistOpen((o) => !o)}
          />
        )}
      </div>
    </div>
  );
};


/* ================================================================
   VIDEO MODAL
   ================================================================ */

export const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return undefined;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [video, onClose]);

  if (!video) return null;
  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(10, 22, 40, 0.85)',
        zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
      onClick={onClose} role="dialog" aria-modal="true"
    >
      <div
        style={{
          position: 'relative', width: '100%', maxWidth: 960,
          aspectRatio: '16 / 9', background: '#000',
          borderRadius: 8, overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button" onClick={onClose} aria-label="Close video"
          style={{
            position: 'absolute', top: -44, right: 0,
            background: 'transparent', border: 'none',
            color: '#fff', fontSize: '1.6rem',
            cursor: 'pointer', padding: '4px 12px', lineHeight: 1,
          }}
        >✕</button>
        {video.embedUrl ? (
          <iframe
            src={video.embedUrl}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title || 'Video'}
          />
        ) : (
          <div style={{ color: '#fff', padding: 40, textAlign: 'center' }}>
            No embedUrl provided for this video.
          </div>
        )}
      </div>
    </div>
  );
};