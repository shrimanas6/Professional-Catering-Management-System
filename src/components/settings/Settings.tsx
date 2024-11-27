import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import SessionManage from './SessionManage';
import FoodItems from './FoodItems';
import VesselItems from './VesselItems';

const Settings: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { id: 'profile', name: 'User Profile', path: '/settings/profile' },
    { id: 'session', name: 'Session Manage', path: '/settings/session' },
    { id: 'food', name: 'Food Items', path: '/settings/food' },
    { id: 'vessel', name: 'Vessel Items', path: '/settings/vessel' },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`${
                  location.pathname === tab.path
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/session" element={<SessionManage />} />
            <Route path="/food" element={<FoodItems />} />
            <Route path="/vessel" element={<VesselItems />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;