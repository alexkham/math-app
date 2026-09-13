# -*- coding: utf-8 -*-
# Operation A unit specs, linear algebra. One entry per content page.
#
# This file holds the JUDGEMENT and the PROSE; opa-plant.py does the wiring.
#
# Rules that shape what is in here:
#   * The bar is demonstration value, not treatment. A section that merely uses
#     a term earns nothing. Most mapped terms get no unit - that is a correct
#     pass, not a thin one.
#   * A symbolic tool (entries in a matrix/vector) must not be paired with prose
#     about lines, planes and directions, and a geometric tool must not be
#     paired with prose about an entry-by-entry procedure. 34 of the 45 tools
#     are symbolic and only 10 are geometric - see opa-toolkind.py.
#   * At most one unit per section. A unit never closes a section: every one is
#     followed by a sealing sentence that finishes the section's thought.
#   * Panel text is raw HTML - unicode maths and entities only, no $...$ and no
#     markdown links. It ends WITHOUT punctuation: the helper appends the link
#     and the full stop.
#
# Tool link targets are the tool page root - the visualizer sits at the top and
# is what the reader is being sent to.

B = '/linear-algebra/visual-tools/'
M = '@/app/components/linear-algebra copy/matrix/'
R2 = '@/app/components/linear-algebra copy/r2-visualizers/'

SPECS = {

    # ------------------------------------------------------------------
    'vectors/basic-operations': {
        'imports': [
            ('vectorAdditionDiagrams', M + 'vectorAdditionDiagrams'),
            ('vectorScalarDiagrams', M + 'vectorScalarDiagrams'),
        ],
        'units': {
            'addition': {
                'note': 'Section 1 defines addition componentwise, so the symbolic\ntool is the match: it fills one slot at a time.',
                'svg': 'vectorAdditionDiagrams.done',
                'caption': 'u + v, every component settled',
                'text': 'Each slot of the result was filled from the matching pair above it and nothing else &#8212; the third entry never consulted the first. That independence is the whole reason addition needs both vectors to have the same length, and the reason it costs one addition per component. Step through it slot by slot, or switch to subtraction, on the',
                'href': B + 'vector-addition',
                'linkText': 'vector addition visualizer',
            },
            'scalar': {
                'svg': 'vectorScalarDiagrams.done',
                'caption': 'cv, every component scaled',
                'text': 'One number has reached every entry: each component of the result is the matching component multiplied by the same scalar. Nothing has been mixed between slots, which is why scaling changes a vector\'s length and possibly its direction but never tilts it off its own line. Try a negative scalar and watch the arrow flip on the',
                'href': B + 'vector-scalar-multiplication',
                'linkText': 'scalar multiplication visualizer',
            },
        },
        'place': [
            ('1', 'addition',
             'Because the components never interact, everything else about addition '
             '— its commutativity, its associativity, the zero vector — follows '
             'from the arithmetic of a single slot.'),
            ('4', 'scalar',
             'Scaling and adding are the only two operations in play here, and the rest '
             'of this page is a catalogue of how they behave together.'),
        ],
    },

    # ------------------------------------------------------------------
    'vectors/magnitude': {
        'imports': [('magnitudeDiagrams', M + 'magnitudeDiagrams')],
        'units': {
            'norm': {
                'svg': 'magnitudeDiagrams.root',
                'caption': 'Squares summed, root about to be taken',
                'text': 'The squares of the components have been accumulated into a single number and the square root is the last step left. Every component contributes its square and nothing else, which is why the sign of a component cannot affect the length, and why the formula reads the same in two dimensions as in twenty. Run it on your own vector on the',
                'href': B + 'vector-magnitude',
                'linkText': 'magnitude visualizer',
            },
            'normalize': {
                'svg': 'magnitudeDiagrams.normalize',
                'caption': 'Dividing through by the norm',
                'text': 'Each component is being divided by the length just computed, so the direction survives untouched while the size collapses to exactly one. This is why normalisation fails for the zero vector alone &#8212; it is the single case with no length to divide by and no direction to preserve. Normalise a vector of your choosing on the',
                'href': B + 'vector-magnitude',
                'linkText': 'magnitude visualizer',
            },
        },
        'place': [
            ('1', 'norm',
             'The same sum-of-squares pattern is what the next section generalises to '
             'any number of dimensions.'),
            ('6', 'normalize',
             'A normalised vector is therefore a pure direction, which is what makes it '
             'the natural building block for bases and projections later on.'),
        ],
    },

    # ------------------------------------------------------------------
    'vectors/dot-product': {
        'imports': [
            ('innerProductDiagrams', M + 'innerProductDiagrams'),
            ('projectionDiagrams', M + 'projectionDiagrams'),
        ],
        'units': {
            'dot': {
                'svg': 'innerProductDiagrams.done',
                'caption': 'Products formed, then summed to one number',
                'text': 'Each pair of matching components was multiplied and the products were then collapsed into a single running total. The output is a scalar, not a vector, and that one fact is what separates this product from every other operation on this page. Follow the accumulation term by term on the',
                'href': B + 'vectors-inner-product',
                'linkText': 'inner product visualizer',
            },
            'projection': {
                'note': 'Section 9 is about projecting one vector onto another, which is\nthe projection tool\'s subject rather than the dot product tool\'s.',
                'svg': 'projectionDiagrams.scale',
                'caption': 'The coefficient applied to the direction vector',
                'text': 'The scalar computed from the two dot products is being multiplied back onto the direction vector, which is what turns a bare ratio into an actual vector lying along it. The projection is always a multiple of the vector projected onto, never of the one being projected &#8212; the picture makes the asymmetry hard to miss. Watch the remainder appear as well on the',
                'href': B + 'vector-projection',
                'linkText': 'vector projection visualizer',
            },
        },
        'place': [
            ('1', 'dot',
             'Everything later on this page — angles, orthogonality, projections — '
             'is read off that single number.'),
            ('9', 'projection',
             'Splitting a vector into a part along another and a part perpendicular to it '
             'is the move that least squares and Gram–Schmidt both rest on.'),
        ],
    },

    # ------------------------------------------------------------------
    'vectors/cross-product': {
        'imports': [('crossProductDiagrams', M + 'crossProductDiagrams')],
        'units': {
            'determinant': {
                'svg': 'crossProductDiagrams.determinant',
                'caption': 'The symbolic determinant laid out',
                'text': 'The three components of the result are being read off a determinant whose first row carries the basis vectors and whose other two rows are the operands. The middle component picks up its minus sign from the checkerboard pattern, not from anything geometric &#8212; a detail far easier to trust once seen laid out. Expand it row by row on the',
                'href': B + 'vector-cross-product',
                'linkText': 'cross product visualizer',
            },
        },
        'place': [
            ('1', 'determinant',
             'That determinant layout is also the quickest way to see why swapping the '
             'two vectors flips the sign of the whole product.'),
        ],
    },

    # ------------------------------------------------------------------
    'vectors/properties': {
        'imports': [('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams')],
        'units': {
            'parallel': {
                'note': 'Parallelism IS dependence, and the 2D span tool is the one that\ndraws the collapse. The symbolic vector tools cannot show it.',
                'svg': 'spanIndependenceDiagrams.dependent',
                'caption': 'One vector a multiple of the other',
                'text': 'Both arrows lie along the same line, and the region their combinations can reach has collapsed onto that line with them. Parallel is the geometric word and linearly dependent is the algebraic one, but the picture is the same picture: a second vector that adds no direction the first did not already have. Drag one arrow off the line and watch the plane come back on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
        },
        'place': [
            ('5', 'parallel',
             'This is the first appearance of an idea the vector-spaces pages return to '
             'constantly: what matters is not how many vectors you have but how many '
             'directions they supply.'),
        ],
    },

    # ==================================================================
    # vector-spaces cluster
    # ==================================================================

    'vector-spaces/span': {
        'imports': [
            ('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams'),
            ('spanMembershipDiagrams', M + 'spanMembershipDiagrams'),
        ],
        'units': {
            'geometry': {
                'svg': ['spanIndependenceDiagrams.independent', 'spanIndependenceDiagrams.dependent'],
                'caption': 'A span filling the plane, then collapsing to a line',
                'text': 'Above, the shaded region reaches every point because the two arrows supply two genuinely different directions. Below, the second arrow lies along the first, and the span has shrunk to the line they share &#8212; two vectors, but only one direction between them. What a span can reach is fixed by directions, never by how many vectors are listed. Drag the arrows and watch the region change on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
            'membership': {
                'note': 'Section 4 is the algebraic test, not the geometry, so the\nsymbolic membership tool is the right picture here.',
                'svg': 'spanMembershipDiagrams.membership',
                'caption': 'Solving for the weights that reach b',
                'text': 'The candidate vector has been placed as the right-hand side and the spanning vectors as the columns, turning "is b in the span" into a system to solve. A consistent system means a set of weights exists and b is reachable; an inconsistent one means no combination lands on it. Try a vector that misses, and watch the contradiction row appear, on the',
                'href': B + 'span-membership',
                'linkText': 'span membership tester',
            },
        },
        'place': [
            ('2', 'geometry',
             'Line, plane or the whole space — the span is always one of these, and it '
             'always contains the origin.'),
            ('4', 'membership',
             'Every later question about spanning sets reduces to running this same test '
             'on a different right-hand side.'),
        ],
    },

    'vector-spaces/linear-independence': {
        'imports': [
            ('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams'),
            ('spanMembershipDiagrams', M + 'spanMembershipDiagrams'),
        ],
        'units': {
            'geometry': {
                'svg': ['spanIndependenceDiagrams.independent', 'spanIndependenceDiagrams.nearDependent'],
                'caption': 'Independent, then very nearly dependent',
                'text': 'The lower pair still spans the plane, but only barely: the arrows have swung close together and the region they reach is stretched thin. Independence is not a yes-or-no fact about a picture, it is a fact about whether any direction is genuinely new, and the near case shows how little room can be left. Push the arrows together until the span collapses on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
            'homogeneous': {
                'svg': 'spanMembershipDiagrams.dependent',
                'caption': 'A dependence relation found among the columns',
                'text': 'The elimination has produced a free column, and with it a set of weights, not all zero, that combine the vectors to give zero. That is precisely the definition failing: independence asks that the only such combination be the trivial one. Feed in your own vectors and see whether a relation appears on the',
                'href': B + 'span-membership',
                'linkText': 'span membership tester',
            },
        },
        'place': [
            ('2', 'geometry',
             'The algebraic tests in the next two sections are simply ways of detecting '
             'this same collapse without having to draw it.'),
            ('3', 'homogeneous',
             'A non-trivial solution is therefore not just evidence of dependence — it is '
             'the dependence relation itself, written out.'),
        ],
    },

    'vector-spaces/subspaces': {
        'imports': [
            ('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams'),
            ('subspacesDiagrams', M + 'subspacesDiagrams'),
        ],
        'units': {
            'geometry': {
                'svg': ['spanIndependenceDiagrams.independent', 'spanIndependenceDiagrams.dependent'],
                'caption': 'The two non-trivial subspaces of R&#178;',
                'text': 'A plane through the origin above, a line through the origin below &#8212; in two dimensions these are the only shapes a subspace can take besides the origin itself and the whole space. Both pass through the origin, because a subspace must contain the zero vector, and both are closed: adding or scaling anything inside keeps you inside. Move the arrows and watch one become the other on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
            'nullspace': {
                'svg': 'subspacesDiagrams.nullspace',
                'caption': 'The null space read off the reduced form',
                'text': 'Each free column has produced one special solution, and together they form a basis for everything the matrix sends to zero. The null space is a subspace for a reason visible right here: any combination of these solutions is still killed by the matrix, so the set is closed under exactly the two operations a subspace has to survive. Step through all four spaces on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
        },
        'place': [
            ('4', 'geometry',
             'Anything that misses the origin — a line offset from it, a shifted plane — '
             'fails the test before any closure question is asked.'),
            ('5', 'nullspace',
             'The column space in the next section is built the same way, from the pivot '
             'columns rather than the free ones.'),
        ],
    },

    'vector-spaces/basis': {
        'imports': [
            ('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams'),
            ('changeBasisDiagrams', R2 + 'change-basis/changeBasisDiagrams'),
        ],
        'units': {
            'definition': {
                'svg': 'spanIndependenceDiagrams.independent',
                'caption': 'Two independent vectors spanning R&#178;',
                'text': 'These two arrows do both jobs a basis has to do at once: they are independent, so neither is wasted, and they span, so nothing is missing. Adding a third vector would keep the spanning but destroy the independence; removing one would keep the independence but lose the spanning. A basis is exactly the balance point. Test that by adding and removing directions on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
            'coordinates': {
                'note': 'Coordinates relative to a chosen basis is the change-of-basis\ntool\'s subject; the span tool cannot show the grid re-drawn.',
                'svg': 'changeBasisDiagrams.nonorth',
                'caption': 'The same point, read against a skewed basis',
                'text': 'The grid has been redrawn along the two basis vectors, and the point\'s coordinates are read by counting steps along that grid rather than along the axes. The point never moved; only the ruler changed. This is why coordinates belong to a basis and not to a vector, and why the same arrow carries different numbers in different bases. Swap bases and watch the numbers change on the',
                'href': B + 'change-basis-2d',
                'linkText': 'change of basis explorer',
            },
        },
        'place': [
            ('2', 'definition',
             'Independence and spanning are therefore not two separate requirements to '
             'check but two ways the same set can fail.'),
            ('4', 'coordinates',
             'Because the representation is unique, these coordinates are a genuine '
             'address for the vector rather than one description among many.'),
        ],
    },

    'vector-spaces/dimension': {
        'imports': [
            ('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams'),
            ('subspacesDiagrams', M + 'subspacesDiagrams'),
        ],
        'units': {
            'definition': {
                'svg': ['spanIndependenceDiagrams.independent', 'spanIndependenceDiagrams.dependent'],
                'caption': 'Dimension two, then dimension one',
                'text': 'The count of vectors is the same in both pictures; the dimension is not. Above, two independent directions give a two-dimensional span. Below, the second vector repeats the first, the span is a line, and the dimension has dropped to one. Dimension counts directions that survive independence, which is why it cannot be read off the size of a list. Collapse and restore it on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
            'ranknullity': {
                'svg': ['subspacesDiagrams.colspace', 'subspacesDiagrams.nullspace'],
                'caption': 'Pivot columns above, free-column solutions below',
                'text': 'Every column of the matrix is either a pivot column, contributing a dimension to the column space, or a free column, contributing a dimension to the null space. No column can be both and none is left out, which is the whole content of the rank-nullity theorem: the two dimensions are partitioning the same finite supply. See the accounting for all four spaces on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
        },
        'place': [
            ('1', 'definition',
             'Every result later on this page is a consequence of that one distinction '
             'between counting vectors and counting directions.'),
            ('9', 'ranknullity',
             'Read this way the theorem is bookkeeping rather than a surprise: the columns '
             'were always going to be divided between the two spaces.'),
        ],
    },

    'vector-spaces/fundamental-spaces': {
        'imports': [('subspacesDiagrams', M + 'subspacesDiagrams')],
        'units': {
            'colspace': {
                'svg': 'subspacesDiagrams.colspace',
                'caption': 'Pivot columns marked as a basis for the column space',
                'text': 'The pivot columns have been picked out of the original matrix &#8212; the original, not the reduced one, since elimination changes the columns while preserving which of them are independent. Those columns are a basis for everything the matrix can output. Cycle through the other three spaces on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
            'nullspace': {
                'svg': 'subspacesDiagrams.nullspace',
                'caption': 'One special solution per free column',
                'text': 'Each free variable has been set to one in turn, with the others at zero, and the pivot variables solved to match. The resulting vectors are independent by construction and span everything the matrix sends to zero. Generate them for your own matrix on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
            'orth': {
                'svg': 'subspacesDiagrams.orth',
                'caption': 'The two orthogonality pairings, side by side',
                'text': 'Row space against null space, column space against left null space &#8212; each pair meets at right angles and each pair accounts for a whole space between them. Every vector splits uniquely into a part in one and a part in the other, which is what makes these complements rather than merely perpendicular. Check the dot products yourself on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
        },
        'place': [
            ('2', 'colspace',
             'Taking the pivot columns from the reduced matrix instead is the single most '
             'common error here, and it produces the right count with the wrong vectors.'),
            ('4', 'nullspace',
             'A matrix with no free columns has only the zero vector in its null space, '
             'which is the invertible case seen from this side.'),
            ('7', 'orth',
             'These two right angles are what later let any vector be decomposed into a '
             'solvable part and an unreachable one.'),
        ],
    },

    'vector-spaces': {
        'imports': [('spanIndependenceDiagrams', R2 + 'span-independence/spanIndependenceDiagrams')],
        'units': {
            'indspan': {
                'note': 'Hub page: one unit, on the section where the two ideas the rest\nof the cluster depends on are finally put together.',
                'svg': ['spanIndependenceDiagrams.independent', 'spanIndependenceDiagrams.dependent'],
                'caption': 'Enough directions, then not enough',
                'text': 'Spanning asks whether the set reaches everything; independence asks whether any of it is redundant. Above, both hold at once and the set is a basis. Below, the second arrow repeats the first: still no redundancy in what is reached, but the reach has shrunk. Pull the two conditions apart yourself on the',
                'href': B + 'span-independence-2d',
                'linkText': 'span and independence explorer',
            },
        },
        'place': [
            ('11', 'indspan',
             'Holding both conditions at once is rare and rigid, and that rigidity is '
             'exactly what makes a basis useful.'),
        ],
    },

    # ------------------------------------------------------------------
    'vectors': {
        'imports': [('vectorAdditionDiagrams', M + 'vectorAdditionDiagrams')],
        'units': {
            'operations': {
                'note': 'Hub page: one unit only. The operations section is the single\nplace a live demo adds more than the summary prose does.',
                'svg': 'vectorAdditionDiagrams.done',
                'caption': 'Addition finished, component by component',
                'text': 'Addition, subtraction and scaling all share this shape: the operation is applied to each slot on its own and the slots never talk to each other. That is why all three demand vectors of the same length and why all three return a vector of that same length. See the same run for subtraction on the',
                'href': B + 'vector-addition',
                'linkText': 'vector addition visualizer',
            },
        },
        'place': [
            ('5', 'operations',
             'The products that follow break this pattern deliberately — both of them '
             'mix components together rather than keeping them apart.'),
        ],
    },
}
