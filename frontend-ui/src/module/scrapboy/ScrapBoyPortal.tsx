import { useState } from "react";
import { Home, ShoppingBag, Wallet, User, WalletIcon, Languages, MapPin, Phone, Navigation, CheckCircle, X, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScrapBoyPortal() {
    const [activeTab, setActiveTab] = useState("home");
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [showOrderDetail, setShowOrderDetail] = useState(false);

    const handleSelectOrder = (order: any) => {
        setSelectedOrder(order);
        setShowOrderDetail(true);
    };

    const handleWalletClick = () => {
        setActiveTab("wallet");
    };

    const handleBackFromOrder = () => {
        setShowOrderDetail(false);
        setSelectedOrder(null);
    };

    const tabs = [
        { id: "home", label: "Home", icon: Home },
        { id: "orders", label: "Orders", icon: ShoppingBag },
        { id: "wallet", label: "Wallet", icon: Wallet },
        { id: "profile", label: "Profile", icon: User },
    ];

    return (
        <div className="h-screen flex flex-col bg-gray-50">
            <div className="flex-1 overflow-y-auto pb-20">
                {showOrderDetail && selectedOrder ? (
                    <OrderDetailScreen order={selectedOrder} onBack={handleBackFromOrder} />
                ) : (
                    <>
                        {activeTab === "home" && <HomeTab onSelectOrder={handleSelectOrder} onWalletClick={handleWalletClick} />}
                        {activeTab === "orders" && <OrdersTab onSelectOrder={handleSelectOrder} />}
                        {activeTab === "wallet" && <WalletTab />}
                        {activeTab === "profile" && <ProfileTab />}
                    </>
                )}
            </div>

            {!showOrderDetail && (
                <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
                    <div className="flex items-center justify-around max-w-lg mx-auto">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-col items-center gap-1.5 py-3 px-6 transition-all ${
                                        isActive ? "text-green-600" : "text-gray-400"
                                    }`}
                                >
                                    <Icon className={`size-5 ${isActive ? "" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
                                    <span className="text-xs font-medium">{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </nav>
            )}
        </div>
    );
}

function HomeTab({ onSelectOrder, onWalletClick }: { onSelectOrder: (order: any) => void; onWalletClick: () => void }) {
    const stats = [
        { label: "Total Pickups", value: "24", color: "bg-green-100 text-green-600" },
        { label: "This Month", value: "8", color: "bg-blue-100 text-blue-600" },
        { label: "Pending", value: "2", color: "bg-orange-100 text-orange-600" },
    ];

    const recentRequests = [
        { id: "ORD-007", customer: "Suresh Reddy", area: "Sector 10", address: "House 123, Sector 10", phone: "+91 98765 43210", weight: "15 kg", amount: "₹450", time: "5 min ago", status: "new" },
        { id: "ORD-008", customer: "Neha Gupta", area: "Sector 25", address: "Flat 45, Sector 25", phone: "+91 98765 43211", weight: "8 kg", amount: "₹240", time: "15 min ago", status: "new" },
    ];

    return (
        <div className="min-h-full">
            <div className="bg-gradient-to-br from-green-600 to-green-500 px-4 pt-8 pb-24">
                <div className="max-w-lg mx-auto">
                    <div className="flex items-start justify-between gap-3 mb-8">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="size-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-lg font-semibold border border-white/20 flex-shrink-0 text-white">
                                RK
                            </div>
                            <div className="min-w-0">
                                <h1 className="text-xl font-semibold truncate text-white">Ravi</h1>
                                <p className="text-green-50 text-sm truncate">ID: SB-1234</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <button onClick={onWalletClick} className="h-10 px-3 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 active:scale-95 transition-all flex items-center gap-2 border border-white/20">
                                <WalletIcon className="size-4 text-white" />
                                <span className="font-semibold text-sm text-white">₹2,450</span>
                            </button>
                            <button className="size-10 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 active:scale-95 transition-all flex items-center justify-center border border-white/20">
                                <Languages className="size-4 text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                        <p className="text-green-50 text-xs font-medium mb-1.5">Today's Target</p>
                        <p className="text-2xl font-semibold text-white">5 Pickups Remaining</p>
                    </div>
                </div>
            </div>

            <div className="max-w-lg mx-auto px-4 -mt-16 mb-8">
                <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-gray-500 mt-1.5 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-lg mx-auto px-4 pb-6">
                <h2 className="text-base font-semibold text-gray-900 mb-4">Recent Order Requests</h2>
                <div className="space-y-3">
                    {recentRequests.map((request) => (
                        <div key={request.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{request.customer}</p>
                                    <p className="text-sm text-gray-500 mt-0.5">{request.area}</p>
                                </div>
                                <span className="text-xs px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 font-medium">
                                    New
                                </span>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-sm text-gray-500">{request.time}</span>
                                <button onClick={() => onSelectOrder(request)} className="px-4 py-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-lg text-white text-sm font-medium">
                                    Pickup
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function OrdersTab({ onSelectOrder }: { onSelectOrder: (order: any) => void }) {
    const [activeFilter, setActiveFilter] = useState("all");

    const allOrders = [
        { id: "ORD-001", customer: "Rajesh Kumar", area: "Sector 15", address: "House 45, Sector 15", phone: "+91 98765 43213", weight: "12 kg", amount: "₹360", status: "completed" },
        { id: "ORD-002", customer: "Priya Sharma", area: "Sector 22", address: "Flat 78, Sector 22", phone: "+91 98765 43214", weight: "18 kg", amount: "₹540", status: "completed" },
        { id: "ORD-003", customer: "Amit Patel", area: "Sector 18", address: "Villa 12, Sector 18", phone: "+91 98765 43215", weight: "10 kg", amount: "₹300", status: "cancelled" },
        { id: "ORD-004", customer: "Suresh Reddy", area: "Sector 10", address: "House 123, Sector 10", phone: "+91 98765 43210", weight: "15 kg", amount: "₹450", status: "new" },
        { id: "ORD-005", customer: "Neha Gupta", area: "Sector 25", address: "Flat 45, Sector 25", phone: "+91 98765 43211", weight: "8 kg", amount: "₹240", status: "accepted" },
        { id: "ORD-006", customer: "Vikram Singh", area: "Sector 12", address: "Villa 78, Sector 12", phone: "+91 98765 43212", weight: "22 kg", amount: "₹660", status: "accepted" },
    ];

    const filteredOrders = activeFilter === "all" 
        ? allOrders 
        : allOrders.filter(order => order.status === activeFilter);

    const filters = [
        { id: "all", label: "All" },
        { id: "new", label: "New" },
        { id: "accepted", label: "Confirmed" },
        { id: "completed", label: "Completed" },
        { id: "cancelled", label: "Cancelled" },
    ];

    return (
        <div className="min-h-full bg-gray-50">
            <div className="bg-white border-b border-gray-200 px-4 py-6">
                <h1 className="text-xl font-semibold text-gray-900">Orders</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your pickup orders</p>
            </div>

            <div className="bg-white border-b border-gray-200 px-4 py-3 overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                activeFilter === filter.id
                                    ? "bg-green-600 text-white shadow-sm"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
                {filteredOrders.map((order) => (
                    <div key={order.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">{order.customer}</p>
                                <p className="text-sm text-gray-500 mt-0.5">{order.area}</p>
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                                order.status === "completed" ? "bg-green-50 text-green-700" :
                                order.status === "accepted" ? "bg-blue-50 text-blue-700" :
                                order.status === "cancelled" ? "bg-red-50 text-red-700" :
                                "bg-orange-50 text-orange-700"
                            }`}>
                                {order.status === "accepted" ? "Confirmed" : order.status}
                            </span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Est. Weight</p>
                                <p className="font-semibold text-gray-900 text-sm mt-0.5">{order.weight}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Est. Amount</p>
                                <p className="font-semibold text-green-600 text-sm mt-0.5">{order.amount}</p>
                            </div>
                            <button onClick={() => onSelectOrder(order)} className="px-4 py-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-lg text-white text-sm font-medium">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function WalletTab() {
    const [showHistory, setShowHistory] = useState(false);

    const transactions = [
        { id: "TXN-001", type: "credit", amount: "₹450", desc: "Order #ORD-001", date: "Today", time: "10:30 AM" },
        { id: "TXN-002", type: "credit", amount: "₹240", desc: "Order #ORD-002", date: "Yesterday", time: "03:45 PM" },
        { id: "TXN-003", type: "debit", amount: "₹100", desc: "Withdrawal to Bank", date: "2 days ago", time: "11:20 AM" },
        { id: "TXN-004", type: "credit", amount: "₹660", desc: "Order #ORD-006", date: "3 days ago", time: "02:15 PM" },
        { id: "TXN-005", type: "credit", amount: "₹360", desc: "Order #ORD-001", date: "4 days ago", time: "09:30 AM" },
        { id: "TXN-006", type: "debit", amount: "₹500", desc: "Withdrawal to Bank", date: "5 days ago", time: "04:00 PM" },
        { id: "TXN-007", type: "credit", amount: "₹540", desc: "Order #ORD-002", date: "6 days ago", time: "01:45 PM" },
    ];

    if (showHistory) {
        return (
            <div className="min-h-full bg-gray-50">
                <div className="bg-white border-b border-gray-200 px-4 py-6 sticky top-0 z-10">
                    <div className="max-w-lg mx-auto flex items-center gap-3">
                        <button onClick={() => setShowHistory(false)} className="size-9 rounded-lg hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center">
                            <svg className="size-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">Transaction History</h1>
                            <p className="text-gray-500 text-sm mt-0.5">All transactions</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
                    {transactions.map((txn) => (
                        <div key={txn.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-900 text-sm">{txn.desc}</p>
                                    <p className="text-xs text-gray-500 mt-1">{txn.date} • {txn.time}</p>
                                </div>
                                <p className={`font-semibold text-base ${txn.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                                    {txn.type === "credit" ? "+" : "-"}{txn.amount}
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs text-gray-400">Transaction ID: {txn.id}</span>
                                <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                                    txn.type === "credit" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                                }`}>
                                    {txn.type === "credit" ? "Credit" : "Debit"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-full bg-gray-50">
            <div className="bg-gradient-to-br from-green-600 to-green-500 px-4 pt-8 pb-16">
                <div className="max-w-lg mx-auto">
                    <p className="text-green-50 text-sm font-medium mb-2">Total Balance</p>
                    <h1 className="text-4xl font-semibold mb-8 text-white">₹2,450</h1>
                    <button className="w-full py-3.5 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 active:scale-95 transition-all shadow-sm">
                        Withdraw Money
                    </button>
                </div>
            </div>

            <div className="max-w-lg mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-semibold text-gray-900">Recent Transactions</h2>
                    <button onClick={() => setShowHistory(true)} className="text-sm text-green-600 font-medium hover:text-green-700">
                        View All
                    </button>
                </div>
                <div className="space-y-3">
                    {transactions.slice(0, 5).map((txn) => (
                        <div key={txn.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">{txn.desc}</p>
                                <p className="text-sm text-gray-500 mt-0.5">{txn.date}</p>
                            </div>
                            <p className={`font-semibold text-sm ${txn.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                                {txn.type === "credit" ? "+" : "-"}{txn.amount}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProfileTab() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("scrapboyToken");
        navigate("/scrapboy/login");
    };

    const menuItems = [
        { label: "Personal Information", action: () => {} },
        { label: "Documents", action: () => {} },
        { label: "Bank Details", action: () => {} },
        { label: "Settings", action: () => {} },
        { label: "Help & Support", action: () => {} },
        { label: "Logout", action: handleLogout },
    ];

    return (
        <div className="min-h-full bg-gray-50">
            <div className="bg-white border-b border-gray-200 px-4 py-6">
                <div className="max-w-lg mx-auto flex items-center gap-4">
                    <div className="size-16 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white text-xl font-semibold shadow-sm">
                        RK
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">Ravi Kumar</h1>
                        <p className="text-gray-500 text-sm mt-0.5">Scrap Boy ID: SB-1234</p>
                    </div>
                </div>
            </div>

            <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={item.action}
                        className="w-full bg-white rounded-xl p-4 border border-gray-200 text-left font-medium text-gray-900 hover:bg-gray-50 active:scale-95 transition-all shadow-sm text-sm"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

function OrderDetailScreen({ order, onBack }: { order: any; onBack: () => void }) {
    const [orderStatus, setOrderStatus] = useState(order.status);
    const [actualWeight, setActualWeight] = useState("");
    const [actualAmount, setActualAmount] = useState("");
    const [showCompletePopup, setShowCompletePopup] = useState(false);

    const handleAccept = () => {
        setOrderStatus("accepted");
        setShowCompletePopup(true);
    };

    const handleComplete = () => {
        if (actualWeight && actualAmount) {
            setOrderStatus("completed");
            setShowCompletePopup(false);
            setTimeout(() => onBack(), 1500);
        }
    };

    return (
        <div className="min-h-full bg-gray-50">
            <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
                <div className="max-w-lg mx-auto flex items-center gap-3">
                    <button onClick={onBack} className="size-9 rounded-lg hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center">
                        <svg className="size-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h2 className="text-lg font-semibold text-gray-900">Order Details</h2>
                </div>
            </div>

            <div className="max-w-lg mx-auto p-4 space-y-4">
                <div className="bg-gradient-to-br from-green-600 to-green-500 text-white rounded-xl p-5">
                    <p className="text-green-50 text-sm mb-1 font-medium">Order ID</p>
                    <p className="text-2xl font-semibold mb-3">{order.id}</p>
                    <span className="inline-block text-xs px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm font-medium">
                        {orderStatus === "completed" ? "Completed" : orderStatus === "accepted" ? "In Progress" : "New Order"}
                    </span>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="h-64 bg-gray-100 relative">
                        <iframe
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=77.5945,12.9715,77.5946,12.9716&layer=mapnik&marker=12.9716,77.5946`}
                            className="w-full h-full"
                            style={{ border: 0 }}
                        />
                        <div className="absolute top-3 right-3">
                            <button className="size-10 rounded-lg bg-white shadow-lg hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center">
                                <Map className="size-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all rounded-lg text-white font-semibold flex items-center justify-center gap-2">
                            <Navigation className="size-5" />
                            Start Navigation
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm space-y-4">
                    <h3 className="font-semibold text-gray-900">Customer Details</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <User className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-semibold text-gray-900 mt-0.5">{order.customer}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="font-semibold text-gray-900 mt-0.5">{order.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-semibold text-gray-900 mt-0.5">{order.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">Order Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Est. Weight</p>
                            <p className="font-semibold text-gray-900 mt-1">{order.weight}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Est. Amount</p>
                            <p className="font-semibold text-green-600 mt-1">{order.amount}</p>
                        </div>
                    </div>
                </div>

                {orderStatus === "completed" && (
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-center gap-3">
                        <CheckCircle className="size-6 text-green-600 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-green-800">Order Completed!</p>
                            <p className="text-sm text-green-600 mt-0.5">Amount added to wallet</p>
                        </div>
                    </div>
                )}

                <div className="pb-4">
                    {orderStatus === "new" && (
                        <button onClick={handleAccept} className="w-full py-4 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-lg text-white font-semibold">
                            Accept Order
                        </button>
                    )}
                </div>
            </div>

            {showCompletePopup && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCompletePopup(false)}>
                    <div className="bg-white rounded-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Complete Pickup</h3>
                            <button onClick={() => setShowCompletePopup(false)} className="size-8 rounded-lg hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center">
                                <X className="size-5 text-gray-600" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-500 block mb-2 font-medium">Actual Weight (kg)</label>
                                <input
                                    type="number"
                                    value={actualWeight}
                                    onChange={(e) => setActualWeight(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter weight"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-2 font-medium">Actual Amount (₹)</label>
                                <input
                                    type="number"
                                    value={actualAmount}
                                    onChange={(e) => setActualAmount(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <button onClick={handleComplete} disabled={!actualWeight || !actualAmount} className="w-full py-3 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-lg text-white font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed">
                                Complete Pickup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}