

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'
import { createContentHtml } from '@/app/utils/utils-functions'
import '../../pages/pages.css'

export async function getStaticProps() {
  const { default: calculusFormulasList } = await import('@/app/api/db/formulas/calculus/calculusFormulasList')
  const { default: calculusTermsList } = await import('@/app/api/db/definitions/calculus/calculusDefinitions')
  
  // Static content that can be used for SEO
  const sectionContent = {
    formulas: {
      leftContentHtml: createContentHtml({ 
        description: 'The Calculus Formulas page features fundamental laws and theorems across Limits, Derivatives, Integrals, and Integration Techniques. Each entry includes step-by-step explanations, key variables, worked examples, and real-world applications - from basic limit laws and differentiation rules to advanced integration methods and improper integrals.',
        // link: '/calculus/definitions',
        // linkText: 'View All Definitions',
        height:'350px',
        backgroundColor:'#fdfdea',
      }),
      layout: 'horizontal',
      title: 'Calculus Formulas',
    },
     definitions: {
          title: 'Calculus Terms and Definitions',
          description: 'Browse Calculus terminology including main concepts and their definitions with examples',
          rightContentHtml: createContentHtml({ 
            description: 'The Calculus Terms and Definitions page provides a comprehensive collection of essential calculus concepts organized across multiple categories including Functions, Differentiation, Integration, Geometry, Motion and Dynamics, and Vector Calculus. From fundamental concepts like derivatives and integrals to advanced topics in vector analysis and differential equations, each term is clearly defined to support understanding of calculus principles and their applications.',
            // link: '/calculus/definitions',
            // linkText: 'View All Definitions',
            height:'350px',
            backgroundColor:'#fdfdea',
          }),
          layout: 'horizontal'
        },
        three_concepts:{
          title:`Limits, Derivatives, and Integrals`,
          link:``,
          description:`[Limits](!/calculus/limits) play a central role in defining both [derivatives](!/calculus/derivatives) and [integrals](!/calculus/integrals).They provide the precise language for handling values that are approached but not necessarily reached.
A derivative is defined as the limit of the average rate of change while the interval shrinks to zero and, in such a way, indicates how function changes at a specific point.
An integral, on the other hand, measures accumulation—such as area under a curve or total distance traveled. The concept of a limit is also used here, serving as the key tool for defining the integral through an infinite sum of infinitesimally small quantities.
What ties them all together is the Fundamental Theorem of Calculus, which states that differentiation and integration are inverse processes: taking the derivative of an integral function returns the original function, and integrating a derivative recovers accumulated change.
In essence, [limits](!/calculus/limits) allow us to rigorously define both change (via [derivatives](!calculus/derivatives)) and accumulation (via [integrals](!/calculus/integrals)), revealing a deep unity among these core ideas of calculus.`,
          svg:`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="792" height="612" style="margin-left:200px" viewBox="50 80 692 500" style="margin-left:50px;fill:none;stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style class="text-font-style fontImports" data-font-family="Roboto">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block');</style>
<!-- Background -->
<rect width="892" height="712" fill="url(#bg-gradient)"/>
<defs>
<linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="#f8fafc"/>
<stop offset="100%" stop-color="#e2e8f0"/>
</linearGradient>
<!-- Enhanced gradients with more vibrant colors -->
<linearGradient id="gradient-cbcbcb-248399021" x2="0" y2="1">
<stop offset="0" stop-color="#f1f5f9"/>
<stop offset="50" stop-color="#e2e8f0"/>
<stop offset="1" stop-color="#cbd5e1"/>
</linearGradient>
<linearGradient id="gradient-64edab-240055791" x2="0" y2="1">
<stop offset="0" stop-color="#6ee7b7"/>
<stop offset="50" stop-color="#34d399"/>
<stop offset="1" stop-color="#10b981"/>
</linearGradient>
<linearGradient id="gradient-bceb57-497517668" x2="0" y2="1">
<stop offset="0" stop-color="#fde047"/>
<stop offset="50" stop-color="#eab308"/>
<stop offset="1" stop-color="#ca8a04"/>
</linearGradient>
<linearGradient id="gradient-4dd3ff-378786070" x2="0" y2="1">
<stop offset="0" stop-color="#7dd3fc"/>
<stop offset="50" stop-color="#0ea5e9"/>
<stop offset="1" stop-color="#0284c7"/>
</linearGradient>
<!-- Drop shadow filter -->
<filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
<feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(0,0,0,0.15)"/>
</filter>
</defs><g id="items" style="isolation: isolate"><g id="blend" style="mix-blend-mode: normal"><g id="g-root-cp_0_g-0_zs6kxx29wgll-fill" data-item-order="-383894" transform="translate(314, 314.991943359375)"><g id="cp_0_g-0_zs6kxx29wgll-fill" stroke="none" fill="url(#gradient-cbcbcb-248399021)" filter="url(#dropshadow)"><g><path d="M 154 82C 154 42.24 121.76 10 82 10C 42.24 10 10 42.24 10 82C 10 121.76 42.23 154 82 154C 121.77 154 154 121.77 154 82Z"></path></g></g></g><g id="g-root-cp_1_g-1_m7cy9x29xtl7-fill" data-item-order="-383890" transform="translate(356, 182)"><g id="cp_1_g-1_m7cy9x29xtl7-fill" stroke="none" fill="url(#gradient-64edab-240055791)" filter="url(#dropshadow)"><g><path d="M 29.26 103.37L 40 115L 50.74 103.37L 44.76 103.37L 44.76 69.57C 59.06 67.29 70 54.91 70 39.97C 70 23.42 56.57 10 40 10C 23.43 10 10 23.42 10 39.97C 10 54.88 20.9 67.25 35.18 69.56L 35.18 103.37L 29.26 103.37Z"></path></g></g></g><g id="g-root-cp_2_g-2_8vwfwl29xv65-fill" data-item-order="-383886" transform="translate(472.5999755859375, 433.491943359375)"><g id="cp_2_g-2_8vwfwl29xv65-fill" stroke="none" fill="url(#gradient-bceb57-497517668)" filter="url(#dropshadow)"><g><path d="M 25.44 10.01L 10 13.5L 14.7 28.62L 17.69 23.44L 46.96 40.34C 41.78 53.87 47.04 69.53 59.97 76.99C 74.31 85.27 92.64 80.34 100.93 66C 109.21 51.65 104.31 33.31 89.97 25.03C 77.05 17.57 60.89 20.83 51.76 32.04L 22.48 15.13L 25.44 10L 25.44 10.01Z"></path></g></g></g><g id="g-root-cp_3_g-3_4gpev929xssn-fill" data-item-order="-383882" transform="translate(204.4539794921875, 433.5)"><defs><linearGradient id="gradient-cbcbcb-248399021" x2="0" y2="1"><stop offset="0" stop-color="#f1f5f9"></stop><stop offset="50" stop-color="#e2e8f0"></stop><stop offset="1" stop-color="#cbd5e1"></stop></linearGradient><linearGradient id="gradient-64edab-240055791" x2="0" y2="1"><stop offset="0" stop-color="#6ee7b7"></stop><stop offset="50" stop-color="#34d399"></stop><stop offset="1" stop-color="#10b981"></stop></linearGradient><linearGradient id="gradient-bceb57-497517668" x2="0" y2="1"><stop offset="0" stop-color="#fde047"></stop><stop offset="50" stop-color="#eab308"></stop><stop offset="1" stop-color="#ca8a04"></stop></linearGradient><linearGradient id="gradient-4dd3ff-378786070" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"></stop><stop offset="50" stop-color="#0ea5e9"></stop><stop offset="1" stop-color="#0284c7"></stop></linearGradient></defs><g id="cp_3_g-3_4gpev929xssn-fill" stroke="none" fill="url(#gradient-4dd3ff-378786070)" filter="url(#dropshadow)"><g><path d="M 100.2557 28.61L 104.9557 13.49L 89.5157 10L 92.5057 15.18L 63.2357 32.08C 54.1057 20.83 37.9157 17.56 24.9857 25.02C 10.6457 33.3 5.7457 51.64 14.0257 65.99C 22.3057 80.34 40.6457 85.26 54.9857 76.98C 67.9057 69.52 73.1657 53.9 68.0257 40.38L 97.3057 23.47L 100.2657 28.6L 100.2557 28.61Z"></path></g></g></g><g id="g-root-tx_limits_1cvix6t29xslm-fill" data-item-order="0" transform="translate(362, 98)"><g id="tx_limits_1cvix6t29xslm-fill" stroke="none" fill="#3cc583"><g><text style="font: bold 11.7px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="11.7px" font-family="Roboto, sans-serif"><tspan x="17.69" y="29" dominant-baseline="ideographic">Limits</tspan></text></g></g></g><g id="g-root-tx_thefound_v48wp129xuyr-fill" data-item-order="0" transform="translate(338, 128)"><g id="tx_thefound_v48wp129xuyr-fill" stroke="none" fill="#484848"><g><text style="font: 10px Roboto, sans-serif; white-space: pre;" font-size="10px" font-family="Roboto, sans-serif"><tspan x="15.48" y="22" dominant-baseline="ideographic">The foundation for </tspan><tspan x="11.87" y="34" dominant-baseline="ideographic">defining change and </tspan><tspan x="26.49" y="46" dominant-baseline="ideographic">accumulation</tspan></text></g></g></g><g id="g-root-ic_grap_1hcldhh29xtzg-fill" data-item-order="0" transform="translate(368, 194)"></g><g id="g-root-ic_netw_dg39mt2aaiob-fill" data-item-order="0" transform="translate(350, 349.99609375)"></g><g id="g-root-ic_1_zs6kxx2a7oxu-fill" data-item-order="0" transform="translate(217, 455)"></g><g id="g-root-ic_grap_959k792a222x-fill" data-item-order="0" transform="translate(519, 455)"></g><g id="g-root-tx_integral_1d0it1h2a3g1z-fill" data-item-order="0" transform="translate(122, 470)"><g id="tx_integral_1d0it1h2a3g1z-fill" stroke="none" fill="#1eabda"><g><text style="font: bold 11.7px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="11.7px" font-family="Roboto, sans-serif"><tspan x="21.61" y="29" dominant-baseline="ideographic">Integrals</tspan></text></g></g></g><g id="g-root-tx_derivati_1luae112a3g91-fill" data-item-order="0" transform="translate(590, 470)"><g id="tx_derivati_1luae112a3g91-fill" stroke="none" fill="#92bd39"><g><text style="font: bold 11.7px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="11.7px" font-family="Roboto, sans-serif"><tspan x="12" y="29" dominant-baseline="ideographic">Derivatives</tspan></text></g></g></g><g id="g-root-tx_measures_me89dx2a3g20-fill" data-item-order="0" transform="translate(98, 500)"><g id="tx_measures_me89dx2a3g20-fill" stroke="none" fill="#484848"><g><text style="font: 10px Roboto, sans-serif; white-space: pre;" font-size="10px" font-family="Roboto, sans-serif"><tspan x="31.53" y="22" dominant-baseline="ideographic">Measure the </tspan><tspan x="19.83" y="34" dominant-baseline="ideographic">accumulation of </tspan><tspan x="47.97" y="46" dominant-baseline="ideographic">quantities</tspan></text></g></g></g><g id="g-root-tx_measures_hwjc052a3hty-fill" data-item-order="0" transform="translate(590, 500)"><g id="tx_measures_hwjc052a3hty-fill" stroke="none" fill="#484848"><g><text style="font: 10px Roboto, sans-serif; white-space: pre;" font-size="10px" font-family="Roboto, sans-serif"><tspan x="12" y="22" dominant-baseline="ideographic">Measure the rate of </tspan><tspan x="12" y="34" dominant-baseline="ideographic">change at a point</tspan></text></g></g></g><g id="g-root-cp_0_g-0_zs6kxx29wgll-stroke" data-item-order="-383894" transform="translate(314, 314.991943359375)"><g id="cp_0_g-0_zs6kxx29wgll-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#1e293b" stroke-width="1.5"><g><path d="M 154 82C 154 42.24 121.76 10 82 10C 42.24 10 10 42.24 10 82C 10 121.76 42.23 154 82 154C 121.77 154 154 121.77 154 82Z"></path></g></g></g><g id="g-root-cp_1_g-1_m7cy9x29xtl7-stroke" data-item-order="-383890" transform="translate(356, 182)"><g id="cp_1_g-1_m7cy9x29xtl7-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#1e293b" stroke-width="1.5"><g><path d="M 29.26 103.37L 40 115L 50.74 103.37L 44.76 103.37L 44.76 69.57C 59.06 67.29 70 54.91 70 39.97C 70 23.42 56.57 10 40 10C 23.43 10 10 23.42 10 39.97C 10 54.88 20.9 67.25 35.18 69.56L 35.18 103.37L 29.26 103.37Z"></path></g></g></g><g id="g-root-cp_2_g-2_8vwfwl29xv65-stroke" data-item-order="-383886" transform="translate(472.5999755859375, 433.491943359375)"><g id="cp_2_g-2_8vwfwl29xv65-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#1e293b" stroke-width="1.5"><g><path d="M 25.44 10.01L 10 13.5L 14.7 28.62L 17.69 23.44L 46.96 40.34C 41.78 53.87 47.04 69.53 59.97 76.99C 74.31 85.27 92.64 80.34 100.93 66C 109.21 51.65 104.31 33.31 89.97 25.03C 77.05 17.57 60.89 20.83 51.76 32.04L 22.48 15.13L 25.44 10L 25.44 10.01Z"></path></g></g></g><g id="g-root-cp_3_g-3_4gpev929xssn-stroke" data-item-order="-383882" transform="translate(204.4539794921875, 433.5)"><g id="cp_3_g-3_4gpev929xssn-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#1e293b" stroke-width="1.5"><g><path d="M 100.2557 28.61L 104.9557 13.49L 89.5157 10L 92.5057 15.18L 63.2357 32.08C 54.1057 20.83 37.9157 17.56 24.9857 25.02C 10.6457 33.3 5.7457 51.64 14.0257 65.99C 22.3057 80.34 40.6457 85.26 54.9857 76.98C 67.9057 69.52 73.1657 53.9 68.0257 40.38L 97.3057 23.47L 100.2657 28.6L 100.2557 28.61Z"></path></g></g></g><g id="g-root-tx_limits_1cvix6t29xslm-stroke" data-item-order="0" transform="translate(362, 98)"></g><g id="g-root-tx_thefound_v48wp129xuyr-stroke" data-item-order="0" transform="translate(338, 128)"></g><g id="g-root-ic_grap_1hcldhh29xtzg-stroke" data-item-order="0" transform="translate(368, 194)"><g id="ic_grap_1hcldhh29xtzg-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#1e293b" stroke-width="1.5"><g><path d="M 13.735 25.164999C 13.674862 24.667267 13.644807 24.166355 13.645 23.665001C 13.638674 18.256994 17.476297 13.607571 22.787441 12.588593C 28.098585 11.569616 33.38443 14.468644 35.380001 19.495001M 32.875 31.630001L 36.130001 34.885002M 44.5 40.285C 45.101959 40.845913 45.349747 41.690666 45.146156 42.487869C 44.942566 43.285065 44.320068 43.907566 43.522865 44.111156C 42.72567 44.314747 41.880913 44.066959 41.32 43.465004L 35.5 37.630001C 35.216034 37.348351 35.056301 36.964954 35.056301 36.564999C 35.056301 36.165047 35.216034 35.781651 35.5 35.5L 36.564999 34.435001C 36.846649 34.151031 37.230042 33.991302 37.630001 33.991302C 38.029957 33.991302 38.413353 34.151031 38.695 34.435001ZM 37.014999 11.875L 43.014999 11.875L 43.014999 17.875M 36.16 24.34C 35.856445 29.440742 32.15773 33.698307 27.149506 34.711922C 22.141281 35.725529 17.078094 33.24128 14.815001 28.66M 43 11.875L 29.650002 25.24C 29.064945 25.821587 28.120056 25.821587 27.535 25.24L 23.950001 21.639999C 23.364944 21.058414 22.420057 21.058414 21.834999 21.639999L 10.825 32.650002"></path></g></g></g><g id="g-root-ic_netw_dg39mt2aaiob-stroke" data-item-order="0" transform="translate(350, 349.99609375)"><g id="ic_netw_dg39mt2aaiob-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 68.32 35.827C 71.374413 40.006905 73.014069 45.053051 73.000008 50.230003C 73.270462 58.412933 68.971146 66.068214 61.843002 70.096001L 61.843002 80.5M 35.800003 80.5L 35.800003 75.699997C 30.91 75.727005 28.276001 75.352005 26.464001 73.537003C 24.139 71.211998 24.639999 60.780998 24.639999 60.780998C 24.639999 60.780998 22.431999 60.864998 20.764 60.780998C 20.168644 60.762344 19.615177 60.470116 19.264 59.988998C 19.03051 59.484062 18.939232 58.924988 19 58.372002C 18.700001 54.217003 24.271 48.015999 24.271 45.945999C 24.259068 43.543339 24.710297 41.160896 25.599998 38.929001M 46 11.5L 46 40M 41.5 44.5C 41.5 46.985283 43.514721 49 46 49C 48.485283 49 50.5 46.985283 50.5 44.5C 50.5 42.014721 48.485283 40 46 40C 43.514721 40 41.5 42.014721 41.5 44.5ZM 53.5 32.5C 53.5 34.985283 55.514721 37 58 37C 60.485283 37 62.5 34.985283 62.5 32.5C 62.5 30.014719 60.485283 28 58 28C 55.514721 28 53.5 30.014719 53.5 32.5ZM 29.5 32.5C 29.5 34.985283 31.514719 37 34 37C 36.485283 37 38.5 34.985283 38.5 32.5C 38.5 30.014719 36.485283 28 34 28C 31.514719 28 29.5 30.014719 29.5 32.5ZM 46 20.5L 52 20.5C 55.313709 20.5 58 23.186291 58 26.5L 58 28M 46 20.5L 40 20.5C 36.686291 20.5 34 23.186291 34 26.5L 34 28"></path></g></g></g><g id="g-root-ic_1_zs6kxx2a7oxu-stroke" data-item-order="0" transform="translate(217, 455)"><g id="ic_1_zs6kxx2a7oxu-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 12.25 10.75L 43.75 10.75C 43.75 10.75 45.25 10.75 45.25 12.25L 45.25 43.75C 45.25 43.75 45.25 45.25 43.75 45.25L 12.25 45.25C 12.25 45.25 10.75 45.25 10.75 43.75L 10.75 12.25C 10.75 12.25 10.75 10.75 12.25 10.75M 21.25 10.75L 21.25 28.991501M 34.75 10.75L 34.75 25.816M 40.399002 21.25L 10.75 21.25M 45.25 34.75L 19.75 34.75M 11.35 44.949997L 13.951 37.449997C 16.076181 31.34301 21.833801 27.250202 28.299999 27.25L 28.299999 27.25C 34.839005 27.250347 40.64447 23.06604 42.712002 16.862499L 44.650002 11.05M 21.25 33.25L 21.25 45.245499M 34.75 31L 34.75 45.25"></path></g></g></g><g id="g-root-ic_grap_959k792a222x-stroke" data-item-order="0" transform="translate(519, 455)"><g id="ic_grap_959k792a222x-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2"><g><path d="M 13.75 10.75L 13.75 42.25L 45.25 42.25M 22.75 34.756001C 22.75 36.412857 24.093145 37.756001 25.75 37.756001C 27.406855 37.756001 28.75 36.412857 28.75 34.756001C 28.75 33.099144 27.406855 31.756001 25.75 31.756001C 24.093145 31.756001 22.75 33.099144 22.75 34.756001ZM 33.25 16.756001C 33.25 18.412855 34.593143 19.756001 36.25 19.756001C 37.906857 19.756001 39.25 18.412855 39.25 16.756001C 39.25 15.099146 37.906857 13.756 36.25 13.756C 34.593143 13.756 33.25 15.099146 33.25 16.756001ZM 38.532997 14.812C 40.401657 13.195694 42.779606 12.288696 45.25 12.25M 27.9205 32.688999C 29.213829 30.769894 30.249203 28.689058 31.000002 26.500002C 31.863426 23.929758 33.049927 21.479637 34.531002 19.2085M 13.75 42.25C 13.75 42.25 18.346001 41.917 23.938 37.150002M 10.75 13.75L 13.75 10.75L 16.75 13.75M 42.25 39.25L 45.25 42.25L 42.25 45.25"></path></g></g></g><g id="g-root-tx_integral_1d0it1h2a3g1z-stroke" data-item-order="0" transform="translate(122, 470)"></g><g id="g-root-tx_derivati_1luae112a3g91-stroke" data-item-order="0" transform="translate(590, 470)"></g><g id="g-root-tx_measures_me89dx2a3g20-stroke" data-item-order="0" transform="translate(98, 500)"></g><g id="g-root-tx_measures_hwjc052a3hty-stroke" data-item-order="0" transform="translate(590, 500)"></g></g></g></svg>`


        },
        symbols:{
          title:'Calculus Symbols Reference',
          description:`Our [Calculus Symbols page](!/math-symbols/calculus) offers a detailed catalog of notation used in differential and integral calculus. This comprehensive resource organizes symbols by their mathematical functions to help students and professionals navigate the language of calculus.
The reference covers essential notation across categories including differentiation (f'(x), df/dx, ∇f), integration (∫, ∬, ∮), limits (limₓ→c), and infinite series (∑). Advanced topics include vector calculus notation for divergence and curl, differential operators like the Laplacian (∇²f), and specialized notation for curvature and differential equations.
Each symbol is presented with its proper LaTeX representation and a concise explanation of its meaning, making this an essential resource for anyone working with calculus concepts in academic or professional settings.`,
          link:'/math-symbols/calculus'
        }
  }

  const introContent = {
    id: "intro",
    title: "Introduction to Calculus",
    content: `Calculus is a section of mathematics dealing with continuous change. It encompasses several fundamental concepts: **limits**, **derivatives**, **integrals**, and **infinite series**. These ideas work together to create a powerful mathematical framework.

The core components of calculus include:
 **Limits** - examining the behavior of functions as they approach specific values
 **Differential calculus** - studying rates of change through derivatives
 **Integral calculus** - analyzing accumulation and total change
 **Infinite series** - representing functions as sums of infinite terms

Differential calculus allows us to find instantaneous rates of change and optimize functions, while integral calculus provides tools for calculating areas, volumes, and accumulated quantities. The connection between these two branches, established by the **Fundamental Theorem of Calculus**, creates a unified system for analyzing continuous change.

Applications of calculus extend throughout science, engineering, and economics. In physics, it models motion and energy; in engineering, it optimizes designs and processes; in economics, it analyzes rates of growth and market behavior. The subject's precise mathematical framework makes it essential for understanding and describing natural phenomena.`
  }

  const keyWords = [
    'calculus',
    'learn calculus',
    'calculus formulas',
    'differential calculus',
    'integral calculus',
    'calculus fundamentals',
    'limits and derivatives',
    'calculus concepts'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/calculus'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      calculusFormulasList,
      calculusTermsList
    }
  }
}

export default function CalculusPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  calculusFormulasList,
  calculusTermsList
}) {
  // Reconstruct sections with React components
  const calculusSections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/calculus/formulas',
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
            formulaData={calculusFormulasList}
            moreFormulasLink='/calculus/formulas'
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
      link:'/calculus/definitions',
      content: [
        { 
          content: <VerticalScrollingFormulaWidget 
            key="definitions-widget"
            formulaData={calculusTermsList}
            moreFormulasLink='/calculus/definitions'
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
      id:'three_concepts',
      title:sectionContent.three_concepts.title,
      content:[
        sectionContent.three_concepts.description,
       
        <div key={'svg1'} dangerouslySetInnerHTML={{ __html:  sectionContent.three_concepts.svg }} />
      ]

    },
    {
      id: 'symbols',
      title: sectionContent.symbols.title,
      link:sectionContent.symbols.link,
      content: [
        {
          content:sectionContent.symbols.description,
          layout: 'horizontal',
          position: 'center', // or 'left' if you prefer
          width: 8 // full width
        }
       
      ]
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calculus - Learn Mathematics",
    "description": "Comprehensive guide to calculus including fundamental concepts of limits, derivatives, integrals, and infinite series. Learn calculus with clear explanations and examples.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Calculus",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Calculus - Formulas & Core Concepts | Learn Math Class"
  const pageDescription = "Master calculus with our comprehensive guide covering limits, derivatives, integrals, and infinite series. Perfect for students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* <GenericNavbar/> */}
     
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        // topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Calculus
        </h1>
        <SectionTableOfContents sections={calculusSections}
         showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
         secondaryNavTitle="More in this Section" />
        <br/>
        <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        />
        <Sections sections={calculusSections}/>
        <br/>
        <br/>
        <br/>
         {/* <ScrollUpButton/> */} 
      </main>
    </>
  );
}