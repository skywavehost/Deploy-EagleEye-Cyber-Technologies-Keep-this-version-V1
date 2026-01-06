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
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
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
    <div className="min-h-screen flex flex-col relative transition-colors duration-300 overflow-x-hidden">
      {/* GLOBAL BACKGROUND DESIGN */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(${theme === 'dark' ? '#00adef' : '#000'} 1px, transparent 1px), 
                              linear-gradient(90deg, ${theme === 'dark' ? '#00adef' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }}
        />
        
        {/* Animated Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00adef]/10 dark:bg-[#00adef]/5 blur-[120px] animate-pulse" />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/10 dark:bg-blue-900/10 blur-[150px]"
          style={{ animation: 'pulse 8s infinite' }}
        />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      {/* CONTENT LAYERS */}
      <div className="relative z-10 flex flex-col min-h-screen">
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

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          50% { transform: scale(1.1) translate(-2%, -2%); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default App;