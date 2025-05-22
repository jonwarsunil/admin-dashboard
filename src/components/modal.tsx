import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-5 text-gray-600 hover:text-red-500 text-2xl font-bold cursor-pointer'
        >
          X
        </button>
        {title && <h2 className='text-xl font-semibold mb-4'>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
