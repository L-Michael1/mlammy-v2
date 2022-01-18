import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
