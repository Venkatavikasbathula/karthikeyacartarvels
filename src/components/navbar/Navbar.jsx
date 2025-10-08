import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto py-4 lg:px-8 px-6 xl:px-0">
          <div className="flex justify-between items-center transition-all duration-500">
            <div className="flex items-center">
              <a href="/" className="flex items-center flex-shrink-0">
                <span className="text-2xl md:text-3xl sm:block tracking-tight text-orange-600 font-bold transition-colors duration-300">
                  Karthikeya Travels
                </span>
              </a>
            </div>

            <ul className="hidden lg:flex ml-12 space-x-10 transition-all duration-500">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group text-base md:text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300"
                >
                  <Link
                    to={item.href}
                    onClick={() => {
                      scrollToTop();
                      closeNavbar();
                    }}
                    className="inline-block relative"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <Link
                to="/form"
                className="group hidden lg:block px-5 py-3 rounded-full bg-orange-600 hover:bg-orange-600/80 text-white shadow-md  transition-all duration-300 font-medium "
              >
                Contact Us
              </Link>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button
                onClick={toggleNavbar}
                className="transition-all duration-300"
              >
                {mobileDrawerOpen ? (
                  <X className="text-gray-700 transition-all duration-300 w-8 h-8 " />
                ) : (
                  <Menu className="text-gray-700  transition-all duration-300 w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 z-40 h-screen p-6 bg-white w-[75%] lg:hidden border-r border-gray-300 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
            mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h5 className="text-base font-semibold text-black uppercase border-b border-gray-300">
            Menu
          </h5>
          <ul className="mt-6 space-y-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-2 text-base md:text-lg text-gray-800 transition-colors duration-300"
              >
                <Link to={item.href} onClick={closeNavbar}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
