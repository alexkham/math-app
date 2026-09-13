# Operation A - $conceptToolMap for linear algebra.
#
# "One best-demonstrating tool per concept, decided once, reused everywhere."
# Written into content-pages-registry.json $meta.$conceptToolMap so every later
# page pass obeys the same winner instead of re-deciding per page.
#
# The criterion is DEMONSTRATION, not coverage: which tool shows this concept
# happening? A tool that merely mentions the term is not a candidate. Where two
# tools genuinely split the concept - symbolic vs geometric - the winner is the
# one a reader meets the concept through first, and the other is a runner-up.
#
# DRY RUN by default. --apply writes.

import io, json, sys, datetime

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
PATH = 'app/api/db/repositories/content-pages-registry.json'
TODAY = datetime.date.today().isoformat()
P = 'linear-algebra-'

# concept -> (winner, [runners-up], why)
WINNERS = {
    # --- vectors ---------------------------------------------------------
    'vector':            ('vector-addition', ['vector-magnitude'], 'Arrows built component by component; the most basic place a vector is seen acting.'),
    'scalar':            ('vector-scalar-multiplication', ['matrix-scalar-multiplication'], 'Scaling is the whole content of the tool.'),
    'magnitude':         ('vector-magnitude', [], 'Length is the tool subject.'),
    'unit_vector':       ('vector-magnitude', [], 'Normalisation is a state of the magnitude tool.'),
    'vector_addition':   ('vector-addition', [], 'Direct.'),
    'linear_combination': ('vector-linear-combination', ['matrix-linear-combination'], 'Three phases scale-scale-add are exactly the concept.'),
    'dot_product':       ('vectors-inner-product', [], 'Direct.'),
    'inner_product':     ('vectors-inner-product', [], 'Direct.'),
    'cross_product':     ('vector-cross-product', [], 'Direct.'),
    'projection':        ('vector-projection', ['projection-2d'], 'Vector-onto-vector is the elementary case; projection-2d is the matrix view.'),
    'orthogonal_vectors': ('vectors-inner-product', ['gram-schmidt'], 'Orthogonality reads off the inner product being zero.'),
    'orthogonal_set':    ('gram-schmidt', [], 'The tool constructs one.'),
    'orthonormal_set':   ('gram-schmidt', [], 'Normalise step produces it.'),
    'gram_schmidt':      ('gram-schmidt', [], 'Direct.'),
    'orthogonal_complement': ('four-fundamental-subspaces', ['projection-2d'], 'The orthogonality pairing between the four spaces is a state of the tool.'),

    # --- vector spaces ---------------------------------------------------
    'vector_space':      ('span-independence-2d', ['vector-linear-combination'], 'Closure under combination is what the span region shows.'),
    'subspace':          ('span-membership', ['four-fundamental-subspaces'], 'Membership test against a spanned set is the tool question.'),
    'span':              ('span-membership', ['span-independence-2d'], 'Is b in the span - the tool answers exactly this.'),
    'linear_independence': ('span-independence-2d', [], 'Independent vs dependent is the tool toggle.'),
    'basis':             ('change-basis-2d', ['span-independence-2d'], 'Coordinates in a chosen basis are the tool subject.'),
    'dimension':         ('span-independence-2d', ['four-fundamental-subspaces'], 'Collapse from plane to line as independence fails is dimension made visible.'),

    # --- matrices --------------------------------------------------------
    'matrix':            ('matrix-types', ['matrix-addition'], 'The generator shows what a matrix is and what kinds exist.'),
    'square_matrix':     ('matrix-types', [], 'A type in the generator.'),
    'diagonal_matrix':   ('matrix-types', [], 'A type in the generator.'),
    'identity_matrix':   ('matrix-types', ['matrix-multiplication'], 'A type in the generator.'),
    'symmetric_matrix':  ('matrix-types', ['spectral-decomposition'], 'A type in the generator.'),
    'singular_matrix':   ('matrix-determinant', ['matrix-inverse'], 'Zero determinant is where singularity appears.'),
    'positive_definite_matrix': ('cholesky-decomposition', [], 'The not-positive-definite state is the failure the tool shows.'),
    'trace':             ('matrix-trace', [], 'Direct.'),
    'determinant':       ('matrix-determinant', ['cramers-rule'], 'Direct.'),
    'minor':             ('matrix-determinant', [], 'Cofactor expansion state.'),
    'cofactor':          ('matrix-determinant', ['matrix-inverse'], 'Cofactor expansion state.'),
    'cofactor_matrix':   ('matrix-inverse', ['matrix-determinant'], 'The adjugate route to the inverse.'),
    'inverse_matrix':    ('matrix-inverse', [], 'Direct.'),
    'matrix_multiplication': ('matrix-multiplication', ['matrix-composition-2d'], 'Direct.'),
    'similar_matrices':  ('change-basis-2d', ['matrix-diagonalization'], 'Same map in two bases is what similarity means.'),

    # --- systems ---------------------------------------------------------
    'augmented_matrix':  ('gauss-elimination', [], 'The tool operates on one.'),
    'pivot':             ('gauss-elimination', ['lu-decomposition'], 'Pivots are highlighted at each elimination step.'),
    'row_echelon_form':  ('gauss-elimination', [], 'A named stage of the tool.'),
    'reduced_row_echelon_form': ('gauss-elimination', ['four-fundamental-subspaces'], 'A named stage of the tool.'),
    'homogeneous_system': ('linear-system-solutions', ['four-fundamental-subspaces'], 'The none/unique/infinite outcomes are the tool states.'),
    'rank':              ('matrix-rank', ['four-fundamental-subspaces'], 'Direct.'),
    'column_space':      ('four-fundamental-subspaces', ['matrix-rank'], 'One of the four spaces the tool draws.'),
    'row_space':         ('four-fundamental-subspaces', ['matrix-rank'], 'One of the four spaces the tool draws.'),
    'left_null_space':   ('four-fundamental-subspaces', [], 'One of the four spaces the tool draws.'),

    # --- transformations -------------------------------------------------
    'linear_transformation': ('linear-transformation-2d', ['matrix-composition-2d'], 'The grid deforming under the matrix is the concept.'),
    'orthogonal_matrix': ('orthogonal-matrices', ['reflection-2d'], 'Direct.'),

    # --- eigen -----------------------------------------------------------
    'eigenvalue':        ('eigenvalues-eigenvectors', ['eigen-vectors-2d'], 'Characteristic-polynomial roots; the symbolic route readers meet first.'),
    'eigenvector':       ('eigen-vectors-2d', ['eigenvalues-eigenvectors'], 'Invariant directions are best seen geometrically.'),
    'eigenspace':        ('eigen-vectors-2d', [], 'Repeated-eigenvalue state shows the whole space.'),
    'characteristic_polynomial': ('eigenvalues-eigenvectors', [], 'The roots state.'),
    'algebraic_multiplicity': ('eigen-vectors-2d', ['eigenvalues-eigenvectors'], 'Repeated vs defective states are the distinction.'),
    'geometric_multiplicity': ('eigen-vectors-2d', [], 'Defective state shows the shortfall.'),
    'diagonalizable_matrix': ('matrix-diagonalization', ['eigen-vectors-2d'], 'Direct.'),

    # --- decompositions --------------------------------------------------
    'lu_decomposition':  ('lu-decomposition', ['gauss-elimination'], 'Direct.'),
    'qr_decomposition':  ('qr-decomposition', ['gram-schmidt'], 'Direct.'),
    'cholesky_decomposition': ('cholesky-decomposition', [], 'Direct.'),
    'svd':               ('singular-value-decomposition', ['spectral-decomposition'], 'Direct.'),
    'singular_value':    ('singular-value-decomposition', [], 'Direct.'),
    'least_squares':     ('least-squares', ['vector-projection'], 'Direct.'),
}


def main():
    reg = json.load(io.open(PATH, encoding='utf-8'))
    cmap = reg['$meta'].setdefault('$conceptToolMap', {})
    added = kept = 0
    for concept, (tool, runners, why) in sorted(WINNERS.items()):
        if concept in cmap:
            kept += 1
            print('  KEPT    %-26s -> %s (already decided)' % (concept, cmap[concept].get('tool')))
            continue
        added += 1
        cmap[concept] = {'tool': tool, 'decided': TODAY,
                         'runnersUp': runners, 'why': why}
    print('-' * 70)
    print('concepts decided now: %d   pre-existing left alone: %d   map size: %d'
          % (added, kept, len(cmap)))
    if '--apply' in sys.argv:
        io.open(PATH, 'w', encoding='utf-8').write(
            json.dumps(reg, ensure_ascii=False, indent=2) + '\n')
        print('WRITTEN to %s' % PATH)
    else:
        print('DRY RUN - nothing written.')


main()
