import { Check, CloudRain, Sparkles, TrendingDown } from 'lucide-react';

const NotificationItem = ({ icon: Icon, color, title, desc, time, isUnread }) => (
    <div
        className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
            isUnread ? 'bg-green-50/50' : 'bg-white'
        }`}
    >
        <div className="flex gap-4">
            <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${color}`}
            >
                <Icon size={20} className="text-white" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3
                        className={`font-semibold text-gray-800 ${
                            isUnread ? 'text-green-900' : ''
                        }`}
                    >
                        {title}
                    </h3>
                    <span className="text-xs text-gray-400">{time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
            {isUnread && <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>}
        </div>
    </div>
);

const Notifications = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                <button className="text-sm text-green-600 font-medium">Mark all as read</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <NotificationItem
                    icon={Check}
                    color="bg-green-500"
                    title="Order Confirmed"
                    desc="Your fertilizer order #ORD-2991 has been confirmed and dispatched."
                    time="2 mins ago"
                    isUnread={true}
                />
                <NotificationItem
                    icon={CloudRain}
                    color="bg-blue-500"
                    title="Heavy Rain Alert"
                    desc="Heavy rainfall expected in your district over the next 48 hours. Secure harvested crops."
                    time="1 hour ago"
                    isUnread={true}
                />
                <NotificationItem
                    icon={TrendingDown}
                    color="bg-orange-500"
                    title="Price Drop Alert"
                    desc="Prices for DAP Fertilizer have dropped by 10% in your local mandi."
                    time="4 hours ago"
                    isUnread={false}
                />
                <NotificationItem
                    icon={Sparkles}
                    color="bg-purple-500"
                    title="AI Advisory"
                    desc="Based on soil analysis, nitrogen levels are low. Recommended to apply Urea."
                    time="Yesterday"
                    isUnread={false}
                />
            </div>
        </div>
    );
};

export default Notifications;
