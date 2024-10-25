import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', data1: 20, data2: 30, data3: 10 },
  { name: 'Feb', data1: 25, data2: 35, data3: 15 },
  { name: 'Mar', data1: 30, data2: 40, data3: 20 },
  { name: 'Apr', data1: 35, data2: 45, data3: 25 },
  { name: 'May', data1: 40, data2: 50, data3: 30 },
  { name: 'Jun', data1: 45, data2: 55, data3: 35 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Analytics Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
          <p className="text-2xl font-semibold mt-2">32.8%</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32.8%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Average Response Time</h3>
          <p className="text-2xl font-semibold mt-2">2.4 hours</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Customer Satisfaction</h3>
          <p className="text-2xl font-semibold mt-2">4.8/5.0</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="data1" stroke="#8884d8" name="Sales" />
              <Line type="monotone" dataKey="data2" stroke="#82ca9d" name="Leads" />
              <Line type="monotone" dataKey="data3" stroke="#ffc658" name="Conversions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;