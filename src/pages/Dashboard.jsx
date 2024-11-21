import { useState } from 'react';
import { 
  ShoppingBagIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

function Dashboard() {
  const statsCards = [
    { title: 'Total Orders', value: '156', trend: '+12%', icon: ShoppingBagIcon },
    { title: 'Active Orders', value: '45', trend: '+5%', icon: ClockIcon },
    { title: 'Total Revenue', value: '$15,240', trend: '+8%', icon: CurrencyDollarIcon },
    { title: 'Total Customers', value: '98', trend: '+15%', icon: UserGroupIcon }
  ];

  const recentOrders = [
    { id: 1, customer: 'John Doe', date: '2024-01-20', status: 'In Progress', amount: 299 },
    { id: 2, customer: 'Jane Smith', date: '2024-01-19', status: 'Pending', amount: 199 },
    { id: 3, customer: 'Mike Johnson', date: '2024-01-18', status: 'Completed', amount: 399 }
  ];

  const upcomingDeliveries = [
    { id: 1, customer: 'John Doe', dueDate: '2024-01-21', status: 'Due Today' },
    { id: 2, customer: 'Sarah Wilson', dueDate: '2024-01-23', status: 'This Week' },
    { id: 3, customer: 'Tom Brown', dueDate: '2024-01-18', status: 'Overdue' }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                <div className="flex items-center text-green-500 text-sm mt-2">
                  <ChevronUpIcon className="w-4 h-4" />
                  <span>{card.trend}</span>
                </div>
              </div>
              <card.icon className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders & Upcoming Deliveries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3">#{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.date}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">${order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Deliveries */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Deliveries</h2>
          <div className="space-y-4">
            {upcomingDeliveries.map((delivery) => (
              <div key={delivery.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{delivery.customer}</h3>
                  <p className="text-sm text-gray-500">Due: {delivery.dueDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  delivery.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                  delivery.status === 'Due Today' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {delivery.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Order Completion Rate</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
