import { useState } from 'react';
import { Plus, Edit2, Trash2, Phone, MapPin, Zap, TrendingUp } from 'lucide-react';

function DeliveryBoys() {
  const [deliveryBoys, setDeliveryBoys] = useState([
    {
      id: 1,
      name: 'Rohan Singh',
      phone: '98765-43220',
      email: 'rohan@kabadizone.com',
      activeOrders: 3,
      totalOrders: 127,
      rating: 4.8,
      status: 'active',
      area: 'North Zone',
    },
    {
      id: 2,
      name: 'Arjun Verma',
      phone: '98765-43221',
      email: 'arjun@kabadizone.com',
      activeOrders: 2,
      totalOrders: 98,
      rating: 4.6,
      status: 'active',
      area: 'South Zone',
    },
    {
      id: 3,
      name: 'Vikram Kumar',
      phone: '98765-43222',
      email: 'vikram@kabadizone.com',
      activeOrders: 1,
      totalOrders: 156,
      rating: 4.9,
      status: 'active',
      area: 'East Zone',
    },
    {
      id: 4,
      name: 'Rahul Patel',
      phone: '98765-43223',
      email: 'rahul@kabadizone.com',
      activeOrders: 0,
      totalOrders: 84,
      rating: 4.5,
      status: 'inactive',
      area: 'West Zone',
    },
    {
      id: 5,
      name: 'Amar Singh',
      phone: '98765-43224',
      email: 'amar@kabadizone.com',
      activeOrders: 4,
      totalOrders: 203,
      rating: 4.7,
      status: 'active',
      area: 'Central Zone',
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id) => {
    setDeliveryBoys(deliveryBoys.filter((boy) => boy.id !== id));
  };

  const getStatusColor = (status) => {
    return status === 'active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Delivery Boys</h2>
          <p className="text-gray-600 mt-2">Manage delivery team and assignments</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Delivery Boy</span>
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Delivery Boy</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
              <option>North Zone</option>
              <option>South Zone</option>
              <option>East Zone</option>
              <option>West Zone</option>
              <option>Central Zone</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Add
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delivery Boys Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliveryBoys.map((boy) => (
          <div key={boy.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{boy.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${getStatusColor(boy.status)}`}>
                  {boy.status.charAt(0).toUpperCase() + boy.status.slice(1)}
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(boy.id)}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-sm">{boy.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-sm">{boy.area}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-600 font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>{boy.activeOrders}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Active</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900">{boy.totalOrders}</p>
                <p className="text-xs text-gray-600 mt-1">Total</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-green-600">{boy.rating}</p>
                <p className="text-xs text-gray-600 mt-1">Rating</p>
              </div>
            </div>

            <button className="w-full bg-green-50 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryBoys;
