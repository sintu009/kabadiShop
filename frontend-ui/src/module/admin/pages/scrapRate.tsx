import React, { useState } from "react";
import { HiSearch, HiPlus, HiPencil, HiX } from "react-icons/hi";

function ScrapPrice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState({
    category: "",
    item: "",
    price: "",
    unit: "kg",
  });
  const [activeTab, setActiveTab] = useState("Paper");

  const categories = ["Paper", "Plastic", "Metal", "Electronics", "E-Waste"];

  const scrapPrices = [
    { id: 1, category: "Paper", item: "Newspaper", price: "15", unit: "kg", image: "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=400" },
    { id: 2, category: "Paper", item: "Cardboard", price: "12", unit: "kg", image: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=400" },
    { id: 3, category: "Paper", item: "Books", price: "10", unit: "kg", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400" },
    { id: 4, category: "Plastic", item: "PET Bottles", price: "20", unit: "kg", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400" },
    { id: 5, category: "Plastic", item: "Plastic Containers", price: "15", unit: "kg", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400" },
    { id: 6, category: "Metal", item: "Iron", price: "30", unit: "kg", image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400" },
    { id: 7, category: "Metal", item: "Aluminum", price: "100", unit: "kg", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400" },
    { id: 8, category: "Metal", item: "Copper", price: "400", unit: "kg", image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400" },
    { id: 9, category: "Electronics", item: "Mobile Phones", price: "200", unit: "piece", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 10, category: "Electronics", item: "Laptops", price: "500", unit: "piece", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
  ];

  const filteredPrices = scrapPrices.filter(
    (item) =>
      item.category === activeTab &&
      item.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddItem = (e) => {
    e.preventDefault();
    console.log("Adding new item:", newItem);
    setShowAddModal(false);
    setNewItem({ category: "", item: "", price: "", unit: "kg" });
  };

  const handleEditItem = (e) => {
    e.preventDefault();
    console.log("Updating item:", selectedItem);
    setShowEditModal(false);
    setSelectedItem(null);
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Scrap Price Management</h1>
          <p className="text-gray-600 mt-1">Manage scrap prices for different categories</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <HiPlus /> Add Price
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveTab(category)} className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === category ? "text-green-600 border-b-2 border-green-600 bg-green-50" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="relative">
            <input type="text" placeholder="Search items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200" />
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
            {filteredPrices.length > 0 ? (
              filteredPrices.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.item}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
                      <span className="text-sm text-gray-500">per {item.unit}</span>
                    </div>
                    <button onClick={() => openEditModal(item)} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <HiPencil /> Edit Price
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500">No items found in {activeTab} category</div>
            )}
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Price</h2>
              <button onClick={() => setShowAddModal(false)}><HiX className="text-2xl" /></button>
            </div>
            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required>
                  <option value="">Select Category</option>
                  <option value="Paper">Paper</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Metal">Metal</option>
                  <option value="Electronics">Electronics</option>
                  <option value="E-Waste">E-Waste</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Item Name</label>
                <input type="text" value={newItem.item} onChange={(e) => setNewItem({ ...newItem, item: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price (₹)</label>
                <input type="number" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Unit</label>
                <select value={newItem.unit} onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })} className="w-full px-4 py-2 border rounded-lg">
                  <option value="kg">kg</option>
                  <option value="piece">piece</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Add</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Price</h2>
              <button onClick={() => setShowEditModal(false)}><HiX className="text-2xl" /></button>
            </div>
            <form onSubmit={handleEditItem} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select value={selectedItem.category} onChange={(e) => setSelectedItem({ ...selectedItem, category: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required>
                  <option value="Paper">Paper</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Metal">Metal</option>
                  <option value="Electronics">Electronics</option>
                  <option value="E-Waste">E-Waste</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Item Name</label>
                <input type="text" value={selectedItem.item} onChange={(e) => setSelectedItem({ ...selectedItem, item: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price (₹)</label>
                <input type="number" value={selectedItem.price} onChange={(e) => setSelectedItem({ ...selectedItem, price: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Unit</label>
                <select value={selectedItem.unit} onChange={(e) => setSelectedItem({ ...selectedItem, unit: e.target.value })} className="w-full px-4 py-2 border rounded-lg">
                  <option value="kg">kg</option>
                  <option value="piece">piece</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update</button>
                <button type="button" onClick={() => setShowEditModal(false)} className="flex-1 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrapPrice;
