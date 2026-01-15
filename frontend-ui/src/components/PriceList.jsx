import { useState } from 'react';
import { Zap } from 'lucide-react';
import BookingForm from './BookingForm';

const materials = [
  { id: 1, name: 'Iron', price: 28, unit: 'kg', icon: '🔩' },
  { id: 2, name: 'Steel', price: 32, unit: 'kg', icon: '⚙️' },
  { id: 3, name: 'Copper', price: 425, unit: 'kg', icon: '🔶' },
  { id: 4, name: 'Brass', price: 320, unit: 'kg', icon: '🔔' },
  { id: 5, name: 'Aluminum', price: 95, unit: 'kg', icon: '⚡' },
  { id: 6, name: 'Newspaper', price: 14, unit: 'kg', icon: '📰' },
  { id: 7, name: 'Cardboard', price: 9, unit: 'kg', icon: '📦' },
  { id: 8, name: 'Books/Paper', price: 12, unit: 'kg', icon: '📚' },
  { id: 9, name: 'Plastic (PET)', price: 8, unit: 'kg', icon: '♻️' },
  { id: 10, name: 'Plastic (Hard)', price: 6, unit: 'kg', icon: '🧴' },
  { id: 11, name: 'E-Waste', price: 18, unit: 'kg', icon: '💻' },
  { id: 12, name: 'Glass Bottles', price: 2, unit: 'kg', icon: '🍾' },
];

function PriceList() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
    setShowBookingForm(true);
  };

  const handleCloseForm = () => {
    setShowBookingForm(false);
    setSelectedMaterial(null);
  };

  return (
    <>
      <section id="prices" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Live Prices - Updated Daily</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Today's Scrap Rates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any material to schedule a pickup at your location
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => handleMaterialClick(material)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all group text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{material.icon}</span>
                  <div className="bg-green-50 group-hover:bg-green-100 px-3 py-1 rounded-full transition-colors">
                    <span className="text-xs text-green-700 font-semibold">/{material.unit}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-green-600">₹{material.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {showBookingForm && (
        <BookingForm
          material={selectedMaterial}
          onClose={handleCloseForm}
        />
      )}
    </>
  );
}

export default PriceList;
