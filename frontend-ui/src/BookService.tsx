import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import React from "react";

export default function BookService() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        address: "",
        date: "",
        type: "sell"
    });

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        console.log("Booking submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar onLoginClick={() => {}} />
            
            <div className="max-w-7xl mx-auto px-6 py-12 mt-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Content Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gray-900">Book Your Pickup</h1>
                        <p className="text-lg text-gray-600">Schedule a convenient time for us to collect your scrap materials. Get instant payment and contribute to a greener planet.</p>
                        
                        <div className="space-y-4 mt-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <svg className="size-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Free Doorstep Pickup</h3>
                                    <p className="text-gray-600">We come to your location at your preferred time</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <svg className="size-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Best Market Rates</h3>
                                    <p className="text-gray-600">Get the highest prices for your scrap materials</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <svg className="size-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Instant Payment</h3>
                                    <p className="text-gray-600">Receive payment immediately after verification</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stepper Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        {/* Progress Steps */}
                        <div className="flex items-center justify-between mb-8">
                            {[1, 2, 3, 4].map((s, idx) => (
                                <React.Fragment key={s}>
                                    <div className="flex flex-col items-center">
                                        <div className={`size-12 rounded-full flex items-center justify-center font-semibold transition-all border-2 ${step >= s ? "bg-green-500 text-white border-green-500" : "bg-white text-gray-500 border-gray-300"}`}>
                                            {step > s ? (
                                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : s}
                                        </div>
                                        <span className={`text-xs mt-2 font-medium ${step >= s ? "text-green-600" : "text-gray-400"}`}>
                                            {s === 1 && "Contact"}
                                            {s === 2 && "Address"}
                                            {s === 3 && "Schedule"}
                                            {s === 4 && "Type"}
                                        </span>
                                    </div>
                                    {idx < 3 && (
                                        <div className={`flex-1 h-1 mx-2 rounded transition-all ${step > s ? "bg-green-500" : "bg-gray-200"}`} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Step 1: Mobile */}
                        {step === 1 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                    <input type="tel" value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter mobile number" />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Address */}
                        {step === 2 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900">Pickup Address</h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                    <textarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter complete address" />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Schedule */}
                        {step === 3 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900">Schedule Pickup</h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                                    <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Sell or Donate */}
                        {step === 4 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900">Choose Option</h2>
                                <div className="space-y-3">
                                    <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition">
                                        <input type="radio" name="type" value="sell" checked={formData.type === "sell"} onChange={(e) => setFormData({...formData, type: e.target.value})} className="size-5 text-green-500" />
                                        <span className="ml-3 text-lg font-medium">Sell Scrap</span>
                                    </label>
                                    <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition">
                                        <input type="radio" name="type" value="donate" checked={formData.type === "donate"} onChange={(e) => setFormData({...formData, type: e.target.value})} className="size-5 text-green-500" />
                                        <span className="ml-3 text-lg font-medium">Donate Scrap</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 mt-8">
                            {step > 1 && (
                                <button onClick={handleBack} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium">
                                    Back
                                </button>
                            )}
                            {step < 4 ? (
                                <button onClick={handleNext} className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium">
                                    Next
                                </button>
                            ) : (
                                <button onClick={handleSubmit} className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium">
                                    Submit Booking
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
