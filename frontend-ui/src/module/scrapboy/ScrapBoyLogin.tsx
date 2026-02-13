import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScrapBoyLogin() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("scrapboyToken", "dummy-token");
        navigate("/scrapboy");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
                <div className="text-center mb-8">
                    <div className="size-16 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        SB
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Scrap Boy Login</h1>
                    <p className="text-gray-500 text-sm mt-2">Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-lg text-white font-semibold"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
