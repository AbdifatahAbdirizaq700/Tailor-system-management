import { useState } from 'react';
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CalendarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

function Payments() {
  const paymentStats = [
    { title: 'Total Revenue', value: '$15,240', trend: '+12%', icon: CurrencyDollarIcon },
    { title: 'Pending Payments', value: '$2,450', trend: '-5%', icon: ClockIcon },
    { title: "Today's Earnings", value: '$850', trend: '+8%', icon: ArrowTrendingUpIcon },
    { title: 'Monthly Revenue', value: '$8,920', trend: '+15%', icon: CalendarIcon }
  ];

  const recentTransactions = [
    { 
      id: 'TRX001', 
      customer: 'John Doe', 
      order: 'Custom Suit', 
      amount: '$299',
      method: 'Credit Card',
      status: 'Completed',
      date: '2024-01-20' 
    },
    { 
      id: 'TRX002', 
      customer: 'Jane Smith', 
      order: 'Evening Dress', 
      amount: '$199',
      method: 'Cash',
      status: 'Pending',
      date: '2024-01-19' 
    },
    { 
      id: 'TRX003', 
      customer: 'Mike Johnson', 
      order: 'Wedding Suit', 
      amount: '$599',
      method: 'Bank Transfer',
      status: 'Processing',
      date: '2024-01-18' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
        <div className="space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Record Payment
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paymentStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div className={`flex items-center text-sm mt-2 ${
                  stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  <span>{stat.trend}</span>
                </div>
              </div>
              <stat.icon className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Transaction ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Order</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Method</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-4">{transaction.id}</td>
                  <td className="py-4">{transaction.customer}</td>
                  <td className="py-4">{transaction.order}</td>
                  <td className="py-4">{transaction.amount}</td>
                  <td className="py-4">{transaction.method}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4">{transaction.date}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <DocumentTextIcon className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <ArrowDownTrayIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CurrencyDollarIcon className="w-6 h-6 text-gray-500" />
                <span className="font-medium">Cash</span>
              </div>
              <span className="text-green-600">Active</span>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CurrencyDollarIcon className="w-6 h-6 text-gray-500" />
                <span className="font-medium">Credit Card</span>
              </div>
              <span className="text-green-600">Active</span>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CurrencyDollarIcon className="w-6 h-6 text-gray-500" />
                <span className="font-medium">Bank Transfer</span>
              </div>
              <span className="text-green-600">Active</span>
            </div>
          </div>
        </div>

        {/* Invoice Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <DocumentTextIcon className="w-6 h-6 text-gray-500 mb-2" />
              <h3 className="font-medium">Generate Invoice</h3>
              <p className="text-sm text-gray-500">Create new invoice</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <ArrowDownTrayIcon className="w-6 h-6 text-gray-500 mb-2" />
              <h3 className="font-medium">Download Report</h3>
              <p className="text-sm text-gray-500">Export payment data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
