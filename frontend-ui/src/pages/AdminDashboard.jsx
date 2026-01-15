import { TrendingUp, Package, Users, DollarSign } from 'lucide-react';

function AdminDashboard() {
  const stats = [
    {
      label: 'Total Orders',
      value: '324',
      change: '+12%',
      icon: Package,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'Revenue Today',
      value: '₹24,580',
      change: '+8%',
      icon: DollarSign,
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      label: 'Active Delivery Boys',
      value: '28',
      change: '+2',
      icon: Users,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      label: 'Avg Order Value',
      value: '₹3,420',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  const recentOrders = [
    { id: 1, customer: 'Raj Kumar', material: 'Copper', amount: 1250, status: 'pending', time: '2 mins ago' },
    { id: 2, customer: 'Priya Singh', material: 'Aluminum', amount: 850, status: 'assigned', time: '15 mins ago' },
    { id: 3, customer: 'Amit Patel', material: 'Iron', amount: 450, status: 'completed', time: '45 mins ago' },
    { id: 4, customer: 'Neha Verma', material: 'Cardboard', amount: 320, status: 'pending', time: '1 hour ago' },
    { id: 5, customer: 'Vikram Das', material: 'E-Waste', amount: 1600, status: 'assigned', time: '2 hours ago' },
  ];

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

  return (
    <div className="max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-14 h-14 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>
                <span className="text-green-600 font-semibold text-sm">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Material</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{order.material}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">₹{order.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
