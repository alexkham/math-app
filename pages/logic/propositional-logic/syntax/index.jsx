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
import { renderAcademicBlockHTML } from '@/app/utils/academicBlocks'

export async function getStaticProps() {
//  const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
//  const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')

// @academic[theorem:The logical connectives used to combine these propositions.]@

 const sectionContent = {
  

  definitions:{
    title:`Syntax Definition`,
    description:`@academic[theorem:Formally, syntax is defined as the set of rules specifying the correct formation of symbolic expressions within a logical system. These expressions, when constructed according to these rules, are called well-formed formulas (WFFs). A formula is considered well-formed if it adheres strictly to the prescribed combinations of atomic propositions, logical connectives, and grouping symbols such as parentheses.]@
This distinction between syntax and semantics is foundational. While semantics is dealing with the question: “Is this statement true or false?”, syntax first asks the more basic but necessary subject: “Is this statement properly formed?” Only when an expression is syntactically correct does it make sense to discuss its truth value or include it in formal proofs.

The importance of syntax lies in its role as the starting point for logical reasoning. Without clear structural rules, logical statements could be ambiguous or meaningless. Syntax ensures that expressions are built consistently and unambiguously, allowing for reliable analysis, proof construction, and formal reasoning.

**In the context of propositional logic, understanding syntax involves recognizing**:`,
list:[
  `[The alphabet (primary building blocks) of propositional logic.](!/logic/propositional-logic/syntax#alphabet)\n`,
  
  `[The formation rules that specify how complex expressions are constructed from simpler ones.](!/logic/propositional-logic/syntax#formation)\n`,

  `[Well-Formed Formulas (WFFs)](!/logic/propositional-logic/syntax#wff).\n`,
  `[Normal Forms](!/logic/propositional-logic/syntax#normal_forms)`
  
],
description2:`Additionally, visual tools such as syntax trees help to represent the internal structure of complex formulas, and methods like structural induction are used to formally prove properties about these syntactic structures — for example, showing that all well-formed formulas are finite in depth.
By mastering these syntactic principles, we establish the framework necessary for formal logic to operate as a precise and reliable system for reasoning.`,
svg:`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="1008" height="804" viewBox="0 0 1408 1204" style="fill:none;stroke:none;margin-bottom:-200px;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style class="text-font-style fontImports" data-font-family="Roboto">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block');</style><g id="items" style="isolation: isolate"><g id="blend" style="mix-blend-mode: normal"><g id="g-root-sy_5_cu_Vector_1cviway1cm3h1i-fill" data-item-order="-587510" transform="translate(302, 626)"><g id="sy_5_cu_Vector_1cviway1cm3h1i-fill" stroke="none" fill="url(#gradient-76aaff-163240667)"><g><path d="M 69.4375 10L 10 106L 682 106L 622.5625 10L 69.4375 10ZM 82 130L 10 106L 682 106L 610 130L 82 130Z"></path></g></g></g><g id="g-root-sy_5_Subtract_qp1uru1cm3g9b-fill" data-item-order="-587505" transform="translate(21, 662.000244140625)"></g><g id="g-root-sy_5_Subtract-start_hu1bm21cm3eo0-fill" data-item-order="-587503" transform="translate(15, 659)"></g><g id="g-root-sy_4_cu_Vector_1uo1uyy1cm3guh-fill" data-item-order="-587500" transform="translate(374, 506)"><g id="sy_4_cu_Vector_1uo1uyy1cm3guh-fill" stroke="none" fill="url(#gradient-4dd3ff-378786070)"><g><path d="M 69.4375 10L 10 106L 538 106L 480.5625 10L 69.4375 10ZM 80 130L 10 106L 538 106L 466 130L 80 130Z"></path></g></g></g><g id="g-root-sy_4_Subtract_1cxebka1cm3g1u-fill" data-item-order="-587495" transform="translate(21, 542.000244140625)"></g><g id="g-root-sy_4_Subtract-start_mb3rwq1cm3g1v-fill" data-item-order="-587493" transform="translate(15, 539)"></g><g id="g-root-sy_3_cu_Vector_4mqdm1cm3f9o-fill" data-item-order="-587490" transform="translate(446, 386)"><g id="sy_3_cu_Vector_4mqdm1cm3f9o-fill" stroke="none" fill="url(#gradient-64edab-240055791)"><g><path d="M 70 10L 10 106L 394 106L 334 10L 70 10ZM 70 130L 10 106L 394 106L 334 130L 70 130Z"></path></g></g></g><g id="g-root-sy_3_Subtract_1hf38y21cm3e9x-fill" data-item-order="-587485" transform="translate(20, 422)"></g><g id="g-root-sy_3_Subtract-start_143mqkq1cm3fuu-fill" data-item-order="-587483" transform="translate(14, 419)"></g><g id="g-root-sy_2_cu_Vector_qsspai1cm3e9z-fill" data-item-order="-587480" transform="translate(518, 266)"><g id="sy_2_cu_Vector_qsspai1cm3e9z-fill" stroke="none" fill="url(#gradient-bceb57-497517668)"><g><path d="M 58 10L 10 106L 250 106L 202 10L 58 10ZM 58 130L 10 106L 250 106L 202 130L 58 130Z"></path></g></g></g><g id="g-root-sy_2_Subtract_dhc6x61cm3fuw-fill" data-item-order="-587475" transform="translate(20, 302)"></g><g id="g-root-sy_2_Subtract-start_1lw5p8q1cm3fnt-fill" data-item-order="-587473" transform="translate(14, 299)"></g><g id="g-root-sy_1_cu_Vector_18lbnyi1cm3e2y-fill" data-item-order="-587470" transform="translate(578, 134)"><defs><linearGradient id="gradient-76aaff-163240667" x2="0" y2="1"><stop offset="0" stop-color="#9cc2ff"></stop><stop offset="1" stop-color="#4f92ff"></stop></linearGradient><linearGradient id="gradient-4dd3ff-378786070" x2="0" y2="1"><stop offset="0" stop-color="#7fdfff"></stop><stop offset="1" stop-color="#1ac6ff"></stop></linearGradient><linearGradient id="gradient-64edab-240055791" x2="0" y2="1"><stop offset="0" stop-color="#83fac1"></stop><stop offset="1" stop-color="#44e095"></stop></linearGradient><linearGradient id="gradient-bceb57-497517668" x2="0" y2="1"><stop offset="0" stop-color="#cff976"></stop><stop offset="1" stop-color="#a8dd38"></stop></linearGradient><linearGradient id="gradient-ffed4b-499785973" x2="0" y2="1"><stop offset="0" stop-color="#fff282"></stop><stop offset="1" stop-color="#ffe714"></stop></linearGradient></defs><g id="sy_1_cu_Vector_18lbnyi1cm3e2y-fill" stroke="none" fill="url(#gradient-ffed4b-499785973)"><g><path d="M 130 118L 70 10L 10 118L 130 118ZM 10 118L 130 118L 94 142L 46 142L 10 118Z"></path></g></g></g><g id="g-root-sy_1_Subtract_145i5u21cm3ev7-fill" data-item-order="-587465" transform="translate(20, 182)"></g><g id="g-root-sy_1_Subtract-start_qu1ngq1cm3gg4-fill" data-item-order="-587463" transform="translate(14, 179)"></g><g id="g-root-tx_wellform_4mbnre1cmahog-fill" data-item-order="0" transform="translate(14, 386)"><g id="tx_wellform_4mbnre1cmahog-fill" stroke="none" fill="#3cc583"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Well-Formed Formulas</tspan></text></g></g></g><g id="g-root-tx_validexp_14497nu1cmag3z-fill" data-item-order="0" transform="translate(14, 434)"><g id="tx_validexp_14497nu1cmag3z-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Valid expressions in logic</tspan></text></g></g></g><g id="g-root-ic_scri_13z9eyy1cm93bd-fill" data-item-order="0" transform="translate(614, 290)"></g><g id="g-root-ic_circ_zn6rd61cm7nyg-fill" data-item-order="0" transform="translate(614, 410)"></g><g id="g-root-tx_formatio_909qmi1cmahvy-fill" data-item-order="0" transform="translate(14, 506)"><g id="tx_formatio_909qmi1cmahvy-fill" stroke="none" fill="#1eabda"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Formation Rules</tspan></text></g></g></g><g id="g-root-tx_visualre_1d1562y1cmahhd-fill" data-item-order="0" transform="translate(14, 314)"><g id="tx_visualre_1d1562y1cmahhd-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Visual representation of formula </tspan><tspan x="12" y="46" dominant-baseline="ideographic">structure</tspan></text></g></g></g><g id="g-root-tx_syntaxtr_quo4ju1cmagp6-fill" data-item-order="0" transform="translate(14, 266)"><g id="tx_syntaxtr_quo4ju1cmagp6-fill" stroke="none" fill="#92bd39"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Syntax Trees</tspan></text></g></g></g><g id="g-root-ic_cond_1lseuq21cm696v-fill" data-item-order="0" transform="translate(614, 530)"></g><g id="g-root-tx_guidelin_zmkaa21cmahvx-fill" data-item-order="0" transform="translate(14, 554)"><g id="tx_guidelin_zmkaa21cmahvx-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Guidelines for combining symbols</tspan></text></g></g></g><g id="g-root-ic_1_1lynll61cm91j6-fill" data-item-order="0" transform="translate(614, 182)"></g><g id="g-root-tx_prooftec_1uto4qy1cmahab-fill" data-item-order="0" transform="translate(14, 194)"><g id="tx_prooftec_1uto4qy1cmahab-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Proof technique for logical structures</tspan></text></g></g></g><g id="g-root-tx_structur_18n737u1cmagi4-fill" data-item-order="0" transform="translate(14, 146)"><g id="tx_structur_18n737u1cmagi4-fill" stroke="none" fill="#e0cb15"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Structural Induction</tspan></text></g></g></g><g id="g-root-ic_logs_mg3klm1cm3fgu-fill" data-item-order="0" transform="translate(614, 650)"></g><g id="g-root-tx_basicbui_qpobuy1cmahab-fill" data-item-order="0" transform="translate(14, 674)"><g id="tx_basicbui_qpobuy1cmahab-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Basic building blocks of logic</tspan></text></g></g></g><g id="g-root-tx_proposit_4nklxm1cm3fnx-fill" data-item-order="0" transform="translate(343, 38)"><g id="tx_proposit_4nklxm1cm3fnx-fill" stroke="none" fill="#484848"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="15.1" y="34" dominant-baseline="ideographic">Propositional Logic Hierarchy</tspan></text></g></g></g><g id="g-root-tx_symbols_1q8utxm1cmahvw-fill" data-item-order="0" transform="translate(14, 626)"><g id="tx_symbols_1q8utxm1cmahvw-fill" stroke="none" fill="#4e88e7"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Symbols</tspan></text></g></g></g><g id="g-root-sy_5_cu_Vector_1cviway1cm3h1i-stroke" data-item-order="-587510" transform="translate(302, 626)"><g id="sy_5_cu_Vector_1cviway1cm3h1i-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 69.4375 10L 10 106L 682 106L 622.5625 10L 69.4375 10ZM 82 130L 10 106L 682 106L 610 130L 82 130Z"></path></g></g></g><g id="g-root-sy_5_Subtract_qp1uru1cm3g9b-stroke" data-item-order="-587505" transform="translate(21, 662.000244140625)"><g id="sy_5_Subtract_qp1uru1cm3g9b-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 10 10.000781L 328 9.999981"></path></g></g></g><g id="g-root-sy_5_Subtract-start_hu1bm21cm3eo0-stroke" data-item-order="-587503" transform="translate(15, 659)"><g id="sy_5_Subtract-start_hu1bm21cm3eo0-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-sy_4_cu_Vector_1uo1uyy1cm3guh-stroke" data-item-order="-587500" transform="translate(374, 506)"><g id="sy_4_cu_Vector_1uo1uyy1cm3guh-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 69.4375 10L 10 106L 538 106L 480.5625 10L 69.4375 10ZM 80 130L 10 106L 538 106L 466 130L 80 130Z"></path></g></g></g><g id="g-root-sy_4_Subtract_1cxebka1cm3g1u-stroke" data-item-order="-587495" transform="translate(21, 542.000244140625)"><g id="sy_4_Subtract_1cxebka1cm3g1u-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 10 10.001311L 400 10.000011"></path></g></g></g><g id="g-root-sy_4_Subtract-start_mb3rwq1cm3g1v-stroke" data-item-order="-587493" transform="translate(15, 539)"><g id="sy_4_Subtract-start_mb3rwq1cm3g1v-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-sy_3_cu_Vector_4mqdm1cm3f9o-stroke" data-item-order="-587490" transform="translate(446, 386)"><g id="sy_3_cu_Vector_4mqdm1cm3f9o-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 70 10L 10 106L 394 106L 334 10L 70 10ZM 70 130L 10 106L 394 106L 334 130L 70 130Z"></path></g></g></g><g id="g-root-sy_3_Subtract_1hf38y21cm3e9x-stroke" data-item-order="-587485" transform="translate(20, 422)"><g id="sy_3_Subtract_1hf38y21cm3e9x-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 10 10.0008L 473 10"></path></g></g></g><g id="g-root-sy_3_Subtract-start_143mqkq1cm3fuu-stroke" data-item-order="-587483" transform="translate(14, 419)"><g id="sy_3_Subtract-start_143mqkq1cm3fuu-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-sy_2_cu_Vector_qsspai1cm3e9z-stroke" data-item-order="-587480" transform="translate(518, 266)"><g id="sy_2_cu_Vector_qsspai1cm3e9z-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 58 10L 10 106L 250 106L 202 10L 58 10ZM 58 130L 10 106L 250 106L 202 130L 58 130Z"></path></g></g></g><g id="g-root-sy_2_Subtract_dhc6x61cm3fuw-stroke" data-item-order="-587475" transform="translate(20, 302)"><g id="sy_2_Subtract_dhc6x61cm3fuw-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 10 10L 537.6952 10"></path></g></g></g><g id="g-root-sy_2_Subtract-start_1lw5p8q1cm3fnt-stroke" data-item-order="-587473" transform="translate(14, 299)"><g id="sy_2_Subtract-start_1lw5p8q1cm3fnt-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-sy_1_cu_Vector_18lbnyi1cm3e2y-stroke" data-item-order="-587470" transform="translate(578, 134)"><g id="sy_1_cu_Vector_18lbnyi1cm3e2y-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 130 118L 70 10L 10 118L 130 118ZM 10 118L 130 118L 94 142L 46 142L 10 118Z"></path></g></g></g><g id="g-root-sy_1_Subtract_145i5u21cm3ev7-stroke" data-item-order="-587465" transform="translate(20, 182)"><g id="sy_1_Subtract_145i5u21cm3ev7-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 10 10L 601.5 10"></path></g></g></g><g id="g-root-sy_1_Subtract-start_qu1ngq1cm3gg4-stroke" data-item-order="-587463" transform="translate(14, 179)"><g id="sy_1_Subtract-start_qu1ngq1cm3gg4-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-tx_wellform_4mbnre1cmahog-stroke" data-item-order="0" transform="translate(14, 386)"></g><g id="g-root-tx_validexp_14497nu1cmag3z-stroke" data-item-order="0" transform="translate(14, 434)"></g><g id="g-root-ic_scri_13z9eyy1cm93bd-stroke" data-item-order="0" transform="translate(614, 290)"><g id="ic_scri_13z9eyy1cm93bd-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13 11L 55 11C 55 11 57 11 57 13L 57 55C 57 55 57 57 55 57L 13 57C 13 57 11 57 11 55L 11 13C 11 13 11 11 13 11M 41 46C 41 48.761425 43.238575 51 46 51C 48.761425 51 51 48.761425 51 46C 51 43.240002 49 42 46 41C 43 40 41 38.760002 41 36C 41 33.238579 43.238575 31 46 31C 48.761425 31 51 33.238579 51 36M 24 31L 36 31M 30 31L 30 51"></path></g></g></g><g id="g-root-ic_circ_zn6rd61cm7nyg-stroke" data-item-order="0" transform="translate(614, 410)"><g id="ic_circ_zn6rd61cm7nyg-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 34.099998 56.599602C 46.5266 56.599602 56.600201 46.526001 56.600201 34.099602C 56.600201 21.67314 46.5266 11.59961 34.099998 11.59961C 21.673641 11.59961 11.600006 21.67314 11.600006 34.099602C 11.600006 46.526001 21.673641 56.599602 34.099998 56.599602ZM 10 10M 20.400059 35.599602L 23.60006 43.199402L 30.200001 24.5996L 44.400002 24.5996M 10 10M 34.517601 30.7792L 43.314999 43.1992M 42.797401 30.7792L 34 43.1992"></path></g></g></g><g id="g-root-tx_formatio_909qmi1cmahvy-stroke" data-item-order="0" transform="translate(14, 506)"></g><g id="g-root-tx_visualre_1d1562y1cmahhd-stroke" data-item-order="0" transform="translate(14, 314)"></g><g id="g-root-tx_syntaxtr_quo4ju1cmagp6-stroke" data-item-order="0" transform="translate(14, 266)"></g><g id="g-root-ic_cond_1lseuq21cm696v-stroke" data-item-order="0" transform="translate(614, 530)"><g id="ic_cond_1lseuq21cm696v-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 10 10M 34.031998 47.5L 22.706001 39.5L 34.031998 31.5L 45.228001 39.5L 34.031998 47.5ZM 34.031998 31.5L 34.031998 13.526M 45.228001 39.5L 54.952 39.5C 55.495327 39.49947 56.016552 39.715069 56.400742 40.099258C 56.784931 40.483452 57.000534 41.004677 57 41.548L 57 54.473999M 22.706001 39.5L 13.048 39.5C 12.504674 39.49947 11.983448 39.715069 11.599258 40.099258C 11.215069 40.483452 10.999469 41.004677 11 41.548L 11 54.473999M 45.032001 29.556L 55.032001 19.556M 55.032001 29.556L 45.032001 19.556M 13.032 25.556L 16.944 29.556L 24.944 19.556"></path></g></g></g><g id="g-root-tx_guidelin_zmkaa21cmahvx-stroke" data-item-order="0" transform="translate(14, 554)"></g><g id="g-root-ic_1_1lynll61cm91j6-stroke" data-item-order="0" transform="translate(614, 182)"><g id="ic_1_1lynll61cm91j6-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 37 20L 37 13C 37 11.895431 36.104568 11 35 11L 13 11C 11.895431 11 11 11.895431 11 13L 11 55C 11 56.104568 11.895431 57 13 57L 35 57C 36.104568 57 37 56.104568 37 55L 37 48M 57 34L 19 34M 47 44L 57 34L 47 24"></path></g></g></g><g id="g-root-tx_prooftec_1uto4qy1cmahab-stroke" data-item-order="0" transform="translate(14, 194)"></g><g id="g-root-tx_structur_18n737u1cmagi4-stroke" data-item-order="0" transform="translate(14, 146)"></g><g id="g-root-ic_logs_mg3klm1cm3fgu-stroke" data-item-order="0" transform="translate(614, 650)"><g id="ic_logs_mg3klm1cm3fgu-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 34 36L 55 36L 55 57L 34 57ZM 34 57L 27 57C 19.268013 57.000004 13 50.731987 13 43L 13 36L 34 36ZM 13 11L 20 11C 27.731987 11 34 17.268013 34 25L 34 36L 34 36L 13 36L 13 36L 13 11L 13 11Z"></path></g></g></g><g id="g-root-tx_basicbui_qpobuy1cmahab-stroke" data-item-order="0" transform="translate(14, 674)"></g><g id="g-root-tx_proposit_4nklxm1cm3fnx-stroke" data-item-order="0" transform="translate(343, 38)"></g><g id="g-root-tx_symbols_1q8utxm1cmahvw-stroke" data-item-order="0" transform="translate(14, 626)"></g></g></g></svg>
`,

    //  content2:  <div 
    //    dangerouslySetInnerHTML={{ 
    //      __html: renderAcademicBlockHTML(`The logical connectives used to combine these propositions.`, 'theorem') 
    //    }} 
    //  />


  },
  alphabet:{
    description:`The syntax of propositional logic begins with the definition of its alphabet, which specifies the complete set of symbols allowed in the language. These symbols serve as the basic elements from which all logical expressions are constructed. The alphabet in propositional logic consists of three primary categories: atomic propositions, logical connectives, and parentheses.

Atomic propositions are the most fundamental units of the language. They are typically represented by uppercase letters such as P, Q, R, and may also include indexed forms like P₁, P₂, etc. Each atomic proposition stands as an indivisible statement that can be either true or false but is not further analyzed within propositional logic itself.

Logical connectives are the symbols used to combine atomic propositions into more complex expressions. The standard set of connectives includes negation (¬), conjunction (∧), disjunction (∨), implication (→), and biconditional (↔). Each connective corresponds to a specific logical operation, determining how the truth values of simpler components relate to one another in compound statements.

Parentheses (( and )) are included to ensure proper grouping and eliminate ambiguity in the structure of expressions. They clarify the intended order of operations when multiple connectives are present. The precise use of these symbols provides the necessary foundation for the formation rules that govern the construction of well-formed formulas.`,
svg:`
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="828" height="588" viewBox="0 0 1028 788" style="fill:none;margin-left:150px;stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style class="text-font-style fontImports" data-font-family="Roboto">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block');</style><g id="items" style="isolation: isolate"><g id="blend" style="mix-blend-mode: normal"><g id="g-root-sy_3_cu_Vector_v4v09f1e9vc3z-fill" data-item-order="-299510" transform="translate(410, 398)"><g id="sy_3_cu_Vector_v4v09f1e9vc3z-fill" stroke="none" fill="#4e88e7"><g><path d="M 70 10L 10 118L 394 118L 334 10L 70 10ZM 70 142L 10 118L 394 118L 334 142L 70 142Z"></path></g></g></g><g id="g-root-sy_3_Subtract_qp1i4z1e9vcw8-fill" data-item-order="-299505" transform="translate(21, 434)"></g><g id="g-root-sy_3_Subtract-start_m9800j1e9vdoh-fill" data-item-order="-299503" transform="translate(14, 431)"></g><g id="g-root-sy_2_cu_Vector_ddkzrn1e9veh6-fill" data-item-order="-299500" transform="translate(482, 278)"><g id="sy_2_cu_Vector_ddkzrn1e9veh6-fill" stroke="none" fill="#3cc583"><g><path d="M 58 10L 10 106L 250 106L 202 10L 58 10ZM 58 130L 10 106L 250 106L 202 130L 58 130Z"></path></g></g></g><g id="g-root-sy_2_Subtract_2qyhf1e9vcwb-fill" data-item-order="-299495" transform="translate(20, 314)"></g><g id="g-root-sy_2_Subtract-start_1uo1ic31e9vdhg-fill" data-item-order="-299493" transform="translate(14, 311)"></g><g id="g-root-sy_1_cu_Vector_18hkgsz1e9vcp9-fill" data-item-order="-299490" transform="translate(542, 146)"><g id="sy_1_cu_Vector_18hkgsz1e9vcp9-fill" stroke="none" fill="#969696"><g><path d="M 130 118L 70 10L 10 118L 130 118ZM 10 118L 130 118L 94 142L 46 142L 10 118Z"></path></g></g></g><g id="g-root-sy_1_Subtract_v63yfn1e9vea6-fill" data-item-order="-299485" transform="translate(20, 194)"></g><g id="g-root-sy_1_Subtract-start_qqagb71e9vf2f-fill" data-item-order="-299483" transform="translate(14, 191)"></g><g id="g-root-tx_proposit_dfgf0z1e9vdhk-fill" data-item-order="0" transform="translate(266, 38)"><g id="tx_proposit_dfgf0z1e9vdhk-fill" stroke="none" fill="#484848"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="15.85" y="34" dominant-baseline="ideographic">Propositional Logic Alphabet</tspan></text></g></g></g><g id="g-root-tx_parenthe_zp1tzn1e9veoe-fill" data-item-order="0" transform="translate(14, 158)"><g id="tx_parenthe_zp1tzn1e9veoe-fill" stroke="none" fill="#969696"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Parentheses</tspan></text></g></g></g><g id="g-root-tx_symbolsu_1d0iccz1e9vd3h-fill" data-item-order="0" transform="translate(14, 206)"><g id="tx_symbolsu_1d0iccz1e9vd3h-fill" stroke="none" fill="#484848"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Symbols used to group and prioritize </tspan><tspan x="12" y="46" dominant-baseline="ideographic">expressions</tspan></text></g></g></g><g id="g-root-ic_star_vccpar1e9zksg-fill" data-item-order="0" transform="translate(578, 194)"></g><g id="g-root-tx_logicalc_1qbcdn71e9veoc-fill" data-item-order="0" transform="translate(14, 278)"><g id="tx_logicalc_1qbcdn71e9veoc-fill" stroke="none" fill="#3cc583"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Logical Connectives</tspan></text></g></g></g><g id="g-root-tx_symbolst_hwivbn1e9vevf-fill" data-item-order="0" transform="translate(14, 326)"><g id="tx_symbolst_hwivbn1e9vevf-fill" stroke="none" fill="#374840"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Symbols that combine or modify </tspan><tspan x="12" y="46" dominant-baseline="ideographic">propositions</tspan></text></g></g></g><g id="g-root-ic_1_qrjehf1e9y80f-fill" data-item-order="0" transform="translate(578, 302)"></g><g id="g-root-tx_atomicpr_143mdxv1e9vchu-fill" data-item-order="0" transform="translate(14, 398)"><g id="tx_atomicpr_143mdxv1e9vchu-fill" stroke="none" fill="#4e88e7"><g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Atomic Propositions</tspan></text></g></g></g><g id="g-root-ic_loni_me7spf1e9vd3j-fill" data-item-order="0" transform="translate(578, 422)"></g><g id="g-root-tx_basicsta_1upwxlf1e9vcht-fill" data-item-order="0" transform="translate(14, 446)"><g id="tx_basicsta_1upwxlf1e9vcht-fill" stroke="none" fill="#3a4455"><g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Basic statements that can be true or </tspan><tspan x="12" y="46" dominant-baseline="ideographic">false</tspan></text></g></g></g><g id="g-root-sy_3_cu_Vector_v4v09f1e9vc3z-stroke" data-item-order="-299510" transform="translate(410, 398)"><g id="sy_3_cu_Vector_v4v09f1e9vc3z-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2"><g><path d="M 70 10L 10 118L 394 118L 334 10L 70 10ZM 70 142L 10 118L 394 118L 334 142L 70 142Z"></path></g></g></g><g id="g-root-sy_3_Subtract_qp1i4z1e9vcw8-stroke" data-item-order="-299505" transform="translate(21, 434)"><g id="sy_3_Subtract_qp1i4z1e9vcw8-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#4e88e7" stroke-width="2"><g><path d="M 10 10.0016L 438.5 10"></path></g></g></g><g id="g-root-sy_3_Subtract-start_m9800j1e9vdoh-stroke" data-item-order="-299503" transform="translate(14, 431)"><g id="sy_3_Subtract-start_m9800j1e9vdoh-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#4e88e7" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-sy_2_cu_Vector_ddkzrn1e9veh6-stroke" data-item-order="-299500" transform="translate(482, 278)"><g id="sy_2_cu_Vector_ddkzrn1e9veh6-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2"><g><path d="M 58 10L 10 106L 250 106L 202 10L 58 10ZM 58 130L 10 106L 250 106L 202 130L 58 130Z"></path></g></g></g><g id="g-root-sy_2_Subtract_2qyhf1e9vcwb-stroke" data-item-order="-299495" transform="translate(20, 314)"><g id="sy_2_Subtract_2qyhf1e9vcwb-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#3cc583" stroke-width="2"><g><path d="M 10 10L 501.5 10"></path></g></g></g><g id="g-root-sy_2_Subtract-start_1uo1ic31e9vdhg-stroke" data-item-order="-299493" transform="translate(14, 311)"><g id="sy_2_Subtract-start_1uo1ic31e9vdhg-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#3cc583" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-sy_1_cu_Vector_18hkgsz1e9vcp9-stroke" data-item-order="-299490" transform="translate(542, 146)"><g id="sy_1_cu_Vector_18hkgsz1e9vcp9-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2"><g><path d="M 130 118L 70 10L 10 118L 130 118ZM 10 118L 130 118L 94 142L 46 142L 10 118Z"></path></g></g></g><g id="g-root-sy_1_Subtract_v63yfn1e9vea6-stroke" data-item-order="-299485" transform="translate(20, 194)"><g id="sy_1_Subtract_v63yfn1e9vea6-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#969696" stroke-width="2"><g><path d="M 10 10L 565 10"></path></g></g></g><g id="g-root-sy_1_Subtract-start_qqagb71e9vf2f-stroke" data-item-order="-299483" transform="translate(14, 191)"><g id="sy_1_Subtract-start_qqagb71e9vf2f-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#969696" stroke-width="2"><g><path d="M 13 16C 11.3443 16 10 14.6557 10 13C 10 11.3443 11.3443 10 13 10C 14.6557 10 16 11.3443 16 13C 16 14.6557 14.6557 16 13 16Z"></path></g></g></g><g id="g-root-tx_proposit_dfgf0z1e9vdhk-stroke" data-item-order="0" transform="translate(266, 38)"></g><g id="g-root-tx_parenthe_zp1tzn1e9veoe-stroke" data-item-order="0" transform="translate(14, 158)"></g><g id="g-root-tx_symbolsu_1d0iccz1e9vd3h-stroke" data-item-order="0" transform="translate(14, 206)"></g><g id="g-root-ic_star_vccpar1e9zksg-stroke" data-item-order="0" transform="translate(578, 194)"><g id="ic_star_vccpar1e9zksg-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2"><g><path d="M 29 18.996L 57 18.996M 29 34.996002L 57 34.996002M 29 50.995998L 57 50.995998M 21 18.996L 11 18.996M 19 13.996L 13 23.996M 13 13.996L 19 23.996M 21 34.996002L 11 34.996002M 19 29.996L 13 39.996002M 13 29.996L 19 39.996002M 21 50.995998L 11 50.995998M 19 45.995998L 13 55.995998M 13 45.995998L 19 55.995998"></path></g></g></g><g id="g-root-tx_logicalc_1qbcdn71e9veoc-stroke" data-item-order="0" transform="translate(14, 278)"></g><g id="g-root-tx_symbolst_hwivbn1e9vevf-stroke" data-item-order="0" transform="translate(14, 326)"></g><g id="g-root-ic_1_qrjehf1e9y80f-stroke" data-item-order="0" transform="translate(578, 302)"><g id="ic_1_qrjehf1e9y80f-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2"><g><path d="M 37 20L 37 13C 37 11.895431 36.104568 11 35 11L 13 11C 11.895431 11 11 11.895431 11 13L 11 55C 11 56.104568 11.895431 57 13 57L 35 57C 36.104568 57 37 56.104568 37 55L 37 48M 57 34L 19 34M 47 44L 57 34L 47 24"></path></g></g></g><g id="g-root-tx_atomicpr_143mdxv1e9vchu-stroke" data-item-order="0" transform="translate(14, 398)"></g><g id="g-root-ic_loni_me7spf1e9vd3j-stroke" data-item-order="0" transform="translate(578, 422)"><g id="ic_loni_me7spf1e9vd3j-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2"><g><path d="M 56.209999 28C 58.919422 38.044102 54.540764 48.655273 45.536575 53.865799C 36.532391 59.076324 25.150526 57.585423 17.792137 50.231571C 10.43375 42.877724 8.935823 31.496782 14.140791 22.489382C 19.34576 13.481981 29.954227 9.096775 40 11.8M 47 18C 47 19.656855 48.343147 21 50 21C 51.656857 21 53 19.656855 53 18C 53 16.343145 51.656857 15 50 15C 48.343147 15 47 16.343145 47 18M 25 34C 25 38.970562 29.029438 43 34 43C 38.970562 43 43 38.970562 43 34C 43 29.029438 38.970562 25 34 25C 29.029438 25 25 29.029438 25 34"></path></g></g></g><g id="g-root-tx_basicsta_1upwxlf1e9vcht-stroke" data-item-order="0" transform="translate(14, 446)"></g></g></g></svg>`
    
  },
  formation:{
    description:`### **The Construction of Formulas in Propositional Logic**

In propositional logic, the process of constructing valid formulas is governed by formation rules. These rules specify how to generate well-formed formulas (WFFs) systematically from the elements of the alphabet. The alphabet consists of atomic propositions, logical connectives, and parentheses. Formation rules ensure that every formula is built in a strictly defined manner, maintaining structural correctness without any ambiguity.

The process of formation proceeds as follows:

1. **Atomic Propositions:**  
   Every atomic proposition, such as P, Q, or R, is by itself a well-formed formula. This constitutes the base case of the formation process.

2. **Application of Negation:**  
   If φ is already a well-formed formula, then the expression ¬φ is also a well-formed formula. The negation operator is unary and applies to a single formula.

3. **Application of Binary Connectives:**  
   If φ and ψ are well-formed formulas, then the following are also well-formed formulas:  
   - (φ ∧ ψ) (conjunction),
   - (φ ∨ ψ) (disjunction),
   - (φ → ψ) (implication),
   - (φ ↔ ψ) (biconditional).  
   
   Each binary connective combines exactly two previously formed formulas, and parentheses are mandatory to explicitly indicate the grouping and the structure of the new formula.

4. **Recursion:**  
   This process is inherently recursive. Once new formulas are constructed through the application of negation or binary connectives, they themselves may serve as components for further construction according to the same rules.
   
At this basic level, every formula must be fully parenthesized to make its structure explicit. Parentheses are not optional: they are integral to the definition of the formula under the formation rules. No precedence between connectives is assumed at this stage; every operation’s scope must be determined explicitly through parentheses.

Precedence and associativity conventions are introduced only later, as practical tools to simplify the writing and reading of formulas when parentheses are omitted. They are not part of the formation rules themselves but are auxiliary syntactic conventions used in the presentation of formulas.

This construction algorithm defines the internal structure of propositional expressions. It establishes that every formula is built in a finite number of steps, starting from atomic propositions and proceeding through regulated applications of connectives. These principles of formation are the foundation upon which the method of structural induction is later based, since they determine the way complex formulas are composed from simpler components.
`
  },
  wff:{
    description:`
      In propositional logic, a Well-Formed Formula (WFF) is any syntactically valid expression constructed from [propositional alphabet](!/logic/propositional-logic/syntax#alphabet) elements according to specific grammar [formation rules](!/logic/propositional-logic/syntax#formation). These expressions are the foundational elements of the logical system, allowing us to represent and reason about truth-functional statements.
      Once the [formation rules](!/logic/propositional-logic/syntax#formation) were followed correctly and no other symbols except those from the [propositional alphabet](!/logic/propositional-logic/syntax#alphabet) were used, the expression should be a valid WFF. But we still need to validate it to ensure it adheres strictly to the syntactic rules of propositional logic. This involves checking the structural correctness of the formula — things like how operators are used, how subformulas are arranged, and whether the formula can be interpreted unambiguously.
We don't rebuild the formula but rather analyze its structure. This means verifying that parentheses are balanced, operators appear in valid configurations, and no extraneous or malformed expressions are present. The validation process can be summarized by the following practical checks:  


    `,
    table:`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>WFF Validation Rules</title><style>body{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;background-color:#e2e3e5;padding:20px}table{border-collapse:collapse;width:100%;max-width:900px;margin:0 auto;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.1)}td,th{border:1px solid #dee2e6;padding:12px 16px;text-align:left;vertical-align:top}th{background-color:#e2e3e5;color:gray}tr:nth-child(even){background-color:#f1f3f5}tr:hover{background-color:#e9ecef}</style></head><body><h2 style="text-align:center">Rules for Validating Well-Formed Formulas (WFFs)</h2><table><thead><tr><th>Rule</th><th>Valid Example</th><th>Invalid Example</th></tr></thead><tbody><tr><td>1. Parentheses are balanced and properly nested</td><td>(P ∨ Q)</td><td>(P ∨ Q or P ∨ Q)</td></tr><tr><td>2. Only allowed symbols are used (propositional letters, connectives, and parentheses)</td><td>¬(P ∧ Q)</td><td>¬(P & Q) or P1 ∧ Q</td></tr><tr><td>3. Unary connective ¬ is applied directly to a valid subformula</td><td>¬P or ¬(P ∧ Q)</td><td>P¬, ¬∧P, or ¬()</td></tr><tr><td>4. Binary connectives (∧, ∨, →, ↔) occur between two valid WFFs</td><td>(P → Q)</td><td>(→ P Q) or (P ∧)</td></tr><tr><td>5. Atomic propositions appear as standalone symbols</td><td>P, (P ∧ Q)</td><td>PQ or P¬Q</td></tr><tr><td>6. No two connectives appear consecutively without valid operands</td><td>(¬P ∧ Q)</td><td>(P ∧ ∨ Q)</td></tr><tr><td>7. The full string forms one complete formula (no leftovers)</td><td>((P ∧ Q) ∨ R)</td><td>((P ∧ Q) ∨ R) ∧</td></tr></tbody></table></body></html>`,
    description2:`
    Each rule in the table identifies a specific structural constraint. If any one of these constraints is violated, the formula cannot be considered well-formed, regardless of whether it uses the correct symbols.

    This validation process can also be performed using a syntax tree, which visually represents the hierarchical structure of the formula. If the formula can be fully parsed into a well-formed tree—with each operator applied to the correct number and type of subformulas—it is syntactically valid. You can experiment with this using the our [Syntax Tree Builder](!/logic/propositional-logic/syntax/tree-builder) , which helps visualize whether a formula conforms to the WFF rules.

    Once a formula is well-formed, we can then examine or transform it into various [normal forms](!/logic/propositional-logic/syntax#normal_forms), which are standardized representations of logical formulas. This transformation does not change the formula's meaning (i.e. its semantics), but it does organize the formula in a way that is more amenable to analysis, algorithmic manipulation, or implementation in digital logic circuits. `
  
    
  },
  normal_forms:{
    description:` **What Are Normal Forms?**     
In propositional logic, normal forms are standardized ways of rewriting logical formulas. They ensure that formulas follow a uniform structure while preserving logical equivalence — meaning they represent the same truth function as the original formula.
1. **Conjunctive Normal Form (CNF)**
A formula is in CNF if it is a conjunction of one or more clauses, where each clause is a disjunction of literals. For example:

\t\t\t\t$(P∨¬Q)∧(R∨S∨T)$

This form is particularly useful in satisfiability checking (e.g., for SAT solvers) and logic proof systems.

2. **Disjunctive Normal Form (DNF)**
A formula is in DNF if it is a disjunction of one or more terms, where each term is a conjunction of literals. For example:

\t\t\t\t$(P∧¬Q)∨(R∧S)$

DNF is frequently used when constructing logical functions from truth tables or for analyzing the structure of logical consequences.

    `

  }
 }

 const introContent = {
   id: "intro",
   title: "Introduction to Propositional Logic Syntax",
   content: `In formal logic, syntax refers to the structural [formation rules](!/logic/propositional-logic/syntax#formation) that determine how logical expressions are properly formed. Much like grammar in natural language, syntax focuses purely on the arrangement of [symbols](!/logic/propositional-logic/syntax#alphabet) — not their meaning. In contrast, [semantics](!/logic/propositional-logic/semantics) is concerned with the interpretation and truth value of these expressions, while proof systems operate within this structure to establish logical conclusions. Syntax itself answers a simpler but essential question: is the statement written in a correct and recognizable way, regardless of whether it is true or false.
This section introduces the basic elements of propositional logic syntax, beginning with the [alphabet](!/logic/propositional-logic/syntax#alphabet) of atomic propositions and the connectives used to combine them. It outlines how [well-formed formulas (WFFs)](!/logic/propositional-logic/syntax#wff) are built according to [formation rules](!/logic/propositional-logic/syntax#formation) and explains the importance of parentheses in maintaining clarity. Along the way, tools like syntax trees for visualizing expression structure and structural induction for proving properties about formulas will also be discussed, all of which together form the foundation for working with logical systems in a precise and systematic way.
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

 const canonicalUrl = 'https://www.learnmathclass.com/logic/propositional-logic/syntax'
 const lastModified = new Date().toISOString()

 const pageTitle = "Syntax"
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
    //  logicFormulasList,
    //  logicTermsList,
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

  // const tools = [
  //   {
  //     title: "{{TOOL_1_TITLE}}",
  //     description: "{{TOOL_1_DESCRIPTION}}",
  //     // image: "{{TOOL_1_IMAGE_PATH}}",
  //     link: "{{TOOL_1_LINK}}"
  //   },
  //   {
  //     title: "{{TOOL_2_TITLE}}",
  //     description: "{{TOOL_2_DESCRIPTION}}",
  //     // image: "{{TOOL_2_IMAGE_PATH}}",
  //     link: "{{TOOL_2_LINK}}"
  //   },
  //   // Additional tools can be added here
  // ]

 const logicSections = [

   {
     id: 'definitions',
     title: sectionContent.definitions.title,
    //  link:'/logic/definitions',
     content:[
      sectionContent.definitions.description,
      <MyList data={sectionContent.definitions.list}
      key={1}
boxed={true} color={'blue'} compact={true} type={'dot'} width={'650px'} />
      ,
      sectionContent.definitions.description2,
      sectionContent.definitions.svg,
      

   ]
    
     
     
   },
   {id:'alphabet',
    title:'Propositional Logic Alphabet',
    content:[
      sectionContent.alphabet.description,
      sectionContent.alphabet.svg,

    ]



   },
   {
    id:'formation',
    title:'Formation Rules',
    content:[
      sectionContent.formation.description

    ]
   },

   {
    id:'wff',
    title:'Well Formed Formulas (WFF)',
    content:[
      sectionContent.wff.description,
      sectionContent.wff.table,
      sectionContent.wff.description2

    ]
   },
   {
    id:'normal_forms',
    title:'Normal Forms',
    content:[
     sectionContent.normal_forms.description

    ]
   },

  
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
         Propositional Logic Syntax
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