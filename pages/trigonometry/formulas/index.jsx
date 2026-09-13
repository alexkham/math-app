



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'

export async function getStaticProps() {
  const { default: trigonometryFormulaList } = await import('@/app/api/db/formulas/trigonometry/trigonometryFormulas')

  const keyWords = [
    'trigonometry formulas',
    'trigonometric identities',
    'Pythagorean identity',
    'sum and difference formulas',
    'double angle formulas',
    'half-angle formulas',
    'reciprocal identities',
    'cofunction identities',
    'law of sines',
    'law of cosines',
    'product-to-sum formulas',
    'sum-to-product formulas',
    'power-reducing formulas',
    'inverse trig identities',
    'trig formulas reference sheet'
  ]

  const seoData = {
    title: "Trigonometry Formulas & Identities | Learn Math Class",
    description: "Complete trigonometry formulas reference with 50+ identities. Covers Pythagorean, double angle, half-angle, sum and difference, law of sines and cosines.",
    keywords: keyWords.join(", "),
    url: "/trigonometry/formulas",
    name: "Trigonometry Formulas and Identities",
    // Surfaced on the /trigonometry hub via buildSectionData extraction.
    hubDescription: `The Trigonometry Formulas page covers essential identities and relationships involving angles, ratios, and periodic functions. It includes fundamental formulas such as Pythagorean identities, angle sum and difference identities, double and half-angle formulas, product-to-sum transformations, and laws of sines and cosines. Each formula is presented with definitions, usage notes, and step-by-step examples for solving geometric and algebraic problems.`
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometry Formulas and Identities",
      "description": "Complete trigonometry formulas reference with 50+ identities. Covers Pythagorean, double angle, half-angle, sum and difference, law of sines and cosines.",
      "url": "https://www.learnmathclass.com/trigonometry/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Trigonometry"
      },
      "teaches": [
        "Reciprocal, quotient, and Pythagorean identities",
        "Sum and difference, double angle, and half-angle formulas",
        "Even-odd, cofunction, and periodicity identities",
        "Product-to-sum and sum-to-product conversions",
        "Law of sines, law of cosines, and Heron's formula",
        "Inverse trigonometric identities and general solutions"
      ],
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trigonometry Formulas and Identities",
          "item": "https://www.learnmathclass.com/trigonometry/formulas"
        }
      ]
    },
  }

  return {
    props: {
      trigonometryFormulaList,
      schemas,
      seoData,
    }
  }
}

export default function TrigonometryFormulasPage({
  trigonometryFormulaList,
  schemas,
  seoData
}) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />

      </Head>

      {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <Breadcrumb/>
      <main>
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
          Trigonometry Formulas
        </h1>
        <FormulasTOC data={trigonometryFormulaList}/>
        {/* <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={trigonometryFormulaList}
            groupByField={['category']}
          />
        </div> */}
        <br/>
        {/* <ScrollUpButton /> */}
      </main>
    </>
  )
}