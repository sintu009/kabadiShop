import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toast, setToast] = useState<{ type: "success" | "error" | "warning"; message: string } | null>(null);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !password) {
            setToast({ type: "warning", message: "Please fill in all fields" });
            return;
        }

        if (email === "admin@kabadiShop.com" && password === "admin123") {
            localStorage.setItem("adminToken", "admin-authenticated");
            setToast({ type: "success", message: "Login successful! Redirecting..." });
            setTimeout(() => navigate("/admin"), 1500);
        } else {
            setToast({ type: "error", message: "Invalid email or password" });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
            <div className="w-full max-w-xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 relative my-4">
                    <div className="p-4 sm:p-6 md:p-8">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <svg className="size-8 sm:size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Admin Portal</h1>
                        </div>
                        
                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 text-center mb-2">Welcome Back</h2>
                        <p className="text-sm sm:text-base text-slate-600 text-center mb-6">Sign in to access admin panel</p>

                        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="admin@kabadiShop.com"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex items-center justify-between text-xs sm:text-sm">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="ml-2 text-slate-600">Remember me</span>
                                </label>
                                <button type="button" className="text-blue-600 hover:text-blue-700">Forgot password?</button>
                            </div>

                            <button type="submit" className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
