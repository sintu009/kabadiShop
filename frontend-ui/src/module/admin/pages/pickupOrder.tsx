import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

function PickupOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [orderPeriod, setOrderPeriod] = useState("day");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const livePickupOrders = [
    { orderId: "ORD001", userName: "John Doe", scrapType: "Paper", estWeight: "50 kg", pickupTime: "10:00 AM", status: "Pending" },
    { orderId: "ORD002", userName: "Jane Smith", scrapType: "Plastic", estWeight: "30 kg", pickupTime: "11:30 AM", status: "Completed" },
    { orderId: "ORD003", userName: "Bob Johnson", scrapType: "Metal", estWeight: "75 kg", pickupTime: "2:00 PM", status: "Pending" },
    { orderId: "ORD004", userName: "Alice Brown", scrapType: "E-Waste", estWeight: "20 kg", pickupTime: "3:30 PM", status: "Completed" },
  ];

  const filteredOrders = livePickupOrders.filter(
    (order) =>
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.scrapType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Pickup Orders</h1>
        <p className="text-gray-600 mt-1">Manage all pickup orders here</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Live Pickup Orders</h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setOrderPeriod("day")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  orderPeriod === "day" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setOrderPeriod("week")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  orderPeriod === "week" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setOrderPeriod("month")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  orderPeriod === "month" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">User Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Scrap Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Est. Weight</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Pickup Time</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedOrders.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.orderId}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.userName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.scrapType}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.estWeight}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.pickupTime}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
                      }`}
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
            Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                  currentPage === i + 1 ? "bg-green-600 text-white" : "border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

export default PickupOrders;
