"use client"
import React from 'react';
import { useTheme } from './ThemeContext';
import { themes } from './ThemeContext';

const ThemeSelector = () => {
  const { theme, applyTheme } = useTheme();

  const handleFullThemeChange = (event) => {
    applyTheme(event.target.value);
  };

  return (
    <div>
      <select
        value={theme}
        onChange={handleFullThemeChange}
        className="select select-bordered select-sm w-full max-w-xs"
      >
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;

