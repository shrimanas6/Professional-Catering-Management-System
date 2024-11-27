import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import AddOrder from './AddOrder';
import ViewOrders from './ViewOrders';

const OrdersInfo: React.FC = () => {
  const location = useLocation();

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <Link
              to="/orders/add"
              className={`${
                location.pathname === '/orders/add'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Add Orders
            </Link>
            <Link
              to="/orders/view"
              className={`${
                location.pathname === '/orders/view'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              View Orders
            </Link>
          </nav>
        </div>

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Navigate to="/orders/view" replace />} />
            <Route path="/add" element={<AddOrder />} />
            <Route path="/view" element={<ViewOrders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default OrdersInfo;