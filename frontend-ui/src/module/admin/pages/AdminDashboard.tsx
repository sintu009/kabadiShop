import { Users, Package, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { icon: Users, label: "Total Users", value: "1,234", change: "+12%", color: "bg-blue-500" },
        { icon: Package, label: "Total Orders", value: "856", change: "+8%", color: "bg-green-500" },
        { icon: DollarSign, label: "Revenue", value: "₹45,678", change: "+23%", color: "bg-purple-500" },
        { icon: TrendingUp, label: "Growth", value: "18%", change: "+5%", color: "bg-orange-500" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.color} p-3 rounded-lg`}>
                                <stat.icon size={24} className="text-white" />
                            </div>
                            <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                        </div>
                        <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                <div>
                                    <p className="font-medium text-gray-900">Order #{1000 + i}</p>
                                    <p className="text-sm text-gray-500">Customer Name</p>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Completed</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Users</h2>
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                                    U{i}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">User {i}</p>
                                    <p className="text-sm text-gray-500">user{i}@example.com</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
