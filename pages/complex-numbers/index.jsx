

/**
 * /pages/complex-numbers/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as /pages/algebra, /pages/trigonometry, /pages/set-theory,
 * /pages/linear-algebra). Sections are auto-discovered from the child
 * directories on disk.
 *
 * MIGRATION NOTE (2026-07-31): the old hub was a full modern theoretical
 * page (10 teaching sections: imaginary unit, algebraic form & conjugate,
 * arithmetic, complex plane, field axioms, trigonometric form, Euler,
 * De Moivre & roots, polynomial theory, three-forms summary — plus four
 * reference tables, Key Terms card, FAQ and schemas). All of it moved
 * VERBATIM to the new child page:
 *
 *     /complex-numbers/basics   (pages/complex-numbers/basics/index.jsx)
 *
 * which re-surfaces here automatically as a subsection card with
 * hubDescription prose. The old hub's SEO meta tags are kept verbatim
 * below; its three JSON-LD schemas (LearningResource / Breadcrumb / FAQ)
 * moved WITH the content to /basics, since they describe that content.
 * Child pages cheat-sheets / demoivre-theorem received an early `hubMeta`
 * so their cards extract correct names.
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Complex Numbers',
  subtitle: 'From the imaginary unit to Euler’s formula — forms, operations, the complex plane, De Moivre’s theorem, and roots of unity.',
  breadcrumbUrl: '/complex-numbers',
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/complex-numbers');

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
    },
  };
}


export default function ComplexNumbersPage({ pageMeta, sections, sectionData }) {
  return (
    <>
      {/* Legacy hub SEO meta tags, kept verbatim (content schemas moved to /basics) */}
      <Head>
        <title>Complex Numbers: Complete Guide to ℂ | Learn Math Class</title>
        <meta name="description" content="Learn complex numbers: imaginary unit, conjugates, complex plane, trigonometric and exponential forms, Euler's formula, De Moivre's theorem, and nth roots." />
        <meta name="keywords" content="complex numbers, imaginary unit, imaginary numbers, complex conjugate, complex plane, Argand diagram, modulus of complex number, argument of complex number, Euler's formula, exponential form complex numbers, trigonometric form complex numbers, De Moivre's theorem, roots of unity, complex number operations, fundamental theorem of algebra" />
        <link rel="canonical" href="https://www.learnmathclass.com/complex-numbers" />

        <meta property="og:title" content="Complex Numbers: Complete Guide to ℂ | Learn Math Class" />
        <meta property="og:description" content="Learn complex numbers: imaginary unit, conjugates, complex plane, trigonometric and exponential forms, Euler's formula, De Moivre's theorem, and nth roots." />
        <meta property="og:url" content="https://www.learnmathclass.com/complex-numbers" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Complex Numbers: Complete Guide to ℂ | Learn Math Class" />
        <meta name="twitter:description" content="Learn complex numbers: imaginary unit, conjugates, complex plane, trigonometric and exponential forms, Euler's formula, De Moivre's theorem, and nth roots." />

        <meta name="robots" content="index, follow" />
      </Head>

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
      />
    </>
  );
}
