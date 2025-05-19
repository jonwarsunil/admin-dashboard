interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  bgColor?: string;
}

export default function StatCard({ title, value, icon, bgColor = 'bg-white' }: StatCardProps) {
  return (
    <div className={`p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out ${bgColor}`}>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <p className='text-sm text-gray-500'>{title}</p>
          <p className='text-2xl font-bold text-gray-800'>{value}</p>
        </div>
        {icon && <div className='text-3xl text-gray-400'>{icon}</div>}
      </div>
    </div>
  );
}
