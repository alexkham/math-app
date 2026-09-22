# -*- coding: utf-8 -*-
# Operation A unit specs, combinatorics. One entry per content page.
#
# This file holds the JUDGEMENT and the PROSE; opa-plant.py does the wiring:
#   python opa-plant.py --specs=opa-specs-combinatorics.py <slug> [--apply]
#
# Rules that shape what is in here:
#   * The bar is demonstration value, not treatment. A section that merely uses
#     a term earns nothing. Most mapped terms get no unit - that is a correct
#     pass, not a thin one.
#   * At most one unit per section. A unit never closes a section: every one is
#     followed by a sealing sentence that finishes the section's thought.
#   * Panel text is raw HTML - unicode maths and entities only, no $...$ and no
#     markdown links. It ends WITHOUT punctuation: the helper appends the link
#     and the full stop.
#   * One best-demonstrating tool per concept, reused site-wide. The decisions
#     recorded by this pass are: binomial_coefficient and pascals_triangle ->
#     pascal-triangle; pigeonhole_principle -> distribution.
#
# Judgement notes for what was NOT given a unit:
#   * basics section 3 (Permutations and Combinations) and section 4 (Standard
#     Scenarios) survey ten templates at once. Any single frozen state would
#     privilege one template over the nine beside it, so the page is better
#     served by the per-scenario tools its own prose already links.
#   * binomial-theorem section 2 (The General Term) is about an index
#     convention; no frozen state demonstrates a subscript.
#   * counting-principles sections 3, 4, 6 and 8, inclusion-exclusion section 5
#     and permutations section 8 mention their terms in passing or inside an
#     FAQ answer - passing mention earns nothing.

GEN = '@/app/components/combinatorics/new-visualizers/general/'
SCN = '@/app/components/combinatorics/new-visualizers/scenes/'
B = '/combinatorics/visual-tools/'

SPECS = {

    # ------------------------------------------------------------------
    # Section 5 states Pascal's rule in display maths and says it "arranges all
    # binomial coefficients into Pascal's triangle". The tool's default focus
    # is exactly that rule, so the frozen state and the sentence are the same
    # statement in two notations.
    'combinatorics/basics': {
        'imports': [('pascalTriangleDiagrams', GEN + 'pascalTriangleDiagrams')],
        'units': {
            'pascalRule': {
                'svg': 'pascalTriangleDiagrams.identity',
                'caption': 'C(4,2) = C(3,1) + C(3,2)',
                'text': 'The highlighted entry is the sum of the two directly above it, which is Pascal&#8217;s rule read off the array instead of out of the formula. Every interior entry is built the same way, so the whole triangle can be generated from its edges of 1s without evaluating a single factorial. Focus any entry and watch its two parents light up on the',
                'href': B + 'pascal-triangle',
                'linkText': 'Pascal&#8217;s triangle visualizer',
            },
        },
        'place': [
            ('5', 'pascalRule',
             'Seen that way the binomial coefficient is not only an answer to a counting '
             'question but an entry in a structure, and the identities above are statements '
             'about where it sits in that structure.'),
        ],
    },

    # ------------------------------------------------------------------
    # Section 3 is the triangle itself. Its distinctive content is what the
    # array ENCODES, and the first property it names is the symmetry of a row,
    # so the symmetry state is the one that matches this section rather than
    # the Pascal's-rule state used on the basics page.
    'combinatorics/binomial-coefficient': {
        'imports': [('pascalTriangleDiagrams', GEN + 'pascalTriangleDiagrams')],
        'units': {
            'symmetry': {
                'svg': 'pascalTriangleDiagrams.symmetry',
                'caption': 'C(7,2) = C(7,5) = 21',
                'text': 'The two highlighted entries sit at mirrored positions in the same row and hold the same value, which is the identity C(n,k) = C(n,n&#8722;k) drawn rather than proved. Choosing which 2 of 7 items to take is the same act as choosing which 5 to leave, and the array makes that restatement visible as a reflection. Move the focus along a row and watch its mirror move with it on the',
                'href': B + 'pascal-triangle',
                'linkText': 'Pascal&#8217;s triangle visualizer',
            },
        },
        'place': [
            ('3', 'symmetry',
             'The diagonals and the shallow-diagonal sums below are read off the same array, '
             'so each one is another identity that the arrangement makes obvious.'),
        ],
    },

    # ------------------------------------------------------------------
    # Section 3 says in so many words that setting a = b = 1 is "the algebraic
    # counterpart of the row-sum identity from Pascal's triangle". The row-sum
    # state is that counterpart in the array.
    'combinatorics/binomial-theorem': {
        'imports': [('pascalTriangleDiagrams', GEN + 'pascalTriangleDiagrams')],
        'units': {
            'rowsum': {
                'svg': 'pascalTriangleDiagrams.rowsum',
                'caption': 'Row 4 sums to 16 = 2&#8308;',
                'text': 'The whole of row 4 is highlighted and its entries total 16, which is the substitution a = b = 1 carried out in the array instead of in the algebra. Reading the same row as a count of subsets explains why the total is a power of two: each of the 4 items is independently either in or out. Highlight any row and watch its total double on the',
                'href': B + 'pascal-triangle',
                'linkText': 'Pascal&#8217;s triangle visualizer',
            },
        },
        'place': [
            ('3', 'rowsum',
             'The other substitutions work the same way: each one turns a free choice of '
             'a and b into a statement about the coefficients themselves.'),
        ],
    },

    # ------------------------------------------------------------------
    # Section 5 states the pigeonhole principle as n items among k containers
    # with n > k. The distribution tool's big43 state is 4 items into 3 cells -
    # the smallest case where the conclusion is forced - and the tool's own
    # note on that state records it as the pigeonhole case.
    'combinatorics/counting-principles': {
        'imports': [('distributionIntoCellsDiagrams', SCN + 'distributionIntoCellsDiagrams')],
        'units': {
            'pigeonhole': {
                'svg': 'distributionIntoCellsDiagrams.big43',
                'caption': '4 items into 3 cells: 3&#8308; = 81 ways',
                'text': 'Every one of the 81 assignments of 4 items to 3 cells is enumerated here, and not one of them leaves all three cells with a single item &#8212; there are simply not enough cells to go round. That is the pigeonhole principle as an exhaustive check rather than an argument: the crowded cell is present in all 81 cases, which is why the conclusion needs no construction. Change the counts and watch the guarantee appear and disappear on the',
                'href': B + 'distribution',
                'linkText': 'distribution into cells visualizer',
            },
        },
        'place': [
            ('5', 'pigeonhole',
             'The generalized form below is the same argument with the threshold raised: '
             'push enough items in and some container must hold not just two but many.'),
        ],
    },
}
