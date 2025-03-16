import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/galerie', text: 'Galerie' }
];

export default function NavLinks() {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className="text-gray-300 hover:text-[#d8a12c] px-3 py-2 transition-colors duration-300"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
