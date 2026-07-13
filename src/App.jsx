import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import ComingSoonModal from "./components/ComingSoonModal";

// Views
import Home from "./views/Home";
import Services from "./views/Services";
import ServiceDetail from "./views/ServiceDetail";
import About from "./views/About";
import Contact from "./views/Contact";

export default function App() {
  const [currentView, setView] = useState("home");
  const [selectedService, setSelectedService] = useState(null);
  
  // Modal & Toast States
  const [isMaleModalOpen, setIsMaleModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Trigger custom toast notification
  const triggerToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleMaleClick = () => {
    setIsMaleModalOpen(true);
  };

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setView("service-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookSession = () => {
    triggerToast("Thank you for your interest! Online bookings are coming soon. Please contact us via phone or the inquiry form to reserve your treatment.");
  };

  // View Router
  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home setView={setView} onMaleClick={handleMaleClick} />;
      case "services":
        return <Services onViewDetails={handleViewDetails} />;
      case "service-detail":
        if (!selectedService) {
          setView("services");
          return null;
        }
        return (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setView("services")} 
            onBookClick={handleBookSession}
          />
        );
      case "about":
        return <About />;
      case "contact":
        return <Contact onInquirySuccess={triggerToast} />;
      default:
        return <Home setView={setView} onMaleClick={handleMaleClick} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#FAF8F5]">
      
      {/* Navigation Header */}
      <Navbar currentView={currentView} setView={setView} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer setView={setView} />

      {/* Booking Coming Soon Modal for Men */}
      <ComingSoonModal 
        isOpen={isMaleModalOpen} 
        onClose={() => setIsMaleModalOpen(false)} 
        onNotifySuccess={triggerToast}
      />

      {/* Global Notifications */}
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />

    </div>
  );
}
