"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme"); // Use localStorage
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []); // Empty dependency array ensures this runs only once on client side

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme); // Use localStorage
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
