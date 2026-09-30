# HeroSearch

A large search field for landing pages and topic hubs. Clicking anywhere on it opens the shared palette. Nothing renders it by default; pages opt in.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `placeholder` | string | `"Search by meaning"` | text shown in the field |
| `initialQuery` | string | `""` | prefill passed to `openSearch`; shown in the field in ink colour |
| `maxWidth` | string | `"720px"` | CSS width cap; the field is `width: 100%` up to this |
| `buttonLabel` | string | `"Search"` | the button on the right; hidden below 768px |

## Size

64px high, 56px below 768px (CSS media rule). Brand-line border, blue-tinted shadow, brand border on hover.

## Usage

```jsx
import HeroSearch from '@/app/components/site-search/HeroSearch';

export default function ProbabilityHub() {
  return (
    <main>
      <h1>Probability</h1>
      <HeroSearch placeholder="Search probability by meaning" />
    </main>
  );
}

// prefilled
<HeroSearch initialQuery="chance of the first success on try 3" maxWidth="600px" />
```

Requires `SearchProvider` above it in the tree (already the case site-wide through `pages/_app.js`).
