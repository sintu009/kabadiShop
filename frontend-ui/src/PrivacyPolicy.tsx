import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar onLoginClick={() => {}} />
            
            <div className="max-w-4xl mx-auto px-6 py-12 mt-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                        <p className="text-gray-600">We collect information you provide directly, including name, contact details, and address when you book a pickup service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                        <p className="text-gray-600">Your information is used to process scrap pickup requests, communicate service updates, and improve our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
                        <p className="text-gray-600">We implement industry-standard security measures to protect your personal information from unauthorized access.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                        <p className="text-gray-600">For privacy concerns, contact us at privacy@kabadishop.com</p>
                    </section>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
