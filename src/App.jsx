import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Component Pages
import HomePage from './pages/HomePage';
import OurPackage from './pages/OurPackagePage';
import Top25Page from './pages/Top25Page';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-package" element={<OurPackage />} />
          <Route path="/top-25" element={<Top25Page />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
