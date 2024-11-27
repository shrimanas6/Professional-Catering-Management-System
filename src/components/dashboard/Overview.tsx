import React from 'react';
import { Utensils, DollarSign, Users, Clock } from 'lucide-react';

const stats = [
  {
    name: "Today's Orders",
    value: '15',
    icon: Utensils,
    change: '+12%',
    changeType: 'positive',
  },
  {
    name: 'Total Revenue',
    value: '$12,545',
    icon: DollarSign,
    change: '+18.2%',
    changeType: 'positive',
  },
  {
    name: 'Active Customers',
    value: '45',
    icon: Users,
    change: '+5.4%',
    changeType: 'positive',
  },
  {
    name: 'Pending Orders',
    value: '3',
    icon: Clock,
    change: '-8%',
    changeType: 'negative',
  },
];

const Overview: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon
                    className="h-8 w-8 text-orange-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {item.name}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
              <div
                className={`absolute bottom-0 inset-x-0 h-1 ${
                  item.changeType === 'positive'
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Orders
            </h3>
            {/* Add recent orders table here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;