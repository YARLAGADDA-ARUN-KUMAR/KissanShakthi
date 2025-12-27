import { CheckCircle, Package, Phone, Truck } from 'lucide-react';

const Orders = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Orders & Bookings</h1>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-gray-800 flex items-center gap-2">
                            <Truck size={20} className="text-orange-500" />
                            Tractor Rental
                        </h2>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                            In Progress
                        </span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-500">Booking ID</p>
                                <p className="font-medium">TR-882910</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Start Time</p>
                                <p className="font-medium">Today, 09:00 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-medium border border-red-100">
                                Cancel Booking
                            </button>
                            <button className="flex-1 bg-green-50 text-green-600 py-2 rounded-lg text-sm font-medium border border-green-100">
                                Track Driver
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-gray-800 flex items-center gap-2">
                            <Package size={20} className="text-green-500" />
                            Fertilizer Delivery
                        </h2>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                            Dispatched
                        </span>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-xl">🧪</span>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Urea 46% Nitrogen</p>
                                <p className="text-sm text-gray-500">2 Bags • ₹540.00</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
                            <div className="w-3/4 bg-green-500 h-2 rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-500 text-right">Arriving by 4:00 PM</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 opacity-75">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-gray-800 flex items-center gap-2">
                            <Users size={20} className="text-purple-500" />
                            Labour Booking
                        </h2>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium flex items-center gap-1">
                            <CheckCircle size={12} /> Completed
                        </span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <p className="font-medium text-gray-800">Harvesting Team (5 ppl)</p>
                                <p className="text-sm text-gray-500">Yesterday</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 text-gray-400 hover:text-green-600">
                                    <Phone size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for icon
const Users = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

export default Orders;
