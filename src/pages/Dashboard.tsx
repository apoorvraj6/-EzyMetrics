import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const barData = [
  { name: 'Lettuce', value: 400 },
  { name: 'Tomatoes', value: 300 },
  { name: 'Beets', value: 350 },
  { name: 'Corn', value: 280 },
  { name: 'Adirondack', value: 240 },
];

const pieData = [
  { name: 'Sales', value: 400 },
  { name: 'Marketing', value: 300 },
  { name: 'Operations', value: 300 },
  { name: 'Support', value: 200 },
];

const lineData = [
  { month: 'Jan', revenue: 4000, users: 2400, deals: 1800 },
  { month: 'Feb', revenue: 3000, users: 1398, deals: 2100 },
  { month: 'Mar', revenue: 2000, users: 9800, deals: 2800 },
  { month: 'Apr', revenue: 2780, users: 3908, deals: 3200 },
  { month: 'May', revenue: 1890, users: 4800, deals: 3500 },
  { month: 'Jun', revenue: 2390, users: 3800, deals: 4000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Leads</h3>
          <p className="text-2xl font-semibold mt-2">2,543</p>
          <span className="text-green-500 text-sm">+12.5% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
          <p className="text-2xl font-semibold mt-2">32.8%</p>
          <span className="text-red-500 text-sm">-2.3% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Average Deal Size</h3>
          <p className="text-2xl font-semibold mt-2">$8,450</p>
          <span className="text-green-500 text-sm">+5.2% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
          <p className="text-2xl font-semibold mt-2">$567,890</p>
          <span className="text-green-500 text-sm">+15.7% from last month</span>
        </div>
      </div>

      {/* Historical Trends */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Historical Trends</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" name="Active Users" />
              <Line type="monotone" dataKey="deals" stroke="#ffc658" name="Closed Deals" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#ffa500" />
                
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Revenue Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;