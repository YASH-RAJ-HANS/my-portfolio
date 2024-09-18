import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`w-full h-[10vh] fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-md shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-md">
            <h1 className="text-white text-lg font-bold">YASH RAJ HANS</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">DSA</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Journey</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Achievements</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Get in Touch</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Contact Us</button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Get in Touch</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
