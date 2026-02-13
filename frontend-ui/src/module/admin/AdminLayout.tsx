import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Header setSidebarOpen={setSidebarOpen} />
            <main className="lg:ml-64 mt-16 p-4 md:p-6">
                <Outlet />
            </main>
        </div>
    );
}
