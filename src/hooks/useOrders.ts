import { useState, useEffect } from 'react';
import { Order } from '../types/order';

// Mock data - replace with actual API call
const mockOrders: Order[] = [
  {
    id: '1001',
    status: 'Pending',
    date: '2024-03-20',
    customerName: 'John Smith',
    deliveryTime: '12:30 PM',
    location: '123 Business Park',
    items: [
      { name: 'Vegetable Biryani', quantity: 2 },
      { name: 'Butter Naan', quantity: 4 },
    ],
    totalAmount: 45.50,
  },
  {
    id: '1002',
    status: 'Processing',
    date: '2024-03-20',
    customerName: 'Sarah Johnson',
    deliveryTime: '1:00 PM',
    location: 'Tech Hub Building',
    items: [
      { name: 'Mixed Platter', quantity: 1 },
      { name: 'Dessert Box', quantity: 2 },
    ],
    totalAmount: 65.75,
  },
];

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchOrders = async () => {
      try {
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { orders, isLoading };
};