import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Plus, X } from 'lucide-react';

interface OrderItem {
  session: string;
  foodItem: string;
  quantity: number;
  timing: string;
}

interface SupplierLeafStatus {
  time: string;
  supplier: string;
  leaf: string;
}

const AddOrder: React.FC = () => {
  const [functionDate, setFunctionDate] = useState<Date | null>(new Date('2024-10-15'));
  const [orderItems, setOrderItems] = useState<OrderItem[]>([{
    session: '',
    foodItem: '',
    quantity: 0,
    timing: ''
  }]);
  const [customTiming, setCustomTiming] = useState('');
  const [showCustomTiming, setShowCustomTiming] = useState(false);

  const [supplierLeafStatus, setSupplierLeafStatus] = useState<SupplierLeafStatus[]>([
    { time: 'Morning', supplier: '', leaf: '' },
    { time: 'Afternoon', supplier: '', leaf: '' },
    { time: 'Evening', supplier: '', leaf: '' },
    { time: 'Night', supplier: '', leaf: '' }
  ]);

  const sessions = ['Morning', 'Evening', 'Night'];
  const foodItems = ['Dosa', 'Sweet', 'Idly'];
  const timings = ['8:00 AM', '9:00 AM', '10:00 AM', '8:00 PM', '9:00 PM', '10:00 PM'];
  const places = ['Bangalore', 'Mangalore'];

  const addOrderItem = () => {
    setOrderItems([...orderItems, {
      session: '',
      foodItem: '',
      quantity: 0,
      timing: ''
    }]);
  };

  const removeOrderItem = (index: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const updateOrderItem = (index: number, field: keyof OrderItem, value: string | number) => {
    const newItems = [...orderItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setOrderItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Add Food Orders</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Function Date</label>
              <div className="mt-1 relative">
                <DatePicker
                  selected={functionDate}
                  onChange={(date) => setFunctionDate(date)}
                  dateFormat="dd-MMM-yyyy"
                  className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholderText="Select date"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Function Place</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md">
                <option value="">Select place</option>
                {places.map((place) => (
                  <option key={place} value={place}>{place}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input 
                type="text" 
                placeholder="e.g., Arun, Vijay"
                className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input 
                type="tel" 
                pattern="[0-9]{10}" 
                placeholder="10 digit number"
                className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea 
                rows={3} 
                className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Note</label>
              <textarea 
                rows={2} 
                className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Supplier & Leaf Status</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suppliers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leaf</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {supplierLeafStatus.map((status, index) => (
                    <tr key={status.time}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{status.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={status.supplier}
                          onChange={(e) => {
                            const newStatus = [...supplierLeafStatus];
                            newStatus[index].supplier = e.target.value;
                            setSupplierLeafStatus(newStatus);
                          }}
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={status.leaf}
                          onChange={(e) => {
                            const newStatus = [...supplierLeafStatus];
                            newStatus[index].leaf = e.target.value;
                            setSupplierLeafStatus(newStatus);
                          }}
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Order Items</h3>
              <button
                type="button"
                onClick={addOrderItem}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <select
                    value={item.session}
                    onChange={(e) => updateOrderItem(index, 'session', e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Session</option>
                    {sessions.map((session) => (
                      <option key={session} value={session}>{session}</option>
                    ))}
                  </select>

                  <select
                    value={item.foodItem}
                    onChange={(e) => updateOrderItem(index, 'foodItem', e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Food Item</option>
                    {foodItems.map((food) => (
                      <option key={food} value={food}>{food}</option>
                    ))}
                  </select>

                  <input
                    type="number"
                    value={item.quantity || ''}
                    onChange={(e) => updateOrderItem(index, 'quantity', parseInt(e.target.value))}
                    placeholder="Quantity"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                  />

                  <div className="relative flex-1">
                    {!showCustomTiming ? (
                      <select
                        value={item.timing}
                        onChange={(e) => updateOrderItem(index, 'timing', e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                      >
                        <option value="">Select Timing</option>
                        {timings.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="time"
                        value={customTiming}
                        onChange={(e) => setCustomTiming(e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setShowCustomTiming(!showCustomTiming)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <Plus className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>

                  {orderItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeOrderItem(index)}
                      className="inline-flex items-center p-2 border border-transparent rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
      </div>
    </div>
  );
};

export default AddOrder;