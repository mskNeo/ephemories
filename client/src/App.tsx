import React, { useState } from 'react';
import ThemeContext from 'context/ThemeContext';
import { Home } from 'pages/Home';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
