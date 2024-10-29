import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-4 sm:px-8">
      <div className="container mx-auto py-2 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold hidden md:inline">Sameer</div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:flex md:space-x-6 text-center md:text-left`}>
          <a href="#home" className="hover:text-gray-400 block md:inline-block py-2">Home</a>
          <a href="#about" className="hover:text-gray-400 block md:inline-block py-2">About Me</a>
          <a href="#service" className="hover:text-gray-400 block md:inline-block py-2">Services</a>
          <a href="#project" className="hover:text-gray-400 block md:inline-block py-2">Projects</a>
          <a href="#contact" className="hover:text-gray-400 block md:inline-block py-2">Contact</a>
        </div>

        {/* Connect Me Button */}
        <a
          href="https://www.linkedin.com/in/sameer-ansari-159976244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
