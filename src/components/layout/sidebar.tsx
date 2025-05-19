import { FaChartBar, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { NavItem } from './NavItem';
import { Settings } from 'lucide-react';
import { useEffect } from 'react';
import clsx from 'clsx';

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Sidebar({ mobileMenuOpen, setMobileMenuOpen }: SidebarProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setMobileMenuOpen]);

  return (
    <div
      className={clsx(
        'fixed sm:relative top-0 left-0 z-40 bg-gray-800 text-white w-64 h-full p-4 transition-transform duration-300 ease-in-out',
        {
          'translate-x-0': mobileMenuOpen,
          '-translate-x-full sm:translate-x-0': !mobileMenuOpen,
        }
      )}
    >
      <h2 className='text-2xl font-bold mb-6'>Admin Panel</h2>
      <nav className='space-y-2 py-4'>
        <NavItem to='/dashboard' icon={<FaTachometerAlt />} onClick={() => setMobileMenuOpen(false)}>
          Dashboard
        </NavItem>
        <NavItem to='/users' icon={<FaUsers />} onClick={() => setMobileMenuOpen(false)}>
          Users
        </NavItem>
        <NavItem to='/reports' icon={<FaChartBar />} onClick={() => setMobileMenuOpen(false)}>
          Reports
        </NavItem>
        <NavItem to='/settings' icon={<Settings />} onClick={() => setMobileMenuOpen(false)}>
          Settings
        </NavItem>
      </nav>
    </div>
  );
}
