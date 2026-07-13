import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", view: "home" },
    { label: "Services", view: "services" },
    { label: "About Us", view: "about" },
    { label: "Contact", view: "contact" }
  ];

  const handleNavClick = (view) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-glass transition-all duration-300 shadow-sm border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <div 
          onClick={() => handleNavClick("home")} 
          className="flex flex-col cursor-pointer group"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-2xl font-bold text-sage-800 tracking-wide transition-colors group-hover:text-sage-600">
              Saib's
            </span>
            <span className="font-sans text-[10px] font-semibold text-gold-500 uppercase tracking-widest bg-gold-100/50 px-2 py-0.5 rounded-full mt-1">
              Massage Parlour
            </span>
          </div>
          <span className="font-serif italic text-xs text-sage-500 font-light mt-0.5 tracking-wider">
            done with love & care
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`relative py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                currentView === link.view 
                  ? "text-sage-800" 
                  : "text-sage-500 hover:text-sage-800"
              }`}
            >
              {link.label}
              {currentView === link.view && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Booking CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick("services")}
            className="flex items-center gap-2 bg-sage-500 hover:bg-sage-600 active:bg-sage-700 text-cream-50 font-sans font-semibold text-[10px] uppercase tracking-widest px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Sparkles size={12} className="text-gold-200" />
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sage-700 hover:text-sage-900 transition-colors p-2 rounded-full hover:bg-cream-200/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-cream-200 bg-cream-50/98 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`py-2 text-left text-xs font-semibold uppercase tracking-widest border-b border-cream-200/50 pb-2 ${
                  currentView === link.view 
                    ? "text-sage-800 font-bold" 
                    : "text-sage-500"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("services")}
              className="w-full text-center bg-sage-500 text-cream-50 font-sans font-semibold text-[10px] uppercase tracking-widest py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles size={12} className="text-gold-200" />
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
