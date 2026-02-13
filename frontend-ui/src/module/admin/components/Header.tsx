import { Bell, Search, User, Menu } from "lucide-react";

interface HeaderProps {
    setSidebarOpen: (open: boolean) => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
    return (
        <header className="bg-white border-b border-gray-200 h-16 fixed top-0 right-0 lg:left-64 left-0 z-10 flex items-center justify-between px-4 md:px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Menu size={24} className="text-gray-600" />
            </button>
            
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Bell size={20} className="text-gray-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="hidden md:flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User size={18} className="text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
