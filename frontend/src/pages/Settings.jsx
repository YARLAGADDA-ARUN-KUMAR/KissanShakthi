import {
    ChevronRight,
    CreditCard,
    Globe,
    HelpCircle,
    LogOut,
    Shield,
    User,
    WifiOff,
} from 'lucide-react';

const SettingsSection = ({ title, children }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-bold text-gray-700">{title}</h2>
        </div>
        <div className="divide-y divide-gray-100">{children}</div>
    </div>
);

const SettingsItem = ({ icon: Icon, label, value, type = 'arrow' }) => (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer">
        <div className="flex items-center gap-4">
            <div className="text-gray-400">
                <Icon size={20} />
            </div>
            <div>
                <p className="font-medium text-gray-800">{label}</p>
                {value && <p className="text-sm text-gray-500">{value}</p>}
            </div>
        </div>
        {type === 'arrow' && <ChevronRight size={18} className="text-gray-400" />}
        {type === 'toggle' && (
            <div className="w-11 h-6 bg-green-600 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
        )}
    </div>
);

const Settings = () => {
    return (
        <div className="max-w-3xl mx-auto pb-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

            <SettingsSection title="Profile & Security">
                <SettingsItem icon={User} label="Farmer ID" value="210.293A2021" />
                <SettingsItem
                    icon={Shield}
                    label="Two-Factor Authentication"
                    value="Enabled"
                    type="toggle"
                />
            </SettingsSection>

            <SettingsSection title="Preferences">
                <SettingsItem icon={Globe} label="Language" value="English (Selected)" />
                <SettingsItem
                    icon={WifiOff}
                    label="Offline Mode"
                    value="Sync data automatically"
                    type="toggle"
                />
            </SettingsSection>

            <SettingsSection title="Billing & Support">
                <SettingsItem icon={CreditCard} label="Payments" value="Manage cards & history" />
                <SettingsItem icon={HelpCircle} label="Help & Support" value="FAQs, Contact Us" />
            </SettingsSection>

            <button className="w-full flex items-center justify-center gap-2 text-red-600 font-medium py-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                <LogOut size={20} />
                Sign Out
            </button>
        </div>
    );
};

export default Settings;
