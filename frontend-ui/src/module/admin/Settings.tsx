import { User, Bell, Lock, Globe } from "lucide-react";

export default function Settings() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

            <div className="grid gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <User size={24} className="text-gray-700" />
                        <h2 className="text-xl font-bold text-gray-900">Profile Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" defaultValue="admin@kabadiShop.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Lock size={24} className="text-gray-700" />
                        <h2 className="text-xl font-bold text-gray-900">Security</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Password</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Bell size={24} className="text-gray-700" />
                        <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                    </div>
                    <div className="space-y-4">
                        <label className="flex items-center justify-between">
                            <span className="text-gray-700">Email Notifications</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-gray-700">Order Updates</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-gray-700">New User Registration</span>
                            <input type="checkbox" className="w-5 h-5 text-blue-600" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
