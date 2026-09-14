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
    # orthogonality cluster
    # ==================================================================
    #
    # Note: r2-visualizers/projection exports `projectionDiagrams`, the same
    # name the symbolic matrix/projectionDiagrams uses. Imported here under an
    # alias so the two can never collide on a page that wants both.

    'orthogonality/inner-product': {
        'imports': [
            ('innerProductDiagrams', M + 'innerProductDiagrams'),
            ('magnitudeDiagrams', M + 'magnitudeDiagrams'),
        ],
        'units': {
            'dot': {
                'svg': 'innerProductDiagrams.done',
                'caption': 'Paired products collapsed to one number',
                'text': 'Matching components were multiplied and the results summed into a single scalar. Everything else on this page &#8212; length, distance, angle, orthogonality &#8212; is extracted from that one number, which is why the dot product is treated as the primitive and the rest as consequences. Follow the accumulation on the',
                'href': B + 'vectors-inner-product',
                'linkText': 'inner product visualizer',
            },
            'length': {
                'svg': 'magnitudeDiagrams.root',
                'caption': 'A vector dotted with itself, then rooted',
                'text': 'Taking the dot product of a vector with itself gives the sum of its squared components, and the square root of that is its length. Length is therefore not an extra definition bolted on: it is the inner product applied to a single vector. Run it on your own vector on the',
                'href': B + 'vector-magnitude',
                'linkText': 'magnitude visualizer',
            },
        },
        'place': [
            ('1', 'dot',
             'The properties listed next — symmetry, linearity, positivity — are exactly '
             'what a general inner product is required to keep.'),
            ('3', 'length',
             'Distance in the following section is this same length applied to the '
             'difference of two vectors.'),
        ],
    },

    'orthogonality/orthogonal-sets': {
        'imports': [
            ('gramSchmidtDiagrams', M + 'gramSchmidtDiagrams'),
            ('orthogonalDiagrams', M + 'orthogonalDiagrams'),
        ],
        'units': {
            'orthset': {
                'svg': 'gramSchmidtDiagrams.done',
                'caption': 'A set with every pair at right angles',
                'text': 'Every pair in this set has a dot product of zero. That single condition forces independence &#8212; no vector can be a combination of the others without picking up a non-zero dot product with one of them. Independence therefore comes free with orthogonality rather than needing a separate check. Build such a set from arbitrary vectors on the',
                'href': B + 'gram-schmidt',
                'linkText': 'Gram-Schmidt visualizer',
            },
            'orthmatrix': {
                'svg': 'orthogonalDiagrams.lengths',
                'caption': 'Columns of length one, pairwise orthogonal',
                'text': 'Each column has unit length and every pair is orthogonal, which is exactly the condition that makes the transpose an inverse. Nothing stronger is being asked of the matrix, and nothing weaker would do. Check the transpose-times-itself product on the',
                'href': B + 'orthogonal-matrices',
                'linkText': 'orthogonal matrices visualizer',
            },
        },
        'place': [
            ('1', 'orthset',
             'The zero vector has to be excluded by hand, since it is orthogonal to '
             'everything and would wreck the independence it otherwise guarantees.'),
            ('6', 'orthmatrix',
             'Because the inverse is free, orthogonal matrices are the ones numerical '
             'work prefers wherever a choice exists.'),
        ],
    },

    'orthogonality/gram-schmidt': {
        'imports': [
            ('gramSchmidtDiagrams', M + 'gramSchmidtDiagrams'),
            ('qrDiagrams', M + 'qrDiagrams'),
        ],
        'units': {
            'subtract': {
                'svg': 'gramSchmidtDiagrams.subtract',
                'caption': 'The overlap removed from the second vector',
                'text': 'The projection of this vector onto the direction already fixed is being subtracted away. What survives is orthogonal to that direction by construction, not by luck &#8212; the subtraction removes precisely the component that would have made the dot product non-zero. Watch the next vector go through the same treatment on the',
                'href': B + 'gram-schmidt',
                'linkText': 'Gram-Schmidt visualizer',
            },
            'normalize': {
                'svg': 'gramSchmidtDiagrams.normalize',
                'caption': 'Scaling the survivor to unit length',
                'text': 'Orthogonality was settled by the subtraction; this step only fixes the length. Splitting the two concerns is why the algorithm can be stated for an orthogonal basis and then upgraded to an orthonormal one without changing its structure. Toggle normalisation on and off on the',
                'href': B + 'gram-schmidt',
                'linkText': 'Gram-Schmidt visualizer',
            },
            'qr': {
                'svg': 'qrDiagrams.done',
                'caption': 'The same run, recorded as two factors',
                'text': 'The orthonormal vectors produced have become the columns of Q, and the coefficients subtracted along the way have become the entries of R. The triangularity of R is not imposed: it reflects the fact that each vector was only ever corrected against the ones before it. Compare the two views on the',
                'href': B + 'qr-decomposition',
                'linkText': 'QR decomposition visualizer',
            },
        },
        'place': [
            ('2', 'subtract',
             'The general case below repeats this step once per vector already fixed, '
             'which is the only way the algorithm grows.'),
            ('4', 'normalize',
             'Dividing by a very small length is where the classical algorithm loses '
             'accuracy, which is the subject of the stability section later.'),
            ('7', 'qr',
             'Gram-Schmidt and QR are therefore one computation with two names, depending '
             'on whether the vectors or the factors are what you are after.'),
        ],
    },

    'orthogonality/projections': {
        'imports': [
            ('projectionDiagrams', M + 'projectionDiagrams'),
            ('projection2dDiagrams', R2 + 'projection/projectionDiagrams'),
        ],
        'units': {
            'ontovector': {
                'svg': 'projectionDiagrams.scale',
                'caption': 'The coefficient applied to the direction',
                'text': 'The scalar built from the two dot products is being multiplied onto the direction vector, turning a ratio into an actual vector on that line. The projection is always a multiple of the vector being projected onto, never of the one being projected &#8212; an asymmetry the formula hides and the picture does not. Follow the whole computation on the',
                'href': B + 'vector-projection',
                'linkText': 'vector projection visualizer',
            },
            'decomposition': {
                'svg': 'projectionDiagrams.remainder',
                'caption': 'What is left after the projection is removed',
                'text': 'Subtracting the projection leaves a remainder orthogonal to the direction projected onto. Every vector splits this way, into a part along a subspace and a part perpendicular to it, and the split is unique. That uniqueness is what makes least squares well posed later. Check the remainder\'s dot product on the',
                'href': B + 'vector-projection',
                'linkText': 'vector projection visualizer',
            },
            'matrix': {
                'note': 'The projection MATRIX acting on the plane is geometric, so the\n2D projection tool carries this one, not the symbolic vector tool.',
                'svg': 'projection2dDiagrams.axes',
                'caption': 'The whole plane collapsed onto a line',
                'text': 'Every point has been dropped perpendicularly onto the line, and points already on it have not moved at all. That is why applying the matrix twice changes nothing the second time: idempotence is a geometric fact here, not an algebraic coincidence. Move the line and watch the whole plane follow on the',
                'href': B + 'projection-2d',
                'linkText': '2D projection explorer',
            },
        },
        'place': [
            ('1', 'ontovector',
             'Projecting onto a subspace rather than a single vector is this same step '
             'repeated once per basis direction, provided the basis is orthogonal.'),
            ('2', 'decomposition',
             'The perpendicular part is the error, and minimising it is what the whole of '
             'least squares is about.'),
            ('5', 'matrix',
             'A projection matrix is therefore recognisable by squaring to itself, without '
             'any need to know which subspace it projects onto.'),
        ],
    },

    'orthogonality/least-squares': {
        'imports': [('leastSquaresDiagrams', M + 'leastSquaresDiagrams')],
        'units': {
            'geometry': {
                'svg': 'leastSquaresDiagrams.residual',
                'caption': 'The residual, perpendicular to the column space',
                'text': 'The target lies off the column space, so no exact solution exists. The best available answer is its projection, and what is left over is the residual &#8212; which comes out perpendicular to the column space rather than merely small. Minimising the error and making it perpendicular are the same requirement. See it for an inconsistent system on the',
                'href': B + 'least-squares',
                'linkText': 'least squares visualizer',
            },
            'normal': {
                'svg': 'leastSquaresDiagrams.normal',
                'caption': 'The normal equations assembled',
                'text': 'Multiplying through by the transpose turns an unsolvable system into a solvable one, and the reason is the perpendicularity above: demanding that the residual be orthogonal to every column is exactly what these equations say. Form them for your own data on the',
                'href': B + 'least-squares',
                'linkText': 'least squares visualizer',
            },
            'line': {
                'svg': 'leastSquaresDiagrams.line',
                'caption': 'A best-fit line through scattered points',
                'text': 'The points do not lie on any line, so the system was never going to be consistent. What the fit returns is the line whose vertical errors have the smallest total square &#8212; and fitting a line is nothing more than least squares with two unknowns. Move the points and watch the fit respond on the',
                'href': B + 'least-squares',
                'linkText': 'least squares visualizer',
            },
        },
        'place': [
            ('2', 'geometry',
             'Everything algebraic that follows is a way of computing this projection '
             'without having to draw it.'),
            ('3', 'normal',
             'These equations are the classical route and the least numerically stable '
             'one, which is why QR is preferred in practice.'),
            ('4', 'line',
             'Fitting a parabola in the next section changes only the columns, never the '
             'method.'),
        ],
    },

    'orthogonality': {
        'imports': [('subspacesDiagrams', M + 'subspacesDiagrams')],
        'units': {
            'foursubspaces': {
                'note': 'Hub page: one unit, on the section where orthogonality stops\nbeing a property of pairs and becomes a property of whole spaces.',
                'svg': 'subspacesDiagrams.orth',
                'caption': 'Two orthogonal pairings of whole subspaces',
                'text': 'Row space against null space, column space against left null space. Every vector in one is orthogonal to every vector in its partner, and each pair fills the space between them, so any vector splits uniquely across the pair. Orthogonality has stopped being a relation between two arrows and become the architecture of the space. Check both pairings on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
        },
        'place': [
            ('4', 'foursubspaces',
             'Projections, Gram-Schmidt and least squares in the sections below are all '
             'built on this decomposition.'),
        ],
    },

    # ==================================================================
    # transformations cluster
    # ==================================================================

    'transformations/matrix-representation': {
        'imports': [
            ('linearTransformationDiagrams', R2 + 'linear-transformations/linearTransformationDiagrams'),
            ('matrixCompositionDiagrams', R2 + 'matrix-composition/matrixCompositionDiagrams'),
        ],
        'units': {
            'standard': {
                'svg': 'linearTransformationDiagrams.fullRank',
                'caption': 'The basis vectors, and where they land',
                'text': 'The images of the two basis vectors are the two columns of the matrix &#8212; that is the entire construction. Because a linear map is determined by what it does to a basis, knowing those two arrows is knowing the map, and everything else on the grid follows from them. Move the basis images and watch the matrix update on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
            'composition': {
                'svg': ['matrixCompositionDiagrams.commute', 'matrixCompositionDiagrams.noncommute'],
                'caption': 'Two maps applied in each order',
                'text': 'Above, the order makes no difference. Below, it plainly does: the same two transformations applied the other way round leave the grid somewhere else. Matrix multiplication is non-commutative for this reason and no other &#8212; doing things in a different order genuinely ends up somewhere different. Swap the order yourself on the',
                'href': B + 'matrix-composition-2d',
                'linkText': '2D composition explorer',
            },
        },
        'place': [
            ('2', 'standard',
             'This is why the standard matrix is built by feeding the basis vectors '
             'through the map rather than by solving anything.'),
            ('6', 'composition',
             'Composition of maps and multiplication of matrices are therefore the same '
             'operation described in two vocabularies.'),
        ],
    },

    'transformations/geometric': {
        'imports': [
            ('reflectionDiagrams', R2 + 'reflection/reflectionDiagrams'),
            ('projection2dDiagrams', R2 + 'projection/projectionDiagrams'),
            ('linearTransformationDiagrams', R2 + 'linear-transformations/linearTransformationDiagrams'),
        ],
        'units': {
            'reflection': {
                'svg': ['reflectionDiagrams.axes', 'reflectionDiagrams.diagonals'],
                'caption': 'Reflection in an axis, then in a diagonal',
                'text': 'Points on the mirror line stay exactly where they are while everything else swaps to the far side at equal distance. Changing the line changes the matrix but not the behaviour, and applying either matrix twice returns every point to its start. Rotate the mirror line and watch the entries change on the',
                'href': B + 'reflection-2d',
                'linkText': 'reflection explorer',
            },
            'projection': {
                'svg': 'projection2dDiagrams.axes',
                'caption': 'The plane dropped onto a line',
                'text': 'Unlike a reflection, this one destroys information: two different points can land on the same place and there is no way back. The determinant is zero and the matrix is idempotent, which are the algebraic signatures of exactly that loss. Compare it against the reflection above on the',
                'href': B + 'projection-2d',
                'linkText': '2D projection explorer',
            },
            'determinant': {
                'svg': ['linearTransformationDiagrams.fullRank', 'linearTransformationDiagrams.rankOne'],
                'caption': 'Area scaled, then area destroyed',
                'text': 'The determinant reports what the transformation does to area: above, the unit square has become a parallelogram of some definite size; below, it has been flattened to nothing. A negative value would mean the square had been turned over as well. One number, carrying both the scaling and the orientation. Change the matrix and watch it respond on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
        },
        'place': [
            ('5', 'reflection',
             'Any matrix that is its own inverse and has determinant −1 in two dimensions '
             'is a reflection of this kind.'),
            ('7', 'projection',
             'Reflections and rotations preserve information; projections and their '
             'relatives are where it starts being lost.'),
            ('10', 'determinant',
             'This is why the determinant can classify a transformation family before any '
             'of its entries are examined individually.'),
        ],
    },

    'transformations/image-kernel': {
        'imports': [('kernelImageDiagrams', R2 + 'kernel-image/kernelImageDiagrams')],
        'units': {
            'image': {
                'svg': 'kernelImageDiagrams.full',
                'caption': 'A map reaching the whole plane',
                'text': 'The output fills the plane, so the image is everything and the map is onto. The image is spanned by where the basis vectors land, which is why it is the column space of the matrix by another name. Shrink the image by making the columns dependent on the',
                'href': B + 'kernel-image-2d',
                'linkText': 'kernel and image explorer',
            },
            'kernel': {
                'svg': 'kernelImageDiagrams.rankOne',
                'caption': 'A line crushed to the origin',
                'text': 'The image has collapsed to a line, and a whole line of inputs is now being sent to the origin &#8212; that line is the kernel. The two losses are the same loss counted twice: one dimension gone from the image is one dimension gained by the kernel, which is rank-nullity in its shortest form. Watch both change together on the',
                'href': B + 'kernel-image-2d',
                'linkText': 'kernel and image explorer',
            },
        },
        'place': [
            ('1', 'image',
             'Whether the image fills the codomain is precisely the question of '
             'surjectivity dealt with below.'),
            ('2', 'kernel',
             'A kernel containing only the origin is what injectivity means, which is why '
             'the two properties are so often checked together.'),
        ],
    },

    'transformations/basis-change': {
        'imports': [('changeBasisDiagrams', R2 + 'change-basis/changeBasisDiagrams')],
        'units': {
            'matrix': {
                'svg': 'changeBasisDiagrams.nonorth',
                'caption': 'The same point, two sets of coordinates',
                'text': 'The grid has been redrawn along the new basis vectors and the point read off against it instead of against the axes. The point has not moved; only the description has. The change-of-basis matrix is simply the dictionary between the two readings. Swap between bases and watch the numbers change on the',
                'href': B + 'change-basis-2d',
                'linkText': 'change of basis explorer',
            },
            'diagonal': {
                'svg': 'changeBasisDiagrams.special',
                'caption': 'A basis in which the map acts along the axes',
                'text': 'In this basis the transformation stretches along each grid direction independently, with no mixing between them &#8212; which is exactly what a diagonal matrix does. Diagonalisation is therefore not a computation performed on a matrix but a search for the basis in which the matrix was always going to look simple. Hunt for it yourself on the',
                'href': B + 'change-basis-2d',
                'linkText': 'change of basis explorer',
            },
        },
        'place': [
            ('2', 'matrix',
             'Its inverse is the dictionary read the other way, which is why change of '
             'basis always comes as a conjugating pair.'),
            ('5', 'diagonal',
             'When no such basis exists the matrix is defective, and the next section is '
             'about what can be done instead.'),
        ],
    },

    'transformations/properties': {
        'imports': [('matrixCompositionDiagrams', R2 + 'matrix-composition/matrixCompositionDiagrams')],
        'units': {
            'composition': {
                'svg': ['matrixCompositionDiagrams.commute', 'matrixCompositionDiagrams.noncommute'],
                'caption': 'Order irrelevant, then decisive',
                'text': 'Two linear maps composed in both orders. Above they agree; below they do not, and the grid ends up somewhere visibly different. Composing linear maps always gives a linear map, but it almost never gives the same one when the order is reversed. Try your own pair on the',
                'href': B + 'matrix-composition-2d',
                'linkText': '2D composition explorer',
            },
        },
        'place': [
            ('6', 'composition',
             'Linearity survives composition, which is what allows complicated maps to be '
             'assembled from simple ones without leaving the category.'),
        ],
    },

    'transformations': {
        'imports': [('linearTransformationDiagrams', R2 + 'linear-transformations/linearTransformationDiagrams')],
        'units': {
            'geometry': {
                'note': 'Hub page: one unit, on the geometry section, where the grid\nmakes the definition concrete rather than restating it.',
                'svg': 'linearTransformationDiagrams.fullRank',
                'caption': 'What survives the transformation',
                'text': 'Lines are still lines, parallel families are still parallel, spacing along each family is still even, and the origin has not moved. Those four survivals are the geometric content of the two algebraic conditions, and a map that breaks any of them is not linear. Break them deliberately and watch which condition fails on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
        },
        'place': [
            ('8', 'geometry',
             'The non-examples earlier on this page all fail one of these four in a way '
             'that is easier to see than to calculate.'),
        ],
    },

    # ==================================================================
    # eigen cluster
    # ==================================================================

    'eigen': {
        'imports': [
            ('eigenDiagrams', M + 'eigenDiagrams'),
            ('eigenVectorsDiagrams', R2 + 'eigen-vectors/eigenVectorsDiagrams'),
        ],
        'units': {
            'homogeneous': {
                'svg': 'eigenDiagrams.shift',
                'caption': 'Subtracting &#955; from the diagonal',
                'text': 'The eigenvalue has been taken off every diagonal entry, turning the eigenvector equation into a homogeneous system. That system needs a solution other than zero, which is possible only when the shifted matrix is singular &#8212; and that requirement is where the characteristic equation comes from. Watch the shift and the determinant condition together on the',
                'href': B + 'eigenvalues-eigenvectors',
                'linkText': 'eigenvalues and eigenvectors visualizer',
            },
            'geometry': {
                'note': 'Invariant directions are a geometric claim, so the 2D tool\ncarries this one rather than the symbolic eigen tool.',
                'svg': 'eigenVectorsDiagrams.distinct',
                'caption': 'Two directions the matrix leaves in place',
                'text': 'Almost every arrow is rotated by the matrix, but the two marked directions are not: they are stretched along their own line and nothing more. The eigenvalue is the stretch factor, and a negative one would flip the arrow without leaving the line. Drag a vector around and watch it snap into alignment on the',
                'href': B + 'eigen-vectors-2d',
                'linkText': 'eigenvector explorer',
            },
        },
        'place': [
            ('3', 'homogeneous',
             'Every computational route on this page begins from that singularity '
             'requirement rather than from the original equation.'),
            ('5', 'geometry',
             'A matrix with no real eigenvectors is one that rotates every direction, '
             'which is exactly the complex case dealt with later in the section.'),
        ],
    },

    'eigen/characteristic-equation': {
        'imports': [('eigenDiagrams', M + 'eigenDiagrams')],
        'units': {
            'polynomial': {
                'svg': 'eigenDiagrams.expand',
                'caption': 'The determinant expanded into a polynomial',
                'text': 'Taking the determinant of the shifted matrix has produced a polynomial in &#955; whose degree equals the size of the matrix. Its roots are the eigenvalues, so the question has been converted from a matrix problem into a root-finding problem. Expand it for a matrix of your own on the',
                'href': B + 'eigenvalues-eigenvectors',
                'linkText': 'eigenvalues and eigenvectors visualizer',
            },
            'roots': {
                'svg': 'eigenDiagrams.roots',
                'caption': 'Roots extracted from the characteristic polynomial',
                'text': 'The polynomial has been solved and its roots listed &#8212; these are the eigenvalues, and a repeated root is recorded with its multiplicity rather than collapsed into one. That bookkeeping matters later, because algebraic multiplicity and the number of independent eigenvectors need not agree. See the repeated and complex cases on the',
                'href': B + 'eigenvalues-eigenvectors',
                'linkText': 'eigenvalues and eigenvectors visualizer',
            },
            'eigvec': {
                'svg': 'eigenDiagrams.eigvec',
                'caption': 'Solving the shifted system for one eigenvalue',
                'text': 'With a specific eigenvalue substituted, the shifted matrix is being reduced and its null space read off. Any non-zero vector in that space is an eigenvector, and the whole space is the eigenspace &#8212; which is why eigenvectors are never unique and are usually quoted normalised. Run the solve for each eigenvalue in turn on the',
                'href': B + 'eigenvalues-eigenvectors',
                'linkText': 'eigenvalues and eigenvectors visualizer',
            },
        },
        'place': [
            ('2', 'polynomial',
             'Because the degree matches the size, an n×n matrix has exactly n eigenvalues '
             'once multiplicity and complex roots are counted.'),
            ('3', 'roots',
             'Beyond 4×4 no formula exists for these roots, which is why large eigenvalue '
             'problems are solved iteratively rather than algebraically.'),
            ('7', 'eigvec',
             'Finding the eigenvalues is therefore only half the work; each one still has '
             'its own null space to compute.'),
        ],
    },

    'eigen/properties': {
        'imports': [('eigenVectorsDiagrams', R2 + 'eigen-vectors/eigenVectorsDiagrams')],
        'units': {
            'defective': {
                'svg': ['eigenVectorsDiagrams.repeated', 'eigenVectorsDiagrams.defective'],
                'caption': 'A repeated eigenvalue with two directions, then with one',
                'text': 'Both matrices have a repeated eigenvalue. The upper one still supplies two independent directions, so geometric multiplicity matches algebraic. The lower one supplies only one: the second direction has been lost and cannot be recovered. That shortfall is the whole meaning of the word defective. Compare the two side by side on the',
                'href': B + 'eigen-vectors-2d',
                'linkText': 'eigenvector explorer',
            },
            'independence': {
                'svg': 'eigenVectorsDiagrams.distinct',
                'caption': 'Distinct eigenvalues, independent directions',
                'text': 'The two eigenvectors point along genuinely different lines, and that is guaranteed whenever the eigenvalues differ &#8212; no amount of tuning can make eigenvectors from distinct eigenvalues line up. It is this guarantee that makes a matrix with all-distinct eigenvalues automatically diagonalisable. Test it by moving the eigenvalues together on the',
                'href': B + 'eigen-vectors-2d',
                'linkText': 'eigenvector explorer',
            },
        },
        'place': [
            ('3', 'defective',
             'A defective matrix is precisely one that cannot be diagonalised, which is '
             'why this gap is worth naming rather than treating as a curiosity.'),
            ('9', 'independence',
             'Distinct eigenvalues are therefore a sufficient condition for '
             'diagonalisability, though not a necessary one.'),
        ],
    },

    'eigen/diagonalization': {
        'imports': [('diagonalizationDiagrams', M + 'diagonalizationDiagrams')],
        'units': {
            'assemble': {
                'svg': 'diagonalizationDiagrams.assemble',
                'caption': 'Eigenvectors into P, eigenvalues into D',
                'text': 'The eigenvectors are being loaded in as the columns of P and their eigenvalues placed on the diagonal of D in the matching order. The order is a free choice, but it must be the same choice in both &#8212; column three of P has to belong to the third diagonal entry of D. Assemble it yourself on the',
                'href': B + 'matrix-diagonalization',
                'linkText': 'diagonalization visualizer',
            },
            'power': {
                'svg': 'diagonalizationDiagrams.power',
                'caption': 'A power collapsing to a diagonal power',
                'text': 'Every interior pair of P and its inverse has cancelled, leaving one P, the diagonal raised to the power, and one inverse. Raising a diagonal matrix to a power is entrywise, so an expensive repeated multiplication has become a handful of scalar powers. Push the exponent higher and watch the cost stay flat on the',
                'href': B + 'matrix-diagonalization',
                'linkText': 'diagonalization visualizer',
            },
            'fails': {
                'svg': 'diagonalizationDiagrams.defective',
                'caption': 'Too few independent eigenvectors to fill P',
                'text': 'There are not enough independent eigenvectors to make up the columns of P, so P cannot be inverted and the factorisation never forms. Diagonalisation fails for this reason alone &#8212; never because the eigenvalues were awkward, only because the directions ran out. See which matrices hit this wall on the',
                'href': B + 'matrix-diagonalization',
                'linkText': 'diagonalization visualizer',
            },
        },
        'place': [
            ('2', 'assemble',
             'Mismatching the order is the most common error here, and it produces a '
             'factorisation that silently fails to reconstruct the original.'),
            ('4', 'power',
             'This is the reason diagonalisation is worth the trouble: it turns repeated '
             'matrix multiplication into arithmetic on a diagonal.'),
            ('9', 'fails',
             'The Jordan form exists precisely to give these matrices a canonical shape '
             'when a diagonal one is out of reach.'),
        ],
    },

    'eigen/complex': {
        'imports': [('complexEigenDiagrams', R2 + 'complex-eigen/complexEigenDiagrams')],
        'units': {
            'rotation': {
                'svg': 'complexEigenDiagrams.rotation',
                'caption': 'Every direction turned, none left fixed',
                'text': 'No arrow survives this matrix pointing where it started: every direction is rotated. That is what a complex eigenvalue looks like from the real plane &#8212; not an exotic number but the absence of any invariant line. The rotation angle is the argument of the eigenvalue. Turn the matrix and watch the fixed directions vanish on the',
                'href': B + 'complex-eigenvalues-2d',
                'linkText': 'complex eigenvalue explorer',
            },
            'dynamics': {
                'svg': ['complexEigenDiagrams.inward', 'complexEigenDiagrams.outward'],
                'caption': 'Spiralling in, then spiralling out',
                'text': 'The rotation is the same in both; what differs is the modulus of the eigenvalue. Below one, repeated application pulls everything towards the origin; above one, it throws everything outward. The argument sets how fast it turns and the modulus sets whether it survives, which is the whole stability story for a discrete system. Tune both on the',
                'href': B + 'complex-eigenvalues-2d',
                'linkText': 'complex eigenvalue explorer',
            },
        },
        'place': [
            ('3', 'rotation',
             'The conjugate partner of this eigenvalue describes the same rotation turning '
             'the other way, which is why the pair always arrives together.'),
            ('7', 'dynamics',
             'Whether a system settles, oscillates forever or blows up is therefore read '
             'off a single number: the modulus.'),
        ],
    },

    # ==================================================================
    # decompositions cluster
    # ==================================================================

    'decompositions/lower-upper': {
        'imports': [('luDiagrams', M + 'luDiagrams')],
        'units': {
            'construction': {
                'svg': 'luDiagrams.eliminate',
                'caption': 'The multiplier stored, not discarded',
                'text': 'Ordinary elimination throws away the multiplier once the zero is in place. Here it is kept and written into the lower factor, so L records the elimination and U records the result of it. Nothing extra is computed; the same arithmetic is simply being saved. Follow both factors filling in on the',
                'href': B + 'lu-decomposition',
                'linkText': 'LU decomposition visualizer',
            },
            'pivoting': {
                'svg': 'luDiagrams.swap',
                'caption': 'A row swap recorded in the permutation',
                'text': 'A zero, or an uncomfortably small number, has appeared where a pivot was needed, so rows have been exchanged and the exchange logged in P. This is why the honest statement of the factorisation is PA = LU: without the permutation there are perfectly ordinary matrices that have no LU at all. Trigger a swap on the',
                'href': B + 'lu-decomposition',
                'linkText': 'LU decomposition visualizer',
            },
        },
        'place': [
            ('2', 'construction',
             'The factorisation is therefore a by-product of elimination rather than a '
             'separate algorithm with its own cost.'),
            ('5', 'pivoting',
             'In practice pivoting is used even when it is not strictly required, because '
             'small pivots damage accuracy long before they reach zero.'),
        ],
    },

    'decompositions/qr': {
        'imports': [
            ('qrDiagrams', M + 'qrDiagrams'),
            ('gramSchmidtDiagrams', M + 'gramSchmidtDiagrams'),
        ],
        'units': {
            'viagram': {
                'svg': 'qrDiagrams.subtract',
                'caption': 'The projection removed from a column',
                'text': 'The part of this column lying along the directions already fixed is being subtracted away, leaving only what is genuinely new. The coefficients removed are not discarded &#8212; they are exactly the entries of R, which is why R comes out upper triangular without anyone arranging it. Watch both factors emerge on the',
                'href': B + 'qr-decomposition',
                'linkText': 'QR decomposition visualizer',
            },
            'connection': {
                'svg': 'gramSchmidtDiagrams.normalize',
                'caption': 'The leftover normalised to length one',
                'text': 'What remained after the projections was a direction with an arbitrary length; dividing by that length makes it a unit vector and the next column of Q. Gram-Schmidt and QR are not two procedures but one, read as a geometric construction or as a factorisation. Step through the orthogonalisation on the',
                'href': B + 'gram-schmidt',
                'linkText': 'Gram-Schmidt visualizer',
            },
        },
        'place': [
            ('2', 'viagram',
             'Classical Gram-Schmidt is the clearest route to QR and the least stable one, '
             'which is why Householder reflections follow in the next section.'),
            ('10', 'connection',
             'Seeing them as one procedure explains why improving the stability of '
             'Gram-Schmidt improves QR at the same time.'),
        ],
    },

    'decompositions/cholesky': {
        'imports': [('choleskyDiagrams', M + 'choleskyDiagrams')],
        'units': {
            'algorithm': {
                'svg': 'choleskyDiagrams.diag',
                'caption': 'A diagonal entry taken as a square root',
                'text': 'Each diagonal entry of the factor is the square root of what is left after the entries already computed in that row have been subtracted off. The whole algorithm alternates between these roots and simple divisions, and it touches only half the matrix because symmetry makes the other half redundant. Run it entry by entry on the',
                'href': B + 'cholesky-decomposition',
                'linkText': 'Cholesky decomposition visualizer',
            },
            'test': {
                'svg': 'choleskyDiagrams.notpd',
                'caption': 'A negative value under the square root',
                'text': 'The quantity about to be square-rooted has come out negative, and the algorithm stops. That failure is not a numerical accident: it happens precisely when the matrix is not positive definite, which makes attempting the decomposition the standard test for the property. Feed in a matrix that fails on the',
                'href': B + 'cholesky-decomposition',
                'linkText': 'Cholesky decomposition visualizer',
            },
        },
        'place': [
            ('3', 'algorithm',
             'Working on half the matrix is what makes this roughly twice as fast as the '
             'LU factorisation it specialises.'),
            ('7', 'test',
             'Testing by attempting the factorisation is cheaper than computing '
             'eigenvalues and gives a definite answer either way.'),
        ],
    },

    'decompositions/spectral': {
        'imports': [('spectralDiagrams', M + 'spectralDiagrams')],
        'units': {
            'outer': {
                'svg': 'spectralDiagrams.rankone',
                'caption': 'One eigenvalue times one rank-one piece',
                'text': 'Each eigenvector has been multiplied by its own transpose to give a rank-one matrix, and each of those is weighted by its eigenvalue. The sum of these pieces reconstructs the original exactly. Dropping the pieces with the smallest weights is how the decomposition turns into an approximation. Add the pieces back one at a time on the',
                'href': B + 'spectral-decomposition',
                'linkText': 'spectral decomposition visualizer',
            },
            'compute': {
                'svg': 'spectralDiagrams.factor',
                'caption': 'Q orthogonal, &#923; diagonal, Q transposed',
                'text': 'Because the eigenvectors of a symmetric matrix can be chosen orthonormal, the matrix of them is orthogonal &#8212; and the inverse of an orthogonal matrix is simply its transpose. That is the whole economy of the spectral form: no inverse ever has to be computed. Check the orthogonality yourself on the',
                'href': B + 'spectral-decomposition',
                'linkText': 'spectral decomposition visualizer',
            },
        },
        'place': [
            ('3', 'outer',
             'This is the form principal component analysis uses, where the weights are '
             'variances and the pieces are the components.'),
            ('4', 'compute',
             'Symmetry is doing all the work here; without it the eigenvector matrix need '
             'not be orthogonal and the transpose shortcut disappears.'),
        ],
    },

    'decompositions/svd': {
        'imports': [('svdDiagrams', M + 'svdDiagrams')],
        'units': {
            'values': {
                'svg': 'svdDiagrams.eigen',
                'caption': 'Singular values as roots of eigenvalues',
                'text': 'The eigenvalues of the symmetric product have been found and their square roots taken. They are never negative, because that product cannot have negative eigenvalues, and they are listed largest first by convention. This is why every matrix has singular values even when it has no eigenvalues of its own. Compute them for a rectangular matrix on the',
                'href': B + 'singular-value-decomposition',
                'linkText': 'SVD visualizer',
            },
            'factor': {
                'svg': 'svdDiagrams.factor',
                'caption': 'The three factors assembled',
                'text': 'Two orthogonal matrices with a rectangular diagonal between them, and the whole product reconstructs the original. Unlike diagonalisation this asks nothing of the matrix &#8212; not squareness, not symmetry, not a full set of eigenvectors. Every matrix without exception has this factorisation. Build it for a matrix of your own on the',
                'href': B + 'singular-value-decomposition',
                'linkText': 'SVD visualizer',
            },
        },
        'place': [
            ('3', 'values',
             'Their ordering is what makes truncation meaningful: cutting the list short '
             'always discards the least important part first.'),
            ('4', 'factor',
             'That universality is why the SVD, rather than the eigendecomposition, is the '
             'factorisation numerical work reaches for by default.'),
        ],
    },

    'decompositions': {
        'imports': [('svdDiagrams', M + 'svdDiagrams')],
        'units': {
            'svd': {
                'note': 'Hub page: one unit, on the decomposition that applies to every\nmatrix and therefore anchors the comparison the page is making.',
                'svg': 'svdDiagrams.factor',
                'caption': 'The one factorisation every matrix has',
                'text': 'Two orthogonal factors with a rectangular diagonal between them. Of the five decompositions catalogued on this page, this is the only one that demands nothing of its input &#8212; no squareness, no symmetry, no positive definiteness, no full set of eigenvectors. Compare its cost against the others on the',
                'href': B + 'singular-value-decomposition',
                'linkText': 'SVD visualizer',
            },
        },
        'place': [
            ('7', 'svd',
             'The cheaper factorisations above are worth using precisely when their '
             'conditions happen to hold; this one is the fallback when they do not.'),
        ],
    },

    # ==================================================================
    # determinants cluster
    # ==================================================================

    'determinants': {
        'imports': [
            ('determinantDiagrams', '@/app/components/linear-algebra copy/determinants/determinantDiagrams'),
            ('linearTransformationDiagrams', R2 + 'linear-transformations/linearTransformationDiagrams'),
        ],
        'units': {
            'sarrus': {
                'svg': 'determinantDiagrams.sarrus',
                'caption': 'The six signed products of a 3&#215;3',
                'text': 'Three diagonals running one way are added and three running the other are subtracted &#8212; six products in total, each using one entry from every row and every column. The pattern is a convenience for this size only: it does not extend to 4&#215;4, where the count jumps to twenty-four. Watch the diagonals traced out on the',
                'href': B + 'matrix-determinant',
                'linkText': 'determinant visualizer',
            },
            'cofactor': {
                'svg': 'determinantDiagrams["cofactor-row"]',
                'caption': 'Expansion along a row, minors highlighted',
                'text': 'For each entry of the chosen row, its own row and column are struck out and the determinant of what remains is taken, then signed and weighted. Any row or column gives the same answer, so the one with the most zeros is always the cheapest to pick. Choose a different row or column and compare on the',
                'href': B + 'matrix-determinant',
                'linkText': 'determinant visualizer',
            },
            'area': {
                'note': 'Area and orientation are geometric claims; the determinant tool\nis symbolic, so the transformation explorer carries this one.',
                'svg': ['linearTransformationDiagrams.fullRank', 'linearTransformationDiagrams.rankOne'],
                'caption': 'A grid stretched, then flattened',
                'text': 'Above, the unit square has become a parallelogram and its area is exactly the determinant. Below, the matrix has flattened the plane onto a line: the parallelogram has no area left and the determinant is zero. Singularity and zero area are the same event seen from two sides. Change the entries and watch the area respond on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
        },
        'place': [
            ('3', 'sarrus',
             'The general definition in the next section is what these six products are a '
             'special case of.'),
            ('7', 'cofactor',
             'This is the definition that actually generalises, at the price of a cost that '
             'grows faster than almost anything else in the subject.'),
            ('9', 'area',
             'Every geometric use of the determinant — volume, orientation, change of '
             'variables — is this one fact applied in more dimensions.'),
        ],
    },

    'determinants/cofactors': {
        'imports': [('determinantDiagrams', '@/app/components/linear-algebra copy/determinants/determinantDiagrams')],
        'units': {
            'signs': {
                'svg': 'determinantDiagrams["sign-pattern"]',
                'caption': 'The alternating sign board',
                'text': 'Signs alternate from the top-left corner outward, so a position\'s sign depends only on whether its row and column indices sum to an even or an odd number. The board is fixed, independent of the matrix\'s contents, and it is the only thing separating a minor from a cofactor. Generate it at other sizes on the',
                'href': B + 'matrix-determinant',
                'linkText': 'determinant visualizer',
            },
            'laplace': {
                'svg': 'determinantDiagrams["cofactor-row"]',
                'caption': 'One row expanded, term by term',
                'text': 'Each entry of the row is multiplied by the determinant of the matrix left when its own row and column are removed, and the sign board decides whether the term is added or subtracted. The recursion is visible: every minor is itself a determinant awaiting the same treatment. Expand along a column instead and check the answer matches on the',
                'href': B + 'matrix-determinant',
                'linkText': 'determinant visualizer',
            },
        },
        'place': [
            ('2', 'signs',
             'Because the board never changes, the sign of a cofactor can always be read '
             'off its position without any computation.'),
            ('3', 'laplace',
             'Expanding along a row with zeros in it kills those terms before their minors '
             'are ever computed, which is the only real economy available here.'),
        ],
    },

    'determinants/properties': {
        'imports': [('determinantDiagrams', '@/app/components/linear-algebra copy/determinants/determinantDiagrams')],
        'units': {
            'triangular': {
                'svg': 'determinantDiagrams.diagonal',
                'caption': 'Only the diagonal product survives',
                'text': 'Every term in the full expansion that strays off the diagonal picks up a zero somewhere and dies, leaving a single surviving product. This is why reducing a matrix to triangular form before taking its determinant is worth the effort: the elimination is cheap and the answer is then one multiplication chain. See the same shortcut applied on the',
                'href': B + 'matrix-determinant',
                'linkText': 'determinant visualizer',
            },
        },
        'place': [
            ('7', 'triangular',
             'Row reduction and the determinant therefore work together rather than '
             'against each other, provided the swaps and scalings are tracked.'),
        ],
    },

    'determinants/geometry': {
        'imports': [('linearTransformationDiagrams', R2 + 'linear-transformations/linearTransformationDiagrams')],
        'units': {
            'signedarea': {
                'svg': 'linearTransformationDiagrams.fullRank',
                'caption': 'The unit square after the matrix has acted',
                'text': 'The square has become a parallelogram, and the factor by which its area changed is the determinant. Every other region on the plane is scaled by that same factor, however it is shaped, which is what lets one number describe the whole map. Change the matrix and watch the parallelogram follow on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
            'collapse': {
                'svg': 'linearTransformationDiagrams.rankOne',
                'caption': 'The plane flattened onto a line',
                'text': 'The two columns now point along the same line, the grid has collapsed, and every region on the plane has been crushed to zero area. A zero determinant is exactly this: not a small scaling but a loss of a dimension, which is why nothing can be recovered and no inverse exists. Push a matrix into and out of this state on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
        },
        'place': [
            ('1', 'signedarea',
             'The sign of that number, set aside for now, is what the orientation section '
             'below is about.'),
            ('5', 'collapse',
             'Invertibility, independence of the columns and a non-zero determinant are '
             'three descriptions of this single picture not collapsing.'),
        ],
    },

    'determinants/applications': {
        'imports': [
            ('cramerDiagrams', M + 'cramerDiagrams'),
            ('inverseDiagrams', M + 'inverseDiagrams'),
            ('crossProductDiagrams', M + 'crossProductDiagrams'),
        ],
        'units': {
            'cramer': {
                'svg': 'cramerDiagrams.replace',
                'caption': 'One column swapped for the right-hand side',
                'text': 'The column belonging to the unknown being solved for has been replaced by the constants, and the determinant of that altered matrix divided by the original gives the value. Each unknown costs its own determinant, which is why the rule is elegant for two or three and unusable beyond. Solve a full system with it on the',
                'href': B + 'cramers-rule',
                'linkText': "Cramer's rule visualizer",
            },
            'adjugate': {
                'svg': 'inverseDiagrams.cofactor',
                'caption': 'The cofactor array, before transposing',
                'text': 'Transposing this array and dividing by the determinant produces the inverse, which puts the invertibility condition in plain view: every step works until the division, and the division fails precisely when the determinant is zero. Follow it through to the finished inverse on the',
                'href': B + 'matrix-inverse',
                'linkText': 'matrix inverse visualizer',
            },
            'cross': {
                'svg': 'crossProductDiagrams.determinant',
                'caption': 'The cross product written as a determinant',
                'text': 'Basis vectors occupy the first row and the two operands fill the other two, so the cross product is a cofactor expansion wearing different clothes. The alternating sign board is what puts the minus on the middle component, and the whole thing vanishing means the two rows were proportional &#8212; that is, the vectors were parallel. Expand it yourself on the',
                'href': B + 'vector-cross-product',
                'linkText': 'cross product visualizer',
            },
        },
        'place': [
            ('1', 'cramer',
             'The rule is a statement about structure rather than a practical method; '
             'elimination beats it for anything you would actually solve.'),
            ('2', 'adjugate',
             'The same warning applies here: exact, illuminating, and far too expensive '
             'to use beyond small matrices.'),
            ('3', 'cross',
             'Seen this way the cross product is not a new operation at all but a '
             'determinant with a basis row bolted on.'),
        ],
    },

    # ==================================================================
    # linear-systems cluster
    # ==================================================================

    'linear-systems': {
        'imports': [
            ('linearSystemDiagrams', M + 'linearSystemDiagrams'),
            ('gaussEliminationDiagrams', '@/app/components/matrix-multiplication/gaussEliminationDiagrams'),
        ],
        'units': {
            'outcomes': {
                'svg': ['linearSystemDiagrams.unique', 'linearSystemDiagrams.none', 'linearSystemDiagrams.infinite'],
                'caption': 'Unique, none, infinitely many',
                'text': 'Three finished eliminations, three different endings: a pivot in every column and one answer; a contradiction row and no answer; a free column and a whole family of answers. There is no fourth ending available to a linear system, and which one you get is settled by the pivots rather than by the arithmetic. Build systems that land in each case on the',
                'href': B + 'linear-system-solutions',
                'linkText': 'linear system solutions visualizer',
            },
            'echelon': {
                'svg': ['gaussEliminationDiagrams.refDone', 'gaussEliminationDiagrams.rrefDone'],
                'caption': 'Row echelon form, then reduced',
                'text': 'The upper form has zeros below every pivot and is enough to back-substitute from. The lower one goes further, clearing above the pivots and scaling them to one, so the solution can simply be read off. The extra work buys legibility, not correctness. Run both passes on a system of your own on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
        },
        'place': [
            ('4', 'outcomes',
             'Everything else on this page is machinery for finding out which of these '
             'three you are in.'),
            ('7', 'echelon',
             'Reduced form is unique to the matrix, while the echelon form reached along '
             'the way depends on the route taken.'),
        ],
    },

    'linear-systems/gaussian-elimination': {
        'imports': [('gaussEliminationDiagrams', '@/app/components/matrix-multiplication/gaussEliminationDiagrams')],
        'units': {
            'forward': {
                'svg': 'gaussEliminationDiagrams.eliminate',
                'caption': 'Clearing one entry beneath a pivot',
                'text': 'A multiple of the pivot row is being subtracted from the row below to put a zero under the pivot. Nothing about the solution set changes, because the operation is reversible &#8212; the same multiple added back restores the original. That reversibility is the licence for the whole algorithm. Step through a full elimination on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
            'jordan': {
                'svg': 'gaussEliminationDiagrams.rrefDone',
                'caption': 'Reduced row echelon form reached',
                'text': 'Pivots have been scaled to one and cleared above as well as below, so each pivot column now holds a single one and nothing else. At this point no back substitution is left: the values are sitting in the final column. Compare the effort against stopping at echelon form on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
            'nosolution': {
                'svg': 'gaussEliminationDiagrams.zeroError',
                'caption': 'A row of zeros against a non-zero constant',
                'text': 'The coefficients in this row have all been eliminated while the constant has not, so the row now asserts that zero equals something non-zero. One such row is enough to make the entire system inconsistent, regardless of how well the other rows behaved. Construct one deliberately on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
        },
        'place': [
            ('3', 'forward',
             'Every step of forward elimination is one instance of this move, applied '
             'downward and then leftward across the matrix.'),
            ('6', 'jordan',
             'Whether the extra clearing is worth it depends entirely on whether you want '
             'the answer or the structure.'),
            ('9', 'nosolution',
             'Inconsistency is therefore detected, not decided — it announces itself as a '
             'row rather than having to be tested for.'),
        ],
    },

    'linear-systems/echelon-form': {
        'imports': [('gaussEliminationDiagrams', '@/app/components/matrix-multiplication/gaussEliminationDiagrams')],
        'units': {
            'ref': {
                'svg': 'gaussEliminationDiagrams.refDone',
                'caption': 'Echelon form: a staircase of pivots',
                'text': 'Each pivot sits strictly to the right of the one above it and every entry below a pivot is zero, which is what makes the shape a staircase. Rows of all zeros, if any, have sunk to the bottom. The form reached depends on the route taken through the elimination. Try a different pivot order and compare on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
            'rref': {
                'svg': 'gaussEliminationDiagrams.rrefDone',
                'caption': 'Reduced form: pivots alone in their columns',
                'text': 'Every pivot is one and is the only non-zero entry in its column. Unlike the echelon form above, this one does not depend on how the elimination was carried out &#8212; every route ends at the same matrix, which is what makes uniqueness claims about it possible. Verify that by taking a different route on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
            'inconsistent': {
                'svg': 'gaussEliminationDiagrams.zeroError',
                'caption': 'The contradiction row',
                'text': 'All coefficients gone, constant still present: the row claims zero equals a non-zero number. Detecting inconsistency needs no separate test, because reduction surfaces this row on its own if the system has no solution. Force one to appear on the',
                'href': B + 'gauss-elimination',
                'linkText': 'Gaussian elimination visualizer',
            },
        },
        'place': [
            ('1', 'ref',
             'This is as far as plain Gaussian elimination goes; everything below this '
             'section is about what the extra reduction buys.'),
            ('2', 'rref',
             'Uniqueness is what lets the reduced form be used as a canonical description '
             'of the matrix rather than merely a convenient one.'),
            ('8', 'inconsistent',
             'Spotting this row early saves the rest of the reduction, since no later step '
             'can repair it.'),
        ],
    },

    'linear-systems/homogeneous': {
        'imports': [
            ('linearSystemDiagrams', M + 'linearSystemDiagrams'),
            ('subspacesDiagrams', M + 'subspacesDiagrams'),
        ],
        'units': {
            'nontrivial': {
                'svg': 'linearSystemDiagrams.infinite',
                'caption': 'A free column, and with it a family of solutions',
                'text': 'The elimination has left a column without a pivot, so one unknown can be chosen freely and the others follow. For a homogeneous system that guarantees solutions beyond the zero one, which is why more unknowns than equations always produces them &#8212; there are not enough pivots to go round. Vary the shape and watch the free columns appear on the',
                'href': B + 'linear-system-solutions',
                'linkText': 'linear system solutions visualizer',
            },
            'nullspace': {
                'svg': 'subspacesDiagrams.nullspace',
                'caption': 'Special solutions, one per free column',
                'text': 'Each free variable is set to one in turn while the others are held at zero, and the pivot variables are solved to match. The vectors produced are independent and they span every solution of the system, which is what it means to call the solution set the null space rather than merely to say it resembles one. Generate them for your own matrix on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
        },
        'place': [
            ('2', 'nontrivial',
             'Counting pivots against unknowns therefore answers the question before any '
             'solution is written down.'),
            ('3', 'nullspace',
             'Because the set is closed under addition and scaling, it is a subspace, and '
             'that is what makes a basis for it worth having.'),
        ],
    },

    'linear-systems/solvability': {
        'imports': [('linearSystemDiagrams', M + 'linearSystemDiagrams')],
        'units': {
            'cases': {
                'svg': ['linearSystemDiagrams.unique', 'linearSystemDiagrams.none', 'linearSystemDiagrams.infinite'],
                'caption': 'The three endings, side by side',
                'text': 'Existence fails only in the middle case, where a contradiction row appears. Uniqueness fails only in the last, where a free column leaves an unknown unpinned. The two questions are independent of each other, and between them they exhaust what can happen. Build a system for each ending on the',
                'href': B + 'linear-system-solutions',
                'linkText': 'linear system solutions visualizer',
            },
        },
        'place': [
            ('4', 'cases',
             'The rank conditions in the next section are these three pictures restated as '
             'arithmetic on two numbers.'),
        ],
    },

    # ==================================================================
    # matrix cluster
    # ==================================================================

    'matrix/operations': {
        'imports': [
            ('matrixAdditionDiagrams', M + 'matrixAdditionDiagrams'),
            ('multiplicationDiagrams', M + 'multiplicationDiagrams'),
            ('transposeDiagrams', M + 'transposeDiagrams'),
        ],
        'units': {
            'addition': {
                'svg': 'matrixAdditionDiagrams.done',
                'caption': 'A + B, every entry settled',
                'text': 'Each entry of the result came from the one pair sitting in the same position, and from nothing else. That is why the two matrices must have identical shapes and why the sum keeps that shape &#8212; there is no mechanism here for a row to reach a different row. Run it entry by entry, or switch to subtraction, on the',
                'href': B + 'matrix-addition',
                'linkText': 'matrix addition visualizer',
            },
            'multiplication': {
                'svg': 'multiplicationDiagrams["row-column"]',
                'caption': 'One entry of AB, from a row and a column',
                'text': 'The highlighted entry is being built by pairing the marked row of A with the marked column of B, multiplying term by term and summing. Every entry of the product costs one such pass, which is where the shape rule comes from: the row and the column have to be the same length or the pairing runs out. Switch between the row-column, column, and outer-product readings on the',
                # matrix-multiplication never moved into the section - it is one of the
                # legacy high-traffic tool pages that stay at /visual-tools/.
                'href': '/visual-tools/matrix-multiplication',
                'linkText': 'matrix multiplication visualizer',
            },
            'transpose': {
                'svg': 'transposeDiagrams["diagonal-reflection"]',
                'caption': 'Reflection across the main diagonal',
                'text': 'Every entry has swapped places with its mirror image across the diagonal, and the entries sitting on the diagonal have not moved at all. Read that way the transpose is one reflection rather than a rule about indices, and it explains at a glance why transposing twice returns the original. Watch it run cell by cell instead on the',
                'href': B + 'matrix-transpose',
                'linkText': 'transpose visualizer',
            },
        },
        'place': [
            ('1', 'addition',
             'Subtraction and scaling in the next two sections work the same way, one '
             'position at a time, which is why they share addition\'s shape rules.'),
            ('5', 'multiplication',
             'This single-entry view is the definition; the column and row readings later '
             'on the page are the same arithmetic grouped differently.'),
            ('8', 'transpose',
             'Because the diagonal is fixed, a matrix equal to its own transpose is exactly '
             'one that is symmetric about that line.'),
        ],
    },

    'matrix/types': {
        'imports': [('matrixTypesDiagrams', '@/app/components/matrices/matrixTypesDiagrams')],
        'units': {
            'identity': {
                'svg': 'matrixTypesDiagrams.identity',
                'caption': 'The identity, generated at this size',
                'text': 'Ones the whole length of the diagonal, zeros everywhere else. Multiplying by this matrix leaves any compatible matrix untouched, and the picture shows why: each row of the identity selects exactly one row of whatever it meets and ignores the rest. Generate it at other sizes, alongside every other type on this page, on the',
                'href': B + 'matrix-types',
                'linkText': 'matrix type generator',
            },
            'triangular': {
                'svg': 'matrixTypesDiagrams.upperTriangular',
                'caption': 'Upper triangular: everything below the diagonal is zero',
                'text': 'The zeros form a solid block beneath the diagonal, which is what makes this shape so cheap to work with: the determinant is just the diagonal product, and a system in this form can be solved by substituting upwards with no elimination left to do. Flip to the lower form and compare on the',
                'href': B + 'matrix-types',
                'linkText': 'matrix type generator',
            },
            'symmetric': {
                'svg': 'matrixTypesDiagrams.symmetric',
                'caption': 'Symmetric: entries mirrored across the diagonal',
                'text': 'Each entry above the diagonal is matched by an equal entry below it, so the matrix is unchanged by reflection in that line &#8212; it equals its own transpose. This is the shape that guarantees real eigenvalues and an orthogonal set of eigenvectors later on. Compare it with the skew-symmetric case, where the mirrored entries carry opposite signs, on the',
                'href': B + 'matrix-types',
                'linkText': 'matrix type generator',
            },
        },
        'place': [
            ('2', 'identity',
             'Every notion of an inverse on this site is stated against this matrix: to '
             'invert something is to get back here.'),
            ('4', 'triangular',
             'Elimination is, in these terms, the business of turning an arbitrary matrix '
             'into this shape.'),
            ('5', 'symmetric',
             'Symmetry is the strongest structural gift a square matrix can have, and the '
             'spectral results later in the section are its payoff.'),
        ],
    },

    'matrix/rank': {
        'imports': [
            ('rankDiagrams', M + 'rankDiagrams'),
            ('subspacesDiagrams', M + 'subspacesDiagrams'),
        ],
        'units': {
            'reduction': {
                'svg': 'rankDiagrams.done',
                'caption': 'Elimination finished, pivots counted',
                'text': 'The pivots have been marked and counted, and that count is the rank. Row operations were applied throughout without changing the answer, because none of them can create or destroy an independent direction &#8212; they only make the existing ones easy to see. Run the elimination on a matrix of your own on the',
                'href': B + 'matrix-rank',
                'linkText': 'rank visualizer',
            },
            'foursubspaces': {
                'svg': 'subspacesDiagrams.rref',
                'caption': 'The reduced form all four spaces are read from',
                'text': 'Pivot columns and free columns are both visible here, and between them they fix every one of the four spaces: the pivots give the dimensions of the row and column spaces, the free columns give the dimensions of the null spaces. One number, the rank, is doing all of that work at once. See each space extracted in turn on the',
                'href': B + 'four-fundamental-subspaces',
                'linkText': 'four fundamental subspaces visualizer',
            },
        },
        'place': [
            ('3', 'reduction',
             'Counting pivots is therefore not an approximation to the rank but a direct '
             'measurement of it.'),
            ('9', 'foursubspaces',
             'Rank is best thought of as the single number the four spaces are all sized '
             'against.'),
        ],
    },

    'matrix/inverse': {
        'imports': [('inverseDiagrams', M + 'inverseDiagrams')],
        'units': {
            'rowreduce': {
                'svg': 'inverseDiagrams.done',
                'caption': 'The identity reached on the left, the inverse on the right',
                'text': 'The same row operations were applied to both halves throughout. By the time the left block has become the identity, the right block has recorded everything that was done to get there &#8212; and that record is the inverse. A matrix that cannot reach the identity has no inverse to record. Step through the operations on the',
                'href': B + 'matrix-inverse',
                'linkText': 'matrix inverse visualizer',
            },
            'adjugate': {
                'svg': 'inverseDiagrams.cofactor',
                'caption': 'Cofactors assembled before transposing and dividing',
                'text': 'Each position is being filled with the signed determinant of the matrix left when its row and column are deleted. Transposing this array and dividing by the determinant gives the inverse, which shows plainly where the failure lives: a zero determinant makes the final division impossible no matter how well the cofactors came out. Follow the full route on the',
                'href': B + 'matrix-inverse',
                'linkText': 'matrix inverse visualizer',
            },
        },
        'place': [
            ('4', 'rowreduce',
             'For anything larger than 3×3 this is the method that is actually used; the '
             'adjugate route below is for understanding rather than for computing.'),
            ('5', 'adjugate',
             'The formula is exact and completely impractical beyond small matrices, since '
             'the number of cofactors grows faster than any gain in clarity.'),
        ],
    },

    'matrix/trace': {
        'imports': [('traceDiagrams', M + 'traceDiagrams')],
        'units': {
            'definition': {
                'svg': 'traceDiagrams.sweep',
                'caption': 'Sweeping the main diagonal',
                'text': 'Only the entries on the main diagonal are picked up; everything off it is passed over untouched. That is the entire definition, and it is why the trace is defined for square matrices alone &#8212; a non-square matrix has no full diagonal to sweep. Run the sweep on your own matrix on the',
                'href': B + 'matrix-trace',
                'linkText': 'trace visualizer',
            },
        },
        'place': [
            ('1', 'definition',
             'Everything that follows — linearity, the cyclic property, the link to '
             'eigenvalues — is a consequence of the trace being this simple a sum.'),
        ],
    },

    'matrix': {
        'imports': [('linearTransformationDiagrams', R2 + 'linear-transformations/linearTransformationDiagrams')],
        'units': {
            'transformation': {
                'note': 'Hub page: one unit, on the section that reframes a matrix as an\naction rather than a table. That view needs the geometric tool.',
                'svg': 'linearTransformationDiagrams.fullRank',
                'caption': 'The unit grid after the matrix has acted',
                'text': 'The grid has been stretched and sheared, but the lines are still straight, still evenly spaced, and still parallel in each family, and the origin has not moved. Those survivals are what the word linear is protecting. Seen this way a matrix is not a table of numbers but an instruction for moving the whole plane at once. Change the entries and watch the grid answer on the',
                'href': B + 'linear-transformation-2d',
                'linkText': 'linear transformation explorer',
            },
        },
        'place': [
            ('10', 'transformation',
             'The other three views on this page — table, column collection, system of '
             'equations — are all recoverable from this one.'),
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
