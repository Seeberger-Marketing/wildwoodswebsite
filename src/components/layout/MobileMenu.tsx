import React from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div className={`md:hidden transition-all duration-300 ease-in-out ${
      isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
    }`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
        <NavLinks />
      </div>
    </div>
  );
}
