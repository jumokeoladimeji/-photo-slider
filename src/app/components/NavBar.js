import React from 'react';

export default function NavBar() {
  return (
    <nav className="flex w-full items-center py-2 shadow-md fixed top-0 z-50 bg-white">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-center px-4">
        <ul className="flex items-center">
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-800 hover:scale-105 hover:text-black duration-200">
            <p className="text-center">DISPLAYING PICTURES FROM ENDPOINT IN A CAROUSEL</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
