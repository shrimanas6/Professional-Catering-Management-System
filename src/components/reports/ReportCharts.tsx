import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ReportData {
  id: number;
  date: string;
  customerName: string;
  orderStatus: string;
  totalAmount: number;
  items: number;
}

interface ReportChartsProps {
  data: ReportData[];
}

const ReportCharts: React.FC<ReportChartsProps> = ({ data }) => {
  // Process data for charts
  const dates = [...new Set(data.map((item) => item.date))];
  const dailyRevenue = dates.map((date) =>
    data
      .filter((item) => item.date === date)
      .reduce((sum, item) => sum + item.totalAmount, 0)
  );

  const statusCounts = data.reduce((acc, item) => {
    acc[item.orderStatus] = (acc[item.orderStatus] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const itemsPerDay = dates.map((date) =>
    data
      .filter((item) => item.date === date)
      .reduce((sum, item) => sum + item.items, 0)
  );

  const revenueData = {
    labels: dates,
    datasets: [
      {
        label: 'Daily Revenue',
        data: dailyRevenue,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const statusData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const itemsData = {
    labels: dates,
    datasets: [
      {
        label: 'Items Ordered',
        data: itemsPerDay,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Revenue Trend</h3>
        <Line
          data={revenueData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Order Status Distribution</h3>
        <Doughnut
          data={statusData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
            },
          }}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
        <h3 className="text-lg font-medium mb-4">Items Ordered per Day</h3>
        <Bar
          data={itemsData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ReportCharts;