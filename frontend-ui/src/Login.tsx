import React from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";

interface LoginProps {
  onClose?: () => void;
  onSwitchToSignup?: () => void;
}

function Login({ onClose, onSwitchToSignup }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-[400px] relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 aspect-[3/4] flex flex-col justify-center">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg
                className="size-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                  stroke="#16a34a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Kabadi Zone
              </span>
            </div>
            <h1 className="text-xl font-semibold text-slate-800">
              Welcome Back
            </h1>
            <p className="text-slate-500 text-xs mt-1">Sign in to continue</p>
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => handleSocialLogin("google")}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 hover:bg-slate-50 rounded-lg transition text-xs"
            >
              <FcGoogle className="w-4 h-4" />
              <span className="text-slate-700 font-medium">Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin("facebook")}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 hover:bg-slate-50 rounded-lg transition text-xs"
            >
              <FaFacebook className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700 font-medium">Facebook</span>
            </button>
          </div>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-slate-500">Or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 rounded border-slate-300 text-green-600 focus:ring-green-500"
                />
                <span className="text-slate-600">Remember</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Forgot?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all active:scale-[0.98] shadow-lg shadow-green-500/30"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-slate-600 mt-4">
            Don't have an account?{" "}
            {onSwitchToSignup ? (
              <button
                onClick={onSwitchToSignup}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Sign up
              </button>
            ) : (
              <Link
                to="/signup"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Sign up
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
