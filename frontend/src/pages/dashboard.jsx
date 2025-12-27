import { CloudRain, Search, SprayCan, Sprout, Tractor, TrendingUp, Users } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold mb-2">Namaste, Farmer!</h1>
                <p className="opacity-90">
                    Here are your daily recommendations. Soil moisture is optimal today.
                </p>
            </div>

            <div className="relative">
                <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                />
                <input
                    type="text"
                    placeholder="Search equipment, labour, fertilizers, seeds..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-blue-600">
                        <Users size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-800">Hire Workers</h3>
                    <p className="text-sm text-gray-500">Immediate access to labour</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-orange-600">
                        <Tractor size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-800">Rent Tractor</h3>
                    <p className="text-sm text-gray-500">Easy machinery availability</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-purple-600">
                        <SprayCan size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-800">Pesticide Spraying</h3>
                    <p className="text-sm text-gray-500">Book expert services</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-800">Agri-Mart Marketplace</h2>
                        <button className="text-green-600 text-sm font-medium">View All</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <Sprout size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">Organic Fertilizers</p>
                                    <p className="text-xs text-green-600 font-medium">15% OFF</p>
                                </div>
                            </div>
                            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg">
                                Buy
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <TrendingUp size={20} className="text-yellow-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">Soil Testing Report</p>
                                    <p className="text-xs text-gray-500">Get insights</p>
                                </div>
                            </div>
                            <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 text-sm rounded-lg">
                                Order
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-800">AI Climate & Soil Data</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-xl text-center">
                            <CloudRain className="mx-auto text-blue-500 mb-2" size={24} />
                            <p className="text-2xl font-bold text-gray-800">24°C</p>
                            <p className="text-sm text-gray-500">Cloudy</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl text-center">
                            <Sprout className="mx-auto text-green-500 mb-2" size={24} />
                            <p className="text-2xl font-bold text-gray-800">High</p>
                            <p className="text-sm text-gray-500">Soil Health</p>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <p className="text-sm text-indigo-800">
                            <span className="font-bold">AI Tip:</span> Consider slight irrigation
                            tomorrow morning based on wind patterns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
