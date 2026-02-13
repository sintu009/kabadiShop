import React, { useState } from "react";
import { HiSearch, HiPlus, HiX, HiEye } from "react-icons/hi";

function ScrapBoy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedBoy, setSelectedBoy] = useState(null);
  const [newBoy, setNewBoy] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const scrapBoys = [
    {
      id: 1,
      name: "Ramesh Kumar",
      phone: "+91 9876543210",
      email: "ramesh@example.com",
      address: "Sector 15, Delhi",
      orders: 45,
      status: "Active",
    },
    {
      id: 2,
      name: "Suresh Patel",
      phone: "+91 9876543211",
      email: "suresh@example.com",
      address: "Sector 22, Delhi",
      orders: 38,
      status: "Active",
    },
    {
      id: 3,
      name: "Mahesh Singh",
      phone: "+91 9876543212",
      email: "mahesh@example.com",
      address: "Sector 18, Delhi",
      orders: 22,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Dinesh Sharma",
      phone: "+91 9876543213",
      email: "dinesh@example.com",
      address: "Sector 10, Delhi",
      orders: 51,
      status: "Active",
    },
  ];

  const filteredBoys = scrapBoys.filter(
    (boy) =>
      boy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      boy.phone.includes(searchQuery) ||
      boy.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBoy = (e) => {
    e.preventDefault();
    console.log("Adding new scrap boy:", newBoy);
    setShowAddModal(false);
    setNewBoy({ name: "", phone: "", email: "", address: "" });
  };

  const handleViewProfile = (boy) => {
    setSelectedBoy(boy);
    setShowProfileModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Scrap Boys</h1>
          <p className="text-gray-600 mt-1">Manage scrap boy accounts</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <HiPlus /> Add Scrap Boy
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search scrap boys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200"
            />
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Address
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Orders
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBoys.map((boy) => (
                <tr
                  key={boy.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {boy.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {boy.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {boy.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {boy.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {boy.orders}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        boy.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {boy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewProfile(boy)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <HiEye className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Scrap Boy Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Scrap Boy</h2>
              <button onClick={() => setShowAddModal(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>
            <form onSubmit={handleAddBoy} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newBoy.name}
                  onChange={(e) =>
                    setNewBoy({ ...newBoy, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  value={newBoy.phone}
                  onChange={(e) =>
                    setNewBoy({ ...newBoy, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={newBoy.email}
                  onChange={(e) =>
                    setNewBoy({ ...newBoy, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={newBoy.address}
                  onChange={(e) =>
                    setNewBoy({ ...newBoy, address: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && selectedBoy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Scrap Boy Profile</h2>
              <button onClick={() => setShowProfileModal(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold">{selectedBoy.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold">{selectedBoy.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">{selectedBoy.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-semibold">{selectedBoy.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="font-semibold">{selectedBoy.orders}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      selectedBoy.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {selectedBoy.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrapBoy;
