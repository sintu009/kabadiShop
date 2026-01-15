import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PriceList from './components/PriceList';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import AdminLayout from './pages/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import ManagePrices from './pages/ManagePrices';
import PickupOrders from './pages/PickupOrders';
import DeliveryBoys from './pages/DeliveryBoys';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [adminCurrentPage, setAdminCurrentPage] = useState('dashboard');

  if (currentPage === 'admin') {
    return (
      <AdminLayout currentPage={adminCurrentPage} onPageChange={setAdminCurrentPage}>
        {adminCurrentPage === 'dashboard' && <AdminDashboard />}
        {adminCurrentPage === 'prices' && <ManagePrices />}
        {adminCurrentPage === 'orders' && <PickupOrders />}
        {adminCurrentPage === 'delivery-boys' && <DeliveryBoys />}
      </AdminLayout>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PriceList />
      <HowItWorks />
      <Footer />

      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setCurrentPage('admin')}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg text-sm"
        >
          Admin Portal
        </button>
      </div>
    </div>
  );
}

export default App;
