import { PhoneCall, Calendar, Truck, Banknote } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: 'Check Prices',
      description: 'Browse current rates for various recyclable materials',
    },
    {
      icon: Calendar,
      title: 'Schedule Pickup',
      description: 'Fill the form with your details and preferred time',
    },
    {
      icon: Truck,
      title: 'We Collect',
      description: 'Our team arrives at your doorstep to collect materials',
    },
    {
      icon: Banknote,
      title: 'Get Paid',
      description: 'Receive instant payment for your recyclables',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple and hassle-free process to sell your scrap
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-green-200 -z-10 hidden md:block"
                       style={{ display: index === 3 ? 'none' : 'block' }} />
                  <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
