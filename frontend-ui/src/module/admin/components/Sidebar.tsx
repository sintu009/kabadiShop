import { LayoutDashboard, Users, Wallet as WalletIcon, Settings, LogOut, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
        { icon: Users, label: "Scrap Boy", path: "/admin/scrapboy" },
        { icon: WalletIcon, label: "Wallet", path: "/admin/wallet" },
        { icon: Settings, label: "Settings", path: "/admin/settings" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
    };

    return (
        <>
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}
            <aside className={`w-64 bg-[#183132] text-white h-screen fixed left-0 top-0 flex flex-col z-50 transition-transform lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="p-6 border-b border-[#2a4a4b] flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                        <X size={24} />
                    </button>
                </div>
            
            <nav className="flex-1 p-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                            location.pathname === item.path
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-[#2a4a4b]"
                        }`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-[#2a4a4b]">
                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-gray-300 hover:bg-[#2a4a4b] transition-colors">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
            </aside>
        </>
    );
}
