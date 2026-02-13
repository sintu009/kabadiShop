import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function AdminLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isSidebarOpen}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onMobileClose={() => setIsSidebarOpen(false)}
      />
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          isCollapsed={isSidebarCollapsed}
        />
        <main className=" p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
