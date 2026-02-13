import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const scrapData = {
  Paper: [
    { name: 'Newspaper', rate: '₹15 /kg', icon: '📰', color: 'from-amber-400 to-orange-500' },
    { name: 'Cardboard', rate: '₹10 /kg', icon: '📦', color: 'from-yellow-400 to-amber-500' },
    { name: 'Books/Copies', rate: '₹12 /kg', icon: '📚', color: 'from-blue-400 to-indigo-500' },
    { name: 'Office Paper', rate: '₹14 /kg', icon: '📄', color: 'from-gray-300 to-gray-400' }
  ],
  Plastic: [
    { name: 'PET Bottles', rate: '₹20 /kg', icon: '🍾', color: 'from-cyan-400 to-blue-500' },
    { name: 'Hard Plastic', rate: '₹15 /kg', icon: '🧴', color: 'from-purple-400 to-pink-500' },
    { name: 'Soft Plastic', rate: '₹8 /kg', icon: '🛍️', color: 'from-pink-400 to-rose-500' },
    { name: 'Plastic Containers', rate: '₹12 /kg', icon: '🥡', color: 'from-teal-400 to-cyan-500' }
  ],
  Metal: [
    { name: 'Iron', rate: '₹25 /kg', icon: '⚙️', color: 'from-gray-500 to-gray-700' },
    { name: 'Steel', rate: '₹30 /kg', icon: '🔩', color: 'from-slate-400 to-slate-600' },
    { name: 'Aluminum', rate: '₹80 /kg', icon: '🥫', color: 'from-blue-300 to-blue-400' },
    { name: 'Copper', rate: '₹400 /kg', icon: '🔶', color: 'from-orange-500 to-red-600' },
    { name: 'Brass', rate: '₹300 /kg', icon: '🔔', color: 'from-yellow-600 to-yellow-700' }
  ],
  Electronics: [
    { name: 'Mobile Phones', rate: '₹200 /piece', icon: '📱', color: 'from-indigo-500 to-purple-600' },
    { name: 'Laptops', rate: '₹500 /piece', icon: '💻', color: 'from-gray-600 to-gray-800' },
    { name: 'Cables/Wires', rate: '₹50 /kg', icon: '🔌', color: 'from-green-500 to-emerald-600' },
    { name: 'Chargers', rate: '₹20 /piece', icon: '🔋', color: 'from-lime-500 to-green-600' }
  ],
  'E-Waste': [
    { name: 'Computer Parts', rate: '₹30 /kg', icon: '🖥️', color: 'from-blue-600 to-indigo-700' },
    { name: 'Keyboards', rate: '₹10 /piece', icon: '⌨️', color: 'from-slate-500 to-slate-700' },
    { name: 'Monitors', rate: '₹100 /piece', icon: '🖨️', color: 'from-purple-500 to-purple-700' },
    { name: 'Printers', rate: '₹50 /piece', icon: '🖨️', color: 'from-gray-500 to-gray-700' }
  ],
  Vehicle: [
    { name: 'Car Battery', rate: '₹80 /kg', icon: '🔋', color: 'from-red-500 to-red-700' },
    { name: 'Bike Parts', rate: '₹25 /kg', icon: '🏍️', color: 'from-orange-500 to-orange-700' },
    { name: 'Tires', rate: '₹50 /piece', icon: '🛞', color: 'from-gray-700 to-black' },
    { name: 'Radiators', rate: '₹150 /kg', icon: '🌡️', color: 'from-blue-500 to-blue-700' }
  ]
};

export default function ScrapRates() {
  const [activeTab, setActiveTab] = useState('Paper');
  const tabs = Object.keys(scrapData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={() => {}} />
      
      <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 mt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Current Scrap Rates</h1>
          <p className="text-gray-600 text-center mb-12 text-lg">Check today's rates for different scrap materials</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all border-2 ${
                  activeTab === tab
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-green-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scrapData[activeTab as keyof typeof scrapData].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="p-6 relative">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl border-2 border-gray-100 transform group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">{item.name}</h3>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-600">{item.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
