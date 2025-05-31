import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'



export async function getStaticProps(){


    const sectionsContent={

        definition:{
          title:`Definitions and Notations`,
          content:`In mathematics **power** is defined as a result of **exponentiation**, which is the operation of repeated multiplication by the same number. This number is called the **base**, and the number of times it is multiplied by itself is called the **exponent**.`,
          before:``,
          after:`**Exponentiation is typically written using superscript notation**:

\t\t\t\t\t\t\t\t$𝑎^𝑛$

**This is read as**:
"𝑎 raised to the power of 𝑛",
or "𝑎 to the 𝑛-th power".
**Where**:
𝑎 is the base — the number being multiplied,
𝑛 is the exponent — how many times the base is multiplied by itself,
$𝑎^𝑛$ is the power — the result of the operation.

This expression means multiplying the base  a  by itself  n  times:

\t\t\t\t\t\t\t\t$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ times}}$


`,
          svg:`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 620">
  <!-- Clean white background -->
  <rect x="0" y="0" width="1280" height="320" fill="#FFFFFF"/>
  
  <!-- Mathematical equation - keeping exact positioning -->
  <g transform="translate(375, 50)">
    <!-- n^m = -->
    <text font-family="Cambria Math, serif" font-weight="400" font-size="43">
      <tspan x="0" y="73">𝑛</tspan>
    </text>
    <text font-family="Cambria Math, serif" font-weight="400" font-size="31">
      <tspan x="25" y="57">𝑚</tspan>
    </text>
    <text font-family="Cambria Math, serif" font-weight="400" font-size="43">
      <tspan x="57" y="73">=</tspan>
    </text>
    
    <!-- n × n × ... × n -->
    <text font-family="Cambria Math, serif" font-weight="400" font-size="43">
      <tspan x="89" y="73">𝑛</tspan>
      <tspan x="124" y="73">×</tspan>
      <tspan x="164" y="73">𝑛</tspan>
      <tspan x="199" y="73">×</tspan>
      <tspan x="229" y="73">.</tspan>
      <tspan x="245" y="73">.</tspan>
      <tspan x="261" y="73">.</tspan>
      <tspan x="270" y="73">×</tspan>
      <tspan x="310" y="73">𝑛</tspan>
      <tspan x="345" y="73">×</tspan>
      <tspan x="385" y="73">𝑛</tspan>
      <tspan x="420" y="73">×</tspan>
      <tspan x="460" y="73">𝑛</tspan>
    </text>
  </g>

  <!-- Curly brace - enhanced with smoother curve -->
<path d="M870.5 140.483C870.5 145.459 869.828 149.492 868.999 149.492L623.501 149.492C622.672 149.492 622 153.525 622 158.5 622 153.525 621.328 149.492 620.499 149.492L455.001 149.492C454.172 149.492 453.5 145.458 453.5 140.483" 
        stroke="#2D5CA0" 
        stroke-width="2" 
        stroke-linecap="round"
        fill="none"/>

  <!-- Boxes with refined styling -->
  <!-- 'm times' box -->
  <rect x="511.5" y="195.5" width="212" height="109" 
        stroke="#2D5CA0" 
        stroke-width="1.5" 
        fill="#FFFFFF"
        rx="4"/>
  <text font-family="Cambria Math, serif" font-style="italic" font-weight="400" font-size="43" 
        x="552.55" y="263" 
        fill="#2D5CA0">m</text>
  <text font-family="Cambria Math, serif" font-style="italic" font-weight="400" font-size="37" 
        x="597.716" y="263" 
        fill="#2D5CA0">times</text>

  <!-- Connecting arrows with enhanced styling -->
  <path d="M263 277.536L373.578 140.204" 
        stroke="#2D5CA0" 
        stroke-width="2"
        marker-end="url(#arrowhead)"
        fill="none"/>
  
  <path d="M285.272 62.0376L390.637 91.7878" 
        stroke="#2D5CA0" 
        stroke-width="2"
        marker-end="url(#arrowhead)"
        fill="none"/>

  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#2D5CA0"/>
    </marker>
  </defs>

  <!-- Base and power boxes -->
  <rect x="176" y="287" width="114" height="89" 
        stroke="#2D5CA0" 
        stroke-width="2" 
        fill="#FFFFFF"
        rx="4"/>
  <text font-family="Cambria Math, serif" font-weight="400" font-size="27" 
        x="205.116" y="341" 
        fill="#2D5CA0">base</text>

  <rect x="157" y="38" width="133" height="90" 
        stroke="#2D5CA0" 
        stroke-width="2" 
        fill="#FFFFFF"
        rx="4"/>
  <text font-family="Cambria Math, serif" font-weight="400" font-size="32" 
        x="180.792" y="94" 
        fill="#2D5CA0">power</text>
</svg>`,
      
      
        },
        rules:{
          title:`Exponent Rules`,
          content:`Power rules are at the core of simplifying and understanding exponential expressions.  
They show how to combine, manipulate, and interpret powers in a consistent way across a wide range of problems.  
Things begin with the [Basic Power Rules](!/algebra/powers/exponent-rules#basic), which handle how exponents behave when you multiply, divide, or nest them.  
From there, the [Special Exponent Rules](!/algebra/powers/exponent-rules#special) introduce key cases like zero, negative, and fractional exponents — forms that often trip up learners but follow clear patterns.  
As expressions grow more complex, the [Advanced Power Rules](!/algebra/powers/exponent-rules#advanced) help manage combinations and edge cases, including signs and structure.  
The [Exponential Function Rules](!/algebra/powers/exponent-rules#function) cover variable exponents and forms common in growth, decay, and modeling.  
Powers and roots are deeply connected, which is why the [Root and Radical Rules](!/algebra/powers/exponent-rules#roots) translate between radical notation and exponent form.  
And for bridging exponentials with logarithms, the [Logarithmic Power Relations](!/algebra/powers/exponent-rules#relations) show how powers convert, simplify, and solve through logarithmic tools.
`,
          before:``,
          after:``,
          svg:`<svg width="924" height="576" viewBox="0 0 924 576" style="fill:none;stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5" xmlns="http://www.w3.org/2000/svg"><style data-font-family="Roboto">@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block);</style><g id="items" style="isolation:isolate"><g id="blend" style="mix-blend-mode:normal"><g id="g-root-cp_6_g-6_6htrxoqvcwf-fill" data-item-order="-420472" transform="translate(540 350)"><path d="M47 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_6_g-6_6htrxoqvcwf-fill" stroke="none" fill="#7f64ea"/><path d="M10 10.11 38 10s-4.55 4.81-8.443 12.089C25.663 29.367 24.089 36 24.089 36z" fill="#7f64ea"/></g><g id="g-root-cp_5_g-5_1464b25oqvabt-fill" data-item-order="-420466" transform="translate(560 248)"><path d="M58 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_5_g-5_1464b25oqvabt-fill" stroke="none" fill="#1eabda"/><path d="M10 51.892 37.845 65s-1.94-5.73-1.897-13.008C35.992 44.714 38 39 38 39z" fill="#1eabda"/></g><g id="g-root-cp_4_g-4_1utnsvxoqvchv-fill" data-item-order="-420460" transform="translate(540 146)"><path d="M47 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_4_g-4_1utnsvxoqvchv-fill" stroke="none" fill="#92bd39"/><path d="M10 93.89 38 94s-4.55-4.81-8.443-12.089C25.663 74.633 24.089 68 24.089 68z" fill="#92bd39"/></g><g id="g-root-cp_3_g-3_147d98doqvchx-fill" data-item-order="-420454" transform="translate(245 146)"><path d="M10 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_3_g-3_147d98doqvchx-fill" stroke="none" fill="#de8431"/><path d="M131 93.89 103 94s4.55-4.81 8.443-12.089C115.338 74.633 116.911 68 116.911 68z" fill="#de8431"/></g><g id="g-root-cp_2_g-2_i0w7p9oqvbpr-fill" data-item-order="-420448" transform="translate(224 248)"><path d="M10 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_2_g-2_i0w7p9oqvbpr-fill" stroke="none" fill="#e0cb15"/><path d="M142 51.892 114.155 65s1.94-5.73 1.897-13.008C116.008 44.714 114 39 114 39z" fill="#e0cb15"/></g><g id="g-root-cp_1_g-1_1lpwmiloqwqvd-fill" data-item-order="-420442" transform="translate(245 350)"><path d="M10 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_1_g-1_1lpwmiloqwqvd-fill" stroke="none" fill="#3cc583"/><path d="M131 10.11 103 10s4.55 4.81 8.443 12.089C115.338 29.367 116.911 36 116.911 36z" fill="#3cc583"/></g><g id="g-root-cp_end_g-end_13z933xoqwq2r-fill" data-item-order="-420436" transform="translate(374 205)"><path d="M10 94c0 46.392 37.608 84 84 84s84-37.608 84-84-37.608-84-84-84-84 37.608-84 84" id="cp_end_g-end_13z933xoqwq2r-fill" stroke="none" fill="#4f92ff"/></g><g id="g-root-tx_3_1lwrugtoqwpah-fill" data-item-order="0" transform="translate(275 170)"><text style="font:700 30px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="30" font-family="Roboto, sans-serif" id="tx_3_1lwrugtoqwpah-fill" stroke="none" fill="#fff"><tspan x="13.39" y="46" dominant-baseline="ideographic">3</tspan></text></g><g id="g-root-tx_4_mcyvb1oqwruo-fill" data-item-order="0" transform="translate(607 170)"><text style="font:700 30px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="30" font-family="Roboto, sans-serif" id="tx_4_mcyvb1oqwruo-fill" stroke="none" fill="#fff"><tspan x="13.39" y="46" dominant-baseline="ideographic">4</tspan></text></g><g id="g-root-tx_rulesfor_1uoo071oqy4n5-fill" data-item-order="0" transform="translate(698 146)"><text style="font:15px Roboto,sans-serif;white-space:pre" font-size="15" font-family="Roboto, sans-serif" id="tx_rulesfor_1uoo071oqy4n5-fill" stroke="none" fill="#424736"><tspan x="12" y="31" dominant-baseline="ideographic">Rules for </tspan><tspan x="12" y="49" dominant-baseline="ideographic">exponential </tspan><tspan x="12" y="67" dominant-baseline="ideographic">functions</tspan></text></g><g id="g-root-tx_speciale_mcyvb1oqy58s-fill" data-item-order="0" transform="translate(26 242)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_speciale_mcyvb1oqy58s-fill" stroke="none" fill="#e0cb15"><tspan x="85.92" y="34" dominant-baseline="ideographic">Special </tspan><tspan x="12.69" y="58" dominant-baseline="ideographic">Exponent Rules</tspan></text></g><g id="g-root-tx_complexr_1qapxbxoqy3nv-fill" data-item-order="0" transform="translate(74 146)"><text style="font:15px Roboto,sans-serif;white-space:pre" font-size="15" font-family="Roboto, sans-serif" id="tx_complexr_1qapxbxoqy3nv-fill" stroke="none" fill="#4c4034"><tspan x="22.06" y="31" dominant-baseline="ideographic">Complex rules for </tspan><tspan x="30.5" y="49" dominant-baseline="ideographic">advanced power </tspan><tspan x="52.85" y="67" dominant-baseline="ideographic">manipulation</tspan></text></g><g id="g-root-tx_understa_hu0zr1oqwrgl-fill" data-item-order="0" transform="translate(386 254)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_understa_hu0zr1oqwrgl-fill" stroke="none" fill="#fff"><tspan x="14.02" y="34" dominant-baseline="ideographic">Understanding </tspan><tspan x="27.36" y="58" dominant-baseline="ideographic">Exponential </tspan><tspan x="25.37" y="82" dominant-baseline="ideographic">Expressions</tspan></text></g><g id="g-root-tx_exponent_qpnzzxoqy420-fill" data-item-order="0" transform="translate(698 86)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_exponent_qpnzzxoqy420-fill" stroke="none" fill="#92bd39"><tspan x="12" y="34" dominant-baseline="ideographic">Exponential </tspan><tspan x="12" y="58" dominant-baseline="ideographic">Function Rules</tspan></text></g><g id="g-root-tx_rootandr_qnskqloqy51q-fill" data-item-order="0" transform="translate(734 242)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_rootandr_qnskqloqy51q-fill" stroke="none" fill="#1eabda"><tspan x="12" y="34" dominant-baseline="ideographic">Root and </tspan><tspan x="12" y="58" dominant-baseline="ideographic">Radical Rules</tspan></text></g><g id="g-root-tx_2_qunsotoqwq2q-fill" data-item-order="0" transform="translate(254 272)"><text style="font:700 30px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="30" font-family="Roboto, sans-serif" id="tx_2_qunsotoqwq2q-fill" stroke="none" fill="#fff"><tspan x="13.39" y="46" dominant-baseline="ideographic">2</tspan></text></g><g id="g-root-tx_5_1luwf7hoqwqa7-fill" data-item-order="0" transform="translate(638 272)"><text style="font:700 30px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="30" font-family="Roboto, sans-serif" id="tx_5_1luwf7hoqwqa7-fill" stroke="none" fill="#fff"><tspan x="13.39" y="46" dominant-baseline="ideographic">5</tspan></text></g><g id="g-root-tx_rulesfor_1ursdmloqy51p-fill" data-item-order="0" transform="translate(26 302)"><text style="font:15px Roboto,sans-serif;white-space:pre" font-size="15" font-family="Roboto, sans-serif" id="tx_rulesfor_1ursdmloqy51p-fill" stroke="none" fill="#46432d"><tspan x="37.06" y="28" dominant-baseline="ideographic">Rules for specific </tspan><tspan x="21.46" y="46" dominant-baseline="ideographic">exponent scenarios</tspan></text></g><g id="g-root-tx_rulesfor_1umskxpoqy5mv-fill" data-item-order="0" transform="translate(734 302)"><text style="font:15px Roboto,sans-serif;white-space:pre" font-size="15" font-family="Roboto, sans-serif" id="tx_rulesfor_1umskxpoqy5mv-fill" stroke="none" fill="#32444a"><tspan x="12" y="28" dominant-baseline="ideographic">Rules for simplifying </tspan><tspan x="12" y="46" dominant-baseline="ideographic">roots and radicals</tspan></text></g><g id="g-root-tx_advanced_qqwy65oqy682-fill" data-item-order="0" transform="translate(86 86)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_advanced_qqwy65oqy682-fill" stroke="none" fill="#de8431"><tspan x="38.93" y="34" dominant-baseline="ideographic">Advanced </tspan><tspan x="15.78" y="58" dominant-baseline="ideographic">Power Rules</tspan></text></g><g id="g-root-tx_relation_1q5q4n1oqy491-fill" data-item-order="0" transform="translate(698 458)"><text style="font:15px Roboto,sans-serif;white-space:pre" font-size="15" font-family="Roboto, sans-serif" id="tx_relation_1q5q4n1oqy491-fill" stroke="none" fill="#443e5c"><tspan x="12" y="31" dominant-baseline="ideographic">Relations between </tspan><tspan x="12" y="49" dominant-baseline="ideographic">powers and </tspan><tspan x="12" y="67" dominant-baseline="ideographic">logarithms</tspan></text></g><g id="g-root-tx_basicpow_zpobuloqy5ty-fill" data-item-order="0" transform="translate(86 374)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_basicpow_zpobuloqy5ty-fill" stroke="none" fill="#3cc583"><tspan x="16.71" y="34" dominant-baseline="ideographic">Basic Power </tspan><tspan x="77.61" y="58" dominant-baseline="ideographic">Rules</tspan></text></g><g id="g-root-tx_6_142dgjhoqwqha-fill" data-item-order="0" transform="translate(607 374)"><text style="font:700 30px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="30" font-family="Roboto, sans-serif" id="tx_6_142dgjhoqwqha-fill" stroke="none" fill="#fff"><tspan x="13.39" y="46" dominant-baseline="ideographic">6</tspan></text></g><g id="g-root-tx_logarith_vbq8zhoqwrgk-fill" data-item-order="0" transform="translate(698 374)"><text style="font:700 20px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="20" font-family="Roboto, sans-serif" id="tx_logarith_vbq8zhoqwrgk-fill" stroke="none" fill="#7f64ea"><tspan x="12" y="34" dominant-baseline="ideographic">Logarithmic </tspan><tspan x="12" y="58" dominant-baseline="ideographic">Power </tspan><tspan x="12" y="82" dominant-baseline="ideographic">Relations</tspan></text></g><g id="g-root-tx_fundamen_93ds71oqy5tz-fill" data-item-order="0" transform="translate(74 434)"><text style="font:15px Roboto,sans-serif;white-space:pre" font-size="15" font-family="Roboto, sans-serif" id="tx_fundamen_93ds71oqy5tz-fill" stroke="none" fill="#374840"><tspan x="16.17" y="31" dominant-baseline="ideographic">Fundamental rules </tspan><tspan x="44.49" y="49" dominant-baseline="ideographic">for simplifying </tspan><tspan x="90.97" y="67" dominant-baseline="ideographic">powers</tspan></text></g><g id="g-root-tx_understa_1q7ljwdoqwp3g-fill" data-item-order="0" transform="translate(272 38)"><g id="tx_understa_1q7ljwdoqwp3g-fill" stroke="none" fill="#484848"/></g><g id="g-root-tx_1_1qduarhoqwqob-fill" data-item-order="0" transform="translate(275 372)"><text style="font:700 30px Roboto,sans-serif;white-space:pre" font-weight="bold" font-size="30" font-family="Roboto, sans-serif" id="tx_1_1qduarhoqwqob-fill" stroke="none" fill="#fff"><tspan x="13.39" y="46" dominant-baseline="ideographic">1</tspan></text></g><g id="g-root-cp_6_g-6_6htrxoqvcwf-stroke" data-item-order="-420472" transform="translate(540 350)"><path d="M47 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_6_g-6_6htrxoqvcwf-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/><path d="M10 10.11 38 10s-4.55 4.81-8.443 12.089C25.663 29.367 24.089 36 24.089 36z" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-cp_5_g-5_1464b25oqvabt-stroke" data-item-order="-420466" transform="translate(560 248)"><path d="M58 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_5_g-5_1464b25oqvabt-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/><path d="M10 51.892 37.845 65s-1.94-5.73-1.897-13.008C35.992 44.714 38 39 38 39z" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-cp_4_g-4_1utnsvxoqvchv-stroke" data-item-order="-420460" transform="translate(540 146)"><path d="M47 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_4_g-4_1utnsvxoqvchv-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/><path d="M10 93.89 38 94s-4.55-4.81-8.443-12.089C25.663 74.633 24.089 68 24.089 68z" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-cp_3_g-3_147d98doqvchx-stroke" data-item-order="-420454" transform="translate(245 146)"><path d="M10 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_3_g-3_147d98doqvchx-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/><path d="M131 93.89 103 94s4.55-4.81 8.443-12.089C115.338 74.633 116.911 68 116.911 68z" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-cp_2_g-2_i0w7p9oqvbpr-stroke" data-item-order="-420448" transform="translate(224 248)"><path d="M10 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_2_g-2_i0w7p9oqvbpr-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/><path d="M142 51.892 114.155 65s1.94-5.73 1.897-13.008C116.008 44.714 114 39 114 39z" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-cp_1_g-1_1lpwmiloqwqvd-stroke" data-item-order="-420442" transform="translate(245 350)"><path d="M10 52c0 23.196 18.804 42 42 42s42-18.804 42-42-18.804-42-42-42-42 18.804-42 42" id="cp_1_g-1_1lpwmiloqwqvd-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/><path d="M131 10.11 103 10s4.55 4.81 8.443 12.089C115.338 29.367 116.911 36 116.911 36z" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-cp_end_g-end_13z933xoqwq2r-stroke" data-item-order="-420436" transform="translate(374 205)"><path d="M10 94c0 46.392 37.608 84 84 84s84-37.608 84-84-37.608-84-84-84-84 37.608-84 84" id="cp_end_g-end_13z933xoqwq2r-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#fff" stroke-width="2"/></g><g id="g-root-tx_3_1lwrugtoqwpah-stroke" data-item-order="0" transform="translate(275 170)"/><g id="g-root-tx_4_mcyvb1oqwruo-stroke" data-item-order="0" transform="translate(607 170)"/><g id="g-root-tx_rulesfor_1uoo071oqy4n5-stroke" data-item-order="0" transform="translate(698 146)"/><g id="g-root-tx_speciale_mcyvb1oqy58s-stroke" data-item-order="0" transform="translate(26 242)"/><g id="g-root-tx_complexr_1qapxbxoqy3nv-stroke" data-item-order="0" transform="translate(74 146)"/><g id="g-root-tx_understa_hu0zr1oqwrgl-stroke" data-item-order="0" transform="translate(386 254)"/><g id="g-root-tx_exponent_qpnzzxoqy420-stroke" data-item-order="0" transform="translate(698 86)"/><g id="g-root-tx_rootandr_qnskqloqy51q-stroke" data-item-order="0" transform="translate(734 242)"/><g id="g-root-tx_2_qunsotoqwq2q-stroke" data-item-order="0" transform="translate(254 272)"/><g id="g-root-tx_5_1luwf7hoqwqa7-stroke" data-item-order="0" transform="translate(638 272)"/><g id="g-root-tx_rulesfor_1ursdmloqy51p-stroke" data-item-order="0" transform="translate(26 302)"/><g id="g-root-tx_rulesfor_1umskxpoqy5mv-stroke" data-item-order="0" transform="translate(734 302)"/><g id="g-root-tx_advanced_qqwy65oqy682-stroke" data-item-order="0" transform="translate(86 86)"/><g id="g-root-tx_relation_1q5q4n1oqy491-stroke" data-item-order="0" transform="translate(698 458)"/><g id="g-root-tx_basicpow_zpobuloqy5ty-stroke" data-item-order="0" transform="translate(86 374)"/><g id="g-root-tx_6_142dgjhoqwqha-stroke" data-item-order="0" transform="translate(607 374)"/><g id="g-root-tx_logarith_vbq8zhoqwrgk-stroke" data-item-order="0" transform="translate(698 374)"/><g id="g-root-tx_fundamen_93ds71oqy5tz-stroke" data-item-order="0" transform="translate(74 434)"/><g id="g-root-tx_understa_1q7ljwdoqwp3g-stroke" data-item-order="0" transform="translate(272 38)"/><g id="g-root-tx_1_1qduarhoqwqob-stroke" data-item-order="0" transform="translate(275 372)"/></g></g></svg>`,


          link:'/algebra/powers/exponent-rules',
      
        },
      
        obj3:{
      
          title:``,
          content:``,
          before:``,
          after:``,
      
        },
        obj4:{
          title:``,
          content:``,
          before:``,
          after:``,
      
        },
    
    
        obj5:{
      
          title:``,
          content:``,
          before:``,
          after:``,
      
        }
      
      }


    return {
      props:{

        sectionsContent,
        
      }
    }
  }

export default function PowersPage({sectionsContent}) {


    const powersSections=[
        {
            id:'definition',
            title:sectionsContent.definition.title,
            link:'',
            content:[
                sectionsContent.definition.content,
                sectionsContent.definition.svg,
                sectionsContent.definition.after,
            ],
        },
        {
            id:'rules',
            title:sectionsContent.rules.title,
            link:sectionsContent.rules.link,
            content:[
                sectionsContent.rules.content,
                sectionsContent.rules.svg
            ]
        },
        // {
        //     id:'',
        //     title:'',
        //     link:'',
        //     content:''
        // }
    ]
  return (
    <>
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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px'}}>Powers</h1>
    <br/>
    
    <SectionTableOfContents sections={powersSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
     secondaryNavTitle="Similar Pages"/>
    <br/>
    <br/>
    <IntroSection/>
    <br/>
    <br/>
    <Sections sections={powersSections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>

    
    </>
  )
}
