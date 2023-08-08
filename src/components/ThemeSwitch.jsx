"use client"
import React from 'react';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';


const ThemeSwitcher = () => {
  const { theme, applyTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  return (
    <div>
      
      {/* Show switch to dark theme only when the current theme is not dark */}
      {theme !== 'dark' && (
        <button
          onClick={handleThemeChange}
          className="mx-4"
        >
           <FaMoon size={20}/>
        </button>
      )}

      {/* Show switch to light theme only when the current theme is dark */}
      {theme === 'dark' && (
        <button
          onClick={handleThemeChange}
          className="mx-4"
        >
         <FaSun size={20}/>
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;



