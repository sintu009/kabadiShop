import React, { useState } from "react";

import { HiSearch, HiPlus, HiX } from "react-icons/hi";

function Wallet() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [selectedBoy, setSelectedBoy] = useState(null);
  const [amount, setAmount] = useState("");

  const scrapBoys = [
    { id: 1, name: "Ramesh Kumar", phone: "+91 9876543210", balance: 5000 },
    { id: 2, name: "Suresh Patel", phone: "+91 9876543211", balance: 3200 },
    { id: 3, name: "Mahesh Singh", phone: "+91 9876543212", balance: 1500 },
    { id: 4, name: "Dinesh Sharma", phone: "+91 9876543213", balance: 7800 },
  ];

  const filteredBoys = scrapBoys.filter(
    (boy) =>
      boy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      boy.phone.includes(searchQuery),
  );

  const handleAddMoney = (e) => {
    e.preventDefault();
    console.log(`Adding ₹${amount} to ${selectedBoy.name}'s account`);
    setShowAddMoneyModal(false);
    setSelectedBoy(null);
    setAmount("");
  };

  const openAddMoneyModal = (boy) => {
    setSelectedBoy(boy);
    setShowAddMoneyModal(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Wallet Management</h1>
        <p className="text-gray-600 mt-1">Manage scrap boy wallet balances</p>
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
                  Balance
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBoys.map((boy) => (
                <tr key={boy.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {boy.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {boy.phone}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">
                    ₹{boy.balance}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openAddMoneyModal(boy)}
                      className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                    >
                      <HiPlus /> Add Money
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Money Modal */}
      {showAddMoneyModal && selectedBoy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add Money to Wallet</h2>
              <button onClick={() => setShowAddMoneyModal(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Scrap Boy</p>
              <p className="font-semibold text-lg">{selectedBoy.name}</p>
              <p className="text-sm text-gray-600 mt-2">Current Balance</p>
              <p className="font-semibold text-green-600 text-xl">
                ₹{selectedBoy.balance}
              </p>
            </div>
            <form onSubmit={handleAddMoney} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter amount"
                  min="1"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Add Money
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddMoneyModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
