import { useState } from 'react';
import { Filter, Download, Eye, CheckCircle, Clock, AlertCircle } from 'lucide-react';

function PickupOrders() {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customer: 'Raj Kumar',
      phone: '98765-43210',
      material: 'Copper',
      weight: '5.2 kg',
      amount: 2210,
      address: '123 Green Lane, Eco City',
      status: 'pending',
      date: '2024-01-14 10:30',
      gps: '28.7041, 77.1025',
    },
    {
      id: 'ORD002',
      customer: 'Priya Singh',
      phone: '98765-43211',
      material: 'Aluminum',
      weight: '12 kg',
      amount: 1140,
      address: '456 Recycled Road, Eco City',
      status: 'assigned',
      date: '2024-01-14 09:15',
      gps: '28.7050, 77.1030',
      assignedTo: 'Rohan (Delivery Boy)',
    },
    {
      id: 'ORD003',
      customer: 'Amit Patel',
      phone: '98765-43212',
      material: 'Iron',
      weight: '8 kg',
      amount: 224,
      address: '789 Waste St, Eco City',
      status: 'completed',
      date: '2024-01-14 08:00',
      gps: '28.7035, 77.1020',
      completedAt: '11:45 AM',
    },
    {
      id: 'ORD004',
      customer: 'Neha Verma',
      phone: '98765-43213',
      material: 'Cardboard',
      weight: '15 kg',
      amount: 135,
      address: '321 Paper Plaza, Eco City',
      status: 'pending',
      date: '2024-01-14 07:30',
      gps: '28.7025, 77.1015',
    },
    {
      id: 'ORD005',
      customer: 'Vikram Das',
      phone: '98765-43214',
      material: 'E-Waste',
      weight: '3 kg',
      amount: 54,
      address: '654 Tech Town, Eco City',
      status: 'assigned',
      date: '2024-01-13 18:45',
      gps: '28.7045, 77.1035',
      assignedTo: 'Arjun (Delivery Boy)',
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'assigned':
        return <AlertCircle className="w-5 h-5 text-blue-600" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'assigned':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders =
    filter === 'all' ? orders : orders.filter((order) => order.status === filter);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Pickup Orders</h2>
          <p className="text-gray-600 mt-2">Manage and track all pickup requests</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
          <Download className="w-5 h-5" />
          <span>Export</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {['all', 'pending', 'assigned', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              filter === status
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders Grid */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{order.id}</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Customer</p>
                    <p className="text-sm font-semibold text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-600">{order.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Material</p>
                    <p className="text-sm font-semibold text-gray-900">{order.material}</p>
                    <p className="text-xs text-gray-600">{order.weight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Amount</p>
                    <p className="text-lg font-bold text-green-600">₹{order.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Order Date</p>
                    <p className="text-sm font-semibold text-gray-900">{order.date}</p>
                  </div>
                </div>

                {order.assignedTo && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-semibold uppercase">Assigned To</p>
                    <p className="text-sm font-semibold text-blue-600">{order.assignedTo}</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleViewDetails(order)}
                className="ml-4 text-green-600 hover:text-green-700 p-2 hover:bg-green-50 rounded-lg transition-colors flex-shrink-0"
              >
                <Eye className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                  <p className="text-gray-600 mt-1">{selectedOrder.id}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Customer Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Name</p>
                      <p className="text-gray-900">{selectedOrder.customer}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Phone</p>
                      <p className="text-gray-900">{selectedOrder.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Address</p>
                      <p className="text-gray-900">{selectedOrder.address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Order Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Material</p>
                      <p className="text-gray-900">{selectedOrder.material}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Weight</p>
                      <p className="text-gray-900">{selectedOrder.weight}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Amount</p>
                      <p className="text-2xl font-bold text-green-600">₹{selectedOrder.amount}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">GPS Location</h3>
                <p className="text-gray-900 font-mono bg-gray-100 p-3 rounded-lg">{selectedOrder.gps}</p>
              </div>

              <div className="border-t border-gray-200 pt-6 flex space-x-4">
                <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Assign Delivery Boy
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PickupOrders;
