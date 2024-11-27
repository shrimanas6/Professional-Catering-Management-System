import React from 'react';
import OrderCard from './OrderCard';
import { useOrders } from '../../hooks/useOrders';

const OrderList: React.FC = () => {
  const { orders, isLoading } = useOrders();

  if (isLoading) {
    return (
      <div className="mt-6 grid gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 h-32 rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;