// FilterButtons.jsx
import React, { useState } from 'react';

const FilterButtons = ({ categories, handleFilter }) => {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' is the default active filter

  const handleClick = (category) => {
    setActiveFilter(category);
    handleFilter(category);
  };

  return (
    <ul className="project-filter filter-btns-one justify-content-center pb-15 wow fadeInUp delay-0-2s">
     <li 
        onClick={() => handleClick('all')}
        className={activeFilter === 'all' ? 'current' : ''}
      >All</li>
      {categories.map((category, index) => (
       <li 
          key={index}
          onClick={() => handleClick(category)}
          className={activeFilter === category ? 'current' : ''}
        >{category}</li>
      ))}
    </ul>
  );
};

export default FilterButtons;
