import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/assets/images/wild_woods_logo_white.svg"
              alt="Wild Woods Logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex space-x-6">
            <Link to="/impressum" className="text-gray-400 hover:text-[#d8a12c]">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-gray-400 hover:text-[#d8a12c]">
              Datenschutz
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400">
            © {new Date().getFullYear()} Wild Woods
          </div>
        </div>
      </div>
    </footer>
  );
}
