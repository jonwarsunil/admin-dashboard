import StatCard from '../../components/StatCard';
import { useUsers } from '../../hooks/useUser';
import { User } from 'lucide-react';

export default function DashboardSummary() {
  const { data: users = [], error } = useUsers();

  if (error) return <p className='text-red-500'>{error}</p>;

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === 'Active').length;
  const pendingRequests = users.filter(user => user.status === 'Inactive').length;

  const cards = [
    { title: 'Total Users', value: totalUsers },
    { title: 'Active Users', value: activeUsers },
    { title: 'Pending Requests', value: pendingRequests },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6'>
      {cards.map(({ title, value }, index) => (
        <StatCard
          key={title}
          title={title}
          value={value}
          icon={<User />}
          bgColor={`${index == 1 ? 'bg-green-50' : 'bg-blue-50'}`}
        />
      ))}
    </div>
  );
}
