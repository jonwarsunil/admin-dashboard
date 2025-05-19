import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

function SignIn({ onSignIn }: { onSignIn: () => void }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSignIn();
      navigate('/');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-300 p-4'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6 transition-all duration-300'
      >
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>Welcome Back</h2>
          <p className='text-sm text-gray-500 mt-1'>Sign in to continue</p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
          <Input type='email' placeholder='you@example.com' value={email} onChange={setEmail} required />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
          <Input type='password' placeholder='Password' value={password} onChange={setPassword} required />
        </div>
        <Button type='submit' value='Sign In' />
        <p className='text-sm text-center text-gray-500'>
          Don’t have an account? <span className='text-blue-600 hover:underline'>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
