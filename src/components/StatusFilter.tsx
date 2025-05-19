type StatusFilter = 'All' | 'Active' | 'Pending' | 'Inactive';

interface StatusFilterProps {
  value: StatusFilter;
  onChange: (value: StatusFilter) => void;
}

const options: StatusFilter[] = ['All', 'Active', 'Pending', 'Inactive'];

export default function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div className='flex flex-wrap gap-2 items-center'>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
            ${
              value === option
                ? 'bg-gray-800 text-white shadow-sm'
                : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
