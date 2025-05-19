import { Moon } from 'lucide-react';

export default function ThemeToggle() {
  return (
    <button
      onClick={() => {}}
      className='cursor-pointer p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
      aria-label='Toggle Dark Mode'
    >
      {/* { === 'dark' ? <Moon className='w-5 h-5 text-gray-700' /> : <Sun className='w-5 h-5 text-yellow-400' />} */}
      <Moon className='w-5 h-5 text-gray-700' />
    </button>
  );
}
