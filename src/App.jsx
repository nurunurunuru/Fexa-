import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import LogoStrip from "./components/sections/LogoStrip";
import GlobeSection from "./components/sections/GlobeSection";
import ActionSection from "./components/sections/ActionSection";
import ProblemSection from "./components/sections/ProblemSection";
import ProductsSection from "./components/sections/ProductsSection";
import GrowSection from "./components/sections/GrowSection";
import IntegrationsSection from "./components/sections/IntegrationsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FaqSection from "./components/sections/FaqSection";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white antialiased">
      <style>{`
        @keyframes floaty { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ringPulse { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(1.7); opacity: 0; } }
        @keyframes wave { 0%, 100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
        @keyframes panGrid { 0% { background-position: 0 0; } 100% { background-position: 260px 260px; } }
        @keyframes spinSlow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>
      <Navbar />
      <Hero />
      <LogoStrip />
      <GlobeSection />
      <ActionSection />
      <ProblemSection />
      <ProductsSection />
      <GrowSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
}
