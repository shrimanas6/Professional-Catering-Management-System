import React, { useState } from 'react';
import { Search, Store, Eye, Package2, Edit, Trash2, CheckSquare, Plus, MessageCircle } from 'lucide-react';
import OrderDetailsModal from './OrderDetailsModal';
import VesselInfoModal from './VesselInfoModal';

interface Order {
  id: number;
  customerName: string;
  contactNumber: string;
  functionDate: string;
  functionPlace: string;
  totalOrders: string;
  note: string;
}

const ViewOrders: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isVesselModalOpen, setIsVesselModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const mockOrders: Order[] = [
    {
      id: 1,
      customerName: 'Arun Kumar',
      contactNumber: '9876543210',
      functionDate: '16-Oct-2024',
      functionPlace: 'Bangalore',
      totalOrders: '1350 items',
      note: 'Special instructions for spice level'
    },
    {
      id: 2,
      customerName: 'Vijay Sharma',
      contactNumber: '9876543211',
      functionDate: '17-Oct-2024',
      functionPlace: 'Mangalore',
      totalOrders: '5700 items',
      note: 'Require extra packaging'
    }
  ];

  const openOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsOrderModalOpen(true);
  };

  const openVesselInfo = (order: Order) => {
    setSelectedOrder(order);
    setIsVesselModalOpen(true);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-lg font-medium text-gray-900">List Orders Info</h2>
          <div className="mt-4 sm:mt-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Store className="h-4 w-4 mr-2" />
              View Shop Menus
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative rounded-md shadow-sm max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search orders..."
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer Name</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact Number</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Function Date</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Function Place</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Orders</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Note</th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {mockOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {order.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.customerName}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.contactNumber}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.functionDate}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.functionPlace}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.totalOrders}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.note}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => openOrderDetails(order)}
                              className="text-blue-600 hover:text-blue-900"
                              title="View Order"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => openVesselInfo(order)}
                              className="text-purple-600 hover:text-purple-900"
                              title="Vessels Info"
                            >
                              <Package2 className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900" title="Edit">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900" title="Confirm Items">
                              <CheckSquare className="h-4 w-4" />
                            </button>
                            <button className="text-orange-600 hover:text-orange-900" title="Add Additional Items">
                              <Plus className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900" title="Send WhatsApp">
                              <MessageCircle className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOrderModalOpen && selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}

      {isVesselModalOpen && selectedOrder && (
        <VesselInfoModal
          order={selectedOrder}
          onClose={() => setIsVesselModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ViewOrders;