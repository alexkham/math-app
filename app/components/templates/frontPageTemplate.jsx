import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar' 
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'
import { createContentHtml } from '@/app/utils/utils-functions'
import ToolsSlider from '@/app/components/sliders/ToolsSlider'
import MyList from '@/app/components/page-components/lists/MyList'

export async function getStaticProps() {
 const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
 const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')

 const sectionContent = {
   formulas: {
     title: '{{FORMULAS_SECTION_TITLE}}',
     description: '{{FORMULAS_SECTION_DESCRIPTION}}',
     leftContentHtml: createContentHtml({
       description: '{{FORMULAS_CONTENT_DESCRIPTION}}',
       linkText: '{{VIEW_ALL_FORMULAS_TEXT}}',
       height: '350px',
       backgroundColor: 'none',
     }),
     layout: 'horizontal',
   },
   definitions: {
     title: '{{DEFINITIONS_SECTION_TITLE}}', 
     description: '{{DEFINITIONS_SECTION_DESCRIPTION}}',
     rightContentHtml: createContentHtml({
       description: '{{DEFINITIONS_CONTENT_DESCRIPTION}}',
       linkText: '{{VIEW_ALL_DEFINITIONS_TEXT}}',
       height: '350px',
       backgroundColor: 'none',
     }),
     layout: 'horizontal'
   },
   propositional_logic:{
    title:'{{PROPOSITIONAL_LOGIC_TITLE}}',
    intro: '{{PROPOSITIONAL_LOGIC_INTRO}}',
    list:[
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_1}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_2}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_3}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_4}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_5}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_6}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_7}}',
     '{{PROPOSITIONAL_LOGIC_LIST_ITEM_8}}',
    ],
    conclusion:'{{PROPOSITIONAL_LOGIC_CONCLUSION}}'
   },
   symbols:{
    title:'{{SYMBOLS_SECTION_TITLE}}',
    link:'{{SYMBOLS_SECTION_LINK}}',
    description:'{{SYMBOLS_SECTION_DESCRIPTION}}'
   }
 }

 const introContent = {
   id: "intro",
   title: "{{INTRO_SECTION_TITLE}}",
   content: '{{INTRO_SECTION_CONTENT}}'
 }

 const keyWords = [
   '{{KEYWORD_1}}',
   '{{KEYWORD_2}}',
   '{{KEYWORD_3}}', 
   '{{KEYWORD_4}}',
   '{{KEYWORD_5}}',
   '{{KEYWORD_6}}',
   '{{KEYWORD_7}}',
   '{{KEYWORD_8}}',
   '{{KEYWORD_9}}'
 ]

 const canonicalUrl = '{{CANONICAL_URL}}'
 const lastModified = new Date().toISOString()

 const pageTitle = "{{PAGE_TITLE}}"
 const pageDescription = "{{PAGE_DESCRIPTION}}"

 const structuredData = {
   "@context": "https://schema.org",
   "@type": "WebPage",
   "name": "{{STRUCTURED_DATA_NAME}}",
   "description": "{{STRUCTURED_DATA_DESCRIPTION}}",
   "keywords": keyWords.join(", "),
   "url": canonicalUrl,
   "dateModified": lastModified,
   "inLanguage": "en-US",
   "mainEntity": {
     "@type": "Article",
     "name": "{{ARTICLE_NAME}}",
     "dateModified": lastModified,
     "author": {
       "@type": "Organization",
       "name": "{{ORGANIZATION_NAME}}"
     }
   }
 }

 return {
   props: {
     sectionContent,
     logicFormulasList,
     logicTermsList,
     pageTitle,
     pageDescription,
     introContent,
     structuredData,
     keyWords,
     canonicalUrl,
     lastModified
   }
 }
}

export default function LogicPage({
 sectionContent,
 logicFormulasList,
 logicTermsList,
 pageTitle,
 pageDescription,
 introContent,
 structuredData,
 keyWords,
 canonicalUrl,
 lastModified
}) {

  const tools = [
    {
      title: "{{TOOL_1_TITLE}}",
      description: "{{TOOL_1_DESCRIPTION}}",
      image: "{{TOOL_1_IMAGE_PATH}}",
      link: "{{TOOL_1_LINK}}"
    },
    {
      title: "{{TOOL_2_TITLE}}",
      description: "{{TOOL_2_DESCRIPTION}}",
      image: "{{TOOL_2_IMAGE_PATH}}",
      link: "{{TOOL_2_LINK}}"
    },
    // Additional tools can be added here
  ]

 const logicSections = [
   {
     id: 'formulas',
     title: sectionContent.formulas.title,
     link:'/logic/formulas',
     content: [
       {
         content: sectionContent.formulas.leftContentHtml,
         layout: 'horizontal',
         position: 'left',
         width: 1.5
       },
       {
         content: <VerticalScrollingFormulaWidget
           key="formula-widget"
           formulaData={logicFormulasList}
           moreFormulasLink='/logic/formulas'
         />,
         layout: 'horizontal',
         position: 'right',
         width: 2
       }
     ]
   },
   {
     id: 'definitions',
     title: sectionContent.definitions.title,
     link:'/logic/definitions',
     content: [
       {
         content: <VerticalScrollingFormulaWidget
           key="definitions-widget" 
           formulaData={logicTermsList}
           moreFormulasLink='/logic/definitions'
           type='definition'
         />,
         layout: 'horizontal',
         position: 'left',
         width: 2
       },
       {
         content: sectionContent.definitions.rightContentHtml,
         layout: 'horizontal',
         position: 'right',
         width: 1.5
       }
     ]
   },
   {
    id: 'propositional_logic',
    title: sectionContent.propositional_logic.title,
    link:'/logic/propositional-logic',
    content: [
      sectionContent.propositional_logic.intro,
      `\n**It includes**:`,
      <MyList
      key={1}
      data={sectionContent.propositional_logic.list}
      boxed={true} color={'yellow'} compact={true} type={'dot'} width={'700px'}/>,
      sectionContent.propositional_logic.conclusion
    ] 
   },
 
  {
    id: 'tools',
    title: 'Tools',
    content: [
      {
        content: <div>
          <ToolsSlider tools={tools} key={'slider'}/>
        </div>,
        layout: 'horizontal',
        position: 'center',
        width: 8
      }
    ]
  },
  {
    id: 'symbols',
    title: sectionContent.symbols.title,
    link: sectionContent.symbols.link,
    content: [
      {
        content: sectionContent.symbols.description,
        layout: 'horizontal',
        position: 'center',
        width: 8
      }
    ]
  }
 ]

 return (
   <>
     <Head>
       <title>{pageTitle}</title>
       <meta name="description" content={pageDescription} />
       <meta name="keywords" content={keyWords.join(", ")} />
       <link rel="canonical" href={canonicalUrl} />
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
       />
     </Head>

     <GenericNavbar/>
     <br/>
     <br/>
     <br/>
     <br/>
     <OperaSidebar
       side='right'
       topOffset='55px'
       sidebarWidth='45px'
       panelWidth='200px'
       iconColor='white'
       panelBackgroundColor='#f2f2f2'
     />
     <Breadcrumb/>
    
     <main>
       <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
         {{PAGE_MAIN_HEADING}}
       </h1>
       <SectionTableOfContents sections={logicSections}
       showSecondaryNav={true}
       secondaryNavMode="children"
       secondaryNavTitle="More in this Section" 
       />
       <br/>
       <br/>
       <br/>
       <IntroSection
         id={introContent.id}
         title={introContent.title} 
         content={introContent.content}
         backgroundColor="#f2f2f2"
         textColor="#06357a"
       />
       <Sections sections={logicSections}/>
       <br/>
       <br/>
       <br/>
       <ScrollUpButton/>
     </main>
   </>
 )
}