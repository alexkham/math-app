# Orphaned determinant components (archived 2026-09-13)

These two files were left behind by the determinant merge. They are **not
deleted** — they are parked here so they can be restored, and their git history
is intact through the move.

- `DeterminantWrapper.jsx`
- `determinantDiagrams.js`

Both lived at `app/components/linear-algebra copy/matrix/`.

## Why they were moved

A second, live pair of the same names exists at
`app/components/linear-algebra copy/determinants/`, and that is the pair the
visual-tools registry points at for `linear-algebra-matrix-determinant`
(`component` and `diagramsModule` both name the `determinants/` path).

The `matrix/` pair had zero live importers. The only references anywhere in the
tree were:

- `determinantDiagrams.js` importing its own sibling `./DeterminantWrapper`
- `line1-backups/linear-algebra-matrix-determinant/index.pre-merge-2026-09-13.jsx`,
  itself a backup of the pre-merge page

No page, component or registry entry imported them.

## To restore

```
git mv "line1-backups/_orphaned-determinant-merge/DeterminantWrapper.jsx" "app/components/linear-algebra copy/matrix/DeterminantWrapper.jsx"
git mv "line1-backups/_orphaned-determinant-merge/determinantDiagrams.js" "app/components/linear-algebra copy/matrix/determinantDiagrams.js"
```
