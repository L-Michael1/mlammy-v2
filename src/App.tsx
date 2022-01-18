import React, { useState } from 'react';

// Components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { light, dark } from './components/Theme/Themes'
import GlobalStyle from './components/Theme/globalStyles'

// Pages
import Home from './pages/Home/Home'

const App = () => {

  let localTheme = localStorage.getItem('theme') ?? 'light';

  const [theme, setTheme] = useState<String>(localTheme);

  const toggleTheme = () => {
    let toggledTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', toggledTheme);
    setTheme(toggledTheme);
  }

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
