import React, { useState } from 'react';
import { X, Edit, Trash2, Edit2 } from 'lucide-react';

interface Order {
  id: number;
  customerName: string;
  functionDate: string;
}

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

interface FoodOrderItem {
  id: number;
  session: string;
  foodItem: string;
  quantity: number;
  timing: string;
}

interface SupplierLeaf {
  morning: boolean;
  evening: boolean;
  night: boolean;
  afternoon: boolean;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onClose }) => {
  const [foodOrders] = useState<FoodOrderItem[]>([
    {
      id: 1,
      session: 'Morning',
      foodItem: 'Dosa',
      quantity: 100,
      timing: '8:00 AM',
    },
    {
      id: 2,
      session: 'Evening',
      foodItem: 'Idly',
      quantity: 150,
      timing: '4:00 PM',
    },
  ]);

  const [supplierLeaf] = useState<SupplierLeaf>({
    morning: true,
    evening: true,
    night: false,
    afternoon: true,
  });

  const handleEdit = (id: number) => {
    console.log('Edit item:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete item:', id);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Food Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <p className="mt-1 text-sm text-gray-900">{order.customerName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Function Date
            </label>
            <p className="mt-1 text-sm text-gray-900">{order.functionDate}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            Order Food Info
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Session
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Food Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timing
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {foodOrders.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.session}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.foodItem}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.timing}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            Supplier & Leaf Status
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Suppliers
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leaf
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(supplierLeaf).map(([time, value]) => (
                  <tr key={time}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                      {time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={value}
                        readOnly
                        className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={value}
                        readOnly
                        className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-900">
              <Edit2 className="h-5 w-5 mr-1" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;