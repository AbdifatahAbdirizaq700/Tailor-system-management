import { useState } from 'react';

function Measurements() {
  const [measurements, setMeasurements] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      chest: 40,
      waist: 34,
      hips: 42,
      inseam: 32,
      shoulder: 18,
      sleeve: 25,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      chest: 36,
      waist: 28,
      hips: 38,
      inseam: 30,
      shoulder: 16,
      sleeve: 23,
      lastUpdated: '2024-01-16'
    }
  ]);

  return (
    <div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Measurements</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Measurements
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {measurements.map((measurement) => (
            <div key={measurement.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{measurement.customerName}</h3>
                <span className="text-sm text-gray-500">
                  Last updated: {measurement.lastUpdated}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Chest</p>
                  <p className="font-medium">{measurement.chest}"</p>
                </div>
                <div>
                  <p className="text-gray-600">Waist</p>
                  <p className="font-medium">{measurement.waist}"</p>
                </div>
                <div>
                  <p className="text-gray-600">Hips</p>
                  <p className="font-medium">{measurement.hips}"</p>
                </div>
                <div>
                  <p className="text-gray-600">Inseam</p>
                  <p className="font-medium">{measurement.inseam}"</p>
                </div>
                <div>
                  <p className="text-gray-600">Shoulder</p>
                  <p className="font-medium">{measurement.shoulder}"</p>
                </div>
                <div>
                  <p className="text-gray-600">Sleeve</p>
                  <p className="font-medium">{measurement.sleeve}"</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Measurements;
