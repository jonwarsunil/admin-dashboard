import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className='relative w-full sm:max-w-xs'>
      <span className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400'>
        <Search className='w-5 h-5' />
      </span>
      <input
        type='text'
        placeholder='Search by name or email...'
        value={value}
        onChange={e => onChange(e.target.value)}
        className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500  transition duration-200'
      />
    </div>
  );
}
