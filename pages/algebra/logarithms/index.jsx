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
          title:`Definition and Notation`,
          content:``,
          before:`A logarithm tells you what exponent you need to raise a given base to in order to get a certain result.
In simple terms, the logarithm answers the question:

**"To what power must the base be raised to produce a given number?"**`,
          after:`**Notation**:
The logarithm of a number 𝑎 with base 𝑏  is written as $\\log_b(a)$.
This means:
$\\log_b(a)=c$ if and only if $𝑏^𝑐=𝑎$
$b$ is the base
$𝑎$ is the result (also called the argument)
$𝑐$ is the exponent — the value the logarithm gives

`,
          svg:`<svg width="700" height="400" style="margin-left:150px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="700" height="400" fill="#f8f9fa"/>
  
  <!-- Logarithm box (top left) -->
  <rect x="20" y="30" width="100" height="60" rx="5" fill="none" stroke="#e74c3c" stroke-width="2"/>
  <text x="70" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-style="italic" fill="#e74c3c">logarithm</text>
  
  <!-- Base box (bottom left) -->
  <rect x="20" y="280" width="100" height="60" rx="5" fill="none" stroke="#e74c3c" stroke-width="2"/>
  <text x="70" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#e74c3c">b</text>
  
  <!-- Main logarithm equation -->
  <text x="200" y="80" font-family="Arial, sans-serif" font-size="28" font-style="italic" fill="#333">
    log<tspan font-size="20" baseline-shift="sub">b</tspan>(a) = c
  </text>
  
  <!-- Arrow from logarithm to equation -->
  <path d="M 130 50 Q 160 50 180 70" fill="none" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Arrow from base to equation -->
  <path d="M 130 300 Q 160 250 180 90" fill="none" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Main power equation showing the relationship -->
  <text x="280" y="180" font-family="Arial, sans-serif" font-size="24" font-style="italic" fill="#333">a = b × b ×...× b × b × b</text>
  
  <!-- Brace showing c times -->
  <path d="M 320 200 Q 320 220 340 220 Q 510 220 510 220 Q 530 220 530 200" 
        fill="none" stroke="#e74c3c" stroke-width="2"/>
  <path d="M 320 200 L 325 195" stroke="#e74c3c" stroke-width="2"/>
  <path d="M 320 200 L 325 205" stroke="#e74c3c" stroke-width="2"/>
  <path d="M 530 200 L 525 195" stroke="#e74c3c" stroke-width="2"/>
  <path d="M 530 200 L 525 205" stroke="#e74c3c" stroke-width="2"/>
  
  <!-- c times box -->
  <rect x="420" y="240" width="120" height="60" rx="5" fill="none" stroke="#e74c3c" stroke-width="2"/>
  <text x="480" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-style="italic" fill="#e74c3c">c times</text>
  
  <!-- Arrow to c times box -->
  <path d="M 425 220 L 425 240" fill="none" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Alternative notation -->
  <text x="200" y="140" font-family="Arial, sans-serif" font-size="20" fill="#333">or: b<tspan font-size="16" baseline-shift="super">c</tspan> = a</text>
  
  <!-- Labels -->
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="14" fill="#666">c is the power/exponent</text>
  <text x="70" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">base</text>
  
  <!-- Question explanation -->
  <text x="200" y="320" font-family="Arial, sans-serif" font-size="16" fill="#333">The logarithm asks: "To what power must we raise b to get a?"</text>
  <text x="200" y="340" font-family="Arial, sans-serif" font-size="16" fill="#333">Answer: c times</text>
  
  <!-- Arrow marker definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
  </defs>
</svg>`,
      
      
        },
        rules:{
          title:`Logarithm Rules`,
          content:`Logarithm rules are the backbone of working with exponential relationships — they tell us how to simplify expressions, solve equations, and understand the behavior of logarithmic functions.
          It all starts with the [Definition and Basic Rules](!/algebra/logarithms/logarithm-rules#definitions), which lay out what a logarithm means and how it connects to powers.
          Then come the [Fundamental Properties](!/algebra/logarithms/logarithm-rules#properties), which show how logs behave with multiplication, division, and exponents — the everyday operations of algebra. 
          Sometimes, you’ll need to change how a logarithm is written, and that’s where the [Base Conversion Rules](!/algebra/logarithms/logarithm-rules#conversion) step in. 
          When working with natural or common logarithms, things get more specific — and that’s covered in the [Natural Logarithm Properties](!/algebra/logarithms/logarithm-rules#natural) and [Common Logarithm Properties](!/algebra/logarithms/logarithm-rules#common).
          As problems get trickier, the [Advanced Logarithmic Rules](!/algebra/logarithms/logarithm-rules#advanced) handle special cases and identities. And throughout it all, the [Domain and Range Rules](!/algebra/logarithms/logarithm-rules#domain) remind us where logarithms actually make sense. 
          Together, they form a complete picture of how logarithms work.
`,
          before:``,
          after:``,
          link:`/algebra/logarithms/logarithm-rules`,
          svg:`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="788" height="633" viewBox="0 98 1008 875" style="margin-left:100px; fill:none;stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style class="text-font-style fontImports" margin:auto  data-font-family="Roboto">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=block');</style>
<g id="items" style="isolation: isolate">
<g id="blend" style="mix-blend-mode: normal">
<g id="g-root-cp_1_text-1_18lb5owm960ao-fill" data-item-order="-840950" transform="translate(14, 98)">
<g id="cp_1_text-1_18lb5owm960ao-fill" stroke="none" fill="#1eabda">
<g><path d="M 10 10L 490 10L 490 172L 10 172L 10 10ZM 490 220L 490 172L 10 172.0002L 10 220L 490 220ZM 10 262L 118 262L 118 251L 112 251L 130 233L 148 251L 142 251L 142 262L 358 262L 358 273L 352 273L 370 291L 388 273L 382 273L 382 262L 490 262L 490 220L 10 220L 10 262Z"></path></g>
</g>
</g>
<g id="g-root-cp_3_text-3_4o6kr4m95ypu-fill" data-item-order="-840922" transform="translate(494, 98)">
<g id="cp_3_text-3_4o6kr4m95ypu-fill" stroke="none" fill="#92bd39">
<g><path d="M 10 10L 490 10L 490 172L 10 172L 10 10ZM 10 172L 490 172L 490 220L 10 220L 10 172ZM 10 262L 118 262L 118 251L 112 251L 130 233L 148 251L 142 251L 142 262L 358 262L 358 273L 352 273L 370 291L 388 273L 382 273L 382 262L 490 262L 490 220L 10 220L 10 262Z"></path></g>
</g>
</g>
<g id="g-root-cp_7_text-7_1lpwg40m97dos-fill" data-item-order="-840894" transform="translate(13.999984741210938, 321.0000305175781)">
<g id="cp_7_text-7_1lpwg40m97dos-fill" stroke="none" fill="#de58a9">
<g><path d="M 250 351.000031L 250 189.000031L 10 189.000031L 10 351.000031L 118 351.000031L 118 340.000031L 112 340.000031L 130 322.000031L 148 340.000031L 142 340.000031L 142 351.000031L 250 351.000031ZM 10.000029 189.000061L 250.00003 189.000061L 250.00003 81.000244L 10.000029 81.000244L 10.000029 189.000061ZM 142.000049 28.000015L 142.000049 39.000015L 250.000049 39.000015L 250.000049 81.000015L 10.000049 81.000015L 10.000049 39.000015L 118.000049 39.000015L 118.000049 28.000015L 112.000049 28.000015L 130.000049 10.000015L 148.000049 28.000015L 142.000049 28.000015Z"></path></g>
</g>
</g>
<g id="g-root-cp_2_text-2_4hbcswm97dou-fill" data-item-order="-840868" transform="translate(254, 321.0000305175781)">
<g id="cp_2_text-2_4hbcswm97dou-fill" stroke="none" fill="#3cc583">
<g><path d="M 490.000001 351.000031L 10.000001 351.000031L 10.000001 189.000031L 490.000001 189.000031L 490.000001 351.000031ZM 490 188.999985L 9.999996 188.999985L 9.999996 80.99995L 490 80.99995L 490 188.999985ZM 10 39L 118 39L 118 50L 112 50L 130 68L 148 50L 142 50L 142 39L 358 39L 358 28L 352 28L 370 10L 388 28L 382 28L 382 39L 490 39L 490 81L 10 81L 10 39Z"></path></g>
</g>
</g>
<g id="g-root-cp_4_text-4_v4uumom97fuw-fill" data-item-order="-840842" transform="translate(734, 350.0000305175781)">
<g id="cp_4_text-4_v4uumom97fuw-fill" stroke="none" fill="#e0cb15">
<g><path d="M 10 159.999985L 250 159.999985L 250 51.99995L 10 51.99995L 10 159.999985ZM 142 10L 250 10L 250 52L 10 52L 10 10L 118 10L 118 21L 112 21L 130 39L 148 21L 142 21L 142 10ZM 118 322.000031L 10 322.000031L 10 160.000031L 250 160.000031L 250 322.000031L 142 322.000031L 142 333.000031L 148 333.000031L 130 351.000031L 112 333.000031L 118 333.000031L 118 322.000031Z"></path></g>
</g>
</g>
<g id="g-root-cp_6_text-6_1q8ubo0m97e2y-fill" data-item-order="-840814" transform="translate(13.999984741210938, 633)">
<g id="cp_6_text-6_1q8ubo0m97e2y-fill" stroke="none" fill="#e55753">
<g><path d="M 490 291L 10 291L 10 129L 490 129L 490 147L 479 147L 479 141L 461 159L 479 177L 479 171L 490 171L 490 291ZM 10.000029 129.000007L 490.000029 129.000007L 490.000029 81.000107L 10.000029 81.000107L 10.000029 129.000007ZM 142.000049 28.000015L 142.000049 39.000015L 490.000049 39.000015L 490.000049 81.000015L 10.000049 81.000015L 10.000049 39.000015L 118.000049 39.000015L 118.000049 28.000015L 112.000049 28.000015L 130.000049 10.000015L 148.000049 28.000015L 142.000049 28.000015Z"></path></g>
</g>
</g>
<g id="g-root-cp_5_text-5_18i6s9cm97dac-fill" data-item-order="-840788" transform="translate(465, 662)">
<g id="cp_5_text-5_18i6s9cm97dac-fill" stroke="none" fill="#de8431">
<g><path d="M 519 261.999985L 39 261.999985L 39 141.999985L 28 141.999985L 28 147.999985L 10 129.999985L 28 111.999985L 28 117.999985L 39 117.999985L 39 99.999985L 519 99.999985L 519 261.999985ZM 39 99.999977L 519 99.999977L 519 51.999977L 39 51.999977L 39 99.999977ZM 410.9999 10L 518.9999 10L 518.9999 52L 39 52L 39 10L 386.9999 10L 386.9999 21L 380.9999 21L 398.9999 39L 416.9999 21L 410.9999 21L 410.9999 10Z"></path></g>
</g>
</g>
<g id="g-root-tx_establis_1utnmhcm97dhd-fill" data-item-order="0" transform="translate(50, 248.00003051757812)">
<g id="tx_establis_1utnmhcm97dhd-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Establish the basic definition of logarithms.</tspan></text></g>
</g>
</g>
<g id="g-root-tx_discover_1umsej4m98sgc-fill" data-item-order="0" transform="translate(530, 248.00003051757812)">
<g id="tx_discover_1umsej4m98sgc-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Discover properties such as power and change of base.</tspan></text></g>
</g>
</g>
<g id="g-root-tx_explorep_m7yw7km98snf-fill" data-item-order="0" transform="translate(530, 212.00003051757812)">
<g id="tx_explorep_m7yw7km98snf-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Explore Properties</tspan></text></g>
</g>
</g>
<g id="g-root-tx_definelo_1hgbouom97g20-fill" data-item-order="0" transform="translate(50, 212.00003051757812)">
<g id="tx_definelo_1hgbouom97g20-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Define Logarithms</tspan></text></g>
</g>
</g>
<g id="g-root-tx_3_dl2j68m97dhe-fill" data-item-order="0" transform="translate(530, 176.00003051757812)">
<g id="tx_3_dl2j68m97dhe-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">3</tspan></text></g>
</g>
</g>
<g id="g-root-tx_7_1lt0tjkm98s99-fill" data-item-order="0" transform="translate(50, 440.0000305175781)">
<g id="tx_7_1lt0tjkm98s99-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">7</tspan></text></g>
</g>
</g>
<g id="g-root-tx_4_94mjyom98utf-fill" data-item-order="0" transform="translate(770, 428.0000305175781)">
<g id="tx_4_94mjyom98utf-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">4</tspan></text></g>
</g>
</g>
<g id="g-root-tx_2_1lw56z4m98tfk-fill" data-item-order="0" transform="translate(290, 452.0000305175781)">
<g id="tx_2_1lw56z4m98tfk-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">2</tspan></text></g>
</g>
</g>
<g id="g-root-tx_consider_hv9riom98tu6-fill" data-item-order="0" transform="translate(50, 476.0000305175781)">
<g id="tx_consider_hv9riom98tu6-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Consider Domain </tspan><tspan x="12" y="58" dominant-baseline="ideographic">and Range</tspan></text></g>
</g>
</g>
<g id="g-root-tx_applybas_hs5e34m9a6to-fill" data-item-order="0" transform="translate(770, 464.0000305175781)">
<g id="tx_applybas_hs5e34m9a6to-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Apply Base </tspan><tspan x="12" y="58" dominant-baseline="ideographic">Conversion</tspan></text></g>
</g>
</g>
<g id="g-root-tx_learnbas_4nk3o0m98tfl-fill" data-item-order="0" transform="translate(290, 488.0000305175781)">
<g id="tx_learnbas_4nk3o0m98tfl-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Learn Basic Rules</tspan></text></g>
</g>
</g>
<g id="g-root-tx_focusonn_144v6hcm9a96r-fill" data-item-order="0" transform="translate(530, 812)">
<g id="tx_focusonn_144v6hcm9a96r-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Focus on natural and common logarithms.</tspan></text></g>
</g>
</g>
<g id="g-root-tx_understa_146qlqom98u16-fill" data-item-order="0" transform="translate(290, 524)">
<g id="tx_understa_146qlqom98u16-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Understand fundamental rules like product and quotient </tspan><tspan x="12" y="46" dominant-baseline="ideographic">rules.</tspan></text></g>
</g>
</g>
<g id="g-root-tx_userules_1cvie1cm9a87h-fill" data-item-order="0" transform="translate(770, 524)">
<g id="tx_userules_1cvie1cm9a87h-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Use rules to convert </tspan><tspan x="12" y="49" dominant-baseline="ideographic">between different </tspan><tspan x="12" y="67" dominant-baseline="ideographic">bases.</tspan></text></g>
</g>
</g>
<g id="g-root-tx_1_mcyowgm97eo7-fill" data-item-order="0" transform="translate(50, 176.00003051757812)">
<g id="tx_1_mcyowgm97eo7-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">1</tspan></text></g>
</g>
</g>
<g id="g-root-tx_6_1uo1cpcm9a80e-fill" data-item-order="0" transform="translate(50, 740)">
<g id="tx_6_1uo1cpcm9a80e-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">6</tspan></text></g>
</g>
</g>
<g id="g-root-tx_5_1cymrgwm9a9dt-fill" data-item-order="0" transform="translate(530, 740)">
<g id="tx_5_1cymrgwm9a9dt-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="16.26" y="34" dominant-baseline="ideographic">5</tspan></text></g>
</g>
</g>
<g id="g-root-tx_masterad_zlxaxcm9a8sn-fill" data-item-order="0" transform="translate(50, 776)">
<g id="tx_masterad_zlxaxcm9a8sn-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Master Advanced Rules</tspan></text></g>
</g>
</g>
<g id="g-root-tx_studyspe_5v6a8m9a8lm-fill" data-item-order="0" transform="translate(530, 776)">
<g id="tx_studyspe_5v6a8m9a8lm-fill" stroke="none" fill="#ffffff">
<g><text style="font: bold 20px Roboto, sans-serif; white-space: pre;" font-weight="bold" font-size="20px" font-family="Roboto, sans-serif"><tspan x="12" y="34" dominant-baseline="ideographic">Study Specific Logarithms</tspan></text></g>
</g>
</g>
<g id="g-root-tx_learncom_hv9riom9a800-fill" data-item-order="0" transform="translate(50, 812)">
<g id="tx_learncom_hv9riom9a800-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="31" dominant-baseline="ideographic">Learn complex rules for advanced applications.</tspan></text></g>
</g>
</g>
<g id="g-root-tx_understa_hx56s0m98suf-fill" data-item-order="0" transform="translate(50, 536)">
<g id="tx_understa_hx56s0m98suf-fill" stroke="none" fill="#ffffff">
<g><text style="font: 15px Roboto, sans-serif; white-space: pre;" font-size="15px" font-family="Roboto, sans-serif"><tspan x="12" y="28" dominant-baseline="ideographic">Understand limitations </tspan><tspan x="12" y="46" dominant-baseline="ideographic">and boundaries.</tspan></text></g>
</g>
</g>
<g id="g-root-cp_1_text-1_18lb5owm960ao-stroke" data-item-order="-840950" transform="translate(14, 98)">
<g id="cp_1_text-1_18lb5owm960ao-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 490 219.9999L 490 172M 10 172L 10 219.9998M 490 220L 490 262L 382 262L 382 273L 388 273L 370 291L 352 273L 358 273L 358 262L 142 262L 142 251L 148 251L 130 233L 112 251L 118 251L 118 262L 10 262L 10 220.5M 490 171.5L 490 10L 10 10L 10 172"></path></g>
</g>
</g>
<g id="g-root-cp_3_text-3_4o6kr4m95ypu-stroke" data-item-order="-840922" transform="translate(494, 98)">
<g id="cp_3_text-3_4o6kr4m95ypu-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 10 172L 10 219.9998M 490 172L 490 219.9999M 10 220.5L 10 262L 118 262L 118 251L 112 251L 130 233L 148 251L 142 251L 142 262L 358 262L 358 273L 352 273L 370 291L 388 273L 382 273L 382 262L 490 262L 490 220M 490 172L 490 10L 10 10L 10 172"></path></g>
</g>
</g>
<g id="g-root-cp_7_text-7_1lpwg40m97dos-stroke" data-item-order="-840894" transform="translate(13.999984741210938, 321.0000305175781)">
<g id="cp_7_text-7_1lpwg40m97dos-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 250.000034 81.000031L 250.000034 39.000031L 142.000034 39.000031L 142.000034 28.000031L 148.000034 28.000031L 130.000034 10.000031L 112.000034 28.000031L 118.000034 28.000031L 118.000034 39.000031L 10.000034 39.000031L 10.000034 81.000031M 250.00003 81.000225L 250.00003 189.000031M 10.000029 81.000225L 10.000029 189.000031M 250.000015 189.500031L 250.000015 351.000031L 10.000015 351.000031L 10.000015 189.500031"></path></g>
</g>
</g>
<g id="g-root-cp_2_text-2_4hbcswm97dou-stroke" data-item-order="-840868" transform="translate(254, 321.0000305175781)">
<g id="cp_2_text-2_4hbcswm97dou-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 9.999998 188.999985L 9.999998 81.000175M 490 188.999985L 490 81.000175M 10 80.5L 10 39L 118 39L 118 50L 112 50L 130 68L 148 50L 142 50L 142 39L 358 39L 358 28L 352 28L 370 10L 388 28L 382 28L 382 39L 490 39L 490 80.5M 490.000001 189.000031L 490.000001 351.000031L 10.000001 351.000031L 10.000001 189.000031"></path></g>
</g>
</g>
<g id="g-root-cp_4_text-4_v4uumom97fuw-stroke" data-item-order="-840842" transform="translate(734, 350.0000305175781)">
<g id="cp_4_text-4_v4uumom97fuw-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 250 159.999985L 250 52.000175M 10 159.999985L 10 52.000175M 250 51.5L 250 10L 142 10L 142 21L 148 21L 130 39L 112 21L 118 21L 118 10L 10 10L 10 51.5M 250 160.000031L 250 322.000031L 142 322.000031L 142 333.000031L 148 333.000031L 130 351.000031L 112 333.000031L 118 333.000031L 118 322.000031L 10 322.000031L 10 160.000031"></path></g>
</g>
</g>
<g id="g-root-cp_6_text-6_1q8ubo0m97e2y-stroke" data-item-order="-840814" transform="translate(13.999984741210938, 633)">
<g id="cp_6_text-6_1q8ubo0m97e2y-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 490.000034 81.000031L 490.000034 39.000031L 142.000034 39.000031L 142.000034 28.000031L 148.000034 28.000031L 130.000034 10.000031L 112.000034 28.000031L 118.000034 28.000031L 118.000034 39.000031L 10.000034 39.000031L 10.000034 81.000031M 490.000029 81.000099L 490.000029 128.999999M 10.000029 81.000099L 10.000029 128.999999M 490.000015 129.5L 490.000015 147L 479.000015 147L 479.000015 141L 461.000015 159L 479.000015 177L 479.000015 171L 490.000015 171L 490.000015 291L 10.000015 291L 10.000015 129.5"></path></g>
</g>
</g>
<g id="g-root-cp_5_text-5_18i6s9cm97dac-stroke" data-item-order="-840788" transform="translate(465, 662)">
<g id="cp_5_text-5_18i6s9cm97dac-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#ffffff" stroke-width="2">
<g><path d="M 519 99.999976L 519 52.000076M 39 99.999976L 39 52.000076M 519 51.5L 519 10L 411 10L 411 21L 417 21L 399 39L 381 21L 387 21L 387 10L 39 10L 39 51.5M 519 100L 519 262L 39 262L 39 142L 28 142L 28 148L 10 130L 28 112L 28 118L 39 118L 39 100"></path></g>
</g>
</g>
</g>
</g>

</svg> `,
      
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


    const logarithmsSections=[
        {
            id:'definition',
            title:sectionsContent.definition.title,
            link:'',
            content:[
              sectionsContent.definition.before,
              sectionsContent.definition.svg,
              sectionsContent.definition.after,

            ]
        },
        {
            id:'rules',
            title:sectionsContent.rules.title,
            link:sectionsContent.rules.link,
            content:[
                sectionsContent.rules.content,
                sectionsContent.rules.svg,
            
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
    
    <SectionTableOfContents sections={logarithmsSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
     secondaryNavTitle="Similar Pages"/>
    <br/>
    <br/>
    <IntroSection/>
    <br/>
    <br/>
    <Sections sections={logarithmsSections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>

    
    </>
  )
}
