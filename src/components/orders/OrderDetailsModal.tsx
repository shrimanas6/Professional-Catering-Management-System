import React from 'react';
import { X, Edit } from 'lucide-react';

interface Order {
  id: number;
  customerName: string;
  functionDate: string;
}

interface OrderDetailsModalProps {
  order: Order;
  onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose }) => {
  const mockFoodItems = [
    { session: 'Morning', foodItem: 'Dosa', quantity: 100, timing: '8:00 AM' },
    { session: 'Evening', foodItem: 'Idly', quantity: 200, timing: '8:00 PM' },
    { session: 'Night', foodItem: 'Sweet', quantity: 150, timing: '9:00 PM' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">Food Order Details</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <p className="mt-1 text-sm text-gray-900">{order.customerName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Function Date</label>
              <p className="mt-1 text-sm text-gray-900">{order.functionDate}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Order Food Info</h4>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Item</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timing</th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockFoodItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.session}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.foodItem}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.timing}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Supplier & Leaf Status</h4>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suppliers</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leaf</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
                  <tr key={time}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Supplier Name</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leaf Status</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-900">
              <Edit className="h-4 w-4 mr-1" />
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;