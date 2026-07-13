import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../data/servicesData";
import { Leaf, Sparkles, Filter } from "lucide-react";

export default function Services({ onViewDetails }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Therapies" },
    { id: "relaxation", label: "Relaxation" },
    { id: "therapeutic", label: "Therapeutic" },
    { id: "specialty", label: "Specialty" }
  ];

  // Helper mapping services to categories
  const getCategory = (serviceId) => {
    switch (serviceId) {
      case "swedish-massage":
      case "aromatherapy-massage":
      case "full-body-relaxation-massage":
      case "couples-massage":
        return "relaxation";
      case "deep-tissue-massage":
      case "hot-stone-massage":
      case "sports-massage":
      case "bamboo-massage":
        return "therapeutic";
      case "thai-massage":
      case "prenatal-massage":
      case "reflexology-massage":
      case "head-shoulder-massage":
        return "specialty";
      default:
        return "relaxation";
    }
  };

  const filteredServices = servicesData.filter(service => {
    if (activeCategory === "all") return true;
    return getCategory(service.id) === activeCategory;
  });

  return (
    <div className="py-12 bg-[#FAF8F5]">
      
      {/* Services Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-100 text-sage-700 rounded-full mb-4">
          <Leaf size={12} />
          <span className="text-[9px] font-semibold uppercase tracking-widest">Nurturing Experiences</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 tracking-wide mb-4">
          Our Female Massage Services
        </h1>
        <p className="text-xs text-sage-600 max-w-xl mx-auto leading-relaxed font-light">
          From light relaxation strokes to deep muscular release, explore our premium range of therapies crafted specifically to restore harmony to your mind, body, and spirit.
        </p>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-5xl mx-auto px-6 mb-12 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4 md:hidden text-xs text-sage-500 font-medium">
          <Filter size={12} /> Filter by type
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-cream-200/50 rounded-2xl border border-cream-300/40 w-fit max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-sage-500 text-cream-50 shadow-sm"
                  : "text-sage-600 hover:text-sage-800 hover:bg-cream-200/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="animate-fade-in">
                <ServiceCard 
                  service={service} 
                  onViewDetails={onViewDetails} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-cream-50 rounded-3xl border border-cream-200/50 max-w-md mx-auto">
            <Sparkles className="mx-auto text-gold-400 mb-3" size={24} />
            <p className="text-sm font-medium text-sage-800 font-serif">No treatments found</p>
            <p className="text-xs text-sage-500 mt-1 font-light">Please try clearing your filter.</p>
          </div>
        )}
      </section>
      
    </div>
  );
}
