import { Calendar, Droplets, Plus, Thermometer } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">My Farm</h1>
                    <p className="text-gray-500">Manage fields, crops and harvest timelines</p>
                </div>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    <Plus size={20} />
                    <span>Add New Field</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm">Total Land</p>
                    <p className="text-2xl font-bold text-gray-800">12.5 Acres</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm">Active Crops</p>
                    <p className="text-2xl font-bold text-gray-800">3 Types</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm">Pending Tasks</p>
                    <p className="text-2xl font-bold text-orange-600">5 Tasks</p>
                </div>
            </div>

            <h2 className="text-lg font-bold text-gray-800 mt-8">My Fields</h2>
            <div className="space-y-4">
                {[1, 2].map((field) => (
                    <div
                        key={field}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                        <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-700">Plot #{field} - North Zone</h3>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                Active
                            </span>
                        </div>
                        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-xs text-gray-500">Current Crop</p>
                                <p className="font-medium text-gray-800">Paddy (Rice)</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Sown Date</p>
                                <p className="font-medium text-gray-800">12 Oct 2024</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Harvest Estimate</p>
                                <p className="font-medium text-gray-800">25 Jan 2025</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Health Status</p>
                                <p className="font-medium text-green-600">Good</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <Thermometer size={16} /> 28°C
                            </div>
                            <div className="flex items-center gap-1">
                                <Droplets size={16} /> 65% Moisture
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-100 mt-6">
                <div className="flex items-start space-x-3">
                    <Calendar className="text-green-600 mt-1" size={20} />
                    <div>
                        <h3 className="font-bold text-green-800">Current Agricultural Season</h3>
                        <p className="text-sm text-green-700">
                            Rabi Season. Ideal for Wheat, Mustard, and Pulses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
