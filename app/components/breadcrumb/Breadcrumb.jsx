


// components/Breadcrumb.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';

/* ═══════════════════════════════════════════════════
   Breadcrumb

   Renders the path as a clickable trail. Segments
   listed in `nonLinkSegments` render as plain text
   instead of a link — useful for URL prefixes that
   exist only as grouping, with no page behind them
   (e.g. /algebra/calculators/sequences/ where
   /algebra/calculators/sequences itself 404s).

   Props:
     nonLinkSegments  — array of segment names that
                        should never be clickable on
                        THIS page. Default is empty,
                        meaning every segment links.
                        Pass an array per-page when
                        a parent folder has no index.
                        Example:
                          <Breadcrumb
                            nonLinkSegments={['sequences']}
                          />
   ═══════════════════════════════════════════════════ */

const Breadcrumb = ({ nonLinkSegments = [] }) => {
  const pathname = usePathname();
  const pathnames = pathname?.split('/').filter(x => x);

  const nonLinkSet = new Set(nonLinkSegments);

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        <li className={styles['breadcrumb-item']}>
          <Link href="/">Home</Link>
        </li>
        {pathnames?.map((segment, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const isNonLink = nonLinkSet.has(segment);

          if (isLast) {
            return (
              <li
                key={index}
                className={`${styles['breadcrumb-item']} ${styles.active}`}
                aria-current="page"
              >
                {segment}
              </li>
            );
          }

          if (isNonLink) {
            return (
              <li key={index} className={styles['breadcrumb-item']}>
                <span>{segment}</span>
              </li>
            );
          }

          return (
            <li key={index} className={styles['breadcrumb-item']}>
              <Link href={routeTo}>{segment}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;