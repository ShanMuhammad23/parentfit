'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'How It Works', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' }
 
  ];

  return (
    <nav 
      className={`bg-black text-white shadow-lg transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-1/2 -translate-x-1/2 z-50 rounded-full mt-2 w-[90%] max-w-6xl' 
          : 'max-w-[90%] mx-auto rounded-full mt-2'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-1 md:h-20' : 'h-14 md:h-16'
        }`}>
          {/* Logo - Rounded button at start */}
          <div className="shrink-0">
           <Image 
             src="/img/logo-black.jpg" 
             alt="ParentFit" 
             width={isScrolled ? 120 : 150} 
             height={isScrolled ? 96 : 120}
             className="transition-all duration-300"
           />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Choose Plan Button - Desktop */}
          <div className="hidden md:flex md:items-center">
            <a
              href="/choose-plan"
              className="px-6 py-2.5 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-200 font-semibold text-sm lg:text-base"
            >
              Choose a Plan
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-white/10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/choose-plan"
                className="block w-full text-center px-4 py-2.5 rounded-full bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;