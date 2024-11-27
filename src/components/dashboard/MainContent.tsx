import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Settings from '../settings/Settings';
import OrdersInfo from '../orders/OrdersInfo';
import TodayOrders from '../orders/TodayOrders';
import CompletedOrders from '../orders/CompletedOrders';
import ShopMenu from '../menu/ShopMenu';
import Reports from '../reports/Reports';
import Overview from './Overview';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/orders/*" element={<OrdersInfo />} />
        <Route path="/today" element={<TodayOrders />} />
        <Route path="/completed" element={<CompletedOrders />} />
        <Route path="/menu" element={<ShopMenu />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};

export default MainContent;