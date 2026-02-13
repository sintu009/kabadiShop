import React from "react";
import { useState } from 'react';

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

export default function ScrapRatesSection() {
  const [activeTab, setActiveTab] = useState('Paper');

  return (
    <section id="scrap-rates" className="py-16 px-4 md:px-8 bg-white">
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
                  <div className="text-center">
                    <span className="text-lg font-bold text-green-600 block">
                      {item.rate.split("/")[0]}
                    </span>
                    <span className="text-gray-500 text-xs">
                      /{item.rate.split("/")[1]}
                    </span>
                  </div>
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
  );
}
