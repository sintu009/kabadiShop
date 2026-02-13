import { X } from "lucide-react";

interface SignupProps {
    onClose: () => void;
    onSwitchToLogin: () => void;
}

export default function Signup({ onClose, onSwitchToLogin }: SignupProps) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        };
        
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Account created successfully!');
                onSwitchToLogin();
            } else {
                alert(result.message || 'Signup failed');
            }
        } catch (error) {
            alert('Error connecting to server');
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto max-h-[95vh] overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 relative my-4">
                <button onClick={onClose} className="sticky top-2 float-right mr-2 mt-2 bg-white rounded-full p-2 shadow-lg border border-slate-200 hover:bg-red-50 hover:border-red-300 transition group z-10">
                    <X className="size-5 text-slate-600 group-hover:text-red-600" />
                </button>
                
                <div className="p-4 sm:p-6 md:p-8 clear-both">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <svg className="size-8 sm:size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Kabadi Zone</h1>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 text-center mb-2">Create Account</h2>
                    <p className="text-sm sm:text-base text-slate-600 text-center mb-6">Sign up to start selling scrap</p>

                    <div className="space-y-2 sm:space-y-3 mb-6">
                        <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition text-sm sm:text-base">
                            <svg className="size-4 sm:size-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                            <span className="text-slate-700 font-medium">Continue with Google</span>
                        </button>
                        
                        <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition text-sm sm:text-base">
                            <svg className="size-4 sm:size-5" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            <span className="text-slate-700 font-medium">Continue with Facebook</span>
                        </button>
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-300"></div>
                        </div>
                        <div className="relative flex justify-center text-xs sm:text-sm">
                            <span className="px-2 bg-white text-slate-500">Or continue with email</span>
                        </div>
                    </div>

                    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Full Name</label>
                            <input name="name" type="text" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Email</label>
                            <input name="email" type="email" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="you@example.com" />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Phone Number</label>
                            <input name="phone" type="tel" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="+91 98765 43210" />
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Password</label>
                            <input name="password" type="password" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="••••••••" />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Confirm Password</label>
                            <input name="confirmPassword" type="password" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="••••••••" />
                        </div>

                        <div className="flex items-start">
                            <input type="checkbox" required className="rounded border-slate-300 text-green-600 focus:ring-green-500 mt-1" />
                            <span className="ml-2 text-xs sm:text-sm text-slate-600">I agree to the <button type="button" className="text-green-600 hover:text-green-700">Terms of Service</button> and <button type="button" className="text-green-600 hover:text-green-700">Privacy Policy</button></span>
                        </div>

                        <button type="submit" className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-slate-600 text-xs sm:text-sm mt-4 sm:mt-6">
                        Already have an account? <button onClick={onSwitchToLogin} className="text-green-600 hover:text-green-700 font-medium">Sign in</button>
                    </p>
                </div>
            </div>
        </div>
    );
}
