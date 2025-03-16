import React from 'react';

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <img 
        src="/assets/images/wild_woods_logo_white.svg" 
        alt="Wild Woods Logo" 
        className="h-10 w-auto"
        onError={(e) => {
          e.currentTarget.src = '';
          e.currentTarget.alt = 'Wild Woods';
        }}
      />
    </div>
  );
}
