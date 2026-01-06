import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Resources from './pages/Resources';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  // Initialize with 'light' as the primary default
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    // If nothing is saved, we default to 'light' (white background)
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} theme={theme} />;
      case 'services':
        return <Services />;
      case 'industries':
        return <Industries />;
      case 'resources':
        return <Resources />;
      case 'about':
        return <About />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} theme={theme} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-300">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;