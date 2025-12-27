import {
    Bell,
    CreditCard,
    LayoutDashboard,
    Menu,
    Settings as SettingsIcon,
    ShoppingCart,
    Sprout,
    X,
} from 'lucide-react';
import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Orders from './pages/Orders';
import Payments from './pages/Payments';
import Settings from './pages/Settings';

// FIXED: Destructured 'icon' prop and renamed it to 'Icon' for usage as a component
const SidebarItem = ({ to, icon: Icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-green-50'
            }`}
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </Link>
    );
};

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Router>
            <div className="flex h-screen bg-gray-50">
                {/* Mobile Sidebar Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <aside
                    className={`
            fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
                >
                    <div className="p-6 border-b flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-green-700">Kissan Shakthi</h1>
                            <p className="text-sm text-gray-500">Farmer's Companion</p>
                        </div>
                        {/* Added Close Button for Mobile */}
                        <button
                            className="lg:hidden text-gray-500"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="p-4 space-y-2">
                        <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
                        <SidebarItem to="/my-farm" icon={Sprout} label="My Farm" />
                        <SidebarItem to="/orders" icon={ShoppingCart} label="Orders" />
                        <SidebarItem to="/payments" icon={CreditCard} label="Payments" />
                        <SidebarItem to="/notifications" icon={Bell} label="Notifications" />
                        <SidebarItem to="/settings" icon={SettingsIcon} label="Settings" />
                    </nav>

                    <div className="absolute bottom-0 w-full p-4 border-t bg-gray-50">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                                KS
                            </div>
                            <div>
                                <p className="text-sm font-medium">Farmer ID: 210.293A</p>
                                <p className="text-xs text-gray-500">Online</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    {/* Mobile Header */}
                    <div className="lg:hidden p-4 bg-white shadow-sm flex justify-between items-center sticky top-0 z-10">
                        <span className="font-bold text-green-700">Kissan Shakthi</span>
                        <button onClick={() => setIsSidebarOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="p-4 lg:p-8 max-w-7xl mx-auto">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/my-farm" element={<Home />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/payments" element={<Payments />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default App;
