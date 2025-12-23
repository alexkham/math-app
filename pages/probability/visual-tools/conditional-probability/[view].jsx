
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import WaffleChart from '@/app/components/probability/conditional-probability-demo/WaffleChart'
import ConditionalProbabilityTree2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTree2'
import ConditionalProbabilityVenn from '@/app/components/probability/conditional-probability-demo/ConditionalProbabiltyVenn'
import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'

export async function getStaticPaths() {
  const paths = [
    { params: { view: 'tree-diagram' } },
    { params: { view: 'venn-diagram' } },
    { params: { view: 'waffle-chart' } },
    { params: { view: 'contingency-table' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const viewConfig = {
    'tree-diagram': {
      component: 'TreeDiagram',
      title: "Tree Diagram - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive tree diagram for visualizing conditional probability and sequential events. Explore branching paths with dynamic probabilities and step-by-step explanations.",
      name: "Tree Diagram - Conditional Probability",
      url: "/probability/visual-tools/conditional-probability/tree-diagram",
      h1: "Tree Diagram Visualization",
      introTitle: "Understanding Conditional Probability with Tree Diagrams",
      introContent: "Tree diagrams show sequential events as branching paths. Each branch represents a possible outcome, with conditional probabilities displayed along the paths. This visualization is perfect for understanding multi-stage probability problems.",
      keywords: [
        "tree diagram probability",
        "sequential probability visualization",
        "branching probability diagram",
        "P(A|B) tree diagram",
        "probability tree interactive",
        "conditional probability branches",
        "multi-stage probability",
        "probability path diagram",
        "sequential events probability",
        "tree diagram calculator"
      ],
      sectionsContent: {
        obj1: {
          title: "How Tree Diagrams Work",
          content: "Tree diagrams display events in chronological order from left to right. Each branch splits into possible outcomes, with probabilities labeled on each path. The final probability of any outcome is found by multiplying along its path."
        },
        obj2: {
          title: "Conditional Probabilities in Trees",
          content: "Each level of branches represents conditional probabilities - the probability of an event given the previous outcome. This makes tree diagrams ideal for understanding P(A|B) notation and sequential decision-making."
        },
        obj3: {
          title: "Practical Applications",
          content: "Tree diagrams excel at modeling sequential decisions, medical testing scenarios, quality control processes, and any situation where outcomes depend on previous events."
        }
      }
    },
    'venn-diagram': {
      component: 'VennDiagram',
      title: "Venn Diagram - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive Venn diagram for understanding conditional probability through set relationships. Visualize P(A|B) with overlapping regions and dynamic examples.",
      name: "Venn Diagram - Conditional Probability",
      url: "/probability/visual-tools/conditional-probability/venn-diagram",
      h1: "Venn Diagram Visualization",
      introTitle: "Understanding Conditional Probability with Venn Diagrams",
      introContent: "Venn diagrams show conditional probability through overlapping sets. When calculating P(A|B), we focus only on the region where B occurs and find what portion also contains A. This spatial representation makes conditional probability intuitive.",
      keywords: [
        "Venn diagram probability",
        "set theory probability",
        "overlapping probability circles",
        "P(A|B) Venn diagram",
        "intersection probability visual",
        "conditional probability sets",
        "probability overlap diagram",
        "set intersection probability",
        "Venn diagram calculator",
        "visual set probability"
      ],
      sectionsContent: {
        obj1: {
          title: "Visualizing P(A|B)",
          content: "In a Venn diagram, P(A|B) is visualized by focusing on circle B and finding what fraction of it overlaps with A. The condition 'given B' means we're only looking within B's region."
        },
        obj2: {
          title: "Set Operations and Conditioning",
          content: "Venn diagrams naturally show how conditioning restricts the sample space. The overlap (intersection) divided by the condition set gives the conditional probability: P(A|B) = P(A ∩ B) / P(B)."
        },
        obj3: {
          title: "Common Applications",
          content: "Venn diagrams are excellent for understanding medical test accuracy, survey data analysis, and any scenario involving overlapping categories or characteristics."
        }
      }
    },
    'waffle-chart': {
      component: 'WaffleChart',
      title: "Waffle Chart - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive waffle chart for visualizing conditional probability with grid-based proportions. See P(A|B) through color-coded squares and dynamic filtering.",
      name: "Waffle Chart - Conditional Probability",
      url: "/probability/visual-tools/conditional-probability/waffle-chart",
      h1: "Waffle Chart Visualization",
      introTitle: "Understanding Conditional Probability with Waffle Charts",
      introContent: "Waffle charts use a grid of squares to represent probabilities as proportions. Each square represents an equal portion of the sample space. When applying conditions, relevant squares are highlighted, making it easy to see how probabilities change.",
      keywords: [
        "waffle chart probability",
        "grid probability visualization",
        "proportional probability squares",
        "100 square probability",
        "visual probability proportion",
        "waffle diagram conditional",
        "grid-based probability",
        "square chart probability",
        "waffle chart calculator",
        "proportional visualization"
      ],
      sectionsContent: {
        obj1: {
          title: "Grid-Based Probability",
          content: "Waffle charts divide the sample space into equal squares, typically 100 or more. Each square has the same probability, making it easy to count and calculate proportions visually."
        },
        obj2: {
          title: "Visualizing Conditions",
          content: "When a condition is applied, the chart highlights only relevant squares. P(A|B) becomes a simple counting exercise: count squares that are both A and B, divide by squares that are B."
        },
        obj3: {
          title: "Intuitive Understanding",
          content: "Waffle charts are particularly effective for helping students understand proportions and percentages. They're widely used in data visualization for survey results, demographics, and risk assessment."
        }
      }
    },
    'contingency-table': {
      component: 'ContingencyTable',
      title: "Contingency Table - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive 2×2 contingency table showing joint, marginal, and conditional probabilities with clickable highlighting.",
      name: "Contingency Table - Conditional Probability",
      url: "/probability/visual-tools/conditional-probability/contingency-table",
      h1: "Contingency Table Visualization",
      introTitle: "Understanding Conditional Probability with Contingency Tables",
      introContent: "Contingency tables organize probabilities in a 2×2 grid showing how two events relate. Joint probabilities appear in cells, marginal probabilities in row and column totals. Click any conditional probability to see how it's calculated as a ratio of the intersection to the conditioning event.",
      keywords: [
        "contingency table probability",
        "2x2 probability table",
        "joint probability table",
        "marginal probability calculator",
        "P(A|B) contingency table",
        "statistical contingency table",
        "cross-tabulation probability",
        "two-way table probability",
        "interactive contingency table",
        "probability matrix visualization"
      ],
      sectionsContent: {
        obj1: {
          title: "Reading Contingency Tables",
          content: "A 2×2 contingency table displays all probability relationships in one view. The four inner cells show joint probabilities P(A∩B), while row and column totals show marginal probabilities P(A) and P(B)."
        },
        obj2: {
          title: "Conditional Probability Formula",
          content: "The table makes P(A|B) = P(A∩B) / P(B) visual and concrete. Click any conditional probability to see both the numerator (intersection) and denominator (marginal total) highlighted in the main table."
        },
        obj3: {
          title: "Applications in Statistics",
          content: "Contingency tables are fundamental in statistics for analyzing categorical data, testing independence, and understanding relationships between variables in surveys, medical studies, and experimental research."
        }
      }
    }
  };

  const currentConfig = viewConfig[params.view];
  const sectionsContent = currentConfig.sectionsContent;

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  };

  return {
    props: {
      sectionsContent,
      introContent,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
    }
  };
}

export default function ConditionalProbabilityViewPage({ seoData, sectionsContent, introContent, currentView, componentName, h1Title }) {
  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: '#how-it-works',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: '#conditional-probability',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: '#applications',
      content: sectionsContent.obj3.content
    }
  ];

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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": seoData.name,
              "description": seoData.description,
              "keywords": seoData.keywords,
              "url": `https://www.learnmathclass.com${seoData.url}`,
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "mainEntity": {
                "@type": "Article",
                "name": seoData.name,
                "dateModified": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "Learn Math Class"
                }
              }
            })
          }}
        />
      </Head>
      {/* <GenericNavbar /> */}
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '-40px' }}>{h1Title}</h1>

      {componentName === 'WaffleChart' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <WaffleChart />
        </div>
      )}

      {componentName === 'TreeDiagram' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <ConditionalProbabilityTree2 />
        </div>
      )}

      {componentName === 'VennDiagram' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <ConditionalProbabilityVenn />
        </div>
      )}

      {componentName === 'ContingencyTable' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <ConditionalProbabilityTable2 />
        </div>
      )}

      <br />
      <SectionTableOfContents sections={genericSections} />
      <br />
      <br />
      <br />
      <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <br />
      <br />
      <Sections sections={genericSections} />
      <br />
      <br />
      <br />
      {/* <ScrollUpButton /> */}
    </>
  );
}