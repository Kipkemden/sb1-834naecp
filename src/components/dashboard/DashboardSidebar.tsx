import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Tool, BarChart2, Settings } from 'lucide-react';

const navigation = [
  { name: 'Overview', to: '/dashboard', icon: Home },
  { name: 'Properties', to: '/dashboard/properties', icon: Home },
  { name: 'Tenants', to: '/dashboard/tenants', icon: Users },
  { name: 'Maintenance', to: '/dashboard/maintenance', icon: Tool },
  { name: 'Reports', to: '/dashboard/reports', icon: BarChart2 },
  { name: 'Settings', to: '/dashboard/settings', icon: Settings },
];

const DashboardSidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <nav className="flex-1 px-2 py-4 bg-white space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon
                  className="mr-3 flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};