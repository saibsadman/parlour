import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Map } from "lucide-react";
import { servicesData } from "../data/servicesData";

export default function Contact({ onInquirySuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      onInquirySuccess("Thank you! Your inquiry has been sent. We will contact you within 2-4 hours to confirm your booking.");
    }, 1000);
  };

  return (
    <div className="bg-[#FAF8F5] py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Contact Header */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-100 text-gold-700 rounded-full mb-4">
            <Mail size={12} />
            <span className="text-[9px] font-semibold uppercase tracking-widest">Connect With Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-sage-800 tracking-wide mb-4">
            Reserve Your Moment of Calm
          </h1>
          <p className="text-xs text-sage-600 max-w-lg mx-auto leading-relaxed font-light">
            Have a question about our treatments or wish to customize a package? Get in touch with our concierge team.
          </p>
        </section>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Map Mockup */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Cards */}
            <div className="bg-cream-50 border border-cream-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
              <h3 className="font-serif text-lg font-semibold text-sage-800 border-b border-cream-200/60 pb-3">
                Concierge Details
              </h3>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-cream-200/50 text-sage-600 rounded-xl">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold uppercase text-gold-500 tracking-wider mb-1">Our Sanctuary</h4>
                  <p className="text-xs text-sage-700 leading-relaxed font-light">
                    128 Serenity Lane, Wellness District,<br />London, W1K 7QW
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-cream-200/50 text-sage-600 rounded-xl">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold uppercase text-gold-500 tracking-wider mb-1">Call Booking</h4>
                  <p className="text-xs text-sage-700 leading-relaxed font-light">
                    +44 (0) 20 7946 0885
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-cream-200/50 text-sage-600 rounded-xl">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold uppercase text-gold-500 tracking-wider mb-1">Email Inquiry</h4>
                  <p className="text-xs text-sage-700 leading-relaxed font-light">
                    bookings@saibsmassage.co.uk
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-cream-200/60 pt-6">
                <div className="p-2.5 bg-cream-200/50 text-sage-600 rounded-xl">
                  <Clock size={18} />
                </div>
                <div className="w-full">
                  <h4 className="text-[10px] font-semibold uppercase text-gold-500 tracking-wider mb-1">Serenity Hours</h4>
                  <div className="text-xs text-sage-700 font-light flex justify-between w-full mt-1.5">
                    <span>Mon — Fri:</span>
                    <span className="font-medium text-sage-800">09:00 - 21:00</span>
                  </div>
                  <div className="text-xs text-sage-700 font-light flex justify-between w-full mt-1">
                    <span>Saturday:</span>
                    <span className="font-medium text-sage-800">10:00 - 20:00</span>
                  </div>
                  <div className="text-xs text-sage-700 font-light flex justify-between w-full mt-1">
                    <span>Sunday:</span>
                    <span className="font-medium text-sage-800">11:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic Map Mockup */}
            <div className="bg-cream-50 border border-cream-200 rounded-3xl p-6 shadow-sm relative overflow-hidden h-64 flex flex-col justify-between">
              {/* Abstract Map Design via CSS */}
              <div className="absolute inset-0 bg-[#E8E2D8] opacity-60 flex flex-col justify-between pointer-events-none">
                {/* Simulated Roads/Grid lines */}
                <div className="w-full h-[2px] bg-cream-100 absolute top-1/4" />
                <div className="w-full h-[2px] bg-cream-100 absolute top-2/3" />
                <div className="h-full w-[2px] bg-cream-100 absolute left-1/3" />
                <div className="h-full w-[2px] bg-cream-100 absolute left-2/3" />
                
                {/* Simulated park/greenery */}
                <div className="absolute top-8 left-16 w-20 h-16 bg-sage-200/40 rounded-full blur-sm" />
                <div className="absolute bottom-6 right-8 w-28 h-20 bg-sage-200/40 rounded-full blur-sm" />
              </div>

              {/* Map Pointer Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-8 h-8 bg-sage-500 rounded-full shadow-lg border-2 border-cream-50 flex items-center justify-center animate-bounce">
                  <MapPin size={16} className="text-cream-50" />
                </div>
                <span className="bg-sage-900 text-cream-50 text-[8px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow mt-1 whitespace-nowrap">
                  Saib's Spa
                </span>
              </div>

              {/* Card Title Layer */}
              <div className="relative z-10 flex justify-between items-center bg-cream-50/90 border border-cream-200 p-3.5 rounded-2xl w-full mt-auto">
                <div>
                  <span className="text-[9px] font-bold text-gold-500 uppercase tracking-widest">Our Location</span>
                  <span className="block text-xs font-serif text-sage-800 font-semibold mt-0.5">Wellness District, London</span>
                </div>
                <div className="p-2 bg-sage-500 text-cream-50 rounded-xl">
                  <Map size={16} />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-cream-50 border border-cream-200 rounded-3xl p-8 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-sage-800 mb-6">
              Treatment Inquiry Form
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-sage-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 text-xs focus:outline-none focus:border-sage-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-sage-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +44 7911 123456"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 text-xs focus:outline-none focus:border-sage-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-sage-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 text-xs focus:outline-none focus:border-sage-500 transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-wider text-sage-600">
                  Preferred Treatment
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 text-xs focus:outline-none focus:border-sage-500 transition-colors cursor-pointer"
                >
                  <option value="">-- Select a treatment (Optional) --</option>
                  {servicesData.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>

              {/* Message / Special Requests */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-sage-600">
                  Message / Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about any specific tension points, preferences, or preferred booking dates/times..."
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 text-xs focus:outline-none focus:border-sage-500 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 bg-sage-500 hover:bg-sage-600 active:bg-sage-700 text-cream-50 font-sans font-semibold text-xs uppercase tracking-widest py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send size={12} className="text-gold-200" />
                {submitting ? "Sending Inquiry..." : "Submit Inquiry"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
