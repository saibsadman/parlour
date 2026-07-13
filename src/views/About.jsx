import React from "react";
import { Sparkles, Heart, Leaf, ShieldCheck, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#FAF8F5] py-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-blush-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-96 h-96 bg-sage-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* About Header */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blush-200/50 text-blush-700 rounded-full mb-4">
            <Heart size={12} className="fill-blush-300" />
            <span className="text-[9px] font-semibold uppercase tracking-widest">Our Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 tracking-wide mb-4">
            Done with Love and Care
          </h1>
          <p className="text-xs text-sage-600 max-w-lg mx-auto leading-relaxed font-light uppercase tracking-wider">
            The story behind Saib's Massage Parlour
          </p>
        </section>

        {/* Editorial Quote block */}
        <section className="mb-16 bg-cream-50 border border-cream-200/60 rounded-3xl p-8 md:p-12 shadow-sm text-center relative">
          <div className="absolute top-6 left-6 text-cream-300/40">
            <Quote size={48} className="fill-cream-200" />
          </div>
          
          <blockquote className="font-serif text-lg md:text-xl italic text-sage-700 leading-relaxed max-w-2xl mx-auto relative z-10">
            "We believe that a massage is not a luxury luxury product, but a vital part of self-care. In a world that constant asks for your energy, we have created a sanctuary where you can reclaim it."
          </blockquote>
          
          <div className="w-12 h-[1px] bg-gold-400 mx-auto my-4" />
          <cite className="font-sans font-semibold text-[10px] uppercase tracking-widest text-gold-500 block not-italic">
            Saib, Founder of Saib's Massage Parlour
          </cite>
        </section>

        {/* Core Values grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-8 shadow-sm">
            <div className="w-10 h-10 bg-sage-100 text-sage-600 rounded-xl flex items-center justify-center mb-4">
              <Leaf size={20} className="text-sage-500" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Our Sanctuary</h3>
            <p className="text-xs text-sage-600 leading-relaxed font-light">
              Every detail of our space has been carefully selected to soothe. From soundproof partition walls, low ambient lighting, custom spa acoustics, to the temperature of our massage tables, we strive to construct the perfect relaxation environment.
            </p>
          </div>

          <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-8 shadow-sm">
            <div className="w-10 h-10 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-4">
              <Sparkles size={20} className="text-gold-500" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Therapeutic Touch</h3>
            <p className="text-xs text-sage-600 leading-relaxed font-light">
              Our specialists are licensed massage therapists who undergo continuing training in anatomy, custom draping protocols, and customer care. We listen to your body, adjusting our pressure, tempo, and techniques to your personal comfort.
            </p>
          </div>

          <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-8 shadow-sm">
            <div className="w-10 h-10 bg-blush-200/50 text-blush-600 rounded-xl flex items-center justify-center mb-4">
              <Heart size={20} className="text-blush-500 fill-blush-300" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Organic Quality</h3>
            <p className="text-xs text-sage-600 leading-relaxed font-light">
              We never use cheap chemical gels or paraffin-based oils. All base oils are 100% organic, cold-pressed (sweet almond, jojoba, or coconut), and mixed with therapeutic-grade essential oils, ensuring your skin is nourished and detoxified.
            </p>
          </div>

          <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-8 shadow-sm">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck size={20} className="text-emerald-500" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">Pure Hygiene</h3>
            <p className="text-xs text-sage-600 leading-relaxed font-light">
              Your safety is our absolute priority. We adhere to clinical-level sanitation guidelines. All sheets, towels, and pillowcases are washed at high temperatures after a single use, and tables/treatment stones are fully disinfected between appointments.
            </p>
          </div>

        </section>

        {/* Closing details */}
        <section className="bg-cream-200/30 border border-cream-300/40 rounded-3xl p-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-sage-800 mb-3">We look forward to welcoming you</h3>
          <p className="text-xs text-sage-600 leading-relaxed font-light max-w-xl mx-auto">
            Whether you are visiting for pain relief, post-athletic recovery, prenatal comfort, or simply to turn off the mind, you will receive a customized, professional session done with true love and care.
          </p>
        </section>

      </div>
    </div>
  );
}
