// import { useState } from 'react';
// // import processContent from wherever you keep it
// import { processContent } from '../../utils/contentProcessor';

// const toRoman = (n) => {
//   const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//   const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
//   let result = '';
//   for (let i = 0; i < vals.length; i++) {
//     while (n >= vals[i]) {
//       result += syms[i];
//       n -= vals[i];
//     }
//   }
//   return result;
// };

// const themes = {
//   frost: {
//     background: '#e8edf4',
//     borderLeftColor: '#1a3a6e',
//     titleColor: '#1a3a6e',
//     subtitleColor: '#6b7a94',
//     separatorColor: '#b8c5d8',
//     ruleColor: '#2c3e50',
//     ruleBorder: '#cdd6e4',
//     numColor: '#2b5ea7',
//     mathColor: '#3a6bb5',
//     linkColor: '#2b5ea7',
//     chevronColor: '#2b5ea7',
//     detailBg: '#dce4f0',
//     detailColor: '#2c3e50',
//   },
//   royal: {
//     background: '#1e4d8c',
//     borderLeftColor: '#a3c4e8',
//     titleColor: '#eaf0f8',
//     subtitleColor: '#9ab4d4',
//     separatorColor: '#3a6ba8',
//     ruleColor: '#dce6f2',
//     ruleBorder: '#2d6099',
//     numColor: '#c8ddf0',
//     mathColor: '#b0cfe8',
//     linkColor: '#c8ddf0',
//     chevronColor: '#a3c4e8',
//     detailBg: '#174178',
//     detailColor: '#c8ddf0',
//   },
//   midnight: {
//     background: '#1c2a3e',
//     borderLeftColor: '#5b9bd5',
//     titleColor: '#d4e1f0',
//     subtitleColor: '#7a8da6',
//     separatorColor: '#334a68',
//     ruleColor: '#c8d4e2',
//     ruleBorder: '#2a3d56',
//     numColor: '#7db8e8',
//     mathColor: '#8ab4dc',
//     linkColor: '#7db8e8',
//     chevronColor: '#5b9bd5',
//     detailBg: '#162232',
//     detailColor: '#b0c4d8',
//   },
//   slate: {
//     background: '#2c3e50',
//     borderLeftColor: '#5dade2',
//     titleColor: '#ecf0f1',
//     subtitleColor: '#85929e',
//     separatorColor: '#4a6580',
//     ruleColor: '#d5dde5',
//     ruleBorder: '#3b5068',
//     numColor: '#5dade2',
//     mathColor: '#85c1e9',
//     linkColor: '#5dade2',
//     chevronColor: '#5dade2',
//     detailBg: '#243342',
//     detailColor: '#c0ccd6',
//   },
//   ocean: {
//     background: '#162a3a',
//     borderLeftColor: '#4a9ec2',
//     titleColor: '#d8eaf0',
//     subtitleColor: '#7a9aae',
//     separatorColor: '#1e3d52',
//     ruleColor: '#c4d8e4',
//     ruleBorder: '#1e3d52',
//     numColor: '#5cb8d8',
//     mathColor: '#6ec0da',
//     linkColor: '#5cb8d8',
//     chevronColor: '#4a9ec2',
//     detailBg: '#0f2230',
//     detailColor: '#a8c8d8',
//   },
//   violet: {
//     background: '#2e1f5e',
//     borderLeftColor: '#9b8ce8',
//     titleColor: '#e8e2f4',
//     subtitleColor: '#9488b4',
//     separatorColor: '#4a3880',
//     ruleColor: '#d4cee6',
//     ruleBorder: '#3d2e6e',
//     numColor: '#b8a8f0',
//     mathColor: '#a89cd8',
//     linkColor: '#b8a8f0',
//     chevronColor: '#9b8ce8',
//     detailBg: '#241850',
//     detailColor: '#c0b8da',
//   },
// };

// function RuleRow({ rule, index, numbering, theme }) {
//   const [expanded, setExpanded] = useState(false);
//   const hasDetail = Boolean(rule.detail);

//   const numLabel = numbering === 'roman'
//     ? toRoman(index + 1)
//     : numbering === 'arabic'
//       ? String(index + 1)
//       : null;

//   return (
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           gap: '14px',
//           alignItems: 'baseline',
//           padding: '9px 0',
//           borderBottom: `1px solid ${theme.ruleBorder}`,
//           cursor: hasDetail ? 'pointer' : 'default',
//         }}
//         onClick={hasDetail ? () => setExpanded(!expanded) : undefined}
//       >
//         {numLabel && (
//           <span
//             style={{
//               fontFamily: 'var(--font-serif, Georgia, serif)',
//               fontSize: '18px',
//               fontWeight: '500',
//               color: theme.numColor,
//               minWidth: '30px',
//               textAlign: 'right',
//               flexShrink: 0,
//             }}
//           >
//             {numLabel}
//           </span>
//         )}
//         <div style={{ flex: 1 }}>
//           <span style={{ fontSize: '14.5px', color: theme.ruleColor, lineHeight: '1.5' }}>
//             {processContent(rule.text)}
//           </span>
//           {rule.link && (
//             <a
//               href={rule.link}
//               onClick={(e) => e.stopPropagation()}
//               style={{
//                 color: theme.linkColor,
//                 fontSize: '13px',
//                 marginLeft: '8px',
//                 textDecoration: 'none',
//               }}
//             >
//               {rule.linkText || '\u2192'}
//             </a>
//           )}
//         </div>
//         {hasDetail && (
//           <span
//             style={{
//               color: theme.chevronColor,
//               fontSize: '14px',
//               transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
//               transition: 'transform 0.2s ease',
//               flexShrink: 0,
//               userSelect: 'none',
//             }}
//           >
//             &#9662;
//           </span>
//         )}
//       </div>
//       {hasDetail && expanded && (
//         <div
//           style={{
//             background: theme.detailBg,
//             padding: '12px 16px',
//             marginLeft: numLabel ? '44px' : '0',
//             borderRadius: '6px',
//             marginTop: '4px',
//             marginBottom: '4px',
//             fontSize: '13.5px',
//             lineHeight: '1.55',
//             color: theme.detailColor,
//           }}
//         >
//           {processContent(rule.detail)}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function TheoremsCard({
//   id,
//   title,
//   subtitle,
//   rules = [],
//   variant = 'frost',
//   numbering = 'roman',
// }) {
//   const theme = themes[variant] || themes.frost;

//   return (
//     <div
//       id={id}
//       style={{
//         background: theme.background,
//         borderLeft: `5px solid ${theme.borderLeftColor}`,
//         borderRadius: '0 12px 12px 0',
//         padding: '28px 30px',
//         margin: '0 auto',
//         maxWidth: '900px',
//       }}
//     >
//       {title && (
//         <h2
//           style={{
//             fontFamily: 'var(--font-serif, Georgia, serif)',
//             fontSize: '22px',
//             fontWeight: '500',
//             color: theme.titleColor,
//             textAlign: 'center',
//             margin: '0 0 2px',
//             letterSpacing: '0.8px',
//           }}
//         >
//           {title}
//         </h2>
//       )}
//       {subtitle && (
//         <p
//           style={{
//             fontSize: '12px',
//             color: theme.subtitleColor,
//             textAlign: 'center',
//             margin: '0 0 18px',
//             letterSpacing: '1.5px',
//             textTransform: 'uppercase',
//           }}
//         >
//           {subtitle}
//         </p>
//       )}
//       <div
//         style={{
//           height: '1px',
//           background: theme.separatorColor,
//           margin: '0 auto 16px',
//           width: '50px',
//         }}
//       />
//       {rules.map((rule, i) => (
//         <RuleRow
//           key={i}
//           rule={rule}
//           index={i}
//           numbering={numbering}
//           theme={theme}
//         />
//       ))}
//     </div>
//   );
// }


import { useState } from 'react';
// import processContent from wherever you keep it
import { processContent } from '../../utils/contentProcessor';

const toRoman = (n) => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) {
      result += syms[i];
      n -= vals[i];
    }
  }
  return result;
};

const themes = {
  frost: {
    background: '#e8edf4',
    borderLeftColor: '#1a3a6e',
    titleColor: '#1a3a6e',
    subtitleColor: '#6b7a94',
    separatorColor: '#b8c5d8',
    ruleColor: '#2c3e50',
    ruleBorder: '#cdd6e4',
    numColor: '#2b5ea7',
    mathColor: '#3a6bb5',
    linkColor: '#2b5ea7',
    chevronColor: '#2b5ea7',
    detailBg: '#dce4f0',
    detailColor: '#2c3e50',
  },
  royal: {
    background: '#1e4d8c',
    borderLeftColor: '#a3c4e8',
    titleColor: '#eaf0f8',
    subtitleColor: '#9ab4d4',
    separatorColor: '#3a6ba8',
    ruleColor: '#dce6f2',
    ruleBorder: '#2d6099',
    numColor: '#c8ddf0',
    mathColor: '#b0cfe8',
    linkColor: '#c8ddf0',
    chevronColor: '#a3c4e8',
    detailBg: '#174178',
    detailColor: '#c8ddf0',
  },
  midnight: {
    background: '#1c2a3e',
    borderLeftColor: '#5b9bd5',
    titleColor: '#d4e1f0',
    subtitleColor: '#7a8da6',
    separatorColor: '#334a68',
    ruleColor: '#c8d4e2',
    ruleBorder: '#2a3d56',
    numColor: '#7db8e8',
    mathColor: '#8ab4dc',
    linkColor: '#7db8e8',
    chevronColor: '#5b9bd5',
    detailBg: '#162232',
    detailColor: '#b0c4d8',
  },
  slate: {
    background: '#2c3e50',
    borderLeftColor: '#5dade2',
    titleColor: '#ecf0f1',
    subtitleColor: '#85929e',
    separatorColor: '#4a6580',
    ruleColor: '#d5dde5',
    ruleBorder: '#3b5068',
    numColor: '#5dade2',
    mathColor: '#85c1e9',
    linkColor: '#5dade2',
    chevronColor: '#5dade2',
    detailBg: '#243342',
    detailColor: '#c0ccd6',
  },
  ocean: {
    background: '#162a3a',
    borderLeftColor: '#4a9ec2',
    titleColor: '#d8eaf0',
    subtitleColor: '#7a9aae',
    separatorColor: '#1e3d52',
    ruleColor: '#c4d8e4',
    ruleBorder: '#1e3d52',
    numColor: '#5cb8d8',
    mathColor: '#6ec0da',
    linkColor: '#5cb8d8',
    chevronColor: '#4a9ec2',
    detailBg: '#0f2230',
    detailColor: '#a8c8d8',
  },
  violet: {
    background: '#2e1f5e',
    borderLeftColor: '#9b8ce8',
    titleColor: '#e8e2f4',
    subtitleColor: '#9488b4',
    separatorColor: '#4a3880',
    ruleColor: '#d4cee6',
    ruleBorder: '#3d2e6e',
    numColor: '#b8a8f0',
    mathColor: '#a89cd8',
    linkColor: '#b8a8f0',
    chevronColor: '#9b8ce8',
    detailBg: '#241850',
    detailColor: '#c0b8da',
  },
};

function RuleRow({ rule, index, numbering, theme }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetail = Boolean(rule.detail);

  const numLabel = numbering === 'roman'
    ? toRoman(index + 1)
    : numbering === 'arabic'
      ? String(index + 1)
      : null;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'baseline',
          padding: '9px 0',
          borderBottom: `1px solid ${theme.ruleBorder}`,
          cursor: hasDetail ? 'pointer' : 'default',
        }}
        onClick={hasDetail ? () => setExpanded(!expanded) : undefined}
      >
        {numLabel && (
          <span
            style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '18px',
              fontWeight: '500',
              color: theme.numColor,
              minWidth: '30px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            {numLabel}
          </span>
        )}
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '14.5px', color: theme.ruleColor, lineHeight: '1.5' }}>
            {processContent(rule.text)}
          </span>
          {rule.link && (
            <a
              href={rule.link}
              onClick={(e) => e.stopPropagation()}
              style={{
                color: theme.linkColor,
                fontSize: '13px',
                marginLeft: '8px',
                textDecoration: 'none',
              }}
            >
              {rule.linkText || '\u2192'}
            </a>
          )}
        </div>
        {hasDetail && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            style={{
              flexShrink: 0,
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <polyline
              points="3,6 9,13 15,6"
              fill="none"
              stroke={theme.chevronColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {hasDetail && expanded && (
        <div
          style={{
            background: theme.detailBg,
            padding: '12px 16px',
            marginLeft: numLabel ? '44px' : '0',
            borderRadius: '6px',
            marginTop: '4px',
            marginBottom: '4px',
            fontSize: '13.5px',
            lineHeight: '1.55',
            color: theme.detailColor,
          }}
        >
          {processContent(rule.detail)}
        </div>
      )}
    </div>
  );
}

export default function TheoremsCard({
  id,
  title,
  subtitle,
  rules = [],
  variant = 'frost',
  numbering = 'roman',
}) {
  const theme = themes[variant] || themes.frost;

  return (
    <div
      id={id}
      style={{
        background: theme.background,
        borderLeft: `5px solid ${theme.borderLeftColor}`,
        borderRadius: '0 12px 12px 0',
        padding: '28px 30px',
        margin: '0 auto',
        maxWidth: '900px',
      }}
    >
      {title && (
        <h2
          style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '22px',
            fontWeight: '500',
            color: theme.titleColor,
            textAlign: 'center',
            margin: '0 0 2px',
            letterSpacing: '0.8px',
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          style={{
            fontSize: '12px',
            color: theme.subtitleColor,
            textAlign: 'center',
            margin: '0 0 18px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          height: '1px',
          background: theme.separatorColor,
          margin: '0 auto 16px',
          width: '50px',
        }}
      />
      {rules.map((rule, i) => (
        <RuleRow
          key={i}
          rule={rule}
          index={i}
          numbering={numbering}
          theme={theme}
        />
      ))}
    </div>
  );
}