
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import CardsGroup from '@/app/components/cards/CardsGroup'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Link from 'next/link'
import Head from 'next/head'



const CustomPi = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pi">
    <line x1="9" x2="9" y1="4" y2="20"/>
    <path d="M4 7c0-1.7 1.3-3 3-3h13"/>
    <path d="M18 20c-1.7 0-3-1.3-3-3V4"/>
  </svg>
)

const getStaticData = () => ({
  keywords: ["units converter", "mathematical units", "radians to degree", "degree to radians"],
  cardItems: [
    {
      category: "Angle Converter",
      href: "converters/degree-radians",
      content: "Convert degrees to radians and radians to degrees. See explanations, conversion formulas and visual illustrations"
    }
  ],
  content: {
    meta: {
      title: "Mathematical Unit Converters | Learn Math Class",
      description: "Free online mathematical unit converters. Convert between degrees and radians, with visual illustrations and detailed explanations. Perfect for students and professionals.",
      url: "https://www.learnmathclass.com/converters"
    },
    intro: {
      title: "Understanding Mathematical Units and Conversions",
      text: "Mathematical units are standardized quantities used to measure and express various physical and mathematical properties. Whether you're working in engineering, physics, mathematics, or everyday calculations, the ability to convert between different units is essential for accurate problem-solving and communication."
    },
    conversion: {
      title: "Why Convert Between Units?",
      text: "Different fields and regions often use different units to measure the same quantity. For instance, while mathematicians and physicists commonly work with radians for angle measurements, engineers and designers frequently use degrees. Converting between units allows us to:",
      points: [
        "Maintain precision across different measurement systems",
        "Collaborate effectively across disciplines and regions",
        "Solve complex problems that involve multiple unit types",
        "Translate theoretical concepts into practical applications"
      ]
    },
    converters: {
      title: "Available Converters",
      angleSection: {
        title: "Angle Converter",
        description: "Our angle converter provides a dynamic, interactive tool for converting between degrees and radians, the two primary units used to measure angles. This intuitive converter features:",
        features: [
          "Real-time conversion as you type",
          "Visual representation of angles with an interactive diagram",
          "Support for multiple rotations and negative angles",
          "Clear conversion formulas and explanations",
          "Common angle reference values",
          "Built-in normalization for angles exceeding 360°"
        ],
        conclusion: "The converter helps you understand the relationship between these crucial angular measurements, making it invaluable for students, professionals, and anyone working with geometric calculations or trigonometry."
      },
      comingSoon: "More converters coming soon! Our collection will expand to include various mathematical and scientific unit conversions, each with detailed explanations and interactive features."
    }
  }
})

export default function ConvertersPage() {
  const pageData = getStaticData()
  const { keywords, cardItems, content } = pageData
  const { meta, intro, conversion, converters } = content

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Head>

      <style jsx>{`
        .content-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          width:90%;
        }
        
        .content-section {
          margin-bottom: 40px;
        }
        
        .section-title {
          color: #1e40af;
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .section-text {
          color: #333;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .feature-box {
          background: #f8f9ff;
          border: 1px solid #2563eb;
          padding: 25px;
          border-radius: 8px;
        }
        
        .feature-list {
          list-style-type: disc;
          padding-left: 25px;
          margin: 15px 0;
        }
        
        .feature-list li {
          margin-bottom: 10px;
          color: #333;
        }
        
        .coming-soon {
          font-style: italic;
          color: #666;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .content-container {
            padding: 0 15px;
          }
          
          .section-title {
            font-size: 20px;
          }
          
          .feature-box {
            padding: 15px;
          }
        }
      `}</style>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <h1 className="title">Converters</h1>
      <br/>
      <OperaSidebar
        side="right"
        topOffset="65px"
        sidebarWidth="45px"
        panelWidth="300px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <br/>
      <br/>
      <div style={{transform:"scale(0.9)"}}>
        <CardsGroup 
          items={cardItems.map(item => ({
            ...item,
            icon: CustomPi
          }))}
        />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="content-container">
        <section className="content-section">
          <h2 className="section-title">{intro.title}</h2>
          <p className="section-text">{intro.text}</p>
        </section>

        <section className="content-section">
          <div className="feature-box">
            <h2 className="section-title">{conversion.title}</h2>
            <p className="section-text">{conversion.text}</p>
            <ul className="feature-list">
              {conversion.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">{converters.title}</h2>
          <div className="feature-box">
            <h3 className="section-title">
              <Link href="/converters/degree-radians" style={{textDecoration: "none", color: "#2563eb"}}>
                {converters.angleSection.title}
              </Link>
            </h3>
            
            <p className="section-text">{converters.angleSection.description}</p>
            
            <ul className="feature-list">
              {converters.angleSection.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <p className="section-text">{converters.angleSection.conclusion}</p>
            <Link href="/converters/degree-radians" style={{textDecoration: "none", color: "#2563eb"}}>
              Visit Angle Converter Page
            </Link>
          </div>
          
          <p className="coming-soon">{converters.comingSoon}</p>
        </section>
      </div>

      <ScrollUpButton/>
    </>
  )
}