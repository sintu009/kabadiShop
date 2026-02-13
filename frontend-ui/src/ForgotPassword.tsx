import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface ForgotPasswordProps {
  onClose?: () => void;
}

function ForgotPassword({ onClose }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-[400px] relative">
        {onClose && (
          <button onClick={onClose} className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all active:scale-95">
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Kabadi Zone</span>
            </div>
            <h1 className="text-xl font-semibold text-slate-800">Forgot Password?</h1>
            <p className="text-slate-500 text-xs mt-1">Enter your email to reset password</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="you@example.com" required />
              </div>

              <button type="submit" className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all active:scale-[0.98] shadow-lg shadow-green-500/30">
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-slate-600 mb-4">Reset link sent to your email!</p>
            </div>
          )}

          <p className="text-center text-xs text-slate-600 mt-4">
            Remember password?{" "}
            <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
