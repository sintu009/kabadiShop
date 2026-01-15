import { Leaf, TrendingUp, Clock } from 'lucide-react';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Waste into <span className="text-green-600">Worth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sell your recyclable materials at the best prices. We collect from your doorstep and pay you instantly.
          </p>
          <button
            onClick={() => document.getElementById('prices').scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Check Today's Prices
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">Get competitive rates for all recyclable materials</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Pickup</h3>
            <p className="text-gray-600 text-sm">Schedule pickup at your convenience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
            <p className="text-gray-600 text-sm">Contribute to a sustainable environment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
