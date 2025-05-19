import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

const Dropdown: React.FC<DropdownProps> = ({ button, children, align = 'left' }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className='inline-flex justify-center items-center rounded-md shadow-sm px-2 py-2 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
        aria-haspopup='true'
        aria-expanded={open}
      >
        {button}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute px-5 py-4 mt-2 w-52 bg-white rounded-md shadow-lg z-10 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
