import React, { useState } from "react";
import { 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  Star, 
  CheckCircle, 
  ShieldAlert,
  Flower2,
  Flame,
  Wind,
  Compass,
  Heart,
  Baby,
  Activity,
  User,
  Users,
  Leaf
} from "lucide-react";

const iconMap = {
  Sparkles,
  Flower2,
  Flame,
  Wind,
  Compass,
  Heart,
  Baby,
  Activity,
  User,
  Users,
  ShieldAlert,
  Leaf
};

export default function ServiceDetail({ service, onBack, onBookClick }) {
  const [selectedDuration, setSelectedDuration] = useState(service.pricing[0].duration);
  
  // Find current price based on selected duration
  const currentPrice = service.pricing.find(p => p.duration === selectedDuration)?.price || service.pricing[0].price;

  // Dynamically map icon string to Lucide component
  const SelectedIcon = iconMap[service.icon] || Sparkles;

  // Calculate review score average
  const totalReviews = service.reviews.length;
  const ratingAverage = (service.reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

  return (
    <div className="bg-[#FAF8F5] py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-500 hover:text-sage-800 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={16} className="transform transition-transform group-hover:-translate-x-1" />
          Back to all therapies
        </button>

        {/* Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Reviews */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Header Banner (Aesthetic gradient with icon) */}
            <div className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${service.gradient} border border-cream-200/50 shadow-sm relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-cream-50/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="p-4 bg-cream-50/95 text-sage-600 rounded-2xl shadow-sm border border-cream-200/40">
                  <SelectedIcon size={32} strokeWidth={1.5} className="text-sage-500" />
                </div>
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-sage-800 tracking-wide">
                    {service.name}
                  </h1>
                  <span className="block font-sans text-[10px] font-semibold text-gold-600 uppercase tracking-widest mt-1">
                    Saib's Premium Treatment
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-8 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-sage-800 mb-4">Therapy Description</h2>
              <p className="text-xs text-sage-700 leading-relaxed font-light whitespace-pre-line">
                {service.longDescription}
              </p>
            </div>

            {/* Benefits & What to Expect */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-6 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-sage-800 mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-gold-500" />
                  Key Benefits
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-sage-700 font-light leading-relaxed">
                      <CheckCircle size={14} className="text-sage-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-6 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-sage-800 mb-4 flex items-center gap-2">
                  <ShieldAlert size={16} className="text-sage-500" />
                  What to Expect
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.expectations.map((exp, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-sage-700 font-light leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full shrink-0 mt-2" />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="bg-cream-50 border border-cream-200/60 rounded-3xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cream-200/60 pb-6 mb-8">
                <div>
                  <h2 className="font-serif text-xl font-semibold text-sage-800">Guest Experiences</h2>
                  <p className="text-[10px] text-sage-500 uppercase tracking-widest mt-1">Verified Client Reviews</p>
                </div>
                
                {/* Score Summary */}
                <div className="flex items-center gap-3">
                  <div className="text-center bg-gold-50 border border-gold-200 px-4 py-2 rounded-2xl">
                    <div className="font-serif text-2xl font-bold text-sage-800">{ratingAverage}</div>
                    <div className="text-[9px] text-sage-500 uppercase tracking-wider">Out of 5</div>
                  </div>
                  <div>
                    <div className="flex text-gold-500 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <div className="text-[10px] text-sage-600 font-medium">{totalReviews} customer ratings</div>
                  </div>
                </div>
              </div>

              {/* Review Cards Grid */}
              <div className="flex flex-col gap-6">
                {service.reviews.map((rev, idx) => (
                  <div key={idx} className="border-b border-cream-200/40 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-xs text-sage-800">{rev.author}</span>
                        <div className="flex text-gold-500">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={10} 
                              className={i < rev.rating ? "fill-gold-400 text-gold-400" : "text-cream-300"} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] text-sage-400 font-light">{rev.date}</span>
                    </div>
                    <p className="text-xs text-sage-600 leading-relaxed font-light italic">
                      "{rev.text}"
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Right Column: Pricing & Sticky Booking Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            
            <div className="bg-cream-50 border border-cream-200/80 rounded-3xl p-8 shadow-md">
              <h3 className="font-serif text-lg font-semibold text-sage-800 mb-6">Choose Duration</h3>
              
              {/* Duration Selectors */}
              <div className="flex flex-col gap-3 mb-8">
                {service.pricing.map((tier) => (
                  <div
                    key={tier.duration}
                    onClick={() => setSelectedDuration(tier.duration)}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                      selectedDuration === tier.duration
                        ? "border-sage-500 bg-sage-500/5 text-sage-800"
                        : "border-cream-300 bg-cream-50/50 hover:bg-cream-100/50 hover:border-cream-400 text-sage-600"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Clock size={16} className={selectedDuration === tier.duration ? "text-sage-500 animate-pulse" : "text-sage-400"} />
                      <span className="font-sans font-semibold text-xs uppercase tracking-wider">{tier.duration} Minutes</span>
                    </div>
                    <span className="font-serif font-bold text-base text-sage-800">${tier.price}</span>
                  </div>
                ))}
              </div>

              {/* Total Price overview */}
              <div className="border-t border-cream-200 pt-6 mb-8 flex justify-between items-baseline">
                <span className="text-xs text-sage-500 uppercase tracking-widest">Total Price</span>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-sage-800">${currentPrice}</span>
                  <span className="text-[10px] text-sage-400 block mt-1">all taxes and oils included</span>
                </div>
              </div>

              {/* Booking Button */}
              <button
                onClick={onBookClick}
                className="w-full py-4 bg-sage-500 hover:bg-sage-600 active:bg-sage-700 text-cream-50 font-sans font-semibold text-xs uppercase tracking-widest py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
              >
                Book This Session
              </button>

              {/* Booking promise */}
              <p className="text-[10px] text-center text-sage-500 leading-relaxed mt-4 font-light">
                Secure online reservation placeholder. No charges will be applied. Cancellation is free up to 24 hours prior.
              </p>
            </div>

            {/* Little Parlour Info card */}
            <div className="bg-cream-100/40 border border-cream-200 rounded-3xl p-6 mt-6 flex items-start gap-4">
              <div className="p-2 bg-cream-50 rounded-xl text-gold-500 shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-xs text-sage-800 uppercase tracking-wider mb-1">
                  Nourishing Treatments
                </h4>
                <p className="text-xs text-sage-600 leading-relaxed font-light">
                  Our therapists will consult with you to tailor pressure, aroma, and focus areas to your preferences.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
