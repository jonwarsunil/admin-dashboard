import type { User } from '../types/user';

export interface DataTableProps {
  data: User[];
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className='space-y-4 w-full max-w-full mx-auto'>
      <div className='min-w-[900px] w-full rounded-xl shadow-lg bg-white dark:bg-gray-900 transition-all duration-300'>
        <table className='w-full text-sm text-gray-700 dark:text-gray-300'>
          <thead className='bg-gray-300 dark:bg-gray-800 text-left'>
            <tr>
              <th className='px-3 py-3 lg:px-6 lg:py-4 font-semibold text-gray-800 dark:text-gray-200'>Name</th>
              <th className='px-3 py-3 lg:px-6 lg:py-4 font-semibold text-gray-800 dark:text-gray-200'>Email</th>
              <th className='px-3 py-3 lg:px-6 lg:py-4 font-semibold text-gray-800 dark:text-gray-200'>Phone</th>
              <th className='px-3 py-3 lg:px-6 lg:py-4 font-semibold text-gray-800 dark:text-gray-200'>Website</th>
              <th className='px-3 py-3 lg:px-6 lg:py-4 font-semibold text-gray-800 dark:text-gray-200'>Address</th>
              <th className='px-3 py-3 lg:px-6 lg:py-4 font-semibold text-gray-800 dark:text-gray-200'>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(user => (
              <tr key={user.id} className='hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200'>
                <td className='px-3 py-3 lg:px-6 lg:py-4 font-medium'>{user.name}</td>
                <td className='px-3 py-3 lg:px-6 lg:py-4'>{user.email}</td>
                <td className='px-3 py-3 lg:px-6 lg:py-4'>{user.phone}</td>
                <td className='px-3 py-3 lg:px-6 lg:py-4'>
                  <a
                    href={`https://${user.website}`}
                    className='text-blue-600 dark:text-blue-400 underline hover:opacity-80'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {user.website}
                  </a>
                </td>
                <td>{JSON.stringify(user.address)}</td>
                <td className='p-3'>
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      user.status === 'Active'
                        ? 'bg-green-500'
                        : user.status === 'Pending'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
