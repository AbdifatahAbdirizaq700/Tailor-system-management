import { useState } from 'react';
import { 
  UserIcon, 
  PhoneIcon, 
  CalendarIcon, 
  PlusIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import SearchBar from '../components/SearchBar';

function Customers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const [customers] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '(555) 123-4567',
      email: 'john.doe@email.com',
      address: '123 Fashion Street, NY',
      joinDate: '2023-12-15',
      measurements: [
        { date: '2024-01-15', type: 'Suit', chest: 40, waist: 34, inseam: 32, shoulder: 18, sleeve: 25 },
        { date: '2023-12-20', type: 'Shirt', chest: 40, neck: 16, shoulder: 18, sleeve: 25 }
      ],
      orders: [
        { id: 'ORD001', date: '2024-01-15', items: 'Custom Suit', status: 'In Progress', amount: '$599' },
        { id: 'ORD002', date: '2023-12-20', items: '2 Formal Shirts', status: 'Completed', amount: '$199' }
      ],
      appointments: [
        { date: '2024-01-25', time: '10:00 AM', purpose: 'Suit Fitting' },
        { date: '2024-02-01', time: '2:00 PM', purpose: 'Final Delivery' }
      ]
    },
    // ... other customers data
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery) ||
    customer.phone.includes(searchQuery) ||
    customer.email.toLowerCase().includes(searchQuery)
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-5 h-5 text-gray-400" />
                    <span>{selectedCustomer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                    <span>{selectedCustomer.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-5 h-5 text-gray-400" />
                    <span>{selectedCustomer.address}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-4">Customer Since</h3>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                  <span>{selectedCustomer.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'measurements':
        return (
          <div className="space-y-6">
            {selectedCustomer.measurements.map((measurement, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-medium">{measurement.type}</h3>
                    <p className="text-sm text-gray-500">{measurement.date}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(measurement)
                    .filter(([key]) => !['date', 'type'].includes(key))
                    .map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded">
                        <span className="text-sm text-gray-500 capitalize">{key}</span>
                        <p className="font-medium">{value}"</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Items</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCustomer.orders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="py-3">{order.id}</td>
                      <td className="py-3">{order.date}</td>
                      <td className="py-3">{order.items}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3">{order.amount}</td>
                      <td className="py-3">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'appointments':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Upcoming Appointments</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                New Appointment
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {selectedCustomer.appointments.map((appointment, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">{appointment.date}</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">Edit</button>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Time: {appointment.time}</p>
                    <p>Purpose: {appointment.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex gap-6">
      <div className="w-80 bg-white rounded-xl shadow-md flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Customers</h2>
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <SearchBar 
            placeholder="Search customers..." 
            onSearch={handleSearch}
            className="mb-2"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {filteredCustomers.map((customer) => (
              <div
                key={customer.id}
                onClick={() => setSelectedCustomer(customer)}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedCustomer?.id === customer.id 
                    ? 'bg-blue-50 border-blue-200 border' 
                    : 'hover:bg-gray-50 border'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{customer.name}</h3>
                    <p className="text-sm text-gray-500">{customer.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-md flex flex-col">
        {selectedCustomer ? (
          <>
            <div className="p-6 border-b">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <UserIcon className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCustomer.name}</h2>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <PhoneIcon className="w-4 h-4 mr-1" />
                      {selectedCustomer.phone}
                    </span>
                    <span className="flex items-center">
                      <EnvelopeIcon className="w-4 h-4 mr-1" />
                      {selectedCustomer.email}
                    </span>
                  </div>
                </div>
              </div>

              <nav className="flex space-x-6">
                {['Profile', 'Measurements', 'Orders', 'Appointments'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-2 transition-colors ${
                      activeTab === tab.toLowerCase()
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {renderTabContent()}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a customer to view details
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;
