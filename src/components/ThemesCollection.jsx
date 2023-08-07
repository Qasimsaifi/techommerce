"use client"
import React from 'react';

const ThemesCollectinComponent = ({ themes }) => {
  return (
    <div className="m-5">
      <h2 className="text-2xl font-semibold text-center mt-7 mb-7">themeS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {themes.map((theme, index) => (
          <div
            className={`card cursor-pointer relative overflow-hidden ${
              index === 1 ? 'md:col-span-2 md:row-span-2' : ''
            } transition-transform duration-300 hover:scale-105`}
            key={theme.id}
          >
            <figure className="relative">
              <img
                src={theme.image}
                alt={theme.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesCollectinComponent;

