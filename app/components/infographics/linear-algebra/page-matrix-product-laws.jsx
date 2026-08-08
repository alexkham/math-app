import React from 'react';
import Head from 'next/head';
import PropertyLawCard from '@/app/components/infographics/linear-algebra/PropertyLawCard';
/* ============================================================================
 * getStaticProps — all content is built here and handed down as props.
 * The page never constructs data; the component never reaches for it.
 * ==========================================================================*/
export async function getStaticProps() {

  const matrixProductLaws = {
    kicker: 'Matrix \u00B7 operations',
    title: 'Which laws survive the matrix product',
    intro: 'Matrix multiplication inherits some laws from scalar arithmetic and breaks others. Every entry states the condition under which it holds, and every failure exhibits the pair that breaks it.',
    tallyLabel: 'laws',
    footnote: 'Three of six fail. That ratio is why [similarity](!/linear-algebra/transformations/basis-change) rather than equality is the working notion of &quot;same transformation&quot; in this subject.',
    laws: [
      {
        name: 'Associativity',
        statement: '$(AB)C = A(BC)$',
        verdict: 'holds',
        requires: 'shapes conformable',
        note: 'Lets you drop parentheses entirely in a chain of products \u2014 the reason [matrix powers](!/linear-algebra/matrix/operations) are well defined without bracketing.',
      },
      {
        name: 'Commutativity',
        statement: '$AB \\neq BA$',
        verdict: 'fails',
        holdsWhen: 'both diagonal, or $B = A^{-1}$, or $B = I$',
        note: 'The single most consequential failure in the subject. It is why [cancellation](!/linear-algebra/matrix/inverse) breaks and why the transpose reverses order.',
        witness: {
          label: 'Witness',
          lines: [
            'A = [[0,1],[0,0]],  B = [[0,0],[1,0]]',
            'AB = [[1,0],[0,0]]',
            'BA = [[0,0],[0,1]]',
          ],
        },
        scene: {
          name: 'multiplication',
          content: {
            A: [[0, 1], [0, 0]],
            B: [[0, 0], [1, 0]],
            result: [[1, 0], [0, 0]],
            highlight: { rowOfA: 0, colOfB: 0, caption: '0\u00B70 + 1\u00B71 = 1' },
          },
        },
      },
      {
        name: 'Distributivity',
        statement: '$A(B + C) = AB + AC$',
        verdict: 'holds',
        requires: '$B, C$ same shape',
        note: 'Holds on both sides, but left and right distributivity are different statements and each must be checked separately \u2014 precisely because the product does not commute.',
      },
      {
        name: 'Transpose of a product',
        statement: '$(AB)^{\\mathsf{T}} = B^{\\mathsf{T}}A^{\\mathsf{T}}$',
        verdict: 'conditional',
        verdictLabel: 'Order reverses',
        requires: '$AB$ defined',
        commonError: 'writing $A^{\\mathsf{T}}B^{\\mathsf{T}}$',
        witness: {
          label: 'Why the order flips',
          lines: [
            'A is m\u00D7n, B is n\u00D7p',
            'A\u1D40B\u1D40 = (n\u00D7m)(p\u00D7n)',
            'not conformable unless m = p',
          ],
        },
      },
      {
        name: 'Cancellation',
        statement: '$AB = AC \\nRightarrow B = C$',
        verdict: 'fails',
        holdsWhen: '$A$ invertible',
        failsWhen: '$A$ singular',
        witness: {
          label: 'Witness',
          lines: [
            'A = [[1,0],[0,0]]',
            'B = [[1,1],[1,1]],  C = [[1,1],[2,2]]',
            'AB = AC = [[1,1],[0,0]] but B \u2260 C',
          ],
        },
      },
      {
        name: 'Zero divisors',
        statement: '$AB = O \\nRightarrow A = O \\text{ or } B = O$',
        verdict: 'fails',
        holdsWhen: 'either factor invertible',
        note: 'Matrices are not an integral domain. Two nonzero matrices can annihilate each other \u2014 which is what a nontrivial [null space](!/linear-algebra/vector-spaces/fundamental-spaces) means at the level of the whole product.',
        witness: {
          label: 'Witness',
          lines: [
            'A = [[1,0],[0,0]],  B = [[0,0],[0,1]]',
            'AB = O with both factors nonzero',
          ],
        },
      },
    ],
  };

  return {
    props: {
      matrixProductLaws,
      seoData: {
        title: 'Matrix Product Laws | Learn Math Class',
        description: 'Which algebraic laws hold for matrix multiplication, which fail, and the counterexample for each failure.',
        url: '/linear-algebra/matrix/operations/laws',
        name: 'Matrix Product Laws',
      },
    },
  };
}

/* ============================================================================
 * PAGE
 * Imports one frame component. Passes one flat object plus display props.
 * ==========================================================================*/
export default function MatrixProductLawsPage({ seoData, matrixProductLaws }) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow" />
      </Head>

      <h1 className="title" style={{ marginTop: '0px', marginBottom: '10px' }}>
        Matrix Product Laws
      </h1>
      <br />

      <PropertyLawCard data={matrixProductLaws} theme="navy" variant="plate" />
    </>
  );
}
