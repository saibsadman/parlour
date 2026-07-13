import React from "react";
import { Sparkles, ChevronRight, HelpCircle, Heart, Shield } from "lucide-react";

export default function Home({ setView, onMaleClick }) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* Decorative ambient blurred shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl ambient-orb pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-gold-100/30 rounded-full blur-3xl ambient-orb pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-sage-200/20 rounded-full blur-3xl ambient-orb pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream-200/50 rounded-full border border-cream-300/40 mb-6 animate-fade-in">
          <Sparkles size={14} className="text-gold-500" />
          <span className="text-[10px] font-semibold text-sage-800 uppercase tracking-widest">Done with love and care</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-sage-800 tracking-tight leading-tight max-w-4xl mx-auto">
          Reconnect with Your Body's <span className="italic text-gold-500 font-normal">Natural Harmony</span>
        </h1>
        
        <p className="text-sm md:text-base text-sage-700 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
          Step into a sanctuary where therapeutic touch meets pure intention. At Saib's, we customize every treatment to your specific needs, using organic botanicals to guide you into a state of deep, nourishing rest.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("gender-cards");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-sage-500 hover:bg-sage-600 active:bg-sage-700 text-cream-50 font-sans font-semibold text-xs uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Explore Services
          </button>
          <button
            onClick={() => setView("about")}
            className="w-full sm:w-auto px-8 py-4 bg-cream-50 hover:bg-cream-200/60 text-sage-800 font-sans font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-200 border border-cream-300/60 cursor-pointer"
          >
            Our Philosophy
          </button>
        </div>
      </section>

      {/* Gender Selection Section */}
      <section id="gender-cards" className="max-w-6xl mx-auto px-6 py-20 relative z-10 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-sage-800 font-bold tracking-wide">
            Select Your Path to Serenity
          </h2>
          <div className="w-20 h-[1.5px] bg-gold-400 mx-auto my-4" />
          <p className="text-xs text-sage-600 max-w-lg mx-auto leading-relaxed uppercase tracking-wider font-medium">
            Choose the therapies tailored to your wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Female Services Card */}
          <div 
            onClick={() => {
              setView("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative bg-gradient-to-tr from-blush-100 to-cream-50 rounded-3xl p-10 border border-blush-200/40 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-96"
          >
            {/* Background pattern */}
            <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-blush-200/20 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blush-200 text-blush-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={22} className="fill-blush-400 text-blush-600" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-sage-800 tracking-wide mb-3">
                Female Services
              </h3>
              <p className="text-xs text-sage-700 leading-relaxed font-light max-w-sm">
                A carefully curated suite of restorative massages and wellness therapies. Designed specifically to soothe, recharge, and align the female body at any stage of life.
              </p>
            </div>
            
            <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-semibold text-sage-800 uppercase tracking-widest">
              <span>View Services</span>
              <ChevronRight size={14} className="transform transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Male Services Card */}
          <div 
            onClick={onMaleClick}
            className="group relative bg-gradient-to-tr from-sage-100 to-cream-50 rounded-3xl p-10 border border-sage-200/40 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-96"
          >
            {/* Background pattern */}
            <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-sage-300/10 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-110" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-sage-200 text-sage-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={22} className="text-sage-600" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-sage-800 tracking-wide mb-3">
                Male Services
              </h3>
              <p className="text-xs text-sage-700 leading-relaxed font-light max-w-sm">
                Tailored treatments addressing tension relief, athletic recovery, and joint mobility. Formulated to soothe the unique stressors of the modern man.
              </p>
            </div>
            
            <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-semibold text-sage-800 uppercase tracking-widest">
              <span>Coming Soon</span>
              <HelpCircle size={14} className="text-sage-400 group-hover:text-sage-600 transition-colors" />
            </div>
          </div>

        </div>
      </section>

      {/* Spa Promise / Philosophy highlight */}
      <section className="bg-cream-200/40 py-20 border-y border-cream-200/60">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-serif italic text-lg text-gold-500 block mb-3">The Saib's Promise</span>
          <h2 className="font-serif text-3xl text-sage-800 font-semibold mb-6">Done with Love & Care</h2>
          <p className="text-xs text-sage-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Every massage in our parlour is more than a routine application of pressure. It is an intentional, meditative session. We source only organic cold-pressed base oils, therapeutic-grade custom essential blends, and freshly laundered linens. Your comfort and serenity are our sacred duty.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-sage-700">100%</div>
              <div className="text-[10px] text-sage-500 uppercase tracking-widest mt-1">Organic Oils</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-sage-700">12+</div>
              <div className="text-[10px] text-sage-500 uppercase tracking-widest mt-1">Therapies</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-sage-700">5★</div>
              <div className="text-[10px] text-sage-500 uppercase tracking-widest mt-1">Guest Reviews</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-sage-700">Safe</div>
              <div className="text-[10px] text-sage-500 uppercase tracking-widest mt-1">Privacy Draping</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
