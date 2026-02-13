import React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={() => {}} />

      <div className="max-w-4xl mx-auto px-6 py-12 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Service Availability
            </h2>
            <p className="text-gray-600">
              KabadiShop services are subject to availability in your area. We
              reserve the right to modify or discontinue services without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Pricing
            </h2>
            <p className="text-gray-600">
              Scrap rates displayed are indicative and may vary based on
              material quality, quantity, and market conditions at the time of
              pickup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Liability
            </h2>
            <p className="text-gray-600">
              KabadiShop is not liable for any indirect or consequential damages
              arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Third-Party Links
            </h2>
            <p className="text-gray-600">
              Our platform may contain links to third-party websites. We are not
              responsible for their content or privacy practices.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
