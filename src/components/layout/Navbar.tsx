import { FaBars, FaUserCircle, FaBell } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown';
import ThemeToggle from '../ThemeToggle';

interface NavbarProps {
  onLogout: () => void;
  onMenuToggle: () => void;
}

export function Navbar({ onLogout, onMenuToggle }: NavbarProps) {
  return (
    <header className='bg-white shadow p-4 flex justify-between items-center relative z-50'>
      {/* Hamburger for mobile */}
      <button
        className='sm:hidden text-gray-700 text-2xl focus:outline-none'
        onClick={onMenuToggle}
        aria-label='Toggle menu'
      >
        <FaBars />
      </button>

      <h1 className='hidden sm:block text-xl font-semibold'>Admin Dashboard</h1>
      <div className='flex items-center space-x-4'>
        <ThemeToggle />
        <FaBell className='text-gray-600 text-xl cursor-pointer' />
        <Dropdown button={<FaUserCircle className='text-gray-600 text-2xl cursor-pointer' />} align='right'>
          <button className='block w-full text-left px-4 py-2 text-gray-700 hover:shadow-md'>My Profile</button>
          <button className='block w-full text-left px-4 py-2 text-gray-700 hover:shadow-md'>
            <NavLink to='/settings'>Settings</NavLink>
          </button>
          <button className='block w-full text-left px-4 py-2 text-red-600 hover:shadow-md' onClick={onLogout}>
            Logout
          </button>
        </Dropdown>
      </div>
    </header>
  );
}
