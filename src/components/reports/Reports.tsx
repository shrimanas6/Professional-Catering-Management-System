import React, { useState } from 'react';
import { Download, Calendar, Filter } from 'lucide-react';
import ReportCharts from './ReportCharts';
import { utils, writeFile } from 'xlsx';

interface ReportFilter {
  dateRange: string;
  orderStatus: string;
  customerName: string;
}

interface ReportData {
  id: number;
  date: string;
  customerName: string;
  orderStatus: string;
  totalAmount: number;
  items: number;
}

const Reports: React.FC = () => {
  const [filters, setFilters] = useState<ReportFilter>({
    dateRange: 'today',
    orderStatus: 'all',
    customerName: '',
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data with more entries for better visualization
  const mockData: ReportData[] = [
    {
      id: 1,
      date: '2024-03-20',
      customerName: 'John Smith',
      orderStatus: 'Completed',
      totalAmount: 150.0,
      items: 5,
    },
    {
      id: 2,
      date: '2024-03-20',
      customerName: 'Sarah Johnson',
      orderStatus: 'Processing',
      totalAmount: 85.5,
      items: 3,
    },
    {
      id: 3,
      date: '2024-03-21',
      customerName: 'Mike Brown',
      orderStatus: 'Pending',
      totalAmount: 220.0,
      items: 7,
    },
    {
      id: 4,
      date: '2024-03-21',
      customerName: 'Emily Davis',
      orderStatus: 'Completed',
      totalAmount: 175.0,
      items: 4,
    },
    {
      id: 5,
      date: '2024-03-22',
      customerName: 'Alex Wilson',
      orderStatus: 'Cancelled',
      totalAmount: 95.0,
      items: 2,
    },
  ];

  const handleFilterChange = (key: keyof ReportFilter, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(mockData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Orders Report');
    writeFile(workbook, 'orders-report.xlsx');
  };

  // Filter data based on current filters
  const filteredData = mockData.filter((order) => {
    const matchesStatus =
      filters.orderStatus === 'all' ||
      order.orderStatus.toLowerCase() === filters.orderStatus.toLowerCase();
    const matchesCustomer = filters.customerName
      ? order.customerName
          .toLowerCase()
          .includes(filters.customerName.toLowerCase())
      : true;
    return matchesStatus && matchesCustomer;
  });

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <div className="flex space-x-3">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
            <button
              onClick={exportToExcel}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {isFilterOpen && (
          <div className="mt-4 bg-white p-4 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date Range
                </label>
                <select
                  value={filters.dateRange}
                  onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Order Status
                </label>
                <select
                  value={filters.orderStatus}
                  onChange={(e) =>
                    handleFilterChange('orderStatus', e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={filters.customerName}
                  onChange={(e) =>
                    handleFilterChange('customerName', e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  placeholder="Search by customer name"
                />
              </div>
            </div>
          </div>
        )}

        <ReportCharts data={filteredData} />

        <div className="mt-8">
          <div className="flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Items
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                        >
                          Total Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {filteredData.map((order) => (
                        <tr key={order.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                            {order.date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {order.customerName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                order.orderStatus === 'Completed'
                                  ? 'bg-green-100 text-green-800'
                                  : order.orderStatus === 'Processing'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : order.orderStatus === 'Cancelled'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {order.orderStatus}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {order.items}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-900">
                            ${order.totalAmount.toFixed(2)}
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
      </div>
    </div>
  );
};

export default Reports;