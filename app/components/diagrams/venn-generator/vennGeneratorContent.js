// ============================================================================
// VENN GENERATOR CONTENT
// ----------------------------------------------------------------------------
// Explanations, the selection-to-explanation map, geometry remarks, and the
// preset expression library. Split out of VennGenerator.jsx only for file
// length; nothing here is logic.
//
// An explanation title or body may be a string or a function of the context
// object the generator builds. Strings are written for processContent, so math
// and links use its syntax.
//
// The `explanations` prop on VennGenerator overrides any entry by id.
// ============================================================================

export const DEFAULT_EXPLANATIONS = {
  empty: {
    title: 'Nothing to draw yet',
    body: 'Type a set expression, or pick one from the library. Every region of the diagram is tested against it, and the regions that satisfy it get filled.'
  },
  error: {
    title: 'That expression will not parse',
    body: (c) => c.error + '.\n\nOperators: $\\cap$ intersection, $\\cup$ union, $\\setminus$ difference, $\\oplus$ symmetric difference, and $^c$ complement. Parentheses group.'
  },
  'unknown-set': {
    title: 'No such set here',
    body: (c) => 'This diagram has ' + c.setList + '. Either raise the set count, or use a name the diagram already has.'
  },
  nothing: {
    title: 'The empty set',
    body: 'No region satisfies this expression, so nothing is shaded. It denotes $\\varnothing$ \u2014 false for every possible membership, whatever the sets actually contain. $A \\cap A^c$ is the shortest example.'
  },
  everything: {
    title: 'The universal set',
    body: 'Every region satisfies this expression, so the whole universe is shaded. It denotes $U$. $A \\cup A^c$ is the shortest example.'
  },
  'identity-holds': {
    title: 'The identity holds',
    body: (c) => 'Both expressions select the same ' + c.count + ' ' + c.plural('region', c.count) +
      ', so they denote the same set \u2014 for any sets at all, not only the ones drawn here.\n\nThere are ' +
      c.total + ' possible regions and every element of $U$ falls in exactly one of them. Agreeing on all ' +
      c.total + ' is a complete proof, not an illustration.'
  },
  'identity-fails': {
    title: 'Not equal',
    body: (c) => 'The two expressions disagree on ' + c.diffCount + ' ' + c.plural('region', c.diffCount) +
      ': ' + c.diffList + '.\n\nOne disagreeing region is a counterexample. Put an element there and one expression contains it while the other does not.'
  },
  general: {
    title: (c) => c.count + ' of ' + c.total + ' regions',
    body: (c) => 'Shaded: ' + c.regionList + '.\n\nEvery element of $U$ lies in exactly one region, and it belongs to the expression exactly when its region is shaded.'
  },

  '2:intersection': {
    title: 'Intersection',
    body: '$A \\cap B$ is everything in $A$ and in $B$. Only the lens is shaded \u2014 an element in just one circle is left out.\n\nThis is the single region where both memberships are true, which is why the shading shrinks to nothing as the circles separate.'
  },
  '2:union': {
    title: 'Union',
    body: '$A \\cup B$ is everything in $A$ or in $B$, including the elements in both. Three of the four regions are shaded and only the outside survives.\n\nThe or is inclusive. The overlap is part of the union, not an exception to it.'
  },
  '2:diff-ab': {
    title: 'Difference',
    body: '$A \\setminus B$ keeps the elements of $A$ and removes any that are also in $B$, so the lens is cut away.\n\nDifference is not symmetric: $A \\setminus B$ and $B \\setminus A$ shade opposite crescents. It is the same set as $A \\cap B^c$, which is how the parser reads it.'
  },
  '2:diff-ba': {
    title: 'Difference, the other way',
    body: '$B \\setminus A$ keeps the elements of $B$ and drops those also in $A$. Compare it with $A \\setminus B$ \u2014 the two shade different crescents, so difference has no commutative law.'
  },
  '2:symdiff': {
    title: 'Symmetric difference',
    body: '$A \\oplus B$ shades both crescents and leaves the lens empty: the elements in exactly one of the two sets.\n\nIt equals $(A \\cup B) \\setminus (A \\cap B)$, and also $(A \\setminus B) \\cup (B \\setminus A)$. Try either in the compare field.'
  },
  '2:comp-a': {
    title: 'Complement of A',
    body: '$A^c$ is everything in the universe that is not in $A$. The shading runs out to the box edge, which is why the universe rectangle matters \u2014 without a stated $U$ a complement has no boundary.'
  },
  '2:comp-b': {
    title: 'Complement of B',
    body: '$B^c$ is everything outside $B$, including the part of $A$ that does not meet $B$.'
  },
  '2:nor': {
    title: 'Outside both',
    body: '$(A \\cup B)^c$ shades only the region outside both circles.\n\nBy De Morgan this is the same set as $A^c \\cap B^c$. Put that in the compare field and the verdict turns to $\\equiv$.'
  },
  '2:nand': {
    title: 'Not in both',
    body: '$(A \\cap B)^c$ is everything except the lens. De Morgan again: it equals $A^c \\cup B^c$.'
  },
  '2:a': {
    title: 'Just A',
    body: 'The whole of $A$, overlap included. Worth comparing with $A \\setminus B$, which drops the lens.'
  },
  '2:b': {
    title: 'Just B',
    body: 'The whole of $B$, overlap included.'
  },

  '3:triple': {
    title: 'Triple intersection',
    body: '$A \\cap B \\cap C$ is the single centre region \u2014 the elements in all three sets at once. One region out of eight.'
  },
  '3:union': {
    title: 'Union of three',
    body: '$A \\cup B \\cup C$ shades seven of the eight regions. Only the outside is left, and that outside is exactly $(A \\cup B \\cup C)^c$.'
  },
  '3:outside': {
    title: 'Outside all three',
    body: '$(A \\cup B \\cup C)^c$ is the part of $U$ that no set claims. By De Morgan it equals $A^c \\cap B^c \\cap C^c$.'
  },
  '3:distributive': {
    title: 'Distributive law, left side',
    body: '$A \\cap (B \\cup C)$ shades the part of $A$ that meets either of the other two.\n\nPut $(A \\cap B) \\cup (A \\cap C)$ in the compare field. Same three regions, so the distributive law holds \u2014 intersection distributes over union the way multiplication does over addition.'
  },
  '3:exactly-one': {
    title: 'Exactly one set',
    body: 'The three outer petals: elements belonging to one set and no other. There is no single operator for this. It takes something like $(A \\setminus (B \\cup C)) \\cup (B \\setminus (A \\cup C)) \\cup (C \\setminus (A \\cup B))$.'
  },
  '3:symdiff': {
    title: 'Symmetric difference of three',
    body: '$A \\oplus B \\oplus C$ shades the regions with an odd number of memberships: the three petals plus the centre.\n\nThis is where intuition usually fails. Many people expect the centre to be excluded, but $\\oplus$ is associative and chains as a parity test rather than as exactly one. Compare it with the exactly-one expression and the verdict is $\\neq$.'
  },
  '3:minus-both': {
    title: 'A on its own',
    body: '$A \\setminus (B \\cup C)$ is the part of $A$ that neither other set touches. Equivalent to $A \\cap B^c \\cap C^c$.'
  },

  '4:all': {
    title: 'All four at once',
    body: '$A \\cap B \\cap C \\cap D$ is one region out of sixteen, and at four sets it is a thin sliver near the middle.\n\nFour circles cannot do this. Four ellipses can, which is why the curves change shape at this set count.'
  },
  '5:all': {
    title: 'All five at once',
    body: '$A \\cap B \\cap C \\cap D \\cap E$ is one region out of thirty-two.\n\nFive congruent ellipses in a rosette is the classical construction that makes every one of the thirty-two regions non-empty. Past five sets no readable arrangement exists, so five is where this tool stops.'
  }
};

// Which regions an expression selects, as a bit string over the region table,
// mapped to an explanation id. Matching on the selection rather than on the
// typed text means A n B, B n A and (A^c u B^c)^c all resolve the same way.
export const NAMED_SELECTIONS = {
  2: {
    '0001': '2:intersection',
    '0111': '2:union',
    '0100': '2:diff-ab',
    '0010': '2:diff-ba',
    '0110': '2:symdiff',
    '1010': '2:comp-a',
    '1100': '2:comp-b',
    '1000': '2:nor',
    '1110': '2:nand',
    '0101': '2:a',
    '0011': '2:b'
  },
  3: {
    '00000001': '3:triple',
    '01111111': '3:union',
    '10000000': '3:outside',
    '00010101': '3:distributive',
    '01101000': '3:exactly-one',
    '01101001': '3:symdiff',
    '01000000': '3:minus-both'
  },
  4: {
    '0000000000000001': '4:all'
  },
  5: {
    '00000000000000000000000000000001': '5:all'
  }
};

// Remarks appended when the drawing itself asserts something extra.
export const DEFAULT_GEOMETRY_NOTES = {
  disjoint: 'In this layout the curves do not meet, so $A \\cap B = \\varnothing$. The drawing is asserting the sets are disjoint, and any region needing both has nowhere to be drawn.',
  contained: 'In this layout one curve sits inside the other, so the drawing asserts a subset relation. The containing set has no elements-only region on the inner side.',
  equal: 'The curves coincide, so this layout asserts $A = B$. Every element of one is an element of the other.'
};

export const DEFAULT_PRESETS = {
  2: ['A \u2229 B', 'A \u222a B', 'A \\ B', 'B \\ A', 'A \u2295 B', 'A\u1d9c',
    '(A \u222a B)\u1d9c', '(A \u2229 B)\u1d9c', 'A\u1d9c \u2229 B\u1d9c'],
  3: ['A \u2229 B \u2229 C', 'A \u222a B \u222a C', 'A \u2229 (B \u222a C)',
    '(A \u2229 B) \u222a (A \u2229 C)', 'A \\ (B \u222a C)', '(A \u222a B \u222a C)\u1d9c',
    'A \u2295 B \u2295 C', '(A \u2229 B) \\ C'],
  4: ['A \u2229 B \u2229 C \u2229 D', 'A \u222a B \u222a C \u222a D',
    '(A \u2229 B) \u222a (C \u2229 D)', 'A \u2295 B \u2295 C \u2295 D',
    'A \\ (B \u222a C \u222a D)', '(A \u222a B) \u2229 (C \u222a D)'],
  5: ['A \u2229 B \u2229 C \u2229 D \u2229 E', 'A \u222a B \u222a C \u222a D \u222a E',
    'A \u2295 B \u2295 C \u2295 D \u2295 E', '(A \u2229 B \u2229 C)\u1d9c',
    'A \u2229 (B \u222a C) \u2229 E\u1d9c']
};