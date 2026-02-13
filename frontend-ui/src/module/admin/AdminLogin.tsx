import React from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../../components/Toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setToast({ type: "warning", message: "Please fill in all fields" });
      return;
    }

    if (email === "admin@kabadiShop.com" && password === "admin123") {
      localStorage.setItem("adminToken", "admin-authenticated");
      setToast({
        type: "success",
        message: "Login successful! Redirecting...",
      });
      setTimeout(() => navigate("/admin"), 1500);
    } else {
      setToast({ type: "error", message: "Invalid email or password" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      <div className="w-[400px]">
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
              Admin Portal
            </h1>
            <p className="text-slate-500 text-xs mt-1">
              Sign in to access admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="admin@kabadiShop.com"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {/* <Link
                to="/admin/forgot-password"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot?
              </Link> */}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all active:scale-[0.98] shadow-lg shadow-green-500/30"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
