import { useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      orderDate: '2024-01-15',
      dueDate: '2024-01-30',
      items: 'Suit, Shirt',
      status: 'In Progress',
      amount: 299.99
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2024-01-16',
      dueDate: '2024-01-25',
      items: 'Evening Dress',
      status: 'Pending',
      amount: 199.99
    }
  ]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Orders</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          New Order
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3">Order ID</th>
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Order Date</th>
              <th className="text-left p-3">Due Date</th>
              <th className="text-left p-3">Items</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3">#{order.id}</td>
                <td className="p-3">{order.customerName}</td>
                <td className="p-3">{order.orderDate}</td>
                <td className="p-3">{order.dueDate}</td>
                <td className="p-3">{order.items}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                    order.status === 'Pending' ? 'bg-red-100 text-red-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3">${order.amount}</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
