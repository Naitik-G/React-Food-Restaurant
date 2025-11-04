import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active link based on current location
    if (location.pathname === "/blogs") {
      setActiveLink("Blogs");
    } else if (location.hash) {
      const sectionName = location.hash.replace("#", "");
      const navItem = navItems.find(item => item.href.includes(sectionName));
      if (navItem) {
        setActiveLink(navItem.name);
      }
    } else {
      setActiveLink("Home");
    }
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/#home", section: "home" },
    { name: "Menu", href: "/#menu", section: "menu" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Contact", href: "/#contact", section: "contact" },
    { name: "Blogs", href: "/blogs", section: null },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveLink(item.name);
    setIsOpen(false);

    // If clicking on Blogs, navigate to blogs page
    if (item.href === "/blogs") {
      navigate("/blogs");
      window.scrollTo(0, 0);
      return;
    }

    // If we're on the blogs page and clicking a home page section
    if (location.pathname === "/blogs" && item.section) {
      // Navigate to home page first, then scroll to section
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    // If we're on home page, just scroll to section
    if (item.section) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
          <div className="flex-shrink-0 z-50">
            < a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setActiveLink("Home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              {/* Logo Image */}
              <div className={`relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ${
                scrolled ? 'scale-100' : 'scale-110'
              }`}>
                <img
                  src="/logo.svg"
                  alt="Foodify Logo"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    scrolled 
                      ? 'filter-none' 
                      : 'drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]'
                  }`}
                />
              </div>
              
              {/* Logo Text */}
              <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled
                  ? "text-orange-500"
                  : "text-white drop-shadow-md"
              }`}>
                Food<span className={scrolled ? "text-amber-500" : "text-orange-200"}>ify</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-200 cursor-pointer ${
                    scrolled
                      ? activeLink === item.name
                        ? "bg-orange-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      : activeLink === item.name
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "text-white hover:bg-white/10 hover:backdrop-blur-sm"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="/#reservation"
              onClick={(e) => handleNavClick(e, { name: "Reservation", href: "/#reservation", section: "reservation" })}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                scrolled
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-orange-600 shadow-md hover:shadow-lg"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 z-50 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-1 pt-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
                    scrolled
                      ? activeLink === item.name
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-orange-50"
                      : activeLink === item.name
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/#reservation"
                onClick={(e) => {
                  handleNavClick(e, { name: "Reservation", href: "/#reservation", section: "reservation" });
                }}
                className={`block px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                    : "bg-white text-orange-600"
                }`}
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;