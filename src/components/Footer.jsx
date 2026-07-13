import React from "react";
import { Mail, Phone, MapPin, Compass, Heart } from "lucide-react";

export default function Footer({ setView }) {
  const handleNavClick = (view) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sage-900 text-cream-100 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div>
              <span className="font-serif text-3xl font-bold text-cream-50 tracking-wide">
                Saib's
              </span>
              <span className="block font-sans text-[10px] font-semibold text-gold-400 uppercase tracking-widest mt-1">
                Massage Parlour
              </span>
            </div>
            <p className="text-xs text-sage-200/80 leading-relaxed font-light">
              Crafting premium therapeutic experiences designed to restore balance, soothe the senses, and heal the spirit. Done with love and care.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-sage-300 hover:text-gold-400 transition-colors p-2 rounded-full border border-sage-800 hover:border-gold-400 bg-sage-950/20" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-sage-300 hover:text-gold-400 transition-colors p-2 rounded-full border border-sage-800 hover:border-gold-400 bg-sage-950/20" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-sage-300 hover:text-gold-400 transition-colors p-2 rounded-full border border-sage-800 hover:border-gold-400 bg-sage-950/20" aria-label="Tripadvisor">
                <Compass size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-gold-400">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", view: "home" },
                { label: "Services Listing", view: "services" },
                { label: "Our Story", view: "about" },
                { label: "Get In Touch", view: "contact" }
              ].map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className="text-left text-xs text-sage-200 hover:text-gold-400 transition-colors cursor-pointer w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-gold-400">
              Hours of Serenity
            </h4>
            <div className="flex flex-col gap-2 text-xs text-sage-200/90 font-light">
              <div className="flex justify-between border-b border-sage-800/60 pb-1.5">
                <span>Monday — Friday</span>
                <span className="font-medium text-cream-100">09:00 - 21:00</span>
              </div>
              <div className="flex justify-between border-b border-sage-800/60 pb-1.5">
                <span>Saturday</span>
                <span className="font-medium text-cream-100">10:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-gold-400">11:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-gold-400">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs text-sage-200 leading-relaxed font-light">
                  128 Serenity Lane, Wellness District,<br />London, W1K 7QW
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold-400 shrink-0" />
                <span className="text-xs text-sage-200 font-light">+44 (0) 20 7946 0885</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <span className="text-xs text-sage-200 font-light">bookings@saibsmassage.co.uk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-sage-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-sage-300">
          <p>© {new Date().getFullYear()} Saib's Massage Parlour. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="text-gold-400 fill-gold-400" /> & care for your wellness.
          </p>
        </div>

      </div>
    </footer>
  );
}
