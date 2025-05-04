import React from 'react';
import MyList from './MyList';

const themes = {
  // Classic themes
  classic: {
    color: 'gray',
    boxed: false,
    divided: true
  },
  modern: {
    color: 'blue',
    boxed: true,
    divided: false
  },

  // Tonal themes
  oceanic: {
    color: 'blue',
    boxed: true,
    divided: false,
    centered: true
  },
  forest: {
    color: 'green',
    boxed: true,
    divided: false
  },
  sunset: {
    color: 'red',
    boxed: true,
    divided: false,
    centered: true
  },
  desert: {
    color: 'yellow',
    boxed: true,
    divided: false
  },

  // Functional themes
  minimal: {
    color: 'gray',
    boxed: false,
    divided: false,
    compact: true
  },
  paper: {
    color: 'gray',
    boxed: true,
    divided: false,
    compact: false
  },
  elegant: {
    color: 'blue',
    boxed: false,
    divided: true,
    compact: false
  },
  technical: {
    color: 'gray',
    boxed: true,
    divided: true,
    compact: true
  },

  // Special themes
  glass: {
    color: 'blue',
    boxed: true,
    divided: false,
    compact: false,
    centered: true
  },
  chalk: {
    color: 'gray',
    boxed: false,
    divided: true,
    compact: true,
    centered: true
  }
};

const StyledList = ({ theme = 'classic', ...props }) => {
  const themeProps = themes[theme] || themes.classic;
  return <MyList {...themeProps} {...props} />;
};

export default StyledList;