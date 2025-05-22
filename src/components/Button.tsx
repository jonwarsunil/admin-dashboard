interface ButtonProps {
  value: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: any;
}

export default function Button({ value, type = 'button', className = '', onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-gray-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
