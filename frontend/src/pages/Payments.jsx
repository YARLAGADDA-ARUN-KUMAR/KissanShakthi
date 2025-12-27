import { ArrowDownLeft, ArrowUpRight, Clock, CreditCard, Plus } from 'lucide-react';

const Payments = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
                <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                    <Plus size={18} />
                    <span>Add Method</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-lg">
                    <p className="text-sm opacity-70 mb-1">Kissan Shakthi Balance</p>
                    <h2 className="text-3xl font-bold mb-6">₹ 12,450.00</h2>
                    <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <CreditCard size={16} />
                            </div>
                            <span className="text-sm font-medium">Wallet ending *8821</span>
                        </div>
                        <img src="/vite.svg" className="h-8 opacity-50" alt="logo" />
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center">
                    <p className="text-gray-500 text-sm mb-4">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                            <ArrowDownLeft className="text-green-600 mb-2" />
                            <span className="text-sm font-medium text-green-700">Add Money</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                            <ArrowUpRight className="text-blue-600 mb-2" />
                            <span className="text-sm font-medium text-blue-700">Withdraw</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-gray-800 mb-4">Transaction History</h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        i % 2 === 0
                                            ? 'bg-red-100 text-red-600'
                                            : 'bg-green-100 text-green-600'
                                    }`}
                                >
                                    {i % 2 === 0 ? (
                                        <ArrowUpRight size={20} />
                                    ) : (
                                        <ArrowDownLeft size={20} />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {i % 2 === 0
                                            ? 'Tractor Rental Payment'
                                            : 'Crop Sale - Mandi'}
                                    </p>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <Clock size={12} />
                                        <span>{i} day ago</span>
                                    </div>
                                </div>
                            </div>
                            <span
                                className={`font-bold ${
                                    i % 2 === 0 ? 'text-gray-800' : 'text-green-600'
                                }`}
                            >
                                {i % 2 === 0 ? '-' : '+'} ₹{i * 450}.00
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Payments;
