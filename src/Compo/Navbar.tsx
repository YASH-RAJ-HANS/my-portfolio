import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleScrollOrRedirect = (section: string) => {
    // Check if the section is present on the current page
    const sectionElement = document.getElementById(section);

    if (sectionElement) {
      
      scroller.scrollTo(section, {
        smooth: true,
        offset: -50,
        duration: 500,
      });
    } else {
     
      navigate(`/${section}`);
    }
  };


  return (
    <nav
      className={`w-full h-[12vh] fixed top-0 z-50 transition-all duration-300  border-gray-200 p-4 max-lg:p-2 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-md shadow-lg border-b-[2px]"
          : "border-b-[6px] bg-black/50 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-md flex cursor-pointer" onClick={() => navigate(`/`)}>
            {/* <img className='h-10 w-40' src="./Logo.png" alt="" /> */}
            <h1 className="text-white text-3xl font-bold">YRH</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 max-lg:space-x-4 items-center ">
            <div
              onClick={() => navigate(`/`)}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => navigate(`/dsa`)}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              DSA
            </div>
            <div
              onClick={() => navigate(`/tool`)}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Tool
            </div>
            <div
              onClick={() => handleScrollOrRedirect("journey")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Journey
            </div>
            <div
              onClick={() => handleScrollOrRedirect("project")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Project
            </div>
            <div
              onClick={() => handleScrollOrRedirect("achievements")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Achievements
            </div>
            <button
              onClick={() =>
                window.open(`https://bio.link/yash_raj_hans`, "_blank")
              }
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </a>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
