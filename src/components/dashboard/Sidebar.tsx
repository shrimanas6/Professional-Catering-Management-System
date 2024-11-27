import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Settings,
  ClipboardList,
  Calendar,
  CheckSquare,
  Store,
  BarChart3,
  X,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItem {
  name: string;
  icon: any;
  path: string;
  submenu?: { name: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const navigation: NavItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Orders Info', icon: ClipboardList, path: '/orders/view' },
    { name: "Today's Orders", icon: Calendar, path: '/today' },
    { name: 'Completed Orders', icon: CheckSquare, path: '/completed' },
    { name: 'Shop Menu', icon: Store, path: '/menu' },
    { name: 'Reports', icon: BarChart3, path: '/reports' },
    {
      name: 'Settings',
      icon: Settings,
      path: '/settings',
      submenu: [
        { name: 'User Profile', path: '/settings/profile' },
        { name: 'Session Manage', path: '/settings/session' },
        { name: 'Food Items', path: '/settings/food' },
        { name: 'Vessel Items', path: '/settings/vessel' },
      ],
    },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleSubmenu = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-linear duration-300 ${
          isOpen ? 'opacity-100 z-30' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 flex flex-col max-w-64 w-full bg-white transform transition duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 flex-shrink-0 px-4 bg-orange-600">
          <span className="text-xl font-semibold text-white">
            Catering Management
          </span>
          <button
            className="rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className={`flex-1 flex items-center px-2 py-2 text-sm font-medium rounded-md group ${
                      isActivePath(item.path)
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                    onClick={() => {
                      if (!item.submenu) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="p-2 rounded-md hover:bg-orange-50"
                    >
                      <ChevronRight
                        className={`h-4 w-4 transform transition-transform ${
                          expandedItem === item.name ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && expandedItem === item.name && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-md ${
                          isActivePath(subItem.path)
                            ? 'bg-orange-50 text-orange-600'
                            : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;