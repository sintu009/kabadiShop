import { Wallet as WalletIcon, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function Wallet() {
    const transactions = [
        { id: 1, type: "credit", amount: 5000, description: "Payment from Order #1001", date: "2024-01-15", status: "Completed" },
        { id: 2, type: "debit", amount: 2000, description: "Withdrawal to Bank", date: "2024-01-14", status: "Completed" },
        { id: 3, type: "credit", amount: 3500, description: "Payment from Order #1002", date: "2024-01-13", status: "Completed" },
        { id: 4, type: "debit", amount: 1500, description: "Scrap Boy Payment", date: "2024-01-12", status: "Pending" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Wallet</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <WalletIcon size={24} />
                        <h3 className="text-lg font-medium">Total Balance</h3>
                    </div>
                    <p className="text-4xl font-bold">₹45,678</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <TrendingUp size={24} className="text-green-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Total Credit</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">₹58,500</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <TrendingDown size={24} className="text-red-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Total Debit</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">₹12,822</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {transactions.map((txn) => (
                        <div key={txn.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${txn.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                                    {txn.type === 'credit' ? <ArrowDownLeft className="text-green-600" size={20} /> : <ArrowUpRight className="text-red-600" size={20} />}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{txn.description}</p>
                                    <p className="text-sm text-gray-500">{txn.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`text-lg font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                                    {txn.type === 'credit' ? '+' : '-'}₹{txn.amount}
                                </p>
                                <span className={`text-xs px-2 py-1 rounded-full ${txn.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {txn.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
