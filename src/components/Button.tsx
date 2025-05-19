interface ButtonProps {
  value: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({ value, type = 'button', className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 ${className}`}
    >
      {value}
    </button>
  );
}
