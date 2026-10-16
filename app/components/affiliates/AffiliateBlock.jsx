const DEFAULT_HEADLINE = 'Going deeper into this topic?';
const DEFAULT_CTA = 'View course';
const DISCLOSURE_FULL =
  'Affiliate link · I may earn a commission, at no extra cost to you';
const DISCLOSURE_SHORT = 'Affiliate link';

const VARIANTS = ['panel', 'strip', 'block', 'side', 'chat'];

function ExternalIcon() {
  return (
    <svg
      className="affiliate-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
      <path d="M11 13l9-9" />
      <path d="M15 4h5v5" />
    </svg>
  );
}

function Rating({ rating, reviews }) {
  if (!rating && !reviews) return null;
  return (
    <span className="affiliate-rating">
      {rating && (
        <span className="affiliate-stars">
          <span aria-hidden="true">&#9733;</span>
          <span aria-label={`Rated ${rating} out of 5`}>{rating}</span>
        </span>
      )}
      {reviews && <span>{Number(reviews).toLocaleString()} ratings</span>}
    </span>
  );
}

/**
 * Affiliate recommendation box.
 *
 * variant  'panel' | 'strip' | 'block' | 'side'  (A | B | C + side column), default 'strip'
 *   panel  compact card that matches a tool's info panels; outlined link
 *   strip  one-row banner: rating, headline + text, button
 *   block  full box: headline, title, meta row, description, button
 *   side   narrow stacked card for a ~180px sidebar; no description, outlined link
 *   chat   card for the Ask AI thread; like side, wider, with a dismiss button
 *
 * subId      appended to href as subId1 (impact.com attribution), e.g. subId="askai"
 * onDismiss  chat only: called when the visitor clicks the cross
 * onClick    optional: called when the course link is clicked
 *
 * Required: provider, title, description, href.
 * Optional: headline, rating, reviews, hours, instructor, cta, disclosure.
 */
export default function AffiliateBlock({
  variant = 'strip',
  provider,
  title,
  description,
  href,
  headline = DEFAULT_HEADLINE,
  rating,
  reviews,
  hours,
  instructor,
  cta = DEFAULT_CTA,
  disclosure,
  subId,
  onDismiss,
  onClick,
}) {
  const v = VARIANTS.includes(variant) ? variant : 'strip';
  const ctaText = `${cta} on ${provider}`;
  const ariaLabel = `${ctaText}: ${title} (opens in new tab)`;
  const disclosureText =
    disclosure ?? (v === 'block' ? DISCLOSURE_FULL : DISCLOSURE_SHORT);
  const byLine = instructor ? ` by ${instructor}` : '';
  const trackedHref = subId
    ? `${href}${href.includes('?') ? '&' : '?'}subId1=${encodeURIComponent(subId)}`
    : href;
  const outline = v === 'panel' || v === 'side' || v === 'chat';

  const link = (
    <a
      className={outline ? 'affiliate-link-outline' : 'affiliate-link'}
      href={trackedHref}
      onClick={onClick}
      target="_blank"
      rel="sponsored noopener"
      aria-label={ariaLabel}
    >
      {ctaText}
      <ExternalIcon />
    </a>
  );

  return (
    <aside className={`affiliate affiliate-${v}`} aria-label="Recommended course">
      {v === 'strip' && (
        <>
          <Rating rating={rating} />
          <span className="affiliate-strip-text">
            <span className="affiliate-headline">{headline}</span>
            <span className="affiliate-title-inline">{title}</span>
            {byLine} {description}{' '}
            <span className="affiliate-muted">{disclosureText}.</span>
          </span>
          {link}
        </>
      )}

      {v === 'panel' && (
        <>
          <div className="affiliate-top">
            <span>Recommended course &middot; {provider}</span>
            <span>{disclosureText}</span>
          </div>
          <h3 className="affiliate-headline affiliate-h3">{headline}</h3>
          <p className="affiliate-text">
            <Rating rating={rating} reviews={reviews} />
            {(rating || reviews) && ' · '}
            <span className="affiliate-title-inline">{title}</span>
            {byLine}. {description}
          </p>
          {link}
        </>
      )}

      {v === 'side' && (
        <>
          <div className="affiliate-eyebrow">Recommended course &middot; {provider}</div>
          <h3 className="affiliate-headline affiliate-h3">{headline}</h3>
          <p className="affiliate-text">
            <Rating rating={rating} reviews={reviews} />
            {(rating || reviews) && ' · '}
            <span className="affiliate-title-inline">{title}</span>
            {instructor && `, ${instructor}`}
          </p>
          {link}
          <div className="affiliate-eyebrow affiliate-footnote">{disclosureText}</div>
        </>
      )}

      {v === 'chat' && (
        <>
          {onDismiss && (
            <button type="button" className="affiliate-dismiss" aria-label="Hide this suggestion" onClick={onDismiss}>
              &times;
            </button>
          )}
          <div className="affiliate-eyebrow">Recommended course &middot; {provider}</div>
          <h3 className="affiliate-headline affiliate-h3">{headline}</h3>
          <p className="affiliate-text">
            <Rating rating={rating} reviews={reviews} />
            {(rating || reviews) && ' · '}
            <span className="affiliate-title-inline">{title}</span>
            {instructor && `, ${instructor}`}
          </p>
          {link}
          <div className="affiliate-eyebrow affiliate-footnote">{disclosureText}</div>
        </>
      )}

      {v === 'block' && (
        <>
          <div className="affiliate-top">
            <span>Recommended course &middot; {provider}</span>
            <span>{disclosureText}</span>
          </div>
          <h3 className="affiliate-headline affiliate-h3">{headline}</h3>
          <div className="affiliate-title">{title}</div>
          {(rating || reviews || hours || instructor) && (
            <div className="affiliate-meta">
              <Rating rating={rating} reviews={reviews} />
              {hours && <span>{hours} hours</span>}
              {instructor && <span>{instructor}</span>}
            </div>
          )}
          <p className="affiliate-text">{description}</p>
          {link}
        </>
      )}

      <style jsx>{`
        .affiliate {
          font-family: Arial, sans-serif;
          color: #1a1a2e;
          line-height: 1.5;
          background: #f7f8fc;
          border: 1px solid #d0d4e4;
          border-left: 3px solid #06357a;
          box-sizing: border-box;
        }
        .affiliate-strip {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px 16px;
          margin: 16px 0;
          padding: 10px 16px;
          font-size: 14px;
        }
        .affiliate-strip-text {
          flex: 1 1 320px;
          min-width: 0;
        }
        .affiliate-panel {
          margin: 10px 0 0;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 13px;
        }
        .affiliate-block {
          margin: 32px 0;
          padding: 20px 24px;
          font-size: 15px;
        }
        .affiliate-side {
          margin: 0 0 10px;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 12px;
          line-height: 1.45;
        }
        .affiliate-side .affiliate-h3 {
          font-size: 13px;
        }
        .affiliate-chat {
          position: relative;
          max-width: 560px;
          margin: 10px 0 12px;
          padding: 10px 32px 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.45;
          font-family: inherit;
        }
        .affiliate-chat .affiliate-h3 {
          font-size: 14px;
        }
        .affiliate-chat .affiliate-text {
          margin-bottom: 8px;
        }
        .affiliate-dismiss {
          position: absolute;
          top: 4px;
          right: 6px;
          border: 0;
          background: transparent;
          color: #777b90;
          font-size: 18px;
          line-height: 1;
          padding: 4px 6px;
          cursor: pointer;
        }
        .affiliate-dismiss:hover {
          color: #1a1a2e;
        }
        .affiliate-dismiss:focus-visible {
          outline: 2px solid #b45309;
          outline-offset: 1px;
        }
        .affiliate-side .affiliate-text {
          margin-bottom: 8px;
        }
        .affiliate-eyebrow {
          font-size: 11px;
          color: #555a75;
          margin-bottom: 4px;
        }
        .affiliate-footnote {
          font-size: 10px;
          color: #777b90;
          margin: 6px 0 0;
        }
        .affiliate-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 6px;
          font-size: 12px;
          color: #555a75;
        }
        .affiliate-headline {
          font-weight: 700;
          color: #06357a;
        }
        .affiliate-strip .affiliate-headline {
          display: block;
          font-size: 16px;
          margin-bottom: 2px;
        }
        .affiliate-h3 {
          margin: 0 0 4px;
          font-size: 16px;
        }
        .affiliate-block .affiliate-h3 {
          font-size: 18px;
        }
        .affiliate-title {
          font-weight: 600;
          margin-bottom: 4px;
        }
        .affiliate-title-inline {
          font-weight: 600;
        }
        .affiliate-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 8px;
          font-size: 13px;
          color: #555a75;
        }
        .affiliate-text {
          margin: 0 0 10px;
        }
        .affiliate-muted {
          color: #777b90;
        }
        .affiliate :global(.affiliate-rating) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          color: #555a75;
        }
        .affiliate :global(.affiliate-stars) {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #b45309;
          font-weight: 600;
        }
        .affiliate :global(.affiliate-link),
        .affiliate :global(.affiliate-link-outline) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 4px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s ease;
        }
        .affiliate :global(.affiliate-link) {
          background: #2563eb;
          color: #ffffff;
        }
        .affiliate :global(.affiliate-link:hover) {
          background: #0b4a9e;
          color: #ffffff;
        }
        .affiliate :global(.affiliate-link-outline) {
          padding: 6px 12px;
          white-space: normal;
          font-size: 12px;
          border: 1px solid #2563eb;
          color: #1d3fd1;
          background: transparent;
        }
        .affiliate :global(.affiliate-link-outline:hover) {
          background: #eaf0fe;
        }
        .affiliate :global(.affiliate-link:focus-visible),
        .affiliate :global(.affiliate-link-outline:focus-visible) {
          outline: 3px solid #b45309;
          outline-offset: 2px;
        }
        .affiliate :global(.affiliate-icon) {
          width: 15px;
          height: 15px;
          flex: none;
        }
      `}</style>
    </aside>
  );
}
