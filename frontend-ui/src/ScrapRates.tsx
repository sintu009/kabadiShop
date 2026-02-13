import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./Login";
import Signup from "./Signup";

function ScrapRates() {
  const [activeTab, setActiveTab] = useState("Paper");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const categories = [
    { name: "Paper", icon: "📄" },
    { name: "Plastic", icon: "♻️" },
    { name: "Metal", icon: "🔩" },
    { name: "Electronics", icon: "💻" },
    { name: "E-Waste", icon: "🗑️" },
    { name: "Vehicle", icon: "🚗" },
  ];

  const rates = {
    Paper: [
      { item: "Newspaper", rate: "₹15/kg", image: "📰" },
      { item: "Cardboard", rate: "₹12/kg", image: "📦" },
      { item: "Books", rate: "₹10/kg", image: "📚" },
      { item: "Office Paper", rate: "₹14/kg", image: "📄" },
    ],
    Plastic: [
      { item: "PET Bottles", rate: "₹20/kg", image: "🍾" },
      { item: "Plastic Containers", rate: "₹15/kg", image: "🥤" },
      { item: "Plastic Bags", rate: "₹8/kg", image: "🛍️" },
    ],
    Metal: [
      { item: "Iron", rate: "₹30/kg", image: "⚙️" },
      { item: "Aluminum", rate: "₹100/kg", image: "🥫" },
      { item: "Copper", rate: "₹400/kg", image: "🔶" },
      { item: "Brass", rate: "₹300/kg", image: "🔸" },
    ],
    Electronics: [
      { item: "Mobile Phones", rate: "₹200/piece", image: "📱" },
      { item: "Laptops", rate: "₹500/piece", image: "💻" },
      { item: "Tablets", rate: "₹300/piece", image: "📲" },
    ],
    "E-Waste": [
      { item: "Computer Parts", rate: "₹50/kg", image: "🖥️" },
      { item: "Cables & Wires", rate: "₹30/kg", image: "🔌" },
      { item: "Keyboards", rate: "₹20/piece", image: "⌨️" },
    ],
    Vehicle: [
      { item: "Car Battery", rate: "₹150/piece", image: "🔋" },
      { item: "Vehicle Parts", rate: "Contact for quote", image: "🚗" },
      { item: "Tires", rate: "₹50/piece", image: "🛞" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scrap Rates
            </h2>
            <p className="text-gray-600 text-lg">
              Get the best prices for your Scrap
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 border-2 ${
                  activeTab === category.name
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-3xl mr-3">
                {categories.find((c) => c.name === activeTab)?.icon}
              </span>
              {activeTab} Rates
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {rates[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform mx-auto mb-3">
                      {item.image}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                      {item.item}
                    </h4>
                    <div className="text-center mb-3">
                      <span className="text-lg font-bold text-green-600 block">
                        {item.rate.split("/")[0]}
                      </span>
                      <span className="text-gray-500 text-xs">
                        /{item.rate.split("/")[1]}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowLogin(true)}
                      className="w-full flex items-center justify-center gap-2 rounded-lg py-2 bg-green-500 hover:bg-green-600 transition text-white text-xs font-semibold"
                    >
                      <span>Book Now</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-3.5"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              * Rates may vary based on quality and quantity
            </p>
          </div>
        </div>
      </section>
      
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

export default ScrapRates;
