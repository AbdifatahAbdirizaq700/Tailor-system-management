import { useState } from 'react';
import { 
  UserIcon, 
  BuildingStorefrontIcon, 
  BellIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  WrenchIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile Settings', icon: UserIcon },
    { id: 'business', name: 'Business Settings', icon: BuildingStorefrontIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'payments', name: 'Payment Settings', icon: CurrencyDollarIcon },
    { id: 'users', name: 'User Management', icon: UserGroupIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'integrations', name: 'Integrations', icon: WrenchIcon },
    { id: 'invoice', name: 'Invoice Settings', icon: DocumentTextIcon },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md min-h-[calc(100vh-2rem)]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r min-h-[calc(100vh-2rem)]">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Settings</h2>
          </div>
          <nav className="space-y-1 p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${activeTab === tab.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Profile Settings</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Personal Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="Admin User"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="admin@tailor.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="+1234567890"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Shop Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Shop Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="TailorPro Shop"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        rows="3"
                        defaultValue="123 Fashion Street"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Business Hours</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="9:00 AM - 6:00 PM"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Add other tab contents similarly */}
        </div>
      </div>
    </div>
  );
}

export default Settings;
