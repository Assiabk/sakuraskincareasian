import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const scrollToId = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const goHome = () => {
    setIsOpen(false);
    const homeSection = document.getElementById("nav-home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const homeSectionAfterNav = document.getElementById("nav-home");
        homeSectionAfterNav?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const goShop = () => {
    setIsOpen(false);
    navigate("/products");
  };

  const goAbout = () => {
    setIsOpen(false);
    navigate("/about");
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="text-3xl font-serif font-bold text-pink-600 tracking-wide cursor-pointer"
            onClick={goHome}
          >
            SakuraGlow
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-gray-800 font-medium text-lg">
            <li>
              <button
                onClick={goHome}
                className="hover:text-pink-600 transition duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
             onClick={() => scrollToId("shop")}
              className="hover:text-pink-600 transition duration-200" id="shop"
              >
                Shop
              </button>
            </li>
            <li>
              <button
                onClick={goAbout}
                className="hover:text-pink-600 transition duration-200"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("footer")}
                className="hover:text-pink-600 transition duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white shadow-inner ${
          isOpen ? "max-h-52 opacity-100 pt-4 pb-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="space-y-4 text-gray-800 font-medium text-center">
          <li>
            <button
              onClick={goHome}
              className="hover:text-pink-600 transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={goShop}
              className="hover:text-pink-600 transition"
            >
              Shop
            </button>
          </li>
          <li>
            <button
              onClick={goAbout}
              className="hover:text-pink-600 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToId("footer")}
              className="hover:text-pink-600 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
