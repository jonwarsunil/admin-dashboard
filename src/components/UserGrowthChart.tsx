'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 30 },
  { month: 'Feb', users: 50 },
  { month: 'Mar', users: 80 },
  { month: 'Apr', users: 65 },
  { month: 'May', users: 90 },
  { month: 'Jun', users: 120 },
];

export default function UserGrowthChart() {
  return (
    <div className='bg-white rounded-2xl p-4 shadow-md'>
      <h2 className='text-lg font-semibold text-gray-700 mb-4'>📈 User Growth (Last 6 Months)</h2>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='users' stroke='#3b82f6' strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
