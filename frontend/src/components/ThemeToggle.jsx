// components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-5 w-11 items-center rounded-full
        transition-all duration-300 ease-in-out
        focus:outline-none cursor-pointer
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
          : 'bg-gradient-to-r from-slate-500 to-slate-600'
        }
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Track */}
      <span className="sr-only">Toggle theme</span>
      
      {/* Thumb */}
      <span
        className={`
          inline-block h-3 w-3 transform rounded-full bg-white shadow-lg
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}
        `}
      >
      </span>
    </button>
  );
};

export default ThemeToggle;