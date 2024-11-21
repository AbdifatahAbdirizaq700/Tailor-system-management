import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ScissorsIcon, 
  ShoppingBagIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Dashboard', icon: HomeIcon },
    { path: '/customers', name: 'Customers', icon: UserGroupIcon },
    { path: '/measurements', name: 'Measurements', icon: ScissorsIcon },
    { path: '/orders', name: 'Orders', icon: ShoppingBagIcon },
    { path: '/analytics', name: 'Analytics', icon: ChartBarIcon },
    { path: '/payments', name: 'Payments', icon: CurrencyDollarIcon },
    { path: '/settings', name: 'Settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-600 text-white w-64 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-blue-500/30">
        <h1 className="text-2xl font-bold text-center">
          Tailor<span className="text-blue-200">Pro</span>
        </h1>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center space-x-3 px-4 py-2.5 rounded-lg
                  transition-all duration-200 group
                  ${isActive 
                    ? 'bg-white text-blue-700' 
                    : 'hover:bg-blue-500/50 text-gray-100'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-700' : 'text-blue-200'}`} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-t border-blue-500/30">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/36"
            alt="Profile"
            className="w-9 h-9 rounded-full border border-blue-400"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin User</p>
            <p className="text-xs text-blue-200 truncate">admin@tailor.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
