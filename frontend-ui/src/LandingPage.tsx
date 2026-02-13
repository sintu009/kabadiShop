import React from "react";

import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import FeaturesSection from "./sections/features-section";
import ScrapRatesSection from "./sections/scrap-rates-section";
import TeamSection from "./sections/team-section";
import TestimonialSection from "./sections/testimonial-section";
import CTASection from "./sections/cta-section";
import BookingSection from "./sections/booking-section";
import LenisScroll from "./components/lenis";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <LenisScroll />
      <Banner />
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <HeroSection />
      <BookingSection />
      <ScrapRatesSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialSection />
      <CTASection />
      <Footer />

      {showLogin && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Login
              onClose={() => setShowLogin(false)}
              onSwitchToSignup={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            />
          </div>
        </div>
      )}

      {showSignup && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowSignup(false)}
        >
          <div
            className="animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Signup
              onClose={() => setShowSignup(false)}
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
