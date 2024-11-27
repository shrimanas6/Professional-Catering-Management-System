import React from 'react';
import { Plus } from 'lucide-react';

const ShopMenu: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Shop Menu</h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Menu Item
          </button>
        </div>
        
        <div className="mt-4 bg-white shadow rounded-lg">
          <div className="p-6">
            <p className="text-gray-500">Menu content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMenu;