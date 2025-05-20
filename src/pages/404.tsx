// src/pages/404.tsx
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-5xl font-bold mb-4'>404</h1>
      <p className='text-xl mb-6'>Page Not Found</p>
      <NavLink to='/'>
        <Button value='Go Back' className='text-blue-500 hover:underline' />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
