import React from 'react';

const ThemeContext = React.createContext({
  isDarkMode: false,
  setDarkMode: (value: boolean) => {}
});

export default ThemeContext;