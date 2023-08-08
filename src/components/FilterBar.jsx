"use client"
import { useState } from 'react';

function FilterSelector({ options, label, onFilterChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    onFilterChange(label, selectedOptions); // Call onFilterChange immediately after option change
  };

  return (
    <li>
      <a href="#" className="menu-link">
        {label}
      </a>
      <ul className="submenu">
        {options.map((option) => (
          <li key={option}>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function FilterComponent() {
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleFilterChange = (label, selectedOptions) => {
    setAppliedFilters((prevFilters) => ({ ...prevFilters, [label]: selectedOptions }));
    generateFilterString(); // Call generateFilterString after each filter change
  };

  const generateFilterString = () => {
    const filterString = Object.keys(appliedFilters)
      .map((label) => `${label}=${appliedFilters[label].map(option => option.replace(/ /g, '')).join('&')}`)
      .join('&');
    console.log('Applied Filters:', filterString);
  };

  return (
    <div className="drawer z-20">
      <input id="my-drawe" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li className="menu-title">Filter By</li>
          <FilterSelector
            label="Category"
            options={['Electronics', 'Clothing', 'Home & Kitchen', /* ...more options */]}
            onFilterChange={handleFilterChange}
          />
          {/* Add more FilterSelector components for other filters */}
        </ul>
      </div>
    </div>
  );
}

