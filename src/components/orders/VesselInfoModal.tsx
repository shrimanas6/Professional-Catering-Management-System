import React, { useState } from 'react';
import { X, Edit, Trash2 } from 'lucide-react';

interface VesselItem {
  id: number;
  vesselItem: string;
  quantity: number;
}

interface VesselInfoModalProps {
  order: {
    customerName: string;
    functionPlace: string;
    functionDate: string;
  };
  onClose: () => void;
}

const VesselInfoModal: React.FC<VesselInfoModalProps> = ({ order, onClose }) => {
  const [formData, setFormData] = useState({
    vesselItem: '',
    quantity: '',
  });

  const [vesselItems, setVesselItems] = useState<VesselItem[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.vesselItem && formData.quantity) {
      setVesselItems([
        ...vesselItems,
        {
          id: Date.now(),
          vesselItem: formData.vesselItem,
          quantity: parseInt(formData.quantity),
        },
      ]);
      setFormData({ vesselItem: '', quantity: '' });
    }
  };

  const handleEdit = (id: number) => {
    const item = vesselItems.find((item) => item.id === id);
    if (item) {
      setFormData({
        vesselItem: item.vesselItem,
        quantity: item.quantity.toString(),
      });
      handleDelete(id);
    }
  };

  const handleDelete = (id: number) => {
    setVesselItems(vesselItems.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-medium text-gray-900">Vessel Order Details</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                value={order.customerName}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Function Place</label>
              <input
                type="text"
                value={order.functionPlace}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Function Date</label>
              <input
                type="text"
                value={order.functionDate}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Vessel Item</label>
              <input
                type="text"
                value={formData.vesselItem}
                onChange={(e) => setFormData({ ...formData, vesselItem: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Enter vessel item"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Enter quantity"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Submit
              </button>
            </div>
          </form>

          {vesselItems.length > 0 && (
            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Vessel Items List</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vessel Item
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {vesselItems.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.vesselItem}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => handleEdit(item.id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VesselInfoModal;