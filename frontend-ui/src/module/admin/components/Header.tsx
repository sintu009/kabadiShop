import React, { useState } from "react";
import {
  HiMenu,
  HiSearch,
  HiBell,
  HiViewGrid,
  HiChevronDown,
  HiUser,
  HiCog,
  HiLogout,
} from "react-icons/hi";

export default function Header({
  onMenuClick = () => {},
  isCollapsed = false,
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header
      className="h-16 bg-white border-b border-gray-200 w-full z-30"
    >
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        {/* Left Section - Mobile Menu & Search */}
        <div className="flex items-center gap-4 flex-1">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <HiMenu className="text-xl text-gray-700" />
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 w-full max-w-md">
            <HiSearch className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile Search Icon */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <HiSearch className="text-xl text-gray-700" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors relative cursor-pointer"
            >
              <HiBell className="text-xl text-gray-700" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50"
                    >
                      <p className="text-sm font-medium text-gray-900">
                        New trip assigned
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Trip #TR-{1000 + i} has been assigned to you
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {i} hours ago
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <HiViewGrid className="text-xl text-gray-700" />
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 md:gap-3 hover:bg-gray-100 rounded-lg px-2 md:px-3 py-2 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">JD</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <HiChevronDown className="text-gray-500 hidden md:block" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                >
                  <HiUser />
                  <span>Profile</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                >
                  <HiCog />
                  <span>Settings</span>
                </a>
                <div className="border-t border-gray-100 my-2"></div>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-red-600 text-sm"
                >
                  <HiLogout />
                  <span>Logout</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
