import React from "react";
import { useState } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from './Login';
import Signup from './Signup';

export default function AboutUs() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Kabadi Zone is a leading scrap collection and recycling service dedicated to making waste management easy, 
            efficient, and rewarding. We connect households and businesses with professional scrap collectors to ensure 
            your recyclables are handled responsibly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To create a sustainable future by making recycling accessible and profitable for everyone. We believe in 
            transforming waste into value while protecting our environment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Best market rates for your scrap materials</li>
            <li>Free doorstep pickup service</li>
            <li>Transparent digital weighing</li>
            <li>Instant payment upon collection</li>
            <li>Eco-friendly waste management</li>
            <li>Trusted by thousands of customers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600 mb-4">
            Integrity, sustainability, and customer satisfaction are at the core of everything we do. We are committed 
            to providing reliable service while contributing to a cleaner, greener planet.
          </p>
        </section>
      </div>
      <Footer />

      {showLogin && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200"
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200"
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
    </div>
  );
}
