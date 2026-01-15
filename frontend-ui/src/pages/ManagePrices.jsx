import { useState } from 'react';
import { Edit2, Save, X, Plus, Trash2 } from 'lucide-react';

function ManagePrices() {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Iron', price: 28, unit: 'kg' },
    { id: 2, name: 'Steel', price: 32, unit: 'kg' },
    { id: 3, name: 'Copper', price: 425, unit: 'kg' },
    { id: 4, name: 'Brass', price: 320, unit: 'kg' },
    { id: 5, name: 'Aluminum', price: 95, unit: 'kg' },
    { id: 6, name: 'Newspaper', price: 14, unit: 'kg' },
    { id: 7, name: 'Cardboard', price: 9, unit: 'kg' },
    { id: 8, name: 'Books/Paper', price: 12, unit: 'kg' },
    { id: 9, name: 'Plastic (PET)', price: 8, unit: 'kg' },
    { id: 10, name: 'Plastic (Hard)', price: 6, unit: 'kg' },
    { id: 11, name: 'E-Waste', price: 18, unit: 'kg' },
    { id: 12, name: 'Glass Bottles', price: 2, unit: 'kg' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMaterial, setNewMaterial] = useState({ name: '', price: '', unit: 'kg' });

  const handleEdit = (material) => {
    setEditingId(material.id);
    setEditData({ ...material });
  };

  const handleSave = (id) => {
    setMaterials(materials.map((m) => (m.id === id ? editData : m)));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setMaterials(materials.filter((m) => m.id !== id));
  };

  const handleAddMaterial = () => {
    if (newMaterial.name && newMaterial.price) {
      setMaterials([
        ...materials,
        { id: Math.max(...materials.map((m) => m.id)) + 1, ...newMaterial, price: parseFloat(newMaterial.price) },
      ]);
      setNewMaterial({ name: '', price: '', unit: 'kg' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Price Management</h2>
          <p className="text-gray-600 mt-2">Update daily scrap rates for all materials</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Material</span>
        </button>
      </div>

      {/* Add Material Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Material</h3>
          <div className="grid sm:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Material name"
              value={newMaterial.name}
              onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="number"
              placeholder="Price"
              value={newMaterial.price}
              onChange={(e) => setNewMaterial({ ...newMaterial, price: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <select
              value={newMaterial.unit}
              onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option>kg</option>
              <option>piece</option>
              <option>liter</option>
            </select>
            <div className="flex space-x-2">
              <button
                onClick={handleAddMaterial}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Add
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Materials Table */}
      <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-600">Material</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-600">Current Price</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-600">Unit</th>
              <th className="text-center py-4 px-4 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material) => (
              <tr key={material.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4">
                  {editingId === material.id ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  ) : (
                    <span className="font-semibold text-gray-900">{material.name}</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {editingId === material.id ? (
                    <input
                      type="number"
                      value={editData.price}
                      onChange={(e) => setEditData({ ...editData, price: parseFloat(e.target.value) })}
                      className="px-3 py-2 border border-gray-300 rounded-lg w-20 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-green-600">₹{material.price}</span>
                  )}
                </td>
                <td className="py-4 px-4 text-gray-600">{material.unit}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center space-x-2">
                    {editingId === material.id ? (
                      <>
                        <button
                          onClick={() => handleSave(material.id)}
                          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                          title="Save"
                        >
                          <Save className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition-colors"
                          title="Cancel"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(material)}
                          className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(material.id)}
                          className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-gray-600 mb-2">Total Materials</p>
          <p className="text-4xl font-bold text-green-600">{materials.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-gray-600 mb-2">Avg Price</p>
          <p className="text-4xl font-bold text-blue-600">
            ₹{(materials.reduce((sum, m) => sum + m.price, 0) / materials.length).toFixed(0)}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-gray-600 mb-2">Last Updated</p>
          <p className="text-lg font-semibold text-gray-900">Today at 10:30 AM</p>
        </div>
      </div>
    </div>
  );
}

export default ManagePrices;
