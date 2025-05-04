import React from 'react';
import StyledList from '@/app/components/lists/StyledList';
import { themes } from '@/app/components/lists/themes';

const TestStyledList = () => {
  const sampleItems = [
    { text: 'Item 1', icon: null },
    { text: 'Item 2', icon: null },
    { text: `Item 3 \n\n\n`, icon: null },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>StyledList Component - Theme Showcase</h1>
      {Object.keys(themes).map((themeKey) => (
        <div key={themeKey} style={{ marginBottom: '40px' }}>
          <h2>{themes[themeKey].name}</h2>
          <StyledList
            items={sampleItems}
            title={`Theme: ${themes[themeKey].name}`}
            theme={themeKey}
            showNumbers={false}
            width={'500px'}
            centered={true}
           
          />
        </div>
      ))}
  <div>
      <StyledList
       items={sampleItems}
       theme='glassmorphicSkyBlueLight'
       width={'500px'}
      />
      </div>
      <StyledList
       items={sampleItems}
       theme='glassmorphicTealLight'
      />
    </div>
  );
};

export default TestStyledList;