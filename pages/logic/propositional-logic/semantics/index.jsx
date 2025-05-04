import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar' 
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
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
   title: "Introduction to Semantics in Propositional Logic",
   content: `The semantics of propositional logic concerns the meaning of logical expressions—specifically, how their truth values are determined under different interpretations. This page introduces the foundational semantic concepts necessary to evaluate, categorize, and reason about logical formulas.

You will begin by exploring the truth-functional nature of propositional logic: how the truth value of a compound proposition is derived from its components. From there, the page discusses how propositions can be classified as tautologies (always true), contradictions (always false), or contingent (true in some cases, false in others).

You will also examine logical equivalences, which identify when two expressions always yield the same truth value, and are fundamental to simplifying and transforming logical formulas.

A dedicated section on logical implication explains conditional statements like "$p \rightarrow q$" in both syntactic and semantic terms. Common misconceptions, properties of implication, and its use in proofs are addressed clearly.

Each section is supported by examples, truth tables, and conceptual explanations designed to connect formal definitions to intuitive reasoning. Together, these topics form a complete picture of how meaning is assigned to logical statements in propositional systems.

`
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

 const canonicalUrl = 'https://www.learnmathclass.com/logic/propositional-logic/semantics'
 const lastModified = new Date().toISOString()

 const pageTitle = "Semantics"
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
       "name": "www.learnmathclass.com"
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
      // image: "{{TOOL_1_IMAGE_PATH}}",
      link: "{{TOOL_1_LINK}}"
    },
    {
      title: "{{TOOL_2_TITLE}}",
      description: "{{TOOL_2_DESCRIPTION}}",
      // image: "{{TOOL_2_IMAGE_PATH}}",
      link: "{{TOOL_2_LINK}}"
    },
    // Additional tools can be added here
  ]

 const logicSections = [
  {
    id:'equivalences',
    title:"Logical Equivalences",
    link:'/logic/propositional-logic/semantics/equivalences',
    content:`Logical equivalences are statements in propositional logic that always have the same truth value regardless of the truth values of their individual components. 
   If two propositions $A$ and $𝐵$ are logically equivalent, we write:$A≡B$.      
This means that for every possible truth assignment,$A$ and $𝐵$ yield the same truth value.
Logical equivalences form the foundation of [propositional logic laws](!/logic/propositional-logic#laws). Each law in Boolean algebra is a logical equivalence that helps us simplify, manipulate, or prove logical expressions.
However, not all logical equivalences are laws. Some are specific derivations that are still true but are not considered "fundamental" enough to be named as laws.
Logical equivalences are essential in **mathematical logic**, shaping both **syntax** and **semantics**. Syntactically, they allow transformations between logically identical formulas, crucial for **normal forms** like CNF and DNF. Semantically, they ensure truth preservation across interpretations, making them fundamental in [truth tables](!/logic/truth-tables) and **model theory**. In **proof techniques**, equivalences justify valid transformations within formal systems, aiding in **inferences** and **proof simplifications**. By bridging **truth conditions** with **formal derivations**, logical equivalences unify reasoning in propositional logic, predicate logic, and beyond.

`
  },
  {
    id:'contigency',
    title:'Contigency, Tautology or Contradiction',
    content:`In classical **propositional logic**, every proposition falls into **one of three categories** based on its truth value across all possible interpretations:

## 1. [Tautology](!/logic/propositional-logic/semantics/tautology) 
A proposition that is **always true**, no matter what.
**Example**:     
\t\t\t\t\t\t$p \\lor \\neg p$
("Either it will rain or it won’t"—this is always true.)
**Validity and Tautologies**
A proposition is valid if it is true in all possible interpretations—in other words, if it is a [tautology](!/logic/propositional-logic/semantics/tautology).
If a proposition is valid, it means there is no possible scenario where it is false.

\t\t\t\t\t\t$𝑝∨¬𝑝$
(Law of the Excluded Middle) is valid because it’s always true.

## 2. **Contradiction** 
A proposition that is **always false**, no matter what. 
**Example**:     
\t\t\t\t\t\t$p \\land \\neg p$   
("It is raining and it is not raining"—this is never true.)
**Unsatisfiability and Contradictions**
A proposition is unsatisfiable if it is false in every possible interpretation—which means it is a contradiction.

$𝑝∧¬𝑝$ is unsatisfiable because there is no way to make it true.

## 3. **Contingency** 
A proposition that is **sometimes true and sometimes false**, depending on the values of its variables. Example:  

\t\t\t\t\t\t$p \\lor q$   
(If **p** is "It will rain" and **q** is "It will snow," this can be true or false depending on the weather.)
**Satisfiability and Contingencies**
A proposition is satisfiable if there is at least one interpretation where it is true.Otherwise it would be **contradiction**.
A contingent proposition (one that is sometimes true and sometimes false) is always satisfiable because it has at least one true case.

$𝑝∨𝑞$ is satisfiable because it’s true in cases where either $𝑝$ or $𝑞$ is true.

**These three categories exhaust all possibilities** for a proposition in classical logic. Every proposition must be one of these. 

<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="680" height="616" viewBox="0 0 880 716" style="fill:none;margin-left:200px; stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;
" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style class="text-font-style fontImports" data-font-family="Roboto">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block');</style><g id="items" style="isolation: isolate"><g id="blend" style="mix-blend-mode: normal"><g id="g-root-cp_3_g-3_8x5a5q17m6kg1-fill" data-item-order="-367190" transform="translate(182, 87)"><g id="cp_3_g-3_8x5a5q17m6kg1-fill" stroke="none" fill="url(#gradient-ffed4b-499785973)"><g><path d="M 130 10C 157.015 10 181.944 18.9267 202 33.9912C 231.147 55.8842 250 90.7404 250 130C 250 134.944 249.701 139.818 249.12 144.605C 234.654 138.422 218.727 135 202 135C 185.273 135 169.346 138.422 154.88 144.605C 116.304 161.091 88.1202 197.206 82.8798 240.395C 40.0287 222.081 10 179.547 10 130C 10 63.7258 63.7258 10 130 10Z"></path></g></g></g><g id="g-root-cp_2_g-2_1lrsalq17m6jgr-fill" data-item-order="-367186" transform="translate(254, 221.60498046875)"><g id="cp_2_g-2_1lrsalq17m6jgr-fill" stroke="none" fill="url(#gradient-fe8884-413551779)"><g><path d="M 202 115.395C 218.727 115.395 234.654 111.973 249.12 105.7903C 249.701 110.577 250 115.451 250 120.395C 250 186.669 196.274 240.395 130 240.395C 63.7258 240.395 10 186.669 10 120.395C 10 115.451 10.299 110.577 10.8798 105.7903C 16.1202 62.6008 44.3044 26.4865 82.8798 10C 86.9114 43.2278 104.5236 72.2679 130 91.4039C 150.056 106.4685 174.985 115.395 202 115.395Z"></path></g></g></g><g id="g-root-cp_1_g-1_18gy9bi17m6hvx-fill" data-item-order="-367182" transform="translate(374, 87.00100708007812)"><defs><linearGradient id="gradient-ffed4b-499785973" x2="0" y2="1"><stop offset="0" stop-color="#fff282"></stop><stop offset="1" stop-color="#ffe714"></stop></linearGradient><linearGradient id="gradient-fe8884-413551779" x2="0" y2="1"><stop offset="0" stop-color="#ffa6a3"></stop><stop offset="1" stop-color="#fd6a65"></stop></linearGradient><linearGradient id="gradient-64edab-240055791" x2="0" y2="1"><stop offset="0" stop-color="#83fac1"></stop><stop offset="1" stop-color="#44e095"></stop></linearGradient></defs><g id="cp_1_g-1_18gy9bi17m6hvx-fill" stroke="none" fill="url(#gradient-64edab-240055791)"><g><path d="M 57.1202 144.605C 57.701 139.818 58 134.944 58 130C 58 90.7404 39.1467 55.8842 10 33.9912C 30.0559 18.9267 54.9855 10 82 10C 148.274 10 202 63.7258 202 130C 202 179.547 171.971 222.081 129.12 240.395C 114.654 246.578 98.7267 250 82 250C 54.9855 250 30.0559 241.073 10 226.009C 35.4764 206.873 53.0885 177.833 57.1202 144.605Z"></path></g></g></g><g id="g-root-tx_understa_v5hqy617m6jgv-fill" data-item-order="0" transform="translate(164, 38)"><g id="tx_understa_v5hqy617m6jgv-fill" stroke="none" fill="#484848"><g><text style="font: 20px Roboto, sans-serif; white-space: pre;" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.1" y="34" dominant-baseline="ideographic">Understanding Propositional Logic Categories</tspan></text></g></g></g><g id="g-root-tx_continge_mah7se17m6hvk-fill" data-item-order="0" transform="translate(14, 140)"><g id="tx_continge_mah7se17m6hvk-fill" stroke="none" fill="#e0cb15"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="15.21" y="34" dominant-baseline="ideographic">Contingency</tspan></text></g></g></g><g id="g-root-ic_warn_1lvj54e17m6hhi-fill" data-item-order="0" transform="translate(266, 135)"></g><g id="g-root-tx_tautolog_1ltnpv217m6ih6-fill" data-item-order="0" transform="translate(590, 140)"><g id="tx_tautolog_1ltnpv217m6ih6-fill" stroke="none" fill="#3cc583"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Tautology</tspan></text></g></g></g><g id="g-root-tx_proposit_8z0pf217m6jgh-fill" data-item-order="0" transform="translate(14, 176)"><g id="tx_proposit_8z0pf217m6jgh-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="25.58" y="28" dominant-baseline="ideographic">Propositions that </tspan><tspan x="11.88" y="46" dominant-baseline="ideographic">can be true or false</tspan></text></g></g></g><g id="g-root-ic_disp_4o6zzi17m7x1c-fill" data-item-order="0" transform="translate(458, 183)"></g><g id="g-root-tx_proposit_18i77hq17m6k23-fill" data-item-order="0" transform="translate(590, 176)"><g id="tx_proposit_18i77hq17m6k23-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Propositions that are </tspan><tspan x="12" y="46" dominant-baseline="ideographic">always true</tspan></text></g></g></g><g id="g-root-ic_grou_meuje617m6kg7-fill" data-item-order="0" transform="translate(327, 339)"></g><g id="g-root-tx_contradi_hvwnu617m6k24-fill" data-item-order="0" transform="translate(302, 476)"><g id="tx_contradi_hvwnu617m6k24-fill" stroke="none" fill="#e55753"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="15.2" y="34" dominant-baseline="ideographic">Contradiction</tspan></text></g></g></g><g id="g-root-tx_proposit_594fi17m6j9h-fill" data-item-order="0" transform="translate(302, 512)"><g id="tx_proposit_594fi17m6j9h-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="17.45" y="28" dominant-baseline="ideographic">Propositions that are </tspan><tspan x="45.84" y="46" dominant-baseline="ideographic">always false</tspan></text></g></g></g><g id="g-root-cp_3_g-3_8x5a5q17m6kg1-stroke" data-item-order="-367190" transform="translate(182, 87)"><g id="cp_3_g-3_8x5a5q17m6kg1-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 130 10C 157.0145 10 181.9442 18.9267 202 33.9912C 231.1467 55.8842 250 90.7404 250 130C 250 134.9438 249.701 139.8178 249.1202 144.6049C 234.6541 138.4223 218.7267 135 202 135C 185.2733 135 169.3459 138.4223 154.8798 144.6049C 116.3044 161.0914 88.1202 197.2057 82.8798 240.3952C 40.0287 222.0813 10 179.5475 10 130C 10 63.7258 63.7258 10 130 10Z"></path></g></g></g><g id="g-root-cp_2_g-2_1lrsalq17m6jgr-stroke" data-item-order="-367186" transform="translate(254, 221.60498046875)"><g id="cp_2_g-2_1lrsalq17m6jgr-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 202 115.3951C 218.7267 115.3951 234.6541 111.9729 249.1202 105.7903C 249.701 110.5774 250 115.4513 250 120.3951C 250 186.6693 196.2742 240.3951 130 240.3951C 63.7258 240.3951 10 186.6693 10 120.3951C 10 115.4513 10.299 110.5774 10.8798 105.7903C 16.1202 62.6008 44.3044 26.4865 82.8798 10C 86.9114 43.2278 104.5236 72.2679 130 91.4039C 150.0558 106.4685 174.9855 115.3951 202 115.3951Z"></path></g></g></g><g id="g-root-cp_1_g-1_18gy9bi17m6hvx-stroke" data-item-order="-367182" transform="translate(374, 87.00100708007812)"><g id="cp_1_g-1_18gy9bi17m6hvx-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 57.1202 144.6049C 57.701 139.8178 58 134.9438 58 130C 58 90.7404 39.1467 55.8842 10 33.9912C 30.0559 18.9267 54.9855 10 82 10C 148.2742 10 202 63.7258 202 130C 202 179.5475 171.9713 222.0813 129.1202 240.3952C 114.6541 246.5777 98.7267 250 82 250C 54.9855 250 30.0559 241.0733 10 226.0088C 35.4764 206.8727 53.0885 177.8327 57.1202 144.6049Z"></path></g></g></g><g id="g-root-tx_understa_v5hqy617m6jgv-stroke" data-item-order="0" transform="translate(164, 38)"></g><g id="g-root-tx_continge_mah7se17m6hvk-stroke" data-item-order="0" transform="translate(14, 140)"></g><g id="g-root-ic_warn_1lvj54e17m6hhi-stroke" data-item-order="0" transform="translate(266, 135)"><g id="ic_warn_1lvj54e17m6hhi-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 11.5 11.5L 11.5 56.5M 42.5 11.5L 42.5 26.5M 26.5 11.5L 26.5 16.5M 26.5 38.5L 26.5 43.5M 26.5 51.5L 26.5 56.5M 18.900021 56.5L 18.900021 41.299999C 18.900021 39.099998 19.69998 37.099998 21.29998 35.700001L 36.5 20.5M 30.700001 20.5L 36.5 20.5L 36.5 26.1M 44.799999 50.699799C 45.200001 50.699799 45.599998 51.0998 45.599998 51.499802C 45.599998 51.899799 45.200001 52.299801 44.799999 52.299801M 44.800201 50.699799C 44.4002 50.699799 44.000401 51.0998 44.000401 51.499802C 44.000401 51.899799 44.4002 52.299801 44.800201 52.299801M 44.799999 45.699799L 44.799999 42.699799M 46.300201 34.299801C 45.9002 33.699799 45.300201 33.299801 44.700199 33.299801C 44.100201 33.299801 43.299999 33.699799 43.099998 34.299801L 33.300201 54.299801C 33.300201 54.299801 33.099998 54.699799 33.099998 54.899799C 33.099998 55.699799 33.9002 56.499802 34.700199 56.499802L 54.900002 56.499802C 55.700001 56.499802 56.500198 55.699799 56.500198 54.899799C 56.500198 54.699799 56.300201 54.299801 56.300201 54.299801L 46.300201 34.299801Z"></path></g></g></g><g id="g-root-tx_tautolog_1ltnpv217m6ih6-stroke" data-item-order="0" transform="translate(590, 140)"></g><g id="g-root-tx_proposit_8z0pf217m6jgh-stroke" data-item-order="0" transform="translate(14, 176)"></g><g id="g-root-ic_disp_4o6zzi17m7x1c-stroke" data-item-order="0" transform="translate(458, 183)"><g id="ic_disp_4o6zzi17m7x1c-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 12.89996 21.299801L 12.89996 36.299801M 12.89996 45.299801C 12.34768 45.299801 11.899964 44.852001 11.899964 44.299801C 11.899964 43.747601 12.34768 43.299801 12.89996 43.299801M 12.90002 45.299801C 13.4523 45.299801 13.90002 44.852001 13.90002 44.299801C 13.90002 43.747601 13.4523 43.299801 12.90002 43.299801M 28.899981 43.299801C 26.29998 40.499802 24.89994 36.499802 25.499939 32.299801C 25.69994 29.6998 26.89996 27.299801 28.299959 25.299801M 50.700001 25.8999C 52.5 28.499901 53.5 31.899799 53.099998 35.499802C 52.700001 38.899799 51.099998 41.899799 48.700001 44.0998M 10 10M 49.099998 31.4998L 50.299999 25.299801L 56.099998 27.69982M 10 10M 49.099998 31.4998L 50.299999 25.299801L 56.099998 27.69982M 10 10M 22.89996 41.299999L 28.89996 43.499802L 29.699961 37.0998M 10 10M 34 27.17478L 37.4958 13.19136C 37.676598 12.46852 38.326 11.961426 39.071198 11.961426L 39.071198 11.961426C 39.8162 11.961426 40.465599 12.46852 40.6464 13.19136L 44.1422 27.17478M 35.267799 22.103661L 42.874401 22.103661M 10 10M 39.8494 40.2994L 39.8494 55.2202M 10 10M 36.119202 44.029598L 36.314201 44.029598C 38.266602 44.029598 39.8494 42.4468 39.8494 40.494202L 39.8494 40.2994M 10 10M 43.579601 55.220001L 36.119202 55.220001"></path></g></g></g><g id="g-root-tx_proposit_18i77hq17m6k23-stroke" data-item-order="0" transform="translate(590, 176)"></g><g id="g-root-ic_grou_meuje617m6kg7-stroke" data-item-order="0" transform="translate(327, 339)"><g id="ic_grou_meuje617m6kg7-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 16.5 49C 13.73858 49 11.5 46.761398 11.5 44C 11.5 41.238602 13.73858 39 16.5 39C 19.261421 39 21.5 41.238602 21.5 44C 21.5 46.761398 19.261421 49 16.5 49ZM 25.06134 55.993599C 23.587421 53.0336 20.5312 51 17 51C 14.928761 51 13.02094 51.6996 11.5 52.875599M 51.5 49C 54.261398 49 56.5 46.761398 56.5 44C 56.5 41.238602 54.261398 39 51.5 39C 48.738602 39 46.5 41.238602 46.5 44C 46.5 46.761398 48.738602 49 51.5 49ZM 42.9384 55.993599C 44.412399 53.0336 47.468601 51 50.999802 51C 53.070999 51 54.978802 51.6996 56.499802 52.875599M 34 49C 37.865997 49 41 45.866001 41 42C 41 38.134003 37.865997 35 34 35C 30.134001 35 27 38.134003 27 42C 27 45.866001 30.134001 49 34 49ZM 24.63184 56.5C 26.83102 53.756599 30.2104 52 33.999802 52C 37.789398 52 41.1688 53.756599 43.368 56.5M 10 10M 26 11.5L 42 27.5M 10 10M 26 27.5L 42 11.5"></path></g></g></g><g id="g-root-tx_contradi_hvwnu617m6k24-stroke" data-item-order="0" transform="translate(302, 476)"></g><g id="g-root-tx_proposit_594fi17m6j9h-stroke" data-item-order="0" transform="translate(302, 512)"></g></g></g></svg>


`
  },

  {
    id: 'implication',
    title: 'Logical Implication',
    link: '/logic/propositional-logic/semantics/implication',
    content: `Logical implication is a core semantic construct in propositional logic, expressing conditional relationships between propositions. On this page, we introduce the formal definition of implication ($p \\rightarrow q$), along with common notation styles used in logic and mathematics.
  
  A truth table illustrates how implication behaves under all combinations of truth values for its components. From there, several key properties are discussed, including reflexivity, transitivity, contraposition, and the equivalence to the disjunction form ($\\neg p \\lor q$). These properties are essential for both understanding logical behavior and applying simplification techniques in formal proofs.
  
  To aid learners, the page also addresses common misconceptions—such as the counterintuitive truth of implications with false antecedents—and provides clarification on why implication is not a symmetric relationship.
  
  Finally, the practical role of implication in proof strategies is outlined, emphasizing its use in direct reasoning, contrapositive arguments, and proofs by contradiction. Altogether, this resource provides a well-rounded foundation for understanding how conditional statements function within the semantic framework of propositional logic.`
  }
  
  //  {
  //    id: 'formulas',
  //    title: sectionContent.formulas.title,
  //    link:'/logic/formulas',
  //    content: [
  //      {
  //        content: sectionContent.formulas.leftContentHtml,
  //        layout: 'horizontal',
  //        position: 'left',
  //        width: 1.5
  //      },
  //      {
  //        content: <VerticalScrollingFormulaWidget
  //          key="formula-widget"
  //          formulaData={logicFormulasList}
  //          moreFormulasLink='/logic/formulas'
  //        />,
  //        layout: 'horizontal',
  //        position: 'right',
  //        width: 2
  //      }
  //    ]
  //  },
  //  {
  //    id: 'definitions',
  //    title: sectionContent.definitions.title,
  //    link:'/logic/definitions',
  //    content: [
  //      {
  //        content: <VerticalScrollingFormulaWidget
  //          key="definitions-widget" 
  //          formulaData={logicTermsList}
  //          moreFormulasLink='/logic/definitions'
  //          type='definition'
  //        />,
  //        layout: 'horizontal',
  //        position: 'left',
  //        width: 2
  //      },
  //      {
  //        content: sectionContent.definitions.rightContentHtml,
  //        layout: 'horizontal',
  //        position: 'right',
  //        width: 1.5
  //      }
  //    ]
  //  },
  //  {
  //   id: 'propositional_logic',
  //   title: sectionContent.propositional_logic.title,
  //   link:'/logic/propositional-logic',
  //   content: [
  //     sectionContent.propositional_logic.intro,
  //     `\n**It includes**:`,
  //     <MyList
  //     key={1}
  //     data={sectionContent.propositional_logic.list}
  //     boxed={true} color={'yellow'} compact={true} type={'dot'} width={'700px'}/>,
  //     sectionContent.propositional_logic.conclusion
  //   ] 
  //  },
 
  // {
  //   id: 'tools',
  //   title: 'Tools',
  //   content: [
  //     {
  //       content: <div>
  //         <ToolsSlider tools={tools} key={'slider'}/>
  //       </div>,
  //       layout: 'horizontal',
  //       position: 'center',
  //       width: 8
  //     }
  //   ]
  // },
  // {
  //   id: 'symbols',
  //   title: sectionContent.symbols.title,
  //   link: sectionContent.symbols.link,
  //   content: [
  //     {
  //       content: sectionContent.symbols.description,
  //       layout: 'horizontal',
  //       position: 'center',
  //       width: 8
  //     }
  //   ]
  // }
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
         Semantics
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