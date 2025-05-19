import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export function NavItem({ to, icon, children, onClick }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-2 rounded transition-colors ${
          isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
        }`
      }
    >
      <span>{icon}</span>
      <span>{children}</span>
    </NavLink>
  );
}
