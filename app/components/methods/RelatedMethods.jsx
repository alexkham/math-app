// RelatedMethods.jsx
// Grid of link cards to related method pages (reuses the hub's CleanLinkCard).
// items: hub items (already resolved by the page), each with href or planned.

import React from 'react';
import CleanLinkCard from '../calculation-methods/CleanLinkCard';

export default function RelatedMethods(props) {
  const { items = [] } = props;
  if (items.length === 0) return null;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
      {items.map((item) => (
        <CleanLinkCard key={item.id} data={{ ...item, uses: undefined, meta: undefined }} />
      ))}
    </div>
  );
}
