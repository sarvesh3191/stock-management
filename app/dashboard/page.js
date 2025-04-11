"use client";

import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const salesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [12000, 15000, 10000, 20000, 25000, 30000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const newUsersData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'New Users',
      data: [500, 700, 800, 1200, 1500, 1800],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
    },
  ],
};

const purchaseHistoryData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Purchase History',
      data: [300, 400, 350, 500, 600, 750],
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
    },
  ],
};

const websiteVisitorsData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Website Visitors',
      data: [8000, 12000, 15000, 20000, 18000, 22000, 25000],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const websiteVisitorsOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Website Visitors (Bar Chart)',
      font: {
        size: 20,
        weight: 'bold',
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Overview',
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome to the Creative Dashboard!</h1>
            </header>

        {/* Content Area */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
            <div className="w-full h-64">
              <Line data={salesData} options={options} />
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">New Users</h3>
            <div className="w-full h-64">
              <Line data={newUsersData} options={options} />
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">Purchase History</h3>
            <div className="w-full h-64">
              <Line data={purchaseHistoryData} options={options} />
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Website Visitors</h3>
            <div className="w-full h-72">
              <Bar data={websiteVisitorsData} options={websiteVisitorsOptions} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
