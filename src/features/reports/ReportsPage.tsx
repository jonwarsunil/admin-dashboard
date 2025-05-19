'use client';

import { User, UserX, TrendingUp } from 'lucide-react';
import StatCard from '../../components/StatCard';
import UserGrowthChart from '../../components/UserGrowthChart';

export default function Reports() {
  return (
    <main className='p-4 space-y-8'>
      <h1 className='text-2xl font-bold text-gray-800'>📊 Reports & Analytics</h1>

      {/* Stat Cards */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <StatCard title='Total Users' value={120} icon={<User />} />
        <StatCard title='Active Users' value={85} icon={<User />} bgColor='bg-green-50' />
        <StatCard title='Inactive Users' value={35} icon={<UserX />} bgColor='bg-red-50' />
        <StatCard title='Growth Rate' value='12%' icon={<TrendingUp />} bgColor='bg-blue-50' />
      </section>

      {/* Chart Section */}
      <section>
        <UserGrowthChart />
      </section>
    </main>
  );
}
