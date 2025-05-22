'use client';

import Button from './Button';

interface BlogCardProps {
  id: number;
  title: string;
  body: string;
  type?: string;
  createdAt?: string;
  onDelete?: (id: number) => void;
}

export default function BlogCard({ id, title, body, type, createdAt, onDelete }: BlogCardProps) {
  const isLocal = !createdAt || new Date(createdAt).getFullYear() >= 2023;

  return (
    <div className='bg-white rounded-2xl shadow-md border border-gray-200 p-6 transition-all hover:shadow-lg hover:border-gray-500 relative'>
      <div className='mb-2 flex justify-between items-start'>
        <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
        {type && (
          <span className='text-xs px-2 py-1 bg-blue-100 text-gray-700 rounded-full font-medium whitespace-nowrap'>
            {type}
          </span>
        )}
      </div>

      <p className='text-sm text-gray-500 mb-4'>
        {createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown date'}
      </p>

      <p className='text-gray-700 text-sm leading-relaxed '>{body.length > 120 ? `${body.slice(0, 120)}...` : body}</p>
      {isLocal && onDelete && <Button onClick={() => onDelete(id)} className='mt-4' value='Delete'></Button>}
    </div>
  );
}
