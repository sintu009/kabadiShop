import React from "react";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/scrap-rates", label: "Scrap Rate" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <nav className="z-50 border-y border-dashed border-slate-200 w-full">
        <div className="flex items-center justify-between py-4 px-4 md:px-10 text-sm border-x border-dashed border-slate-200 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <svg
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                stroke="#16a34a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Kabadi Zone
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-green-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={onLoginClick}
              className="hidden md:block px-7 py-2 border border-gray-200 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Login
            </button>
            <Link
              to="/book-service"
              className="hidden md:block px-7 py-2 bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-full text-white"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[99] bg-black/50 md:hidden animate-fadeIn"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] z-[100] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <span className="text-lg font-bold text-slate-800">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center hover:bg-slate-100 active:scale-95 transition-all text-slate-600 rounded-lg"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-green-600 rounded-lg transition-all font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="px-4 mt-6 space-y-3">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onLoginClick();
                }}
                className="w-full px-6 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-medium active:scale-95 transition-all"
              >
                Login
              </button>
              <Link
                to="/book-service"
                onClick={() => setMenuOpen(false)}
                className="block w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-center active:scale-95 transition-all shadow-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
