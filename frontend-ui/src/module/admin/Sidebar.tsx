import { LayoutDashboard, Users, Wallet as WalletIcon, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
        { icon: Users, label: "Scrap Boy", path: "/admin/scrapboy" },
        { icon: WalletIcon, label: "Wallet", path: "/admin/wallet" },
        { icon: Settings, label: "Settings", path: "/admin/settings" },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            
            <nav className="flex-1 p-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                            location.pathname === item.path
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                        }`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-gray-300 hover:bg-gray-800 transition-colors">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
