
export const complexNumbersData={
    "algebraic form":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 340" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="720" height="340" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="360" y="46" text-anchor="middle" font-size="24" font-weight="700" fill="#102050" letter-spacing="-0.3">Standard Form of a Complex Number</text>
  <line x1="200" y1="58" x2="520" y2="58" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- z = -->
  <text x="108" y="148" text-anchor="middle" font-size="46" font-weight="700" fill="#102050" font-style="italic">z</text>
  <text x="148" y="148" text-anchor="middle" font-size="38" font-weight="400" fill="#4060a0">=</text>

  <!-- "a" pill — warm orange -->
  <rect x="175" y="110" width="116" height="60" rx="30" fill="#f89838" filter="url(#soft)"/>
  <text x="233" y="150" text-anchor="middle" font-size="36" font-weight="700" fill="#fff" font-style="italic">a</text>

  <!-- Plus sign — medium blue -->
  <circle cx="335" cy="140" r="22" fill="#4098d8" filter="url(#soft)"/>
  <text x="335" y="149" text-anchor="middle" font-size="28" font-weight="700" fill="#fff">+</text>

  <!-- "bi" pill — deep indigo-blue -->
  <rect x="375" y="110" width="145" height="60" rx="30" fill="#304090" filter="url(#soft)"/>
  <text x="447" y="150" text-anchor="middle" font-size="36" font-weight="700" fill="#fff" font-style="italic">bi</text>

  <!-- Real part annotation -->
  <line x1="233" y1="176" x2="233" y2="214" stroke="#f89838" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5"/>
  <circle cx="233" cy="214" r="2.5" fill="#f89838" opacity="0.6"/>

  <rect x="152" y="222" width="162" height="48" rx="10" fill="#fff" stroke="#f89838" stroke-width="1.2" filter="url(#soft)"/>
  <text x="233" y="243" text-anchor="middle" font-size="12" font-weight="600" fill="#f89838" letter-spacing="1.2">REAL PART</text>
  <text x="233" y="260" text-anchor="middle" font-size="13.5" fill="#102050">Re(z) = <tspan font-style="italic" font-weight="600" fill="#f89838">a</tspan></text>

  <!-- Imaginary part annotation -->
  <line x1="447" y1="176" x2="447" y2="214" stroke="#304090" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5"/>
  <circle cx="447" cy="214" r="2.5" fill="#304090" opacity="0.6"/>

  <rect x="366" y="222" width="162" height="48" rx="10" fill="#fff" stroke="#304090" stroke-width="1.2" filter="url(#soft)"/>
  <text x="447" y="243" text-anchor="middle" font-size="12" font-weight="600" fill="#304090" letter-spacing="1.2">IMAGINARY PART</text>
  <text x="447" y="260" text-anchor="middle" font-size="13.5" fill="#102050">Im(z) = <tspan font-style="italic" font-weight="600" fill="#304090">b</tspan></text>

  <!-- i² = -1 badge -->
  <rect x="566" y="116" width="106" height="48" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1" filter="url(#soft)"/>
  <text x="619" y="137" text-anchor="middle" font-size="12" font-weight="600" fill="#4098d8">where</text>
  <text x="619" y="155" text-anchor="middle" font-size="17" font-weight="700" fill="#102050"><tspan font-style="italic">i</tspan><tspan font-size="11" baseline-shift="super">2</tspan> = −1</text>

  <!-- Footnote -->
  <text x="360" y="316" text-anchor="middle" font-size="12" fill="#6080a0" font-style="italic">Note: the imaginary part is b itself — a real number — not bi</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "algebraic form2":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 340" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#7a7a9a" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Background — soft cool off-white like the infographic -->
  <rect width="720" height="340" rx="18" fill="#f0f1f7"/>

  <!-- Title -->
  <text x="360" y="46" text-anchor="middle" font-size="24" font-weight="600" fill="#2d2f45" letter-spacing="-0.3">Standard Form of a Complex Number</text>
  <line x1="200" y1="58" x2="520" y2="58" stroke="#b8bcd0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- z = -->
  <text x="108" y="148" text-anchor="middle" font-size="46" font-weight="700" fill="#2d2f45" font-style="italic">z</text>
  <text x="148" y="148" text-anchor="middle" font-size="38" font-weight="400" fill="#8e90a6">=</text>

  <!-- "a" pill — soft warm orange from the infographic -->
  <rect x="175" y="110" width="116" height="60" rx="30" fill="#e8874b" filter="url(#soft)"/>
  <text x="233" y="150" text-anchor="middle" font-size="36" font-weight="700" fill="#fff" font-style="italic">a</text>

  <!-- Plus sign — muted cyan accent -->
  <circle cx="335" cy="140" r="22" fill="#4ba8c9" filter="url(#soft)"/>
  <text x="335" y="149" text-anchor="middle" font-size="28" font-weight="700" fill="#fff">+</text>

  <!-- "bi" pill — soft blue-violet from the infographic -->
  <rect x="375" y="110" width="145" height="60" rx="30" fill="#6b6db5" filter="url(#soft)"/>
  <text x="447" y="150" text-anchor="middle" font-size="36" font-weight="700" fill="#fff" font-style="italic">bi</text>

  <!-- Real part annotation -->
  <line x1="233" y1="176" x2="233" y2="214" stroke="#e8874b" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
  <circle cx="233" cy="214" r="2.5" fill="#e8874b" opacity="0.7"/>

  <rect x="152" y="222" width="162" height="48" rx="10" fill="#fff" stroke="#e8874b" stroke-width="1.2" filter="url(#soft)"/>
  <text x="233" y="243" text-anchor="middle" font-size="12" font-weight="600" fill="#e8874b" letter-spacing="1.2">REAL PART</text>
  <text x="233" y="260" text-anchor="middle" font-size="13.5" fill="#4a4b63">Re(z) = <tspan font-style="italic" font-weight="600" fill="#e8874b">a</tspan></text>

  <!-- Imaginary part annotation -->
  <line x1="447" y1="176" x2="447" y2="214" stroke="#6b6db5" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
  <circle cx="447" cy="214" r="2.5" fill="#6b6db5" opacity="0.7"/>

  <rect x="366" y="222" width="162" height="48" rx="10" fill="#fff" stroke="#6b6db5" stroke-width="1.2" filter="url(#soft)"/>
  <text x="447" y="243" text-anchor="middle" font-size="12" font-weight="600" fill="#6b6db5" letter-spacing="1.2">IMAGINARY PART</text>
  <text x="447" y="260" text-anchor="middle" font-size="13.5" fill="#4a4b63">Im(z) = <tspan font-style="italic" font-weight="600" fill="#6b6db5">b</tspan></text>

  <!-- i² = -1 badge -->
  <rect x="566" y="116" width="106" height="48" rx="12" fill="#fff" stroke="#4ba8c9" stroke-width="1" filter="url(#soft)"/>
  <text x="619" y="137" text-anchor="middle" font-size="12" font-weight="600" fill="#4ba8c9">where</text>
  <text x="619" y="155" text-anchor="middle" font-size="17" font-weight="700" fill="#2d2f45"><tspan font-style="italic">i</tspan><tspan font-size="11" baseline-shift="super">2</tspan> = −1</text>

  <!-- Footnote -->
  <text x="360" y="316" text-anchor="middle" font-size="12" fill="#8e90a6" font-style="italic">Note: the imaginary part is b itself — a real number — not bi</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "algebraic form3":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 340" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#8a8a8a" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="720" height="340" rx="18" fill="#f7f6f3"/>

  <!-- Title -->
  <text x="360" y="46" text-anchor="middle" font-size="24" font-weight="600" fill="#3a3a3a" letter-spacing="-0.3">Standard Form of a Complex Number</text>
  <line x1="200" y1="58" x2="520" y2="58" stroke="#c4bfb6" stroke-width="1.5" stroke-linecap="round"/>

  <!-- z = -->
  <text x="108" y="148" text-anchor="middle" font-size="46" font-weight="700" fill="#4a4a4a" font-style="italic">z</text>
  <text x="148" y="148" text-anchor="middle" font-size="38" font-weight="400" fill="#9a9590">=</text>

  <!-- "a" pill -->
  <rect x="175" y="110" width="116" height="60" rx="30" fill="#c87941" filter="url(#soft)"/>
  <text x="233" y="150" text-anchor="middle" font-size="36" font-weight="700" fill="#fff" font-style="italic">a</text>

  <!-- Plus sign -->
  <circle cx="335" cy="140" r="22" fill="#7a8b6e" filter="url(#soft)"/>
  <text x="335" y="149" text-anchor="middle" font-size="28" font-weight="700" fill="#fff">+</text>

  <!-- "bi" pill -->
  <rect x="375" y="110" width="145" height="60" rx="30" fill="#5b7b8a" filter="url(#soft)"/>
  <text x="447" y="150" text-anchor="middle" font-size="36" font-weight="700" fill="#fff" font-style="italic">bi</text>

  <!-- Real part annotation -->
  <line x1="233" y1="176" x2="233" y2="214" stroke="#c87941" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
  <circle cx="233" cy="214" r="2.5" fill="#c87941" opacity="0.7"/>

  <rect x="152" y="222" width="162" height="48" rx="10" fill="#fff" stroke="#c87941" stroke-width="1.2" filter="url(#soft)"/>
  <text x="233" y="243" text-anchor="middle" font-size="12" font-weight="600" fill="#c87941" letter-spacing="1.2">REAL PART</text>
  <text x="233" y="260" text-anchor="middle" font-size="13.5" fill="#6b6560">Re(z) = <tspan font-style="italic" font-weight="600" fill="#c87941">a</tspan></text>

  <!-- Imaginary part annotation -->
  <line x1="447" y1="176" x2="447" y2="214" stroke="#5b7b8a" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
  <circle cx="447" cy="214" r="2.5" fill="#5b7b8a" opacity="0.7"/>

  <rect x="366" y="222" width="162" height="48" rx="10" fill="#fff" stroke="#5b7b8a" stroke-width="1.2" filter="url(#soft)"/>
  <text x="447" y="243" text-anchor="middle" font-size="12" font-weight="600" fill="#5b7b8a" letter-spacing="1.2">IMAGINARY PART</text>
  <text x="447" y="260" text-anchor="middle" font-size="13.5" fill="#6b6560">Im(z) = <tspan font-style="italic" font-weight="600" fill="#5b7b8a">b</tspan></text>

  <!-- i² = -1 badge -->
  <rect x="566" y="116" width="106" height="48" rx="12" fill="#fff" stroke="#9a9590" stroke-width="1" filter="url(#soft)"/>
  <text x="619" y="137" text-anchor="middle" font-size="12" font-weight="600" fill="#9a9590">where</text>
  <text x="619" y="155" text-anchor="middle" font-size="17" font-weight="700" fill="#4a4a4a"><tspan font-style="italic">i</tspan><tspan font-size="11" baseline-shift="super">2</tspan> = −1</text>

  <!-- Footnote -->
  <text x="360" y="316" text-anchor="middle" font-size="12" fill="#9a9590" font-style="italic">Note: the imaginary part is b itself — a real number — not bi</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "powers of i":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="arrowHead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#4098d8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="720" height="480" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="360" y="42" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">The Cyclic Pattern of Powers of <tspan font-style="italic">i</tspan></text>
  <line x1="175" y1="54" x2="545" y2="54" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- === Circular diagram === -->
  <!-- Center of the circle -->
  <!-- cx=280, cy=260, radius=130 -->

  <!-- Circular track (dashed) -->
  <circle cx="280" cy="260" r="130" fill="none" stroke="#c8dce8" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Curved arrows between nodes to show cycle direction (clockwise) -->
  <!-- Top to Right -->
  <path d="M 340,145 A 130,130 0 0,1 395,205" fill="none" stroke="#4098d8" stroke-width="2" marker-end="url(#arrowHead)"/>
  <!-- Right to Bottom -->
  <path d="M 395,315 A 130,130 0 0,1 340,375" fill="none" stroke="#4098d8" stroke-width="2" marker-end="url(#arrowHead)"/>
  <!-- Bottom to Left -->
  <path d="M 220,375 A 130,130 0 0,1 165,315" fill="none" stroke="#4098d8" stroke-width="2" marker-end="url(#arrowHead)"/>
  <!-- Left to Top -->
  <path d="M 165,205 A 130,130 0 0,1 220,145" fill="none" stroke="#4098d8" stroke-width="2" marker-end="url(#arrowHead)"/>

  <!-- Center label -->
  <text x="280" y="265" text-anchor="middle" font-size="16" font-weight="600" fill="#6080a0">cycle of</text>
  <text x="280" y="283" text-anchor="middle" font-size="16" font-weight="600" fill="#6080a0">4</text>

  <!-- Node: i¹ = i (top, 12 o'clock) -->
  <circle cx="280" cy="130" r="38" fill="#f89838" filter="url(#soft)"/>
  <text x="280" y="127" text-anchor="middle" font-size="15" font-weight="700" fill="#fff"><tspan font-style="italic">i</tspan><tspan font-size="10" baseline-shift="super">1</tspan></text>
  <line x1="255" y1="137" x2="305" y2="137" stroke="#fff" stroke-width="1" opacity="0.4"/>
  <text x="280" y="152" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" font-style="italic">i</text>

  <!-- Node: i² = -1 (right, 3 o'clock) -->
  <circle cx="410" cy="260" r="38" fill="#304090" filter="url(#soft)"/>
  <text x="410" y="257" text-anchor="middle" font-size="15" font-weight="700" fill="#fff"><tspan font-style="italic">i</tspan><tspan font-size="10" baseline-shift="super">2</tspan></text>
  <line x1="385" y1="267" x2="435" y2="267" stroke="#fff" stroke-width="1" opacity="0.4"/>
  <text x="410" y="282" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">−1</text>

  <!-- Node: i³ = -i (bottom, 6 o'clock) -->
  <circle cx="280" cy="390" r="38" fill="#f89838" filter="url(#soft)"/>
  <text x="280" y="387" text-anchor="middle" font-size="15" font-weight="700" fill="#fff"><tspan font-style="italic">i</tspan><tspan font-size="10" baseline-shift="super">3</tspan></text>
  <line x1="255" y1="397" x2="305" y2="397" stroke="#fff" stroke-width="1" opacity="0.4"/>
  <text x="280" y="412" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">−<tspan font-style="italic">i</tspan></text>

  <!-- Node: i⁴ = 1 (left, 9 o'clock) -->
  <circle cx="150" cy="260" r="38" fill="#304090" filter="url(#soft)"/>
  <text x="150" y="257" text-anchor="middle" font-size="15" font-weight="700" fill="#fff"><tspan font-style="italic">i</tspan><tspan font-size="10" baseline-shift="super">4</tspan></text>
  <line x1="125" y1="267" x2="175" y2="267" stroke="#fff" stroke-width="1" opacity="0.4"/>
  <text x="150" y="282" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">1</text>

  <!-- === Right side: shortcut explanation === -->
  <rect x="490" y="120" width="200" height="240" rx="14" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>

  <text x="590" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#102050">Shortcut</text>
  <line x1="520" y1="160" x2="660" y2="160" stroke="#c8dce8" stroke-width="1"/>

  <text x="590" y="184" text-anchor="middle" font-size="13" fill="#6080a0">Divide exponent by 4</text>
  <text x="590" y="200" text-anchor="middle" font-size="13" fill="#6080a0">and use the remainder:</text>

  <!-- Remainder table -->
  <text x="530" y="234" font-size="13" font-weight="600" fill="#102050">r = 1</text>
  <text x="620" y="234" font-size="15" font-weight="700" fill="#f89838">→  <tspan font-style="italic">i</tspan></text>

  <text x="530" y="260" font-size="13" font-weight="600" fill="#102050">r = 2</text>
  <text x="620" y="260" font-size="15" font-weight="700" fill="#304090">→  −1</text>

  <text x="530" y="286" font-size="13" font-weight="600" fill="#102050">r = 3</text>
  <text x="620" y="286" font-size="15" font-weight="700" fill="#f89838">→  −<tspan font-style="italic">i</tspan></text>

  <text x="530" y="312" font-size="13" font-weight="600" fill="#102050">r = 0</text>
  <text x="620" y="312" font-size="15" font-weight="700" fill="#304090">→  1</text>

  <line x1="520" y1="326" x2="660" y2="326" stroke="#c8dce8" stroke-width="1"/>

  <text x="590" y="346" text-anchor="middle" font-size="12" font-style="italic" fill="#6080a0">r = n mod 4</text>

  <!-- Example at the bottom -->
  <rect x="140" y="440" width="440" height="30" rx="8" fill="#fff" stroke="#c8dce8" stroke-width="1" filter="url(#soft)"/>
  <text x="360" y="460" text-anchor="middle" font-size="13" fill="#6080a0">Example:  <tspan font-weight="700" fill="#102050"><tspan font-style="italic">i</tspan><tspan font-size="9" baseline-shift="super">23</tspan></tspan>  →  23 mod 4 = <tspan font-weight="700" fill="#102050">3</tspan>  →  <tspan font-style="italic" font-weight="700" fill="#f89838">−i</tspan></text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
}