import React from 'react';

export const SoftBoiledEggCracking: React.FC<{ stage: number }> = ({ stage }) => {
    // Yolk radius mapping based on stage
    const yolkSizes = [8, 7, 6, 5, 4]; // Corresponding to stages 1-5
    const yolkColorStages = ["#ffcc00", "#ffb600", "#ffaa00", "#ff9900", "#ff8800"];
  
    return (
      <svg width="350" height="350" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Egg Outline */}
        <ellipse cx="50" cy="45" rx="18" ry="25" fill="#fff" stroke="#000" stroke-width="2" />
  
        {/* Single Yolk with Dynamic Radius and Color */}
        <circle cx="50" cy="50" r={yolkSizes[stage - 1]} fill={yolkColorStages[stage - 1]} stroke="#000" stroke-width="1" />
      </svg>
    );
  };
