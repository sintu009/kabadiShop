import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderPeriod, setOrderPeriod] = useState("day");
  const [trendPeriod, setTrendPeriod] = useState("month");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      label: "Total order Today",
      value: "48",
      change: "+12%",
    },
    {
      label: "Pending Pickups",
      value: "24",
      change: "+8%",
    },
    {
      label: "Completed Pickups",
      value: "169",
      change: "+5%",
    },
    {
      label: "Scrap collected",
      value: "12",
      change: "+2%",
    },
  ];

  const lineDataMonth = [
    { label: "Jan", value: 120 },
    { label: "Feb", value: 150 },
    { label: "Mar", value: 180 },
    { label: "Apr", value: 160 },
    { label: "May", value: 200 },
    { label: "Jun", value: 220 },
    { label: "Jul", value: 250 },
  ];

  const lineDataWeek = [
    { label: "Mon", value: 45 },
    { label: "Tue", value: 52 },
    { label: "Wed", value: 48 },
    { label: "Thu", value: 61 },
    { label: "Fri", value: 55 },
    { label: "Sat", value: 38 },
    { label: "Sun", value: 32 },
  ];

  const lineDataDay = [
    { label: "6AM", value: 10 },
    { label: "9AM", value: 25 },
    { label: "12PM", value: 35 },
    { label: "3PM", value: 30 },
    { label: "6PM", value: 20 },
    { label: "9PM", value: 15 },
  ];

  const lineData =
    trendPeriod === "month"
      ? lineDataMonth
      : trendPeriod === "week"
        ? lineDataWeek
        : lineDataDay;

  const livePickupOrders = [
    {
      orderId: "ORD001",
      userName: "Rajesh Kumar",
      scrapType: "Paper",
      estWeight: "25 kg",
      pickupTime: "10:30 AM",
      status: "Pending",
    },
    {
      orderId: "ORD002",
      userName: "Priya Sharma",
      scrapType: "Plastic",
      estWeight: "15 kg",
      pickupTime: "11:00 AM",
      status: "Assigned",
    },
    {
      orderId: "ORD003",
      userName: "Amit Patel",
      scrapType: "Metal",
      estWeight: "40 kg",
      pickupTime: "12:00 PM",
      status: "Pending",
    },
    {
      orderId: "ORD004",
      userName: "Sneha Reddy",
      scrapType: "E-Waste",
      estWeight: "10 kg",
      pickupTime: "2:30 PM",
      status: "Assigned",
    },
    {
      orderId: "ORD005",
      userName: "Vikram Singh",
      scrapType: "Paper",
      estWeight: "30 kg",
      pickupTime: "3:00 PM",
      status: "Pending",
    },
  ];

  const filteredOrders = livePickupOrders.filter(
    (order) =>
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.scrapType.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isLoading ? (
                <>
                  <div className="bg-gray-200 animate-pulse h-32 rounded-lg"></div>
                  <div className="bg-gray-200 animate-pulse h-32 rounded-lg"></div>
                  <div className="bg-gray-200 animate-pulse h-32 rounded-lg"></div>
                  <div className="bg-gray-200 animate-pulse h-32 rounded-lg"></div>
                </>
              ) : (
                stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.value}
                    </h3>
                  </div>
                ))
              )}
            </div>

            {/* Line Chart and Donut Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Line Chart - 8 columns */}
              <div className="lg:col-span-8 bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Pickup Orders Trends
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTrendPeriod("day")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        trendPeriod === "day"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Day
                    </button>
                    <button
                      onClick={() => setTrendPeriod("week")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        trendPeriod === "week"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Week
                    </button>
                    <button
                      onClick={() => setTrendPeriod("month")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        trendPeriod === "month"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Month
                    </button>
                  </div>
                </div>
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 750 280">
                    {/* Y-axis label */}
                    <text
                      x="10"
                      y="140"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#6b7280"
                      fontWeight="600"
                      transform="rotate(-90 10 140)"
                    >
                      Orders
                    </text>
                    {/* X-axis label */}
                    <text
                      x="400"
                      y="275"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#6b7280"
                      fontWeight="600"
                    >
                      {trendPeriod === "month"
                        ? "Months"
                        : trendPeriod === "week"
                          ? "Days"
                          : "Time"}
                    </text>
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      points={lineData
                        .map((d, i) => `${i * 100 + 80},${250 - d.value * 0.8}`)
                        .join(" ")}
                    />
                    {lineData.map((d, i) => (
                      <g key={i}>
                        <circle
                          cx={i * 100 + 80}
                          cy={250 - d.value * 0.8}
                          r="5"
                          fill="#3b82f6"
                        />
                        <text
                          x={i * 100 + 80}
                          y="265"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#6b7280"
                        >
                          {d.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Calendar - 4 columns */}
              <div className="lg:col-span-4 bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Calendar</h2>
                <div className="text-gray-600 text-sm">Calendar component</div>
              </div>
            </div>

            {/* Live Pickup Orders Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">
                  Live Pickup Orders
                </h2>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setOrderPeriod("day")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        orderPeriod === "day"
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Day
                    </button>
                    <button
                      onClick={() => setOrderPeriod("week")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        orderPeriod === "week"
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Week
                    </button>
                    <button
                      onClick={() => setOrderPeriod("month")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        orderPeriod === "month"
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Month
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search orders..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="px-4 py-2 pl-10 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-gray-200"
                    />
                    <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                        Order ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                        User Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                        Scrap Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                        Est. Weight
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                        Pickup Time
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paginatedOrders.map((order) => (
                      <tr
                        key={order.orderId}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                          {order.orderId}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          {order.userName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {order.scrapType}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {order.estWeight}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {order.pickupTime}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                  {Math.min(currentPage * rowsPerPage, filteredOrders.length)}{" "}
                  of {filteredOrders.length} orders
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        currentPage === i + 1
                          ? "bg-green-600 text-white"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
    </div>
  );
}
