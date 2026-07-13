import React from "react";
import { 
  Clock, 
  ChevronRight, 
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
  Leaf,
  Gem
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
  Leaf,
  Gem
};

export default function ServiceCard({ service, onViewDetails }) {
  // Dynamically map icon string to Lucide component
  const SelectedIcon = iconMap[service.icon] || Sparkles;

  // Find lowest price
  const startingPrice = service.pricing[0].price;
  const startingDuration = service.pricing[0].duration;

  return (
    <div className="bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      
      {/* Photo Header */}
      <div className="h-52 relative overflow-hidden">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
            <div className="p-5 bg-cream-100/90 rounded-3xl shadow-sm border border-cream-200/40">
              <SelectedIcon size={36} strokeWidth={1.5} className="text-sage-500" />
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Icon badge */}
        <div className="absolute bottom-3 left-3 p-2.5 bg-cream-50/90 backdrop-blur-sm rounded-2xl shadow-md border border-cream-200/40 transition-transform duration-500 group-hover:rotate-6">
          <SelectedIcon size={20} strokeWidth={1.5} className="text-sage-500" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-serif text-xl font-semibold text-sage-800 tracking-wide mb-2.5 group-hover:text-sage-600 transition-colors">
            {service.name}
          </h3>
          
          {/* Short description */}
          <p className="text-xs text-sage-700 leading-relaxed font-light mb-6">
            {service.shortDescription}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div>
          <div className="flex items-center justify-between border-t border-cream-200/60 pt-4 mb-4">
            <div className="flex items-center gap-1.5 text-sage-500">
              <Clock size={14} />
              <span className="text-xs font-medium">{startingDuration} mins</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-sage-500 uppercase tracking-widest block">From</span>
              <span className="font-serif text-lg font-bold text-sage-800">৳{startingPrice}</span>
            </div>
          </div>

          <button
            onClick={() => onViewDetails(service)}
            className="w-full py-3 bg-cream-200/50 hover:bg-sage-500 text-sage-800 hover:text-cream-50 font-sans font-semibold text-[10px] uppercase tracking-widest rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-cream-300/40 hover:border-sage-500"
          >
            View Details
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
