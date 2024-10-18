import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Home, Disc, Library, Search, List, Sun, Moon } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/now-playing', icon: Disc, label: 'Now Playing' },
    { path: '/library', icon: Library, label: 'Library' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/playlists', icon: List, label: 'Playlists' },
  ];

  useEffect(() => {
    const animateBackground = async () => {
      await controls.start({
        backgroundPosition: ['0% 0%', '100% 100%'],
        transition: { duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }
      });
    };
    animateBackground();
  }, [controls]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <motion.div
        className="animated-background"
        animate={controls}
      ></motion.div>
      <div className="blur-overlay"></div>
      <div className="flex flex-col h-screen">
        <header className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-10 backdrop-blur-md shadow-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Abishek's Music Library</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ckq8kzlwi0l-1%3A2?alt=media&token=8a4e7e7a-f7b5-4e0a-b4c9-3c2e0a1d5d1d"
                alt="Abishek Armstrong"
                className="w-8 h-8 rounded-full"
                onClick={() => setIsExpanded(!isExpanded)}
              />
            </div>
          </div>
        </header>
        <main className="flex-grow overflow-auto">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            <div className="content-wrapper">
              {children}
            </div>
          </motion.div>
        </main>
        <nav className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-10 backdrop-blur-md shadow-md">
          <div className="flex justify-around py-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center text-xs relative"
              >
                <item.icon size={20} />
                <span className="mt-1">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-500"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;